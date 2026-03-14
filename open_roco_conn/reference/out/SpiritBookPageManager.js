System.register("chunks:///_virtual/SpiritBookPageManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritDes.ts", "./SpiritBookTemplate.ts"], (function(t) {
        var e, i, s, o, r;
        return {
            setters: [function(t) {
                e = t.createForOfIteratorHelperLoose,
                    i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    o = t.SpiritDes
                }
                , function(t) {
                    r = t.SpiritBookTemplate
                }
            ],
            execute: function() {
                s._RF.push({}, "e827bSMf8hCZ4lv1VggUxN+", "SpiritBookPageManager", void 0);
                t("SpiritBookPageManager", function() {
                    function t(t) {
                        this._book = void 0,
                            this._templates = {},
                            this._pages = [],
                            this._book = t,
                            this._initTemplates(),
                            this._initPages()
                    }
                    var s = t.prototype;
                    return s._initTemplates = function() {
                        for (var t, i = e(this._book.templates); !(t = i()).done; ) {
                            var s = t.value;
                            this._templates[s.id] = s
                        }
                    }
                        ,
                        s._initPages = function() {
                            for (var t, i = e(this._book.groups); !(t = i()).done; ) {
                                var s = t.value
                                    , o = this._templates[s.templateId]
                                    , r = new a
                                    , n = o.spirits.length;
                                r.template = o,
                                    r.book = this._book,
                                    this._pages.push(r),
                                    this._rankPages(s, o);
                                for (var p = 0, u = 0; u < s.spirits.length; u++)
                                    p++ < n || (p = 1,
                                        (r = new a).template = o,
                                        r.book = this._book,
                                        this._pages.push(r)),
                                        r.spirits.push(s.spirits[u])
                            }
                        }
                        ,
                        s._rankPages = function(t, i) {
                            if (i.order !== r.ORDER_COMMON && !t.spirits.__ranked__) {
                                for (var s, a = [], n = [], p = [], u = e(t.spirits); !(s = u()).done; ) {
                                    var h = s.value;
                                    if (h.id)
                                        switch (h.des.state) {
                                            case o.STATE_HOT:
                                                a.push(h);
                                                break;
                                            case o.STATE_NEW:
                                                n.push(h);
                                                break;
                                            default:
                                                p.push(h)
                                        }
                                    else
                                        p.push(h)
                                }
                                t.spirits = [].concat(a, n, p),
                                    t.spirits.__ranked__ = !0
                            }
                        }
                        ,
                        s.refresh = function() {
                            this._pages = [],
                                this._initPages()
                        }
                        ,
                        s.index = function(t) {
                            return this._pages[t]
                        }
                        ,
                        i(t, [{
                            key: "pageCount",
                            get: function() {
                                return this._pages.length
                            }
                        }]),
                        t
                }());
                var a = t("SpiritBookPage", (function() {
                        this.book = void 0,
                            this.template = void 0,
                            this.spirits = []
                    }
                ));
                s._RF.pop()
            }
        }
    }
));
