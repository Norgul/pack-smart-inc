!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(g, !0);
                }
                if (f) {
                    return f(g, !0);
                }
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j;
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
    return e
}
({
    1: [function (a, b, c) {
        !function (a, c) {
            "use strict";
            "object" == typeof b && "object" == typeof b.exports ? b.exports = a.document ? c(a, !0) : function (a) {
                if (!a.document)throw new Error("jQuery requires a window with a document");
                return c(a)
            } : c(a)
        }("undefined" != typeof window ? window : this, function (a, b) {
            "use strict";
            function c(a, b) {
                b = b || _;
                var c = b.createElement("script");
                c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
            }

            function d(a) {
                var b = !!a && "length" in a && a.length, c = ma.type(a);
                return "function" !== c && !ma.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
            }

            function e(a, b, c) {
                if (ma.isFunction(b))return ma.grep(a, function (a, d) {
                    return !!b.call(a, d, a) !== c
                });
                if (b.nodeType)return ma.grep(a, function (a) {
                    return a === b !== c
                });
                if ("string" == typeof b) {
                    if (wa.test(b))return ma.filter(b, a, c);
                    b = ma.filter(b, a)
                }
                return ma.grep(a, function (a) {
                    return ea.call(b, a) > -1 !== c && 1 === a.nodeType
                })
            }

            function f(a, b) {
                for (; (a = a[b]) && 1 !== a.nodeType;);
                return a
            }

            function g(a) {
                var b = {};
                return ma.each(a.match(Ca) || [], function (a, c) {
                    b[c] = !0
                }), b
            }

            function h(a) {
                return a
            }

            function i(a) {
                throw a
            }

            function j(a, b, c) {
                var d;
                try {
                    a && ma.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && ma.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
                } catch (a) {
                    c.call(void 0, a)
                }
            }

            function k() {
                _.removeEventListener("DOMContentLoaded", k), a.removeEventListener("load", k), ma.ready()
            }

            function l() {
                this.expando = ma.expando + l.uid++
            }

            function m(a, b, c) {
                var d;
                if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(Ka, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ja.test(c) ? JSON.parse(c) : c)
                    } catch (a) {
                    }
                    Ia.set(a, b, c)
                } else c = void 0;
                return c
            }

            function n(a, b, c, d) {
                var e, f = 1, g = 20, h = d ? function () {
                    return d.cur()
                } : function () {
                    return ma.css(a, b, "")
                }, i = h(), j = c && c[3] || (ma.cssNumber[b] ? "" : "px"), k = (ma.cssNumber[b] || "px" !== j && +i) && Ma.exec(ma.css(a, b));
                if (k && k[3] !== j) {
                    j = j || k[3], c = c || [], k = +i || 1;
                    do f = f || ".5", k /= f, ma.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
                }
                return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
            }

            function o(a) {
                var b, c = a.ownerDocument, d = a.nodeName, e = Qa[d];
                return e ? e : (b = c.body.appendChild(c.createElement(d)), e = ma.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Qa[d] = e, e)
            }

            function p(a, b) {
                for (var c, d, e = [], f = 0, g = a.length; f < g; f++)d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ha.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Oa(d) && (e[f] = o(d))) : "none" !== c && (e[f] = "none", Ha.set(d, "display", c)));
                for (f = 0; f < g; f++)null != e[f] && (a[f].style.display = e[f]);
                return a
            }

            function q(a, b) {
                var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                return void 0 === b || b && ma.nodeName(a, b) ? ma.merge([a], c) : c
            }

            function r(a, b) {
                for (var c = 0, d = a.length; c < d; c++)Ha.set(a[c], "globalEval", !b || Ha.get(b[c], "globalEval"))
            }

            function s(a, b, c, d, e) {
                for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)if (f = a[n], f || 0 === f)if ("object" === ma.type(f))ma.merge(m, f.nodeType ? [f] : f); else if (Va.test(f)) {
                    for (g = g || l.appendChild(b.createElement("div")), h = (Sa.exec(f) || ["", ""])[1].toLowerCase(), i = Ua[h] || Ua._default, g.innerHTML = i[1] + ma.htmlPrefilter(f) + i[2], k = i[0]; k--;)g = g.lastChild;
                    ma.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
                } else m.push(b.createTextNode(f));
                for (l.textContent = "", n = 0; f = m[n++];)if (d && ma.inArray(f, d) > -1)e && e.push(f); else if (j = ma.contains(f.ownerDocument, f), g = q(l.appendChild(f), "script"), j && r(g), c)for (k = 0; f = g[k++];)Ta.test(f.type || "") && c.push(f);
                return l
            }

            function t() {
                return !0
            }

            function u() {
                return !1
            }

            function v() {
                try {
                    return _.activeElement
                } catch (a) {
                }
            }

            function w(a, b, c, d, e, f) {
                var g, h;
                if ("object" == typeof b) {
                    "string" != typeof c && (d = d || c, c = void 0);
                    for (h in b)w(a, h, c, d, b[h], f);
                    return a
                }
                if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1)e = u; else if (!e)return a;
                return 1 === f && (g = e, e = function (a) {
                    return ma().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = ma.guid++)), a.each(function () {
                    ma.event.add(this, b, e, d, c)
                })
            }

            function x(a, b) {
                return ma.nodeName(a, "table") && ma.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
            }

            function y(a) {
                return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
            }

            function z(a) {
                var b = bb.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"), a
            }

            function A(a, b) {
                var c, d, e, f, g, h, i, j;
                if (1 === b.nodeType) {
                    if (Ha.hasData(a) && (f = Ha.access(a), g = Ha.set(b, f), j = f.events)) {
                        delete g.handle, g.events = {};
                        for (e in j)for (c = 0, d = j[e].length; c < d; c++)ma.event.add(b, e, j[e][c])
                    }
                    Ia.hasData(a) && (h = Ia.access(a), i = ma.extend({}, h), Ia.set(b, i))
                }
            }

            function B(a, b) {
                var c = b.nodeName.toLowerCase();
                "input" === c && Ra.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }

            function C(a, b, d, e) {
                b = ca.apply([], b);
                var f, g, h, i, j, k, l = 0, m = a.length, n = m - 1, o = b[0], p = ma.isFunction(o);
                if (p || m > 1 && "string" == typeof o && !ka.checkClone && ab.test(o))return a.each(function (c) {
                    var f = a.eq(c);
                    p && (b[0] = o.call(this, c, f.html())), C(f, b, d, e)
                });
                if (m && (f = s(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
                    for (h = ma.map(q(f, "script"), y), i = h.length; l < m; l++)j = f, l !== n && (j = ma.clone(j, !0, !0), i && ma.merge(h, q(j, "script"))), d.call(a[l], j, l);
                    if (i)for (k = h[h.length - 1].ownerDocument, ma.map(h, z), l = 0; l < i; l++)j = h[l], Ta.test(j.type || "") && !Ha.access(j, "globalEval") && ma.contains(k, j) && (j.src ? ma._evalUrl && ma._evalUrl(j.src) : c(j.textContent.replace(cb, ""), k))
                }
                return a
            }

            function D(a, b, c) {
                for (var d, e = b ? ma.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || ma.cleanData(q(d)), d.parentNode && (c && ma.contains(d.ownerDocument, d) && r(q(d, "script")), d.parentNode.removeChild(d));
                return a
            }

            function E(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || fb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || ma.contains(a.ownerDocument, a) || (g = ma.style(a, b)), !ka.pixelMarginRight() && eb.test(g) && db.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
            }

            function F(a, b) {
                return {
                    get: function () {
                        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                    }
                }
            }

            function G(a) {
                if (a in kb)return a;
                for (var b = a[0].toUpperCase() + a.slice(1), c = jb.length; c--;)if (a = jb[c] + b, a in kb)return a
            }

            function H(a, b, c) {
                var d = Ma.exec(b);
                return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
            }

            function I(a, b, c, d, e) {
                for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2)"margin" === c && (g += ma.css(a, c + Na[f], !0, e)), d ? ("content" === c && (g -= ma.css(a, "padding" + Na[f], !0, e)), "margin" !== c && (g -= ma.css(a, "border" + Na[f] + "Width", !0, e))) : (g += ma.css(a, "padding" + Na[f], !0, e), "padding" !== c && (g += ma.css(a, "border" + Na[f] + "Width", !0, e)));
                return g
            }

            function J(a, b, c) {
                var d, e = !0, f = fb(a), g = "border-box" === ma.css(a, "boxSizing", !1, f);
                if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
                    if (d = E(a, b, f), (d < 0 || null == d) && (d = a.style[b]), eb.test(d))return d;
                    e = g && (ka.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
                }
                return d + I(a, b, c || (g ? "border" : "content"), e, f) + "px"
            }

            function K(a, b, c, d, e) {
                return new K.prototype.init(a, b, c, d, e)
            }

            function L() {
                mb && (a.requestAnimationFrame(L), ma.fx.tick())
            }

            function M() {
                return a.setTimeout(function () {
                    lb = void 0
                }), lb = ma.now()
            }

            function N(a, b) {
                var c, d = 0, e = {height: a};
                for (b = b ? 1 : 0; d < 4; d += 2 - b)c = Na[d], e["margin" + c] = e["padding" + c] = a;
                return b && (e.opacity = e.width = a), e
            }

            function O(a, b, c) {
                for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a))return d
            }

            function P(a, b, c) {
                var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, q = a.nodeType && Oa(a), r = Ha.get(a, "fxshow");
                c.queue || (g = ma._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
                    g.unqueued || h()
                }), g.unqueued++, m.always(function () {
                    m.always(function () {
                        g.unqueued--, ma.queue(a, "fx").length || g.empty.fire()
                    })
                }));
                for (d in b)if (e = b[d], nb.test(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d])continue;
                        q = !0
                    }
                    n[d] = r && r[d] || ma.style(a, d)
                }
                if (i = !ma.isEmptyObject(b), i || !ma.isEmptyObject(n)) {
                    l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = r && r.display, null == j && (j = Ha.get(a, "display")), k = ma.css(a, "display"), "none" === k && (j ? k = j : (p([a], !0), j = a.style.display || j, k = ma.css(a, "display"), p([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === ma.css(a, "float") && (i || (m.done(function () {
                        o.display = j
                    }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
                    })), i = !1;
                    for (d in n)i || (r ? "hidden" in r && (q = r.hidden) : r = Ha.access(a, "fxshow", {display: j}), f && (r.hidden = !q), q && p([a], !0), m.done(function () {
                        q || p([a]), Ha.remove(a, "fxshow");
                        for (d in n)ma.style(a, d, n[d])
                    })), i = O(q ? r[d] : 0, d, m), d in r || (r[d] = i.start, q && (i.end = i.start, i.start = 0))
                }
            }

            function Q(a, b) {
                var c, d, e, f, g;
                for (c in a)if (d = ma.camelCase(c), e = b[d], f = a[c], ma.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ma.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f)c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
            }

            function R(a, b, c) {
                var d, e, f = 0, g = R.prefilters.length, h = ma.Deferred().always(function () {
                    delete i.elem
                }), i = function () {
                    if (e)return !1;
                    for (var b = lb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
                }, j = h.promise({
                    elem: a,
                    props: ma.extend({}, b),
                    opts: ma.extend(!0, {specialEasing: {}, easing: ma.easing._default}, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: lb || M(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function (b, c) {
                        var d = ma.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function (b) {
                        var c = 0, d = b ? j.tweens.length : 0;
                        if (e)return this;
                        for (e = !0; c < d; c++)j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }), k = j.props;
                for (Q(k, j.opts.specialEasing); f < g; f++)if (d = R.prefilters[f].call(j, a, k, j.opts))return ma.isFunction(d.stop) && (ma._queueHooks(j.elem, j.opts.queue).stop = ma.proxy(d.stop, d)), d;
                return ma.map(k, O, j), ma.isFunction(j.opts.start) && j.opts.start.call(a, j), ma.fx.timer(ma.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
            }

            function S(a) {
                return a.getAttribute && a.getAttribute("class") || ""
            }

            function T(a, b, c, d) {
                var e;
                if (ma.isArray(b))ma.each(b, function (b, e) {
                    c || Ab.test(a) ? d(a, e) : T(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
                }); else if (c || "object" !== ma.type(b))d(a, b); else for (e in b)T(a + "[" + e + "]", b[e], c, d)
            }

            function U(a) {
                return function (b, c) {
                    "string" != typeof b && (c = b, b = "*");
                    var d, e = 0, f = b.toLowerCase().match(Ca) || [];
                    if (ma.isFunction(c))for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }

            function V(a, b, c, d) {
                function e(h) {
                    var i;
                    return f[h] = !0, ma.each(a[h] || [], function (a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                    }), i
                }

                var f = {}, g = a === Mb;
                return e(b.dataTypes[0]) || !f["*"] && e("*")
            }

            function W(a, b) {
                var c, d, e = ma.ajaxSettings.flatOptions || {};
                for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
                return d && ma.extend(!0, a, d), a
            }

            function X(a, b, c) {
                for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                if (d)for (e in h)if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
                if (i[0] in c)f = i[0]; else {
                    for (e in c) {
                        if (!i[0] || a.converters[e + " " + i[0]]) {
                            f = e;
                            break
                        }
                        g || (g = e)
                    }
                    f = f || g
                }
                if (f)return f !== i[0] && i.unshift(f), c[f]
            }

            function Y(a, b, c, d) {
                var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
                for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
                    if (g !== !0)if (g && a.throws)b = g(b); else try {
                        b = g(b)
                    } catch (a) {
                        return {state: "parsererror", error: g ? a : "No conversion from " + i + " to " + f}
                    }
                }
                return {state: "success", data: b}
            }

            function Z(a) {
                return ma.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
            }

            var $ = [], _ = a.document, aa = Object.getPrototypeOf, ba = $.slice, ca = $.concat, da = $.push, ea = $.indexOf, fa = {}, ga = fa.toString, ha = fa.hasOwnProperty, ia = ha.toString, ja = ia.call(Object), ka = {}, la = "3.0.0", ma = function (a, b) {
                return new ma.fn.init(a, b)
            }, na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oa = /^-ms-/, pa = /-([a-z])/g, qa = function (a, b) {
                return b.toUpperCase()
            };
            ma.fn = ma.prototype = {
                jquery: la, constructor: ma, length: 0, toArray: function () {
                    return ba.call(this)
                }, get: function (a) {
                    return null != a ? a < 0 ? this[a + this.length] : this[a] : ba.call(this)
                }, pushStack: function (a) {
                    var b = ma.merge(this.constructor(), a);
                    return b.prevObject = this, b
                }, each: function (a) {
                    return ma.each(this, a)
                }, map: function (a) {
                    return this.pushStack(ma.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                }, slice: function () {
                    return this.pushStack(ba.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (a) {
                    var b = this.length, c = +a + (a < 0 ? b : 0);
                    return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: da, sort: $.sort, splice: $.splice
            }, ma.extend = ma.fn.extend = function () {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ma.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (ma.isPlainObject(d) || (e = ma.isArray(d))) ? (e ? (e = !1, f = c && ma.isArray(c) ? c : []) : f = c && ma.isPlainObject(c) ? c : {}, g[b] = ma.extend(j, f, d)) : void 0 !== d && (g[b] = d));
                return g
            }, ma.extend({
                expando: "jQuery" + (la + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (a) {
                    throw new Error(a)
                },
                noop: function () {
                },
                isFunction: function (a) {
                    return "function" === ma.type(a)
                },
                isArray: Array.isArray,
                isWindow: function (a) {
                    return null != a && a === a.window
                },
                isNumeric: function (a) {
                    var b = ma.type(a);
                    return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
                },
                isPlainObject: function (a) {
                    var b, c;
                    return !(!a || "[object Object]" !== ga.call(a)) && (!(b = aa(a)) || (c = ha.call(b, "constructor") && b.constructor, "function" == typeof c && ia.call(c) === ja))
                },
                isEmptyObject: function (a) {
                    var b;
                    for (b in a)return !1;
                    return !0
                },
                type: function (a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? fa[ga.call(a)] || "object" : typeof a
                },
                globalEval: function (a) {
                    c(a)
                },
                camelCase: function (a) {
                    return a.replace(oa, "ms-").replace(pa, qa)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function (a, b) {
                    var c, e = 0;
                    if (d(a))for (c = a.length; e < c && b.call(a[e], e, a[e]) !== !1; e++); else for (e in a)if (b.call(a[e], e, a[e]) === !1)break;
                    return a
                },
                trim: function (a) {
                    return null == a ? "" : (a + "").replace(na, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    return null != a && (d(Object(a)) ? ma.merge(c, "string" == typeof a ? [a] : a) : da.call(c, a)), c
                },
                inArray: function (a, b, c) {
                    return null == b ? -1 : ea.call(b, a, c)
                },
                merge: function (a, b) {
                    for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d];
                    return a.length = e, a
                },
                grep: function (a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
                    return e
                },
                map: function (a, b, c) {
                    var e, f, g = 0, h = [];
                    if (d(a))for (e = a.length; g < e; g++)f = b(a[g], g, c), null != f && h.push(f); else for (g in a)f = b(a[g], g, c), null != f && h.push(f);
                    return ca.apply([], h)
                },
                guid: 1,
                proxy: function (a, b) {
                    var c, d, e;
                    if ("string" == typeof b && (c = a[b], b = a, a = c), ma.isFunction(a))return d = ba.call(arguments, 2), e = function () {
                        return a.apply(b || this, d.concat(ba.call(arguments)))
                    }, e.guid = a.guid = a.guid || ma.guid++, e
                },
                now: Date.now,
                support: ka
            }), "function" == typeof Symbol && (ma.fn[Symbol.iterator] = $[Symbol.iterator]), ma.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
                fa["[object " + b + "]"] = b.toLowerCase()
            });
            var ra = function (a) {
                function b(a, b, c, d) {
                    var e, f, g, h, i, j, k, m = b && b.ownerDocument, o = b ? b.nodeType : 9;
                    if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o)return c;
                    if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                        if (11 !== o && (i = ra.exec(a)))if (e = i[1]) {
                            if (9 === o) {
                                if (!(g = b.getElementById(e)))return c;
                                if (g.id === e)return c.push(g), c
                            } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e)return c.push(g), c
                        } else {
                            if (i[2])return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName)return $.apply(c, b.getElementsByClassName(e)), c
                        }
                        if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                            if (1 !== o)m = b, k = a; else if ("object" !== b.nodeName.toLowerCase()) {
                                for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;)j[f] = "#" + h + " " + n(j[f]);
                                k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                            }
                            if (k)try {
                                return $.apply(c, m.querySelectorAll(k)), c
                            } catch (a) {
                            } finally {
                                h === O && b.removeAttribute("id")
                            }
                        }
                    }
                    return C(a.replace(ha, "$1"), b, c, d)
                }

                function c() {
                    function a(c, d) {
                        return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
                    }

                    var b = [];
                    return a
                }

                function d(a) {
                    return a[O] = !0, a
                }

                function e(a) {
                    var b = H.createElement("fieldset");
                    try {
                        return !!a(b)
                    } catch (a) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null
                    }
                }

                function f(a, b) {
                    for (var c = a.split("|"), d = c.length; d--;)x.attrHandle[c[d]] = b
                }

                function g(a, b) {
                    var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                    if (d)return d;
                    if (c)for (; c = c.nextSibling;)if (c === b)return -1;
                    return a ? 1 : -1
                }

                function h(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }

                function i(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function j(a) {
                    return function (b) {
                        return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ya(b)) !== a)
                    }
                }

                function k(a) {
                    return d(function (b) {
                        return b = +b, d(function (c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }

                function l(a) {
                    return a && "undefined" != typeof a.getElementsByTagName && a
                }

                function m() {
                }

                function n(a) {
                    for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value;
                    return d
                }

                function o(a, b, c) {
                    var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = R++;
                    return b.first ? function (b, c, e) {
                        for (; b = b[d];)if (1 === b.nodeType || g)return a(b, c, e)
                    } : function (b, c, i) {
                        var j, k, l, m = [Q, h];
                        if (i) {
                            for (; b = b[d];)if ((1 === b.nodeType || g) && a(b, c, i))return !0
                        } else for (; b = b[d];)if (1 === b.nodeType || g)if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase())b = b[d] || b; else {
                            if ((j = k[f]) && j[0] === Q && j[1] === h)return m[2] = j[2];
                            if (k[f] = m, m[2] = a(b, c, i))return !0
                        }
                    }
                }

                function p(a) {
                    return a.length > 1 ? function (b, c, d) {
                        for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                        return !0
                    } : a[0]
                }

                function q(a, c, d) {
                    for (var e = 0, f = c.length; e < f; e++)b(a, c[e], d);
                    return d
                }

                function r(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                    return g
                }

                function s(a, b, c, e, f, g) {
                    return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function (d, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, p = d || q(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? p : r(p, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                        if (c && c(s, t, h, i), e)for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                        if (d) {
                            if (f || a) {
                                if (f) {
                                    for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                    f(null, t = [], j, i)
                                }
                                for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                            }
                        } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                    })
                }

                function t(a) {
                    for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                        return a === b
                    }, g, !0), j = o(function (a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function (a, c, d) {
                        var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; h < e; h++)if (c = x.relative[a[h].type])k = [o(p(k), c)]; else {
                        if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                            for (d = ++h; d < e && !x.relative[a[d].type]; d++);
                            return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a))
                        }
                        k.push(c)
                    }
                    return p(k)
                }

                function u(a, c) {
                    var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                        var k, l, m, n = 0, o = "0", p = d && [], q = [], s = D, t = d || f && x.find.TAG("*", j), u = Q += null == s ? 1 : Math.random() || .1, v = t.length;
                        for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)if (m(k, g || H, h)) {
                                    i.push(k);
                                    break
                                }
                                j && (Q = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];)m(p, q, g, h);
                            if (d) {
                                if (n > 0)for (; o--;)p[o] || q[o] || (q[o] = Y.call(i));
                                q = r(q)
                            }
                            $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (Q = u, D = s), p
                    };
                    return e ? d(g) : g
                }

                var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date, P = a.document, Q = 0, R = 0, S = c(), T = c(), U = c(), V = function (a, b) {
                    return a === b && (F = !0), 0
                }, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function (a, b) {
                    for (var c = 0, d = a.length; c < d; c++)if (a[c] === b)return c;
                    return -1
                }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]", fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)", ga = new RegExp(ca + "+", "g"), ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ia = new RegExp("^" + ca + "*," + ca + "*"), ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), la = new RegExp(fa), ma = new RegExp("^" + da + "$"), na = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da + "|[*])"),
                    ATTR: new RegExp("^" + ea),
                    PSEUDO: new RegExp("^" + fa),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/, ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), ua = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                }, va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, wa = function (a, b) {
                    return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                }, xa = function () {
                    G()
                }, ya = o(function (a) {
                    return a.disabled === !0
                }, {dir: "parentNode", next: "legend"});
                try {
                    $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
                } catch (a) {
                    $ = {
                        apply: X.length ? function (a, b) {
                            Z.apply(a, _.call(b))
                        } : function (a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++];);
                            a.length = c - 1
                        }
                    }
                }
                w = b.support = {}, z = b.isXML = function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return !!b && "HTML" !== b.nodeName
                }, G = b.setDocument = function (a) {
                    var b, c, d = a ? a.ownerDocument || a : P;
                    return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function (a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), w.getElementsByTagName = e(function (a) {
                        return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
                    }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function (a) {
                        return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
                    }), w.getById ? (x.find.ID = function (a, b) {
                        if ("undefined" != typeof b.getElementById && J) {
                            var c = b.getElementById(a);
                            return c ? [c] : []
                        }
                    }, x.filter.ID = function (a) {
                        var b = a.replace(ta, ua);
                        return function (a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete x.find.ID, x.filter.ID = function (a) {
                        var b = a.replace(ta, ua);
                        return function (a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), x.find.TAG = w.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
                    } : function (a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; c = f[e++];)1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, x.find.CLASS = w.getElementsByClassName && function (a, b) {
                            if ("undefined" != typeof b.getElementsByClassName && J)return b.getElementsByClassName(a)
                        }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function (a) {
                        I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
                    }), e(function (a) {
                        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var b = H.createElement("input");
                        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
                    })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function (a) {
                        w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
                    }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function (a, b) {
                        if (b)for (; b = b.parentNode;)if (b === a)return !0;
                        return !1
                    }, V = b ? function (a, b) {
                        if (a === b)return F = !0, 0;
                        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
                    } : function (a, b) {
                        if (a === b)return F = !0, 0;
                        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                        if (!e || !f)return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                        if (e === f)return g(a, b);
                        for (c = a; c = c.parentNode;)h.unshift(c);
                        for (c = b; c = c.parentNode;)i.unshift(c);
                        for (; h[d] === i[d];)d++;
                        return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                    }, H) : H
                }, b.matches = function (a, c) {
                    return b(a, null, null, c)
                }, b.matchesSelector = function (a, c) {
                    if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c)))try {
                        var d = M.call(a, c);
                        if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
                    } catch (a) {
                    }
                    return b(c, H, null, [a]).length > 0
                }, b.contains = function (a, b) {
                    return (a.ownerDocument || a) !== H && G(a), N(a, b)
                }, b.attr = function (a, b) {
                    (a.ownerDocument || a) !== H && G(a);
                    var c = x.attrHandle[b.toLowerCase()], d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                    return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }, b.escape = function (a) {
                    return (a + "").replace(va, wa)
                }, b.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }, b.uniqueSort = function (a) {
                    var b, c = [], d = 0, e = 0;
                    if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                        for (; b = a[e++];)b === a[e] && (d = c.push(e));
                        for (; d--;)a.splice(c[d], 1)
                    }
                    return E = null, a
                }, y = b.getText = function (a) {
                    var b, c = "", d = 0, e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent)return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling)c += y(a)
                        } else if (3 === e || 4 === e)return a.nodeValue
                    } else for (; b = a[d++];)c += y(b);
                    return c
                }, x = b.selectors = {
                    cacheLength: 50,
                    createPseudo: d,
                    match: na,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (a) {
                            return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        }, CHILD: function (a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                        }, PSEUDO: function (a) {
                            var b, c = !a[6] && a[2];
                            return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(ta, ua).toLowerCase();
                            return "*" === a ? function () {
                                return !0
                            } : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        }, CLASS: function (a) {
                            var b = S[a + " "];
                            return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function (a) {
                                    return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                                })
                        }, ATTR: function (a, c, d) {
                            return function (e) {
                                var f = b.attr(e, a);
                                return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                            }
                        }, CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                            return 1 === d && 0 === e ? function (a) {
                                return !!a.parentNode
                            } : function (b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                                if (q) {
                                    if (f) {
                                        for (; p;) {
                                            for (m = b; m = m[p];)if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [Q, n, t];
                                            break
                                        }
                                    } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1)for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                                    return t -= e, t === d || t % d === 0 && t / d >= 0
                                }
                            }
                        }, PSEUDO: function (a, c) {
                            var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                            return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                                for (var d, e = f(a, c), g = e.length; g--;)d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                            }) : function (a) {
                                return f(a, 0, e)
                            }) : f
                        }
                    },
                    pseudos: {
                        not: d(function (a) {
                            var b = [], c = [], e = B(a.replace(ha, "$1"));
                            return e[O] ? d(function (a, b, c, d) {
                                for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function (a, d, f) {
                                return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                            }
                        }), has: d(function (a) {
                            return function (c) {
                                return b(a, c).length > 0
                            }
                        }), contains: d(function (a) {
                            return a = a.replace(ta, ua), function (b) {
                                return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                            }
                        }), lang: d(function (a) {
                            return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(), function (b) {
                                var c;
                                do if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                        }), target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        }, root: function (a) {
                            return a === I
                        }, focus: function (a) {
                            return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        }, enabled: j(!1), disabled: j(!0), checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        }, selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        }, empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                            return !0
                        }, parent: function (a) {
                            return !x.pseudos.empty(a)
                        }, header: function (a) {
                            return pa.test(a.nodeName)
                        }, input: function (a) {
                            return oa.test(a.nodeName)
                        }, button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        }, text: function (a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        }, first: k(function () {
                            return [0]
                        }), last: k(function (a, b) {
                            return [b - 1]
                        }), eq: k(function (a, b, c) {
                            return [c < 0 ? c + b : c]
                        }), even: k(function (a, b) {
                            for (var c = 0; c < b; c += 2)a.push(c);
                            return a
                        }), odd: k(function (a, b) {
                            for (var c = 1; c < b; c += 2)a.push(c);
                            return a
                        }), lt: k(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c; --d >= 0;)a.push(d);
                            return a
                        }), gt: k(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c; ++d < b;)a.push(d);
                            return a
                        })
                    }
                }, x.pseudos.nth = x.pseudos.eq;
                for (v in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[v] = h(v);
                for (v in{submit: !0, reset: !0})x.pseudos[v] = i(v);
                return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function (a, c) {
                    var d, e, f, g, h, i, j, k = T[a + " "];
                    if (k)return c ? 0 : k.slice(0);
                    for (h = a, i = [], j = x.preFilter; h;) {
                        d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                            value: d,
                            type: e[0].replace(ha, " ")
                        }), h = h.slice(d.length));
                        for (g in x.filter)!(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                        if (!d)break
                    }
                    return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
                }, B = b.compile = function (a, b) {
                    var c, d = [], e = [], f = U[a + " "];
                    if (!f) {
                        for (b || (b = A(a)), c = b.length; c--;)f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                        f = U(a, u(e, d)), f.selector = a
                    }
                    return f
                }, C = b.select = function (a, b, c, d) {
                    var e, f, g, h, i, j = "function" == typeof a && a, k = !d && A(a = j.selector || a);
                    if (c = c || [], 1 === k.length) {
                        if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && w.getById && 9 === b.nodeType && J && x.relative[f[1].type]) {
                            if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b)return c;
                            j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                        }
                        for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && n(f), !a)return $.apply(c, d), c;
                            break
                        }
                    }
                    return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
                }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function (a) {
                    return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
                }), e(function (a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || f("type|href|height|width", function (a, b, c) {
                    if (!c)return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), w.attributes && e(function (a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || f("value", function (a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase())return a.defaultValue
                }), e(function (a) {
                    return null == a.getAttribute("disabled")
                }) || f(ba, function (a, b, c) {
                    var d;
                    if (!c)return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }), b
            }(a);
            ma.find = ra, ma.expr = ra.selectors, ma.expr[":"] = ma.expr.pseudos, ma.uniqueSort = ma.unique = ra.uniqueSort, ma.text = ra.getText, ma.isXMLDoc = ra.isXML, ma.contains = ra.contains, ma.escapeSelector = ra.escape;
            var sa = function (a, b, c) {
                for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
                    if (e && ma(a).is(c))break;
                    d.push(a)
                }
                return d
            }, ta = function (a, b) {
                for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
                return c
            }, ua = ma.expr.match.needsContext, va = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, wa = /^.[^:#\[\.,]*$/;
            ma.filter = function (a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ma.find.matchesSelector(d, a) ? [d] : [] : ma.find.matches(a, ma.grep(b, function (a) {
                    return 1 === a.nodeType
                }))
            }, ma.fn.extend({
                find: function (a) {
                    var b, c, d = this.length, e = this;
                    if ("string" != typeof a)return this.pushStack(ma(a).filter(function () {
                        for (b = 0; b < d; b++)if (ma.contains(e[b], this))return !0
                    }));
                    for (c = this.pushStack([]), b = 0; b < d; b++)ma.find(a, e[b], c);
                    return d > 1 ? ma.uniqueSort(c) : c
                }, filter: function (a) {
                    return this.pushStack(e(this, a || [], !1))
                }, not: function (a) {
                    return this.pushStack(e(this, a || [], !0))
                }, is: function (a) {
                    return !!e(this, "string" == typeof a && ua.test(a) ? ma(a) : a || [], !1).length
                }
            });
            var xa, ya = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, za = ma.fn.init = function (a, b, c) {
                var d, e;
                if (!a)return this;
                if (c = c || xa, "string" == typeof a) {
                    if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ya.exec(a), !d || !d[1] && b)return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (d[1]) {
                        if (b = b instanceof ma ? b[0] : b, ma.merge(this, ma.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : _, !0)), va.test(d[1]) && ma.isPlainObject(b))for (d in b)ma.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                        return this
                    }
                    return e = _.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
                }
                return a.nodeType ? (this[0] = a, this.length = 1, this) : ma.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(ma) : ma.makeArray(a, this)
            };
            za.prototype = ma.fn, xa = ma(_);
            var Aa = /^(?:parents|prev(?:Until|All))/, Ba = {children: !0, contents: !0, next: !0, prev: !0};
            ma.fn.extend({
                has: function (a) {
                    var b = ma(a, this), c = b.length;
                    return this.filter(function () {
                        for (var a = 0; a < c; a++)if (ma.contains(this, b[a]))return !0
                    })
                }, closest: function (a, b) {
                    var c, d = 0, e = this.length, f = [], g = "string" != typeof a && ma(a);
                    if (!ua.test(a))for (; d < e; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ma.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                    return this.pushStack(f.length > 1 ? ma.uniqueSort(f) : f)
                }, index: function (a) {
                    return a ? "string" == typeof a ? ea.call(ma(a), this[0]) : ea.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (a, b) {
                    return this.pushStack(ma.uniqueSort(ma.merge(this.get(), ma(a, b))))
                }, addBack: function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            }), ma.each({
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                }, parents: function (a) {
                    return sa(a, "parentNode")
                }, parentsUntil: function (a, b, c) {
                    return sa(a, "parentNode", c)
                }, next: function (a) {
                    return f(a, "nextSibling")
                }, prev: function (a) {
                    return f(a, "previousSibling")
                }, nextAll: function (a) {
                    return sa(a, "nextSibling")
                }, prevAll: function (a) {
                    return sa(a, "previousSibling")
                }, nextUntil: function (a, b, c) {
                    return sa(a, "nextSibling", c)
                }, prevUntil: function (a, b, c) {
                    return sa(a, "previousSibling", c)
                }, siblings: function (a) {
                    return ta((a.parentNode || {}).firstChild, a)
                }, children: function (a) {
                    return ta(a.firstChild)
                }, contents: function (a) {
                    return a.contentDocument || ma.merge([], a.childNodes)
                }
            }, function (a, b) {
                ma.fn[a] = function (c, d) {
                    var e = ma.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ma.filter(d, e)), this.length > 1 && (Ba[a] || ma.uniqueSort(e), Aa.test(a) && e.reverse()), this.pushStack(e)
                }
            });
            var Ca = /\S+/g;
            ma.Callbacks = function (a) {
                a = "string" == typeof a ? g(a) : ma.extend({}, a);
                var b, c, d, e, f = [], h = [], i = -1, j = function () {
                    for (e = a.once, d = b = !0; h.length; i = -1)for (c = h.shift(); ++i < f.length;)f[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = f.length, c = !1);
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                }, k = {
                    add: function () {
                        return f && (c && !b && (i = f.length - 1, h.push(c)), function b(c) {
                            ma.each(c, function (c, d) {
                                ma.isFunction(d) ? a.unique && k.has(d) || f.push(d) : d && d.length && "string" !== ma.type(d) && b(d)
                            })
                        }(arguments), c && !b && j()), this
                    }, remove: function () {
                        return ma.each(arguments, function (a, b) {
                            for (var c; (c = ma.inArray(b, f, c)) > -1;)f.splice(c, 1), c <= i && i--
                        }), this
                    }, has: function (a) {
                        return a ? ma.inArray(a, f) > -1 : f.length > 0
                    }, empty: function () {
                        return f && (f = []), this
                    }, disable: function () {
                        return e = h = [], f = c = "", this
                    }, disabled: function () {
                        return !f
                    }, lock: function () {
                        return e = h = [], c || b || (f = c = ""), this
                    }, locked: function () {
                        return !!e
                    }, fireWith: function (a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                    }, fire: function () {
                        return k.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!d
                    }
                };
                return k
            }, ma.extend({
                Deferred: function (b) {
                    var c = [["notify", "progress", ma.Callbacks("memory"), ma.Callbacks("memory"), 2], ["resolve", "done", ma.Callbacks("once memory"), ma.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ma.Callbacks("once memory"), ma.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = {
                        state: function () {
                            return d
                        }, always: function () {
                            return f.done(arguments).fail(arguments), this
                        }, catch: function (a) {
                            return e.then(null, a)
                        }, pipe: function () {
                            var a = arguments;
                            return ma.Deferred(function (b) {
                                ma.each(c, function (c, d) {
                                    var e = ma.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function () {
                                        var a = e && e.apply(this, arguments);
                                        a && ma.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        }, then: function (b, d, e) {
                            function f(b, c, d, e) {
                                return function () {
                                    var j = this, k = arguments, l = function () {
                                        var a, l;
                                        if (!(b < g)) {
                                            if (a = d.apply(j, k), a === c.promise())throw new TypeError("Thenable self-resolution");
                                            l = a && ("object" == typeof a || "function" == typeof a) && a.then, ma.isFunction(l) ? e ? l.call(a, f(g, c, h, e), f(g, c, i, e)) : (g++, l.call(a, f(g, c, h, e), f(g, c, i, e), f(g, c, h, c.notifyWith))) : (d !== h && (j = void 0, k = [a]), (e || c.resolveWith)(j, k))
                                        }
                                    }, m = e ? l : function () {
                                        try {
                                            l()
                                        } catch (a) {
                                            ma.Deferred.exceptionHook && ma.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== i && (j = void 0, k = [a]), c.rejectWith(j, k))
                                        }
                                    };
                                    b ? m() : (ma.Deferred.getStackHook && (m.stackTrace = ma.Deferred.getStackHook()), a.setTimeout(m))
                                }
                            }

                            var g = 0;
                            return ma.Deferred(function (a) {
                                c[0][3].add(f(0, a, ma.isFunction(e) ? e : h, a.notifyWith)), c[1][3].add(f(0, a, ma.isFunction(b) ? b : h)), c[2][3].add(f(0, a, ma.isFunction(d) ? d : i))
                            }).promise()
                        }, promise: function (a) {
                            return null != a ? ma.extend(a, e) : e
                        }
                    }, f = {};
                    return ma.each(c, function (a, b) {
                        var g = b[2], h = b[5];
                        e[b[1]] = g.add, h && g.add(function () {
                            d = h
                        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                            return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                        }, f[b[0] + "With"] = g.fireWith
                    }), e.promise(f), b && b.call(f, f), f
                }, when: function (a) {
                    var b = arguments.length, c = b, d = Array(c), e = ba.call(arguments), f = ma.Deferred(), g = function (a) {
                        return function (c) {
                            d[a] = this, e[a] = arguments.length > 1 ? ba.call(arguments) : c, --b || f.resolveWith(d, e)
                        }
                    };
                    if (b <= 1 && (j(a, f.done(g(c)).resolve, f.reject), "pending" === f.state() || ma.isFunction(e[c] && e[c].then)))return f.then();
                    for (; c--;)j(e[c], g(c), f.reject);
                    return f.promise()
                }
            });
            var Da = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            ma.Deferred.exceptionHook = function (b, c) {
                a.console && a.console.warn && b && Da.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
            };
            var Ea = ma.Deferred();
            ma.fn.ready = function (a) {
                return Ea.then(a), this
            }, ma.extend({
                isReady: !1, readyWait: 1, holdReady: function (a) {
                    a ? ma.readyWait++ : ma.ready(!0)
                }, ready: function (a) {
                    (a === !0 ? --ma.readyWait : ma.isReady) || (ma.isReady = !0, a !== !0 && --ma.readyWait > 0 || Ea.resolveWith(_, [ma]))
                }
            }), ma.ready.then = Ea.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? a.setTimeout(ma.ready) : (_.addEventListener("DOMContentLoaded", k), a.addEventListener("load", k));
            var Fa = function (a, b, c, d, e, f, g) {
                var h = 0, i = a.length, j = null == c;
                if ("object" === ma.type(c)) {
                    e = !0;
                    for (h in c)Fa(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, ma.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                        return j.call(ma(a), c)
                    })), b))for (; h < i; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            }, Ga = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };
            l.uid = 1, l.prototype = {
                cache: function (a) {
                    var b = a[this.expando];
                    return b || (b = {}, Ga(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                        value: b,
                        configurable: !0
                    }))), b
                }, set: function (a, b, c) {
                    var d, e = this.cache(a);
                    if ("string" == typeof b)e[ma.camelCase(b)] = c; else for (d in b)e[ma.camelCase(d)] = b[d];
                    return e
                }, get: function (a, b) {
                    return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][ma.camelCase(b)]
                }, access: function (a, b, c) {
                    return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
                }, remove: function (a, b) {
                    var c, d = a[this.expando];
                    if (void 0 !== d) {
                        if (void 0 !== b) {
                            ma.isArray(b) ? b = b.map(ma.camelCase) : (b = ma.camelCase(b), b = b in d ? [b] : b.match(Ca) || []), c = b.length;
                            for (; c--;)delete d[b[c]]
                        }
                        (void 0 === b || ma.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                    }
                }, hasData: function (a) {
                    var b = a[this.expando];
                    return void 0 !== b && !ma.isEmptyObject(b)
                }
            };
            var Ha = new l, Ia = new l, Ja = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ka = /[A-Z]/g;
            ma.extend({
                hasData: function (a) {
                    return Ia.hasData(a) || Ha.hasData(a)
                }, data: function (a, b, c) {
                    return Ia.access(a, b, c)
                }, removeData: function (a, b) {
                    Ia.remove(a, b)
                }, _data: function (a, b, c) {
                    return Ha.access(a, b, c)
                }, _removeData: function (a, b) {
                    Ha.remove(a, b)
                }
            }), ma.fn.extend({
                data: function (a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = Ia.get(f), 1 === f.nodeType && !Ha.get(f, "hasDataAttrs"))) {
                            for (c = g.length; c--;)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ma.camelCase(d.slice(5)), m(f, d, e[d])));
                            Ha.set(f, "hasDataAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function () {
                        Ia.set(this, a)
                    }) : Fa(this, function (b) {
                        var c;
                        if (f && void 0 === b) {
                            if (c = Ia.get(f, a), void 0 !== c)return c;
                            if (c = m(f, a), void 0 !== c)return c
                        } else this.each(function () {
                            Ia.set(this, a, b)
                        })
                    }, null, b, arguments.length > 1, null, !0)
                }, removeData: function (a) {
                    return this.each(function () {
                        Ia.remove(this, a)
                    })
                }
            }), ma.extend({
                queue: function (a, b, c) {
                    var d;
                    if (a)return b = (b || "fx") + "queue", d = Ha.get(a, b), c && (!d || ma.isArray(c) ? d = Ha.access(a, b, ma.makeArray(c)) : d.push(c)), d || []
                }, dequeue: function (a, b) {
                    b = b || "fx";
                    var c = ma.queue(a, b), d = c.length, e = c.shift(), f = ma._queueHooks(a, b), g = function () {
                        ma.dequeue(a, b)
                    };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                }, _queueHooks: function (a, b) {
                    var c = b + "queueHooks";
                    return Ha.get(a, c) || Ha.access(a, c, {
                            empty: ma.Callbacks("once memory").add(function () {
                                Ha.remove(a, [b + "queue", c])
                            })
                        })
                }
            }), ma.fn.extend({
                queue: function (a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ma.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = ma.queue(this, a, b);
                        ma._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ma.dequeue(this, a)
                    })
                }, dequeue: function (a) {
                    return this.each(function () {
                        ma.dequeue(this, a)
                    })
                }, clearQueue: function (a) {
                    return this.queue(a || "fx", [])
                }, promise: function (a, b) {
                    var c, d = 1, e = ma.Deferred(), f = this, g = this.length, h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                    for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = Ha.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b)
                }
            });
            var La = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ma = new RegExp("^(?:([+-])=|)(" + La + ")([a-z%]*)$", "i"), Na = ["Top", "Right", "Bottom", "Left"], Oa = function (a, b) {
                return a = b || a, "none" === a.style.display || "" === a.style.display && ma.contains(a.ownerDocument, a) && "none" === ma.css(a, "display")
            }, Pa = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b)g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b)a.style[f] = g[f];
                return e
            }, Qa = {};
            ma.fn.extend({
                show: function () {
                    return p(this, !0)
                }, hide: function () {
                    return p(this)
                }, toggle: function (a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                        Oa(this) ? ma(this).show() : ma(this).hide()
                    })
                }
            });
            var Ra = /^(?:checkbox|radio)$/i, Sa = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ta = /^$|\/(?:java|ecma)script/i, Ua = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Ua.optgroup = Ua.option, Ua.tbody = Ua.tfoot = Ua.colgroup = Ua.caption = Ua.thead, Ua.th = Ua.td;
            var Va = /<|&#?\w+;/;
            !function () {
                var a = _.createDocumentFragment(), b = a.appendChild(_.createElement("div")), c = _.createElement("input");
                c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ka.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ka.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
            }();
            var Wa = _.documentElement, Xa = /^key/, Ya = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Za = /^([^.]*)(?:\.(.+)|)/;
            ma.event = {
                global: {}, add: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q = Ha.get(a);
                    if (q)for (c.handler && (f = c, c = f.handler, e = f.selector), e && ma.find.matchesSelector(Wa, e), c.guid || (c.guid = ma.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                        return "undefined" != typeof ma && ma.event.triggered !== b.type ? ma.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(Ca) || [""], j = b.length; j--;)h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = ma.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = ma.event.special[n] || {}, k = ma.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && ma.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), ma.event.global[n] = !0)
                }, remove: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q = Ha.hasData(a) && Ha.get(a);
                    if (q && (i = q.events)) {
                        for (b = (b || "").match(Ca) || [""], j = b.length; j--;)if (h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ma.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ma.removeEvent(a, n, q.handle), delete i[n])
                        } else for (n in i)ma.event.remove(a, n + b[j], c, d, !0);
                        ma.isEmptyObject(i) && Ha.remove(a, "handle events")
                    }
                }, dispatch: function (a) {
                    var b, c, d, e, f, g, h = ma.event.fix(a), i = new Array(arguments.length), j = (Ha.get(this, "events") || {})[h.type] || [], k = ma.event.special[h.type] || {};
                    for (i[0] = h, b = 1; b < arguments.length; b++)i[b] = arguments[b];
                    if (h.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, h) !== !1) {
                        for (g = ma.event.handlers.call(this, h, j), b = 0; (e = g[b++]) && !h.isPropagationStopped();)for (h.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();)h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, d = ((ma.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && (h.result = d) === !1 && (h.preventDefault(), h.stopPropagation()));
                        return k.postDispatch && k.postDispatch.call(this, h), h.result
                    }
                }, handlers: function (a, b) {
                    var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                    if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))for (; i !== this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; c < h; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? ma(e, this).index(i) > -1 : ma.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({elem: i, handlers: d})
                    }
                    return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
                }, addProp: function (a, b) {
                    Object.defineProperty(ma.Event.prototype, a, {
                        enumerable: !0,
                        configurable: !0,
                        get: ma.isFunction(b) ? function () {
                            if (this.originalEvent)return b(this.originalEvent)
                        } : function () {
                            if (this.originalEvent)return this.originalEvent[a]
                        },
                        set: function (b) {
                            Object.defineProperty(this, a, {enumerable: !0, configurable: !0, writable: !0, value: b})
                        }
                    })
                }, fix: function (a) {
                    return a[ma.expando] ? a : new ma.Event(a)
                }, special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== v() && this.focus)return this.focus(), !1
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === v() && this.blur)return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && ma.nodeName(this, "input"))return this.click(), !1
                        }, _default: function (a) {
                            return ma.nodeName(a.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                }
            }, ma.removeEvent = function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c)
            }, ma.Event = function (a, b) {
                return this instanceof ma.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? t : u, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && ma.extend(this, b), this.timeStamp = a && a.timeStamp || ma.now(), void(this[ma.expando] = !0)) : new ma.Event(a, b)
            }, ma.Event.prototype = {
                constructor: ma.Event,
                isDefaultPrevented: u,
                isPropagationStopped: u,
                isImmediatePropagationStopped: u,
                isSimulated: !1,
                preventDefault: function () {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = t, a && !this.isSimulated && a.preventDefault()
                },
                stopPropagation: function () {
                    var a = this.originalEvent;
                    this.isPropagationStopped = t, a && !this.isSimulated && a.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = t, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ma.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (a) {
                    var b = a.button;
                    return null == a.which && Xa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && Ya.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
                }
            }, ma.event.addProp), ma.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (a, b) {
                ma.event.special[a] = {
                    delegateType: b, bindType: b, handle: function (a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return e && (e === d || ma.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                    }
                }
            }), ma.fn.extend({
                on: function (a, b, c, d) {
                    return w(this, a, b, c, d)
                }, one: function (a, b, c, d) {
                    return w(this, a, b, c, d, 1)
                }, off: function (a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj)return d = a.handleObj, ma(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                    if ("object" == typeof a) {
                        for (e in a)this.off(e, b, a[e]);
                        return this
                    }
                    return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = u), this.each(function () {
                        ma.event.remove(this, a, c, b)
                    })
                }
            });
            var $a = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, _a = /<script|<style|<link/i, ab = /checked\s*(?:[^=]|=\s*.checked.)/i, bb = /^true\/(.*)/, cb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ma.extend({
                htmlPrefilter: function (a) {
                    return a.replace($a, "<$1></$2>")
                }, clone: function (a, b, c) {
                    var d, e, f, g, h = a.cloneNode(!0), i = ma.contains(a.ownerDocument, a);
                    if (!(ka.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ma.isXMLDoc(a)))for (g = q(h), f = q(a), d = 0, e = f.length; d < e; d++)B(f[d], g[d]);
                    if (b)if (c)for (f = f || q(a), g = g || q(h), d = 0, e = f.length; d < e; d++)A(f[d], g[d]); else A(a, h);
                    return g = q(h, "script"), g.length > 0 && r(g, !i && q(a, "script")), h
                }, cleanData: function (a) {
                    for (var b, c, d, e = ma.event.special, f = 0; void 0 !== (c = a[f]); f++)if (Ga(c)) {
                        if (b = c[Ha.expando]) {
                            if (b.events)for (d in b.events)e[d] ? ma.event.remove(c, d) : ma.removeEvent(c, d, b.handle);
                            c[Ha.expando] = void 0
                        }
                        c[Ia.expando] && (c[Ia.expando] = void 0)
                    }
                }
            }), ma.fn.extend({
                detach: function (a) {
                    return D(this, a, !0)
                }, remove: function (a) {
                    return D(this, a)
                }, text: function (a) {
                    return Fa(this, function (a) {
                        return void 0 === a ? ma.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                        })
                    }, null, a, arguments.length)
                }, append: function () {
                    return C(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = x(this, a);
                            b.appendChild(a)
                        }
                    })
                }, prepend: function () {
                    return C(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = x(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                }, before: function () {
                    return C(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                }, after: function () {
                    return C(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                }, empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (ma.cleanData(q(a, !1)), a.textContent = "");
                    return this
                }, clone: function (a, b) {
                    return a = null != a && a, b = null == b ? a : b, this.map(function () {
                        return ma.clone(this, a, b)
                    })
                }, html: function (a) {
                    return Fa(this, function (a) {
                        var b = this[0] || {}, c = 0, d = this.length;
                        if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                        if ("string" == typeof a && !_a.test(a) && !Ua[(Sa.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = ma.htmlPrefilter(a);
                            try {
                                for (; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (ma.cleanData(q(b, !1)), b.innerHTML = a);
                                b = 0
                            } catch (a) {
                            }
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                }, replaceWith: function () {
                    var a = [];
                    return C(this, arguments, function (b) {
                        var c = this.parentNode;
                        ma.inArray(this, a) < 0 && (ma.cleanData(q(this)), c && c.replaceChild(b, this))
                    }, a)
                }
            }), ma.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (a, b) {
                ma.fn[a] = function (a) {
                    for (var c, d = [], e = ma(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), ma(e[g])[b](c), da.apply(d, c.get());
                    return this.pushStack(d)
                }
            });
            var db = /^margin/, eb = new RegExp("^(" + La + ")(?!px)[a-z%]+$", "i"), fb = function (b) {
                var c = b.ownerDocument.defaultView;
                return c && c.opener || (c = a), c.getComputedStyle(b)
            };
            !function () {
                function b() {
                    if (h) {
                        h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Wa.appendChild(g);
                        var b = a.getComputedStyle(h);
                        c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Wa.removeChild(g), h = null
                    }
                }

                var c, d, e, f, g = _.createElement("div"), h = _.createElement("div");
                h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ka.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), ma.extend(ka, {
                    pixelPosition: function () {
                        return b(), c
                    }, boxSizingReliable: function () {
                        return b(), d
                    }, pixelMarginRight: function () {
                        return b(), e
                    }, reliableMarginLeft: function () {
                        return b(), f
                    }
                }))
            }();
            var gb = /^(none|table(?!-c[ea]).+)/, hb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, ib = {
                letterSpacing: "0",
                fontWeight: "400"
            }, jb = ["Webkit", "Moz", "ms"], kb = _.createElement("div").style;
            ma.extend({
                cssHooks: {
                    opacity: {
                        get: function (a, b) {
                            if (b) {
                                var c = E(a, "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {float: "cssFloat"},
                style: function (a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f, g, h = ma.camelCase(b), i = a.style;
                        return b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ma.exec(c)) && e[1] && (c = n(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (ma.cssNumber[h] ? "" : "px")), ka.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                    }
                },
                css: function (a, b, c, d) {
                    var e, f, g, h = ma.camelCase(b);
                    return b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = E(a, b, d)), "normal" === e && b in ib && (e = ib[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
                }
            }), ma.each(["height", "width"], function (a, b) {
                ma.cssHooks[b] = {
                    get: function (a, c, d) {
                        if (c)return !gb.test(ma.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? J(a, b, d) : Pa(a, hb, function () {
                            return J(a, b, d)
                        })
                    }, set: function (a, c, d) {
                        var e, f = d && fb(a), g = d && I(a, b, d, "border-box" === ma.css(a, "boxSizing", !1, f), f);
                        return g && (e = Ma.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = ma.css(a, b)), H(a, c, g)
                    }
                }
            }), ma.cssHooks.marginLeft = F(ka.reliableMarginLeft, function (a, b) {
                if (b)return (parseFloat(E(a, "marginLeft")) || a.getBoundingClientRect().left - Pa(a, {marginLeft: 0}, function () {
                        return a.getBoundingClientRect().left
                    })) + "px"
            }), ma.each({margin: "", padding: "", border: "Width"}, function (a, b) {
                ma.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)e[a + Na[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                }, db.test(a) || (ma.cssHooks[a + b].set = H)
            }), ma.fn.extend({
                css: function (a, b) {
                    return Fa(this, function (a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (ma.isArray(b)) {
                            for (d = fb(a), e = b.length; g < e; g++)f[b[g]] = ma.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? ma.style(a, b, c) : ma.css(a, b)
                    }, a, b, arguments.length > 1)
                }
            }), ma.Tween = K, K.prototype = {
                constructor: K, init: function (a, b, c, d, e, f) {
                    this.elem = a, this.prop = c, this.easing = e || ma.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ma.cssNumber[c] ? "" : "px")
                }, cur: function () {
                    var a = K.propHooks[this.prop];
                    return a && a.get ? a.get(this) : K.propHooks._default.get(this)
                }, run: function (a) {
                    var b, c = K.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = ma.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
                }
            }, K.prototype.init.prototype = K.prototype, K.propHooks = {
                _default: {
                    get: function (a) {
                        var b;
                        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = ma.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                    }, set: function (a) {
                        ma.fx.step[a.prop] ? ma.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[ma.cssProps[a.prop]] && !ma.cssHooks[a.prop] ? a.elem[a.prop] = a.now : ma.style(a.elem, a.prop, a.now + a.unit)
                    }
                }
            }, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            }, ma.easing = {
                linear: function (a) {
                    return a
                }, swing: function (a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                }, _default: "swing"
            }, ma.fx = K.prototype.init, ma.fx.step = {};
            var lb, mb, nb = /^(?:toggle|show|hide)$/, ob = /queueHooks$/;
            ma.Animation = ma.extend(R, {
                tweeners: {
                    "*": [function (a, b) {
                        var c = this.createTween(a, b);
                        return n(c.elem, a, Ma.exec(b), c), c
                    }]
                }, tweener: function (a, b) {
                    ma.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ca);
                    for (var c, d = 0, e = a.length; d < e; d++)c = a[d], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b)
                }, prefilters: [P], prefilter: function (a, b) {
                    b ? R.prefilters.unshift(a) : R.prefilters.push(a)
                }
            }), ma.speed = function (a, b, c) {
                var d = a && "object" == typeof a ? ma.extend({}, a) : {
                    complete: c || !c && b || ma.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !ma.isFunction(b) && b
                };
                return ma.fx.off || _.hidden ? d.duration = 0 : d.duration = "number" == typeof d.duration ? d.duration : d.duration in ma.fx.speeds ? ma.fx.speeds[d.duration] : ma.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                    ma.isFunction(d.old) && d.old.call(this), d.queue && ma.dequeue(this, d.queue)
                }, d
            }, ma.fn.extend({
                fadeTo: function (a, b, c, d) {
                    return this.filter(Oa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
                }, animate: function (a, b, c, d) {
                    var e = ma.isEmptyObject(a), f = ma.speed(b, c, d), g = function () {
                        var b = R(this, ma.extend({}, a), f);
                        (e || Ha.get(this, "finish")) && b.stop(!0)
                    };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                }, stop: function (a, b, c) {
                    var d = function (a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                        var b = !0, e = null != a && a + "queueHooks", f = ma.timers, g = Ha.get(this);
                        if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && ob.test(e) && d(g[e]);
                        for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                            b = !1, f.splice(e, 1));
                        !b && c || ma.dequeue(this, a)
                    })
                }, finish: function (a) {
                    return a !== !1 && (a = a || "fx"), this.each(function () {
                        var b, c = Ha.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ma.timers, g = d ? d.length : 0;
                        for (c.finish = !0, ma.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), ma.each(["toggle", "show", "hide"], function (a, b) {
                var c = ma.fn[b];
                ma.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
                }
            }), ma.each({
                slideDown: N("show"),
                slideUp: N("hide"),
                slideToggle: N("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (a, b) {
                ma.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), ma.timers = [], ma.fx.tick = function () {
                var a, b = 0, c = ma.timers;
                for (lb = ma.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || ma.fx.stop(), lb = void 0
            }, ma.fx.timer = function (a) {
                ma.timers.push(a), a() ? ma.fx.start() : ma.timers.pop()
            }, ma.fx.interval = 13, ma.fx.start = function () {
                mb || (mb = a.requestAnimationFrame ? a.requestAnimationFrame(L) : a.setInterval(ma.fx.tick, ma.fx.interval))
            }, ma.fx.stop = function () {
                a.cancelAnimationFrame ? a.cancelAnimationFrame(mb) : a.clearInterval(mb), mb = null
            }, ma.fx.speeds = {slow: 600, fast: 200, _default: 400}, ma.fn.delay = function (b, c) {
                return b = ma.fx ? ma.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e)
                    }
                })
            }, function () {
                var a = _.createElement("input"), b = _.createElement("select"), c = b.appendChild(_.createElement("option"));
                a.type = "checkbox", ka.checkOn = "" !== a.value, ka.optSelected = c.selected, a = _.createElement("input"), a.value = "t", a.type = "radio", ka.radioValue = "t" === a.value
            }();
            var pb, qb = ma.expr.attrHandle;
            ma.fn.extend({
                attr: function (a, b) {
                    return Fa(this, ma.attr, a, b, arguments.length > 1)
                }, removeAttr: function (a) {
                    return this.each(function () {
                        ma.removeAttr(this, a)
                    })
                }
            }), ma.extend({
                attr: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (3 !== f && 8 !== f && 2 !== f)return "undefined" == typeof a.getAttribute ? ma.prop(a, b, c) : (1 === f && ma.isXMLDoc(a) || (e = ma.attrHooks[b.toLowerCase()] || (ma.expr.match.bool.test(b) ? pb : void 0)), void 0 !== c ? null === c ? void ma.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = ma.find.attr(a, b), null == d ? void 0 : d))
                }, attrHooks: {
                    type: {
                        set: function (a, b) {
                            if (!ka.radioValue && "radio" === b && ma.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b
                            }
                        }
                    }
                }, removeAttr: function (a, b) {
                    var c, d = 0, e = b && b.match(Ca);
                    if (e && 1 === a.nodeType)for (; c = e[d++];)a.removeAttribute(c)
                }
            }), pb = {
                set: function (a, b, c) {
                    return b === !1 ? ma.removeAttr(a, c) : a.setAttribute(c, c), c
                }
            }, ma.each(ma.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var c = qb[b] || ma.find.attr;
                qb[b] = function (a, b, d) {
                    var e, f, g = b.toLowerCase();
                    return d || (f = qb[g], qb[g] = e, e = null != c(a, b, d) ? g : null, qb[g] = f), e
                }
            });
            var rb = /^(?:input|select|textarea|button)$/i, sb = /^(?:a|area)$/i;
            ma.fn.extend({
                prop: function (a, b) {
                    return Fa(this, ma.prop, a, b, arguments.length > 1)
                }, removeProp: function (a) {
                    return this.each(function () {
                        delete this[ma.propFix[a] || a]
                    })
                }
            }), ma.extend({
                prop: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (3 !== f && 8 !== f && 2 !== f)return 1 === f && ma.isXMLDoc(a) || (b = ma.propFix[b] || b, e = ma.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                }, propHooks: {
                    tabIndex: {
                        get: function (a) {
                            var b = ma.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : rb.test(a.nodeName) || sb.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), ka.optSelected || (ma.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null
                }, set: function (a) {
                    var b = a.parentNode;
                    b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
                }
            }), ma.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                ma.propFix[this.toLowerCase()] = this
            });
            var tb = /[\t\r\n\f]/g;
            ma.fn.extend({
                addClass: function (a) {
                    var b, c, d, e, f, g, h, i = 0;
                    if (ma.isFunction(a))return this.each(function (b) {
                        ma(this).addClass(a.call(this, b, S(this)))
                    });
                    if ("string" == typeof a && a)for (b = a.match(Ca) || []; c = this[i++];)if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(tb, " ")) {
                        for (g = 0; f = b[g++];)d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = ma.trim(d), e !== h && c.setAttribute("class", h)
                    }
                    return this
                }, removeClass: function (a) {
                    var b, c, d, e, f, g, h, i = 0;
                    if (ma.isFunction(a))return this.each(function (b) {
                        ma(this).removeClass(a.call(this, b, S(this)))
                    });
                    if (!arguments.length)return this.attr("class", "");
                    if ("string" == typeof a && a)for (b = a.match(Ca) || []; c = this[i++];)if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(tb, " ")) {
                        for (g = 0; f = b[g++];)for (; d.indexOf(" " + f + " ") > -1;)d = d.replace(" " + f + " ", " ");
                        h = ma.trim(d), e !== h && c.setAttribute("class", h)
                    }
                    return this
                }, toggleClass: function (a, b) {
                    var c = typeof a;
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ma.isFunction(a) ? this.each(function (c) {
                        ma(this).toggleClass(a.call(this, c, S(this), b), b)
                    }) : this.each(function () {
                        var b, d, e, f;
                        if ("string" === c)for (d = 0, e = ma(this), f = a.match(Ca) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || (b = S(this), b && Ha.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Ha.get(this, "__className__") || ""))
                    })
                }, hasClass: function (a) {
                    var b, c, d = 0;
                    for (b = " " + a + " "; c = this[d++];)if (1 === c.nodeType && (" " + S(c) + " ").replace(tb, " ").indexOf(b) > -1)return !0;
                    return !1
                }
            });
            var ub = /\r/g, vb = /[\x20\t\r\n\f]+/g;
            ma.fn.extend({
                val: function (a) {
                    var b, c, d, e = this[0];
                    {
                        if (arguments.length)return d = ma.isFunction(a), this.each(function (c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, ma(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ma.isArray(e) && (e = ma.map(e, function (a) {
                                return null == a ? "" : a + ""
                            })), b = ma.valHooks[this.type] || ma.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                        if (e)return b = ma.valHooks[e.type] || ma.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)
                    }
                }
            }), ma.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            var b = ma.find.attr(a, "value");
                            return null != b ? b : ma.trim(ma.text(a)).replace(vb, " ")
                        }
                    }, select: {
                        get: function (a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !ma.nodeName(c.parentNode, "optgroup"))) {
                                if (b = ma(c).val(), f)return b;
                                g.push(b)
                            }
                            return g
                        }, set: function (a, b) {
                            for (var c, d, e = a.options, f = ma.makeArray(b), g = e.length; g--;)d = e[g], (d.selected = ma.inArray(ma.valHooks.option.get(d), f) > -1) && (c = !0);
                            return c || (a.selectedIndex = -1), f
                        }
                    }
                }
            }), ma.each(["radio", "checkbox"], function () {
                ma.valHooks[this] = {
                    set: function (a, b) {
                        if (ma.isArray(b))return a.checked = ma.inArray(ma(a).val(), b) > -1
                    }
                }, ka.checkOn || (ma.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                })
            });
            var wb = /^(?:focusinfocus|focusoutblur)$/;
            ma.extend(ma.event, {
                trigger: function (b, c, d, e) {
                    var f, g, h, i, j, k, l, m = [d || _], n = ha.call(b, "type") ? b.type : b, o = ha.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (g = h = d = d || _, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(n + ma.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[ma.expando] ? b : new ma.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ma.makeArray(c, [b]), l = ma.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                        if (!e && !l.noBubble && !ma.isWindow(d)) {
                            for (i = l.delegateType || n, wb.test(i + n) || (g = g.parentNode); g; g = g.parentNode)m.push(g), h = g;
                            h === (d.ownerDocument || _) && m.push(h.defaultView || h.parentWindow || a)
                        }
                        for (f = 0; (g = m[f++]) && !b.isPropagationStopped();)b.type = f > 1 ? i : l.bindType || n, k = (Ha.get(g, "events") || {})[b.type] && Ha.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && Ga(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                        return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !Ga(d) || j && ma.isFunction(d[n]) && !ma.isWindow(d) && (h = d[j], h && (d[j] = null), ma.event.triggered = n, d[n](), ma.event.triggered = void 0, h && (d[j] = h)), b.result
                    }
                }, simulate: function (a, b, c) {
                    var d = ma.extend(new ma.Event, c, {type: a, isSimulated: !0});
                    ma.event.trigger(d, null, b)
                }
            }), ma.fn.extend({
                trigger: function (a, b) {
                    return this.each(function () {
                        ma.event.trigger(a, b, this)
                    })
                }, triggerHandler: function (a, b) {
                    var c = this[0];
                    if (c)return ma.event.trigger(a, b, c, !0)
                }
            }), ma.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
                ma.fn[b] = function (a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }
            }), ma.fn.extend({
                hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            }), ka.focusin = "onfocusin" in a, ka.focusin || ma.each({
                focus: "focusin",
                blur: "focusout"
            }, function (a, b) {
                var c = function (a) {
                    ma.event.simulate(b, a.target, ma.event.fix(a))
                };
                ma.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this, e = Ha.access(d, b);
                        e || d.addEventListener(a, c, !0), Ha.access(d, b, (e || 0) + 1)
                    }, teardown: function () {
                        var d = this.ownerDocument || this, e = Ha.access(d, b) - 1;
                        e ? Ha.access(d, b, e) : (d.removeEventListener(a, c, !0), Ha.remove(d, b))
                    }
                }
            });
            var xb = a.location, yb = ma.now(), zb = /\?/;
            ma.parseXML = function (b) {
                var c;
                if (!b || "string" != typeof b)return null;
                try {
                    c = (new a.DOMParser).parseFromString(b, "text/xml")
                } catch (a) {
                    c = void 0
                }
                return c && !c.getElementsByTagName("parsererror").length || ma.error("Invalid XML: " + b), c
            };
            var Ab = /\[\]$/, Bb = /\r?\n/g, Cb = /^(?:submit|button|image|reset|file)$/i, Db = /^(?:input|select|textarea|keygen)/i;
            ma.param = function (a, b) {
                var c, d = [], e = function (a, b) {
                    var c = ma.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
                };
                if (ma.isArray(a) || a.jquery && !ma.isPlainObject(a))ma.each(a, function () {
                    e(this.name, this.value)
                }); else for (c in a)T(c, a[c], b, e);
                return d.join("&")
            }, ma.fn.extend({
                serialize: function () {
                    return ma.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var a = ma.prop(this, "elements");
                        return a ? ma.makeArray(a) : this
                    }).filter(function () {
                        var a = this.type;
                        return this.name && !ma(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !Ra.test(a))
                    }).map(function (a, b) {
                        var c = ma(this).val();
                        return null == c ? null : ma.isArray(c) ? ma.map(c, function (a) {
                            return {name: b.name, value: a.replace(Bb, "\r\n")}
                        }) : {name: b.name, value: c.replace(Bb, "\r\n")}
                    }).get()
                }
            });
            var Eb = /%20/g, Fb = /#.*$/, Gb = /([?&])_=[^&]*/, Hb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ib = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Jb = /^(?:GET|HEAD)$/, Kb = /^\/\//, Lb = {}, Mb = {}, Nb = "*/".concat("*"), Ob = _.createElement("a");
            Ob.href = xb.href, ma.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: xb.href,
                    type: "GET",
                    isLocal: Ib.test(xb.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Nb,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ma.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (a, b) {
                    return b ? W(W(a, ma.ajaxSettings), b) : W(ma.ajaxSettings, a)
                },
                ajaxPrefilter: U(Lb),
                ajaxTransport: U(Mb),
                ajax: function (b, c) {
                    function d(b, c, d, h) {
                        var j, m, n, u, v, w = c;
                        k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = X(o, x, d)), u = Y(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (ma.lastModified[f] = v), v = x.getResponseHeader("etag"), v && (ma.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --ma.active || ma.event.trigger("ajaxStop")))
                    }

                    "object" == typeof b && (c = b, b = void 0), c = c || {};
                    var e, f, g, h, i, j, k, l, m, n, o = ma.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? ma(p) : ma.event, r = ma.Deferred(), s = ma.Callbacks("once memory"), t = o.statusCode || {}, u = {}, v = {}, w = "canceled", x = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (k) {
                                if (!h)for (h = {}; b = Hb.exec(g);)h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function () {
                            return k ? g : null
                        },
                        setRequestHeader: function (a, b) {
                            return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
                        },
                        overrideMimeType: function (a) {
                            return null == k && (o.mimeType = a), this
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)if (k)x.always(a[x.status]); else for (b in a)t[b] = [t[b], a[b]];
                            return this
                        },
                        abort: function (a) {
                            var b = a || w;
                            return e && e.abort(b), d(0, b), this
                        }
                    };
                    if (r.promise(x), o.url = ((b || o.url || xb.href) + "").replace(Kb, xb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ca) || [""], null == o.crossDomain) {
                        j = _.createElement("a");
                        try {
                            j.href = o.url, j.href = j.href, o.crossDomain = Ob.protocol + "//" + Ob.host != j.protocol + "//" + j.host
                        } catch (a) {
                            o.crossDomain = !0
                        }
                    }
                    if (o.data && o.processData && "string" != typeof o.data && (o.data = ma.param(o.data, o.traditional)), V(Lb, o, c, x), k)return x;
                    l = ma.event && o.global, l && 0 === ma.active++ && ma.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Jb.test(o.type), f = o.url.replace(Fb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Eb, "+")) : (n = o.url.slice(f.length), o.data && (f += (zb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Gb, ""), n = (zb.test(f) ? "&" : "?") + "_=" + yb++ + n), o.url = f + n), o.ifModified && (ma.lastModified[f] && x.setRequestHeader("If-Modified-Since", ma.lastModified[f]), ma.etag[f] && x.setRequestHeader("If-None-Match", ma.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Nb + "; q=0.01" : "") : o.accepts["*"]);
                    for (m in o.headers)x.setRequestHeader(m, o.headers[m]);
                    if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k))return x.abort();
                    if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = V(Mb, o, c, x)) {
                        if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k)return x;
                        o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                            x.abort("timeout")
                        }, o.timeout));
                        try {
                            k = !1, e.send(u, d)
                        } catch (a) {
                            if (k)throw a;
                            d(-1, a)
                        }
                    } else d(-1, "No Transport");
                    return x
                },
                getJSON: function (a, b, c) {
                    return ma.get(a, b, c, "json")
                },
                getScript: function (a, b) {
                    return ma.get(a, void 0, b, "script")
                }
            }), ma.each(["get", "post"], function (a, b) {
                ma[b] = function (a, c, d, e) {
                    return ma.isFunction(c) && (e = e || d, d = c, c = void 0), ma.ajax(ma.extend({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    }, ma.isPlainObject(a) && a))
                }
            }), ma._evalUrl = function (a) {
                return ma.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
            }, ma.fn.extend({
                wrapAll: function (a) {
                    var b;
                    return this[0] && (ma.isFunction(a) && (a = a.call(this[0])), b = ma(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        for (var a = this; a.firstElementChild;)a = a.firstElementChild;
                        return a
                    }).append(this)), this
                }, wrapInner: function (a) {
                    return ma.isFunction(a) ? this.each(function (b) {
                        ma(this).wrapInner(a.call(this, b))
                    }) : this.each(function () {
                        var b = ma(this), c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                }, wrap: function (a) {
                    var b = ma.isFunction(a);
                    return this.each(function (c) {
                        ma(this).wrapAll(b ? a.call(this, c) : a)
                    })
                }, unwrap: function (a) {
                    return this.parent(a).not("body").each(function () {
                        ma(this).replaceWith(this.childNodes)
                    }), this
                }
            }), ma.expr.pseudos.hidden = function (a) {
                return !ma.expr.pseudos.visible(a)
            }, ma.expr.pseudos.visible = function (a) {
                return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
            }, ma.ajaxSettings.xhr = function () {
                try {
                    return new a.XMLHttpRequest
                } catch (a) {
                }
            };
            var Pb = {0: 200, 1223: 204}, Qb = ma.ajaxSettings.xhr();
            ka.cors = !!Qb && "withCredentials" in Qb, ka.ajax = Qb = !!Qb, ma.ajaxTransport(function (b) {
                var c, d;
                if (ka.cors || Qb && !b.crossDomain)return {
                    send: function (e, f) {
                        var g, h = b.xhr();
                        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)for (g in b.xhrFields)h[g] = b.xhrFields[g];
                        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        for (g in e)h.setRequestHeader(g, e[g]);
                        c = function (a) {
                            return function () {
                                c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Pb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                            }
                        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                            4 === h.readyState && a.setTimeout(function () {
                                c && d()
                            })
                        }, c = c("abort");
                        try {
                            //geolocation API for billing
                            //h.send(b.hasContent && b.data || null)
                        } catch (a) {
                            if (c)throw a
                        }
                    }, abort: function () {
                        c && c()
                    }
                }
            }), ma.ajaxPrefilter(function (a) {
                a.crossDomain && (a.contents.script = !1)
            }), ma.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (a) {
                        return ma.globalEval(a), a
                    }
                }
            }), ma.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
            }), ma.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function (d, e) {
                            b = ma("<script>").prop({
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", c = function (a) {
                                b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                            }), _.head.appendChild(b[0])
                        }, abort: function () {
                            c && c()
                        }
                    }
                }
            });
            var Rb = [], Sb = /(=)\?(?=&|$)|\?\?/;
            ma.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var a = Rb.pop() || ma.expando + "_" + yb++;
                    return this[a] = !0, a
                }
            }), ma.ajaxPrefilter("json jsonp", function (b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (Sb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Sb.test(b.data) && "data");
                if (h || "jsonp" === b.dataTypes[0])return e = b.jsonpCallback = ma.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Sb, "$1" + e) : b.jsonp !== !1 && (b.url += (zb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                    return g || ma.error(e + " was not called"), g[0]
                }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                    g = arguments
                }, d.always(function () {
                    void 0 === f ? ma(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Rb.push(e)), g && ma.isFunction(f) && f(g[0]), g = f = void 0
                }), "script"
            }), ka.createHTMLDocument = function () {
                var a = _.implementation.createHTMLDocument("").body;
                return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
            }(), ma.parseHTML = function (a, b, c) {
                if ("string" != typeof a)return [];
                "boolean" == typeof b && (c = b, b = !1);
                var d, e, f;
                return b || (ka.createHTMLDocument ? (b = _.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = _.location.href, b.head.appendChild(d)) : b = _), e = va.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = s([a], b, f), f && f.length && ma(f).remove(), ma.merge([], e.childNodes))
            }, ma.fn.load = function (a, b, c) {
                var d, e, f, g = this, h = a.indexOf(" ");
                return h > -1 && (d = ma.trim(a.slice(h)), a = a.slice(0, h)), ma.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && ma.ajax({
                    url: a,
                    type: e || "GET",
                    dataType: "html",
                    data: b
                }).done(function (a) {
                    f = arguments, g.html(d ? ma("<div>").append(ma.parseHTML(a)).find(d) : a)
                }).always(c && function (a, b) {
                        g.each(function () {
                            c.apply(this, f || [a.responseText, b, a])
                        })
                    }), this
            }, ma.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                ma.fn[b] = function (a) {
                    return this.on(b, a)
                }
            }), ma.expr.pseudos.animated = function (a) {
                return ma.grep(ma.timers, function (b) {
                    return a === b.elem
                }).length
            }, ma.offset = {
                setOffset: function (a, b, c) {
                    var d, e, f, g, h, i, j, k = ma.css(a, "position"), l = ma(a), m = {};
                    "static" === k && (a.style.position = "relative"), h = l.offset(), f = ma.css(a, "top"), i = ma.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ma.isFunction(b) && (b = b.call(a, c, ma.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
                }
            }, ma.fn.extend({
                offset: function (a) {
                    if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                        ma.offset.setOffset(this, a, b)
                    });
                    var b, c, d, e, f = this[0];
                    if (f)return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Z(e), b = e.documentElement, {
                        top: d.top + c.pageYOffset - b.clientTop,
                        left: d.left + c.pageXOffset - b.clientLeft
                    }) : d) : {top: 0, left: 0}
                }, position: function () {
                    if (this[0]) {
                        var a, b, c = this[0], d = {top: 0, left: 0};
                        return "fixed" === ma.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ma.nodeName(a[0], "html") || (d = a.offset()), d = {
                            top: d.top + ma.css(a[0], "borderTopWidth", !0),
                            left: d.left + ma.css(a[0], "borderLeftWidth", !0)
                        }), {
                            top: b.top - d.top - ma.css(c, "marginTop", !0),
                            left: b.left - d.left - ma.css(c, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var a = this.offsetParent; a && "static" === ma.css(a, "position");)a = a.offsetParent;
                        return a || Wa
                    })
                }
            }), ma.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
                var c = "pageYOffset" === b;
                ma.fn[a] = function (d) {
                    return Fa(this, function (a, d, e) {
                        var f = Z(a);
                        return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                    }, a, d, arguments.length)
                }
            }), ma.each(["top", "left"], function (a, b) {
                ma.cssHooks[b] = F(ka.pixelPosition, function (a, c) {
                    if (c)return c = E(a, b), eb.test(c) ? ma(a).position()[b] + "px" : c
                })
            }), ma.each({Height: "height", Width: "width"}, function (a, b) {
                ma.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                    ma.fn[d] = function (e, f) {
                        var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border");
                        return Fa(this, function (b, c, e) {
                            var f;
                            return ma.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? ma.css(b, c, h) : ma.style(b, c, e, h)
                        }, b, g ? e : void 0, g)
                    }
                })
            }), ma.fn.extend({
                bind: function (a, b, c) {
                    return this.on(a, null, b, c)
                }, unbind: function (a, b) {
                    return this.off(a, null, b)
                }, delegate: function (a, b, c, d) {
                    return this.on(b, a, c, d)
                }, undelegate: function (a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            }), ma.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
                return ma
            });
            var Tb = a.jQuery, Ub = a.$;
            return ma.noConflict = function (b) {
                return a.$ === ma && (a.$ = Ub), b && a.jQuery === ma && (a.jQuery = Tb), ma
            }, b || (a.jQuery = a.$ = ma), ma
        })
    }, {}],
    2: [function (a, b, c) {
        !function (a, d) {
            "function" == typeof define && define.amd ? define(d) : "object" == typeof c ? b.exports = d() : a.MicroPlugin = d()
        }(this, function () {
            var a = {};
            a.mixin = function (a) {
                a.plugins = {}, a.prototype.initializePlugins = function (a) {
                    var c, d, e, f = this, g = [];
                    if (f.plugins = {
                            names: [],
                            settings: {},
                            requested: {},
                            loaded: {}
                        }, b.isArray(a))for (c = 0, d = a.length; c < d; c++)"string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name)); else if (a)for (e in a)a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
                    for (; g.length;)f.require(g.shift())
                }, a.prototype.loadPlugin = function (b) {
                    var c = this, d = c.plugins, e = a.plugins[b];
                    if (!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "' + b + '" plugin');
                    d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b)
                }, a.prototype.require = function (a) {
                    var b = this, c = b.plugins;
                    if (!b.plugins.loaded.hasOwnProperty(a)) {
                        if (c.requested[a])throw new Error('Plugin has circular dependency ("' + a + '")');
                        b.loadPlugin(a)
                    }
                    return c.loaded[a]
                }, a.define = function (b, c) {
                    a.plugins[b] = {name: b, fn: c}
                }
            };
            var b = {
                isArray: Array.isArray || function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }
            };
            return a
        })
    }, {}],
    3: [function (a, b, c) {
        !function (a, d) {
            "object" == typeof c && "undefined" != typeof b ? b.exports = d() : "function" == typeof define && define.amd ? define(d) : a.moment = d()
        }(this, function () {
            "use strict";
            function c() {
                return qd.apply(null, arguments)
            }

            function d(a) {
                qd = a
            }

            function e(a) {
                return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
            }

            function f(a) {
                return null != a && "[object Object]" === Object.prototype.toString.call(a)
            }

            function g(a) {
                var b;
                for (b in a)return !1;
                return !0
            }

            function h(a) {
                return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
            }

            function i(a) {
                return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
            }

            function j(a, b) {
                var c, d = [];
                for (c = 0; c < a.length; ++c)d.push(b(a[c], c));
                return d
            }

            function k(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function l(a, b) {
                for (var c in b)k(b, c) && (a[c] = b[c]);
                return k(b, "toString") && (a.toString = b.toString), k(b, "valueOf") && (a.valueOf = b.valueOf), a
            }

            function m(a, b, c, d) {
                return tb(a, b, c, d, !0).utc()
            }

            function n() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function o(a) {
                return null == a._pf && (a._pf = n()), a._pf
            }

            function p(a) {
                if (null == a._isValid) {
                    var b = o(a), c = sd.call(b.parsedDateParts, function (a) {
                        return null != a
                    }), d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
                    if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a))return d;
                    a._isValid = d
                }
                return a._isValid
            }

            function q(a) {
                var b = m(NaN);
                return null != a ? l(o(b), a) : o(b).userInvalidated = !0, b
            }

            function r(a) {
                return void 0 === a
            }

            function s(a, b) {
                var c, d, e;
                if (r(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), r(b._i) || (a._i = b._i), r(b._f) || (a._f = b._f), r(b._l) || (a._l = b._l), r(b._strict) || (a._strict = b._strict), r(b._tzm) || (a._tzm = b._tzm), r(b._isUTC) || (a._isUTC = b._isUTC), r(b._offset) || (a._offset = b._offset), r(b._pf) || (a._pf = o(b)), r(b._locale) || (a._locale = b._locale), td.length > 0)for (c in td)d = td[c], e = b[d], r(e) || (a[d] = e);
                return a
            }

            function t(a) {
                s(this, a), this._d = new Date(null != a._d ? a._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ud === !1 && (ud = !0, c.updateOffset(this), ud = !1)
            }

            function u(a) {
                return a instanceof t || null != a && null != a._isAMomentObject
            }

            function v(a) {
                return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
            }

            function w(a) {
                var b = +a, c = 0;
                return 0 !== b && isFinite(b) && (c = v(b)), c
            }

            function x(a, b, c) {
                var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
                for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && w(a[d]) !== w(b[d])) && g++;
                return g + f
            }

            function y(a) {
                c.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
            }

            function z(a, b) {
                var d = !0;
                return l(function () {
                    if (null != c.deprecationHandler && c.deprecationHandler(null, a), d) {
                        for (var e, f = [], g = 0; g < arguments.length; g++) {
                            if (e = "", "object" == typeof arguments[g]) {
                                e += "\n[" + g + "] ";
                                for (var h in arguments[0])e += h + ": " + arguments[0][h] + ", ";
                                e = e.slice(0, -2)
                            } else e = arguments[g];
                            f.push(e)
                        }
                        y(a + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
                    }
                    return b.apply(this, arguments)
                }, b)
            }

            function A(a, b) {
                null != c.deprecationHandler && c.deprecationHandler(a, b), vd[a] || (y(b), vd[a] = !0)
            }

            function B(a) {
                return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
            }

            function C(a) {
                var b, c;
                for (c in a)b = a[c], B(b) ? this[c] = b : this["_" + c] = b;
                this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function D(a, b) {
                var c, d = l({}, a);
                for (c in b)k(b, c) && (f(a[c]) && f(b[c]) ? (d[c] = {}, l(d[c], a[c]), l(d[c], b[c])) : null != b[c] ? d[c] = b[c] : delete d[c]);
                for (c in a)k(a, c) && !k(b, c) && f(a[c]) && (d[c] = l({}, d[c]));
                return d
            }

            function E(a) {
                null != a && this.set(a)
            }

            function F(a, b, c) {
                var d = this._calendar[a] || this._calendar.sameElse;
                return B(d) ? d.call(b, c) : d
            }

            function G(a) {
                var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
                return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
                    return a.slice(1)
                }), this._longDateFormat[a])
            }

            function H() {
                return this._invalidDate
            }

            function I(a) {
                return this._ordinal.replace("%d", a)
            }

            function J(a, b, c, d) {
                var e = this._relativeTime[c];
                return B(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
            }

            function K(a, b) {
                var c = this._relativeTime[a > 0 ? "future" : "past"];
                return B(c) ? c(b) : c.replace(/%s/i, b)
            }

            function L(a, b) {
                var c = a.toLowerCase();
                Fd[c] = Fd[c + "s"] = Fd[b] = a
            }

            function M(a) {
                return "string" == typeof a ? Fd[a] || Fd[a.toLowerCase()] : void 0
            }

            function N(a) {
                var b, c, d = {};
                for (c in a)k(a, c) && (b = M(c), b && (d[b] = a[c]));
                return d
            }

            function O(a, b) {
                Gd[a] = b
            }

            function P(a) {
                var b = [];
                for (var c in a)b.push({unit: c, priority: Gd[c]});
                return b.sort(function (a, b) {
                    return a.priority - b.priority
                }), b
            }

            function Q(a, b) {
                return function (d) {
                    return null != d ? (S(this, a, d), c.updateOffset(this, b), this) : R(this, a)
                }
            }

            function R(a, b) {
                return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
            }

            function S(a, b, c) {
                a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
            }

            function T(a) {
                return a = M(a), B(this[a]) ? this[a]() : this
            }

            function U(a, b) {
                if ("object" == typeof a) {
                    a = N(a);
                    for (var c = P(a), d = 0; d < c.length; d++)this[c[d].unit](a[c[d].unit])
                } else if (a = M(a), B(this[a]))return this[a](b);
                return this
            }

            function V(a, b, c) {
                var d = "" + Math.abs(a), e = b - d.length, f = a >= 0;
                return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
            }

            function W(a, b, c, d) {
                var e = d;
                "string" == typeof d && (e = function () {
                    return this[d]()
                }), a && (Kd[a] = e), b && (Kd[b[0]] = function () {
                    return V(e.apply(this, arguments), b[1], b[2])
                }), c && (Kd[c] = function () {
                    return this.localeData().ordinal(e.apply(this, arguments), a)
                })
            }

            function X(a) {
                return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
            }

            function Y(a) {
                var b, c, d = a.match(Hd);
                for (b = 0, c = d.length; b < c; b++)Kd[d[b]] ? d[b] = Kd[d[b]] : d[b] = X(d[b]);
                return function (b) {
                    var e, f = "";
                    for (e = 0; e < c; e++)f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
                    return f
                }
            }

            function Z(a, b) {
                return a.isValid() ? (b = $(b, a.localeData()), Jd[b] = Jd[b] || Y(b), Jd[b](a)) : a.localeData().invalidDate()
            }

            function $(a, b) {
                function c(a) {
                    return b.longDateFormat(a) || a
                }

                var d = 5;
                for (Id.lastIndex = 0; d >= 0 && Id.test(a);)a = a.replace(Id, c), Id.lastIndex = 0, d -= 1;
                return a
            }

            function _(a, b, c) {
                ae[a] = B(b) ? b : function (a, d) {
                    return a && c ? c : b
                }
            }

            function aa(a, b) {
                return k(ae, a) ? ae[a](b._strict, b._locale) : new RegExp(ba(a))
            }

            function ba(a) {
                return ca(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                    return b || c || d || e
                }))
            }

            function ca(a) {
                return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function da(a, b) {
                var c, d = b;
                for ("string" == typeof a && (a = [a]), h(b) && (d = function (a, c) {
                    c[b] = w(a)
                }), c = 0; c < a.length; c++)be[a[c]] = d
            }

            function ea(a, b) {
                da(a, function (a, c, d, e) {
                    d._w = d._w || {}, b(a, d._w, d, e)
                })
            }

            function fa(a, b, c) {
                null != b && k(be, a) && be[a](b, c._a, c, a)
            }

            function ga(a, b) {
                return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
            }

            function ha(a, b) {
                return a ? e(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || me).test(b) ? "format" : "standalone"][a.month()] : this._months
            }

            function ia(a, b) {
                return a ? e(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[me.test(b) ? "format" : "standalone"][a.month()] : this._monthsShort
            }

            function ja(a, b, c) {
                var d, e, f, g = a.toLocaleLowerCase();
                if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d)f = m([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
                return c ? "MMM" === b ? (e = le.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = le.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = le.call(this._shortMonthsParse, g), e !== -1 ? e : (e = le.call(this._longMonthsParse, g),
                    e !== -1 ? e : null)) : (e = le.call(this._longMonthsParse, g), e !== -1 ? e : (e = le.call(this._shortMonthsParse, g), e !== -1 ? e : null))
            }

            function ka(a, b, c) {
                var d, e, f;
                if (this._monthsParseExact)return ja.call(this, a, b, c);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
                    if (e = m([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a))return d;
                    if (c && "MMM" === b && this._shortMonthsParse[d].test(a))return d;
                    if (!c && this._monthsParse[d].test(a))return d
                }
            }

            function la(a, b) {
                var c;
                if (!a.isValid())return a;
                if ("string" == typeof b)if (/^\d+$/.test(b))b = w(b); else if (b = a.localeData().monthsParse(b), !h(b))return a;
                return c = Math.min(a.date(), ga(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
            }

            function ma(a) {
                return null != a ? (la(this, a), c.updateOffset(this, !0), this) : R(this, "Month")
            }

            function na() {
                return ga(this.year(), this.month())
            }

            function oa(a) {
                return this._monthsParseExact ? (k(this, "_monthsRegex") || qa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (k(this, "_monthsShortRegex") || (this._monthsShortRegex = pe), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function pa(a) {
                return this._monthsParseExact ? (k(this, "_monthsRegex") || qa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (k(this, "_monthsRegex") || (this._monthsRegex = qe), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
            }

            function qa() {
                function a(a, b) {
                    return b.length - a.length
                }

                var b, c, d = [], e = [], f = [];
                for (b = 0; b < 12; b++)c = m([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
                for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)d[b] = ca(d[b]), e[b] = ca(e[b]);
                for (b = 0; b < 24; b++)f[b] = ca(f[b]);
                this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
            }

            function ra(a) {
                return sa(a) ? 366 : 365
            }

            function sa(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            }

            function ta() {
                return sa(this.year())
            }

            function ua(a, b, c, d, e, f, g) {
                var h = new Date(a, b, c, d, e, f, g);
                return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
            }

            function va(a) {
                var b = new Date(Date.UTC.apply(null, arguments));
                return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
            }

            function wa(a, b, c) {
                var d = 7 + b - c, e = (7 + va(a, 0, d).getUTCDay() - b) % 7;
                return -e + d - 1
            }

            function xa(a, b, c, d, e) {
                var f, g, h = (7 + c - d) % 7, i = wa(a, d, e), j = 1 + 7 * (b - 1) + h + i;
                return j <= 0 ? (f = a - 1, g = ra(f) + j) : j > ra(a) ? (f = a + 1, g = j - ra(a)) : (f = a, g = j), {
                    year: f,
                    dayOfYear: g
                }
            }

            function ya(a, b, c) {
                var d, e, f = wa(a.year(), b, c), g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
                return g < 1 ? (e = a.year() - 1, d = g + za(e, b, c)) : g > za(a.year(), b, c) ? (d = g - za(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
                    week: d,
                    year: e
                }
            }

            function za(a, b, c) {
                var d = wa(a, b, c), e = wa(a + 1, b, c);
                return (ra(a) - d + e) / 7
            }

            function Aa(a) {
                return ya(a, this._week.dow, this._week.doy).week
            }

            function Ba() {
                return this._week.dow
            }

            function Ca() {
                return this._week.doy
            }

            function Da(a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            }

            function Ea(a) {
                var b = ya(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            }

            function Fa(a, b) {
                return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
            }

            function Ga(a, b) {
                return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
            }

            function Ha(a, b) {
                return a ? e(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : this._weekdays
            }

            function Ia(a) {
                return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
            }

            function Ja(a) {
                return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
            }

            function Ka(a, b, c) {
                var d, e, f, g = a.toLocaleLowerCase();
                if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d)f = m([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
                return c ? "dddd" === b ? (e = le.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = le.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = le.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = le.call(this._weekdaysParse, g), e !== -1 ? e : (e = le.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = le.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = le.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = le.call(this._weekdaysParse, g), e !== -1 ? e : (e = le.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = le.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = le.call(this._weekdaysParse, g), e !== -1 ? e : (e = le.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
            }

            function La(a, b, c) {
                var d, e, f;
                if (this._weekdaysParseExact)return Ka.call(this, a, b, c);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
                    if (e = m([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a))return d;
                    if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a))return d;
                    if (c && "dd" === b && this._minWeekdaysParse[d].test(a))return d;
                    if (!c && this._weekdaysParse[d].test(a))return d
                }
            }

            function Ma(a) {
                if (!this.isValid())return null != a ? this : NaN;
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != a ? (a = Fa(a, this.localeData()), this.add(a - b, "d")) : b
            }

            function Na(a) {
                if (!this.isValid())return null != a ? this : NaN;
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            }

            function Oa(a) {
                if (!this.isValid())return null != a ? this : NaN;
                if (null != a) {
                    var b = Ga(a, this.localeData());
                    return this.day(this.day() % 7 ? b : b - 7)
                }
                return this.day() || 7
            }

            function Pa(a) {
                return this._weekdaysParseExact ? (k(this, "_weekdaysRegex") || Sa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (k(this, "_weekdaysRegex") || (this._weekdaysRegex = we), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function Qa(a) {
                return this._weekdaysParseExact ? (k(this, "_weekdaysRegex") || Sa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (k(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = xe), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function Ra(a) {
                return this._weekdaysParseExact ? (k(this, "_weekdaysRegex") || Sa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (k(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ye), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Sa() {
                function a(a, b) {
                    return b.length - a.length
                }

                var b, c, d, e, f, g = [], h = [], i = [], j = [];
                for (b = 0; b < 7; b++)c = m([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
                for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++)h[b] = ca(h[b]), i[b] = ca(i[b]), j[b] = ca(j[b]);
                this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
            }

            function Ta() {
                return this.hours() % 12 || 12
            }

            function Ua() {
                return this.hours() || 24
            }

            function Va(a, b) {
                W(a, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), b)
                })
            }

            function Wa(a, b) {
                return b._meridiemParse
            }

            function Xa(a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            }

            function Ya(a, b, c) {
                return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
            }

            function Za(a) {
                return a ? a.toLowerCase().replace("_", "-") : a
            }

            function $a(a) {
                for (var b, c, d, e, f = 0; f < a.length;) {
                    for (e = Za(a[f]).split("-"), b = e.length, c = Za(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                        if (d = _a(e.slice(0, b).join("-")))return d;
                        if (c && c.length >= b && x(e, c, !0) >= b - 1)break;
                        b--
                    }
                    f++
                }
                return null
            }

            function _a(c) {
                var d = null;
                if (!De[c] && "undefined" != typeof b && b && b.exports)try {
                    d = ze._abbr, a("./locale/" + c), ab(d)
                } catch (a) {
                }
                return De[c]
            }

            function ab(a, b) {
                var c;
                return a && (c = r(b) ? db(a) : bb(a, b), c && (ze = c)), ze._abbr
            }

            function bb(a, b) {
                if (null !== b) {
                    var c = Ce;
                    if (b.abbr = a, null != De[a])A("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = De[a]._config; else if (null != b.parentLocale) {
                        if (null == De[b.parentLocale])return Ee[b.parentLocale] || (Ee[b.parentLocale] = []), Ee[b.parentLocale].push({
                            name: a,
                            config: b
                        }), null;
                        c = De[b.parentLocale]._config
                    }
                    return De[a] = new E(D(c, b)), Ee[a] && Ee[a].forEach(function (a) {
                        bb(a.name, a.config)
                    }), ab(a), De[a]
                }
                return delete De[a], null
            }

            function cb(a, b) {
                if (null != b) {
                    var c, d = Ce;
                    null != De[a] && (d = De[a]._config), b = D(d, b), c = new E(b), c.parentLocale = De[a], De[a] = c, ab(a)
                } else null != De[a] && (null != De[a].parentLocale ? De[a] = De[a].parentLocale : null != De[a] && delete De[a]);
                return De[a]
            }

            function db(a) {
                var b;
                if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)return ze;
                if (!e(a)) {
                    if (b = _a(a))return b;
                    a = [a]
                }
                return $a(a)
            }

            function eb() {
                return yd(De)
            }

            function fb(a) {
                var b, c = a._a;
                return c && o(a).overflow === -2 && (b = c[de] < 0 || c[de] > 11 ? de : c[ee] < 1 || c[ee] > ga(c[ce], c[de]) ? ee : c[fe] < 0 || c[fe] > 24 || 24 === c[fe] && (0 !== c[ge] || 0 !== c[he] || 0 !== c[ie]) ? fe : c[ge] < 0 || c[ge] > 59 ? ge : c[he] < 0 || c[he] > 59 ? he : c[ie] < 0 || c[ie] > 999 ? ie : -1, o(a)._overflowDayOfYear && (b < ce || b > ee) && (b = ee), o(a)._overflowWeeks && b === -1 && (b = je), o(a)._overflowWeekday && b === -1 && (b = ke), o(a).overflow = b), a
            }

            function gb(a) {
                var b, c, d, e, f, g, h = a._i, i = Fe.exec(h) || Ge.exec(h);
                if (i) {
                    for (o(a).iso = !0, b = 0, c = Ie.length; b < c; b++)if (Ie[b][1].exec(i[1])) {
                        e = Ie[b][0], d = Ie[b][2] !== !1;
                        break
                    }
                    if (null == e)return void(a._isValid = !1);
                    if (i[3]) {
                        for (b = 0, c = Je.length; b < c; b++)if (Je[b][1].exec(i[3])) {
                            f = (i[2] || " ") + Je[b][0];
                            break
                        }
                        if (null == f)return void(a._isValid = !1)
                    }
                    if (!d && null != f)return void(a._isValid = !1);
                    if (i[4]) {
                        if (!He.exec(i[4]))return void(a._isValid = !1);
                        g = "Z"
                    }
                    a._f = e + (f || "") + (g || ""), mb(a)
                } else a._isValid = !1
            }

            function hb(a) {
                var b = Ke.exec(a._i);
                return null !== b ? void(a._d = new Date((+b[1]))) : (gb(a), void(a._isValid === !1 && (delete a._isValid, c.createFromInputFallback(a))))
            }

            function ib(a, b, c) {
                return null != a ? a : null != b ? b : c
            }

            function jb(a) {
                var b = new Date(c.now());
                return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
            }

            function kb(a) {
                var b, c, d, e, f = [];
                if (!a._d) {
                    for (d = jb(a), a._w && null == a._a[ee] && null == a._a[de] && lb(a), a._dayOfYear && (e = ib(a._a[ce], d[ce]), a._dayOfYear > ra(e) && (o(a)._overflowDayOfYear = !0), c = va(e, 0, a._dayOfYear), a._a[de] = c.getUTCMonth(), a._a[ee] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b)a._a[b] = f[b] = d[b];
                    for (; b < 7; b++)a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                    24 === a._a[fe] && 0 === a._a[ge] && 0 === a._a[he] && 0 === a._a[ie] && (a._nextDay = !0, a._a[fe] = 0), a._d = (a._useUTC ? va : ua).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[fe] = 24)
                }
            }

            function lb(a) {
                var b, c, d, e, f, g, h, i;
                if (b = a._w, null != b.GG || null != b.W || null != b.E)f = 1, g = 4, c = ib(b.GG, a._a[ce], ya(ub(), 1, 4).year), d = ib(b.W, 1), e = ib(b.E, 1), (e < 1 || e > 7) && (i = !0); else {
                    f = a._locale._week.dow, g = a._locale._week.doy;
                    var j = ya(ub(), f, g);
                    c = ib(b.gg, a._a[ce], j.year), d = ib(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f
                }
                d < 1 || d > za(c, f, g) ? o(a)._overflowWeeks = !0 : null != i ? o(a)._overflowWeekday = !0 : (h = xa(c, d, e, f, g), a._a[ce] = h.year, a._dayOfYear = h.dayOfYear)
            }

            function mb(a) {
                if (a._f === c.ISO_8601)return void gb(a);
                a._a = [], o(a).empty = !0;
                var b, d, e, f, g, h = "" + a._i, i = h.length, j = 0;
                for (e = $(a._f, a._locale).match(Hd) || [], b = 0; b < e.length; b++)f = e[b], d = (h.match(aa(f, a)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && o(a).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Kd[f] ? (d ? o(a).empty = !1 : o(a).unusedTokens.push(f), fa(f, d, a)) : a._strict && !d && o(a).unusedTokens.push(f);
                o(a).charsLeftOver = i - j, h.length > 0 && o(a).unusedInput.push(h), a._a[fe] <= 12 && o(a).bigHour === !0 && a._a[fe] > 0 && (o(a).bigHour = void 0), o(a).parsedDateParts = a._a.slice(0), o(a).meridiem = a._meridiem, a._a[fe] = nb(a._locale, a._a[fe], a._meridiem), kb(a), fb(a)
            }

            function nb(a, b, c) {
                var d;
                return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
            }

            function ob(a) {
                var b, c, d, e, f;
                if (0 === a._f.length)return o(a).invalidFormat = !0, void(a._d = new Date(NaN));
                for (e = 0; e < a._f.length; e++)f = 0, b = s({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], mb(b), p(b) && (f += o(b).charsLeftOver, f += 10 * o(b).unusedTokens.length, o(b).score = f, (null == d || f < d) && (d = f, c = b));
                l(a, c || b)
            }

            function pb(a) {
                if (!a._d) {
                    var b = N(a._i);
                    a._a = j([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                        return a && parseInt(a, 10)
                    }), kb(a)
                }
            }

            function qb(a) {
                var b = new t(fb(rb(a)));
                return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
            }

            function rb(a) {
                var b = a._i, c = a._f;
                return a._locale = a._locale || db(a._l), null === b || void 0 === c && "" === b ? q({nullInput: !0}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), u(b) ? new t(fb(b)) : (i(b) ? a._d = b : e(c) ? ob(a) : c ? mb(a) : sb(a), p(a) || (a._d = null), a))
            }

            function sb(a) {
                var b = a._i;
                void 0 === b ? a._d = new Date(c.now()) : i(b) ? a._d = new Date(b.valueOf()) : "string" == typeof b ? hb(a) : e(b) ? (a._a = j(b.slice(0), function (a) {
                    return parseInt(a, 10)
                }), kb(a)) : "object" == typeof b ? pb(a) : h(b) ? a._d = new Date(b) : c.createFromInputFallback(a)
            }

            function tb(a, b, c, d, h) {
                var i = {};
                return c !== !0 && c !== !1 || (d = c, c = void 0), (f(a) && g(a) || e(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = c, i._i = a, i._f = b, i._strict = d, qb(i)
            }

            function ub(a, b, c, d) {
                return tb(a, b, c, d, !1)
            }

            function vb(a, b) {
                var c, d;
                if (1 === b.length && e(b[0]) && (b = b[0]), !b.length)return ub();
                for (c = b[0], d = 1; d < b.length; ++d)b[d].isValid() && !b[d][a](c) || (c = b[d]);
                return c
            }

            function wb() {
                var a = [].slice.call(arguments, 0);
                return vb("isBefore", a)
            }

            function xb() {
                var a = [].slice.call(arguments, 0);
                return vb("isAfter", a)
            }

            function yb(a) {
                var b = N(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
                this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = db(), this._bubble()
            }

            function zb(a) {
                return a instanceof yb
            }

            function Ab(a) {
                return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
            }

            function Bb(a, b) {
                W(a, 0, 0, function () {
                    var a = this.utcOffset(), c = "+";
                    return a < 0 && (a = -a, c = "-"), c + V(~~(a / 60), 2) + b + V(~~a % 60, 2)
                })
            }

            function Cb(a, b) {
                var c = (b || "").match(a);
                if (null === c)return null;
                var d = c[c.length - 1] || [], e = (d + "").match(Oe) || ["-", 0, 0], f = +(60 * e[1]) + w(e[2]);
                return 0 === f ? 0 : "+" === e[0] ? f : -f
            }

            function Db(a, b) {
                var d, e;
                return b._isUTC ? (d = b.clone(), e = (u(a) || i(a) ? a.valueOf() : ub(a).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), c.updateOffset(d, !1), d) : ub(a).local()
            }

            function Eb(a) {
                return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
            }

            function Fb(a, b) {
                var d, e = this._offset || 0;
                if (!this.isValid())return null != a ? this : NaN;
                if (null != a) {
                    if ("string" == typeof a) {
                        if (a = Cb(Zd, a), null === a)return this
                    } else Math.abs(a) < 16 && (a = 60 * a);
                    return !this._isUTC && b && (d = Eb(this)), this._offset = a, this._isUTC = !0, null != d && this.add(d, "m"), e !== a && (!b || this._changeInProgress ? Vb(this, Qb(a - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? e : Eb(this)
            }

            function Gb(a, b) {
                return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
            }

            function Hb(a) {
                return this.utcOffset(0, a)
            }

            function Ib(a) {
                return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Eb(this), "m")), this
            }

            function Jb() {
                if (null != this._tzm)this.utcOffset(this._tzm); else if ("string" == typeof this._i) {
                    var a = Cb(Yd, this._i);
                    null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
                }
                return this
            }

            function Kb(a) {
                return !!this.isValid() && (a = a ? ub(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
            }

            function Lb() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Mb() {
                if (!r(this._isDSTShifted))return this._isDSTShifted;
                var a = {};
                if (s(a, this), a = rb(a), a._a) {
                    var b = a._isUTC ? m(a._a) : ub(a._a);
                    this._isDSTShifted = this.isValid() && x(a._a, b.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Nb() {
                return !!this.isValid() && !this._isUTC
            }

            function Ob() {
                return !!this.isValid() && this._isUTC
            }

            function Pb() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function Qb(a, b) {
                var c, d, e, f = a, g = null;
                return zb(a) ? f = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : h(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Pe.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
                    y: 0,
                    d: w(g[ee]) * c,
                    h: w(g[fe]) * c,
                    m: w(g[ge]) * c,
                    s: w(g[he]) * c,
                    ms: w(Ab(1e3 * g[ie])) * c
                }) : (g = Qe.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
                    y: Rb(g[2], c),
                    M: Rb(g[3], c),
                    w: Rb(g[4], c),
                    d: Rb(g[5], c),
                    h: Rb(g[6], c),
                    m: Rb(g[7], c),
                    s: Rb(g[8], c)
                }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Tb(ub(f.from), ub(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new yb(f), zb(a) && k(a, "_locale") && (d._locale = a._locale), d
            }

            function Rb(a, b) {
                var c = a && parseFloat(a.replace(",", "."));
                return (isNaN(c) ? 0 : c) * b
            }

            function Sb(a, b) {
                var c = {milliseconds: 0, months: 0};
                return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
            }

            function Tb(a, b) {
                var c;
                return a.isValid() && b.isValid() ? (b = Db(b, a), a.isBefore(b) ? c = Sb(a, b) : (c = Sb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function Ub(a, b) {
                return function (c, d) {
                    var e, f;
                    return null === d || isNaN(+d) || (A(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Qb(c, d), Vb(this, e, a), this
                }
            }

            function Vb(a, b, d, e) {
                var f = b._milliseconds, g = Ab(b._days), h = Ab(b._months);
                a.isValid() && (e = null == e || e, f && a._d.setTime(a._d.valueOf() + f * d), g && S(a, "Date", R(a, "Date") + g * d), h && la(a, R(a, "Month") + h * d), e && c.updateOffset(a, g || h))
            }

            function Wb(a, b) {
                var c = a.diff(b, "days", !0);
                return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
            }

            function Xb(a, b) {
                var d = a || ub(), e = Db(d, this).startOf("day"), f = c.calendarFormat(this, e) || "sameElse", g = b && (B(b[f]) ? b[f].call(this, d) : b[f]);
                return this.format(g || this.localeData().calendar(f, this, ub(d)))
            }

            function Yb() {
                return new t(this)
            }

            function Zb(a, b) {
                var c = u(a) ? a : ub(a);
                return !(!this.isValid() || !c.isValid()) && (b = M(r(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
            }

            function $b(a, b) {
                var c = u(a) ? a : ub(a);
                return !(!this.isValid() || !c.isValid()) && (b = M(r(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
            }

            function _b(a, b, c, d) {
                return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
            }

            function ac(a, b) {
                var c, d = u(a) ? a : ub(a);
                return !(!this.isValid() || !d.isValid()) && (b = M(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
            }

            function bc(a, b) {
                return this.isSame(a, b) || this.isAfter(a, b)
            }

            function cc(a, b) {
                return this.isSame(a, b) || this.isBefore(a, b)
            }

            function dc(a, b, c) {
                var d, e, f, g;
                return this.isValid() ? (d = Db(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = M(b), "year" === b || "month" === b || "quarter" === b ? (g = ec(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : v(g)) : NaN) : NaN
            }

            function ec(a, b) {
                var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
                return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
            }

            function fc() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function gc() {
                var a = this.clone().utc();
                return 0 < a.year() && a.year() <= 9999 ? B(Date.prototype.toISOString) ? this.toDate().toISOString() : Z(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Z(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function hc() {
                if (!this.isValid())return "moment.invalid(/* " + this._i + " */)";
                var a = "moment", b = "";
                this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
                var c = "[" + a + '("]', d = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", e = "-MM-DD[T]HH:mm:ss.SSS", f = b + '[")]';
                return this.format(c + d + e + f)
            }

            function ic(a) {
                a || (a = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
                var b = Z(this, a);
                return this.localeData().postformat(b)
            }

            function jc(a, b) {
                return this.isValid() && (u(a) && a.isValid() || ub(a).isValid()) ? Qb({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }

            function kc(a) {
                return this.from(ub(), a)
            }

            function lc(a, b) {
                return this.isValid() && (u(a) && a.isValid() || ub(a).isValid()) ? Qb({
                    from: this,
                    to: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }

            function mc(a) {
                return this.to(ub(), a)
            }

            function nc(a) {
                var b;
                return void 0 === a ? this._locale._abbr : (b = db(a), null != b && (this._locale = b), this)
            }

            function oc() {
                return this._locale
            }

            function pc(a) {
                switch (a = M(a)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                    case"date":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function qc(a) {
                return a = M(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
            }

            function rc() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function sc() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function tc() {
                return new Date(this.valueOf())
            }

            function uc() {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
            }

            function vc() {
                var a = this;
                return {
                    years: a.year(),
                    months: a.month(),
                    date: a.date(),
                    hours: a.hours(),
                    minutes: a.minutes(),
                    seconds: a.seconds(),
                    milliseconds: a.milliseconds()
                }
            }

            function wc() {
                return this.isValid() ? this.toISOString() : null
            }

            function xc() {
                return p(this)
            }

            function yc() {
                return l({}, o(this))
            }

            function zc() {
                return o(this).overflow
            }

            function Ac() {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }

            function Bc(a, b) {
                W(0, [a, a.length], 0, b)
            }

            function Cc(a) {
                return Gc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Dc(a) {
                return Gc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Ec() {
                return za(this.year(), 1, 4)
            }

            function Fc() {
                var a = this.localeData()._week;
                return za(this.year(), a.dow, a.doy)
            }

            function Gc(a, b, c, d, e) {
                var f;
                return null == a ? ya(this, d, e).year : (f = za(a, d, e), b > f && (b = f), Hc.call(this, a, b, c, d, e))
            }

            function Hc(a, b, c, d, e) {
                var f = xa(a, b, c, d, e), g = va(f.year, 0, f.dayOfYear);
                return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
            }

            function Ic(a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            }

            function Jc(a) {
                var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == a ? b : this.add(a - b, "d")
            }

            function Kc(a, b) {
                b[ie] = w(1e3 * ("0." + a))
            }

            function Lc() {
                return this._isUTC ? "UTC" : ""
            }

            function Mc() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Nc(a) {
                return ub(1e3 * a)
            }

            function Oc() {
                return ub.apply(null, arguments).parseZone()
            }

            function Pc(a) {
                return a
            }

            function Qc(a, b, c, d) {
                var e = db(), f = m().set(d, b);
                return e[c](f, a)
            }

            function Rc(a, b, c) {
                if (h(a) && (b = a, a = void 0), a = a || "", null != b)return Qc(a, b, c, "month");
                var d, e = [];
                for (d = 0; d < 12; d++)e[d] = Qc(a, d, c, "month");
                return e
            }

            function Sc(a, b, c, d) {
                "boolean" == typeof a ? (h(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, h(b) && (c = b, b = void 0), b = b || "");
                var e = db(), f = a ? e._week.dow : 0;
                if (null != c)return Qc(b, (c + f) % 7, d, "day");
                var g, i = [];
                for (g = 0; g < 7; g++)i[g] = Qc(b, (g + f) % 7, d, "day");
                return i
            }

            function Tc(a, b) {
                return Rc(a, b, "months")
            }

            function Uc(a, b) {
                return Rc(a, b, "monthsShort")
            }

            function Vc(a, b, c) {
                return Sc(a, b, c, "weekdays")
            }

            function Wc(a, b, c) {
                return Sc(a, b, c, "weekdaysShort")
            }

            function Xc(a, b, c) {
                return Sc(a, b, c, "weekdaysMin")
            }

            function Yc() {
                var a = this._data;
                return this._milliseconds = _e(this._milliseconds), this._days = _e(this._days), this._months = _e(this._months), a.milliseconds = _e(a.milliseconds), a.seconds = _e(a.seconds), a.minutes = _e(a.minutes), a.hours = _e(a.hours), a.months = _e(a.months), a.years = _e(a.years), this
            }

            function Zc(a, b, c, d) {
                var e = Qb(b, c);
                return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
            }

            function $c(a, b) {
                return Zc(this, a, b, 1)
            }

            function _c(a, b) {
                return Zc(this, a, b, -1)
            }

            function ad(a) {
                return a < 0 ? Math.floor(a) : Math.ceil(a)
            }

            function bd() {
                var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
                return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * ad(dd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = v(f / 1e3), i.seconds = a % 60, b = v(a / 60), i.minutes = b % 60, c = v(b / 60), i.hours = c % 24, g += v(c / 24), e = v(cd(g)), h += e, g -= ad(dd(e)), d = v(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
            }

            function cd(a) {
                return 4800 * a / 146097
            }

            function dd(a) {
                return 146097 * a / 4800
            }

            function ed(a) {
                var b, c, d = this._milliseconds;
                if (a = M(a), "month" === a || "year" === a)return b = this._days + d / 864e5, c = this._months + cd(b), "month" === a ? c : c / 12;
                switch (b = this._days + Math.round(dd(this._months)), a) {
                    case"week":
                        return b / 7 + d / 6048e5;
                    case"day":
                        return b + d / 864e5;
                    case"hour":
                        return 24 * b + d / 36e5;
                    case"minute":
                        return 1440 * b + d / 6e4;
                    case"second":
                        return 86400 * b + d / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * b) + d;
                    default:
                        throw new Error("Unknown unit " + a)
                }
            }

            function fd() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12)
            }

            function gd(a) {
                return function () {
                    return this.as(a)
                }
            }

            function hd(a) {
                return a = M(a), this[a + "s"]()
            }

            function id(a) {
                return function () {
                    return this._data[a]
                }
            }

            function jd() {
                return v(this.days() / 7)
            }

            function kd(a, b, c, d, e) {
                return e.relativeTime(b || 1, !!c, a, d)
            }

            function ld(a, b, c) {
                var d = Qb(a).abs(), e = qf(d.as("s")), f = qf(d.as("m")), g = qf(d.as("h")), h = qf(d.as("d")), i = qf(d.as("M")), j = qf(d.as("y")), k = e < rf.s && ["s", e] || f <= 1 && ["m"] || f < rf.m && ["mm", f] || g <= 1 && ["h"] || g < rf.h && ["hh", g] || h <= 1 && ["d"] || h < rf.d && ["dd", h] || i <= 1 && ["M"] || i < rf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
                return k[2] = b, k[3] = +a > 0, k[4] = c, kd.apply(null, k)
            }

            function md(a) {
                return void 0 === a ? qf : "function" == typeof a && (qf = a, !0)
            }

            function nd(a, b) {
                return void 0 !== rf[a] && (void 0 === b ? rf[a] : (rf[a] = b, !0))
            }

            function od(a) {
                var b = this.localeData(), c = ld(this, !a, b);
                return a && (c = b.pastFuture(+this, c)), b.postformat(c)
            }

            function pd() {
                var a, b, c, d = sf(this._milliseconds) / 1e3, e = sf(this._days), f = sf(this._months);
                a = v(d / 60), b = v(a / 60), d %= 60, a %= 60, c = v(f / 12), f %= 12;
                var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
                return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
            }

            var qd, rd;
            rd = Array.prototype.some ? Array.prototype.some : function (a) {
                for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)if (d in b && a.call(this, b[d], d, b))return !0;
                return !1
            };
            var sd = rd, td = c.momentProperties = [], ud = !1, vd = {};
            c.suppressDeprecationWarnings = !1, c.deprecationHandler = null;
            var wd;
            wd = Object.keys ? Object.keys : function (a) {
                var b, c = [];
                for (b in a)k(a, b) && c.push(b);
                return c
            };
            var xd, yd = wd, zd = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            }, Ad = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }, Bd = "Invalid date", Cd = "%d", Dd = /\d{1,2}/, Ed = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }, Fd = {}, Gd = {}, Hd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Id = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Jd = {}, Kd = {}, Ld = /\d/, Md = /\d\d/, Nd = /\d{3}/, Od = /\d{4}/, Pd = /[+-]?\d{6}/, Qd = /\d\d?/, Rd = /\d\d\d\d?/, Sd = /\d\d\d\d\d\d?/, Td = /\d{1,3}/, Ud = /\d{1,4}/, Vd = /[+-]?\d{1,6}/, Wd = /\d+/, Xd = /[+-]?\d+/, Yd = /Z|[+-]\d\d:?\d\d/gi, Zd = /Z|[+-]\d\d(?::?\d\d)?/gi, $d = /[+-]?\d+(\.\d{1,3})?/, _d = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ae = {}, be = {}, ce = 0, de = 1, ee = 2, fe = 3, ge = 4, he = 5, ie = 6, je = 7, ke = 8;
            xd = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
                var b;
                for (b = 0; b < this.length; ++b)if (this[b] === a)return b;
                return -1
            };
            var le = xd;
            W("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), W("MMM", 0, 0, function (a) {
                return this.localeData().monthsShort(this, a)
            }), W("MMMM", 0, 0, function (a) {
                return this.localeData().months(this, a)
            }), L("month", "M"), O("month", 8), _("M", Qd), _("MM", Qd, Md), _("MMM", function (a, b) {
                return b.monthsShortRegex(a)
            }), _("MMMM", function (a, b) {
                return b.monthsRegex(a)
            }), da(["M", "MM"], function (a, b) {
                b[de] = w(a) - 1
            }), da(["MMM", "MMMM"], function (a, b, c, d) {
                var e = c._locale.monthsParse(a, d, c._strict);
                null != e ? b[de] = e : o(c).invalidMonth = a
            });
            var me = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ne = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), pe = _d, qe = _d;
            W("Y", 0, 0, function () {
                var a = this.year();
                return a <= 9999 ? "" + a : "+" + a
            }), W(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), O("year", 1), _("Y", Xd), _("YY", Qd, Md), _("YYYY", Ud, Od), _("YYYYY", Vd, Pd), _("YYYYYY", Vd, Pd), da(["YYYYY", "YYYYYY"], ce), da("YYYY", function (a, b) {
                b[ce] = 2 === a.length ? c.parseTwoDigitYear(a) : w(a)
            }), da("YY", function (a, b) {
                b[ce] = c.parseTwoDigitYear(a)
            }), da("Y", function (a, b) {
                b[ce] = parseInt(a, 10)
            }), c.parseTwoDigitYear = function (a) {
                return w(a) + (w(a) > 68 ? 1900 : 2e3)
            };
            var re = Q("FullYear", !0);
            W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), O("week", 5), O("isoWeek", 5), _("w", Qd), _("ww", Qd, Md), _("W", Qd), _("WW", Qd, Md), ea(["w", "ww", "W", "WW"], function (a, b, c, d) {
                b[d.substr(0, 1)] = w(a)
            });
            var se = {dow: 0, doy: 6};
            W("d", 0, "do", "day"), W("dd", 0, 0, function (a) {
                return this.localeData().weekdaysMin(this, a)
            }), W("ddd", 0, 0, function (a) {
                return this.localeData().weekdaysShort(this, a)
            }), W("dddd", 0, 0, function (a) {
                return this.localeData().weekdays(this, a)
            }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), O("day", 11), O("weekday", 11), O("isoWeekday", 11), _("d", Qd), _("e", Qd), _("E", Qd), _("dd", function (a, b) {
                return b.weekdaysMinRegex(a)
            }), _("ddd", function (a, b) {
                return b.weekdaysShortRegex(a)
            }), _("dddd", function (a, b) {
                return b.weekdaysRegex(a)
            }), ea(["dd", "ddd", "dddd"], function (a, b, c, d) {
                var e = c._locale.weekdaysParse(a, d, c._strict);
                null != e ? b.d = e : o(c).invalidWeekday = a
            }), ea(["d", "e", "E"], function (a, b, c, d) {
                b[d] = w(a)
            });
            var te = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ue = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), we = _d, xe = _d, ye = _d;
            W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Ta), W("k", ["kk", 2], 0, Ua), W("hmm", 0, 0, function () {
                return "" + Ta.apply(this) + V(this.minutes(), 2)
            }), W("hmmss", 0, 0, function () {
                return "" + Ta.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
            }), W("Hmm", 0, 0, function () {
                return "" + this.hours() + V(this.minutes(), 2)
            }), W("Hmmss", 0, 0, function () {
                return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
            }), Va("a", !0),
                Va("A", !1), L("hour", "h"), O("hour", 13), _("a", Wa), _("A", Wa), _("H", Qd), _("h", Qd), _("HH", Qd, Md), _("hh", Qd, Md), _("hmm", Rd), _("hmmss", Sd), _("Hmm", Rd), _("Hmmss", Sd), da(["H", "HH"], fe), da(["a", "A"], function (a, b, c) {
                c._isPm = c._locale.isPM(a), c._meridiem = a
            }), da(["h", "hh"], function (a, b, c) {
                b[fe] = w(a), o(c).bigHour = !0
            }), da("hmm", function (a, b, c) {
                var d = a.length - 2;
                b[fe] = w(a.substr(0, d)), b[ge] = w(a.substr(d)), o(c).bigHour = !0
            }), da("hmmss", function (a, b, c) {
                var d = a.length - 4, e = a.length - 2;
                b[fe] = w(a.substr(0, d)), b[ge] = w(a.substr(d, 2)), b[he] = w(a.substr(e)), o(c).bigHour = !0
            }), da("Hmm", function (a, b, c) {
                var d = a.length - 2;
                b[fe] = w(a.substr(0, d)), b[ge] = w(a.substr(d))
            }), da("Hmmss", function (a, b, c) {
                var d = a.length - 4, e = a.length - 2;
                b[fe] = w(a.substr(0, d)), b[ge] = w(a.substr(d, 2)), b[he] = w(a.substr(e))
            });
            var ze, Ae = /[ap]\.?m?\.?/i, Be = Q("Hours", !0), Ce = {
                calendar: zd,
                longDateFormat: Ad,
                invalidDate: Bd,
                ordinal: Cd,
                ordinalParse: Dd,
                relativeTime: Ed,
                months: ne,
                monthsShort: oe,
                week: se,
                weekdays: te,
                weekdaysMin: ve,
                weekdaysShort: ue,
                meridiemParse: Ae
            }, De = {}, Ee = {}, Fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ge = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, He = /Z|[+-]\d\d(?::?\d\d)?/, Ie = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Je = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Ke = /^\/?Date\((\-?\d+)/i;
            c.createFromInputFallback = z("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
                a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
            }), c.ISO_8601 = function () {
            };
            var Le = z("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var a = ub.apply(null, arguments);
                return this.isValid() && a.isValid() ? a < this ? this : a : q()
            }), Me = z("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var a = ub.apply(null, arguments);
                return this.isValid() && a.isValid() ? a > this ? this : a : q()
            }), Ne = function () {
                return Date.now ? Date.now() : +new Date
            };
            Bb("Z", ":"), Bb("ZZ", ""), _("Z", Zd), _("ZZ", Zd), da(["Z", "ZZ"], function (a, b, c) {
                c._useUTC = !0, c._tzm = Cb(Zd, a)
            });
            var Oe = /([\+\-]|\d\d)/gi;
            c.updateOffset = function () {
            };
            var Pe = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Qe = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            Qb.fn = yb.prototype;
            var Re = Ub(1, "add"), Se = Ub(-1, "subtract");
            c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Te = z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
                return void 0 === a ? this.localeData() : this.locale(a)
            });
            W(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), W(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), Bc("gggg", "weekYear"), Bc("ggggg", "weekYear"), Bc("GGGG", "isoWeekYear"), Bc("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), O("weekYear", 1), O("isoWeekYear", 1), _("G", Xd), _("g", Xd), _("GG", Qd, Md), _("gg", Qd, Md), _("GGGG", Ud, Od), _("gggg", Ud, Od), _("GGGGG", Vd, Pd), _("ggggg", Vd, Pd), ea(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
                b[d.substr(0, 2)] = w(a)
            }), ea(["gg", "GG"], function (a, b, d, e) {
                b[e] = c.parseTwoDigitYear(a)
            }), W("Q", 0, "Qo", "quarter"), L("quarter", "Q"), O("quarter", 7), _("Q", Ld), da("Q", function (a, b) {
                b[de] = 3 * (w(a) - 1)
            }), W("D", ["DD", 2], "Do", "date"), L("date", "D"), O("date", 9), _("D", Qd), _("DD", Qd, Md), _("Do", function (a, b) {
                return a ? b._ordinalParse : b._ordinalParseLenient
            }), da(["D", "DD"], ee), da("Do", function (a, b) {
                b[ee] = w(a.match(Qd)[0], 10)
            });
            var Ue = Q("Date", !0);
            W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), O("dayOfYear", 4), _("DDD", Td), _("DDDD", Nd), da(["DDD", "DDDD"], function (a, b, c) {
                c._dayOfYear = w(a)
            }), W("m", ["mm", 2], 0, "minute"), L("minute", "m"), O("minute", 14), _("m", Qd), _("mm", Qd, Md), da(["m", "mm"], ge);
            var Ve = Q("Minutes", !1);
            W("s", ["ss", 2], 0, "second"), L("second", "s"), O("second", 15), _("s", Qd), _("ss", Qd, Md), da(["s", "ss"], he);
            var We = Q("Seconds", !1);
            W("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), W(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), W(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), W(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), W(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), W(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), W(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), L("millisecond", "ms"), O("millisecond", 16), _("S", Td, Ld), _("SS", Td, Md), _("SSS", Td, Nd);
            var Xe;
            for (Xe = "SSSS"; Xe.length <= 9; Xe += "S")_(Xe, Wd);
            for (Xe = "S"; Xe.length <= 9; Xe += "S")da(Xe, Kc);
            var Ye = Q("Milliseconds", !1);
            W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
            var Ze = t.prototype;
            Ze.add = Re, Ze.calendar = Xb, Ze.clone = Yb, Ze.diff = dc, Ze.endOf = qc, Ze.format = ic, Ze.from = jc, Ze.fromNow = kc, Ze.to = lc, Ze.toNow = mc, Ze.get = T, Ze.invalidAt = zc, Ze.isAfter = Zb, Ze.isBefore = $b, Ze.isBetween = _b, Ze.isSame = ac, Ze.isSameOrAfter = bc, Ze.isSameOrBefore = cc, Ze.isValid = xc, Ze.lang = Te, Ze.locale = nc, Ze.localeData = oc, Ze.max = Me, Ze.min = Le, Ze.parsingFlags = yc, Ze.set = U, Ze.startOf = pc, Ze.subtract = Se, Ze.toArray = uc, Ze.toObject = vc, Ze.toDate = tc, Ze.toISOString = gc, Ze.inspect = hc, Ze.toJSON = wc, Ze.toString = fc, Ze.unix = sc, Ze.valueOf = rc, Ze.creationData = Ac, Ze.year = re, Ze.isLeapYear = ta, Ze.weekYear = Cc, Ze.isoWeekYear = Dc, Ze.quarter = Ze.quarters = Ic, Ze.month = ma, Ze.daysInMonth = na, Ze.week = Ze.weeks = Da, Ze.isoWeek = Ze.isoWeeks = Ea, Ze.weeksInYear = Fc, Ze.isoWeeksInYear = Ec, Ze.date = Ue, Ze.day = Ze.days = Ma, Ze.weekday = Na, Ze.isoWeekday = Oa, Ze.dayOfYear = Jc, Ze.hour = Ze.hours = Be, Ze.minute = Ze.minutes = Ve, Ze.second = Ze.seconds = We, Ze.millisecond = Ze.milliseconds = Ye, Ze.utcOffset = Fb, Ze.utc = Hb, Ze.local = Ib, Ze.parseZone = Jb, Ze.hasAlignedHourOffset = Kb, Ze.isDST = Lb, Ze.isLocal = Nb, Ze.isUtcOffset = Ob, Ze.isUtc = Pb, Ze.isUTC = Pb, Ze.zoneAbbr = Lc, Ze.zoneName = Mc, Ze.dates = z("dates accessor is deprecated. Use date instead.", Ue), Ze.months = z("months accessor is deprecated. Use month instead", ma), Ze.years = z("years accessor is deprecated. Use year instead", re), Ze.zone = z("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Gb), Ze.isDSTShifted = z("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Mb);
            var $e = E.prototype;
            $e.calendar = F, $e.longDateFormat = G, $e.invalidDate = H, $e.ordinal = I, $e.preparse = Pc, $e.postformat = Pc, $e.relativeTime = J, $e.pastFuture = K, $e.set = C, $e.months = ha, $e.monthsShort = ia, $e.monthsParse = ka, $e.monthsRegex = pa, $e.monthsShortRegex = oa, $e.week = Aa, $e.firstDayOfYear = Ca, $e.firstDayOfWeek = Ba, $e.weekdays = Ha, $e.weekdaysMin = Ja, $e.weekdaysShort = Ia, $e.weekdaysParse = La, $e.weekdaysRegex = Pa, $e.weekdaysShortRegex = Qa, $e.weekdaysMinRegex = Ra, $e.isPM = Xa, $e.meridiem = Ya, ab("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (a) {
                    var b = a % 10, c = 1 === w(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                }
            }), c.lang = z("moment.lang is deprecated. Use moment.locale instead.", ab), c.langData = z("moment.langData is deprecated. Use moment.localeData instead.", db);
            var _e = Math.abs, af = gd("ms"), bf = gd("s"), cf = gd("m"), df = gd("h"), ef = gd("d"), ff = gd("w"), gf = gd("M"), hf = gd("y"), jf = id("milliseconds"), kf = id("seconds"), lf = id("minutes"), mf = id("hours"), nf = id("days"), of = id("months"), pf = id("years"), qf = Math.round, rf = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, sf = Math.abs, tf = yb.prototype;
            return tf.abs = Yc, tf.add = $c, tf.subtract = _c, tf.as = ed, tf.asMilliseconds = af, tf.asSeconds = bf, tf.asMinutes = cf, tf.asHours = df, tf.asDays = ef, tf.asWeeks = ff, tf.asMonths = gf, tf.asYears = hf, tf.valueOf = fd, tf._bubble = bd, tf.get = hd, tf.milliseconds = jf, tf.seconds = kf, tf.minutes = lf, tf.hours = mf, tf.days = nf, tf.weeks = jd, tf.months = of, tf.years = pf, tf.humanize = od, tf.toISOString = pd, tf.toString = pd, tf.toJSON = pd, tf.locale = nc, tf.localeData = oc, tf.toIsoString = z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", pd), tf.lang = Te, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), _("x", Xd), _("X", $d), da("X", function (a, b, c) {
                c._d = new Date(1e3 * parseFloat(a, 10))
            }), da("x", function (a, b, c) {
                c._d = new Date(w(a))
            }), c.version = "2.17.1", d(ub), c.fn = Ze, c.min = wb, c.max = xb, c.now = Ne, c.utc = m, c.unix = Nc, c.months = Tc, c.isDate = i, c.locale = ab, c.invalid = q, c.duration = Qb, c.isMoment = u, c.weekdays = Vc, c.parseZone = Oc, c.localeData = db, c.isDuration = zb, c.monthsShort = Uc, c.weekdaysMin = Xc, c.defineLocale = bb, c.updateLocale = cb, c.locales = eb, c.weekdaysShort = Wc, c.normalizeUnits = M, c.relativeTimeRounding = md, c.relativeTimeThreshold = nd, c.calendarFormat = Wb, c.prototype = Ze, c
        })
    }, {}],
    4: [function (a, b, c) {
        !function (d) {
            "function" == typeof define && define.amd ? define(["jquery"], d) : "object" == typeof c ? b.exports = d(a("./../../jquery/dist/jquery.js")) : d(jQuery)
        }(function (a) {
            function c(a, b) {
                return a.parsleyAdaptedCallback || (a.parsleyAdaptedCallback = function () {
                    var c = Array.prototype.slice.call(arguments, 0);
                    c.unshift(this), a.apply(b || r, c)
                }), a.parsleyAdaptedCallback
            }

            function d(a) {
                return 0 === a.lastIndexOf(t, 0) ? a.substr(t.length) : a
            }

            "undefined" == typeof a && "undefined" != typeof window.jQuery && (a = window.jQuery);
            var e = 1, f = {}, g = {
                attr: function (a, b, c) {
                    var d, e, f = new RegExp("^" + b, "i");
                    if ("undefined" == typeof c)c = {}; else for (var g in c)c.hasOwnProperty(g) && delete c[g];
                    if ("undefined" == typeof a || "undefined" == typeof a[0])return c;
                    e = a[0].attributes;
                    for (var g = e.length; g--;)d = e[g], d && d.specified && f.test(d.name) && (c[this.camelize(d.name.slice(b.length))] = this.deserializeValue(d.value));
                    return c
                }, checkAttr: function (a, b, c) {
                    return a.is("[" + b + c + "]")
                }, setAttr: function (a, b, c, d) {
                    a[0].setAttribute(this.dasherize(b + c), String(d))
                }, generateID: function () {
                    return "" + e++
                }, deserializeValue: function (b) {
                    var c;
                    try {
                        return b ? "true" == b || "false" != b && ("null" == b ? null : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
                    } catch (a) {
                        return b
                    }
                }, camelize: function (a) {
                    return a.replace(/-+(.)?/g, function (a, b) {
                        return b ? b.toUpperCase() : ""
                    })
                }, dasherize: function (a) {
                    return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }, warn: function () {
                    window.console && "function" == typeof window.console.warn && window.console.warn.apply(window.console, arguments)
                }, warnOnce: function (a) {
                    f[a] || (f[a] = !0, this.warn.apply(this, arguments))
                }, _resetWarnings: function () {
                    f = {}
                }, objectCreate: Object.create || function () {
                    var a = function () {
                    };
                    return function (b) {
                        if (arguments.length > 1)throw Error("Second argument not supported");
                        if ("object" != typeof b)throw TypeError("Argument must be an object");
                        a.prototype = b;
                        var c = new a;
                        return a.prototype = null, c
                    }
                }()
            }, h = {
                namespace: "data-parsley-",
                inputs: "input, textarea, select",
                excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
                priorityEnabled: !0,
                multiple: null,
                group: null,
                uiEnabled: !0,
                validationThreshold: 3,
                focus: "first",
                trigger: !1,
                errorClass: "parsley-error",
                successClass: "parsley-success",
                classHandler: function (a) {
                },
                errorsContainer: function (a) {
                },
                errorsWrapper: '<ul class="parsley-errors-list"></ul>',
                errorTemplate: "<li></li>"
            }, i = function () {
            };
            i.prototype = {
                asyncSupport: !1, actualizeOptions: function () {
                    return g.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
                }, _resetOptions: function (a) {
                    this.domOptions = g.objectCreate(this.parent.options), this.options = g.objectCreate(this.domOptions);
                    for (var b in a)a.hasOwnProperty(b) && (this.options[b] = a[b]);
                    this.actualizeOptions()
                }, validateThroughValidator: function (a, b, c) {
                    return window.ParsleyValidator.validate(a, b, c)
                }, _listeners: null, on: function (a, b) {
                    this._listeners = this._listeners || {};
                    var c = this._listeners[a] = this._listeners[a] || [];
                    return c.push(b), this
                }, subscribe: function (b, c) {
                    a.listenTo(this, b.toLowerCase(), c)
                }, off: function (a, b) {
                    var c = this._listeners && this._listeners[a];
                    if (c)if (b)for (var d = c.length; d--;)c[d] === b && c.splice(d, 1); else delete this._listeners[a];
                    return this
                }, unsubscribe: function (b, c) {
                    a.unsubscribeTo(this, b.toLowerCase())
                }, trigger: function (a, b) {
                    b = b || this;
                    var c, d = this._listeners && this._listeners[a];
                    if (d)for (var e = d.length; e--;)if (c = d[e].call(b, b), c === !1)return c;
                    return !this.parent || this.parent.trigger(a, b)
                }, reset: function () {
                    if ("ParsleyForm" !== this.__class__)return this._trigger("reset");
                    for (var a = 0; a < this.fields.length; a++)this.fields[a]._trigger("reset");
                    this._trigger("reset")
                }, destroy: function () {
                    if ("ParsleyForm" !== this.__class__)return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
                    for (var a = 0; a < this.fields.length; a++)this.fields[a].destroy();
                    this.$element.removeData("Parsley"), this._trigger("destroy")
                }, _findRelatedMultiple: function () {
                    return this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')
                }
            };
            var j = function () {
                var a = {}, c = function (a) {
                    this.__class__ = "Validator", this.__version__ = "1.0.1", this.options = a || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
                };
                c.prototype = {
                    constructor: c, validate: function (a, b, c) {
                        if ("string" != typeof a && "object" != typeof a)throw new Error("You must validate an object or a string");
                        return "string" == typeof a || h(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
                    }, bind: function (a, b) {
                        if ("object" != typeof a)throw new Error("Must bind a Constraint to an object");
                        return a[this.bindingKey] = new d(b), this
                    }, unbind: function (a) {
                        return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
                    }, isBinded: function (a) {
                        return "undefined" != typeof a[this.bindingKey]
                    }, getBinded: function (a) {
                        return this.isBinded(a) ? a[this.bindingKey] : null
                    }, _validateString: function (a, b, c) {
                        var d, g = [];
                        h(b) || (b = [b]);
                        for (var i = 0; i < b.length; i++) {
                            if (!(b[i] instanceof f))throw new Error("You must give an Assert or an Asserts array to validate a string");
                            d = b[i].check(a, c), d instanceof e && g.push(d)
                        }
                        return !g.length || g
                    }, _validateObject: function (a, b, c) {
                        if ("object" != typeof b)throw new Error("You must give a constraint to validate an object");
                        return b instanceof d ? b.check(a, c) : new d(b).check(a, c)
                    }, _validateBindedObject: function (a, b) {
                        return a[this.bindingKey].check(a, b)
                    }
                }, c.errorCode = {
                    must_be_a_string: "must_be_a_string",
                    must_be_an_array: "must_be_an_array",
                    must_be_a_number: "must_be_a_number",
                    must_be_a_string_or_array: "must_be_a_string_or_array"
                };
                var d = function (a, b) {
                    if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a)try {
                        this._bootstrap(a)
                    } catch (b) {
                        throw new Error("Should give a valid mapping object to Constraint", b, a)
                    }
                };
                d.prototype = {
                    constructor: d, check: function (a, b) {
                        var c, d = {};
                        for (var e in this.nodes) {
                            for (var i = !1, j = this.get(e), k = h(j) ? j : [j], l = k.length - 1; l >= 0; l--)"Required" !== k[l].__class__ || (i = k[l].requiresValidation(b));
                            if (this.has(e, a) || this.options.strict || i)try {
                                this.has(e, this.options.strict || i ? a : void 0) || (new f).HaveProperty(e).validate(a), c = this._check(e, a[e], b), (h(c) && c.length > 0 || !h(c) && !g(c)) && (d[e] = c)
                            } catch (a) {
                                d[e] = a
                            }
                        }
                        return !!g(d) || d
                    }, add: function (a, b) {
                        if (b instanceof f || h(b) && b[0] instanceof f)return this.nodes[a] = b, this;
                        if ("object" == typeof b && !h(b))return this.nodes[a] = b instanceof d ? b : new d(b), this;
                        throw new Error("Should give an Assert, an Asserts array, a Constraint", b)
                    }, has: function (a, b) {
                        return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
                    }, get: function (a, b) {
                        return this.has(a) ? this.nodes[a] : b || null
                    }, remove: function (a) {
                        var b = [];
                        for (var c in this.nodes)c !== a && (b[c] = this.nodes[c]);
                        return this.nodes = b, this
                    }, _bootstrap: function (a) {
                        if (a instanceof d)return this.nodes = a.nodes;
                        for (var b in a)this.add(b, a[b])
                    }, _check: function (a, b, c) {
                        if (this.nodes[a] instanceof f)return this._checkAsserts(b, [this.nodes[a]], c);
                        if (h(this.nodes[a]))return this._checkAsserts(b, this.nodes[a], c);
                        if (this.nodes[a] instanceof d)return this.nodes[a].check(b, c);
                        throw new Error("Invalid node", this.nodes[a])
                    }, _checkAsserts: function (a, b, c) {
                        for (var d, e = [], f = 0; f < b.length; f++)d = b[f].check(a, c), "undefined" != typeof d && !0 !== d && e.push(d);
                        return e
                    }
                };
                var e = function (a, b, c) {
                    if (this.__class__ = "Violation", !(a instanceof f))throw new Error("Should give an assertion implementing the Assert interface");
                    this.assert = a, this.value = b, "undefined" != typeof c && (this.violation = c)
                };
                e.prototype = {
                    show: function () {
                        var a = {assert: this.assert.__class__, value: this.value};
                        return this.violation && (a.violation = this.violation), a
                    }, __toString: function () {
                        return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
                    }, getViolation: function () {
                        var a, b;
                        for (a in this.violation)b = this.violation[a];
                        return {constraint: a, expected: b}
                    }
                };
                var f = function (a) {
                    this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof a && this.addGroup(a)
                };
                f.prototype = {
                    construct: f, requiresValidation: function (a) {
                        return !(a && !this.hasGroup(a)) && !(!a && this.hasGroups())
                    }, check: function (a, b) {
                        if (this.requiresValidation(b))try {
                            return this.validate(a, b)
                        } catch (a) {
                            return a
                        }
                    }, hasGroup: function (a) {
                        return h(a) ? this.hasOneOf(a) : "Any" === a || (this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a)
                    }, hasOneOf: function (a) {
                        for (var b = 0; b < a.length; b++)if (this.hasGroup(a[b]))return !0;
                        return !1
                    }, hasGroups: function () {
                        return this.groups.length > 0
                    }, addGroup: function (a) {
                        return h(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
                    }, removeGroup: function (a) {
                        for (var b = [], c = 0; c < this.groups.length; c++)a !== this.groups[c] && b.push(this.groups[c]);
                        return this.groups = b, this
                    }, addGroups: function (a) {
                        for (var b = 0; b < a.length; b++)this.addGroup(a[b]);
                        return this
                    }, HaveProperty: function (a) {
                        return this.__class__ = "HaveProperty", this.node = a, this.validate = function (a) {
                            if ("undefined" == typeof a[this.node])throw new e(this, a, {value: this.node});
                            return !0
                        }, this
                    }, Blank: function () {
                        return this.__class__ = "Blank", this.validate = function (a) {
                            if ("string" != typeof a)throw new e(this, a, {value: c.errorCode.must_be_a_string});
                            if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, ""))throw new e(this, a);
                            return !0
                        }, this
                    }, Callback: function (a) {
                        if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a)throw new Error("Callback must be instanciated with a function");
                        return this.fn = a, this.validate = function (a) {
                            var b = this.fn.apply(this, [a].concat(this.arguments));
                            if (!0 !== b)throw new e(this, a, {result: b});
                            return !0
                        }, this
                    }, Choice: function (a) {
                        if (this.__class__ = "Choice", !h(a) && "function" != typeof a)throw new Error("Choice must be instanciated with an array or a function");
                        return this.list = a, this.validate = function (a) {
                            for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)if (a === b[c])return !0;
                            throw new e(this, a, {choices: b})
                        }, this
                    }, Collection: function (a) {
                        return this.__class__ = "Collection", this.constraint = "undefined" != typeof a && (a instanceof f ? a : new d(a)), this.validate = function (a, b) {
                            var d, f = new c, i = 0, j = {}, k = this.groups.length ? this.groups : b;
                            if (!h(a))throw new e(this, a, {value: c.errorCode.must_be_an_array});
                            for (var l = 0; l < a.length; l++)d = this.constraint ? f.validate(a[l], this.constraint, k) : f.validate(a[l], k), g(d) || (j[i] = d), i++;
                            return !!g(j) || j
                        }, this
                    }, Count: function (a) {
                        return this.__class__ = "Count", this.count = a, this.validate = function (a) {
                            if (!h(a))throw new e(this, a, {value: c.errorCode.must_be_an_array});
                            var b = "function" == typeof this.count ? this.count(a) : this.count;
                            if (isNaN(Number(b)))throw new Error("Count must be a valid interger", b);
                            if (b !== a.length)throw new e(this, a, {count: b});
                            return !0
                        }, this
                    }, Email: function () {
                        return this.__class__ = "Email", this.validate = function (a) {
                            var b = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                            if ("string" != typeof a)throw new e(this, a, {value: c.errorCode.must_be_a_string});
                            if (!b.test(a))throw new e(this, a);
                            return !0
                        }, this
                    }, EqualTo: function (a) {
                        if (this.__class__ = "EqualTo", "undefined" == typeof a)throw new Error("EqualTo must be instanciated with a value or a function");
                        return this.reference = a, this.validate = function (a) {
                            var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
                            if (b !== a)throw new e(this, a, {value: b});
                            return !0
                        }, this
                    }, GreaterThan: function (a) {
                        if (this.__class__ = "GreaterThan", "undefined" == typeof a)throw new Error("Should give a threshold value");
                        return this.threshold = a, this.validate = function (a) {
                            if ("" === a || isNaN(Number(a)))throw new e(this, a, {value: c.errorCode.must_be_a_number});
                            if (this.threshold >= a)throw new e(this, a, {threshold: this.threshold});
                            return !0
                        }, this
                    }, GreaterThanOrEqual: function (a) {
                        if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a)throw new Error("Should give a threshold value");
                        return this.threshold = a, this.validate = function (a) {
                            if ("" === a || isNaN(Number(a)))throw new e(this, a, {value: c.errorCode.must_be_a_number});
                            if (this.threshold > a)throw new e(this, a, {threshold: this.threshold});
                            return !0
                        }, this
                    }, InstanceOf: function (a) {
                        if (this.__class__ = "InstanceOf", "undefined" == typeof a)throw new Error("InstanceOf must be instanciated with a value");
                        return this.classRef = a, this.validate = function (a) {
                            if (!0 != a instanceof this.classRef)throw new e(this, a, {classRef: this.classRef});
                            return !0
                        }, this
                    }, Length: function (a) {
                        if (this.__class__ = "Length", !a.min && !a.max)throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                        return this.min = a.min, this.max = a.max, this.validate = function (a) {
                            if ("string" != typeof a && !h(a))throw new e(this, a, {value: c.errorCode.must_be_a_string_or_array});
                            if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min)throw new e(this, a, {
                                min: this.min,
                                max: this.max
                            });
                            if ("undefined" != typeof this.max && a.length > this.max)throw new e(this, a, {max: this.max});
                            if ("undefined" != typeof this.min && a.length < this.min)throw new e(this, a, {min: this.min});
                            return !0
                        }, this
                    }, LessThan: function (a) {
                        if (this.__class__ = "LessThan", "undefined" == typeof a)throw new Error("Should give a threshold value");
                        return this.threshold = a, this.validate = function (a) {
                            if ("" === a || isNaN(Number(a)))throw new e(this, a, {value: c.errorCode.must_be_a_number});
                            if (this.threshold <= a)throw new e(this, a, {threshold: this.threshold});
                            return !0
                        }, this
                    }, LessThanOrEqual: function (a) {
                        if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a)throw new Error("Should give a threshold value");
                        return this.threshold = a, this.validate = function (a) {
                            if ("" === a || isNaN(Number(a)))throw new e(this, a, {value: c.errorCode.must_be_a_number});
                            if (this.threshold < a)throw new e(this, a, {threshold: this.threshold});
                            return !0
                        }, this
                    }, NotNull: function () {
                        return this.__class__ = "NotNull", this.validate = function (a) {
                            if (null === a || "undefined" == typeof a)throw new e(this, a);
                            return !0
                        }, this
                    }, NotBlank: function () {
                        return this.__class__ = "NotBlank", this.validate = function (a) {
                            if ("string" != typeof a)throw new e(this, a, {value: c.errorCode.must_be_a_string});
                            if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, ""))throw new e(this, a);
                            return !0
                        }, this
                    }, Null: function () {
                        return this.__class__ = "Null", this.validate = function (a) {
                            if (null !== a)throw new e(this, a);
                            return !0
                        }, this
                    }, Range: function (a, b) {
                        if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b)throw new Error("Range assert expects min and max values");
                        return this.min = a, this.max = b, this.validate = function (a) {
                            try {
                                return "string" == typeof a && isNaN(Number(a)) || h(a) ? (new f).Length({
                                    min: this.min,
                                    max: this.max
                                }).validate(a) : (new f).GreaterThanOrEqual(this.min).validate(a) && (new f).LessThanOrEqual(this.max).validate(a), !0
                            } catch (b) {
                                throw new e(this, a, b.violation)
                            }
                            return !0
                        }, this
                    }, Regexp: function (a, b) {
                        if (this.__class__ = "Regexp", "undefined" == typeof a)throw new Error("You must give a regexp");
                        return this.regexp = a, this.flag = b || "", this.validate = function (a) {
                            if ("string" != typeof a)throw new e(this, a, {value: c.errorCode.must_be_a_string});
                            if (!new RegExp(this.regexp, this.flag).test(a))throw new e(this, a, {
                                regexp: this.regexp,
                                flag: this.flag
                            });
                            return !0
                        }, this
                    }, Required: function () {
                        return this.__class__ = "Required", this.validate = function (a) {
                            if ("undefined" == typeof a)throw new e(this, a);
                            try {
                                "string" == typeof a ? (new f).NotNull().validate(a) && (new f).NotBlank().validate(a) : !0 === h(a) && (new f).Length({min: 1}).validate(a)
                            } catch (b) {
                                throw new e(this, a)
                            }
                            return !0
                        }, this
                    }, Unique: function (a) {
                        return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function (a) {
                            var b, d = [];
                            if (!h(a))throw new e(this, a, {value: c.errorCode.must_be_an_array});
                            for (var f = 0; f < a.length; f++)if (b = "object" == typeof a[f] ? a[f][this.key] : a[f], "undefined" != typeof b) {
                                if (-1 !== d.indexOf(b))throw new e(this, a, {value: b});
                                d.push(b)
                            }
                            return !0
                        }, this
                    }
                }, a.Assert = f, a.Validator = c, a.Violation = e, a.Constraint = d, Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
                    "use strict";
                    if (null === this)throw new TypeError;
                    var b = Object(this), c = b.length >>> 0;
                    if (0 === c)return -1;
                    var d = 0;
                    if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c)return -1;
                    for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); e < c; e++)if (e in b && b[e] === a)return e;
                    return -1
                });
                var g = function (a) {
                    for (var b in a)return !1;
                    return !0
                }, h = function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                };
                return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function () {
                    return a
                }) : "undefined" != typeof b && b.exports ? b.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a, a
            }();
            j = "undefined" != typeof j ? j : "undefined" != typeof b ? b.exports : null;
            var k = function (a, b) {
                this.__class__ = "ParsleyValidator", this.Validator = j, this.locale = "en", this.init(a || {}, b || {})
            };
            k.prototype = {
                init: function (b, c) {
                    this.catalog = c, this.validators = a.extend({}, this.validators);
                    for (var d in b)this.addValidator(d, b[d].fn, b[d].priority, b[d].requirementsTransformer);
                    window.Parsley.trigger("parsley:validator:init")
                }, setLocale: function (a) {
                    if ("undefined" == typeof this.catalog[a])throw new Error(a + " is not available in the catalog");
                    return this.locale = a, this
                }, addCatalog: function (a, b, c) {
                    return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
                }, addMessage: function (a, b, c) {
                    return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b.toLowerCase()] = c, this
                }, validate: function (a, b, c) {
                    return (new this.Validator.Validator).validate.apply(new j.Validator, arguments)
                }, addValidator: function (a, b, c, d) {
                    if (this.validators[a])g.warn('Validator "' + a + '" is already defined.'); else if (h.hasOwnProperty(a))return void g.warn('"' + a + '" is a restricted keyword and is not a valid validator name.');
                    return this._setValidator(a, b, c, d)
                }, updateValidator: function (a, b, c, d) {
                    return this.validators[a] ? this._setValidator(a, b, c, d) : (g.warn('Validator "' + a + '" is not already defined.'), this.addValidator(a, b, c, d))
                }, removeValidator: function (a) {
                    return this.validators[a] || g.warn('Validator "' + a + '" is not defined.'), delete this.validators[a], this
                }, _setValidator: function (b, c, d, e) {
                    return this.validators[b] = function (b) {
                        return a.extend((new j.Assert).Callback(c, b), {priority: d, requirementsTransformer: e})
                    }, this
                }, getErrorMessage: function (a) {
                    var b;
                    if ("type" === a.name) {
                        var c = this.catalog[this.locale][a.name] || {};
                        b = c[a.requirements]
                    } else b = this.formatMessage(this.catalog[this.locale][a.name], a.requirements);
                    return b || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
                }, formatMessage: function (a, b) {
                    if ("object" == typeof b) {
                        for (var c in b)a = this.formatMessage(a, b[c]);
                        return a
                    }
                    return "string" == typeof a ? a.replace(new RegExp("%s", "i"), b) : ""
                }, validators: {
                    notblank: function () {
                        return a.extend((new j.Assert).NotBlank(), {priority: 2})
                    }, required: function () {
                        return a.extend((new j.Assert).Required(), {priority: 512})
                    }, type: function (b) {
                        var c;
                        switch (b) {
                            case"email":
                                c = (new j.Assert).Email();
                                break;
                            case"range":
                            case"number":
                                c = (new j.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                                break;
                            case"integer":
                                c = (new j.Assert).Regexp("^-?\\d+$");
                                break;
                            case"digits":
                                c = (new j.Assert).Regexp("^\\d+$");
                                break;
                            case"alphanum":
                                c = (new j.Assert).Regexp("^\\w+$", "i");
                                break;
                            case"url":
                                c = (new j.Assert).Regexp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i");
                                break;
                            default:
                                throw new Error("validator type `" + b + "` is not supported")
                        }
                        return a.extend(c, {priority: 256})
                    }, pattern: function (b) {
                        var c = "";
                        return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"), b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")), a.extend((new j.Assert).Regexp(b, c), {priority: 64})
                    }, minlength: function (b) {
                        return a.extend((new j.Assert).Length({min: b}), {
                            priority: 30, requirementsTransformer: function () {
                                return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                            }
                        })
                    }, maxlength: function (b) {
                        return a.extend((new j.Assert).Length({max: b}), {
                            priority: 30, requirementsTransformer: function () {
                                return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                            }
                        })
                    }, length: function (b) {
                        return a.extend((new j.Assert).Length({min: b[0], max: b[1]}), {priority: 32})
                    }, mincheck: function (a) {
                        return this.minlength(a)
                    }, maxcheck: function (a) {
                        return this.maxlength(a)
                    }, check: function (a) {
                        return this.length(a)
                    }, min: function (b) {
                        return a.extend((new j.Assert).GreaterThanOrEqual(b), {
                            priority: 30,
                            requirementsTransformer: function () {
                                return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                            }
                        })
                    }, max: function (b) {
                        return a.extend((new j.Assert).LessThanOrEqual(b), {
                            priority: 30, requirementsTransformer: function () {
                                return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                            }
                        })
                    }, range: function (b) {
                        return a.extend((new j.Assert).Range(b[0], b[1]), {
                            priority: 32, requirementsTransformer: function () {
                                for (var a = 0; a < b.length; a++)b[a] = "string" != typeof b[a] || isNaN(b[a]) ? b[a] : parseInt(b[a], 10);
                                return b
                            }
                        })
                    }, equalto: function (b) {
                        return a.extend((new j.Assert).EqualTo(b), {
                            priority: 256, requirementsTransformer: function () {
                                return a(b).length ? a(b).val() : b
                            }
                        })
                    }
                }
            };
            var l = function (a) {
                this.__class__ = "ParsleyUI"
            };
            l.prototype = {
                listen: function () {
                    var a = this;
                    return window.Parsley.on("form:init", function () {
                        a.setupForm(this)
                    }).on("field:init", function () {
                        a.setupField(this)
                    }).on("field:validated", function () {
                        a.reflow(this)
                    }).on("form:validated", function () {
                        a.focus(this)
                    }).on("field:reset", function () {
                        a.reset(this)
                    }).on("form:destroy", function () {
                        a.destroy(this)
                    }).on("field:destroy", function () {
                        a.destroy(this)
                    }), this
                }, reflow: function (a) {
                    if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
                        var b = this._diff(a.validationResult, a._ui.lastValidationResult);
                        a._ui.lastValidationResult = a.validationResult, a._ui.validatedOnce = !0,
                            this.manageStatusClass(a), this.manageErrorsMessages(a, b), this.actualizeTriggers(a), (b.kept.length || b.added.length) && !0 !== a._ui.failedOnce && this.manageFailingFieldTrigger(a)
                    }
                }, getErrorsMessages: function (a) {
                    if (!0 === a.validationResult)return [];
                    for (var b = [], c = 0; c < a.validationResult.length; c++)b.push(this._getErrorMessage(a, a.validationResult[c].assert));
                    return b
                }, manageStatusClass: function (a) {
                    a.hasConstraints() && a.needsValidation() && !0 === a.validationResult ? this._successClass(a) : a.validationResult.length > 0 ? this._errorClass(a) : this._resetClass(a)
                }, manageErrorsMessages: function (b, c) {
                    if ("undefined" == typeof b.options.errorsMessagesDisabled) {
                        if ("undefined" != typeof b.options.errorMessage)return c.added.length || c.kept.length ? (this._insertErrorWrapper(b), 0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")), b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)) : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                        for (var d = 0; d < c.removed.length; d++)this.removeError(b, c.removed[d].assert.name, !0);
                        for (d = 0; d < c.added.length; d++)this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
                        for (d = 0; d < c.kept.length; d++)this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
                    }
                }, addError: function (b, c, d, e, f) {
                    this._insertErrorWrapper(b), b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))), !0 !== f && this._errorClass(b)
                }, updateError: function (a, b, c, d, e) {
                    a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)), !0 !== e && this._errorClass(a)
                }, removeError: function (a, b, c) {
                    a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(), !0 !== c && this.manageStatusClass(a)
                }, focus: function (a) {
                    if (a._focusedField = null, !0 === a.validationResult || "none" === a.options.focus)return null;
                    for (var b = 0; b < a.fields.length; b++) {
                        var c = a.fields[b];
                        if (!0 !== c.validationResult && c.validationResult.length > 0 && "undefined" == typeof c.options.noFocus && (a._focusedField = c.$element, "first" === a.options.focus))break
                    }
                    return null === a._focusedField ? null : a._focusedField.focus()
                }, _getErrorMessage: function (a, b) {
                    var c = b.name + "Message";
                    return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
                }, _diff: function (a, b, c) {
                    for (var d = [], e = [], f = 0; f < a.length; f++) {
                        for (var g = !1, h = 0; h < b.length; h++)if (a[f].assert.name === b[h].assert.name) {
                            g = !0;
                            break
                        }
                        g ? e.push(a[f]) : d.push(a[f])
                    }
                    return {kept: e, added: d, removed: c ? [] : this._diff(b, a, !0).added}
                }, setupForm: function (b) {
                    b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)), !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
                }, setupField: function (b) {
                    var c = {active: !1};
                    !1 !== b.options.uiEnabled && (c.active = !0, b.$element.attr(b.options.namespace + "id", b.__id__), c.$errorClassHandler = this._manageClassHandler(b), c.errorsWrapperId = "parsley-id-" + (b.options.multiple ? "multiple-" + b.options.multiple : b.__id__), c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, b._ui = c, this.actualizeTriggers(b))
                }, _manageClassHandler: function (b) {
                    if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length)return a(b.options.classHandler);
                    var c = b.options.classHandler(b);
                    return "undefined" != typeof c && c.length ? c : !b.options.multiple || b.$element.is("select") ? b.$element : b.$element.parent()
                }, _insertErrorWrapper: function (b) {
                    var c;
                    if (0 !== b._ui.$errorsWrapper.parent().length)return b._ui.$errorsWrapper.parent();
                    if ("string" == typeof b.options.errorsContainer) {
                        if (a(b.options.errorsContainer).length)return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);
                        g.warn("The errors container `" + b.options.errorsContainer + "` does not exist in DOM")
                    } else"function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b));
                    if ("undefined" != typeof c && c.length)return c.append(b._ui.$errorsWrapper);
                    var d = b.$element;
                    return b.options.multiple && (d = d.parent()), d.after(b._ui.$errorsWrapper)
                }, actualizeTriggers: function (b) {
                    var c = b.$element;
                    if (b.options.multiple && (c = a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]')), c.off(".Parsley"), !1 !== b.options.trigger) {
                        var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                        "" !== d && c.on(d.split(" ").join(".Parsley ") + ".Parsley", a.proxy("function" == typeof b.eventValidate ? b.eventValidate : this.eventValidate, b))
                    }
                }, eventValidate: function (a) {
                    new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
                }, manageFailingFieldTrigger: function (b) {
                    return b._ui.failedOnce = !0, b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function () {
                        if (!new RegExp("change", "i").test(a(this).parsley().options.trigger || ""))return a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
                    }), b.$element.is("select") && !new RegExp("change", "i").test(b.options.trigger || "") ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b)) : new RegExp("keyup", "i").test(b.options.trigger || "") ? void 0 : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
                }, reset: function (a) {
                    this.actualizeTriggers(a), a.$element.off(".ParsleyFailedOnce"), "undefined" != typeof a._ui && "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(a), a._ui.validatedOnce = !1, a._ui.lastValidationResult = [], a._ui.validationInformationVisible = !1, a._ui.failedOnce = !1)
                }, destroy: function (a) {
                    this.reset(a), "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
                }, _successClass: function (a) {
                    a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
                }, _errorClass: function (a) {
                    a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
                }, _resetClass: function (a) {
                    a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
                }
            };
            var m = function (b, c, d) {
                this.__class__ = "ParsleyForm", this.__id__ = g.generateID(), this.$element = a(b), this.domOptions = c, this.options = d, this.parent = window.Parsley, this.fields = [], this.validationResult = null
            };
            m.prototype = {
                onSubmitValidate: function (b) {
                    return this.validate(void 0, void 0, b), (!1 === this.validationResult || !this._trigger("submit")) && b instanceof a.Event && (b.stopImmediatePropagation(), b.preventDefault()), this
                }, validate: function (a, b, c) {
                    this.submitEvent = c, this.validationResult = !0;
                    var d = [];
                    return this._trigger("validate"), this._refreshFields(), this._withoutReactualizingFormOptions(function () {
                        for (var c = 0; c < this.fields.length; c++)a && !this._isFieldInGroup(this.fields[c], a) || (d = this.fields[c].validate(b), !0 !== d && d.length > 0 && this.validationResult && (this.validationResult = !1))
                    }), this._trigger(this.validationResult ? "success" : "error"), this._trigger("validated"), this.validationResult
                }, isValid: function (a, b) {
                    return this._refreshFields(), this._withoutReactualizingFormOptions(function () {
                        for (var c = 0; c < this.fields.length; c++)if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b))return !1;
                        return !0
                    })
                }, _isFieldInGroup: function (b, c) {
                    return a.isArray(b.options.group) ? -1 !== a.inArray(c, b.options.group) : b.options.group === c
                }, _refreshFields: function () {
                    return this.actualizeOptions()._bindFields()
                }, _bindFields: function () {
                    var b = this, c = this.fields;
                    return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function () {
                        this.$element.find(this.options.inputs).not(this.options.excluded).each(function () {
                            var a = new u.Factory(this, {}, b);
                            "ParsleyField" !== a.__class__ && "ParsleyFieldMultiple" !== a.__class__ || !0 === a.options.excluded || "undefined" == typeof b.fieldsMappedById[a.__class__ + "-" + a.__id__] && (b.fieldsMappedById[a.__class__ + "-" + a.__id__] = a, b.fields.push(a))
                        }), a(c).not(b.fields).each(function () {
                            this._trigger("reset")
                        })
                    }), this
                }, _withoutReactualizingFormOptions: function (a) {
                    var b = this.actualizeOptions;
                    this.actualizeOptions = function () {
                        return this
                    };
                    var c = a.call(this);
                    return this.actualizeOptions = b, c
                }, _trigger: function (a) {
                    return a = "form:" + a, this.trigger.apply(this, arguments)
                }
            };
            var n = function (b, c, d, e, f) {
                var h = {};
                if (!new RegExp("ParsleyField").test(b.__class__))throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
                if ("function" == typeof window.ParsleyValidator.validators[c] && (h = window.ParsleyValidator.validators[c](d)), "Assert" !== h.__parentClass__)throw new Error("Valid validator expected");
                var i = function () {
                    return "undefined" != typeof b.options[c + "Priority"] ? b.options[c + "Priority"] : h.priority || 2
                };
                return e = e || i(), "function" == typeof h.requirementsTransformer && (d = h.requirementsTransformer(), h = window.ParsleyValidator.validators[c](d)), a.extend(h, {
                    name: c,
                    requirements: d,
                    priority: e,
                    groups: [e],
                    isDomConstraint: f || g.checkAttr(b.$element, b.options.namespace, c)
                })
            }, o = function (b, c, d, e) {
                this.__class__ = "ParsleyField", this.__id__ = g.generateID(), this.$element = a(b), "undefined" != typeof e && (this.parent = e), this.options = d, this.domOptions = c, this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
            };
            o.prototype = {
                validate: function (a) {
                    return this.value = this.getValue(), this._trigger("validate"), this._trigger(this.isValid(a, this.value) ? "success" : "error"), this._trigger("validated"), this.validationResult
                }, hasConstraints: function () {
                    return 0 !== this.constraints.length
                }, needsValidation: function (a) {
                    return "undefined" == typeof a && (a = this.getValue()), !(!a.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty)
                }, isValid: function (a, b) {
                    if (this.refreshConstraints(), this.validationResult = !0, !this.hasConstraints())return !0;
                    if ("undefined" != typeof b && null !== b || (b = this.getValue()), !this.needsValidation(b) && !0 !== a)return !0;
                    var c = ["Any"];
                    !1 !== this.options.priorityEnabled && (c = this._getConstraintsSortedPriorities());
                    for (var d = 0; d < c.length; d++)if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d])))return !1;
                    return !0
                }, getValue: function () {
                    var a;
                    return a = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof a || null === a ? "" : this._handleWhitespace(a)
                }, refreshConstraints: function () {
                    return this.actualizeOptions()._bindConstraints()
                }, addConstraint: function (a, b, c, d) {
                    if ("function" == typeof window.ParsleyValidator.validators[a]) {
                        var e = new n(this, a, b, c, d);
                        "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e
                    }
                    return this
                }, removeConstraint: function (a) {
                    for (var b = 0; b < this.constraints.length; b++)if (a === this.constraints[b].name) {
                        this.constraints.splice(b, 1);
                        break
                    }
                    return delete this.constraintsByName[a], this
                }, updateConstraint: function (a, b, c) {
                    return this.removeConstraint(a).addConstraint(a, b, c)
                }, _bindConstraints: function () {
                    for (var a = [], b = {}, c = 0; c < this.constraints.length; c++)!1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]), b[this.constraints[c].name] = this.constraints[c]);
                    this.constraints = a, this.constraintsByName = b;
                    for (var d in this.options)this.addConstraint(d, this.options[d]);
                    return this._bindHtml5Constraints()
                }, _bindHtml5Constraints: function () {
                    (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
                    var a = this.$element.attr("type");
                    return "undefined" == typeof a ? this : "number" === a ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : /^(email|url|range)$/i.test(a) ? this.addConstraint("type", a, void 0, !0) : this
                }, _isRequired: function () {
                    return "undefined" != typeof this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
                }, _trigger: function (a) {
                    return a = "field:" + a, this.trigger.apply(this, arguments)
                }, _handleWhitespace: function (a) {
                    return !0 === this.options.trimValue && g.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (a = a.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (a = a.replace(/^\s+|\s+$/g, "")), a
                }, _getConstraintsSortedPriorities: function () {
                    for (var a = [], b = 0; b < this.constraints.length; b++)-1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
                    return a.sort(function (a, b) {
                        return b - a
                    }), a
                }
            };
            var p = function () {
                this.__class__ = "ParsleyFieldMultiple"
            };
            p.prototype = {
                addElement: function (a) {
                    return this.$elements.push(a), this
                }, refreshConstraints: function () {
                    var b;
                    if (this.constraints = [], this.$element.is("select"))return this.actualizeOptions()._bindConstraints(), this;
                    for (var c = 0; c < this.$elements.length; c++)if (a("html").has(this.$elements[c]).length) {
                        b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                        for (var d = 0; d < b.length; d++)this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
                    } else this.$elements.splice(c, 1);
                    return this
                }, getValue: function () {
                    if ("undefined" != typeof this.options.value)return this.options.value;
                    if (this.$element.is("input[type=radio]"))return this._findRelatedMultiple().filter(":checked").val() || "";
                    if (this.$element.is("input[type=checkbox]")) {
                        var b = [];
                        return this._findRelatedMultiple().filter(":checked").each(function () {
                            b.push(a(this).val())
                        }), b
                    }
                    return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
                }, _init: function () {
                    return this.$elements = [this.$element], this
                }
            };
            var q = function (b, c, d) {
                this.$element = a(b);
                var e = this.$element.data("Parsley");
                if (e)return "undefined" != typeof d && e.parent === window.Parsley && (e.parent = d, e._resetOptions(e.options)), e;
                if (!this.$element.length)throw new Error("You must bind Parsley on an existing element.");
                if ("undefined" != typeof d && "ParsleyForm" !== d.__class__)throw new Error("Parent instance must be a ParsleyForm instance");
                return this.parent = d || window.Parsley, this.init(c)
            };
            q.prototype = {
                init: function (a) {
                    return this.__class__ = "Parsley", this.__version__ = "2.1.3", this.__id__ = g.generateID(), this._resetOptions(a), this.$element.is("form") || g.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
                }, isMultiple: function () {
                    return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
                }, handleMultiple: function () {
                    var b, c, d = this;
                    if (this.options.multiple || ("undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = b = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple"))return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
                    if (!this.options.multiple)return g.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
                    this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof b && a('input[name="' + b + '"]').each(function () {
                        a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(d.options.namespace + "multiple", d.options.multiple)
                    });
                    for (var e = this._findRelatedMultiple(), f = 0; f < e.length; f++)if (c = a(e.get(f)).data("Parsley"), "undefined" != typeof c) {
                        this.$element.data("ParsleyFieldMultiple") || c.addElement(this.$element);
                        break
                    }
                    return this.bind("parsleyField", !0), c || this.bind("parsleyFieldMultiple")
                }, bind: function (b, c) {
                    var d;
                    switch (b) {
                        case"parsleyForm":
                            d = a.extend(new m(this.$element, this.domOptions, this.options), window.ParsleyExtend)._bindFields();
                            break;
                        case"parsleyField":
                            d = a.extend(new o(this.$element, this.domOptions, this.options, this.parent), window.ParsleyExtend);
                            break;
                        case"parsleyFieldMultiple":
                            d = a.extend(new o(this.$element, this.domOptions, this.options, this.parent), new p, window.ParsleyExtend)._init();
                            break;
                        default:
                            throw new Error(b + "is not a supported Parsley type")
                    }
                    return this.options.multiple && g.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof c ? (this.$element.data("ParsleyFieldMultiple", d), d) : (this.$element.data("Parsley", d), d._trigger("init"), d)
                }
            };
            var r = a({}), s = function () {
                g.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
            }, t = "parsley:";
            a.listen = function (a, b) {
                var e;
                if (s(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (e = arguments[1], b = arguments[2]), "function" != typeof arguments[1])throw new Error("Wrong parameters");
                window.Parsley.on(d(a), c(b, e))
            }, a.listenTo = function (a, b, e) {
                if (s(), !(a instanceof o || a instanceof m))throw new Error("Must give Parsley instance");
                if ("string" != typeof b || "function" != typeof e)throw new Error("Wrong parameters");
                a.on(d(b), c(e))
            }, a.unsubscribe = function (a, b) {
                if (s(), "string" != typeof a || "function" != typeof b)throw new Error("Wrong arguments");
                window.Parsley.off(d(a), b.parsleyAdaptedCallback)
            }, a.unsubscribeTo = function (a, b) {
                if (s(), !(a instanceof o || a instanceof m))throw new Error("Must give Parsley instance");
                a.off(d(b))
            }, a.unsubscribeAll = function (b) {
                s(), window.Parsley.off(d(b)), a("form,input,textarea,select").each(function () {
                    var c = a(this).data("Parsley");
                    c && c.off(d(b))
                })
            }, a.emit = function (a, b) {
                s();
                var c = b instanceof o || b instanceof m, e = Array.prototype.slice.call(arguments, c ? 2 : 1);
                e.unshift(d(a)), c || (b = window.Parsley), b.trigger.apply(b, e)
            }, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = jQuery.extend(window.ParsleyConfig.i18n.en || {}, {
                defaultMessage: "This value seems to be invalid.",
                type: {
                    email: "This value should be a valid email.",
                    url: "This value should be a valid url.",
                    number: "This value should be a valid number.",
                    integer: "This value should be a valid integer.",
                    digits: "This value should be digits.",
                    alphanum: "This value should be alphanumeric."
                },
                notblank: "This value should not be blank.",
                required: "This value is required.",
                pattern: "This value seems to be invalid.",
                min: "This value should be greater than or equal to %s.",
                max: "This value should be lower than or equal to %s.",
                range: "This value should be between %s and %s.",
                minlength: "This value is too short. It should have %s characters or more.",
                maxlength: "This value is too long. It should have %s characters or fewer.",
                length: "This value length is invalid. It should be between %s and %s characters long.",
                mincheck: "You must select at least %s choices.",
                maxcheck: "You must select %s choices or fewer.",
                check: "You must select between %s and %s choices.",
                equalto: "This value should be the same."
            }), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
            var u = a.extend(new i, {
                $element: a(document),
                actualizeOptions: null,
                _resetOptions: null,
                Factory: q,
                version: "2.1.3"
            });
            return a.extend(o.prototype, i.prototype), a.extend(m.prototype, i.prototype), a.extend(q.prototype, i.prototype), a.fn.parsley = a.fn.psly = function (b) {
                if (this.length > 1) {
                    var c = [];
                    return this.each(function () {
                        c.push(a(this).parsley(b))
                    }), c
                }
                return a(this).length ? new q(this, b) : void g.warn("You must bind Parsley on an existing element.")
            }, "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), u.options = a.extend(g.objectCreate(h), window.ParsleyConfig), window.ParsleyConfig = u.options, window.Parsley = window.psly = u, window.ParsleyUtils = g, window.ParsleyValidator = new k(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), window.ParsleyUI = "function" == typeof window.ParsleyConfig.ParsleyUI ? (new window.ParsleyConfig.ParsleyUI).listen() : (new l).listen(), !1 !== window.ParsleyConfig.autoBind && a(function () {
                a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
            }), window.Parsley
        })
    }, {"./../../jquery/dist/jquery.js": 1}],
    5: [function (a, b, c) {
        !function (a) {
            "use strict";
            function b() {
            }

            function c() {
                try {
                    return document.activeElement
                } catch (a) {
                }
            }

            function d(a, b) {
                for (var c = 0, d = a.length; c < d; c++)if (a[c] === b)return !0;
                return !1
            }

            function e(a, b, c) {
                return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0
            }

            function f(a, b) {
                var c;
                a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b))
            }

            function g(a, b) {
                try {
                    return a.type = b, !0
                } catch (a) {
                    return !1
                }
            }

            function h(a, b) {
                if (a && a.getAttribute(B))b(a); else for (var c, d = a ? a.getElementsByTagName("input") : N, e = a ? a.getElementsByTagName("textarea") : O, f = d ? d.length : 0, g = e ? e.length : 0, h = f + g, i = 0; i < h; i++)c = i < f ? d[i] : e[i - f], b(c)
            }

            function i(a) {
                h(a, k)
            }

            function j(a) {
                h(a, l)
            }

            function k(a, b) {
                var c = !!b && a.value !== b, d = a.value === a.getAttribute(B);
                if ((c || d) && "true" === a.getAttribute(C)) {
                    a.removeAttribute(C), a.value = a.value.replace(a.getAttribute(B), ""), a.className = a.className.replace(A, "");
                    var e = a.getAttribute(I);
                    parseInt(e, 10) >= 0 && (a.setAttribute("maxLength", e), a.removeAttribute(I));
                    var f = a.getAttribute(D);
                    return f && (a.type = f), !0
                }
                return !1
            }

            function l(a) {
                var b = a.getAttribute(B);
                if ("" === a.value && b) {
                    a.setAttribute(C, "true"), a.value = b, a.className += " " + z;
                    var c = a.getAttribute(I);
                    c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength"));
                    var d = a.getAttribute(D);
                    return d ? a.type = "text" : "password" === a.type && g(a, "text") && a.setAttribute(D, "password"), !0
                }
                return !1
            }

            function m(a) {
                return function () {
                    P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) ? f(a, 0) : k(a)
                }
            }

            function n(a) {
                return function () {
                    l(a)
                }
            }

            function o(a) {
                return function () {
                    i(a)
                }
            }

            function p(a) {
                return function (b) {
                    if (v = a.value, "true" === a.getAttribute(C) && v === a.getAttribute(B) && d(x, b.keyCode))return b.preventDefault && b.preventDefault(), !1
                }
            }

            function q(a) {
                return function () {
                    k(a, v), "" === a.value && (a.blur(), f(a, 0))
                }
            }

            function r(a) {
                return function () {
                    a === c() && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) && f(a, 0)
                }
            }

            function s(a) {
                var b = a.form;
                b && "string" == typeof b && (b = document.getElementById(b), b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))), e(a, "focus", m(a)), e(a, "blur", n(a)), P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))), a.setAttribute(F, "true"), a.setAttribute(B, T), (P || a !== c()) && l(a)
            }

            var t = document.createElement("input"), u = void 0 !== t.placeholder;
            if (a.Placeholders = {nativeSupport: u, disable: u ? b : i, enable: u ? b : j}, !u) {
                var v, w = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], y = "#ccc", z = "placeholdersjs", A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"), B = "data-placeholder-value", C = "data-placeholder-active", D = "data-placeholder-type", E = "data-placeholder-submit", F = "data-placeholder-bound", G = "data-placeholder-focus", H = "data-placeholder-live", I = "data-placeholder-maxlength", J = 100, K = document.getElementsByTagName("head")[0], L = document.documentElement, M = a.Placeholders, N = document.getElementsByTagName("input"), O = document.getElementsByTagName("textarea"), P = "false" === L.getAttribute(G), Q = "false" !== L.getAttribute(H), R = document.createElement("style");
                R.type = "text/css";
                var S = document.createTextNode("." + z + " {color:" + y + ";}");
                R.styleSheet ? R.styleSheet.cssText = S.nodeValue : R.appendChild(S), K.insertBefore(R, K.firstChild);
                for (var T, U, V = 0, W = N.length + O.length; V < W; V++)U = V < N.length ? N[V] : O[V - N.length], T = U.attributes.placeholder, T && (T = T.nodeValue, T && d(w, U.type) && s(U));
                var X = setInterval(function () {
                    for (var a = 0, b = N.length + O.length; a < b; a++)U = a < N.length ? N[a] : O[a - N.length], T = U.attributes.placeholder, T ? (T = T.nodeValue, T && d(w, U.type) && (U.getAttribute(F) || s(U), (T !== U.getAttribute(B) || "password" === U.type && !U.getAttribute(D)) && ("password" === U.type && !U.getAttribute(D) && g(U, "text") && U.setAttribute(D, "password"), U.value === U.getAttribute(B) && (U.value = T), U.setAttribute(B, T)))) : U.getAttribute(C) && (k(U), U.removeAttribute(B));
                    Q || clearInterval(X)
                }, J);
                e(a, "beforeunload", function () {
                    M.disable()
                })
            }
        }(this)
    }, {}],
    6: [function (a, b, c) {
        !function (a, d) {
            "function" == typeof define && define.amd ? define("sifter", d) : "object" == typeof c ? b.exports = d() : a.Sifter = d()
        }(this, function () {
            var a = function (a, b) {
                this.items = a, this.settings = b || {diacritics: !0}
            };
            a.prototype.tokenize = function (a) {
                if (a = d(String(a || "").toLowerCase()), !a || !a.length)return [];
                var b, c, f, h, i = [], j = a.split(/ +/);
                for (b = 0, c = j.length; b < c; b++) {
                    if (f = e(j[b]), this.settings.diacritics)for (h in g)g.hasOwnProperty(h) && (f = f.replace(new RegExp(h, "g"), g[h]));
                    i.push({string: j[b], regex: new RegExp(f, "i")})
                }
                return i
            }, a.prototype.iterator = function (a, b) {
                var c;
                c = f(a) ? Array.prototype.forEach || function (a) {
                    for (var b = 0, c = this.length; b < c; b++)a(this[b], b, this)
                } : function (a) {
                    for (var b in this)this.hasOwnProperty(b) && a(this[b], b, this)
                }, c.apply(a, [b])
            }, a.prototype.getScoreFunction = function (a, b) {
                var c, d, e, f;
                c = this, a = c.prepareSearch(a, b), e = a.tokens, d = a.options.fields, f = e.length;
                var g = function (a, b) {
                    var c, d;
                    return a ? (a = String(a || ""), d = a.search(b.regex), d === -1 ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0
                }, h = function () {
                    var a = d.length;
                    return a ? 1 === a ? function (a, b) {
                        return g(b[d[0]], a)
                    } : function (b, c) {
                        for (var e = 0, f = 0; e < a; e++)f += g(c[d[e]], b);
                        return f / a
                    } : function () {
                        return 0
                    }
                }();
                return f ? 1 === f ? function (a) {
                    return h(e[0], a)
                } : "and" === a.options.conjunction ? function (a) {
                    for (var b, c = 0, d = 0; c < f; c++) {
                        if (b = h(e[c], a), b <= 0)return 0;
                        d += b
                    }
                    return d / f
                } : function (a) {
                    for (var b = 0, c = 0; b < f; b++)c += h(e[b], a);
                    return c / f
                } : function () {
                    return 0
                }
            }, a.prototype.getSortFunction = function (a, c) {
                var d, e, f, g, h, i, j, k, l, m, n;
                if (f = this, a = f.prepareSearch(a, c), n = !a.query && c.sort_empty || c.sort, l = function (a, b) {
                        return "$score" === a ? b.score : f.items[b.id][a]
                    }, h = [], n)for (d = 0, e = n.length; d < e; d++)(a.query || "$score" !== n[d].field) && h.push(n[d]);
                if (a.query) {
                    for (m = !0, d = 0, e = h.length; d < e; d++)if ("$score" === h[d].field) {
                        m = !1;
                        break
                    }
                    m && h.unshift({field: "$score", direction: "desc"})
                } else for (d = 0, e = h.length; d < e; d++)if ("$score" === h[d].field) {
                    h.splice(d, 1);
                    break
                }
                for (k = [], d = 0, e = h.length; d < e; d++)k.push("desc" === h[d].direction ? -1 : 1);
                return i = h.length, i ? 1 === i ? (g = h[0].field, j = k[0], function (a, c) {
                    return j * b(l(g, a), l(g, c))
                }) : function (a, c) {
                    var d, e, f;
                    for (d = 0; d < i; d++)if (f = h[d].field, e = k[d] * b(l(f, a), l(f, c)))return e;
                    return 0
                } : null
            }, a.prototype.prepareSearch = function (a, b) {
                if ("object" == typeof a)return a;
                b = c({}, b);
                var d = b.fields, e = b.sort, g = b.sort_empty;
                return d && !f(d) && (b.fields = [d]), e && !f(e) && (b.sort = [e]), g && !f(g) && (b.sort_empty = [g]), {
                    options: b,
                    query: String(a || "").toLowerCase(),
                    tokens: this.tokenize(a),
                    total: 0,
                    items: []
                }
            }, a.prototype.search = function (a, b) {
                var c, d, e, f, g = this;
                return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function (a, e) {
                    c = f(a), (b.filter === !1 || c > 0) && d.items.push({score: c, id: e})
                }) : g.iterator(g.items, function (a, b) {
                    d.items.push({score: 1, id: b})
                }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d
            };
            var b = function (a, b) {
                return "number" == typeof a && "number" == typeof b ? a > b ? 1 : a < b ? -1 : 0 : (a = h(String(a || "")), b = h(String(b || "")), a > b ? 1 : b > a ? -1 : 0)
            }, c = function (a, b) {
                var c, d, e, f;
                for (c = 1, d = arguments.length; c < d; c++)if (f = arguments[c])for (e in f)f.hasOwnProperty(e) && (a[e] = f[e]);
                return a
            }, d = function (a) {
                return (a + "").replace(/^\s+|\s+$|/g, "")
            }, e = function (a) {
                return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            }, f = Array.isArray || $ && $.isArray || function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }, g = {
                a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
                c: "[cÇçćĆčČ]",
                d: "[dđĐďĎ]",
                e: "[eÈÉÊËèéêëěĚĒēęĘ]",
                i: "[iÌÍÎÏìíîïĪī]",
                l: "[lłŁ]",
                n: "[nÑñňŇńŃ]",
                o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
                r: "[rřŘ]",
                s: "[sŠšśŚ]",
                t: "[tťŤ]",
                u: "[uÙÚÛÜùúûüůŮŪū]",
                y: "[yŸÿýÝ]",
                z: "[zŽžżŻźŹ]"
            }, h = function () {
                var a, b, c, d, e = "", f = {};
                for (c in g)if (g.hasOwnProperty(c))for (d = g[c].substring(2, g[c].length - 1), e += d, a = 0, b = d.length; a < b; a++)f[d.charAt(a)] = c;
                var h = new RegExp("[" + e + "]", "g");
                return function (a) {
                    return a.replace(h, function (a) {
                        return f[a]
                    }).toLowerCase()
                }
            }();
            return a
        }), function (a, d) {
            "function" == typeof define && define.amd ? define("microplugin", d) : "object" == typeof c ? b.exports = d() : a.MicroPlugin = d()
        }(this, function () {
            var a = {};
            a.mixin = function (a) {
                a.plugins = {}, a.prototype.initializePlugins = function (a) {
                    var c, d, e, f = this, g = [];
                    if (f.plugins = {
                            names: [],
                            settings: {},
                            requested: {},
                            loaded: {}
                        }, b.isArray(a))for (c = 0, d = a.length; c < d; c++)"string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name)); else if (a)for (e in a)a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
                    for (; g.length;)f.require(g.shift())
                }, a.prototype.loadPlugin = function (b) {
                    var c = this, d = c.plugins, e = a.plugins[b];
                    if (!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "' + b + '" plugin');
                    d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b)
                }, a.prototype.require = function (a) {
                    var b = this, c = b.plugins;
                    if (!b.plugins.loaded.hasOwnProperty(a)) {
                        if (c.requested[a])throw new Error('Plugin has circular dependency ("' + a + '")');
                        b.loadPlugin(a)
                    }
                    return c.loaded[a]
                }, a.define = function (b, c) {
                    a.plugins[b] = {name: b, fn: c}
                }
            };
            var b = {
                isArray: Array.isArray || function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }
            };
            return a
        }), function (d, e) {
            "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], e) : "object" == typeof c ? b.exports = e(a("./../../../../jquery/dist/jquery.js"), a("./../../../../sifter/sifter.js"), a("./../../../../microplugin/src/microplugin.js")) : d.Selectize = e(d.jQuery, d.Sifter, d.MicroPlugin)
        }(this, function (a, b, c) {
            "use strict";
            var d = function (a, b) {
                if ("string" != typeof b || b.length) {
                    var c = "string" == typeof b ? new RegExp(b, "i") : b, d = function (a) {
                        var b = 0;
                        if (3 === a.nodeType) {
                            var e = a.data.search(c);
                            if (e >= 0 && a.data.length > 0) {
                                var f = a.data.match(c), g = document.createElement("span");
                                g.className = "highlight";
                                var h = a.splitText(e), i = (h.splitText(f[0].length), h.cloneNode(!0));
                                g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1
                            }
                        } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName))for (var j = 0; j < a.childNodes.length; ++j)j += d(a.childNodes[j]);
                        return b
                    };
                    return a.each(function () {
                        d(this)
                    })
                }
            }, e = function () {
            };
            e.prototype = {
                on: function (a, b) {
                    this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b)
                }, off: function (a, b) {
                    var c = arguments.length;
                    return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void(a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)))
                }, trigger: function (a) {
                    if (this._events = this._events || {}, a in this._events != !1)for (var b = 0; b < this._events[a].length; b++)this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            }, e.mixin = function (a) {
                for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++)a.prototype[b[c]] = e.prototype[b[c]]
            };
            var f = /Mac/.test(navigator.userAgent), g = 65, h = 13, i = 27, j = 37, k = 38, l = 80, m = 39, n = 40, o = 78, p = 8, q = 46, r = 16, s = f ? 91 : 17, t = f ? 18 : 17, u = 9, v = 1, w = 2, x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("form").validity, y = function (a) {
                return "undefined" != typeof a
            }, z = function (a) {
                return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + ""
            }, A = function (a) {
                return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }, B = function (a) {
                return (a + "").replace(/\$/g, "$$$$")
            }, C = {};
            C.before = function (a, b, c) {
                var d = a[b];
                a[b] = function () {
                    return c.apply(a, arguments), d.apply(a, arguments)
                }
            }, C.after = function (a, b, c) {
                var d = a[b];
                a[b] = function () {
                    var b = d.apply(a, arguments);
                    return c.apply(a, arguments), b
                }
            };
            var D = function (a) {
                var b = !1;
                return function () {
                    b || (b = !0, a.apply(this, arguments))
                }
            }, E = function (a, b) {
                var c;
                return function () {
                    var d = this, e = arguments;
                    window.clearTimeout(c), c = window.setTimeout(function () {
                        a.apply(d, e)
                    }, b)
                }
            }, F = function (a, b, c) {
                var d, e = a.trigger, f = {};
                a.trigger = function () {
                    var c = arguments[0];
                    return b.indexOf(c) === -1 ? e.apply(a, arguments) : void(f[c] = arguments)
                }, c.apply(a, []), a.trigger = e;
                for (d in f)f.hasOwnProperty(d) && e.apply(a, f[d])
            }, G = function (a, b, c, d) {
                a.on(b, c, function (b) {
                    for (var c = b.target; c && c.parentNode !== a[0];)c = c.parentNode;
                    return b.currentTarget = c, d.apply(this, [b])
                })
            }, H = function (a) {
                var b = {};
                if ("selectionStart" in a)b.start = a.selectionStart, b.length = a.selectionEnd - b.start; else if (document.selection) {
                    a.focus();
                    var c = document.selection.createRange(), d = document.selection.createRange().text.length;
                    c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d
                }
                return b
            }, I = function (a, b, c) {
                var d, e, f = {};
                if (c)for (d = 0, e = c.length; d < e; d++)f[c[d]] = a.css(c[d]); else f = a.css();
                b.css(f)
            }, J = function (b, c) {
                if (!b)return 0;
                var d = a("<test>").css({
                    position: "absolute",
                    top: -99999,
                    left: -99999,
                    width: "auto",
                    padding: 0,
                    whiteSpace: "pre"
                }).text(b).appendTo("body");
                I(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                var e = d.width();
                return d.remove(), e
            }, K = function (a) {
                var b = null, c = function (c, d) {
                    var e, f, g, h, i, j, k, l;
                    c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || 32 === f, f === q || f === p ? (l = H(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = J(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")))
                };
                a.on("keydown keyup update blur", c), c()
            }, L = function (c, d) {
                var e, f, g, h, i = this;
                h = c[0], h.selectize = i;
                var j = window.getComputedStyle && window.getComputedStyle(h, null);
                if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, {
                        order: 0,
                        settings: d,
                        $input: c,
                        tabIndex: c.attr("tabindex") || "",
                        tagType: "select" === h.tagName.toLowerCase() ? v : w,
                        rtl: /rtl/i.test(g),
                        eventNS: ".selectize" + ++L.count,
                        highlightedValue: null,
                        isOpen: !1,
                        isDisabled: !1,
                        isRequired: c.is("[required]"),
                        isInvalid: !1,
                        isLocked: !1,
                        isFocused: !1,
                        isInputHidden: !1,
                        isSetup: !1,
                        isShiftDown: !1,
                        isCmdDown: !1,
                        isCtrlDown: !1,
                        ignoreFocus: !1,
                        ignoreBlur: !1,
                        ignoreHover: !1,
                        hasOptions: !1,
                        currentResults: null,
                        lastValue: "",
                        caretPos: 0,
                        loading: 0,
                        loadedSearches: {},
                        $activeOption: null,
                        $activeItems: [],
                        optgroups: {},
                        options: {},
                        userOptions: {},
                        items: [],
                        renderCache: {},
                        onSearchChange: null === d.loadThrottle ? i.onSearchChange : E(i.onSearchChange, d.loadThrottle)
                    }), i.sifter = new b(this.options, {diacritics: d.diacritics}), i.settings.options) {
                    for (e = 0, f = i.settings.options.length; e < f; e++)i.registerOption(i.settings.options[e]);
                    delete i.settings.options
                }
                if (i.settings.optgroups) {
                    for (e = 0, f = i.settings.optgroups.length; e < f; e++)i.registerOptionGroup(i.settings.optgroups[e]);
                    delete i.settings.optgroups
                }
                i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup()
            };
            return e.mixin(L), c.mixin(L), a.extend(L.prototype, {
                setup: function () {
                    var b, c, d, e, g, h, i, j, k, l = this, m = l.settings, n = l.eventNS, o = a(window), p = a(document), q = l.$input;
                    if (i = l.settings.mode, j = q.attr("class") || "", b = a("<div>").addClass(m.wrapperClass).addClass(j).addClass(i), c = a("<div>").addClass(m.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", q.is(":disabled") ? "-1" : l.tabIndex), h = a(m.dropdownParent || b), e = a("<div>").addClass(m.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(m.dropdownContentClass).appendTo(e), l.settings.copyClassesToDropdown && e.addClass(j), b.css({width: q[0].style.width}), l.plugins.names.length && (k = "plugin-" + l.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === m.maxItems || m.maxItems > 1) && l.tagType === v && q.attr("multiple", "multiple"), l.settings.placeholder && d.attr("placeholder", m.placeholder), !l.settings.splitOn && l.settings.delimiter) {
                        var u = l.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                        l.settings.splitOn = new RegExp("\\s*" + u + "+\\s*")
                    }
                    q.attr("autocorrect") && d.attr("autocorrect", q.attr("autocorrect")), q.attr("autocapitalize") && d.attr("autocapitalize", q.attr("autocapitalize")), l.$wrapper = b, l.$control = c, l.$control_input = d, l.$dropdown = e, l.$dropdown_content = g, e.on("mouseenter", "[data-selectable]", function () {
                        return l.onOptionHover.apply(l, arguments)
                    }), e.on("mousedown click", "[data-selectable]", function () {
                        return l.onOptionSelect.apply(l, arguments)
                    }), G(c, "mousedown", "*:not(input)", function () {
                        return l.onItemSelect.apply(l, arguments)
                    }), K(d), c.on({
                        mousedown: function () {
                            return l.onMouseDown.apply(l, arguments)
                        }, click: function () {
                            return l.onClick.apply(l, arguments)
                        }
                    }), d.on({
                        mousedown: function (a) {
                            a.stopPropagation()
                        }, keydown: function () {
                            return l.onKeyDown.apply(l, arguments)
                        }, keyup: function () {
                            return l.onKeyUp.apply(l, arguments)
                        }, keypress: function () {
                            return l.onKeyPress.apply(l, arguments)
                        }, resize: function () {
                            l.positionDropdown.apply(l, [])
                        }, blur: function () {
                            return l.onBlur.apply(l, arguments)
                        }, focus: function () {
                            return l.ignoreBlur = !1, l.onFocus.apply(l, arguments)
                        }, paste: function () {
                            return l.onPaste.apply(l, arguments)
                        }
                    }), p.on("keydown" + n, function (a) {
                        l.isCmdDown = a[f ? "metaKey" : "ctrlKey"], l.isCtrlDown = a[f ? "altKey" : "ctrlKey"], l.isShiftDown = a.shiftKey
                    }), p.on("keyup" + n, function (a) {
                        a.keyCode === t && (l.isCtrlDown = !1), a.keyCode === r && (l.isShiftDown = !1), a.keyCode === s && (l.isCmdDown = !1)
                    }), p.on("mousedown" + n, function (a) {
                        if (l.isFocused) {
                            if (a.target === l.$dropdown[0] || a.target.parentNode === l.$dropdown[0])return !1;
                            l.$control.has(a.target).length || a.target === l.$control[0] || l.blur(a.target)
                        }
                    }), o.on(["scroll" + n, "resize" + n].join(" "), function () {
                        l.isOpen && l.positionDropdown.apply(l, arguments)
                    }), o.on("mousemove" + n, function () {
                        l.ignoreHover = !1
                    }), this.revertSettings = {
                        $children: q.children().detach(),
                        tabindex: q.attr("tabindex")
                    }, q.attr("tabindex", -1).hide().after(l.$wrapper), a.isArray(m.items) && (l.setValue(m.items), delete m.items), x && q.on("invalid" + n, function (a) {
                        a.preventDefault(), l.isInvalid = !0, l.refreshState()
                    }), l.updateOriginalInput(), l.refreshItems(), l.refreshState(), l.updatePlaceholder(), l.isSetup = !0, q.is(":disabled") && l.disable(), l.on("change", this.onChange), q.data("selectize", l), q.addClass("selectized"), l.trigger("initialize"), m.preload === !0 && l.onSearchChange("")
                }, setupTemplates: function () {
                    var b = this, c = b.settings.labelField, d = b.settings.optgroupLabelField, e = {
                        optgroup: function (a) {
                            return '<div class="optgroup">' + a.html + "</div>"
                        }, optgroup_header: function (a, b) {
                            return '<div class="optgroup-header">' + b(a[d]) + "</div>"
                        }, option: function (a, b) {
                            return '<div class="option">' + b(a[c]) + "</div>"
                        }, item: function (a, b) {
                            return '<div class="item">' + b(a[c]) + "</div>"
                        }, option_create: function (a, b) {
                            return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"
                        }
                    };
                    b.settings.render = a.extend({}, e, b.settings.render)
                }, setupCallbacks: function () {
                    var a, b, c = {
                        initialize: "onInitialize",
                        change: "onChange",
                        item_add: "onItemAdd",
                        item_remove: "onItemRemove",
                        clear: "onClear",
                        option_add: "onOptionAdd",
                        option_remove: "onOptionRemove",
                        option_clear: "onOptionClear",
                        optgroup_add: "onOptionGroupAdd",
                        optgroup_remove: "onOptionGroupRemove",
                        optgroup_clear: "onOptionGroupClear",
                        dropdown_open: "onDropdownOpen",
                        dropdown_close: "onDropdownClose",
                        type: "onType",
                        load: "onLoad",
                        focus: "onFocus",
                        blur: "onBlur"
                    };
                    for (a in c)c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b))
                }, onClick: function (a) {
                    var b = this;
                    b.isFocused || (b.focus(), a.preventDefault())
                }, onMouseDown: function (b) {
                    var c = this, d = b.isDefaultPrevented();
                    a(b.target);
                    if (c.isFocused) {
                        if (b.target !== c.$control_input[0])return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1
                    } else d || window.setTimeout(function () {
                        c.focus()
                    }, 0)
                }, onChange: function () {
                    this.$input.trigger("change")
                }, onPaste: function (b) {
                    var c = this;
                    c.isFull() || c.isInputHidden || c.isLocked ? b.preventDefault() : c.settings.splitOn && setTimeout(function () {
                        for (var b = a.trim(c.$control_input.val() || "").split(c.settings.splitOn), d = 0, e = b.length; d < e; d++)c.createItem(b[d])
                    }, 0)
                }, onKeyPress: function (a) {
                    if (this.isLocked)return a && a.preventDefault();
                    var b = String.fromCharCode(a.keyCode || a.which);
                    return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0
                }, onKeyDown: function (a) {
                    var b = (a.target === this.$control_input[0], this);
                    if (b.isLocked)return void(a.keyCode !== u && a.preventDefault());
                    switch (a.keyCode) {
                        case g:
                            if (b.isCmdDown)return void b.selectAll();
                            break;
                        case i:
                            return void(b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
                        case o:
                            if (!a.ctrlKey || a.altKey)break;
                        case n:
                            if (!b.isOpen && b.hasOptions)b.open(); else if (b.$activeOption) {
                                b.ignoreHover = !0;
                                var c = b.getAdjacentOption(b.$activeOption, 1);
                                c.length && b.setActiveOption(c, !0, !0)
                            }
                            return void a.preventDefault();
                        case l:
                            if (!a.ctrlKey || a.altKey)break;
                        case k:
                            if (b.$activeOption) {
                                b.ignoreHover = !0;
                                var d = b.getAdjacentOption(b.$activeOption, -1);
                                d.length && b.setActiveOption(d, !0, !0)
                            }
                            return void a.preventDefault();
                        case h:
                            return void(b.isOpen && b.$activeOption && (b.onOptionSelect({currentTarget: b.$activeOption}), a.preventDefault()));
                        case j:
                            return void b.advanceSelection(-1, a);
                        case m:
                            return void b.advanceSelection(1, a);
                        case u:
                            return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({currentTarget: b.$activeOption}), b.isFull() || a.preventDefault()), void(b.settings.create && b.createItem() && a.preventDefault());
                        case p:
                        case q:
                            return void b.deleteSelection(a)
                    }
                    return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault()
                }, onKeyUp: function (a) {
                    var b = this;
                    if (b.isLocked)return a && a.preventDefault();
                    var c = b.$control_input.val() || "";
                    b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c))
                }, onSearchChange: function (a) {
                    var b = this, c = b.settings.load;
                    c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function (d) {
                        c.apply(b, [a, d])
                    })))
                }, onFocus: function (a) {
                    var b = this, c = b.isFocused;
                    return b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void(b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()))
                }, onBlur: function (a, b) {
                    var c = this;
                    if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
                        if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0])return c.ignoreBlur = !0, void c.onFocus(a);
                        var d = function () {
                            c.close(), c.setTextboxValue(""), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), (b || document.body).focus(), c.ignoreFocus = !1, c.trigger("blur")
                        };
                        c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d()
                    }
                }, onOptionHover: function (a) {
                    this.ignoreHover || this.setActiveOption(a.currentTarget, !1)
                }, onOptionSelect: function (b) {
                    var c, d, e = this;
                    b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function () {
                        e.settings.closeAfterSelect && e.close()
                    }) : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))))
                }, onItemSelect: function (a) {
                    var b = this;
                    b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a))
                }, load: function (a) {
                    var b = this, c = b.$wrapper.addClass(b.settings.loadingClass);
                    b.loading++, a.apply(b, [function (a) {
                        b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a)
                    }])
                }, setTextboxValue: function (a) {
                    var b = this.$control_input, c = b.val() !== a;
                    c && (b.val(a).triggerHandler("update"), this.lastValue = a)
                }, getValue: function () {
                    return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
                }, setValue: function (a, b) {
                    var c = b ? [] : ["change"];
                    F(this, c, function () {
                        this.clear(b), this.addItems(a, b)
                    })
                }, setActiveItem: function (b, c) {
                    var d, e, f, g, h, i, j, k, l = this;
                    if ("single" !== l.settings.mode) {
                        if (b = a(b), !b.length)return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void(l.isFocused && l.showInput());
                        if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
                            for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; e <= h; e++)i = l.$control[0].childNodes[e], l.$activeItems.indexOf(i) === -1 && (a(i).addClass("active"), l.$activeItems.push(i));
                            c.preventDefault()
                        } else"mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
                        l.hideInput(), this.isFocused || l.focus()
                    }
                }, setActiveOption: function (b, c, d) {
                    var e, f, g, h, i, j = this;
                    j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, b = a(b), b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({scrollTop: i}, d ? j.settings.scrollDuration : 0) : g < c && j.$dropdown_content.stop().animate({scrollTop: h}, d ? j.settings.scrollDuration : 0)))
                }, selectAll: function () {
                    var a = this;
                    "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus())
                }, hideInput: function () {
                    var a = this;
                    a.setTextboxValue(""), a.$control_input.css({
                        opacity: 0,
                        position: "absolute",
                        left: a.rtl ? 1e4 : -1e4
                    }), a.isInputHidden = !0
                }, showInput: function () {
                    this.$control_input.css({opacity: 1, position: "relative", left: 0}), this.isInputHidden = !1
                }, focus: function () {
                    var a = this;
                    a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function () {
                        a.ignoreFocus = !1, a.onFocus()
                    }, 0))
                }, blur: function (a) {
                    this.$control_input[0].blur(), this.onBlur(null, a)
                }, getScoreFunction: function (a) {
                    return this.sifter.getScoreFunction(a, this.getSearchOptions())
                }, getSearchOptions: function () {
                    var a = this.settings, b = a.sortField;
                    return "string" == typeof b && (b = [{field: b}]), {
                        fields: a.searchField,
                        conjunction: a.searchConjunction,
                        sort: b
                    }
                }, search: function (b) {
                    var c, d, e, f = this, g = f.settings, h = this.getSearchOptions();
                    if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');
                    if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {score: e})), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected)for (c = d.items.length - 1; c >= 0; c--)f.items.indexOf(z(d.items[c].id)) !== -1 && d.items.splice(c, 1);
                    return d
                }, refreshOptions: function (b) {
                    var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
                    "undefined" == typeof b && (b = !0);
                    var t = this, u = a.trim(t.$control_input.val()), v = t.search(u), w = t.$dropdown_content, x = t.$activeOption && z(t.$activeOption.attr("data-value"));
                    for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; c < g; c++)for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [l], e = 0, f = m && m.length; e < f; e++)l = m[e], t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = [], i.push(l)), h[l].push(k);
                    for (this.settings.lockOptgroupOrder && i.sort(function (a, b) {
                        var c = t.optgroups[a].$order || 0, d = t.optgroups[b].$order || 0;
                        return c - d
                    }), n = [], c = 0, g = i.length; c < g; c++)l = i[c], t.optgroups.hasOwnProperty(l) && h[l].length ? (o = t.render("optgroup_header", t.optgroups[l]) || "", o += h[l].join(""), n.push(t.render("optgroup", a.extend({}, t.optgroups[l], {html: o})))) : n.push(h[l].join(""));
                    if (w.html(n.join("")), t.settings.highlight && v.query.length && v.tokens.length)for (c = 0, g = v.tokens.length; c < g; c++)d(w, v.tokens[c].regex);
                    if (!t.settings.hideSelected)for (c = 0, g = t.items.length; c < g; c++)t.getOption(t.items[c]).addClass("selected");
                    p = t.canCreate(u), p && (w.prepend(t.render("option_create", {input: u})), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close())
                }, addOption: function (b) {
                    var c, d, e, f = this;
                    if (a.isArray(b))for (c = 0, d = b.length; c < d; c++)f.addOption(b[c]); else(e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b))
                }, registerOption: function (a) {
                    var b = z(a[this.settings.valueField]);
                    return !(!b || this.options.hasOwnProperty(b)) && (a.$order = a.$order || ++this.order, this.options[b] = a, b)
                }, registerOptionGroup: function (a) {
                    var b = z(a[this.settings.optgroupValueField]);
                    return !!b && (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b)
                }, addOptionGroup: function (a, b) {
                    b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b)
                }, removeOptionGroup: function (a) {
                    this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a))
                }, clearOptionGroups: function () {
                    this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
                }, updateOption: function (b, c) {
                    var d, e, f, g, h, i, j, k = this;
                    if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
                        if ("string" != typeof f)throw new Error("Value must be set in option data");
                        j = k.options[b].$order, f !== b && (delete k.options[b], g = k.items.indexOf(b), g !== -1 && k.items.splice(g, 1, f)), c.$order = c.$order || j, k.options[f] = c, h = k.renderCache.item, i = k.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), k.items.indexOf(f) !== -1 && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), k.lastQuery = null, k.isOpen && k.refreshOptions(!1)
                    }
                }, removeOption: function (a, b) {
                    var c = this;
                    a = z(a);
                    var d = c.renderCache.item, e = c.renderCache.option;
                    d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b)
                }, clearOptions: function () {
                    var a = this;
                    a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, a.lastQuery = null, a.trigger("option_clear"), a.clear()
                }, getOption: function (a) {
                    return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"))
                }, getAdjacentOption: function (b, c) {
                    var d = this.$dropdown.find("[data-selectable]"), e = d.index(b) + c;
                    return e >= 0 && e < d.length ? d.eq(e) : a()
                }, getElementWithValue: function (b, c) {
                    if (b = z(b), "undefined" != typeof b && null !== b)for (var d = 0, e = c.length; d < e; d++)if (c[d].getAttribute("data-value") === b)return a(c[d]);
                    return a()
                }, getItem: function (a) {
                    return this.getElementWithValue(a, this.$control.children())
                }, addItems: function (b, c) {
                    for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; e < f; e++)this.isPending = e < f - 1, this.addItem(d[e], c)
                }, addItem: function (b, c) {
                    var d = c ? [] : ["change"];
                    F(this, d, function () {
                        var d, e, f, g, h, i = this, j = i.settings.mode;
                        return b = z(b), i.items.indexOf(b) !== -1 ? void("single" === j && i.close()) : void(i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({silent: c})))))
                    })
                }, removeItem: function (a, b) {
                    var c, d, e, f = this;
                    c = "object" == typeof a ? a : f.getItem(a), a = z(c.attr("data-value")), d = f.items.indexOf(a), d !== -1 && (c.remove(), c.hasClass("active") && (e = f.$activeItems.indexOf(c[0]), f.$activeItems.splice(e, 1)), f.items.splice(d, 1), f.lastQuery = null, !f.settings.persist && f.userOptions.hasOwnProperty(a) && f.removeOption(a, b), d < f.caretPos && f.setCaret(f.caretPos - 1), f.refreshState(), f.updatePlaceholder(), f.updateOriginalInput({silent: b}), f.positionDropdown(), f.trigger("item_remove", a, c))
                }, createItem: function (b, c) {
                    var d = this, e = d.caretPos;
                    b = b || a.trim(d.$control_input.val() || "");
                    var f = arguments[arguments.length - 1];
                    if ("function" != typeof f && (f = function () {
                        }), "boolean" != typeof c && (c = !0), !d.canCreate(b))return f(), !1;
                    d.lock();
                    var g = "function" == typeof d.settings.create ? this.settings.create : function (a) {
                        var b = {};
                        return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b
                    }, h = D(function (a) {
                        if (d.unlock(), !a || "object" != typeof a)return f();
                        var b = z(a[d.settings.valueField]);
                        return "string" != typeof b ? f() : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a))
                    }), i = g.apply(this, [b, h]);
                    return "undefined" != typeof i && h(i), !0
                }, refreshItems: function () {
                    this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
                }, refreshState: function () {
                    var a, b = this;
                    b.isRequired && (b.items.length && (b.isInvalid = !1), b.$control_input.prop("required", a)), b.refreshClasses()
                }, refreshClasses: function () {
                    var b = this, c = b.isFull(), d = b.isLocked;
                    b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d)
                }, isFull: function () {
                    return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
                }, updateOriginalInput: function (a) {
                    var b, c, d, e, f = this;
                    if (a = a || {}, f.tagType === v) {
                        for (d = [], b = 0, c = f.items.length; b < c; b++)e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
                        d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'), f.$input.html(d.join(""))
                    } else f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());
                    f.isSetup && (a.silent || f.trigger("change", f.$input.val()))
                }, updatePlaceholder: function () {
                    if (this.settings.placeholder) {
                        var a = this.$control_input;
                        this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", {force: !0})
                    }
                }, open: function () {
                    var a = this;
                    a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({
                        visibility: "hidden",
                        display: "block"
                    }), a.positionDropdown(), a.$dropdown.css({visibility: "visible"}), a.trigger("dropdown_open", a.$dropdown))
                }, close: function () {
                    var a = this, b = a.isOpen;
                    "single" === a.settings.mode && a.items.length && a.hideInput(), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown)
                }, positionDropdown: function () {
                    var a = this.$control, b = "body" === this.settings.dropdownParent ? a.offset() : a.position();
                    b.top += a.outerHeight(!0), this.$dropdown.css({width: a.outerWidth(), top: b.top, left: b.left})
                }, clear: function (a) {
                    var b = this;
                    b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({silent: a}), b.refreshState(), b.showInput(), b.trigger("clear"))
                }, insertAtCaret: function (b) {
                    var c = Math.min(this.caretPos, this.items.length);
                    0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), this.setCaret(c + 1)
                }, deleteSelection: function (b) {
                    var c, d, e, f, g, h, i, j, k, l = this;
                    if (e = b && b.keyCode === p ? -1 : 1, f = H(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
                        for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; c < d; c++)g.push(a(l.$activeItems[c]).attr("data-value"));
                        b && (b.preventDefault(), b.stopPropagation())
                    } else(l.isFocused || "single" === l.settings.mode) && l.items.length && (e < 0 && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
                    if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1)return !1;
                    for ("undefined" != typeof h && l.setCaret(h); g.length;)l.removeItem(g.pop());
                    return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0
                }, advanceSelection: function (a, b) {
                    var c, d, e, f, g, h, i = this;
                    0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = H(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = a < 0 ? 0 === d.start && 0 === d.length : d.start === f, g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))))
                }, advanceCaret: function (a, b) {
                    var c, d, e = this;
                    0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a))
                }, setCaret: function (b) {
                    var c = this;
                    if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
                        var d, e, f, g;
                        for (f = c.$control.children(":not(input)"), d = 0, e = f.length; d < e; d++)g = a(f[d]).detach(), d < b ? c.$control_input.before(g) : c.$control.append(g)
                    }
                    c.caretPos = b
                }, lock: function () {
                    this.close(), this.isLocked = !0, this.refreshState()
                }, unlock: function () {
                    this.isLocked = !1, this.refreshState()
                }, disable: function () {
                    var a = this;
                    a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock()
                }, enable: function () {
                    var a = this;
                    a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock()
                }, destroy: function () {
                    var b = this, c = b.eventNS, d = b.revertSettings;
                    b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex: d.tabindex}).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize
                }, render: function (a, b) {
                    var c, d, e = "", f = !1, g = this, h = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
                    return "option" !== a && "item" !== a || (c = z(b[g.settings.valueField]), f = !!c), f && (y(g.renderCache[a]) || (g.renderCache[a] = {}), g.renderCache[a].hasOwnProperty(c)) ? g.renderCache[a][c] : (e = g.settings.render[a].apply(this, [b, A]), "option" !== a && "option_create" !== a || (e = e.replace(h, "<$1 data-selectable")), "optgroup" === a && (d = b[g.settings.optgroupValueField] || "", e = e.replace(h, '<$1 data-group="' + B(A(d)) + '"')), "option" !== a && "item" !== a || (e = e.replace(h, '<$1 data-value="' + B(A(c || "")) + '"')), f && (g.renderCache[a][c] = e), e)
                }, clearCache: function (a) {
                    var b = this;
                    "undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a]
                }, canCreate: function (a) {
                    var b = this;
                    if (!b.settings.create)return !1;
                    var c = b.settings.createFilter;
                    return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a))
                }
            }), L.count = 0, L.defaults = {
                options: [],
                optgroups: [],
                plugins: [],
                delimiter: ",",
                splitOn: null,
                persist: !0,
                diacritics: !0,
                create: !1,
                createOnBlur: !1,
                createFilter: null,
                highlight: !0,
                openOnFocus: !0,
                maxOptions: 1e3,
                maxItems: null,
                hideSelected: null,
                addPrecedence: !1,
                selectOnTab: !1,
                preload: !1,
                allowEmptyOption: !1,
                closeAfterSelect: !1,
                scrollDuration: 60,
                loadThrottle: 300,
                loadingClass: "loading",
                dataAttr: "data-data",
                optgroupField: "optgroup",
                valueField: "value",
                labelField: "text",
                optgroupLabelField: "label",
                optgroupValueField: "value",
                lockOptgroupOrder: !1,
                sortField: "$order",
                searchField: ["text"],
                searchConjunction: "and",
                mode: null,
                wrapperClass: "selectize-control",
                inputClass: "selectize-input",
                dropdownClass: "selectize-dropdown",
                dropdownContentClass: "selectize-dropdown-content",
                dropdownParent: null,
                copyClassesToDropdown: !0,
                render: {}
            }, a.fn.selectize = function (b) {
                var c = a.fn.selectize.defaults, d = a.extend({}, c, b), e = d.dataAttr, f = d.labelField, g = d.valueField, h = d.optgroupField, i = d.optgroupLabelField, j = d.optgroupValueField, k = function (b, c) {
                    var h, i, j, k, l = b.attr(e);
                    if (l)for (c.options = JSON.parse(l), h = 0, i = c.options.length; h < i; h++)c.items.push(c.options[h][g]); else {
                        var m = a.trim(b.val() || "");
                        if (!d.allowEmptyOption && !m.length)return;
                        for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++)k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
                        c.items = j
                    }
                }, l = function (b, c) {
                    var k, l, m, n, o = c.options, p = {}, q = function (a) {
                        var b = e && a.attr(e);
                        return "string" == typeof b && b.length ? JSON.parse(b) : null
                    }, r = function (b, e) {
                        b = a(b);
                        var i = z(b.attr("value"));
                        if (i || d.allowEmptyOption)if (p.hasOwnProperty(i)) {
                            if (e) {
                                var j = p[i][h];
                                j ? a.isArray(j) ? j.push(e) : p[i][h] = [j, e] : p[i][h] = e
                            }
                        } else {
                            var k = q(b) || {};
                            k[f] = k[f] || b.text(), k[g] = k[g] || i, k[h] = k[h] || e, p[i] = k, o.push(k), b.is(":selected") && c.items.push(i)
                        }
                    }, s = function (b) {
                        var d, e, f, g, h;
                        for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; d < e; d++)r(h[d], f)
                    };
                    for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; k < l; k++)m = n[k].tagName.toLowerCase(), "optgroup" === m ? s(n[k]) : "option" === m && r(n[k])
                };
                return this.each(function () {
                    if (!this.selectize) {
                        var e, f = a(this), g = this.tagName.toLowerCase(), h = f.attr("placeholder") || f.attr("data-placeholder");
                        h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
                        var i = {placeholder: h, options: [], optgroups: [], items: []};
                        "select" === g ? l(f, i) : k(f, i), e = new L(f, a.extend(!0, {}, c, i, b))
                    }
                })
            }, a.fn.selectize.defaults = L.defaults, a.fn.selectize.support = {validity: x}, L.define("drag_drop", function (b) {
                if (!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
                if ("multi" === this.settings.mode) {
                    var c = this;
                    c.lock = function () {
                        var a = c.lock;
                        return function () {
                            var b = c.$control.data("sortable");
                            return b && b.disable(), a.apply(c, arguments)
                        }
                    }(), c.unlock = function () {
                        var a = c.unlock;
                        return function () {
                            var b = c.$control.data("sortable");
                            return b && b.enable(), a.apply(c, arguments)
                        }
                    }(), c.setup = function () {
                        var b = c.setup;
                        return function () {
                            b.apply(this, arguments);
                            var d = c.$control.sortable({
                                items: "[data-value]",
                                forcePlaceholderSize: !0,
                                disabled: c.isLocked,
                                start: function (a, b) {
                                    b.placeholder.css("width", b.helper.css("width")), d.css({overflow: "visible"})
                                },
                                stop: function () {
                                    d.css({overflow: "hidden"});
                                    var b = c.$activeItems ? c.$activeItems.slice() : null, e = [];
                                    d.children("[data-value]").each(function () {
                                        e.push(a(this).attr("data-value"))
                                    }), c.setValue(e), c.setActiveItem(b)
                                }
                            })
                        }
                    }()
                }
            }), L.define("dropdown_header", function (b) {
                var c = this;
                b = a.extend({
                    title: "Untitled",
                    headerClass: "selectize-dropdown-header",
                    titleRowClass: "selectize-dropdown-header-title",
                    labelClass: "selectize-dropdown-header-label",
                    closeClass: "selectize-dropdown-header-close",
                    html: function (a) {
                        return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'
                    }
                }, b), c.setup = function () {
                    var d = c.setup;
                    return function () {
                        d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header)
                    }
                }()
            }), L.define("optgroup_columns", function (b) {
                var c = this;
                b = a.extend({equalizeWidth: !0, equalizeHeight: !0}, b), this.getAdjacentOption = function (b, c) {
                    var d = b.closest("[data-group]").find("[data-selectable]"), e = d.index(b) + c;
                    return e >= 0 && e < d.length ? d.eq(e) : a()
                }, this.onKeyDown = function () {
                    var a = c.onKeyDown;
                    return function (b) {
                        var d, e, f, g;
                        return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void(e.length && this.setActiveOption(e)))
                    }
                }();
                var d = function () {
                    var a, b = d.width, c = document;
                    return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b
                }, e = function () {
                    var e, f, g, h, i, j, k;
                    if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
                        if (b.equalizeHeight) {
                            for (g = 0, e = 0; e < f; e++)g = Math.max(g, k.eq(e).height());
                            k.css({height: g})
                        }
                        b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({width: h}), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({width: i})))
                    }
                };
                (b.equalizeHeight || b.equalizeWidth) && (C.after(this, "positionDropdown", e), C.after(this, "refreshOptions", e))
            }), L.define("remove_button", function (b) {
                if ("single" !== this.settings.mode) {
                    b = a.extend({label: "&times;", title: "Remove", className: "remove", append: !0}, b);
                    var c = this, d = '<a href="javascript:void(0)" class="' + b.className + '" tabindex="-1" title="' + A(b.title) + '">' + b.label + "</a>", e = function (a, b) {
                        var c = a.search(/(<\/[^>]+>\s*)$/);
                        return a.substring(0, c) + b + a.substring(c)
                    };
                    this.setup = function () {
                        var f = c.setup;
                        return function () {
                            if (b.append) {
                                var g = c.settings.render.item;
                                c.settings.render.item = function (a) {
                                    return e(g.apply(this, arguments), d)
                                }
                            }
                            f.apply(this, arguments), this.$control.on("click", "." + b.className, function (b) {
                                if (b.preventDefault(), !c.isLocked) {
                                    var d = a(b.currentTarget).parent();
                                    c.setActiveItem(d), c.deleteSelection() && c.setCaret(c.items.length)
                                }
                            })
                        }
                    }()
                }
            }), L.define("restore_on_backspace", function (a) {
                var b = this;
                a.text = a.text || function (a) {
                        return a[this.settings.labelField]
                    }, this.onKeyDown = function () {
                    var c = b.onKeyDown;
                    return function (b) {
                        var d, e;
                        return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments)
                    }
                }()
            }), L
        })
    }, {
        "./../../../../jquery/dist/jquery.js": 1,
        "./../../../../microplugin/src/microplugin.js": 2,
        "./../../../../sifter/sifter.js": 7
    }],
    7: [function (a, b, c) {
        !function (a, d) {
            "function" == typeof define && define.amd ? define(d) : "object" == typeof c ? b.exports = d() : a.Sifter = d()
        }(this, function () {
            var a = function (a, b) {
                this.items = a, this.settings = b || {diacritics: !0}
            };
            a.prototype.tokenize = function (a) {
                if (a = d(String(a || "").toLowerCase()), !a || !a.length)return [];
                var b, c, f, h, i = [], j = a.split(/ +/);
                for (b = 0, c = j.length; b < c; b++) {
                    if (f = e(j[b]), this.settings.diacritics)for (h in g)g.hasOwnProperty(h) && (f = f.replace(new RegExp(h, "g"), g[h]));
                    i.push({string: j[b], regex: new RegExp(f, "i")})
                }
                return i
            }, a.prototype.iterator = function (a, b) {
                var c;
                c = f(a) ? Array.prototype.forEach || function (a) {
                    for (var b = 0, c = this.length; b < c; b++)a(this[b], b, this)
                } : function (a) {
                    for (var b in this)this.hasOwnProperty(b) && a(this[b], b, this)
                }, c.apply(a, [b])
            }, a.prototype.getScoreFunction = function (a, b) {
                var c, d, e, f;
                c = this, a = c.prepareSearch(a, b), e = a.tokens, d = a.options.fields, f = e.length;
                var g = function (a, b) {
                    var c, d;
                    return a ? (a = String(a || ""), d = a.search(b.regex), d === -1 ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0
                }, h = function () {
                    var a = d.length;
                    return a ? 1 === a ? function (a, b) {
                        return g(b[d[0]], a)
                    } : function (b, c) {
                        for (var e = 0, f = 0; e < a; e++)f += g(c[d[e]], b);
                        return f / a
                    } : function () {
                        return 0
                    }
                }();
                return f ? 1 === f ? function (a) {
                    return h(e[0], a)
                } : "and" === a.options.conjunction ? function (a) {
                    for (var b, c = 0, d = 0; c < f; c++) {
                        if (b = h(e[c], a), b <= 0)return 0;
                        d += b
                    }
                    return d / f
                } : function (a) {
                    for (var b = 0, c = 0; b < f; b++)c += h(e[b], a);
                    return c / f
                } : function () {
                    return 0
                }
            }, a.prototype.getSortFunction = function (a, c) {
                var d, e, f, g, h, i, j, k, l, m, n;
                if (f = this, a = f.prepareSearch(a, c), n = !a.query && c.sort_empty || c.sort, l = function (a, b) {
                        return "$score" === a ? b.score : f.items[b.id][a]
                    }, h = [], n)for (d = 0, e = n.length; d < e; d++)(a.query || "$score" !== n[d].field) && h.push(n[d]);
                if (a.query) {
                    for (m = !0, d = 0, e = h.length; d < e; d++)if ("$score" === h[d].field) {
                        m = !1;
                        break
                    }
                    m && h.unshift({field: "$score", direction: "desc"})
                } else for (d = 0, e = h.length; d < e; d++)if ("$score" === h[d].field) {
                    h.splice(d, 1);
                    break
                }
                for (k = [], d = 0, e = h.length; d < e; d++)k.push("desc" === h[d].direction ? -1 : 1);
                return i = h.length, i ? 1 === i ? (g = h[0].field, j = k[0], function (a, c) {
                    return j * b(l(g, a), l(g, c))
                }) : function (a, c) {
                    var d, e, f;
                    for (d = 0; d < i; d++)if (f = h[d].field, e = k[d] * b(l(f, a), l(f, c)))return e;
                    return 0
                } : null
            }, a.prototype.prepareSearch = function (a, b) {
                if ("object" == typeof a)return a;
                b = c({}, b);
                var d = b.fields, e = b.sort, g = b.sort_empty;
                return d && !f(d) && (b.fields = [d]), e && !f(e) && (b.sort = [e]), g && !f(g) && (b.sort_empty = [g]), {
                    options: b,
                    query: String(a || "").toLowerCase(),
                    tokens: this.tokenize(a),
                    total: 0,
                    items: []
                }
            }, a.prototype.search = function (a, b) {
                var c, d, e, f, g = this;
                return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function (a, e) {
                    c = f(a), (b.filter === !1 || c > 0) && d.items.push({score: c, id: e})
                }) : g.iterator(g.items, function (a, b) {
                    d.items.push({score: 1, id: b})
                }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d
            };
            var b = function (a, b) {
                return "number" == typeof a && "number" == typeof b ? a > b ? 1 : a < b ? -1 : 0 : (a = h(String(a || "")), b = h(String(b || "")), a > b ? 1 : b > a ? -1 : 0)
            }, c = function (a, b) {
                var c, d, e, f;
                for (c = 1, d = arguments.length; c < d; c++)if (f = arguments[c])for (e in f)f.hasOwnProperty(e) && (a[e] = f[e]);
                return a
            }, d = function (a) {
                return (a + "").replace(/^\s+|\s+$|/g, "")
            }, e = function (a) {
                return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            }, f = Array.isArray || "undefined" != typeof $ && $.isArray || function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }, g = {
                a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
                c: "[cÇçćĆčČ]",
                d: "[dđĐďĎð]",
                e: "[eÈÉÊËèéêëěĚĒēęĘ]",
                i: "[iÌÍÎÏìíîïĪī]",
                l: "[lłŁ]",
                n: "[nÑñňŇńŃ]",
                o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
                r: "[rřŘ]",
                s: "[sŠšśŚ]",
                t: "[tťŤ]",
                u: "[uÙÚÛÜùúûüůŮŪū]",
                y: "[yŸÿýÝ]",
                z: "[zŽžżŻźŹ]"
            }, h = function () {
                var a, b, c, d, e = "", f = {};
                for (c in g)if (g.hasOwnProperty(c))for (d = g[c].substring(2, g[c].length - 1), e += d, a = 0, b = d.length; a < b; a++)f[d.charAt(a)] = c;
                var h = new RegExp("[" + e + "]", "g");
                return function (a) {
                    return a.replace(h, function (a) {
                        return f[a]
                    }).toLowerCase()
                }
            }();
            return a
        })
    }, {}],
    8: [function (a, b, c) {
        !function (a) {
            var b;
            window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-accordion", ["uikit"], function () {
                return b || a(UIkit)
            })
        }(function (a) {
            "use strict";
            function b(b) {
                var c = a.$(b), d = "auto";
                if (c.is(":visible"))d = c.outerHeight(); else {
                    var e = {position: c.css("position"), visibility: c.css("visibility"), display: c.css("display")};
                    d = c.css({position: "absolute", visibility: "hidden", display: "block"}).outerHeight(), c.css(e)
                }
                return d
            }

            return a.component("accordion", {
                defaults: {
                    showfirst: !0,
                    collapse: !0,
                    animate: !0,
                    easing: "swing",
                    duration: 300,
                    toggle: ".uk-accordion-title",
                    containers: ".uk-accordion-content",
                    clsactive: "uk-active"
                }, boot: function () {
                    a.ready(function (b) {
                        setTimeout(function () {
                            a.$("[data-uk-accordion]", b).each(function () {
                                var b = a.$(this);
                                b.data("accordion") || a.accordion(b, a.Utils.options(b.attr("data-uk-accordion")))
                            })
                        }, 0)
                    })
                }, init: function () {
                    var b = this;
                    this.element.on("click.uikit.accordion", this.options.toggle, function (c) {
                        c.preventDefault(), b.toggleItem(a.$(this).data("wrapper"), b.options.animate, b.options.collapse)
                    }), this.update(), this.options.showfirst && this.toggleItem(this.toggle.eq(0).data("wrapper"), !1, !1)
                }, toggleItem: function (c, d, e) {
                    var f = this;
                    c.data("toggle").toggleClass(this.options.clsactive), c.data("content").toggleClass(this.options.clsactive);
                    var g = c.data("toggle").hasClass(this.options.clsactive);
                    e && (this.toggle.not(c.data("toggle")).removeClass(this.options.clsactive), this.content.not(c.data("content")).removeClass(this.options.clsactive).parent().stop().css("overflow", "hidden").animate({height: 0}, {
                        easing: this.options.easing,
                        duration: d ? this.options.duration : 0
                    }).attr("aria-expanded", "false")), c.stop().css("overflow", "hidden"), d ? c.animate({height: g ? b(c.data("content")) : 0}, {
                        easing: this.options.easing,
                        duration: this.options.duration,
                        complete: function () {
                            g && (c.css({
                                overflow: "",
                                height: "auto"
                            }), a.Utils.checkDisplay(c.data("content"))), f.trigger("display.uk.check")
                        }
                    }) : (c.height(g ? "auto" : 0), g && (c.css({overflow: ""}), a.Utils.checkDisplay(c.data("content"))), this.trigger("display.uk.check")), c.attr("aria-expanded", g), this.element.trigger("toggle.uk.accordion", [g, c.data("toggle"), c.data("content")])
                }, update: function () {
                    var b, c, d, e = this;
                    this.toggle = this.find(this.options.toggle), this.content = this.find(this.options.containers), this.content.each(function (f) {
                        b = a.$(this), b.parent().data("wrapper") ? c = b.parent() : (c = a.$(this).wrap('<div data-wrapper="true" style="overflow:hidden;height:0;position:relative;"></div>').parent(), c.attr("aria-expanded", "false")), d = e.toggle.eq(f), c.data("toggle", d), c.data("content", b), d.data("wrapper", c), b.data("wrapper", c)
                    }), this.element.trigger("update.uk.accordion", [this])
                }
            }), a.accordion
        })
    }, {}],
    9: [function (a, b, c) {
        !function (a) {
            var b;
            window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-autocomplete", ["uikit"], function () {
                return b || a(UIkit)
            })
        }(function (a) {
            "use strict";
            var b;
            return a.component("autocomplete", {
                defaults: {
                    minLength: 3,
                    param: "search",
                    method: "post",
                    delay: 300,
                    loadingClass: "uk-loading",
                    flipDropdown: !1,
                    skipClass: "uk-skip",
                    hoverClass: "uk-active",
                    source: null,
                    renderer: null,
                    template: '<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}"><a>{{$item.value}}</a></li>{{/items}}</ul>'
                }, visible: !1, value: null, selected: null, boot: function () {
                    a.$html.on("focus.autocomplete.uikit", "[data-uk-autocomplete]", function (b) {
                        var c = a.$(this);
                        c.data("autocomplete") || a.autocomplete(c, a.Utils.options(c.attr("data-uk-autocomplete")))
                    }), a.$html.on("click.autocomplete.uikit", function (a) {
                        b && a.target != b.input[0] && b.hide()
                    })
                }, init: function () {
                    var b = this, c = !1, d = a.Utils.debounce(function (a) {
                        return c ? c = !1 : void b.handle()
                    }, this.options.delay);
                    this.dropdown = this.find(".uk-dropdown"), this.template = this.find('script[type="text/autocomplete"]').html(), this.template = a.Utils.template(this.template || this.options.template), this.input = this.find("input:first").attr("autocomplete", "off"), this.dropdown.length || (this.dropdown = a.$('<div class="uk-dropdown"></div>').appendTo(this.element)), this.options.flipDropdown && this.dropdown.addClass("uk-dropdown-flip"), this.dropdown.attr("aria-expanded", "false"), this.input.on({
                        keydown: function (a) {
                            if (a && a.which && !a.shiftKey)switch (a.which) {
                                case 13:
                                    c = !0, b.selected && (a.preventDefault(), b.select());
                                    break;
                                case 38:
                                    a.preventDefault(), b.pick("prev", !0);
                                    break;
                                case 40:
                                    a.preventDefault(), b.pick("next", !0);
                                    break;
                                case 27:
                                case 9:
                                    b.hide()
                            }
                        }, keyup: d
                    }), this.dropdown.on("click", ".uk-autocomplete-results > *", function () {
                        b.select()
                    }), this.dropdown.on("mouseover", ".uk-autocomplete-results > *", function () {
                        b.pick(a.$(this))
                    }), this.triggercomplete = d
                }, handle: function () {
                    var a = this, b = this.value;
                    return this.value = this.input.val(), this.value.length < this.options.minLength ? this.hide() : (this.value != b && a.request(), this)
                }, pick: function (b, c) {
                    var d = this, e = a.$(this.dropdown.find(".uk-autocomplete-results").children(":not(." + this.options.skipClass + ")")), f = !1;
                    if ("string" == typeof b || b.hasClass(this.options.skipClass)) {
                        if ("next" == b || "prev" == b) {
                            if (this.selected) {
                                var g = e.index(this.selected);
                                f = "next" == b ? e.eq(g + 1 < e.length ? g + 1 : 0) : e.eq(g - 1 < 0 ? e.length - 1 : g - 1)
                            } else f = e["next" == b ? "first" : "last"]();
                            f = a.$(f)
                        }
                    } else f = b;
                    if (f && f.length && (this.selected = f, e.removeClass(this.options.hoverClass), this.selected.addClass(this.options.hoverClass), c)) {
                        var h = f.position().top, i = d.dropdown.scrollTop(), j = d.dropdown.height();
                        (h > j || h < 0) && d.dropdown.scrollTop(i + h)
                    }
                }, select: function () {
                    if (this.selected) {
                        var a = this.selected.data();
                        this.trigger("selectitem.uk.autocomplete", [a, this]), a.value && this.input.val(a.value).trigger("change"), this.hide()
                    }
                }, show: function () {
                    if (!this.visible)return this.visible = !0, this.element.addClass("uk-open"), b && b !== this && b.hide(), b = this, this.dropdown.attr("aria-expanded", "true"), this
                }, hide: function () {
                    if (this.visible)return this.visible = !1, this.element.removeClass("uk-open"), b === this && (b = !1), this.dropdown.attr("aria-expanded", "false"), this
                }, request: function () {
                    var b = this, c = function (a) {
                        a && b.render(a), b.element.removeClass(b.options.loadingClass)
                    };
                    if (this.element.addClass(this.options.loadingClass), this.options.source) {
                        var d = this.options.source;
                        switch (typeof this.options.source) {
                            case"function":
                                this.options.source.apply(this, [c]);
                                break;
                            case"object":
                                if (d.length) {
                                    var e = [];
                                    d.forEach(function (a) {
                                        a.value && a.value.toLowerCase().indexOf(b.value.toLowerCase()) != -1 && e.push(a)
                                    }), c(e)
                                }
                                break;
                            case"string":
                                var f = {};
                                f[this.options.param] = this.value, a.$.ajax({
                                    url: this.options.source,
                                    data: f,
                                    type: this.options.method,
                                    dataType: "json"
                                }).done(function (a) {
                                    c(a || [])
                                });
                                break;
                            default:
                                c(null)
                        }
                    } else this.element.removeClass(b.options.loadingClass)
                }, render: function (a) {
                    return this.dropdown.empty(), this.selected = !1, this.options.renderer ? this.options.renderer.apply(this, [a]) : a && a.length && (this.dropdown.append(this.template({items: a})), this.show(), this.trigger("show.uk.autocomplete")), this
                }
            }), a.autocomplete
        })
    }, {}],
    10: [function (a, b, c) {
        (function (c) {
            !function (a) {
                var b;
                window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-datepicker", ["uikit"], function () {
                    return b || a(UIkit)
                })
            }(function (c) {
                "use strict";
                var d, e, f = !1;
                return c.component("datepicker", {
                    defaults: {
                        mobile: !1,
                        weekstart: 1,
                        i18n: {
                            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                        },
                        format: "YYYY-MM-DD",
                        offsettop: 5,
                        maxDate: !1,
                        minDate: !1,
                        pos: "auto",
                        template: function (a, b) {
                            var d, e = "";
                            if (e += '<div class="uk-datepicker-nav">', e += '<a href="" class="uk-datepicker-previous"></a>', e += '<a href="" class="uk-datepicker-next"></a>', c.formSelect) {
                                var f, g, h, i, j = (new Date).getFullYear(), k = [];
                                for (d = 0; d < b.i18n.months.length; d++)d == a.month ? k.push('<option value="' + d + '" selected>' + b.i18n.months[d] + "</option>") : k.push('<option value="' + d + '">' + b.i18n.months[d] + "</option>");
                                for (f = '<span class="uk-form-select">' + b.i18n.months[a.month] + '<select class="update-picker-month">' + k.join("") + "</select></span>", k = [], h = a.minDate ? a.minDate.year() : j - 50, i = a.maxDate ? a.maxDate.year() : j + 20, d = h; d <= i; d++)d == a.year ? k.push('<option value="' + d + '" selected>' + d + "</option>") : k.push('<option value="' + d + '">' + d + "</option>");
                                g = '<span class="uk-form-select">' + a.year + '<select class="update-picker-year">' + k.join("") + "</select></span>", e += '<div class="uk-datepicker-heading">' + f + " " + g + "</div>"
                            } else e += '<div class="uk-datepicker-heading">' + b.i18n.months[a.month] + " " + a.year + "</div>";
                            for (e += "</div>", e += '<table class="uk-datepicker-table">', e += "<thead>", d = 0; d < a.weekdays.length; d++)a.weekdays[d] && (e += "<th>" + a.weekdays[d] + "</th>");
                            for (e += "</thead>", e += "<tbody>", d = 0; d < a.days.length; d++)if (a.days[d] && a.days[d].length) {
                                e += "<tr>";
                                for (var l = 0; l < a.days[d].length; l++)if (a.days[d][l]) {
                                    var m = a.days[d][l], n = [];
                                    m.inmonth || n.push("uk-datepicker-table-muted"), m.selected && n.push("uk-active"), m.disabled && n.push("uk-datepicker-date-disabled uk-datepicker-table-muted"), e += '<td><a href="" class="' + n.join(" ") + '" data-date="' + m.day.format() + '">' + m.day.format("D") + "</a></td>"
                                }
                                e += "</tr>"
                            }
                            return e += "</tbody>", e += "</table>"
                        }
                    }, boot: function () {
                        c.$win.on("resize orientationchange", function () {
                            f && f.hide()
                        }), c.$html.on("focus.datepicker.uikit", "[data-uk-datepicker]", function (a) {
                            var b = c.$(this);
                            b.data("datepicker") || (a.preventDefault(), c.datepicker(b, c.Utils.options(b.attr("data-uk-datepicker"))), b.trigger("focus"))
                        }), c.$html.on("click focus", "*", function (a) {
                            var b = c.$(a.target);
                            !f || b[0] == d[0] || b.data("datepicker") || b.parents(".uk-datepicker:first").length || f.hide()
                        })
                    }, init: function () {
                        if (!c.support.touch || "date" != this.element.attr("type") || this.options.mobile) {
                            var a = this;
                            this.current = this.element.val() ? e(this.element.val(), this.options.format) : e(), this.on("click focus", function () {
                                f !== a && a.pick(this.value ? this.value : a.options.minDate ? a.options.minDate : "")
                            }).on("change", function () {
                                a.element.val() && !e(a.element.val(), a.options.format).isValid() && a.element.val(e().format(a.options.format))
                            }), d || (d = c.$('<div class="uk-dropdown uk-datepicker"></div>'), d.on("click", ".uk-datepicker-next, .uk-datepicker-previous, [data-date]", function (a) {
                                a.stopPropagation(), a.preventDefault();
                                var b = c.$(this);
                                return !b.hasClass("uk-datepicker-date-disabled") && void(b.is("[data-date]") ? (f.current = e(b.data("date")), f.element.val(f.current.format(f.options.format)).trigger("change"), f.hide()) : f.add(b.hasClass("uk-datepicker-next") ? 1 : -1, "months"))
                            }), d.on("change", ".update-picker-month, .update-picker-year", function () {
                                var a = c.$(this);
                                f[a.is(".update-picker-year") ? "setYear" : "setMonth"](Number(a.val()))
                            }), d.appendTo("body"))
                        }
                    }, pick: function (a) {
                        var b = this.element.offset(), g = {left: b.left, right: ""};
                        this.current = isNaN(a) ? e(a, this.options.format) : e(), this.initdate = this.current.format("YYYY-MM-DD"), this.update(), "right" == c.langdirection && (g.right = window.innerWidth - (g.left + this.element.outerWidth()), g.left = "");
                        var h = b.top - this.element.outerHeight() + this.element.height() - this.options.offsettop - d.outerHeight(), i = b.top + this.element.outerHeight() + this.options.offsettop;
                        g.top = i, "top" == this.options.pos ? g.top = h : "auto" == this.options.pos && window.innerHeight - i - d.outerHeight() < 0 && h >= 0 && (g.top = h), d.css(g).show(), this.trigger("show.uk.datepicker"), f = this
                    }, add: function (a, b) {
                        this.current.add(a, b), this.update()
                    }, setMonth: function (a) {
                        this.current.month(a), this.update()
                    }, setYear: function (a) {
                        this.current.year(a), this.update()
                    }, update: function () {
                        var a = this.getRows(this.current.year(), this.current.month()), b = this.options.template(a, this.options);
                        d.html(b), this.trigger("update.uk.datepicker")
                    }, getRows: function (a, b) {
                        var c = this.options, d = e().format("YYYY-MM-DD"), f = [31, a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b], g = new Date(a, b, 1, 12).getDay(), h = {
                            month: b,
                            year: a,
                            weekdays: [],
                            days: [],
                            maxDate: !1,
                            minDate: !1
                        }, i = [];
                        c.maxDate !== !1 && (h.maxDate = isNaN(c.maxDate) ? e(c.maxDate, c.format) : e().add(c.maxDate, "days")), c.minDate !== !1 && (h.minDate = isNaN(c.minDate) ? e(c.minDate, c.format) : e().add(c.minDate - 1, "days")), h.weekdays = function () {
                            for (var a = 0, b = []; a < 7; a++) {
                                for (var d = a + (c.weekstart || 0); d >= 7;)d -= 7;
                                b.push(c.i18n.weekdays[d])
                            }
                            return b
                        }(), c.weekstart && c.weekstart > 0 && (g -= c.weekstart, g < 0 && (g += 7));
                        for (var j = f + g, k = j; k > 7;)k -= 7;
                        j += 7 - k;
                        for (var l, m, n, o, p, q = 0, r = 0; q < j; q++)l = new Date(a, b, 1 + (q - g), 12), m = h.minDate && h.minDate > l || h.maxDate && l > h.maxDate, p = !(q < g || q >= f + g), l = e(l), n = this.initdate == l.format("YYYY-MM-DD"), o = d == l.format("YYYY-MM-DD"), i.push({
                            selected: n,
                            today: o,
                            disabled: m,
                            day: l,
                            inmonth: p
                        }), 7 === ++r && (h.days.push(i), i = [], r = 0);
                        return h
                    }, hide: function () {
                        f && f === this && (d.hide(), f = !1, this.trigger("hide.uk.datepicker"))
                    }
                }), e = function (c) {
                    function d(a, b, c) {
                        switch (arguments.length) {
                            case 2:
                                return null != a ? a : b;
                            case 3:
                                return null != a ? a : null != b ? b : c;
                            default:
                                throw new Error("Implement me")
                        }
                    }

                    function e(a, b) {
                        return ya.call(a, b)
                    }

                    function f() {
                        return {
                            empty: !1,
                            unusedTokens: [],
                            unusedInput: [],
                            overflow: -2,
                            charsLeftOver: 0,
                            nullInput: !1,
                            invalidMonth: null,
                            invalidFormat: !1,
                            userInvalidated: !1,
                            iso: !1
                        }
                    }

                    function g(a) {
                        ua.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
                    }

                    function h(a, b) {
                        var c = !0;
                        return o(function () {
                            return c && (g(a), c = !1), b.apply(this, arguments)
                        }, b)
                    }

                    function i(a, b) {
                        pb[a] || (g(b), pb[a] = !0)
                    }

                    function j(a, b) {
                        return function (c) {
                            return r(a.call(this, c), b)
                        }
                    }

                    function k(a, b) {
                        return function (c) {
                            return this.localeData().ordinal(a.call(this, c), b)
                        }
                    }

                    function l() {
                    }

                    function m(a, b) {
                        b !== !1 && H(a), p(this, a), this._d = new Date((+a._d))
                    }

                    function n(a) {
                        var b = A(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
                        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = ua.localeData(), this._bubble()
                    }

                    function o(a, b) {
                        for (var c in b)e(b, c) && (a[c] = b[c]);
                        return e(b, "toString") && (a.toString = b.toString), e(b, "valueOf") && (a.valueOf = b.valueOf), a
                    }

                    function p(a, b) {
                        var c, d, e;
                        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Ha.length > 0)for (c in Ha)d = Ha[c], e = b[d], "undefined" != typeof e && (a[d] = e);
                        return a
                    }

                    function q(a) {
                        return a < 0 ? Math.ceil(a) : Math.floor(a)
                    }

                    function r(a, b, c) {
                        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;)d = "0" + d;
                        return (e ? c ? "+" : "" : "-") + d
                    }

                    function s(a, b) {
                        var c = {milliseconds: 0, months: 0};
                        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
                    }

                    function t(a, b) {
                        var c;
                        return b = M(b, a), a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
                    }

                    function u(a, b) {
                        return function (c, d) {
                            var e, f;
                            return null === d || isNaN(+d) || (i(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = ua.duration(c, d), v(this, e, a), this
                        }
                    }

                    function v(a, b, c, d) {
                        var e = b._milliseconds, f = b._days, g = b._months;
                        d = null == d || d, e && a._d.setTime(+a._d + e * c), f && pa(a, "Date", oa(a, "Date") + f * c), g && na(a, oa(a, "Month") + g * c), d && ua.updateOffset(a, f || g)
                    }

                    function w(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    }

                    function x(a) {
                        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
                    }

                    function y(a, b, c) {
                        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
                        for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++;
                        return g + f
                    }

                    function z(a) {
                        if (a) {
                            var b = a.toLowerCase().replace(/(.)s$/, "$1");
                            a = ib[a] || jb[b] || b
                        }
                        return a
                    }

                    function A(a) {
                        var b, c, d = {};
                        for (c in a)e(a, c) && (b = z(c), b && (d[b] = a[c]));
                        return d
                    }

                    function B(a) {
                        var b, d;
                        if (0 === a.indexOf("week"))b = 7, d = "day"; else {
                            if (0 !== a.indexOf("month"))return;
                            b = 12, d = "month"
                        }
                        ua[a] = function (e, f) {
                            var g, h, i = ua._locale[a], j = [];
                            if ("number" == typeof e && (f = e, e = c), h = function (a) {
                                    var b = ua().utc().set(d, a);
                                    return i.call(ua._locale, b, e || "")
                                }, null != f)return h(f);
                            for (g = 0; g < b; g++)j.push(h(g));
                            return j
                        }
                    }

                    function C(a) {
                        var b = +a, c = 0;
                        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
                    }

                    function D(a, b) {
                        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
                    }

                    function E(a, b, c) {
                        return ja(ua([a, 11, 31 + b - c]), b, c).week
                    }

                    function F(a) {
                        return G(a) ? 366 : 365
                    }

                    function G(a) {
                        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
                    }

                    function H(a) {
                        var b;
                        a._a && a._pf.overflow === -2 && (b = a._a[Aa] < 0 || a._a[Aa] > 11 ? Aa : a._a[Ba] < 1 || a._a[Ba] > D(a._a[za], a._a[Aa]) ? Ba : a._a[Ca] < 0 || a._a[Ca] > 23 ? Ca : a._a[Da] < 0 || a._a[Da] > 59 ? Da : a._a[Ea] < 0 || a._a[Ea] > 59 ? Ea : a._a[Fa] < 0 || a._a[Fa] > 999 ? Fa : -1, a._pf._overflowDayOfYear && (b < za || b > Ba) && (b = Ba), a._pf.overflow = b)
                    }

                    function I(a) {
                        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
                    }

                    function J(a) {
                        return a ? a.toLowerCase().replace("_", "-") : a
                    }

                    function K(a) {
                        for (var b, c, d, e, f = 0; f < a.length;) {
                            for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                                if (d = L(e.slice(0, b).join("-")))return d;
                                if (c && c.length >= b && y(e, c, !0) >= b - 1)break;
                                b--
                            }
                            f++
                        }
                        return null
                    }

                    function L(b) {
                        var c = null;
                        if (!Ga[b] && Ia)try {
                            c = ua.locale(), a("./locale/" + b), ua.locale(c)
                        } catch (a) {
                        }
                        return Ga[b]
                    }

                    function M(a, b) {
                        return b._isUTC ? ua(a).zone(b._offset || 0) : ua(a).local()
                    }

                    function N(a) {
                        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
                    }

                    function O(a) {
                        var b, c, d = a.match(Ma);
                        for (b = 0, c = d.length; b < c; b++)ob[d[b]] ? d[b] = ob[d[b]] : d[b] = N(d[b]);
                        return function (e) {
                            var f = "";
                            for (b = 0; b < c; b++)f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                            return f
                        }
                    }

                    function P(a, b) {
                        return a.isValid() ? (b = Q(b, a.localeData()), kb[b] || (kb[b] = O(b)), kb[b](a)) : a.localeData().invalidDate()
                    }

                    function Q(a, b) {
                        function c(a) {
                            return b.longDateFormat(a) || a
                        }

                        var d = 5;
                        for (Na.lastIndex = 0; d >= 0 && Na.test(a);)a = a.replace(Na, c), Na.lastIndex = 0, d -= 1;
                        return a
                    }

                    function R(a, b) {
                        var c, d = b._strict;
                        switch (a) {
                            case"Q":
                                return Ya;
                            case"DDDD":
                                return $a;
                            case"YYYY":
                            case"GGGG":
                            case"gggg":
                                return d ? _a : Qa;
                            case"Y":
                            case"G":
                            case"g":
                                return bb;
                            case"YYYYYY":
                            case"YYYYY":
                            case"GGGGG":
                            case"ggggg":
                                return d ? ab : Ra;
                            case"S":
                                if (d)return Ya;
                            case"SS":
                                if (d)return Za;
                            case"SSS":
                                if (d)return $a;
                            case"DDD":
                                return Pa;
                            case"MMM":
                            case"MMMM":
                            case"dd":
                            case"ddd":
                            case"dddd":
                                return Ta;
                            case"a":
                            case"A":
                                return b._locale._meridiemParse;
                            case"X":
                                return Wa;
                            case"Z":
                            case"ZZ":
                                return Ua;
                            case"T":
                                return Va;
                            case"SSSS":
                                return Sa;
                            case"MM":
                            case"DD":
                            case"YY":
                            case"GG":
                            case"gg":
                            case"HH":
                            case"hh":
                            case"mm":
                            case"ss":
                            case"ww":
                            case"WW":
                                return d ? Za : Oa;
                            case"M":
                            case"D":
                            case"d":
                            case"H":
                            case"h":
                            case"m":
                            case"s":
                            case"w":
                            case"W":
                            case"e":
                            case"E":
                                return Oa;
                            case"Do":
                                return Xa;
                            default:
                                return c = new RegExp($(Z(a.replace("\\", "")), "i"))
                        }
                    }

                    function S(a) {
                        a = a || "";
                        var b = a.match(Ua) || [], c = b[b.length - 1] || [], d = (c + "").match(gb) || ["-", 0, 0], e = +(60 * d[1]) + C(d[2]);
                        return "+" === d[0] ? -e : e
                    }

                    function T(a, b, c) {
                        var d, e = c._a;
                        switch (a) {
                            case"Q":
                                null != b && (e[Aa] = 3 * (C(b) - 1));
                                break;
                            case"M":
                            case"MM":
                                null != b && (e[Aa] = C(b) - 1);
                                break;
                            case"MMM":
                            case"MMMM":
                                d = c._locale.monthsParse(b), null != d ? e[Aa] = d : c._pf.invalidMonth = b;
                                break;
                            case"D":
                            case"DD":
                                null != b && (e[Ba] = C(b));
                                break;
                            case"Do":
                                null != b && (e[Ba] = C(parseInt(b, 10)));
                                break;
                            case"DDD":
                            case"DDDD":
                                null != b && (c._dayOfYear = C(b));
                                break;
                            case"YY":
                                e[za] = ua.parseTwoDigitYear(b);
                                break;
                            case"YYYY":
                            case"YYYYY":
                            case"YYYYYY":
                                e[za] = C(b);
                                break;
                            case"a":
                            case"A":
                                c._isPm = c._locale.isPM(b);
                                break;
                            case"H":
                            case"HH":
                            case"h":
                            case"hh":
                                e[Ca] = C(b);
                                break;
                            case"m":
                            case"mm":
                                e[Da] = C(b);
                                break;
                            case"s":
                            case"ss":
                                e[Ea] = C(b);
                                break;
                            case"S":
                            case"SS":
                            case"SSS":
                            case"SSSS":
                                e[Fa] = C(1e3 * ("0." + b));
                                break;
                            case"X":
                                c._d = new Date(1e3 * parseFloat(b));
                                break;
                            case"Z":
                            case"ZZ":
                                c._useUTC = !0, c._tzm = S(b);
                                break;
                            case"dd":
                            case"ddd":
                            case"dddd":
                                d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                                break;
                            case"w":
                            case"ww":
                            case"W":
                            case"WW":
                            case"d":
                            case"e":
                            case"E":
                                a = a.substr(0, 1);
                            case"gggg":
                            case"GGGG":
                            case"GGGGG":
                                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = C(b));
                                break;
                            case"gg":
                            case"GG":
                                c._w = c._w || {}, c._w[a] = ua.parseTwoDigitYear(b)
                        }
                    }

                    function U(a) {
                        var b, c, e, f, g, h, i;
                        b = a._w, null != b.GG || null != b.W || null != b.E ? (g = 1, h = 4, c = d(b.GG, a._a[za], ja(ua(), 1, 4).year), e = d(b.W, 1), f = d(b.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, c = d(b.gg, a._a[za], ja(ua(), g, h).year), e = d(b.w, 1), null != b.d ? (f = b.d, f < g && ++e) : f = null != b.e ? b.e + g : g), i = ka(c, e, f, h, g), a._a[za] = i.year, a._dayOfYear = i.dayOfYear
                    }

                    function V(a) {
                        var b, c, e, f, g = [];
                        if (!a._d) {
                            for (e = X(a), a._w && null == a._a[Ba] && null == a._a[Aa] && U(a), a._dayOfYear && (f = d(a._a[za], e[za]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), c = fa(f, 0, a._dayOfYear), a._a[Aa] = c.getUTCMonth(), a._a[Ba] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b)a._a[b] = g[b] = e[b];
                            for (; b < 7; b++)a._a[b] = g[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                            a._d = (a._useUTC ? fa : ea).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm)
                        }
                    }

                    function W(a) {
                        var b;
                        a._d || (b = A(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], V(a))
                    }

                    function X(a) {
                        var b = new Date;
                        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
                    }

                    function Y(a) {
                        if (a._f === ua.ISO_8601)return void aa(a);
                        a._a = [], a._pf.empty = !0;
                        var b, c, d, e, f, g = "" + a._i, h = g.length, i = 0;
                        for (d = Q(a._f, a._locale).match(Ma) || [], b = 0; b < d.length; b++)e = d[b], c = (g.match(R(e, a)) || [])[0], c && (f = g.substr(0, g.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), g = g.slice(g.indexOf(c) + c.length), i += c.length), ob[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), T(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
                        a._pf.charsLeftOver = h - i, g.length > 0 && a._pf.unusedInput.push(g), a._isPm && a._a[Ca] < 12 && (a._a[Ca] += 12), a._isPm === !1 && 12 === a._a[Ca] && (a._a[Ca] = 0), V(a), H(a)
                    }

                    function Z(a) {
                        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                            return b || c || d || e
                        })
                    }

                    function $(a) {
                        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    }

                    function _(a) {
                        var b, c, d, e, g;
                        if (0 === a._f.length)return a._pf.invalidFormat = !0, void(a._d = new Date(NaN));
                        for (e = 0; e < a._f.length; e++)g = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = f(), b._f = a._f[e], Y(b), I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == d || g < d) && (d = g, c = b));
                        o(a, c || b)
                    }

                    function aa(a) {
                        var b, c, d = a._i, e = cb.exec(d);
                        if (e) {
                            for (a._pf.iso = !0, b = 0, c = eb.length; b < c; b++)if (eb[b][1].exec(d)) {
                                a._f = eb[b][0] + (e[6] || " ");
                                break
                            }
                            for (b = 0, c = fb.length; b < c; b++)if (fb[b][1].exec(d)) {
                                a._f += fb[b][0];
                                break
                            }
                            d.match(Ua) && (a._f += "Z"), Y(a)
                        } else a._isValid = !1
                    }

                    function ba(a) {
                        aa(a), a._isValid === !1 && (delete a._isValid, ua.createFromInputFallback(a))
                    }

                    function ca(a, b) {
                        var c, d = [];
                        for (c = 0; c < a.length; ++c)d.push(b(a[c], c));
                        return d
                    }

                    function da(a) {
                        var b, d = a._i;
                        d === c ? a._d = new Date : x(d) ? a._d = new Date((+d)) : null !== (b = Ja.exec(d)) ? a._d = new Date((+b[1])) : "string" == typeof d ? ba(a) : w(d) ? (a._a = ca(d.slice(0), function (a) {
                            return parseInt(a, 10)
                        }), V(a)) : "object" == typeof d ? W(a) : "number" == typeof d ? a._d = new Date(d) : ua.createFromInputFallback(a)
                    }

                    function ea(a, b, c, d, e, f, g) {
                        var h = new Date(a, b, c, d, e, f, g);
                        return a < 1970 && h.setFullYear(a), h
                    }

                    function fa(a) {
                        var b = new Date(Date.UTC.apply(null, arguments));
                        return a < 1970 && b.setUTCFullYear(a), b
                    }

                    function ga(a, b) {
                        if ("string" == typeof a)if (isNaN(a)) {
                            if (a = b.weekdaysParse(a), "number" != typeof a)return null
                        } else a = parseInt(a, 10);
                        return a
                    }

                    function ha(a, b, c, d, e) {
                        return e.relativeTime(b || 1, !!c, a, d)
                    }

                    function ia(a, b, c) {
                        var d = ua.duration(a).abs(), e = xa(d.as("s")), f = xa(d.as("m")), g = xa(d.as("h")), h = xa(d.as("d")), i = xa(d.as("M")), j = xa(d.as("y")), k = e < lb.s && ["s", e] || 1 === f && ["m"] || f < lb.m && ["mm", f] || 1 === g && ["h"] || g < lb.h && ["hh", g] || 1 === h && ["d"] || h < lb.d && ["dd", h] || 1 === i && ["M"] || i < lb.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
                        return k[2] = b, k[3] = +a > 0, k[4] = c, ha.apply({}, k)
                    }

                    function ja(a, b, c) {
                        var d, e = c - b, f = c - a.day();
                        return f > e && (f -= 7), f < e - 7 && (f += 7), d = ua(a).add(f, "d"), {
                            week: Math.ceil(d.dayOfYear() / 7),
                            year: d.year()
                        }
                    }

                    function ka(a, b, c, d, e) {
                        var f, g, h = fa(a, 0, 1).getUTCDay();
                        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (h < e ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
                            year: g > 0 ? a : a - 1,
                            dayOfYear: g > 0 ? g : F(a - 1) + g
                        }
                    }

                    function la(a) {
                        var b = a._i, d = a._f;
                        return a._locale = a._locale || ua.localeData(a._l), null === b || d === c && "" === b ? ua.invalid({nullInput: !0}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), ua.isMoment(b) ? new m(b, (!0)) : (d ? w(d) ? _(a) : Y(a) : da(a), new m(a)))
                    }

                    function ma(a, b) {
                        var c, d;
                        if (1 === b.length && w(b[0]) && (b = b[0]), !b.length)return ua();
                        for (c = b[0], d = 1; d < b.length; ++d)b[d][a](c) && (c = b[d]);
                        return c
                    }

                    function na(a, b) {
                        var c;
                        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
                    }

                    function oa(a, b) {
                        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
                    }

                    function pa(a, b, c) {
                        return "Month" === b ? na(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
                    }

                    function qa(a, b) {
                        return function (c) {
                            return null != c ? (pa(this, a, c), ua.updateOffset(this, b), this) : oa(this, a)
                        }
                    }

                    function ra(a) {
                        return 400 * a / 146097
                    }

                    function sa(a) {
                        return 146097 * a / 400
                    }

                    function ta(a) {
                        ua.duration.fn[a] = function () {
                            return this._data[a]
                        }
                    }

                    for (var ua, va, wa = "2.8.3", xa = Math.round, ya = Object.prototype.hasOwnProperty, za = 0, Aa = 1, Ba = 2, Ca = 3, Da = 4, Ea = 5, Fa = 6, Ga = {}, Ha = [], Ia = "undefined" != typeof b && b.exports, Ja = /^\/?Date\((\-?\d+)/i, Ka = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, La = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Ma = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Na = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Oa = /\d\d?/, Pa = /\d{1,3}/, Qa = /\d{1,4}/, Ra = /[+\-]?\d{1,6}/, Sa = /\d+/, Ta = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ua = /Z|[\+\-]\d\d:?\d\d/gi, Va = /T/i, Wa = /[\+\-]?\d+(\.\d{1,3})?/, Xa = /\d{1,2}/, Ya = /\d/, Za = /\d\d/, $a = /\d{3}/, _a = /\d{4}/, ab = /[+-]?\d{6}/, bb = /[+-]?\d+/, cb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, db = "YYYY-MM-DDTHH:mm:ssZ", eb = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], fb = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], gb = /([\+\-]|\d\d)/gi, hb = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
                        Milliseconds: 1,
                        Seconds: 1e3,
                        Minutes: 6e4,
                        Hours: 36e5,
                        Days: 864e5,
                        Months: 2592e6,
                        Years: 31536e6
                    }), ib = {
                        ms: "millisecond",
                        s: "second",
                        m: "minute",
                        h: "hour",
                        d: "day",
                        D: "date",
                        w: "week",
                        W: "isoWeek",
                        M: "month",
                        Q: "quarter",
                        y: "year",
                        DDD: "dayOfYear",
                        e: "weekday",
                        E: "isoWeekday",
                        gg: "weekYear",
                        GG: "isoWeekYear"
                    }, jb = {
                        dayofyear: "dayOfYear",
                        isoweekday: "isoWeekday",
                        isoweek: "isoWeek",
                        weekyear: "weekYear",
                        isoweekyear: "isoWeekYear"
                    }, kb = {}, lb = {
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    }, mb = "DDD w W M D d".split(" "), nb = "M D H h m s w W".split(" "), ob = {
                        M: function () {
                            return this.month() + 1
                        }, MMM: function (a) {
                            return this.localeData().monthsShort(this, a)
                        }, MMMM: function (a) {
                            return this.localeData().months(this, a)
                        }, D: function () {
                            return this.date()
                        }, DDD: function () {
                            return this.dayOfYear()
                        }, d: function () {
                            return this.day()
                        }, dd: function (a) {
                            return this.localeData().weekdaysMin(this, a)
                        }, ddd: function (a) {
                            return this.localeData().weekdaysShort(this, a)
                        }, dddd: function (a) {
                            return this.localeData().weekdays(this, a)
                        }, w: function () {
                            return this.week()
                        }, W: function () {
                            return this.isoWeek()
                        }, YY: function () {
                            return r(this.year() % 100, 2)
                        }, YYYY: function () {
                            return r(this.year(), 4)
                        }, YYYYY: function () {
                            return r(this.year(), 5)
                        }, YYYYYY: function () {
                            var a = this.year(), b = a >= 0 ? "+" : "-";
                            return b + r(Math.abs(a), 6)
                        }, gg: function () {
                            return r(this.weekYear() % 100, 2)
                        }, gggg: function () {
                            return r(this.weekYear(), 4)
                        }, ggggg: function () {
                            return r(this.weekYear(), 5)
                        }, GG: function () {
                            return r(this.isoWeekYear() % 100, 2)
                        }, GGGG: function () {
                            return r(this.isoWeekYear(), 4)
                        }, GGGGG: function () {
                            return r(this.isoWeekYear(), 5)
                        }, e: function () {
                            return this.weekday()
                        }, E: function () {
                            return this.isoWeekday()
                        }, a: function () {
                            return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                        }, A: function () {
                            return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                        }, H: function () {
                            return this.hours()
                        }, h: function () {
                            return this.hours() % 12 || 12
                        }, m: function () {
                            return this.minutes()
                        }, s: function () {
                            return this.seconds()
                        }, S: function () {
                            return C(this.milliseconds() / 100)
                        }, SS: function () {
                            return r(C(this.milliseconds() / 10), 2)
                        }, SSS: function () {
                            return r(this.milliseconds(), 3)
                        }, SSSS: function () {
                            return r(this.milliseconds(), 3)
                        }, Z: function () {
                            var a = -this.zone(), b = "+";
                            return a < 0 && (a = -a, b = "-"), b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2)
                        }, ZZ: function () {
                            var a = -this.zone(), b = "+";
                            return a < 0 && (a = -a, b = "-"), b + r(C(a / 60), 2) + r(C(a) % 60, 2)
                        }, z: function () {
                            return this.zoneAbbr()
                        }, zz: function () {
                            return this.zoneName()
                        }, X: function () {
                            return this.unix()
                        }, Q: function () {
                            return this.quarter()
                        }
                    }, pb = {}, qb = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; mb.length;)va = mb.pop(), ob[va + "o"] = k(ob[va], va);
                    for (; nb.length;)va = nb.pop(), ob[va + va] = j(ob[va], 2);
                    ob.DDDD = j(ob.DDD, 3), o(l.prototype, {
                        set: function (a) {
                            var b, c;
                            for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
                        },
                        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        months: function (a) {
                            return this._months[a.month()]
                        },
                        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                        monthsShort: function (a) {
                            return this._monthsShort[a.month()]
                        },
                        monthsParse: function (a) {
                            var b, c, d;
                            for (this._monthsParse || (this._monthsParse = []), b = 0; b < 12; b++)if (this._monthsParse[b] || (c = ua.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a))return b
                        },
                        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        weekdays: function (a) {
                            return this._weekdays[a.day()]
                        },
                        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                        weekdaysShort: function (a) {
                            return this._weekdaysShort[a.day()]
                        },
                        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        weekdaysMin: function (a) {
                            return this._weekdaysMin[a.day()]
                        },
                        weekdaysParse: function (a) {
                            var b, c, d;
                            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; b < 7; b++)if (this._weekdaysParse[b] || (c = ua([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
                        },
                        _longDateFormat: {
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY LT",
                            LLLL: "dddd, MMMM D, YYYY LT"
                        },
                        longDateFormat: function (a) {
                            var b = this._longDateFormat[a];
                            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
                                return a.slice(1)
                            }), this._longDateFormat[a] = b), b
                        },
                        isPM: function (a) {
                            return "p" === (a + "").toLowerCase().charAt(0)
                        },
                        _meridiemParse: /[ap]\.?m?\.?/i,
                        meridiem: function (a, b, c) {
                            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
                        },
                        _calendar: {
                            sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                        },
                        calendar: function (a, b) {
                            var c = this._calendar[a];
                            return "function" == typeof c ? c.apply(b) : c
                        },
                        _relativeTime: {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        },
                        relativeTime: function (a, b, c, d) {
                            var e = this._relativeTime[c];
                            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
                        },
                        pastFuture: function (a, b) {
                            var c = this._relativeTime[a > 0 ? "future" : "past"];
                            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
                        },
                        ordinal: function (a) {
                            return this._ordinal.replace("%d", a)
                        },
                        _ordinal: "%d",
                        preparse: function (a) {
                            return a
                        },
                        postformat: function (a) {
                            return a
                        },
                        week: function (a) {
                            return ja(a, this._week.dow, this._week.doy).week
                        },
                        _week: {dow: 0, doy: 6},
                        _invalidDate: "Invalid date",
                        invalidDate: function () {
                            return this._invalidDate
                        }
                    }), ua = function (a, b, d, e) {
                        var g;
                        return "boolean" == typeof d && (e = d, d = c), g = {}, g._isAMomentObject = !0, g._i = a, g._f = b, g._l = d, g._strict = e, g._isUTC = !1, g._pf = f(), la(g)
                    }, ua.suppressDeprecationWarnings = !1, ua.createFromInputFallback = h("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
                        a._d = new Date(a._i)
                    }), ua.min = function () {
                        var a = [].slice.call(arguments, 0);
                        return ma("isBefore", a)
                    }, ua.max = function () {
                        var a = [].slice.call(arguments, 0);
                        return ma("isAfter", a)
                    }, ua.utc = function (a, b, d, e) {
                        var g;
                        return "boolean" == typeof d && (e = d, d = c), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = d, g._i = a, g._f = b, g._strict = e, g._pf = f(), la(g).utc()
                    }, ua.unix = function (a) {
                        return ua(1e3 * a)
                    }, ua.duration = function (a, b) {
                        var c, d, f, g, h = a, i = null;
                        return ua.isDuration(a) ? h = {
                            ms: a._milliseconds,
                            d: a._days,
                            M: a._months
                        } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Ka.exec(a)) ? (c = "-" === i[1] ? -1 : 1, h = {
                            y: 0,
                            d: C(i[Ba]) * c,
                            h: C(i[Ca]) * c,
                            m: C(i[Da]) * c,
                            s: C(i[Ea]) * c,
                            ms: C(i[Fa]) * c
                        }) : (i = La.exec(a)) ? (c = "-" === i[1] ? -1 : 1, f = function (a) {
                            var b = a && parseFloat(a.replace(",", "."));
                            return (isNaN(b) ? 0 : b) * c
                        }, h = {
                            y: f(i[2]),
                            M: f(i[3]),
                            d: f(i[4]),
                            h: f(i[5]),
                            m: f(i[6]),
                            s: f(i[7]),
                            w: f(i[8])
                        }) : "object" == typeof h && ("from" in h || "to" in h) && (g = t(ua(h.from), ua(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), d = new n(h), ua.isDuration(a) && e(a, "_locale") && (d._locale = a._locale), d
                    }, ua.version = wa, ua.defaultFormat = db, ua.ISO_8601 = function () {
                    }, ua.momentProperties = Ha, ua.updateOffset = function () {
                    }, ua.relativeTimeThreshold = function (a, b) {
                        return lb[a] !== c && (b === c ? lb[a] : (lb[a] = b, !0))
                    }, ua.lang = h("moment.lang is deprecated. Use moment.locale instead.", function (a, b) {
                        return ua.locale(a, b)
                    }), ua.locale = function (a, b) {
                        var c;
                        return a && (c = "undefined" != typeof b ? ua.defineLocale(a, b) : ua.localeData(a), c && (ua.duration._locale = ua._locale = c)), ua._locale._abbr
                    }, ua.defineLocale = function (a, b) {
                        return null !== b ? (b.abbr = a, Ga[a] || (Ga[a] = new l), Ga[a].set(b), ua.locale(a), Ga[a]) : (delete Ga[a], null)
                    }, ua.langData = h("moment.langData is deprecated. Use moment.localeData instead.", function (a) {
                        return ua.localeData(a)
                    }), ua.localeData = function (a) {
                        var b;
                        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)return ua._locale;
                        if (!w(a)) {
                            if (b = L(a))return b;
                            a = [a]
                        }
                        return K(a)
                    }, ua.isMoment = function (a) {
                        return a instanceof m || null != a && e(a, "_isAMomentObject")
                    }, ua.isDuration = function (a) {
                        return a instanceof n
                    };
                    for (va = qb.length - 1; va >= 0; --va)B(qb[va]);
                    ua.normalizeUnits = function (a) {
                        return z(a)
                    }, ua.invalid = function (a) {
                        var b = ua.utc(NaN);
                        return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0, b
                    }, ua.parseZone = function () {
                        return ua.apply(null, arguments).parseZone()
                    }, ua.parseTwoDigitYear = function (a) {
                        return C(a) + (C(a) > 68 ? 1900 : 2e3)
                    }, o(ua.fn = m.prototype, {
                        clone: function () {
                            return ua(this)
                        },
                        valueOf: function () {
                            return +this._d + 6e4 * (this._offset || 0)
                        },
                        unix: function () {
                            return Math.floor(+this / 1e3)
                        },
                        toString: function () {
                            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                        },
                        toDate: function () {
                            return this._offset ? new Date((+this)) : this._d
                        },
                        toISOString: function () {
                            var a = ua(this).utc();
                            return 0 < a.year() && a.year() <= 9999 ? P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                        },
                        toArray: function () {
                            var a = this;
                            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
                        },
                        isValid: function () {
                            return I(this)
                        },
                        isDSTShifted: function () {
                            return !!this._a && (this.isValid() && y(this._a, (this._isUTC ? ua.utc(this._a) : ua(this._a)).toArray()) > 0)
                        },
                        parsingFlags: function () {
                            return o({}, this._pf)
                        },
                        invalidAt: function () {
                            return this._pf.overflow
                        },
                        utc: function (a) {
                            return this.zone(0, a)
                        },
                        local: function (a) {
                            return this._isUTC && (this.zone(0, a), this._isUTC = !1, a && this.add(this._dateTzOffset(), "m")), this
                        },
                        format: function (a) {
                            var b = P(this, a || ua.defaultFormat);
                            return this.localeData().postformat(b)
                        },
                        add: u(1, "add"),
                        subtract: u(-1, "subtract"),
                        diff: function (a, b, c) {
                            var d, e, f, g = M(a, this), h = 6e4 * (this.zone() - g.zone());
                            return b = z(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + g.daysInMonth()), e = 12 * (this.year() - g.year()) + (this.month() - g.month()), f = this - ua(this).startOf("month") - (g - ua(g).startOf("month")), f -= 6e4 * (this.zone() - ua(this).startOf("month").zone() - (g.zone() - ua(g).startOf("month").zone())), e += f / d, "year" === b && (e /= 12)) : (d = this - g, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - h) / 864e5 : "week" === b ? (d - h) / 6048e5 : d), c ? e : q(e)
                        },
                        from: function (a, b) {
                            return ua.duration({to: this, from: a}).locale(this.locale()).humanize(!b)
                        },
                        fromNow: function (a) {
                            return this.from(ua(), a)
                        },
                        calendar: function (a) {
                            var b = a || ua(), c = M(b, this).startOf("day"), d = this.diff(c, "days", !0), e = d < -6 ? "sameElse" : d < -1 ? "lastWeek" : d < 0 ? "lastDay" : d < 1 ? "sameDay" : d < 2 ? "nextDay" : d < 7 ? "nextWeek" : "sameElse";
                            return this.format(this.localeData().calendar(e, this))
                        },
                        isLeapYear: function () {
                            return G(this.year())
                        },
                        isDST: function () {
                            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                        },
                        day: function (a) {
                            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                            return null != a ? (a = ga(a, this.localeData()), this.add(a - b, "d")) : b
                        },
                        month: qa("Month", !0),
                        startOf: function (a) {
                            switch (a = z(a)) {
                                case"year":
                                    this.month(0);
                                case"quarter":
                                case"month":
                                    this.date(1);
                                case"week":
                                case"isoWeek":
                                case"day":
                                    this.hours(0);
                                case"hour":
                                    this.minutes(0);
                                case"minute":
                                    this.seconds(0);
                                case"second":
                                    this.milliseconds(0)
                            }
                            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
                        },
                        endOf: function (a) {
                            return a = z(a), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
                        },
                        isAfter: function (a, b) {
                            return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = ua.isMoment(a) ? a : ua(a), +this > +a) : +this.clone().startOf(b) > +ua(a).startOf(b)
                        },
                        isBefore: function (a, b) {
                            return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = ua.isMoment(a) ? a : ua(a), +this < +a) : +this.clone().startOf(b) < +ua(a).startOf(b)
                        },
                        isSame: function (a, b) {
                            return b = z(b || "millisecond"), "millisecond" === b ? (a = ua.isMoment(a) ? a : ua(a), +this === +a) : +this.clone().startOf(b) === +M(a, this).startOf(b)
                        },
                        min: h("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
                            return a = ua.apply(null, arguments), a < this ? this : a
                        }),
                        max: h("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
                            return a = ua.apply(null, arguments), a > this ? this : a
                        }),
                        zone: function (a, b) {
                            var c, d = this._offset || 0;
                            return null == a ? this._isUTC ? d : this._dateTzOffset() : ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateTzOffset()), this._offset = a, this._isUTC = !0, null != c && this.subtract(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, ua.duration(d - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ua.updateOffset(this, !0), this._changeInProgress = null)), this)
                        },
                        zoneAbbr: function () {
                            return this._isUTC ? "UTC" : ""
                        },
                        zoneName: function () {
                            return this._isUTC ? "Coordinated Universal Time" : ""
                        },
                        parseZone: function () {
                            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
                        },
                        hasAlignedHourOffset: function (a) {
                            return a = a ? ua(a).zone() : 0, (this.zone() - a) % 60 === 0
                        },
                        daysInMonth: function () {
                            return D(this.year(), this.month())
                        },
                        dayOfYear: function (a) {
                            var b = xa((ua(this).startOf("day") - ua(this).startOf("year")) / 864e5) + 1;
                            return null == a ? b : this.add(a - b, "d")
                        },
                        quarter: function (a) {
                            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
                        },
                        weekYear: function (a) {
                            var b = ja(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                            return null == a ? b : this.add(a - b, "y")
                        },
                        isoWeekYear: function (a) {
                            var b = ja(this, 1, 4).year;
                            return null == a ? b : this.add(a - b, "y")
                        },
                        week: function (a) {
                            var b = this.localeData().week(this);
                            return null == a ? b : this.add(7 * (a - b), "d")
                        },
                        isoWeek: function (a) {
                            var b = ja(this, 1, 4).week;
                            return null == a ? b : this.add(7 * (a - b), "d")
                        },
                        weekday: function (a) {
                            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                            return null == a ? b : this.add(a - b, "d")
                        },
                        isoWeekday: function (a) {
                            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
                        },
                        isoWeeksInYear: function () {
                            return E(this.year(), 1, 4)
                        },
                        weeksInYear: function () {
                            var a = this.localeData()._week;
                            return E(this.year(), a.dow, a.doy)
                        },
                        get: function (a) {
                            return a = z(a), this[a]()
                        },
                        set: function (a, b) {
                            return a = z(a), "function" == typeof this[a] && this[a](b), this
                        },
                        locale: function (a) {
                            var b;
                            return a === c ? this._locale._abbr : (b = ua.localeData(a), null != b && (this._locale = b), this)
                        },
                        lang: h("moment().lang() is deprecated. Use moment().localeData() instead.", function (a) {
                            return a === c ? this.localeData() : this.locale(a)
                        }),
                        localeData: function () {
                            return this._locale
                        },
                        _dateTzOffset: function () {
                            return 15 * Math.round(this._d.getTimezoneOffset() / 15)
                        }
                    }), ua.fn.millisecond = ua.fn.milliseconds = qa("Milliseconds", !1), ua.fn.second = ua.fn.seconds = qa("Seconds", !1), ua.fn.minute = ua.fn.minutes = qa("Minutes", !1), ua.fn.hour = ua.fn.hours = qa("Hours", !0), ua.fn.date = qa("Date", !0), ua.fn.dates = h("dates accessor is deprecated. Use date instead.", qa("Date", !0)), ua.fn.year = qa("FullYear", !0), ua.fn.years = h("years accessor is deprecated. Use year instead.", qa("FullYear", !0)), ua.fn.days = ua.fn.day, ua.fn.months = ua.fn.month, ua.fn.weeks = ua.fn.week, ua.fn.isoWeeks = ua.fn.isoWeek, ua.fn.quarters = ua.fn.quarter, ua.fn.toJSON = ua.fn.toISOString, o(ua.duration.fn = n.prototype, {
                        _bubble: function () {
                            var a, b, c, d = this._milliseconds, e = this._days, f = this._months, g = this._data, h = 0;
                            g.milliseconds = d % 1e3, a = q(d / 1e3), g.seconds = a % 60, b = q(a / 60), g.minutes = b % 60, c = q(b / 60), g.hours = c % 24, e += q(c / 24), h = q(ra(e)), e -= q(sa(h)), f += q(e / 30), e %= 30, h += q(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
                        },
                        abs: function () {
                            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
                        },
                        weeks: function () {
                            return q(this.days() / 7)
                        },
                        valueOf: function () {
                            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
                        },
                        humanize: function (a) {
                            var b = ia(this, !a, this.localeData());
                            return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
                        },
                        add: function (a, b) {
                            var c = ua.duration(a, b);
                            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
                        },
                        subtract: function (a, b) {
                            var c = ua.duration(a, b);
                            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
                        },
                        get: function (a) {
                            return a = z(a), this[a.toLowerCase() + "s"]()
                        },
                        as: function (a) {
                            var b, c;
                            if (a = z(a), "month" === a || "year" === a)return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * ra(b), "month" === a ? c : c / 12;
                            switch (b = this._days + sa(this._months / 12), a) {
                                case"week":
                                    return b / 7 + this._milliseconds / 6048e5;
                                case"day":
                                    return b + this._milliseconds / 864e5;
                                case"hour":
                                    return 24 * b + this._milliseconds / 36e5;
                                case"minute":
                                    return 24 * b * 60 + this._milliseconds / 6e4;
                                case"second":
                                    return 24 * b * 60 * 60 + this._milliseconds / 1e3;
                                case"millisecond":
                                    return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
                                default:
                                    throw new Error("Unknown unit " + a)
                            }
                        },
                        lang: ua.fn.lang,
                        locale: ua.fn.locale,
                        toIsoString: h("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
                            return this.toISOString()
                        }),
                        toISOString: function () {
                            var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
                        },
                        localeData: function () {
                            return this._locale
                        }
                    }), ua.duration.fn.toString = ua.duration.fn.toISOString;
                    for (va in hb)e(hb, va) && ta(va.toLowerCase());
                    return ua.duration.fn.asMilliseconds = function () {
                        return this.as("ms")
                    }, ua.duration.fn.asSeconds = function () {
                        return this.as("s")
                    }, ua.duration.fn.asMinutes = function () {
                        return this.as("m")
                    }, ua.duration.fn.asHours = function () {
                        return this.as("h")
                    }, ua.duration.fn.asDays = function () {
                        return this.as("d")
                    }, ua.duration.fn.asWeeks = function () {
                        return this.as("weeks")
                    }, ua.duration.fn.asMonths = function () {
                        return this.as("M")
                    }, ua.duration.fn.asYears = function () {
                        return this.as("y")
                    }, ua.locale("en", {
                        ordinal: function (a) {
                            var b = a % 10, c = 1 === C(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                            return a + c
                        }
                    }), ua
                }.call(this), c.Utils.moment = e, c.datepicker
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    11: [function (a, b, c) {
        !function (a) {
            var b;
            window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-lightbox", ["uikit"], function () {
                return b || a(UIkit)
            })
        }(function (a) {
            "use strict";
            function b(b) {
                return c ? (c.lightbox = b, c) : (c = a.$(['<div class="uk-modal">', '<div class="uk-modal-dialog uk-modal-dialog-lightbox uk-slidenav-position" style="margin-left:auto;margin-right:auto;width:200px;height:200px;top:' + Math.abs(window.innerHeight / 2 - 200) + 'px;">', '<a href="#" class="uk-modal-close uk-close uk-close-alt"></a>', '<div class="uk-lightbox-content"></div>', '<div class="uk-modal-spinner uk-hidden"></div>', "</div>", "</div>"].join("")).appendTo("body"), c.dialog = c.find(".uk-modal-dialog:first"), c.content = c.find(".uk-lightbox-content:first"), c.loader = c.find(".uk-modal-spinner:first"), c.closer = c.find(".uk-close.uk-close-alt"), c.modal = a.modal(c, {modal: !1}), c.on("swipeRight swipeLeft", function (a) {
                    c.lightbox["swipeLeft" == a.type ? "next" : "previous"]()
                }).on("click", "[data-lightbox-previous], [data-lightbox-next]", function (b) {
                    b.preventDefault(), c.lightbox[a.$(this).is("[data-lightbox-next]") ? "next" : "previous"]()
                }), c.on("hide.uk.modal", function (a) {
                    c.content.html("")
                }), a.$win.on("load resize orientationchange", a.Utils.debounce(function (b) {
                    c.is(":visible") && !a.Utils.isFullscreen() && c.lightbox.fitSize()
                }.bind(this), 100)), c.lightbox = b, c)
            }

            var c, d = {};
            return a.component("lightbox", {
                defaults: {group: !1, duration: 400, keyboard: !0},
                index: 0,
                items: !1,
                boot: function () {
                    a.$html.on("click", "[data-uk-lightbox]", function (b) {
                        b.preventDefault();
                        var c = a.$(this);
                        c.data("lightbox") || a.lightbox(c, a.Utils.options(c.attr("data-uk-lightbox"))), c.data("lightbox").show(c)
                    }), a.$doc.on("keyup", function (a) {
                        if (c && c.is(":visible") && c.lightbox.options.keyboard)switch (a.preventDefault(), a.keyCode) {
                            case 37:
                                c.lightbox.previous();
                                break;
                            case 39:
                                c.lightbox.next()
                        }
                    })
                },
                init: function () {
                    var b = [];
                    if (this.index = 0, this.siblings = [], this.element && this.element.length) {
                        var c = this.options.group ? a.$(['[data-uk-lightbox*="' + this.options.group + '"]', "[data-uk-lightbox*='" + this.options.group + "']"].join(",")) : this.element;
                        c.each(function () {
                            var c = a.$(this);
                            b.push({
                                source: c.attr("href"),
                                title: c.attr("data-title") || c.attr("title"),
                                type: c.attr("data-lightbox-type") || "auto",
                                link: c
                            })
                        }), this.index = c.index(this.element), this.siblings = b
                    } else this.options.group && this.options.group.length && (this.siblings = this.options.group);
                    this.trigger("lightbox-init", [this])
                },
                show: function (c) {
                    this.modal = b(this), this.modal.dialog.stop(), this.modal.content.stop();
                    var d, e, f = this, g = a.$.Deferred();
                    c = c || 0, "object" == typeof c && this.siblings.forEach(function (a, b) {
                        c[0] === a.link[0] && (c = b)
                    }), c < 0 ? c = this.siblings.length - c : this.siblings[c] || (c = 0), e = this.siblings[c], d = {
                        lightbox: f,
                        source: e.source,
                        type: e.type,
                        index: c,
                        promise: g,
                        title: e.title,
                        item: e,
                        meta: {content: "", width: null, height: null}
                    }, this.index = c, this.modal.content.empty(), this.modal.is(":visible") || (this.modal.content.css({
                        width: "",
                        height: ""
                    }).empty(), this.modal.modal.show()), this.modal.loader.removeClass("uk-hidden"), g.promise().done(function () {
                        f.data = d, f.fitSize(d)
                    }).fail(function () {
                        d.meta.content = '<div class="uk-position-cover uk-flex uk-flex-middle uk-flex-center"><strong>Loading resource failed!</strong></div>', d.meta.width = 400, d.meta.height = 300, f.data = d, f.fitSize(d)
                    }), f.trigger("showitem.uk.lightbox", [d])
                },
                fitSize: function () {
                    var b = this, c = this.data, d = this.modal.dialog.outerWidth() - this.modal.dialog.width(), e = parseInt(this.modal.dialog.css("margin-top"), 10), f = parseInt(this.modal.dialog.css("margin-bottom"), 10), g = e + f, h = c.meta.content, i = b.options.duration;
                    this.siblings.length > 1 && (h = [h, '<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous uk-hidden-touch" data-lightbox-previous></a>', '<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next uk-hidden-touch" data-lightbox-next></a>'].join(""));
                    var j, k, l = a.$("<div>&nbsp;</div>").css({
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        "max-width": b.modal.dialog.css("max-width"),
                        padding: b.modal.dialog.css("padding"),
                        margin: b.modal.dialog.css("margin")
                    }), m = c.meta.width, n = c.meta.height;
                    l.appendTo("body").width(), j = l.width(), k = window.innerHeight - g, l.remove(), this.modal.dialog.find(".uk-modal-caption").remove(), c.title && (this.modal.dialog.append('<div class="uk-modal-caption">' + c.title + "</div>"), k -= this.modal.dialog.find(".uk-modal-caption").outerHeight()), j < c.meta.width && (n = Math.floor(n * (j / m)), m = j), k < n && (n = Math.floor(k), m = Math.ceil(c.meta.width * (k / c.meta.height))), this.modal.content.css("opacity", 0).width(m).html(h), "iframe" == c.type && this.modal.content.find("iframe:first").height(n);
                    var o = n + d, p = Math.floor(window.innerHeight / 2 - o / 2) - g;
                    p < 0 && (p = 0), this.modal.closer.addClass("uk-hidden"), b.modal.data("mwidth") == m && b.modal.data("mheight") == n && (i = 0), this.modal.dialog.animate({
                        width: m + d,
                        height: n + d,
                        top: p
                    }, i, "swing", function () {
                        b.modal.loader.addClass("uk-hidden"), b.modal.content.css({width: ""}).animate({opacity: 1}, function () {
                            b.modal.closer.removeClass("uk-hidden")
                        }), b.modal.data({mwidth: m, mheight: n})
                    })
                },
                next: function () {
                    this.show(this.siblings[this.index + 1] ? this.index + 1 : 0)
                },
                previous: function () {
                    this.show(this.siblings[this.index - 1] ? this.index - 1 : this.siblings.length - 1)
                }
            }), a.plugin("lightbox", "image", {
                init: function (a) {
                    a.on("showitem.uk.lightbox", function (a, b) {
                        if ("image" == b.type || b.source && b.source.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
                            var c = function (a, c, d) {
                                b.meta = {
                                    content: '<img class="uk-responsive-width" width="' + c + '" height="' + d + '" src ="' + a + '">',
                                    width: c,
                                    height: d
                                }, b.type = "image", b.promise.resolve()
                            };
                            if (d[b.source])c(b.source, d[b.source].width, d[b.source].height); else {
                                var e = new Image;
                                e.onerror = function () {
                                    b.promise.reject("Loading image failed")
                                }, e.onload = function () {
                                    d[b.source] = {
                                        width: e.width,
                                        height: e.height
                                    }, c(b.source, d[b.source].width, d[b.source].height)
                                }, e.src = b.source
                            }
                        }
                    })
                }
            }), a.plugin("lightbox", "youtube", {
                init: function (a) {
                    var b = /(\/\/.*?youtube\.[a-z]+)\/watch\?v=([^&]+)&?(.*)/, c = /youtu\.be\/(.*)/;
                    a.on("showitem.uk.lightbox", function (a, e) {
                        var f, g, h = function (a, b, c) {
                            e.meta = {
                                content: '<iframe src="//www.youtube.com/embed/' + a + '" width="' + b + '" height="' + c + '" style="max-width:100%;"></iframe>',
                                width: b,
                                height: c
                            }, e.type = "iframe", e.promise.resolve()
                        };
                        if ((g = e.source.match(b)) && (f = g[2]), (g = e.source.match(c)) && (f = g[1]), f) {
                            if (d[f])h(f, d[f].width, d[f].height); else {
                                var i = new Image, j = !1;
                                i.onerror = function () {
                                    d[f] = {width: 640, height: 320}, h(f, d[f].width, d[f].height)
                                }, i.onload = function () {
                                    120 == i.width && 90 == i.height ? j ? (d[f] = {
                                        width: 640,
                                        height: 320
                                    }, h(f, d[f].width, d[f].height)) : (j = !0, i.src = "//img.youtube.com/vi/" + f + "/0.jpg") : (d[f] = {
                                        width: i.width,
                                        height: i.height
                                    }, h(f, i.width, i.height))
                                }, i.src = "//img.youtube.com/vi/" + f + "/maxresdefault.jpg"
                            }
                            a.stopImmediatePropagation()
                        }
                    })
                }
            }), a.plugin("lightbox", "vimeo", {
                init: function (b) {
                    var c, e = /(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/;
                    b.on("showitem.uk.lightbox", function (b, f) {
                        var g, h = function (a, b, c) {
                            f.meta = {
                                content: '<iframe src="//player.vimeo.com/video/' + a + '" width="' + b + '" height="' + c + '" style="width:100%;box-sizing:border-box;"></iframe>',
                                width: b,
                                height: c
                            }, f.type = "iframe", f.promise.resolve()
                        };
                        (c = f.source.match(e)) && (g = c[2], d[g] ? h(g, d[g].width, d[g].height) : a.$.ajax({
                            type: "GET",
                            url: "http://vimeo.com/api/oembed.json?url=" + encodeURI(f.source),
                            jsonp: "callback",
                            dataType: "jsonp",
                            success: function (a) {
                                d[g] = {width: a.width, height: a.height}, h(g, d[g].width, d[g].height)
                            }
                        }), b.stopImmediatePropagation())
                    })
                }
            }), a.plugin("lightbox", "video", {
                init: function (b) {
                    b.on("showitem.uk.lightbox", function (b, c) {
                        var e = function (a, b, d) {
                            c.meta = {
                                content: '<video class="uk-responsive-width" src="' + a + '" width="' + b + '" height="' + d + '" controls></video>',
                                width: b,
                                height: d
                            }, c.type = "video", c.promise.resolve()
                        };
                        if ("video" == c.type || c.source.match(/\.(mp4|webm|ogv)$/i))if (d[c.source])e(c.source, d[c.source].width, d[c.source].height); else var f = a.$('<video style="position:fixed;visibility:hidden;top:-10000px;"></video>').attr("src", c.source).appendTo("body"), g = setInterval(function () {
                            f[0].videoWidth && (clearInterval(g), d[c.source] = {
                                width: f[0].videoWidth,
                                height: f[0].videoHeight
                            }, e(c.source, d[c.source].width, d[c.source].height), f.remove())
                        }, 20)
                    })
                }
            }), a.lightbox.create = function (b, c) {
                if (b) {
                    var d, e = [];
                    return b.forEach(function (b) {
                        e.push(a.$.extend({
                            source: "",
                            title: "",
                            type: "auto",
                            link: !1
                        }, "string" == typeof b ? {source: b} : b))
                    }), d = a.lightbox(a.$.extend({}, c, {group: e}))
                }
            }, a.lightbox
        })
    }, {}],
    12: [function (a, b, c) {
        !function (a) {
            var b;
            window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-notify", ["uikit"], function () {
                return b || a(UIkit)
            })
        }(function (a) {
            "use strict";
            var b = {}, c = {}, d = function (b) {
                return "string" == a.$.type(b) && (b = {message: b}), arguments[1] && (b = a.$.extend(b, "string" == a.$.type(arguments[1]) ? {status: arguments[1]} : arguments[1])), new f(b).show()
            }, e = function (a, b) {
                var d;
                if (a)for (d in c)a === c[d].group && c[d].close(b); else for (d in c)c[d].close(b)
            }, f = function (d) {
                this.options = a.$.extend({}, f.defaults, d), this.uuid = a.Utils.uid("notifymsg"), this.element = a.$(['<div class="uk-notify-message">', '<a class="uk-close"></a>', "<div></div>", "</div>"].join("")).data("notifyMessage", this), this.content(this.options.message), this.options.status && (this.element.addClass("uk-notify-message-" + this.options.status), this.currentstatus = this.options.status), this.group = this.options.group, c[this.uuid] = this, b[this.options.pos] || (b[this.options.pos] = a.$('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo("body").on("click", ".uk-notify-message", function () {
                    var b = a.$(this).data("notifyMessage");
                    b.element.trigger("manualclose.uk.notify", [b]), b.close()
                }))
            };
            return a.$.extend(f.prototype, {
                uuid: !1,
                element: !1,
                timout: !1,
                currentstatus: "",
                group: !1,
                show: function () {
                    if (!this.element.is(":visible")) {
                        var a = this;
                        b[this.options.pos].show().prepend(this.element);
                        var c = parseInt(this.element.css("margin-bottom"), 10);
                        return this.element.css({
                            opacity: 0,
                            "margin-top": -1 * this.element.outerHeight(),
                            "margin-bottom": 0
                        }).animate({opacity: 1, "margin-top": 0, "margin-bottom": c}, function () {
                            if (a.options.timeout) {
                                var b = function () {
                                    a.close()
                                };
                                a.timeout = setTimeout(b, a.options.timeout), a.element.hover(function () {
                                    clearTimeout(a.timeout)
                                }, function () {
                                    a.timeout = setTimeout(b, a.options.timeout)
                                })
                            }
                        }), this
                    }
                },
                close: function (a) {
                    var d = this, e = function () {
                        d.element.remove(), b[d.options.pos].children().length || b[d.options.pos].hide(), d.options.onClose.apply(d, []), d.element.trigger("close.uk.notify", [d]), delete c[d.uuid]
                    };
                    this.timeout && clearTimeout(this.timeout), a ? e() : this.element.animate({
                        opacity: 0,
                        "margin-top": -1 * this.element.outerHeight(),
                        "margin-bottom": 0
                    }, function () {
                        e()
                    })
                },
                content: function (a) {
                    var b = this.element.find(">div");
                    return a ? (b.html(a), this) : b.html()
                },
                status: function (a) {
                    return a ? (this.element.removeClass("uk-notify-message-" + this.currentstatus).addClass("uk-notify-message-" + a), this.currentstatus = a, this) : this.currentstatus
                }
            }), f.defaults = {
                message: "",
                status: "",
                timeout: 5e3,
                group: null,
                pos: "top-center",
                onClose: function () {
                }
            }, a.notify = d, a.notify.message = f, a.notify.closeAll = e, d
        })
    }, {}],
    13: [function (a, b, c) {
        !function (a) {
            var b;
            window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-slider", ["uikit"], function () {
                return b || a(UIkit)
            })
        }(function (a) {
            "use strict";
            var b, c, d, e, f = {};
            return a.component("slider", {
                defaults: {
                    center: !1,
                    threshold: 10,
                    infinite: !0,
                    autoplay: !1,
                    autoplayInterval: 7e3,
                    pauseOnHover: !0,
                    activecls: "uk-active"
                }, boot: function () {
                    a.ready(function (b) {
                        setTimeout(function () {
                            a.$("[data-uk-slider]", b).each(function () {
                                var b = a.$(this);
                                b.data("slider") || a.slider(b, a.Utils.options(b.attr("data-uk-slider")))
                            })
                        }, 0)
                    })
                }, init: function () {
                    var g = this;
                    this.container = this.element.find(".uk-slider"), this.focus = 0, a.$win.on("resize load", a.Utils.debounce(function () {
                        g.resize(!0)
                    }, 100)), this.on("click.uikit.slider", "[data-uk-slider-item]", function (b) {
                        b.preventDefault();
                        var c = a.$(this).attr("data-uk-slider-item");
                        if (g.focus != c)switch (g.stop(), c) {
                            case"next":
                            case"previous":
                                g["next" == c ? "next" : "previous"]();
                                break;
                            default:
                                g.updateFocus(parseInt(c, 10))
                        }
                    }), this.container.on({
                        "touchstart mousedown": function (h) {
                            h.originalEvent && h.originalEvent.touches && (h = h.originalEvent.touches[0]), h.button && 2 == h.button || !g.active || (g.stop(), d = a.$(h.target).is("a") ? a.$(h.target) : a.$(h.target).parents("a:first"), e = !1, d.length && d.one("click", function (a) {
                                e && a.preventDefault()
                            }), c = function (a) {
                                e = !0, b = g, f = {
                                    touchx: parseInt(a.pageX, 10), dir: 1, focus: g.focus,
                                    base: g.options.center ? "center" : "area"
                                }, a.originalEvent && a.originalEvent.touches && (a = a.originalEvent.touches[0]), b.element.data({
                                    "pointer-start": {
                                        x: parseInt(a.pageX, 10),
                                        y: parseInt(a.pageY, 10)
                                    }, "pointer-pos-start": g.pos
                                }), g.container.addClass("uk-drag"), c = !1
                            }, c.x = parseInt(h.pageX, 10), c.threshold = g.options.threshold)
                        }, mouseenter: function () {
                            g.options.pauseOnHover && (g.hovering = !0)
                        }, mouseleave: function () {
                            g.hovering = !1
                        }
                    }), this.resize(!0), this.on("display.uk.check", function () {
                        g.element.is(":visible") && g.resize(!0)
                    }), this.element.find("a,img").attr("draggable", "false"), this.options.autoplay && this.start()
                }, resize: function (b) {
                    var c, d, e, f, g = this, h = 0, i = 0;
                    return this.items = this.container.children().filter(":visible"), this.vp = this.element[0].getBoundingClientRect().width, this.container.css({
                        "min-width": "",
                        "min-height": ""
                    }), this.items.each(function (b) {
                        c = a.$(this), f = c.css({
                            left: "",
                            width: ""
                        })[0].getBoundingClientRect(), d = f.width, e = c.width(), i = Math.max(i, f.height), c.css({
                            left: h,
                            width: d
                        }).data({
                            idx: b,
                            left: h,
                            width: d,
                            cwidth: e,
                            area: h + d,
                            center: h - (g.vp / 2 - e / 2)
                        }), h += d
                    }), this.container.css({
                        "min-width": h,
                        "min-height": i
                    }), this.options.infinite && (h <= 2 * this.vp || this.items.length < 5) && !this.itemsResized ? (this.container.children().each(function (a) {
                        g.container.append(g.items.eq(a).clone(!0).attr("id", ""))
                    }).each(function (a) {
                        g.container.append(g.items.eq(a).clone(!0).attr("id", ""))
                    }), this.itemsResized = !0, this.resize()) : (this.cw = h, this.pos = 0, this.active = h >= this.vp, this.container.css({
                        "-ms-transform": "",
                        "-webkit-transform": "",
                        transform: ""
                    }), void(b && this.updateFocus(this.focus)))
                }, updatePos: function (a) {
                    this.pos = a, this.container.css({
                        "-ms-transform": "translateX(" + a + "px)",
                        "-webkit-transform": "translateX(" + a + "px)",
                        transform: "translateX(" + a + "px)"
                    })
                }, updateFocus: function (b, c) {
                    if (this.active) {
                        c = c || (b > this.focus ? 1 : -1);
                        var d, e, f = this.items.eq(b);
                        if (this.options.infinite && this.infinite(b, c), this.options.center)this.updatePos(f.data("center") * -1), this.items.filter("." + this.options.activecls).removeClass(this.options.activecls), f.addClass(this.options.activecls); else if (this.options.infinite)this.updatePos(f.data("left") * -1); else {
                            for (d = 0, e = b; e < this.items.length; e++)d += this.items.eq(e).data("width");
                            if (d > this.vp)this.updatePos(f.data("left") * -1); else if (1 == c) {
                                for (d = 0, e = this.items.length - 1; e >= 0; e--) {
                                    if (d += this.items.eq(e).data("width"), d == this.vp) {
                                        b = e;
                                        break
                                    }
                                    if (d > this.vp) {
                                        b = e < this.items.length - 1 ? e + 1 : e;
                                        break
                                    }
                                }
                                d > this.vp ? this.updatePos((this.container.width() - this.vp) * -1) : this.updatePos(this.items.eq(b).data("left") * -1)
                            }
                        }
                        var g = this.items.eq(b).data("left");
                        this.items.removeClass("uk-slide-before uk-slide-after").each(function (c) {
                            c !== b && a.$(this).addClass(a.$(this).data("left") < g ? "uk-slide-before" : "uk-slide-after")
                        }), this.focus = b, this.trigger("focusitem.uk.slider", [b, this.items.eq(b), this])
                    }
                }, next: function () {
                    var a = this.items[this.focus + 1] ? this.focus + 1 : this.options.infinite ? 0 : this.focus;
                    this.updateFocus(a, 1)
                }, previous: function () {
                    var a = this.items[this.focus - 1] ? this.focus - 1 : this.options.infinite ? this.items[this.focus - 1] ? this.items - 1 : this.items.length - 1 : this.focus;
                    this.updateFocus(a, -1)
                }, start: function () {
                    this.stop();
                    var a = this;
                    this.interval = setInterval(function () {
                        a.hovering || a.next()
                    }, this.options.autoplayInterval)
                }, stop: function () {
                    this.interval && clearInterval(this.interval)
                }, infinite: function (a, b) {
                    var c, d = this, e = this.items.eq(a), f = a, g = [], h = 0;
                    if (1 == b) {
                        for (c = 0; c < this.items.length && (f != a && (h += this.items.eq(f).data("width"), g.push(this.items.eq(f))), !(h > this.vp)); c++)f = f + 1 == this.items.length ? 0 : f + 1;
                        g.length && g.forEach(function (a) {
                            var b = e.data("area");
                            a.css({left: b}).data({
                                left: b,
                                area: b + a.data("width"),
                                center: b - (d.vp / 2 - a.data("cwidth") / 2)
                            }), e = a
                        })
                    } else {
                        for (c = this.items.length - 1; c > -1 && (h += this.items.eq(f).data("width"), f != a && g.push(this.items.eq(f)), !(h > this.vp)); c--)f = f - 1 == -1 ? this.items.length - 1 : f - 1;
                        g.length && g.forEach(function (a) {
                            var b = e.data("left") - a.data("width");
                            a.css({left: b}).data({
                                left: b,
                                area: b + a.data("width"),
                                center: b - (d.vp / 2 - a.data("cwidth") / 2)
                            }), e = a
                        })
                    }
                }
            }), a.$doc.on("mousemove.uikit.slider touchmove.uikit.slider", function (a) {
                if (a.originalEvent && a.originalEvent.touches && (a = a.originalEvent.touches[0]), c && Math.abs(a.pageX - c.x) > c.threshold && (window.getSelection().toString() ? b = c = !1 : c(a)), b) {
                    var d, e, g, h, i, j, k, l, m, n;
                    if (a.clientX || a.clientY ? d = a.clientX : (a.pageX || a.pageY) && (d = a.pageX - document.body.scrollLeft - document.documentElement.scrollLeft), i = f.focus, e = d - b.element.data("pointer-start").x, g = b.element.data("pointer-pos-start") + e, h = d > b.element.data("pointer-start").x ? -1 : 1, j = b.items.eq(f.focus), 1 == h)for (k = j.data("left") + Math.abs(e), l = 0, m = f.focus; l < b.items.length; l++) {
                        if (n = b.items.eq(m), m != f.focus && n.data("left") < k && n.data("area") > k) {
                            i = m;
                            break
                        }
                        m = m + 1 == b.items.length ? 0 : m + 1
                    } else for (k = j.data("left") - Math.abs(e), l = 0, m = f.focus; l < b.items.length; l++) {
                        if (n = b.items.eq(m), m != f.focus && n.data("area") <= j.data("left") && n.data("center") < k) {
                            i = m;
                            break
                        }
                        m = m - 1 == -1 ? b.items.length - 1 : m - 1
                    }
                    b.options.infinite && i != f._focus && b.infinite(i, h), b.updatePos(g), f.dir = h, f._focus = i, f.touchx = parseInt(a.pageX, 10), f.diff = k
                }
            }), a.$doc.on("mouseup.uikit.slider touchend.uikit.slider", function (a) {
                if (b) {
                    b.container.removeClass("uk-drag"), b.items.eq(f.focus);
                    var d, e, g, h = !1;
                    if (1 == f.dir)for (e = 0, g = f.focus; e < b.items.length; e++) {
                        if (d = b.items.eq(g), g != f.focus && d.data("left") > f.diff) {
                            h = g;
                            break
                        }
                        g = g + 1 == b.items.length ? 0 : g + 1
                    } else for (e = 0, g = f.focus; e < b.items.length; e++) {
                        if (d = b.items.eq(g), g != f.focus && d.data("left") < f.diff) {
                            h = g;
                            break
                        }
                        g = g - 1 == -1 ? b.items.length - 1 : g - 1
                    }
                    b.updateFocus(h !== !1 ? h : f._focus)
                }
                b = c = !1
            }), a.slider
        })
    }, {}],
    14: [function (a, b, c) {
        !function (a) {
            var b;
            window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-tooltip", ["uikit"], function () {
                return b || a(UIkit)
            })
        }(function (a) {
            "use strict";
            var b, c, d;
            return a.component("tooltip", {
                defaults: {
                    offset: 5,
                    pos: "top",
                    animation: !1,
                    delay: 0,
                    cls: "",
                    activeClass: "uk-active",
                    src: function (a) {
                        var b = a.attr("title");
                        return void 0 !== b && a.data("cached-title", b).removeAttr("title"), a.data("cached-title")
                    }
                }, tip: "", boot: function () {
                    a.$html.on("mouseenter.tooltip.uikit focus.tooltip.uikit", "[data-uk-tooltip]", function (b) {
                        var c = a.$(this);
                        c.data("tooltip") || (a.tooltip(c, a.Utils.options(c.attr("data-uk-tooltip"))), c.trigger("mouseenter"))
                    })
                }, init: function () {
                    var c = this;
                    b || (b = a.$('<div class="uk-tooltip"></div>').appendTo("body")), this.on({
                        focus: function (a) {
                            c.show()
                        }, blur: function (a) {
                            c.hide()
                        }, mouseenter: function (a) {
                            c.show()
                        }, mouseleave: function (a) {
                            c.hide()
                        }
                    })
                }, show: function () {
                    if (this.tip = "function" == typeof this.options.src ? this.options.src(this.element) : this.options.src, c && clearTimeout(c), d && clearTimeout(d), "string" == typeof this.tip && this.tip.length) {
                        b.stop().css({
                            top: -2e3,
                            visibility: "hidden"
                        }).removeClass(this.options.activeClass).show(), b.html('<div class="uk-tooltip-inner">' + this.tip + "</div>");
                        var e = this, f = a.$.extend({}, this.element.offset(), {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        }), g = b[0].offsetWidth, h = b[0].offsetHeight, i = "function" == typeof this.options.offset ? this.options.offset.call(this.element) : this.options.offset, j = "function" == typeof this.options.pos ? this.options.pos.call(this.element) : this.options.pos, k = j.split("-"), l = {
                            display: "none",
                            visibility: "visible",
                            top: f.top + f.height + h,
                            left: f.left
                        };
                        if ("fixed" == a.$html.css("position") || "fixed" == a.$body.css("position")) {
                            var m = a.$("body").offset(), n = a.$("html").offset(), o = {
                                top: n.top + m.top,
                                left: n.left + m.left
                            };
                            f.left -= o.left, f.top -= o.top
                        }
                        "left" != k[0] && "right" != k[0] || "right" != a.langdirection || (k[0] = "left" == k[0] ? "right" : "left");
                        var p = {
                            bottom: {top: f.top + f.height + i, left: f.left + f.width / 2 - g / 2},
                            top: {top: f.top - h - i, left: f.left + f.width / 2 - g / 2},
                            left: {top: f.top + f.height / 2 - h / 2, left: f.left - g - i},
                            right: {top: f.top + f.height / 2 - h / 2, left: f.left + f.width + i}
                        };
                        a.$.extend(l, p[k[0]]), 2 == k.length && (l.left = "left" == k[1] ? f.left : f.left + f.width - g);
                        var q = this.checkBoundary(l.left, l.top, g, h);
                        if (q) {
                            switch (q) {
                                case"x":
                                    j = 2 == k.length ? k[0] + "-" + (l.left < 0 ? "left" : "right") : l.left < 0 ? "right" : "left";
                                    break;
                                case"y":
                                    j = 2 == k.length ? (l.top < 0 ? "bottom" : "top") + "-" + k[1] : l.top < 0 ? "bottom" : "top";
                                    break;
                                case"xy":
                                    j = 2 == k.length ? (l.top < 0 ? "bottom" : "top") + "-" + (l.left < 0 ? "left" : "right") : l.left < 0 ? "right" : "left"
                            }
                            k = j.split("-"), a.$.extend(l, p[k[0]]), 2 == k.length && (l.left = "left" == k[1] ? f.left : f.left + f.width - g)
                        }
                        l.left -= a.$body.position().left, c = setTimeout(function () {
                            b.css(l).attr("class", ["uk-tooltip", "uk-tooltip-" + j, e.options.cls].join(" ")), e.options.animation ? b.css({
                                opacity: 0,
                                display: "block"
                            }).addClass(e.options.activeClass).animate({opacity: 1}, parseInt(e.options.animation, 10) || 400) : b.show().addClass(e.options.activeClass), c = !1, d = setInterval(function () {
                                e.element.is(":visible") || e.hide()
                            }, 150)
                        }, parseInt(this.options.delay, 10) || 0)
                    }
                }, hide: function () {
                    if (!this.element.is("input") || this.element[0] !== document.activeElement)if (c && clearTimeout(c), d && clearTimeout(d), b.stop(), this.options.animation) {
                        var a = this;
                        b.fadeOut(parseInt(this.options.animation, 10) || 400, function () {
                            b.removeClass(a.options.activeClass)
                        })
                    } else b.hide().removeClass(this.options.activeClass)
                }, content: function () {
                    return this.tip
                }, checkBoundary: function (b, c, d, e) {
                    var f = "";
                    return (b < 0 || b - a.$win.scrollLeft() + d > window.innerWidth) && (f += "x"), (c < 0 || c - a.$win.scrollTop() + e > window.innerHeight) && (f += "y"), f
                }
            }), a.tooltip
        })
    }, {}],
    15: [function (a, b, c) {
        !function (a) {
            if ("function" == typeof define && define.amd && define("uikit", function () {
                    var b = window.UIkit || a(window, window.jQuery, window.document);
                    return b.load = function (a, c, d, e) {
                        var f, g = a.split(","), h = [], i = (e.config && e.config.uikit && e.config.uikit.base ? e.config.uikit.base : "").replace(/\/+$/g, "");
                        if (!i)throw new Error("Please define base path to UIkit in the requirejs config.");
                        for (f = 0; f < g.length; f += 1) {
                            var j = g[f].replace(/\./g, "/");
                            h.push(i + "/components/" + j)
                        }
                        c(h, function () {
                            d(b)
                        })
                    }, b
                }), !window.jQuery)throw new Error("UIkit requires jQuery");
            window && window.jQuery && a(window, window.jQuery, window.document)
        }(function (a, b, c) {
            "use strict";
            var d = {}, e = a.UIkit ? Object.create(a.UIkit) : void 0;
            if (d.version = "2.24.3", d.noConflict = function () {
                    return e && (a.UIkit = e, b.UIkit = e, b.fn.uk = e.fn), d
                }, d.prefix = function (a) {
                    return a
                }, d.$ = b, d.$doc = d.$(document), d.$win = d.$(window), d.$html = d.$("html"), d.support = {}, d.support.transition = function () {
                    var a = function () {
                        var a, b = c.body || c.documentElement, d = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                        for (a in d)if (void 0 !== b.style[a])return d[a]
                    }();
                    return a && {end: a}
                }(), d.support.animation = function () {
                    var a = function () {
                        var a, b = c.body || c.documentElement, d = {
                            WebkitAnimation: "webkitAnimationEnd",
                            MozAnimation: "animationend",
                            OAnimation: "oAnimationEnd oanimationend",
                            animation: "animationend"
                        };
                        for (a in d)if (void 0 !== b.style[a])return d[a]
                    }();
                    return a && {end: a}
                }(), function () {
                    Date.now = Date.now || function () {
                            return (new Date).getTime()
                        };
                    for (var a = ["webkit", "moz"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
                        var c = a[b];
                        window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]
                    }
                    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                        var d = 0;
                        window.requestAnimationFrame = function (a) {
                            var b = Date.now(), c = Math.max(d + 16, b);
                            return setTimeout(function () {
                                a(d = c)
                            }, c - b)
                        }, window.cancelAnimationFrame = clearTimeout
                    }
                }(), d.support.touch = "ontouchstart" in document || a.DocumentTouch && document instanceof a.DocumentTouch || a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints > 0 || a.navigator.pointerEnabled && a.navigator.maxTouchPoints > 0 || !1, d.support.mutationobserver = a.MutationObserver || a.WebKitMutationObserver || null, d.Utils = {}, d.Utils.isFullscreen = function () {
                    return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1
                }, d.Utils.str2json = function (a, b) {
                    try {
                        return b ? JSON.parse(a.replace(/([\$\w]+)\s*:/g, function (a, b) {
                            return '"' + b + '":'
                        }).replace(/'([^']+)'/g, function (a, b) {
                            return '"' + b + '"'
                        })) : new Function("", "var json = " + a + "; return JSON.parse(JSON.stringify(json));")()
                    } catch (a) {
                        return !1
                    }
                }, d.Utils.debounce = function (a, b, c) {
                    var d;
                    return function () {
                        var e = this, f = arguments, g = function () {
                            d = null, c || a.apply(e, f)
                        }, h = c && !d;
                        clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
                    }
                }, d.Utils.removeCssRules = function (a) {
                    var b, c, d, e, f, g, h, i, j, k;
                    a && setTimeout(function () {
                        try {
                            for (k = document.styleSheets, e = 0, h = k.length; h > e; e++) {
                                for (d = k[e], c = [], d.cssRules = d.cssRules, b = f = 0, i = d.cssRules.length; i > f; b = ++f)d.cssRules[b].type === CSSRule.STYLE_RULE && a.test(d.cssRules[b].selectorText) && c.unshift(b);
                                for (g = 0, j = c.length; j > g; g++)d.deleteRule(c[g])
                            }
                        } catch (a) {
                        }
                    }, 0)
                }, d.Utils.isInView = function (a, c) {
                    var e = b(a);
                    if (!e.is(":visible"))return !1;
                    var f = d.$win.scrollLeft(), g = d.$win.scrollTop(), h = e.offset(), i = h.left, j = h.top;
                    return c = b.extend({
                        topoffset: 0,
                        leftoffset: 0
                    }, c), j + e.height() >= g && j - c.topoffset <= g + d.$win.height() && i + e.width() >= f && i - c.leftoffset <= f + d.$win.width()
                }, d.Utils.checkDisplay = function (a, c) {
                    var e = d.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", a || document);
                    return a && !e.length && (e = b(a)), e.trigger("display.uk.check"), c && ("string" != typeof c && (c = '[class*="uk-animation-"]'), e.find(c).each(function () {
                        var a = d.$(this), b = a.attr("class"), c = b.match(/uk\-animation\-(.+)/);
                        a.removeClass(c[0]).width(), a.addClass(c[0])
                    })), e
                }, d.Utils.options = function (a) {
                    if ("string" != b.type(a))return a;
                    -1 != a.indexOf(":") && "}" != a.trim().substr(-1) && (a = "{" + a + "}");
                    var c = a ? a.indexOf("{") : -1, e = {};
                    if (-1 != c)try {
                        e = d.Utils.str2json(a.substr(c))
                    } catch (a) {
                    }
                    return e
                }, d.Utils.animate = function (a, c) {
                    var e = b.Deferred();
                    return a = d.$(a), c = c, a.css("display", "none").addClass(c).one(d.support.animation.end, function () {
                        a.removeClass(c), e.resolve()
                    }).width(), a.css("display", ""), e.promise()
                }, d.Utils.uid = function (a) {
                    return (a || "id") + (new Date).getTime() + "RAND" + Math.ceil(1e5 * Math.random())
                }, d.Utils.template = function (a, b) {
                    for (var c, d, e, f, g = a.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), h = 0, i = [], j = 0; h < g.length;) {
                        if (c = g[h], c.match(/\{\{\s*(.+?)\s*\}\}/))switch (h += 1, c = g[h], d = c[0], e = c.substring(c.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), d) {
                            case"~":
                                i.push("for(var $i=0;$i<" + e + ".length;$i++) { var $item = " + e + "[$i];"), j++;
                                break;
                            case":":
                                i.push("for(var $key in " + e + ") { var $val = " + e + "[$key];"), j++;
                                break;
                            case"#":
                                i.push("if(" + e + ") {"), j++;
                                break;
                            case"^":
                                i.push("if(!" + e + ") {"), j++;
                                break;
                            case"/":
                                i.push("}"), j--;
                                break;
                            case"!":
                                i.push("__ret.push(" + e + ");");
                                break;
                            default:
                                i.push("__ret.push(escape(" + e + "));")
                        } else i.push("__ret.push('" + c.replace(/\'/g, "\\'") + "');");
                        h += 1
                    }
                    return f = new Function("$data", ["var __ret = [];", "try {", "with($data){", j ? '__ret = ["Not all blocks are closed correctly."]' : i.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), b ? f(b) : f
                }, d.Utils.events = {}, d.Utils.events.click = d.support.touch ? "tap" : "click", a.UIkit = d, d.fn = function (a, c) {
                    var e = arguments, f = a.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), g = f[1], h = f[2];
                    return d[g] ? this.each(function () {
                        var a = b(this), f = a.data(g);
                        f || a.data(g, f = d[g](this, h ? void 0 : c)), h && f[h].apply(f, Array.prototype.slice.call(e, 1))
                    }) : (b.error("UIkit component [" + g + "] does not exist."), this)
                }, b.UIkit = d, b.fn.uk = d.fn, d.langdirection = "rtl" == d.$html.attr("dir") ? "right" : "left", d.components = {}, d.component = function (a, c) {
                    var e = function (c, f) {
                        var g = this;
                        return this.UIkit = d, this.element = c ? d.$(c) : null, this.options = b.extend(!0, {}, this.defaults, f), this.plugins = {}, this.element && this.element.data(a, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(e.plugins)).forEach(function (a) {
                            e.plugins[a].init && (e.plugins[a].init(g), g.plugins[a] = !0)
                        }), this.trigger("init.uk.component", [a, this]), this
                    };
                    return e.plugins = {}, b.extend(!0, e.prototype, {
                        defaults: {plugins: []}, boot: function () {
                        }, init: function () {
                        }, on: function (a, b, c) {
                            return d.$(this.element || this).on(a, b, c)
                        }, one: function (a, b, c) {
                            return d.$(this.element || this).one(a, b, c)
                        }, off: function (a) {
                            return d.$(this.element || this).off(a)
                        }, trigger: function (a, b) {
                            return d.$(this.element || this).trigger(a, b)
                        }, find: function (a) {
                            return d.$(this.element ? this.element : []).find(a)
                        }, proxy: function (a, b) {
                            var c = this;
                            b.split(" ").forEach(function (b) {
                                c[b] || (c[b] = function () {
                                    return a[b].apply(a, arguments)
                                })
                            })
                        }, mixin: function (a, b) {
                            var c = this;
                            b.split(" ").forEach(function (b) {
                                c[b] || (c[b] = a[b].bind(c))
                            })
                        }, option: function () {
                            return 1 == arguments.length ? this.options[arguments[0]] || void 0 : void(2 == arguments.length && (this.options[arguments[0]] = arguments[1]))
                        }
                    }, c), this.components[a] = e, this[a] = function () {
                        var c, e;
                        if (arguments.length)switch (arguments.length) {
                            case 1:
                                "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? c = b(arguments[0]) : e = arguments[0];
                                break;
                            case 2:
                                c = b(arguments[0]), e = arguments[1]
                        }
                        return c && c.data(a) ? c.data(a) : new d.components[a](c, e)
                    }, d.domready && d.component.boot(a), e
                }, d.plugin = function (a, b, c) {
                    this.components[a].plugins[b] = c
                }, d.component.boot = function (a) {
                    d.components[a].prototype && d.components[a].prototype.boot && !d.components[a].booted && (d.components[a].prototype.boot.apply(d, []), d.components[a].booted = !0)
                }, d.component.bootComponents = function () {
                    for (var a in d.components)d.component.boot(a)
                }, d.domObservers = [], d.domready = !1, d.ready = function (a) {
                    d.domObservers.push(a), d.domready && a(document)
                }, d.on = function (a, b, c) {
                    return a && a.indexOf("ready.uk.dom") > -1 && d.domready && b.apply(d.$doc), d.$doc.on(a, b, c)
                }, d.one = function (a, b, c) {
                    return a && a.indexOf("ready.uk.dom") > -1 && d.domready ? (b.apply(d.$doc), d.$doc) : d.$doc.one(a, b, c)
                }, d.trigger = function (a, b) {
                    return d.$doc.trigger(a, b)
                }, d.domObserve = function (a, b) {
                    d.support.mutationobserver && (b = b || function () {
                        }, d.$(a).each(function () {
                        var a = this, c = d.$(a);
                        if (!c.data("observer"))try {
                            var e = new d.support.mutationobserver(d.Utils.debounce(function () {
                                b.apply(a, []), c.trigger("changed.uk.dom")
                            }, 50));
                            e.observe(a, {childList: !0, subtree: !0}), c.data("observer", e)
                        } catch (a) {
                        }
                    }))
                }, d.init = function (a) {
                    a = a || document, d.domObservers.forEach(function (b) {
                        b(a)
                    })
                }, d.on("domready.uk.dom", function () {
                    d.init(), d.domready && d.Utils.checkDisplay()
                }), document.addEventListener("DOMContentLoaded", function () {
                    var a = function () {
                        d.$body = d.$("body"), d.ready(function () {
                            d.domObserve("[data-uk-observe]")
                        }), d.on("changed.uk.dom", function (a) {
                            d.init(a.target), d.Utils.checkDisplay(a.target)
                        }), d.trigger("beforeready.uk.dom"), d.component.bootComponents(), requestAnimationFrame(function () {
                            var a, b = {x: window.pageXOffset, y: window.pageYOffset}, c = function () {
                                (b.x != window.pageXOffset || b.y != window.pageYOffset) && (a = {
                                    x: 0,
                                    y: 0
                                }, window.pageXOffset != b.x && (a.x = window.pageXOffset > b.x ? 1 : -1), window.pageYOffset != b.y && (a.y = window.pageYOffset > b.y ? 1 : -1), b = {
                                    dir: a,
                                    x: window.pageXOffset,
                                    y: window.pageYOffset
                                }, d.$doc.trigger("scrolling.uk.document", [b])), requestAnimationFrame(c)
                            };
                            return d.support.touch && d.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", c), (b.x || b.y) && c(), c
                        }()), d.trigger("domready.uk.dom"), d.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && d.$win.on("load orientationchange resize", d.Utils.debounce(function () {
                            var a = function () {
                                return b(".uk-height-viewport").css("height", window.innerHeight), a
                            };
                            return a()
                        }(), 100)), d.trigger("afterready.uk.dom"), d.domready = !0
                    };
                    return ("complete" == document.readyState || "interactive" == document.readyState) && setTimeout(a), a
                }()), d.$html.addClass(d.support.touch ? "uk-touch" : "uk-notouch"), d.support.touch) {
                var f, g = !1, h = "uk-hover", i = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
                d.$html.on("mouseenter touchstart MSPointerDown pointerdown", i, function () {
                    g && b("." + h).removeClass(h), g = b(this).addClass(h)
                }).on("mouseleave touchend MSPointerUp pointerup", function (a) {
                    f = b(a.target).parents(i), g && g.not(f).removeClass(h)
                })
            }
            return d
        }), function (a) {
            function b(a, b, c, d) {
                return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
            }

            function c() {
                j = null, l.last && (void 0 !== l.el && l.el.trigger("longTap"), l = {})
            }

            function d() {
                j && clearTimeout(j), j = null
            }

            function e() {
                g && clearTimeout(g), h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), g = h = i = j = null, l = {}
            }

            function f(a) {
                return a.pointerType == a.MSPOINTER_TYPE_TOUCH && a.isPrimary
            }

            if (!a.fn.swipeLeft) {
                var g, h, i, j, k, l = {}, m = 750;
                a(function () {
                    var n, o, p, q = 0, r = 0;
                    "MSGesture" in window && (k = new MSGesture, k.target = document.body), a(document).on("MSGestureEnd gestureend", function (a) {
                        var b = a.originalEvent.velocityX > 1 ? "Right" : a.originalEvent.velocityX < -1 ? "Left" : a.originalEvent.velocityY > 1 ? "Down" : a.originalEvent.velocityY < -1 ? "Up" : null;
                        b && void 0 !== l.el && (l.el.trigger("swipe"), l.el.trigger("swipe" + b))
                    }).on("touchstart MSPointerDown pointerdown", function (b) {
                        ("MSPointerDown" != b.type || f(b.originalEvent)) && (p = "MSPointerDown" == b.type || "pointerdown" == b.type ? b : b.originalEvent.touches[0], n = Date.now(), o = n - (l.last || n), l.el = a("tagName" in p.target ? p.target : p.target.parentNode), g && clearTimeout(g), l.x1 = p.pageX, l.y1 = p.pageY, o > 0 && 250 >= o && (l.isDoubleTap = !0), l.last = n, j = setTimeout(c, m), !k || "MSPointerDown" != b.type && "pointerdown" != b.type && "touchstart" != b.type || k.addPointer(b.originalEvent.pointerId))
                    }).on("touchmove MSPointerMove pointermove", function (a) {
                        ("MSPointerMove" != a.type || f(a.originalEvent)) && (p = "MSPointerMove" == a.type || "pointermove" == a.type ? a : a.originalEvent.touches[0], d(), l.x2 = p.pageX, l.y2 = p.pageY, q += Math.abs(l.x1 - l.x2), r += Math.abs(l.y1 - l.y2))
                    }).on("touchend MSPointerUp pointerup", function (c) {
                        ("MSPointerUp" != c.type || f(c.originalEvent)) && (d(), l.x2 && Math.abs(l.x1 - l.x2) > 30 || l.y2 && Math.abs(l.y1 - l.y2) > 30 ? i = setTimeout(function () {
                            void 0 !== l.el && (l.el.trigger("swipe"), l.el.trigger("swipe" + b(l.x1, l.x2, l.y1, l.y2))), l = {}
                        }, 0) : "last" in l && (isNaN(q) || 30 > q && 30 > r ? h = setTimeout(function () {
                            var b = a.Event("tap");
                            b.cancelTouch = e, void 0 !== l.el && l.el.trigger(b), l.isDoubleTap ? (void 0 !== l.el && l.el.trigger("doubleTap"), l = {}) : g = setTimeout(function () {
                                g = null, void 0 !== l.el && l.el.trigger("singleTap"), l = {}
                            }, 250)
                        }, 0) : l = {}, q = r = 0))
                    }).on("touchcancel MSPointerCancel", e), a(window).on("scroll", e)
                }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (b) {
                    a.fn[b] = function (c) {
                        return a(this).on(b, c)
                    }
                })
            }
        }(jQuery), function (a) {
            "use strict";
            var b = [];
            a.component("stackMargin", {
                defaults: {cls: "uk-margin-small-top", rowfirst: !1}, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-margin]", b).each(function () {
                            var b, c = a.$(this);
                            c.data("stackMargin") || (b = a.stackMargin(c, a.Utils.options(c.attr("data-uk-margin"))))
                        })
                    })
                }, init: function () {
                    var c = this;
                    this.columns = [], a.$win.on("resize orientationchange", function () {
                        var b = function () {
                            c.process()
                        };
                        return a.$(function () {
                            b(), a.$win.on("load", b)
                        }), a.Utils.debounce(b, 20)
                    }()), a.$html.on("changed.uk.dom", function () {
                        c.process()
                    }), this.on("display.uk.check", function () {
                        this.element.is(":visible") && this.process()
                    }.bind(this)), b.push(this)
                }, process: function () {
                    var b = this;
                    if (this.columns = this.element.children(), a.Utils.stackMargin(this.columns, this.options), !this.options.rowfirst)return this;
                    var c = this.columns.removeClass(this.options.rowfirst).filter(":visible").first().position();
                    return c && this.columns.each(function () {
                        a.$(this)[a.$(this).position().left == c.left ? "addClass" : "removeClass"](b.options.rowfirst)
                    }), this
                }, revert: function () {
                    return this.columns.removeClass(this.options.cls), this
                }
            }), function () {
                var b = [], c = function (a) {
                    if (a.is(":visible")) {
                        var b = a.parent().width(), c = a.data("width"), d = b / c, e = Math.floor(d * a.data("height"));
                        a.css({height: c > b ? e : a.data("height")})
                    }
                };
                a.component("responsiveElement", {
                    defaults: {}, boot: function () {
                        a.ready(function (b) {
                            a.$("iframe.uk-responsive-width, [data-uk-responsive]", b).each(function () {
                                var b, c = a.$(this);
                                c.data("responsiveIframe") || (b = a.responsiveElement(c, {}))
                            })
                        })
                    }, init: function () {
                        var a = this.element;
                        a.attr("width") && a.attr("height") && (a.data({
                            width: a.attr("width"),
                            height: a.attr("height")
                        }).on("display.uk.check", function () {
                            c(a)
                        }), c(a), b.push(a))
                    }
                }), a.$win.on("resize load", a.Utils.debounce(function () {
                    b.forEach(function (a) {
                        c(a)
                    })
                }, 15))
            }(), a.Utils.stackMargin = function (b, c) {
                c = a.$.extend({cls: "uk-margin-small-top"}, c), c.cls = c.cls, b = a.$(b).removeClass(c.cls);
                var d = !1, e = b.filter(":visible:first"), f = !!e.length && e.position().top + e.outerHeight() - 1;
                f !== !1 && 1 != b.length && b.each(function () {
                    var b = a.$(this);
                    b.is(":visible") && (d ? b.addClass(c.cls) : b.position().top >= f && (d = b.addClass(c.cls)))
                })
            }, a.Utils.matchHeights = function (b, c) {
                b = a.$(b).css("min-height", ""), c = a.$.extend({row: !0}, c);
                var d = function (b) {
                    if (!(b.length < 2)) {
                        var c = 0;
                        b.each(function () {
                            c = Math.max(c, a.$(this).outerHeight())
                        }).each(function () {
                            var b = a.$(this), d = c - ("border-box" == b.css("box-sizing") ? 0 : b.outerHeight() - b.height());
                            b.css("min-height", d + "px")
                        })
                    }
                };
                c.row ? (b.first().width(), setTimeout(function () {
                    var c = !1, e = [];
                    b.each(function () {
                        var b = a.$(this), f = b.offset().top;
                        f != c && e.length && (d(a.$(e)), e = [], f = b.offset().top), e.push(b), c = f
                    }), e.length && d(a.$(e))
                }, 0)) : d(b)
            }, function (b) {
                a.Utils.inlineSvg = function (c, d) {
                    a.$(c || 'img[src$=".svg"]', d || document).each(function () {
                        var c = a.$(this), d = c.attr("src");
                        if (!b[d]) {
                            var e = a.$.Deferred();
                            a.$.get(d, {nc: Math.random()}, function (b) {
                                e.resolve(a.$(b).find("svg"))
                            }), b[d] = e.promise()
                        }
                        b[d].then(function (b) {
                            var d = a.$(b).clone();
                            c.attr("id") && d.attr("id", c.attr("id")), c.attr("class") && d.attr("class", c.attr("class")), c.attr("style") && d.attr("style", c.attr("style")), c.attr("width") && (d.attr("width", c.attr("width")), c.attr("height") || d.removeAttr("height")), c.attr("height") && (d.attr("height", c.attr("height")), c.attr("width") || d.removeAttr("width")), c.replaceWith(d)
                        })
                    })
                }, a.ready(function (b) {
                    a.Utils.inlineSvg("[data-uk-svg]", b)
                })
            }({})
        }(UIkit), function (a) {
            "use strict";
            function b(b, c) {
                c = a.$.extend({
                    duration: 1e3, transition: "easeOutExpo", offset: 0, complete: function () {
                    }
                }, c);
                var d = b.offset().top - c.offset, e = a.$doc.height(), f = window.innerHeight;
                d + f > e && (d = e - f), a.$("html,body").stop().animate({scrollTop: d}, c.duration, c.transition).promise().done(c.complete)
            }

            a.component("smoothScroll", {
                boot: function () {
                    a.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function () {
                        var b = a.$(this);
                        return b.data("smoothScroll") || (a.smoothScroll(b, a.Utils.options(b.attr("data-uk-smooth-scroll"))), b.trigger("click")), !1
                    })
                }, init: function () {
                    var c = this;
                    this.on("click", function (d) {
                        d.preventDefault(), b(a.$(this.hash).length ? a.$(this.hash) : a.$("body"), c.options)
                    })
                }
            }), a.Utils.scrollToElement = b, a.$.easing.easeOutExpo || (a.$.easing.easeOutExpo = function (a, b, c, d, e) {
                return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
            })
        }(UIkit), function (a) {
            "use strict";
            var b = a.$win, c = a.$doc, d = [], e = function () {
                for (var a = 0; a < d.length; a++)window.requestAnimationFrame.apply(window, [d[a].check])
            };
            a.component("scrollspy", {
                defaults: {
                    target: !1,
                    cls: "uk-scrollspy-inview",
                    initcls: "uk-scrollspy-init-inview",
                    topoffset: 0,
                    leftoffset: 0,
                    repeat: !1,
                    delay: 0
                }, boot: function () {
                    c.on("scrolling.uk.document", e), b.on("load resize orientationchange", a.Utils.debounce(e, 50)), a.ready(function (b) {
                        a.$("[data-uk-scrollspy]", b).each(function () {
                            var b = a.$(this);
                            b.data("scrollspy") || a.scrollspy(b, a.Utils.options(b.attr("data-uk-scrollspy")))
                        })
                    })
                }, init: function () {
                    var b, c = this, e = this.options.cls.split(/,/), f = function () {
                        var d = c.options.target ? c.element.find(c.options.target) : c.element, f = 1 === d.length ? 1 : 0, g = 0;
                        d.each(function () {
                            var d = a.$(this), h = d.data("inviewstate"), i = a.Utils.isInView(d, c.options), j = d.data("ukScrollspyCls") || e[g].trim();
                            !i || h || d.data("scrollspy-idle") || (b || (d.addClass(c.options.initcls), c.offset = d.offset(), b = !0, d.trigger("init.uk.scrollspy")), d.data("scrollspy-idle", setTimeout(function () {
                                d.addClass("uk-scrollspy-inview").toggleClass(j).width(), d.trigger("inview.uk.scrollspy"), d.data("scrollspy-idle", !1), d.data("inviewstate", !0)
                            }, c.options.delay * f)), f++), !i && h && c.options.repeat && (d.data("scrollspy-idle") && clearTimeout(d.data("scrollspy-idle")), d.removeClass("uk-scrollspy-inview").toggleClass(j), d.data("inviewstate", !1), d.trigger("outview.uk.scrollspy")), g = e[g + 1] ? g + 1 : 0
                        })
                    };
                    f(), this.check = f, d.push(this)
                }
            });
            var f = [], g = function () {
                for (var a = 0; a < f.length; a++)window.requestAnimationFrame.apply(window, [f[a].check])
            };
            a.component("scrollspynav", {
                defaults: {
                    cls: "uk-active",
                    closest: !1,
                    topoffset: 0,
                    leftoffset: 0,
                    smoothscroll: !1
                }, boot: function () {
                    c.on("scrolling.uk.document", g), b.on("resize orientationchange", a.Utils.debounce(g, 50)), a.ready(function (b) {
                        a.$("[data-uk-scrollspy-nav]", b).each(function () {
                            var b = a.$(this);
                            b.data("scrollspynav") || a.scrollspynav(b, a.Utils.options(b.attr("data-uk-scrollspy-nav")))
                        })
                    })
                }, init: function () {
                    var c, d = [], e = this.find("a[href^='#']").each(function () {
                        "#" !== this.getAttribute("href").trim() && d.push(this.getAttribute("href"))
                    }), g = a.$(d.join(",")), h = this.options.cls, i = this.options.closest || this.options.closest, j = this, k = function () {
                        c = [];
                        for (var d = 0; d < g.length; d++)a.Utils.isInView(g.eq(d), j.options) && c.push(g.eq(d));
                        if (c.length) {
                            var f, k = b.scrollTop(), l = function () {
                                for (var a = 0; a < c.length; a++)if (c[a].offset().top >= k)return c[a]
                            }();
                            if (!l)return;
                            j.options.closest ? (e.blur().closest(i).removeClass(h), f = e.filter("a[href='#" + l.attr("id") + "']").closest(i).addClass(h)) : f = e.removeClass(h).filter("a[href='#" + l.attr("id") + "']").addClass(h), j.element.trigger("inview.uk.scrollspynav", [l, f])
                        }
                    };
                    this.options.smoothscroll && a.smoothScroll && e.each(function () {
                        a.smoothScroll(this, j.options.smoothscroll)
                    }), k(), this.element.data("scrollspynav", this), this.check = k, f.push(this)
                }
            })
        }(UIkit), function (a) {
            "use strict";
            var b = [];
            a.component("toggle", {
                defaults: {target: !1, cls: "uk-hidden", animation: !1, duration: 200},
                boot: function () {
                    a.ready(function (c) {
                        a.$("[data-uk-toggle]", c).each(function () {
                            var b = a.$(this);
                            b.data("toggle") || a.toggle(b, a.Utils.options(b.attr("data-uk-toggle")))
                        }), setTimeout(function () {
                            b.forEach(function (a) {
                                a.getToggles()
                            })
                        }, 0)
                    })
                },
                init: function () {
                    var a = this;
                    this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.getToggles(), this.on("click", function (b) {
                        a.element.is('a[href="#"]') && b.preventDefault(), a.toggle()
                    }), b.push(this)
                },
                toggle: function () {
                    if (this.totoggle.length) {
                        if (this.options.animation && a.support.animation) {
                            var b = this, c = this.options.animation.split(",");
                            1 == c.length && (c[1] = c[0]), c[0] = c[0].trim(), c[1] = c[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.each(function () {
                                var d = a.$(this);
                                d.hasClass(b.options.cls) ? (d.toggleClass(b.options.cls), a.Utils.animate(d, c[0]).then(function () {
                                    d.css("animation-duration", ""), a.Utils.checkDisplay(d)
                                })) : a.Utils.animate(this, c[1] + " uk-animation-reverse").then(function () {
                                    d.toggleClass(b.options.cls).css("animation-duration", ""), a.Utils.checkDisplay(d)
                                })
                            })
                        } else this.totoggle.toggleClass(this.options.cls), a.Utils.checkDisplay(this.totoggle);
                        this.updateAria()
                    }
                },
                getToggles: function () {
                    this.totoggle = this.options.target ? a.$(this.options.target) : [], this.updateAria()
                },
                updateAria: function () {
                    this.aria && this.totoggle.length && this.totoggle.each(function () {
                        a.$(this).attr("aria-hidden", a.$(this).hasClass("uk-hidden"))
                    })
                }
            })
        }(UIkit), function (a) {
            "use strict";
            a.component("alert", {
                defaults: {fade: !0, duration: 200, trigger: ".uk-alert-close"}, boot: function () {
                    a.$html.on("click.alert.uikit", "[data-uk-alert]", function (b) {
                        var c = a.$(this);
                        if (!c.data("alert")) {
                            var d = a.alert(c, a.Utils.options(c.attr("data-uk-alert")));
                            a.$(b.target).is(d.options.trigger) && (b.preventDefault(), d.close())
                        }
                    })
                }, init: function () {
                    var a = this;
                    this.on("click", this.options.trigger, function (b) {
                        b.preventDefault(), a.close()
                    })
                }, close: function () {
                    var a = this.trigger("close.uk.alert"), b = function () {
                        this.trigger("closed.uk.alert").remove()
                    }.bind(this);
                    this.options.fade ? a.css("overflow", "hidden").css("max-height", a.height()).animate({
                        height: 0,
                        opacity: 0,
                        "padding-top": 0,
                        "padding-bottom": 0,
                        "margin-top": 0,
                        "margin-bottom": 0
                    }, this.options.duration, b) : b()
                }
            })
        }(UIkit), function (a) {
            "use strict";
            a.component("buttonRadio", {
                defaults: {activeClass: "uk-active", target: ".uk-button"}, boot: function () {
                    a.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function (b) {
                        var c = a.$(this);
                        if (!c.data("buttonRadio")) {
                            var d = a.buttonRadio(c, a.Utils.options(c.attr("data-uk-button-radio"))), e = a.$(b.target);
                            e.is(d.options.target) && e.trigger("click")
                        }
                    })
                }, init: function () {
                    var b = this;
                    this.find(b.options.target).attr("aria-checked", "false").filter("." + b.options.activeClass).attr("aria-checked", "true"),
                        this.on("click", this.options.target, function (c) {
                            var d = a.$(this);
                            d.is('a[href="#"]') && c.preventDefault(), b.find(b.options.target).not(d).removeClass(b.options.activeClass).blur(), d.addClass(b.options.activeClass), b.find(b.options.target).not(d).attr("aria-checked", "false"), d.attr("aria-checked", "true"), b.trigger("change.uk.button", [d])
                        })
                }, getSelected: function () {
                    return this.find("." + this.options.activeClass)
                }
            }), a.component("buttonCheckbox", {
                defaults: {activeClass: "uk-active", target: ".uk-button"},
                boot: function () {
                    a.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function (b) {
                        var c = a.$(this);
                        if (!c.data("buttonCheckbox")) {
                            var d = a.buttonCheckbox(c, a.Utils.options(c.attr("data-uk-button-checkbox"))), e = a.$(b.target);
                            e.is(d.options.target) && e.trigger("click")
                        }
                    })
                },
                init: function () {
                    var b = this;
                    this.find(b.options.target).attr("aria-checked", "false").filter("." + b.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (c) {
                        var d = a.$(this);
                        d.is('a[href="#"]') && c.preventDefault(), d.toggleClass(b.options.activeClass).blur(), d.attr("aria-checked", d.hasClass(b.options.activeClass)), b.trigger("change.uk.button", [d])
                    })
                },
                getSelected: function () {
                    return this.find("." + this.options.activeClass)
                }
            }), a.component("button", {
                defaults: {}, boot: function () {
                    a.$html.on("click.button.uikit", "[data-uk-button]", function () {
                        var b = a.$(this);
                        b.data("button") || (a.button(b, a.Utils.options(b.attr("data-uk-button"))), b.trigger("click"))
                    })
                }, init: function () {
                    var a = this;
                    this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function (b) {
                        a.element.is('a[href="#"]') && b.preventDefault(), a.toggle(), a.trigger("change.uk.button", [a.element.blur().hasClass("uk-active")])
                    })
                }, toggle: function () {
                    this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"))
                }
            })
        }(UIkit), function (a) {
            "use strict";
            function b(b, c, d, e) {
                if (b = a.$(b), c = a.$(c), d = d || window.innerWidth, e = e || b.offset(), c.length) {
                    var f = c.outerWidth();
                    if (b.css("min-width", f), "right" == a.langdirection) {
                        var g = d - (c.offset().left + f), h = d - (b.offset().left + b.outerWidth());
                        b.css("margin-right", g - h)
                    } else b.css("margin-left", c.offset().left - e.left)
                }
            }

            var c, d = !1, e = {
                x: {
                    "bottom-left": "bottom-right",
                    "bottom-right": "bottom-left",
                    "bottom-center": "bottom-right",
                    "top-left": "top-right",
                    "top-right": "top-left",
                    "top-center": "top-right",
                    "left-top": "right",
                    "left-bottom": "right-bottom",
                    "left-center": "right-center",
                    "right-top": "left",
                    "right-bottom": "left-bottom",
                    "right-center": "left-center"
                },
                y: {
                    "bottom-left": "top-left",
                    "bottom-right": "top-right",
                    "bottom-center": "top-center",
                    "top-left": "bottom-left",
                    "top-right": "bottom-right",
                    "top-center": "bottom-center",
                    "left-top": "top-left",
                    "left-bottom": "left-bottom",
                    "left-center": "top-left",
                    "right-top": "top-left",
                    "right-bottom": "bottom-left",
                    "right-center": "top-left"
                },
                xy: {}
            };
            a.component("dropdown", {
                defaults: {
                    mode: "hover",
                    pos: "bottom-left",
                    offset: 0,
                    remaintime: 800,
                    justify: !1,
                    boundary: a.$win,
                    delay: 0,
                    dropdownSelector: ".uk-dropdown,.uk-dropdown-blank",
                    hoverDelayIdle: 250,
                    preventflip: !1
                }, remainIdle: !1, boot: function () {
                    var b = a.support.touch ? "click" : "mouseenter";
                    a.$html.on(b + ".dropdown.uikit", "[data-uk-dropdown]", function (c) {
                        var d = a.$(this);
                        if (!d.data("dropdown")) {
                            var e = a.dropdown(d, a.Utils.options(d.attr("data-uk-dropdown")));
                            ("click" == b || "mouseenter" == b && "hover" == e.options.mode) && e.element.trigger(b), e.element.find(e.options.dropdownSelector).length && c.preventDefault()
                        }
                    })
                }, init: function () {
                    var b = this;
                    this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function () {
                        return -1 !== a.$.inArray(a.$(this).css("position"), ["relative", "fixed", "absolute"])
                    }).slice(0, 1), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = !!this.options.justify && a.$(this.options.justify), this.boundary = a.$(this.options.boundary), this.boundary.length || (this.boundary = a.$win), this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), "click" == this.options.mode || a.support.touch ? this.on("click.uikit.dropdown", function (c) {
                        var d = a.$(c.target);
                        d.parents(b.options.dropdownSelector).length || ((d.is("a[href='#']") || d.parent().is("a[href='#']") || b.dropdown.length && !b.dropdown.is(":visible")) && c.preventDefault(), d.blur()), b.element.hasClass("uk-open") ? (!b.dropdown.find(c.target).length || d.is(".uk-dropdown-close") || d.parents(".uk-dropdown-close").length) && b.hide() : b.show()
                    }) : this.on("mouseenter", function () {
                        b.trigger("pointerenter.uk.dropdown", [b]), b.remainIdle && clearTimeout(b.remainIdle), c && clearTimeout(c), d && d == b || (c = d && d != b ? setTimeout(function () {
                            c = setTimeout(b.show.bind(b), b.options.delay)
                        }, b.options.hoverDelayIdle) : setTimeout(b.show.bind(b), b.options.delay))
                    }).on("mouseleave", function () {
                        c && clearTimeout(c), b.remainIdle = setTimeout(function () {
                            d && d == b && b.hide()
                        }, b.options.remaintime), b.trigger("pointerleave.uk.dropdown", [b])
                    }).on("click", function (c) {
                        var e = a.$(c.target);
                        return b.remainIdle && clearTimeout(b.remainIdle), d && d == b ? void((!b.dropdown.find(c.target).length || e.is(".uk-dropdown-close") || e.parents(".uk-dropdown-close").length) && b.hide()) : ((e.is("a[href='#']") || e.parent().is("a[href='#']")) && c.preventDefault(), void b.show())
                    })
                }, show: function () {
                    a.$html.off("click.outer.dropdown"), d && d != this && d.hide(!0), c && clearTimeout(c), this.trigger("beforeshow.uk.dropdown", [this]), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.trigger("show.uk.dropdown", [this]), a.Utils.checkDisplay(this.dropdown, !0), d = this, this.registerOuterClick()
                }, hide: function (a) {
                    this.trigger("beforehide.uk.dropdown", [this, a]), this.element.removeClass("uk-open"), this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), this.trigger("hide.uk.dropdown", [this, a]), d == this && (d = !1)
                }, registerOuterClick: function () {
                    var b = this;
                    a.$html.off("click.outer.dropdown"), setTimeout(function () {
                        a.$html.on("click.outer.dropdown", function (e) {
                            c && clearTimeout(c), a.$(e.target), d != b || b.element.find(e.target).length || (b.hide(!0), a.$html.off("click.outer.dropdown"))
                        })
                    }, 10)
                }, checkDimensions: function () {
                    if (this.dropdown.length) {
                        this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack").css({
                            "top-left": "",
                            left: "",
                            "margin-left": "",
                            "margin-right": ""
                        }), this.justified && this.justified.length && this.dropdown.css("min-width", "");
                        var c, d = a.$.extend({}, this.offsetParent.offset(), {
                            width: this.offsetParent[0].offsetWidth,
                            height: this.offsetParent[0].offsetHeight
                        }), f = this.options.offset, g = this.dropdown, h = (g.show().offset() || {
                            left: 0,
                            top: 0
                        }, g.outerWidth()), i = g.outerHeight(), j = this.boundary.width(), k = (this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : {
                            top: 0,
                            left: 0
                        }, this.options.pos), l = {
                            "bottom-left": {top: 0 + d.height + f, left: 0},
                            "bottom-right": {top: 0 + d.height + f, left: 0 + d.width - h},
                            "bottom-center": {top: 0 + d.height + f, left: 0 + d.width / 2 - h / 2},
                            "top-left": {top: 0 - i - f, left: 0},
                            "top-right": {top: 0 - i - f, left: 0 + d.width - h},
                            "top-center": {top: 0 - i - f, left: 0 + d.width / 2 - h / 2},
                            "left-top": {top: 0, left: 0 - h - f},
                            "left-bottom": {top: 0 + d.height - i, left: 0 - h - f},
                            "left-center": {top: 0 + d.height / 2 - i / 2, left: 0 - h - f},
                            "right-top": {top: 0, left: 0 + d.width + f},
                            "right-bottom": {top: 0 + d.height - i, left: 0 + d.width + f},
                            "right-center": {top: 0 + d.height / 2 - i / 2, left: 0 + d.width + f}
                        }, m = {};
                        if (c = k.split("-"), m = l[k] ? l[k] : l["bottom-left"], this.justified && this.justified.length)b(g.css({left: 0}), this.justified, j); else if (this.options.preventflip !== !0) {
                            var n;
                            switch (this.checkBoundary(d.left + m.left, d.top + m.top, h, i, j)) {
                                case"x":
                                    "x" !== this.options.preventflip && (n = e.x[k] || "right-top");
                                    break;
                                case"y":
                                    "y" !== this.options.preventflip && (n = e.y[k] || "top-left");
                                    break;
                                case"xy":
                                    this.options.preventflip || (n = e.xy[k] || "right-bottom")
                            }
                            n && (c = n.split("-"), m = l[n] ? l[n] : l["bottom-left"], this.checkBoundary(d.left + m.left, d.top + m.top, h, i, j) && (c = k.split("-"), m = l[k] ? l[k] : l["bottom-left"]))
                        }
                        h > j && (g.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])), g.css(m).css("display", "").addClass("uk-dropdown-" + c[0])
                    }
                }, checkBoundary: function (b, c, d, e, f) {
                    var g = "";
                    return (0 > b || b - a.$win.scrollLeft() + d > f) && (g += "x"), (c - a.$win.scrollTop() < 0 || c - a.$win.scrollTop() + e > window.innerHeight) && (g += "y"), g
                }
            }), a.component("dropdownOverlay", {
                defaults: {justify: !1, cls: "", duration: 200}, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-dropdown-overlay]", b).each(function () {
                            var b = a.$(this);
                            b.data("dropdownOverlay") || a.dropdownOverlay(b, a.Utils.options(b.attr("data-uk-dropdown-overlay")))
                        })
                    })
                }, init: function () {
                    var c = this;
                    this.justified = !!this.options.justify && a.$(this.options.justify), this.overlay = this.element.find("uk-dropdown-overlay"), this.overlay.length || (this.overlay = a.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), this.overlay.addClass(this.options.cls), this.on({
                        "beforeshow.uk.dropdown": function (a, d) {
                            c.dropdown = d, c.justified && c.justified.length && b(c.overlay.css({
                                display: "block",
                                "margin-left": "",
                                "margin-right": ""
                            }), c.justified, c.justified.outerWidth())
                        }, "show.uk.dropdown": function () {
                            var b = c.dropdown.dropdown.outerHeight(!0);
                            c.dropdown.element.removeClass("uk-open"), c.overlay.stop().css("display", "block").animate({height: b}, c.options.duration, function () {
                                c.dropdown.dropdown.css("visibility", ""), c.dropdown.element.addClass("uk-open"), a.Utils.checkDisplay(c.dropdown.dropdown, !0)
                            }), c.pointerleave = !1
                        }, "hide.uk.dropdown": function () {
                            c.overlay.stop().animate({height: 0}, c.options.duration)
                        }, "pointerenter.uk.dropdown": function () {
                            clearTimeout(c.remainIdle)
                        }, "pointerleave.uk.dropdown": function () {
                            c.pointerleave = !0
                        }
                    }), this.overlay.on({
                        mouseenter: function () {
                            c.remainIdle && (clearTimeout(c.dropdown.remainIdle), clearTimeout(c.remainIdle))
                        }, mouseleave: function () {
                            c.pointerleave && d && (c.remainIdle = setTimeout(function () {
                                d && d.hide()
                            }, d.options.remaintime))
                        }
                    })
                }
            })
        }(UIkit), function (a) {
            "use strict";
            var b = [];
            a.component("gridMatchHeight", {
                defaults: {target: !1, row: !0, ignorestacked: !1}, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-grid-match]", b).each(function () {
                            var b, c = a.$(this);
                            c.data("gridMatchHeight") || (b = a.gridMatchHeight(c, a.Utils.options(c.attr("data-uk-grid-match"))))
                        })
                    })
                }, init: function () {
                    var c = this;
                    this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (a.$win.on("load resize orientationchange", function () {
                        var b = function () {
                            c.match()
                        };
                        return a.$(function () {
                            b()
                        }), a.Utils.debounce(b, 50)
                    }()), a.$html.on("changed.uk.dom", function () {
                        c.columns = c.element.children(), c.elements = c.options.target ? c.find(c.options.target) : c.columns, c.match()
                    }), this.on("display.uk.check", function () {
                        this.element.is(":visible") && this.match()
                    }.bind(this)), b.push(this))
                }, match: function () {
                    var b = this.columns.filter(":visible:first");
                    if (b.length) {
                        var c = Math.ceil(100 * parseFloat(b.css("width")) / parseFloat(b.parent().css("width"))) >= 100;
                        return c && !this.options.ignorestacked ? this.revert() : a.Utils.matchHeights(this.elements, this.options), this
                    }
                }, revert: function () {
                    return this.elements.css("min-height", ""), this
                }
            }), a.component("gridMargin", {
                defaults: {cls: "uk-grid-margin", rowfirst: "uk-row-first"},
                boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-grid-margin]", b).each(function () {
                            var b, c = a.$(this);
                            c.data("gridMargin") || (b = a.gridMargin(c, a.Utils.options(c.attr("data-uk-grid-margin"))))
                        })
                    })
                },
                init: function () {
                    a.stackMargin(this.element, this.options)
                }
            })
        }(UIkit), function (a) {
            "use strict";
            function b(b, c) {
                return c ? ("object" == typeof b ? (b = b instanceof jQuery ? b : a.$(b), b.parent().length && (c.persist = b, c.persist.data("modalPersistParent", b.parent()))) : b = "string" == typeof b || "number" == typeof b ? a.$("<div></div>").html(b) : a.$("<div></div>").html("UIkit.modal Error: Unsupported data type: " + typeof b), b.appendTo(c.element.find(".uk-modal-dialog")), c) : void 0
            }

            var c, d = !1, e = 0, f = a.$html;
            a.component("modal", {
                defaults: {keyboard: !0, bgclose: !0, minScrollHeight: 150, center: !1, modal: !0},
                scrollable: !1,
                transition: !1,
                hasTransitioned: !0,
                init: function () {
                    if (c || (c = a.$("body")), this.element.length) {
                        var b = this;
                        this.paddingdir = "padding-" + ("left" == a.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function (a) {
                            a.preventDefault(), b.hide()
                        }).on("click", function (c) {
                            var d = a.$(c.target);
                            d[0] == b.element[0] && b.options.bgclose && b.hide()
                        })
                    }
                },
                toggle: function () {
                    return this[this.isActive() ? "hide" : "show"]()
                },
                show: function () {
                    if (this.element.length) {
                        var b = this;
                        if (!this.isActive())return this.options.modal && d && d.hide(!0), this.element.removeClass("uk-open").show(), this.resize(), this.options.modal && (d = this), this.active = !0, e++, a.support.transition ? (this.hasTransitioned = !1, this.element.one(a.support.transition.end, function () {
                            b.hasTransitioned = !0
                        }).addClass("uk-open")) : this.element.addClass("uk-open"), f.addClass("uk-modal-page").height(), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), a.Utils.checkDisplay(this.dialog, !0), this
                    }
                },
                hide: function (b) {
                    if (!b && a.support.transition && this.hasTransitioned) {
                        var c = this;
                        this.one(a.support.transition.end, function () {
                            c._hide()
                        }).removeClass("uk-open")
                    } else this._hide();
                    return this
                },
                resize: function () {
                    var a = c.width();
                    if (this.scrollbarwidth = window.innerWidth - a, c.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
                        var b = this.dialog.outerHeight(), d = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
                        b + d < window.innerHeight ? this.dialog.css({top: window.innerHeight / 2 - b / 2 - d}) : this.dialog.css({top: ""})
                    }
                },
                updateScrollable: function () {
                    var a = this.dialog.find(".uk-overflow-container:visible:first");
                    if (a.length) {
                        a.css("height", 0);
                        var b = Math.abs(parseInt(this.dialog.css("margin-top"), 10)), c = this.dialog.outerHeight(), d = window.innerHeight, e = d - 2 * (20 > b ? 20 : b) - c;
                        return a.css({"max-height": e < this.options.minScrollHeight ? "" : e, height: ""}), !0
                    }
                    return !1
                },
                _hide: function () {
                    this.active = !1, e > 0 ? e-- : e = 0, this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), e || (f.removeClass("uk-modal-page"), c.css(this.paddingdir, "")), d === this && (d = !1), this.trigger("hide.uk.modal")
                },
                isActive: function () {
                    return this.active
                }
            }), a.component("modalTrigger", {
                boot: function () {
                    a.$html.on("click.modal.uikit", "[data-uk-modal]", function (b) {
                        var c = a.$(this);
                        if (c.is("a") && b.preventDefault(), !c.data("modalTrigger")) {
                            var d = a.modalTrigger(c, a.Utils.options(c.attr("data-uk-modal")));
                            d.show()
                        }
                    }), a.$html.on("keydown.modal.uikit", function (a) {
                        d && 27 === a.keyCode && d.options.keyboard && (a.preventDefault(), d.hide())
                    }), a.$win.on("resize orientationchange", a.Utils.debounce(function () {
                        d && d.resize()
                    }, 150))
                }, init: function () {
                    var b = this;
                    this.options = a.$.extend({target: !!b.element.is("a") && b.element.attr("href")}, this.options), this.modal = a.modal(this.options.target, this.options), this.on("click", function (a) {
                        a.preventDefault(), b.show()
                    }), this.proxy(this.modal, "show hide isActive")
                }
            }), a.modal.dialog = function (c, d) {
                var e = a.modal(a.$(a.modal.dialog.template).appendTo("body"), d);
                return e.on("hide.uk.modal", function () {
                    e.persist && (e.persist.appendTo(e.persist.data("modalPersistParent")), e.persist = !1), e.element.remove()
                }), b(c, e), e
            }, a.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', a.modal.alert = function (b, c) {
                c = a.$.extend(!0, {bgclose: !1, keyboard: !1, modal: !1, labels: a.modal.labels}, c);
                var d = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + c.labels.Ok + "</button></div>"].join(""), c);
                return d.on("show.uk.modal", function () {
                    setTimeout(function () {
                        d.element.find("button:first").focus()
                    }, 50)
                }), d.show()
            }, a.modal.confirm = function (b, c, d) {
                var e = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};
                c = a.$.isFunction(c) ? c : function () {
                }, d = a.$.isFunction(d) ? d : function () {
                }, e = a.$.extend(!0, {
                    bgclose: !1,
                    keyboard: !1,
                    modal: !1,
                    labels: a.modal.labels
                }, a.$.isFunction(e) ? {} : e);
                var f = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + e.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + e.labels.Ok + "</button></div>"].join(""), e);
                return f.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
                    a.$(this).is(".js-modal-confirm") ? c() : d(), f.hide()
                }), f.on("show.uk.modal", function () {
                    setTimeout(function () {
                        f.element.find(".js-modal-confirm").focus()
                    }, 50)
                }), f.show()
            }, a.modal.prompt = function (b, c, d, e) {
                d = a.$.isFunction(d) ? d : function () {
                }, e = a.$.extend(!0, {bgclose: !1, keyboard: !1, modal: !1, labels: a.modal.labels}, e);
                var f = a.modal.dialog([b ? '<div class="uk-modal-content uk-form">' + String(b) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + e.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + e.labels.Ok + "</button></div>"].join(""), e), g = f.element.find("input[type='text']").val(c || "").on("keyup", function (a) {
                    13 == a.keyCode && f.element.find(".js-modal-ok").trigger("click")
                });
                return f.element.find(".js-modal-ok").on("click", function () {
                    d(g.val()) !== !1 && f.hide()
                }), f.on("show.uk.modal", function () {
                    setTimeout(function () {
                        g.focus()
                    }, 50)
                }), f.show()
            }, a.modal.blockUI = function (b, c) {
                var d = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b || '<div class="uk-text-center">...</div>') + "</div>"].join(""), a.$.extend({
                    bgclose: !1,
                    keyboard: !1,
                    modal: !1
                }, c));
                return d.content = d.element.find(".uk-modal-content:first"), d.show()
            }, a.modal.labels = {Ok: "Ok", Cancel: "Cancel"}
        }(UIkit), function (a) {
            "use strict";
            function b(b) {
                var c = a.$(b), d = "auto";
                if (c.is(":visible"))d = c.outerHeight(); else {
                    var e = {position: c.css("position"), visibility: c.css("visibility"), display: c.css("display")};
                    d = c.css({position: "absolute", visibility: "hidden", display: "block"}).outerHeight(), c.css(e)
                }
                return d
            }

            a.component("nav", {
                defaults: {
                    toggle: ">li.uk-parent > a[href='#']",
                    lists: ">li.uk-parent > ul",
                    multiple: !1
                }, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-nav]", b).each(function () {
                            var b = a.$(this);
                            b.data("nav") || a.nav(b, a.Utils.options(b.attr("data-uk-nav")))
                        })
                    })
                }, init: function () {
                    var b = this;
                    this.on("click.uikit.nav", this.options.toggle, function (c) {
                        c.preventDefault();
                        var d = a.$(this);
                        b.open(d.parent()[0] == b.element[0] ? d : d.parent("li"))
                    }), this.find(this.options.lists).each(function () {
                        var c = a.$(this), d = c.parent(), e = d.hasClass("uk-active");
                        c.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), d.data("list-container", c.parent()[e ? "removeClass" : "addClass"]("uk-hidden")), d.attr("aria-expanded", d.hasClass("uk-open")), e && b.open(d, !0)
                    })
                }, open: function (c, d) {
                    var e = this, f = this.element, g = a.$(c), h = g.data("list-container");
                    this.options.multiple || f.children(".uk-open").not(c).each(function () {
                        var b = a.$(this);
                        b.data("list-container") && b.data("list-container").stop().animate({height: 0}, function () {
                            a.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")
                        })
                    }), g.toggleClass("uk-open"), g.attr("aria-expanded", g.hasClass("uk-open")), h && (g.hasClass("uk-open") && h.removeClass("uk-hidden"), d ? (h.stop().height(g.hasClass("uk-open") ? "auto" : 0), g.hasClass("uk-open") || h.addClass("uk-hidden"), this.trigger("display.uk.check")) : h.stop().animate({height: g.hasClass("uk-open") ? b(h.find("ul:first")) : 0}, function () {
                        g.hasClass("uk-open") ? h.css("height", "") : h.addClass("uk-hidden"), e.trigger("display.uk.check")
                    }))
                }
            })
        }(UIkit), function (a) {
            "use strict";
            var b = {x: window.scrollX, y: window.scrollY}, c = (a.$win, a.$doc, a.$html), d = {
                show: function (d) {
                    if (d = a.$(d), d.length) {
                        var e = a.$("body"), f = d.find(".uk-offcanvas-bar:first"), g = "right" == a.langdirection, h = f.hasClass("uk-offcanvas-bar-flip") ? -1 : 1, i = h * (g ? -1 : 1), j = window.innerWidth - e.width();
                        b = {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }, d.addClass("uk-active"), e.css({
                            width: window.innerWidth - j,
                            height: window.innerHeight
                        }).addClass("uk-offcanvas-page"), e.css(g ? "margin-right" : "margin-left", (g ? -1 : 1) * f.outerWidth() * i).width(), c.css("margin-top", -1 * b.y), f.addClass("uk-offcanvas-bar-show"), this._initElement(d), f.trigger("show.uk.offcanvas", [d, f]), d.attr("aria-hidden", "false")
                    }
                }, hide: function (d) {
                    var e = a.$("body"), f = a.$(".uk-offcanvas.uk-active"), g = "right" == a.langdirection, h = f.find(".uk-offcanvas-bar:first"), i = function () {
                        e.removeClass("uk-offcanvas-page").css({
                            width: "",
                            height: "",
                            "margin-left": "",
                            "margin-right": ""
                        }), f.removeClass("uk-active"), h.removeClass("uk-offcanvas-bar-show"), c.css("margin-top", ""), window.scrollTo(b.x, b.y), h.trigger("hide.uk.offcanvas", [f, h]), f.attr("aria-hidden", "true")
                    };
                    f.length && (a.support.transition && !d ? (e.one(a.support.transition.end, function () {
                        i()
                    }).css(g ? "margin-right" : "margin-left", ""), setTimeout(function () {
                        h.removeClass("uk-offcanvas-bar-show")
                    }, 0)) : i())
                }, _initElement: function (b) {
                    b.data("OffcanvasInit") || (b.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function (b) {
                        var c = a.$(b.target);
                        if (!b.type.match(/swipe/) && !c.hasClass("uk-offcanvas-close")) {
                            if (c.hasClass("uk-offcanvas-bar"))return;
                            if (c.parents(".uk-offcanvas-bar:first").length)return
                        }
                        b.stopImmediatePropagation(), d.hide()
                    }), b.on("click", "a[href*='#']", function () {
                        var b = a.$(this), c = b.attr("href");
                        "#" != c && (a.$doc.one("hide.uk.offcanvas", function () {
                            var d;
                            try {
                                d = a.$(b[0].hash)
                            } catch (a) {
                                d = ""
                            }
                            d.length || (d = a.$('[name="' + b[0].hash.replace("#", "") + '"]')), d.length && a.Utils.scrollToElement ? a.Utils.scrollToElement(d, a.Utils.options(b.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = c
                        }), d.hide())
                    }), b.data("OffcanvasInit", !0))
                }
            };
            a.component("offcanvasTrigger", {
                boot: function () {
                    c.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function (b) {
                        b.preventDefault();
                        var c = a.$(this);
                        c.data("offcanvasTrigger") || (a.offcanvasTrigger(c, a.Utils.options(c.attr("data-uk-offcanvas"))), c.trigger("click"))
                    }), c.on("keydown.uk.offcanvas", function (a) {
                        27 === a.keyCode && d.hide()
                    })
                }, init: function () {
                    var b = this;
                    this.options = a.$.extend({target: !!b.element.is("a") && b.element.attr("href")}, this.options), this.on("click", function (a) {
                        a.preventDefault(), d.show(b.options.target)
                    })
                }
            }), a.offcanvas = d
        }(UIkit), function (a) {
            "use strict";
            function b(b, c, d) {
                var e, f = a.$.Deferred(), g = b, h = b;
                return d[0] === c[0] ? (f.resolve(), f.promise()) : ("object" == typeof b && (g = b[0], h = b[1] || b[0]), a.$body.css("overflow-x", "hidden"), e = function () {
                    c && c.hide().removeClass("uk-active " + h + " uk-animation-reverse"), d.addClass(g).one(a.support.animation.end, function () {
                        d.removeClass("" + g).css({
                            opacity: "",
                            display: ""
                        }), f.resolve(), a.$body.css("overflow-x", ""), c && c.css({opacity: "", display: ""})
                    }.bind(this)).show()
                }, d.css("animation-duration", this.options.duration + "ms"), c && c.length ? (c.css("animation-duration", this.options.duration + "ms"), c.css("display", "none").addClass(h + " uk-animation-reverse").one(a.support.animation.end, function () {
                    e()
                }.bind(this)).css("display", "")) : (d.addClass("uk-active"), e()), f.promise())
            }

            var c;
            a.component("switcher", {
                defaults: {
                    connect: !1,
                    toggle: ">*",
                    active: 0,
                    animation: !1,
                    duration: 200,
                    swiping: !0
                }, animating: !1, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-switcher]", b).each(function () {
                            var b = a.$(this);
                            b.data("switcher") || a.switcher(b, a.Utils.options(b.attr("data-uk-switcher")))
                        })
                    })
                }, init: function () {
                    var b = this;
                    if (this.on("click.uikit.switcher", this.options.toggle, function (a) {
                            a.preventDefault(), b.show(this)
                        }), this.options.connect) {
                        this.connect = a.$(this.options.connect), this.connect.find(".uk-active").removeClass(".uk-active"), this.connect.length && (this.connect.children().attr("aria-hidden", "true"), this.connect.on("click", "[data-uk-switcher-item]", function (c) {
                            c.preventDefault();
                            var d = a.$(this).attr("data-uk-switcher-item");
                            if (b.index != d)switch (d) {
                                case"next":
                                case"previous":
                                    b.show(b.index + ("next" == d ? 1 : -1));
                                    break;
                                default:
                                    b.show(parseInt(d, 10))
                            }
                        }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function (a) {
                            a.preventDefault(), window.getSelection().toString() || b.show(b.index + ("swipeLeft" == a.type ? 1 : -1))
                        }));
                        var c = this.find(this.options.toggle), d = c.filter(".uk-active");
                        if (d.length)this.show(d, !1); else {
                            if (this.options.active === !1)return;
                            d = c.eq(this.options.active), this.show(d.length ? d : c.eq(0), !1)
                        }
                        c.not(d).attr("aria-expanded", "false"), d.attr("aria-expanded", "true"), this.on("changed.uk.dom", function () {
                            b.connect = a.$(b.options.connect)
                        })
                    }
                }, show: function (d, e) {
                    if (!this.animating) {
                        if (isNaN(d))d = a.$(d); else {
                            var f = this.find(this.options.toggle);
                            d = 0 > d ? f.length - 1 : d, d = f.eq(f[d] ? d : 0)
                        }
                        var g = this, f = this.find(this.options.toggle), h = a.$(d), i = c[this.options.animation] || function (a, d) {
                                if (!g.options.animation)return c.none.apply(g);
                                var e = g.options.animation.split(",");
                                return 1 == e.length && (e[1] = e[0]), e[0] = e[0].trim(), e[1] = e[1].trim(), b.apply(g, [e, a, d])
                            };
                        e !== !1 && a.support.animation || (i = c.none), h.hasClass("uk-disabled") || (f.attr("aria-expanded", "false"), h.attr("aria-expanded", "true"), f.filter(".uk-active").removeClass("uk-active"), h.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(h), -1 == this.index && (this.index = 0), this.connect.each(function () {
                            var b = a.$(this), c = a.$(b.children()), d = a.$(c.filter(".uk-active")), e = a.$(c.eq(g.index));
                            g.animating = !0, i.apply(g, [d, e]).then(function () {
                                d.removeClass("uk-active"), e.addClass("uk-active"), d.attr("aria-hidden", "true"), e.attr("aria-hidden", "false"), a.Utils.checkDisplay(e, !0), g.animating = !1
                            })
                        })), this.trigger("show.uk.switcher", [h]))
                    }
                }
            }), c = {
                none: function () {
                    var b = a.$.Deferred();
                    return b.resolve(), b.promise()
                }, fade: function (a, c) {
                    return b.apply(this, ["uk-animation-fade", a, c])
                }, "slide-bottom": function (a, c) {
                    return b.apply(this, ["uk-animation-slide-bottom", a, c])
                }, "slide-top": function (a, c) {
                    return b.apply(this, ["uk-animation-slide-top", a, c])
                }, "slide-vertical": function (a, c) {
                    var d = ["uk-animation-slide-top", "uk-animation-slide-bottom"];
                    return a && a.index() > c.index() && d.reverse(), b.apply(this, [d, a, c])
                }, "slide-left": function (a, c) {
                    return b.apply(this, ["uk-animation-slide-left", a, c])
                }, "slide-right": function (a, c) {
                    return b.apply(this, ["uk-animation-slide-right", a, c])
                }, "slide-horizontal": function (a, c) {
                    var d = ["uk-animation-slide-right", "uk-animation-slide-left"];
                    return a && a.index() > c.index() && d.reverse(), b.apply(this, [d, a, c])
                }, scale: function (a, c) {
                    return b.apply(this, ["uk-animation-scale-up", a, c])
                }
            }, a.switcher.animations = c
        }(UIkit), function (a) {
            "use strict";
            a.component("tab", {
                defaults: {
                    target: ">li:not(.uk-tab-responsive, .uk-disabled)",
                    connect: !1,
                    active: 0,
                    animation: !1,
                    duration: 200,
                    swiping: !0
                }, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-tab]", b).each(function () {
                            var b = a.$(this);
                            b.data("tab") || a.tab(b, a.Utils.options(b.attr("data-uk-tab")))
                        })
                    })
                }, init: function () {
                    var b = this;
                    this.current = !1, this.on("click.uikit.tab", this.options.target, function (c) {
                        if (c.preventDefault(), !b.switcher || !b.switcher.animating) {
                            var d = b.find(b.options.target).not(this);
                            d.removeClass("uk-active").blur(), b.trigger("change.uk.tab", [a.$(this).addClass("uk-active"), b.current]), b.current = a.$(this), b.options.connect || (d.attr("aria-expanded", "false"), a.$(this).attr("aria-expanded", "true"))
                        }
                    }), this.options.connect && (this.connect = a.$(this.options.connect)), this.responsivetab = a.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uikit.tab", "a", function (c) {
                        c.preventDefault(), c.stopPropagation();
                        var d = a.$(this);
                        b.element.children("li:not(.uk-tab-responsive)").eq(d.data("index")).trigger("click")
                    }), this.on("show.uk.switcher change.uk.tab", function (a, c) {
                        b.responsivetab.caption.html(c.text())
                    }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = a.switcher(this.element, {
                        toggle: ">li:not(.uk-tab-responsive)",
                        connect: this.options.connect,
                        active: this.options.active,
                        animation: this.options.animation,
                        duration: this.options.duration,
                        swiping: this.options.swiping
                    })), a.dropdown(this.responsivetab, {mode: "click"}), b.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]), this.check(), a.$win.on("resize orientationchange", a.Utils.debounce(function () {
                        b.element.is(":visible") && b.check()
                    }, 100)), this.on("display.uk.check", function () {
                        b.element.is(":visible") && b.check()
                    })
                }, check: function () {
                    var b = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");
                    if (!b.length)return void this.responsivetab.addClass("uk-hidden");
                    var c, d, e, f = b.eq(0).offset().top + Math.ceil(b.eq(0).height() / 2), g = !1;
                    if (this.responsivetab.lst.empty(), b.each(function () {
                            a.$(this).offset().top > f && (g = !0)
                        }), g)for (var h = 0; h < b.length; h++)c = a.$(b.eq(h)), d = c.find("a"), "none" == c.css("float") || c.attr("uk-dropdown") || (c.hasClass("uk-disabled") || (e = c[0].outerHTML.replace("<a ", '<a data-index="' + h + '" '), this.responsivetab.lst.append(e)), c.addClass("uk-hidden"));
                    this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden")
                }
            })
        }(UIkit), function (a) {
            "use strict";
            a.component("cover", {
                defaults: {automute: !0}, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-cover]", b).each(function () {
                            var b = a.$(this);
                            b.data("cover") || a.cover(b, a.Utils.options(b.attr("data-uk-cover")))
                        })
                    })
                }, init: function () {
                    if (this.parent = this.element.parent(), a.$win.on("load resize orientationchange", a.Utils.debounce(function () {
                            this.check()
                        }.bind(this), 100)), this.on("display.uk.check", function () {
                            this.element.is(":visible") && this.check()
                        }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
                        var b = this.element.attr("src");
                        this.element.attr("src", "").on("load", function () {
                            this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                        }).attr("src", [b, b.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""))
                    }
                }, check: function () {
                    this.element.css({width: "", height: ""}), this.dimension = {
                        w: this.element.width(),
                        h: this.element.height()
                    }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;
                    var a, b, c = this.parent.width(), d = this.parent.height();
                    c / this.ratio < d ? (a = Math.ceil(d * this.ratio), b = d) : (a = c, b = Math.ceil(c / this.ratio)), this.element.css({
                        width: a,
                        height: b
                    })
                }
            })
        }(UIkit)
    }, {}],
    16: [function (a, b, c) {
        var d = UIkit;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-downloadsectionfilter]", a).each(function () {
                        var a = d.$(this);
                        a.selectize({
                            render: {
                                option: function (a, b) {
                                    var c = "";
                                    return c = a.value.indexOf("/") > -1 || a.value.indexOf("#") > -1 ? '<div data-value="' + b(a.value) + '" data-selectable="" class="option"><a target="_self" href="' + a.value + '">' + b(a.text) + "</a></div>" : '<div data-value="' + b(a.value) + '" data-selectable="" class="option">' + b(a.text) + "</div>"
                                }
                            }
                        }), d.$(".selectize-input input").attr("readonly", "readonly"), a.on("change", function () {
                            var a = d.$(this).find("option").attr("value");
                            d.$(".downloadsection__items h3").show(), d.$(".downloadsection__items .subheadline").show(), "-" == a ? d.$(".downloadsection__items div[data-downloadsectionfilter]").removeClass("uk-hidden") : (d.$(".downloadsection__items div[data-downloadsectionfilter]").addClass("uk-hidden"), d.$(".downloadsection__items div[data-downloadsectionfilter=" + a + "]").removeClass("uk-hidden"), d.$(".downloadsection__itemlist").each(function () {
                                d.$(this).find(".downloadsection__item:not(.uk-hidden)").length || (d.$(this).prev("h3").hide(), d.$(this).prev(".subheadline").prev("h3").hide(), d.$(this).prev(".subheadline").hide())
                            }), d.$(".selectize-dropdown-content").find('a[href="' + a + '"]').first().click())
                        })
                    })
                })
            }
        }
    }, {}],
    17: [function (a, b, c) {
        var d = UIkit;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-downloadsectionitemfilter]", a).each(function () {
                        var a = d.$(this);
                        a.selectize({
                            render: {
                                option: function (a, b) {
                                    var c = "";
                                    return c = a.value.indexOf("/") > -1 || a.value.indexOf("#") > -1 ? '<div data-value="' + b(a.value) + '" data-selectable="" class="option"><a target="_self" href="' + a.value + '">' + b(a.text) + "</a></div>" : '<div data-value="' + b(a.value) + '" data-selectable="" class="option">' + b(a.text) + "</div>"
                                }
                            }
                        }), d.$(".selectize-input input").attr("readonly", "readonly"), a.on("change", function () {
                            var a = d.$(this).find("option:checked"), b = a.attr("value"), c = a.data("version"), e = b.split("#||");
                            e[0];
                            c = e[2], d.$(this).closest(".downloadsection__item").find(".download").attr("href", b).find("span").text(c), d.$(".selectize-dropdown-content").find('a[href="' + b + '"]').first().click()
                        })
                    })
                })
            }
        }
    }, {}],
    18: [function (a, b, c) {
        var d = UIkit;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-dropdownselect]", a).each(function () {
                        var a = d.$(this), b = window.location.href.split("#")[0];
                        a.selectize({
                            render: {
                                option: function (a, b) {
                                    var c = "";
                                    return c = a.value.indexOf("/") > -1 || a.value.indexOf("#") > -1 ? '<div data-value="' + b(a.value) + '" data-selectable="" class="option"><a target="_self" href="' + a.value + '">' + b(a.text) + "</a></div>" : '<div data-value="' + b(a.value) + '" data-selectable="" class="option">' + b(a.text) + "</div>"
                                }
                            }
                        }), d.$(".selectize-input input").attr("readonly", "readonly");
                        var c = a[0].selectize;
                        c.setValue(b, !0), a.on("change", function () {
                            var a = d.$(this).find("option").attr("value");
                            window.location.href = d.$(".selectize-dropdown-content").find('a[href="' + a + '"]').first().attr("href")
                        })
                    })
                })
            }
        }
    }, {}],
    19: [function (a, b, c) {
        var d = jQuery, e = null, f = null, g = -156, h = null, i = null, j = null;
        d(document).ready(function () {
            function a() {
                var a = [], b = [], c = [], i = f.length, k = 0, l = 0, m = 0, n = 0, o = !0;
                for (n = 0; n < i; n++)a.push(f.eq(n)), b.push(f.eq(n).offset().top), c.push(f.eq(n).offset().top + f.eq(n).height());
                d(window).scroll(function () {
                    for (d.each(d(".floatingmenu__item"), function (a, b) {
                        b.classList.remove("active")
                    }), n = 0; n < i; n++)if (k = b[n], l = c[n], m = d(window).scrollTop(), m >= k && m < l) {
                        h.eq(n).addClass("active");
                        break
                    }
                });
                var p = function () {
                    d(this).animate()
                };
                p(), d(window).resize(function () {
                    p()
                });
                var q = function () {
                    o ? (e.animate({right: g + "px"}, 250), e.removeClass("active"), o = !1) : (e.animate({right: "0px"}, 250), e.addClass("active"), o = !0)
                };
                j.click(function () {
                    q()
                }), this.animate = function () {
                    e.animate({right: g + "px"}, 250), e.removeClass("active")
                }
            }

            e = d(".floatingmenu"), f = d(".section--show-in-floating-menu"), j = d("#floatingMenuToggle"), i = d(".floatingmenu ul"), initFloatingMenu = function (b, c) {
                var e = d(b), f = d(c), g = e.children("ul");
                if (f.length) {
                    for (var i = 0, k = f.length; i < k; i++) {
                        var l = d(f[i]);
                        g.append('<li><a class="floatingmenu__item" href="#' + l.attr("id") + '" data-uk-smooth-scroll="{offset: -1}">' + l.data("title") + "</a></li>")
                    }
                    j.show(), h = d(".floatingmenu li a"), setTimeout(function () {
                        a()
                    }, 500)
                }
            }, initFloatingMenu(e, f), MenuOpenCloseErgoTimer = function (a, b, c) {
                "number" == typeof this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = ""), c ? this.delayTimer = setTimeout(function () {
                    b(c)
                }, a) : this.delayTimer = setTimeout(function () {
                    b()
                }, a)
            }
        })
    }, {}],
    20: [function (a, b, c) {
        var d = jQuery;
        d(document).ready(function () {
            d("#buttonNewsletter").on("click", function (a) {
                a.preventDefault();
                var b = d("#form--newsletter"), c = b.find('[name="newsletter"]');
                console.log(c.val()), console.log("oh we need some backend here. netural sendform ist im angebot verkauft --> siehe flavia. kann sendform einfach die adresse in einer db speichern? wäre interessant was verkauft wurde, ob wir dann noch email templates bauen oder ob wir die adressen an keba weitergeben und die schicken den newsletter. wenn alles bei uns liegt müssen noch email templates gebaut werden")
            }), d("#footer_print").on("click", function (a) {
                a.preventDefault(), window.print()
            })
        })
    }, {}],
    21: [function (a, b, c) {
        var d = (UIkit, jQuery);
        d(document).ready(function () {
            var a = function (a) {
                !0 === a.parsley().isValid() ? (d(".bs-callout-info").removeClass("hidden"), d(".bs-callout-warning").addClass("hidden")) : (d(".bs-callout-info").addClass("hidden"), d(".bs-callout-warning").removeClass("hidden"))
            };
            d("form.basicform").submit(function (b) {
                b.preventDefault();
                var c = d(this);
                if (c.parsley().validate(), a(c), c.parsley().isValid()) {
                    var e = c.serialize(), f = "/api/contact.php";
                    e += "&contactemail=" + encodeURIComponent(c.find("[name=contactemail]").val()), e += "&botcheck1=" + encodeURIComponent(c.find("[name=email]").val()), e += "&botcheck2=";
                    var g = c.attr("method").toUpperCase();
                    c.find(".spinner-submit").addClass("visible"), d.ajax({
                        url: f,
                        type: g,
                        data: e,
                        cache: !1,
                        success: function (a) {
                            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                event: "formSubmissionSuccess",
                                formId: "contactForm"
                            }), c.find(".spinner-submit").removeClass("visible"), c.find(".uk-form-row").addClass("uk-hidden"), c.find('button[type="submit"]').addClass("uk-hidden"), c.find(".message--success").removeClass("uk-hidden"), window.google_trackConversion({
                                google_conversion_id: 973809091,
                                google_conversion_language: "en",
                                google_conversion_format: "3",
                                google_conversion_color: "ffffff",
                                google_conversation_label: "LGF_COyl-2gQw8us0AM",
                                google_remarketing_only: !1
                            })
                        },
                        error: function (a) {
                            alert("Error while submitting the form. Please try again later."), c.find(".spinner-submit").removeClass("visible")
                        }
                    })
                }
            })
        })
    }, {}],
    22: [function (a, b, c) {
        var d = jQuery;
        d(document).ready(function () {
            d(".hamburger__menu").length > 1 && d(".hamburger-mobile__menu").length > 1 && d(".hamburger__menu:first,.hamburger-mobile__menu:first").remove();
            var a = d(".hamburger"), b = d(".hamburger__menu"), c = d(".hamburger-mobile"), e = d(".hamburger-mobile__menu"), f = d(".header__sub.header--desktop");
            a.on("click", function () {
                var a = d(this);
                a.hasClass("open") ? (b.slideUp("fast"), a.removeClass("open"), f.hasClass("hamburgerOpen") && (f.addClass("open"), f.show(), f.removeClass("hamburgerOpen"))) : (f.removeClass("open"), f.hide(), f.addClass("hamburgerOpen"), b.slideDown("fast"), a.addClass("open"))
            }), c.on("click", function () {
                var a = d(this);
                a.hasClass("open") ? (e.slideUp("fast"), a.removeClass("open")) : (e.slideDown("fast"), a.addClass("open"))
            })
        })
    }, {}],
    23: [function (a, b, c) {
        var d = UIkit, e = jQuery, f = null, g = null, h = !1, i = 200, j = null, k = !1, l = !1, m = null;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-hotspot]", a).each(function () {
                        var a = d.$(this);
                        d.hotspot(a, d.Utils.options(a.attr("data-uk-hotspot")))
                    })
                })
            }, init: function () {
                function a() {
                    new Date - g < i ? setTimeout(a, i) : (h = !1, f = e(window).width(), checkHotspotPositions())
                }

                m = e(".hotspot"), j = e(".discovery"), f = e(window).width();
                for (var b = f / 2, c = null, d = null, k = 0; k < m.length; k++)c = e(m[k]), d = c.offset().left, d > b ? c.addClass("right") : c.removeClass("right");
                checkHotspotPositions(), setHotspotHoverEffects(), e(window).resize(function () {
                    g = new Date, h === !1 && (h = !0, setTimeout(a, i))
                })
            }
        }, setHotspotHoverEffects = function () {
            e(".hotspot__circle img").hover(function () {
                e(this).siblings(".hotspot__circle__inner").first().addClass("visibleHotspot"), l = !0
            }, function () {
                l = !1, window.setTimeout(function () {
                    k || l || e(".hotspot__circle__inner").removeClass("visibleHotspot")
                }, 3e3)
            }), e(".hotspot__circle__inner__text").hover(function () {
                k = !0
            }, function () {
                e(".hotspot__circle__inner").removeClass("visibleHotspot"), k = !1
            })
        }, checkHotspotPositions = function () {
            var a = e(window).width();
            if (a < 768)for (var b = 0; b < j.length; b++) {
                var c = e(j[b]);
                c.addClass("small")
            } else {
                for (var d, f, g, h, i, b = 0; b < j.length; b++) {
                    var c = e(j[b]);
                    c.removeClass("small")
                }
                for (var k = 0; k < m.length; k++)f = e(m[k]).find(".hotspot__circle__inner"), d = e(m[k]), g = f.width(), h = d.offset().left, i = h + g, i > a ? f.addClass("right--small") : f.removeClass("right--small"), h < g ? f.addClass("left--small") : f.removeClass("left--small")
            }
        }
    }, {}],
    24: [function (a, b, c) {
        var d = jQuery;
        UIkit;
        d(document).ready(function () {
            d(".uk-overlay").hover(function () {
                var a = d(this);
                a.find(".uk-overlay-panel").first().fadeIn("fast")
            }, function () {
                var a = d(this);
                a.find(".uk-overlay-panel").first().fadeOut("fast")
            })
        })
    }, {}],
    25: [function (a, b, c) {
        var d = UIkit, e = jQuery, f = a("./../../../bower_components/moment/moment");
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-jobportal]", a).each(function () {
                        console.log("ready");
                        var a = d.$(this);
                        d.jobportal(a, d.Utils.options(a.attr("data-uk-jobportal")))
                    })
                })
            }, init: function () {
                var a = this;
                a.config = {apiBaseUrl: "/jobs"}, e.ajax({
                    url: this.config.apiBaseUrl + "/auth",
                    type: "GET",
                    contentType: "application/json"
                }), a.bindHandlers(), d.jobportal.xingLogin = a.xingLogin, d.jobportal.config = a.config
            }, bindHandlers: function () {
                var a = this, b = a.element.find(".jp__loginform");
                b && (b.on("submit", function (c) {
                    c.preventDefault();
                    var d = b.parsley().validate();
                    d && a.login(b.find("[name=email]").val(), b.find("[name=password]").val())
                }), b.find(".jp__showregisterform").on("click", function (c) {
                    c.preventDefault(), a.toggleRegisterLoginForm(b.closest(".jp-login-register-forgotpassword"), "login")
                }), b.find(".jp__forgotpasswordbutton").on("click", function (c) {
                    c.preventDefault();
                    var d = b.find("[name=email]").val();
                    if (d)a.requestPassword(d); else {
                        var e = a.element.find(".jp__loginform-wrapper .errors");
                        e.find(".uk-alert p").text(window.messages.error.pleaseEnterValidEmail), e.css("display", "block")
                    }
                }));
                var c = a.element.find(".jp__registerform");
                c && (c.on("submit", function (b) {
                    b.preventDefault();
                    var d = c.parsley().validate();
                    d && a.register(c.find("[name=firstname]").val(), c.find("[name=lastname]").val(), c.find("[name=email]").val(), c.find("[name=password]").val(), c.find("[name=cv]"))
                }), c.find(".jp__showloginform").on("click", function (b) {
                    b.preventDefault(), a.toggleRegisterLoginForm(c.closest(".jp-login-register-forgotpassword"), "register")
                }), c.find("[name=cv]").on("change", function (a) {
                    var b;
                    b = a.currentTarget.files.length > 0 ? window.labels.cv + ": " + a.currentTarget.files[0].name : window.labels.cvUploadLabel, c.find("#register-cv-label").text(b)
                }));
                var f = a.element.find(".jp__forgotpasswordform");
                if (f && f.on("submit", function (b) {
                        b.preventDefault();
                        var c = f.parsley().validate();
                        if (c) {
                            var d = document.location.search, e = d.substring(1, d.length).split("&"), g = "", h = "";
                            e.forEach(function (a) {
                                var b = a.split("=");
                                "Email" == b[0] && (g = b[1]), "Code" == b[0] && (h = b[1])
                            }), a.resetPassword(g, h, f.find("[name=password]").val())
                        }
                    }), document.location.search.indexOf("Email") !== -1 && document.location.search.indexOf("Code") !== -1)a.showResetPasswordForm(); else if (document.location.search.indexOf("error") !== -1) {
                    var g = document.location.search.substring(1, document.location.search.length).split("&");
                    g.forEach(function (b) {
                        var c = b.split("=");
                        if ("error" == c[0]) {
                            var d = a.element.find(".jp-login-register-forgotpassword .errors-general");
                            d.find(".uk-alert p").text(c[1].replace(/%20/g, " ")), d.css("display", "block")
                        }
                    })
                }
                var h = a.element.find(".jp__logoutbutton");
                h && h.on("click", function (b) {
                    b.preventDefault(), a.logout()
                });
                var i = a.element.find(".jp-dashboard");
                if (i.length > 0) {
                    if ("" !== document.location.search) {
                        var j = new RegExp("(\\?|&)job=(\\d+)"), k = document.location.search.match(j);
                        if (k) {
                            var l = k[2];
                            a.applyForJob(l)
                        }
                    }
                    a.getProfile(), a.getCV(), a.getPhoto(), a.getDocuments(), a.fillExperiences(), a.fillEducation(), a.filetemplate = d.Utils.template(e("[data-uk-jp-filetemplate]").html()), a.experiencetemplate = d.Utils.template(e("[data-uk-jp-experience-template]").html()), a.educationtemplate = d.Utils.template(e("[data-uk-jp-education-template]").html()), a.languageskillstemplate = d.Utils.template(e("[data-uk-jp-languageskills-template]").html()), a.newlanguagetemplate = d.Utils.template(e("[data-uk-jp-new-languageskill-template]").html()), a.otheractivitiestemplate = d.Utils.template(e("[data-uk-jp-otheractivities-template]").html()), a.newactivitytemplate = d.Utils.template(e("[data-uk-jp-new-activity-template]").html()), a.publicationstemplate = d.Utils.template(e("[data-uk-jp-publications-template]").html()), a.newpublicationtemplate = d.Utils.template(e("[data-uk-jp-new-publication-template]").html()), a.element.find("[name=isActive]").on("change", function (b) {
                        a.setActiveStatus(b.currentTarget.checked)
                    }), a.element.find("[name=cv]").on("change", function (b) {
                        a.onCVchange(b)
                    }), a.element.find(".jp-filelist--cv").on("click", ".jp-file__btndelete", function (b) {
                        b.preventDefault(), a.deleteCV()
                    }), a.element.find("[name=photo]").on("change", function (b) {
                        a.onPhotoChange(b)
                    }), a.element.find(".jp-filelist--photo").on("click", ".jp-file__btndelete", function (b) {
                        b.preventDefault(), a.deletePhoto()
                    }), a.element.find("[name=documents]").on("change", function (b) {
                        a.onDocumentsChange(b)
                    }), a.element.find(".jp-filelist--documents").on("click", ".jp-file__btndelete", function (b) {
                        b.preventDefault(), a.deleteDocument(b)
                    }), a.element.find("#jp-experiencesview__addexperience-btn").on("click", function (b) {
                        b.preventDefault(), a.element.find(".jp-experiencesview__addexperienceform").slideToggle(350)
                    }), a.element.find("#jp-educationsview__addeducation-btn").on("click", function (b) {
                        b.preventDefault(), a.element.find(".jp-educationsview__addeducationform").slideToggle(350)
                    }), a.element.find(".jp-additionalinfoform__editBtn").on("click", function (b) {
                        b.preventDefault();
                        var c = b.currentTarget.dataset.editFor;
                        parent = a.element.find("#" + c), parent.find(".jp-additionalinfoform__list-viewmode").slideToggle(350), parent.find(".jp-additionalinfoform__list-editmode").slideToggle(350)
                    }), a.element.find(".jp-additionalinfoform__addBtn").on("click", function (b) {
                        b.preventDefault();
                        var c = b.currentTarget.dataset.addFor, d = b.currentTarget.dataset.addType, e = a.element.find("#" + c);
                        e.find(".jp-additionalinfoform__list-viewmode").slideUp(350);
                        var f = e.find(".jp-additionalinfoform__list-editmode");
                        switch (f.slideDown(350), d) {
                            case"language":
                                a.addLanguageSkill(f);
                                break;
                            case"publication":
                                a.addPublication(f);
                                break;
                            case"activity":
                                a.addOtherActivity(f)
                        }
                    });
                    var m = a.element.find("#jp-applicantform");
                    m.length > 0 && m.on("submit", function (b) {
                        b.preventDefault();
                        var c = m.parsley().validate();
                        c && a.savePersonalData()
                    });
                    var n = a.element.find("#jp-requirementsform");
                    n.length > 0 && n.on("submit", function (b) {
                        b.preventDefault();
                        var c = n.parsley().validate();
                        c && a.saveJobRequirements()
                    });
                    var o = a.element.find("#jp-addexperienceform");
                    o.length > 0 && o.on("submit", function (b) {
                        b.preventDefault();
                        var c = o.parsley().validate();
                        c && a.addExperience()
                    });
                    var p = a.element.find("#jp-addeducationform");
                    p.length > 0 && p.on("submit", function (b) {
                        b.preventDefault();
                        var c = p.parsley().validate();
                        c && a.addEducation()
                    });
                    var q = a.element.find("#jp-additionalinfoform");
                    q.length > 0 && q.on("submit", function (b) {
                        b.preventDefault();
                        var c = q.parsley().validate();
                        c && a.saveAdditionalInfos(q)
                    })
                }
            }, applyForJob: function (a) {
                var b = this;
                e.ajax({
                    url: b.config.apiBaseUrl + "/application/" + a, method: "POST", success: function (b) {
                        d.notify(window.messages.success.applied, "success"), console.log("Successfully applied for job " + a)
                    }, error: function (b) {
                        d.notify(window.messages.error.applied, "danger"), console.log("Fehler beim bewerben für eine Position, JobId: " + a), console.log(b)
                    }
                })
            }, fillIsActiveCheckbox: function (a) {
                var b = this;
                b.find("[name=isActive]").prop("checked", a)
            }, setActiveStatus: function (a) {
                e.ajax({
                    url: this.config.apiBaseUrl + "/profile",
                    type: "PUT",
                    contentType: "application/json",
                    data: JSON.stringify({isActive: a}),
                    success: function (a) {
                        d.notify(window.labels.accountStatus + " " + window.messages.success.saved, "success"), console.log("IsActive successfully saved")
                    },
                    error: function (a) {
                        d.notify(window.labels.accountStatus + " " + window.messages.error.saved, "danger"), console.log("error", a)
                    }
                })
            }, toggleRegisterLoginForm: function (a, b) {
                var c = a.find(".jp__loginform-wrapper"), d = a.find(".jp__registerform-wrapper");
                "login" == b ? c.slideToggle(350, function () {
                    d.slideToggle(350)
                }) : "register" == b && d.slideToggle(350, function () {
                    c.slideToggle(350)
                })
            }, showResetPasswordForm: function () {
                var a = this, b = a.element.find(".jp-login-register-forgotpassword"), c = b.find(".jp__loginform-wrapper"), d = b.find(".jp__registerform-wrapper"), e = b.find(".jp__forgotpassword-wrapper");
                c.css("display", "none"), d.css("display", "none"), e.css("display", "block")
            }, login: function (a, b) {
                var c = this;
                e.ajax({
                    url: this.config.apiBaseUrl + "/login",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({usernameOrEmail: a, password: b}),
                    success: function (a) {
                        location.reload(!0)
                    },
                    error: function (a) {
                        var b = c.element.find(".jp__loginform-wrapper .errors");
                        b.find(".uk-alert p").text(window.messages.error.badCredentials), b.css("display", "block"), console.log("error", a)
                    }
                })
            }, logout: function () {
                e.ajax({
                    url: this.config.apiBaseUrl + "/logout", type: "GET", success: function (a) {
                        location.href = location.protocol + "//" + location.host + location.pathname
                    }, error: function (a) {
                        console.log("error", a)
                    }
                })
            }, register: function (a, b, c, d, f) {
                var g = this, h = new FormData;
                h.append("cv", f[0].files[0]), h.append("firstname", a), h.append("lastname", b), h.append("email", c), h.append("password", d), e.ajax({
                    url: this.config.apiBaseUrl + "/register",
                    type: "POST",
                    data: h,
                    processData: !1,
                    contentType: !1,
                    success: function (a) {
                        if (a.success)g.login(c, d); else if (a.userExists) {
                            var b = g.element.find(".jp__registerform-wrapper .errors");
                            b.find(".uk-alert p").text(window.messages.error.userExists), b.css("display", "block"), console.log("error", a)
                        }
                    },
                    error: function (a) {
                        console.log("error", a)
                    }
                })
            }, xingLogin: function (a) {
                var b = this;
                e.ajax({
                    url: b.config.apiBaseUrl + "/xingLogin",
                    method: "POST",
                    data: JSON.stringify(a),
                    success: function (a) {
                        location.reload(!0)
                    },
                    error: function (a) {
                        console.log("Bei der registrierung / Login via Xing ist etwas schief gelaufen."), console.log(a)
                    }
                })
            }, requestPassword: function (a) {
                var b = this;
                e.ajax({
                    url: b.config.apiBaseUrl + "/requestPassword",
                    method: "POST",
                    data: JSON.stringify({email: a}),
                    success: function (a) {
                        d.notify(window.labels.resetEmail + " " + window.messages.success.sent, "success")
                    },
                    error: function (a) {
                        d.notify(window.labels.resetEmail + " " + window.messages.error.sent, "danger"), console.log(a)
                    }
                })
            }, resetPassword: function (a, b, c) {
                var f = this;
                e.ajax({
                    url: f.config.apiBaseUrl + "/resetPassword",
                    method: "POST",
                    data: JSON.stringify({email: a, password: c, code: b}),
                    success: function (b) {
                        b.success ? f.login(a, c) : (d.notify(window.messages.error.resetPassword, "danger"), console.log("Something went wrong during resetting the password"))
                    },
                    error: function (a) {
                        d.notify(window.messages.error.resetPassword, "danger"), console.log(a)
                    }
                })
            }, fillProfile: function (a) {
                var b = this.element;
                if (a.Gender && b.find("[name=gender][value=" + a.Gender + "]").attr("checked", !0), a.TitleBeforeName) {
                    var c = b.find("[name=academictitlePre]").selectize()[0].selectize;
                    c.setValue(a.TitleBeforeName)
                }
                if (a.TitleAfterName) {
                    var c = b.find("[name=academictitlePost]").selectize()[0].selectize;
                    c.setValue(a.TitleAfterName)
                }
                b.find(".user__firstname").text(a.FirstName), b.find(".user__lastname").text(a.LastName), b.find(".user__lastupdated").text(f(a.DateOfUpdateByApplicant).format("DD.MM.YYYY - HH:MM")), b.find("[name=firstname]").val(a.FirstName), b.find("[name=lastname]").val(a.LastName), b.find("[name=email]").val(a.Email), b.find("[name=phone]").val(a.Phone), a.BirthDate && b.find("[name=bday]").val(f(a.BirthDate).format("DD.MM.YYYY")), b.find("[name=street]").val(a.Street), b.find("[name=zip]").val(a.ZipCode), b.find("[name=city]").val(a.City), b.find("[name=country]").selectize()[0].selectize.setValue(a.Country), b.find("[name=citizenship]").selectize()[0].selectize.setValue(a.Citizenship), b.find("[name=website]").val(a.Url)
            }, getProfile: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/profile", type: "GET", success: function (b) {
                        a.fillProfile(b), a.fillJobRequirements(b), a.fillAdditionalInformations(b), a.fillIsActiveCheckbox(b.IsActive)
                    }, error: function (a) {
                        console.log("can't get Profile")
                    }
                })
            }, getCV: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/cv", type: "GET", success: function (b) {
                        var c = a.filetemplate({
                            files: [{
                                filename: window.labels.download,
                                downloadlink: a.config.apiBaseUrl + "/cv",
                                removelink: "#"
                            }]
                        });
                        a.element.find(".jp-filelist--cv").empty().append(c)
                    }, error: function (a) {
                        console.log("no CV found")
                    }
                })
            }, getPhoto: function (a) {
                var b = this;
                e.ajax({
                    url: b.config.apiBaseUrl + "/photo", type: "GET", success: function (a) {
                        var c = b.filetemplate({
                            files: [{
                                filename: window.labels.download,
                                downloadlink: b.config.apiBaseUrl + "/photo",
                                removelink: "#"
                            }]
                        });
                        b.element.find(".jp-filelist--photo").empty().append(c)
                    }, error: function (a) {
                        console.log("no photo found")
                    }
                })
            }, getDocuments: function (a) {
                var b = this;
                e.ajax({
                    url: b.config.apiBaseUrl + "/documents", type: "GET", success: function (a) {
                        var c = [];
                        if (a)for (var d = 0; d < a.length; d++)c.push({
                            filename: a[d].Name,
                            downloadlink: b.config.apiBaseUrl + "/document/" + a[d].Id,
                            removelink: "#",
                            fileid: a[d].Id
                        });
                        var e = b.filetemplate({files: c});
                        b.element.find(".jp-filelist--documents").empty().append(e)
                    }, error: function (a) {
                        console.log("no photo found")
                    }
                })
            }, deleteCV: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/cv", type: "DELETE", success: function (b) {
                        a.element.find(".jp-filelist--cv").empty()
                    }, error: function (a) {
                        console.log("can't delete CV")
                    }
                })
            }, deleteDocument: function (a) {
                var b = e(a.currentTarget).attr("data-fileid");
                console.log("deleteDocument", b);
                var c = this;
                e.ajax({
                    url: c.config.apiBaseUrl + "/document/" + b, type: "DELETE", success: function (b) {
                        a.currentTarget.closest(".jp-file").remove()
                    }, error: function (a) {
                        console.log("can't delete document")
                    }
                })
            }, deletePhoto: function () {
                console.log("deletePhoto");
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/photo", type: "DELETE", success: function (b) {
                        a.element.find(".jp-filelist--photo").empty()
                    }, error: function (a) {
                        console.log("can't delete photo")
                    }
                })
            }, savePersonalData: function (a) {
                var b = this, c = b.element.find("#jp-applicantform"), f = {
                    gender: c.find("[name=gender]:checked")[0].value - 0,
                    titleBeforeName: c.find("[name=academictitlePre]").val(),
                    titleAfterName: c.find("[name=academictitlePost]").val(),
                    firstName: c.find("[name=firstname]").val(),
                    lastName: c.find("[name=lastname]").val(),
                    phone: c.find("[name=phone]").val(),
                    email: c.find("[name=email]").val(),
                    birthDate: c.find("[name=birthDate]").val(),
                    street: c.find("[name=street]").val(),
                    zipCode: c.find("[name=zip]").val(),
                    city: c.find("[name=city]").val(),
                    country: c.find("[name=country]").val(),
                    citizenship: c.find("[name=citizenship]").val(),
                    url: c.find("[name=website]").val()
                };
                e.ajax({
                    url: b.config.apiBaseUrl + "/profile",
                    type: "PUT",
                    data: JSON.stringify(f),
                    success: function (a) {
                        d.notify(window.labels.personalData + " " + window.messages.success.saved, "success"), console.log("putted user profile")
                    },
                    error: function (a) {
                        d.notify(window.labels.personalData + " " + window.messages.error.saved, "danger"), console.log("can't put userprofile")
                    }
                })
            }, onDocumentsChange: function (a) {
                var b = e(a.currentTarget).parent().find(".jp__indicator");
                b.removeClass("uk-hidden");
                var c = this, d = a.currentTarget.files[0], f = new FormData;
                f.append("document", d), f.append("type", "Dokument"), e.ajax({
                    url: c.config.apiBaseUrl + "/document",
                    type: "POST",
                    data: f,
                    processData: !1,
                    contentType: !1,
                    success: function (d) {
                        b.addClass("uk-hidden"), c.getDocuments(), e(a.currentTarget).val("")
                    },
                    error: function (a) {
                        console.log("can't post document")
                    }
                })
            }, onPhotoChange: function (a) {
                var b = e(a.currentTarget).parent().find(".jp__indicator");
                b.removeClass("uk-hidden");
                var c = this, d = a.currentTarget.files[0], f = new FormData;
                f.append("photo", d), e.ajax({
                    url: c.config.apiBaseUrl + "/photo",
                    type: "POST",
                    data: f,
                    processData: !1,
                    contentType: !1,
                    success: function (d) {
                        b.addClass("uk-hidden"), console.log("photo posted");
                        var f = c.filetemplate({
                            files: [{
                                filename: window.labels.download,
                                downloadlink: c.config.apiBaseUrl + "/photo",
                                removelink: "#"
                            }]
                        });
                        c.element.find(".jp-filelist--photo").empty().append(f), e(a.currentTarget).val("")
                    },
                    error: function (a) {
                        console.log("can't post photo")
                    }
                })
            }, onCVchange: function (a) {
                var b = e(a.currentTarget).parent().find(".jp__indicator");
                b.removeClass("uk-hidden");
                var c = this, d = a.currentTarget.files[0], f = new FormData;
                f.append("cv", d), e.ajax({
                    url: c.config.apiBaseUrl + "/cv",
                    type: "POST",
                    data: f,
                    processData: !1,
                    contentType: !1,
                    success: function (d) {
                        b.addClass("uk-hidden"), console.log("cv posted");
                        var f = c.filetemplate({
                            files: [{
                                filename: window.labels.download,
                                downloadlink: c.config.apiBaseUrl + "/cv",
                                removelink: "#"
                            }]
                        });
                        c.element.find(".jp-filelist--cv").empty().append(f), e(a.currentTarget).val("")
                    },
                    error: function (a) {
                        console.log("can't post CV")
                    }
                })
            }, fillJobRequirements: function (a) {
                var b = this.element;
                if (a.SelfDescription && b.find("[name=selfDescription]").text(a.SelfDescription), a.EarliestPossibleBeginDate && (0 == a.EarliestPossibleBeginDate.Year && 0 == a.EarliestPossibleBeginDate.Month && 0 == a.EarliestPossibleBeginDate.Day && a.EarliestPossibleBeginDate.IsRelativeDate && !a.EarliestPossibleBeginDate.IsValid && b.find("[name=beginDate][value=1]").prop("checked", !0), a.EarliestPossibleBeginDate.IsRelativeDate || !a.EarliestPossibleBeginDate.IsValid || 0 == a.EarliestPossibleBeginDate.Year && 0 == a.EarliestPossibleBeginDate.Month && 0 == a.EarliestPossibleBeginDate.Day || (b.find("[name=beginDate][value=2]").prop("checked", !0), b.find("[name=beginDateFrom]")[0].value = a.EarliestPossibleBeginDate.Day + "." + a.EarliestPossibleBeginDate.Month + "." + a.EarliestPossibleBeginDate.Year), a.EarliestPossibleBeginDate.IsRelativeDate && !a.EarliestPossibleBeginDate.IsValid)) {
                    var c = a.EarliestPossibleBeginDate.Day / 7;
                    c += 4 * a.EarliestPossibleBeginDate.Month, c += 12 * a.EarliestPossibleBeginDate.Year * 4, b.find("[name=beginDate][value=3]").prop("checked", !0), b.find("[name=beginDateWeeks]")[0].value = c
                }
                a.Regions && a.Regions.forEach(function (a) {
                    var c = b.find("[type=checkbox][value='" + a + "']")[0];
                    c && (c.checked = !0)
                })
            }, saveJobRequirements: function (a) {
                var b = this, c = b.element.find("#jp-requirementsform"), g = {
                    year: 0,
                    month: 0,
                    day: 0,
                    isEmpty: !1,
                    isRelativeDate: !1,
                    isValid: !1
                };
                if (c.find("[name=beginDate][value=1]:checked").length > 0)g.isRelativeDate = !0; else if (c.find("[name=beginDate][value=2]:checked").length > 0) {
                    var h = f(c.find("[name=beginDateFrom]").val(), "DD.MM.YYYY");
                    g.year = h.year(), g.month = h.month() + 1, g.day = h.date(), g.isValid = !0
                } else if (c.find("[name=beginDate][value=3]:checked").length > 0) {
                    var i = c.find("[name=beginDateWeeks]").val() - 0;
                    g.day = 7 * i, g.isRelativeDate = !0
                }
                var j = [];
                c.find("[name=regions]:checked").each(function (a, b) {
                    j.push(b.value)
                });
                var k = {
                    selfDescription: c.find("[name=selfDescription]").val(),
                    earliestPossibleBeginDate: g,
                    regions: j
                };
                e.ajax({
                    url: b.config.apiBaseUrl + "/profile",
                    type: "PUT",
                    data: JSON.stringify(k),
                    success: function (a) {
                        console.log("putted user jobrequirements"), d.notify(window.labels.jobRequirements + " " + window.messages.success.saved, "success")
                    },
                    error: function (a) {
                        console.log("can't put jobrequirements"), d.notify(window.labels.jobRequirements + " " + window.messages.error.saved, "danger")
                    }
                })
            }, fillExperiences: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/experiences", type: "GET", success: function (b) {
                        var c = [];
                        b.forEach(function (a) {
                            var b = {
                                id: a.Id,
                                company: a.Name,
                                position: a.Position,
                                tasks: a.Tasks,
                                realFromPeriod: a.Start.Month + "." + a.Start.Year,
                                realToPeriod: null !== a.End ? a.End.Month + "." + a.End.Year : "",
                                formattedFromPeriod: f(a.Start.Month + "." + a.Start.Year, "MM.YYYY").format("MMMM YYYY"),
                                formattedToPeriod: null !== a.End ? f(a.End.Month + "." + a.End.Year, "MM.YYYY").format("MMMM YYYY") : window.labels.currentlyDoing
                            };
                            c.push(b)
                        });
                        var d = a.experiencetemplate({
                            experiences: c.reverse(),
                            changeLabel: window.labels.change,
                            removeLabel: window.labels.remove,
                            saveLabel: window.labels.save,
                            companyLabel: window.labels.company,
                            companyPlaceholder: window.placeholders.company,
                            positionLabel: window.labels.position,
                            positionPlaceholder: window.placeholders.position,
                            tasksLabel: window.labels.tasks,
                            tasksPlaceholder: window.placeholders.tasks,
                            fromPeriodLabel: window.labels.fromPeriod,
                            toPeriodLabel: window.labels.toPeriod,
                            periodPlaceholder: window.placeholders.period,
                            currentlyDoingLabel: window.labels.currentlyDoing,
                            cancelLabel: window.labels.cancel
                        });
                        a.element.find(".jp-experiences-list").empty().append(d), a.bindExperiences()
                    }, error: function (a) {
                        console.log("something went wrong loading the experiences")
                    }
                })
            }, addExperience: function (a) {
                var b = this, c = b.element.find("#jp-addexperienceform"), g = f(c.find("[name=fromPeriod]").val(), "MM.YYYY"), h = {
                    name: c.find("[name=company]").val(),
                    position: c.find("[name=position]").val(),
                    tasks: c.find("[name=tasks]").val(),
                    start: {year: g.year(), month: g.month() + 1, day: 1}
                };
                if (!c.find("[name=currentlyWorkingAt]").prop("checked")) {
                    var i = f(c.find("[name=toPeriod]").val(), "MM.YYYY");
                    h.end = {year: i.year(), month: i.month() + 1, day: 1}
                }
                e.ajax({
                    url: b.config.apiBaseUrl + "/experience",
                    type: "POST",
                    data: JSON.stringify(h),
                    success: function (a) {
                        console.log("posted new experience"), console.log("reloading experiences"), b.fillExperiences(), c[0].reset(), d.notify(window.labels.experience + " " + window.messages.success.added, "success")
                    },
                    error: function (a) {
                        console.log("can't post new experience"), d.notify(window.labels.experience + " " + window.messages.error.added, "danger")
                    }
                })
            }, editExperience: function (a) {
                var b = this, c = b.element.find(".jp-experiencesview__wrapper[data-experience-id=" + a + "]").find(".jp-experiencesview__editexperienceform"), g = f(c.find("[name=fromPeriod]").val(), "MM.YYYY"), h = {
                    name: c.find("[name=company]").val(),
                    position: c.find("[name=position]").val(),
                    tasks: c.find("[name=tasks]").val(),
                    start: {year: g.year(), month: g.month() + 1, day: 1}
                };
                if (!c.find("[name=currentlyWorkingAt]").prop("checked")) {
                    var i = f(c.find("[name=toPeriod]").val(), "MM.YYYY");
                    h.end = {year: i.year(), month: i.month() + 1, day: 1}
                }
                e.ajax({
                    url: b.config.apiBaseUrl + "/experience/" + a,
                    type: "PUT",
                    data: JSON.stringify(h),
                    success: function (c) {
                        console.log("putted experience " + a), console.log("reloading experiences"), b.toggleEditExperience(a), b.fillExperiences(), d.notify(window.labels.experience + " " + window.messages.success.saved, "success")
                    },
                    error: function (b) {
                        console.log("can't put experience " + a), d.notify(window.labels.experience + " " + window.messages.error.saved, "danger")
                    }
                })
            }, toggleEditExperience: function (a) {
                var b = this, c = b.element.find(".jp-experiencesview__wrapper[data-experience-id=" + a + "]"), d = c.find(".jp-experiencesview__panel-box"), e = c.find(".jp-experiencesview__editexperienceform");
                d.slideToggle(350), e.slideToggle(350)
            }, removeExperience: function (a) {
                var b = this, c = b.element.find(".jp-experiencesview__wrapper[data-experience-id=" + a + "]");
                e.ajax({
                    url: b.config.apiBaseUrl + "/experience/" + a, type: "DELETE", success: function (b) {
                        console.log("deleted experience " + a), d.notify(window.labels.experience + " " + window.messages.success.removed, "success"), c.slideUp(350, function () {
                            c.remove()
                        })
                    }, error: function (b) {
                        console.log("can't delete experience " + a), d.notify(window.labels.experience + " " + window.messages.error.removed, "danger")
                    }
                })
            }, bindExperiences: function () {
                var a = this;
                a.element.find(".jp-experiencesview__editExperienceLink").on("click", function (b) {
                    b.preventDefault(), a.toggleEditExperience(b.target.dataset.experienceId)
                }), a.element.find(".jp-experiencesview__removeExperienceLink").on("click", function (b) {
                    b.preventDefault(), a.removeExperience(b.target.dataset.experienceId)
                }), a.element.find(".jp-experiencesview__editexperienceform").on("submit", function (b) {
                    b.preventDefault(), a.editExperience(b.target.dataset.experienceId)
                }), a.element.find(".jp-experiencesview__editexperienceform__cancelBtn").on("click", function (b) {
                    b.preventDefault(), a.toggleEditExperience(b.target.dataset.experienceId)
                })
            }, fillEducation: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/educations", type: "GET", success: function (b) {
                        var c = [];
                        b.forEach(function (a) {
                            var b = {
                                id: a.Id,
                                type: a.Type,
                                location: a.Location,
                                subjectArea: a.Specialization,
                                completed: a.IsFinished,
                                realFromPeriod: a.Start.Month + "." + a.Start.Year,
                                realToPeriod: null !== a.End ? a.End.Month + "." + a.End.Year : "",
                                formattedFromPeriod: f(a.Start.Month + "." + a.Start.Year, "MM.YYYY").format("MMMM YYYY"),
                                formattedToPeriod: null !== a.End ? f(a.End.Month + "." + a.End.Year, "MM.YYYY").format("MMMM YYYY") : window.labels.currentlyDoing
                            };
                            c.push(b)
                        });
                        var d = a.educationtemplate({
                            educations: c.reverse(),
                            changeLabel: window.labels.change,
                            removeLabel: window.labels.remove,
                            saveLabel: window.labels.save,
                            fromPeriodLabel: window.labels.fromPeriod,
                            toPeriodLabel: window.labels.toPeriod,
                            periodPlaceholder: window.placeholders.period,
                            cancelLabel: window.labels.cancel,
                            typeLabel: window.labels.type,
                            locationLabel: window.labels.location,
                            locationPlaceholder: window.placeholders.location,
                            subjectAreaLabel: window.labels.subjectArea,
                            subjectAreaPlaceholder: window.placeholders.subjectArea,
                            completedLabel: window.labels.completed,
                            currentlyDoingLabel: window.labels.currentlyDoing,
                            types: ["AHS", "Fachhochschule", "HAK", "HBLA", "HTL", "Lehre", "Schule", "Universität"]
                        });
                        a.element.find(".jp-educations-list").empty().append(d), a.bindEducation()
                    }, error: function (a) {
                        console.log("something went wrong loading the educations")
                    }
                })
            }, addEducation: function (a) {
                var b = this, c = b.element.find("#jp-addeducationform"), g = f(c.find("[name=fromPeriod]").val(), "MM.YYYY"), h = {
                    type: c.find("[name=type]").val(),
                    location: c.find("[name=location]").val(),
                    specialization: c.find("[name=subjectArea]").val(),
                    start: {year: g.year(), month: g.month() + 1, day: 1},
                    isFinished: c.find("[name=completed]").prop("checked")
                };
                if (!c.find("[name=currentlyDoing]").prop("checked")) {
                    var i = f(c.find("[name=toPeriod]").val(), "MM.YYYY");
                    h.end = {year: i.year(), month: i.month() + 1, day: 1}
                }
                e.ajax({
                    url: b.config.apiBaseUrl + "/education",
                    type: "POST",
                    data: JSON.stringify(h),
                    success: function (a) {
                        console.log("posted new education"), console.log("reloading educations"), d.notify(window.labels.education + " " + window.messages.success.added, "success"), b.fillEducation(), c[0].reset()
                    },
                    error: function (a) {
                        console.log("can't post new education"), d.notify(window.labels.education + " " + window.messages.error.added, "danger")
                    }
                })
            }, editEducation: function (a) {
                var b = this, c = b.element.find(".jp-educationsview__wrapper[data-education-id=" + a + "]").find(".jp-educationsview__editeducationform"), g = f(c.find("[name=fromPeriod]").val(), "MM.YYYY"), h = {
                    type: c.find("[name=type]").val(),
                    location: c.find("[name=location]").val(),
                    specialization: c.find("[name=subjectarea]").val(),
                    isFinished: c.find("[name=completed]").prop("checked"),
                    start: {year: g.year(), month: g.month() + 1, day: 1}
                };
                if (!c.find("[name=currentlyDoing]").prop("checked")) {
                    var i = f(c.find("[name=toPeriod]").val(), "MM.YYYY");
                    h.end = {year: i.year(), month: i.month() + 1, day: 1}
                }
                e.ajax({
                    url: b.config.apiBaseUrl + "/education/" + a,
                    type: "PUT",
                    data: JSON.stringify(h),
                    success: function (c) {
                        console.log("putted education " + a), console.log("reloading educations"), d.notify(window.labels.education + " " + window.messages.success.saved, "success"), b.toggleEditEducation(a), b.fillEducation()
                    },
                    error: function (b) {
                        console.log("can't put education " + a), d.notify(window.labels.education + " " + window.messages.error.saved, "danger")
                    }
                })
            }, toggleEditEducation: function (a) {
                var b = this, c = b.element.find(".jp-educationsview__wrapper[data-education-id=" + a + "]"), d = c.find(".jp-educationsview__panel-box"), e = c.find(".jp-educationsview__editeducationform");
                d.slideToggle(350), e.slideToggle(350)
            }, removeEducation: function (a) {
                var b = this, c = b.element.find(".jp-educationsview__wrapper[data-education-id=" + a + "]");
                e.ajax({
                    url: b.config.apiBaseUrl + "/education/" + a, type: "DELETE", success: function (b) {
                        console.log("deleted education " + a), d.notify(window.labels.education + " " + window.messages.success.removed, "success"), c.slideUp(350, function () {
                            c.remove()
                        })
                    }, error: function (b) {
                        console.log("can't delete education " + a), d.notify(window.labels.education + " " + window.messages.error.removed, "danger")
                    }
                })
            }, bindEducation: function () {
                var a = this;
                a.element.find(".jp-educationsview__editEducationLink").on("click", function (b) {
                    b.preventDefault(), a.toggleEditEducation(b.target.dataset.educationId)
                }), a.element.find(".jp-educationsview__removeEducationLink").on("click", function (b) {
                    b.preventDefault(), a.removeEducation(b.target.dataset.educationId)
                }), a.element.find(".jp-educationsview__editeducationform").on("submit", function (b) {
                    b.preventDefault(), a.editEducation(b.target.dataset.educationId)
                }), a.element.find(".jp-educationsview__editeducationform__cancelBtn").on("click", function (b) {
                    b.preventDefault(), a.toggleEditEducation(b.target.dataset.educationId)
                }), a.element.find(".jp-editeductionform__type-select").selectize()
            }, fillAdditionalInformations: function (a) {
                var b = this;
                if (null !== a.MilitaryService && a.MilitaryService > -1) {
                    var c = b.element.find("[name=presenceService]").selectize()[0].selectize;
                    c.setValue(a.MilitaryService)
                }
                if (a.PhoneTime) {
                    var c = b.element.find("[name=reachability]").selectize()[0].selectize;
                    c.setValue(a.PhoneTime)
                }
                b.fillLanguageSkills(), b.fillOtherActivities(), b.fillPublications()
            }, fillPublications: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/publications", type: "GET", success: function (b) {
                        var c = a.publicationstemplate({
                            publications: b.reverse(),
                            publicationtypes: window.publicationtypes
                        }), d = a.element.find("#jp-additionalinfoform__publicationlist");
                        d.empty().append(c), a.bindAdditionalInfoFields(d), d.find(".jp-additionalinfoform__deletePublicationBtn").on("click", function (b) {
                            var c = b.currentTarget.dataset.publicationId;
                            b.preventDefault(), e.ajax({
                                url: a.config.apiBaseUrl + "/publication/" + c,
                                type: "DELETE",
                                success: function (b) {
                                    a.fillPublications()
                                }
                            })
                        })
                    }
                })
            }, fillOtherActivities: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/activities", type: "GET", success: function (b) {
                        var c = [];
                        b.forEach(function (a) {
                            var b = {
                                id: a.Id,
                                name: a.Name,
                                formattedFromPeriod: a.Start.Year,
                                formattedToPeriod: null !== a.End ? a.End.Year : window.labels.currentlyDoing,
                                realFromPeriod: a.Start.Year,
                                realToPeriod: null !== a.End ? a.End.Year : null
                            };
                            c.push(b)
                        });
                        var d = a.otheractivitiestemplate({
                            otherActivities: c.reverse(),
                            currentlyDoing: window.labels.currentlyDoing,
                            availableYears: a.generateAvailableYearsArray(100).reverse()
                        }), f = a.element.find("#jp-additionalinfoform__otheractivitieslist");
                        f.empty().append(d), a.bindAdditionalInfoFields(f), f.find(".jp-additionalinfoform__deleteActivityBtn").on("click", function (b) {
                            b.preventDefault();
                            var c = b.currentTarget.dataset.activityId;
                            e.ajax({
                                url: a.config.apiBaseUrl + "/activity/" + c, type: "DELETE", success: function (b) {
                                    a.fillOtherActivities()
                                }
                            })
                        })
                    }
                })
            }, fillLanguageSkills: function () {
                var a = this;
                e.ajax({
                    url: a.config.apiBaseUrl + "/languages", type: "GET", success: function (b) {
                        var c = a.languageskillstemplate({
                            languageskills: b,
                            languages: window.languages,
                            languagelevels: window.languagelevels
                        }), d = a.element.find("#jp-additionalinfoform__languageslist");
                        d.empty().append(c), a.bindAdditionalInfoFields(d), d.find(".jp-additionalinfoform__deleteLanguageBtn").on("click", function (b) {
                            b.preventDefault();
                            var c = b.currentTarget.dataset.languageskillId;
                            e.ajax({
                                url: a.config.apiBaseUrl + "/language/" + c, type: "DELETE", success: function (b) {
                                    a.fillLanguageSkills()
                                }
                            })
                        })
                    }, error: function (a) {
                        console.log("could not retrieve language skill list!")
                    }
                })
            }, addLanguageSkill: function (a) {
                var b = this, c = b.newlanguagetemplate({
                    languages: window.languages,
                    languagelevels: window.languagelevels
                });
                a.append(c), b.bindAdditionalInfoFields(a)
            }, addOtherActivity: function (a) {
                var b = this, c = b.newactivitytemplate({
                    availableYears: b.generateAvailableYearsArray(100).reverse(),
                    currentlyDoing: window.labels.currentlyDoing
                });
                a.append(c), b.bindAdditionalInfoFields(a)
            }, addPublication: function (a) {
                var b = this, c = b.newpublicationtemplate({publicationtypes: window.publicationtypes});
                a.append(c), b.bindAdditionalInfoFields(a)
            }, bindAdditionalInfoFields: function (a) {
                a.find("select[class!=selectized]").selectize()
            }, saveAdditionalInfos: function (a) {
                var b = 1, c = this, d = a.find("#jp-additionalinfoform__presenceService").val() - 0, f = a.find("#jp-additionalinfoform__reachability").val();
                d === -1 && (d = null), e.ajax({
                    url: c.config.apiBaseUrl + "/profile",
                    method: "PUT",
                    data: JSON.stringify({phoneTime: f, militaryService: d}),
                    success: function (a) {
                        b--, c.printAdditionalInfoSavedMessageIfCompletelyDone(b), console.log("Successfully saved Additional Info profile data.")
                    },
                    error: function (a) {
                        c.printAdditionalInfoErrorMessage(), console.log("Couldn't save Additional info profile data. ")
                    }
                });
                var g = a.find("#jp-additionalinfoform__languageslist").find(".jp-additionalinfoform__list-editmode").find(".jp-additionalinfoform__languageslist__skillset");
                b += g.length, g.each(function (a, d) {
                    var f = e(d).find(".jp-additionalinfoform__languageslist__language").val(), g = e(d).find(".jp-additionalinfoform__languageslist__languagelevel").val(), h = d.dataset.skillsetId;
                    e.ajax({
                        url: c.config.apiBaseUrl + "/language/" + h,
                        method: "PUT",
                        data: JSON.stringify({language: f, level: g}),
                        success: function (a) {
                            b--, c.printAdditionalInfoSavedMessageIfCompletelyDone(b), console.log("Successfully edited language skillset " + h)
                        },
                        error: function (a) {
                            c.printAdditionalInfoErrorMessage(), console.log("Couldn update language skillset " + h)
                        }
                    })
                });
                var h = a.find("#jp-additionalinfoform__languageslist").find(".jp-additionalinfoform__list-editmode").find(".jp-additionalinfoform__languageslist__skillset-new");
                b += h.length, h.each(function (a, d) {
                    var f = e(d).find(".jp-additionalinfoform__languageslist__language").val(), g = e(d).find(".jp-additionalinfoform__languageslist__languagelevel").val();
                    e.ajax({
                        url: c.config.apiBaseUrl + "/language",
                        method: "POST",
                        data: JSON.stringify({language: f, level: g}),
                        success: function (a) {
                            b--, c.printAdditionalInfoSavedMessageIfCompletelyDone(b), console.log("Successfully created language skillset" + a.Id)
                        },
                        error: function (a) {
                            c.printAdditionalInfoErrorMessage(), console.log("Couldn't create language sillset " + f + " / " + g)
                        }
                    })
                });
                var i = a.find("#jp-additionalinfoform__otheractivitieslist").find(".jp-additionalinfoform__list-editmode").find(".jp-additionalinfoform__otheractivities__activitycombination");
                b += i.length, i.each(function (a, d) {
                    var f = e(d).find(".jp-additionalinfoform__otheractivities__activityname").val(), g = e(d).find(".jp-additionalinfoform__otheractivities__fromPeriod").val() - 0, h = e(d).find(".jp-additionalinfoform__otheractivities__toPeriod").val(), i = d.dataset.activityCombinationId, j = {
                        name: f,
                        start: {year: g, month: 1, day: 1}
                    };
                    h !== window.labels.currentlyDoing && (j.end = {
                        year: h - 0,
                        month: 1,
                        day: 1
                    }), e.ajax({
                        url: c.config.apiBaseUrl + "/activity/" + i,
                        method: "PUT",
                        data: JSON.stringify(j),
                        success: function (a) {
                            b--, c.printAdditionalInfoSavedMessageIfCompletelyDone(b), console.log("Successfully edited activitiy combination " + i)
                        },
                        error: function (a) {
                            c.printAdditionalInfoErrorMessage(), console.log("Couldn't update activity combination " + i)
                        }
                    })
                });
                var j = a.find("#jp-additionalinfoform__otheractivitieslist").find(".jp-additionalinfoform__list-editmode").find(".jp-additionalinfoform__otheractivities__activitycombination-new");
                b += j.length, j.each(function (a, d) {
                    var f = e(d).find(".jp-additionalinfoform__otheractivities__activityname").val(), g = e(d).find(".jp-additionalinfoform__otheractivities__fromPeriod").val() - 0, h = e(d).find(".jp-additionalinfoform__otheractivities__toPeriod").val(), i = {
                        name: f,
                        start: {year: g, month: 1, day: 1}
                    };
                    h !== window.labels.currentlyDoing && (i.end = {
                        year: h - 0,
                        month: 1,
                        day: 1
                    }), e.ajax({
                        url: c.config.apiBaseUrl + "/activity",
                        method: "POST",
                        data: JSON.stringify(i),
                        success: function (a) {
                            b--, c.printAdditionalInfoSavedMessageIfCompletelyDone(b), console.log("Successfully created activity combination " + a.Id)
                        },
                        error: function (a) {
                            c.printAdditionalInfoErrorMessage(), console.log("Couldn't create activity combination " + f + " / " + g + " / " + h)
                        }
                    })
                });
                var k = a.find("#jp-additionalinfoform__publicationlist").find(".jp-additionalinfoform__list-editmode").find(".jp-additionalinfoform__publications__publication");
                b += k.length, k.each(function (a, d) {
                    var f = e(d).find("[name=publicationName]").val(), g = e(d).find("[name=type]").val(), h = e(d).find("[name=description]").val(), i = d.dataset.publicationId;
                    e.ajax({
                        url: c.config.apiBaseUrl + "/publication/" + i,
                        method: "PUT",
                        data: JSON.stringify({name: f, type: g, description: h}),
                        success: function (a) {
                            b--, c.printAdditionalInfoSavedMessageIfCompletelyDone(b), console.log("Successfully edited publication " + i)
                        },
                        error: function (a) {
                            c.printAdditionalInfoErrorMessage(), console.log("Couldn't update publication " + i)
                        }
                    })
                });
                var l = a.find("#jp-additionalinfoform__publicationlist").find(".jp-additionalinfoform__list-editmode").find(".jp-additionalinfoform__publications__publication-new");
                b += l.length, l.each(function (a, d) {
                    var f = e(d).find("[name=publicationName]").val(), g = e(d).find("[name=type]").val(), h = e(d).find("[name=description]").val();
                    e.ajax({
                        url: c.config.apiBaseUrl + "/publication",
                        method: "POST",
                        data: JSON.stringify({name: f, type: g, description: h}),
                        success: function (a) {
                            b--, c.printAdditionalInfoSavedMessageIfCompletelyDone(b), console.log("Successfully created publication " + a.Id)
                        },
                        error: function (a) {
                            c.printAdditionalInfoErrorMessage(), console.log("Couldn't create publication " + f + " / " + g + " / " + h)
                        }
                    })
                })
            }, generateAvailableYearsArray: function (a) {
                for (var b = [], c = (new Date).getFullYear() - a, d = (new Date).getFullYear(), e = c; e <= d; e++)b.push(e);
                return b
            }, printAdditionalInfoSavedMessageIfCompletelyDone: function (a) {
                var b = this;
                0 == a && (d.notify(window.labels.additionalInformation + " " + window.messages.success.saved, "success"), console.log(" ---- Savecounter 0, everything should have been saved right now"), b.fillLanguageSkills(), b.fillOtherActivities(), b.fillPublications())
            }, printAdditionalInfoErrorMessage: function () {
                d.notify(window.labels.additionalInformation + " " + window.messages.error.saved, "danger")
            }
        }
    }, {"./../../../bower_components/moment/moment": 3}],
    26: [function (a, b, c) {
        var d = UIkit, e = jQuery;
        b.exports = {
            template: null, response: {}, currentLocale: "de-at", boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-jobsearch]", a).each(function () {
                        var a = d.$(this);
                        d.jobsearch(a, d.Utils.options(a.attr("data-uk-jobsearch")))
                    })
                })
            }, init: function () {
                var a = this;
                this.template = d.Utils.template(e("[data-uk-jobtemplate]").html());
                var b = {de: "de-at", en: "en-gb"}, c = e('meta[name="language"]').attr("content");
                this.currentLocale = b[c], e.ajax({
                    url: "/jobs/auth",
                    type: "GET",
                    contentType: "application/json",
                    success: function (b) {
                        switch (a.options.view) {
                            case"portal":
                                a.showPortal(a.options.detailId);
                                break;
                            case"detail":
                                a.showDetail(a.options.detailId);
                                break;
                            default:
                                a.getJobs()
                        }
                    }
                }), e(window).on("hashchange", function () {
                    window.location.hash.indexOf("#/job/") > -1 && a.openDetail(window.location.hash.split("#/job/")[1])
                }), window.location.hash.indexOf("#/job/") > -1 && a.openDetail(window.location.hash.split("#/job/")[1])
            }, bindExternalLinks: function () {
                var a = this, b = function (b) {
                    b.preventDefault();
                    var c = e("[data-uk-jobdetail]"), d = (UIkit.modal(c), function (a, b) {
                        var c = b ? b : window.location.href, d = new RegExp("[?&]" + a + "=([^&#]*)", "i"), e = d.exec(c);
                        return e ? e[1] : null
                    }), f = d("Job", e(this).attr("href"));
                    window.location.href = a.options.portalUrl + "?job=" + f
                };
                e('[href*="https://jobs.keba.com/"]').on("click", b), e('[href*="http://jobs.keba.com/"]').on("click", b), e('[href="http://www.keba.com/de/karriere/"]').on("click", function (b) {
                    b.preventDefault(), window.location.href = a.options.resultsUrl
                })
            }, showPortal: function (a) {
                this.element.html('<iframe height="600px" width="100%" src="http://jobs.keba.com/SignUp/Extended?Job=' + a + "&contentOnly=true&culture=" + this.currentLocale + '"></iframe>')
            }, getJobs: function () {
                var a = this;
                e.ajax({
                    url: "/jobs/index?locale=" + this.currentLocale,
                    type: "GET",
                    contentType: "application/json",
                    success: function (b) {
                        function c(a, b) {
                            var c = Date.parse(a.OnlineDateCorrected), d = Date.parse(b.OnlineDateCorrected);
                            return d - c
                        }

                        a.response = b;
                        for (var d = 0; d < b.Jobs.length; d++)b.Jobs[d].OnlineDate = b.Jobs[d].OnlineDateCorrected.substring(0, 10), b.Jobs[d].index = d;
                        b.Jobs.sort(c), a.element.html(a.template(b)), e("[data-uk-jobcount]").html(b.Jobs.length)
                    },
                    error: function (a) {
                        console.log(a)
                    }
                })
            }, showDetail: function (a) {
                e.ajax({
                    url: "/jobs/show/" + a + "?locale=" + this.currentLocale,
                    type: "GET",
                    contentType: "application/json",
                    success: function (a) {
                        this.response = a, this.element.html(a.Html), this.bindExternalLinks()
                    }.bind(this),
                    error: function (a) {
                        console.log(a)
                    }
                })
            }, openDetail: function (a) {
                window.location.href = this.options.detailUrl + "?job=" + a
            }
        }
    }, {}],
    27: [function (a, b, c) {
        function d() {
            if (document.cookie.indexOf("country") !== -1) {
                var a = document.cookie.indexOf("country") + "country".length + 1, b = document.cookie.substring(a, a + 2);
                return b.toUpperCase()
            }
            return !1
        }

        var e = jQuery;
        e(document).ready(function () {
            var a = e(".language__overlay"), b = !0;
            if (b) {
                var c = e("link"), f = e(".js-language-select option");
                f.each(function () {
                    var a = e(this).val(), b = !1;
                    c.each(function () {
                        var c = e(this).attr("hreflang");
                        c && c == a && (b = !0)
                    }), b || e(this).remove()
                })
            }
            var g = [{name: "Afghanistan", code: "AF"}, {name: "Åland Islands", code: "AX"}, {
                name: "Albania",
                code: "AL"
            }, {name: "Algeria", code: "DZ"}, {name: "American Samoa", code: "AS"}, {
                name: "AndorrA",
                code: "AD"
            }, {name: "Angola", code: "AO"}, {name: "Anguilla", code: "AI"}, {
                name: "Antarctica",
                code: "AQ"
            }, {name: "Antigua and Barbuda", code: "AG"}, {name: "Argentina", code: "AR"}, {
                name: "Armenia",
                code: "AM"
            }, {name: "Aruba", code: "AW"}, {name: "Australia", code: "AU"}, {
                name: "Austria",
                code: "AT"
            }, {name: "Azerbaijan", code: "AZ"}, {name: "Bahamas", code: "BS"}, {
                name: "Bahrain",
                code: "BH"
            }, {name: "Bangladesh", code: "BD"}, {name: "Barbados", code: "BB"}, {
                name: "Belarus",
                code: "BY"
            }, {name: "Belgium", code: "BE"}, {name: "Belize", code: "BZ"}, {
                name: "Benin",
                code: "BJ"
            }, {name: "Bermuda", code: "BM"}, {name: "Bhutan", code: "BT"}, {
                name: "Bolivia",
                code: "BO"
            }, {name: "Bosnia and Herzegovina", code: "BA"}, {name: "Botswana", code: "BW"}, {
                name: "Bouvet Island",
                code: "BV"
            }, {name: "Brazil", code: "BR"}, {
                name: "British Indian Ocean Territory",
                code: "IO"
            }, {name: "Brunei Darussalam", code: "BN"}, {name: "Bulgaria", code: "BG"}, {
                name: "Burkina Faso",
                code: "BF"
            }, {name: "Burundi", code: "BI"}, {name: "Cambodia", code: "KH"}, {
                name: "Cameroon",
                code: "CM"
            }, {name: "Canada", code: "CA"}, {name: "Cape Verde", code: "CV"}, {
                name: "Cayman Islands",
                code: "KY"
            }, {name: "Central African Republic", code: "CF"}, {name: "Chad", code: "TD"}, {
                name: "Chile",
                code: "CL"
            }, {name: "China", code: "CN"}, {name: "Christmas Island", code: "CX"}, {
                name: "Cocos (Keeling) Islands",
                code: "CC"
            }, {name: "Colombia", code: "CO"}, {name: "Comoros", code: "KM"}, {
                name: "Congo",
                code: "CG"
            }, {name: "Congo, The Democratic Republic of the", code: "CD"}, {
                name: "Cook Islands",
                code: "CK"
            }, {name: "Costa Rica", code: "CR"}, {name: "Cote D'Ivoire", code: "CI"}, {
                name: "Croatia",
                code: "HR"
            }, {name: "Cuba", code: "CU"}, {name: "Cyprus", code: "CY"}, {
                name: "Czech Republic",
                code: "CZ"
            }, {name: "Denmark", code: "DK"}, {name: "Djibouti", code: "DJ"}, {
                name: "Dominica",
                code: "DM"
            }, {name: "Dominican Republic", code: "DO"}, {name: "Ecuador", code: "EC"}, {
                name: "Egypt",
                code: "EG"
            }, {name: "El Salvador", code: "SV"}, {name: "Equatorial Guinea", code: "GQ"}, {
                name: "Eritrea",
                code: "ER"
            }, {name: "Estonia", code: "EE"}, {name: "Ethiopia", code: "ET"}, {
                name: "Falkland Islands (Malvinas)",
                code: "FK"
            }, {name: "Faroe Islands", code: "FO"}, {name: "Fiji", code: "FJ"}, {
                name: "Finland",
                code: "FI"
            }, {name: "France", code: "FR"}, {name: "French Guiana", code: "GF"}, {
                name: "French Polynesia",
                code: "PF"
            }, {name: "French Southern Territories", code: "TF"}, {name: "Gabon", code: "GA"}, {
                name: "Gambia",
                code: "GM"
            }, {name: "Georgia", code: "GE"}, {name: "Germany", code: "DE"}, {
                name: "Ghana",
                code: "GH"
            }, {name: "Gibraltar", code: "GI"}, {name: "Greece", code: "GR"}, {
                name: "Greenland",
                code: "GL"
            }, {name: "Grenada", code: "GD"}, {name: "Guadeloupe", code: "GP"}, {
                name: "Guam",
                code: "GU"
            }, {name: "Guatemala", code: "GT"}, {name: "Guernsey", code: "GG"}, {
                name: "Guinea",
                code: "GN"
            }, {name: "Guinea-Bissau", code: "GW"}, {name: "Guyana", code: "GY"}, {
                name: "Haiti",
                code: "HT"
            }, {name: "Heard Island and Mcdonald Islands", code: "HM"}, {
                name: "Holy See (Vatican City State)",
                code: "VA"
            }, {name: "Honduras", code: "HN"}, {name: "Hong Kong", code: "HK"}, {
                name: "Hungary",
                code: "HU"
            }, {name: "Iceland", code: "IS"}, {name: "India", code: "IN"}, {
                name: "Indonesia",
                code: "ID"
            }, {name: "Iran, Islamic Republic Of", code: "IR"}, {name: "Iraq", code: "IQ"}, {
                name: "Ireland",
                code: "IE"
            }, {name: "Isle of Man", code: "IM"}, {name: "Israel", code: "IL"}, {
                name: "Italy",
                code: "IT"
            }, {name: "Jamaica", code: "JM"}, {name: "Japan", code: "JP"}, {
                name: "Jersey",
                code: "JE"
            }, {name: "Jordan", code: "JO"}, {name: "Kazakhstan", code: "KZ"}, {
                name: "Kenya",
                code: "KE"
            }, {name: "Kiribati", code: "KI"}, {
                name: "Korea, Democratic People'S Republic of",
                code: "KP"
            }, {name: "Korea, Republic of", code: "KR"}, {name: "Kuwait", code: "KW"}, {
                name: "Kyrgyzstan",
                code: "KG"
            }, {name: "Lao People'S Democratic Republic", code: "LA"}, {name: "Latvia", code: "LV"}, {
                name: "Lebanon",
                code: "LB"
            }, {name: "Lesotho", code: "LS"}, {name: "Liberia", code: "LR"}, {
                name: "Libyan Arab Jamahiriya",
                code: "LY"
            }, {name: "Liechtenstein", code: "LI"}, {name: "Lithuania", code: "LT"}, {
                name: "Luxembourg",
                code: "LU"
            }, {name: "Macao", code: "MO"}, {
                name: "Macedonia, The Former Yugoslav Republic of",
                code: "MK"
            }, {name: "Madagascar", code: "MG"}, {name: "Malawi", code: "MW"}, {
                name: "Malaysia",
                code: "MY"
            }, {name: "Maldives", code: "MV"}, {name: "Mali", code: "ML"}, {
                name: "Malta",
                code: "MT"
            }, {name: "Marshall Islands", code: "MH"}, {name: "Martinique", code: "MQ"}, {
                name: "Mauritania",
                code: "MR"
            }, {name: "Mauritius", code: "MU"}, {name: "Mayotte", code: "YT"}, {
                name: "Mexico",
                code: "MX"
            }, {name: "Micronesia, Federated States of", code: "FM"}, {
                name: "Moldova, Republic of",
                code: "MD"
            }, {name: "Monaco", code: "MC"}, {name: "Mongolia", code: "MN"}, {
                name: "Montserrat",
                code: "MS"
            }, {name: "Morocco", code: "MA"}, {name: "Mozambique", code: "MZ"}, {
                name: "Myanmar",
                code: "MM"
            }, {name: "Namibia", code: "NA"}, {name: "Nauru", code: "NR"}, {
                name: "Nepal",
                code: "NP"
            }, {name: "Netherlands", code: "NL"}, {name: "Netherlands Antilles", code: "AN"}, {
                name: "New Caledonia",
                code: "NC"
            }, {name: "New Zealand", code: "NZ"}, {name: "Nicaragua", code: "NI"}, {
                name: "Niger",
                code: "NE"
            }, {name: "Nigeria", code: "NG"}, {name: "Niue", code: "NU"}, {
                name: "Norfolk Island",
                code: "NF"
            }, {name: "Northern Mariana Islands", code: "MP"}, {name: "Norway", code: "NO"}, {
                name: "Oman",
                code: "OM"
            }, {name: "Pakistan", code: "PK"}, {name: "Palau", code: "PW"}, {
                name: "Palestinian Territory, Occupied",
                code: "PS"
            }, {name: "Panama", code: "PA"}, {name: "Papua New Guinea", code: "PG"}, {
                name: "Paraguay",
                code: "PY"
            }, {name: "Peru", code: "PE"}, {name: "Philippines", code: "PH"}, {
                name: "Pitcairn",
                code: "PN"
            }, {name: "Poland", code: "PL"}, {name: "Portugal", code: "PT"}, {
                name: "Puerto Rico",
                code: "PR"
            }, {name: "Qatar", code: "QA"}, {name: "Reunion", code: "RE"}, {
                name: "Romania",
                code: "RO"
            }, {name: "Russian Federation", code: "RU"}, {name: "RWANDA", code: "RW"}, {
                name: "Saint Helena",
                code: "SH"
            }, {name: "Saint Kitts and Nevis", code: "KN"}, {
                name: "Saint Lucia",
                code: "LC"
            }, {name: "Saint Pierre and Miquelon", code: "PM"}, {
                name: "Saint Vincent and the Grenadines",
                code: "VC"
            }, {name: "Samoa", code: "WS"}, {name: "San Marino", code: "SM"}, {
                name: "Sao Tome and Principe",
                code: "ST"
            }, {name: "Saudi Arabia", code: "SA"}, {name: "Senegal", code: "SN"}, {
                name: "Serbia and Montenegro",
                code: "CS"
            }, {name: "Seychelles", code: "SC"}, {name: "Sierra Leone", code: "SL"}, {
                name: "Singapore",
                code: "SG"
            }, {name: "Slovakia", code: "SK"}, {name: "Slovenia", code: "SI"}, {
                name: "Solomon Islands",
                code: "SB"
            }, {name: "Somalia", code: "SO"}, {
                name: "South Africa",
                code: "ZA"
            }, {name: "South Georgia and the South Sandwich Islands", code: "GS"}, {
                name: "Spain",
                code: "ES"
            }, {name: "Sri Lanka", code: "LK"}, {name: "Sudan", code: "SD"}, {
                name: "Suriname",
                code: "SR"
            }, {name: "Svalbard and Jan Mayen", code: "SJ"}, {name: "Swaziland", code: "SZ"}, {
                name: "Sweden",
                code: "SE"
            }, {name: "Switzerland", code: "CH"}, {
                name: "Syrian Arab Republic",
                code: "SY"
            }, {name: "Taiwan, Province of China", code: "TW"}, {
                name: "Tajikistan",
                code: "TJ"
            }, {name: "Tanzania, United Republic of", code: "TZ"}, {name: "Thailand", code: "TH"}, {
                name: "Timor-Leste",
                code: "TL"
            }, {name: "Togo", code: "TG"}, {name: "Tokelau", code: "TK"}, {
                name: "Tonga",
                code: "TO"
            }, {name: "Trinidad and Tobago", code: "TT"}, {name: "Tunisia", code: "TN"}, {
                name: "Turkey",
                code: "TR"
            }, {name: "Turkmenistan", code: "TM"}, {name: "Turks and Caicos Islands", code: "TC"}, {
                name: "Tuvalu",
                code: "TV"
            }, {name: "Uganda", code: "UG"}, {name: "Ukraine", code: "UA"}, {
                name: "United Arab Emirates",
                code: "AE"
            }, {name: "United Kingdom", code: "GB"}, {
                name: "United States",
                code: "US"
            }, {name: "United States Minor Outlying Islands", code: "UM"}, {
                name: "Uruguay",
                code: "UY"
            }, {name: "Uzbekistan", code: "UZ"}, {name: "Vanuatu", code: "VU"}, {
                name: "Venezuela",
                code: "VE"
            }, {name: "Viet Nam", code: "VN"}, {
                name: "Virgin Islands, British",
                code: "VG"
            }, {name: "Virgin Islands, U.S.", code: "VI"}, {
                name: "Wallis and Futuna",
                code: "WF"
            }, {name: "Western Sahara", code: "EH"}, {name: "Yemen", code: "YE"}, {
                name: "Zambia",
                code: "ZM"
            }, {name: "Zimbabwe", code: "ZW"}];
            UIkit.$(".js-language-select").selectize();
            var h = UIkit.$(".js-country-select").selectize({
                valueField: "code",
                labelField: "name",
                searchField: ["name"],
                options: g
            });
            d() ? h[0].selectize.setValue(d()) : h[0].selectize.setValue(g[0].code), e('a[href="#languageselect"]').on("click", function () {
                a.fadeIn()
            }), e(".language__close").on("click", function () {
                a.fadeOut()
            }), e('a[href="#languageselect"]').each(function () {
                e(this).addClass("language_switch")
            }), e('form[name="changeLanguage"] button[type="submit"]').on("click", function (a) {
                a.preventDefault();
                var b = e('form[name="changeLanguage"] select.js-language-select').val(), c = e('form[name="changeLanguage"] select.js-country-select').val(), f = e('[hreflang="' + b + '"]').attr("href");
                return d() && d() !== c && (f += "?changecountry=" + c), window.location = f, !1
            })
        })
    }, {}],
    28: [function (a, b, c) {
        !function () {
            "use strict";
            UIkit.on("beforeready.uk.dom", function () {
                UIkit.plugin("lightbox", "iframe", {
                    init: function (a) {
                        a.on("showitem.uk.lightbox", function (b, c) {
                            var d = function (a, b, d) {
                                c.meta = {
                                    content: '<iframe class="uk-responsive-width" src="' + a + '" width="' + b + '" height="' + d + '"></iframe>',
                                    width: b,
                                    height: d
                                }, c.type = "iframe", c.promise.resolve()
                            };
                            if ("iframe" === c.type || c.source.match(/\.(html|php)$/))d(c.source, a.options.width || 800, a.options.height || 600); else if (c.source.indexOf("youku") != -1) {
                                if (c.source.indexOf("iframe") != -1) {
                                    var e = c.source.substring(c.source.indexOf(" src='") + 6, c.source.length), f = e.substring(0, e.indexOf("'"));
                                    c.source = f
                                } else if (c.source.indexOf("v.youku.com") != -1) {
                                    var f;
                                    f = c.source.indexOf(".html") != -1 ? c.source.substring(c.source.indexOf("v_show/id_") + 10, c.source.indexOf(".html")) : c.source.substring(c.source.indexOf("v_show/id_") + 10, c.source.length), c.source = "http://player.youku.com/embed/" + f
                                }
                                d(c.source, a.options.width || 800, a.options.height || 600)
                            }
                        })
                    }
                }), UIkit.plugin("lightbox", "youtube", {
                    init: function (a) {
                        var b = {}, c = /(\/\/.*?youtube\.[a-z]+)\/watch\?v=([^&]+)&?(.*)/, d = /youtu\.be\/(.*)/;
                        a.on("showitem.uk.lightbox", function (a, e) {
                            var f, g, h = function (a, b, c) {
                                e.meta = {
                                    content: '<iframe src="//www.youtube.com/embed/' + a + '" width="' + b + '" height="' + c + '" style="max-width:100%;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                                    width: b,
                                    height: c
                                }, e.type = "iframe", e.promise.resolve()
                            };
                            if ((g = e.source.match(c)) && (f = g[2]), (g = e.source.match(d)) && (f = g[1]), f) {
                                if (b[f])h(f, b[f].width, b[f].height); else {
                                    var i = new Image, j = !1;
                                    i.onerror = function () {
                                        b[f] = {width: 640, height: 320}, h(f, b[f].width, b[f].height)
                                    }, i.onload = function () {
                                        120 == i.width && 90 == i.height ? j ? (b[f] = {
                                            width: 640,
                                            height: 320
                                        }, h(f, b[f].width, b[f].height)) : (j = !0, i.src = "//img.youtube.com/vi/" + f + "/0.jpg") : (b[f] = {
                                            width: i.width,
                                            height: i.height
                                        }, h(f, i.width, i.height))
                                    }, i.src = "//img.youtube.com/vi/" + f + "/maxresdefault.jpg"
                                }
                                a.stopImmediatePropagation()
                            }
                        })
                    }
                })
            })
        }(), b.exports = {}
    }, {}],
    29: [function (a, b, c) {
        var d = UIkit, e = jQuery;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-linkanchor]", a).each(function () {
                        var a = d.$(this);
                        d.link(a, d.Utils.options(a.attr("data-linkanchor")))
                    })
                })
            }, init: function () {
                var a = this;
                a.element.on("click", function (b) {

                    b.preventDefault();
                    var c = e("#" + a.element.attr("data-linkanchor"));
                    c && e("html, body").animate({scrollTop: c.offset().top}, 1200)
                })
            }
        }
    }, {}],
    30: [function (a, b, c) {
        function d() {
            new Date - n < p ? setTimeout(d, p) : (o = !1, !m && getWindowWidth() > 767 && initMapEv())
        }

        function e(a, b) {
            var c = new XMLHttpRequest;
            c.onreadystatechange = function () {
                if (4 === c.readyState && 200 === c.status) {
                    var a = JSON.parse(c.responseText);
                    b && b(a)
                }
            }, c.open("GET", a), c.send()
        }

        function f() {

            function a(a) {
                return a * Math.PI / 180
            }

            function b(b, c, d, e) {
                b = a(b), d = a(d), c = a(c), e = a(e);
                var f = 6371, g = (e - c) * Math.cos((b + d) / 2), h = d - b, i = Math.sqrt(g * g + h * h) * f;
                return i
            }

            function c(a, c) {
                for (var d, e = 99999, f = 0; f < k.length; ++f) {
                    var g = b(a, c, k[f][1], k[f][2]);
                    g < e && (d = f, e = g)
                }
                return k[d]
            }

            j.ajax({
                url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBhUgL6-zI9luZVKsNY1UtwmwEMMoSZBk0",
                type: "POST",
                dataType: "json",
                success: function (a) {
                    var b = c(a.location.lat, a.location.lng);
                    q = b[0], setLocationData(b[3].id, b[0], !1, !0)
                },
                error: function () {
                    j.ajax({
                        url: "http://locatr.netural.com/?method=getFromIP&format=json",
                        type: "POST",
                        dataType: "json",
                        success: function (a) {
                            var b = c(a.lat, a.lng);
                            q = b[0], setLocationData(b[0], b[3].city, !1, !0)
                        }
                    })
                }
            })
        }

        function g(a, b) {
            j("#locationCountryOffices")[0].innerHTML = "";
            var c = !1;
            setTimeout(function () {
                for (var d = [], e = null, f = 0; f < a.length; f++) {
                    var map_html_div = j("#accordionLocationTemplate"),
                        map_html_div = map_html_div.clone().attr("id", "");
                    d.push(map_html_div);
                    var map_object = a[f];
                    map_html_div.find(".uk-accordion-title").data("id", map_object.id),
                        map_html_div.find("uk-accordion-content").removeData("wrapper"),
                    b.id == map_object.id && (e = f), map_html_div.find(".uk-accordion-title").on("click", function () {
                        for (var a = j(".svg-location"), b = 0; b < a.length; b++)
                            j(a[b]).attr("id") == j(this).data("id") ? j(a[b]).attr("fill", "#ffffff") : j(a[b]).attr("fill", "#d31f26")
                    }),

                        phone_icon = "<i class='uk-icon-phone icon--small icon--inline'></i>",
                        fax_icon = '<i class="uk-icon-fax icon--small icon--inline"></i>',
                        email_icon = '<i class="uk-icon-paper-plane icon--small icon--inline"></i>',

                        // find div elements
                        address = map_html_div.find("#locationsAddress"),
                        street = map_html_div.find("#locationsStreet"),
                        phone = map_html_div.find("#locationsPhone"),
                        fax = map_html_div.find("#locationsFax"),
                        email = map_html_div.find("#locationsEmail"),
                        country = map_html_div.find("#locationsCountry"),
                        zip = map_html_div.find("#locationsZip"),
                        city = map_html_div.find("#locationsCity"),

                        map_html_div.find("#locationAccordionHeader").text(map_object.name),

                        // apply content to div elements
                        map_object.address ? address.text(map_object.address) : address.remove(),
                        map_object.street ? street.text(map_object.street) : street.remove(),
                        map_object.phone ? phone.html(phone_icon + map_object.phone) : phone.remove(),
                        map_object.fax ? fax.html(fax_icon + map_object.fax) : fax.remove(),
                        map_object.email ? email.html('<a href="mailto:' + map_object.email + '">' + email_icon + map_object.email + "</a>") : email.remove(),
                        map_object.country ? country.text(map_object.country) : country.remove(),
                        map_object.zipCode ? zip.text(map_object["zip-code"]) : zip.remove(),
                        sep = "" !== map_object["zip-code"] ? " " : "",
                        map_object.city ? (city.text(sep + map_object.city), sep = "" !== map_object.city ? ", " : "") : city.remove(),
                        //sep = "" !== map_object.city ? ", " : "",
                        map_html_div.find("#locationsCountryInline").text(sep + map_object.country),
                        //h.googleMapsLink.length > 0 ? g.find("#locationsGoogleMap").html('<a target="_blank" href="' + h.googleMapsLink + '">Google Maps Location</a>') : g.find("#locationsGoogleMap").remove(),
                        map_html_div.find("#locationsDirections").html(""),
                        map_object.directions ? map_html_div.find("#locationsDirections").html('<a target="_blank" href="' + map_object.directions.pdf + '">' + map_object.directions.linkTitle + "</a>") : map_html_div.find("#locationsDirections").remove(),
                        map_object.website ? map_html_div.find("#locationsWebsite").html('<a target="_blank" href="' + map_object.website.url + '">' + map_object.website.text + "</a>") : map_html_div.find("#locationsWebsite").remove(),
                    map_object.address + " " + map_object.street + ", " + map_object["zip-code"] + " " + map_object.city,
                        j(map_html_div).appendTo("#locationCountryOffices"), j(map_html_div).css("display", "block"),

                    f == d.length - 1 && setTimeout(function () {
                        null == accordion && (accordion = UIkit.accordion(UIkit.$("#my-accordion"), {showfirst: !1})), accordion.update(),
                        c || (c = !0, accordion.toggleItem(j(accordion.find("[data-wrapper]")[e]), !0, !1));
                    }, 100);
                };
            }, 0);
        };

        var h, i = UIkit, j = jQuery, k = [], l = null, m = !1, n = null, o = !1, p = 200, q = "", r = "";
        accordion = null,
            b.exports = {
            boot: function () {
                i.ready(function (a) {
                    i.$("[data-uk-locations]", a).each(function () {
                        var a = i.$(this);
                        i.locations(a, i.Utils.options(a.attr("data-uk-locations")));
                    });
                });
            },
            init: function () {
                var a = location.href.split("/");
                // r = language /en..../de
                r = a[3];
                // g = complete link www.packsmart.com
                var b = a[2], c = a[0], g = c + "//" + b;
                d = a[0] + "//" + a[2] + "/office-locations";

                e(d, function (a) {
                    l = a.data;
                    k = setCityData();
                    f();
                    getWindowWidth() > 767 && initMapEv();
                    h();
                });
            }
        },
            getWindowWidth = function () {
            return j(window).width()
        },
            j(window).resize(function () {
            n = new Date(), o === !1 && (o = !0, setTimeout(d, p));
        }),
            initMapEv = function () {
            m = !0;
            var a = j(".svg-location");
            a.click(function () {
                if ("#ffffff" != j(this).attr("fill")) {
                    for (var b = 0; b < a.length; b++)j("#" + a[b].id).attr("fill", "#d31f26");
                    j(this).attr("fill", "#ffffff"), setLocationData(j(this).attr("countryid"), j(this).attr("id"), !0, !1)
                };
            });
        },
            h = function () {
            $locationsSelect = j("<select id='locationsSmall' data-uk-select class='select'></select>"), j("#dropdown-location-wrapper").append($locationsSelect);
            for (var a = "", b = 0; b < l.length; b++) {
                var c = l[b].country + ", " + l[b].city;
                "AUT" != l[b].id && "AUT-IN" != l[b].id || (c += ", " + l[b].name.replace("PACK SMART INC. ", "")), a += "<option value='" + l[b].id + "/" + l[b].countryId + "' ><p>" + c + "</p></option>"
            }
            $locationsSelect.append(a), $locationsSelect.selectize(), $locationsSelect.change(function () {
                var a = j(this).find("option:selected"), b = a.val().split("/")[0], c = a.val().split("/")[1];
                setLocationData(c, b, !0, !1)
            })
        }, setLocationData = function (a, b, c, d) {
            for (var e = null, f = null, h = null, i = [], k = 0; k < l.length; k++)"AUT" == l[k].countryId && l[k].headquater === !0 && (h = l[k]), l[k].countryId == a && l[k].headquater === !0 && (e = l[k]), l[k].countryId === a && i.push(l[k]), l[k].id == b && (f = l[k]);
            if (e = null === e ? h : e, "NLD" === a && i.push(h), i.length > 0 && (d ? g(i, e) : g(i, f)), !c)for (var m = j(".svg-location"), k = 0; k < m.length; k++)b === m[k].id && j("#" + m[k].id).attr("fill", "#ffffff")
        }, setCityData = function () {
            for (var a = 0; a < l.length; a++) {
                var b = l[a];
                k[k.length] = [b.id, b.lat, b.lng, b]
            }
            return k
        }
    },
        {}
    ],
    31: [function (a, b, c) {
        var d, e, f, g, h = UIkit, i = jQuery, j = 0, k = function (a) {
            j = a;
            var b = d.eq(a).find("i").first();
            f.find(".milestone__item i").removeClass("active"), b.addClass("active");
            var c = e.eq(a).css("left"), h = g.find(".uk-slider").first();
            h.css("transform", "translateX(-" + c + ")")
        };
        b.exports = {
            boot: function () {
                h.ready(function (a) {
                    d = i("a[data-uk-milestone]"), e = i("li[data-milestone-year]"), f = i(".history__yearsection").first(), g = f.siblings(".history__slidersection").first();
                    var b = d.eq(0).find("i").first();
                    b.addClass("active"), h.$("a[data-uk-milestone]").each(function (a) {
                        var b = h.$(this);
                        h.milestone(b, h.Utils.options(b.attr("data-uk-milestone")))
                    }), i("[data-allyears]").on("click", function () {
                        var a = i(".history__yearsection>.scrollable");
                        a.css("overflow", "auto"), a.animate({scrollTop: a.height() + "px"}, "slow")
                    }), i(".next-milestone").click(function (a) {
                        return a.preventDefault(), j < e.length - 1 && k(j + 1), !1
                    }), i(".prev-milestone").click(function (a) {
                        return a.preventDefault(), j > 0 && k(j - 1), !1
                    })
                })
            }, init: function () {
                this.on("click", function () {
                    k(d.index(this))
                })
            }
        }
    }, {}],
    32: [function (a, b, c) {
        var d = jQuery, e = UIkit;
        d(document).ready(function () {
            for (var a = d("#mobilenav__level2"), b = a.find(".uk-parent"), c = b.find(".uk-nav-sub"), f = d(".mobilenav__item__inner button"), g = d(".mobilenav__full a"), h = d(".mobilenav__single button"), i = d(".uk-accordion-title-level1"), j = d(".mobilenav__level2__item"), k = d(".js-mobilenav-mainlink"), l = d(".navi.navi--top"), m = d(".mobilenav"), n = l.find("li"), o = window.location.href, p = null, q = "/", r = 4, s = !1, t = 0; t < n.length; t++) {
                p = d(n[t]);
                var u = p.find("a").first().attr("href"), v = o.split(q).slice(r), w = v.join(q), x = w.substr(0, w.indexOf("/"));
                u === o || u.indexOf(x) > -1 ? (d(f[t]).find("span").html(p.find("a").text()), d(f[t]).data("navidmobile", p.data("navisecondlevel")), d(f[t]).attr("data-navidmobile", p.data("navisecondlevel")), o.indexOf("/home") >= 0 && u !== o && d(f[t]).on("click", function (a) {
                    return function () {
                        window.location.href = a
                    }
                }(u))) : (d(f[t]).css("display", "none"), p = null)
            }
            o.indexOf("/home") >= 0 && (s = !0, m.addClass("isOnHomePage")), k.on("click", function (a) {
                window.location.href = d(this).data("href")
            }), b.find("a").on("click", function (a) {
                var c = d(this), e = c.parents(".uk-parent").first();
                e.hasClass("uk-active") ? (e.removeClass("uk-active"), e.find(".uk-nav-sub").slideUp()) : (b.removeClass("uk-active"), e.addClass("uk-active"), c.siblings("ul").find("li").length > 0 ? (a.preventDefault(), e.siblings().find(".uk-nav-sub").slideUp(), c.siblings(".uk-nav-sub").slideDown()) : window.location.href = c.attr("href"))
            }), c.find("a").on("click", function (a) {
                var b = d(this);
                b.addClass("uk-active"), window.location.href = b.attr("href")
            }), g.on("click", function () {
                window.location = d(this).attr("href")
            }), s || h.on("click", function () {
                var b = d(this);
                if (b.parents(".mobilenav__single").length > 0 && d(".mobilenav__full").removeClass("open").slideUp(), a.hasClass("open"))f.removeClass("open"), a.removeClass("open").slideUp(); else {
                    f.removeClass("open"), b.addClass("open");
                    var c = b.attr("data-navidmobile");
                    i.text(b.text()), a.addClass("open").slideDown(), j.css("display", "none"), d(".mobilenav__level2__item[data-subnavmobile=" + c + "]").css("display", "block")
                }
            }), d(window).resize(function () {
                e.offcanvas.hide()
            })
        })
    }, {}],
    33: [function (a, b, c) {
        var d = jQuery;
        d(document).ready(function () {
            function a() {
                var a = (z.match(new RegExp("/", "g")) || []).length, b = d('.header__sub a[href="' + z + '"]').last();
                if (a > 8) {
                    var c = z.substr(0, z.lastIndexOf("/")), e = c.substr(0, c.lastIndexOf("/")), f = e.substr(e.lastIndexOf("/") + 1, c.length);
                    z = e + "/" + f;
                    for (var g = d(".navi__level__4 a"), h = 0; h < g.length; h++)if (g[h].href.indexOf(e) >= 0) {
                        b = d('.header__sub a[href="' + g[h].href + '"]').last();
                        break
                    }
                }
                var i = b.closest(".navi__level__4").last();
                if (i.length) {
                    var j = d("[data-navisublevelid=" + i.attr("id") + "]").last();
                    i.show(), b.addClass("active"), j.find("a").addClass("active");
                    var k = j.closest(".navi__level__3").last().addClass("active").removeClass("navi__level__3--no-active-child").show();
                    m.show().addClass("open"), B = d("[data-navisublevelid=" + k.attr("id") + "]").find("a").addClass("active")
                } else {
                    var j = b.closest(".navi__level__3");
                    b.addClass("active");
                    var k = j.addClass("active").addClass("navi__level__3--no-active-child").show();
                    m.show().addClass("open"), B = d("[data-navisublevelid=" + j.attr("id") + "]").find("a").addClass("active")
                }
            }

            function b(a) {
                var b = a.siblings(), c = a.offset().left, e = a.width();
                j = d(".navi__level__2"), p.find("a").removeClass("active"), j.css("display", "none"), a.css({"margin-top": "0px"}).removeClass("small"), b.css({"margin-top": "-" + v + "px"}).addClass("small"), a.css({"margin-left": "-" + c + "px"}), a.insertBefore(a.siblings(":eq(0)")).css({"margin-left": "0"}), w = a.attr("data-navisecondlevel"), j = d("#" + w), j.first().css("margin-left", e), h.css({
                    display: "block",
                    width: a.width()
                }), h.find("a").html(a.find("a").html()).attr("href", a.find("a").attr("href")), j.css("display", "block"), a.css("margin-top", "-" + v + "px"), m.removeClass("open"), B && B.addClass("active");
                var f = jQuery('[data-navisublevelid] a.navi-item[href="' + z + '"]');
                f && f.length && f.addClass("active")
            }

            function c(a) {
                var b = a.siblings(), c = a.offset().left, e = a.width(), f = function () {
                    a.insertBefore(a.siblings(":eq(0)")).css({"margin-left": "0"}), w = a.attr("data-navisecondlevel"), j = d("#" + w), j.first().css("margin-left", e), h.css({
                        display: "block",
                        width: a.width()
                    }), h.find("a").html(a.find("a").html()).attr("href", a.find("a").attr("href")), j.fadeIn("slow"), a.css("margin-top", "-" + v + "px")
                };
                p.find("a").removeClass("active"), j.fadeOut("fast"), a.animate({"margin-top": "0px"}, 300).removeClass("small"), b.animate({"margin-top": "-" + v + "px"}, 300).addClass("small"), a.animate({"margin-left": "-" + c + "px"}, 300, f), m.slideUp().removeClass("open"), B && B.addClass("active");
                var g = jQuery('[data-navisublevelid] a.navi-item[href="' + z + '"]');
                g && g.length && g.addClass("active")
            }

            var e, f = d(".navi.navi--top"), g = f.find("li"), h = d(".navi--main--item"), i = d(".header__background--grey"), j = d(".navi__level__2"), k = d(".navi__level__3"), l = d(".navi__level__4"), m = d(".header__sub"), n = null, o = null, p = j.find("li"), q = d(".navi__level__3 li"), r = d(".navi__level__4 li"), s = !1, t = 200, u = 95, v = g.first().height() - 10, w = null, x = null, y = null;
            i.css("height", g.first().height()), h.css("width", g.first().width()), h.css("height", u);
            for (var z = window.location.href.split("#")[0], A = null, B = null, C = !1, D = "/", E = 4, F = 0; F < g.length; F++) {
                A = d(g[F]);
                var G = A.find("a").first().attr("href"), H = z.split(D).slice(E), I = H.join(D), J = I.substr(0, I.indexOf("/"));
                if (G === z || G.indexOf(J) > -1 && J) {
                    G === z && (C = !0);
                    break
                }
                A = null
            }
            z.indexOf("/home") === -1 && A && a(), C ? c(A) : z.indexOf("/home") === -1 && A && b(A), g.on("click", function (a) {
                var b = d(this), c = window.location.href, e = b.find("a").first().attr("href");
                e === c && a.preventDefault()
            }), p.on("click", function (a) {
                var b = d(this);
                x = b.attr("data-navisublevelID"), l.hide("fast", function () {
                    k.css("display", "none"), 0 !== d("#" + x).length && (n = d("#" + x), n.css("display", "block"), m.slideDown().addClass("open")), b.parents("ul").find("a").removeClass("active"), q.parents("ul").find("a").removeClass("active"), r.parents("ul").find("a").removeClass("active"), b.find("a").addClass("active")
                }), l.length <= 0 && (k.css("display", "none"), 0 !== d("#" + x).length && (n = d("#" + x), n.css("display", "block"), m.slideDown().addClass("open")), b.parents("ul").find("a").removeClass("active"), q.parents("ul").find("a").removeClass("active"), r.parents("ul").find("a").removeClass("active"), b.find("a").addClass("active"))
            }), q.on("click", function () {
                var a = d(this);
                a.closest(".navi__level__3").addClass("active").removeClass("navi__level__3--no-active-child"), "#" != a.find("a").attr("href") && a.closest(".navi__level__3").addClass("navi__level__3--no-active-child"), y = a.attr("data-navisublevelID"), l.slideUp(), 0 !== d("#" + y).length && (o = d("#" + y), o.slideDown(), m.slideDown().addClass("open")), a.parents("ul").find("a").removeClass("active"), r.parents("ul").find("a").removeClass("active"), a.find("a").addClass("active")
            }), r.on("click", function () {
                var a = d(this);
                a.parents("ul").find("a").removeClass("active"), a.find("a").addClass("active")
            }), d(".navi.navi--top li.small").each(function () {
                d(this).hover(function () {
                    MenuOpenCloseErgoTimer(250, function (a) {
                        var b = d(a);
                        d(".navi__level__2").addClass("navi__level__2--hidden"), b.find("li").animate({"margin-top": "0px"}, 250)
                    }, f)
                }, function () {
                    MenuOpenCloseErgoTimer(250, function (a) {
                        var b = f, c = b.find("li.small");
                        c.animate({"margin-top": "-" + v + "px"}, 250, function () {
                            d(".navi__level__2").removeClass("navi__level__2--hidden")
                        })
                    })
                })
            }), MenuOpenCloseErgoTimer = function (a, b, c) {
                "number" == typeof this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = ""), c ? this.delayTimer = setTimeout(function () {
                    b(c)
                }, a) : this.delayTimer = setTimeout(function () {
                    b()
                }, a)
            }, d(window).resize(function () {
                j.fadeOut("fast"), e = new Date, s === !1 && (s = !0, setTimeout(resizeend, t))
            }), resizeend = function () {
                new Date - e < t ? setTimeout(resizeend, t) : (s = !1, resetSubmenuTop(g.first().width()))
            }, resetSubmenuTop = function (a) {
                h.css("width", a), j.first().css("margin-left", a), d(".small").length && j.fadeIn("fast")
            }
        })
    }, {}],
    34: [function (a, b, c) {
        var d = UIkit;
        b.exports = {
            defaults: {target: ".product-collection"}, boot: function () {
                d.ready(function (a) {
                    d.$("[uk-data-productcollection]", a).each(function () {
                        var a = d.$(this);
                        d.productcollection(a, d.Utils.options(a.attr("uk-data-productcollection")))
                    })
                })
            }, init: function () {
                for (var a = d.$(".product-collection"), b = a.find(".product-collection__select select").first(), c = a.find(".product-collection__item"), e = null, f = 0; f < c.length; f++)e = d.$(c[f]), 0 === f && e.addClass("active"), b.append(d.$("<option></option>").val(e.attr("data-productid")).html(e.attr("data-productname")));
                b.selectize(d.Utils.options(b.attr("data-uk-select"))), d.$(".selectize-input input").attr("readonly", "readonly"), b.on("change", function () {
                    if ("function" == typeof searchbuttonChange) {
                        searchbuttonChange(d.$(".product-collection__select"));
                        var a = d.$(".product-collection__select select").first().find("option:selected").val();
                        d.$(".product-collection__item.active").removeClass("active"), d.$('.product-collection__item[data-productid="' + a + '"]').addClass("active")
                    }
                })
            }
        }
    }, {}],
    35: [function (a, b, c) {
        var d = UIkit, e = jQuery;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-quicksearch]", a).each(function () {
                        var a = d.$(this);
                        d.quicksearch(a, d.Utils.options(a.attr("data-uk-quicksearch")))
                    });
                    var b = window.location.href.split("/")[3];
                    d.autocomplete(e(".quicksearch form"), {
                        source: function (a) {
                            var c = this.value;
                            e.ajax({
                                url: "http://www.keba.com/api/search/autocomplete.php",
                                type: "GET",
                                dataType: "json",
                                data: {query: c, lang: b}
                            }).done(function (b, c) {
                                a("success" == c ? b : [])
                            }).fail(function (a, b) {
                                console.log(a, b)
                            })
                        }
                    })
                })
            }, init: function () {
                var a = this, b = e(".quicksearch"), c = e(".quicksearch__input"), d = e("#search-result-form input[name='category[]']"), f = e("#search-result-form");
                a.element.on("click", function (a) {
                    a.preventDefault(), b.slideToggle("fast"), c.focus()
                }), d.change(function () {
                    var a = e(this).val();
                    if ("all" == a)d.slice(1).prop("checked", !1); else {
                        d.eq(0).prop("checked", !1);
                        for (var b = !0, c = 1; c < d.length; c++)d.eq(c).prop("checked") || (b = !1);
                        b && (d.eq(0).prop("checked", !0), d.slice(1).prop("checked", !1))
                    }
                    f.submit()
                }), b.find("form").submit(function (a) {
                    e(this);
                    if ("" == c.val().trim())return !1
                })
            }
        }
    }, {}],
    36: [function (a, b, c) {
        var d = UIkit, e = jQuery;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-relatedp]", a).each(function () {
                        var a = d.$(this);
                        d.relatedp(a, d.Utils.options(a.attr("data-uk-relatedp")))
                    })
                })
            }, init: function () {
                var a = e(".relatedp__readmore"), b = e(".relatedp__readless");
                a.on("click", function () {
                    var a = e(this);
                    a.addClass("hide"), a.siblings(".relatedp__readmoretext").first().slideDown(200, function () {
                        b.addClass("show")
                    })
                }), b.on("click", function () {
                    var b = e(this);
                    b.removeClass("show"), b.siblings(".relatedp__readmoretext").first().slideUp(200, function () {
                        a.removeClass("hide")
                    })
                })
            }
        }
    }, {}],
    37: [function (a, b, c) {
        function d(a) {
            var b = {data: []}, c = window.retailerCountries, d = window.retailerItems, e = {};
            for (var f in d)d.hasOwnProperty(f) && ("undefined" == typeof e[d[f].country] && (e[d[f].country] = []), e[d[f].country].push({
                id: d[f].id,
                lat: d[f].lat || 0,
                lng: d[f].lng || 0
            }));
            for (var f in c)if (c.hasOwnProperty(f)) {
                var g = c[f];
                b.data.push({country: g.value, lat: g.lat || 0, lng: g.lng || 0, retailers: e[g.value] || []})
            }
            a(b)
        }

        function e(a) {
            return parseFloat(a.toString().replace(",", "."))
        }

        function f() {
            var a = [{
                featureType: "water",
                elementType: "geometry",
                stylers: [{color: "#e9e9e9"}, {lightness: 17}]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{color: "#f5f5f5"}, {lightness: 20}]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{color: "#ffffff"}, {lightness: 17}]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{color: "#ffffff"}, {lightness: 29}, {weight: .2}]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{color: "#ffffff"}, {lightness: 18}]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{color: "#ffffff"}, {lightness: 16}]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{color: "#f5f5f5"}, {lightness: 21}]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{color: "#dedede"}, {lightness: 21}]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{visibility: "on"}, {color: "#ffffff"}, {lightness: 16}]
            }, {
                elementType: "labels.text.fill",
                stylers: [{saturation: 36}, {color: "#333333"}, {lightness: 40}]
            }, {elementType: "labels.icon", stylers: [{visibility: "off"}]}, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{color: "#f2f2f2"}, {lightness: 19}]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{color: "#fefefe"}, {lightness: 20}]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{color: "#c1c1c1"}, {lightness: 17}, {weight: 1.2}]
            }], b = {
                zoom: 1,
                center: g(),
                panControl: !1,
                scaleControl: !1,
                mapTypeControl: !1,
                streetViewControl: !1,
                scrollwheel: !1,
                mapTypeId: t
            };
            u = new google.maps.Map(document.getElementById(t), b), n();
            var c = {name: "Custom Style"}, d = new google.maps.StyledMapType(a, c);
            u.mapTypes.set(t, d)
        }

        function g() {
            var a = r();
            return a || (a = new google.maps.LatLng(e(w.lat), e(w.lng))), a
        }

        function h(a) {
            u.setZoom(a.zoom), u.panTo(a.countryData)
        }

        function i(a) {
            j();
            var b = p(), c = [];
            if (b)for (var d = 0; d < F.length; d++)F[d].type == b.country && (F[d].setIcon(y), c[c.length] = F[d].id); else for (var d = 0; d < F.length; d++)F[d].setIcon(y), c[c.length] = F[d].id;
            b && 0 == b.country ? l() : k({visible: c})
        }

        function j() {
            for (var a = 0; a < F.length; a++)F[a].setIcon(z)
        }

        function k(a) {
            E(".retailer p").slideUp();
            for (var b = 0; b < a.visible.length; b++)E(".retailer--" + a.visible[b]).slideDown()
        }

        function l() {
            E(".retailer p").slideDown()
        }

        function m() {
            return E(window).width()
        }

        function n() {
            for (var a = 0; a < v.length; a++)for (var b = 0; b < v[a].retailers.length; b++)o(v[a].retailers[b].latlng, v[a].country, v[a].retailers[b].id)
        }

        function o(a, b, c) {
            var d = new google.maps.Marker({position: a, map: u, icon: y, type: b, id: c});
            d.addListener("click", function () {
                j(), this.setIcon(y), k({visible: [this.id]}), u.panTo(d.getPosition()), m() < 769 && B.css("visibility", "visible")
            }), F.push(d), d.setMap(u)
        }

        function p() {
            var a = q();
            if ("undefined" != typeof a)for (var b = 0; b < v.length; b++)if ("undefined" != typeof v[b].country && a.toLowerCase().indexOf(v[b].country.toLowerCase()) > -1)return v[b];
            return !1
        }

        function q() {
            return A.val()
        }

        function r() {
            return p().latlng
        }

        function s(a) {
            for (var b = [], c = 0; c < a.data.length; c++) {
                for (var d = a.data[c], f = [], g = 0; g < d.retailers.length; g++)f[g] = d.retailers[g], f[g].latlng = new google.maps.LatLng(e(d.retailers[g].lat), e(d.retailers[g].lng));
                b[c] = {country: d.country, latlng: new google.maps.LatLng(e(d.lat), e(d.lng)), retailers: f}
            }
            v = b
        }

        var t, u, v, w, x, y, z, A, B, C, D = UIkit, E = jQuery, F = [];
        b.exports = {
            boot: function () {
                D.ready(function (a) {
                    D.$("[data-uk-rsearch]", a).each(function () {
                        var a = D.$(this);
                        D.map(a, D.Utils.options(a.attr("data-uk-rsearch")))
                    })
                })
            }, init: function () {
                t = "rsearch", w = {
                    lat: 46.818188,
                    lng: 8.227512
                }, x = "/public/images/", y = x + "marker.png", z = x + "marker_muted.png", A = E(".rsearch__map select"), B = E(".rsearch").find(".uk-container.uk-container-center").first(), C = E(".rsearch__close");
                var a = location.href.split("/"), b = (a[2], a[0], setInterval(function () {
                    "undefined" != typeof google && (d(function (a) {
                        s(a), google.maps.event.addDomListener(window, "load", f()), google.maps.event.addDomListener(window, "resize", function () {
                            h(0 == A.val() ? {countryData: new google.maps.LatLng(4, 10), zoom: 1} : {
                                countryData: g(),
                                zoom: 4
                            })
                        }), A.on("change", function () {
                            "function" == typeof searchbuttonChange && searchbuttonChange(D.$(".rsearch"));
                            var a, b;
                            0 == A.val() ? (a = !1, b = 1, l()) : (a = r(), b = 5), a || (a = new google.maps.LatLng(4, 10)), i(), h({
                                countryData: a,
                                zoom: b
                            })
                        }), C.click(function () {
                            B.css("visibility", "hidden")
                        })
                    }), clearInterval(b))
                }, 100))
            }
        }
    }, {}],
    38: [function (a, b, c) {
        var d = UIkit, e = jQuery;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-search]", a).each(function () {
                        var a = d.$(this);
                        d.search(a, d.Utils.options(a.attr("data-uk-search")))
                    })
                })
            }, init: function () {
                e(".quicksearch").show()
            }
        }
    }, {}],
    39: [function (a, b, c) {
        var d = UIkit, e = jQuery, f = null, g = null, h = null;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-searchbutton]", a).each(function () {
                        var a = d.$(this);
                        d.searchbutton(a, d.Utils.options(a.attr("data-uk-searchbutton")))
                    })
                })
            }, init: function () {
                f = e(".searchbutton"), g = f.find("input"), h = f.find(".selectize-input")
            }
        }, searchbuttonChange = function (a) {
            if (a && "undefined" != typeof a ? (h = a.find(".selectize-input").first(), g = a.find("input")) : 0 === a && f && (h = f.find(".selectize-input")), h) {
                var b = h.height(), c = g.height();
                b !== c && g.css("min-height", b)
            }
        }
    }, {}],
    40: [function (a, b, c) {
        var d = UIkit;
        b.exports = {
            boot: function () {
                d.ready(function (a) {
                    d.$("[data-uk-select]", a).each(function () {
                        var a = d.$(this);
                        a.selectize(d.Utils.options(a.attr("data-uk-select"))), d.$(".selectize-input input").attr("readonly", "readonly"), a.on("change", function () {
                            "function" == typeof searchbuttonChange && searchbuttonChange(0)
                        })
                    })
                })
            }
        }
    }, {}],
    41: [function (a, b, c) {
        !function (a) {
            var b;
            window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-slideshow", ["uikit"], function () {
                return b || a(UIkit)
            })
        }(function (a) {
            "use strict";
            var b, c = 0;
            a.component("slideshow", {
                defaults: {
                    animation: "fade",
                    duration: 500,
                    height: "auto",
                    start: 0,
                    autoplay: !1,
                    autoplayInterval: 7e3,
                    videoautoplay: !0,
                    videomute: !0,
                    slices: 15,
                    pauseOnHover: !0,
                    kenburns: !1,
                    kenburnsanimations: ["uk-animation-middle-left", "uk-animation-top-right", "uk-animation-bottom-left", "uk-animation-top-center", "", "uk-animation-bottom-right"]
                }, current: !1, interval: null, hovering: !1, boot: function () {
                    a.ready(function (b) {
                        a.$("[data-uk-slideshow]", b).each(function () {
                            var b = a.$(this);
                            b.data("slideshow") || a.slideshow(b, a.Utils.options(b.attr("data-uk-slideshow")))
                        })
                    })
                }, init: function () {
                    var b = this;
                    this.container = this.element.hasClass("uk-slideshow") ? this.element : a.$(this.find(".uk-slideshow:first")), this.current = this.options.start, this.animating = !1, this.fixFullscreen = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && this.container.hasClass("uk-slideshow-fullscreen"), this.options.kenburns && (this.kbanimduration = this.options.kenburns === !0 ? "15s" : this.options.kenburns, String(this.kbanimduration).match(/(ms|s)$/) || (this.kbanimduration += "ms"), "string" == typeof this.options.kenburnsanimations && (this.options.kenburnsanimations = this.options.kenburnsanimations.split(","))), this.update(), this.on("click.uk.slideshow", "[data-uk-slideshow-item]", function (c) {
                        c.preventDefault();
                        var d = a.$(this).attr("data-uk-slideshow-item");
                        if (b.current != d) {
                            switch (d) {
                                case"next":
                                case"previous":
                                    b["next" == d ? "next" : "previous"]();
                                    break;
                                default:
                                    b.show(parseInt(d, 10))
                            }
                            b.stop()
                        }
                    }), a.$win.on("resize load", a.Utils.debounce(function () {
                        b.resize(), b.fixFullscreen && (b.container.css("height", window.innerHeight), b.slides.css("height", window.innerHeight))
                    }, 100)), setTimeout(function () {
                        b.resize()
                    }, 80), this.options.autoplay && this.start(), this.options.videoautoplay && this.slides.eq(this.current).data("media") && this.playmedia(this.slides.eq(this.current).data("media")), this.options.kenburns && this.applyKenBurns(this.slides.eq(this.current)), this.container.on({
                        mouseenter: function () {
                            b.options.pauseOnHover && (b.hovering = !0)
                        }, mouseleave: function () {
                            b.hovering = !1
                        }
                    }), this.on("swipeRight swipeLeft", function (a) {
                        b["swipeLeft" == a.type ? "next" : "previous"]()
                    }), this.on("display.uk.check", function () {
                        b.element.is(":visible") && (b.resize(), b.fixFullscreen && (b.container.css("height", window.innerHeight), b.slides.css("height", window.innerHeight)))
                    }), a.domObserve(this.element, function (a) {
                        b.container.children(":not([data-slideshow-slide])").not(".uk-slideshow-ghost").length && b.update(!0)
                    })
                }, update: function (b) {
                    var d, e = this, f = 0;
                    this.slides = this.container.children(), this.slidesCount = this.slides.length, this.slides.eq(this.current).length || (this.current = 0), this.slides.each(function (b) {
                        var g = a.$(this);
                        if (!g.data("processed")) {
                            var h = g.children("img,video,iframe").eq(0), i = "html";
                            if (g.data("media", h), g.data("sizer", h), h.length) {
                                var j;
                                switch (i = h[0].nodeName.toLowerCase(), h[0].nodeName) {
                                    case"IMG":
                                        var k = a.$('<div class="uk-cover-background uk-position-cover"></div>').css({"background-image": "url(" + h.attr("src") + ")"});
                                        h.attr("width") && h.attr("height") && (j = a.$("<canvas></canvas>").attr({
                                            width: h.attr("width"),
                                            height: h.attr("height")
                                        }), h.replaceWith(j), h = j, j = void 0), h.css({
                                            width: "100%",
                                            height: "auto",
                                            opacity: 0
                                        }), g.prepend(k).data("cover", k);
                                        break;
                                    case"IFRAME":
                                        var l = h[0].src, m = "sw-" + ++c;
                                        h.attr("src", "").on("load", function () {
                                            if ((b !== e.current || b == e.current && !e.options.videoautoplay) && e.pausemedia(h), e.options.videomute) {
                                                e.mutemedia(h);
                                                var a = setInterval(function (b) {
                                                    return function () {
                                                        e.mutemedia(h), ++b >= 4 && clearInterval(a)
                                                    }
                                                }(0), 250)
                                            }
                                        }).data("slideshow", e).attr("data-player-id", m).attr("src", [l, l.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1&player_id=" + m].join("")).addClass("uk-position-absolute"), a.support.touch || h.css("pointer-events", "none"), j = !0, a.cover && (a.cover(h), h.attr("data-uk-cover", "{}"));
                                        break;
                                    case"VIDEO":
                                        h.addClass("uk-cover-object uk-position-absolute"), j = !0, e.options.videomute && e.mutemedia(h)
                                }
                                if (j) {
                                    d = a.$("<canvas></canvas>").attr({width: h[0].width, height: h[0].height});
                                    var n = a.$('<img style="width:100%;height:auto;">').attr("src", d[0].toDataURL());
                                    g.prepend(n), g.data("sizer", n)
                                }
                            } else g.data("sizer", g);
                            e.hasKenBurns(g) && g.data("cover").css({
                                "-webkit-animation-duration": e.kbanimduration,
                                "animation-duration": e.kbanimduration
                            }), g.data("processed", ++f), g.attr("data-slideshow-slide", i)
                        }
                    }), f && (this.triggers = this.find("[data-uk-slideshow-item]"), this.slides.attr("aria-hidden", "true").removeClass("uk-active").eq(this.current).addClass("uk-active").attr("aria-hidden", "false"), this.triggers.filter('[data-uk-slideshow-item="' + this.current + '"]').addClass("uk-active")), b && f && this.resize()
                }, resize: function () {
                    if (!this.container.hasClass("uk-slideshow-fullscreen")) {
                        var b = this.options.height;
                        "auto" === this.options.height && (b = 0, this.slides.css("height", "").each(function () {
                            b = Math.max(b, a.$(this).height())
                        })), this.container.css("height", b), this.slides.css("height", b)
                    }
                }, show: function (c, d) {
                    if (!this.animating && this.current != c) {
                        this.animating = !0;
                        var e = this, f = this.slides.eq(this.current), g = this.slides.eq(c), h = d ? d : this.current < c ? 1 : -1, i = f.data("media"), j = b[this.options.animation] ? this.options.animation : "fade", k = g.data("media"), l = function () {
                            e.animating && (i && i.is("video,iframe") && e.pausemedia(i), k && k.is("video,iframe") && e.playmedia(k), g.addClass("uk-active").attr("aria-hidden", "false"), f.removeClass("uk-active").attr("aria-hidden", "true"), e.animating = !1, e.current = c, a.Utils.checkDisplay(g, '[class*="uk-animation-"]:not(.uk-cover-background.uk-position-cover)'), e.trigger("show.uk.slideshow", [g, f, e]))
                        };
                        e.applyKenBurns(g), a.support.animation || (j = "none"), f = a.$(f), g = a.$(g), e.trigger("beforeshow.uk.slideshow", [g, f, e]), b[j].apply(this, [f, g, h]).then(l), e.triggers.removeClass("uk-active"), e.triggers.filter('[data-uk-slideshow-item="' + c + '"]').addClass("uk-active")
                    }
                }, applyKenBurns: function (a) {
                    if (this.hasKenBurns(a)) {
                        var b = this.options.kenburnsanimations, c = this.kbindex || 0;
                        a.data("cover").attr("class", "uk-cover-background uk-position-cover").width(), a.data("cover").addClass(["uk-animation-scale", "uk-animation-reverse", b[c].trim()].join(" ")), this.kbindex = b[c + 1] ? c + 1 : 0
                    }
                }, hasKenBurns: function (a) {
                    return this.options.kenburns && a.data("cover")
                }, next: function () {
                    this.show(this.slides[this.current + 1] ? this.current + 1 : 0, 1)
                }, previous: function () {
                    this.show(this.slides[this.current - 1] ? this.current - 1 : this.slides.length - 1, -1)
                }, start: function () {
                    this.stop();
                    var a = this;
                    this.interval = setInterval(function () {
                        a.hovering || a.next()
                    }, this.options.autoplayInterval)
                }, stop: function () {
                    this.interval && clearInterval(this.interval)
                }, playmedia: function (a) {
                    if (a && a[0])switch (a[0].nodeName) {
                        case"VIDEO":
                            this.options.videomute || (a[0].muted = !1), a[0].play();
                            break;
                        case"IFRAME":
                            this.options.videomute || a[0].contentWindow.postMessage('{ "event": "command", "func": "unmute", "method":"setVolume", "value":1}', "*"), a[0].contentWindow.postMessage('{ "event": "command", "func": "playVideo", "method":"play"}', "*")
                    }
                }, pausemedia: function (a) {
                    switch (a[0].nodeName) {
                        case"VIDEO":
                            a[0].pause();
                            break;
                        case"IFRAME":
                            a[0].contentWindow.postMessage('{ "event": "command", "func": "pauseVideo", "method":"pause"}', "*")
                    }
                }, mutemedia: function (a) {
                    switch (a[0].nodeName) {
                        case"VIDEO":
                            a[0].muted = !0;
                            break;
                        case"IFRAME":
                            a[0].contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                    }
                }
            }), b = {
                none: function () {
                    var b = a.$.Deferred();
                    return b.resolve(), b.promise()
                }, scroll: function (b, c, d) {
                    var e = a.$.Deferred();
                    return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1).one(a.support.animation.end, function () {
                        b.css("opacity", 0).removeClass(d == -1 ? "uk-slideshow-scroll-backward-out" : "uk-slideshow-scroll-forward-out"), c.removeClass(d == -1 ? "uk-slideshow-scroll-backward-in" : "uk-slideshow-scroll-forward-in"), e.resolve()
                    }.bind(this)), b.addClass(d == -1 ? "uk-slideshow-scroll-backward-out" : "uk-slideshow-scroll-forward-out"), c.addClass(d == -1 ? "uk-slideshow-scroll-backward-in" : "uk-slideshow-scroll-forward-in"), c.width(), e.promise()
                }, swipe: function (b, c, d) {
                    var e = a.$.Deferred();
                    return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1).one(a.support.animation.end, function () {
                        b.css("opacity", 0).removeClass(d === -1 ? "uk-slideshow-swipe-backward-out" : "uk-slideshow-swipe-forward-out"), c.removeClass(d === -1 ? "uk-slideshow-swipe-backward-in" : "uk-slideshow-swipe-forward-in"), e.resolve()
                    }.bind(this)), b.addClass(d == -1 ? "uk-slideshow-swipe-backward-out" : "uk-slideshow-swipe-forward-out"), c.addClass(d == -1 ? "uk-slideshow-swipe-backward-in" : "uk-slideshow-swipe-forward-in"), c.width(), e.promise()
                }, scale: function (b, c, d) {
                    var e = a.$.Deferred();
                    return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1), b.one(a.support.animation.end, function () {
                        b.css("opacity", 0).removeClass("uk-slideshow-scale-out"), e.resolve()
                    }.bind(this)), b.addClass("uk-slideshow-scale-out"), b.width(), e.promise()
                }, fade: function (b, c, d) {
                    var e = a.$.Deferred();
                    return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1), c.data("cover") || c.data("placeholder") || c.css("opacity", 1).one(a.support.animation.end, function () {
                        c.removeClass("uk-slideshow-fade-in")
                    }).addClass("uk-slideshow-fade-in"), b.one(a.support.animation.end, function () {
                        b.css("opacity", 0).removeClass("uk-slideshow-fade-out"), e.resolve()
                    }.bind(this)), b.addClass("uk-slideshow-fade-out"), b.width(), e.promise()
                }
            }, a.slideshow.animations = b, window.addEventListener("message", function (b) {
                var c, d = b.data;
                if ("string" == typeof d)try {
                    d = JSON.parse(d)
                } catch (a) {
                    d = {}
                }
                b.origin && b.origin.indexOf("vimeo") > -1 && "ready" == d.event && d.player_id && (c = a.$('[data-player-id="' + d.player_id + '"]'), c.length && c.data("slideshow").mutemedia(c))
            }, !1)
        })
    }, {}],
    42: [function (a, b, c) {
        var d = UIkit;
        b.exports = {
            defaults: {target: ".tablerow--item"}, boot: function () {
                d.ready(function (a) {
                    d.$("[uk-data-table]", a).each(function () {
                        var a = d.$(this), b = a.find(".tablerow.tablerow--subitem").first().children().length;
                        a.find(".tablerow.tablerow--item .tablecol").attr("colspan", b), d.table(a, d.Utils.options(a.attr("uk-data-table")))
                    }), d.$("[uk-data-table-extend]", a).each(function () {
                        var a = d.$(this);
                        a.click(function (a) {
                            a.preventDefault();
                            var b = d.$(this).closest(".section").find("[uk-data-table] .tablerow--subitem"), c = d.$(this).closest(".section").find("[uk-data-table] .tablerow"), e = d.$(this).closest(".section").find(".link__label").first(), f = d.$(this).closest(".section").find(".link__label__reverse").first();
                            d.$(this).attr("aria-extended") ? (c.find("i.uk-icon-chevron-down").addClass("uk-icon-chevron-right").removeClass("uk-icon-chevron-down"), b.hide(), d.$(this).attr("aria-extended", "").find("i").removeClass("uk-icon-navicon").addClass("uk-icon-arrows-alt"), e.removeClass("uk-hidden"), f.addClass("uk-hidden")) : (c.find("i.uk-icon-chevron-right").addClass("uk-icon-chevron-down").removeClass("uk-icon-chevron-right"), b.show(), d.$(this).attr("aria-extended", "true").find("i").removeClass("uk-icon-arrows-alt").addClass("uk-icon-navicon"), e.addClass("uk-hidden"), f.removeClass("uk-hidden"))
                        })
                    })
                })
            }, init: function () {
                var a = this;
                this.on("click", this.options.target, function (b) {
                    a.find("i.uk-icon-chevron-down").addClass("uk-icon-chevron-right").removeClass("uk-icon-chevron-down"), a.find(".tablerow--subitem").hide(), d.$(this).nextUntil(a.options.target).show(), d.$(this).find("i").removeClass("uk-icon-chevron-right").addClass("uk-icon-chevron-down")
                }), this.find(this.options.target).first().trigger("click")
            }
        }
    }, {}],
    43: [function (a, b, c) {
        var d = a("./../../bower_components/jquery/dist/jquery.js");
        window.jQuery = d;

        ({
            uikit: a("./../../bower_components/uikit/js/uikit.min.js"),
            autocomplete: a("./../../bower_components/uikit/js/components/autocomplete"),
            slideshow: a("./components/slideshow"),
            notify: a("./../../bower_components/uikit/js/components/notify"),
            tooltip: a("./../../bower_components/uikit/js/components/tooltip"),
            ukImage: UIkit.component("image", a("./components/image")),
            lightbox: a("./../../bower_components/uikit/js/components/lightbox"),
            accordion: a("./../../bower_components/uikit/js/components/accordion"),
            slider: a("./../../bower_components/uikit/js/components/slider"),
            datepicker: a("./../../bower_components/uikit/js/components/datepicker"),
            selectize: a("./../../bower_components/selectize/dist/js/standalone/selectize"),
            parsley: a("./../../bower_components/parsleyjs/dist/parsley"),
            placeholders: a("./../../bower_components/placeholders/lib/placeholders"),
            ukLightboxIframe: UIkit.component("lightboxiframe", a("./components/lightboxiframe")),
            ukSearchbutton: UIkit.component("searchbutton", a("./components/searchbutton")),
            ukForm: UIkit.component("form", a("./components/form")),
            ukSelect: UIkit.component("select", a("./components/select")),
            ukDropdownselect: UIkit.component("dropdownselect", a("./components/dropdownselect")),
            ukDownloadsectionfilter: UIkit.component("downloadsectionfilter", a("./components/downloadsectionfilter")),
            ukDownloadsectionitemfilter: UIkit.component("downloadsectionitemfilter", a("./components/downloadsectionitemfilter")),
            ukTable: UIkit.component("table", a("./components/table")),
            ukMilestone: UIkit.component("milestone", a("./components/milestone")),
            ukRsearch: UIkit.component("map", a("./components/rsearch")),
            ukNav: UIkit.component("nav", a("./components/nav")),
            ukHamburger: UIkit.component("hamburger", a("./components/hamburger")),
            ukLocations: UIkit.component("locations", a("./components/locations")),
            ukLanguage: UIkit.component("language", a("./components/language")),
            ukFloatingmenu: UIkit.component("floatingmenu", a("./components/floatingmenu")),
            ukMobilenav: UIkit.component("mobilenav", a("./components/mobilenav")),
            ukRelatedp: UIkit.component("relatedp", a("./components/relatedp")),
            ukHotspot: UIkit.component("hotspot", a("./components/hotspot")),
            ukFootertoolbar: UIkit.component("footertoolbar", a("./components/footertoolbar")),
            ukProductcollection: UIkit.component("productcollection", a("./components/productcollection")),
            ukJobsearch: UIkit.component("jobsearch", a("./components/jobsearch")),
            ukJobportal: UIkit.component("jobportal", a("./components/jobportal")),
            ukQuicksearch: UIkit.component("quicksearch", a("./components/quicksearch")),
            ukSearch: UIkit.component("search", a("./components/search")),
            ukLink: UIkit.component("link", a("./components/link"))
        })
    }, {
        "./../../bower_components/jquery/dist/jquery.js": 1,
        "./../../bower_components/parsleyjs/dist/parsley": 4,
        "./../../bower_components/placeholders/lib/placeholders": 5,
        "./../../bower_components/selectize/dist/js/standalone/selectize": 6,
        "./../../bower_components/uikit/js/components/accordion": 8,
        "./../../bower_components/uikit/js/components/autocomplete": 9,
        "./../../bower_components/uikit/js/components/datepicker": 10,
        "./../../bower_components/uikit/js/components/lightbox": 11,
        "./../../bower_components/uikit/js/components/notify": 12,
        "./../../bower_components/uikit/js/components/slider": 13,
        "./../../bower_components/uikit/js/components/tooltip": 14,
        "./../../bower_components/uikit/js/uikit.min.js": 15,
        "./components/downloadsectionfilter": 16,
        "./components/downloadsectionitemfilter": 17,
        "./components/dropdownselect": 18,
        "./components/floatingmenu": 19,
        "./components/footertoolbar": 20,
        "./components/form": 21,
        "./components/hamburger": 22,
        "./components/hotspot": 23,
        "./components/image": 24,
        "./components/jobportal": 25,
        "./components/jobsearch": 26,
        "./components/language": 27,
        "./components/lightboxiframe": 28,
        "./components/link": 29,
        "./components/locations": 30,
        "./components/milestone": 31,
        "./components/mobilenav": 32,
        "./components/nav": 33,
        "./components/productcollection": 34,
        "./components/quicksearch": 35,
        "./components/relatedp": 36,
        "./components/rsearch": 37,
        "./components/search": 38,
        "./components/searchbutton": 39,
        "./components/select": 40,
        "./components/slideshow": 41,
        "./components/table": 42
    }]
}, {}, [43]);
