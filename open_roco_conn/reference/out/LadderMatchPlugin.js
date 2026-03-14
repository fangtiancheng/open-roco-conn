System.register("chunks:///_virtual/LadderMatchPlugin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatType.ts", "./CFunction.ts", "./LadderCommonAPI.ts", "./LadderMatchConfig.ts", "./LadderMatchSystemDP2.ts"], (function(t) {
        var e, n, o, r, i, a, c, s, l, h;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        r = t.Label,
                        i = t.Component
                }
                , function(t) {
                    a = t.CombatType
                }
                , function(t) {
                    c = t.CFunction
                }
                , function(t) {
                    s = t.LadderCommonAPI
                }
                , function(t) {
                    l = t.LadderMatchConfig
                }
                , function(t) {
                    h = t.LadderMatchSystemDP
                }
            ],
            execute: function() {
                o._RF.push({}, "fc594fp2JdOR7iatDm4aZuT", "LadderMatchPlugin", void 0);
                t("default", function(t) {
                    function o() {
                        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                            o[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(o)) || this)._label = void 0,
                            e._count = 0,
                            e
                    }
                    e(o, t);
                    var i = o.prototype;
                    return i.start = function() {
                        this._label = this.node.getChildByName("tfLab"),
                            h.initial()
                    }
                        ,
                        i.processFunc = function(t) {
                            switch (t.constructor.name) {
                                case "FightSvrProto_RetInfo":
                                    this.label = "天梯赛匹配取消",
                                        l.isMatching = !1;
                                    var e = this.byteToString(t.retMsg);
                                    console.log("LadderMatch error code = " + t.retCode + " = message = " + e),
                                        this.label = e
                            }
                        }
                        ,
                        i.startMatch = function() {
                            1 == l.isMatching ? h.requestCancelMatch(this.processFunc.bind(this)) : (this.label = "天梯赛匹配中",
                                h.requestMatch(this.processMatch.bind(this)))
                        }
                        ,
                        i.byteToString = function(t, e) {
                            return void 0 === e && (e = "gb2312"),
                                t.position = 0,
                                t.readMultiByte(t.length, e)
                        }
                        ,
                        i.processMatch = function(t, e) {
                            if (this.label = "天梯赛回包",
                                l.isMatching = !1,
                            0 == e.retInfo.retCode)
                                this.label = "匹配成功",
                                    console.log("LadderMatch npcId = " + e.npcId + " = type = " + e.type),
                                    s.startNpcCombat(e.npcId, 1 == e.type ? a.PVB : a.L_PVP, new c(this.onNpcCombatCallBack,this));
                            else if (2 == e.retInfo.retCode) {
                                var n = this.byteToString(e.retInfo.retMsg);
                                console.log("LadderMatch error code = " + e.retInfo.retCode + " = message = " + n),
                                    this.label = n
                            } else {
                                n = this.byteToString(e.retInfo.retMsg);
                                console.log("LadderMatch error code = " + e.retInfo.retCode + " = message = " + n),
                                    this.label = n
                            }
                        }
                        ,
                        i.onNpcCombatCallBack = function(t) {}
                        ,
                        i.initialize = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        i.finalize = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        i.call = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        i.getEDispatcher = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        i.setPlugName = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        i.getPlugName = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        i.setAngelSysAPI = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        n(o, [{
                            key: "label",
                            set: function(t) {
                                this._label.getComponent(r).string = t
                            }
                        }]),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
