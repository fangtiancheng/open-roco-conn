System.register("chunks:///_virtual/VideoConverterBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
            ],
            execute: function() {
                n._RF.push({}, "9d87a4M0oJGpqKUY+7/JQgb", "VideoConverterBase", void 0);
                t("VideoConverterBase", function() {
                    function t() {
                        this._combatData = void 0,
                            this._data = void 0,
                            this._screen = void 0,
                            this._isadd = !0,
                            console.info("VideoConverterBase==constructor==" + this.constructor.name)
                    }
                    var n = t.prototype;
                    return n.getSegments = function() {
                        return null
                    }
                        ,
                        n.rest = function() {
                            this._combatData = null,
                                this._data = null,
                                this.screen = null
                        }
                        ,
                        e(t, [{
                            key: "combatData",
                            set: function(t) {
                                this._combatData = t
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                this._data = t
                            }
                        }, {
                            key: "screen",
                            get: function() {
                                return this._screen
                            },
                            set: function(t) {
                                this._screen = t
                            }
                        }, {
                            key: "isadd",
                            set: function(t) {
                                this._isadd = t
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
