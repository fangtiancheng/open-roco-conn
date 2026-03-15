System.register("chunks:///_virtual/SpiritBook.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBookPageManager.ts", "./SpiritBookGroup.ts", "./SpiritBookTemplate.ts"], (function(t) {
        var e, s, i, r, p, a;
        return {
            setters: [function(t) {
                e = t.createClass,
                    s = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.SpiritBookPageManager
                }
                , function(t) {
                    p = t.SpiritBookGroup
                }
                , function(t) {
                    a = t.SpiritBookTemplate
                }
            ],
            execute: function() {
                i._RF.push({}, "46684xkSHRGT7z8KTpf24wh", "SpiritBook", void 0);
                t("SpiritBook", function() {
                    function t(t) {
                        if (void 0 === t && (t = null),
                            this.isNew = !1,
                            this.hasCover = !0,
                            this.id = 0,
                            this.pageIdx = 0,
                            this.name = "",
                            this.background = "",
                            this.isSearch = !1,
                            this.groups = [],
                            this.templates = [],
                            this.templatesMap = new Map,
                            this._spirits = null,
                            this._pager = null,
                            t) {
                            if (this.id = parseInt(t.id) || 0,
                                this.name = t.name || "",
                                this.background = t.bg || "",
                            t.hasOwnProperty("isNew") && (this.isNew = "true" === t.isNew),
                            t.hasOwnProperty("hasCover") && (this.hasCover = "true" === t.hasCover),
                            t.hasOwnProperty("pageIdx") && (this.pageIdx = parseInt(t.pageIdx) || 0),
                            t.groups && t.groups && t.groups.group)
                                for (var e, i = Array.isArray(t.groups.group) ? t.groups.group : [t.groups.group], r = s(i); !(e = r()).done; ) {
                                    var o = e.value;
                                    this.groups.push(new p(o))
                                }
                            if (t.templates && t.templates && t.templates.template)
                                for (var n, u = Array.isArray(t.templates.template) ? t.templates.template : [t.templates.template], h = s(u); !(n = h()).done; ) {
                                    var l = n.value;
                                    this.templates.push(new a(l))
                                }
                            this._initTemplates()
                        }
                    }
                    var i = t.prototype;
                    return i._initTemplates = function() {
                        var t = this;
                        this.templates.forEach((function(e) {
                                t.templatesMap[e.id] = e
                            }
                        ))
                    }
                        ,
                        i.getTemplate = function(t) {
                            return this.templates[t] ? this.templates[t] : null
                        }
                        ,
                        i.refresh = function() {
                            this.pager.refresh(),
                                this._spirits = null
                        }
                        ,
                        e(t, [{
                            key: "pager",
                            get: function() {
                                return this._pager || (this._pager = new r(this)),
                                    this._pager
                            }
                        }, {
                            key: "spirits",
                            get: function() {
                                if (!this._spirits) {
                                    this._spirits = [];
                                    for (var t, e = s(this.groups); !(t = e()).done; ) {
                                        var i = t.value;
                                        this._spirits = this._spirits.concat(i.spirits)
                                    }
                                }
                                return this._spirits
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
