(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._agent_5fou2_1{stroke-width:0px;stroke:#000;fill:#000}._hideout_5fou2_7{fill:#505050}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Zi = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-1",
  controls_class: "tw:p-1",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-8 tw:sm:p-0"
};
function un(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Wi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function kr(t) {
  let n, e, r;
  t.length !== 2 ? (n = un, e = (s, u) => un(t(s), u), r = (s, u) => t(s) - u) : (n = t === un || t === Wi ? t : Ji, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function Ji() {
  return 0;
}
function Qi(t) {
  return t === null ? NaN : +t;
}
const ji = kr(un), to = ji.right;
kr(Qi).center;
const no = Math.sqrt(50), eo = Math.sqrt(10), ro = Math.sqrt(2);
function pn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= no ? 10 : o >= eo ? 5 : o >= ro ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? pn(t, n, e * 2) : [s, u, l];
}
function io(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? pn(n, t, e) : pn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Jn(t, n, e) {
  return n = +n, t = +t, e = +e, pn(t, n, e)[2];
}
function oo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Jn(n, t, e) : Jn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Qt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function ao(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var so = { value: () => {
} };
function me() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ln(e);
}
function ln(t) {
  this._ = t;
}
function uo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ln.prototype = me.prototype = {
  constructor: ln,
  on: function(t, n) {
    var e = this._, r = uo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = lo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = qe(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = qe(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ln(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function lo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function qe(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = so, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Qn = "http://www.w3.org/1999/xhtml";
const Be = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function An(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Be.hasOwnProperty(n) ? { space: Be[n], local: t } : t;
}
function fo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Qn && n.documentElement.namespaceURI === Qn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function co(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Cr(t) {
  var n = An(t);
  return (n.local ? co : fo)(n);
}
function ho() {
}
function ve(t) {
  return t == null ? ho : function() {
    return this.querySelector(t);
  };
}
function po(t) {
  typeof t != "function" && (t = ve(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new O(r, this._parents);
}
function go(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function _o() {
  return [];
}
function Rr(t) {
  return t == null ? _o : function() {
    return this.querySelectorAll(t);
  };
}
function yo(t) {
  return function() {
    return go(t.apply(this, arguments));
  };
}
function mo(t) {
  typeof t == "function" ? t = yo(t) : t = Rr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new O(r, i);
}
function Fr(t) {
  return function() {
    return this.matches(t);
  };
}
function Lr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var vo = Array.prototype.find;
function wo(t) {
  return function() {
    return vo.call(this.children, t);
  };
}
function bo() {
  return this.firstElementChild;
}
function xo(t) {
  return this.select(t == null ? bo : wo(typeof t == "function" ? t : Lr(t)));
}
var Mo = Array.prototype.filter;
function $o() {
  return Array.from(this.children);
}
function Ao(t) {
  return function() {
    return Mo.call(this.children, t);
  };
}
function To(t) {
  return this.selectAll(t == null ? $o : Ao(typeof t == "function" ? t : Lr(t)));
}
function Po(t) {
  typeof t != "function" && (t = Fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new O(r, this._parents);
}
function Dr(t) {
  return new Array(t.length);
}
function So() {
  return new O(this._enter || this._groups.map(Dr), this._parents);
}
function gn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
gn.prototype = {
  constructor: gn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Eo(t) {
  return function() {
    return t;
  };
}
function No(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new gn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function zo(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), p;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = p = a.call(u, u.__data__, s, n) + "", l.has(p) ? i[s] = u : l.set(p, u));
  for (s = 0; s < f; ++s)
    p = a.call(t, o[s], s, o) + "", (u = l.get(p)) ? (r[s] = u, u.__data__ = o[s], l.delete(p)) : e[s] = new gn(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Io(t) {
  return t.__data__;
}
function Oo(t, n) {
  if (!arguments.length) return Array.from(this, Io);
  var e = n ? zo : No, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Eo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, p = ko(t.call(c, c && c.__data__, l, r)), d = p.length, y = s[l] = new Array(d), m = a[l] = new Array(d), _ = u[l] = new Array(h);
    e(c, f, y, m, _, p, n);
    for (var M = 0, A = 0, g, w; M < d; ++M)
      if (g = y[M]) {
        for (M >= A && (A = M + 1); !(w = m[A]) && ++A < d; ) ;
        g._next = w || null;
      }
  }
  return a = new O(a, r), a._enter = s, a._exit = u, a;
}
function ko(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Co() {
  return new O(this._exit || this._groups.map(Dr), this._parents);
}
function Ro(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Fo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), p, d = 0; d < f; ++d)
      (p = l[d] || c[d]) && (h[d] = p);
  for (; u < i; ++u)
    s[u] = e[u];
  return new O(s, this._parents);
}
function Lo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Do(t) {
  t || (t = Ho);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new O(i, this._parents).order();
}
function Ho(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function qo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Bo() {
  return Array.from(this);
}
function Xo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Go() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Uo() {
  return !this.node();
}
function Yo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Ko(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Zo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Wo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Jo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Qo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function jo(t, n) {
  var e = An(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Vo : Ko : typeof n == "function" ? e.local ? Qo : Jo : e.local ? Wo : Zo)(e, n));
}
function Hr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ta(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function na(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ea(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ra(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ta : typeof n == "function" ? ea : na)(t, n, e ?? "")) : St(this.node(), t);
}
function St(t, n) {
  return t.style.getPropertyValue(n) || Hr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ia(t) {
  return function() {
    delete this[t];
  };
}
function oa(t, n) {
  return function() {
    this[t] = n;
  };
}
function aa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function sa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ia : typeof n == "function" ? aa : oa)(t, n)) : this.node()[t];
}
function qr(t) {
  return t.trim().split(/^|\s+/);
}
function we(t) {
  return t.classList || new Br(t);
}
function Br(t) {
  this._node = t, this._names = qr(t.getAttribute("class") || "");
}
Br.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Xr(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Gr(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ua(t) {
  return function() {
    Xr(this, t);
  };
}
function la(t) {
  return function() {
    Gr(this, t);
  };
}
function fa(t, n) {
  return function() {
    (n.apply(this, arguments) ? Xr : Gr)(this, t);
  };
}
function ca(t, n) {
  var e = qr(t + "");
  if (arguments.length < 2) {
    for (var r = we(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? fa : n ? ua : la)(e, n));
}
function ha() {
  this.textContent = "";
}
function da(t) {
  return function() {
    this.textContent = t;
  };
}
function pa(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ga(t) {
  return arguments.length ? this.each(t == null ? ha : (typeof t == "function" ? pa : da)(t)) : this.node().textContent;
}
function _a() {
  this.innerHTML = "";
}
function ya(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ma(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function va(t) {
  return arguments.length ? this.each(t == null ? _a : (typeof t == "function" ? ma : ya)(t)) : this.node().innerHTML;
}
function wa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ba() {
  return this.each(wa);
}
function xa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ma() {
  return this.each(xa);
}
function $a(t) {
  var n = typeof t == "function" ? t : Cr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Aa() {
  return null;
}
function Ta(t, n) {
  var e = typeof t == "function" ? t : Cr(t), r = n == null ? Aa : typeof n == "function" ? n : ve(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Pa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Sa() {
  return this.each(Pa);
}
function Ea() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Na() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function za(t) {
  return this.select(t ? Na : Ea);
}
function Ia(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Oa(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ka(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Ca(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ra(t, n, e) {
  return function() {
    var r = this.__on, i, o = Oa(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Fa(t, n, e) {
  var r = ka(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Ra : Ca, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Ur(t, n, e) {
  var r = Hr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function La(t, n) {
  return function() {
    return Ur(this, t, n);
  };
}
function Da(t, n) {
  return function() {
    return Ur(this, t, n.apply(this, arguments));
  };
}
function Ha(t, n) {
  return this.each((typeof n == "function" ? Da : La)(t, n));
}
function* qa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Yr = [null];
function O(t, n) {
  this._groups = t, this._parents = n;
}
function Kt() {
  return new O([[document.documentElement]], Yr);
}
function Ba() {
  return this;
}
O.prototype = Kt.prototype = {
  constructor: O,
  select: po,
  selectAll: mo,
  selectChild: xo,
  selectChildren: To,
  filter: Po,
  data: Oo,
  enter: So,
  exit: Co,
  join: Ro,
  merge: Fo,
  selection: Ba,
  order: Lo,
  sort: Do,
  call: qo,
  nodes: Bo,
  node: Xo,
  size: Go,
  empty: Uo,
  each: Yo,
  attr: jo,
  style: ra,
  property: sa,
  classed: ca,
  text: ga,
  html: va,
  raise: ba,
  lower: Ma,
  append: $a,
  insert: Ta,
  remove: Sa,
  clone: za,
  datum: Ia,
  on: Fa,
  dispatch: Ha,
  [Symbol.iterator]: qa
};
function P(t) {
  return typeof t == "string" ? new O([[document.querySelector(t)]], [document.documentElement]) : new O([[t]], Yr);
}
function Xa(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function jn(t, n) {
  if (t = Xa(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ga = { passive: !1 }, Ht = { capture: !0, passive: !1 };
function Xn(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ua(t) {
  var n = t.document.documentElement, e = P(t).on("dragstart.drag", At, Ht);
  "onselectstart" in n ? e.on("selectstart.drag", At, Ht) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ya(t, n) {
  var e = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  n && (r.on("click.drag", At, Ht), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const jt = (t) => () => t;
function te(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
te.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ka(t) {
  return !t.ctrlKey && !t.button;
}
function Va() {
  return this.parentNode;
}
function Za(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Wa() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ja() {
  var t = Ka, n = Va, e = Za, r = Wa, i = {}, o = me("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", m).on("touchmove.drag", _, Ga).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, w) {
    if (!(c || !t.call(this, g, w))) {
      var T = A(this, n.call(this, g, w), g, w, "mouse");
      T && (P(g.view).on("mousemove.drag", d, Ht).on("mouseup.drag", y, Ht), Ua(g.view), Xn(g), l = !1, s = g.clientX, u = g.clientY, T("start", g));
    }
  }
  function d(g) {
    if (At(g), !l) {
      var w = g.clientX - s, T = g.clientY - u;
      l = w * w + T * T > f;
    }
    i.mouse("drag", g);
  }
  function y(g) {
    P(g.view).on("mousemove.drag mouseup.drag", null), Ya(g.view, l), At(g), i.mouse("end", g);
  }
  function m(g, w) {
    if (t.call(this, g, w)) {
      var T = g.changedTouches, S = n.call(this, g, w), N = T.length, B, V;
      for (B = 0; B < N; ++B)
        (V = A(this, S, g, w, T[B].identifier, T[B])) && (Xn(g), V("start", g, T[B]));
    }
  }
  function _(g) {
    var w = g.changedTouches, T = w.length, S, N;
    for (S = 0; S < T; ++S)
      (N = i[w[S].identifier]) && (At(g), N("drag", g, w[S]));
  }
  function M(g) {
    var w = g.changedTouches, T = w.length, S, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < T; ++S)
      (N = i[w[S].identifier]) && (Xn(g), N("end", g, w[S]));
  }
  function A(g, w, T, S, N, B) {
    var V = o.copy(), b = jn(B || T, w), X, z, R;
    if ((R = e.call(g, new te("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: N,
      active: a,
      x: b[0],
      y: b[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), S)) != null)
      return X = R.x - b[0] || 0, z = R.y - b[1] || 0, function Jt(it, st, wt) {
        var C = b, Bn;
        switch (it) {
          case "start":
            i[N] = Jt, Bn = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            b = jn(wt || st, w), Bn = a;
            break;
        }
        V.call(
          it,
          g,
          new te(it, {
            sourceEvent: st,
            subject: R,
            target: h,
            identifier: N,
            active: Bn,
            x: b[0] + X,
            y: b[1] + z,
            dx: b[0] - C[0],
            dy: b[1] - C[1],
            dispatch: V
          }),
          S
        );
      };
  }
  return h.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : jt(!!g), h) : t;
  }, h.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : jt(g), h) : n;
  }, h.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : jt(g), h) : e;
  }, h.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : jt(!!g), h) : r;
  }, h.on = function() {
    var g = o.on.apply(o, arguments);
    return g === o ? h : g;
  }, h.clickDistance = function(g) {
    return arguments.length ? (f = (g = +g) * g, h) : Math.sqrt(f);
  }, h;
}
function be(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Kr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Vt() {
}
var qt = 0.7, _n = 1 / qt, Tt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Qa = /^#([0-9a-f]{3,8})$/, ja = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), ts = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), ns = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${Bt}\\)$`), es = new RegExp(`^rgba\\(${G},${G},${G},${Bt}\\)$`), rs = new RegExp(`^hsl\\(${Bt},${G},${G}\\)$`), is = new RegExp(`^hsla\\(${Bt},${G},${G},${Bt}\\)$`), Xe = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
be(Vt, dt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ge,
  // Deprecated! Use color.formatHex.
  formatHex: Ge,
  formatHex8: os,
  formatHsl: as,
  formatRgb: Ue,
  toString: Ue
});
function Ge() {
  return this.rgb().formatHex();
}
function os() {
  return this.rgb().formatHex8();
}
function as() {
  return Vr(this).formatHsl();
}
function Ue() {
  return this.rgb().formatRgb();
}
function dt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Qa.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ye(n) : e === 3 ? new I(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? tn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? tn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ja.exec(t)) ? new I(n[1], n[2], n[3], 1) : (n = ts.exec(t)) ? new I(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ns.exec(t)) ? tn(n[1], n[2], n[3], n[4]) : (n = es.exec(t)) ? tn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = rs.exec(t)) ? Ze(n[1], n[2] / 100, n[3] / 100, 1) : (n = is.exec(t)) ? Ze(n[1], n[2] / 100, n[3] / 100, n[4]) : Xe.hasOwnProperty(t) ? Ye(Xe[t]) : t === "transparent" ? new I(NaN, NaN, NaN, 0) : null;
}
function Ye(t) {
  return new I(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function tn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new I(t, n, e, r);
}
function ss(t) {
  return t instanceof Vt || (t = dt(t)), t ? (t = t.rgb(), new I(t.r, t.g, t.b, t.opacity)) : new I();
}
function ne(t, n, e, r) {
  return arguments.length === 1 ? ss(t) : new I(t, n, e, r ?? 1);
}
function I(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
be(I, ne, Kr(Vt, {
  brighter(t) {
    return t = t == null ? _n : Math.pow(_n, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new I(ht(this.r), ht(this.g), ht(this.b), yn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ke,
  // Deprecated! Use color.formatHex.
  formatHex: Ke,
  formatHex8: us,
  formatRgb: Ve,
  toString: Ve
}));
function Ke() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function us() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ve() {
  const t = yn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ht(this.r)}, ${ht(this.g)}, ${ht(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function yn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ht(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ft(t) {
  return t = ht(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ze(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new D(t, n, e, r);
}
function Vr(t) {
  if (t instanceof D) return new D(t.h, t.s, t.l, t.opacity);
  if (t instanceof Vt || (t = dt(t)), !t) return new D();
  if (t instanceof D) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new D(a, s, u, t.opacity);
}
function ls(t, n, e, r) {
  return arguments.length === 1 ? Vr(t) : new D(t, n, e, r ?? 1);
}
function D(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
be(D, ls, Kr(Vt, {
  brighter(t) {
    return t = t == null ? _n : Math.pow(_n, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new I(
      Gn(t >= 240 ? t - 240 : t + 120, i, r),
      Gn(t, i, r),
      Gn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new D(We(this.h), nn(this.s), nn(this.l), yn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = yn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${We(this.h)}, ${nn(this.s) * 100}%, ${nn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function We(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function nn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Gn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const xe = (t) => () => t;
function fs(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function cs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function hs(t) {
  return (t = +t) == 1 ? Zr : function(n, e) {
    return e - n ? cs(n, e, t) : xe(isNaN(n) ? e : n);
  };
}
function Zr(t, n) {
  var e = n - t;
  return e ? fs(t, e) : xe(isNaN(t) ? n : t);
}
const mn = function t(n) {
  var e = hs(n);
  function r(i, o) {
    var a = e((i = ne(i)).r, (o = ne(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = Zr(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ds(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function ps(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function gs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Me(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function _s(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function L(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ys(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Me(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var ee = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Un = new RegExp(ee.source, "g");
function ms(t) {
  return function() {
    return t;
  };
}
function vs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Wr(t, n) {
  var e = ee.lastIndex = Un.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = ee.exec(t)) && (i = Un.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: L(r, i) })), e = Un.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? vs(u[0].x) : ms(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Me(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? xe(n) : (e === "number" ? L : e === "string" ? (r = dt(n)) ? (n = r, mn) : Wr : n instanceof dt ? mn : n instanceof Date ? _s : ps(n) ? ds : Array.isArray(n) ? gs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ys : L)(t, n);
}
function ws(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Je = 180 / Math.PI, re = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Jr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Je,
    skewX: Math.atan(u) * Je,
    scaleX: a,
    scaleY: s
  };
}
var en;
function bs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? re : Jr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function xs(t) {
  return t == null || (en || (en = document.createElementNS("http://www.w3.org/2000/svg", "g")), en.setAttribute("transform", t), !(t = en.transform.baseVal.consolidate())) ? re : (t = t.matrix, Jr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Qr(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, p, d) {
    if (l !== f || c !== h) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: L(l, f) }, { i: y - 2, x: L(c, h) });
    } else (f || h) && p.push("translate(" + f + n + h + e);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: L(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: L(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, p, d) {
    if (l !== f || c !== h) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: L(l, f) }, { i: y - 2, x: L(c, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(p) {
      for (var d = -1, y = h.length, m; ++d < y; ) f[(m = h[d]).i] = m.x(p);
      return f.join("");
    };
  };
}
var Ms = Qr(bs, "px, ", "px)", "deg)"), $s = Qr(xs, ", ", ")", ")"), Et = 0, Ct = 0, It = 0, jr = 1e3, vn, Rt, wn = 0, pt = 0, Tn = 0, Xt = typeof performance == "object" && performance.now ? performance : Date, ti = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Pn() {
  return pt || (ti(As), pt = Xt.now() + Tn);
}
function As() {
  pt = 0;
}
function Gt() {
  this._call = this._time = this._next = null;
}
Gt.prototype = ni.prototype = {
  constructor: Gt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Pn() : +e) + (n == null ? 0 : +n), !this._next && Rt !== this && (Rt ? Rt._next = this : vn = this, Rt = this), this._call = t, this._time = e, ie();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ie());
  }
};
function ni(t, n, e) {
  var r = new Gt();
  return r.restart(t, n, e), r;
}
function Ts() {
  Pn(), ++Et;
  for (var t = vn, n; t; )
    (n = pt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Et;
}
function Qe() {
  pt = (wn = Xt.now()) + Tn, Et = Ct = 0;
  try {
    Ts();
  } finally {
    Et = 0, Ss(), pt = 0;
  }
}
function Ps() {
  var t = Xt.now(), n = t - wn;
  n > jr && (Tn -= n, wn = t);
}
function Ss() {
  for (var t, n = vn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : vn = e);
  Rt = t, ie(r);
}
function ie(t) {
  if (!Et) {
    Ct && (Ct = clearTimeout(Ct));
    var n = t - pt;
    n > 24 ? (t < 1 / 0 && (Ct = setTimeout(Qe, t - Xt.now() - Tn)), It && (It = clearInterval(It))) : (It || (wn = Xt.now(), It = setInterval(Ps, jr)), Et = 1, ti(Qe));
  }
}
function je(t, n, e) {
  var r = new Gt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Es(t, n, e) {
  var r = new Gt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Pn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Ns = me("start", "end", "cancel", "interrupt"), zs = [], ei = 0, tr = 1, oe = 2, fn = 3, nr = 4, ae = 5, cn = 6;
function Sn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Is(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ns,
    tween: zs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ei
  });
}
function $e(t, n) {
  var e = H(t, n);
  if (e.state > ei) throw new Error("too late; already scheduled");
  return e;
}
function K(t, n) {
  var e = H(t, n);
  if (e.state > fn) throw new Error("too late; already running");
  return e;
}
function H(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Is(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ni(o, 0, e.time);
  function o(l) {
    e.state = tr, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, f, h, p;
    if (e.state !== tr) return u();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === fn) return je(a);
        p.state === nr ? (p.state = cn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = cn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (je(function() {
      e.state === fn && (e.state = nr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = oe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === oe) {
      for (e.state = fn, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = ae, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === ae && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = cn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Os(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > oe && r.state < ae, r.state = cn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function ks(t) {
  return this.each(function() {
    Os(this, t);
  });
}
function Cs(t, n) {
  var e, r;
  return function() {
    var i = K(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Rs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Fs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = H(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Cs : Rs)(e, t, n));
}
function Ae(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return H(i, r).value[n];
  };
}
function ri(t, n) {
  var e;
  return (typeof n == "number" ? L : n instanceof dt ? mn : (e = dt(n)) ? (n = e, mn) : Wr)(t, n);
}
function Ls(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ds(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function qs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Bs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Xs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Gs(t, n) {
  var e = An(t), r = e === "transform" ? $s : ri;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Xs : Bs)(e, r, Ae(this, "attr." + t, n)) : n == null ? (e.local ? Ds : Ls)(e) : (e.local ? qs : Hs)(e, r, n));
}
function Us(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Ys(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Ks(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Ys(t, o)), e;
  }
  return i._value = n, i;
}
function Vs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Us(t, o)), e;
  }
  return i._value = n, i;
}
function Zs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = An(t);
  return this.tween(e, (r.local ? Ks : Vs)(r, n));
}
function Ws(t, n) {
  return function() {
    $e(this, t).delay = +n.apply(this, arguments);
  };
}
function Js(t, n) {
  return n = +n, function() {
    $e(this, t).delay = n;
  };
}
function Qs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ws : Js)(n, t)) : H(this.node(), n).delay;
}
function js(t, n) {
  return function() {
    K(this, t).duration = +n.apply(this, arguments);
  };
}
function tu(t, n) {
  return n = +n, function() {
    K(this, t).duration = n;
  };
}
function nu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? js : tu)(n, t)) : H(this.node(), n).duration;
}
function eu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    K(this, t).ease = n;
  };
}
function ru(t) {
  var n = this._id;
  return arguments.length ? this.each(eu(n, t)) : H(this.node(), n).ease;
}
function iu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, t).ease = e;
  };
}
function ou(t) {
  if (typeof t != "function") throw new Error();
  return this.each(iu(this._id, t));
}
function au(t) {
  typeof t != "function" && (t = Fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new Q(r, this._parents, this._name, this._id);
}
function su(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = a[s] = new Array(c), h, p = 0; p < c; ++p)
      (h = u[p] || l[p]) && (f[p] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new Q(a, this._parents, this._name, this._id);
}
function uu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function lu(t, n, e) {
  var r, i, o = uu(n) ? $e : K;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function fu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? H(this.node(), e).on.on(t) : this.each(lu(e, t, n));
}
function cu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function hu() {
  return this.on("end.remove", cu(this._id));
}
function du(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ve(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, Sn(l[h], n, e, h, l, H(c, e)));
  return new Q(o, this._parents, n, e);
}
function pu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Rr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), p, d = H(c, e), y = 0, m = h.length; y < m; ++y)
          (p = h[y]) && Sn(p, n, e, y, h, d);
        o.push(h), a.push(c);
      }
  return new Q(o, a, n, e);
}
var gu = Kt.prototype.constructor;
function _u() {
  return new gu(this._groups, this._parents);
}
function yu(t, n) {
  var e, r, i;
  return function() {
    var o = St(this, t), a = (this.style.removeProperty(t), St(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ii(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function mu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = St(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function vu(t, n, e) {
  var r, i, o;
  return function() {
    var a = St(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), St(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function wu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = K(this, t), l = u.on, c = u.value[o] == null ? s || (s = ii(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function bu(t, n, e) {
  var r = (t += "") == "transform" ? Ms : ri;
  return n == null ? this.styleTween(t, yu(t, r)).on("end.style." + t, ii(t)) : typeof n == "function" ? this.styleTween(t, vu(t, r, Ae(this, "style." + t, n))).each(wu(this._id, t)) : this.styleTween(t, mu(t, r, n), e).on("end.style." + t, null);
}
function xu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Mu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && xu(t, a, e)), r;
  }
  return o._value = n, o;
}
function $u(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Mu(t, n, e ?? ""));
}
function Au(t) {
  return function() {
    this.textContent = t;
  };
}
function Tu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Pu(t) {
  return this.tween("text", typeof t == "function" ? Tu(Ae(this, "text", t)) : Au(t == null ? "" : t + ""));
}
function Su(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Eu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Su(i)), n;
  }
  return r._value = t, r;
}
function Nu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Eu(t));
}
function zu() {
  for (var t = this._name, n = this._id, e = oi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = H(u, n);
        Sn(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Q(r, this._parents, t, e);
}
function Iu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = K(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var Ou = 0;
function Q(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function oi() {
  return ++Ou;
}
var Z = Kt.prototype;
Q.prototype = {
  constructor: Q,
  select: du,
  selectAll: pu,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: au,
  merge: su,
  selection: _u,
  transition: zu,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: fu,
  attr: Gs,
  attrTween: Zs,
  style: bu,
  styleTween: $u,
  text: Pu,
  textTween: Nu,
  remove: hu,
  tween: Fs,
  delay: Qs,
  duration: nu,
  ease: ru,
  easeVarying: ou,
  end: Iu,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function ku(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Cu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ku
};
function Ru(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Fu(t) {
  var n, e;
  t instanceof Q ? (n = t._id, t = t._name) : (n = oi(), (e = Cu).time = Pn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Sn(u, t, n, l, a, e || Ru(u, n));
  return new Q(r, this._parents, t, n);
}
Kt.prototype.interrupt = ks;
Kt.prototype.transition = Fu;
const se = Math.PI, ue = 2 * se, ut = 1e-6, Lu = ue - ut;
function ai(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Du(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ai;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Te {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ai : Du(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, c = a - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > ut) if (!(Math.abs(f * u - l * c) > ut) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, y = u * u + l * l, m = p * p + d * d, _ = Math.sqrt(y), M = Math.sqrt(h), A = o * Math.tan((se - Math.acos((y + h - m) / (2 * _ * M))) / 2), g = A / M, w = A / _;
      Math.abs(g - 1) > ut && this._append`L${n + g * c},${e + g * f}`, this._append`A${o},${o},0,0,${+(f * p > c * d)},${this._x1 = n + w * u},${this._y1 = e + w * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ut || Math.abs(this._y1 - c) > ut) && this._append`L${l},${c}`, r && (h < 0 && (h = h % ue + ue), h > Lu ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ut && this._append`A${r},${r},0,${+(h >= se)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new Te();
}
q.prototype = Te.prototype;
function Hu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function bn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Nt(t) {
  return t = bn(Math.abs(t)), t ? t[1] : NaN;
}
function qu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Bu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Xu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function xn(t) {
  if (!(n = Xu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Pe({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
xn.prototype = Pe.prototype;
function Pe(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Pe.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Gu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var si;
function Uu(t, n) {
  var e = bn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (si = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + bn(t, Math.max(0, n + o - 1))[0];
}
function er(t, n) {
  var e = bn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const rr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Hu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => er(t * 100, n),
  r: er,
  s: Uu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ir(t) {
  return t;
}
var or = Array.prototype.map, ar = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Yu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ir : qu(or.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? ir : Bu(or.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = xn(f);
    var h = f.fill, p = f.align, d = f.sign, y = f.symbol, m = f.zero, _ = f.width, M = f.comma, A = f.precision, g = f.trim, w = f.type;
    w === "n" ? (M = !0, w = "g") : rr[w] || (A === void 0 && (A = 12), g = !0, w = "g"), (m || h === "0" && p === "=") && (m = !0, h = "0", p = "=");
    var T = y === "$" ? e : y === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", S = y === "$" ? r : /[%p]/.test(w) ? a : "", N = rr[w], B = /[defgprs%]/.test(w);
    A = A === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function V(b) {
      var X = T, z = S, R, Jt, it;
      if (w === "c")
        z = N(b) + z, b = "";
      else {
        b = +b;
        var st = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? u : N(Math.abs(b), A), g && (b = Gu(b)), st && +b == 0 && d !== "+" && (st = !1), X = (st ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + X, z = (w === "s" ? ar[8 + si / 3] : "") + z + (st && d === "(" ? ")" : ""), B) {
          for (R = -1, Jt = b.length; ++R < Jt; )
            if (it = b.charCodeAt(R), 48 > it || it > 57) {
              z = (it === 46 ? i + b.slice(R + 1) : b.slice(R)) + z, b = b.slice(0, R);
              break;
            }
        }
      }
      M && !m && (b = n(b, 1 / 0));
      var wt = X.length + b.length + z.length, C = wt < _ ? new Array(_ - wt + 1).join(h) : "";
      switch (M && m && (b = n(C + b, C.length ? _ - z.length : 1 / 0), C = ""), p) {
        case "<":
          b = X + b + z + C;
          break;
        case "=":
          b = X + C + b + z;
          break;
        case "^":
          b = C.slice(0, wt = C.length >> 1) + X + b + z + C.slice(wt);
          break;
        default:
          b = C + X + b + z;
          break;
      }
      return o(b);
    }
    return V.toString = function() {
      return f + "";
    }, V;
  }
  function c(f, h) {
    var p = l((f = xn(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Nt(h) / 3))) * 3, y = Math.pow(10, -d), m = ar[8 + d / 3];
    return function(_) {
      return p(y * _) + m;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var rn, En, ui;
Ku({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ku(t) {
  return rn = Yu(t), En = rn.format, ui = rn.formatPrefix, rn;
}
function Vu(t) {
  return Math.max(0, -Nt(Math.abs(t)));
}
function Zu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Nt(n) / 3))) * 3 - Nt(Math.abs(t)));
}
function Wu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Nt(n) - Nt(t)) + 1;
}
function Ju(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Qu(t) {
  return function() {
    return t;
  };
}
function ju(t) {
  return +t;
}
var sr = [0, 1];
function Mt(t) {
  return t;
}
function le(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Qu(isNaN(n) ? NaN : 0.5);
}
function tl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function nl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = le(i, r), o = e(a, o)) : (r = le(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function el(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = le(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = to(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function rl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function il() {
  var t = sr, n = sr, e = Me, r, i, o, a = Mt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== Mt && (a = tl(t[0], t[h - 1])), s = h > 2 ? el : nl, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), L)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, ju), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = ws, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : Mt, c()) : a !== Mt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function ol() {
  return il()(Mt, Mt);
}
function al(t, n, e, r) {
  var i = oo(t, n, e), o;
  switch (r = xn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Zu(i, a)) && (r.precision = o), ui(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Wu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Vu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return En(r);
}
function sl(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return io(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return al(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Jn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function U() {
  var t = ol();
  return t.copy = function() {
    return rl(t, U());
  }, Ju.apply(t, arguments), sl(t);
}
function bt(t) {
  return function() {
    return t;
  };
}
function ul(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Te(n);
}
function ll(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function li(t) {
  this._context = t;
}
li.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function fl(t) {
  return new li(t);
}
function cl(t) {
  return t[0];
}
function hl(t) {
  return t[1];
}
function dl(t, n) {
  var e = bt(!0), r = null, i = fl, o = null, a = ul(s);
  t = typeof t == "function" ? t : t === void 0 ? cl : bt(t), n = typeof n == "function" ? n : n === void 0 ? hl : bt(n);
  function s(u) {
    var l, c = (u = ll(u)).length, f, h = !1, p;
    for (r == null && (o = i(p = a())), l = 0; l <= c; ++l)
      !(l < c && e(f = u[l], l, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(f, l, u), +n(f, l, u));
    if (p) return o = null, p + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : bt(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : bt(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : bt(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function Ft(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ft.prototype = {
  constructor: Ft,
  scale: function(t) {
    return t === 1 ? this : new Ft(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ft(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ft.prototype;
var fi = typeof global == "object" && global && global.Object === Object && global, pl = typeof self == "object" && self && self.Object === Object && self, nt = fi || pl || Function("return this")(), Y = nt.Symbol, ci = Object.prototype, gl = ci.hasOwnProperty, _l = ci.toString, Ot = Y ? Y.toStringTag : void 0;
function yl(t) {
  var n = gl.call(t, Ot), e = t[Ot];
  try {
    t[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var i = _l.call(t);
  return r && (n ? t[Ot] = e : delete t[Ot]), i;
}
var ml = Object.prototype, vl = ml.toString;
function wl(t) {
  return vl.call(t);
}
var bl = "[object Null]", xl = "[object Undefined]", ur = Y ? Y.toStringTag : void 0;
function yt(t) {
  return t == null ? t === void 0 ? xl : bl : ur && ur in Object(t) ? yl(t) : wl(t);
}
function gt(t) {
  return t != null && typeof t == "object";
}
var Ml = "[object Symbol]";
function Nn(t) {
  return typeof t == "symbol" || gt(t) && yt(t) == Ml;
}
function zn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var k = Array.isArray, lr = Y ? Y.prototype : void 0, fr = lr ? lr.toString : void 0;
function hi(t) {
  if (typeof t == "string")
    return t;
  if (k(t))
    return zn(t, hi) + "";
  if (Nn(t))
    return fr ? fr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var $l = /\s/;
function Al(t) {
  for (var n = t.length; n-- && $l.test(t.charAt(n)); )
    ;
  return n;
}
var Tl = /^\s+/;
function Pl(t) {
  return t && t.slice(0, Al(t) + 1).replace(Tl, "");
}
function j(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var cr = NaN, Sl = /^[-+]0x[0-9a-f]+$/i, El = /^0b[01]+$/i, Nl = /^0o[0-7]+$/i, zl = parseInt;
function Il(t) {
  if (typeof t == "number")
    return t;
  if (Nn(t))
    return cr;
  if (j(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = j(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Pl(t);
  var e = El.test(t);
  return e || Nl.test(t) ? zl(t.slice(2), e ? 2 : 8) : Sl.test(t) ? cr : +t;
}
var Ol = 1 / 0, kl = 17976931348623157e292;
function Yn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Il(t), t === Ol || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * kl;
  }
  return t === t ? t : 0;
}
function di(t) {
  return t;
}
var Cl = "[object AsyncFunction]", Rl = "[object Function]", Fl = "[object GeneratorFunction]", Ll = "[object Proxy]";
function pi(t) {
  if (!j(t))
    return !1;
  var n = yt(t);
  return n == Rl || n == Fl || n == Cl || n == Ll;
}
var Kn = nt["__core-js_shared__"], hr = function() {
  var t = /[^.]+$/.exec(Kn && Kn.keys && Kn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Dl(t) {
  return !!hr && hr in t;
}
var Hl = Function.prototype, ql = Hl.toString;
function mt(t) {
  if (t != null) {
    try {
      return ql.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Bl = /[\\^$.*+?()[\]{}|]/g, Xl = /^\[object .+?Constructor\]$/, Gl = Function.prototype, Ul = Object.prototype, Yl = Gl.toString, Kl = Ul.hasOwnProperty, Vl = RegExp(
  "^" + Yl.call(Kl).replace(Bl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zl(t) {
  if (!j(t) || Dl(t))
    return !1;
  var n = pi(t) ? Vl : Xl;
  return n.test(mt(t));
}
function Wl(t, n) {
  return t == null ? void 0 : t[n];
}
function vt(t, n) {
  var e = Wl(t, n);
  return Zl(e) ? e : void 0;
}
var fe = vt(nt, "WeakMap"), dr = function() {
  try {
    var t = vt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Jl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Ql = 9007199254740991, jl = /^(?:0|[1-9]\d*)$/;
function In(t, n) {
  var e = typeof t;
  return n = n ?? Ql, !!n && (e == "number" || e != "symbol" && jl.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function tf(t, n, e) {
  n == "__proto__" && dr ? dr(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function On(t, n) {
  return t === n || t !== t && n !== n;
}
var nf = Object.prototype, ef = nf.hasOwnProperty;
function rf(t, n, e) {
  var r = t[n];
  (!(ef.call(t, n) && On(r, e)) || e === void 0 && !(n in t)) && tf(t, n, e);
}
var of = 9007199254740991;
function Se(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= of;
}
function Zt(t) {
  return t != null && Se(t.length) && !pi(t);
}
function af(t, n, e) {
  if (!j(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Zt(e) && In(n, e.length) : r == "string" && n in e) ? On(e[n], t) : !1;
}
var sf = Object.prototype;
function gi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || sf;
  return t === e;
}
function uf(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var lf = "[object Arguments]";
function pr(t) {
  return gt(t) && yt(t) == lf;
}
var _i = Object.prototype, ff = _i.hasOwnProperty, cf = _i.propertyIsEnumerable, Ee = pr(/* @__PURE__ */ function() {
  return arguments;
}()) ? pr : function(t) {
  return gt(t) && ff.call(t, "callee") && !cf.call(t, "callee");
};
function hf() {
  return !1;
}
var yi = typeof exports == "object" && exports && !exports.nodeType && exports, gr = yi && typeof module == "object" && module && !module.nodeType && module, df = gr && gr.exports === yi, _r = df ? nt.Buffer : void 0, pf = _r ? _r.isBuffer : void 0, ce = pf || hf, gf = "[object Arguments]", _f = "[object Array]", yf = "[object Boolean]", mf = "[object Date]", vf = "[object Error]", wf = "[object Function]", bf = "[object Map]", xf = "[object Number]", Mf = "[object Object]", $f = "[object RegExp]", Af = "[object Set]", Tf = "[object String]", Pf = "[object WeakMap]", Sf = "[object ArrayBuffer]", Ef = "[object DataView]", Nf = "[object Float32Array]", zf = "[object Float64Array]", If = "[object Int8Array]", Of = "[object Int16Array]", kf = "[object Int32Array]", Cf = "[object Uint8Array]", Rf = "[object Uint8ClampedArray]", Ff = "[object Uint16Array]", Lf = "[object Uint32Array]", $ = {};
$[Nf] = $[zf] = $[If] = $[Of] = $[kf] = $[Cf] = $[Rf] = $[Ff] = $[Lf] = !0;
$[gf] = $[_f] = $[Sf] = $[yf] = $[Ef] = $[mf] = $[vf] = $[wf] = $[bf] = $[xf] = $[Mf] = $[$f] = $[Af] = $[Tf] = $[Pf] = !1;
function Df(t) {
  return gt(t) && Se(t.length) && !!$[yt(t)];
}
function Hf(t) {
  return function(n) {
    return t(n);
  };
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = mi && typeof module == "object" && module && !module.nodeType && module, qf = Lt && Lt.exports === mi, Vn = qf && fi.process, yr = function() {
  try {
    var t = Lt && Lt.require && Lt.require("util").types;
    return t || Vn && Vn.binding && Vn.binding("util");
  } catch {
  }
}(), mr = yr && yr.isTypedArray, vi = mr ? Hf(mr) : Df, Bf = Object.prototype, Xf = Bf.hasOwnProperty;
function wi(t, n) {
  var e = k(t), r = !e && Ee(t), i = !e && !r && ce(t), o = !e && !r && !i && vi(t), a = e || r || i || o, s = a ? uf(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Xf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    In(l, u))) && s.push(l);
  return s;
}
function bi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Gf = bi(Object.keys, Object), Uf = Object.prototype, Yf = Uf.hasOwnProperty;
function Kf(t) {
  if (!gi(t))
    return Gf(t);
  var n = [];
  for (var e in Object(t))
    Yf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function kn(t) {
  return Zt(t) ? wi(t) : Kf(t);
}
function Vf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Zf = Object.prototype, Wf = Zf.hasOwnProperty;
function Jf(t) {
  if (!j(t))
    return Vf(t);
  var n = gi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Wf.call(t, r)) || e.push(r);
  return e;
}
function Qf(t) {
  return Zt(t) ? wi(t, !0) : Jf(t);
}
var jf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tc = /^\w*$/;
function Ne(t, n) {
  if (k(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Nn(t) ? !0 : tc.test(t) || !jf.test(t) || n != null && t in Object(n);
}
var Ut = vt(Object, "create");
function nc() {
  this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
function ec(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var rc = "__lodash_hash_undefined__", ic = Object.prototype, oc = ic.hasOwnProperty;
function ac(t) {
  var n = this.__data__;
  if (Ut) {
    var e = n[t];
    return e === rc ? void 0 : e;
  }
  return oc.call(n, t) ? n[t] : void 0;
}
var sc = Object.prototype, uc = sc.hasOwnProperty;
function lc(t) {
  var n = this.__data__;
  return Ut ? n[t] !== void 0 : uc.call(n, t);
}
var fc = "__lodash_hash_undefined__";
function cc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ut && n === void 0 ? fc : n, this;
}
function _t(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = nc;
_t.prototype.delete = ec;
_t.prototype.get = ac;
_t.prototype.has = lc;
_t.prototype.set = cc;
function hc() {
  this.__data__ = [], this.size = 0;
}
function Cn(t, n) {
  for (var e = t.length; e--; )
    if (On(t[e][0], n))
      return e;
  return -1;
}
var dc = Array.prototype, pc = dc.splice;
function gc(t) {
  var n = this.__data__, e = Cn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : pc.call(n, e, 1), --this.size, !0;
}
function _c(t) {
  var n = this.__data__, e = Cn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function yc(t) {
  return Cn(this.__data__, t) > -1;
}
function mc(t, n) {
  var e = this.__data__, r = Cn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = hc;
et.prototype.delete = gc;
et.prototype.get = _c;
et.prototype.has = yc;
et.prototype.set = mc;
var Yt = vt(nt, "Map");
function vc() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (Yt || et)(),
    string: new _t()
  };
}
function wc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Rn(t, n) {
  var e = t.__data__;
  return wc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function bc(t) {
  var n = Rn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function xc(t) {
  return Rn(this, t).get(t);
}
function Mc(t) {
  return Rn(this, t).has(t);
}
function $c(t, n) {
  var e = Rn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = vc;
rt.prototype.delete = bc;
rt.prototype.get = xc;
rt.prototype.has = Mc;
rt.prototype.set = $c;
var Ac = "Expected a function";
function ze(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Ac);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (ze.Cache || rt)(), e;
}
ze.Cache = rt;
var Tc = 500;
function Pc(t) {
  var n = ze(t, function(r) {
    return e.size === Tc && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Sc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ec = /\\(\\)?/g, Nc = Pc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Sc, function(e, r, i, o) {
    n.push(i ? o.replace(Ec, "$1") : r || e);
  }), n;
});
function Fn(t) {
  return t == null ? "" : hi(t);
}
function Ln(t, n) {
  return k(t) ? t : Ne(t, n) ? [t] : Nc(Fn(t));
}
function Wt(t) {
  if (typeof t == "string" || Nn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ie(t, n) {
  n = Ln(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Wt(n[e++])];
  return e && e == r ? t : void 0;
}
function zc(t, n, e) {
  var r = t == null ? void 0 : Ie(t, n);
  return r === void 0 ? e : r;
}
function Oe(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var vr = Y ? Y.isConcatSpreadable : void 0;
function Ic(t) {
  return k(t) || Ee(t) || !!(vr && t && t[vr]);
}
function Oc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Ic), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Oe(i, s) : i[i.length] = s;
  }
  return i;
}
function kc(t) {
  var n = t == null ? 0 : t.length;
  return n ? Oc(t) : [];
}
var Cc = bi(Object.getPrototypeOf, Object);
function Rc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Fc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Rc(t, n, e);
}
var Lc = "\\ud800-\\udfff", Dc = "\\u0300-\\u036f", Hc = "\\ufe20-\\ufe2f", qc = "\\u20d0-\\u20ff", Bc = Dc + Hc + qc, Xc = "\\ufe0e\\ufe0f", Gc = "\\u200d", Uc = RegExp("[" + Gc + Lc + Bc + Xc + "]");
function xi(t) {
  return Uc.test(t);
}
function Yc(t) {
  return t.split("");
}
var Mi = "\\ud800-\\udfff", Kc = "\\u0300-\\u036f", Vc = "\\ufe20-\\ufe2f", Zc = "\\u20d0-\\u20ff", Wc = Kc + Vc + Zc, Jc = "\\ufe0e\\ufe0f", Qc = "[" + Mi + "]", he = "[" + Wc + "]", de = "\\ud83c[\\udffb-\\udfff]", jc = "(?:" + he + "|" + de + ")", $i = "[^" + Mi + "]", Ai = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", th = "\\u200d", Pi = jc + "?", Si = "[" + Jc + "]?", nh = "(?:" + th + "(?:" + [$i, Ai, Ti].join("|") + ")" + Si + Pi + ")*", eh = Si + Pi + nh, rh = "(?:" + [$i + he + "?", he, Ai, Ti, Qc].join("|") + ")", ih = RegExp(de + "(?=" + de + ")|" + rh + eh, "g");
function oh(t) {
  return t.match(ih) || [];
}
function ah(t) {
  return xi(t) ? oh(t) : Yc(t);
}
function sh(t) {
  return function(n) {
    n = Fn(n);
    var e = xi(n) ? ah(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Fc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var uh = sh("toUpperCase");
function lh(t) {
  return uh(Fn(t).toLowerCase());
}
function fh() {
  this.__data__ = new et(), this.size = 0;
}
function ch(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function hh(t) {
  return this.__data__.get(t);
}
function dh(t) {
  return this.__data__.has(t);
}
var ph = 200;
function gh(t, n) {
  var e = this.__data__;
  if (e instanceof et) {
    var r = e.__data__;
    if (!Yt || r.length < ph - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new rt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function J(t) {
  var n = this.__data__ = new et(t);
  this.size = n.size;
}
J.prototype.clear = fh;
J.prototype.delete = ch;
J.prototype.get = hh;
J.prototype.has = dh;
J.prototype.set = gh;
function Ei(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Ni() {
  return [];
}
var _h = Object.prototype, yh = _h.propertyIsEnumerable, wr = Object.getOwnPropertySymbols, zi = wr ? function(t) {
  return t == null ? [] : (t = Object(t), Ei(wr(t), function(n) {
    return yh.call(t, n);
  }));
} : Ni, mh = Object.getOwnPropertySymbols, vh = mh ? function(t) {
  for (var n = []; t; )
    Oe(n, zi(t)), t = Cc(t);
  return n;
} : Ni;
function Ii(t, n, e) {
  var r = n(t);
  return k(t) ? r : Oe(r, e(t));
}
function br(t) {
  return Ii(t, kn, zi);
}
function wh(t) {
  return Ii(t, Qf, vh);
}
var pe = vt(nt, "DataView"), ge = vt(nt, "Promise"), _e = vt(nt, "Set"), xr = "[object Map]", bh = "[object Object]", Mr = "[object Promise]", $r = "[object Set]", Ar = "[object WeakMap]", Tr = "[object DataView]", xh = mt(pe), Mh = mt(Yt), $h = mt(ge), Ah = mt(_e), Th = mt(fe), W = yt;
(pe && W(new pe(new ArrayBuffer(1))) != Tr || Yt && W(new Yt()) != xr || ge && W(ge.resolve()) != Mr || _e && W(new _e()) != $r || fe && W(new fe()) != Ar) && (W = function(t) {
  var n = yt(t), e = n == bh ? t.constructor : void 0, r = e ? mt(e) : "";
  if (r)
    switch (r) {
      case xh:
        return Tr;
      case Mh:
        return xr;
      case $h:
        return Mr;
      case Ah:
        return $r;
      case Th:
        return Ar;
    }
  return n;
});
var Pr = nt.Uint8Array, Ph = "__lodash_hash_undefined__";
function Sh(t) {
  return this.__data__.set(t, Ph), this;
}
function Eh(t) {
  return this.__data__.has(t);
}
function Mn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new rt(); ++n < e; )
    this.add(t[n]);
}
Mn.prototype.add = Mn.prototype.push = Sh;
Mn.prototype.has = Eh;
function Nh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function zh(t, n) {
  return t.has(n);
}
var Ih = 1, Oh = 2;
function Oi(t, n, e, r, i, o) {
  var a = e & Ih, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, p = e & Oh ? new Mn() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var d = t[f], y = n[f];
    if (r)
      var m = a ? r(y, d, f, n, t, o) : r(d, y, f, t, n, o);
    if (m !== void 0) {
      if (m)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Nh(n, function(_, M) {
        if (!zh(p, M) && (d === _ || i(d, _, e, r, o)))
          return p.push(M);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function ki(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function kh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Ch = 1, Rh = 2, Fh = "[object Boolean]", Lh = "[object Date]", Dh = "[object Error]", Hh = "[object Map]", qh = "[object Number]", Bh = "[object RegExp]", Xh = "[object Set]", Gh = "[object String]", Uh = "[object Symbol]", Yh = "[object ArrayBuffer]", Kh = "[object DataView]", Sr = Y ? Y.prototype : void 0, Zn = Sr ? Sr.valueOf : void 0;
function Vh(t, n, e, r, i, o, a) {
  switch (e) {
    case Kh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Yh:
      return !(t.byteLength != n.byteLength || !o(new Pr(t), new Pr(n)));
    case Fh:
    case Lh:
    case qh:
      return On(+t, +n);
    case Dh:
      return t.name == n.name && t.message == n.message;
    case Bh:
    case Gh:
      return t == n + "";
    case Hh:
      var s = ki;
    case Xh:
      var u = r & Ch;
      if (s || (s = kh), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Rh, a.set(t, n);
      var c = Oi(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case Uh:
      if (Zn)
        return Zn.call(t) == Zn.call(n);
  }
  return !1;
}
var Zh = 1, Wh = Object.prototype, Jh = Wh.hasOwnProperty;
function Qh(t, n, e, r, i, o) {
  var a = e & Zh, s = br(t), u = s.length, l = br(n), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in n : Jh.call(n, h)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  o.set(t, n), o.set(n, t);
  for (var m = a; ++f < u; ) {
    h = s[f];
    var _ = t[h], M = n[h];
    if (r)
      var A = a ? r(M, _, h, n, t, o) : r(_, M, h, t, n, o);
    if (!(A === void 0 ? _ === M || i(_, M, e, r, o) : A)) {
      y = !1;
      break;
    }
    m || (m = h == "constructor");
  }
  if (y && !m) {
    var g = t.constructor, w = n.constructor;
    g != w && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof w == "function" && w instanceof w) && (y = !1);
  }
  return o.delete(t), o.delete(n), y;
}
var jh = 1, Er = "[object Arguments]", Nr = "[object Array]", on = "[object Object]", td = Object.prototype, zr = td.hasOwnProperty;
function nd(t, n, e, r, i, o) {
  var a = k(t), s = k(n), u = a ? Nr : W(t), l = s ? Nr : W(n);
  u = u == Er ? on : u, l = l == Er ? on : l;
  var c = u == on, f = l == on, h = u == l;
  if (h && ce(t)) {
    if (!ce(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new J()), a || vi(t) ? Oi(t, n, e, r, i, o) : Vh(t, n, u, e, r, i, o);
  if (!(e & jh)) {
    var p = c && zr.call(t, "__wrapped__"), d = f && zr.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, m = d ? n.value() : n;
      return o || (o = new J()), i(y, m, e, r, o);
    }
  }
  return h ? (o || (o = new J()), Qh(t, n, e, r, i, o)) : !1;
}
function ke(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !gt(t) && !gt(n) ? t !== t && n !== n : nd(t, n, e, r, ke, i);
}
var ed = 1, rd = 2;
function id(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new J(), f;
      if (!(f === void 0 ? ke(l, u, ed | rd, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Ci(t) {
  return t === t && !j(t);
}
function od(t) {
  for (var n = kn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ci(i)];
  }
  return n;
}
function Ri(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function ad(t) {
  var n = od(t);
  return n.length == 1 && n[0][2] ? Ri(n[0][0], n[0][1]) : function(e) {
    return e === t || id(e, t, n);
  };
}
function sd(t, n) {
  return t != null && n in Object(t);
}
function Fi(t, n, e) {
  n = Ln(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Wt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Se(i) && In(a, i) && (k(t) || Ee(t)));
}
function ud(t, n) {
  return t != null && Fi(t, n, sd);
}
var ld = 1, fd = 2;
function cd(t, n) {
  return Ne(t) && Ci(n) ? Ri(Wt(t), n) : function(e) {
    var r = zc(e, t);
    return r === void 0 && r === n ? ud(e, t) : ke(n, r, ld | fd);
  };
}
function hd(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function dd(t) {
  return function(n) {
    return Ie(n, t);
  };
}
function pd(t) {
  return Ne(t) ? hd(Wt(t)) : dd(t);
}
function Dn(t) {
  return typeof t == "function" ? t : t == null ? di : typeof t == "object" ? k(t) ? cd(t[0], t[1]) : ad(t) : pd(t);
}
function gd(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var _d = gd();
function yd(t, n) {
  return t && _d(t, n, kn);
}
function md(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Zt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Ce = md(yd);
function vd(t) {
  return typeof t == "function" ? t : di;
}
function ct(t, n) {
  var e = k(t) ? Jl : Ce;
  return e(t, vd(n));
}
function wd(t, n) {
  return zn(n, function(e) {
    return [e, t[e]];
  });
}
function bd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var xd = "[object Map]", Md = "[object Set]";
function $d(t) {
  return function(n) {
    var e = W(n);
    return e == xd ? ki(n) : e == Md ? bd(n) : wd(n, t(n));
  };
}
var Li = $d(kn);
function Ad(t, n) {
  var e = [];
  return Ce(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function kt(t, n) {
  var e = k(t) ? Ei : Ad;
  return e(t, Dn(n));
}
function Td(t, n) {
  var e = -1, r = Zt(t) ? Array(t.length) : [];
  return Ce(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function tt(t, n) {
  var e = k(t) ? zn : Td;
  return e(t, Dn(n));
}
var Pd = Object.prototype, Sd = Pd.hasOwnProperty;
function Ed(t, n) {
  return t != null && Sd.call(t, n);
}
function Di(t, n) {
  return t != null && Fi(t, n, Ed);
}
var Nd = "[object Boolean]";
function zd(t) {
  return t === !0 || t === !1 || gt(t) && yt(t) == Nd;
}
function Id(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
var Od = NaN;
function kd(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? Id(t, n) / e : Od;
}
function xt(t, n) {
  return kd(t, Dn(n));
}
function Cd(t, n, e, r) {
  if (!j(t))
    return t;
  n = Ln(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Wt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = j(c) ? c : In(n[i + 1]) ? [] : {});
    }
    rf(s, u, l), s = s[u];
  }
  return t;
}
function Rd(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Ie(t, a);
    e(s, a) && Cd(o, Ln(a, t), s);
  }
  return o;
}
function Hi(t, n) {
  if (t == null)
    return {};
  var e = zn(wh(t), function(r) {
    return [r];
  });
  return n = Dn(n), Rd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Fd = Math.ceil, Ld = Math.max;
function Dd(t, n, e, r) {
  for (var i = -1, o = Ld(Fd((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Hd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && af(n, e, r) && (e = r = void 0), n = Yn(n), e === void 0 ? (e = n, n = 0) : e = Yn(e), r = r === void 0 ? n < e ? 1 : -1 : Yn(r), Dd(n, e, r);
  };
}
var zt = Hd();
function qd() {
  var t = arguments, n = Fn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const Bd = (t, n, e = 12, r = 12) => {
  const i = U().domain([0, e]).range([0, t]), o = U().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return zt((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = kc(tt(l, function(f) {
        return tt(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, Xd = "_widget_18g36_1", Gd = "_label_18g36_19", Ud = "_lit_18g36_24", Yd = "_button_18g36_29", Kd = "_symbol_18g36_29", Vd = "_radio_18g36_29", Zd = "_radiobutton_18g36_29", Wd = "_selected_18g36_35", Jd = "_toggle_18g36_35", Qd = "_slider_18g36_44", jd = "_track_18g36_44", tp = "_track_overlay_18g36_48", np = "_handle_18g36_55", v = {
  widget: Xd,
  label: Gd,
  lit: Ud,
  button: Yd,
  symbol: Kd,
  radio: Vd,
  radiobutton: Zd,
  selected: Wd,
  toggle: Jd,
  slider: Qd,
  track: jd,
  track_overlay: tp,
  handle: np
}, Re = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Fe = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, ep = (t = 1) => {
  const n = q();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, rp = (t = 1) => {
  const n = q(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, ip = (t = 1) => {
  const n = q();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, op = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = q();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, ap = (t = 1) => {
  const n = q(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, sp = (t = 1) => {
  const n = q(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, up = (t = 1) => {
  const n = q(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, lp = (t = 1) => {
  var n = q(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, fp = (t = 1) => {
  const n = q(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ye = (t) => {
  switch (t) {
    case "play":
      return ep;
    case "forward":
      return rp;
    case "back":
      return ip;
    case "pause":
      return op;
    case "reload":
      return ap;
    case "capture":
      return sp;
    case "rewind":
      return up;
    case "stop":
      return lp;
    case "push":
      return fp;
  }
}, Le = () => {
  const t = "button";
  var n = Re(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), P(this.parentNode).select("." + v.symbol).attr("d", ye(c[f])(r * e));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + n).select("." + v.symbol).attr("d", ye(c[f])(r * e));
    }
  };
}, cp = () => {
  const t = "slider", n = En(".3f");
  var e = Re(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], p = 0, d = null, y = U().domain(h).range([0, r]).clamp(!0);
  const m = function(_, M, A = h) {
    const g = _.select("#slider_" + e);
    y.domain(A), p = M, g.selectAll("." + v.handle).transition().attr("cx", y(M)), a && g.select("." + v.label).text(d + " = " + n(p)), c(), f();
  };
  return {
    type: t,
    scale: y,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    range: function(_) {
      return typeof _ > "u" ? h : (h = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? p : (p = _, this);
    },
    reset: m,
    click: m
  };
}, hp = () => {
  const t = "toggle";
  var n = Re(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = P(this.parentNode);
      f.select("." + v.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(v.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const p = f.select("#toggle_" + n);
      p.selectAll("." + v.handle).transition().attr("cx", u ? 2 * e : 0), p.classed(v.selected, u), s();
    }
  };
}, dp = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = P(o).attr("class", v.widget + " " + v.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", v.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(v.lit, !0), P(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(v.lit, !1), P(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), a.append("path").attr("d", ye(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", v.symbol), r) {
    const u = Fe(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, qi = (t, n) => {
  const e = q();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, pp = (t, n) => {
  const e = En(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(u).attr("class", v.widget + " " + v.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", qi(t.size(), t.girth())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", v.track_overlay).on("click", function(d) {
    const y = jn(d, this)[0];
    t.value(a.invert(y)), t.update(), t.update_end(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Ja().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Qt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Qt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Qt([t.girth() / 2, t.knob()]) + 7 : -Qt([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", v.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, gp = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(a).attr("class", v.widget + " " + v.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(v.selected, t.value() == 1);
  if (s.append("path").attr("d", qi(2 * t.size(), 2 * t.size())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", v.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Fe(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, _p = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = ao(a), u = U().domain([0, a - 1]).range([0, t.size()]), l = U().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = P(c).attr("class", v.widget + " " + v.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + v.radiobutton).data(s).enter().append("g").attr("class", v.radiobutton).attr("id", (m) => "b" + m).attr("transform", (m) => t.orientation() == "vertical" ? "translate(0," + l(m) + ")" : "translate(" + u(m) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), p.attr("class", v.background).on("mouseover", function() {
    P(this).classed(v.lit, !0), P(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(v.lit, !1), P(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), d.attr("class", v.symbol), d.filter((m) => m == t.value()).classed(v.selected, !0), h.on("click", t.click);
  const y = Fe(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", v.label).text(function(m, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", y.valign).attr("transform", "translate(" + y.x + "," + y.y + ")").style("font-size", t.fontsize()).attr("text-anchor", y.anchor), c;
}, Wn = (t, n) => {
  switch (t.type) {
    case "button":
      return dp(t);
    case "slider":
      return pp(t);
    case "radio":
      return _p(t);
    case "toggle":
      return gp(t);
  }
}, yp = (t, n) => {
  const e = Bd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = P("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, E = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.25,
    slider_girth: 12,
    slider_knob: 14,
    slider_anchor: { x: 1, y: 6.6 },
    toggle_anchor: { x: 10, y: 1.5 },
    toggle_label_pos: "left",
    toggle_gap: 1.5,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 4.5 },
    resetbutton_anchor: { x: 2, y: 4.5 }
  },
  simulation: {
    delay: 10
  }
}, x = {
  N: 100,
  L: 128,
  agentsize: 6,
  dt: 1,
  speed_variation: 0.5,
  angular_increment: 0.2,
  collission_radius: 1,
  blindspot: 100,
  number_hideouts: 3,
  speed_hideouts: 0.075,
  size_hideouts: 30,
  speed_in_the_light: {
    range: [0.1, 1],
    default: 0.5
  },
  speed_in_the_dark: {
    range: [0.05, 0.5],
    default: 0.1
  },
  alignment_radius: {
    range: [0, 5],
    default: 2
  },
  attraction_radius: {
    range: [0, 15],
    default: 10
  },
  wiggle: {
    range: [0, 30],
    default: 10
  },
  collective_behavior: {
    default: !0
  },
  dark_zones: {
    default: !0
  }
}, Bi = (t) => tt(
  Li(t),
  (n) => {
    n[1].id = n[0], Di(n[1], "label") || (n[1].label = qd(lh(n[0]), /_/g, " "));
  }
), Xi = (t) => tt(Li(t), (n) => n[1]), Gi = (t, n) => ct(t, (e, r) => e.widget = n[r]), mp = (t) => Hi(t, (n) => Di(n, "range")), vp = (t) => Hi(t, (n) => zd(n.default)), F = U().domain([0, 360]).range([0, 2 * Math.PI]), an = U().range([0, 360]).domain([0, 2 * Math.PI]), Ir = (t, n) => {
  const e = t.x - n.x, r = t.y - n.y;
  return Math.sqrt(e * e + r * r);
}, wp = (t) => {
  const e = dl().x((i) => t * i.x).y((i) => t * i.y), r = tt(zt(30), (i) => ({
    x: -2 * Math.cos(i / 30 * Math.PI * 2),
    y: Math.sin(i / 30 * Math.PI * 2) * Math.pow(Math.sin(i / 30 / 2 * Math.PI * 2), 6)
  }));
  return e(r);
}, De = mp(x), He = vp(x);
Bi(De);
Bi(He);
const Ui = Xi(De), Yi = Xi(He), hn = tt(
  Ui,
  (t) => cp().id(t.id).label(t.label).range(t.range).value(t.default).girth(E.widgets.slider_girth).knob(E.widgets.slider_knob).size(E.widgets.slider_size)
), dn = tt(
  Yi,
  (t) => hp().id(t.id).label(t.label).labelposition(E.widgets.toggle_label_pos).value(t.default)
);
Gi(Yi, dn);
Gi(Ui, hn);
const ot = Le().actions(["play", "pause"]), Hn = Le().actions(["back"]), qn = Le().actions(["rewind"]), bp = [ot, Hn, qn], xp = (t, n) => {
  const e = n.position(E.widgets.slider_anchor.x, zt(hn.length).map((i) => E.widgets.slider_anchor.y + E.widgets.slider_gap * i)), r = n.position(E.widgets.toggle_anchor.x, zt(dn.length).map((i) => E.widgets.toggle_anchor.y + E.widgets.toggle_gap * i));
  hn.forEach((i, o) => i.position(e[o])), dn.forEach((i, o) => i.position(r[o])), ot.position(n.position(E.widgets.playbutton_anchor.x, E.widgets.playbutton_anchor.y)).size(E.widgets.playbutton_size), qn.position(n.position(E.widgets.backbutton_anchor.x, E.widgets.backbutton_anchor.y)), Hn.position(n.position(E.widgets.resetbutton_anchor.x, E.widgets.resetbutton_anchor.y)), t.selectAll(null).data(hn).enter().append(Wn), t.selectAll(null).data(dn).enter().append(Wn), t.selectAll(null).data(bp).enter().append(Wn);
}, Mp = (t) => {
  ct(De, (n) => n.widget.reset(t, n.default)), ct(He, (n) => n.widget.reset(t, n.default));
}, at = x.L, sn = x.dt, $p = x.N;
Math.cos((180 - x.blindspot / 2) / 180 * Math.PI);
var lt = [], $n = [];
const Ap = () => {
  x.timer = {}, x.tick = 0, lt = tt(zt($p), (t) => ({
    id: t,
    x: Math.random() * at,
    y: Math.random() * at,
    theta: Math.random() * 360,
    speed_var: 1 + Math.random() * x.speed_variation
  })), $n = tt(zt(x.number_hideouts), (t) => {
    const n = Math.random() * Math.PI * 2;
    return {
      id: t,
      x: Math.random() * at,
      y: Math.random() * at,
      vx: x.speed_hideouts * Math.cos(n),
      vy: x.speed_hideouts * Math.sin(n),
      r: x.size_hideouts
    };
  });
}, Tp = () => {
  x.tick++, ct($n, (t) => {
    let n = sn * t.vx, e = sn * t.vy, r = t.x + n, i = t.y + e;
    (r < 0 || r > at) && (n *= -1, t.vx *= -1), (i < 0 || i > at) && (e *= -1, t.vy *= -1), t.x = t.x + n, t.y = t.y + e;
  }), ct(lt, (t) => {
    let n = [];
    var e, r, i, o;
    if (n = kt(lt, (u) => Ir(t, u) < x.collission_radius && u.id != t.id), n.length > 0)
      e = t.x - xt(n, (u) => u.x), r = t.y - xt(n, (u) => u.y);
    else {
      const u = Math.cos(F(t.theta)), l = Math.sin(F(t.theta)), c = Math.sqrt(u * u + l * l), f = kt(lt, (d) => {
        let y = d.x - t.x, m = d.y - t.y;
        return d.r = Math.sqrt(y * y + m * m), (y * u + m * l) / (c * d.r), d.r < x.attraction_radius.widget.value() && d.id != t.id;
      }), h = kt(f, (d) => d.r < x.alignment_radius.widget.value()), p = kt(f, (d) => d.r > x.alignment_radius.widget.value());
      if (i = t.theta, o = t.theta, h.length > 0 && x.collective_behavior.widget.value()) {
        const d = xt(h, (m) => Math.cos(F(m.theta))), y = xt(h, (m) => Math.sin(F(m.theta)));
        i = an(Math.atan2(y, d));
      }
      if (p.length > 0 && x.collective_behavior.widget.value()) {
        const d = xt(p, (m) => m.x), y = xt(p, (m) => m.y);
        o = an(Math.atan2(y - t.y, d - t.x));
      }
      e = 0.5 * (Math.cos(F(i)) + Math.cos(F(o))), r = 0.5 * (Math.sin(F(i)) + Math.sin(F(o)));
    }
    const a = Math.cos(F(t.theta)) + x.angular_increment * e, s = Math.sin(F(t.theta)) + x.angular_increment * r;
    t.theta = an(Math.atan2(s, a));
  }), ct(lt, (t) => {
    t.theta = t.theta + (Math.random() - 0.5) * x.wiggle.widget.value();
  }), ct(lt, (t) => {
    const e = kt($n, (u) => Ir(u, t) < u.r).length == 0 || x.dark_zones.widget.value() == !1 ? x.speed_in_the_light.widget.value() : x.speed_in_the_dark.widget.value(), r = F(t.theta);
    let i = sn * e * t.speed_var * Math.cos(r), o = sn * e * t.speed_var * Math.sin(r), a = t.x + i, s = t.y + o;
    (a < 0 || a > at) && (i *= -1), (s < 0 || s > at) && (o *= -1), t.x = t.x + i, t.y = t.y + o, t.theta = an(Math.atan2(o, i));
  });
}, Pp = "_agent_5fou2_1", Sp = "_hideout_5fou2_7", Pt = {
  agent: Pp,
  hideout: Sp
}, Ki = x.L, $t = U().domain([0, Ki]), Dt = U().domain([0, Ki]), Ep = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  $t.range([0, e]), Dt.range([0, r]), t.select("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  i.selectAll(null).data($n).enter().append("circle").attr("class", Pt.hideout).attr("r", function(a) {
    return $t(a.r);
  }).attr("cx", (a) => $t(a.x)).attr("cy", (a) => Dt(a.y)).style("opacity", x.dark_zones.widget.value() ? 1 : 0), i.selectAll("." + Pt.agent).data(lt).enter().append("g").attr("class", Pt.agent).attr("transform", (a) => "translate(" + $t(a.x) + "," + Dt(a.y) + ")rotate(" + a.theta + ")").append("path").attr("d", wp(x.agentsize));
}, Np = (t, n) => {
  t.selectAll("." + Pt.hideout).attr("cx", (e) => $t(e.x)).attr("cy", (e) => Dt(e.y)), t.selectAll("." + Pt.agent).attr("transform", (e) => "translate(" + $t(e.x) + "," + Dt(e.y) + ")rotate(" + e.theta + ")");
};
function zp(t, n) {
  Tp(), Np(t);
}
function Vi(t, n) {
  Ap(), Ep(t, n);
}
var Or = {};
const Ip = (t, n) => {
  ot.value() == 1 ? Or = Es(() => zp(t), E.simulation.delay) : Or.stop();
}, Op = (t, n, e) => {
  qn.update(() => Mp(n)), ot.update(() => Ip(t)), Hn.update(() => Vi(t, e)), x.dark_zones.widget.update(() => {
    t.selectAll("." + Pt.hideout).transition(1e3).style("opacity", x.dark_zones.widget.value() ? 1 : 0);
  });
}, kp = {
  name: "@explorables/into_the_dark",
  title: "Into the Dark",
  subtitle: "Collective intelligence",
  description: "This explorable illustrates the emergence of collective intelligence in a model for a school of fish. The combination of speed differences in the light and the dark and cohesive swarm forces helps the swarm find the safe regions.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Cp(t, n = Zi) {
  const e = yp(t, n), r = e.display, i = e.controls, o = e.grid;
  return xp(i, o), Op(r, i, n), Vi(r, n), {
    halt() {
      ot.value() === 1 && ot.press(i);
    },
    reset() {
      ot.value() === 1 && ot.press(i), qn.press(i), Hn.press(i);
    },
    config: n,
    meta: kp
  };
}
export {
  Zi as config,
  Cp as default,
  Cp as load,
  kp as meta
};
