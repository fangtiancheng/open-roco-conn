System.register("chunks:///_virtual/Bubble.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./AgentNode.ts"], (function(t) {
        var e, n, i, s, o, h, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    i = t.cclegacy,
                        s = t.UITransform,
                        o = t.RichText
                }
                , function(t) {
                    h = t.default
                }
                , function(t) {
                    r = t.AgentNode
                }
            ],
            execute: function() {
                i._RF.push({}, "dc925hEtWVAIJVt4T33afp6", "Bubble", void 0),
                    t("Bubble", function(t) {
                        function i(e) {
                            var n;
                            return void 0 === e && (e = null),
                                (n = t.call(this) || this)._message = void 0,
                                n._content = void 0,
                                n._skin = void 0,
                                n._skinNode = void 0,
                                n._container = void 0,
                                n._target = h.Instance.getPrefabByName(n.PREFAB_PATH),
                                n._skinNode = n._target.getChildByName("skinNode"),
                                n._message = n._target.getChildByName("tfMessage").getComponent(o),
                                n.mouseEnabled = !1,
                                n.mouseChildren = !1,
                                n.setSkin(e),
                                n.initMessage(),
                                n
                        }
                        e(i, t);
                        var r = i.prototype;
                        return r.setContainer = function(t) {
                            this._container = t
                        }
                            ,
                            r.setVisible = function(t) {
                                null != this._container && (t && !this.contains() ? this._container.addChild(this._target) : !t && this.contains() && this._container.removeChild(this._target))
                            }
                            ,
                            r.contains = function() {
                                return this._target.parent && this._target.parent == this._container
                            }
                            ,
                            r.getVisible = function() {
                                return null != this._container && (this._target.parent && this._target.parent == this._container)
                            }
                            ,
                            r.dispose = function() {
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
                            r.setContent = function(t) {
                                var e, n, i;
                                if (null != t && (this.clearContent(),
                                "string" == typeof t)) {
                                    this._message.maxWidth = 0;
                                    var o = t;
                                    "#text#" == o.substr(0, 6) ? (o = o.substr(6),
                                        this._message.string = o) : this._message.string = o;
                                    this._message.node.getComponent(s).width;
                                    this._message.node.getComponent(s).width > 446 ? this._message.maxWidth = 446 : this._message.maxWidth = 0;
                                    this._message.node.getComponent(s).width;
                                    var h = Math.ceil(this._message.node.getComponent(s).width * this._message.node.scale.x)
                                        , r = Math.ceil(this._message.node.getComponent(s).height * this._message.node.scale.y);
                                    h % 2 == 1 && (h += 1),
                                    r % 2 == 1 && (r += 1),
                                        this._message.node.getComponent(s).width = h,
                                        this._message.node.getComponent(s).height = r,
                                        n = h + this._skin.borderWidth + 4,
                                        i = r + this._skin.borderHeight,
                                        this._skin.setSize(n, i);
                                    var a = (e = this._skin.contentRect).x + (this._skin.borderWidth >> 1)
                                        , _ = e.y + Math.ceil(this._skin.borderHeight / 2) + 1;
                                    this._message.node.setPosition(a + 2, _)
                                }
                            }
                            ,
                            r.clearContent = function() {
                                this._message.string = "",
                                null != this._content && (this._target.removeChild(this._content),
                                    this._content = null)
                            }
                            ,
                            r.getType = function() {
                                return 0
                            }
                            ,
                            r.setSkin = function(t) {
                                null != this._skin && (this._skinNode.removeChild(this._skin.display),
                                    this._skin.display.destroy(),
                                    this._skin = null),
                                null == t || (this._skin = t),
                                this._skin && this._skin.display && this._skinNode.addChild(this._skin.display)
                            }
                            ,
                            r.onRender = function(t) {}
                            ,
                            r.hasRender = function() {
                                return !1
                            }
                            ,
                            r.unload = function() {
                                this.dispose()
                            }
                            ,
                            r.initMessage = function() {}
                            ,
                            n(i, [{
                                key: "PREFAB_PATH",
                                get: function() {
                                    return "combatSys_1600/BubbleNode_1600"
                                }
                            }, {
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
                                    var e = this._target.getComponent(s);
                                    e.setContentSize(t, e.contentSize.height)
                                }
                            }, {
                                key: "height",
                                get: function() {
                                    return null != this._skin ? this._skin.contentRect.height - this._skin.contentRect.y : 0
                                },
                                set: function(t) {
                                    var e = this._target.getComponent(s);
                                    e.setContentSize(e.contentSize.width, t)
                                }
                            }]),
                            i
                    }(r)).TEXT_MAX_WIDTH = 150,
                    i._RF.pop()
            }
        }
    }
));
