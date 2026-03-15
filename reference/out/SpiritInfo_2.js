System.register("chunks:///_virtual/SpiritInfo3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts"], (function(i) {
        var t, s, e, n;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    s = i.cclegacy
                }
                , function(i) {
                    e = i.Constants
                }
                , function(i) {
                    n = i.__global
                }
            ],
            execute: function() {
                s._RF.push({}, "e18a8NGvyFPVI6zaTfDiZbx", "SpiritInfo", void 0);
                i("SpiritInfo", function() {
                    function i() {
                        this.index = 0,
                            this._id = 0,
                            this.resID = 0,
                            this.displayID = 0,
                            this.level = 0,
                            this.sex = 0,
                            this.curHP = 0,
                            this.maxHP = 0,
                            this.skills = void 0,
                            this.spiritDes = void 0,
                            this.equips = void 0,
                            this.superFormId = 0,
                            this.closeness = 0,
                            this.affiliation = 0
                    }
                    return t(i, [{
                        key: "id",
                        get: function() {
                            return this._id
                        },
                        set: function(i) {
                            this._id = i;
                            var t = n.SysAPI.getGDataAPI().getDataProxy(e.SPIRIT_DATA);
                            if (t) {
                                var s = t.select(this._id);
                                s && (this.resID = s.resID)
                            }
                        }
                    }]),
                        i
                }());
                s._RF.pop()
            }
        }
    }
));
