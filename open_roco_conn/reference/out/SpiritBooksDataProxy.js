System.register("chunks:///_virtual/SpiritBooksDataProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./Constants.ts", "./SpiritLinkVO.ts", "./SpiritBook.ts", "./SpiritBookTemplate.ts", "./SpiritDes.ts", "./SpiritBooksConfLoader.ts", "./ConstSpiritBooks.ts", "./SpiritBookGroupSpirit.ts", "./SpiritConfCfgLoader.ts", "./PetInfoDataReceiver.ts", "./PropertyDes.ts"], (function(t) {
        var r, i, e, n, o, s, a, u, p, c, f, S, l, v, _;
        return {
            setters: [function(t) {
                r = t.createClass,
                    i = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.__global
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    s = t.SpiritLinkVO
                }
                , function(t) {
                    a = t.SpiritBook
                }
                , function(t) {
                    u = t.SpiritBookTemplate
                }
                , function(t) {
                    p = t.SpiritDes
                }
                , function(t) {
                    c = t.SpiritBooksConfLoader
                }
                , function(t) {
                    f = t.ConstSpiritBooks
                }
                , function(t) {
                    S = t.SpiritBookGroupSpirit
                }
                , function(t) {
                    l = t.SpiritConfCfgLoader
                }
                , function(t) {
                    v = t.PetInfoDataReceiver
                }
                , function(t) {
                    _ = t.PropertyDes
                }
            ],
            execute: function() {
                e._RF.push({}, "03b81IMlwtKQIsVY2e43rTm", "SpiritBooksDataProxy", void 0);
                var I = t("SpiritBooksDataProxy", function() {
                    function t() {}
                    return t.init = function() {
                        t.petInfoDataReceiver || (t.petInfoDataReceiver = new v,
                            n.SysAPI.getNetSysAPI().addDataReceiver(t.petInfoDataReceiver),
                            t.petInfoDataReceiver.returnFunction = t.petInfoDataReceiverReturnFunction)
                    }
                        ,
                        t.petInfoDataReceiverReturnFunction = function(r, i) {
                            console.log("-----petInfoDataReceiverReturnFunction---"),
                                i.code.isError() ? (t.statusCache = new Map,
                                    t.serverSpiritData = [],
                                null != t._serverInitCallback && t._serverInitCallback(),
                                    n.showMsgBox("服务器繁忙，拉取图鉴信息失败，请稍后再试")) : (t.statusCache = new Map,
                                    t.serverSpiritData = i.m_petInfosArray,
                                null != t._serverInitCallback && t._serverInitCallback())
                        }
                        ,
                        t.initLocal = function() {
                            t.links = new Map,
                                t._spiritProxy = n.SysAPI.getGDataAPI().getDataProxy(o.SPIRIT_DATA),
                                this.onGetServerDate(null)
                        }
                        ,
                        t.onGetServerDate = function(r) {
                            t.serverDate = new Date,
                                t._books = new Map,
                                t.booksIndex = new Array;
                            var i, e = c.Instance.data, n = 0;
                            for (u.initTemplates(),
                                     n = 0; n < e.SpiritBook.length; n++) {
                                var o = e.SpiritBook[n];
                                (i = new a(o)).isNew && (t._newSpiritBook = i),
                                    t._books[i.id] = i,
                                    t.booksIndex.push(i)
                            }
                            t.update(),
                            null != t.initCallback && t.initCallback()
                        }
                        ,
                        t.update = function() {
                            for (var r, i, e = t._spiritProxy.select("*"), n = 0; n < e.length; n++)
                                0 == (r = e[n]).EvolutionFormID && ((i = new s).push(r),
                                    i.updataState(),
                                    t.links[i.firstID] = i)
                        }
                        ,
                        t.getSpiritDesbyID = function(r) {
                            return t._spiritProxy.select(r)
                        }
                        ,
                        t.getBookByID = function(r) {
                            var i = t._books[r];
                            return i.isSearch = !1,
                                i
                        }
                        ,
                        t.getIconState = function(t) {
                            return this.isSingeUnknow(t) ? f.STATE_UNKONW : this.isSingleNotGray(t) ? f.STATE_CATCH : f.STATE_FIND
                        }
                        ,
                        t.isSingeUnknow = function(t) {
                            if (0 === t)
                                return !1;
                            var r = this.getSpiritDesbyID(t);
                            if (this.getStateByID(r.id) != f.STATE_UNKONW)
                                return !1;
                            if (r.EvolutiontoIDs.length > 0 && "0" != r.EvolutiontoIDs[0])
                                for (var i = 0; i < r.EvolutiontoIDs.length; i++)
                                    if (!this.isSingeUnknow(Number(r.EvolutiontoIDs[i])))
                                        return !1;
                            return !0
                        }
                        ,
                        t.isSingleNotGray = function(t) {
                            var r = this.getSpiritDesbyID(t)
                                , i = this.getStateByID(r.id);
                            if (i == f.STATE_CATCH || i == f.STATE_RELEASE)
                                return !0;
                            if (r.EvolutiontoIDs.length > 0 && "0" != r.EvolutiontoIDs[0])
                                for (var e = 0; e < r.EvolutiontoIDs.length; e++)
                                    if (this.isSingleNotGray(Number(r.EvolutiontoIDs[e])))
                                        return !0;
                            return !1
                        }
                        ,
                        t.getStateByID = function(r) {
                            return t.serverSpiritData && 0 != t.serverSpiritData.length ? t.serverSpiritData[r - 1] ? t.serverSpiritData[r - 1] : 0 : p.STATE_NORMAL
                        }
                        ,
                        t.restrictUsernameMaxChars = function(r) {
                            return t.hasUnicodeChar(r) ? t.NAME_INPUT_UNICODE_MAX_CHARS : t.NAME_INPUT_ANSI_MAX_CHARS
                        }
                        ,
                        t.hasUnicodeChar = function(t) {
                            if (null == t)
                                return !1;
                            for (var r = t.length, i = 0; i < r; ++i)
                                if (t.charCodeAt(i) > 255)
                                    return !0;
                            return !1
                        }
                        ,
                        t._allPojianBook = function() {
                            var r = t.getBookByID(12);
                            return r.groups[0].spirits = t._firstSpiritsPojianInBook(),
                                r.refresh(),
                                r
                        }
                        ,
                        t._allSkinBook = function() {
                            var r = t.getBookByID(11);
                            return r.groups[0].spirits = t._firstSpiritsSkinInBook(),
                                r.refresh(),
                                r
                        }
                        ,
                        t._allBook = function() {
                            var r = t.getBookByID(10);
                            return r.groups[0].spirits = t._firstSpiritsInBook(),
                                r.refresh(),
                                r
                        }
                        ,
                        t._firstSpiritsSkinInBook = function() {
                            for (var t = [], r = l.Instance.data.spiritSkinDes, i = (r ? r.length : 0) - 1; i >= 0; i--) {
                                var e = r[i]
                                    , n = new S;
                                n.id = Number(e.id),
                                    t.push(n)
                            }
                            return t
                        }
                        ,
                        t._firstSpiritsInBook = function() {
                            if (!t._groupFirstSpirits) {
                                t._groupFirstSpirits = [];
                                for (var r, e = this._spiritsInBook(), n = i(e); !(r = n()).done; ) {
                                    var o = r.value;
                                    o.des.firstID === o.des.id && t._groupFirstSpirits.push(o)
                                }
                                t._groupFirstSpirits.sort((function(t, r) {
                                        var i = t.id - r.id;
                                        return 0 === i ? 0 : i > 0 ? 1 : -1
                                    }
                                ))
                            }
                            return t._groupFirstSpirits
                        }
                        ,
                        t._spiritsInBook = function() {
                            if (!t._groupSpirits) {
                                t._groupSpirits = [];
                                for (var r, e = t.getSpiritDes(), n = i(e); !(r = n()).done; ) {
                                    var o = r.value;
                                    if (o.isInBook) {
                                        var s = new S;
                                        s.id = o.id,
                                            this._groupSpirits.unshift(s)
                                    }
                                }
                            }
                            return t._groupSpirits
                        }
                        ,
                        t._firstSpiritsPojianInBook = function() {
                            var r = []
                                , i = t.getBookByID(12)
                                , e = i.spirits.length;
                            if (2374 != i.spirits[0].id)
                                return i.spirits;
                            for (var n = e - 1; n >= 0; n--)
                                r.push(i.spirits[n]);
                            return r
                        }
                        ,
                        t._searchForProperies = function(r) {
                            if (!t._properties) {
                                t._properties = {};
                                for (var i = 0; i < _.FEATURES.length; i++) {
                                    var e = _.FEATURES[i];
                                    e && (t._properties[e.name] = e)
                                }
                            }
                            return t._properties[r.replace("属性宠物", "")]
                        }
                        ,
                        t.getSpiritDes = function() {
                            return t._spiritProxy.select("*")
                        }
                        ,
                        t.getLinkByID = function(t) {
                            return this.links[t]
                        }
                        ,
                        t.getDataFromServer = function(t, r) {
                            this._serverInitCallback = r,
                                this.petInfoDataReceiver.send(t)
                        }
                        ,
                        r(t, null, [{
                            key: "callBack",
                            set: function(r) {
                                t.initCallback = r
                            }
                        }, {
                            key: "currentOwnerName",
                            get: function() {
                                return t._currentOwnerName
                            },
                            set: function(r) {
                                t._currentOwnerName = r.substring(0, t.restrictUsernameMaxChars(r))
                            }
                        }, {
                            key: "currentOwnerUin",
                            get: function() {
                                return this._currentOwnerUin
                            },
                            set: function(t) {
                                this._currentOwnerUin = t
                            }
                        }]),
                        t
                }());
                I._spiritProxy = void 0,
                    I.links = new Map,
                    I._books = new Map,
                    I.booksIndex = void 0,
                    I.serverDate = void 0,
                    I._newSpiritBook = void 0,
                    I.initCallback = void 0,
                    I.currentBookID = void 0,
                    I.currentPage = void 0,
                    I.serverSpiritData = void 0,
                    I.currentTabIndex = -1,
                    I._serverInitCallback = void 0,
                    I.statusCache = void 0,
                    I._groupSpirits = void 0,
                    I._groupFirstSpirits = void 0,
                    I._currentOwnerName = "name",
                    I.NAME_INPUT_UNICODE_MAX_CHARS = 7,
                    I.NAME_INPUT_ANSI_MAX_CHARS = 14,
                    I._properties = void 0,
                    I._currentOwnerUin = void 0,
                    I.petInfoDataReceiver = void 0,
                    e._RF.pop()
            }
        }
    }
));
