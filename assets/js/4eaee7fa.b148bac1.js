"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1719],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4713:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Sorting"},l="Sorting",c={unversionedId:"getting-started/sorting",id:"getting-started/sorting",title:"Sorting",description:"Sorting in the View",source:"@site/docs/getting-started/sorting.md",sourceDirName:"getting-started",slug:"/getting-started/sorting",permalink:"/ransack/getting-started/sorting",editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/getting-started/sorting.md",tags:[],version:"current",frontMatter:{title:"Sorting"},sidebar:"tutorialSidebar",previous:{title:"Search Matchers",permalink:"/ransack/getting-started/search-matches"},next:{title:"Using Predicates",permalink:"/ransack/getting-started/using-predicates"}},p={},d=[{value:"Sorting in the View",id:"sorting-in-the-view",level:2},{value:"Sorting in the Controller",id:"sorting-in-the-controller",level:2}],u={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sorting"},"Sorting"),(0,i.kt)("h2",{id:"sorting-in-the-view"},"Sorting in the View"),(0,i.kt)("p",null,"You can add a form to capture sorting and filtering options together."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<div class="filters" id="filtersSidebar">\n  <header class="filters-header">\n    <div class="filters-header-content">\n      <h3>Filters</h3>\n    </div>\n  </header>\n\n  <div class="filters-content">\n    <%= search_form_for @q,\n          class: \'form\',\n          url: articles_path,\n          html: { autocomplete: \'off\', autocapitalize: \'none\' } do |f| %>\n\n      <div class="form-group">\n        <%= f.label :title_cont, t(\'Filter_by_keyword\') %>\n        <%= f.search_field :title_cont %>\n      </div>\n\n      <%= render partial: \'filters/date_title_sort\', locals: { f: f } %>\n\n      <div class="form-group">\n        <%= f.label :grade_level_gteq, t(\'Grade_level\') %> >=\n        <%= f.search_field :grade_level_gteq  %>\n      </div>\n\n      <div class="form-group">\n        <%= f.label :readability_gteq, t(\'Readability\') %> >=\n        <%= f.search_field :readability_gteq  %>\n      </div>\n\n      <div class="form-group">\n        <i><%= @articles.total_count %> articles</i>\n      </div>\n\n      <div class="form-group">\n        <hr/>\n        <div class="filters-header-content">\n          <%= link_to request.path, class: \'form-link\' do %>\n            <i class="far fa-undo icon-l"></i><%= t(\'Clear_all\') %>\n          <% end %>\n\n          <%= f.submit t(\'Filter\'), class: \'btn btn-primary\' %>\n        </div>\n      </div>    \n    <% end %>\n  </div>\n</div>\n')),(0,i.kt)("h2",{id:"sorting-in-the-controller"},"Sorting in the Controller"),(0,i.kt)("p",null,"To specify a default search sort field + order in the controller ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"@search = Post.ransack(params[:q])\n@search.sorts = 'name asc' if @search.sorts.empty?\n@posts = @search.result.paginate(page: params[:page], per_page: 20)\n")),(0,i.kt)("p",null,"Multiple sorts can be set by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"@search = Post.ransack(params[:q])  \n@search.sorts = ['name asc', 'created_at desc'] if @search.sorts.empty?\n@posts = @search.result.paginate(page: params[:page], per_page: 20)\n")))}f.isMDXComponent=!0}}]);