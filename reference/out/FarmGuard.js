System.register("chunks:///_virtual/FarmGuard.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./WindowMode.ts", "./WindowResult.ts", "./CFunction.ts", "./BagDataProxy.ts", "./BagFunctionProxy.ts", "./LangStrings.ts", "./LangUtils.ts", "./DynamicButton.ts", "./FarmGuardProxy.ts", "./AgentNode.ts", "./ToolTip.ts"], (function(t) {
        var n, o, r, i, u, a, e, s, c, d, l, f, m, h, _;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        r = t.NodeEventType
                }
                , function(t) {
                    i = t.__global
                }
                , function(t) {
                    u = t.WindowMode
                }
                , function(t) {
                    a = t.WindowResult
                }
                , function(t) {
                    e = t.CFunction
                }
                , function(t) {
                    s = t.BagDataProxy
                }
                , function(t) {
                    c = t.BagFunctionProxy
                }
                , function(t) {
                    d = t.LangStrings
                }
                , function(t) {
                    l = t.LangUtils
                }
                , function(t) {
                    f = t.DynamicButton
                }
                , function(t) {
                    m = t.FarmGuardProxy
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    _ = t.ToolTipComponent
                }
            ],
            execute: function() {
                o._RF.push({}, "a8187swrH9DKJDcWYicZGSL", "FarmGuard", void 0);
                t("FarmGuard", function() {
                    function t(t) {
                        this._farmButtonMc = void 0,
                            this._farmGuardButton = void 0,
                            this._farmButtonMc = new F(t),
                        null != t && (this._farmGuardButton = new f(this._farmButtonMc),
                            this._farmGuardButton.target.addComponent(_),
                            this._farmGuardButton.setProperty("tooltip", d.FARM_GUARD),
                            this._farmButtonMc.mouseChildren = !1,
                            this._farmButtonMc.on(r.TOUCH_END, this.onFarmGuard, this))
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        null != this._farmButtonMc && this._farmButtonMc.off(r.TOUCH_END, this.onFarmGuard, this),
                        null != this._farmGuardButton && (this._farmGuardButton.enabled = !1)
                    }
                        ,
                        n.onFarmGuard = function(t) {
                            s.striveChange ? c.striveChangeFun.call(this.onItemFun) : this.onItemFun()
                        }
                        ,
                        n.onItemFun = function() {
                            var t = s.selectedSpirit
                                , n = null != t && null != t.name ? t.name : d.UNKNOWN_SPIRIT
                                , o = l.translate(d.SURE_TO_GUARD_FARM, n);
                            1 == s.data.length && (o = "背包里只剩一只宠物，没有宠物将不能战斗！\n" + o),
                                i.UI.alert("", o, u.OK_CANCEL, new e(this.onFarmGuardResult,this))
                        }
                        ,
                        n.onFarmGuardResult = function(t) {
                            switch (t) {
                                case a.OK:
                                    m.setFarmGuardSpirit(s.selectedIndex + 1, this.onReceiveSetFarmGuardSpirit.bind(this))
                            }
                        }
                        ,
                        n.onReceiveSetFarmGuardSpirit = function(t) {
                            null != t && null != t.returnCode && t.returnCode.isError() && i.UI.alert("", t.returnCode.message)
                        }
                        ,
                        t
                }());
                var F = function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return n(o, t),
                        o
                }(h);
                o._RF.pop()
            }
        }
    }
));
