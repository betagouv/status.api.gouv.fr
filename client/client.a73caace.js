function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e,t,n,s,r,o,i){const c=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,o);if(c){const r=a(t,n,s,i);e.p(r,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}function f(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function $(){return b("")}function y(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function w(e){return function(t){return t.preventDefault(),e.call(this,t)}}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:_(e,s,t[s])}function A(e){return Array.from(e.childNodes)}function P(e,t,n,s){for(let s=0;s<e.length;s+=1){const r=e[s];if(r.nodeName===t){let t=0;const o=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)r.removeAttribute(o[e]);return e.splice(s,1)[0]}}return s?g(t):m(t)}function S(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.splice(n,1)[0]}return b(t)}function I(e){return S(e," ")}function T(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t){e.value=null==t?"":t}let N,R;function L(){if(void 0===N){N=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){N=!0}}return N}function k(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=L();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=y(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=y(n.contentWindow,"resize",t)}),f(e,n),()=>{(s||r&&n.contentWindow)&&r(),p(n)}}function O(e,t=document.body){return Array.from(t.querySelectorAll(e))}class C{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=m(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)d(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}function U(e){R=e}function j(){if(!R)throw new Error("Function called outside component initialization");return R}function D(e){j().$$.on_mount.push(e)}function H(e){j().$$.after_update.push(e)}function M(e){j().$$.on_destroy.push(e)}const q=[],z=[],G=[],V=[],B=Promise.resolve();let J=!1;function K(e){G.push(e)}let F=!1;const W=new Set;function Q(){if(!F){F=!0;do{for(let e=0;e<q.length;e+=1){const t=q[e];U(t),Y(t.$$)}for(U(null),q.length=0;z.length;)z.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];W.has(t)||(W.add(t),t())}G.length=0}while(q.length);for(;V.length;)V.pop()();J=!1,F=!1,W.clear()}}function Y(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const X=new Set;let Z;function ee(){Z={r:0,c:[],p:Z}}function te(){Z.r||r(Z.c),Z=Z.p}function ne(e,t){e&&e.i&&(X.delete(e),e.i(t))}function se(e,t,n,s){if(e&&e.o){if(X.has(e))return;X.add(e),Z.c.push((()=>{X.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function re(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function oe(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function ae(e,t){e&&e.l(t)}function ce(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||K((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(K)}function le(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){-1===e.$$.dirty[0]&&(q.push(e),J||(J=!0,B.then(Q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(t,n,o,i,a,c,l=[-1]){const u=R;U(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let d=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),d&&ue(t,e)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const e=A(n.target);f.fragment&&f.fragment.l(e),e.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&ne(t.$$.fragment),ce(t,n.target,n.anchor,n.customElement),Q()}U(u)}class de{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pe=[];function he(t,n=e){let s;const r=[];function o(e){if(i(t,e)&&(t=e,s)){const e=!pe.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),pe.push(n,t)}if(e){for(let e=0;e<pe.length;e+=2)pe[e][0](pe[e+1]);pe.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.push(c),1===r.length&&(s=n(o)||e),i(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const me={};var ge={owner:"betagouv",repo:"statut.api.gouv.fr",sites:[{name:"API Particulier",url:"https://particulier.api.gouv.fr/api/ping"},{name:"API Adresse (Base Adresse Nationale)",url:"https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port"},{name:"API Découpage Administratif - (API Geo)",url:"https://geo.api.gouv.fr/regions/01?fields=nom,code"},{name:"API Aide financieres de l’ADEME",url:"https://koumoul.com/s/data-fair/api/v1/datasets/les-aides-financieres-de-l%27ademe/data-files"},{name:"API Aides financières à la rénovation énergetique (Simul’Aid€s)",url:"https://koumoul.com/s/data-fair/api/v1/datasets/simul%27aideuros-dispositifs/data-files"},{name:"API Base Carbone",url:"https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/data-files"},{name:"API BOAMP",url:"https://api.dila.fr/opendata/api-boamp/annonces/search?criterion=test"},{name:"API Camino",url:"https://api.camino.beta.gouv.fr/titres"},{name:"API Répertoire National des Associations",url:"https://entreprise.data.gouv.fr/api/rna/v1/id/W9C1000188"},{name:"API Sirene données ouvertes",url:"https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/?etat_administratif=A&siren=345184428"},{name:"API Annuaire des établissements publics de l'administration",url:"https://etablissements-publics.api.gouv.fr/v3/departements/35/ccas"},{name:"API Répertoire National des Métiers",url:"https://api-rnm.artisanat.fr/v2/entreprises/824024350"},{name:"API Jours fériés en France",url:"https://calendrier.api.gouv.fr/jours-feries/metropole.json"},{name:"API DILA - Légifrance Beta",url:"https://api.aife.economie.gouv.fr/dila/legifrance-beta/lf-engine-app/consult/ping"},{name:"Openfisca-France Web API",url:"https://fr.openfisca.org/api/latest/variable/en_couple"},{name:"Transport.data.gouv.fr API",url:"https://transport.data.gouv.fr/api/aoms?lon=2.3522&lat=48.8566"}],"status-website":{cname:"statut.api.gouv.fr",logoUrl:"https://api.gouv.fr/images/api-logo/dinum.png",name:"api.gouv.fr - Disponiblité des API du service public français",introTitle:"Disponiblité des API du service public",introMessage:"Retrouvez sur ce tableau de bord, les disponibilités des API d'api.gouv.fr",navbar:[{title:"Disponibilité",href:"/"},{title:"api.gouv.fr",href:"https://api.gouv.fr"},{title:"Documentation",href:"https://api.gouv.fr/documentation"},{title:"Ajouter une API",href:"https://github.com/betagouv/status.api.gouv.fr/issues"}],favicon:"https://api.gouv.fr/favicon.ico"},i18n:{activeIncidents:"Incidents en cours",allSystemsOperational:"Tous les sytèmes sont opérationnels",incidentReport:"Rapport d'incident #$NUMBER →",activeIncidentSummary:"Ouvert le $DATE avec $POSTS posts",incidentTitle:"Détails de l'incident $NUMBER",incidentDetails:"Détails de l'incident",incidentFixed:"Résolu",incidentOngoing:"En cours",incidentOpenedAt:"Ouvert le",incidentClosedAt:"Fermé le",incidentSubscribe:"S'abonner aux mises à jour",incidentViewOnGitHub:"Voir sur GitHub",incidentCommentSummary:"Posté le $DATE par $AUTHOR",incidentBack:"← Retour aux incidents",pastIncidents:"Incidents passés",pastIncidentsResolved:"Resolu en $MINUTES minutes avec $POSTS posts",liveStatus:"Statut temps réel",overallUptime:"Disponibilité globale : $UPTIME",overallUptimeTitle:"Disponibilité globale",averageResponseTime:"Temps de réponse moyen : $TIMEms",averageResponseTimeTitle:"Temps de réponse moyen",sevelDayResponseTime:"Temps de réponse sur 7 jours",responseTimeMs:"Temps de réponse (ms)",up:"Opérationnel",down:"Indisponible",degraded:"Dégradé",ms:"ms",loading:"Chargement",navGitHub:"GitHub",footer:"Cette page est [open source]($REPO), propulsée par [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Quota dépassé",rateLimitExceededIntro:"Vous avez dépassé le nombre de requêtes que vous pouvez faire en une heure, vous devez donc attendre avant de pouvoir accéder à nouveau au site. Vous pouvez également ajouter un GitHub Personal Access Token pour continuer à utiliser le site.",rateLimitExceededWhatDoesErrorMean:"Que veut dire cette erreur ?",rateLimitExceededErrorMeaning:"Ce site utilise l'API  de Github pour accéder au statut de notre API. Par défaut, Github autorise 60 requêtes par heure par IP, quota que vous avez dépassé.",rateLimitExceededErrorHowCanFix:"Comment réparer cela ?",rateLimitExceededErrorFix:"Vous pouvez attendre l'heure suivante et votre adresse IP sera débloquée. Vous pouvez également renseigner un GitHub Personal Access Token, qui vous donnera un nouveau quota de 5000 requêtes par heure.",rateLimitExceededGeneratePAT:"Voir comment générer un Personal Access Token",rateLimitExceededHasSet:"Vous avez un Personal Access Token renseigné.",rateLimitExceededRemoveToken:"Supprimer le token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copier/coller le token",rateLimitExceededSaveToken:"Enregistrer le token",errorTitle:"Une erreur s'est produite",errorIntro:"Oups ! Une erreur s'est produite en tentant de charger les derniers statuts de disponibilité.",errorText:"Veuillez réessayer dans quelques instants.",errorHome:"Retour à l'accueil",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"},path:"https://statut.api.gouv.fr"};function be(e,t,n){const s=e.slice();return s[1]=t[n],s}function ve(t){let n,s,r,o=ge["status-website"]&&!ge["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=m("img"),this.h()},l(e){n=P(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){_(n,"alt",""),n.src!==(s=ge["status-website"].logoUrl)&&_(n,"src",s),_(n,"class","svelte-a08hsz")},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}(),i=ge["status-website"]&&!ge["status-website"].hideNavTitle&&function(t){let n,s,r=ge["status-website"].name+"";return{c(){n=m("div"),s=b(r)},l(e){n=P(e,"DIV",{});var t=A(n);s=S(t,r),t.forEach(p)},m(e,t){d(e,n,t),f(n,s)},p:e,d(e){e&&p(n)}}}();return{c(){n=m("div"),s=m("a"),o&&o.c(),r=v(),i&&i.c(),this.h()},l(e){n=P(e,"DIV",{});var t=A(n);s=P(t,"A",{href:!0,class:!0});var a=A(s);o&&o.l(a),r=I(a),i&&i.l(a),a.forEach(p),t.forEach(p),this.h()},h(){_(s,"href",ge["status-website"].logoHref||ge.path),_(s,"class","logo svelte-a08hsz")},m(e,t){d(e,n,t),f(n,s),o&&o.m(s,null),f(s,r),i&&i.m(s,null)},p(e,t){ge["status-website"]&&!ge["status-website"].hideNavLogo&&o.p(e,t),ge["status-website"]&&!ge["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&p(n),o&&o.d(),i&&i.d()}}}function $e(e){let t,n,s,r,o,i=e[1].title+"";return{c(){t=m("li"),n=m("a"),s=b(i),o=v(),this.h()},l(e){t=P(e,"LI",{});var r=A(t);n=P(r,"A",{"aria-current":!0,href:!0,class:!0});var a=A(n);s=S(a,i),a.forEach(p),o=I(r),r.forEach(p),this.h()},h(){_(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),_(n,"href",e[1].href.replace("$OWNER",ge.owner).replace("$REPO",ge.repo)),_(n,"class","svelte-a08hsz")},m(e,r){d(e,t,r),f(t,n),f(n,s),f(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&_(n,"aria-current",r)},d(e){e&&p(t)}}}function ye(t){let n,s,r,o,i,a=ge["status-website"]&&ge["status-website"].logoUrl&&ve(),c=ge["status-website"]&&ge["status-website"].navbar&&function(e){let t,n=ge["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=$e(be(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);d(e,t,n)},p(e,r){if(1&r){let o;for(n=ge["status-website"].navbar,o=0;o<n.length;o+=1){const i=be(e,n,o);s[o]?s[o].p(i,r):(s[o]=$e(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){h(s,e),e&&p(t)}}}(t),l=ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&function(t){let n,s,r,o=ge.i18n.navGitHub+"";return{c(){n=m("li"),s=m("a"),r=b(o),this.h()},l(e){n=P(e,"LI",{});var t=A(n);s=P(t,"A",{href:!0,class:!0});var i=A(s);r=S(i,o),i.forEach(p),t.forEach(p),this.h()},h(){_(s,"href",`https://github.com/${ge.owner}/${ge.repo}`),_(s,"class","svelte-a08hsz")},m(e,t){d(e,n,t),f(n,s),f(s,r)},p:e,d(e){e&&p(n)}}}();return{c(){n=m("nav"),s=m("div"),a&&a.c(),r=v(),o=m("ul"),c&&c.c(),i=v(),l&&l.c(),this.h()},l(e){n=P(e,"NAV",{class:!0});var t=A(n);s=P(t,"DIV",{class:!0});var u=A(s);a&&a.l(u),r=I(u),o=P(u,"UL",{class:!0});var f=A(o);c&&c.l(f),i=I(f),l&&l.l(f),f.forEach(p),u.forEach(p),t.forEach(p),this.h()},h(){_(o,"class","svelte-a08hsz"),_(s,"class","container svelte-a08hsz"),_(n,"class","svelte-a08hsz")},m(e,t){d(e,n,t),f(n,s),a&&a.m(s,null),f(s,r),f(s,o),c&&c.m(o,null),f(o,i),l&&l.m(o,null)},p(e,[t]){ge["status-website"]&&ge["status-website"].logoUrl&&a.p(e,t),ge["status-website"]&&ge["status-website"].navbar&&c.p(e,t),ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&p(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function we(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class _e extends de{constructor(e){super(),fe(this,e,we,ye,i,{segment:0})}}var Ee={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ae(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Pe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Se(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Ee[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function p(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ae(Pe(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Se(Ae(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Pe(r[8])+'" alt="'+Pe(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Pe(r[11]||u[s.toLowerCase()])+'">'),n=p()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Se(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Pe(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(f)+p()).replace(/^\n+|\n+$/g,"")}function Ie(e,t,n){const s=e.slice();return s[3]=t[n],s}function Te(e,t,n){const s=e.slice();return s[3]=t[n],s}function xe(e,t,n){const s=e.slice();return s[8]=t[n],s}function Ne(t){let n;return{c(){n=m("link"),this.h()},l(e){n=P(e,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",`${ge.path}/themes/${(ge["status-website"]||{}).theme||"light"}.css`)},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}function Re(t){let n;return{c(){n=m("link"),this.h()},l(e){n=P(e,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",(ge["status-website"]||{}).themeUrl)},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}function Le(t){let n,s;return{c(){n=m("script"),this.h()},l(e){n=P(e,"SCRIPT",{src:!0,async:!0,defer:!0}),A(n).forEach(p),this.h()},h(){n.src!==(s=t[8].src)&&_(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}function ke(t){let n;return{c(){n=m("link"),this.h()},l(e){n=P(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",t[3].rel),_(n,"href",t[3].href),_(n,"media",t[3].media)},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}function Oe(t){let n;return{c(){n=m("meta"),this.h()},l(e){n=P(e,"META",{name:!0,content:!0}),this.h()},h(){_(n,"name",t[3].name),_(n,"content",t[3].content)},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}function Ce(t){let n,s,r,o,i,l,u,g,b,y,w,E,S,T,x,N,R,L,k=Se(ge.i18n.footer.replace(/\$REPO/,`https://github.com/${ge.owner}/${ge.repo}`))+"",U=(ge["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(ge["status-website"]||{}).customHeadHtml+"";return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),d(e,s,t)},p:e,d(e){e&&p(s),e&&n.d()}}}();let j=((ge["status-website"]||{}).themeUrl?Re:Ne)(t),D=(ge["status-website"]||{}).scripts&&function(e){let t,n=(ge["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Le(xe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);d(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=xe(e,n,o);s[o]?s[o].p(i,r):(s[o]=Le(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){h(s,e),e&&p(t)}}}(t),H=(ge["status-website"]||{}).links&&function(e){let t,n=(ge["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=ke(Te(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);d(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Te(e,n,o);s[o]?s[o].p(i,r):(s[o]=ke(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){h(s,e),e&&p(t)}}}(t),M=(ge["status-website"]||{}).metaTags&&function(e){let t,n=(ge["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Oe(Ie(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);d(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ie(e,n,o);s[o]?s[o].p(i,r):(s[o]=Oe(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){h(s,e),e&&p(t)}}}(t),q=ge["status-website"].css&&function(t){let n,s,r=`<style>${ge["status-website"].css}</style>`;return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),d(e,s,t)},p:e,d(e){e&&p(s),e&&n.d()}}}(),z=ge["status-website"].js&&function(t){let n,s,r=`<script>${ge["status-website"].js}<\/script>`;return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),d(e,s,t)},p:e,d(e){e&&p(s),e&&n.d()}}}(),G=(ge["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(ge["status-website"]||{}).customBodyHtml+"";return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),d(e,s,t)},p:e,d(e){e&&p(s),e&&n.d()}}}();E=new _e({props:{segment:t[0]}});const V=t[2].default,B=function(e,t,n,s){if(e){const r=a(e,t,n,s);return e[0](r)}}(V,t,t[1],null);return{c(){U&&U.c(),n=$(),j.c(),s=m("link"),r=m("link"),o=m("link"),D&&D.c(),i=$(),H&&H.c(),l=$(),M&&M.c(),u=$(),q&&q.c(),g=$(),z&&z.c(),b=$(),y=v(),G&&G.c(),w=v(),ie(E.$$.fragment),S=v(),T=m("main"),B&&B.c(),x=v(),N=m("footer"),R=m("p"),this.h()},l(e){const t=O('[data-svelte="svelte-ri9y7q"]',document.head);U&&U.l(t),n=$(),j.l(t),s=P(t,"LINK",{rel:!0,href:!0}),r=P(t,"LINK",{rel:!0,type:!0,href:!0}),o=P(t,"LINK",{rel:!0,type:!0,href:!0}),D&&D.l(t),i=$(),H&&H.l(t),l=$(),M&&M.l(t),u=$(),q&&q.l(t),g=$(),z&&z.l(t),b=$(),t.forEach(p),y=I(e),G&&G.l(e),w=I(e),ae(E.$$.fragment,e),S=I(e),T=P(e,"MAIN",{class:!0});var a=A(T);B&&B.l(a),a.forEach(p),x=I(e),N=P(e,"FOOTER",{class:!0});var c=A(N);R=P(c,"P",{}),A(R).forEach(p),c.forEach(p),this.h()},h(){_(s,"rel","stylesheet"),_(s,"href",`${ge.path}/global.css`),_(r,"rel","icon"),_(r,"type","image/svg"),_(r,"href",(ge["status-website"]||{}).faviconSvg||(ge["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(o,"rel","icon"),_(o,"type","image/png"),_(o,"href",(ge["status-website"]||{}).favicon||"/logo-192.png"),_(T,"class","container"),_(N,"class","svelte-jbr799")},m(e,t){U&&U.m(document.head,null),f(document.head,n),j.m(document.head,null),f(document.head,s),f(document.head,r),f(document.head,o),D&&D.m(document.head,null),f(document.head,i),H&&H.m(document.head,null),f(document.head,l),M&&M.m(document.head,null),f(document.head,u),q&&q.m(document.head,null),f(document.head,g),z&&z.m(document.head,null),f(document.head,b),d(e,y,t),G&&G.m(e,t),d(e,w,t),ce(E,e,t),d(e,S,t),d(e,T,t),B&&B.m(T,null),d(e,x,t),d(e,N,t),f(N,R),R.innerHTML=k,L=!0},p(e,[t]){(ge["status-website"]||{}).customHeadHtml&&U.p(e,t),j.p(e,t),(ge["status-website"]||{}).scripts&&D.p(e,t),(ge["status-website"]||{}).links&&H.p(e,t),(ge["status-website"]||{}).metaTags&&M.p(e,t),ge["status-website"].css&&q.p(e,t),ge["status-website"].js&&z.p(e,t),(ge["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),E.$set(n),B&&B.p&&(!L||2&t)&&c(B,V,e,e[1],t,null,null)},i(e){L||(ne(E.$$.fragment,e),ne(B,e),L=!0)},o(e){se(E.$$.fragment,e),se(B,e),L=!1},d(e){U&&U.d(e),p(n),j.d(e),p(s),p(r),p(o),D&&D.d(e),p(i),H&&H.d(e),p(l),M&&M.d(e),p(u),q&&q.d(e),p(g),z&&z.d(e),p(b),e&&p(y),G&&G.d(e),e&&p(w),le(E,e),e&&p(S),e&&p(T),B&&B.d(e),e&&p(x),e&&p(N)}}}function Ue(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class je extends de{constructor(e){super(),fe(this,e,Ue,Ce,i,{segment:0})}}function De(e){let t,n,s=e[1].stack+"";return{c(){t=m("pre"),n=b(s)},l(e){t=P(e,"PRE",{});var r=A(t);n=S(r,s),r.forEach(p)},m(e,s){d(e,t,s),f(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&T(n,s)},d(e){e&&p(t)}}}function He(t){let n,s,r,o,i,a,c,l,u,h=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&De(t);return{c(){s=v(),r=m("h1"),o=b(t[0]),i=v(),a=m("p"),c=b(h),l=v(),g&&g.c(),u=$(),this.h()},l(e){O('[data-svelte="svelte-1moakz"]',document.head).forEach(p),s=I(e),r=P(e,"H1",{class:!0});var n=A(r);o=S(n,t[0]),n.forEach(p),i=I(e),a=P(e,"P",{class:!0});var f=A(a);c=S(f,h),f.forEach(p),l=I(e),g&&g.l(e),u=$(),this.h()},h(){_(r,"class","svelte-17w3omn"),_(a,"class","svelte-17w3omn")},m(e,t){d(e,s,t),d(e,r,t),f(r,o),d(e,i,t),d(e,a,t),f(a,c),d(e,l,t),g&&g.m(e,t),d(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&T(o,e[0]),2&t&&h!==(h=e[1].message+"")&&T(c,h),e[2]&&e[1].stack?g?g.p(e,t):(g=De(e),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&p(s),e&&p(r),e&&p(i),e&&p(a),e&&p(l),g&&g.d(e),e&&p(u)}}}function Me(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class qe extends de{constructor(e){super(),fe(this,e,Me,He,i,{status:0,error:1})}}function ze(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ie(n.$$.fragment),s=$()},l(e){n&&ae(n.$$.fragment,e),s=$()},m(e,t){n&&ce(n,e,t),d(e,s,t),r=!0},p(e,t){const r=16&t?re(o,[oe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ee();const e=n;se(e.$$.fragment,1,0,(()=>{le(e,1)})),te()}i?(n=new i(a()),ie(n.$$.fragment),ne(n.$$.fragment,1),ce(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&ne(n.$$.fragment,e),r=!0)},o(e){n&&se(n.$$.fragment,e),r=!1},d(e){e&&p(s),n&&le(n,e)}}}function Ge(e){let t,n;return t=new qe({props:{error:e[0],status:e[1]}}),{c(){ie(t.$$.fragment)},l(e){ae(t.$$.fragment,e)},m(e,s){ce(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Ve(e){let t,n,s,r;const o=[Ge,ze],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=$()},l(e){n.l(e),s=$()},m(e,n){i[t].m(e,n),d(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(ee(),se(i[c],1,1,(()=>{i[c]=null})),te(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),ne(n,1),n.m(s.parentNode,s))},i(e){r||(ne(n),r=!0)},o(e){se(n),r=!1},d(e){i[t].d(e),e&&p(s)}}}function Be(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Ve]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new je({props:o}),{c(){ie(n.$$.fragment)},l(e){ae(n.$$.fragment,e)},m(e,t){ce(n,e,t),s=!0},p(e,[t]){const s=12&t?re(r,[4&t&&{segment:e[2][0]},8&t&&oe(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(ne(n.$$.fragment,e),s=!0)},o(e){se(n.$$.fragment,e),s=!1},d(e){le(n,e)}}}function Je(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return H(l),u=me,f=s,j().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class Ke extends de{constructor(e){super(),fe(this,e,Je,Be,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Fe=[],We=[{js:()=>Promise.all([import("./index.450ff2a4.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.3ee354b9.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].7d563473.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].ade70182.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.f453c3ae.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Qe=(Ye=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Ye(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Ye(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Ye;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xe(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function Ze(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let et,tt=1;const nt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},st={};let rt,ot;function it(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function at(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(rt))return null;let t=e.pathname.slice(rt.length);if(""===t&&(t="/"),!Fe.some((e=>e.test(t))))for(let n=0;n<Qe.length;n+=1){const s=Qe[n],r=s.pattern.exec(t);if(r){const n=it(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function ct(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Ze(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=at(r);if(o){ft(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),nt.pushState({id:et},"",r.href)}}function lt(){return{x:pageXOffset,y:pageYOffset}}function ut(e){if(st[et]=lt(),e.state){const t=at(new URL(location.href));t?ft(t,e.state.id):location.href=location.href}else!function(e){tt=e}(tt+1),function(e){et=e}(tt),nt.replaceState({id:et},"",location.href)}function ft(e,t,n,s){return Xe(this,void 0,void 0,(function*(){const r=!!t;if(r)et=t;else{const e=lt();st[et]=e,et=t=++tt,st[et]=n?e:{x:0,y:0}}if(yield ot(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=st[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),st[et]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function dt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let pt,ht=null;function mt(e){const t=Ze(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=at(new URL(e,dt(document)));if(t)ht&&e===ht.href||(ht={href:e,promise:Lt(t)}),ht.promise}(t.href)}function gt(e){clearTimeout(pt),pt=setTimeout((()=>{mt(e)}),20)}function bt(e,t={noscroll:!1,replaceState:!1}){const n=at(new URL(e,dt(document)));if(n){const s=ft(n,null,t.noscroll);return nt[t.replaceState?"replaceState":"pushState"]({id:et},"",e),s}return location.href=e,new Promise((()=>{}))}const vt="undefined"!=typeof __SAPPER__&&__SAPPER__;let $t,yt,wt,_t=!1,Et=[],At="{}";const Pt={page:function(e){const t=he(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:he(null),session:he(vt&&vt.session)};let St,It,Tt;function xt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Nt(e){return Xe(this,void 0,void 0,(function*(){$t&&Pt.preloading.set(!0);const t=function(e){return ht&&ht.href===e.href?ht.promise:Lt(e)}(e),n=yt={},s=yield t,{redirect:r}=s;if(n===yt)if(r)yield bt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Rt(n,t,xt(t,e.page))}}))}function Rt(e,t,n){return Xe(this,void 0,void 0,(function*(){Pt.page.set(n),Pt.preloading.set(!1),$t?$t.$set(t):(t.stores={page:{subscribe:Pt.page.subscribe},preloading:{subscribe:Pt.preloading.subscribe},session:Pt.session},t.level0={props:yield wt},t.notify=Pt.page.notify,$t=new Ke({target:Tt,props:t,hydrate:!0})),Et=e,At=JSON.stringify(n.query),_t=!0,It=!1}))}function Lt(e){return Xe(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!wt){const e=()=>({});wt=vt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},St)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>Xe(this,void 0,void 0,(function*(){const f=s[a];if(function(e,t,n,s){if(s!==At)return!0;const r=Et[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:f};const d=c++;let p;if(It||u||!Et[a]||Et[a].part!==t.i){u=!1;const{default:s,preload:r}=yield We[t.i].js();let o;o=_t||!vt.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},St):{}:vt.preloaded[a+1],p={component:s,props:o,segment:f,match:l,part:t.i}}else p=Et[a];return o[`level${d}`]=p})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var kt,Ot,Ct;Pt.session.subscribe((e=>Xe(void 0,void 0,void 0,(function*(){if(St=e,!_t)return;It=!0;const t=at(new URL(location.href)),n=yt={},{redirect:s,props:r,branch:o}=yield Lt(t);n===yt&&(s?yield bt(s.location,{replaceState:!0}):yield Rt(o,r,xt(r,t.page)))})))),kt={target:document.querySelector("#sapper")},Ot=kt.target,Tt=Ot,Ct=vt.baseUrl,rt=Ct,ot=Nt,"scrollRestoration"in nt&&(nt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{nt.scrollRestoration="auto"})),addEventListener("load",(()=>{nt.scrollRestoration="manual"})),addEventListener("click",ct),addEventListener("popstate",ut),addEventListener("touchstart",mt),addEventListener("mousemove",gt),vt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=vt;wt||(wt=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:wt},level1:{props:{status:o,error:i},component:qe},segments:r},c=it(n);Rt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;nt.replaceState({id:tt},"",t);const n=at(new URL(location.href));if(n)return ft(n,tt,!0,e)}));export{le as A,y as B,r as C,z as D,u as E,O as F,Se as G,C as H,g as I,bt as J,x as K,w as L,t as M,E as N,re as O,H as P,M as Q,l as R,de as S,oe as T,K as U,k as V,A as a,S as b,P as c,p as d,m as e,_ as f,d as g,f as h,fe as i,v as j,I as k,ee as l,se as m,e as n,te as o,ne as p,D as q,ge as r,i as s,b as t,T as u,$ as v,h as w,ie as x,ae as y,ce as z};

import __inject_styles from './inject_styles.5607aec6.js';