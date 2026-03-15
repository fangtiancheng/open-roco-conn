System.register("chunks:///_virtual/CompatibleAPI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./AngelTcpHelper.ts", "./AnimationLoader.ts", "./SpiritAnimationContainerGaf.ts", "./SearchData.ts"], (function(i) {
        var t, r, e, a, n, s, o;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    r = i.cclegacy,
                        e = i.NodeEventType
                }
                , function(i) {
                    a = i.Constants
                }
                , function(i) {
                    n = i.__global
                }
                , null, null, function(i) {
                    s = i.SpiritAnimationContainerGaf
                }
                , function(i) {
                    o = i.SearchData
                }
            ],
            execute: function() {
                r._RF.push({}, "4c012eziiBGdom8WxPCSi9x", "CompatibleAPI", void 0);
                i("CompatibleAPI", function() {
                    function i(i) {
                        this.par = void 0,
                            this._app = void 0,
                            this._sysApi = void 0,
                            this._proxy = void 0,
                            this._containerBar = void 0,
                            this._informationBar = void 0,
                            this._searchBar = void 0,
                            this._changeBar = void 0,
                            this._canButton = void 0,
                            this._closeHandler = void 0,
                            this.bgArr = [-1, -1, -1],
                            this._isPlay = !0,
                            this._gaf = null,
                            this.par = i,
                            this.canbutton = !0,
                            o.curSearchType = 0
                    }
                    var r = i.prototype;
                    return r.showNormalStorage = function() {
                        this._app.showNormalStorage()
                    }
                        ,
                        r.showAbandonedStorage = function() {
                            this._app.showAbandonedStorage()
                        }
                        ,
                        r.addCloseHandler = function(i) {
                            this._closeHandler = i,
                            null == this._closeHandler || this.informationBar.mainBar.closeBtn.hasEventListener(e.TOUCH_END) || this.informationBar.mainBar.closeBtn.on(e.TOUCH_END, this._closeHandler)
                        }
                        ,
                        r.removeCloseHandler = function(i) {
                            null != this._closeHandler && this.informationBar.mainBar.closeBtn.hasEventListener(e.TOUCH_END) && this.informationBar.mainBar.closeBtn.off(e.TOUCH_END, this._closeHandler),
                                this._closeHandler = null
                        }
                        ,
                        r.requestSpiritList = function() {
                            this._proxy.requestSpiritList()
                        }
                        ,
                        r.onGotSpiritList = function(i) {
                            n.UI.closeMiniLoading();
                            var t = i.spirits;
                            null != t ? (o.allSpirits = t,
                                o.allSpirits.sort((function(i, t) {
                                        var r = i.addSTTime;
                                        return t.addSTTime - r
                                    }
                                )),
                                o.searchedSpirits = o.allSpirits) : (o.allSpirits = [],
                                o.searchedSpirits = []),
                                this.searchBar.init(),
                                this.containerBar.init(),
                                this.containerBar.refresh(),
                                this.informationBar.init(),
                                this.informationBar.init1(),
                                this.changeBar.init()
                        }
                        ,
                        r.onGotAbandonSpiritList = function(i) {
                            n.UI.closeMiniLoading();
                            var t = i.spirits;
                            null != t ? (o.allSpirits = t,
                                o.allSpirits.sort((function(i, t) {
                                        var r = i.addSTTime;
                                        return t.addSTTime - r
                                    }
                                )),
                                o.searchedSpirits = o.allSpirits) : (o.allSpirits = [],
                                o.searchedSpirits = []),
                                this.containerBar.setTxtCurCapacityVisible(!1),
                                this.searchBar.init(),
                                this.containerBar.init(),
                                this.containerBar.refresh(),
                                this.informationBar.init(),
                                this.informationBar.init1(),
                                this.changeBar.init()
                        }
                        ,
                        r.requestSPiritDetail = function(i, t) {
                            this._proxy.requestSpiritDetail(i, t)
                        }
                        ,
                        r.onGotSpiritDetail = function(i) {
                            var t = i.code;
                            if (t.isError())
                                return n.UI.closeMiniLoading(),
                                    void n.UI.alert("", t.message);
                            this.informationBar.idled && n.UI.closeMiniLoading(),
                                o.detailVo = i.spirits[0],
                                this.informationBar.removeText(),
                                this.informationBar.writeText(),
                                this.informationBar.getDataed = !0
                        }
                        ,
                        r.requestSpiritAdoption = function(i, t) {
                            this._proxy.requestSpiritAdoption(i, t)
                        }
                        ,
                        r.onSpiritAdoption = function(i) {
                            n.UI.closeMiniLoading(),
                                i.code.isError() ? n.UI.alert("", i.code.message) : (o.remove(i.key),
                                o.searchedSpirits.length > 0 && (o.tempSpiritId = o.searchedSpirits[0].id,
                                    o.tempSpiritTime = o.searchedSpirits[0].catchTime,
                                    o.tempSpiritName = o.searchedSpirits[0].spiritDes.name,
                                    o.tempSpiritTalentType = o.searchedSpirits[0].talentType,
                                    o.tempSpiritTalentLevel = o.searchedSpirits[0].talentLevel,
                                    o.tempSpiritSkinID = o.searchedSpirits[0].skinID,
                                    this.sortBySearch()),
                                0 == o.searchedSpirits.length && this.sortBySearch())
                        }
                        ,
                        r.refreshContainer = function() {
                            this.containerBar && this.containerBar.refresh()
                        }
                        ,
                        r.sortBySearch = function() {
                            0 == o.curSearchType ? this.searchBar.refreshAll() : 1 == o.curSearchType ? this.searchBar.refreshByEquipType(o.curSearchEquipType) : 2 == o.curSearchType ? this.searchBar.refreshSex(o.curSearchSex) : 3 == o.curSearchType ? this.searchBar.refreshGroup(o.curSearchGroup) : 4 == o.curSearchType ? this.searchBar.refreshProperty(o.curSearchProperty) : 5 == o.curSearchType ? this.searchBar.refreshTime() : 6 == o.curSearchType ? this.searchBar.refreshGrade() : 7 == o.curSearchType && this.searchBar.searchByName(o.curSearchName)
                        }
                        ,
                        r.refreshInformationBar = function() {
                            this.informationBar.refresh()
                        }
                        ,
                        r.getCurrentpage = function() {
                            return this.containerBar.currentPage
                        }
                        ,
                        r.setIdle = function() {
                            this.informationBar.mainBar.propertyIcon.gotoAndStop(this.informationBar.mainBar.propertyIcon.totalFrames),
                                this.informationBar.mainBar.propertyIcon2.gotoAndStop(this.informationBar.mainBar.propertyIcon2.totalFrames),
                                this.informationBar.mainBar.propertyIcon3.gotoAndStop(this.informationBar.mainBar.propertyIcon3.totalFrames),
                                this.informationBar.mainBar.spiritNameText.text = o.tempSpiritName,
                                this.informationBar.setTalent(),
                            this.informationBar.idled && this._ca.returnSpiritIdleMC(o.tempSpiritIdleName),
                                this.informationBar.idled = !1,
                                0 != o.tempSpiritSkinID ? this.loadIdle(o.tempSpiritSkinID) : this.loadIdle(o.tempSpiritId)
                        }
                        ,
                        r.playIdle = function(i) {
                            this.playIdle1(i)
                        }
                        ,
                        r.playIdle1 = function(i) {
                            this._isPlay = i,
                            this._gaf && (1 == i ? this._gaf.play("IDLE") : this._gaf.stop())
                        }
                        ,
                        r.loadIdle = function(i) {
                            this.loadIdle1(i)
                        }
                        ,
                        r.loadIdle1 = function(i) {
                            this.removeIdle(),
                                this._gaf ? this._gaf.initWithPetWithGaf(i) : (this._gaf = new s,
                                    this._gaf.loadedCallBack = this.onSpiritAnimationLoaded.bind(this),
                                    this._gaf.initWithPetWithGaf(i),
                                    this._informationBar.mainBar.spiritLittleMc.addChild(this._gaf),
                                    this._gaf.x = -1240,
                                    this._gaf.y = 400),
                                this.onload()
                        }
                        ,
                        r.onSpiritAnimationLoaded = function(i) {
                            i && this.playIdle(this._isPlay)
                        }
                        ,
                        r.removeIdle = function() {
                            this.removeIdle1()
                        }
                        ,
                        r.removeIdle1 = function() {
                            this._gaf && (this._gaf.release(),
                                this._gaf.destroy()),
                                this._gaf = null
                        }
                        ,
                        r.onload = function() {
                            this.informationBar && (this.informationBar.idled,
                                this.informationBar.idled = !0),
                            1 == this.informationBar.getDataed && n.UI.closeMiniLoading()
                        }
                        ,
                        r.search = function() {
                            7 == o.curSearchType ? this._searchBar.searchByName(o.curSearchName) : (o.searchedSpirits = [],
                                this._searchBar.refreshProperty1(o.curSearchProperty),
                                1 == o.curOtherSearchType ? this._searchBar.refreshSex1(o.curSearchSex) : 2 == o.curOtherSearchType ? this._searchBar.refreshGroup(o.curSearchGroup) : 3 == o.curOtherSearchType && this._searchBar.refreshByEquipType1(o.curSearchEquipType),
                                this.refreshContainer())
                        }
                        ,
                        t(i, [{
                            key: "application",
                            set: function(i) {
                                this._app = i
                            }
                        }, {
                            key: "sysApi",
                            get: function() {
                                return n.SysAPI
                            }
                        }, {
                            key: "_ca",
                            get: function() {
                                return n.SysAPI.getResSysAPI().getResAdapter(a.COMBAT_RES)
                            }
                        }, {
                            key: "proxy",
                            set: function(i) {
                                this._proxy = i
                            }
                        }, {
                            key: "containerBar",
                            get: function() {
                                return this._containerBar
                            },
                            set: function(i) {
                                this._containerBar = i
                            }
                        }, {
                            key: "informationBar",
                            get: function() {
                                return this._informationBar
                            },
                            set: function(i) {
                                this._informationBar = i
                            }
                        }, {
                            key: "searchBar",
                            get: function() {
                                return this._searchBar
                            },
                            set: function(i) {
                                this._searchBar = i
                            }
                        }, {
                            key: "changeBar",
                            get: function() {
                                return this._changeBar
                            },
                            set: function(i) {
                                this._changeBar = i
                            }
                        }, {
                            key: "canbutton",
                            get: function() {
                                return this._canButton
                            },
                            set: function(i) {
                                this._canButton = i
                            }
                        }, {
                            key: "spiritIconPrefab",
                            get: function() {
                                return this.par.spiritIconPrefab
                            }
                        }, {
                            key: "spiritContainerMcPrefab",
                            get: function() {
                                return this.par.spiritContainerMcPrefab
                            }
                        }]),
                        i
                }());
                r._RF.pop()
            }
        }
    }
));
