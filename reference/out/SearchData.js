System.register("chunks:///_virtual/SearchData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./EquipmentType.ts", "./BuildLogHelper.ts"], (function(e) {
        var i, t, r, a, l, p;
        return {
            setters: [function(e) {
                i = e.createClass
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    r = e.Constants
                }
                , function(e) {
                    a = e.__global
                }
                , function(e) {
                    l = e.EquipmentType
                }
                , function(e) {
                    p = e.default
                }
            ],
            execute: function() {
                t._RF.push({}, "66210grq0NAFJmWcz6HiPID", "SearchData", void 0);
                var n = e("SearchData", function() {
                    function e() {}
                    return e.remove = function(i) {
                        if (null != e.allSpirits && null != i)
                            for (var t = 0; t < e.allSpirits.length; t++) {
                                var r = e.allSpirits[t];
                                if (r.id == i.spiritID && r.catchTime == i.catchTime)
                                    return e.allSpirits.splice(t, 1),
                                        void (e.searchedSpirits = e.allSpirits)
                            }
                    }
                        ,
                        e.serchByfirstID = function(i) {
                            null == e.allSpirits && new Array;
                            for (var t = a.SysAPI.getGDataAPI().getDataProxy(r.SPIRIT_DATA), l = [], p = 0; p < e.allSpirits.length; p++) {
                                var n = e.allSpirits[p];
                                t.select(n.id).firstID == i && l.push(n)
                            }
                            return l
                        }
                        ,
                        e.del = function() {
                            e.allSpirits = [],
                                e.searchedSpirits = [],
                                e.detailVo = null,
                                e.tempSpiritId = 0,
                                e.tempSpiritTime = 0,
                                e.tempSpiritName = "",
                                e.tempSpiritImage = null,
                                e.tempSpiritIdle = null,
                                e.tempSpiritImageName = "",
                                e.tempSpiritIdleName = ""
                        }
                        ,
                        i(e, null, [{
                            key: "searchedSpirits",
                            get: function() {
                                return e._searchedSpirits
                            },
                            set: function(i) {
                                e._searchedSpirits = i
                            }
                        }, {
                            key: "tempSpiritSkinID",
                            get: function() {
                                return e._tempSpiritSkinID
                            },
                            set: function(i) {
                                null != i && null != i || p.IS_LOCAL,
                                    e._tempSpiritSkinID = i
                            }
                        }, {
                            key: "allSpirits",
                            get: function() {
                                return e._allSpirits
                            },
                            set: function(i) {
                                if (e._allSpirits = i,
                                e._allSpirits.length > 0 && e.allEquip.length > 0)
                                    for (var t, r, a, p = 0; p < e._allSpirits.length; p++) {
                                        t = e._allSpirits[p],
                                            a = e.allEquip.selectBySpiritData(t.id, t.catchTime);
                                        for (var n = 0; n < a.length; n++)
                                            (r = a[n]).type == l.WEAPON_TYPE ? (t.weaponFlag = r.baseValue,
                                                t.weaponInfo = r) : r.type == l.ARMOR_TYPE ? (t.armorFlag = r.baseValue,
                                                t.armorInfo = r) : r.type == l.JEWELRY_TYPE && (t.jewelryFlag = r.baseValue,
                                                t.jewelryInfo = r)
                                    }
                            }
                        }]),
                        e
                }());
                n._allSpirits = new Array,
                    n.allEquip = void 0,
                    n._searchedSpirits = Array(),
                    n.curSearchEquipType = void 0,
                    n.curSearchSex = void 0,
                    n.curSearchGroup = void 0,
                    n.curSearchProperty = void 0,
                    n.curSearchPropertyID = void 0,
                    n.curSearchName = void 0,
                    n.curSearchType = 0,
                    n.inputSearchType = 0,
                    n.curOtherSearchType = 0,
                    n.curPropertySearchType = "",
                    n.changeSpirits = Array(),
                    n.detailVo = void 0,
                    n.tempSpiritId = 0,
                    n.tempSpiritTime = 0,
                    n.tempSpiritName = "",
                    n.tempSpiritTalentType = 0,
                    n.tempSpiritTalentLevel = 0,
                    n._tempSpiritSkinID = 0,
                    n.tempSpiritImage = void 0,
                    n.tempSpiritIdle = void 0,
                    n.tempSpiritImageName = void 0,
                    n.tempSpiritIdleName = void 0,
                    n.storeHasOpened = !1,
                    t._RF.pop()
            }
        }
    }
));
