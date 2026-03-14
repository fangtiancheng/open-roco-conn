System.register("chunks:///_virtual/SeriseBubble.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./BuildLogHelper.ts", "./AgentNode.ts"], (function(t) {
        var n, e, i, s, o, r, a;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy,
                        s = t.UITransform
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    a = t.AgentNode
                }
            ],
            execute: function() {
                i._RF.push({}, "24cf8a0fZZOI5haP8ZjvENK", "SeriseBubble", void 0),
                    t("SeriseBubble", function(t) {
                        function i(n) {
                            var e;
                            (e = t.call(this) || this)._content = void 0,
                                e._skin = void 0,
                                e._skinNode = void 0,
                                e._container = void 0,
                                e._target = o.Instance.getPrefabByName("common/seriseTips_1600");
                            var i = e._target.getChildByName("Label");
                            return i && (i.active = !1),
                                e.mouseEnabled = !1,
                                e.mouseChildren = !1,
                                e
                        }
                        n(i, t);
                        var a = i.prototype;
                        return a.setContainer = function(t) {
                            this._container = t
                        }
                            ,
                            a.setVisible = function(t) {
                                null != this._container && (t && !this.contains() ? this._container.addChild(this._target) : !t && this.contains() && this._container.removeChild(this._target))
                            }
                            ,
                            a.contains = function() {
                                return this._target.parent && this._target.parent == this._container
                            }
                            ,
                            a.getVisible = function() {
                                return null != this._container && (this._target.parent && this._target.parent == this._container)
                            }
                            ,
                            a.dispose = function() {
                                this.clearContent(),
                                this._skin && (this._skin.display.removeFromParent(),
                                    this._skin.display.destroy(),
                                    this._skin = null),
                                null != this._content && (this._content.parent && this._content.removeFromParent(),
                                    this._content = null),
                                    this.setVisible(!1),
                                    this._container = null,
                                this._target && (this._target.parent && this._target.removeFromParent(),
                                    this._target.destroy(),
                                    this._target = null)
                            }
                            ,
                            a.setContent = function(t) {
                                if (null != t) {
                                    this.clearContent();
                                    var n = this.gotoAndStop(Number(t));
                                    if (n) {
                                        var e = n.getChildByName("Label");
                                        e && (1 == r.IS_LOCAL ? e.active = !0 : e.active = !1)
                                    }
                                }
                            }
                            ,
                            a.clearContent = function() {
                                null != this._content && (this._target.removeChild(this._content),
                                    this._content = null)
                            }
                            ,
                            a.getType = function() {
                                return 0
                            }
                            ,
                            a.setSkin = function(t) {
                                null != this._skin && (this._skinNode.removeChild(this._skin.display),
                                    this._skin.display.destroy(),
                                    this._skin = null),
                                null == t || (this._skin = t),
                                this._skin && this._skin.display && this._skinNode.addChild(this._skin.display)
                            }
                            ,
                            a.onRender = function(t) {}
                            ,
                            a.hasRender = function() {
                                return !1
                            }
                            ,
                            a.unload = function() {
                                this.dispose()
                            }
                            ,
                            a.initMessage = function() {}
                            ,
                            e(i, [{
                                key: "display",
                                get: function() {
                                    return this._target
                                }
                            }, {
                                key: "x",
                                get: function() {
                                    return null != this._skin ? this._target.getPosition().x + this._skin.contentRect.x : this._target.getPosition().x
                                },
                                set: function(t) {
                                    this._target.setPosition(t, this._target.getPosition().y)
                                }
                            }, {
                                key: "y",
                                get: function() {
                                    return null != this._skin ? this._target.getPosition().y + this._skin.contentRect.y : this._target.getPosition().y
                                },
                                set: function(t) {
                                    this._target.setPosition(this._target.getPosition().x, t)
                                }
                            }, {
                                key: "width",
                                get: function() {
                                    return null != this._skin ? this._skin.contentRect.width - this._skin.contentRect.x : 0
                                },
                                set: function(t) {
                                    var n = this._target.getComponent(s);
                                    n.setContentSize(t, n.contentSize.height)
                                }
                            }, {
                                key: "height",
                                get: function() {
                                    return null != this._skin ? this._skin.contentRect.height - this._skin.contentRect.y : 0
                                },
                                set: function(t) {
                                    var n = this._target.getComponent(s);
                                    n.setContentSize(n.contentSize.width, t)
                                }
                            }]),
                            i
                    }(a)).TEXT_MAX_WIDTH = 150,
                    i._RF.pop()
            }
        }
    }
));
