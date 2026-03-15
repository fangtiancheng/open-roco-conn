System.register("chunks:///_virtual/NoOpponentAlert.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts"], (function(t) {
        var e, n, i, o, s, r, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.assertThisInitialized,
                    i = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    r = t.UICtlBase
                }
                , function(t) {
                    l = t.AgentNode
                }
            ],
            execute: function() {
                o._RF.push({}, "a9538mGR31PnKskYVEMqce2", "NoOpponentAlert", void 0);
                t("NoOpponentAlert", function(t) {
                    function i(e, i, o, r, l) {
                        var h;
                        return void 0 === o && (o = 0),
                        void 0 === r && (r = ""),
                        void 0 === l && (l = null),
                            (h = t.call(this, e, o, r, l) || this).topOwner = void 0,
                            h.fType = void 0,
                            h._ui = void 0,
                            h.topOwner = i,
                            h._ui = new c(e.target),
                            h._ui.btnAlertClose.on(s.TOUCH_END, h.onUIClick, n(h)),
                            h._ui.btnAlertMatch.on(s.TOUCH_END, h.onUIClick, n(h)),
                            h
                    }
                    e(i, t);
                    var o = i.prototype;
                    return o.dispose = function() {
                        this._ui.btnAlertClose.off(s.TOUCH_END, this.onUIClick, this),
                            this._ui.btnAlertMatch.off(s.TOUCH_END, this.onUIClick, this),
                            t.prototype.dispose.call(this)
                    }
                        ,
                        o.setFtype = function(t) {
                            this.fType = t
                        }
                        ,
                        o.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnAlertMatch":
                                    this.topOwner.startMatch(this.fType),
                                        this.visible = !1;
                                    break;
                                case "btnAlertClose":
                                    this.visible = !1
                            }
                        }
                        ,
                        i
                }(r));
                var c = function(t) {
                    function n() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnAlertClose = void 0,
                            e._btnAlertMatch = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnAlertClose",
                            get: function() {
                                return this._btnAlertClose || (this._btnAlertClose = new l(this.getChildByName("btnAlertClose"))),
                                    this._btnAlertClose
                            }
                        }, {
                            key: "btnAlertMatch",
                            get: function() {
                                return this._btnAlertMatch || (this._btnAlertMatch = new l(this.getChildByName("btnAlertMatch"))),
                                    this._btnAlertMatch
                            }
                        }]),
                        n
                }(l);
                o._RF.pop()
            }
        }
    }
));
