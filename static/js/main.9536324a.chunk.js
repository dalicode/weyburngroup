(this.webpackJsonpweyburngroup=this.webpackJsonpweyburngroup||[]).push([[0],[,function(e,a,t){e.exports={ul:"Navigation_ul__3j3uX",navMenu:"Navigation_navMenu__26ssF",logodiv:"Navigation_logodiv__1iA5V",logo:"Navigation_logo__2b_w_",NavLink:"Navigation_NavLink__JOt61",ActiveNavLink:"Navigation_ActiveNavLink__2s8x4",iconBar:"Navigation_iconBar__4ucai",responsive:"Navigation_responsive__1fuU_"}},,,,,,,,,function(e,a,t){e.exports={GalleryNav:"GalleryNav_GalleryNav__2v6Wd",collapsible:"GalleryNav_collapsible__K8qTJ",open:"GalleryNav_open__1y_Tu",Active:"GalleryNav_Active__oTjKC",browse:"GalleryNav_browse__2coRz"}},,,,,,,,,function(e,a,t){e.exports={Gallery:"Gallery_Gallery__2rbP9",image:"Gallery_image__WH985",ImageWrap:"Gallery_ImageWrap__X7sai"}},function(e,a,t){e.exports={Process:"Process_Process__34gwR",Text:"Process_Text__WFxiY",Intro:"Process_Intro__o2sZA"}},,,,,function(e,a,t){e.exports={Home:"Home_Home__13bqR",LeftHeader:"Home_LeftHeader__1W0mV"}},function(e,a,t){e.exports={GalleryContent:"GalleryContent_GalleryContent__2ffIN",subHeading:"GalleryContent_subHeading__1L13A"}},,,,,function(e,a,t){e.exports=t.p+"static/media/logo.91e038da.svg"},,,function(e,a,t){e.exports=t.p+"static/media/renovation.359ab2db.jpg"},function(e,a,t){e.exports=t.p+"static/media/roofing.8b037215.jpg"},function(e,a,t){e.exports=t.p+"static/media/painting.004e69cc.jpg"},function(e,a,t){e.exports={SubHeading:"SubHeading_SubHeading__3P2KE"}},function(e,a,t){e.exports={Contact:"Contact_Contact__1CvVj"}},function(e,a,t){e.exports={Heading:"Heading_Heading__3A56F"}},function(e,a,t){e.exports={footer:"Footer_footer__3kRR3"}},function(e,a,t){e.exports={GalleryPage:"GalleryPage_GalleryPage__3rzu_"}},,,,function(e,a,t){e.exports=t(80)},,,,,function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/construction.857ecc56.jpg"},function(e,a,t){e.exports=t.p+"static/media/landscaping.15005531.jpg"},function(e,a,t){e.exports=t.p+"static/media/other.b627c504.jpg"},function(e,a,t){e.exports=t.p+"static/media/facebook.06468580.svg"},function(e,a,t){e.exports=t.p+"static/media/instagram.4c7ce1b0.svg"},function(e,a,t){e.exports=t.p+"static/media/twitter.631cd566.svg"},function(e,a,t){},function(e,a,t){var n={"./basements2.jpg":64,"./bathrooms1.jpg":65,"./kitchens2.jpg":66,"./kitchens3.jpg":67,"./painting1.jpg":68,"./roofing1.jpg":69,"./siding1.jpg":70};function i(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=63},function(e,a,t){e.exports=t.p+"static/media/basements2.50a9ddfa.jpg"},function(e,a,t){e.exports=t.p+"static/media/bathrooms1.c841af19.jpg"},function(e,a,t){e.exports=t.p+"static/media/kitchens2.fc7ae9f8.jpg"},function(e,a,t){e.exports=t.p+"static/media/kitchens3.58c349a3.jpg"},function(e,a,t){e.exports=t.p+"static/media/painting1.c8a5dee0.jpg"},function(e,a,t){e.exports=t.p+"static/media/roofing1.c841af19.jpg"},function(e,a,t){e.exports=t.p+"static/media/siding1.c841af19.jpg"},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(13),c=t.n(o),r=(t(50),t(14)),s=t(15),l=t(17),u=t(16),m=t(18),p=t(1),d=t.n(p),v=t(31),g=t.n(v),f=t(8),h=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={active:!1},t.show=function(){t.setState({active:!t.state.active})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"navMenu",className:d.a.navMenu},i.a.createElement("div",{className:d.a.logodiv},i.a.createElement(f.c,{to:"/"},i.a.createElement("img",{id:"logo",className:d.a.logo,src:g.a,alt:"logo"}))),i.a.createElement("div",{id:"iconBar",className:d.a.iconBar,onClick:this.show},i.a.createElement("p",null,"MENU")),i.a.createElement("ul",{id:"ul",className:this.state.active?"".concat(d.a.ul," ").concat(d.a.responsive):d.a.ul,onClick:this.show},i.a.createElement("li",null,i.a.createElement(f.c,{exact:!0,activeClassName:d.a.ActiveNavLink,className:this.state.active?"".concat(d.a.NavLink," ").concat(d.a.responsive):d.a.NavLink,to:"/"}," Home ")),i.a.createElement("li",null,i.a.createElement(f.c,{activeClassName:d.a.ActiveNavLink,className:this.state.active?"".concat(d.a.NavLink," ").concat(d.a.responsive):d.a.NavLink,to:{pathname:"/gallery",state:{active:"bathrooms"}}}," Gallery ")),i.a.createElement("li",null,i.a.createElement(f.c,{activeClassName:d.a.ActiveNavLink,className:this.state.active?"".concat(d.a.NavLink," ").concat(d.a.responsive):d.a.NavLink,to:"/process"}," Services ")),i.a.createElement("li",null,i.a.createElement(f.c,{activeClassName:d.a.ActiveNavLink,className:this.state.active?"".concat(d.a.NavLink," ").concat(d.a.responsive):d.a.NavLink,to:"/contact"}," Contact "))))}}]),a}(n.Component),_=(t(55),t(25)),b=t.n(_),E=(t(56),t(57),t(58),t(34)),N=t.n(E),y=t(35),w=t.n(y),k=t(36),x=t.n(k),j=t(19),C=t.n(j),G=[["renovation",N.a,"bathrooms"],["roofing",w.a,"roofing"],["siding",x.a,"siding"]].map((function(e,a){return i.a.createElement("div",{key:a,className:C.a.ImageWrap},i.a.createElement(f.b,{to:{pathname:"/gallery",state:{active:e[2]}}},i.a.createElement("img",{className:C.a.image,src:e[1],alt:a}),i.a.createElement("p",null," ",e[0]," ")))})),L=function(){return i.a.createElement("div",{className:C.a.Gallery},G)},q=t(37),H=t.n(q),A=function(e){return i.a.createElement("p",{className:H.a.SubHeading}," ",e.children," ")},S=function(){return i.a.createElement("div",{className:b.a.Home},i.a.createElement("div",{className:b.a.LeftHeader},i.a.createElement("p",null," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi incidunt rem, quos magni, dolore quod qui porro, dolores aspernatur officiis soluta! Tenetur est facere incidunt impedit iste, nesciunt iure accusamus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid necessitatibus dolor fugiat consequuntur fugit illo! Perferendis, fugit voluptas non illo ea nobis sapiente maxime culpa eum rem dolorum quae ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam et dicta, totam aut ad rerum velit minus provident magni saepe blanditiis vitae sint quibusdam, reiciendis ullam voluptatum ratione. Cumque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime provident iusto itaque quis deleniti. Recusandae nihil voluptas ut illum. Explicabo aut modi adipisci iure voluptates, nesciunt incidunt dolore in quo.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quasi inventore libero, nostrum quibusdam obcaecati ipsa minima voluptatem aspernatur labore dicta debitis a porro natus, doloremque, itaque sapiente neque quas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi natus nihil eius illum tempore quisquam, cumque sequi possimus nesciunt, vel voluptates. Quia saepe impedit vel. Recusandae ipsum laborum neque tempora!")," "),i.a.createElement(A,null," Services "),i.a.createElement(L,null))},O=t(38),W=t.n(O),P=function(){return i.a.createElement("div",{className:W.a.Contact},i.a.createElement("p",null," Contact Page "))},T=function(){return i.a.createElement("div",null,i.a.createElement("p",null," Our Story Page "))},R=t(20),M=t.n(R),I=t(39),B=t.n(I),F=function(e){return i.a.createElement("h1",{className:B.a.Heading},e.children)},z=function(){return i.a.createElement("div",{className:M.a.Process},i.a.createElement("div",{className:M.a.Text},i.a.createElement(A,null,"Services"),i.a.createElement("p",{className:M.a.Intro},"Our team at Weyburn Group has 10+ years of commercial and residential construction experience. We provide excellent work for our clients at a competitive price. Our offered services are categorized as follows: Renovation, Roofing, and Siding."),i.a.createElement(F,null," Renovation "),i.a.createElement("p",null,"We specialize in bathroom, basement, and kitchen remodelling. We also provide full house renovations. Planning and designing of the project will be reviewed by our project managers to ensure that our clients achieve their dream home."),i.a.createElement(F,null," Roofing "),i.a.createElement("p",null,"We operate with a full service roofing team which offers pre-installation roof inspection, waterproofing/ice shield, shingle installation, and roof maintenance. A comprehensive inspection will provide a cost-effective solution to the problems with your roof. We also cover low-cost water leakage repairs, damaged shingle replacements, and caulking touch-ups. Our suppliers offer a variety of shingles ranging from 30-year lifetime architect shingles to 50-year designer shingles."),i.a.createElement(F,null," Siding "),i.a.createElement("p",null,"We offer complete aluminum and vinyl products installation which include downspouts, eavestroughs, fascias, siding, and soffits. We source our products from reliable local manufacturers such as Kaycan and Gentek. All our work comes with a 10 year guarantee which also covers any new windows and doors caulking.")))},J=t(5),K=t(40),U=t.n(K),D=(t(59),t(60),t(61),function(){return i.a.createElement("div",{className:U.a.footer})}),V=t(41),X=t.n(V),Q=t(10),Y=t.n(Q),Z=function(e){var a=["bathrooms","basements","kitchens"],t=function(a){return a.map((function(a,t){return i.a.createElement("p",{id:a,className:e.active.trim()===a.trim()?Y.a.Active:null,key:t,onClick:e.click},a)}))};return i.a.createElement("div",{className:e.browse?"".concat(Y.a.GalleryNav," ").concat(Y.a.browse):Y.a.GalleryNav},i.a.createElement("div",null,i.a.createElement("div",{className:Y.a.renovation},i.a.createElement("p",{className:!e.collapsed&&a.includes(e.active)?Y.a.Active:null,onClick:e.collapseToggle},"renovation"),i.a.createElement("div",{className:e.collapsed?Y.a.collapsible:"".concat(Y.a.collapsible," ").concat(Y.a.open)},t(a))),t(["roofing","siding"])))},$=t(26),ee=t.n($),ae=t(82),te=t(83);t(62);var ne=function(e){var a=function(e){var a={};return e.keys().forEach((function(t){a[t.replace("./","")]=e(t)})),a}(t(63)),n=null;return""!==e.active.trim()&&(n=Object.keys(a).filter((function(a){return a.includes(e.active.trim())})).map((function(t,n){return i.a.createElement(ae.a,{key:e.active+" "+n,in:!0,appear:!0,classNames:"alert",timeout:900},i.a.createElement("img",{src:a[t],key:n,alt:t}))}))),i.a.createElement("div",{style:{textAlign:"right"},className:ee.a.GalleryContent},i.a.createElement("div",{onClick:e.click,className:ee.a.subHeading},i.a.createElement("p",null," Galleries ")),i.a.createElement(te.a,null,n))},ie=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={selected:"",browse:!1,collapsed:!0},t.collapse=function(){t.setState({collapsed:!0})},t.collapseToggle=function(){t.setState({collapsed:!t.state.collapsed})},t.galleryNavSelectedHandler=function(e){t.setState({selected:e.target.textContent,browse:!1}),"roofing"!==e.target.textContent.trim()&&"siding"!==e.target.textContent.trim()||t.collapse()},t.browseSelectedHandler=function(){t.setState({browse:!t.state.browse})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),void 0!==this.props.location.state&&(this.setState({selected:this.props.location.state.active}),"bathrooms"===this.props.location.state.active&&this.setState({collapsed:!1}))}},{key:"render",value:function(){return i.a.createElement("div",{className:X.a.GalleryPage},i.a.createElement(Z,{click:this.galleryNavSelectedHandler,active:this.state.selected,browse:this.state.browse,collapsed:this.state.collapsed,collapseToggle:this.collapseToggle}),i.a.createElement(ne,{active:this.state.selected,click:this.browseSelectedHandler}))}}]),a}(n.Component),oe=t(42);var ce=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement(oe.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},i.a.createElement(J.a,{exact:!0,path:"/",component:S}),i.a.createElement(J.a,{path:"/contact",component:P}),i.a.createElement(J.a,{path:"/ourstory",component:T}),i.a.createElement(J.a,{path:"/process",component:z}),i.a.createElement(J.a,{path:"/gallery",component:ie})),i.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f.a,{basename:"/"},i.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[45,1,2]]]);
//# sourceMappingURL=main.9536324a.chunk.js.map