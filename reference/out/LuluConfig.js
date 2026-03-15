System.register("chunks:///_virtual/LuluConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts"], (function(t) {
        var i, n, u;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    u = t.ActivityAPI
                }
            ],
            execute: function() {
                n._RF.push({}, "58695cmDcdOAK7rA1PgrVjJ", "LuluConfig", void 0);
                var e = t("LuluConfig", function() {
                    function t() {}
                    return t.InitInfo = function(i) {
                        for (var n = [], u = [], e = 0; e < 4; e++) {
                            var s = null
                                , o = "";
                            i.hasOwnProperty("item") && (s = i.item[e],
                                o = this.InitToolTip(s, e));
                            var r = {
                                status: Number(i.status[e]),
                                item: s,
                                tips: o,
                                max: Number(i.max[e])
                            };
                            n.push(r);
                            var a = this.InitStatus(i, e);
                            u.push(a)
                        }
                        this._info = {
                            xml: i,
                            itemList: n,
                            taskStatusList: u,
                            times: Number(i.times),
                            vip: Number(i.vip)
                        },
                            t.info = this._info
                    }
                        ,
                        t.UpdateInfo = function(t) {
                            if (null == this._info)
                                this.InitInfo(t);
                            else {
                                for (var i = [], n = 0; n < 4; n++) {
                                    var u = this.InitStatus(t, n);
                                    i.push(u)
                                }
                                this._info.times = Number(t.times),
                                    this._info.vip = Number(t.vip),
                                    this._info.taskStatusList = i
                            }
                        }
                        ,
                        t.InitStatus = function(t, i) {
                            return Number(t.status[i]) >= Number(t.max[i])
                        }
                        ,
                        t.InitToolTip = function(t, i) {
                            if (null == t)
                                return "";
                            var n = "直接完成可获得奖励：\n";
                            if (Array.isArray(t.id))
                                for (var e = t.id, s = 0; s < e.length; s++) {
                                    var o = Number(e[s]);
                                    0 == o ? n += t.count[s] + "点暗黑城声望\n" : 1 == o ? n += "随机血脉培养道具*" + t.count[s] + "\n" : 67372128 == o ? 1 == i ? n += "可分配经验*" + t.count[s] + "\n" : 2 == i && (n += "背包中首宠获得战斗经验*" + t.count[s] + "\n") : n += u.getItemName(o) + "*" + t.count[s] + "\n"
                                }
                            else
                                n += u.getItemName(Number(t.id)) + "*" + t.count + "\n";
                            return 0 == i && (n += "概率获得遗忘果实"),
                                n
                        }
                        ,
                        i(t, null, [{
                            key: "info",
                            get: function() {
                                return this._info = u.getActGlobalValue(t.ActId, "INFO"),
                                    this._info
                            },
                            set: function(i) {
                                this._info = i,
                                    u.setActGlobalValue(t.ActId, "INFO", this._info)
                            }
                        }]),
                        t
                }());
                e.CMD_QUERY = 0,
                    e.CMD_SUBMIT = 1,
                    e.CMD_GETGIFT = 2,
                    e.CMD_NOTIFY = 0,
                    e.CMD_COMBAT_OVER = 0,
                    e.CGI = "vip_in_trust_new",
                    e.ActId = 3475,
                    e._info = void 0,
                    n._RF.pop()
            }
        }
    }
));
