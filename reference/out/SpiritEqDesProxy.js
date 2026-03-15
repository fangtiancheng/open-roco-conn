System.register("chunks:///_virtual/SpiritEqDesProxy.ts", ["cc", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Constants.ts", "./DEFINE.ts", "./PropertyDes.ts", "./SpiritEquipmentDes.ts", "./SpiritEquipmentInfo.ts"], (function(e) {
        var t, r, n, i, o, u, s, c;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    r = e.GlobalAPI
                }
                , function(e) {
                    n = e.default
                }
                , function(e) {
                    i = e.Constants
                }
                , function(e) {
                    o = e.DEFINE
                }
                , function(e) {
                    u = e.PropertyDes
                }
                , function(e) {
                    s = e.SpiritEquipmentDes
                }
                , function(e) {
                    c = e.SpiritEquipmentInfo
                }
            ],
            execute: function() {
                t._RF.push({}, "ec468BbC+RL7ZdCK/ZlMA28", "SpiritEqDesProxy", void 0);
                e("SpiritEqDesProxy", function() {
                    function e(e) {
                        this.db = void 0,
                            this.db = new Map;
                        var t = r.getTimer();
                        this.processXML(e),
                        CONFIG.DEBUG && console.log("[SpiritDesProxy]解析:", r.getTimer() - t)
                    }
                    var t = e.prototype;
                    return t.processXML = function(e) {
                        if (!e)
                            throw n.IS_LOCAL,
                                new Error(this.constructor.name + "'s function [processXML] param is illegal");
                        var t = e;
                        u.EQUIPMENT_PROPETY = [];
                        var r = new u;
                        r.id = 0,
                            r.name = "",
                            u.EQUIPMENT_PROPETY[0] = r;
                        for (var i = t.PropertyDes, c = 0; c < i.length; c++) {
                            var p = new u;
                            p.id = Number(i[c].id),
                                p.name = String(i[c].name),
                                u.EQUIPMENT_PROPETY[p.id] = p
                        }
                        var l = o.COMM_ROOT + "res/combat/equipments/"
                            , a = t.EquipmentDes;
                        for (c = a.length - 1; c >= 0; c--) {
                            var d = new s;
                            d.id = Number(a[c].id),
                                d.type = Number(a[c].type),
                                d.level = Number(a[c].level),
                                d.cdtLevel = Number(a[c].cdtLevel),
                                d.name = String(a[c].name),
                                d.getFrom = String(a[c].getFrom),
                                d.src = l + String(a[c].type) + "_" + String(a[c].id) + ".png",
                                d.price.push(Number(a[c].price1)),
                                d.price.push(Number(a[c].price2)),
                                d.price.push(Number(a[c].price3)),
                                d.price.push(Number(a[c].price4)),
                                this.db[d.type + "_" + d.id] = d
                        }
                    }
                        ,
                        t.insert = function() {
                            return !1
                        }
                        ,
                        t.select = function() {
                            if (1 == arguments.length) {
                                var e = arguments.length <= 0 ? void 0 : arguments[0]
                                    , t = c.getIdByServerId(e)
                                    , r = c.getTypeByServerId(e);
                                return this.db[r.toString() + "_" + t.toString()]
                            }
                            return 2 == arguments.length ? this.db[(arguments.length <= 0 ? void 0 : arguments[0]) + "_" + (arguments.length <= 1 ? void 0 : arguments[1])] : null
                        }
                        ,
                        t.update = function() {
                            return !1
                        }
                        ,
                        t.deleted = function() {
                            return !1
                        }
                        ,
                        t.clear = function() {}
                        ,
                        t.getName = function() {
                            return i.SEQUIP_DES_DATA
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
