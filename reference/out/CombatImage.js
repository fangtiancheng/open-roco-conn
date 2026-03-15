System.register("chunks:///_virtual/CombatImage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./CombatResConvert.ts", "./SpriteFrameAsset.ts", "./AImage.ts", "./ToolTip.ts", "./ResManager.ts", "./BuildLogHelper.ts", "./Constants.ts", "./global.ts"], (function(t) {
        var n, e, o, s, a, i, r, c, l, u, g, f, m;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        s = t.UITransform
                }
                , function(t) {
                    a = t.DEFINE
                }
                , function(t) {
                    i = t.CombatResConvert
                }
                , function(t) {
                    r = t.SpriteFrameAsset
                }
                , function(t) {
                    c = t.AImage
                }
                , function(t) {
                    l = t.ToolTipComponent
                }
                , function(t) {
                    u = t.default
                }
                , function(t) {
                    g = t.default
                }
                , function(t) {
                    f = t.Constants
                }
                , function(t) {
                    m = t.__global
                }
            ],
            execute: function() {
                o._RF.push({}, "95a87fUqIRD6q6ifZkdZhAm", "CombatImage", void 0),
                    t("CombatImage", function(t) {
                        function o(n, e, o) {
                            var s;
                            return void 0 === n && (n = 0),
                            void 0 === e && (e = 0),
                            void 0 === o && (o = !1),
                                (s = t.call(this, n, e, o) || this).tooltip = "",
                                s.tooltipType = 0,
                                s._res = void 0,
                                s._scaleParam = 1,
                                s.imgGC = !1,
                            s.getComponent(l) || s.addComponent(l),
                                s
                        }
                        n(o, t),
                            o.setResManager = function(t) {
                                o._resManager = t
                            }
                        ;
                        var c = o.prototype;
                        return c.dispose = function() {
                            this.unload(),
                            this._res instanceof r && null != o._resManager && o._resManager.giveBackSpiritIcon(this._res.name),
                                this._res = null
                        }
                            ,
                            c.setCommonIcon = function(t) {
                                null != o._resManager && this.setSource(o._resManager.getSkillICon(t))
                            }
                            ,
                            c.setSkillIcon = function(t) {
                                var n = this;
                                null != o._resManager && (1 == g.IS_LOCAL && console.log("setSkillIcon==>" + t),
                                    u.Instance.loadingRes("combatIcon", "ICON_" + t, (function(t, e) {
                                            e && n.setSource(e)
                                        }
                                    )))
                            }
                            ,
                            c.setBuffIcon = function(t) {
                                var n = this;
                                null != o._resManager && (t = i.buffIdToIconId(t),
                                1 == g.IS_LOCAL && console.log("setBuffIcon==>" + t),
                                    u.Instance.loadingRes("combatIcon", "ICON_" + t, (function(t, e) {
                                            e && n.setSource(e)
                                        }
                                    )))
                            }
                            ,
                            c.setSpiritIcon = function(t) {
                                if (null != o._resManager) {
                                    this.unload();
                                    var n = t.toString();
                                    t < 100 && (n = "0" + t);
                                    var e = a.COMM_ROOT + "res/combat/icons/" + n + "-.png"
                                        , s = m.SysAPI.getGDataAPI().getDataProxy(f.SPIRIT_DATA);
                                    if (s) {
                                        var i = s.select(t);
                                        i && i.iconSrc && (e = i.iconSrc)
                                    }
                                    this.setPath(e)
                                } else
                                    g.IS_LOCAL
                            }
                            ,
                            c.setPetPropertyIcon = function(t) {
                                o._resManager
                            }
                            ,
                            c.addImage = function(n) {
                                t.prototype.addImage.call(this, n),
                                    this.getComponent(s).width = Math.floor(this.getComponent(s).width * this._scaleParam),
                                    this.getComponent(s).height = Math.floor(this.getComponent(s).height * this._scaleParam)
                            }
                            ,
                            e(o, [{
                                key: "scaleParam",
                                get: function() {
                                    return this._scaleParam
                                },
                                set: function(t) {
                                    this._scaleParam = t
                                }
                            }]),
                            o
                    }(c))._resManager = void 0,
                    o._RF.pop()
            }
        }
    }
));
