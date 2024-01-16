(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(11),i=t(4),c=t(1),s=t(0),l=Object(c.createContext)(),r=function(e){var a=e.children,t=Object(c.useState)("light"),n=Object(i.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:a})},o="https://malajvan.github.io/",j="HVP.",m={name:"Hong Van Pham",description:"A data-driven problem solver with a strong background in software development and math. I'm interested in data science and engineering.",resume:"https://example.com",social:{linkedin:"https://linkedin.com/in/vanhpham",github:"https://github.com/malajvan"}},h=[{name:"E2E Azure Pitchfork Data Analysis",image:"https://github.com/malajvan/malajvan.github.io/raw/main/public/img/e2eazflow.png",description:"Implemented Azure Data Factory for seamless data transfer, ensured data quality with Databricks and Spark, and enabled informed decisions through Tableau visualizations.",stack:["Azure","Spark","Tableau"],sourceCode:"https://github.com/malajvan/e2e-AZflow",livePreview:"https://public.tableau.com/app/profile/van.pham8444/viz/Tableau_dashboard_16965479880500/Dashboard1?publish=yes"},{name:"Spotify Popularity Predictions",image:"https://github.com/malajvan/malajvan.github.io/raw/main/public/img/mfcc.png",description:"Extracted audio features, applied KNN algorithm, and achieved an 89% accurate prediction rate for song popularity compared to Spotify's API",stack:["scikit-learn","audio analysis","PyTorch"],sourceCode:"https://github.com/malajvan/MFCC"},{name:"malajvan.github.io",image:"https://github.com/malajvan/malajvan.github.io/raw/main/public/img/malajvan.png",description:"Personal Portfolio showcasing Projects and Experience",stack:["HTML","CSS","React"],sourceCode:"https://github.com/malajvan/malajvan.github.io",livePreview:"https://malajvan.github.io"}],d=[{name:"AZ-900",image:"https://github.com/malajvan/malajvan.github.io/raw/main/public/img/az-900.png",date:"September 2023",linkedin:"https://github.com",accreditation:"https://github.com"},{name:"Lakehouse Fundamentals",image:"https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/lakehouse-fund.png",date:"August 2023",linkedin:"https://github.com",accreditation:"https://credentials.databricks.com/0ab7668f-e98a-47fc-919a-aa58dd390fec#gs.5zde7a"}],b=[{name:"Data Engineer",company:"DDMAL Lab, McGill University",image:"https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/LinkedMusic.png",description:"Spearheaded the development of the data lake architecture and ETL framework for a new project LinkedMusic.",stack:["Data Lake","Python","ETL","OpenRefine"],sourceCode:"https://github.com/DDMAL/linkedmusic-datalake/discussions",livePreview:"https://linkedmusic.ca"},{name:"Software Developer",company:"DDMAL Lab, McGill University",image:"https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/Rodan.png",description:"Oversaw team growth, boosted software performance, and streamlined deployment for increased efficiency and security.",stack:["Python","Ansible","Docker","PostgreSQL"],sourceCode:"https://github.com/DDMAL/Rodan",livePreview:"https://rodan2.simssa.ca"},{name:"Data Science Intern",company:"Vivas Technology",image:"https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/vivas.png",description:"Reduced manual data entry, empowered decision-making with dashboards, accelerated data analysis through automation.",stack:["Superset","Python","Docker","Clickhouse DBMS"]}],u=["Python","ETL","Git","SQL","Microsoft Azure","AWS"],p="vanhongpham01@gmail.com",x=t(18),O=t.n(x),f=t(16),g=t.n(f),v=t(20),k=t.n(v),N=t(19),_=t.n(N),w=(t(28),function(){var e=Object(c.useContext)(l),a=Object(i.a)(e,1)[0],t=a.themeName,n=a.toggleTheme,r=Object(c.useState)(!1),o=Object(i.a)(r,2),j=o[0],m=o[1],x=function(){return m(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[b.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#experiences",onClick:x,className:"link link--nav",children:"Experiences"})}):null,h.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:x,className:"link link--nav",children:"Projects"})}):null,d.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#certifications",onClick:x,className:"link link--nav",children:"Certifications"})}):null,u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:x,className:"link link--nav",children:"Skills"})}):null,p?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:x,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===t?Object(s.jsx)(g.a,{}):Object(s.jsx)(O.a,{})}),Object(s.jsx)("button",{type:"button",onClick:x,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(_.a,{}):Object(s.jsx)(k.a,{})})]})}),y=(t(32),function(){var e=o,a=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:a}):a}),Object(s.jsx)(w,{})]})}),C=t(2),P=t.n(C),S=t(8),D=t.n(S),L=t(9),A=t.n(L),E=(t(34),function(e){var a=e.experience;return Object(s.jsxs)("div",{className:"experience",children:[Object(s.jsx)("h3",{children:a.name}),Object(s.jsx)("text",{children:a.company}),Object(s.jsx)("img",{src:a.image,alt:a.name,className:"experience__image"}),Object(s.jsx)("p",{className:"experience__description",children:a.description}),a.stack&&Object(s.jsx)("ul",{className:"experience__stack",children:a.stack.map((function(e){return Object(s.jsx)("li",{className:"experience__stack-item",children:e},P()())}))}),a.sourceCode&&Object(s.jsx)("a",{href:a.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(D.a,{})}),a.livePreview&&Object(s.jsx)("a",{href:a.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(A.a,{})})]})}),M=(t(35),function(){return b.length?Object(s.jsxs)("section",{id:"experiences",className:"section experiences",children:[Object(s.jsx)("h2",{className:"section__title",children:"Experiences"}),Object(s.jsx)("div",{className:"experiences__grid",children:b.map((function(e){return Object(s.jsx)(E,{experience:e},P()())}))})]}):null}),T=t(13),z=t.n(T),I=t.p+"static/media/HongVanPham_Resume.0b6074ac.pdf",R=(t(36),function(){var e=m.name,a=m.role,t=m.description,n=m.resume,i=m.social;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),a&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",a,"."]}),Object(s.jsx)("p",{className:"about__desc",children:t&&t}),Object(s.jsxs)("div",{className:"about__contact center",children:[n&&Object(s.jsx)("a",{href:I,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(D.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(z.a,{})})]})]})]})}),H=(t(37),function(e){var a=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:a.name}),Object(s.jsx)("img",{src:a.image,alt:a.name,className:"project__image"}),Object(s.jsx)("p",{className:"project__description",children:a.description}),a.stack&&Object(s.jsx)("ul",{className:"project__stack",children:a.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},P()())}))}),a.sourceCode&&Object(s.jsx)("a",{href:a.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(D.a,{})}),a.livePreview&&Object(s.jsx)("a",{href:a.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(A.a,{})})]})}),F=(t(38),function(){return h.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:h.map((function(e){return Object(s.jsx)(H,{project:e},P()())}))})]}):null}),V=(t(39),function(e){var a=e.certification;return Object(s.jsxs)("div",{className:"certification",children:[Object(s.jsx)("img",{src:a.image,alt:a.name,className:"certification__image"}),Object(s.jsx)("h3",{children:a.name}),Object(s.jsx)("p",{className:"certification_date",children:a.date}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(z.a,{})}),a.accreditation&&Object(s.jsx)("a",{href:a.accreditation,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(A.a,{})})]})}),G=(t(40),function(){return d.length?Object(s.jsxs)("section",{id:"certifications",className:"section certifications",children:[Object(s.jsx)("h2",{className:"section__title",children:"Certifications"}),Object(s.jsx)("div",{className:"certifications__grid",children:d.map((function(e){return Object(s.jsx)(V,{certification:e},P()())}))})]}):null}),B=(t(41),function(){return u.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())}))})]}):null}),J=t(21),Q=t.n(J),U=(t(42),function(){var e=Object(c.useState)(!1),a=Object(i.a)(e,2),t=a[0],n=a[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),t?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(Q.a,{fontSize:"large"})})}):null}),Z=(t(43),function(){return p?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(p),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),q=(t(44),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"    "})})}),K=(t(45),function(){var e=Object(c.useContext)(l),a=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(a," app"),children:[Object(s.jsx)(y,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(R,{}),Object(s.jsx)(M,{}),Object(s.jsx)(F,{}),Object(s.jsx)(G,{}),Object(s.jsx)(B,{}),Object(s.jsx)(Z,{})]}),Object(s.jsx)(U,{}),Object(s.jsx)(q,{})]})});t(46);Object(n.render)(Object(s.jsx)(r,{children:Object(s.jsx)(K,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6c998f60.chunk.js.map