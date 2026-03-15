System.register("chunks:///_virtual/AbandonedSpiritInformationBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SearchData.ts", "./SpiritInformationBar.ts"], (function(t) {
        var o, i, n, r, a, e;
        return {
            setters: [function(t) {
                o = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t.NodeEventType
                }
                , function(t) {
                    a = t.SearchData
                }
                , function(t) {
                    e = t.SpiritInformationBar
                }
            ],
            execute: function() {
                n._RF.push({}, "0fea0Pg3LdFr76TM05UyeOA", "AbandonedSpiritInformationBar", void 0);
                t("AbandonedSpiritInformationBar", function(t) {
                    function n(o) {
                        var i;
                        return (i = t.call(this, o) || this).type = 2,
                            i
                    }
                    o(n, t);
                    var e = n.prototype;
                    return e.onInit = function() {
                        t.prototype.onInit.call(this),
                            this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames),
                            this.mainBar.propertyIcon2.gotoAndStop(this.mainBar.propertyIcon2.totalFrames),
                            this.mainBar.propertyIcon3.gotoAndStop(this.mainBar.propertyIcon3.totalFrames),
                            this.mainBar.propertyIcon.target.tooltip = "",
                            this.mainBar.propertyIcon2.target.tooltip = "",
                            this.mainBar.propertyIcon3.target.tooltip = ""
                    }
                        ,
                        e.afterLoaded = function() {
                            t.prototype.afterLoaded.call(this),
                                this.reform()
                        }
                        ,
                        e.reform = function() {
                            this._isInit && (this.mainBar.releaseBtn.visible = !1,
                                this.mainBar.putInBtn.visible = !1,
                                this.mainBar.trainBtn.visible = !1,
                                this.mainBar.normalStorageButton.visible = !0,
                                this.mainBar.abandonedStorageButton.visible = !0,
                                this.mainBar.expandStorageButton.visible = !1,
                                this.mainBar.putToCloudButton.visible = !1,
                                this.mainBar.btnShowSkinStore.visible = !1,
                                this.mainBar.putToNormalStorageButton.x = this.mainBar.putInBtn.x,
                                this.mainBar.putToNormalStorageButton.y = this.mainBar.putInBtn.y,
                                this.mainBar.putToNormalStorageButton.visible = !0,
                            this.mainBar.putToNormalStorageButton.hasEventListener(r.TOUCH_END, this.onPutToNormalStorageButton, this) || this.mainBar.putToNormalStorageButton.on(r.TOUCH_END, this.onPutToNormalStorageButton, this))
                        }
                        ,
                        e.dispose = function() {
                            this.mainBar.putToNormalStorageButton.off(r.TOUCH_END, this.onPutToNormalStorageButton, this)
                        }
                        ,
                        e.onPutToNormalStorageButton = function(t) {
                            a.searchedSpirits[0] && this.par.canbutton && 0 != a.tempSpiritId && this.par.requestSpiritAdoption(a.tempSpiritId, a.tempSpiritTime)
                        }
                        ,
                        i(n, [{
                            key: "display",
                            get: function() {
                                return this
                            }
                        }]),
                        n
                }(e));
                n._RF.pop()
            }
        }
    }
));
