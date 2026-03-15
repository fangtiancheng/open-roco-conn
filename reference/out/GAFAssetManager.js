System.register("chunks:///_virtual/GAFAssetManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(t) {
        var e, s, r, n, a;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        r = t.assetManager,
                        n = t.Texture2D
                }
                , function(t) {
                    a = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "7e5eeteUqNEXpUyxFxcbDLB", "GAFAssetManager", void 0),
                    t("GAFAssetManager", function() {
                        function t() {
                            this.textures = new Map,
                                this.loadWaitList = new Map
                        }
                        var s = t.prototype;
                        return s.loadTexture2D = function(t, e) {
                            var s, a = this;
                            if (this.textures.has(t)) {
                                var u = this.textures.get(t);
                                if (u.refCount++,
                                    u.texture)
                                    return void (e && e(null, u.texture))
                            }
                            this.loadWaitList.has(t) ? (s = this.loadWaitList.get(t)).push(e) : (s = [],
                                this.loadWaitList.set(t, s),
                                s.push(e),
                                this.textures.set(t, {
                                    refCount: 1,
                                    texture: null
                                }),
                                r.loadRemote(t, (function(e, s) {
                                        var r = a.loadWaitList.get(t);
                                        if (e)
                                            for (var u = 0; u < r.length; u++) {
                                                var i = r[u];
                                                i && i(e, null)
                                            }
                                        else {
                                            var o = new n;
                                            o.reset({
                                                width: s.width,
                                                height: s.height,
                                                format: n.PixelFormat.RGBA4444
                                            }),
                                                o.uploadData(s.data),
                                                s.decRef(),
                                            a.textures.has(t) && (a.textures.get(t).texture = o);
                                            for (var l = 0; l < r.length; l++) {
                                                var h = r[l];
                                                h && h(null, o)
                                            }
                                        }
                                        a.loadWaitList.delete(t)
                                    }
                                )))
                        }
                            ,
                            s.hasTexture2D = function(t) {
                                return !!this.textures.has(t) && null !== this.textures.get(t).texture
                            }
                            ,
                            s.getTexture2D = function(t) {
                                if (this.textures.has(t)) {
                                    var e = this.textures.get(t);
                                    return e.refCount++,
                                        e.texture
                                }
                                return null
                            }
                            ,
                            s.release = function(t) {
                                if (this.textures.has(t)) {
                                    var e = this.textures.get(t);
                                    if (e.refCount--,
                                    e.refCount <= 0) {
                                        var s = e.texture;
                                        s && (1 == a.IS_LOCAL && console.error("GAFAssetManager => release:" + t),
                                            this.textures.delete(t),
                                            s.destroy())
                                    }
                                }
                            }
                            ,
                            e(t, null, [{
                                key: "Instance",
                                get: function() {
                                    return this._instance || (this._instance = new t),
                                        this._instance
                                }
                            }]),
                            t
                    }())._instance = void 0,
                    s._RF.pop()
            }
        }
    }
));
