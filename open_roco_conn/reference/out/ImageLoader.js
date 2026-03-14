System.register("chunks:///_virtual/ImageLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DefaultImgCache.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, n, o, i, r, a, d, c, s, _, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e._decorator,
                        i = e.Sprite,
                        r = e.Node,
                        a = e.Component,
                        d = e.ImageAsset,
                        c = e.SpriteFrame,
                        s = e.Texture2D
                }
                , function(e) {
                    _ = e.DefaultImgCache
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                var h;
                n._RF.push({}, "d6d03BhbgtERKCcq5oivcQU", "ImageLoader", void 0);
                var l = o.ccclass
                    , p = (o.property,
                    e("SubNode", function(e) {
                        function n() {
                            return e.apply(this, arguments) || this
                        }
                        t(n, e);
                        var o = n.prototype;
                        return o.onDestory = function() {
                            u.IS_LOCAL
                        }
                            ,
                            o.onDestroy = function() {
                                u.IS_LOCAL
                            }
                            ,
                            n
                    }(r)));
                e("NodeSister", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    return t(n, e),
                        n.prototype.start = function() {
                            console.log("NodeSister")
                        }
                        ,
                        n
                }(a)),
                    e("default", l("ImageLoader")(h = function(e) {
                        function n() {
                            for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                                o[i] = arguments[i];
                            return (t = e.call.apply(e, [this].concat(o)) || this).url = "https://oops-1255342636.cos-website.ap-shanghai.myqcloud.com/img/bg.png",
                                t.cacheMap = new Map,
                                t._node1 = void 0,
                                t._node2 = void 0,
                                t._node3 = void 0,
                                t._spFrame = null,
                                t._image = void 0,
                                t._image1 = void 0,
                                t._cache = void 0,
                                t
                        }
                        t(n, e);
                        var o = n.prototype;
                        return o.start = function() {
                            this._cache = new _
                        }
                            ,
                            o.run = function() {
                                var e = this;
                                this.createNode1();
                                var t = this._node1.getComponent(i);
                                t.spriteFrame = this._cache.find("cza"),
                                    t.spriteFrame.addRef(),
                                    this._cache.checkCache(),
                                    setTimeout((function() {
                                            var t = e._node1.getComponent(i);
                                            t.spriteFrame.decRef(),
                                                t.spriteFrame = null,
                                                e._cache.checkCache()
                                        }
                                    ), 1e3),
                                    setTimeout((function() {
                                            e._cache.checkCache()
                                        }
                                    ), 2e3)
                            }
                            ,
                            o.onLoad = function() {}
                            ,
                            o.createNode1 = function() {
                                this._node1 = new p,
                                    this._node1.__name__ = "____node1____",
                                    this.node.addChild(this._node1);
                                var e = this._node1.addComponent(i);
                                e.sizeMode = i.SizeMode.RAW,
                                    e.trim = !1
                            }
                            ,
                            o.createNode2 = function() {
                                this._node2 = new r,
                                    this._node2.__name__ = "____node2____",
                                    this._node2.setPosition(500, 500),
                                    this.node.addChild(this._node2);
                                var e = this._node2.addComponent(i);
                                e.sizeMode = i.SizeMode.RAW,
                                    e.trim = !1
                            }
                            ,
                            o.createNode3 = function() {
                                this._node3 = new r,
                                    this._node3.__name__ = "____node3____",
                                    this._node3.setPosition(0, 0),
                                    this.node.addChild(this._node3);
                                var e = this._node3.addComponent(i);
                                e.sizeMode = i.SizeMode.RAW,
                                    e.trim = !1
                            }
                            ,
                            n.fillSpriteFrame = function(e) {
                                if (null == e || null == e)
                                    return null;
                                if (e instanceof d) {
                                    var t = new c
                                        , n = new s;
                                    return n.image = e,
                                        t.texture = n,
                                        t
                                }
                                return null
                            }
                            ,
                            n
                    }(a)) || h);
                n._RF.pop()
            }
        }
    }
));
