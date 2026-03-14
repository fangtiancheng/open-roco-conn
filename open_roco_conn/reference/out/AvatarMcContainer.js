System.register("chunks:///_virtual/AvatarMcContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts"], (function(n) {
        var o, t, e;
        return {
            setters: [function(n) {
                o = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    e = n.NodeExtend
                }
            ],
            execute: function() {
                t._RF.push({}, "591e4GZUv9M7qTlKLjvLimj", "AvatarMcContainer", void 0);
                n("AvatarMcContainer", function(n) {
                    function t(o) {
                        var t;
                        return (t = n.call(this) || this).mc = void 0,
                            t.id = void 0,
                            t.resURL = void 0,
                            t.completeCallback = void 0,
                            t.errorCallback = void 0,
                            t.resLoader = void 0,
                            t.swfDomain = void 0,
                            t.content = void 0,
                            t.mouseChildren = !1,
                            t.mouseEnabled = !1,
                            t.resURL = o,
                            t
                    }
                    o(t, n);
                    var e = t.prototype;
                    return e.setId = function(n) {
                        n != this.id && (this.unload(),
                            this.id = n)
                    }
                        ,
                        e.onResLoaded = function() {}
                        ,
                        e.play = function() {}
                        ,
                        e.stop = function() {}
                        ,
                        e.loadRes = function(n, o, t, e) {}
                        ,
                        e.onResLoadComplete = function(n) {}
                        ,
                        e.onResLoadedError = function(n) {}
                        ,
                        e.unload = function() {}
                        ,
                        e.reset = function() {}
                        ,
                        e.isClickThis = function(n) {
                            return !1
                        }
                        ,
                        t
                }(e));
                t._RF.pop()
            }
        }
    }
));
