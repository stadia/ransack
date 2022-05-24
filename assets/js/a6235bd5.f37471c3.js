"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6680],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=["components"],i={title:"Acts-as-taggable-on",sidebar_position:13},s=void 0,c={unversionedId:"going-further/acts-as-taggable-on",id:"going-further/acts-as-taggable-on",title:"Acts-as-taggable-on",description:"Using Acts As Taggable On",source:"@site/docs/going-further/acts-as-taggable-on.md",sourceDirName:"going-further",slug:"/going-further/acts-as-taggable-on",permalink:"/ransack/going-further/acts-as-taggable-on",draft:!1,editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/going-further/acts-as-taggable-on.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Acts-as-taggable-on",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Versions and Releases",permalink:"/ransack/going-further/release_process"},next:{title:"Polymorphic Searches",permalink:"/ransack/going-further/polymorphic-search"}},p={},u=[{value:"Using Acts As Taggable On",id:"using-acts-as-taggable-on",level:2},{value:"Configure the model",id:"configure-the-model",level:3},{value:"Controller",id:"controller",level:3},{value:"Form",id:"form",level:3},{value:"Ransack Search",id:"ransack-search",level:2},{value:"Option A - Match keys exactly",id:"option-a---match-keys-exactly",level:3},{value:"Option B - match key combinations",id:"option-b---match-key-combinations",level:3},{value:"Option C - match substrings",id:"option-c---match-substrings",level:3},{value:"Option D - select from a list of tags",id:"option-d---select-from-a-list-of-tags",level:3},{value:"Multitenancy",id:"multitenancy",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-acts-as-taggable-on"},"Using Acts As Taggable On"),(0,r.kt)("p",null,"If you have an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveRecord")," model and you're using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbleigh/acts-as-taggable-on"},"acts-as-taggable-on"),",\nchances are you might want to search on tagged fields. Follow the instructions to install the gem and then set up your project files."),(0,r.kt)("h3",{id:"configure-the-model"},"Configure the model"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"app/models/tasks.rb")),(0,r.kt)("p",null,"You can call the tagging field anything you like, it just needs to be plural. No migration is needed as this is stored in the internal ActsAsTaggable tables (",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"taggings"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Task < ApplicationRecord\n  acts_as_taggable_on :projects\nend\n")),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("p",null,"Add a field to strong params in the controller. Use the singular name with ",(0,r.kt)("inlineCode",{parentName:"p"},"_list"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"app/controllers/tasks_controller.rb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def strong_params\n  params\n    .require(:tasks)\n    .permit(:task, :example_field, :project_list)\n")),(0,r.kt)("h3",{id:"form"},"Form"),(0,r.kt)("p",null,"We need to ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," the tag fieldname to our model, also using the singular naming."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erb"},"<div class='form-group'>\n  <%= f.label :project_list %>\n  <%= f.text_field :project_list, value: @task.send(:project_list).to_s %>\n </div>\n")),(0,r.kt)("p",null,"Now we can collect our data via the form, with tags separated by commas."),(0,r.kt)("h2",{id:"ransack-search"},"Ransack Search"),(0,r.kt)("p",null,"Imagine you have the following two instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"{ id: 1, name: 'Clean up my room',        projects: [ 'Home', 'Personal' ] }\n{ id: 2, name: 'Complete math exercises', projects: [ 'Homework', 'Study' ] }\n")),(0,r.kt)("p",null,"When you're writing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Ransack")," search form, you can choose any of the following options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erb"},"<%= search_form_for @search do |f| %>\n  <%= f.text_field :projects_name_in   %> \x3c!-- option a --\x3e\n  <%= f.text_field :projects_name_eq   %> \x3c!-- option b --\x3e\n  <%= f.text_field :projects_name_cont %> \x3c!-- option c --\x3e\n<% end %>\n")),(0,r.kt)("h3",{id:"option-a---match-keys-exactly"},"Option A - Match keys exactly"),(0,r.kt)("p",null,"Option ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," will match keys exactly. This is the solution to choose if you want to distinguish 'Home' from 'Homework': searching for 'Home' will return just the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," with id 1. It also allows searching for more than one tag at once (comma separated):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Home, Personal")," will return task 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Home, Homework")," will return task 1 and 2")),(0,r.kt)("h3",{id:"option-b---match-key-combinations"},"Option B - match key combinations"),(0,r.kt)("p",null,"Option ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," will match all keys exactly. This is the solution if you wanna search for specific combinations of tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Home")," will return nothing, as there is no Task with just the ",(0,r.kt)("inlineCode",{parentName:"li"},"Home")," tag"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Home, Personal")," will return task 1")),(0,r.kt)("h3",{id:"option-c---match-substrings"},"Option C - match substrings"),(0,r.kt)("p",null,"Option ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," is used to match substrings. This is useful when you don't care for the exact tag, but only for part of it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Home")," will return task 1 and 2 (",(0,r.kt)("inlineCode",{parentName:"li"},"/Home/")," matches both ",(0,r.kt)("inlineCode",{parentName:"li"},'"Home"')," and ",(0,r.kt)("inlineCode",{parentName:"li"},'"Homework"'),")")),(0,r.kt)("h3",{id:"option-d---select-from-a-list-of-tags"},"Option D - select from a list of tags"),(0,r.kt)("p",null,"In Option D we allow the user to select a list of valid tags and then search againt them. We use the plural name here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erb"},"<div class='form-group'>\n  <%= f.label :projects_name, 'Project' %>\n  <%= f.select :projects_name_in, ActsAsTaggableOn::Tag.distinct.order(:name).pluck(:name) %>\n</div>\n")),(0,r.kt)("h2",{id:"multitenancy"},"Multitenancy"),(0,r.kt)("p",null,"ActsAsTaggableOn allows scoping of tags based on another field on the model. Suppose we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"language")," field on the model, as an effective second level key. We would adjust our model to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Task < ApplicationRecord\n  acts_as_taggable_on :projects\n  acts_as_taggable_tenant :language\nend\n")),(0,r.kt)("p",null,"The Ransack search is then filtered using the ",(0,r.kt)("inlineCode",{parentName:"p"},"for_tenant")," method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erb"},"<div class='form-group'>\n  <%= f.label :projects_name, 'Project' %>\n  <%= f.select :projects_name_in, ActsAsTaggableOn::Tag.for_tenant('fr').distinct.order(:name).pluck(:name) %>\n</div>\n")))}d.isMDXComponent=!0}}]);