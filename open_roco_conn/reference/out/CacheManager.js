System.register("chunks:///_virtual/CacheManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DefaultImgCache.ts"], (function(e) {
        var n, c, t;
        return {
            setters: [function(e) {
                n = e.createClass
            }
                , function(e) {
                    c = e.cclegacy
                }
                , function(e) {
                    t = e.DefaultImgCache
                }
            ],
            execute: function() {
                c._RF.push({}, "c8e6aP2NtxGf6y64lOyRNWJ", "CacheManager", void 0),
                    e("CacheManager", function() {
                        function e(e) {
                            if (this._cache = void 0,
                            e != a)
                                throw new Error("Invalid Singleton access. Use CacheManager.getInstance() instead.");
                            this._cache = new t
                        }
                        return e.getInstance = function() {
                            return null == e._instance && (e._instance = new e(a)),
                                e._instance
                        }
                            ,
                            n(e, [{
                                key: "cache",
                                get: function() {
                                    return this._cache
                                }
                            }]),
                            e
                    }())._instance = void 0;
                var a = function() {};
                c._RF.pop()
            }
        }
    }
));
