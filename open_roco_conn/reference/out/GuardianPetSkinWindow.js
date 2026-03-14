System.register("chunks:///_virtual/GuardianPetSkinWindow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./WindowBase.ts", "./GuardianPetEvent.ts", "./GuardianPetWindowManager.ts", "./GuardianPetCtlFlipPageList.ts", "./GuardianPetCtlListItem.ts", "./AgentNode.ts", "./GuardianPetIdleIcon.ts", "./ResManager.ts"], (function(t) {
        var i, a, n, e, s, r, o, u, c, h, v, d, _, l, A, g;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    a = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    e = t.cclegacy,
                        s = t.Vec2,
                        r = t.NodeEventType
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    u = t.__global
                }
                , function(t) {
                    c = t.WindowBase
                }
                , function(t) {
                    h = t.GuardianPetEvent
                }
                , function(t) {
                    v = t.GuardianPetWindowManager
                }
                , function(t) {
                    d = t.GuardianPetCtlFlipPageList
                }
                , function(t) {
                    _ = t.GuardianPetCtlListItem
                }
                , function(t) {
                    l = t.AgentNode
                }
                , function(t) {
                    A = t.GuardianPetIdleIcon
                }
                , function(t) {
                    g = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "2e5a9wYGedJ5oZirSy3WxXf", "GuardianPetSkinWindow", void 0);
                t("GuardianPetSkinWindow", function(t) {
                    function e(i, a) {
                        var e;
                        void 0 === i && (i = null),
                        void 0 === a && (a = !1),
                            (e = t.call(this) || this).DEFAULT_AVATARID = 1e6,
                            e.uiLogic = void 0,
                            e._curBaseId = void 0,
                            e._ui = void 0,
                            e._iconList = void 0,
                            e._iconDatas = void 0,
                            e.avatarPosArr = [new s(-290,-55), new s(-108,-55), new s(74,-55), new s(256,-55), new s(-198,-184), new s(-22,-184), new s(152,-184), new s(326,-184)],
                            e.avatarSizeArr = [new s(80,80), new s(80,80), new s(80,80), new s(80,80), new s(80,80), new s(80,80), new s(80,80), new s(80,80)],
                            e.avatarNum = 8,
                            e._avatarList = void 0,
                            e._avatar = void 0;
                        var o = g.Instance.getPrefabByName("guardianPet/ResVipAvatarUI_1600");
                        return e._ui = new f(o),
                            e.addChild(e._ui.target),
                            e.initUI(),
                            e.initialize(i, e._ui.bg.target, null, null, a),
                            e.center(),
                            e._ui.btnClose.on(r.TOUCH_END, e.onWindClick, n(e)),
                            e
                    }
                    i(e, t);
                    var c = e.prototype;
                    return c.openCurWin = function() {}
                        ,
                        c.closeCurWin = function() {
                            t.prototype.close.call(this),
                                v.getInstance().openMainWind()
                        }
                        ,
                        c.onWindClick = function(t) {
                            switch (t.target.name) {
                                case "btnToBeVip":
                                    u.linkToVipPayPage({
                                        ctag: "shouhu"
                                    });
                                    break;
                                case "btnClose":
                                    this.closeCurWin()
                            }
                        }
                        ,
                        c.initUI = function() {
                            this._iconList = new d(this._ui.mcList.target,4,_,!0),
                                this.initIconList(),
                                this.initAvatarList()
                        }
                        ,
                        c.initIconDatas = function() {
                            var t = u.SysAPI.getGDataAPI().getDataProxy(o.GUARDIANPET_VIPAVATAR_DATA);
                            this._iconDatas = t.select("*")
                        }
                        ,
                        c.initIconList = function() {
                            this.initIconDatas(),
                                this._iconList.setListData(this._iconDatas),
                                this._ui.mcList.addEventListener(h.EQUIP_VIPAVATAR, this.onEquipAvatar, this),
                                this._ui.mcList.addEventListener(h.UN_EQUIP_VIPAVATAR, this.onUnEquipAvatar, this)
                        }
                        ,
                        c.onEquipAvatar = function(t) {
                            var i = t.avatarBaseId;
                            this.uiLogic.operateVipAvatar(i, 0)
                        }
                        ,
                        c.onUnEquipAvatar = function(t) {
                            var i = t.avatarBaseId;
                            this.uiLogic.operateVipAvatar(i, 1)
                        }
                        ,
                        c.initAvatarList = function() {
                            this._avatarList = [];
                            for (var t = 0; t < this.avatarNum; t++)
                                this._avatar = new A(this.avatarSizeArr[t].x,this.avatarSizeArr[t].y),
                                    this._avatar.uiContainer = this._ui.target,
                                    this._avatar.x = this.avatarPosArr[t].x,
                                    this._avatar.y = this.avatarPosArr[t].y,
                                    this._avatar.setMask(this.avatarSizeArr[t].x, this.avatarSizeArr[t].y),
                                    this._avatarList.push(this._avatar)
                        }
                        ,
                        c.setAvatarList = function() {
                            for (var t, i = 0; i < this.avatarNum; i++)
                                t = 100 * this._curBaseId + (i + 1),
                                    this._avatarList[i].load(t)
                        }
                        ,
                        c.clearAvatarList = function() {
                            for (var t = 0; t < this.avatarNum; t++)
                                this._avatarList[t].load(0)
                        }
                        ,
                        a(e, [{
                            key: "curBaseId",
                            set: function(t) {
                                this._curBaseId = t,
                                    this._iconList.setCurAvatarBaseId(this._curBaseId),
                                    this._curBaseId > this.DEFAULT_AVATARID ? this.setAvatarList() : this.clearAvatarList()
                            }
                        }]),
                        e
                }(c));
                var f = function(t) {
                    function n() {
                        for (var i, a = arguments.length, n = new Array(a), e = 0; e < a; e++)
                            n[e] = arguments[e];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._bg = void 0,
                            i._btnToBeVip = void 0,
                            i._btnClose = void 0,
                            i._mcList = void 0,
                            i
                    }
                    return i(n, t),
                        a(n, [{
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new l(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "btnToBeVip",
                            get: function() {
                                return this._btnToBeVip || (this._btnToBeVip = new l(this.getChildByName("btnToBeVip"))),
                                    this._btnToBeVip
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new l(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "mcList",
                            get: function() {
                                return this._mcList || (this._mcList = new l(this.getChildByName("mcList"))),
                                    this._mcList
                            }
                        }]),
                        n
                }(l);
                e._RF.pop()
            }
        }
    }
));
