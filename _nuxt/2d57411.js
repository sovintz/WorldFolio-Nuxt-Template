(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{295:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6dc94202",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("366d698f",content,!0,{sourceMap:!1})},311:function(t){t.exports=JSON.parse('{"navMenu":[{"title":"About","to":"about"},{"title":"Competences","to":"competences"},{"title":"Experience","to":"projects"},{"title":"Contact","to":"contact"}],"homePage":{"tabTitle":"WorldFolio Tab","appBarTitle":"WorldFolio","pageTitle":"WorldFolio Page","metaData":"This is the meta data description of the website. It helps search engines to better summarize your page. Write a short description here.","header":{"title":"My awesome slogan!","buttonContact":"Contact"},"aboutSection":{"title":"About","myName":"My name","altText":"My name alt text","obtainedTitle":"My position/education","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},"competencesSection":{"title":"What I do?","competences":[{"title":"First Competence","description":"First competence short description to explain it a bit better to others who might not know a lot about it.","icon":"mdi-xml"},{"title":"Second Competence","description":"Second competence short description to explain it a bit better to others who might not know a lot about it.","icon":"mdi-devices"},{"title":"Third competence","description":"Third competence short description to explain it a bit better to others who might not know a lot about it.","icon":"mdi-pencil-ruler"}]},"projectsSection":{"title":"Work and Projects","button":"Link","projects":[{"title":"My Project #1","description":"It is an interesting project and I am proud of it.","image":"project.jpg","altText":"My project #1 image alt text","link":"https://example.com"},{"title":"My Project #2","description":"It is an interesting project and I am proud of it.","image":"project.jpg","altText":"My project #2 image alt text","link":"https://example.com"},{"title":"My Project #3","description":"It is an interesting project and I am proud of it. But it does not have a link.","image":"project.jpg","altText":"My project #1 image alt text"}]},"contactSection":{"title":"Get in touch with me"}},"contactComponent":{"formNameLabel":"Name*","formEmailLabel":"E-mail*","formMessageLabel":"Message*","buttonLabel":"Submit","snackbar":{"text":"Message sent","textErr":"Error while sending message","close":"Close"},"errorMessages":{"required":"Required field","email":"E-mail address must be valid","length32":"Field must be at most 32 characters long","length64":"Field must be at most 64 characters long","length1024":"Field must be at most 1024 characters long"}},"footer":{"copyright":"© My Website | All Rights Reserved"},"socialIcons":[{"icon":"mdi-email","url":"mailto:jane@example.com"},{"icon":"mdi-linkedin","url":"https://www.linkedin.com/in/jane-smith/"},{"icon":"mdi-github","url":"https://github.com/jane-smith"}]}')},313:function(t,e,n){"use strict";var o=n(477),r=n(478),c={},l=n(66),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,[e("AppBar"),t._v(" "),e(r.a,{staticClass:"pt-0"},[e("Nuxt")],1),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppBar:n(464).default,Footer:n(465).default})},314:function(t,e,n){"use strict";var o=n(477),r=n(478),c={name:"empty"},l=n(66),component=Object(l.a)(c,(function(){var t=this._self._c;return t(o.a,{attrs:{dark:""}},[t(r.a,[t("Nuxt",{staticStyle:{height:"100%"}})],1)],1)}),[],!1,null,"2be8d7e6",null);e.a=component.exports},322:function(t,e,n){n(323),t.exports=n(324)},402:function(t,e,n){"use strict";n(295)},403:function(t,e,n){var o=n(20)(!1);o.push([t.i,"\nh1[data-v-6391f254] {\n  font-size: 20px;\n}\n",""]),t.exports=o},435:function(t,e,n){"use strict";n(298)},436:function(t,e,n){var o=n(20)(!1);o.push([t.i,"\n.appbar[data-v-40b4343e]{\n  z-index: 100;\n}\n\n",""]),t.exports=o},464:function(t,e,n){"use strict";n.r(e);var o=n(485),r=n(480),c=n(232),l=n(315),d=n(230),m=n(181),h=n(233),f=n(142),v=n(235),_=n(124),x=n(100),w=n(483),y=n(484),k=n(479),C=n(309),j=(n(30),n(2));var M,T={mixins:[(M="position",{data:function(){return Object(j.a)({},M,[0,0])},created:function(){var t=this;this.$isServer||(this._scrollListener=function(){t[M]=[Math.round(window.pageXOffset),Math.round(window.pageYOffset)]},this._scrollListener(),window.addEventListener("scroll",this._scrollListener))},beforeDestroy:function(){window.removeEventListener("scroll",this._scrollListener)}})],data:function(){return{drawer:!1,group:null}},mounted:function(){},methods:{contact:function(t){window.open(t,"_blank")}}},$=(n(435),n(66)),component=Object($.a)(T,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"appbar"},[e(o.a,{attrs:{color:t.position[1]>0?"primary":"transparent",dark:"",app:"","elevate-on-scroll":""}},[e(C.a,{staticClass:"white--text text-uppercase text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$vuetify.goTo("#header",{duration:2e3})}}},[t._v("\n      "+t._s(t.$t("homePage.appBarTitle"))+"\n    ")]),t._v(" "),e(k.a),t._v(" "),t._l(t.$i18n.t("navMenu"),(function(n,o){return e(l.a,{key:o,staticClass:"ma-2 hidden-sm-and-down",attrs:{plain:""},on:{click:function(e){return t.$vuetify.goTo("#"+n.to,{duration:2e3})}}},[t._v("\n      "+t._s(t.$t(n.title))+"\n    ")])})),t._v(" "),e(k.a),t._v(" "),t._l(t.$i18n.t("socialIcons"),(function(n,o){return e(l.a,{key:o,staticClass:"mx-4 lighten-1 hidden-sm-and-down",attrs:{icon:""},on:{click:function(e){return t.contact(n.url)}}},[e(d.a,{attrs:{size:"24px"}},[t._v("\n        "+t._s(n.icon)+"\n      ")])],1)})),t._v(" "),e(w.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(l.a,t._g(t._b({staticClass:"ma-2 hidden-sm-and-down",attrs:{text:"",plain:""}},"v-btn",r,!1),o),[e(c.a,{attrs:{size:"30",tile:""}},[e(m.a,{attrs:{eager:"",src:"/flags/".concat(t.$i18n.locale,".svg")}})],1)],1)]}}])},[t._v(" "),e(h.a,t._l(t.$i18n.locales,(function(n){return e(f.a,{key:n.code,attrs:{to:t.switchLocalePath(n.code)}},[e(_.a,[e(c.a,{attrs:{size:"30",tile:""}},[e(m.a,{attrs:{eager:"",src:"/flags/".concat(n.code,".svg")}})],1)],1),t._v(" "),e(x.a,{domProps:{textContent:t._s(n.name)}})],1)})),1)],1),t._v(" "),e(r.a,{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}})],2),t._v(" "),e(y.a,{attrs:{fixed:"",temporary:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(h.a,{attrs:{nav:""}},[e(v.a,{attrs:{"active-class":"primary--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.$i18n.t("navMenu"),(function(n,o){return e(f.a,{key:o,on:{click:function(e){t.$vuetify.goTo("#"+n.to,{duration:2e3}),t.drawer=!1}}},[t._v("\n          "+t._s(n.title)+"\n        ")])})),1)],1),t._v(" "),e("div",{staticClass:"mx-auto"},t._l(t.$i18n.t("socialIcons"),(function(n,o){return e(l.a,{key:o,staticClass:"mx-4 lighten-1",attrs:{icon:""},on:{click:function(e){t.contact(n.url),t.drawer=!1}}},[e(d.a,{attrs:{size:"24px"}},[t._v("\n          "+t._s(n.icon)+"\n        ")])],1)})),1),t._v(" "),e(w.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(h.a,[e(f.a,t._g(t._b({attrs:{text:""}},"v-list-item",r,!1),o),[e(c.a,{attrs:{size:"30",tile:""}},[e(m.a,{attrs:{eager:"",src:"/flags/".concat(t.$i18n.locale,".svg")}})],1)],1)],1)]}}])},[t._v(" "),e(h.a,t._l(t.$i18n.locales,(function(n){return e(f.a,{key:n.code,attrs:{nuxt:"",to:t.switchLocalePath(n.code)}},[e(_.a,[e(c.a,{attrs:{size:"30",tile:""}},[e(m.a,{attrs:{eager:"",src:"/flags/".concat(n.code,".svg")}})],1)],1),t._v(" "),e(x.a,{domProps:{textContent:t._s(n.name)}})],1)})),1)],1)],1)],1)}),[],!1,null,"40b4343e",null);e.default=component.exports},465:function(t,e,n){"use strict";n.r(e);var o=n(315),r=n(234),c=n(150),l=n(482),d=n(481),m=n(230),h={data:function(){return{}},methods:{contact:function(t){window.open(t,"_blank")}}},f=n(66),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"mt-md-8",attrs:{padless:""}},[e(r.a,{staticClass:"lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%",color:"#111111"}},[e(c.c,t._l(t.$i18n.t("socialIcons"),(function(n,r){return e(o.a,{key:r,staticClass:"mx-4",attrs:{icon:""},on:{click:function(e){return t.contact(n.url)}}},[e(m.a,{staticClass:"grey--text darken-2",attrs:{size:"24px"}},[t._v("\n          "+t._s(n.icon)+"\n        ")])],1)})),1),t._v(" "),e(l.a,{staticClass:"ma-auto grey darken-3",staticStyle:{width:"50%"}}),t._v(" "),e(c.c,{staticClass:"grey--text darken-2"},[t._v("\n      "+t._s(t.$t("footer.copyright"))+"\n    ")])],1)],1)}),[],!1,null,"f8589098",null);e.default=component.exports},92:function(t,e,n){"use strict";var o=n(315),r=n(476),c=n(486),l=n(181),d=n(475),m={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{errorTitle:"",pageNotFound:"Page Not Found",otherError:"An Error Occurred"}},head:function(){var title=404===this.error.statusCode?this.pageNotFound:this.otherError;return this.errorTitle=title,{title:title}}},h=(n(402),n(66)),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{attrs:{src:"/images/header.jpg",height:"100vh",width:"100%",gradient:t.$vuetify.breakpoint.smAndDown?"68deg, #1565C0 20%, transparent":"68deg, #1565C0 35%, transparent"}},[e(c.a,{attrs:{"fill-height":""}},[e(d.a,{staticClass:"white--text ma-8 ma-md-0",attrs:{align:"center",justify:"start"}},[e(r.a,{staticClass:"white--text",attrs:{cols:"12",md:"8",lg:"6"}},[e("h1",{staticClass:"text-h4 text-md-h1 d-inline-block"},[t._v("404")])]),t._v(" "),e(r.a,{staticClass:"white--text",attrs:{cols:"12"}},[e("h4",{staticClass:"text-h5 text-md-h4"},[t._v(t._s(t.errorTitle))])]),t._v(" "),e(r.a,[e(o.a,{staticClass:"ma-1",attrs:{color:"accent","x-large":t.$vuetify.breakpoint.mdAndUp},on:{click:function(e){return t.$router.push("/")}}},[t._v("\n            Home\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"6391f254",null);e.a=component.exports}},[[322,8,2,9]]]);