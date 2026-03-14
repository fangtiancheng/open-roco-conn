System.register("chunks:///_virtual/DisplayObjectGroup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
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
                n._RF.push({}, "1881eP0OChKY4ciaM1Ru0pJ", "DisplayObjectGroup", void 0);
                t("DisplayObjectGroup", function() {
                    function t() {
                        this._width = 0,
                            this._height = 0
                    }
                    var n = t.prototype;
                    return n.DisplayObjectGroup = function() {}
                        ,
                        n.calculate = function() {}
                        ,
                        e(t, [{
                            key: "width",
                            get: function() {
                                return 0
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return 0
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
