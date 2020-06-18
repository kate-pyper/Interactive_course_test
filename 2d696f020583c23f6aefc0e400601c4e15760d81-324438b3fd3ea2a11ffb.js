(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1u1D":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Making a start with R","description":"This resource is intended for the use of students doing the MSc in Actuarial Science at the University of Strathclyde. It has been designed to introduce you to the core concepts to mak the transition to using R easier.","bio":"I\'m Kate Pyper, a teaching assistant at the University of Strathclyde.","showProfileImage":true,"footerLinks":[{"text":"Source Code","url":"https://github.com/kate-pyper/Interactive_course_test"},{"text":"Built with ♥","url":"https://github.com/ines/course-starter-r"}]}}}}')},"6IXZ":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Making a start with R","description":"This resource is intended for the use of students doing the MSc in Actuarial Science at the University of Strathclyde. It has been designed to introduce you to the core concepts to mak the transition to using R easier.","slogan":"Making a start with R","siteUrl":"https://kate-pyper.github.io/interactive_course_test","twitter":"kate_pyper","fonts":"IBM+Plex+Mono:500|IBM+Plex+Sans:700|Lato:400,400i,700,700i"}}}}')},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=e(l.map((function(e){return e.props}))),T.canUseDOM?t(s):n&&(s=n(s))}var T=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(T,"canUseDOM",u),T}}},"8/mA":function(e,t,n){e.exports={root:"aadc70ef",content:"_3c75788a",logo:"_091ac83a",header:"b28d2d29",title:"_127e64db",footer:"_4078d6c8",footerContent:"_5c62dc08",footerSection:"c1fd1dd4",footerLinks:"cca74c21",footerLink:"_62445ce3",profile:"_5341b013"}},"8TZf":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return T}));var r=n("q1tI"),a=n.n(r),o=n("TTCk"),i=n.n(o),c=function(e){var t=e.children;return a.a.createElement("h3",{className:i.a.h3},t)},u=function(){return a.a.createElement("hr",{className:i.a.hr})},s=function(e){var t=e.children;return a.a.createElement("code",{className:i.a.code},t)},l=function(e){var t=e.children;return a.a.createElement("ol",{className:i.a.ol},t)},f=function(e){var t=e.children;return a.a.createElement("ul",{className:i.a.ul},t)},T=function(e){var t=e.children;return a.a.createElement("li",{className:i.a.li},t)}},Aw06:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("TSYQ"),c=n.n(i),u=n("WtSO"),s=n.n(u);var l=function(e){var t,n=e.children,r=e.to,i=e.href,u=e.onClick,l=e.variant,f=e.hidden,T=e.className,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","to","href","onClick","variant","hidden","className"]),p=r||i,E=/(http(s?)):\/\//gi.test(p),A=c()(s.a.root,T,((t={})[s.a.hidden]=f,t[s.a.secondary]="secondary"===l,t));return E?a.a.createElement("a",Object.assign({href:p,className:A,target:"_blank",rel:"noopener nofollow noreferrer"},d),n):p&&/^#/.test(p)||u?a.a.createElement("a",{href:p,onClick:u,className:A},n):a.a.createElement(o.Link,Object.assign({to:p,className:A},d),n)}},Bl7J:function(e,t,n){"use strict";var r=n("1u1D"),a=n("q1tI"),o=n.n(a),i=n("Wbzz"),c=n("6IXZ"),u=n("TJpk"),s=n.n(u),l=function(e){var t=e.title,n=e.description;return o.a.createElement(i.StaticQuery,{query:f,render:function(e){var r=e.site.siteMetadata,a=t?t+" · "+r.title:r.title+" · "+r.slogan,i=n||r.description,c=r.siteUrl+"/social.jpg",u=[{name:"description",content:i},{property:"og:title",content:a},{property:"og:description",content:i},{property:"og:type",content:"website"},{property:"og:site_name",content:r.title},{property:"og:image",content:c},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:c},{name:"twitter:creator",content:"@"+r.twitter},{name:"twitter:site",content:"@"+r.twitter},{name:"twitter:title",content:a},{name:"twitter:description",content:i}];return o.a.createElement(s.a,{defer:!1,htmlAttributes:{lang:"en"},title:a,meta:u},r.fonts&&o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+r.fonts,rel:"stylesheet"}))},data:c})},f="4240431937",T=n("Aw06"),d=n("8TZf"),p=n("tU3Z"),E=n.n(p),A=(n("a+XO"),n("8/mA")),h=n.n(A);t.a=function(e){var t=e.isHome,n=e.title,a=e.description,c=e.children;return o.a.createElement(i.StaticQuery,{query:"1771538597",render:function(e){var r=e.site.siteMetadata;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,{title:n,description:a}),o.a.createElement("main",{className:h.a.root},!t&&o.a.createElement("h1",{className:h.a.logo},o.a.createElement(T.a,{hidden:!0,to:"/"},o.a.createElement(E.a,{width:150,height:54,"aria-label":r.title}))),o.a.createElement("div",{className:h.a.content},(n||a)&&o.a.createElement("header",{className:h.a.header},n&&o.a.createElement("h1",{className:h.a.title},n),a&&o.a.createElement("p",{className:h.a.description},a)),c),o.a.createElement("footer",{className:h.a.footer},o.a.createElement("div",{className:h.a.footerContent},o.a.createElement("section",{className:h.a.footerSection},o.a.createElement(d.a,null,"About this course"),o.a.createElement("p",null,r.description)),o.a.createElement("section",{className:h.a.footerSection},o.a.createElement(d.a,null,"About me"),r.showProfileImage&&o.a.createElement("img",{src:"/profile.jpg",alt:"",className:h.a.profile}),o.a.createElement("p",null,r.bio)),r.footerLinks&&o.a.createElement("ul",{className:h.a.footerLinks},r.footerLinks.map((function(e,t){var n=e.text,r=e.url;return o.a.createElement("li",{key:t,className:h.a.footerLink},o.a.createElement(T.a,{variant:"secondary",to:r},n))})))))))},data:r})}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var s=o[u];if(!c(s))return!1;var l=e[s],f=t[s];if(!1===(a=n?n.call(r,l,f,s):void 0)||void 0===a&&l!==f)return!1}return!0}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),u=f(n("bmMU")),s=n("v1p5"),l=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,A,h,m=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(E=m,h=A=function(e){function t(){return d(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case l.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=T(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(o.default.Component),A.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=E.peek,A.rewind=function(){var e=E.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},TTCk:function(e,t,n){e.exports={h3:"_5544e0da",hr:"_89e3602a",ul:"_49e91476",ol:"dd3b2530",li:"_41b2400b",code:"_5a563362"}},WtSO:function(e,t,n){e.exports={root:"_82b4aebf",secondary:"a38ccc67",hidden:"a07adcb3"}},"a+XO":function(e,t,n){},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,l=r(t),f=r(n);if(l&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=f)return!1;var T=t instanceof Date,d=n instanceof Date;if(T!=d)return!1;if(T&&d)return t.getTime()==n.getTime();var p=t instanceof RegExp,E=n instanceof RegExp;if(p!=E)return!1;if(p&&E)return t.toString()==n.toString();var A=a(t);if((u=A.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,A[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=A[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},tU3Z:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M129.4 159.4l-29.8 2.1 5.1-49.3-29.8 49.5-19.6 1.3-20.1-47.3-5.3 50.7L0 168.5 12.3 51.4l25.4-1.8 30.7 68.6 45.5-73.9 27.9-2zM219.6 110.5l-5 43-29.8 2 4.9-42.9-36.2-71.1 33.4-2.3 19 42.6 29.4-46 35.7-2.5zM410.3 34.1c10.2 7.5 15.9 18 17.1 31.8l-30.9 4.5c-2.1-14-10.6-20.3-23.4-19.4a31.9 31.9 0 0 0-22.7 11.2c-5.9 6.8-9.1 15.6-9.8 26-1.5 20.5 9.3 30.9 25.2 29.8s24.8-9.3 28.7-23.7l31 1.2a60.8 60.8 0 0 1-20.6 34.2 62.1 62.1 0 0 1-36.8 14.7c-18.2 1.3-32.7-3.3-43.5-13.6s-15.4-25-14.1-43.9 7.7-32.5 19.2-43.7 25.8-17.5 42.9-18.7c15-1.1 27.7 2.1 37.7 9.6zM544.7 29.5c11.4 10.6 17 25 16.2 43.3s-6.6 32.2-17.8 43.5-25.4 17.7-42.9 18.9-33.7-3.2-45.1-13.8-17-25.1-16.3-43.4 6.6-32.2 17.8-43.5 25.7-17.7 43.1-18.9 33.5 3.4 45 13.9zm-75.6 49.8c.1 19.7 11.6 30.7 29.5 29.4 19.8-1.3 32.2-15.9 32.1-37.2-.1-19.7-11.6-30.7-29.6-29.4-19.8 1.3-32.1 15.9-32 37.2zM680.8 20c11.4 10.6 16.9 24.9 16.2 43.3s-6.6 32.2-17.8 43.5-25.5 17.7-43 18.9-33.6-3.3-45-13.8-17-25.1-16.3-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 45 13.9zm-75.7 49.7c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32.1-37.2-.2-19.7-11.7-30.7-29.6-29.5-19.8 1.4-32.1 16-32.1 37.2zM737.7 90.3l45.9-3.2-2.7 26.8-75.8 5.3L717.4 2.1 747.3 0zM119.8 240.9c10.1 7.5 15.8 18 17.1 31.7l-30.9 4.5c-2.1-14-10.6-20.2-23.4-19.3A31.6 31.6 0 0 0 59.9 269c-5.9 6.8-9.2 15.6-9.9 26-1.5 20.5 9.3 30.9 25.3 29.8s24.8-9.4 28.6-23.8l31 1.3c-3.2 14-10 25.4-20.6 34.2a63.1 63.1 0 0 1-36.7 14.7c-18.3 1.3-32.7-3.3-43.5-13.6s-15.5-25-14.1-43.9 7.6-32.5 19.1-43.8 25.8-17.5 43-18.7c15-1 27.6 2.2 37.7 9.7zM254.1 236.3c11.5 10.5 17 24.9 16.3 43.3s-6.6 32.2-17.8 43.5-25.5 17.6-43 18.9-33.6-3.3-45.1-13.8-16.9-25.1-16.2-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 44.9 13.9zM178.5 286c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32-37.2-.1-19.7-11.6-30.7-29.5-29.5-19.8 1.4-32.2 16-32.1 37.2zM396.7 211l-7 68.2c-3.8 32.4-23.1 51.8-54.5 54-16.2 1.1-28.8-2.7-37.5-11.4s-12-21.2-10.2-37.3l6.9-66.4 29.8-2.1-7.3 67.3c-1.6 16.5 4.5 24.3 18.4 23.3s23-10 24.7-27l6.9-66.6zM477.6 278.9l18.1 41.4-31.2 2.1-16.3-37.7-14.4 1-4.1 39.2-29.8 2.1 12.3-117.1 48.2-3.4c11.9-.8 21.6 2.2 28.8 9.2s10.5 16.6 9.6 29c-1.8 16.6-8.9 27.9-21.2 34.2zm-41-19.9l18.8-1.3c7.5-.6 12.3-5.1 13.1-13.2s-3.1-11.8-10.4-11.3l-18.9 1.4zM595.8 205.6c8.1 6.1 11.8 14.8 11 26.1l-30.3 3.4c.5-8-3.5-12.2-11.4-11.7s-14 5.2-14.6 11.9 2.9 7.9 16.8 10.5 22.9 6 29.3 11 9.6 12.4 8.9 22.5c-2 24.7-21.3 36.9-44.1 38.1-15 1-26.7-1.6-35.4-7.8s-12.4-15.6-11.4-27.8l30.4-3.2c-.6 8.7 5 13.6 14.4 13s15.3-4.5 15.6-11.2-4.9-9-16.8-11.1-19.7-4.4-27.5-9-11.5-12.9-10.6-24.3a38.9 38.9 0 0 1 12.2-26.1c7.4-7.2 17.7-11.4 30.7-12.3s24.8 1.7 32.8 8zM699.8 216.3l-46 3.2-1.8 17.6 39.4-2.8-2.8 26.2-39.5 2.7-2 19.9 46.2-3.2-2.9 26.7-75.9 5.4 12.3-117.1 75.8-5.3z"}))}a.defaultProps={width:"783.6",height:"351.4",viewBox:"0 0 783.6 351.4"},e.exports=a,a.default=a},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("MgzW")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,c.TAG_NAMES.TITLE),n=A(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},E=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],s=u.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var s=o[u],l=(0,i.default)({},a[s],r[s]);a[s]=l}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),m=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,T=e.title,d=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,a),M(T,d);var p={baseTag:O(c.TAG_NAMES.BASE,n),linkTags:O(c.TAG_NAMES.LINK,o),metaTags:O(c.TAG_NAMES.META,i),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,l),styleTags:O(c.TAG_NAMES.STYLE,f)},E={},A={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(A[e]=p[e].oldTags)})),t&&t(),s(e,E,A)},g=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var s=i[u],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var T=o.length-1;T>=0;T--)n.removeAttribute(o[T]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=N(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),o=g(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+l(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&S(b),e.defer?b=y((function(){v(e,(function(){b=null}))})):(v(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,T=void 0===f?"":f,d=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,a,r),link:I(c.TAG_NAMES.LINK,o,r),meta:I(c.TAG_NAMES.META,i,r),noscript:I(c.TAG_NAMES.NOSCRIPT,u,r),script:I(c.TAG_NAMES.SCRIPT,s,r),style:I(c.TAG_NAMES.STYLE,l,r),title:I(c.TAG_NAMES.TITLE,{title:T,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:p([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:A(e,c.HELMET_PROPS.DEFER),encode:A(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=_}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=2d696f020583c23f6aefc0e400601c4e15760d81-324438b3fd3ea2a11ffb.js.map