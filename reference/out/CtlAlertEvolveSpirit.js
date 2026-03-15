System.register("chunks:///_virtual/CtlAlertEvolveSpirit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RebirthCtlAlertChooseSpirit.ts"], (function(e) {
        var o, t, i, r;
        return {
            setters: [function(e) {
                o = e.inheritsLoose,
                    t = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    r = e.RebirthCtlAlertChooseSpirit
                }
            ],
            execute: function() {
                i._RF.push({}, "e8015M2d9tHwJolFBX5WGfe", "CtlAlertEvolveSpirit", void 0);
                e("CtlAlertEvolveSpirit", function(e) {
                    function i(o, i, r, n, l, v, s) {
                        var u;
                        return void 0 === n && (n = null),
                        void 0 === l && (l = 0),
                        void 0 === v && (v = ""),
                        void 0 === s && (s = null),
                            (u = e.call(this, o, null, i, l, v) || this).m_onEvolve = void 0,
                            u.m_onUpgradeLevel100 = void 0,
                            u.m_curSp = void 0,
                            u.m_resAlertConfirm = void 0,
                            u.m_onSubmit = u.onChoose.bind(t(u)),
                            u.m_onEvolve = r,
                            u.m_onUpgradeLevel100 = n,
                            u.m_resAlertConfirm = s,
                            u
                    }
                    o(i, e);
                    var r = i.prototype;
                    return r.onChoose = function(e) {
                        this.m_curSp = e,
                            this.m_onEvolve(this.m_curSp)
                    }
                        ,
                        r.onBuyLevel = function() {
                            this.m_onUpgradeLevel100(this.m_curSp)
                        }
                        ,
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
