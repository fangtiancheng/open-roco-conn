System.register("chunks:///_virtual/EmailListItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtil2.ts"], (function(e) {
        var t, i, n, l, a, c, s, o, r, h, u, d;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    l = e.assertThisInitialized,
                    a = e.createClass
            }
                , function(e) {
                    c = e.cclegacy,
                        s = e._decorator,
                        o = e.Toggle,
                        r = e.Label,
                        h = e.EventHandler,
                        u = e.Component
                }
                , function(e) {
                    d = e.StringUtil
                }
            ],
            execute: function() {
                var p, k, g, f, b, C, S, m, y, v, _, w, I, E, M;
                c._RF.push({}, "e065ecqTSxEFaQFSKMOB/w5", "EmailListItem", void 0);
                var L = s.ccclass
                    , z = s.property;
                e("EmailListItem", (p = L("EmailListItem"),
                    k = z(o),
                    g = z(o),
                    f = z(o),
                    b = z(o),
                    C = z(o),
                    S = z(r),
                p((v = t((y = function(e) {
                    function t() {
                        for (var t, i = arguments.length, a = new Array(i), c = 0; c < i; c++)
                            a[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            n(t, "selected", v, l(t)),
                            n(t, "checked", _, l(t)),
                            n(t, "icon_box", w, l(t)),
                            n(t, "unread", I, l(t)),
                            n(t, "read", E, l(t)),
                            n(t, "title", M, l(t)),
                            t._data = void 0,
                            t._isMultiSelectModel = !1,
                            t.onSingleSelectedCallback = void 0,
                            t.onMultipSelectedCallback = void 0,
                            t
                    }
                    i(t, e);
                    var c = t.prototype;
                    return c.onLoad = function() {
                        var e = new h;
                        e.target = this.node,
                            e.component = "EmailListItem",
                            e.handler = "onStatusChange",
                            this.selected.checkEvents.push(e);
                        var t = new h;
                        t.target = this.node,
                            t.component = "EmailListItem",
                            t.handler = "onCheckStatusChange",
                            this.checked.checkEvents.push(t)
                    }
                        ,
                        c.updateView = function() {
                            var e = d.getUtf8String(this._data.title);
                            this.title.string = d.truncateString(e, 10),
                                console.log("mail : title = " + e),
                                this.data.attach > 0 ? this.icon_box.isChecked = !0 : 0 == this.data.state ? this.unread.isChecked = !0 : this.read.isChecked = !0
                        }
                        ,
                        c.onStatusChange = function() {
                            this.selected.isChecked && this.onSingleSelectedCallback ? this.onSingleSelectedCallback(this) : this.selected.setIsCheckedWithoutNotify(!0),
                                this.updateView()
                        }
                        ,
                        c.onCheckStatusChange = function() {
                            this.checked.isChecked;
                            this.onSingleSelectedCallback && (this.onSingleSelectedCallback(this),
                                this.selected.setIsCheckedWithoutNotify(!0))
                        }
                        ,
                        a(t, [{
                            key: "data",
                            get: function() {
                                return this._data
                            },
                            set: function(e) {
                                this._data = e,
                                    this.updateView()
                            }
                        }, {
                            key: "SelectedEmail",
                            get: function() {
                                return this.selected.isChecked
                            },
                            set: function(e) {
                                this.selected.setIsCheckedWithoutNotify(e)
                            }
                        }, {
                            key: "MultiSelectModel",
                            get: function() {
                                return this._isMultiSelectModel
                            },
                            set: function(e) {
                                this.checked.node.active = e,
                                    this.checked.setIsCheckedWithoutNotify(!1),
                                    this.selected.setIsCheckedWithoutNotify(!1),
                                    this._isMultiSelectModel = e
                            }
                        }, {
                            key: "IsChecked",
                            get: function() {
                                return this.checked.isChecked
                            }
                        }]),
                        t
                }(u)).prototype, "selected", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    _ = t(y.prototype, "checked", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    w = t(y.prototype, "icon_box", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    I = t(y.prototype, "unread", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    E = t(y.prototype, "read", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    M = t(y.prototype, "title", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    m = y)) || m));
                c._RF.pop()
            }
        }
    }
));
