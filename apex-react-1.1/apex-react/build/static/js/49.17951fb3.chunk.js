(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1360:function(e,t,a){var n,r,i;r=[e,t,a(0),a(1)],void 0===(i="function"===typeof(n=function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a);function i(e){return e&&e.__esModule?e:{default:e}}i(n);var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function u(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var l={className:"react-tagsinput-input",placeholder:"Add a tag"},c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={tag:"",isFocused:!1},e.focus=e.focus.bind(e),e.blur=e.blur.bind(e),e}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"_getTagDisplayValue",value:function(e){var t=this.props.tagDisplayProp;return t?e[t]:e}},{key:"_makeTag",value:function(e){var t,a,n,r=this.props.tagDisplayProp;return r?(n=e,(a=r)in(t={})?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t):e}},{key:"_removeTag",value:function(e){var t=this.props.value.concat([]);if(e>-1&&e<t.length){var a=t.splice(e,1);this.props.onChange(t,a,[e])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(e){var t=this,a=this.props,n=a.validationRegex,r=a.onChange,i=a.onValidationReject,s=a.onlyUnique,o=a.maxTags,u=a.value;s&&(e=(e=function(e){for(var t=[],a=0;a<e.length;a++)-1===t.indexOf(e[a])&&t.push(e[a]);return t}(e)).filter(function(e){return u.every(function(a){return t._getTagDisplayValue(a)!==t._getTagDisplayValue(e)})}));var l=e.filter(function(e){return!n.test(t._getTagDisplayValue(e))});if(e=(e=e.filter(function(e){return n.test(t._getTagDisplayValue(e))})).filter(function(e){var a=t._getTagDisplayValue(e);return"function"===typeof a.trim?a.trim().length>0:a}),o>=0){var c=Math.max(o-u.length,0);e=e.slice(0,c)}if(i&&l.length>0&&i(l),e.length>0){for(var p=u.concat(e),h=[],d=0;d<e.length;d++)h.push(u.length+d);return r(p,e,h),this._clearInput(),!0}return!(l.length>0)&&(this._clearInput(),!1)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(e,t,a){return!!e||13===a&&(this.props.preventSubmit||!this.props.preventSubmit&&!t)}},{key:"focus",value:function(){this.input&&"function"===typeof this.input.focus&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&"function"===typeof this.input.blur&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var e=this._tag();return""!==e&&(e=this._makeTag(e),this._addTags([e]))}},{key:"addTag",value:function(e){return this._addTags([e])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(e){var t=this,a=this.props,n=a.addOnPaste,r=a.pasteSplit;if(n){e.preventDefault();var i=function(e){return window.clipboardData?window.clipboardData.getData("Text"):e.clipboardData?e.clipboardData.getData("text/plain"):""}(e),s=r(i).map(function(e){return t._makeTag(e)});this._addTags(s)}}},{key:"handleKeyDown",value:function(e){if(!e.defaultPrevented){var t=this.props,a=t.value,n=t.removeKeys,r=t.addKeys,i=this._tag(),s=""===i,o=e.keyCode,u=e.key,l=-1!==r.indexOf(o)||-1!==r.indexOf(u),c=-1!==n.indexOf(o)||-1!==n.indexOf(u);if(l){var p=this.accept();this._shouldPreventDefaultEventOnAdd(p,s,o)&&e.preventDefault()}c&&a.length>0&&s&&(e.preventDefault(),this._removeTag(a.length-1))}}},{key:"handleClick",value:function(e){e.target===this.div&&this.focus()}},{key:"handleChange",value:function(e){var t=this.props.onChangeInput,a=this.props.inputProps.onChange,n=e.target.value;a&&a(e),this.hasControlledInput()?t(n):this.setState({tag:n})}},{key:"handleOnFocus",value:function(e){var t=this.props.inputProps.onFocus;t&&t(e),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(e){var t=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),null!=e&&(t&&t(e),this.props.addOnBlur)){var a=this._makeTag(e.target.value);this._addTags([a])}}},{key:"handleRemove",value:function(e){this._removeTag(e)}},{key:"inputProps",value:function(){var e=this.props.inputProps,t=(e.onChange,e.onFocus,e.onBlur,u(e,["onChange","onFocus","onBlur"])),a=o({},l,t);return this.props.disabled&&(a.disabled=!0),a}},{key:"inputValue",value:function(e){return e.currentValue||e.inputValue||""}},{key:"hasControlledInput",value:function(){var e=this.props,t=e.inputValue,a=e.onChangeInput;return"function"===typeof a&&"string"===typeof t}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentWillReceiveProps",value:function(e){this.hasControlledInput()||this.inputValue(e)&&this.setState({tag:this.inputValue(e)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.value,n=(t.onChange,t.tagProps),i=t.renderLayout,s=t.renderTag,l=t.renderInput,c=(t.addKeys,t.removeKeys,t.className),p=t.focusedClassName,h=(t.addOnBlur,t.addOnPaste,t.inputProps,t.pasteSplit,t.onlyUnique,t.maxTags,t.validationRegex,t.disabled),d=(t.tagDisplayProp,t.inputValue,t.onChangeInput,u(t,["value","onChange","tagProps","renderLayout","renderTag","renderInput","addKeys","removeKeys","className","focusedClassName","addOnBlur","addOnPaste","inputProps","pasteSplit","onlyUnique","maxTags","validationRegex","disabled","tagDisplayProp","inputValue","onChangeInput"]),this.state.isFocused);d&&(c+=" "+p);var g=a.map(function(t,a){return s(o({key:a,tag:t,onRemove:e.handleRemove.bind(e),disabled:h,getTagDisplayValue:e._getTagDisplayValue.bind(e)},n))}),f=l(o({ref:function(t){e.input=t},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return r.default.createElement("div",{ref:function(t){e.div=t},onClick:this.handleClick.bind(this),className:c},i(g,f))}}]),t}(r.default.Component);c.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:[9,13],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:[8],renderInput:function(e){e.addTag;var t=u(e,["addTag"]),a=t.onChange,n=t.value,i=u(t,["onChange","value"]);return r.default.createElement("input",o({type:"text",onChange:a,value:n},i))},renderTag:function(e){var t=e.tag,a=e.key,n=e.disabled,i=e.onRemove,s=e.classNameRemove,l=e.getTagDisplayValue,c=u(e,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return r.default.createElement("span",o({key:a},c),l(t),!n&&r.default.createElement("a",{className:s,onClick:function(e){return i(a)}}))},renderLayout:function(e,t){return r.default.createElement("span",null,e,t)},pasteSplit:function(e){return e.split(" ").map(function(e){return e.trim()})},tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},t.default=c,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},1361:function(e,t,a){},1665:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),i=a(23),s=a(21),o=a(22),u=a(0),l=a.n(u),c=a(92),p=(a(100),a(101),a(102)),h=a(96),d=a(93),g=a(94),f=a(1360),v=a.n(f),m=(a(1361),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={tags:[]},a.handleChange=function(e){a.setState({tags:e})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(v.a,{value:this.state.tags,onChange:this.handleChange})}}]),t}(u.Component)),b=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(d.a,null,"Input Tags"),l.a.createElement(g.a,null,l.a.createElement("p",null,"Highly customizable React component for inputing tags."),l.a.createElement("a",{href:"https://github.com/olahol/react-tagsinput",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://img.shields.io/github/stars/olahol/react-tagsinput.svg?style=social",alt:"Stars"}),l.a.createElement("img",{src:"https://img.shields.io/npm/dm/react-tagsinput.svg",alt:"Downloads"}))),l.a.createElement(c.kb,null,l.a.createElement(c.A,{sm:"12"},l.a.createElement(c.i,null,l.a.createElement(c.j,null,l.a.createElement(c.u,null,"Tags Input"),l.a.createElement("p",null,"Transforms an input field into a Tags component, in an easy, customizable way, with great performance and tiny code footprint."),l.a.createElement("p",null,"Install ",l.a.createElement("a",{href:"https://github.com/JedWatson/react-input-autosize",target:"_blank",rel:"noopener noreferrer"},"react-input-autosize")," to make the input dynamically grow in size."),l.a.createElement("p",null,"Use ",l.a.createElement("a",{href:"https://github.com/moroshko/react-autosuggest",target:"_blank",rel:"noopener noreferrer"},"react-autosuggest")," to add the support of auto suggestion."),l.a.createElement(h.a,{TabContent1:l.a.createElement(m,null),TabContent2:l.a.createElement(p.PrismCode,{component:"pre",className:"language-javascript"},"import React, { Component } from \"react\";\n\nimport TagsInput from 'react-tagsinput'\n\nimport 'react-tagsinput/react-tagsinput.css'\n\nclass InputTags extends Component {\n   state = {tags: []}\n \n   handleChange = (tags) => {\n     this.setState({tags})\n   }\n\n   render() {\n      return (\n         <TagsInput \n            value={this.state.tags}\n            onChange={this.handleChange}\n         />\n      );\n   }\n }\n export default InputTags;\n ")}))))))}}]),t}(u.Component);t.default=b},93:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:"content-header".concat(void 0===t?"":" ".concat(t))},e.children)}},94:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:"content-sub-header".concat(void 0===t?"":" ".concat(t))},e.children)}},96:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a(19),r=a(20),i=a(23),s=a(21),o=a(22),u=a(24),l=a(0),c=a.n(l),p=a(95),h=a(92),d=a(12),g=a.n(d),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a.state={activeTab:"1"},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"nav-tabs-vc"},c.a.createElement(h.Z,{tabs:!0},c.a.createElement(h.ab,null,c.a.createElement(h.bb,{className:g()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},c.a.createElement(p.Eye,{size:18}))),c.a.createElement(h.ab,null,c.a.createElement(h.bb,{className:g()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},c.a.createElement(p.Code,{size:18})))),c.a.createElement(h.lb,{activeTab:this.state.activeTab,className:"px-0"},c.a.createElement(h.mb,{tabId:"1"},c.a.createElement(h.kb,null,c.a.createElement(h.A,{sm:"12"},this.props.TabContent1))),c.a.createElement(h.mb,{tabId:"2"},c.a.createElement(h.kb,null,c.a.createElement(h.A,{sm:"12"},this.props.TabContent2)))))}}]),t}(c.a.Component)}}]);
//# sourceMappingURL=49.17951fb3.chunk.js.map