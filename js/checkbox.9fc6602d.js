(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkbox"],{"68b2":function(c,e,a){"use strict";a.r(e);var l=function(){var c=this,e=c.$createElement,a=c._self._c||e;return a("article",{staticClass:"lbzui-components-checkbox"},[a("h2",{staticClass:"lbz-typography--h5"},[c._v("# Checkbox")]),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ [required]v-model: true, false, x, 'x', [true, false, x, 'x']")]),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ id: 'lbz-checkbox-x' (default), 'x'")]),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ true-value (!group): true (default), false, x, 'x'")]),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ false-value (!group): true, false (default), x, 'x'")]),a("lbz-checkbox",{attrs:{id:"vcheckbox0"},on:{change:c.fchange},model:{value:c.vcheckbox0,callback:function(e){c.vcheckbox0=e},expression:"vcheckbox0"}}),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ value (group): true, false, x, 'x'")]),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ indeterminate (!group): true, false (default)")]),a("lbz-checkbox",{attrs:{indeterminate:c.vindeterminate},on:{change:c.fcheckAll},model:{value:c.vcheckAll,callback:function(e){c.vcheckAll=e},expression:"vcheckAll"}},[c._v("Check all?")]),a("br"),c._l(c.LIST,(function(e,l){return a("lbz-checkbox",{key:l,attrs:{value:e},on:{change:c.fgroupChange},model:{value:c.vcheckbox1,callback:function(e){c.vcheckbox1=e},expression:"vcheckbox1"}},[c._v(c._s(e))])})),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ color: 'primary', 'secondary' (default)")]),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'")]),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--primary"},[a("lbz-checkbox",{attrs:{value:"primary","on-background":"primary"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--secondary"},[a("lbz-checkbox",{attrs:{value:"secondary",color:"primary","on-background":"secondary"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle"},[a("lbz-checkbox",{attrs:{value:"surface",color:"primary"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}}),a("lbz-checkbox",{attrs:{value:"surface"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--error"},[a("lbz-checkbox",{attrs:{value:"error",color:"primary","on-background":"error"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}}),a("lbz-checkbox",{attrs:{value:"error","on-background":"error"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--light"},[a("lbz-checkbox",{attrs:{value:"light",color:"primary","on-background":"light"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}}),a("lbz-checkbox",{attrs:{value:"light","on-background":"light"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--dark"},[a("lbz-checkbox",{attrs:{value:"dark",color:"primary","on-background":"dark"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}}),a("lbz-checkbox",{attrs:{value:"dark","on-background":"dark"},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ darkened: true, false (default)")]),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--primary lbzui-is-darkened"},[a("lbz-checkbox",{attrs:{value:"primary","on-background":"primary",darkened:""},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--secondary lbzui-is-darkened"},[a("lbz-checkbox",{attrs:{value:"secondary",color:"primary","on-background":"secondary",darkened:""},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--error lbzui-is-darkened"},[a("lbz-checkbox",{attrs:{value:"error",color:"primary","on-background":"error",darkened:""},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}}),a("lbz-checkbox",{attrs:{value:"error","on-background":"error",darkened:""},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--light lbzui-is-darkened"},[a("lbz-checkbox",{attrs:{value:"light",color:"primary","on-background":"light",darkened:""},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}}),a("lbz-checkbox",{attrs:{value:"light","on-background":"light",darkened:""},model:{value:c.vcheckbox2,callback:function(e){c.vcheckbox2=e},expression:"vcheckbox2"}})],1),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ disabled: true, false (default)")]),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--primary"},[a("lbz-checkbox",{attrs:{value:"checked","on-background":"primary",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"unchecked","on-background":"primary",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--secondary"},[a("lbz-checkbox",{attrs:{value:"checked",color:"primary","on-background":"secondary",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"unchecked",color:"primary","on-background":"secondary",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}})],1),a("div",{staticClass:"lbzui-mini-rectangle"},[a("lbz-checkbox",{attrs:{value:"checked",color:"primary",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"checked",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"unchecked",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--error"},[a("lbz-checkbox",{attrs:{value:"checked",color:"primary","on-background":"error",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"checked","on-background":"error",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"unchecked","on-background":"error",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--light"},[a("lbz-checkbox",{attrs:{value:"checked",color:"primary","on-background":"light",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"checked","on-background":"light",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"unchecked","on-background":"light",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}})],1),a("div",{staticClass:"lbzui-mini-rectangle lbzui-background--dark"},[a("lbz-checkbox",{attrs:{value:"checked",color:"primary","on-background":"dark",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"checked","on-background":"dark",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}}),a("lbz-checkbox",{attrs:{value:"unchecked","on-background":"dark",disabled:""},model:{value:c.vcheckbox3,callback:function(e){c.vcheckbox3=e},expression:"vcheckbox3"}})],1),a("h3",{staticClass:"lbz-typography--subtitle1"},[c._v("$ ripple: undefined (default), true, false")]),a("lbz-checkbox",{attrs:{value:0,ripple:""},model:{value:c.vcheckbox4,callback:function(e){c.vcheckbox4=e},expression:"vcheckbox4"}},[c._v("Ripple")]),a("lbz-checkbox",{attrs:{value:1,ripple:!1},model:{value:c.vcheckbox4,callback:function(e){c.vcheckbox4=e},expression:"vcheckbox4"}},[c._v("Non-ripple")])],2)},o=[],b=a("d4ec"),r=a("bee2"),t=a("2caf"),i=a("262e"),n=a("9ab4"),k=a("60a3"),s=function(c){Object(i["a"])(a,c);var e=Object(t["a"])(a);function a(){var c;return Object(b["a"])(this,a),c=e.apply(this,arguments),c.LIST=[1,2,3],c.vcheckbox0=!0,c.vcheckAll=!1,c.vindeterminate=!0,c.vcheckbox1=[1],c.vcheckbox2=[],c.vcheckbox3=["checked"],c.vcheckbox4=[],c}return Object(r["a"])(a,[{key:"fchange",value:function(c,e){console.log(c,e)}},{key:"fcheckAll",value:function(c,e){this.vindeterminate=!1,this.vcheckbox1=c?JSON.parse(JSON.stringify(this.LIST)):[]}},{key:"fgroupChange",value:function(c,e){var a=c.length;this.vcheckAll=a>0&&a===this.LIST.length,this.vindeterminate=a>0&&a<this.LIST.length}}]),a}(k["k"]);s=Object(n["a"])([k["a"]],s);var u=s,h=u,v=a("2877"),d=Object(v["a"])(h,l,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=checkbox.9fc6602d.js.map