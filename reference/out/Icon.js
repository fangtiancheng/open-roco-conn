System.register("chunks:///_virtual/Icon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./TalentDes.ts", "./DEFINE.ts"], (function(t) {
        var e, i, a, n, s, r;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    a = t.Constants
                }
                , function(t) {
                    n = t.__global
                }
                , function(t) {
                    s = t.TalentDes
                }
                , function(t) {
                    r = t.DEFINE
                }
            ],
            execute: function() {
                i._RF.push({}, "7e3782rFl5FM4kFt5JXUMso", "Icon", void 0);
                var u = t("IconType", function(t) {
                    return t[t.ROCO_SHELL = 0] = "ROCO_SHELL",
                        t[t.ROCO_DIAMOND = 1] = "ROCO_DIAMOND",
                        t[t.PROPS = 2] = "PROPS",
                        t[t.FURNITURE = 3] = "FURNITURE",
                        t[t.PET = 4] = "PET",
                        t[t.EXP = 5] = "EXP",
                        t[t.SPIRIT_EQUIPMENT = 6] = "SPIRIT_EQUIPMENT",
                        t[t.DAZZLE_DRESS = 7] = "DAZZLE_DRESS",
                        t[t.PROPERTY = 8] = "PROPERTY",
                        t[t.NORMAL = 9] = "NORMAL",
                        t[t.TALEN = 10] = "TALEN",
                        t[t.SIMPLE = 100] = "SIMPLE",
                        t
                }({}));
                t("Icon", function() {
                    function t(t) {
                        this._item = void 0,
                            this._params = void 0,
                            this._data = {},
                            this._updateViewDescribe = void 0,
                            this._item = t,
                            this._params = this.initParams(),
                            this._updateViewDescribe = this.initupdateViewDescribe()
                    }
                    var i = t.prototype;
                    return i.initParams = function() {
                        return {
                            showTips: !1,
                            type: u.PROPS,
                            levelTitle: "LV.",
                            countTitle: "",
                            priceTitle: ""
                        }
                    }
                        ,
                        i.getPropsCfg = function(t) {
                            return null != t ? n.SysAPI.getGDataAPI().getDataProxy(a.ITEM_DATA).select(t) : null
                        }
                        ,
                        i.getPetCfg = function(t) {
                            return null != t ? n.SysAPI.getGDataAPI().getDataProxy(a.SPIRIT_DATA).select(t) : null
                        }
                        ,
                        i.getTalenCfg = function(t) {
                            return null != t ? s.SET[t] : null
                        }
                        ,
                        i.getShellCfg = function(t) {
                            return this.getPropsCfg(t)
                        }
                        ,
                        i.getDiamondCfg = function(t) {
                            return this.getPropsCfg(t)
                        }
                        ,
                        i.getExpCfg = function(t) {
                            return this.getPropsCfg(t)
                        }
                        ,
                        i.getFurnitureCfg = function(t) {
                            return null != t ? n.SysAPI.getGDataAPI().getDataProxy(a.FURNITURE_LIST_DATA).select(t) : null
                        }
                        ,
                        i.getSpiritEquipmentCfg = function(t) {
                            return null != t ? n.SysAPI.getGDataAPI().getDataProxy(a.SEQUIP_DES_DATA).select(t) : null
                        }
                        ,
                        i.getDazzleDressCfg = function(t) {
                            return null != t ? n.SysAPI.getGDataAPI().getDataProxy(a.DAZZLE_DRESS_DATA).select(Number(t)) : null
                        }
                        ,
                        i.getPropertyCfg = function(t) {
                            return null != t ? {
                                id: t,
                                name: "属性"
                            } : null
                        }
                        ,
                        i.refreshCfgData = function() {
                            switch (this.params.type) {
                                case u.ROCO_SHELL:
                                    this.updateShellCfgData(this.getShellCfg(this.id));
                                    break;
                                case u.ROCO_DIAMOND:
                                    this.updateDiamondCfgData(this.getDiamondCfg(this.id));
                                    break;
                                case u.PROPS:
                                    this.updatePropsCfgData(this.getPropsCfg(this.id));
                                    break;
                                case u.FURNITURE:
                                    this.updateFurnitureCfgData(this.getFurnitureCfg(this.id));
                                    break;
                                case u.PET:
                                    this.updatePetCfgData(this.getPetCfg(this.id));
                                    break;
                                case u.EXP:
                                    this.updateExpCfgData(this.getExpCfg(this.id));
                                    break;
                                case u.SPIRIT_EQUIPMENT:
                                    this.updateSpiritEquipmentCfgData(this.getSpiritEquipmentCfg(this.id));
                                    break;
                                case u.DAZZLE_DRESS:
                                    this.updateDazzleDressCfgData(this.getDazzleDressCfg(this.id));
                                    break;
                                case u.PROPERTY:
                                    this.updatePropertyCfgData(this.getPropertyCfg(this.id));
                                    break;
                                case u.TALEN:
                                    this.updateTalenCfgData(this.getTalenCfg(this.id))
                            }
                        }
                        ,
                        i.updateShellCfgData = function(t) {
                            this.data = {
                                url: t ? t.url : "",
                                name: t ? t.name : "",
                                desc: t ? t.description : ""
                            }
                        }
                        ,
                        i.updateDiamondCfgData = function(t) {
                            this.data = {
                                url: t ? t.url : "",
                                name: t ? t.name : "",
                                desc: t ? t.description : ""
                            }
                        }
                        ,
                        i.updatePropsCfgData = function(t) {
                            this.data = {
                                url: t ? t.url : "",
                                name: t ? t.name : "",
                                desc: t ? t.description : "",
                                expireTime: t ? t.expireTime : ""
                            }
                        }
                        ,
                        i.updateFurnitureCfgData = function(t) {
                            this.data = {
                                url: t ? r.PLUGIN_ROOT + "/Home/furniture/" + this.id + "/" + this.id + "_icon.png" : "",
                                name: t ? t.name : "",
                                desc: t && t.description || "装饰用的家具"
                            }
                        }
                        ,
                        i.updatePetCfgData = function(t) {
                            this.data = {
                                url: t ? t.iconSrc : "",
                                name: t ? t.name : "",
                                desc: t ? t.description : ""
                            }
                        }
                        ,
                        i.updateExpCfgData = function(t) {
                            this.data = {
                                url: t ? t.url : "",
                                name: t ? t.name : "",
                                desc: t ? t.description : ""
                            }
                        }
                        ,
                        i.updateSpiritEquipmentCfgData = function(t) {
                            this.data = {
                                url: t ? t.src : "",
                                name: t ? t.name : "",
                                desc: t && t.desc || "提升精灵能力的装备"
                            }
                        }
                        ,
                        i.updateDazzleDressCfgData = function(t) {
                            this.data = {
                                url: t ? "" + r.DAZZLE_DRESS_RES_ROOT + t.type + "/" + this.id + "_bag.png" : "",
                                name: t ? t.name : "",
                                desc: t && t.description || "提供外观装饰效果的装扮"
                            }
                        }
                        ,
                        i.updatePropertyCfgData = function(t) {
                            this.data = {
                                url: t ? r.COMM_ROOT + "/res/combat/property/" + this.id + ".png" : "",
                                name: t ? t.name : "",
                                desc: "角色属性值"
                            }
                        }
                        ,
                        i.updateTalenCfgData = function(t) {
                            this.data = {
                                url: t ? r.COMM_ROOT + "res/talent/" + this.id + "_big.png" : "",
                                name: t ? t.name : "",
                                desc: t ? t.description : ""
                            }
                        }
                        ,
                        i.initupdateViewDescribe = function() {
                            return {
                                url: this.updateIcon.bind(this),
                                name: this.updateName.bind(this),
                                desc: this.updateDesc.bind(this),
                                count: this.updateCount.bind(this),
                                level: this.updateLevel.bind(this),
                                expireTime: this.updateExpireTime.bind(this),
                                price: this.updatePrice.bind(this)
                            }
                        }
                        ,
                        i.updateId = function(t) {
                            this._data.id = "string" == typeof t ? parseInt(t) : t,
                                this.refreshCfgData()
                        }
                        ,
                        i.updateIcon = function(t) {
                            this._item.onUpdateIcon(t)
                        }
                        ,
                        i.updateName = function(t) {
                            this._item.nameLabel && (this._item.nameLabel.string = null === t ? "" : t)
                        }
                        ,
                        i.updateDesc = function(t) {
                            this._item.descLabel && (this._item.descLabel.string = null === t ? "" : t)
                        }
                        ,
                        i.updateCount = function(t) {
                            this._item.countLabel && (this._item.countLabel.string = null === t ? "" : "" + this.params.countTitle + t)
                        }
                        ,
                        i.updateLevel = function(t) {
                            this._item.levelLabel && (this._item.levelLabel.string = null === t ? "" : "" + this.params.levelTitle + t)
                        }
                        ,
                        i.updateExpireTime = function(t) {
                            if (this._item.expireTimeLabel)
                                if (null === t)
                                    this._item.expireTimeLabel.string = "";
                                else {
                                    var e = 0;
                                    "string" == typeof t && (e = parseInt(t));
                                    var i = "" + e;
                                    this._item.expireTimeLabel.string = "有效期至" + i
                                }
                        }
                        ,
                        i.updatePrice = function(t) {
                            this._item.priceLabel && (this._item.priceLabel.string = null === t ? "" : "" + this.params.priceTitle + t)
                        }
                        ,
                        e(t, [{
                            key: "id",
                            get: function() {
                                return "string" == typeof this.data.id ? parseInt(this.data.id) : this.data.id
                            }
                        }, {
                            key: "dataSource",
                            get: function() {
                                return this.data.dataSource
                            }
                        }, {
                            key: "params",
                            get: function() {
                                return this._params
                            },
                            set: function(t) {
                                t && (void 0 !== t.showTips && (this._params.showTips = t.showTips),
                                void 0 !== t.type && (this._params.type = t.type),
                                void 0 !== t.levelTitle && (this._params.levelTitle = t.levelTitle),
                                void 0 !== t.countTitle && (this._params.countTitle = t.countTitle))
                            }
                        }, {
                            key: "data",
                            get: function() {
                                return this._data
                            },
                            set: function(t) {
                                if (t)
                                    for (var e in t) {
                                        var i = t[e];
                                        if ("id" === e)
                                            this.updateId(i);
                                        else {
                                            this._data[e] = i;
                                            var a = this._updateViewDescribe[e];
                                            a && a(i)
                                        }
                                    }
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
