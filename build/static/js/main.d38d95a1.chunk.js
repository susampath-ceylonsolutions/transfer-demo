(this["webpackJsonpcode-camp-t1"]=this["webpackJsonpcode-camp-t1"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(6),s=o.n(a),l=o(1),c=o(2),u=o(4),i=o(3),d=function(e){var t=e.error;if(!t)throw new Error("error occurred: props.error is not defined!");return r.a.createElement("div",null,"error: ",t)},m=function(e){Object(u.a)(o,e);var t=Object(i.a)(o);function o(e){var n;return Object(l.a)(this,o),console.log("constructor!"),(n=t.call(this,e)).increment=function(){n.setState({counter:n.state.counter+1})},n.decrement=function(){n.setState({counter:n.state.counter-1})},n.state={counter:0,seed:0,hasError:!1},n}return Object(c.a)(o,[{key:"componentDidMount",value:function(){console.log("Component did mount"),console.log("------")}},{key:"componentDidUpdate",value:function(e,t){console.log("Component did update"),console.log("------")}},{key:"componentWillUnmount",value:function(){console.log("Component will un-mount"),console.log("------")}},{key:"shouldComponentUpdate",value:function(e,t){return e.ignoreProp&&this.props.ignoreProp!==e.ignoreProp?(console.log("Should component update - DO NOT RENDER!"),console.log("------"),!1):(console.log("Should component update - RENDER!"),console.log("------"),!0)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Get snapshot before update"),console.log("------"),null}},{key:"componentDidCatch",value:function(e,t){console.log("Component did catch! "),console.log("------"),this.setState({hasError:!0})}},{key:"render",value:function(){return console.log("Render! "),console.log("------"),r.a.createElement("div",{style:{width:400,margin:"100px auto",border:"1px solid #eee"}},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.increment},"Increment"),r.a.createElement("button",{onClick:this.decrement},"Decrement")),r.a.createElement("div",null,"Counter: ",this.state.counter),this.props.showErrorComponent&&r.a.createElement(d,null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Get derived state from props",e),console.log("------"),e.seed&&e.seed!==t.seed?{counter:e.seed,seed:e.seed}:null}}]),o}(n.Component),p=(o(12),function(e){Object(u.a)(o,e);var t=Object(i.a)(o);function o(e){var n;return Object(l.a)(this,o),(n=t.call(this,e)).mountCounter=function(){return n.setState({mount:!0})},n.unMountCounter=function(){return n.setState({mount:!1})},n.ignoreProp=function(){return n.setState({ignoreProp:parseInt(100*Math.random())})},n.seedGenerator=function(){return n.setState({seed:parseInt(100*Math.random())})},n.showErrorComponent=function(){n.setState({showErrorComponent:!0})},n.state={mount:!1,ignoreProp:0,seed:0,showErrorComponent:!1},n}return Object(c.a)(o,[{key:"componentDidCatch",value:function(e,t){console.log("Component did catch! "),console.log("------"),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-item"},"Oops! Something went wrong."))):r.a.createElement("div",{style:{width:400,margin:"100px auto",border:"1px solid #eee",textAlign:"center"}},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.mountCounter,disabled:this.state.mount},"Mount"),r.a.createElement("button",{onClick:this.unMountCounter,disabled:!this.state.mount},"UnMount"),r.a.createElement("button",{onClick:this.ignoreProp,disabled:!this.state.mount},"Ignore Prop"),r.a.createElement("button",{onClick:this.seedGenerator,disabled:!this.state.mount},"Seed Generator: ",this.state.seed),r.a.createElement("button",{onClick:this.showErrorComponent,disabled:!this.state.mount},"Show Error")),r.a.createElement("div",null,this.state.mount?r.a.createElement(m,{showErrorComponent:this.state.showErrorComponent,ignoreProp:this.state.ignoreProp,seed:this.state.seed}):null))}}]),o}(n.Component));s.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,o){e.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d38d95a1.chunk.js.map