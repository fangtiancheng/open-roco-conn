System.register("chunks:///_virtual/GuardianPetCtlProgressBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GuardianPetUICtlBase.ts", "./ArgumentError.ts", "./GuardianPetCtlExpBar.ts"], (function(t) {
        var e, r, a, i, s, n, u, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    r = t.createClass
            }
                , function(t) {
                    a = t.cclegacy,
                        i = t.Label,
                        s = t.Event
                }
                , function(t) {
                    n = t.GuardianPetUICtlBase
                }
                , function(t) {
                    u = t.ArgumentError
                }
                , function(t) {
                    o = t.GuardianPetCtlExpBar
                }
            ],
            execute: function() {
                a._RF.push({}, "fefa77534ZA4qqWd15wwdFD", "GuardianPetCtlProgressBar", void 0);
                t("GuardianPetCtlProgressBar", function(t) {
                    function a(e, r, a, s) {
                        var n;
                        if (void 0 === r && (r = 0),
                        void 0 === a && (a = ""),
                        void 0 === s && (s = null),
                            (n = t.call(this, e, r, a, s) || this).m_txtValue = void 0,
                            n.m_bar = void 0,
                            n.m_curValue = void 0,
                            n.m_prevValue = void 0,
                            n.m_totalValue = void 0,
                            n.m_expBar = void 0,
                            n.m_txtValue = e.getChildByName("txtValue"),
                        n.m_txtValue && (n.m_txtValue.getComponent(i).string = ""),
                            n.m_bar = e.getChildByName("mcBar"),
                        null == n.m_bar)
                            throw new u("UI格式错误：缺少必要的bar实例。");
                        return n.m_expBar = new o(n.m_bar),
                            n
                    }
                    e(a, t);
                    var n = a.prototype;
                    return n.setProgress = function(t, e) {
                        var r;
                        1 == t ? (this.m_totalValue ? (r = this.m_curValue / this.m_totalValue,
                            this.m_expBar.setProgress(r)) : (r = 0,
                            this.m_expBar.setProgress(r)),
                        this.m_txtValue && (this.m_txtValue.getComponent(i).string = this.m_curValue + "/" + this.m_totalValue)) : 2 == t && (this.m_totalValue ? (r = this.m_curValue / this.m_totalValue,
                            this.m_expBar.animationToProgress(r, this.animComplete.bind(this))) : (r = 0,
                            this.m_expBar.animationToProgress(r, null)),
                        this.m_txtValue && (this.m_txtValue.getComponent(i).string = this.m_curValue + "/" + this.m_totalValue))
                    }
                        ,
                        n.setFullProgress = function() {
                            this.m_expBar.setProgress(1)
                        }
                        ,
                        n.animComplete = function() {
                            var t = new s("progressComplete",!0);
                            this.dispatchEvent(t)
                        }
                        ,
                        r(a, [{
                            key: "total",
                            set: function(t) {
                                this.m_totalValue = t
                            }
                        }, {
                            key: "current",
                            get: function() {
                                return this.m_curValue
                            },
                            set: function(t) {
                                this.m_curValue = t
                            }
                        }]),
                        a
                }(n));
                a._RF.pop()
            }
        }
    }
));
