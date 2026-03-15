System.register("chunks:///_virtual/SpiritBookTemplate.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBookTemplateElement.ts", "./SpiritBookTemplateDetail.ts", "./SpiritBookTemplateSpirit.ts", "./SpiritBooksConfLoader.ts"], (function(e) {
        var r, t, i, o, a, s, n, p;
        return {
            setters: [function(e) {
                r = e.inheritsLoose,
                    t = e.createForOfIteratorHelperLoose,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    a = e.SpiritBookTemplateElement
                }
                , function(e) {
                    s = e.SpiritBookTemplateDetail
                }
                , function(e) {
                    n = e.SpiritBookTemplateSpirit
                }
                , function(e) {
                    p = e.SpiritBooksConfLoader
                }
            ],
            execute: function() {
                o._RF.push({}, "20709Dp9jFNtbp+jvLffHH5", "SpiritBookTemplate", void 0);
                var l = e("SpiritBookTemplate", function(e) {
                    function o(r) {
                        var p;
                        if (void 0 === r && (r = null),
                            (p = e.call(this, r) || this).id = 0,
                            p.icon = "",
                            p.source = "",
                            p.spirits = [],
                            p.info = null,
                            p.pager = null,
                            p.searchbar = null,
                            p.detail = null,
                            p.order = o.ORDER_COMMON,
                            p.propoLevel = !1,
                            r) {
                            if (r.hasOwnProperty("extend")) {
                                var l = parseInt(r.extend)
                                    , c = o._templates.get(l);
                                c && c.clone(i(p))
                            }
                            if (r.hasOwnProperty("id") && (p.id = parseInt(r.id)),
                            r.hasOwnProperty("src") && (p.source = r.src),
                            r.hasOwnProperty("icon") && (p.icon = r.icon),
                            r.hasOwnProperty("proLvl") && (p.propoLevel = "true" === r.proLvl),
                            r.hasOwnProperty("order") && (p.order = r.order),
                            r.info && r.info[0] && (p.info = new a(r.info)),
                            r.pager && r.pager[0] && (p.pager = new a(r.pager)),
                            r.searchbar && r.searchbar && (p.searchbar = new a(r.searchbar)),
                            r.detail && r.detail[0] && (p.detail = new s(r.detail)),
                            r.spirit && r.spirit[0]) {
                                p.spirits = [];
                                for (var u, d = Array.isArray(r.spirit) ? r.spirit : [r.spirit], h = t(d); !(u = h()).done; ) {
                                    var f = u.value;
                                    p.spirits.push(new n(f))
                                }
                            }
                        }
                        return p
                    }
                    return r(o, e),
                        o.initTemplates = function() {
                            var e = p.Instance.data;
                            e = e.Templates,
                                o._templates = new Map;
                            for (var r, i = e.template || [], a = Array.isArray(i) ? i : [i], s = t(a); !(r = s()).done; ) {
                                var n = new o(r.value);
                                o._templates.set(n.id, n)
                            }
                        }
                        ,
                        o.prototype.clone = function(r) {
                            e.prototype.clone.call(this, r);
                            var t = r;
                            t && (t.id = this.id,
                                t.source = this.source,
                                t.propoLevel = this.propoLevel,
                                t.order = this.order,
                                t.info = this.info,
                                t.pager = this.pager,
                                t.searchbar = this.searchbar,
                                t.detail = this.detail,
                                t.spirits = [].concat(this.spirits))
                        }
                        ,
                        o
                }(a));
                l.TYPE_COMMON = "common",
                    l.TYPE_ACTIVITY = "activity",
                    l.TYPE_CUSTOM = "custom",
                    l.ORDER_COMMON = "common",
                    l._templates = new Map,
                    o._RF.pop()
            }
        }
    }
));
