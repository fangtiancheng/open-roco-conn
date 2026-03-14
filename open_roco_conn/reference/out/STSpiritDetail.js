System.register("chunks:///_virtual/STSpiritDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./P_BagSpiritData.ts", "./NetDefine.ts", "./STSkillInfo.ts"], (function(i) {
        var t, e, s, n, r;
        return {
            setters: [function(i) {
                t = i.inheritsLoose
            }
                , function(i) {
                    e = i.cclegacy
                }
                , function(i) {
                    s = i.P_BagSpiritData
                }
                , function(i) {
                    n = i.NetDefine
                }
                , function(i) {
                    r = i.STSkillInfo
                }
            ],
            execute: function() {
                e._RF.push({}, "e1089CufY9DIYN4xIAiob0J", "STSpiritDetail", void 0);
                i("STSpiritDetail", function(i) {
                    function e() {
                        var t;
                        return (t = i.call(this) || this).spiritID = void 0,
                            t.baseTime = void 0,
                            t.spiritDes = void 0,
                            t.skillCls = r,
                            t
                    }
                    return t(e, i),
                        e.prototype.read = function(t) {
                            i.prototype.read.call(this, t),
                                this.spiritID = this.id,
                                this.baseTime = this.storageTime,
                                this.spiritDes = n.sDesProxy.select(this.id)
                        }
                        ,
                        e
                }(s));
                e._RF.pop()
            }
        }
    }
));
