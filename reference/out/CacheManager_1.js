System.register("chunks:///_virtual/CacheManager2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DefaultImgCache.ts"], (function(n) {
        var e, t, c;
        return {
            setters: [function(n) {
                e = n.createClass
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    c = n.DefaultImgCache
                }
            ],
            execute: function() {
                t._RF.push({}, "5b947VwGMtJpYDzhmR/Dnw+", "CacheManager", void 0),
                    n("CacheManager", function() {
                        function n(n) {
                            if (this._cache = void 0,
                            null == n)
                                throw new Error("CacheManager can not be instantiated.");
                            this._cache = new c
                        }
                        return n.getInstance = function() {
                            return null == this._instance ? new n(new a) : this._instance
                        }
                            ,
                            e(n, [{
                                key: "cache",
                                get: function() {
                                    return this._cache
                                }
                            }]),
                            n
                    }())._instance = void 0;
                var a = function() {};
                t._RF.pop()
            }
        }
    }
));
