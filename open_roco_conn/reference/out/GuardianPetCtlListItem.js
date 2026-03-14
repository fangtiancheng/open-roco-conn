System.register("chunks:///_virtual/GuardianPetCtlListItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./global.ts", "./GuardianPetEvent.ts", "./VipAvatarVO.ts", "./GuardianPetVipAvatarIcon.ts", "./GuardianPetUICtlBase.ts", "./AgentNode.ts"], (function(t) {
        var e, i, n, s, o, a, r, u, c, h, d, _;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.NodeEventType
                }
                , function(t) {
                    a = t.DEFINE
                }
                , function(t) {
                    r = t.__global
                }
                , function(t) {
                    u = t.GuardianPetEvent
                }
                , function(t) {
                    c = t.VipAvatarVO
                }
                , function(t) {
                    h = t.GuardianPetVipAvatarIcon
                }
                , function(t) {
                    d = t.GuardianPetUICtlBase
                }
                , function(t) {
                    _ = t.AgentNode
                }
            ],
            execute: function() {
                s._RF.push({}, "db2bf7mwaNHY4xI166lzZhz", "GuardianPetCtlListItem", void 0);
                t("GuardianPetCtlListItem", function(t) {
                    e(d, t);
                    var s = d.prototype;
                    function d(e, i, s, r) {
                        var u;
                        return void 0 === i && (i = 0),
                        void 0 === s && (s = ""),
                        void 0 === r && (r = null),
                            (u = t.call(this, e, i, s, r) || this)._equiped = void 0,
                            u.m_data = void 0,
                            u._curLevel = void 0,
                            u._baseId = void 0,
                            u.baseURL = a.COMM_ROOT + "res/guardianPet/vipIcons/",
                            u._icon = void 0,
                            u._tooltip = void 0,
                            u._status = void 0,
                            u._needLv = void 0,
                            u.res.mcOperate.visible = !0,
                            u.res.txtNeedVipLv.mouseEnabled = !1,
                            u.res.mcStatus.mouseEnabled = !1,
                            u.res.bg.gotoAndStop(1),
                            u.res.on(o.TOUCH_END, u.onIconClick, n(u)),
                            u.res.mcOperate.btnEquip.on(o.TOUCH_END, u.onIconClick, n(u)),
                            u.res.mcOperate.btnUnEquip.on(o.TOUCH_END, u.onIconClick, n(u)),
                            u.res.on(o.TOUCH_END, u.onIconClick, n(u)),
                            u
                    }
                    return s.createAgentNode = function(t) {
                        return new l(t)
                    }
                        ,
                        s.onIconClick = function(t) {
                            var e;
                            switch (t.target.name) {
                                case "btnEquip":
                                    if (r.MainRoleData.vipLevel < this._needLv)
                                        return void r.showMsgBox("你的等级不够哦，快去升级VIP吧！");
                                    (e = new u(u.EQUIP_VIPAVATAR,!0)).avatarBaseId = this._baseId,
                                        this.res.parentNode.dispatchEvent(e);
                                    break;
                                case "btnUnEquip":
                                    (e = new u(u.UN_EQUIP_VIPAVATAR,!0)).avatarBaseId = this._baseId,
                                        this.res.dispatchEvent(e)
                            }
                        }
                        ,
                        s.onAvatarOut = function(t) {
                            this.res.mcOperate.visible = !1
                        }
                        ,
                        s.onAvatarOver = function(t) {
                            this.res.mcOperate.visible = !0
                        }
                        ,
                        s.loadIcon = function(t) {
                            this._icon && (this._icon.parent.removeChild(this._icon),
                                this._icon.destroy(),
                                this._icon = null),
                            t > 0 && (this._icon = new h,
                                this._icon.setPath(this.baseURL + (100 * t + this._curLevel) + "-preview.png"),
                                this.res.addChildAt(this._icon, 1))
                        }
                        ,
                        s.clear = function() {
                            this._icon && (this._icon.parent.removeChild(this._icon),
                                this._icon.destroy(),
                                this._icon = null),
                                this.tooltip = "",
                                this.status = c.AVATAR_NONE,
                                this.needLv = 0,
                                this.loadIcon(0)
                        }
                        ,
                        s.setSelected = function(t) {
                            t ? this.res.gotoAndStop(2) : this.res.gotoAndStop(1)
                        }
                        ,
                        i(d, [{
                            key: "res",
                            get: function() {
                                return this.m_res
                            }
                        }, {
                            key: "data",
                            get: function() {
                                return this.m_data
                            },
                            set: function(t) {
                                this.m_data = t,
                                    this.m_data ? (this._baseId = this.m_data.baseId,
                                        this._curLevel = this.m_data.curDisplayLv,
                                        this.status = this.m_data.status,
                                        this.needLv = this.m_data.needVipLv,
                                        this.loadIcon(this._baseId),
                                        this.tooltip = this.m_data.name,
                                        this.equiped = this.m_data.isCurAvatar) : this.clear()
                            }
                        }, {
                            key: "tooltip",
                            get: function() {
                                return this._tooltip
                            },
                            set: function(t) {
                                this._tooltip = t,
                                this._icon && (this._icon.tooltip = this._tooltip)
                            }
                        }, {
                            key: "baseId",
                            get: function() {
                                return this._baseId
                            }
                        }, {
                            key: "status",
                            set: function(t) {
                                this._status = t,
                                    this._status == c.AVATAR_NEW ? this.res.mcStatus.gotoAndStop(2) : this._status == c.AVATAR_HOT ? this.res.mcStatus.gotoAndStop(1) : this.res.mcStatus.visible = !1
                            }
                        }, {
                            key: "needLv",
                            get: function() {
                                return this._needLv
                            },
                            set: function(t) {
                                this._needLv = t,
                                    this._needLv > 0 ? this.res.txtNeedVipLv.text = "VIP" + this._needLv + "级" : this.res.txtNeedVipLv.text = ""
                            }
                        }, {
                            key: "equiped",
                            get: function() {
                                return this._equiped
                            },
                            set: function(t) {
                                this._equiped = t,
                                    this._equiped ? (this.res.mcOperate.gotoAndStop(2),
                                        this.res.bg.gotoAndStop(2)) : (this.res.mcOperate.gotoAndStop(1),
                                        this.res.bg.gotoAndStop(1))
                            }
                        }]),
                        d
                }(d));
                var p = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnEquip = void 0,
                            e._btnUnEquip = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnEquip",
                            get: function() {
                                return this._btnEquip || (this._btnEquip = new _(this.getChildByName("btnEquip"))),
                                    this._btnEquip
                            }
                        }, {
                            key: "btnUnEquip",
                            get: function() {
                                return this._btnUnEquip || (this._btnUnEquip = new _(this.getChildByName("btnUnEquip"))),
                                    this._btnUnEquip
                            }
                        }]),
                        n
                }(_)
                    , l = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._mcOperate = void 0,
                            e._txtNeedVipLv = void 0,
                            e._mcStatus = void 0,
                            e._bg = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "mcOperate",
                            get: function() {
                                return this._mcOperate || (this._mcOperate = new p(this.getChildByName("mcOperate"))),
                                    this._mcOperate
                            }
                        }, {
                            key: "txtNeedVipLv",
                            get: function() {
                                return this._txtNeedVipLv || (this._txtNeedVipLv = new _(this.getChildByName("txtNeedVipLv"))),
                                    this._txtNeedVipLv
                            }
                        }, {
                            key: "mcStatus",
                            get: function() {
                                return this._mcStatus || (this._mcStatus = new _(this.getChildByName("mcStatus"))),
                                    this._mcStatus
                            }
                        }, {
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new _(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }]),
                        n
                }(_);
                s._RF.pop()
            }
        }
    }
));
