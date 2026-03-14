System.register("chunks:///_virtual/ExpAllocConfirmWin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./WindowBase.ts"], (function(t) {
        var i, e, n, o, s, r, u;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    r = t.AgentNode
                }
                , function(t) {
                    u = t.WindowBase
                }
            ],
            execute: function() {
                o._RF.push({}, "e88ccWh1zxL2bnKyBlDWw7C", "ExpAllocConfirmWin", void 0);
                t("ExpAllocConfirmWin", function(t) {
                    function o(i, e) {
                        var o;
                        return void 0 === i && (i = null),
                        void 0 === e && (e = !0),
                            (o = t.call(this) || this)._ui = void 0,
                            o.useExpCallback = void 0,
                            o.netProxy = void 0,
                            o._spiritIndex = void 0,
                            o._ui = new c,
                            o._ui.addEventListener(s.TOUCH_END, o.onUIClick, n(o)),
                            o.addChild(o._ui.target),
                            o.initialize(i, null, null, o._ui.target, e),
                            o.center(),
                            o
                    }
                    i(o, t);
                    var r = o.prototype;
                    return r.reset = function() {}
                        ,
                        r.dispose = function() {}
                        ,
                        r.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btn_ok":
                                    this.netProxy.useExp(this._spiritIndex, Number(this.ui.txt_exp.text), this.useExpCallback.bind(this));
                                    break;
                                case "btn_close":
                                    close()
                            }
                        }
                        ,
                        e(o, [{
                            key: "ui",
                            get: function() {
                                return this._ui
                            }
                        }, {
                            key: "spiritIndex",
                            get: function() {
                                return this._spiritIndex
                            },
                            set: function(t) {
                                this._spiritIndex = t
                            }
                        }]),
                        o
                }(u));
                var c = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._txt_exp = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "txt_exp",
                            get: function() {
                                return this._txt_exp || (this._txt_exp = new r(this.getChildByName("txt_exp"))),
                                    this._txt_exp
                            }
                        }]),
                        n
                }(r);
                o._RF.pop()
            }
        }
    }
));
