System.register("chunks:///_virtual/UserInfoDazzleAvatarPreview.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./NodeExtend.ts", "./AvatarContainer.ts", "./AvatarMcContainer.ts", "./PaopaoAvatarConatiner.ts"], (function(t) {
        var i, n, a, s, o, e, h, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    s = t.DEFINE
                }
                , function(t) {
                    o = t.NodeExtend
                }
                , function(t) {
                    e = t.AvatarContainer
                }
                , function(t) {
                    h = t.AvatarMcContainer
                }
                , function(t) {
                    r = t.PaopaoAvatarConatiner
                }
            ],
            execute: function() {
                a._RF.push({}, "3ac75ezD4JInY0sbmb5NRpD", "UserInfoDazzleAvatarPreview", void 0);
                var d = t("UserInfoDazzleAvatarPreview", function(t) {
                    function a() {
                        var i;
                        return (i = t.call(this) || this)._seats = void 0,
                            i.footprintContainer = void 0,
                            i.paopaoContainer = void 0,
                            i.mountBackContainer = void 0,
                            i.mountFrontContainer = void 0,
                            i.magicBackContainer = void 0,
                            i.magicFrontContainer = void 0,
                            i.stampContainer = void 0,
                            i.dollContainer = void 0,
                            i.environmentContainer = void 0,
                            i.leftHandAnimation = void 0,
                            i.rightHandAnimation = void 0,
                            i.wingAnimation = void 0,
                            i.tailAnimation = void 0,
                            i.acc2Animation = void 0,
                            i._backgroundID = void 0,
                            i._nameBG = void 0,
                            i.init(),
                            i
                    }
                    i(a, t);
                    var o = a.prototype;
                    return o.dispose = function() {
                        this._seats = null
                    }
                        ,
                        o.clear = function() {
                            for (var t = this._seats.length, i = 0; i < t; ++i)
                                null != this._seats[i] && (this._seats[i].unload(),
                                    this._seats[i].id = 0);
                            this._seats.length > 0 && (this.footprintID = 0,
                                this.setPaopaoId(0),
                                this.mountID = 0,
                                this.magicID = 0,
                                this.stampID = 0,
                                this.dollID = 0,
                                this.environmentID = 0)
                        }
                        ,
                        o.setPaopaoId = function(t) {
                            t > 0 ? this.paopaoContainer.setId(t, !0) : this.paopaoContainer.unShow()
                        }
                        ,
                        o.setAccAnimation = function(t) {
                            t > 0 ? this.acc2Animation.setId(t) : this.acc2Animation.unload()
                        }
                        ,
                        o.setLeftHandAnimation = function(t) {
                            t > 0 ? this.leftHandAnimation.setId(t) : this.leftHandAnimation.unload()
                        }
                        ,
                        o.setRightHandAnimation = function(t) {
                            t > 0 ? this.rightHandAnimation.setId(t) : this.rightHandAnimation.unload()
                        }
                        ,
                        o.setTailAnimation = function(t) {
                            t > 0 ? this.tailAnimation.setId(t) : this.tailAnimation.unload()
                        }
                        ,
                        o.setWingAnimation = function(t) {
                            t > 0 ? this.wingAnimation.setId(t) : this.wingAnimation.unload()
                        }
                        ,
                        o.setAvatar = function(t, i) {
                            var n;
                            if (i == a.ENVIRONMENT)
                                return this.environmentID = t,
                                    -1;
                            if (i == a.DOLL)
                                return this.dollID = t,
                                    -1;
                            if (i == a.MOUNT)
                                return this.mountID = t,
                                    -1;
                            if (i == a.FOOTPRINT)
                                return this.footprintID = t,
                                    -1;
                            if (i == a.STAMP)
                                return this.stampID = t,
                                    -1;
                            if (i == a.BACKGROUND)
                                return this.backgroundID = t,
                                    -1;
                            if (i == a.NAMEBG)
                                return this.nameBG = t,
                                    -1;
                            if (i == a.POPUP)
                                return this.setPaopaoId(t),
                                    -1;
                            if (i == a.MAGIC)
                                return this.magicID = t,
                                    -1;
                            i == a.ACC2 && this.setAccAnimation(t),
                            i == a.WING && this.setWingAnimation(t),
                            i == a.LEFT_HAND && this.setLeftHandAnimation(t),
                            i == a.RIGHT_HAND && this.setRightHandAnimation(t),
                            i == a.TAIL && this.setTailAnimation(t);
                            var o = this._seats[i];
                            if (null == o)
                                return -1;
                            if (n = o.id,
                                o.id = t,
                            0 == t)
                                o.unload();
                            else {
                                var e = s.DAZZLE_DRESS_RES_ROOT + i + "/" + String(t) + "_pre.png";
                                o.setPath(e)
                            }
                            return n
                        }
                        ,
                        o.setAvatars = function(t) {
                            if (t.length > 0)
                                for (var i = t.length - 1; i >= 0; --i)
                                    -1 == this.setAvatar(t[i], i) && (this._seats[i].unload(),
                                        this._seats[i].id = 0)
                        }
                        ,
                        o.init = function() {
                            this._seats = new Array(30);
                            for (var t = 0; t < this._seats.length; t++) {
                                var i = new e;
                                i.index = t,
                                    this._seats[t] = i,
                                t == a.SKIN && i.setCanChange(!1)
                            }
                            this.footprintContainer = new h(s.DAZZLE_DRESS_RES_ROOT + "26/{0}.swf"),
                                this.stampContainer = new h(s.DAZZLE_DRESS_RES_ROOT + "25/{0}.swf"),
                                this.dollContainer = new h(s.DAZZLE_DRESS_RES_ROOT + "24/{0}.swf"),
                                this.environmentContainer = new h(s.DAZZLE_DRESS_RES_ROOT + "21/{0}.swf"),
                                this.mountBackContainer = new e,
                                this.mountFrontContainer = new e,
                                this.magicBackContainer = new e,
                                this.magicFrontContainer = new e,
                                this.paopaoContainer = new r,
                                this.leftHandAnimation = new h(s.DAZZLE_DRESS_RES_ROOT + "15/{0}.swf"),
                                this.rightHandAnimation = new h(s.DAZZLE_DRESS_RES_ROOT + "16/{0}.swf"),
                                this.tailAnimation = new h(s.DAZZLE_DRESS_RES_ROOT + "9/{0}.swf"),
                                this.wingAnimation = new h(s.DAZZLE_DRESS_RES_ROOT + "14/{0}.swf"),
                                this.acc2Animation = new h(s.DAZZLE_DRESS_RES_ROOT + "11/{0}.swf"),
                                this.addChild(this.footprintContainer),
                                this.addChild(this.magicBackContainer),
                                this.addChild(this.mountBackContainer),
                                this.addChild(this._seats[a.WING]),
                                this.addChild(this.wingAnimation),
                                this.addChild(this._seats[a.TAIL]),
                                this.addChild(this.tailAnimation),
                                this.addChild(this._seats[a.SKIN]),
                                this.addChild(this._seats[a.FACE]),
                                this.addChild(this._seats[a.HAIR]),
                                this.addChild(this._seats[a.HAIR_ACC]),
                                this.addChild(this._seats[a.HAT]),
                                this.addChild(this._seats[a.PANTS]),
                                this.addChild(this._seats[a.GLASSES]),
                                this.addChild(this._seats[a.SHOE]),
                                this.addChild(this._seats[a.CLOAK]),
                                this.addChild(this._seats[a.CLOTH]),
                                this.addChild(this._seats[a.GLOVES]),
                                this.addChild(this._seats[a.LEFT_HAND]),
                                this.addChild(this.leftHandAnimation),
                                this.addChild(this._seats[a.RIGHT_HAND]),
                                this.addChild(this.rightHandAnimation),
                                this.addChild(this._seats[a.EAR_RING]),
                                this.addChild(this._seats[a.ACC1]),
                                this.addChild(this._seats[a.ACC2]),
                                this.addChild(this.acc2Animation),
                                this.addChild(this._seats[a.RING]),
                                this.addChild(this.mountFrontContainer),
                                this.addChild(this.magicFrontContainer),
                                this.addChild(this._seats[a.FRAME]),
                                this.addChild(this.environmentContainer),
                                this.addChild(this.dollContainer),
                                this.addChild(this.stampContainer),
                                this.addChild(this.paopaoContainer),
                                this._seats[a.FRAME].x = 20,
                                this.footprintContainer.x = 326,
                                this.footprintContainer.y = 395,
                                this.paopaoContainer.x = 118,
                                this.paopaoContainer.y = 142
                        }
                        ,
                        n(a, [{
                            key: "footprintID",
                            get: function() {
                                return this.footprintContainer.id
                            },
                            set: function(t) {
                                t > 0 ? this.footprintContainer.setId(t) : this.footprintContainer.unload()
                            }
                        }, {
                            key: "stampID",
                            get: function() {
                                return this.stampContainer.id
                            },
                            set: function(t) {
                                t > 0 ? this.stampContainer.setId(t) : this.stampContainer.unload()
                            }
                        }, {
                            key: "backgroundID",
                            get: function() {
                                return this._backgroundID
                            },
                            set: function(t) {
                                this._backgroundID = t
                            }
                        }, {
                            key: "environmentID",
                            get: function() {
                                return this.environmentContainer.id
                            },
                            set: function(t) {
                                t > 0 ? this.environmentContainer.setId(t) : this.environmentContainer.unload()
                            }
                        }, {
                            key: "dollID",
                            get: function() {
                                return this.dollContainer.id
                            },
                            set: function(t) {
                                t > 0 ? this.dollContainer.setId(t) : this.dollContainer.unload()
                            }
                        }, {
                            key: "nameBG",
                            get: function() {
                                return this._nameBG
                            },
                            set: function(t) {
                                this._nameBG = t
                            }
                        }, {
                            key: "mountID",
                            get: function() {
                                return this.mountFrontContainer.id
                            },
                            set: function(t) {
                                if (0 == t)
                                    return this.mountBackContainer.unload(),
                                        void this.mountFrontContainer.unload();
                                var i = s.DAZZLE_DRESS_RES_ROOT + "20/" + String(t) + "_2_pre.png"
                                    , n = s.DAZZLE_DRESS_RES_ROOT + "20/" + String(t) + "_1_pre.png";
                                this.mountFrontContainer.id = t,
                                    this.mountBackContainer.id = t,
                                    this.mountBackContainer.setPath(i),
                                    this.mountFrontContainer.setPath(n)
                            }
                        }, {
                            key: "magicID",
                            get: function() {
                                return this.magicFrontContainer.id
                            },
                            set: function(t) {
                                if (0 == t)
                                    return this.magicBackContainer.unload(),
                                        void this.magicFrontContainer.unload();
                                var i = s.DAZZLE_DRESS_RES_ROOT + "18/" + String(t) + "_1_pre.png"
                                    , n = s.DAZZLE_DRESS_RES_ROOT + "18/" + String(t) + "_2_pre.png";
                                this.magicFrontContainer.id = t,
                                    this.magicBackContainer.id = t,
                                    this.magicBackContainer.setPath(i),
                                    this.magicFrontContainer.setPath(n)
                            }
                        }]),
                        a
                }(o));
                d.HAT = 0,
                    d.HAIR = 1,
                    d.HAIR_ACC = 2,
                    d.FACE = 3,
                    d.GLASSES = 4,
                    d.EAR_RING = 5,
                    d.SKIN = 6,
                    d.CLOTH = 7,
                    d.PANTS = 8,
                    d.TAIL = 9,
                    d.ACC1 = 10,
                    d.ACC2 = 11,
                    d.SHOE = 12,
                    d.CLOAK = 13,
                    d.WING = 14,
                    d.LEFT_HAND = 15,
                    d.RIGHT_HAND = 16,
                    d.GLOVES = 17,
                    d.MAGIC = 18,
                    d.RING = 19,
                    d.MOUNT = 20,
                    d.ENVIRONMENT = 21,
                    d.BACKGROUND = 22,
                    d.FRAME = 23,
                    d.DOLL = 24,
                    d.STAMP = 25,
                    d.FOOTPRINT = 26,
                    d.NAMEBG = 27,
                    d.POPUP = 28,
                    a._RF.pop()
            }
        }
    }
));
