#pragma once

#include <fbjni/fbjni.h>
#include <jsi/jsi.h>
#include <react/jni/CxxModuleWrapper.h>
#include <react/jni/JMessageQueueThread.h>
#include <react/jni/WritableNativeMap.h>
#include <memory>
#include <unordered_map>

#include "Scheduler.h"
#include "AndroidScheduler.h"

namespace reanimated {

using namespace facebook;

class AnimationFrameCallback : public HybridClass<AnimationFrameCallback> {
 public:
  static auto constexpr kJavaDescriptor =
      "Lcom/swmansion/reanimated/NativeProxy$AnimationFrameCallback;";

  void onAnimationFrame(double timestampMs) {
    callback_(timestampMs);
  }

  static void registerNatives() {
    javaClassStatic()->registerNatives({
        makeNativeMethod("onAnimationFrame", AnimationFrameCallback::onAnimationFrame),
    });
  }

 private:
  friend HybridBase;

  AnimationFrameCallback(std::function<void(double)> callback)
      : callback_(std::move(callback)) {}

  std::function<void(double)> callback_;
};


class EventHandler : public HybridClass<EventHandler> {
 public:
  static auto constexpr kJavaDescriptor =
      "Lcom/swmansion/reanimated/NativeProxy$EventHandler;";

  void receiveEvent(
     jni::alias_ref<JString> eventKey,
     jni::alias_ref<react::WritableMap> event) {
     std::string eventAsString = "{NativeMap:null}";
     if (event != nullptr) {
        eventAsString = event->toString();
     }
    handler_(eventKey->toString(), eventAsString);
  }

  static void registerNatives() {
    javaClassStatic()->registerNatives({
        makeNativeMethod("receiveEvent", EventHandler::receiveEvent),
    });
  }

 private:
  friend HybridBase;

  EventHandler(std::function<void(std::string,std::string)> handler)
      : handler_(std::move(handler)) {}

  std::function<void(std::string,std::string)> handler_;
};


class NativeProxy : public jni::HybridClass<NativeProxy> {
 public:
  static auto constexpr kJavaDescriptor =
      "Lcom/swmansion/reanimated/NativeProxy;";
  static jni::local_ref<jhybriddata> initHybrid(
        jni::alias_ref<jhybridobject> jThis,
        jlong jsContext,
        jni::alias_ref<AndroidScheduler::javaobject> scheduler);
  static void registerNatives();


 private:
  friend HybridBase;
  jni::global_ref<NativeProxy::javaobject> javaPart_;
  jsi::Runtime *runtime_;
  std::shared_ptr<Scheduler> scheduler_;

  void installJSIBindings();
  void requestRender(std::function<void(double)> onRender);
  void registerEventHandler(std::function<void(std::string,std::string)> handler);
  void updateProps(jsi::Runtime &rt, int viewTag, const jsi::Object &props);

  explicit NativeProxy(
      jni::alias_ref<NativeProxy::jhybridobject> jThis,
      jsi::Runtime *rt,
      std::shared_ptr<Scheduler> scheduler);
};




}
