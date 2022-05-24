"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6401],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(t),m=o,y=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4421:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),c=["components"],i={title:"Polymorphic Searches",sidebar_position:14},l=void 0,s={unversionedId:"going-further/polymorphic-search",id:"going-further/polymorphic-search",title:"Polymorphic Searches",description:"When making searches from polymorphic models it is necessary to specify the type of model you are searching.",source:"@site/docs/going-further/polymorphic-search.md",sourceDirName:"going-further",slug:"/going-further/polymorphic-search",permalink:"/ransack/going-further/polymorphic-search",draft:!1,editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/going-further/polymorphic-search.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Polymorphic Searches",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Acts-as-taggable-on",permalink:"/ransack/going-further/acts-as-taggable-on"},next:{title:"Wiki Contributors",permalink:"/ransack/going-further/wiki-contributors"}},p={},u=[],h={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When making searches from polymorphic models it is necessary to specify the type of model you are searching. "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"Given two models"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"class House < ActiveRecord::Base\n  has_one :location, as: :locatable\nend\n\nclass Location < ActiveRecord::Base\n  belongs_to :locatable, polymorphic: true\nend\n")),(0,a.kt)("p",null,"Normally (without polymorphic relationship) you would be able to search as per below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"Location.ransack(locatable_number_eq: 100).result\n")),(0,a.kt)("p",null,"However when this is searched you will get the following error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"ActiveRecord::EagerLoadPolymorphicError: Can not eagerly load the polymorphic association :locatable\n")),(0,a.kt)("p",null,"In order to search for locations by house number when the relationship is polymorphic you have to specify the type of records you will be searching and construct your search as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"Location.ransack(locatable_of_House_type_number_eq: 100).result\n")),(0,a.kt)("p",null,"note the ",(0,a.kt)("inlineCode",{parentName:"p"},"_of_House_type_")," added to the search key. This allows Ransack to correctly specify the table names in SQL join queries."))}m.isMDXComponent=!0}}]);