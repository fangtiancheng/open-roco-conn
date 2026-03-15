System.register("chunks:///_virtual/SCombatResFight.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatStateBase.ts", "./StateEvent.ts"], (function(t) {
        var e, o, n, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    n = t.CombatStateBase
                }
                , function(t) {
                    s = t.StateEvent
                }
            ],
            execute: function() {
                o._RF.push({}, "9b1fdwrMtNNSKDzQIj6kwgr", "SCombatResFight", void 0);
                t("SCombatResFight", function(t) {
                    function o() {
                        return t.call(this) || this
                    }
                    e(o, t);
                    var n = o.prototype;
                    return n.execute = function() {
                        console.info(this.constructor.name + " == execute"),
                            CONFIG.DEBUG,
                            console.log("state [CWaitingFightState] ", "收到使用道具的回馈！");
                        var t = this._data;
                        null != t ? (0 != t.pCode.code ? console.log("非法请求！使用技能或道具错误！") : 1 == t.reqType && t.skillIndex > 0 && (this._combatSys.getCurrCombatData().myCurSpirit.skills[t.skillIndex - 1].ppLeft = t.ppLeft),
                            this.dispatchEvent(new s(s.STATE_EVENT_END))) : this.dispatchEvent(new s(s.STATE_EVENT_END))
                    }
                        ,
                        n.msgBox = function(t) {
                            console.log("SCombatResFight==msgBox" + t)
                        }
                        ,
                        o
                }(n));
                o._RF.pop()
            }
        }
    }
));
