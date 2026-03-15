System.register("chunks:///_virtual/CombatNpcIconProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./CombatType.ts", "./AvatarPreview.ts", "./DazzleAvatarPreview2.ts", "./AvatarManager.ts", "./NodeExtend.ts"], (function(t) {
        var e, i, n, c, a, s, o, r, v;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    c = t.__global
                }
                , function(t) {
                    a = t.CombatType
                }
                , function(t) {
                    s = t.AvatarPreview
                }
                , function(t) {
                    o = t.DazzleAvatarPreview
                }
                , function(t) {
                    r = t.AvatarManager
                }
                , function(t) {
                    v = t.NodeExtend
                }
            ],
            execute: function() {
                n._RF.push({}, "1c0ebtu5BRE3rFa42cb6BgZ", "CombatNpcIconProxy", void 0);
                var h = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return i(e, t),
                        e
                }(v);
                t("CombatNpcIconProxy", function() {
                    function t() {
                        this._iconMc = void 0,
                            this._combatType = 0,
                            this._defIcon = new h,
                            this._avatarIcon = void 0,
                            this._preview = void 0,
                            this._dazzlePreview = void 0
                    }
                    var i = t.prototype;
                    return i.setIcon = function(t, e, i, n, s) {
                        switch (this._combatType = i,
                            i) {
                            case a.PVP:
                            case a.PVT:
                            case a.D_PVP:
                            case a.L_PVP:
                            case a.MATCH_PVP:
                                this.setAvatarIcon(t);
                                break;
                            default:
                                1 == s ? this.setAvatarIcon(c.MainRoleData.uin) : this.setNpcIcon(t)
                        }
                    }
                        ,
                        i.setAvatarDefaultIcon = function(t) {}
                        ,
                        i.disposAvatarDefaultIcon = function() {}
                        ,
                        i.setAvatarIcon = function(t) {
                            Number(this._iconMc.name.split("_")[1]);
                            null == this._preview && (this._preview = new s,
                                this._iconMc.addChild(this._preview),
                                this._preview.y = 0),
                            null == this._dazzlePreview && (this._dazzlePreview = new o,
                                this._iconMc.addChild(this._dazzlePreview),
                                this._dazzlePreview.y = 0),
                                r.getAvataPreview(t, this._preview),
                                r.getDazzleAvataPreview(t, this._dazzlePreview)
                        }
                        ,
                        i.disposAvatarIcon = function() {
                            this._preview && this._preview.clear(),
                            this._dazzlePreview && this._dazzlePreview.clear()
                        }
                        ,
                        i.setNpcIcon = function(t) {
                            this._iconMc.addChild(this._defIcon)
                        }
                        ,
                        i.disposNpcIcon = function() {
                            null != this._defIcon.parent && this._iconMc.removeChild(this._defIcon)
                        }
                        ,
                        i.setSpiritIcon = function(t, e) {}
                        ,
                        i.disposSpiritIcon = function() {}
                        ,
                        i.rest = function() {
                            switch (this._combatType) {
                                case a.PVP:
                                case a.PVT:
                                case a.D_PVP:
                                case a.L_PVP:
                                case a.MATCH_PVP:
                                    this.disposAvatarIcon();
                                    break;
                                default:
                                    this.disposAvatarIcon(),
                                        this.disposNpcIcon()
                            }
                        }
                        ,
                        e(t, [{
                            key: "iconMc",
                            set: function(t) {
                                this._iconMc = t
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
