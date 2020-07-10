(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),i=(n(0),n(268)),o={id:"useAnimatedStyle",title:"useAnimatedStyle",sidebar_label:"useAnimatedStyle"},s={id:"version-2.0.0-alpha/api/useAnimatedStyle",title:"useAnimatedStyle",description:"This hook is one of the main elements of the new Reanimated v2 API.",source:"@site/versioned_docs/version-2.0.0-alpha/api/useAnimatedStyle.md",permalink:"/react-native-reanimated/docs/api/useAnimatedStyle",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-alpha/api/useAnimatedStyle.md",version:"2.0.0-alpha",sidebar_label:"useAnimatedStyle",sidebar:"version-2.0.0-alpha/docs",previous:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/api/useSharedValue"},next:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/api/useDerivedValue"}},l=[{value:"Example",id:"example",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This hook is one of the main elements of the new Reanimated v2 API.\nIt allows for creating an association between shared values and View properties.\nThe hook takes a single worklet (it is not necessary to add ",Object(i.b)("inlineCode",{parentName:"p"},"worklet")," directive here, because the method will be converted to worklet automatically).\nThe provided worklet is responsible for returning a object with view style properties."),Object(i.b)("p",null,"For the list of available properties you can refer to the React Native core documentation on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view-style-props"}),"View Style Props"),". You may also want to check React Native\u2019s ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/style"}),"guide on styling views"),"."),Object(i.b)("p",null,"In order to connect the animated style hook result, you need to pass it as one of the ",Object(i.b)("inlineCode",{parentName:"p"},"style")," properties to the ",Object(i.b)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.View"),").\nIn React Native, View\u2019s ",Object(i.b)("inlineCode",{parentName:"p"},"style")," property can take an array of styles, which gives you a way to mix static and dynamic styles.\nWe recommend that you defined static styles using React Native\u2019s ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/stylesheet"}),Object(i.b)("inlineCode",{parentName:"a"},"StyleSheet")," API")," and pass them along the animated styles object returned by this hook.\nIt is more efficient to only keep styles that are actually changed as a result of animation in the animated style hook, and the rest of the styles should be either provided as inline objects or using StyleSheets."),Object(i.b)("p",null,"If the style worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{12-16}","{12-16}":!0}),"import { StyleSheet } from 'react-native';\nimport {\n  Animated,\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      width: width.value,\n    };\n  });\n\n  // attach animated style to a View using style property\n  return <Animated.View style={[styles.box, animatedStyle]} />;\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 50,\n    backgroundColor: 'blue',\n  },\n});\n")),Object(i.b)("p",null,"In the above example, the used shared value is not changing, hence there is no real benefit of using an animated style there.\nCheck out the documentation of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"useSharedValue"}),Object(i.b)("inlineCode",{parentName:"a"},"useSharedValue"))," to learn how shared values can be updated."))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);