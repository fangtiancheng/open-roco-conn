System.register("chunks:///_virtual/DazzleAvatarPreview2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./AImage.ts", "./NodeExtend.ts"], (function(t) {
        var s, i, e, a, n, h;
        return {
            setters: [function(t) {
                s = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    a = t.DEFINE
                }
                , function(t) {
                    n = t.AImage
                }
                , function(t) {
                    h = t.NodeExtend
                }
            ],
            execute: function() {
                e._RF.push({}, "a05c5SowC5NEY2ghv6YNHnj", "DazzleAvatarPreview", void 0);
                var d = t("DazzleAvatarPreview", function(t) {
                    function e() {
                        var s;
                        return (s = t.call(this) || this)._seats = void 0,
                            s._mountBackContainer = void 0,
                            s._mountFrontContainer = void 0,
                            s.init(),
                            s.scaleX = .8,
                            s.scaleY = .8,
                            s
                    }
                    s(e, t);
                    var h = e.prototype;
                    return h.dispose = function() {
                        this._seats = null
                    }
                        ,
                        h.clear = function() {
                            for (var t = this._seats.length, s = 0; s < t; ++s)
                                null != this._seats[s] && this._seats[s].unload()
                        }
                        ,
                        h.setAvatar = function(t, s) {
                            var i = this._seats[s];
                            if (null == i)
                                return -1;
                            if (0 == t)
                                return -1;
                            var e = a.DAZZLE_DRESS_RES_ROOT + s + "/" + String(t) + "_pre.png";
                            return i.setPath(e),
                                0
                        }
                        ,
                        h.setAvatars = function(t) {
                            if (t.length > 0)
                                for (var s = t.length - 1; s >= 0; --s)
                                    s != e.MOUNT && s != e.NAMEBG && s != e.BACKGROUND && s != e.POPUP && s != e.FOOTPRINT && s != e.MAGIC && -1 == this.setAvatar(t[s], s) && this._seats[s].unload();
                            this.mountID = t[e.MOUNT]
                        }
                        ,
                        h.init = function() {
                            this._seats = new Array(30);
                            for (var t = 0; t < this._seats.length; t++) {
                                var s = new n;
                                this._seats[t] = s
                            }
                            this._mountBackContainer = new n,
                                this._mountFrontContainer = new n,
                                this.addChild(this._seats[e.MAGIC]),
                                this.addChild(this._mountBackContainer),
                                this.addChild(this._seats[e.WING]),
                                this.addChild(this._seats[e.TAIL]),
                                this.addChild(this._seats[e.SKIN]),
                                this.addChild(this._seats[e.FACE]),
                                this.addChild(this._seats[e.HAIR]),
                                this.addChild(this._seats[e.HAIR_ACC]),
                                this.addChild(this._seats[e.HAT]),
                                this.addChild(this._seats[e.PANTS]),
                                this.addChild(this._seats[e.GLASSES]),
                                this.addChild(this._seats[e.SHOE]),
                                this.addChild(this._seats[e.CLOAK]),
                                this.addChild(this._seats[e.CLOTH]),
                                this.addChild(this._seats[e.GLOVES]),
                                this.addChild(this._seats[e.LEFT_HAND]),
                                this.addChild(this._seats[e.RIGHT_HAND]),
                                this.addChild(this._seats[e.EAR_RING]),
                                this.addChild(this._seats[e.ACC1]),
                                this.addChild(this._seats[e.ACC2]),
                                this.addChild(this._seats[e.RING]),
                                this.addChild(this._mountFrontContainer),
                                this.addChild(this._seats[e.ENVIRONMENT])
                        }
                        ,
                        i(e, [{
                            key: "mountID",
                            set: function(t) {
                                if (0 == t)
                                    return this._mountBackContainer.unload(),
                                        void this._mountFrontContainer.unload();
                                var s = a.DAZZLE_DRESS_RES_ROOT + "20/" + String(t) + "_2_pre.png"
                                    , i = a.DAZZLE_DRESS_RES_ROOT + "20/" + String(t) + "_1_pre.png";
                                this._mountBackContainer.setPath(s),
                                    this._mountFrontContainer.setPath(i)
                            }
                        }, {
                            key: "scaleX",
                            get: function() {
                                return this.getScale().x
                            },
                            set: function(t) {
                                this.setScale(t, this.getScale().y)
                            }
                        }, {
                            key: "scaleY",
                            get: function() {
                                return this.getScale().y
                            },
                            set: function(t) {
                                this.setScale(this.getScale().x, t)
                            }
                        }]),
                        e
                }(h));
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
                    e._RF.pop()
            }
        }
    }
));
