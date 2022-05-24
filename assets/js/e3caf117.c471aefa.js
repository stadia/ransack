"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6843],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,title:"Custom predicates"},u=void 0,s={unversionedId:"going-further/custom-predicates",id:"going-further/custom-predicates",title:"Custom predicates",description:"If you'd like to add your own custom Ransack predicates:",source:"@site/docs/going-further/custom-predicates.md",sourceDirName:"going-further",slug:"/going-further/custom-predicates",permalink:"/ransack/going-further/custom-predicates",draft:!1,editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/going-further/custom-predicates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Custom predicates"},sidebar:"tutorialSidebar",previous:{title:"Associations",permalink:"/ransack/going-further/associations"},next:{title:"CSV Export",permalink:"/ransack/going-further/exporting-to-csv"}},l={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you'd like to add your own custom Ransack predicates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# config/initializers/ransack.rb\n\nRansack.configure do |config|\n  config.add_predicate 'equals_diddly', # Name your predicate\n    # What non-compound ARel predicate will it use? (eq, matches, etc)\n    arel_predicate: 'eq',\n    # Format incoming values as you see fit. (Default: Don't do formatting)\n    formatter: proc { |v| \"#{v}-diddly\" },\n    # Validate a value. An \"invalid\" value won't be used in a search.\n    # Below is default.\n    validator: proc { |v| v.present? },\n    # Should compounds be created? Will use the compound (any/all) version\n    # of the arel_predicate to create a corresponding any/all version of\n    # your predicate. (Default: true)\n    compounds: true,\n    # Force a specific column type for type-casting of supplied values.\n    # (Default: use type from DB column)\n    type: :string,\n    # Use LOWER(column on database).\n    # (Default: false)\n    case_insensitive: true\nend\n")),(0,a.kt)("p",null,"You can check all Arel predicates ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rails/rails/blob/main/activerecord/lib/arel/predications.rb"},"here"),"."),(0,a.kt)("p",null,"If Arel does not have the predicate you are looking for, consider monkey patching it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# config/initializers/ransack.rb\n\nmodule Arel\n  module Predications\n    def gteq_or_null(other)\n      left = gteq(other)\n      right = eq(nil)\n      left.or(right)\n    end\n  end\nend\n\nRansack.configure do |config|\n  config.add_predicate 'gteq_or_null', arel_predicate: 'gteq_or_null'\nend\n")))}f.isMDXComponent=!0}}]);