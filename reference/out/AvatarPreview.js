System.register("chunks:///_virtual/AvatarPreview.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./DEFINE.ts", "./AImage.ts", "./EffectAvatarContainer.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, i, s, n, a, o, r, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    n = t.NodeExtend
                }
                , function(t) {
                    a = t.DEFINE
                }
                , function(t) {
                    o = t.AImage
                }
                , function(t) {
                    r = t.EffectAvatarContainer
                }
                , function(t) {
                    f = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "fdf78UiE55EJ45aSQQYPEoE", "AvatarPreview", void 0);
                var h = t("AvatarPreview", function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this)._seats = void 0,
                            e._effectContainerBottom = void 0,
                            e._effectContainerTop = void 0,
                            e._transformContainer = void 0,
                            e.init(),
                            e
                    }
                    e(s, t);
                    var n = s.prototype;
                    return n.init = function() {
                        this._seats = new Array(9);
                        for (var t = 0; t < this._seats.length; t++) {
                            var e = new o;
                            this._seats[t] = e
                        }
                        this._effectContainerBottom = new r(0),
                            this._effectContainerTop = new r(1),
                            this._transformContainer = new o,
                            this.addChild(this._effectContainerBottom),
                            this.addChild(this._seats[s.BACK - 1]),
                            this.addChild(this._seats[s.RIGHT_HAND - 1]),
                            this.addChild(this._seats[s.SKIN_COLOR - 1]),
                            this.addChild(this._seats[s.FEET - 1]),
                            this.addChild(this._seats[s.BODY - 1]),
                            this.addChild(this._seats[s.EMOTION - 1]),
                            this.addChild(this._seats[s.HEAD - 1]),
                            this.addChild(this._seats[s.FACE - 1]),
                            this.addChild(this._seats[s.LEFT_HAND - 1]),
                            this.addChild(this._transformContainer),
                            this.addChild(this._effectContainerTop)
                    }
                        ,
                        n.setAvatars = function(t, e, i, s) {
                            if (t.length > 0)
                                for (var n = t.length - 1; n >= 0; --n)
                                    this.setAvatar(t[n], e);
                            1 == f.IS_LOCAL && console.info("avatarEffectID==" + i),
                            1 == f.IS_LOCAL && console.info("avatarTransformID==" + s),
                                this.avatarEffectID = i,
                                this.avatarTransformID = s
                        }
                        ,
                        n.setAvatar = function(t, e) {
                            var i = a.getItemType(t, 1)
                                , s = this._seats[i - 1];
                            if (s)
                                if (t > 0) {
                                    var n = a.AVATAR_PREV_ROOT + i + "/" + String(t) + "_big.png";
                                    1 == f.IS_LOCAL && console.info("setAvatar==" + n),
                                        s.setPath(n)
                                } else
                                    s.unload()
                        }
                        ,
                        n.dispose = function() {
                            this.clear(),
                                this._seats = null
                        }
                        ,
                        n.clear = function() {
                            for (var t = this._seats.length, e = 0; e < t; ++e)
                                null != this._seats[e] && this._seats[e].unload();
                            this._effectContainerBottom.unload(),
                                this._effectContainerTop.unload(),
                                this._transformContainer.unload()
                        }
                        ,
                        i(s, [{
                            key: "showEffect",
                            set: function(t) {
                                this._transformContainer.active = t;
                                for (var e = 0; e < this._seats.length; ++e)
                                    null != this._seats[e] && (this._seats[e].active = !t);
                                this._effectContainerTop.active = !t,
                                    this._effectContainerBottom.active = !t
                            }
                        }, {
                            key: "avatarEffectID",
                            set: function(t) {
                                var e = a.getItemType(t, 1);
                                t > 0 ? (1 == f.IS_LOCAL && console.info("_effectContainerTop"),
                                    this._effectContainerTop.setPath(a.AVATAR_PREV_ROOT + e + "/" + String(t) + "_big.png"),
                                1 == f.IS_LOCAL && console.info("_effectContainerBottom"),
                                    this._effectContainerBottom.setPath(a.AVATAR_PREV_ROOT + e + "/" + String(t) + "_big.png")) : (this._effectContainerTop.unload(),
                                    this._effectContainerBottom.unload())
                            }
                        }, {
                            key: "avatarTransformID",
                            get: function() {
                                return this.avatarTransformID
                            },
                            set: function(t) {
                                var e = a.getItemType(t, 1);
                                t > 0 ? (this._transformContainer.setPath(a.AVATAR_PREV_ROOT + e + "/" + String(t) + "_big.png"),
                                    this.showEffect = !0) : (this._transformContainer.unload(),
                                    this.showEffect = !1)
                            }
                        }]),
                        s
                }(n));
                h.HEAD = 1,
                    h.FACE = 2,
                    h.BODY = 3,
                    h.FEET = 4,
                    h.BACK = 5,
                    h.LEFT_HAND = 6,
                    h.RIGHT_HAND = 7,
                    h.EMOTION = 8,
                    h.SKIN_COLOR = 9,
                    s._RF.pop()
            }
        }
    }
));
