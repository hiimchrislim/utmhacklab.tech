(window.webpackJsonp=window.webpackJsonp||[]).push([[6,16],{155:function(e,t,s){},192:function(e,t,s){"use strict";var n=s(155);s.n(n).a},193:function(e,t,s){},194:function(e,t,s){},212:function(e,t,s){"use strict";s.r(t);var n={name:"resources-grid-item",props:{link:{type:String,required:!0},iconFileName:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,required:!0}},data:function(){return{hovered:!1}}},i=(s(192),s(28)),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"box resource-box",attrs:{href:e.link},on:{mouseover:function(t){e.hovered=!0},mouseleave:function(t){e.hovered=!1}}},[s("figure",{staticClass:"resource-icon"},[s("img",{staticClass:"icon",attrs:{src:"/icons/"+e.iconFileName}})]),e._v(" "),s("transition",{attrs:{name:"slide-out",mode:"out-in"}},[e.hovered?e._e():s("div",{staticClass:"resource-title"},[e._v(e._s(e.title))])]),e._v(" "),s("transition",{attrs:{name:"slide-in"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.hovered,expression:"hovered"}],staticClass:"resource-desc"},[e._v(e._s(e.desc))])])],1)}),[],!1,null,"221e6ab9",null);t.default=o.exports},273:function(e,t,s){"use strict";var n=s(193);s.n(n).a},274:function(e,t,s){"use strict";var n=s(194);s.n(n).a},284:function(e,t,s){"use strict";s.r(t);var n={name:"resources-grid",components:{ResourcesGridItem:s(212).default},data:function(){return{cols:3,items:[{title:"Course Supplements",icon:"course-supplements.svg",link:"/resources/courses/",desc:"Curated tools resources that supplement UTM course content."},{title:"Design",icon:"design.svg",link:"/resources/design/",desc:"Often, people think design is about the way things look. That’s just one element of design."},{title:"Android Development",icon:"android.svg",link:"/resources/android/",desc:"Build apps for phones, tablets, cars and the next billion mobile users on Android!"},{title:"Web Development",icon:"web.svg",link:"/resources/web/",desc:"Build sites and apps for the world's open and universal computing platform. "},{title:"Podcasts",icon:"podcast.svg",link:"/resources/podcasts/",desc:"Curated tools resources that supplement UTM course content."},{title:"Vue",icon:"vue.svg",link:"/resources/vue/",desc:"Develop web applications easily with a community powered javascript framework!"}]}},computed:{rowCount:function(){return Math.floor(this.items.length/this.cols)+(0===this.items.length%this.cols?0:1)}},methods:{itemIndex:function(e,t){return(e-1)*this.cols+(t-1)},getItem:function(e,t){return this.items[this.itemIndex(e,t)]},itemExists:function(e,t){return null!=this.getItem(e,t)}}},i=(s(273),s(274),s(28)),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.rowCount,(function(t){return s("div",{staticClass:"columns row"},e._l(e.cols,(function(n){return s("div",{staticClass:"column resources-grid-column"},[e.itemExists(t,n)?s("resources-grid-item",{attrs:{title:e.getItem(t,n).title,link:e.getItem(t,n).link,iconFileName:e.getItem(t,n).icon,desc:e.getItem(t,n).desc}}):e._e()],1)})),0)})),0)}),[],!1,null,"00f69de2",null);t.default=o.exports}}]);