System.register("chunks:///_virtual/GuardianPetIdleIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./DEFINE.ts", "./ResLoadTask.ts", "./global.ts", "./NodeExtend.ts", "./NodeUtils.ts", "./CFunction.ts", "./GuardianPetData.ts"], (function(t) {
        var i, e, a, s, n, o, r, d, h, u, c, _, l, f, g;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    a = t.cclegacy,
                        s = t.ImageAsset,
                        n = t.SpriteFrame,
                        o = t.Texture2D,
                        r = t.Sprite
                }
                , function(t) {
                    d = t.Constants
                }
                , function(t) {
                    h = t.DEFINE
                }
                , function(t) {
                    u = t.ResLoadTask
                }
                , function(t) {
                    c = t.__global
                }
                , function(t) {
                    _ = t.NodeExtend
                }
                , function(t) {
                    l = t.NodeUtils
                }
                , function(t) {
                    f = t.CFunction
                }
                , function(t) {
                    g = t.GuardianPetData
                }
            ],
            execute: function() {
                a._RF.push({}, "8ff0dVq5bdOLpyKKJgi2wKV", "GuardianPetIdleIcon", void 0);
                t("GuardianPetIdleIcon", function(t) {
                    function a(i, e, a) {
                        var s;
                        return void 0 === i && (i = 0),
                        void 0 === e && (e = 0),
                        void 0 === a && (a = !1),
                            (s = t.call(this) || this)._width = void 0,
                            s._height = void 0,
                            s._tooltip = void 0,
                            s._idleMc = void 0,
                            s._msk = void 0,
                            s._uiContainer = void 0,
                            s._useMsk = void 0,
                            s.baseURL = h.COMM_ROOT + "res/guardianPet/previews/",
                            s._resLoadTask = void 0,
                            s._loadManager = void 0,
                            s._guardianPetData = void 0,
                            s._curGuardianPetLv = void 0,
                            s._avatarLv = void 0,
                            s.mouseChildren = !1,
                            s._width = i,
                            s._height = e,
                            s._useMsk = a,
                            s._loadManager = c.SysAPI.getResSysAPI().getResLoadTaskManager(),
                            s
                    }
                    i(a, t);
                    var v = a.prototype;
                    return v.load = function(t) {
                        if (this.clear(),
                        t > 0) {
                            this._resLoadTask = new u;
                            var i = h.CDN + "guardianPet/previews/" + t + ".png";
                            this._resLoadTask.paths = [i],
                                this._resLoadTask.completeHandler = new f(this.onLoaded,this),
                                this._resLoadTask.errorHandler = new f(this.onLoadError,this),
                                this._loadManager.addLoadTask(this._resLoadTask)
                        }
                    }
                        ,
                        v.load1 = function(t) {
                            if (this.clear(),
                            t > 0) {
                                this._resLoadTask = new u;
                                var i = h.CDN + "guardianPet/main/" + t + ".png";
                                this._resLoadTask.paths = [i],
                                    this._resLoadTask.completeHandler = new f(this.onLoaded,this),
                                    this._resLoadTask.errorHandler = new f(this.onLoadError,this),
                                    this._loadManager.addLoadTask(this._resLoadTask)
                            }
                        }
                        ,
                        v.onLoadError = function(t) {
                            throw new Error("守护兽idle资源加载失败！")
                        }
                        ,
                        v.onLoaded = function(t) {
                            var i = t.resData;
                            if (this._idleMc = new _,
                            i && this._idleMc) {
                                if (i.content instanceof s) {
                                    var e = new n;
                                    e.packable = !1;
                                    var a = new o;
                                    a.image = i.content,
                                        e.texture = a,
                                        (d = this._idleMc.getComponent(r) || this._idleMc.addComponent(r)).spriteFrame = e,
                                        d.spriteFrame.addRef()
                                } else if (i.content instanceof n) {
                                    var d;
                                    (d = this._idleMc.getComponent(r) || this._idleMc.addComponent(r)).spriteFrame = i.content,
                                        d.spriteFrame.addRef()
                                }
                                l.contains(this._uiContainer, this) || this._uiContainer.addChild(this),
                                    this.place()
                            }
                        }
                        ,
                        v.place = function() {
                            this._width,
                                this._height,
                            this._useMsk && this._msk && (this._idleMc.mask = this._msk),
                                this.addChild(this._idleMc),
                            0 != this._curGuardianPetLv && (this._curGuardianPetLv,
                                this._avatarLv),
                            l.contains(this._uiContainer, this) || this._uiContainer.addChild(this)
                        }
                        ,
                        v.setMask = function(t, i) {}
                        ,
                        v.clear = function() {
                            if (this._idleMc && l.contains(this, this._idleMc)) {
                                var t = this._idleMc.getComponent(r);
                                if (t) {
                                    t.spriteFrame.destroy();
                                    var i;
                                    t.spriteFrame.texture;
                                    if (t.spriteFrame.packable)
                                        null == (i = t.spriteFrame.original) ? void 0 : i._texture;
                                    t.spriteFrame.texture.destroy()
                                }
                                this._idleMc.destroy()
                            }
                            this._resLoadTask && (this._loadManager.delLoadTask(this._resLoadTask),
                                this._resLoadTask = null),
                            null != this._idleMc && (this._idleMc = null)
                        }
                        ,
                        v.setData = function(t, i, e) {
                            this._avatarLv = e;
                            var a = 100 * t + i
                                , s = c.SysAPI.getGDataAPI().getDataProxy(d.GUARDIANPET_DATA).select(a);
                            this._guardianPetData = new g,
                                this._guardianPetData.level = i,
                                this._guardianPetData.guardianPetDes = s
                        }
                        ,
                        v.dispose = function() {
                            this.clear(),
                                this.destroy()
                        }
                        ,
                        e(a, [{
                            key: "width",
                            get: function() {
                                return this._width
                            },
                            set: function(t) {
                                this._width = t
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return this._height
                            },
                            set: function(t) {
                                this._height = t
                            }
                        }, {
                            key: "tooltip",
                            get: function() {
                                return this._tooltip
                            },
                            set: function(t) {
                                this._tooltip = t
                            }
                        }, {
                            key: "uiContainer",
                            set: function(t) {
                                this._uiContainer = t
                            }
                        }, {
                            key: "guardianPetData",
                            get: function() {
                                return this._guardianPetData
                            }
                        }, {
                            key: "curGuardianPetLv",
                            get: function() {
                                return this._curGuardianPetLv
                            },
                            set: function(t) {
                                this._curGuardianPetLv = t
                            }
                        }]),
                        a
                }(_));
                a._RF.pop()
            }
        }
    }
));
