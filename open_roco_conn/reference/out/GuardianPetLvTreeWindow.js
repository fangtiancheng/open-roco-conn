System.register("chunks:///_virtual/GuardianPetLvTreeWindow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./WindowBase.ts", "./GuardianPetWindowManager.ts", "./AgentNode.ts"], (function(n) {
        var t, i, e, o, s, a, c, u;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    i = n.createClass
            }
                , function(n) {
                    e = n.cclegacy,
                        o = n.Vec2
                }
                , function(n) {
                    s = n.Constants
                }
                , function(n) {
                    a = n.__global
                }
                , function(n) {
                    c = n.WindowBase
                }
                , function(n) {
                    u = n.GuardianPetWindowManager
                }
                , null],
            execute: function() {
                e._RF.push({}, "5cc6e2em6JG04ZIbbyoo69L", "GuardianPetLvTreeWindow", void 0);
                n("GuardianPetLvTreeWindow", function(n) {
                    function e(t, i) {
                        var e;
                        return (e = n.call(this) || this).iconPositions = [new o(77,151), new o(221,151), new o(365,151), new o(509,151), new o(82,290), new o(224,290), new o(367,290), new o(509,290)],
                            e.iconSizes = [new o(100,100), new o(100,100), new o(100,100), new o(100,100), new o(100,100), new o(100,100), new o(100,100), new o(100,100)],
                            e.iconNum = 8,
                            e.tipsOffset = new o(60,10),
                            e._ui = void 0,
                            e._guardianPetIcon = void 0,
                            e._icons = void 0,
                            e._tips = void 0,
                            e._data = void 0,
                            e.uiLogic = void 0,
                            e
                    }
                    t(e, n);
                    var c = e.prototype;
                    return c.onWinClick = function(n) {
                        switch (n.target.name) {
                            case "btnClose":
                                this.closeCurWin()
                        }
                    }
                        ,
                        c.initUI = function() {}
                        ,
                        c.openCurWin = function() {}
                        ,
                        c.closeCurWin = function() {
                            n.prototype.close.call(this),
                                u.getInstance().openMainWind()
                        }
                        ,
                        c.initGuardianPetIcon = function() {}
                        ,
                        c.onIconOver = function(n) {
                            var t = n.target;
                            this._tips.setLocation(t.x + this.tipsOffset.x, t.y + this.tipsOffset.y),
                                this._tips.data = t.guardianPetData,
                                this._tips.show()
                        }
                        ,
                        c.onIconOut = function(n) {
                            this._tips.hide()
                        }
                        ,
                        c.setIcon = function() {
                            for (var n, t = 1; t <= this.iconNum; t++) {
                                var i = a.SysAPI.getGDataAPI().getDataProxy(s.GUARDIANPET_DATA).selectLvByPhase(t);
                                n = 100 * Number(this._data.id) + t,
                                    this._icons[t - 1].setData(Number(this._data.id), i, t),
                                    this._icons[t - 1].load(n),
                                    this._icons[t - 1].curGuardianPetLv = Number(this._data.lv)
                            }
                        }
                        ,
                        c.dispose = function() {}
                        ,
                        i(e, [{
                            key: "data",
                            set: function(n) {
                                this._data = n,
                                    this.setIcon()
                            }
                        }]),
                        e
                }(c));
                e._RF.pop()
            }
        }
    }
));
