System.register("chunks:///_virtual/NodeExtend.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeSelector.ts", "./SpriteFrameSelector.ts", "./AgentNode.ts", "./EventNode.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, n, o, i, s, r, c, u, l, h, a, g, f, d;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        i = t.UITransform,
                        s = t.isValid,
                        r = t.Label,
                        c = t.RichText,
                        u = t.EditBox,
                        l = t.Sprite
                }
                , function(t) {
                    h = t.default
                }
                , function(t) {
                    a = t.default
                }
                , function(t) {
                    g = t.AgentNode
                }
                , function(t) {
                    f = t.EventNode
                }
                , function(t) {
                    d = t.default
                }
            ],
            execute: function() {
                o._RF.push({}, "8aba50AVNlHCp0eW5AOCqOs", "NodeExtend", void 0);
                t("NodeExtend", function(t) {
                    function o() {
                        var e;
                        return (e = t.call(this) || this)._parentNode = null,
                            e._selectable = !0,
                            e._filters = [],
                            e._smoothing = !0,
                        null == e.getComponent(i) && e.addComponent(i),
                        1 == d.IS_LOCAL && console.log(e.constructor.name + " be created"),
                            e
                    }
                    e(o, t);
                    var f = o.prototype;
                    return f.addChild = function(e) {
                        e || d.IS_LOCAL,
                            this != e ? (0 == this.isValid && d.IS_LOCAL,
                            0 == e.isValid && d.IS_LOCAL,
                                t.prototype.addChild.call(this, e)) : d.IS_LOCAL
                    }
                        ,
                        f.setChildIndex = function(t, e) {
                            this.insertChild(t, e)
                        }
                        ,
                        f.gotoAndStop = function(t) {
                            var e = this.getComponent(a);
                            e && e.gotoAndStop(t);
                            var n = this.getComponent(h);
                            n && n.gotoAndStop(t)
                        }
                        ,
                        f.addChildAt = function(t, e) {
                            this.insertChild(t, e)
                        }
                        ,
                        f.removeChildAt = function(t) {
                            if (this.numChildren > t) {
                                var e = this.getChildAt(t);
                                e ? this.removeChild(e) : console.error("No child found at index: " + t)
                            } else
                                console.error("Invalid node or index out of bounds")
                        }
                        ,
                        f.getChildAt = function(t) {
                            return this.children.length > t ? this.children[t] : null
                        }
                        ,
                        f.contains = function(t) {
                            for (var e = this.children.length, n = 0; n < e; n++) {
                                if (this.children[n] == t)
                                    return !0
                            }
                            return !1
                        }
                        ,
                        f.getChildIndex = function(t) {
                            return this.children.indexOf(t)
                        }
                        ,
                        n(o, [{
                            key: "parentNode",
                            get: function() {
                                return this.parent && 0 != s(this.parent) ? (this._parentNode || (this._parentNode = new g(this.parent)),
                                    this.parent && s(this.parent) ? (this._parentNode.target = this.parent,
                                        this._parentNode) : (this._parentNode = null,
                                        null)) : (this._parentNode = null,
                                    null)
                            },
                            set: function(t) {
                                throw new Error("[" + this.constructor.name + "]'s function [set parentNode] cannot be call.")
                            }
                        }, {
                            key: "x",
                            get: function() {
                                return this.getPosition().x
                            },
                            set: function(t) {
                                this.setPosition(t, this.getPosition().y)
                            }
                        }, {
                            key: "y",
                            get: function() {
                                return this.getPosition().y
                            },
                            set: function(t) {
                                this.setPosition(this.getPosition().x, t)
                            }
                        }, {
                            key: "width",
                            get: function() {
                                return this.getComponent(i).contentSize.width
                            },
                            set: function(t) {
                                var e = this.getComponent(i);
                                e.setContentSize(t, e.contentSize.height)
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return this.getComponent(i).contentSize.height
                            },
                            set: function(t) {
                                var e = this.getComponent(i);
                                e.setContentSize(e.contentSize.width, t)
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this.active
                            },
                            set: function(t) {
                                this.active = t
                            }
                        }, {
                            key: "selectable",
                            get: function() {
                                return this._selectable
                            },
                            set: function(t) {
                                this._selectable = t
                            }
                        }, {
                            key: "numChildren",
                            get: function() {
                                return this.children.length
                            },
                            set: function(t) {
                                throw new Error("[" + this.constructor.name + "]'s function [set numChildren] cannot be call.")
                            }
                        }, {
                            key: "text",
                            get: function() {
                                var t = this.getComponent(r);
                                return t ? t.string : ""
                            },
                            set: function(t) {
                                var e = this.getComponent(r);
                                e && (e.string = t);
                                var n = this.getComponent(c);
                                n && (n.string = t);
                                var o = this.getComponent(u);
                                o && (o.string = t)
                            }
                        }, {
                            key: "htmlText",
                            get: function() {
                                var t = this.getComponent(r);
                                if (t)
                                    return t.string;
                                var e = this.getComponent(c);
                                return e ? e.string : ""
                            },
                            set: function(t) {
                                var e = this.getComponent(c);
                                e && (e.string = t);
                                var n = this.getComponent(r);
                                n && (n.string = t)
                            }
                        }, {
                            key: "mouseEnabled",
                            get: function() {
                                return 1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function ==>get mouseEnabled"),
                                    !0
                            },
                            set: function(t) {
                                1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function ==>set mouseEnabled")
                            }
                        }, {
                            key: "buttonMode",
                            get: function() {
                                return 1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function ==>get buttonMode"),
                                    !0
                            },
                            set: function(t) {
                                1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function [set buttonMode].")
                            }
                        }, {
                            key: "useHandCursor",
                            get: function() {
                                return 1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function ==>get useHandCursor"),
                                    !0
                            },
                            set: function(t) {
                                1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function ==>set useHandCursor")
                            }
                        }, {
                            key: "mouseChildren",
                            get: function() {
                                return 1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function ==>get mouseChildren"),
                                    !0
                            },
                            set: function(t) {
                                1 == d.IS_LOCAL && console.log("[" + this.constructor.name + "]'s function ==>set mouseChildren")
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
                        }, {
                            key: "totalFrames",
                            get: function() {
                                var t = this.getComponent(a);
                                if (t)
                                    return t.totalFrames;
                                var e = this.getComponent(h);
                                return e ? e.totalFrames : void 0
                            },
                            set: function(t) {
                                throw new Error("[" + this.constructor.name + "]'s function [set totalFrames] cannot be call.")
                            }
                        }, {
                            key: "grayscale",
                            get: function() {
                                var t = this.getComponent(l);
                                return t ? t.grayscale : (1 == d.IS_LOCAL && console.error("[" + this.constructor.name + "]'s function [get grayscale's] Sprite is null."),
                                    !1)
                            },
                            set: function(t) {
                                var e = this.getComponent(l);
                                e ? e.grayscale = t : 1 == d.IS_LOCAL && console.error("[" + this.constructor.name + "]'s function [set grayscale's] Sprite is null.")
                            }
                        }, {
                            key: "filters",
                            get: function() {
                                return this._filters
                            },
                            set: function(t) {
                                Array.isArray(t) && (this._filters = t,
                                    0 == t.length ? this.grayscale = !1 : this.grayscale = !0)
                            }
                        }, {
                            key: "smoothing",
                            get: function() {
                                return this.smoothing
                            },
                            set: function(t) {
                                this._smoothing = t
                            }
                        }, {
                            key: "mask",
                            get: function() {
                                return null
                            },
                            set: function(t) {}
                        }]),
                        o
                }(f));
                o._RF.pop()
            }
        }
    }
));
