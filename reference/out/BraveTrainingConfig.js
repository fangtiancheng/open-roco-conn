System.register("chunks:///_virtual/BraveTrainingConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts"], (function(e) {
        var i, t, c;
        return {
            setters: [function(e) {
                i = e.createClass
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    c = e.ActivityAPI
                }
            ],
            execute: function() {
                t._RF.push({}, "973dbix/OpJpokEYnIkZRmY", "BraveTrainingConfig", void 0);
                var n = e("BraveTrainingConfig", function() {
                    function e() {}
                    return e.updateInfo = function(i) {
                        this._info = {
                            xml: i,
                            before: Number(i.before),
                            open_num: Number(i.open_num),
                            final_open: Number(i.final_open),
                            spirit_lv_flag: Number(i.spirit_lv_flag),
                            door_state: [Number(i.fight_place.place[0].succ), Number(i.fight_place.place[1].succ), Number(i.fight_place.place[2].succ), Number(i.fight_place.place[3].succ), Number(i.fight_place.place[4].succ)],
                            door_type: [Number(i.fight_place.place[0].id), Number(i.fight_place.place[1].id), Number(i.fight_place.place[2].id), Number(i.fight_place.place[3].id), Number(i.fight_place.place[4].id)]
                        },
                            e.info = this._info
                    }
                        ,
                        i(e, null, [{
                            key: "info",
                            get: function() {
                                return this._info = c.getActGlobalValue(e.ActId, "INFO"),
                                    this._info
                            },
                            set: function(i) {
                                this._info = i,
                                    c.setActGlobalValue(e.ActId, "INFO", this._info)
                            }
                        }]),
                        e
                }());
                n.CMD_QUERY = 0,
                    n.CMD_COMBAT = 1,
                    n.CMD_UNLOCK = 2,
                    n.CMD_TASK = 4,
                    n.CGI = "warrior_fight_place",
                    n.COMBAT_NPCID = 3,
                    n.DOOR_NAME = ["金星训练馆", "木星训练馆", "水星训练馆", "火星训练馆", "土星训练馆", "天王星训练馆", "海王星训练馆", "冥王星训练馆"],
                    n.ActId = 1721,
                    n._info = void 0,
                    t._RF.pop()
            }
        }
    }
));
