System.register("chunks:///_virtual/GlobalEventDispatcher.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts"], (function(n) {
        var t, e, i;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    i = n.EventDispatcher
                }
            ],
            execute: function() {
                e._RF.push({}, "5f938bM9EVJMp8G0rpJWWQ5", "GlobalEventDispatcher", void 0),
                    n("GlobalEventDispatcher", function(n) {
                        function e(t) {
                            return n.call(this) || this
                        }
                        return t(e, n),
                            e.getInstance = function() {
                                return null == this._instance && (this._instance = new e(new c)),
                                    this._instance
                            }
                            ,
                            e
                    }(i))._instance = void 0;
                var c = function() {};
                e._RF.pop()
            }
        }
    }
));
