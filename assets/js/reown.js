  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var c=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};const l="scroll-lock";let u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.initializeTheming(),n.ApiController.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",(t=>t?this.onOpen():this.onClose()))),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&n.IN.close()}initializeTheming(){const{themeVariables:t,themeMode:e}=n.ThemeController.state,r=i.UiHelperUtil.getColorTheme(e);(0,i.initializeTheming)(t,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=l,t.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${l}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)n.IN.close();else if("Tab"===e.key){const{tagName:r}=e.target;!r||r.includes("W3M-")||r.includes("WUI-")||t?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=a,c([(0,s.SB)()],u.prototype,"open",void 0),u=c([(0,i.customElement)("w3m-modal")],u)},48247:(t,e,r)=>{"use strict";r.d(e,{fl:()=>A,iv:()=>c,Ts:()=>_,Qu:()=>E});const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}}const c=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new a(r,t,o)},l=(t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),i=n.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}},u=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:h,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,y=globalThis,b=y.trustedTypes,w=b?b.emptyScript:"",v=y.reactiveElementPolyfillSupport,x=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},E=(t,e)=>!h(t,e),C={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&d(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const o=n?.call(this);i.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??C}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...f(t),...m(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=n,this[n]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??E)(n?i:this[t],e))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,v?.({ReactiveElement:A}),(y.reactiveElementVersions??=[]).push("2.0.2")},88382:(t,e,r)=>{"use strict";r.d(e,{Jb:()=>C,Ld:()=>A,dy:()=>E,sY:()=>U});const n=globalThis,i=n.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,s="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,l=`<${c}>`,u=document,h=()=>u.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,f="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,y=/>/g,b=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,v=/"/g,x=/^(?:script|style|textarea|title)$/i,_=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),E=_(1),C=(_(2),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),k=new WeakMap,S=u.createTreeWalker(u,129);function I(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}const M=(t,e)=>{const r=t.length-1,n=[];let i,o=2===e?"<svg>":"",c=m;for(let e=0;e<r;e++){const r=t[e];let u,h,d=-1,p=0;for(;p<r.length&&(c.lastIndex=p,h=c.exec(r),null!==h);)p=c.lastIndex,c===m?"!--"===h[1]?c=g:void 0!==h[1]?c=y:void 0!==h[2]?(x.test(h[2])&&(i=RegExp("</"+h[2],"g")),c=b):void 0!==h[3]&&(c=b):c===b?">"===h[0]?(c=i??m,d=-1):void 0===h[1]?d=-2:(d=c.lastIndex-h[2].length,u=h[1],c=void 0===h[3]?b:'"'===h[3]?v:w):c===v||c===w?c=b:c===g||c===y?c=m:(c=b,i=void 0);const f=c===b&&t[e+1].startsWith("/>")?" ":"";o+=c===m?r+l:d>=0?(n.push(u),r.slice(0,d)+s+r.slice(d)+a+f):r+a+(-2===d?e:f)}return[I(t,o+(t[r]||"<?>")+(2===e?"</svg>":"")),n]};class O{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,l=0;const u=t.length-1,d=this.parts,[p,f]=M(t,e);if(this.el=O.createElement(p,r),S.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=S.nextNode())&&d.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(s)){const e=f[l++],r=n.getAttribute(t).split(a),i=/([.?@])?(.*)/.exec(e);d.push({type:1,index:o,name:i[2],strings:r,ctor:"."===i[1]?j:"?"===i[1]?B:"@"===i[1]?L:R}),n.removeAttribute(t)}else t.startsWith(a)&&(d.push({type:6,index:o}),n.removeAttribute(t));if(x.test(n.tagName)){const t=n.textContent.split(a),e=t.length-1;if(e>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],h()),S.nextNode(),d.push({type:2,index:++o});n.append(t[e],h())}}}else if(8===n.nodeType)if(n.data===c)d.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(a,t+1));)d.push({type:7,index:o}),t+=a.length-1}o++}}static createElement(t,e){const r=u.createElement("template");return r.innerHTML=t,r}}function P(t,e,r=t,n){if(e===C)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=d(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=P(t,i._$AS(t,e.values),i,n)),e}class T{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??u).importNode(e,!0);S.currentNode=n;let i=S.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new N(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new $(i,this,t)),this._$AV.push(e),a=r[++s]}o!==a?.index&&(i=S.nextNode(),o++)}return S.currentNode=u,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>p(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=O.createElement(I(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new T(n,this),r=t.u(this.options);t.p(e),this.$(r),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new O(t)),e}T(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new N(this.k(h()),this.k(h()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(t,e=this,r,n){const i=this.strings;let o=!1;if(void 0===i)t=P(this,t,e,0),o=!d(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{const n=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=P(this,n[r+s],e,s),a===C&&(a=this._$AH[s]),o||=!d(a)||a!==this._$AH[s],a===A?t=A:t!==A&&(t+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.O(t)}O(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class j extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===A?void 0:t}}class B extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class L extends R{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??A)===C)return;const r=this._$AH,n=t===A&&r!==A||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==A&&(r===A||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ${constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const D=n.litHtmlPolyfillSupport;D?.(O,N),(n.litHtmlVersions??=[]).push("3.1.0");const U=(t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new N(e.insertBefore(h(),t),t,void 0,r??{})}return i._$AI(t),i}},2927:(t,e,r)=>{"use strict";r.d(e,{Cb:()=>s,SB:()=>a});var n=r(48247);const i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},o=(t=i,e,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,t),"accessor"===n){const{name:n}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(n,i,t)},init(e){return void 0!==e&&this.C(n,void 0,t),e}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];e.call(this,r),this.requestUpdate(n,i,t)}}throw Error("Unsupported decorator location: "+n)};function s(t){return(e,r)=>"object"==typeof r?o(t,e,r):((t,e,r)=>{const n=e.hasOwnProperty(r);return e.constructor.createProperty(r,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}function a(t){return s({...t,state:!0,attribute:!1})}},74666:(t,e,r)=>{"use strict";r.d(e,{oi:()=>o,iv:()=>n.iv,dy:()=>i.dy});var n=r(48247),i=r(88382);class o extends n.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,i.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.Jb}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});const s=globalThis.litElementPolyfillSupport;s?.({LitElement:o}),(globalThis.litElementVersions??=[]).push("4.0.2")},85233:(t,e,r)=>{"use strict";r.r(e),r.d(e,{TransactionUtil:()=>Di,UiHelperUtil:()=>mr,WuiAccountButton:()=>Sr,WuiAllWalletsImage:()=>Nr,WuiAvatar:()=>xr,WuiButton:()=>Br,WuiCard:()=>St,WuiCardSelect:()=>Gr,WuiCardSelectLoader:()=>Ur,WuiChip:()=>Qr,WuiConnectButton:()=>Xr,WuiCtaButton:()=>rn,WuiEmailInput:()=>xn,WuiFlex:()=>br,WuiGrid:()=>Ti,WuiIcon:()=>Oe,WuiIconBox:()=>Cr,WuiIconLink:()=>Cn,WuiImage:()=>Ne,WuiInputElement:()=>Sn,WuiInputNumeric:()=>On,WuiInputText:()=>bn,WuiLink:()=>Nn,WuiListItem:()=>Bn,WuiListWallet:()=>Jn,WuiLoadingHexagon:()=>je,WuiLoadingSpinner:()=>$e,WuiLoadingThumbnail:()=>ze,WuiLogo:()=>ti,WuiLogoSelect:()=>ni,WuiNetworkButton:()=>si,WuiNetworkImage:()=>Wr,WuiOtp:()=>li,WuiQrCode:()=>mi,WuiSearchBar:()=>yi,WuiSeparator:()=>ji,WuiShimmer:()=>We,WuiSnackbar:()=>vi,WuiTabs:()=>Ei,WuiTag:()=>Zn,WuiText:()=>Qe,WuiTooltip:()=>ki,WuiTransactionListItem:()=>Hn,WuiTransactionListItemLoader:()=>qn,WuiTransactionVisual:()=>Un,WuiVisual:()=>pr,WuiVisualThumbnail:()=>Mi,WuiWalletImage:()=>Or,customElement:()=>At,initializeTheming:()=>bt,setColorTheme:()=>wt,setThemeVariables:()=>vt});const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}}const c=t=>new a("string"==typeof t?t:t+"",void 0,o),l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new a(r,t,o)},u=(t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),i=n.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return c(e)})(t):t,{is:d,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:y}=Object,b=globalThis,w=b.trustedTypes,v=w?w.emptyScript:"",x=b.reactiveElementPolyfillSupport,_=(t,e)=>t,E={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},C=(t,e)=>!d(t,e),A={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&p(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=f(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const o=n?.call(this);i.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...m(t),...g(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:E;this._$Em=n,this[n]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??C)(n?i:this[t],e))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[_("elementProperties")]=new Map,k[_("finalized")]=new Map,x?.({ReactiveElement:k}),(b.reactiveElementVersions??=[]).push("2.0.2");const S=globalThis,I=S.trustedTypes,M=I?I.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,T="?"+P,N=`<${T}>`,R=document,j=()=>R.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,$=t=>L(t)||"function"==typeof t?.[Symbol.iterator],D="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,H=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,q=/"/g,V=/^(?:script|style|textarea|title)$/i,G=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Z=G(1),K=G(2),Q=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Y=new WeakMap,X=R.createTreeWalker(R,129);function tt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const et=(t,e)=>{const r=t.length-1,n=[];let i,o=2===e?"<svg>":"",s=U;for(let e=0;e<r;e++){const r=t[e];let a,c,l=-1,u=0;for(;u<r.length&&(s.lastIndex=u,c=s.exec(r),null!==c);)u=s.lastIndex,s===U?"!--"===c[1]?s=z:void 0!==c[1]?s=F:void 0!==c[2]?(V.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=H):void 0!==c[3]&&(s=H):s===H?">"===c[0]?(s=i??U,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?H:'"'===c[3]?q:W):s===q||s===W?s=H:s===z||s===F?s=U:(s=H,i=void 0);const h=s===H&&t[e+1].startsWith("/>")?" ":"";o+=s===U?r+N:l>=0?(n.push(a),r.slice(0,l)+O+r.slice(l)+P+h):r+P+(-2===l?e:h)}return[tt(t,o+(t[r]||"<?>")+(2===e?"</svg>":"")),n]};class rt{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,o=0;const s=t.length-1,a=this.parts,[c,l]=et(t,e);if(this.el=rt.createElement(c,r),X.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=X.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(O)){const e=l[o++],r=n.getAttribute(t).split(P),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?at:"?"===s[1]?ct:"@"===s[1]?lt:st}),n.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:i}),n.removeAttribute(t));if(V.test(n.tagName)){const t=n.textContent.split(P),e=t.length-1;if(e>0){n.textContent=I?I.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],j()),X.nextNode(),a.push({type:2,index:++i});n.append(t[e],j())}}}else if(8===n.nodeType)if(n.data===T)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(P,t+1));)a.push({type:7,index:i}),t+=P.length-1}i++}}static createElement(t,e){const r=R.createElement("template");return r.innerHTML=t,r}}function nt(t,e,r=t,n){if(e===Q)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=B(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=nt(t,i._$AS(t,e.values),i,n)),e}class it{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??R).importNode(e,!0);X.currentNode=n;let i=X.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new ot(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new ut(i,this,t)),this._$AV.push(e),a=r[++s]}o!==a?.index&&(i=X.nextNode(),o++)}return X.currentNode=R,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),B(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):$(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==J&&B(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=rt.createElement(tt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new it(n,this),r=t.u(this.options);t.p(e),this.$(r),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new rt(t)),e}T(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new ot(this.k(j()),this.k(j()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=J}_$AI(t,e=this,r,n){const i=this.strings;let o=!1;if(void 0===i)t=nt(this,t,e,0),o=!B(t)||t!==this._$AH&&t!==Q,o&&(this._$AH=t);else{const n=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=nt(this,n[r+s],e,s),a===Q&&(a=this._$AH[s]),o||=!B(a)||a!==this._$AH[s],a===J?t=J:t!==J&&(t+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.O(t)}O(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class at extends st{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===J?void 0:t}}class ct extends st{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class lt extends st{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=nt(this,t,e,0)??J)===Q)return;const r=this._$AH,n=t===J&&r!==J||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==J&&(r===J||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}}const ht={j:O,P,A:T,C:1,M:et,L:it,R:$,V:nt,D:ot,I:st,H:ct,N:lt,U:at,B:ut},dt=S.litHtmlPolyfillSupport;dt?.(rt,ot),(S.litHtmlVersions??=[]).push("3.1.0");class pt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new ot(e.insertBefore(j(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}pt._$litElement$=!0,pt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pt});const ft=globalThis.litElementPolyfillSupport;let mt,gt,yt;function bt(t,e){mt=document.createElement("style"),gt=document.createElement("style"),yt=document.createElement("style"),mt.textContent=xt(t).core.cssText,gt.textContent=xt(t).dark.cssText,yt.textContent=xt(t).light.cssText,document.head.appendChild(mt),document.head.appendChild(gt),document.head.appendChild(yt),wt(e)}function wt(t){gt&&yt&&("light"===t?(gt.removeAttribute("media"),yt.media="enabled"):(yt.removeAttribute("media"),gt.media="enabled"))}function vt(t){mt&&gt&&yt&&(mt.textContent=xt(t).core.cssText,gt.textContent=xt(t).dark.cssText,yt.textContent=xt(t).light.cssText)}function xt(t){return{core:l`
      :root {
        --w3m-color-mix-strength: ${c(t?.["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${c(t?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${c(t?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${c(t?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${c(t?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:l`
      :root {
        --w3m-color-mix: ${c(t?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${c(t?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:l`
      :root {
        --w3m-color-mix: ${c(t?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${c(t?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}ft?.({LitElement:pt}),(globalThis.litElementVersions??=[]).push("4.0.2");const _t=l`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Et=l`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Ct=l`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function At(t){return function(e){return"function"==typeof e?function(t,e){return customElements.get(t)||customElements.define(t,e),e}(t,e):function(t,e){const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(e){customElements.get(t)||customElements.define(t,e)}}}(t,e)}}const kt=l`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let St=class extends pt{render(){return Z`<slot></slot>`}};St.styles=[_t,kt],St=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([At("wui-card")],St);const It={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:C},Mt=(t=It,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,t),"accessor"===n){const{name:n}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(n,i,t)},init(e){return void 0!==e&&this.C(n,void 0,t),e}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];e.call(this,r),this.requestUpdate(n,i,t)}}throw Error("Unsupported decorator location: "+n)};function Ot(t){return(e,r)=>"object"==typeof r?Mt(t,e,r):((t,e,r)=>{const n=e.hasOwnProperty(r);return e.constructor.createProperty(r,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}function Pt(t){return Ot({...t,state:!0,attribute:!1})}const Tt=l`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Nt=K`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Rt=K`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,jt=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Bt=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Lt=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,$t=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Dt=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Ut=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,zt=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,Ft=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Ht=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Wt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,qt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Vt=K`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Gt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Zt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Kt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Qt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Jt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Yt=K` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Xt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,te=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ee=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,re=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,ne=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,ie=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,oe=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,se=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ae=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ce=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,le=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ue=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,he=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,de=K`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,pe=K`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,fe=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,me=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ge=K` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ye=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,be=K`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,we=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,ve=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xe=K`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,_e=K`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ee=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,Ce=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ae=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ke=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Se=K`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var Ie=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};const Me={allWallets:Nt,appStore:Rt,chromeStore:Vt,apple:jt,arrowBottom:Bt,arrowLeft:Lt,arrowRight:$t,arrowTop:Dt,browser:Ut,checkmark:zt,chevronBottom:Ft,chevronLeft:Ht,chevronRight:Wt,chevronTop:qt,clock:Gt,close:Zt,compass:Qt,coinPlaceholder:Kt,copy:Jt,cursor:Yt,desktop:Xt,disconnect:te,discord:ee,etherscan:re,extension:ne,externalLink:ie,facebook:oe,filters:se,github:ae,google:ce,helpCircle:le,infoCircle:ue,mail:he,mobile:de,networkPlaceholder:pe,nftPlaceholder:fe,off:me,playStore:ge,qrCode:ye,refresh:be,search:we,swapHorizontal:ve,swapHorizontalBold:xe,swapVertical:_e,telegram:Ee,twitch:Ce,twitter:Ae,twitterIcon:ke,wallet:K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,walletConnect:K`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,walletPlaceholder:Se,warningCircle:K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`};let Oe=class extends pt{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,Z`${Me[this.name]}`}};Oe.styles=[_t,Ct,Tt],Ie([Ot()],Oe.prototype,"size",void 0),Ie([Ot()],Oe.prototype,"name",void 0),Ie([Ot()],Oe.prototype,"color",void 0),Oe=Ie([At("wui-icon")],Oe);const Pe=l`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Te=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Ne=class extends pt{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return Z`<img src=${this.src} alt=${this.alt} />`}};Ne.styles=[_t,Ct,Pe],Te([Ot()],Ne.prototype,"src",void 0),Te([Ot()],Ne.prototype,"alt",void 0),Ne=Te([At("wui-image")],Ne);const Re=l`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let je=class extends pt{render(){return Z`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};je.styles=[_t,Re],je=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([At("wui-loading-hexagon")],je);const Be=l`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Le=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let $e=class extends pt{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,Z`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};$e.styles=[_t,Be],Le([Ot()],$e.prototype,"color",void 0),Le([Ot()],$e.prototype,"size",void 0),$e=Le([At("wui-loading-spinner")],$e);const De=l`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ue=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let ze=class extends pt{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t;return Z`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${116+e} ${245+e}"
          stroke-dashoffset=${360+1.75*e}
        />
      </svg>
    `}};ze.styles=[_t,De],Ue([Ot({type:Number})],ze.prototype,"radius",void 0),ze=Ue([At("wui-loading-thumbnail")],ze);const Fe=l`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var He=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let We=class extends pt{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,Z`<slot></slot>`}};We.styles=[Fe],He([Ot()],We.prototype,"width",void 0),He([Ot()],We.prototype,"height",void 0),He([Ot()],We.prototype,"borderRadius",void 0),We=He([At("wui-shimmer")],We);const qe=t=>(...e)=>({_$litDirective$:t,values:e});class Ve{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Ge=qe(class extends Ve{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const r=t.element.classList;for(const t of this.it)t in e||(r.remove(t),this.it.delete(t));for(const t in e){const n=!!e[t];n===this.it.has(t)||this.st?.has(t)||(n?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return Q}}),Ze=l`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Ke=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Qe=class extends pt{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,Z`<slot class=${Ge(t)}></slot>`}};Qe.styles=[_t,Ze],Ke([Ot()],Qe.prototype,"variant",void 0),Ke([Ot()],Qe.prototype,"color",void 0),Ke([Ot()],Qe.prototype,"align",void 0),Qe=Ke([At("wui-text")],Qe);const Je=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Ye=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Xe=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,tr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,er=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,rr=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,nr=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ir=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,or=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,sr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ar=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,cr=K`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,lr=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ur=l`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var hr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};const dr={browser:Je,dao:Ye,defi:Xe,defiAlt:tr,eth:er,layers:rr,lock:nr,login:ir,network:or,nft:sr,noun:ar,profile:cr,system:lr};let pr=class extends pt{constructor(){super(...arguments),this.name="browser"}render(){return Z`${dr[this.name]}`}};pr.styles=[_t,ur],hr([Ot()],pr.prototype,"name",void 0),pr=hr([At("wui-visual")],pr);const fr=t=>t??J,mr={getSpacingStyles:(t,e)=>Array.isArray(t)?t[e]?`var(--wui-spacing-${t[e]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName:t=>new URL(t).hostname,getTruncateString:({string:t,charsStart:e,charsEnd:r,truncate:n})=>t.length<=e+r?t:"end"===n?`${t.substring(0,e)}...`:"start"===n?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`,generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(e),n=[];for(let t=0;t<5;t+=1){const e=this.tintColor(r,.15*t);n.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n   `},hexToRgb(t){const e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},tintColor(t,e){const[r,n,i]=t;return[Math.round(r+(255-r)*e),Math.round(n+(255-n)*e),Math.round(i+(255-i)*e)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},gr=l`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var yr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let br=class extends pt{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&mr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&mr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&mr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&mr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&mr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&mr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&mr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&mr.getSpacingStyles(this.margin,3)};\n    `,Z`<slot></slot>`}};br.styles=[_t,gr],yr([Ot()],br.prototype,"flexDirection",void 0),yr([Ot()],br.prototype,"flexWrap",void 0),yr([Ot()],br.prototype,"flexBasis",void 0),yr([Ot()],br.prototype,"flexGrow",void 0),yr([Ot()],br.prototype,"flexShrink",void 0),yr([Ot()],br.prototype,"alignItems",void 0),yr([Ot()],br.prototype,"justifyContent",void 0),yr([Ot()],br.prototype,"columnGap",void 0),yr([Ot()],br.prototype,"rowGap",void 0),yr([Ot()],br.prototype,"gap",void 0),yr([Ot()],br.prototype,"padding",void 0),yr([Ot()],br.prototype,"margin",void 0),br=yr([At("wui-flex")],br);const wr=l`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var vr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let xr=class extends pt{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return Z`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",Z`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=mr.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};xr.styles=[_t,wr],vr([Ot()],xr.prototype,"imageSrc",void 0),vr([Ot()],xr.prototype,"alt",void 0),vr([Ot()],xr.prototype,"address",void 0),xr=vr([At("wui-avatar")],xr);const _r=l`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Er=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Cr=class extends pt{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,r=e?"12%":"16%",n=e?"xxs":"3xl",i="gray"===this.background,o="opaque"===this.background,s="accent-100"===this.backgroundColor&&o||"success-100"===this.backgroundColor&&o||"error-100"===this.backgroundColor&&o||"inverse-100"===this.backgroundColor&&o;let a=`var(--wui-color-${this.backgroundColor})`;return s?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(a=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${a};\n       --local-bg-mix: ${s||i?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,Z` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};Cr.styles=[_t,Et,_r],Er([Ot()],Cr.prototype,"size",void 0),Er([Ot()],Cr.prototype,"backgroundColor",void 0),Er([Ot()],Cr.prototype,"iconColor",void 0),Er([Ot()],Cr.prototype,"iconSize",void 0),Er([Ot()],Cr.prototype,"background",void 0),Er([Ot({type:Boolean})],Cr.prototype,"border",void 0),Er([Ot()],Cr.prototype,"borderColor",void 0),Er([Ot()],Cr.prototype,"icon",void 0),Cr=Er([At("wui-icon-box")],Cr);const Ar=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var kr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Sr=class extends pt{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return Z`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${fr(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${mr.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?Z`<wui-image src=${this.networkSrc}></wui-image>`:Z`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return Z`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Sr.styles=[_t,Et,Ar],kr([Ot()],Sr.prototype,"networkSrc",void 0),kr([Ot()],Sr.prototype,"avatarSrc",void 0),kr([Ot()],Sr.prototype,"balance",void 0),kr([Ot({type:Boolean})],Sr.prototype,"disabled",void 0),kr([Ot({type:Boolean})],Sr.prototype,"isProfileName",void 0),kr([Ot()],Sr.prototype,"address",void 0),Sr=kr([At("wui-account-button")],Sr);const Ir=l`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var Mr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Or=class extends pt{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),Z` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?Z`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?Z`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:Z`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Or.styles=[_t,Ir],Mr([Ot()],Or.prototype,"size",void 0),Mr([Ot()],Or.prototype,"name",void 0),Mr([Ot()],Or.prototype,"imageSrc",void 0),Mr([Ot()],Or.prototype,"walletIcon",void 0),Or=Mr([At("wui-wallet-image")],Or);const Pr=l`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var Tr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Nr=class extends pt{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<4;return Z`${this.walletImages.slice(0,4).map((({src:t,walletName:e})=>Z`
          <wui-wallet-image
            size="inherit"
            imageSrc=${t}
            name=${fr(e)}
          ></wui-wallet-image>
        `))}
    ${t?[...Array(4-this.walletImages.length)].map((()=>Z` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}`}};Nr.styles=[_t,Pr],Tr([Ot({type:Array})],Nr.prototype,"walletImages",void 0),Nr=Tr([At("wui-all-wallets-image")],Nr);const Rr=l`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var jr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Br=class extends pt{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const t="md"===this.size?"paragraph-600":"small-600";return Z`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?Z`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Z``}};Br.styles=[_t,Et,Rr],jr([Ot()],Br.prototype,"size",void 0),jr([Ot({type:Boolean})],Br.prototype,"disabled",void 0),jr([Ot({type:Boolean})],Br.prototype,"fullWidth",void 0),jr([Ot({type:Boolean})],Br.prototype,"loading",void 0),jr([Ot()],Br.prototype,"variant",void 0),Br=jr([At("wui-button")],Br);const Lr=K`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,$r=l`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Dr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Ur=class extends pt{constructor(){super(...arguments),this.type="wallet"}render(){return Z`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?Z` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Lr}`:Z`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ur.styles=[_t,Et,$r],Dr([Ot()],Ur.prototype,"type",void 0),Ur=Dr([At("wui-card-select-loader")],Ur);const zr=K`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Fr=l`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Hr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Wr=class extends pt{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${t?"86px":"48px"};\n      --local-height: ${t?"96px":"54px"};\n      --local-icon-size: ${t?"42px":"24px"};\n    `,Z`${this.templateVisual()} ${t?zr:Lr}`}templateVisual(){return this.imageSrc?Z`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:Z`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Wr.styles=[_t,Fr],Hr([Ot()],Wr.prototype,"size",void 0),Hr([Ot()],Wr.prototype,"name",void 0),Hr([Ot()],Wr.prototype,"imageSrc",void 0),Hr([Ot({type:Boolean})],Wr.prototype,"selected",void 0),Wr=Hr([At("wui-network-image")],Wr);const qr=l`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Vr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Gr=class extends pt{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return Z`
      <button data-selected=${fr(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?Z`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${fr(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:Z`
      <wui-wallet-image size="md" imageSrc=${fr(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Gr.styles=[_t,Et,qr],Vr([Ot()],Gr.prototype,"name",void 0),Vr([Ot()],Gr.prototype,"type",void 0),Vr([Ot()],Gr.prototype,"imageSrc",void 0),Vr([Ot({type:Boolean})],Gr.prototype,"disabled",void 0),Vr([Ot({type:Boolean})],Gr.prototype,"selected",void 0),Gr=Vr([At("wui-card-select")],Gr);const Zr=l`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var Kr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Qr=class extends pt{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t="transparent"===this.variant?"small-600":"paragraph-600";return Z`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${mr.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?Z`<wui-image src=${this.imageSrc}></wui-image>`:null}};Qr.styles=[_t,Et,Zr],Kr([Ot()],Qr.prototype,"variant",void 0),Kr([Ot()],Qr.prototype,"imageSrc",void 0),Kr([Ot({type:Boolean})],Qr.prototype,"disabled",void 0),Kr([Ot()],Qr.prototype,"icon",void 0),Kr([Ot()],Qr.prototype,"href",void 0),Qr=Kr([At("wui-chip")],Qr);const Jr=l`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Yr=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Xr=class extends pt{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t="md"===this.size?"paragraph-600":"small-600";return Z`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?Z`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Xr.styles=[_t,Et,Jr],Yr([Ot()],Xr.prototype,"size",void 0),Yr([Ot({type:Boolean})],Xr.prototype,"loading",void 0),Xr=Yr([At("wui-connect-button")],Xr);const tn=l`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var en=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let rn=class extends pt{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return Z`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};rn.styles=[_t,Et,tn],en([Ot({type:Boolean})],rn.prototype,"disabled",void 0),en([Ot()],rn.prototype,"label",void 0),en([Ot()],rn.prototype,"buttonLabel",void 0),rn=en([At("wui-cta-button")],rn);const{D:nn}=ht,on=(t,e)=>{const r=t._$AN;if(void 0===r)return!1;for(const t of r)t._$AO?.(e,!1),on(t,e);return!0},sn=t=>{let e,r;do{if(void 0===(e=t._$AM))break;r=e._$AN,r.delete(t),t=e}while(0===r?.size)},an=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),un(e)}};function cn(t){void 0!==this._$AN?(sn(this),this._$AM=t,an(this)):this._$AM=t}function ln(t,e=!1,r=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(n))for(let t=r;t<n.length;t++)on(n[t],!1),sn(n[t]);else null!=n&&(on(n,!1),sn(n));else on(this,t)}const un=t=>{2==t.type&&(t._$AP??=ln,t._$AQ??=cn)};class hn extends Ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),an(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(on(this,t),sn(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const dn=()=>new pn;class pn{}const fn=new WeakMap,mn=qe(class extends hn{render(t){return J}update(t,[e]){const r=e!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),J}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let r=fn.get(e);void 0===r&&(r=new WeakMap,fn.set(e,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?fn.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),gn=l`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var yn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let bn=class extends pt{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=dn()}render(){const t=`wui-size-${this.size}`;return Z` ${this.templateIcon()}
      <input
        ${mn(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${fr(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?Z`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};bn.styles=[_t,Et,gn],yn([Ot()],bn.prototype,"size",void 0),yn([Ot()],bn.prototype,"icon",void 0),yn([Ot({type:Boolean})],bn.prototype,"disabled",void 0),yn([Ot()],bn.prototype,"placeholder",void 0),yn([Ot()],bn.prototype,"type",void 0),yn([Ot()],bn.prototype,"keyHint",void 0),bn=yn([At("wui-input-text")],bn);const wn=l`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var vn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let xn=class extends pt{render(){return Z`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?Z`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};xn.styles=[_t,wn],vn([Ot()],xn.prototype,"errorMessage",void 0),xn=vn([At("wui-email-input")],xn);const _n=l`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var En=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Cn=class extends pt{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return Z`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Cn.styles=[_t,Et,Ct,_n],En([Ot()],Cn.prototype,"size",void 0),En([Ot({type:Boolean})],Cn.prototype,"disabled",void 0),En([Ot()],Cn.prototype,"icon",void 0),En([Ot()],Cn.prototype,"iconColor",void 0),Cn=En([At("wui-icon-link")],Cn);const An=l`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var kn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Sn=class extends pt{constructor(){super(...arguments),this.icon="copy"}render(){return Z`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Sn.styles=[_t,Et,An],kn([Ot()],Sn.prototype,"icon",void 0),Sn=kn([At("wui-input-element")],Sn);const In=l`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var Mn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let On=class extends pt{constructor(){super(...arguments),this.disabled=!1}render(){return Z`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};On.styles=[_t,Et,In],Mn([Ot({type:Boolean})],On.prototype,"disabled",void 0),On=Mn([At("wui-input-numeric")],On);const Pn=l`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Tn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Nn=class extends pt{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return Z`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Nn.styles=[_t,Et,Pn],Tn([Ot({type:Boolean})],Nn.prototype,"disabled",void 0),Tn([Ot()],Nn.prototype,"color",void 0),Nn=Tn([At("wui-link")],Nn);const Rn=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var jn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Bn=class extends pt{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return Z`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${fr(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return Z`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return Z`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:e;return Z`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?Z`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Z``}chevronTemplate(){return this.chevron?Z`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var Ln;Bn.styles=[_t,Et,Rn],jn([Ot()],Bn.prototype,"icon",void 0),jn([Ot()],Bn.prototype,"iconSize",void 0),jn([Ot()],Bn.prototype,"variant",void 0),jn([Ot()],Bn.prototype,"iconVariant",void 0),jn([Ot({type:Boolean})],Bn.prototype,"disabled",void 0),jn([Ot()],Bn.prototype,"imageSrc",void 0),jn([Ot()],Bn.prototype,"alt",void 0),jn([Ot({type:Boolean})],Bn.prototype,"chevron",void 0),jn([Ot({type:Boolean})],Bn.prototype,"loading",void 0),Bn=jn([At("wui-list-item")],Bn),function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"}(Ln||(Ln={}));const $n=l`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Dn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Un=class extends pt{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,r="NFT"===t?.type,n=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",i=(e?.url?"NFT"===e.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${n};\n    --local-right-border-radius: ${i};\n    `,Z`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,r=t?.type;return 2===this.images.length&&(t?.url||e?.url)?Z`<div class="swap-images-container">
        ${t?.url?Z`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?Z`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?Z`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===r?Z`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:Z`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?Z`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Un.styles=[$n],Dn([Ot()],Un.prototype,"type",void 0),Dn([Ot()],Un.prototype,"status",void 0),Dn([Ot()],Un.prototype,"direction",void 0),Dn([Ot()],Un.prototype,"onlyDirectionIcon",void 0),Dn([Ot()],Un.prototype,"images",void 0),Dn([Ot()],Un.prototype,"secondImage",void 0),Un=Dn([At("wui-transaction-visual")],Un);const zn=l`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Fn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Hn=class extends pt{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return Z`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Ln[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?Z`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?Z`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};Hn.styles=[_t,zn],Fn([Ot()],Hn.prototype,"type",void 0),Fn([Ot()],Hn.prototype,"descriptions",void 0),Fn([Ot()],Hn.prototype,"date",void 0),Fn([Ot()],Hn.prototype,"onlyDirectionIcon",void 0),Fn([Ot()],Hn.prototype,"status",void 0),Fn([Ot()],Hn.prototype,"direction",void 0),Fn([Ot()],Hn.prototype,"images",void 0),Hn=Fn([At("wui-transaction-list-item")],Hn);const Wn=l`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let qn=class extends pt{render(){return Z`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};qn.styles=[_t,Wn],qn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([At("wui-transaction-list-item-loader")],qn);const Vn=l`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Gn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Zn=class extends pt{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,Z`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Zn.styles=[_t,Vn],Gn([Ot()],Zn.prototype,"variant",void 0),Zn=Gn([At("wui-tag")],Zn);const Kn=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Qn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Jn=class extends pt{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return Z`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?Z` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?Z` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?Z`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:Z`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?Z`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?Z`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Jn.styles=[_t,Et,Kn],Qn([Ot({type:Array})],Jn.prototype,"walletImages",void 0),Qn([Ot()],Jn.prototype,"imageSrc",void 0),Qn([Ot()],Jn.prototype,"name",void 0),Qn([Ot()],Jn.prototype,"tagLabel",void 0),Qn([Ot()],Jn.prototype,"tagVariant",void 0),Qn([Ot()],Jn.prototype,"icon",void 0),Qn([Ot()],Jn.prototype,"walletIcon",void 0),Qn([Ot({type:Boolean})],Jn.prototype,"disabled",void 0),Qn([Ot({type:Boolean})],Jn.prototype,"showAllWallets",void 0),Jn=Qn([At("wui-list-wallet")],Jn);const Yn=l`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Xn=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let ti=class extends pt{constructor(){super(...arguments),this.logo="google"}render(){return Z`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};ti.styles=[_t,Yn],Xn([Ot()],ti.prototype,"logo",void 0),ti=Xn([At("wui-logo")],ti);const ei=l`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ri=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let ni=class extends pt{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return Z`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ni.styles=[_t,Et,ei],ri([Ot()],ni.prototype,"logo",void 0),ri([Ot({type:Boolean})],ni.prototype,"disabled",void 0),ni=ri([At("wui-logo-select")],ni);const ii=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var oi=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let si=class extends pt{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return Z`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?Z`<wui-image src=${this.imageSrc}></wui-image>`:Z`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};si.styles=[_t,Et,ii],oi([Ot()],si.prototype,"imageSrc",void 0),oi([Ot({type:Boolean})],si.prototype,"disabled",void 0),si=oi([At("wui-network-button")],si);const ai=l`
  :host {
    position: relative;
    display: block;
  }
`;var ci=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let li=class extends pt{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,e)=>{const r=t.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();const i=n.selectionStart;switch(t.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",e):n.value=""}},this.focusInputField=(t,e)=>{if("next"===t){const t=e+1,r=this.numerics[t<this.length?t:e],n=r?this.getInputElement(r):void 0;n&&n.focus()}if("prev"===t){const t=e-1,r=this.numerics[t>-1?t:e],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return Z`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map(((t,e)=>Z`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @keydown=${t=>this.handleKeyDown(t,e)}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}handleInput(t,e){const r=t.target,n=this.getInputElement(r);if(n){const r=n.value;"insertFromPaste"===t.inputType?this.handlePaste(n,r,e):mr.isNumber(r)&&t.data?(n.value=t.data,this.focusInputField("next",e)):n.value=""}}handlePaste(t,e,r){const n=e[0];if(n&&mr.isNumber(n)){t.value=n;const i=e.substring(1);if(r+1<this.length&&i.length){const t=this.numerics[r+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,i,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}};li.styles=[_t,ai],ci([Ot({type:Number})],li.prototype,"length",void 0),li=ci([At("wui-otp")],li);var ui=r(92592);function hi(t,e,r){return t!==e&&(t-e<0?e-t:t-e)<=r+.1}const di={generate(t,e,r){const n="#141414",i=[],o=function(t,e){const r=Array.prototype.slice.call(ui.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(r.length);return r.reduce(((t,e,r)=>(r%n==0?t.push([e]):t[t.length-1].push(e))&&t),[])}(t),s=e/o.length,a=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];a.forEach((({x:t,y:e})=>{const r=(o.length-7)*s*t,c=(o.length-7)*s*e,l=.45;for(let t=0;t<a.length;t+=1){const e=s*(7-2*t);i.push(K`
            <rect
              fill=${2===t?n:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*l:e*l}
              ry= ${0===t?(e-5)*l:e*l}
              stroke=${n}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?c+s*t+2.5:c+s*t}
              y= ${0===t?r+s*t+2.5:r+s*t}
            />
          `)}}));const c=Math.floor((r+25)/s),l=o.length/2-c/2,u=o.length/2+c/2-1,h=[];o.forEach(((t,e)=>{t.forEach(((t,r)=>{if(o[e][r]&&!(e<7&&r<7||e>o.length-8&&r<7||e<7&&r>o.length-8||e>l&&e<u&&r>l&&r<u)){const t=e*s+s/2,n=r*s+s/2;h.push([t,n])}}))}));const d={};return h.forEach((([t,e])=>{d[t]?d[t]?.push(e):d[t]=[e]})),Object.entries(d).map((([t,e])=>{const r=e.filter((t=>e.every((e=>!hi(t,e,s)))));return[Number(t),r]})).forEach((([t,e])=>{e.forEach((e=>{i.push(K`<circle cx=${t} cy=${e} fill=${n} r=${s/2.5} />`)}))})),Object.entries(d).filter((([t,e])=>e.length>1)).map((([t,e])=>{const r=e.filter((t=>e.some((e=>hi(t,e,s)))));return[Number(t),r]})).map((([t,e])=>{e.sort(((t,e)=>t<e?-1:1));const r=[];for(const t of e){const e=r.find((e=>e.some((e=>hi(t,e,s)))));e?e.push(t):r.push([t])}return[t,r.map((t=>[t[0],t[t.length-1]]))]})).forEach((([t,e])=>{e.forEach((([e,r])=>{i.push(K`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${r}
                stroke=${n}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)}))})),i}},pi=l`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var fi=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let mi=class extends pt{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,Z`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return K`
      <svg height=${t} width=${t}>
        ${di.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?Z`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:Z`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};mi.styles=[_t,pi],fi([Ot()],mi.prototype,"uri",void 0),fi([Ot({type:Number})],mi.prototype,"size",void 0),fi([Ot()],mi.prototype,"theme",void 0),fi([Ot()],mi.prototype,"imageSrc",void 0),fi([Ot()],mi.prototype,"alt",void 0),mi=fi([At("wui-qr-code")],mi);const gi=l`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let yi=class extends pt{constructor(){super(...arguments),this.inputComponentRef=dn()}render(){return Z`
      <wui-input-text
        ${mn(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,e=t?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};yi.styles=[_t,gi],yi=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([At("wui-search-bar")],yi);const bi=l`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var wi=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let vi=class extends pt{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return Z`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};vi.styles=[_t,bi],wi([Ot()],vi.prototype,"backgroundColor",void 0),wi([Ot()],vi.prototype,"iconColor",void 0),wi([Ot()],vi.prototype,"icon",void 0),wi([Ot()],vi.prototype,"message",void 0),vi=wi([At("wui-snackbar")],vi);const xi=l`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var _i=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Ei=class extends pt{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((t,e)=>{const r=e===this.activeTab;return Z`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const r=this.buttons[this.activeTab],n=this.buttons[t],i=r?.querySelector("wui-text"),o=n?.querySelector("wui-text"),s=n?.getBoundingClientRect(),a=o?.getBoundingClientRect();r&&i&&!e&&t!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&s&&a&&o&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(s.width+a.width)+6}px`,n.animate([{width:`${s.width+a.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};Ei.styles=[_t,Et,xi],_i([Ot({type:Array})],Ei.prototype,"tabs",void 0),_i([Ot()],Ei.prototype,"onTabChange",void 0),_i([Ot({type:Array})],Ei.prototype,"buttons",void 0),_i([Ot({type:Boolean})],Ei.prototype,"disabled",void 0),_i([Pt()],Ei.prototype,"activeTab",void 0),_i([Pt()],Ei.prototype,"localTabWidth",void 0),_i([Pt()],Ei.prototype,"isDense",void 0),Ei=_i([At("wui-tabs")],Ei);const Ci=l`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ai=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let ki=class extends pt{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return Z`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};ki.styles=[_t,Et,Ci],Ai([Ot()],ki.prototype,"placement",void 0),Ai([Ot()],ki.prototype,"message",void 0),ki=Ai([At("wui-tooltip")],ki);const Si=l`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ii=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Mi=class extends pt{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,Z`${this.templateVisual()}`}templateVisual(){return this.imageSrc?Z`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:Z`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Mi.styles=[_t,Si],Ii([Ot()],Mi.prototype,"imageSrc",void 0),Ii([Ot()],Mi.prototype,"alt",void 0),Ii([Ot({type:Boolean})],Mi.prototype,"borderRadiusFull",void 0),Mi=Ii([At("wui-visual-thumbnail")],Mi);const Oi=l`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Pi=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Ti=class extends pt{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&mr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&mr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&mr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&mr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&mr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&mr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&mr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&mr.getSpacingStyles(this.margin,3)};\n    `,Z`<slot></slot>`}};Ti.styles=[_t,Oi],Pi([Ot()],Ti.prototype,"gridTemplateRows",void 0),Pi([Ot()],Ti.prototype,"gridTemplateColumns",void 0),Pi([Ot()],Ti.prototype,"justifyItems",void 0),Pi([Ot()],Ti.prototype,"alignItems",void 0),Pi([Ot()],Ti.prototype,"justifyContent",void 0),Pi([Ot()],Ti.prototype,"alignContent",void 0),Pi([Ot()],Ti.prototype,"columnGap",void 0),Pi([Ot()],Ti.prototype,"rowGap",void 0),Pi([Ot()],Ti.prototype,"gap",void 0),Pi([Ot()],Ti.prototype,"padding",void 0),Pi([Ot()],Ti.prototype,"margin",void 0),Ti=Pi([At("wui-grid")],Ti);const Ni=l`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var Ri=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let ji=class extends pt{constructor(){super(...arguments),this.text=""}render(){return Z`${this.template()}`}template(){return this.text?Z`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ji.styles=[_t,Ni],Ri([Ot()],ji.prototype,"text",void 0),ji=Ri([At("wui-separator")],ji);var Bi=r(10248);const Li=["receive","deposit","borrow","claim"],$i=["withdraw","repay","burn"],Di={getTransactionGroupTitle:t=>t===Bi.E.getYear()?"This Year":t,getTransactionImages(t){const[e,r]=t,n=Boolean(e)&&t?.every((t=>Boolean(t.nft_info))),i=t?.length>1;return 2!==t?.length||n?i?t.map((t=>this.getTransactionImage(t))):[this.getTransactionImage(e)]:[this.getTransactionImage(e),this.getTransactionImage(r)]},getTransactionImage:t=>({type:Di.getTransactionTransferTokenType(t),url:Di.getTransactionImageURL(t)}),getTransactionImageURL(t){let e=null;const r=Boolean(t?.nft_info),n=Boolean(t?.fungible_info);return t&&r?e=t?.nft_info?.content?.preview?.url:t&&n&&(e=t?.fungible_info?.icon?.url),e},getTransactionTransferTokenType:t=>t?.fungible_info?"FUNGIBLE":t?.nft_info?"NFT":null,getTransactionDescriptions(t){const e=t.metadata?.operationType,r=t.transfers,n=t.transfers?.length>0,i=t.transfers?.length>1,o=n&&r?.every((t=>Boolean(t.fungible_info))),[s,a]=r;let c=this.getTransferDescription(s),l=this.getTransferDescription(a);if(!n)return"send"!==e&&"receive"!==e||!o?[t.metadata.status]:(c=mr.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=mr.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]);if(i)return r.map((t=>this.getTransferDescription(t)));let u="";return Li.includes(e)?u="+":$i.includes(e)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(t){let e="";return t?(t?.nft_info?e=t?.nft_info?.name||"-":t?.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-"),e):e},getFungibleTransferDescription(t){return t?[this.getQuantityFixedValue(t?.quantity.numeric),t?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:t=>t?parseFloat(t).toFixed(3):null}},16157:(t,e,r)=>{"use strict";r.r(e),r.d(e,{EIP6963Connector:()=>Vt,createWeb3Modal:()=>Ne,defaultWagmiConfig:()=>Te,walletConnectProvider:()=>Pe});var n=r(63747),i=r(66403),o=r(64201),s=r(85233),a=r(74666),c=r(2927),l=r(88382);const u=t=>t??l.Ld;var h=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let d=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=o.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=o.AccountController.state.address,this.balanceVal=o.AccountController.state.balance,this.balanceSymbol=o.AccountController.state.balanceSymbol,this.profileName=o.AccountController.state.profileName,this.profileImage=o.AccountController.state.profileImage,this.network=o.NetworkController.state.caipNetwork,this.unsubscribe.push(o.AccountController.subscribe((t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),o.NetworkController.subscribeKey("caipNetwork",(t=>this.network=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.networkImages[this.network?.imageId??""],e="show"===this.balance;return a.dy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${u(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${u(t)}
        avatarSrc=${u(this.profileImage)}
        balance=${e?o.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){o.IN.open()}};h([(0,c.Cb)({type:Boolean})],d.prototype,"disabled",void 0),h([(0,c.Cb)()],d.prototype,"balance",void 0),h([(0,c.SB)()],d.prototype,"address",void 0),h([(0,c.SB)()],d.prototype,"balanceVal",void 0),h([(0,c.SB)()],d.prototype,"balanceSymbol",void 0),h([(0,c.SB)()],d.prototype,"profileName",void 0),h([(0,c.SB)()],d.prototype,"profileImage",void 0),h([(0,c.SB)()],d.prototype,"network",void 0),d=h([(0,s.customElement)("w3m-account-button")],d);var p=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let f=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=o.AccountController.state.isConnected,this.unsubscribe.push(o.AccountController.subscribeKey("isConnected",(t=>{this.isAccount=t})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return this.isAccount?a.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${u(this.balance)}
          >
          </w3m-account-button>
        `:a.dy`
          <w3m-connect-button
            size=${u(this.size)}
            label=${u(this.label)}
            loadingLabel=${u(this.loadingLabel)}
          ></w3m-connect-button>
        `}};p([(0,c.Cb)({type:Boolean})],f.prototype,"disabled",void 0),p([(0,c.Cb)()],f.prototype,"balance",void 0),p([(0,c.Cb)()],f.prototype,"size",void 0),p([(0,c.Cb)()],f.prototype,"label",void 0),p([(0,c.Cb)()],f.prototype,"loadingLabel",void 0),p([(0,c.SB)()],f.prototype,"isAccount",void 0),f=p([(0,s.customElement)("w3m-button")],f);var m=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let g=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=o.IN.state.open,this.unsubscribe.push(o.IN.subscribeKey("open",(t=>this.open=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.dy`
      <wui-connect-button
        size=${u(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?o.IN.close():o.IN.open()}};m([(0,c.Cb)()],g.prototype,"size",void 0),m([(0,c.Cb)()],g.prototype,"label",void 0),m([(0,c.Cb)()],g.prototype,"loadingLabel",void 0),m([(0,c.SB)()],g.prototype,"open",void 0),g=m([(0,s.customElement)("w3m-connect-button")],g),r(96541);var y=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let b=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=o.NetworkController.state.caipNetwork,this.connected=o.AccountController.state.isConnected,this.unsubscribe.push(o.NetworkController.subscribeKey("caipNetwork",(t=>this.network=t)),o.AccountController.subscribeKey("isConnected",(t=>this.connected=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled)}
        imageSrc=${u(o.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){o.IN.open({view:"Networks"})}};y([(0,c.Cb)({type:Boolean})],b.prototype,"disabled",void 0),y([(0,c.SB)()],b.prototype,"network",void 0),y([(0,c.SB)()],b.prototype,"connected",void 0),b=y([(0,s.customElement)("w3m-network-button")],b);const w=a.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var v=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let x=class extends a.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=o.RouterController.state.view,this.unsubscribe.push(o.RouterController.subscribeKey("view",(t=>this.onViewChange(t))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([t])=>{const e=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:e}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=e})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((t=>t()))}render(){return a.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return a.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return a.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return a.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return a.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return a.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return a.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return a.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return a.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return a.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return a.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return a.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return a.dy`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return a.dy`<w3m-transactions-view></w3m-transactions-view>`}}async onViewChange(t){const{history:e}=o.RouterController.state;let r=-10,n=10;e.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=e.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};x.styles=w,v([(0,c.SB)()],x.prototype,"view",void 0),x=v([(0,s.customElement)("w3m-router")],x);const _=a.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var E=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let C=class extends a.oi{constructor(){super(),this.usubscribe=[],this.networkImages=o.WM.state.networkImages,this.address=o.AccountController.state.address,this.profileImage=o.AccountController.state.profileImage,this.profileName=o.AccountController.state.profileName,this.balance=o.AccountController.state.balance,this.balanceSymbol=o.AccountController.state.balanceSymbol,this.network=o.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(o.AccountController.subscribe((t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):o.IN.close()})),o.NetworkController.subscribeKey("caipNetwork",(t=>{t?.id&&(this.network=t)})))}disconnectedCallback(){this.usubscribe.forEach((t=>t()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[this.network?.imageId??""];return a.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${u(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?s.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):s.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${o.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${u(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:t}=o.AccountController.state;return t?a.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:t}=o.NetworkController.state,e=!!t&&t.length>1,r=t?.find((({id:t})=>t===this.network?.id));return e||!r}onCopyAddress(){try{this.address&&(o.j1.copyToClopboard(this.address),o.SnackController.showSuccess("Address copied"))}catch{o.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&o.RouterController.push("Networks")}onTransactions(){o.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),o.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await o.ConnectionController.disconnect(),o.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),o.IN.close()}catch{o.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),o.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=o.AccountController.state;t&&o.j1.openHref(t,"_blank")}};C.styles=_,E([(0,c.SB)()],C.prototype,"address",void 0),E([(0,c.SB)()],C.prototype,"profileImage",void 0),E([(0,c.SB)()],C.prototype,"profileName",void 0),E([(0,c.SB)()],C.prototype,"balance",void 0),E([(0,c.SB)()],C.prototype,"balanceSymbol",void 0),E([(0,c.SB)()],C.prototype,"network",void 0),E([(0,c.SB)()],C.prototype,"disconecting",void 0),C=E([(0,s.customElement)("w3m-account-view")],C);var A=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let k=class extends a.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=o.j1.debounce((t=>{this.search=t}))}render(){const t=this.search.length>=2;return a.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?a.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:a.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return o.j1.isMobile()?a.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){o.RouterController.push("ConnectingWalletConnect")}};A([(0,c.SB)()],k.prototype,"search",void 0),k=A([(0,s.customElement)("w3m-all-wallets-view")],k);const S=a.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var I=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let M=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(o.j1.isMobile())return null;const t=this.connectors.find((t=>"WALLET_CONNECT"===t.type));return t?a.dy`
      <wui-list-wallet
        imageSrc=${u(o.fz.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=o.OptionsController.state;return t?.length?this.filterOutDuplicateWallets(t).map((t=>a.dy`
        <wui-list-wallet
          imageSrc=${u(o.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)):null}featuredTemplate(){const{featured:t}=o.ApiController.state;return t.length?this.filterOutDuplicateWallets(t).map((t=>a.dy`
        <wui-list-wallet
          imageSrc=${u(o.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)):null}recentTemplate(){return o.MO.getRecentWallets().map((t=>a.dy`
        <wui-list-wallet
          imageSrc=${u(o.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((t=>"ANNOUNCED"!==t.type?null:a.dy`
        <wui-list-wallet
          imageSrc=${u(o.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `))}injectedTemplate(){const t=this.connectors.find((t=>"ANNOUNCED"===t.type));return this.connectors.map((e=>"INJECTED"!==e.type?null:o.ConnectionController.checkInstalled()?a.dy`
        <wui-list-wallet
          imageSrc=${u(o.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel=${u(t?void 0:"installed")}
          tagVariant=${u(t?void 0:"success")}
        >
        </wui-list-wallet>
      `:null))}connectorsTemplate(){return this.connectors.map((t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:a.dy`
        <wui-list-wallet
          imageSrc=${u(o.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){const t=10*Math.floor(o.ApiController.state.count/10);return a.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t}=o.ApiController.state,{customWallets:e,featuredWalletIds:r}=o.OptionsController.state,{connectors:n}=o.ConnectorController.state,i=o.MO.getRecentWallets(),s=n.filter((t=>"ANNOUNCED"===t.type));if(r||e||!t.length)return null;const c=s.length+i.length,l=Math.max(0,2-c);return this.filterOutDuplicateWallets(t).slice(0,l).map((t=>a.dy`
        <wui-list-wallet
          imageSrc=${u(o.fz.getWalletImage(t))}
          name=${t?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `))}onConnector(t){"WALLET_CONNECT"===t.type?o.j1.isMobile()?o.RouterController.push("AllWallets"):o.RouterController.push("ConnectingWalletConnect"):o.RouterController.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){const{connectors:e}=o.ConnectorController.state,r=o.MO.getRecentWallets().map((t=>t.id)),n=e.map((t=>t.info?.rdns)).filter(Boolean);return t.filter((t=>!r.includes(t.id)&&!n.includes(t.rdns??void 0)))}onAllWallets(){o.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),o.RouterController.push("AllWallets")}onConnectWallet(t){o.RouterController.push("ConnectingWalletConnect",{wallet:t})}};M.styles=S,I([(0,c.SB)()],M.prototype,"connectors",void 0),M=I([(0,s.customElement)("w3m-connect-view")],M);const O=a.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var P=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};class T extends a.oi{constructor(){super(),this.wallet=o.RouterController.state.data?.wallet,this.connector=o.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=o.fz.getWalletImage(this.wallet)??o.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=o.ConnectionController.state.wcUri,this.error=o.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(o.ConnectionController.subscribeKey("wcUri",(t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),o.ConnectionController.subscribeKey("wcError",(t=>this.error=t)),o.ConnectionController.subscribeKey("buffering",(t=>this.buffering=t)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let e=`Continue in ${this.name}`;return this.buffering&&(e="Connecting..."),this.error&&(e="Connection declined"),a.dy`
      <wui-flex
        data-error=${u(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${u(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?a.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const t=this.shadowRoot?.querySelector("wui-button");t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(o.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const t=o.ThemeController.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return a.dy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(o.j1.copyToClopboard(this.uri),o.SnackController.showSuccess("Link copied"))}catch{o.SnackController.showError("Failed to copy")}}}T.styles=O,P([(0,c.SB)()],T.prototype,"uri",void 0),P([(0,c.SB)()],T.prototype,"error",void 0),P([(0,c.SB)()],T.prototype,"ready",void 0),P([(0,c.SB)()],T.prototype,"showRetry",void 0),P([(0,c.SB)()],T.prototype,"buffering",void 0),P([(0,c.Cb)({type:Boolean})],T.prototype,"isMobile",void 0),P([(0,c.Cb)()],T.prototype,"onRetry",void 0);const N={INJECTED:"browser",ANNOUNCED:"browser"};let R=class extends T{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:N[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&o.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await o.ConnectionController.connectExternal(this.connector),o.IN.close(),o.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){o.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};R=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-external-view")],R);let j=class extends a.oi{constructor(){super(...arguments),this.dappUrl=o.OptionsController.state.metadata?.url,this.dappName=o.OptionsController.state.metadata?.name}render(){return a.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?a.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&o.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){o.RouterController.goBack()}};j=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-siwe-view")],j);var B=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let L=class extends a.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=o.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),o.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),a.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):a.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:e}=o.ConnectionController.state;if(t||o.j1.isPairingExpired(e)){if(o.ConnectionController.connectWalletConnect(),this.wallet){const t=o.fz.getWalletImage(this.wallet);t&&o.MO.setConnectedWalletImageUrl(t)}else{const t=o.ConnectorController.state.connectors.find((t=>"WALLET_CONNECT"===t.type)),e=o.fz.getConnectorImage(t);e&&o.MO.setConnectedWalletImageUrl(e)}await o.ConnectionController.state.wcPromise,this.finalizeConnection(),o.IN.close()}}catch(t){o.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),o.ConnectionController.setWcError(!0),o.j1.isAllowedRetry(this.lastRetry)&&(o.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:t,recentWallet:e}=o.ConnectionController.state;t&&o.MO.setWalletConnectDeepLink(t),e&&o.MO.setWeb3ModalRecent(e),o.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:r,injected:n,rdns:i}=this.wallet,s=n?.map((({injected_id:t})=>t)).filter(Boolean),a=i?[i]:s??[],c=a.length,l=t,u=r,h=o.ConnectionController.checkInstalled(a),d=c&&h,p=e&&!o.j1.isMobile();d&&this.platforms.push("browser"),l&&this.platforms.push(o.j1.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!d&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return a.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return a.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return a.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return a.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return a.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return a.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?a.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const e=this.shadowRoot?.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};B([(0,c.SB)()],L.prototype,"platform",void 0),B([(0,c.SB)()],L.prototype,"platforms",void 0),L=B([(0,s.customElement)("w3m-connecting-wc-view")],L);let $=class extends a.oi{constructor(){super(...arguments),this.wallet=o.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return a.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?a.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?a.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?a.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?a.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&o.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&o.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&o.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&o.j1.openHref(this.wallet.homepage,"_blank")}};$=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-downloads-view")],$);let D=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{o.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:e}=o.ApiController.state,{customWallets:r}=o.OptionsController.state;return[...e,...r??[],...t].slice(0,4).map((t=>a.dy`
        <wui-list-wallet
          name=${t.name??"Unknown"}
          tagVariant="main"
          imageSrc=${u(o.fz.getWalletImage(t))}
          @click=${()=>{o.j1.openHref(t.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};D=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-get-wallet-view")],D);const U=a.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var z=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let F=class extends a.oi{constructor(){super(),this.network=o.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=o.NetworkController.state.caipNetwork,this.unsubscribe.push(o.NetworkController.subscribeKey("caipNetwork",(t=>{t?.id!==this.currentNetwork?.id&&o.RouterController.goBack()})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",e=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return a.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${u(o.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:a.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const t=this.shadowRoot?.querySelector("wui-button");t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await o.NetworkController.switchActiveNetwork(this.network),o.RouterController.goBack())}catch{this.error=!0}}};F.styles=U,z([(0,c.SB)()],F.prototype,"showRetry",void 0),z([(0,c.SB)()],F.prototype,"error",void 0),z([(0,c.SB)()],F.prototype,"currentNetwork",void 0),F=z([(0,s.customElement)("w3m-network-switch-view")],F);var H=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let W=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=o.NetworkController.state.caipNetwork,this.unsubscribe.push(o.NetworkController.subscribeKey("caipNetwork",(t=>this.caipNetwork=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){o.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),o.RouterController.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:e,supportsAllNetworks:r}=o.NetworkController.state,n=t,i=e;return n?.length&&i?.sort(((t,e)=>n.indexOf(e.id)-n.indexOf(t.id))),i?.map((t=>a.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${u(o.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!n?.includes(t.id)}
        ></wui-card-select>
      `))}async onSwitchNetwork(t){const{isConnected:e}=o.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=o.NetworkController.state;e&&i?.id!==t.id?r?.includes(t.id)?await o.NetworkController.switchActiveNetwork(t):n&&o.RouterController.push("SwitchNetwork",{network:t}):e||(o.NetworkController.setCaipNetwork(t),o.RouterController.push("Connect"))}};H([(0,c.SB)()],W.prototype,"caipNetwork",void 0),W=H([(0,s.customElement)("w3m-networks-view")],W);var q=r(10248);const V=a.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var G=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};const Z="last-transaction";let K=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=o.AccountController.state.address,this.transactions=o.sl.state.transactions,this.transactionsByYear=o.sl.state.transactionsByYear,this.loading=o.sl.state.loading,this.empty=o.sl.state.empty,this.next=o.sl.state.next,this.unsubscribe.push(o.AccountController.subscribe((t=>{t.isConnected&&this.address!==t.address&&(this.address=t.address,o.sl.resetTransactions(),o.sl.fetchTransactions(t.address))})),o.sl.subscribe((t=>{this.transactions=t.transactions,this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next})))}firstUpdated(){0===this.transactions.length&&o.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const t=Object.keys(this.transactionsByYear).sort().reverse();return t.map(((e,r)=>{const n=r===t.length-1,i=parseInt(e,10),o=s.TransactionUtil.getTransactionGroupTitle(i),c=this.transactionsByYear[i];return c?a.dy`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(c,n)}
          </wui-flex>
        </wui-flex>
      `:null}))}templateRenderTransaction(t,e){const{date:r,descriptions:n,direction:i,isAllNFT:o,images:c,status:l,transfers:u,type:h}=this.getTransactionListItemProps(t),d=u?.length>1;return 2!==u?.length||o?d?u.map(((t,n)=>{const i=s.TransactionUtil.getTransferDescription(t),o=e&&n===u.length-1;return a.dy` <wui-transaction-list-item
          date=${r}
          direction=${t.direction}
          id=${o&&this.next?Z:""}
          status=${l}
          type=${h}
          onlyDirectionIcon=${!0}
          .images=${[c?.[n]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`})):a.dy`
      <wui-transaction-list-item
        date=${r}
        direction=${i}
        id=${e&&this.next?Z:""}
        status=${l}
        type=${h}
        .images=${c}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `:a.dy`
        <wui-transaction-list-item
          date=${r}
          direction=${i}
          id=${e&&this.next?Z:""}
          status=${l}
          type=${h}
          .images=${c}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `}templateTransactions(t,e){return t.map(((r,n)=>{const i=e&&n===t.length-1;return a.dy`${this.templateRenderTransaction(r,i)}`}))}templateEmpty(){return a.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(a.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((t=>t))}createPaginationObserver(){const{projectId:t}=o.OptionsController.state;this.paginationObserver=new IntersectionObserver((([e])=>{e?.isIntersecting&&!this.loading&&(o.sl.fetchTransactions(this.address),o.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:t,cursor:this.next}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${Z}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const e=q.E.getRelativeDateFromNow(t?.metadata?.minedAt),r=s.TransactionUtil.getTransactionDescriptions(t),n=t?.transfers,i=t?.transfers?.[0],o=Boolean(i)&&t?.transfers?.every((t=>Boolean(t.nft_info))),a=s.TransactionUtil.getTransactionImages(n);return{date:e,direction:i?.direction,descriptions:r,isAllNFT:o,images:a,status:t.metadata?.status,transfers:n,type:t.metadata?.operationType}}};K.styles=V,G([(0,c.SB)()],K.prototype,"address",void 0),G([(0,c.SB)()],K.prototype,"transactions",void 0),G([(0,c.SB)()],K.prototype,"transactionsByYear",void 0),G([(0,c.SB)()],K.prototype,"loading",void 0),G([(0,c.SB)()],K.prototype,"empty",void 0),G([(0,c.SB)()],K.prototype,"next",void 0),K=G([(0,s.customElement)("w3m-transactions-view")],K);const Q=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let J=class extends a.oi{render(){return a.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Q}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{o.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};J=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-what-is-a-network-view")],J);const Y=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let X=class extends a.oi{render(){return a.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Y}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){o.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),o.RouterController.push("GetWallet")}};X=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-what-is-a-wallet-view")],X);const tt=a.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var et=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};const rt="local-paginator";let nt=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!o.ApiController.state.wallets.length,this.wallets=o.ApiController.state.wallets,this.recommended=o.ApiController.state.recommended,this.featured=o.ApiController.state.featured,this.unsubscribe.push(o.ApiController.subscribeKey("wallets",(t=>this.wallets=t)),o.ApiController.subscribeKey("recommended",(t=>this.recommended=t)),o.ApiController.subscribeKey("featured",(t=>this.featured=t)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),this.paginationObserver?.disconnect()}render(){return a.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const t=this.shadowRoot?.querySelector("wui-grid");this.initial&&t&&(await o.ApiController.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map((()=>a.dy`
        <wui-card-select-loader type="wallet" id=${u(e)}></wui-card-select-loader>
      `))}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map((t=>a.dy`
        <wui-card-select
          imageSrc=${u(o.fz.getWalletImage(t))}
          type="wallet"
          name=${t.name}
          @click=${()=>this.onConnectWallet(t)}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:r,count:n}=o.ApiController.state,i=window.innerWidth<352?3:4,s=t.length+e.length;let a=Math.ceil(s/i)*i-s+i;return a-=t.length?r.length%i:0,0===n||[...r,...t,...e].length<n?this.shimmerTemplate(a,rt):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${rt}`);t&&(this.paginationObserver=new IntersectionObserver((([t])=>{if(t?.isIntersecting&&!this.initial){const{page:t,count:e,wallets:r}=o.ApiController.state;r.length<e&&o.ApiController.fetchWallets({page:t+1})}})),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:e}=o.ConnectorController.state,r=e.find((({explorerId:e})=>e===t.id));r?o.RouterController.push("ConnectingExternal",{connector:r}):o.RouterController.push("ConnectingWalletConnect",{wallet:t})}};nt.styles=tt,et([(0,c.SB)()],nt.prototype,"initial",void 0),et([(0,c.SB)()],nt.prototype,"wallets",void 0),et([(0,c.SB)()],nt.prototype,"recommended",void 0),et([(0,c.SB)()],nt.prototype,"featured",void 0),nt=et([(0,s.customElement)("w3m-all-wallets-list")],nt);const it=a.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var ot=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let st=class extends a.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?a.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await o.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=o.ApiController.state;return t.length?a.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map((t=>a.dy`
            <wui-card-select
              imageSrc=${u(o.fz.getWalletImage(t))}
              type="wallet"
              name=${t.name}
              @click=${()=>this.onConnectWallet(t)}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:a.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:e}=o.ConnectorController.state,r=e.find((({explorerId:e})=>e===t.id));r?o.RouterController.push("ConnectingExternal",{connector:r}):o.RouterController.push("ConnectingWalletConnect",{wallet:t})}};st.styles=it,ot([(0,c.SB)()],st.prototype,"loading",void 0),ot([(0,c.Cb)()],st.prototype,"query",void 0),st=ot([(0,s.customElement)("w3m-all-wallets-search")],st);var at=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let ct=class extends a.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(o.ConnectionController.subscribeKey("buffering",(t=>this.buffering=t)))}disconnectCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.generateTabs();return a.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map((t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=t.map((({platform:t})=>t)),t}onTabChange(t){const e=this.platformTabs[t];e&&this.onSelectPlatfrom?.(e)}};at([(0,c.Cb)({type:Array})],ct.prototype,"platforms",void 0),at([(0,c.Cb)()],ct.prototype,"onSelectPlatfrom",void 0),at([(0,c.SB)()],ct.prototype,"buffering",void 0),ct=at([(0,s.customElement)("w3m-connecting-header")],ct);let lt=class extends T{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=o.ConnectorController.state,e=t.find((t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns)),r=t.find((t=>"INJECTED"===t.type));e?await o.ConnectionController.connectExternal(e):r&&await o.ConnectionController.connectExternal(r),o.IN.close(),o.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){o.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};lt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-wc-browser")],lt);let ut=class extends T{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:e}=this.wallet,{redirect:r,href:n}=o.j1.formatNativeUrl(t,this.uri);o.ConnectionController.setWcLinking({name:e,href:n}),o.ConnectionController.setRecentWallet(this.wallet),o.j1.openHref(r,"_self")}catch{this.error=!0}}};ut=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-wc-desktop")],ut);let ht=class extends T{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:e}=this.wallet,{redirect:r,href:n}=o.j1.formatNativeUrl(t,this.uri);o.ConnectionController.setWcLinking({name:e,href:n}),o.ConnectionController.setRecentWallet(this.wallet),o.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const t=o.j1.isIos();"visible"===document?.visibilityState&&!this.error&&t&&(o.ConnectionController.setBuffering(!0),setTimeout((()=>{o.ConnectionController.setBuffering(!1)}),5e3))}};ht=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-wc-mobile")],ht);const dt=a.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let pt=class extends T{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),a.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return o.ConnectionController.setWcLinking(void 0),o.ConnectionController.setRecentWallet(this.wallet),a.dy`<wui-qr-code
      size=${t}
      theme=${o.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${u(o.fz.getWalletImage(this.wallet))}
      alt=${u(e)}
    ></wui-qr-code>`}};pt.styles=dt,pt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-wc-qrcode")],pt);const ft=a.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let mt=class extends a.oi{constructor(){super(...arguments),this.dappImageUrl=o.OptionsController.state.metadata?.icons,this.walletImageUrl=o.MO.getConnectedWalletImageUrl()}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return a.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};mt.styles=ft,mt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-siwe")],mt);let gt=class extends a.oi{constructor(){if(super(),this.wallet=o.RouterController.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${u(o.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};gt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-wc-unsupported")],gt);let yt=class extends T{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:e}=this.wallet,{redirect:r,href:n}=o.j1.formatUniversalUrl(t,this.uri);o.ConnectionController.setWcLinking({name:e,href:n}),o.ConnectionController.setRecentWallet(this.wallet),o.j1.openHref(r,"_blank")}catch{this.error=!0}}};yt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-connecting-wc-web")],yt);const bt=a.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var wt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};function vt(){const t=o.RouterController.state.data?.connector?.name,e=o.RouterController.state.data?.wallet?.name,r=o.RouterController.state.data?.network?.name,n=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:n?`Get ${n}`:"Downloads",Transactions:"Activity"}}let xt=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.heading=vt()[o.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(o.RouterController.subscribeKey("view",(t=>{this.onViewChange(t),this.onHistoryChange()})),o.ConnectionController.subscribeKey("buffering",(t=>this.buffering=t)))}disconnectCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${o.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){o.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),o.RouterController.push("WhatIsAWallet")}titleTemplate(){return a.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=o.RouterController.state,e="Connect"===t;return this.showBack?a.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${o.RouterController.goBack}
      ></wui-icon-link>`:a.dy`<wui-icon-link
      data-hidden=${!e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?a.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){const e=this.shadowRoot?.querySelector("wui-text");if(e){const r=vt()[t];await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:t}=o.RouterController.state,e=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&e?(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};xt.styles=[bt],wt([(0,c.SB)()],xt.prototype,"heading",void 0),wt([(0,c.SB)()],xt.prototype,"buffering",void 0),wt([(0,c.SB)()],xt.prototype,"showBack",void 0),xt=wt([(0,s.customElement)("w3m-header")],xt);var _t=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Et=class extends a.oi{constructor(){super(...arguments),this.data=[]}render(){return a.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((t=>a.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map((t=>a.dy`<wui-visual name=${t}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};_t([(0,c.Cb)({type:Array})],Et.prototype,"data",void 0),Et=_t([(0,s.customElement)("w3m-help-widget")],Et);const Ct=a.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let At=class extends a.oi{render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=o.OptionsController.state;return t||e?a.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=o.OptionsController.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=o.OptionsController.state;return t?a.dy`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=o.OptionsController.state;return t?a.dy`<a href=${t}>Privacy Policy</a>`:null}};At.styles=[Ct],At=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([(0,s.customElement)("w3m-legal-footer")],At);const kt=a.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var St=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let It=class extends a.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:r,chrome_store:n,homepage:i}=this.wallet,c=o.j1.isMobile(),l=o.j1.isIos(),u=o.j1.isAndroid(),h=[e,r,i,n].filter(Boolean).length>1,d=s.UiHelperUtil.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return h&&!c?a.dy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>o.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&i?a.dy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&l?a.dy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&u?a.dy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&o.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&o.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&o.j1.openHref(this.wallet.homepage,"_blank")}};It.styles=[kt],St([(0,c.Cb)({type:Object})],It.prototype,"wallet",void 0),It=St([(0,s.customElement)("w3m-mobile-download-links")],It);const Mt=a.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var Ot=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};const Pt={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Tt=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=o.SnackController.state.open,this.unsubscribe.push(o.SnackController.subscribeKey("open",(t=>{this.open=t,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((t=>t()))}render(){const{message:t,variant:e}=o.SnackController.state,r=Pt[e];return a.dy`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>o.SnackController.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Tt.styles=Mt,Ot([(0,c.SB)()],Tt.prototype,"open",void 0),Tt=Ot([(0,s.customElement)("w3m-snackbar")],Tt);let Nt=!1;class Rt{constructor(t){this.initPromise=void 0,this.setIsConnected=t=>{o.AccountController.setIsConnected(t)},this.setCaipAddress=t=>{o.AccountController.setCaipAddress(t)},this.setBalance=(t,e)=>{o.AccountController.setBalance(t,e)},this.setProfileName=t=>{o.AccountController.setProfileName(t)},this.setProfileImage=t=>{o.AccountController.setProfileImage(t)},this.resetAccount=()=>{o.AccountController.resetAccount()},this.setCaipNetwork=t=>{o.NetworkController.setCaipNetwork(t)},this.getCaipNetwork=()=>o.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=t=>{o.NetworkController.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>o.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{o.NetworkController.resetNetwork()},this.setConnectors=t=>{o.ConnectorController.setConnectors(t)},this.addConnector=t=>{o.ConnectorController.addConnector(t)},this.getConnectors=()=>o.ConnectorController.getConnectors(),this.resetWcConnection=()=>{o.ConnectionController.resetWcConnection()},this.fetchIdentity=t=>o.Lr.fetchIdentity(t),this.setAddressExplorerUrl=t=>{o.AccountController.setAddressExplorerUrl(t)},this.setSIWENonce=t=>{o.yD.setNonce(t)},this.setSIWESession=t=>{o.yD.setSession(t)},this.setSIWEStatus=t=>{o.yD.setStatus(t)},this.setSIWEMessage=t=>{o.yD.setMessage(t)},this.getSIWENonce=()=>o.yD.state.nonce,this.getSIWESession=()=>o.yD.state.session,this.getSIWEStatus=()=>o.yD.state.status,this.getSIWEMessage=()=>o.yD.state.message,this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),o.IN.open(t)}async close(){await this.initOrContinue(),o.IN.close()}getThemeMode(){return o.ThemeController.state.themeMode}getThemeVariables(){return o.ThemeController.state.themeVariables}setThemeMode(t){o.ThemeController.setThemeMode(t),(0,s.setColorTheme)(o.ThemeController.state.themeMode)}setThemeVariables(t){o.ThemeController.setThemeVariables(t),(0,s.setThemeVariables)(o.ThemeController.state.themeVariables)}subscribeTheme(t){return o.ThemeController.subscribe(t)}getState(){return{...o.Ie.state}}subscribeState(t){return o.Ie.subscribe(t)}getEvent(){return{...o.Xs.state}}subscribeEvents(t){return o.Xs.subscribe(t)}subscribeSIWEState(t){return o.yD.subscribe(t)}initControllers(t){o.NetworkController.setClient(t.networkControllerClient),o.NetworkController.setDefaultCaipNetwork(t.defaultChain),o.OptionsController.setProjectId(t.projectId),o.OptionsController.setIncludeWalletIds(t.includeWalletIds),o.OptionsController.setExcludeWalletIds(t.excludeWalletIds),o.OptionsController.setFeaturedWalletIds(t.featuredWalletIds),o.OptionsController.setTokens(t.tokens),o.OptionsController.setTermsConditionsUrl(t.termsConditionsUrl),o.OptionsController.setPrivacyPolicyUrl(t.privacyPolicyUrl),o.OptionsController.setCustomWallets(t.customWallets),o.OptionsController.setEnableAnalytics(t.enableAnalytics),o.OptionsController.setSdkVersion(t._sdkVersion),o.ConnectionController.setClient(t.connectionControllerClient),t.siweControllerClient&&o.yD.setSIWEClient(t.siweControllerClient),t.metadata&&o.OptionsController.setMetadata(t.metadata),t.themeMode&&o.ThemeController.setThemeMode(t.themeMode),t.themeVariables&&o.ThemeController.setThemeVariables(t.themeVariables)}async initOrContinue(){return this.initPromise||Nt||!o.j1.isClient()||(Nt=!0,this.initPromise=new Promise((async t=>{await Promise.all([Promise.resolve().then(r.bind(r,85233)),Promise.resolve().then(r.bind(r,96541))]);const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),t()}))),this.initPromise}}const jt={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.3.2"},Bt={ConnectorExplorerIds:{[jt.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[jt.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[jt.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[jt.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[jt.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[jt.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[jt.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[jt.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[jt.INJECTED_CONNECTOR_ID]:"Browser Wallet",[jt.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[jt.COINBASE_CONNECTOR_ID]:"Coinbase",[jt.LEDGER_CONNECTOR_ID]:"Ledger",[jt.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[jt.INJECTED_CONNECTOR_ID]:"INJECTED",[jt.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[jt.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},Lt={caipNetworkIdToNumber:t=>t?Number(t.split(":")[1]):void 0,getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach((([t,r])=>{e[`${jt.EIP155}:${t}`]=r})),e}};function $t(t){if(t)return{id:`${jt.EIP155}:${t.id}`,name:t.name,imageId:Bt.EIP155NetworkImageIds[t.id]}}class Dt extends Rt{constructor(t){const{wagmiConfig:e,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...c}=t;if(!e)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!e.connectors.find((t=>t.id===jt.WALLET_CONNECT_CONNECTOR_ID)))throw new Error("web3modal:constructor - WalletConnectConnector is required");super({networkControllerClient:{switchCaipNetwork:async t=>{const e=Lt.caipNetworkIdToNumber(t?.id);e&&await(0,n.If)({chainId:e})},async getApprovedCaipNetworksData(){const t=localStorage.getItem("wagmi.wallet");if(t?.includes(jt.WALLET_CONNECT_CONNECTOR_ID)){const t=e.connectors.find((t=>t.id===jt.WALLET_CONNECT_CONNECTOR_ID));if(!t)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const r=await t.getProvider(),n=r.signer?.session?.namespaces,i=n?.[jt.EIP155]?.methods,o=n?.[jt.EIP155]?.chains;return{supportsAllNetworks:i?.includes(jt.ADD_CHAIN_METHOD),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:{connectWalletConnect:async t=>{const r=e.connectors.find((t=>t.id===jt.WALLET_CONNECT_CONNECTOR_ID));if(!r)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",(e=>{"display_uri"===e.type&&(t(e.data),r.removeAllListeners())}));const i=Lt.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await(0,n.$j)({connector:r,chainId:i})},connectExternal:async({id:t,provider:r,info:i})=>{const o=e.connectors.find((e=>e.id===t));if(!o)throw new Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&o.id===jt.EIP6963_CONNECTOR_ID&&o.setEip6963Wallet?.({provider:r,info:i});const s=Lt.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await(0,n.$j)({connector:o,chainId:s})},checkInstalled:t=>{const e=this.getConnectors().filter((t=>"ANNOUNCED"===t.type)),r=this.getConnectors().find((t=>"INJECTED"===t.type));return t?!(!e.length||!t.some((t=>e.some((e=>e.info?.rdns===t)))))||!!r&&!!window?.ethereum&&t.some((t=>Boolean(window.ethereum?.[String(t)]))):Boolean(window.ethereum)},disconnect:n.zP},siweControllerClient:r,defaultChain:$t(o),tokens:Lt.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${jt.VERSION}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(i),this.syncConnectors(e),this.listenConnectors(e),(0,n.uH)((()=>this.syncAccount())),(0,n.QC)((()=>this.syncNetwork()))}getState(){const t=super.getState();return{...t,selectedNetworkId:Lt.caipNetworkIdToNumber(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState((e=>t({...e,selectedNetworkId:Lt.caipNetworkIdToNumber(e.selectedNetworkId)})))}syncRequestedNetworks(t){const e=t?.map((t=>({id:`${jt.EIP155}:${t.id}`,name:t.name,imageId:Bt.EIP155NetworkImageIds[t.id],imageUrl:this.options?.chainImages?.[t.id]})));this.setRequestedCaipNetworks(e??[])}async syncAccount(){const{address:t,isConnected:e}=(0,n.D0)(),{chain:r}=(0,n.Hy)();if(this.resetAccount(),e&&t&&r){const n=`${jt.EIP155}:${r.id}:${t}`;this.setIsConnected(e),this.setCaipAddress(n),await Promise.all([this.syncProfile(t),this.syncBalance(t,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!e&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){const{address:t,isConnected:e}=(0,n.D0)(),{chain:r}=(0,n.Hy)();if(r){const n=String(r.id),i=`${jt.EIP155}:${n}`;if(this.setCaipNetwork({id:i,name:r.name,imageId:Bt.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),e&&t){const e=`${jt.EIP155}:${r.id}:${t}`;if(this.setCaipAddress(e),r.blockExplorers?.default?.url){const e=`${r.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(e)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,r)}}}async syncProfile(t){try{const{name:e,avatar:r}=await this.fetchIdentity({caipChainId:`${jt.EIP155}:${i.R.id}`,address:t});this.setProfileName(e),this.setProfileImage(r)}catch{const e=await(0,n.Lk)({address:t,chainId:i.R.id});if(e){this.setProfileName(e);const t=await(0,n.w6)({name:e,chainId:i.R.id});t&&this.setProfileImage(t)}}}async syncBalance(t,e){const r=await(0,n.EG)({address:t,chainId:e.id,token:this.options?.tokens?.[e.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(t){const e=[];t.connectors.forEach((({id:t,name:r})=>{t!==jt.EIP6963_CONNECTOR_ID&&e.push({id:t,explorerId:Bt.ConnectorExplorerIds[t],imageId:Bt.ConnectorImageIds[t],imageUrl:this.options?.connectorImages?.[t],name:Bt.ConnectorNamesMap[t]??r,type:Bt.ConnectorTypesMap[t]??"EXTERNAL"})})),this.setConnectors(e)}eip6963EventHandler(t,e){if(e.detail){const{info:r,provider:n}=e.detail;this.getConnectors().find((t=>t.name===r.name))||(this.addConnector({id:jt.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[jt.EIP6963_CONNECTOR_ID],name:r.name,provider:n,info:r}),t.isAuthorized({info:r,provider:n}))}}listenConnectors(t){const e=t.connectors.find((t=>t.id===jt.EIP6963_CONNECTOR_ID));if("undefined"!=typeof window&&e){const t=this.eip6963EventHandler.bind(this,e);window.addEventListener(jt.EIP6963_ANNOUNCE_EVENT,t),window.dispatchEvent(new Event(jt.EIP6963_REQUEST_EVENT))}}}var Ut,zt,Ft=r(1155),Ht=function(t,e,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(t,r):i?i.value=r:e.set(t,r),r},Wt=function(t,e,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(t):n?n.value:e.get(t)};const qt="connectedRdns";class Vt extends Ft._{constructor(t){super({chains:t.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",Ut.set(this,void 0),zt.set(this,void 0),Ht(this,Ut,this.options.getProvider(),"f")}async connect(t){const e=await super.connect(t);return Wt(this,zt,"f")&&this.storage?.setItem(qt,Wt(this,zt,"f").info.rdns),e}async disconnect(){await super.disconnect(),this.storage?.removeItem(qt),Ht(this,zt,void 0,"f")}async isAuthorized(t){const e=this.storage?.getItem(qt);if(e){if(!t||e!==t.info.rdns)return!0;Ht(this,zt,t,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(Wt(this,zt,"f")?.provider??Wt(this,Ut,"f"))}setEip6963Wallet(t){Ht(this,zt,t,"f")}}Ut=new WeakMap,zt=new WeakMap;var Gt=r(48764);"undefined"!=typeof window&&(window.Buffer||(window.Buffer=Gt.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var Zt,Kt,Qt=r(57858),Jt=r(53516),Yt=r(53324),Xt=r(45775),te=r(39028),ee=r(91677),re=r(3980),ne=r(92106),ie=class extends Yt.wR{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,Yt.Ko)(this,Zt,void 0),(0,Yt.Ko)(this,Kt,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,Xt.K)(t[0])})},this.onChainChanged=t=>{const e=(0,Jt.J)(t),r=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const r=await e.enable(),n=(0,Xt.K)(r[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:n,chain:{id:i,unsupported:o}}}catch(t){if(/(user closed modal|accounts received is empty)/i.test(t.message))throw new te.ab(t);throw t}}async disconnect(){if(!(0,Yt.ac)(this,Kt))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const t=await this.getProvider(),e=await t.request({method:"eth_accounts"});return(0,Xt.K)(e[0])}async getChainId(){const t=await this.getProvider();return(0,Jt.J)(t.chainId)}async getProvider(){if(!(0,Yt.ac)(this,Kt)){let t=(await Promise.resolve().then(r.t.bind(r,45811,19))).default;"function"!=typeof t&&"function"==typeof t.default&&(t=t.default),(0,Yt.qx)(this,Zt,new t(this.options));const e=(0,Yt.ac)(this,Zt).walletExtension?.getChainId(),n=this.chains.find((t=>this.options.chainId?t.id===this.options.chainId:t.id===e))||this.chains[0],i=this.options.chainId||n?.id,o=this.options.jsonRpcUrl||n?.rpcUrls.default.http[0];(0,Yt.qx)(this,Kt,(0,Yt.ac)(this,Zt).makeWeb3Provider(o,i))}return(0,Yt.ac)(this,Kt)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find((e=>e.id===t));if(!e)throw new Error("provider is required.");return(0,ee.K)({account:r,chain:n,transport:(0,re.P)(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider(),r=(0,ne.eC)(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find((e=>e.id===t))??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){const i=this.chains.find((e=>e.id===t));if(!i)throw new Qt.B({chainId:t,connectorId:this.id});if(4902===n.code)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(t){throw new te.ab(t)}throw new te.x3(n)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:n}}})}};Zt=new WeakMap,Kt=new WeakMap;var oe,se,ae,ce,le,ue,he,de,pe,fe,me,ge,ye,be,we,ve,xe,_e,Ee,Ce,Ae=r(49795),ke="eip155",Se="requestedChains",Ie="wallet_addEthereumChain",Me=class extends Yt.wR{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,Yt.Ko)(this,ae),(0,Yt.Ko)(this,le),(0,Yt.Ko)(this,he),(0,Yt.Ko)(this,pe),(0,Yt.Ko)(this,me),(0,Yt.Ko)(this,ye),(0,Yt.Ko)(this,we),(0,Yt.Ko)(this,xe),(0,Yt.Ko)(this,Ee),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,Yt.Ko)(this,oe,void 0),(0,Yt.Ko)(this,se,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,Xt.K)(t[0])})},this.onChainChanged=t=>{const e=Number(t),r=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:r}})},this.onDisconnect=()=>{(0,Yt.U9)(this,ye,be).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},(0,Yt.U9)(this,ae,ce).call(this)}async connect({chainId:t,pairingTopic:e}={}){try{let r=t;if(!r){const t=this.storage?.getItem("store"),e=t?.state?.data?.chain?.id;r=e&&!this.isChainUnsupported(e)?e:this.chains[0]?.id}if(!r)throw new Error("No chains found on connector.");const n=await this.getProvider();(0,Yt.U9)(this,pe,fe).call(this);const i=(0,Yt.U9)(this,he,de).call(this);if(n.session&&i&&await n.disconnect(),!n.session||i){const t=this.chains.filter((t=>t.id!==r)).map((t=>t.id));this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:e,chains:[r],optionalChains:t.length?t:void 0}),(0,Yt.U9)(this,ye,be).call(this,this.chains.map((({id:t})=>t)))}const o=await n.enable(),s=(0,Xt.K)(o[0]),a=await this.getChainId();return{account:s,chain:{id:a,unsupported:this.isChainUnsupported(a)}}}catch(t){if(/user rejected/i.test(t?.message))throw new te.ab(t);throw t}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{(0,Yt.U9)(this,me,ge).call(this),(0,Yt.U9)(this,ye,be).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return(0,Xt.K)(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return(0,Yt.ac)(this,oe)||await(0,Yt.U9)(this,ae,ce).call(this),t&&await this.switchChain(t),(0,Yt.ac)(this,oe)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),n=this.chains.find((e=>e.id===t));if(!e)throw new Error("provider is required.");return(0,ee.K)({account:r,chain:n,transport:(0,re.P)(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,Yt.U9)(this,he,de).call(this);if(!t)return!1;if(r&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){const e=this.chains.find((e=>e.id===t));if(!e)throw new te.x3(new Error("chain not found on connector."));try{const r=await this.getProvider(),n=(0,Yt.U9)(this,xe,_e).call(this),i=(0,Yt.U9)(this,Ee,Ce).call(this);if(!n.includes(t)&&i.includes(Ie)){await r.request({method:Ie,params:[{chainId:(0,ne.eC)(e.id),blockExplorerUrls:[e.blockExplorers?.default?.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const n=(0,Yt.U9)(this,we,ve).call(this);n.push(t),(0,Yt.U9)(this,ye,be).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,ne.eC)(t)}]}),e}catch(t){if(/user rejected request/i.test("string"==typeof t?t:t?.message))throw new te.ab(t);throw new te.x3(t)}}};oe=new WeakMap,se=new WeakMap,ae=new WeakSet,ce=async function(){return(0,Yt.ac)(this,se)||"undefined"==typeof window||(0,Yt.qx)(this,se,(0,Yt.U9)(this,le,ue).call(this)),(0,Yt.ac)(this,se)},le=new WeakSet,ue=async function(){const{EthereumProvider:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:n}=await Promise.resolve().then(r.bind(r,21093)),[i,...o]=this.chains.map((({id:t})=>t));if(i){const{projectId:r,showQrModal:s=!0,qrModalOptions:a,metadata:c,relayUrl:l}=this.options;(0,Yt.qx)(this,oe,await t.init({showQrModal:s,qrModalOptions:a,projectId:r,optionalMethods:n,optionalEvents:e,chains:[i],optionalChains:o.length?o:void 0,rpcMap:Object.fromEntries(this.chains.map((t=>[t.id,t.rpcUrls.default.http[0]]))),metadata:c,relayUrl:l}))}},he=new WeakSet,de=function(){if((0,Yt.U9)(this,Ee,Ce).call(this).includes(Ie))return!1;if(!this.options.isNewChainsStale)return!1;const t=(0,Yt.U9)(this,we,ve).call(this),e=this.chains.map((({id:t})=>t)),r=(0,Yt.U9)(this,xe,_e).call(this);return!(r.length&&!r.some((t=>e.includes(t)))||e.every((e=>t.includes(e))))},pe=new WeakSet,fe=function(){(0,Yt.ac)(this,oe)&&((0,Yt.U9)(this,me,ge).call(this),(0,Yt.ac)(this,oe).on("accountsChanged",this.onAccountsChanged),(0,Yt.ac)(this,oe).on("chainChanged",this.onChainChanged),(0,Yt.ac)(this,oe).on("disconnect",this.onDisconnect),(0,Yt.ac)(this,oe).on("session_delete",this.onDisconnect),(0,Yt.ac)(this,oe).on("display_uri",this.onDisplayUri),(0,Yt.ac)(this,oe).on("connect",this.onConnect))},me=new WeakSet,ge=function(){(0,Yt.ac)(this,oe)&&((0,Yt.ac)(this,oe).removeListener("accountsChanged",this.onAccountsChanged),(0,Yt.ac)(this,oe).removeListener("chainChanged",this.onChainChanged),(0,Yt.ac)(this,oe).removeListener("disconnect",this.onDisconnect),(0,Yt.ac)(this,oe).removeListener("session_delete",this.onDisconnect),(0,Yt.ac)(this,oe).removeListener("display_uri",this.onDisplayUri),(0,Yt.ac)(this,oe).removeListener("connect",this.onConnect))},ye=new WeakSet,be=function(t){this.storage?.setItem(Se,t)},we=new WeakSet,ve=function(){return this.storage?.getItem(Se)??[]},xe=new WeakSet,_e=function(){if(!(0,Yt.ac)(this,oe))return[];const t=(0,Yt.ac)(this,oe).session?.namespaces;if(!t)return[];const e=(0,Ae.fK)(t),r=e[ke]?.chains?.map((t=>parseInt(t.split(":")[1]||"")));return r??[]},Ee=new WeakSet,Ce=function(){if(!(0,Yt.ac)(this,oe))return[];const t=(0,Yt.ac)(this,oe).session?.namespaces;if(!t)return[];const e=(0,Ae.fK)(t),r=e[ke]?.methods;return r??[]};const Oe=o.j1.getBlockchainApiUrl();function Pe({projectId:t}){return function(e){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(e.id))return null;const r=`${Oe}/v1/?chainId=${jt.EIP155}:${e.id}&projectId=${t}`;return{chain:{...e,rpcUrls:{...e.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}function Te({projectId:t,chains:e,metadata:r}){const{publicClient:i}=(0,n.QB)(e,[Pe({projectId:t}),function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}]);return(0,n._g)({autoConnect:!0,connectors:[new Me({chains:e,options:{projectId:t,showQrModal:!1,metadata:r}}),new Vt({chains:e}),new Ft._({chains:e,options:{shimDisconnect:!0}}),new ie({chains:e,options:{appName:r?.name??"Unknown"}})],publicClient:i})}function Ne(t){return new Dt({...t,_sdkVersion:`html-wagmi-${jt.VERSION}`})}},97582:(t,e,r)=>{"use strict";r.r(e),r.d(e,{__addDisposableResource:()=>R,__assign:()=>o,__asyncDelegator:()=>A,__asyncGenerator:()=>C,__asyncValues:()=>k,__await:()=>E,__awaiter:()=>f,__classPrivateFieldGet:()=>P,__classPrivateFieldIn:()=>N,__classPrivateFieldSet:()=>T,__createBinding:()=>g,__decorate:()=>a,__disposeResources:()=>B,__esDecorate:()=>l,__exportStar:()=>y,__extends:()=>i,__generator:()=>m,__importDefault:()=>O,__importStar:()=>M,__makeTemplateObject:()=>S,__metadata:()=>p,__param:()=>c,__propKey:()=>h,__read:()=>w,__rest:()=>s,__runInitializers:()=>u,__setFunctionName:()=>d,__spread:()=>v,__spreadArray:()=>_,__spreadArrays:()=>x,__values:()=>b,default:()=>L});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};function s(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}function a(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}function c(t,e){return function(r,n){e(r,n,t)}}function l(t,e,r,n,i,o){function s(t){if(void 0!==t&&"function"!=typeof t)throw new TypeError("Function expected");return t}for(var a,c=n.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!e&&t?n.static?t:t.prototype:null,h=e||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),d=!1,p=r.length-1;p>=0;p--){var f={};for(var m in n)f[m]="access"===m?{}:n[m];for(var m in n.access)f.access[m]=n.access[m];f.addInitializer=function(t){if(d)throw new TypeError("Cannot add initializers after decoration has completed");o.push(s(t||null))};var g=(0,r[p])("accessor"===c?{get:h.get,set:h.set}:h[l],f);if("accessor"===c){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(a=s(g.get))&&(h.get=a),(a=s(g.set))&&(h.set=a),(a=s(g.init))&&i.unshift(a)}else(a=s(g))&&("field"===c?i.unshift(a):h[l]=a)}u&&Object.defineProperty(u,n.name,h),d=!0}function u(t,e,r){for(var n=arguments.length>2,i=0;i<e.length;i++)r=n?e[i].call(t,r):e[i].call(t);return n?r:void 0}function h(t){return"symbol"==typeof t?t:"".concat(t)}function d(t,e,r){return"symbol"==typeof e&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})}function p(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}function m(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var g=Object.create?function(t,e,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]};function y(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||g(e,t,r)}function b(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(w(arguments[e]));return t}function x(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}function _(t,e,r){if(r||2===arguments.length)for(var n,i=0,o=e.length;i<o;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))}function E(t){return this instanceof E?(this.v=t,this):new E(t)}function C(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(t,e||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(t){i[t]&&(n[t]=function(e){return new Promise((function(r,n){o.push([t,e,r,n])>1||a(t,e)}))})}function a(t,e){try{(r=i[t](e)).value instanceof E?Promise.resolve(r.value.v).then(c,l):u(o[0][2],r)}catch(t){u(o[0][3],t)}var r}function c(t){a("next",t)}function l(t){a("throw",t)}function u(t,e){t(e),o.shift(),o.length&&a(o[0][0],o[0][1])}}function A(t){var e,r;return e={},n("next"),n("throw",(function(t){throw t})),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,i){e[n]=t[n]?function(e){return(r=!r)?{value:E(t[n](e)),done:!1}:i?i(e):e}:i}}function k(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=b(t),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise((function(n,i){!function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)}(n,i,(e=t[r](e)).done,e.value)}))}}}function S(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var I=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function M(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&g(e,t,r);return I(e,t),e}function O(t){return t&&t.__esModule?t:{default:t}}function P(t,e,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(t):n?n.value:e.get(t)}function T(t,e,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(t,r):i?i.value=r:e.set(t,r),r}function N(t,e){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof t?e===t:t.has(e)}function R(t,e,r){if(null!=e){if("object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=e[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=e[Symbol.dispose]}if("function"!=typeof n)throw new TypeError("Object not disposable.");t.stack.push({value:e,dispose:n,async:r})}else r&&t.stack.push({async:!0});return e}var j="function"==typeof SuppressedError?SuppressedError:function(t,e,r){var n=new Error(r);return n.name="SuppressedError",n.error=t,n.suppressed=e,n};function B(t){function e(e){t.error=t.hasError?new j(e,t.error,"An error was suppressed during disposal."):e,t.hasError=!0}return function r(){for(;t.stack.length;){var n=t.stack.pop();try{var i=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(i).then(r,(function(t){return e(t),r()}))}catch(t){e(t)}}if(t.hasError)throw t.error}()}const L={__extends:i,__assign:o,__rest:s,__decorate:a,__param:c,__metadata:p,__awaiter:f,__generator:m,__createBinding:g,__exportStar:y,__values:b,__read:w,__spread:v,__spreadArrays:x,__spreadArray:_,__await:E,__asyncGenerator:C,__asyncDelegator:A,__asyncValues:k,__makeTemplateObject:S,__importStar:M,__importDefault:O,__classPrivateFieldGet:P,__classPrivateFieldSet:T,__classPrivateFieldIn:N,__addDisposableResource:R,__disposeResources:B}},53160:(t,e,r)=>{"use strict";r.d(e,{E:()=>i});var n=r(16867);function i(t=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,n.P)(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}},20605:(t,e,r)=>{"use strict";r.d(e,{z:()=>o});var n=r(53160),i=r(16867);function o(t,e){e||(e=t.reduce(((t,e)=>t+e.length),0));const r=(0,n.E)(e);let o=0;for(const e of t)r.set(e,o),o+=e.length;return(0,i.P)(r)}},52217:(t,e,r)=>{"use strict";r.d(e,{m:()=>o});var n=r(95114),i=r(16867);function o(t,e="utf8"){const r=n.Z[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return"utf8"!==e&&"utf-8"!==e||null==globalThis.Buffer||null==globalThis.Buffer.from?r.decoder.decode(`${r.prefix}${t}`):(0,i.P)(globalThis.Buffer.from(t,"utf-8"))}},37466:(t,e,r)=>{"use strict";r.d(e,{BB:()=>o.B,mL:()=>i.m,zo:()=>n.z});var n=r(20605),i=r(52217),o=r(92263)},92263:(t,e,r)=>{"use strict";r.d(e,{B:()=>i});var n=r(95114);function i(t,e="utf8"){const r=n.Z[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return"utf8"!==e&&"utf-8"!==e||null==globalThis.Buffer||null==globalThis.Buffer.from?r.encoder.encode(t).substring(1):globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8")}},16867:(t,e,r)=>{"use strict";function n(t){return null!=globalThis.Buffer?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}r.d(e,{P:()=>n})},95114:(t,e,r)=>{"use strict";r.d(e,{Z:()=>Ut});var n={};r.r(n),r.d(n,{identity:()=>S});var i={};r.r(i),r.d(i,{base2:()=>I});var o={};r.r(o),r.d(o,{base8:()=>M});var s={};r.r(s),r.d(s,{base10:()=>O});var a={};r.r(a),r.d(a,{base16:()=>P,base16upper:()=>T});var c={};r.r(c),r.d(c,{base32:()=>N,base32hex:()=>L,base32hexpad:()=>D,base32hexpadupper:()=>U,base32hexupper:()=>$,base32pad:()=>j,base32padupper:()=>B,base32upper:()=>R,base32z:()=>z});var l={};r.r(l),r.d(l,{base36:()=>F,base36upper:()=>H});var u={};r.r(u),r.d(u,{base58btc:()=>W,base58flickr:()=>q});var h={};r.r(h),r.d(h,{base64:()=>V,base64pad:()=>G,base64url:()=>Z,base64urlpad:()=>K});var d={};r.r(d),r.d(d,{base256emoji:()=>X});var p={};r.r(p),r.d(p,{sha256:()=>xt,sha512:()=>_t});var f={};r.r(f),r.d(f,{identity:()=>Ct});var m={};r.r(m),r.d(m,{code:()=>kt,decode:()=>It,encode:()=>St,name:()=>At});var g={};r.r(g),r.d(g,{code:()=>Tt,decode:()=>Rt,encode:()=>Nt,name:()=>Pt});const y=function(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(255!==r[s])throw new TypeError(o+" is ambiguous");r[s]=i}var a=t.length,c=t.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;var e=0;if(" "!==t[e]){for(var n=0,i=0;t[e]===c;)n++,e++;for(var o=(t.length-e)*l+1>>>0,s=new Uint8Array(o);t[e];){var u=r[t.charCodeAt(e)];if(255===u)return;for(var h=0,d=o-1;(0!==u||h<i)&&-1!==d;d--,h++)u+=a*s[d]>>>0,s[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=h,e++}if(" "!==t[e]){for(var p=o-i;p!==o&&0===s[p];)p++;for(var f=new Uint8Array(n+(o-p)),m=n;p!==o;)f[m++]=s[p++];return f}}}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,n=0,i=0,o=e.length;i!==o&&0===e[i];)i++,r++;for(var s=(o-i)*u+1>>>0,l=new Uint8Array(s);i!==o;){for(var h=e[i],d=0,p=s-1;(0!==h||d<n)&&-1!==p;p--,d++)h+=256*l[p]>>>0,l[p]=h%a>>>0,h=h/a>>>0;if(0!==h)throw new Error("Non-zero carry");n=d,i++}for(var f=s-n;f!==s&&0===l[f];)f++;for(var m=c.repeat(r);f<s;++f)m+=t.charAt(l[f]);return m},decodeUnsafe:h,decode:function(t){var r=h(t);if(r)return r;throw new Error(`Non-${e} character`)}}},b=(new Uint8Array(0),t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")});class w{constructor(t,e,r){this.name=t,this.prefix=e,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class v{constructor(t,e,r){if(this.name=t,this.prefix=e,void 0===e.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=e.codePointAt(0),this.baseDecode=r}decode(t){if("string"==typeof t){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(t){return _(this,t)}}class x{constructor(t){this.decoders=t}or(t){return _(this,t)}decode(t){const e=t[0],r=this.decoders[e];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const _=(t,e)=>new x({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class E{constructor(t,e,r,n){this.name=t,this.prefix=e,this.baseEncode=r,this.baseDecode=n,this.encoder=new w(t,e,r),this.decoder=new v(t,e,n)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const C=({name:t,prefix:e,encode:r,decode:n})=>new E(t,e,r,n),A=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:i}=y(r,e);return C({prefix:t,name:e,encode:n,decode:t=>b(i(t))})},k=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>C({prefix:e,name:t,encode:t=>((t,e,r)=>{const n="="===e[e.length-1],i=(1<<r)-1;let o="",s=0,a=0;for(let n=0;n<t.length;++n)for(a=a<<8|t[n],s+=8;s>r;)s-=r,o+=e[i&a>>s];if(s&&(o+=e[i&a<<r-s]),n)for(;o.length*r&7;)o+="=";return o})(t,n,r),decode:e=>((t,e,r,n)=>{const i={};for(let t=0;t<e.length;++t)i[e[t]]=t;let o=t.length;for(;"="===t[o-1];)--o;const s=new Uint8Array(o*r/8|0);let a=0,c=0,l=0;for(let e=0;e<o;++e){const o=i[t[e]];if(void 0===o)throw new SyntaxError(`Non-${n} character`);c=c<<r|o,a+=r,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s})(e,n,r,t)}),S=C({prefix:"\0",name:"identity",encode:t=>{return e=t,(new TextDecoder).decode(e);var e},decode:t=>(t=>(new TextEncoder).encode(t))(t)}),I=k({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),M=k({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),O=A({prefix:"9",name:"base10",alphabet:"0123456789"}),P=k({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),T=k({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),N=k({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),R=k({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),j=k({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),B=k({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),L=k({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),$=k({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),D=k({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),U=k({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),z=k({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),F=A({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),H=A({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),W=A({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),q=A({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),V=k({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),G=k({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Z=k({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),K=k({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Q=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),J=Q.reduce(((t,e,r)=>(t[r]=e,t)),[]),Y=Q.reduce(((t,e,r)=>(t[e.codePointAt(0)]=r,t)),[]),X=C({prefix:"🚀",name:"base256emoji",encode:function(t){return t.reduce(((t,e)=>t+J[e]),"")},decode:function(t){const e=[];for(const r of t){const t=Y[r.codePointAt(0)];if(void 0===t)throw new Error(`Non-base256emoji character: ${r}`);e.push(t)}return new Uint8Array(e)}});var tt=128,et=-128,rt=Math.pow(2,31),nt=Math.pow(2,7),it=Math.pow(2,14),ot=Math.pow(2,21),st=Math.pow(2,28),at=Math.pow(2,35),ct=Math.pow(2,42),lt=Math.pow(2,49),ut=Math.pow(2,56),ht=Math.pow(2,63);const dt=function t(e,r,n){r=r||[];for(var i=n=n||0;e>=rt;)r[n++]=255&e|tt,e/=128;for(;e&et;)r[n++]=255&e|tt,e>>>=7;return r[n]=0|e,t.bytes=n-i+1,r},pt=function(t){return t<nt?1:t<it?2:t<ot?3:t<st?4:t<at?5:t<ct?6:t<lt?7:t<ut?8:t<ht?9:10},ft=(t,e,r=0)=>(dt(t,e,r),e),mt=t=>pt(t),gt=(t,e)=>{const r=e.byteLength,n=mt(t),i=n+mt(r),o=new Uint8Array(i+r);return ft(t,o,0),ft(r,o,n),o.set(e,i),new yt(t,r,e,o)};class yt{constructor(t,e,r,n){this.code=t,this.size=e,this.digest=r,this.bytes=n}}const bt=({name:t,code:e,encode:r})=>new wt(t,e,r);class wt{constructor(t,e,r){this.name=t,this.code=e,this.encode=r}digest(t){if(t instanceof Uint8Array){const e=this.encode(t);return e instanceof Uint8Array?gt(this.code,e):e.then((t=>gt(this.code,t)))}throw Error("Unknown type, must be binary type")}}const vt=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),xt=bt({name:"sha2-256",code:18,encode:vt("SHA-256")}),_t=bt({name:"sha2-512",code:19,encode:vt("SHA-512")}),Et=b,Ct={code:0,name:"identity",encode:Et,digest:t=>gt(0,Et(t))},At="raw",kt=85,St=t=>b(t),It=t=>b(t),Mt=new TextEncoder,Ot=new TextDecoder,Pt="json",Tt=512,Nt=t=>Mt.encode(JSON.stringify(t)),Rt=t=>JSON.parse(Ot.decode(t));Symbol.toStringTag,Symbol.for("nodejs.util.inspect.custom"),Symbol.for("@ipld/js-cid/CID");const jt={...n,...i,...o,...s,...a,...c,...l,...u,...h,...d};var Bt=r(53160);function Lt(t,e,r,n){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:r},decoder:{decode:n}}}const $t=Lt("utf8","u",(t=>"u"+new TextDecoder("utf8").decode(t)),(t=>(new TextEncoder).encode(t.substring(1)))),Dt=Lt("ascii","a",(t=>{let e="a";for(let r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e}),(t=>{t=t.substring(1);const e=(0,Bt.E)(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e})),Ut={utf8:$t,"utf-8":$t,hex:jt.base16,latin1:Dt,ascii:Dt,binary:Dt,...jt}},96828:(t,e,r)=>{"use strict";r.d(e,{sj:()=>h,iH:()=>f,CO:()=>p,Ld:()=>d}),Symbol();const n=Symbol(),i=Object.getPrototypeOf,o=new WeakMap,s=(t,e=!0)=>{o.set(t,e)},a=t=>"object"==typeof t&&null!==t,c=new WeakMap,l=new WeakSet,[u]=((t=Object.is,e=((t,e)=>new Proxy(t,e)),r=(t=>a(t)&&!l.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer)),u=(t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}}),h=new WeakMap,d=((t,e,r=u)=>{const n=h.get(t);if((null==n?void 0:n[0])===e)return n[1];const i=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return s(i,!0),h.set(t,[e,i]),Reflect.ownKeys(t).forEach((e=>{if(Object.getOwnPropertyDescriptor(i,e))return;const n=Reflect.get(t,e),o={value:n,enumerable:!0,configurable:!0};if(l.has(n))s(n,!1);else if(n instanceof Promise)delete o.value,o.get=()=>r(n);else if(c.has(n)){const[t,e]=c.get(n);o.value=d(t,e(),r)}Object.defineProperty(i,e,o)})),Object.preventExtensions(i)}),p=new WeakMap,f=[1,1],m=(s=>{if(!a(s))throw new Error("object required");const u=p.get(s);if(u)return u;let h=f[0];const g=new Set,y=(t,e=++f[0])=>{h!==e&&(h=e,g.forEach((r=>r(t,e))))};let b=f[1];const w=t=>(e,r)=>{const n=[...e];n[1]=[t,...n[1]],y(n,r)},v=new Map,x=t=>{var e;const r=v.get(t);r&&(v.delete(t),null==(e=r[1])||e.call(r))},_=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),E=e(_,{deleteProperty(t,e){const r=Reflect.get(t,e);x(e);const n=Reflect.deleteProperty(t,e);return n&&y(["delete",[e],r]),n},set(e,s,u,h){const d=Reflect.has(e,s),f=Reflect.get(e,s,h);if(d&&(t(f,u)||p.has(u)&&t(f,p.get(u))))return!0;var b;x(s),a(u)&&(u=(t=>t&&(o.has(t)?o.get(t):i(t)===Object.prototype||i(t)===Array.prototype))(b=u)&&b[n]||null||u);let _=u;if(u instanceof Promise)u.then((t=>{u.status="fulfilled",u.value=t,y(["resolve",[s],t])})).catch((t=>{u.status="rejected",u.reason=t,y(["reject",[s],t])}));else{!c.has(u)&&r(u)&&(_=m(u));const t=!l.has(_)&&c.get(_);t&&((t,e)=>{if(v.has(t))throw new Error("prop listener already exists");if(g.size){const r=e[3](w(t));v.set(t,[e,r])}else v.set(t,[e])})(s,t)}return Reflect.set(e,s,_,h),y(["set",[s],u,f]),!0}});p.set(s,E);const C=[_,(t=++f[1])=>(b===t||g.size||(b=t,v.forEach((([e])=>{const r=e[1](t);r>h&&(h=r)}))),h),d,t=>(g.add(t),1===g.size&&v.forEach((([t,e],r)=>{if(e)throw new Error("remove already exists");const n=t[3](w(r));v.set(r,[t,n])})),()=>{g.delete(t),0===g.size&&v.forEach((([t,e],r)=>{e&&(e(),v.set(r,[t]))}))})];return c.set(E,C),Reflect.ownKeys(s).forEach((t=>{const e=Object.getOwnPropertyDescriptor(s,t);"value"in e&&(E[t]=s[t],delete e.value,delete e.writable),Object.defineProperty(_,t,e)})),E}))=>[m,c,l,t,e,r,u,h,d,p,f])();function h(t={}){return u(t)}function d(t,e,r){const n=c.get(t);let i;n||console.warn("Please use proxy object");const o=[],s=n[3];let a=!1;const l=s((t=>{o.push(t),r?e(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,a&&e(o.splice(0))})))}));return a=!0,()=>{a=!1,l()}}function p(t,e){const r=c.get(t);r||console.warn("Please use proxy object");const[n,i,o]=r;return o(n,i(),e)}function f(t){return l.add(t),t}},14503:(t,e,r)=>{"use strict";function n(t){return"string"==typeof t?{address:t,type:"json-rpc"}:t}r.d(e,{T:()=>n})},76143:(t,e,r)=>{"use strict";r.d(e,{R:()=>w});var n=r(14503),i=r(16693);const o="0x82ad56cb";var s=r(62027),a=r(80377),c=r(15980),l=r(7210),u=r(77799),h=r(47864),d=r(92106),p=r(26445),f=r(87469),m=r(61163),g=r(74688),y=r(32357),b=r(47531);async function w(t,e){const{account:w=t.account,batch:v=Boolean(t.batch?.multicall),blockNumber:x,blockTag:_="latest",accessList:E,data:C,gas:A,gasPrice:k,maxFeePerGas:S,maxPriorityFeePerGas:I,nonce:M,to:O,value:P,...T}=e,N=w?(0,n.T)(w):void 0;try{(0,b.F)(e);const r=(x?(0,d.eC)(x):void 0)||_,n=t.chain?.formatters?.transactionRequest?.format,s=(n||g.tG)({...(0,m.K)(T,{format:n}),from:N?.address,accessList:E,data:C,gas:A,gasPrice:k,maxFeePerGas:S,maxPriorityFeePerGas:I,nonce:M,to:O,value:P});if(v&&function({request:t}){const{data:e,to:r,...n}=t;return!(!e||e.startsWith(o)||!r||Object.values(n).filter((t=>void 0!==t)).length>0)}({request:s}))try{return await async function(t,e){const{batchSize:r=1024,wait:n=0}="object"==typeof t.batch?.multicall?t.batch.multicall:{},{blockNumber:o,blockTag:s="latest",data:p,multicallAddress:f,to:m}=e;let g=f;if(!g){if(!t.chain)throw new a.pZ;g=(0,h.L)({blockNumber:o,chain:t.chain,contract:"multicall3"})}const b=(o?(0,d.eC)(o):void 0)||s,{schedule:w}=(0,y.S)({id:`${t.uid}.${b}`,wait:n,shouldSplitBatch(t){const e=t.reduce(((t,{data:e})=>t+(e.length-2)),0);return e>2*r},fn:async e=>{const r=e.map((t=>({allowFailure:!0,callData:t.data,target:t.to}))),n=(0,u.R)({abi:i.F8,args:[r],functionName:"aggregate3"}),o=await t.request({method:"eth_call",params:[{data:n,to:g},b]});return(0,l.k)({abi:i.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:v,success:x}]=await w({data:p,to:m});if(!x)throw new c.VQ({data:v});return"0x"===v?{data:void 0}:{data:v}}(t,{...s,blockNumber:x,blockTag:_})}catch(t){if(!(t instanceof a.pZ||t instanceof a.mm))throw t}const p=await t.request({method:"eth_call",params:r?[s,r]:[s]});return"0x"===p?{data:void 0}:{data:p}}catch(n){const i=function(t){if(!(t instanceof s.G))return;const e=t.walk();return"object"==typeof e.data?e.data.data:e.data}(n),{offchainLookup:o,offchainLookupSignature:a}=await Promise.resolve().then(r.bind(r,99770));if(i?.slice(0,10)===a&&O)return{data:await o(t,{data:i,to:O})};throw function(t,{docsPath:e,...r}){const n=(()=>{const e=(0,f.k)(t,r);return e instanceof p.cj?t:e})();return new c.cg(n,{docsPath:e,...r})}(n,{...e,account:N,chain:t.chain})}}},43861:(t,e,r)=>{"use strict";r.d(e,{C:()=>l,X:()=>c});var n=r(15371),i=r(93714),o=r(79379),s=r(87097),a=r(24453);async function c(t,e){return l(t,e)}async function l(t,e){const{block:r,chain:c=t.chain,request:l,type:u="eip1559"}=e||{},h=await(async()=>"function"==typeof c?.fees?.baseFeeMultiplier?c.fees.baseFeeMultiplier({block:r,client:t,request:l}):c?.fees?.baseFeeMultiplier??1.2)();if(h<1)throw new n.Fz;const d=10**(h.toString().split(".")[1]?.length??0),p=t=>t*BigInt(Math.ceil(h*d))/BigInt(d),f=r||await(0,i.s)(t,s.Q,"getBlock")({});if("function"==typeof c?.fees?.estimateFeesPerGas)return c.fees.estimateFeesPerGas({block:r,client:t,multiply:p,request:l,type:u});if("eip1559"===u){if("bigint"!=typeof f.baseFeePerGas)throw new n.e5;const e=l?.maxPriorityFeePerGas?l.maxPriorityFeePerGas:await(0,o.h)(t,{block:f,chain:c,request:l}),r=p(f.baseFeePerGas);return{maxFeePerGas:l?.maxFeePerGas??r+e,maxPriorityFeePerGas:e}}return{gasPrice:l?.gasPrice??p(await(0,i.s)(t,a.o,"getGasPrice")({}))}}},84241:(t,e,r)=>{"use strict";r.d(e,{Q:()=>y});var n=r(14503),i=r(8998),o=r(92106),s=r(39625),a=r(67795),c=r(62027),l=r(33639);class u extends c.G{constructor(t,{account:e,docsPath:r,chain:n,data:i,gas:o,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:p,value:f}){const m=(0,l.xr)({from:e?.address,to:p,value:void 0!==f&&`${(0,s.d)(f)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:i,gas:o,gasPrice:void 0!==c&&`${(0,a.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,a.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,a.o)(h)} gwei`,nonce:d});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}}var h=r(26445),d=r(87469),p=r(61163),f=r(74688),m=r(47531),g=r(37397);async function y(t,e){const r=e.account??t.account;if(!r)throw new i.o({docsPath:"/docs/actions/public/estimateGas"});const s=(0,n.T)(r);try{const{accessList:r,blockNumber:n,blockTag:i,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:y,value:b,...w}="local"===s.type?await(0,g.Z)(t,e):e,v=(n?(0,o.eC)(n):void 0)||i;(0,m.F)(e);const x=t.chain?.formatters?.transactionRequest?.format,_=(x||f.tG)({...(0,p.K)(w,{format:x}),from:s.address,accessList:r,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:y,value:b}),E=await t.request({method:"eth_estimateGas",params:v?[_,v]:[_]});return BigInt(E)}catch(r){throw function(t,{docsPath:e,...r}){const n=(()=>{const e=(0,d.k)(t,r);return e instanceof h.cj?t:e})();return new u(n,{docsPath:e,...r})}(r,{...e,account:s,chain:t.chain})}}},79379:(t,e,r)=>{"use strict";r.d(e,{_:()=>c,h:()=>l});var n=r(15371),i=r(95946),o=r(93714),s=r(87097),a=r(24453);async function c(t,e){return l(t,e)}async function l(t,e){const{block:r,chain:c=t.chain,request:l}=e||{};if("function"==typeof c?.fees?.defaultPriorityFee){const e=r||await(0,o.s)(t,s.Q,"getBlock")({});return c.fees.defaultPriorityFee({block:e,client:t,request:l})}if(void 0!==c?.fees?.defaultPriorityFee)return c?.fees?.defaultPriorityFee;try{const e=await t.request({method:"eth_maxPriorityFeePerGas"});return(0,i.y_)(e)}catch{const[e,i]=await Promise.all([r?Promise.resolve(r):(0,o.s)(t,s.Q,"getBlock")({}),(0,o.s)(t,a.o,"getGasPrice")({})]);if("bigint"!=typeof e.baseFeePerGas)throw new n.e5;const c=i-e.baseFeePerGas;return c<0n?0n:c}}},87097:(t,e,r)=>{"use strict";r.d(e,{Q:()=>a});var n=r(62027);class i extends n.G{constructor({blockHash:t,blockNumber:e}){let r="Block";t&&(r=`Block at hash "${t}"`),e&&(r=`Block at number "${e}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}var o=r(92106),s=r(43310);async function a(t,{blockHash:e,blockNumber:r,blockTag:n,includeTransactions:a}={}){const c=n??"latest",l=a??!1,u=void 0!==r?(0,o.eC)(r):void 0;let h=null;if(h=e?await t.request({method:"eth_getBlockByHash",params:[e,l]}):await t.request({method:"eth_getBlockByNumber",params:[u||c,l]}),!h)throw new i({blockHash:e,blockNumber:r});return(t.chain?.formatters?.block?.format||s.Z)(h)}},79524:(t,e,r)=>{"use strict";r.d(e,{L:()=>i});var n=r(95946);async function i(t){const e=await t.request({method:"eth_chainId"});return(0,n.ly)(e)}},24453:(t,e,r)=>{"use strict";async function n(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}r.d(e,{o:()=>n})},86162:(t,e,r)=>{"use strict";r.d(e,{K:()=>o});var n=r(95946),i=r(92106);async function o(t,{address:e,blockTag:r="latest",blockNumber:o}){const s=await t.request({method:"eth_getTransactionCount",params:[e,o?(0,i.eC)(o):r]});return(0,n.ly)(s)}},37397:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(14503),i=r(43861),o=r(84241),s=r(87097),a=r(86162),c=r(8998),l=r(15371),u=r(93714),h=r(47531),d=r(82994);async function p(t,e){const{account:r=t.account,chain:p,gas:f,nonce:m,type:g}=e;if(!r)throw new c.o;const y=(0,n.T)(r),b=await(0,u.s)(t,s.Q,"getBlock")({blockTag:"latest"}),w={...e,from:y.address};if(void 0===m&&(w.nonce=await(0,u.s)(t,a.K,"getTransactionCount")({address:y.address,blockTag:"pending"})),void 0===g)try{w.type=(0,d.l)(w)}catch{w.type="bigint"==typeof b.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===w.type){const{maxFeePerGas:r,maxPriorityFeePerGas:n}=await(0,i.C)(t,{block:b,chain:p,request:w});if(void 0===e.maxPriorityFeePerGas&&e.maxFeePerGas&&e.maxFeePerGas<n)throw new l.ld({maxPriorityFeePerGas:n});w.maxPriorityFeePerGas=n,w.maxFeePerGas=r}else{if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)throw new l.e5;const{gasPrice:r}=await(0,i.C)(t,{block:b,chain:p,request:w,type:"legacy"});w.gasPrice=r}return void 0===f&&(w.gas=await(0,u.s)(t,o.Q,"estimateGas")({...w,account:{address:y.address,type:"json-rpc"}})),(0,h.F)(w),w}},99238:(t,e,r)=>{"use strict";async function n(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}r.d(e,{p:()=>n})},52736:(t,e,r)=>{"use strict";r.d(e,{T:()=>g});var n=r(14503),i=r(8998),o=r(33840),s=r(26445),a=r(33639),c=r(87469),l=r(61163),u=r(74688),h=r(93714),d=r(47531),p=r(79524),f=r(37397),m=r(99238);async function g(t,e){const{account:r=t.account,chain:g=t.chain,accessList:y,data:b,gas:w,gasPrice:v,maxFeePerGas:x,maxPriorityFeePerGas:_,nonce:E,to:C,value:A,...k}=e;if(!r)throw new i.o({docsPath:"/docs/actions/wallet/sendTransaction"});const S=(0,n.T)(r);try{let r;if((0,d.F)(e),null!==g&&(r=await(0,h.s)(t,p.L,"getChainId")({}),(0,o.q)({currentChainId:r,chain:g})),"local"===S.type){const e=await(0,h.s)(t,f.Z,"prepareTransactionRequest")({account:S,accessList:y,chain:g,data:b,gas:w,gasPrice:v,maxFeePerGas:x,maxPriorityFeePerGas:_,nonce:E,to:C,value:A,...k});r||(r=await(0,h.s)(t,p.L,"getChainId")({}));const n=g?.serializers?.transaction,i=await S.signTransaction({...e,chainId:r},{serializer:n});return await(0,h.s)(t,m.p,"sendRawTransaction")({serializedTransaction:i})}const n=t.chain?.formatters?.transactionRequest?.format,i=(n||u.tG)({...(0,l.K)(k,{format:n}),accessList:y,data:b,from:S.address,gas:w,gasPrice:v,maxFeePerGas:x,maxPriorityFeePerGas:_,nonce:E,to:C,value:A});return await t.request({method:"eth_sendTransaction",params:[i]})}catch(t){throw function(t,{docsPath:e,...r}){const n=(()=>{const e=(0,c.k)(t,r);return e instanceof s.cj?t:e})();return new a.mk(n,{docsPath:e,...r})}(t,{...e,account:S,chain:e.chain||void 0})}}},61877:(t,e,r)=>{"use strict";r.d(e,{n:()=>s});var n=r(77799),i=r(93714),o=r(52736);async function s(t,{abi:e,address:r,args:s,dataSuffix:a,functionName:c,...l}){const u=(0,n.R)({abi:e,args:s,functionName:c});return await(0,i.s)(t,o.T,"sendTransaction")({data:`${u}${a?a.replace("0x",""):""}`,to:r,...l})}},6891:(t,e,r)=>{"use strict";r.d(e,{w:()=>n});const n=(0,r(86164).a)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0})},66403:(t,e,r)=>{"use strict";r.d(e,{R:()=>n});const n=(0,r(86164).a)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},35194:(t,e,r)=>{"use strict";r.d(e,{F:()=>n});const n=(0,r(86164).a)({id:11155111,network:"sepolia",name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"SEP",decimals:18},rpcUrls:{alchemy:{http:["https://eth-sepolia.g.alchemy.com/v2"],webSocket:["wss://eth-sepolia.g.alchemy.com/v2"]},infura:{http:["https://sepolia.infura.io/v3"],webSocket:["wss://sepolia.infura.io/ws/v3"]},default:{http:["https://rpc.sepolia.org"]},public:{http:["https://rpc.sepolia.org"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://sepolia.etherscan.io"},default:{name:"Etherscan",url:"https://sepolia.etherscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x21B000Fd62a880b2125A61e36a284BB757b76025",blockCreated:3914906}},testnet:!0})},9914:(t,e,r)=>{"use strict";r.d(e,{e:()=>c});var n=r(14503);const i=256;let o,s=i;function a(t=11){if(!o||s+t>2*i){o="",s=0;for(let t=0;t<i;t++)o+=(256+256*Math.random()|0).toString(16).substring(1)}return o.substring(s,s+++t)}function c(t){const{batch:e,cacheTime:r=t.pollingInterval??4e3,key:i="base",name:o="Base Client",pollingInterval:s=4e3,type:c="base"}=t,l=t.chain,u=t.account?(0,n.T)(t.account):void 0,{config:h,request:d,value:p}=t.transport({chain:l,pollingInterval:s}),f={account:u,batch:e,cacheTime:r,chain:l,key:i,name:o,pollingInterval:s,request:d,transport:{...h,...p},type:c,uid:a()};return Object.assign(f,{extend:function t(e){return r=>{const n=r(e);for(const t in f)delete n[t];const i={...e,...n};return Object.assign(i,{extend:t(i)})}}(f)})}},91677:(t,e,r)=>{"use strict";r.d(e,{K:()=>_});var n=r(9914),i=r(79524),o=r(92106),s=r(30286),a=r(52736),c=r(45775),l=r(37397),u=r(99238),h=r(14503),d=r(8998),p=r(33840),f=r(74688),m=r(93714),g=r(47531),y=r(15102),b=r(96070),w=r(67829),v=r(61877);function x(t){return{addChain:e=>async function(t,{chain:e}){const{id:r,name:n,nativeCurrency:i,rpcUrls:s,blockExplorers:a}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:(0,o.eC)(r),chainName:n,nativeCurrency:i,rpcUrls:s.default.http,blockExplorerUrls:a?Object.values(a).map((({url:t})=>t)):void 0}]})}(t,e),deployContract:e=>function(t,{abi:e,args:r,bytecode:n,...i}){const o=(0,s.w)({abi:e,args:r,bytecode:n});return(0,a.T)(t,{...i,data:o})}(t,e),getAddresses:()=>async function(t){return"local"===t.account?.type?[t.account.address]:(await t.request({method:"eth_accounts"})).map((t=>(0,c.x)(t)))}(t),getChainId:()=>(0,i.L)(t),getPermissions:()=>async function(t){return await t.request({method:"wallet_getPermissions"})}(t),prepareTransactionRequest:e=>(0,l.Z)(t,e),requestAddresses:()=>async function(t){return(await t.request({method:"eth_requestAccounts"})).map((t=>(0,c.K)(t)))}(t),requestPermissions:e=>async function(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}(t,e),sendRawTransaction:e=>(0,u.p)(t,e),sendTransaction:e=>(0,a.T)(t,e),signMessage:e=>async function(t,{account:e=t.account,message:r}){if(!e)throw new d.o({docsPath:"/docs/actions/wallet/signMessage"});const n=(0,h.T)(e);if("local"===n.type)return n.signMessage({message:r});const i="string"==typeof r?(0,o.$G)(r):r.raw instanceof Uint8Array?(0,o.NC)(r.raw):r.raw;return t.request({method:"personal_sign",params:[i,n.address]})}(t,e),signTransaction:e=>async function(t,e){const{account:r=t.account,chain:n=t.chain,...s}=e;if(!r)throw new d.o({docsPath:"/docs/actions/wallet/signTransaction"});const a=(0,h.T)(r);(0,g.F)({account:a,...e});const c=await(0,m.s)(t,i.L,"getChainId")({});null!==n&&(0,p.q)({currentChainId:c,chain:n});const l=n?.formatters||t.chain?.formatters,u=l?.transactionRequest?.format||f.tG;return"local"===a.type?a.signTransaction({...s,chainId:c},{serializer:t.chain?.serializers?.transaction}):await t.request({method:"eth_signTransaction",params:[{...u(s),chainId:(0,o.eC)(c),from:a.address}]})}(t,e),signTypedData:e=>async function(t,{account:e=t.account,domain:r,message:n,primaryType:i,types:o}){if(!e)throw new d.o({docsPath:"/docs/actions/wallet/signTypedData"});const s=(0,h.T)(e),a={EIP712Domain:(0,w.cj)({domain:r}),...o};if((0,w.iC)({domain:r,message:n,primaryType:i,types:a}),"local"===s.type)return s.signTypedData({domain:r,primaryType:i,types:a,message:n});const c=(0,b.P)({domain:r??{},primaryType:i,types:a,message:n},((t,e)=>(0,y.v)(e)?e.toLowerCase():e));return t.request({method:"eth_signTypedData_v4",params:[s.address,c]})}(t,e),switchChain:e=>async function(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.eC)(e)}]})}(t,e),watchAsset:e=>async function(t,e){return await t.request({method:"wallet_watchAsset",params:e})}(t,e),writeContract:e=>(0,v.n)(t,e)}}function _(t){const{key:e="wallet",name:r="Wallet Client",transport:i}=t;return(0,n.e)({...t,key:e,name:r,transport:t=>i({...t,retryCount:0}),type:"walletClient"}).extend(x)}},31031:(t,e,r)=>{"use strict";r.d(e,{q:()=>i});var n=r(37029);function i({key:t,name:e,request:r,retryCount:i=3,retryDelay:o=150,timeout:s,type:a},c){return{config:{key:t,name:e,request:r,retryCount:i,retryDelay:o,timeout:s,type:a},request:(0,n.n)(r,{retryCount:i,retryDelay:o}),value:c}}},3980:(t,e,r)=>{"use strict";r.d(e,{P:()=>i});var n=r(31031);function i(t,e={}){const{key:r="custom",name:i="Custom Provider",retryDelay:o}=e;return({retryCount:s})=>(0,n.q)({key:r,name:i,request:t.request.bind(t),retryCount:e.retryCount??s,retryDelay:o,type:"custom"})}},16693:(t,e,r)=>{"use strict";r.d(e,{$o:()=>l,F8:()=>n,X$:()=>c,du:()=>s,k3:()=>o,nZ:()=>a});const n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],s=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],a=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],c=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],l=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},21746:(t,e,r)=>{"use strict";r.d(e,{$:()=>n,Up:()=>i,hZ:()=>o});const n={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:(t,e,r)=>{"use strict";r.d(e,{Bd:()=>o,Zn:()=>i,ez:()=>n});const n={gwei:9,wei:18},i={ether:-9,wei:9},o={ether:-18,gwei:-9}},34849:(t,e,r)=>{"use strict";r.d(e,{normalize:()=>yt});var n="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";const i=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]),o=4;function s(t){return function(t){let e=0;return()=>t[e++]}(function(t){let e=0;function r(){return t[e++]<<8|t[e++]}let n=r(),i=1,o=[0,1];for(let t=1;t<n;t++)o.push(i+=r());let s=r(),a=e;e+=s;let c=0,l=0;function u(){return 0==c&&(l=l<<8|t[e++],c=8),l>>--c&1}const h=2**31,d=h>>>1,p=h-1;let f=0;for(let t=0;t<31;t++)f=f<<1|u();let m=[],g=0,y=h;for(;;){let t=Math.floor(((f-g+1)*i-1)/y),e=0,r=n;for(;r-e>1;){let n=e+r>>>1;t<o[n]?r=n:e=n}if(0==e)break;m.push(e);let s=g+Math.floor(y*o[e]/i),a=g+Math.floor(y*o[e+1]/i)-1;for(;0==((s^a)&d);)f=f<<1&p|u(),s=s<<1&p,a=a<<1&p|1;for(;s&~a&536870912;)f=f&d|f<<1&p>>>1|u(),s=s<<1^d,a=(a^d)<<1|d|1;g=s,y=1+a-s}let b=n-4;return m.map((e=>{switch(e-b){case 3:return b+65792+(t[a++]<<16|t[a++]<<8|t[a++]);case 2:return b+256+(t[a++]<<8|t[a++]);case 1:return b+t[a++];default:return e-1}}))}(function(t){let e=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach(((t,r)=>e[t.charCodeAt(0)]=r));let r=t.length,n=new Uint8Array(6*r>>3);for(let i=0,o=0,s=0,a=0;i<r;i++)a=a<<6|e[t.charCodeAt(i)],s+=6,s>=8&&(n[o++]=a>>(s-=8));return n}(t)))}function a(t){return 1&t?~t>>1:t>>1}function c(t,e){let r=Array(t);for(let n=0,i=0;n<t;n++)r[n]=i+=a(e());return r}function l(t,e=0){let r=[];for(;;){let n=t(),i=t();if(!i)break;e+=n;for(let t=0;t<i;t++)r.push(e+t);e+=i+1}return r}function u(t){return d((()=>{let e=l(t);if(e.length)return e}))}function h(t){let e=[];for(;;){let r=t();if(0==r)break;e.push(f(r,t))}for(;;){let r=t()-1;if(r<0)break;e.push(m(r,t))}return e.flat()}function d(t){let e=[];for(;;){let r=t(e.length);if(!r)break;e.push(r)}return e}function p(t,e,r){let n=Array(t).fill().map((()=>[]));for(let i=0;i<e;i++)c(t,r).forEach(((t,e)=>n[e].push(t)));return n}function f(t,e){let r=1+e(),n=e(),i=d(e);return p(i.length,1+t,e).flatMap(((t,e)=>{let[o,...s]=t;return Array(i[e]).fill().map(((t,e)=>{let i=e*n;return[o+e*r,s.map((t=>t+i))]}))}))}function m(t,e){return p(1+e(),1+t,e).map((t=>[t[0],t.slice(1)]))}function g(t){return`{${function(t){return t.toString(16).toUpperCase().padStart(2,"0")}(t)}}`}function y(t){let e=t.length;if(e<4096)return String.fromCodePoint(...t);let r=[];for(let n=0;n<e;)r.push(String.fromCodePoint(...t.slice(n,n+=4096)));return r.join("")}function b(t,e){let r=t.length,n=r-e.length;for(let i=0;0==n&&i<r;i++)n=t[i]-e[i];return n}var w="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";const v=44032,x=4352,_=4449,E=4519,C=28,A=21*C,k=v+19*A,S=x+19,I=_+21,M=E+C;function O(t){return t>>24&255}function P(t){return 16777215&t}let T,N,R,j;function B(t){return t>=v&&t<k}function L(t,e){if(t>=x&&t<S&&e>=_&&e<I)return v+(t-x)*A+(e-_)*C;if(B(t)&&e>E&&e<M&&(t-v)%C==0)return t+(e-E);{let r=j.get(t);return r&&(r=r.get(e),r)?r:-1}}function $(t){T||function(){let t=s(w);T=new Map(u(t).flatMap(((t,e)=>t.map((t=>[t,e+1<<24]))))),N=new Set(l(t)),R=new Map,j=new Map;for(let[e,r]of h(t)){if(!N.has(e)&&2==r.length){let[t,n]=r,i=j.get(t);i||(i=new Map,j.set(t,i)),i.set(n,e)}R.set(e,r.reverse())}}();let e=[],r=[],n=!1;function i(t){let r=T.get(t);r&&(n=!0,t|=r),e.push(t)}for(let n of t)for(;;){if(n<128)e.push(n);else if(B(n)){let t=n-v,e=t%A/C|0,r=t%C;i(x+(t/A|0)),i(_+e),r>0&&i(E+r)}else{let t=R.get(n);t?r.push(...t):i(n)}if(!r.length)break;n=r.pop()}if(n&&e.length>1){let t=O(e[0]);for(let r=1;r<e.length;r++){let n=O(e[r]);if(0==n||t<=n){t=n;continue}let i=r-1;for(;;){let r=e[i+1];if(e[i+1]=e[i],e[i]=r,!i)break;if(t=O(e[--i]),t<=n)break}t=O(e[r])}}return e}function D(t){return $(t).map(P)}function U(t){return function(t){let e=[],r=[],n=-1,i=0;for(let o of t){let t=O(o),s=P(o);if(-1==n)0==t?n=s:e.push(s);else if(i>0&&i>=t)0==t?(e.push(n,...r),r.length=0,n=s):r.push(s),i=t;else{let o=L(n,s);o>=0?n=o:0==i&&0==t?(e.push(n),n=s):(r.push(s),i=t)}}return n>=0&&e.push(n,...r),e}($(t))}const z=45,F=".",H=65039,W=1,q=t=>Array.from(t);function V(t,e){return t.P.has(e)||t.Q.has(e)}class G extends Array{get is_emoji(){return!0}}let Z,K,Q,J,Y,X,tt,et,rt,nt,it,ot;function st(){if(Z)return;let t=s(n);const e=()=>l(t),r=()=>new Set(e());Z=new Map(h(t)),K=r(),Q=e(),J=new Set(e().map((t=>Q[t]))),Q=new Set(Q),Y=r(),X=r();let i=u(t),o=t();const a=()=>new Set(e().flatMap((t=>i[t])).concat(e()));tt=d((e=>{let r=d(t).map((t=>t+96));if(r.length){let n=e>=o;return r[0]-=32,r=y(r),n&&(r=`Restricted[${r}]`),{N:r,P:a(),Q:a(),M:!t(),R:n}}})),et=r(),rt=new Map;let c=e().concat(q(et)).sort(((t,e)=>t-e));c.forEach(((e,r)=>{let n=t(),i=c[r]=n?c[r-n]:{V:[],M:new Map};i.V.push(e),et.has(e)||rt.set(e,i)}));for(let{V:t,M:e}of new Set(rt.values())){let r=[];for(let e of t){let t=tt.filter((t=>V(t,e))),n=r.find((({G:e})=>t.some((t=>e.has(t)))));n||(n={G:new Set,V:[]},r.push(n)),n.V.push(e),t.forEach((t=>n.G.add(t)))}let n=r.flatMap((t=>q(t.G)));for(let{G:t,V:i}of r){let r=new Set(n.filter((e=>!t.has(e))));for(let t of i)e.set(t,r)}}let p=new Set,f=new Set;const m=t=>p.has(t)?f.add(t):p.add(t);for(let t of tt){for(let e of t.P)m(e);for(let e of t.Q)m(e)}for(let t of p)rt.has(t)||f.has(t)||rt.set(t,W);nt=new Set(q(p).concat(q(D(p)))),it=function(t){let e=[],r=l(t);return function t({S:r,B:n},i,o){if(!(4&r&&o===i[i.length-1])){2&r&&(o=i[i.length-1]),1&r&&e.push(i);for(let e of n)for(let r of e.Q)t(e,[...i,r],o)}}(function e(n){return{S:t(),B:d((()=>{let n=l(t).map((t=>r[t]));if(n.length)return e(n)})),Q:n}}([]),[]),e}(t).map((t=>G.from(t))).sort(b),ot=new Map;for(let t of it){let e=[ot];for(let r of t){let t=e.map((t=>{let e=t.get(r);return e||(e=new Map,t.set(r,e)),e}));r===H?e.push(...t):e=t}for(let r of e)r.V=t}}function at(t){return(ut(t)?"":`${ct(lt([t]))} `)+g(t)}function ct(t){return`"${t}"‎`}function lt(t,e=g){let r=[];var n;n=t[0],st(),Q.has(n)&&r.push("◌");let i=0,o=t.length;for(let n=0;n<o;n++){let o=t[n];ut(o)&&(r.push(y(t.slice(i,n))),r.push(e(o)),i=n+1)}return r.push(y(t.slice(i,o))),r.join("")}function ut(t){return st(),Y.has(t)}function ht(t,e,r){if(!t)return[];st();let n=0;return t.split(F).map((t=>{let s=function(t){let e=[];for(let r=0,n=t.length;r<n;){let n=t.codePointAt(r);r+=n<65536?1:2,e.push(n)}return e}(t),a={input:s,offset:n};n+=s.length+1;try{let t,n=a.tokens=function(t,e,r){let n=[],i=[];for(t=t.slice().reverse();t.length;){let o=gt(t);if(o)i.length&&(n.push(e(i)),i=[]),n.push(r(o));else{let e=t.pop();if(nt.has(e))i.push(e);else{let t=Z.get(e);if(t)i.push(...t);else if(!K.has(e))throw dt(e)}}}return i.length&&n.push(e(i)),n}(s,e,r),c=n.length;if(!c)throw new Error("empty label");let l=a.output=n.flat();if(function(t){for(let e=t.lastIndexOf(95);e>0;)if(95!==t[--e])throw new Error("underscore allowed only at start")}(l),!(a.emoji=c>1||n[0].is_emoji)&&l.every((t=>t<128)))!function(t){if(t.length>=4&&t[2]==z&&t[3]==z)throw new Error(`invalid label extension: "${y(t.slice(0,4))}"`)}(l),t="ASCII";else{let e=n.flatMap((t=>t.is_emoji?[]:t));if(e.length){if(Q.has(l[0]))throw ft("leading combining mark");for(let t=1;t<c;t++){let e=n[t];if(!e.is_emoji&&Q.has(e[0]))throw ft(`emoji + combining mark: "${y(n[t-1])} + ${lt([e[0]])}"`)}!function(t){let e=t[0],r=i.get(e);if(r)throw ft(`leading ${r}`);let n=t.length,o=-1;for(let s=1;s<n;s++){e=t[s];let n=i.get(e);if(n){if(o==s)throw ft(`${r} + ${n}`);o=s+1,r=n}}if(o==n)throw ft(`trailing ${r}`)}(l);let r=q(new Set(e)),[s]=function(t){let e=tt;for(let r of t){let t=e.filter((t=>V(t,r)));if(!t.length)throw tt.some((t=>V(t,r)))?pt(e[0],r):dt(r);if(e=t,1==t.length)break}return e}(r);!function(t,e){for(let r of e)if(!V(t,r))throw pt(t,r);if(t.M){let t=D(e);for(let e=1,r=t.length;e<r;e++)if(J.has(t[e])){let n=e+1;for(let i;n<r&&J.has(i=t[n]);n++)for(let r=e;r<n;r++)if(t[r]==i)throw new Error(`duplicate non-spacing marks: ${at(i)}`);if(n-e>o)throw new Error(`excessive non-spacing marks: ${ct(lt(t.slice(e-1,n)))} (${n-e}/${o})`);e=n}}}(s,e),function(t,e){let r,n=[];for(let t of e){let e=rt.get(t);if(e===W)return;if(e){let n=e.M.get(t);if(r=r?r.filter((t=>n.has(t))):q(n),!r.length)return}else n.push(t)}if(r)for(let e of r)if(n.every((t=>V(e,t))))throw new Error(`whole-script confusable: ${t.N}/${e.N}`)}(s,r),t=s.N}else t="Emoji"}a.type=t}catch(t){a.error=t}return a}))}function dt(t){return new Error(`disallowed character: ${at(t)}`)}function pt(t,e){let r=at(e),n=tt.find((t=>t.P.has(e)));return n&&(r=`${n.N} ${r}`),new Error(`illegal mixture: ${t.N} + ${r}`)}function ft(t){return new Error(`illegal placement: ${t}`)}function mt(t){return t.filter((t=>t!=H))}function gt(t,e){let r,n=ot,i=t.length;for(;i&&(n=n.get(t[--i]),n);){let{V:o}=n;o&&(r=o,e&&e.push(...t.slice(i).reverse()),t.length=i)}return r}function yt(t){return function(t){return function(t){return t.map((({input:e,error:r,output:n})=>{if(r){let n=r.message;throw new Error(1==t.length?n:`Invalid label ${ct(lt(e))}: ${n}`)}return y(n)})).join(F)}(ht(t,U,mt))}(t)}},57412:(t,e,r)=>{"use strict";r.d(e,{CI:()=>E,FM:()=>f,Gy:()=>x,KY:()=>w,M4:()=>h,MX:()=>b,SM:()=>v,cO:()=>a,dh:()=>_,fM:()=>s,fs:()=>d,gr:()=>u,hn:()=>C,lC:()=>m,mv:()=>g,wM:()=>A,wb:()=>l,xB:()=>c,xL:()=>y,yP:()=>p});var n=r(80522),i=r(39135),o=r(62027);class s extends o.G{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class a extends o.G{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class c extends o.G{constructor({data:t,params:e,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${(0,n.h)(e,{includeName:!0})})`,`Data:   ${t} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=e,this.size=r}}class l extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:t,givenLength:e,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${t}`,`Given length: ${e}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class h extends o.G{constructor({expectedSize:t,value:e}){super(`Size of bytes "${e}" (bytes${(0,i.d)(e)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class d extends o.G{constructor({expectedLength:t,givenLength:e}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${e}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class p extends o.G{constructor(t,{docsPath:e}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}}class f extends o.G{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class m extends o.G{constructor(t,{docsPath:e}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class g extends o.G{constructor(t,{docsPath:e}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class y extends o.G{constructor(t,{docsPath:e}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class b extends o.G{constructor(t,{docsPath:e}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class w extends o.G{constructor({expectedSize:t,givenSize:e}){super(`Expected bytes${t}, got bytes${e}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class v extends o.G{constructor({abiItem:t,data:e,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join("\n"),{metaMessages:[`Params: (${(0,n.h)(r,{includeName:!0})})`,`Data:   ${e} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=e,this.params=r,this.size=i}}class x extends o.G{constructor({abiItem:t,param:e}){super([`Expected a topic for indexed event parameter${e.name?` "${e.name}"`:""} on event "${(0,n.t)(t,{includeName:!0})}".`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}}class _ extends o.G{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class E extends o.G{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class C extends o.G{constructor(t){super([`Value "${t}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class A extends o.G{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:(t,e,r)=>{"use strict";r.d(e,{o:()=>i});var n=r(62027);class i extends n.G{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:(t,e,r)=>{"use strict";r.d(e,{b:()=>i});var n=r(62027);class i extends n.G{constructor({address:t}){super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:(t,e,r)=>{"use strict";r.d(e,{G:()=>i});var n=r(38673);class i extends Error{constructor(t,e={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,n.bo)()});const r=e.cause instanceof i?e.cause.details:e.cause?.message?e.cause.message:e.details,o=e.cause instanceof i&&e.cause.docsPath||e.docsPath;this.message=[t||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),e.cause&&(this.cause=e.cause),this.details=r,this.docsPath=o,this.metaMessages=e.metaMessages,this.shortMessage=t}walk(t){return o(this,t)}}function o(t,e){return e?.(t)?t:t&&"object"==typeof t&&"cause"in t?o(t.cause,e):e?null:t}},80377:(t,e,r)=>{"use strict";r.d(e,{Bk:()=>s,Yl:()=>o,hJ:()=>c,mm:()=>i,pZ:()=>a});var n=r(62027);class i extends n.G{constructor({blockNumber:t,chain:e,contract:r}){super(`Chain "${e.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...t&&r.blockCreated&&r.blockCreated>t?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends n.G{constructor({chain:t,currentChainId:e}){super(`The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class s extends n.G{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class a extends n.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class c extends n.G{constructor({chainId:t}){super(`Chain ID "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}},15980:(t,e,r)=>{"use strict";r.d(e,{cg:()=>g,uq:()=>y,Lu:()=>b,Dk:()=>w,VQ:()=>v});var n=r(14503),i=r(21746),o=r(86899),s=r(80522),a=r(96070);function c({abiItem:t,args:e,includeFunctionName:r=!0,includeName:n=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${r?t.name:""}(${t.inputs.map(((t,r)=>`${n&&t.name?`${t.name}: `:""}${"object"==typeof e[r]?(0,a.P)(e[r]):e[r]}`)).join(", ")})`}var l=r(40840),u=r(39625),h=r(67795),d=r(57412),p=r(62027),f=r(33639),m=r(38673);class g extends p.G{constructor(t,{account:e,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:m}){const g=e?(0,n.T)(e):void 0,y=(0,f.xr)({from:g?.address,to:p,value:void 0!==m&&`${(0,u.d)(m)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:s,gasPrice:void 0!==a&&`${(0,h.o)(a)} gwei`,maxFeePerGas:void 0!==c&&`${(0,h.o)(c)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${(0,h.o)(l)} gwei`,nonce:d});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}}class y extends p.G{constructor(t,{abi:e,args:r,contractAddress:n,docsPath:i,functionName:o,sender:a}){const u=(0,l.m)({abi:e,args:r,name:o}),h=u?c({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,d=u?(0,s.t)(u,{includeName:!0}):void 0,p=(0,f.xr)({address:n&&(0,m.CR)(n),function:d,args:h&&"()"!==h&&`${[...Array(o?.length??0).keys()].map((()=>" ")).join("")}${h}`,sender:a});super(t.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=e,this.args=r,this.cause=t,this.contractAddress=n,this.functionName=o,this.sender=a}}class b extends p.G{constructor({abi:t,data:e,functionName:r,message:n}){let a,l,u,h,p;if(e&&"0x"!==e)try{l=(0,o.p)({abi:t,data:e});const{abiItem:r,errorName:n,args:a}=l;if("Error"===n)h=a[0];else if("Panic"===n){const[t]=a;h=i.$[t]}else{const t=r?(0,s.t)(r,{includeName:!0}):void 0,e=r&&a?c({abiItem:r,args:a,includeFunctionName:!1,includeName:!1}):void 0;u=[t?`Error: ${t}`:"",e&&"()"!==e?`       ${[...Array(n?.length??0).keys()].map((()=>" ")).join("")}${e}`:""]}}catch(t){a=t}else n&&(h=n);a instanceof d.yP&&(p=a.signature,u=[`Unable to decode signature "${p}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`]),super(h&&"execution reverted"!==h||p?[`The contract function "${r}" reverted with the following ${p?"signature":"reason"}:`,h||p].join("\n"):`The contract function "${r}" reverted.`,{cause:a,metaMessages:u}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=l,this.reason=h,this.signature=p}}class w extends p.G{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends p.G{constructor({data:t,message:e}){super(e||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}},69760:(t,e,r)=>{"use strict";r.d(e,{$:()=>o,m:()=>i});var n=r(62027);class i extends n.G{constructor({offset:t,position:e,size:r}){super(`Slice ${"start"===e?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends n.G{constructor({size:t,targetSize:e,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},87788:(t,e,r)=>{"use strict";r.d(e,{Cd:()=>o,J5:()=>i,M6:()=>s});var n=r(62027);class i extends n.G{constructor({max:t,min:e,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${e} to ${t})`:`(above ${e})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends n.G{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class s extends n.G{constructor({givenSize:t,maxSize:e}){super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},15371:(t,e,r)=>{"use strict";r.d(e,{Fz:()=>o,e5:()=>s,ld:()=>a});var n=r(67795),i=r(62027);class o extends i.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class s extends i.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class a extends i.G{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,n.o)(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},26445:(t,e,r)=>{"use strict";r.d(e,{C_:()=>h,G$:()=>a,Hh:()=>s,M_:()=>o,WF:()=>d,ZI:()=>c,cj:()=>g,cs:()=>m,dR:()=>p,pZ:()=>f,se:()=>u,vU:()=>l});var n=r(67795),i=r(62027);class o extends i.G{constructor({cause:t,message:e}={}){const r=e?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class s extends i.G{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${(0,n.o)(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class a extends i.G{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${(0,n.o)(e)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class c extends i.G{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class l extends i.G{constructor({cause:t,nonce:e}={}){super([`Nonce provided for the transaction ${e?`(${e}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class h extends i.G{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class d extends i.G{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends i.G{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends i.G{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class m extends i.G{constructor({cause:t,maxPriorityFeePerGas:e,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${e?` = ${(0,n.o)(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`].join("\n"),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(m,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class g extends i.G{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:(t,e,r)=>{"use strict";r.d(e,{Gg:()=>s,W5:()=>l,bs:()=>c,c9:()=>a});var n=r(96070),i=r(62027),o=r(38673);class s extends i.G{constructor({body:t,details:e,headers:r,status:i,url:s}){super("HTTP request failed.",{details:e,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,o.Gr)(s)}`,t&&`Request body: ${(0,n.P)(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=r,this.status=i,this.url=s}}class a extends i.G{constructor({body:t,details:e,url:r}){super("WebSocket request failed.",{details:e,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class c extends i.G{constructor({body:t,error:e,url:r}){super("RPC Request failed.",{cause:e,details:e.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=e.code}}class l extends i.G{constructor({body:t,url:e}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(e)}`,`Request body: ${(0,n.P)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:(t,e,r)=>{"use strict";r.d(e,{B:()=>c,GD:()=>b,I0:()=>E,KB:()=>m,LX:()=>l,Og:()=>p,PE:()=>v,Pv:()=>y,Ts:()=>x,XS:()=>h,ab:()=>w,gS:()=>g,ir:()=>A,nY:()=>u,pT:()=>f,s7:()=>a,u5:()=>_,x3:()=>C,yR:()=>d});var n=r(62027),i=r(78863);class o extends n.G{constructor(t,{code:e,docsPath:r,metaMessages:n,shortMessage:o}){super(o,{cause:t,docsPath:r,metaMessages:n||t?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof i.bs?t.code:e??-1}}class s extends o{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e.data}}class a extends o{constructor(t){super(t,{code:a.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(a,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class c extends o{constructor(t){super(t,{code:c.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class l extends o{constructor(t){super(t,{code:l.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(t){super(t,{code:u.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class h extends o{constructor(t){super(t,{code:h.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class d extends o{constructor(t){super(t,{code:d.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends o{constructor(t){super(t,{code:p.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends o{constructor(t){super(t,{code:f.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class m extends o{constructor(t){super(t,{code:m.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class g extends o{constructor(t){super(t,{code:g.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class y extends o{constructor(t){super(t,{code:y.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class b extends o{constructor(t){super(t,{code:b.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class w extends s{constructor(t){super(t,{code:w.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class v extends s{constructor(t){super(t,{code:v.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends s{constructor(t){super(t,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class _ extends s{constructor(t){super(t,{code:_.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends s{constructor(t){super(t,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class C extends s{constructor(t){super(t,{code:C.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class A extends o{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},33639:(t,e,r)=>{"use strict";r.d(e,{Bh:()=>d,JC:()=>u,Yb:()=>p,j3:()=>l,mc:()=>f,mk:()=>h,vl:()=>c,xY:()=>a,xr:()=>s});var n=r(39625),i=r(67795),o=r(62027);function s(t){const e=Object.entries(t).map((([t,e])=>void 0===e||!1===e?null:[t,e])).filter(Boolean),r=e.reduce(((t,[e])=>Math.max(t,e.length)),0);return e.map((([t,e])=>`  ${`${t}:`.padEnd(r+1)}  ${e}`)).join("\n")}class a extends o.G{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class c extends o.G{constructor({v:t}){super(`Invalid \`v\` value "${t}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class l extends o.G{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",s(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class u extends o.G{constructor({storageKey:t}){super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}class h extends o.G{constructor(t,{account:e,docsPath:r,chain:o,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:p,value:f}){const m=s({chain:o&&`${o?.name} (id: ${o?.id})`,from:e?.address,to:p,value:void 0!==f&&`${(0,n.d)(f)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:c,gasPrice:void 0!==l&&`${(0,i.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,i.o)(h)} gwei`,nonce:d});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}}class d extends o.G{constructor({blockHash:t,blockNumber:e,blockTag:r,hash:n,index:i}){let o="Transaction";r&&void 0!==i&&(o=`Transaction at block time "${r}" at index "${i}"`),t&&void 0!==i&&(o=`Transaction at block hash "${t}" at index "${i}"`),e&&void 0!==i&&(o=`Transaction at block number "${e}" at index "${i}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class p extends o.G{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class f extends o.G{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},38673:(t,e,r)=>{"use strict";r.d(e,{CR:()=>n,Gr:()=>i,bo:()=>o});const n=t=>t,i=t=>t,o=()=>"viem@1.19.9"},34450:(t,e,r)=>{"use strict";r.d(e,{r:()=>u});var n=r(57412),i=r(45775),o=r(39135),s=r(3972),a=r(61836),c=r(95946),l=r(45444);function u(t,e){if("0x"===e&&t.length>0)throw new n.wb;if((0,o.d)(e)&&(0,o.d)(e)<32)throw new n.xB({data:e,params:t,size:(0,o.d)(e)});return function({data:t,params:e}){const r=[];let i=0;for(let s=0;s<e.length;s++){if(i>=(0,o.d)(t))throw new n.xB({data:t,params:e,size:(0,o.d)(t)});const a=e[s],{consumed:c,value:l}=h({data:t,param:a,position:i});r.push(l),i+=c}return r}({data:e,params:t})}function h({data:t,param:e,position:r}){const o=(0,l.S)(e.type);if(o){const[n,i]=o;return function(t,{param:e,length:r,position:n}){if(!r){const r=(0,c.ly)((0,s.tP)(t,n,n+32,{strict:!0})),i=(0,c.ly)((0,s.tP)(t,r,r+32,{strict:!0}));let o=0;const a=[];for(let n=0;n<i;++n){const n=h({data:(0,s.tP)(t,r+32),param:e,position:o});o+=n.consumed,a.push(n.value)}return{value:a,consumed:32}}if(d(e)){const i=(0,l.S)(e.type),o=!i?.[0];let a=0;const u=[];for(let i=0;i<r;++i){const r=(0,c.ly)((0,s.tP)(t,n,n+32,{strict:!0})),l=h({data:(0,s.tP)(t,r),param:e,position:o?a:32*i});a+=l.consumed,u.push(l.value)}return{value:u,consumed:32}}let i=0;const o=[];for(let s=0;s<r;++s){const r=h({data:t,param:e,position:n+i});i+=r.consumed,o.push(r.value)}return{value:o,consumed:i}}(t,{length:n,param:{...e,type:i},position:r})}if("tuple"===e.type)return function(t,{param:e,position:r}){const n=0===e.components.length||e.components.some((({name:t})=>!t)),i=n?[]:{};let o=0;if(d(e)){const a=(0,c.ly)((0,s.tP)(t,r,r+32,{strict:!0}));for(let r=0;r<e.components.length;++r){const c=e.components[r],l=h({data:(0,s.tP)(t,a),param:c,position:o});o+=l.consumed,i[n?r:c?.name]=l.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],c=h({data:t,param:a,position:r+o});o+=c.consumed,i[n?s:a?.name]=c.value}return{consumed:o,value:i}}(t,{param:e,position:r});if("string"===e.type)return function(t,{position:e}){const r=(0,c.ly)((0,s.tP)(t,e,e+32,{strict:!0})),n=(0,c.ly)((0,s.tP)(t,r,r+32,{strict:!0}));if(0===n)return{consumed:32,value:""};return{consumed:32,value:(0,c.rR)((0,a.f)((0,s.tP)(t,r+32,r+32+n,{strict:!0})))}}(t,{position:r});if(e.type.startsWith("bytes"))return function(t,{param:e,position:r}){const[n,i]=e.type.split("bytes");if(!i){const e=(0,c.ly)((0,s.tP)(t,r,r+32,{strict:!0})),n=(0,c.ly)((0,s.tP)(t,e,e+32,{strict:!0}));return 0===n?{consumed:32,value:"0x"}:{consumed:32,value:(0,s.tP)(t,e+32,e+32+n,{strict:!0})}}return{consumed:32,value:(0,s.tP)(t,r,r+parseInt(i),{strict:!0})}}(t,{param:e,position:r});const u=(0,s.tP)(t,r,r+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return function(t,{param:e}){const r=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?(0,c.y_)(t,{signed:r}):(0,c.ly)(t,{signed:r})}}(u,{param:e});if("address"===e.type)return function(t){return{consumed:32,value:(0,i.x)((0,s.tP)(t,-20))}}(u);if("bool"===e.type)return function(t){return{consumed:32,value:(0,c.XA)(t)}}(u);throw new n.CI(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function d(t){const{type:e}=t;if("string"===e)return!0;if("bytes"===e)return!0;if(e.endsWith("[]"))return!0;if("tuple"===e)return t.components?.some(d);const r=(0,l.S)(t.type);return!(!r||!d({...t,type:r[1]}))}},86899:(t,e,r)=>{"use strict";r.d(e,{p:()=>l});var n=r(21746),i=r(57412),o=r(3972),s=r(40552),a=r(34450),c=r(80522);function l({abi:t,data:e}){const r=(0,o.tP)(e,0,4);if("0x"===r)throw new i.wb;const l=[...t||[],n.Up,n.hZ].find((t=>"error"===t.type&&r===(0,s.o)((0,c.t)(t))));if(!l)throw new i.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:l,args:"inputs"in l&&l.inputs&&l.inputs.length>0?(0,a.r)(l.inputs,(0,o.tP)(e,4)):void 0,errorName:l.name}}},7210:(t,e,r)=>{"use strict";r.d(e,{k:()=>a});var n=r(57412),i=r(34450),o=r(40840);const s="/docs/contract/decodeFunctionResult";function a({abi:t,args:e,functionName:r,data:a}){let c=t[0];if(r&&(c=(0,o.m)({abi:t,args:e,name:r}),!c))throw new n.xL(r,{docsPath:s});if("function"!==c.type)throw new n.xL(void 0,{docsPath:s});if(!c.outputs)throw new n.MX(c.name,{docsPath:s});const l=(0,i.r)(c.outputs,a);return l&&l.length>1?l:l&&1===l.length?l[0]:void 0}},45444:(t,e,r)=>{"use strict";r.d(e,{E:()=>h,S:()=>f});var n=r(57412),i=r(26087),o=r(49321),s=r(57040),a=r(61769),c=r(39135),l=r(3972),u=r(92106);function h(t,e){if(t.length!==e.length)throw new n.fs({expectedLength:t.length,givenLength:e.length});const r=function({params:t,values:e}){const r=[];for(let n=0;n<t.length;n++)r.push(d({param:t[n],value:e[n]}));return r}({params:t,values:e}),i=p(r);return 0===i.length?"0x":i}function d({param:t,value:e}){const r=f(t.type);if(r){const[i,o]=r;return function(t,{length:e,param:r}){const i=null===e;if(!Array.isArray(t))throw new n.hn(t);if(!i&&t.length!==e)throw new n.gr({expectedLength:e,givenLength:t.length,type:`${r.type}[${e}]`});let o=!1;const a=[];for(let e=0;e<t.length;e++){const n=d({param:r,value:t[e]});n.dynamic&&(o=!0),a.push(n)}if(i||o){const t=p(a);if(i){const e=(0,u.eC)(a.length,{size:32});return{dynamic:!0,encoded:a.length>0?(0,s.zo)([e,t]):e}}if(o)return{dynamic:!0,encoded:t}}return{dynamic:!1,encoded:(0,s.zo)(a.map((({encoded:t})=>t)))}}(e,{length:i,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:e}){let r=!1;const n=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=d({param:o,value:t[Array.isArray(t)?i:o.name]});n.push(s),s.dynamic&&(r=!0)}return{dynamic:r,encoded:r?p(n):(0,s.zo)(n.map((({encoded:t})=>t)))}}(e,{param:t});if("address"===t.type)return function(t){if(!(0,o.U)(t))throw new i.b({address:t});return{dynamic:!1,encoded:(0,a.gc)(t.toLowerCase())}}(e);if("bool"===t.type)return function(t){return{dynamic:!1,encoded:(0,a.gc)((0,u.C4)(t))}}(e);if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(t,{signed:e}){return{dynamic:!1,encoded:(0,u.eC)(t,{size:32,signed:e})}}(e,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(t,{param:e}){const[,r]=e.type.split("bytes"),i=(0,c.d)(t);if(!r){let e=t;return i%32!=0&&(e=(0,a.gc)(e,{dir:"right",size:32*Math.ceil((t.length-2)/2/32)})),{dynamic:!0,encoded:(0,s.zo)([(0,a.gc)((0,u.eC)(i,{size:32})),e])}}if(i!==parseInt(r))throw new n.M4({expectedSize:parseInt(r),value:t});return{dynamic:!1,encoded:(0,a.gc)(t,{dir:"right"})}}(e,{param:t});if("string"===t.type)return function(t){const e=(0,u.$G)(t),r=Math.ceil((0,c.d)(e)/32),n=[];for(let t=0;t<r;t++)n.push((0,a.gc)((0,l.tP)(e,32*t,32*(t+1)),{dir:"right"}));return{dynamic:!0,encoded:(0,s.zo)([(0,a.gc)((0,u.eC)((0,c.d)(e),{size:32})),...n])}}(e);throw new n.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function p(t){let e=0;for(let r=0;r<t.length;r++){const{dynamic:n,encoded:i}=t[r];e+=n?32:(0,c.d)(i)}const r=[],n=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(r.push((0,u.eC)(e+i,{size:32})),n.push(a),i+=(0,c.d)(a)):r.push(a)}return(0,s.zo)([...r,...n])}function f(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}},30286:(t,e,r)=>{"use strict";r.d(e,{w:()=>a});var n=r(57412),i=r(57040),o=r(45444);const s="/docs/contract/encodeDeployData";function a({abi:t,args:e,bytecode:r}){if(!e||0===e.length)return r;const a=t.find((t=>"type"in t&&"constructor"===t.type));if(!a)throw new n.fM({docsPath:s});if(!("inputs"in a))throw new n.cO({docsPath:s});if(!a.inputs||0===a.inputs.length)throw new n.cO({docsPath:s});const c=(0,o.E)(a.inputs,e);return(0,i.SM)([r,c])}},77799:(t,e,r)=>{"use strict";r.d(e,{R:()=>l});var n=r(57412),i=r(57040),o=r(40552),s=r(45444),a=r(80522),c=r(40840);function l({abi:t,args:e,functionName:r}){let l=t[0];if(r&&(l=(0,c.m)({abi:t,args:e,name:r}),!l))throw new n.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==l.type)throw new n.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const u=(0,a.t)(l),h=(0,o.o)(u),d="inputs"in l&&l.inputs?(0,s.E)(l.inputs,e??[]):void 0;return(0,i.SM)([h,d??"0x"])}},80522:(t,e,r)=>{"use strict";r.d(e,{h:()=>o,t:()=>i});var n=r(57412);function i(t,{includeName:e=!1}={}){if("function"!==t.type&&"event"!==t.type&&"error"!==t.type)throw new n.wM(t.type);return`${t.name}(${o(t.inputs,{includeName:e})})`}function o(t,{includeName:e=!1}={}){return t?t.map((t=>function(t,{includeName:e}){return t.type.startsWith("tuple")?`(${o(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}(t,{includeName:e}))).join(e?", ":","):""}},40840:(t,e,r)=>{"use strict";r.d(e,{m:()=>a});var n=r(15102),i=r(54092),o=r(40552),s=r(49321);function a({abi:t,args:e=[],name:r}){const s=(0,n.v)(r,{strict:!1}),a=t.filter((t=>s?"function"===t.type?(0,o.o)(t)===r:"event"===t.type&&(0,i.e)(t)===r:"name"in t&&t.name===r));if(0!==a.length){if(1===a.length)return a[0];for(const t of a)if("inputs"in t)if(e&&0!==e.length){if(t.inputs&&0!==t.inputs.length&&t.inputs.length===e.length&&e.every(((e,r)=>{const n="inputs"in t&&t.inputs[r];return!!n&&c(e,n)})))return t}else if(!t.inputs||0===t.inputs.length)return t;return a[0]}}function c(t,e){const r=typeof t,n=e.type;switch(n){case"address":return(0,s.U)(t);case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:return"tuple"===n&&"components"in e?Object.values(e.components).every(((e,r)=>c(Object.values(t)[r],e))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?"number"===r||"bigint"===r:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?"string"===r||t instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)&&Array.isArray(t)&&t.every((t=>c(t,{...e,type:n.replace(/(\[[0-9]{0,}\])$/,"")})))}}},45775:(t,e,r)=>{"use strict";r.d(e,{K:()=>c,x:()=>a});var n=r(26087),i=r(11187),o=r(44813),s=r(49321);function a(t,e){const r=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),n=(0,o.w)((0,i.qX)(r),"bytes"),s=(e?r.substring(`${e}0x`.length):r).split("");for(let t=0;t<40;t+=2)n[t>>1]>>4>=8&&s[t]&&(s[t]=s[t].toUpperCase()),(15&n[t>>1])>=8&&s[t+1]&&(s[t+1]=s[t+1].toUpperCase());return`0x${s.join("")}`}function c(t,e){if(!(0,s.U)(t))throw new n.b({address:t});return a(t,e)}},49321:(t,e,r)=>{"use strict";r.d(e,{U:()=>i});const n=/^0x[a-fA-F0-9]{40}$/;function i(t){return n.test(t)}},37029:(t,e,r)=>{"use strict";r.d(e,{n:()=>c,y:()=>a});var n=r(62027),i=r(78863),o=r(39028),s=r(7760);const a=t=>"code"in t?-1!==t.code&&-32004!==t.code&&-32005!==t.code&&-32042!==t.code&&-32603!==t.code:!!(t instanceof i.Gg&&t.status)&&403!==t.status&&408!==t.status&&413!==t.status&&429!==t.status&&500!==t.status&&502!==t.status&&503!==t.status&&504!==t.status;function c(t,{retryDelay:e=150,retryCount:r=3}={}){return async c=>(0,s.J)((async()=>{try{return await t(c)}catch(t){const e=t;switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(t instanceof n.G)throw t;throw new o.ir(e)}}}),{delay:({count:t,error:r})=>{if(r&&r instanceof i.Gg){const t=r?.headers?.get("Retry-After");if(t?.match(/\d/))return 1e3*parseInt(t)}return~~(1<<t)*e},retryCount:r,shouldRetry:({error:t})=>!a(t)})}},99770:(t,e,r)=>{"use strict";r.d(e,{offchainLookup:()=>w,offchainLookupSignature:()=>y});var n=r(76143),i=r(96070),o=r(62027),s=r(38673);class a extends o.G{constructor({callbackSelector:t,cause:e,data:r,extraData:n,sender:i,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map((t=>`    ${(0,s.Gr)(t)}`))],`  Sender: ${i}`,`  Data: ${r}`,`  Callback selector: ${t}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class c extends o.G{constructor({result:t,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,s.Gr)(e)}`,`Response: ${(0,i.P)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class l extends o.G{constructor({sender:t,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=r(78863),h=r(86899),d=r(45444),p=r(26087),f=r(49321),m=r(57040),g=r(15102);const y="0x556f1830",b={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function w(t,{blockNumber:e,blockTag:r,data:o,to:s}){const{args:y}=(0,h.p)({data:o,abi:[b]}),[w,v,x,_,E]=y;try{if(!function(t,e){if(!(0,f.U)(t))throw new p.b({address:t});if(!(0,f.U)(e))throw new p.b({address:e});return t.toLowerCase()===e.toLowerCase()}(s,w))throw new l({sender:w,to:s});const o=await async function({data:t,sender:e,urls:r}){let n=new Error("An unknown error occurred.");for(let o=0;o<r.length;o++){const s=r[o],a=s.includes("{data}")?"GET":"POST",l="POST"===a?{data:t,sender:e}:void 0;try{const r=await fetch(s.replace("{sender}",e).replace("{data}",t),{body:JSON.stringify(l),method:a});let o;if(o=r.headers.get("Content-Type")?.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){n=new u.Gg({body:l,details:(0,i.P)(o.error)||r.statusText,headers:r.headers,status:r.status,url:s});continue}if(!(0,g.v)(o)){n=new c({result:o,url:s});continue}return o}catch(t){n=new u.Gg({body:l,details:t.message,url:s})}}throw n}({data:x,sender:w,urls:v}),{data:a}=await(0,n.R)(t,{blockNumber:e,blockTag:r,data:(0,m.zo)([_,(0,d.E)([{type:"bytes"},{type:"bytes"}],[o,E])]),to:s});return a}catch(t){throw new a({callbackSelector:_,cause:t,data:o,extraData:E,sender:w,urls:v})}}},33840:(t,e,r)=>{"use strict";r.d(e,{q:()=>i});var n=r(80377);function i({chain:t,currentChainId:e}){if(!t)throw new n.Bk;if(e!==t.id)throw new n.Yl({chain:t,currentChainId:e})}},86164:(t,e,r)=>{"use strict";function n(t,e={}){const{fees:r=t.fees,formatters:n=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:r,formatters:n,serializers:i}}r.d(e,{a:()=>n})},47864:(t,e,r)=>{"use strict";r.d(e,{L:()=>i});var n=r(80377);function i({blockNumber:t,chain:e,contract:r}){const i=e?.contracts?.[r];if(!i)throw new n.mm({chain:e,contract:{name:r}});if(t&&i.blockCreated&&i.blockCreated>t)throw new n.mm({blockNumber:t,chain:e,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},57040:(t,e,r)=>{"use strict";function n(t){return"string"==typeof t[0]?i(t):function(t){let e=0;for(const r of t)e+=r.length;const r=new Uint8Array(e);let n=0;for(const e of t)r.set(e,n),n+=e.length;return r}(t)}function i(t){return`0x${t.reduce(((t,e)=>t+e.replace("0x","")),"")}`}r.d(e,{SM:()=>i,zo:()=>n})},15102:(t,e,r)=>{"use strict";function n(t,{strict:e=!0}={}){return!!t&&"string"==typeof t&&(e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x"))}r.d(e,{v:()=>n})},61769:(t,e,r)=>{"use strict";r.d(e,{gc:()=>o,vk:()=>i});var n=r(69760);function i(t,{dir:e,size:r=32}={}){return"string"==typeof t?o(t,{dir:e,size:r}):function(t,{dir:e,size:r=32}={}){if(null===r)return t;if(t.length>r)throw new n.$({size:t.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let n=0;n<r;n++){const o="right"===e;i[o?n:r-n-1]=t[o?n:t.length-n-1]}return i}(t,{dir:e,size:r})}function o(t,{dir:e,size:r=32}={}){if(null===r)return t;const i=t.replace("0x","");if(i.length>2*r)throw new n.$({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===e?"padEnd":"padStart"](2*r,"0")}`}},39135:(t,e,r)=>{"use strict";r.d(e,{d:()=>i});var n=r(15102);function i(t){return(0,n.v)(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}},3972:(t,e,r)=>{"use strict";r.d(e,{tP:()=>s});var n=r(69760),i=r(15102),o=r(39135);function s(t,e,r,{strict:n}={}){return(0,i.v)(t,{strict:!1})?function(t,e,r,{strict:n}={}){a(t,e);const i=`0x${t.replace("0x","").slice(2*(e??0),2*(r??t.length))}`;return n&&c(i,e,r),i}(t,e,r,{strict:n}):function(t,e,r,{strict:n}={}){a(t,e);const i=t.slice(e,r);return n&&c(i,e,r),i}(t,e,r,{strict:n})}function a(t,e){if("number"==typeof e&&e>0&&e>(0,o.d)(t)-1)throw new n.m({offset:e,position:"start",size:(0,o.d)(t)})}function c(t,e,r){if("number"==typeof e&&"number"==typeof r&&(0,o.d)(t)!==r-e)throw new n.m({offset:r,position:"end",size:(0,o.d)(t)})}},61836:(t,e,r)=>{"use strict";function n(t,{dir:e="left"}={}){let r="string"==typeof t?t.replace("0x",""):t,n=0;for(let t=0;t<r.length-1&&"0"===r["left"===e?t:r.length-t-1].toString();t++)n++;return r="left"===e?r.slice(n):r.slice(0,r.length-n),"string"==typeof t?(1===r.length&&"right"===e&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(e,{f:()=>n})},95946:(t,e,r)=>{"use strict";r.d(e,{XA:()=>l,Yf:()=>a,ly:()=>u,rR:()=>h,y_:()=>c});var n=r(87788),i=r(39135),o=r(61836),s=r(11187);function a(t,{size:e}){if((0,i.d)(t)>e)throw new n.M6({givenSize:(0,i.d)(t),maxSize:e})}function c(t,e={}){const{signed:r}=e;e.size&&a(t,{size:e.size});const n=BigInt(t);if(!r)return n;const i=(t.length-2)/2;return n<=(1n<<8n*BigInt(i)-1n)-1n?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function l(t,e={}){let r=t;if(e.size&&(a(r,{size:e.size}),r=(0,o.f)(r)),"0x00"===(0,o.f)(r))return!1;if("0x01"===(0,o.f)(r))return!0;throw new n.Cd(r)}function u(t,e={}){return Number(c(t,e))}function h(t,e={}){let r=(0,s.nr)(t);return e.size&&(a(r,{size:e.size}),r=(0,o.f)(r,{dir:"right"})),(new TextDecoder).decode(r)}},11187:(t,e,r)=>{"use strict";r.d(e,{O0:()=>l,nr:()=>d,qX:()=>p});var n=r(62027),i=r(15102),o=r(61769),s=r(95946),a=r(92106);const c=new TextEncoder;function l(t,e={}){return"number"==typeof t||"bigint"==typeof t?function(t,e){return d((0,a.eC)(t,e))}(t,e):"boolean"==typeof t?function(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),"number"==typeof e.size?((0,s.Yf)(r,{size:e.size}),(0,o.vk)(r,{size:e.size})):r}(t,e):(0,i.v)(t)?d(t,e):p(t,e)}const u={zero:48,nine:57,A:65,F:70,a:97,f:102};function h(t){return t>=u.zero&&t<=u.nine?t-u.zero:t>=u.A&&t<=u.F?t-(u.A-10):t>=u.a&&t<=u.f?t-(u.a-10):void 0}function d(t,e={}){let r=t;e.size&&((0,s.Yf)(r,{size:e.size}),r=(0,o.vk)(r,{dir:"right",size:e.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const a=i.length/2,c=new Uint8Array(a);for(let t=0,e=0;t<a;t++){const r=h(i.charCodeAt(e++)),o=h(i.charCodeAt(e++));if(void 0===r||void 0===o)throw new n.G(`Invalid byte sequence ("${i[e-2]}${i[e-1]}" in "${i}").`);c[t]=16*r+o}return c}function p(t,e={}){const r=c.encode(t);return"number"==typeof e.size?((0,s.Yf)(r,{size:e.size}),(0,o.vk)(r,{dir:"right",size:e.size})):r}},92106:(t,e,r)=>{"use strict";r.d(e,{$G:()=>d,C4:()=>c,NC:()=>a,ci:()=>l,eC:()=>u});var n=r(87788),i=r(61769),o=r(95946);const s=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function a(t,e={}){return"number"==typeof t||"bigint"==typeof t?u(t,e):"string"==typeof t?d(t,e):"boolean"==typeof t?c(t,e):l(t,e)}function c(t,e={}){const r=`0x${Number(t)}`;return"number"==typeof e.size?((0,o.Yf)(r,{size:e.size}),(0,i.vk)(r,{size:e.size})):r}function l(t,e={}){let r="";for(let e=0;e<t.length;e++)r+=s[t[e]];const n=`0x${r}`;return"number"==typeof e.size?((0,o.Yf)(n,{size:e.size}),(0,i.vk)(n,{dir:"right",size:e.size})):n}function u(t,e={}){const{signed:r,size:o}=e,s=BigInt(t);let a;o?a=r?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"==typeof t&&(a=BigInt(Number.MAX_SAFE_INTEGER));const c="bigint"==typeof a&&r?-a-1n:0;if(a&&s>a||s<c){const e="bigint"==typeof t?"n":"";throw new n.J5({max:a?`${a}${e}`:void 0,min:`${c}${e}`,signed:r,size:o,value:`${t}${e}`})}const l=`0x${(r&&s<0?(1n<<BigInt(8*o))+BigInt(s):s).toString(16)}`;return o?(0,i.vk)(l,{size:o}):l}const h=new TextEncoder;function d(t,e={}){return l(h.encode(t),e)}},87469:(t,e,r)=>{"use strict";r.d(e,{k:()=>o});var n=r(62027),i=r(26445);function o(t,e){const r=(t.details||"").toLowerCase(),o=t.walk((t=>t.code===i.M_.code));return o instanceof n.G?new i.M_({cause:t,message:o.details}):i.M_.nodeMessage.test(r)?new i.M_({cause:t,message:t.details}):i.Hh.nodeMessage.test(r)?new i.Hh({cause:t,maxFeePerGas:e?.maxFeePerGas}):i.G$.nodeMessage.test(r)?new i.G$({cause:t,maxFeePerGas:e?.maxFeePerGas}):i.ZI.nodeMessage.test(r)?new i.ZI({cause:t,nonce:e?.nonce}):i.vU.nodeMessage.test(r)?new i.vU({cause:t,nonce:e?.nonce}):i.se.nodeMessage.test(r)?new i.se({cause:t,nonce:e?.nonce}):i.C_.nodeMessage.test(r)?new i.C_({cause:t}):i.WF.nodeMessage.test(r)?new i.WF({cause:t,gas:e?.gas}):i.dR.nodeMessage.test(r)?new i.dR({cause:t,gas:e?.gas}):i.pZ.nodeMessage.test(r)?new i.pZ({cause:t}):i.cs.nodeMessage.test(r)?new i.cs({cause:t,maxFeePerGas:e?.maxFeePerGas,maxPriorityFeePerGas:e?.maxPriorityFeePerGas}):new i.cj({cause:t})}},43310:(t,e,r)=>{"use strict";r.d(e,{G:()=>s,Z:()=>o});var n=r(21366),i=r(6073);function o(t){const e=t.transactions?.map((t=>"string"==typeof t?t:(0,i.Tr)(t)));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const s=(0,n.$)("block",o)},61163:(t,e,r)=>{"use strict";function n(t,{format:e}){if(!e)return{};const r={};return function e(n){const i=Object.keys(n);for(const o of i)o in t&&(r[o]=t[o]),n[o]&&"object"==typeof n[o]&&!Array.isArray(n[o])&&e(n[o])}(e(t||{})),r}r.d(e,{K:()=>n})},21366:(t,e,r)=>{"use strict";function n(t,e){return({exclude:r,format:n})=>({exclude:r,format:t=>{const i=e(t);if(r)for(const t of r)delete i[t];return{...i,...n(t)}},type:t})}r.d(e,{$:()=>n})},53992:(t,e,r)=>{"use strict";function n(t,{args:e,eventName:r}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...r?{args:e,eventName:r}:{}}}r.d(e,{U:()=>n})},6073:(t,e,r)=>{"use strict";r.d(e,{Tr:()=>s,c8:()=>o,y_:()=>a});var n=r(95946),i=r(21366);const o={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function s(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?(0,n.ly)(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?(0,n.ly)(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?o[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if("bigint"==typeof e.v){if(0n===e.v||27n===e.v)return 0;if(1n===e.v||28n===e.v)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),"legacy"===e.type&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),"eip2930"===e.type&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}const a=(0,i.$)("transaction",s)},30866:(t,e,r)=>{"use strict";r.d(e,{d:()=>l,f:()=>c});var n=r(95946),i=r(21366),o=r(53992),s=r(6073);const a={"0x0":"reverted","0x1":"success"};function c(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map((t=>(0,o.U)(t))):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?(0,n.ly)(t.transactionIndex):null,status:t.status?a[t.status]:null,type:t.type?s.c8[t.type]||t.type:null}}const l=(0,i.$)("transactionReceipt",c)},74688:(t,e,r)=>{"use strict";r.d(e,{iy:()=>a,tG:()=>s});var n=r(92106),i=r(21366);const o={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function s(t){return{...t,gas:void 0!==t.gas?(0,n.eC)(t.gas):void 0,gasPrice:void 0!==t.gasPrice?(0,n.eC)(t.gasPrice):void 0,maxFeePerGas:void 0!==t.maxFeePerGas?(0,n.eC)(t.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==t.maxPriorityFeePerGas?(0,n.eC)(t.maxPriorityFeePerGas):void 0,nonce:void 0!==t.nonce?(0,n.eC)(t.nonce):void 0,type:void 0!==t.type?o[t.type]:void 0,value:void 0!==t.value?(0,n.eC)(t.value):void 0}}const a=(0,i.$)("transactionRequest",s)},93714:(t,e,r)=>{"use strict";function n(t,e,r){return n=>t[e.name||r]?.(n)??e(t,n)}r.d(e,{s:()=>n})},54092:(t,e,r)=>{"use strict";r.d(e,{e:()=>s});var n=r(11187),i=r(49574),o=r(44813);const s=t=>{return e=(t=>(0,i.r)(t))(t),(0,o.w)((0,n.O0)(e));var e}},40552:(t,e,r)=>{"use strict";r.d(e,{o:()=>a});var n=r(3972),i=r(11187),o=r(49574),s=r(44813);const a=t=>{return(0,n.tP)((e=(0,o.r)(t),(0,s.w)((0,i.O0)(e))),0,4);var e}},49574:(t,e,r)=>{"use strict";r.d(e,{r:()=>a});const n=/^tuple(?<array>(\[(\d*)\])*)$/;function i(t){let e=t.type;if(n.test(t.type)&&"components"in t){e="(";const r=t.components.length;for(let n=0;n<r;n++)e+=i(t.components[n]),n<r-1&&(e+=", ");const o=function(t,e){const r=t.exec(e);return r?.groups}(n,t.type);return e+=`)${o?.array??""}`,i({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function o(t){let e="";const r=t.length;for(let n=0;n<r;n++)e+=i(t[n]),n!==r-1&&(e+=", ");return e}var s=r(62027);const a=t=>{var e;return function(t){let e=!0,r="",n=0,i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),"("===a&&n++,")"===a&&n--,e)if(0!==n)" "!==a?(i+=a,r+=a):","!==t[s-1]&&","!==r&&",("!==r&&(r="",e=!1);else if(" "===a&&["event","function",""].includes(i))i="";else if(i+=a,")"===a){o=!0;break}}if(!o)throw new s.G("Unable to normalize signature.");return i}("string"==typeof t?t:"function"===(e=t).type?`function ${e.name}(${o(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${o(e.outputs)})`:""}`:"event"===e.type?`event ${e.name}(${o(e.inputs)})`:"error"===e.type?`error ${e.name}(${o(e.inputs)})`:"constructor"===e.type?`constructor(${o(e.inputs)})${"payable"===e.stateMutability?" payable":""}`:"fallback"===e.type?"fallback()":"receive() external payable")}},44813:(t,e,r)=>{"use strict";function n(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function i(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function o(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}r.d(e,{w:()=>O});const s=BigInt(2**32-1),a=BigInt(32);function c(t,e=!1){return e?{h:Number(t&s),l:Number(t>>a&s)}:{h:0|Number(t>>a&s),l:0|Number(t&s)}}function l(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=c(t[i],e);[r[i],n[i]]=[o,s]}return[r,n]}if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw new Error("Non little-endian hardware is not supported");function u(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),!(t instanceof Uint8Array))throw new Error("expected Uint8Array, got "+typeof t);return t}class h{clone(){return this._cloneInto()}}const[d,p,f]=[[],[],[]],m=BigInt(0),g=BigInt(1),y=BigInt(2),b=BigInt(7),w=BigInt(256),v=BigInt(113);for(let t=0,e=g,r=1,n=0;t<24;t++){[r,n]=[n,(2*r+3*n)%5],d.push(2*(5*n+r)),p.push((t+1)*(t+2)/2%64);let i=m;for(let t=0;t<7;t++)e=(e<<g^(e>>b)*v)%w,e&y&&(i^=g<<(g<<BigInt(t))-g);f.push(i)}const[x,_]=l(f,!0),E=(t,e,r)=>r>32?((t,e,r)=>e<<r-32|t>>>64-r)(t,e,r):((t,e,r)=>t<<r|e>>>32-r)(t,e,r),C=(t,e,r)=>r>32?((t,e,r)=>t<<r-32|e>>>64-r)(t,e,r):((t,e,r)=>e<<r|t>>>32-r)(t,e,r);class A extends h{constructor(t,e,r,i=!1,o=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var s;this.state=new Uint8Array(200),this.state32=(s=this.state,new Uint32Array(s.buffer,s.byteOffset,Math.floor(s.byteLength/4)))}keccak(){!function(t,e=24){const r=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let e=0;e<10;e++)r[e]=t[e]^t[e+10]^t[e+20]^t[e+30]^t[e+40];for(let e=0;e<10;e+=2){const n=(e+8)%10,i=(e+2)%10,o=r[i],s=r[i+1],a=E(o,s,1)^r[n],c=C(o,s,1)^r[n+1];for(let r=0;r<50;r+=10)t[e+r]^=a,t[e+r+1]^=c}let e=t[2],i=t[3];for(let r=0;r<24;r++){const n=p[r],o=E(e,i,n),s=C(e,i,n),a=d[r];e=t[a],i=t[a+1],t[a]=o,t[a+1]=s}for(let e=0;e<50;e+=10){for(let n=0;n<10;n++)r[n]=t[e+n];for(let n=0;n<10;n++)t[e+n]^=~r[(n+2)%10]&r[(n+4)%10]}t[0]^=x[n],t[1]^=_[n]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){o(this);const{blockLen:e,state:r}=this,n=(t=u(t)).length;for(let i=0;i<n;){const o=Math.min(e-this.pos,n-i);for(let e=0;e<o;e++)r[this.pos++]^=t[i++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:e,pos:r,blockLen:n}=this;t[r]^=e,0!=(128&e)&&r===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){o(this,!1),i(t),this.finish();const e=this.state,{blockLen:r}=this;for(let n=0,i=t.length;n<i;){this.posOut>=r&&this.keccak();const o=Math.min(r-this.posOut,i-n);t.set(e.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return n(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(function(t,e){i(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:e,suffix:r,outputLen:n,rounds:i,enableXOF:o}=this;return t||(t=new A(e,r,n,o,i)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=i,t.suffix=r,t.outputLen=n,t.enableXOF=o,t.destroyed=this.destroyed,t}}const k=((t,e,r)=>function(t){const e=e=>t().update(u(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}((()=>new A(e,t,r))))(1,136,32);var S=r(15102),I=r(11187),M=r(92106);function O(t,e){const r=e||"hex",n=k((0,S.v)(t,{strict:!1})?(0,I.O0)(t):t);return"bytes"===r?n:(0,M.NC)(n)}},32357:(t,e,r)=>{"use strict";r.d(e,{S:()=>i});const n=new Map;function i({fn:t,id:e,shouldSplitBatch:r,wait:i=0,sort:o}){const s=async()=>{const e=c();a();const r=e.map((({args:t})=>t));0!==r.length&&t(r).then((t=>{o&&Array.isArray(t)&&t.sort(o);for(let r=0;r<e.length;r++){const{pendingPromise:n}=e[r];n.resolve?.([t[r],t])}})).catch((t=>{for(let r=0;r<e.length;r++){const{pendingPromise:n}=e[r];n.reject?.(t)}}))},a=()=>n.delete(e),c=()=>n.get(e)||[],l=t=>n.set(e,[...c(),t]);return{flush:a,async schedule(t){const e={},n=new Promise(((t,r)=>{e.resolve=t,e.reject=r})),o=r?.([...c().map((({args:t})=>t)),t]);return o&&s(),c().length>0?(l({args:t,pendingPromise:e}),n):(l({args:t,pendingPromise:e}),setTimeout(s,i),n)}}}},7760:(t,e,r)=>{"use strict";r.d(e,{J:()=>i});var n=r(62914);function i(t,{delay:e=100,retryCount:r=2,shouldRetry:i=(()=>!0)}={}){return new Promise(((o,s)=>{const a=async({count:c=0}={})=>{try{const e=await t();o(e)}catch(t){if(c<r&&await i({count:c,error:t}))return(async({error:t})=>{const r="function"==typeof e?e({count:c,error:t}):e;r&&await(0,n.D)(r),a({count:c+1})})({error:t});s(t)}};a()}))}},96070:(t,e,r)=>{"use strict";r.d(e,{P:()=>n});const n=(t,e,r)=>JSON.stringify(t,((t,r)=>{const n="bigint"==typeof r?r.toString():r;return"function"==typeof e?e(t,n):n}),r)},47531:(t,e,r)=>{"use strict";r.d(e,{F:()=>c});var n=r(14503),i=r(26087),o=r(26445),s=r(33639),a=r(49321);function c(t){const{account:e,gasPrice:r,maxFeePerGas:c,maxPriorityFeePerGas:l,to:u}=t,h=e?(0,n.T)(e):void 0;if(h&&!(0,a.U)(h.address))throw new i.b({address:h.address});if(u&&!(0,a.U)(u))throw new i.b({address:u});if(void 0!==r&&(void 0!==c||void 0!==l))throw new s.xY;if(c&&c>2n**256n-1n)throw new o.Hh({maxFeePerGas:c});if(l&&c&&l>c)throw new o.cs({maxFeePerGas:c,maxPriorityFeePerGas:l})}},82994:(t,e,r)=>{"use strict";r.d(e,{l:()=>i});var n=r(33639);function i(t){if(t.type)return t.type;if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)return"eip1559";if(void 0!==t.gasPrice)return void 0!==t.accessList?"eip2930":"legacy";throw new n.j3({transaction:t})}},67829:(t,e,r)=>{"use strict";r.d(e,{cj:()=>h,iC:()=>u});var n=r(57412),i=r(26087),o=r(49321),s=r(39135),a=r(92106);const c=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,l=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:t,message:e,primaryType:r,types:u}){const h=u,d=(t,e)=>{for(const r of t){const{name:t,type:u}=r,p=u,f=e[t],m=p.match(l);if(m&&("number"==typeof f||"bigint"==typeof f)){const[t,e,r]=m;(0,a.eC)(f,{signed:"int"===e,size:parseInt(r)/8})}if("address"===p&&"string"==typeof f&&!(0,o.U)(f))throw new i.b({address:f});const g=p.match(c);if(g){const[t,e]=g;if(e&&(0,s.d)(f)!==parseInt(e))throw new n.KY({expectedSize:parseInt(e),givenSize:(0,s.d)(f)})}const y=h[p];y&&d(y,f)}};if(h.EIP712Domain&&t&&d(h.EIP712Domain,t),"EIP712Domain"!==r){const t=h[r];d(t,e)}}function h({domain:t}){return["string"==typeof t?.name&&{name:"name",type:"string"},t?.version&&{name:"version",type:"string"},"number"==typeof t?.chainId&&{name:"chainId",type:"uint256"},t?.verifyingContract&&{name:"verifyingContract",type:"address"},t?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},39625:(t,e,r)=>{"use strict";r.d(e,{d:()=>o});var n=r(84192),i=r(15229);function o(t,e="wei"){return(0,i.b)(t,n.ez[e])}},67795:(t,e,r)=>{"use strict";r.d(e,{o:()=>o});var n=r(84192),i=r(15229);function o(t,e="wei"){return(0,i.b)(t,n.Zn[e])}},15229:(t,e,r)=>{"use strict";function n(t,e){let r=t.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(e,"0");let[i,o]=[r.slice(0,r.length-e),r.slice(r.length-e)];return o=o.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${o?`.${o}`:""}`}r.d(e,{b:()=>n})},62914:(t,e,r)=>{"use strict";async function n(t){return new Promise((e=>setTimeout(e,t)))}r.d(e,{D:()=>n})},80661:t=>{"use strict";t.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]')}},n={};function i(t){var e=n[t];if(void 0!==e)return e.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return r[t].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}return i.amdO={},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var s={};t=t||[null,e({}),e([]),e(e)];for(var a=2&n&&r;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>r[t]));return s.default=()=>r,i.d(o,s),o},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i(68138)})()));