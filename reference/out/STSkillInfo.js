System.register("chunks:///_virtual/STSkillInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./P_BagSpiritSkillData.ts", "./NetDefine.ts"], (function(t) {
        var i, e, n, l;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.P_BagSpiritSkillData
                }
                , function(t) {
                    l = t.NetDefine
                }
            ],
            execute: function() {
                e._RF.push({}, "daf241qF1xFWrjPWewU+3Tz", "STSkillInfo", void 0);
                t("STSkillInfo", function(t) {
                    function e() {
                        for (var i, e = arguments.length, n = new Array(e), l = 0; l < e; l++)
                            n[l] = arguments[l];
                        return (i = t.call.apply(t, [this].concat(n)) || this).skillDes = void 0,
                            i
                    }
                    return i(e, t),
                        e.prototype.read = function(i) {
                            t.prototype.read.call(this, i),
                                this.skillDes = l.sSkillDesProxy.select(this.id)
                        }
                        ,
                        e
                }(n));
                e._RF.pop()
            }
        }
    }
));
