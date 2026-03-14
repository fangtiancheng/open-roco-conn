System.register("chunks:///_virtual/FixTemperCtlAlertChooseSpirit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts", "./PropertyDes.ts", "./UICtlBase.ts"], (function(t) {
        var e, i, s, n, c, r, l, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy,
                        c = t.NodeEventType
                }
                , function(t) {
                    r = t.ActivityAPI
                }
                , function(t) {
                    l = t.PropertyDes
                }
                , function(t) {
                    o = t.UICtlBase
                }
            ],
            execute: function() {
                n._RF.push({}, "ba930Dj4KNH/KVOyGJsJXDx", "FixTemperCtlAlertChooseSpirit", void 0);
                t("FixTemperCtlAlertChooseSpirit", function(t) {
                    function n(e, i, n, r, l) {
                        var o;
                        void 0 === n && (n = null),
                        void 0 === r && (r = 0),
                        void 0 === l && (l = ""),
                            (o = t.call(this, e, r, l, n) || this).m_spData = [],
                            o.m_curIndex = -1,
                            o.m_onSubmit = void 0;
                        for (var h = 0; h < 6; h++)
                            e["ctlSp" + h].on(c.TOUCH_END, o.onClick, s(o)),
                                e["ctlSp" + h].mouseChildren = !1,
                                e["ctlSp" + h].buttonMode = !0,
                                e["ctlSp" + h].gotoAndStop(1),
                                e["ctlSp" + h].ctlSelected.visible = !1,
                                o.res["ctlSp" + h].container.clear(),
                            e["ctlSp" + h].getChildByName("txtLevel") && (e["ctlSp" + h].txtLevel.text = "LV:0"),
                            e["ctlSp" + h].getChildByName("txtPRS") && (e["ctlSp" + h].txtPRS.text = "性格:"),
                            e["ctlSp" + h].getChildByName("txtName") && (e["ctlSp" + h].txtName.text = "");
                        return e.btnClose_chooseSP && e.btnClose_chooseSP.on(c.TOUCH_END, o.onClick, s(o)),
                        e.btnSubmit_chooseSP && e.btnSubmit_chooseSP.on(c.TOUCH_END, o.onClick, s(o)),
                            o.m_onSubmit = i,
                            e.visible = !1,
                            o
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.show = function(t) {
                        this.m_spData = [],
                        t || ((t = {}).PetInfo = []),
                        t.PetInfo || (t.PetInfo = []);
                        for (var e = 0; e < t.PetInfo.length; e++) {
                            var i = {};
                            i.id = Number(t.PetInfo[e].id[0]),
                                i.catch_time = String(t.PetInfo[e].catch_time[0]),
                                i.level = Number(t.PetInfo[e].level[0]),
                                i.prs = Number(t.PetInfo[e].personality[0]),
                                i.need_money = 0,
                            t.PetInfo[e].hasOwnProperty("need_money") && (i.need_money = Number(t.PetInfo[e].need_money[0])),
                                this.m_spData.push(i)
                        }
                        for (this.m_curIndex = -1,
                                 this.res.visible = !0,
                                 e = 0; e < 6; e++)
                            if (this.res["ctlSp" + e].ctlSelected.visible = !1,
                                this.cleanContainer(this.res["ctlSp" + e].container),
                                this.res["ctlSp" + e].buttonMode = !1,
                            e < this.m_spData.length) {
                                this.res["ctlSp" + e].gotoAndStop(1),
                                    this.res["ctlSp" + e].buttonMode = !0,
                                this.res["ctlSp" + e].getChildByName("txtLevel") && (this.res["ctlSp" + e].txtLevel.text = "LV:" + String(this.m_spData[e].level)),
                                this.res["ctlSp" + e].getChildByName("txtPRS") && (this.res["ctlSp" + e].txtPRS.text = "性格:" + l.TEMPERS[this.m_spData[e].prs - 1]),
                                this.res["ctlSp" + e].getChildByName("txtName") && (this.res["ctlSp" + e].txtName.text = r.getSpiritName(this.m_spData[e].id));
                                var s = r.getSpiritIcon(this.m_spData[e].id);
                                this.res["ctlSp" + e].container.addChild(s)
                            } else
                                2 == this.res["ctlSp" + e].totalFrames && this.res["ctlSp" + e].gotoAndStop(2),
                                this.res["ctlSp" + e].getChildByName("txtLevel") && (this.res["ctlSp" + e].txtLevel.text = ""),
                                this.res["ctlSp" + e].getChildByName("txtPRS") && (this.res["ctlSp" + e].txtPRS.text = ""),
                                this.res["ctlSp" + e].getChildByName("txtName") && (this.res["ctlSp" + e].txtName.text = "")
                    }
                        ,
                        o.dispose = function() {
                            this.res.off(c.TOUCH_END, this.onClick, this),
                                t.prototype.dispose.call(this)
                        }
                        ,
                        o.onClick = function(t) {
                            switch (t.target.name) {
                                case "ctlSp0":
                                case "ctlSp1":
                                case "ctlSp2":
                                case "ctlSp3":
                                case "ctlSp4":
                                case "ctlSp5":
                                    var e = Number(String(t.target.name).charAt(5));
                                    if (e >= this.m_spData.length)
                                        return;
                                    -1 != this.m_curIndex && (this.res["ctlSp" + this.m_curIndex].ctlSelected.visible = !1),
                                        this.m_curIndex = e,
                                        this.res["ctlSp" + this.m_curIndex].ctlSelected.visible = !0;
                                    break;
                                case "btnClose_chooseSP":
                                    this.res.visible = !1;
                                    break;
                                case "btnSubmit_chooseSP":
                                    if (-1 == this.m_curIndex)
                                        return void r.showAlert("请选择一只宠物！");
                                    this.res.visible = !1,
                                        1 == this.m_onSubmit.length ? this.m_onSubmit(this.m_spData[this.m_curIndex]) : 2 == this.m_onSubmit.length ? this.m_onSubmit(this.m_spData[this.m_curIndex].id, this.m_spData[this.m_curIndex].catch_time) : 4 == this.m_onSubmit.length && this.m_onSubmit(this.m_spData[this.m_curIndex].id, this.m_spData[this.m_curIndex].catch_time, this.m_spData[this.m_curIndex].need_money, Number(this.m_spData[this.m_curIndex].prs))
                            }
                        }
                        ,
                        o.cleanContainer = function(t) {
                            for (var e = 0; e < t.numChildren; e++)
                                t.removeChildAt(0, !0)
                        }
                        ,
                        i(n, [{
                            key: "curSpiritData",
                            get: function() {
                                return -1 != this.m_curIndex ? this.m_spData[this.m_curIndex] : null
                            }
                        }, {
                            key: "curIndex",
                            get: function() {
                                return this.m_curIndex
                            },
                            set: function(t) {
                                t >= this.m_spData.length || (-1 != this.m_curIndex && (this.res["ctlSp" + this.m_curIndex].ctlSelected.visible = !1),
                                    this.m_curIndex = t,
                                    this.res["ctlSp" + this.m_curIndex].ctlSelected.visible = !0)
                            }
                        }]),
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
