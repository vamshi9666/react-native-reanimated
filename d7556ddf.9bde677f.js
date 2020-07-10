(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),i=(n(0),n(268)),o={id:"useAnimatedGestureHandler",title:"useAnimatedGestureHandler",sidebar_label:"useAnimatedGestureHandler"},s={id:"api/useAnimatedGestureHandler",title:"useAnimatedGestureHandler",description:"This hook allows for defining worklet handlers that can serve in a process of handling gestures.",source:"@site/docs/api/useAnimatedGestureHandler.md",permalink:"/react-native-reanimated/docs/next/api/useAnimatedGestureHandler",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/api/useAnimatedGestureHandler.md",version:"next",sidebar_label:"useAnimatedGestureHandler",sidebar:"docs",previous:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/next/api/useAnimatedScrollHandler"},next:{title:"withTiming",permalink:"/react-native-reanimated/docs/next/api/withTiming"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This hook allows for defining worklet handlers that can serve in a process of handling gestures."),Object(i.b)("p",null,"Before you can use the hook, make sure that you have ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started.html#installation"}),"installed and configured")," with your project."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"gesturehandlers-object-with-worklets"},Object(i.b)("inlineCode",{parentName:"h4"},"gestureHandlers")," ","[object with worklets]"),Object(i.b)("p",null,"The first and only argument to this hook is an object that can carry one or more worklet handlers.\nThe handlers can be set under the following keys: ",Object(i.b)("inlineCode",{parentName:"p"},"onStart"),", ",Object(i.b)("inlineCode",{parentName:"p"},"onActive"),", ",Object(i.b)("inlineCode",{parentName:"p"},"onEnd"),", ",Object(i.b)("inlineCode",{parentName:"p"},"onFail"),", ",Object(i.b)("inlineCode",{parentName:"p"},"onCancel"),", ",Object(i.b)("inlineCode",{parentName:"p"},"onFinish"),"."),Object(i.b)("p",null,"Read more about gesture handling states in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/state.html"}),"Gesture Handler library documentation"),".\nEach of the specified handlers will be triggered depending on the current state of the attached Gesture Handler.\nThe handler worklet will receive the following arguments:"),Object(i.b)("h5",{id:"event-object"},Object(i.b)("inlineCode",{parentName:"h5"},"event")," ","[object]"),Object(i.b)("p",null,"Event object carrying the event payload.\nThe payload will be different depending on the type of the Gesture Handler to which the worklet is attached (",Object(i.b)("inlineCode",{parentName:"p"},"PanGestureHandler"),", ",Object(i.b)("inlineCode",{parentName:"p"},"RotationGestureHandler"),", etc.).\nPlease check the documentation section on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started.html"}),"selected handler type")," to learn about the event structure."),Object(i.b)("h5",{id:"context-object"},Object(i.b)("inlineCode",{parentName:"h5"},"context")," ","[object]"),Object(i.b)("p",null,"A plain JS object that can be used to store some state.\nThis object will persist in between events and across worklet handlers for all the selected states and you can read and write any data to it."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"The hook returns a handler object that can be attached to one of the gesture handler components provided by the ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," library.\nThe handler should be passed under ",Object(i.b)("inlineCode",{parentName:"p"},"onGestureEvent")," parameter regardless of what gesture states we are interested in processing."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"In the below example we use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/handler-pan.html"}),Object(i.b)("inlineCode",{parentName:"a"},"PanGestureHandler"))," to register for pan gesture events performed on the rendered View.\nWe attach three handler worklets that are going to be triggered when the gesture starts, when it is active and the user is panning, and when the gesture is over.\nWe create a shared value ",Object(i.b)("inlineCode",{parentName:"p"},"x")," that will correspond to the x-translation of the box.\nIn ",Object(i.b)("inlineCode",{parentName:"p"},"onStart")," handler worklet we use ",Object(i.b)("inlineCode",{parentName:"p"},"context")," to save the current value of ",Object(i.b)("inlineCode",{parentName:"p"},"x")," and therefore remember the place at which the gesture started.\nWhen the user is panning, in ",Object(i.b)("inlineCode",{parentName:"p"},"onActive")," handler we update the translation by taking the starting point remembered in ",Object(i.b)("inlineCode",{parentName:"p"},"context")," object and adding the translation that is coming from the gesture.\nFinally, in ",Object(i.b)("inlineCode",{parentName:"p"},"onEnd")," handler we initiate an animation that'd make the box return to the initial point."),Object(i.b)("p",null,"Thanks to the ",Object(i.b)("inlineCode",{parentName:"p"},"context")," object, where we remember the initial position, the interaction can be made interruptible.\nThat is, we can continue the gesture from the place where we pick up the box, regardless of whether it is in the middle of animating back to the initial point."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: _ => {\n      x.value = withSpring(0);\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);