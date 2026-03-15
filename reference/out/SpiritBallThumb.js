System.register("chunks:///_virtual/SpiritBallThumb.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(i) {
        var t, e, n, _;
        return {
            setters: [function(i) {
                t = i.createClass,
                    e = i.inheritsLoose
            }
                , function(i) {
                    n = i.cclegacy
                }
                , function(i) {
                    _ = i.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "6be76ETFgFDCrWMGw/K5Yic", "SpiritBallThumb", void 0);
                var u = i("SpiritBallThumb", function() {
                    function i(i) {
                        this._ui = void 0,
                            this._spiritImage = void 0,
                            this._ui = new o(i),
                            this._ui.mouseEnabled = !1,
                            this._ui.mouseChildren = !1
                    }
                    var e = i.prototype;
                    return e.dispose = function() {}
                        ,
                        e.setSpiritImage = function(i) {
                            this._spiritImage.load(i)
                        }
                        ,
                        t(i, [{
                            key: "data",
                            set: function(i) {}
                        }]),
                        i
                }());
                u.SPIRIT_X = 0,
                    u.SPIRIT_Y = -10,
                    u.SPIRIT_WIDTH = 48,
                    u.SPIRIT_HEIGHT = 48,
                    u.NAME_TEXT_WIDTH = 100,
                    u.NAME_TEXT_X = -30,
                    u.NAME_TEXT_Y = 40,
                    u.HP_TEXT_FONT = "Tahoma",
                    u.HP_TEXT_WIDTH = 100,
                    u.HP_TEXT_X = -30,
                    u.HP_TEXT_Y = 53,
                    u.HP_BAR_X = -9,
                    u.HP_BAR_Y = 68,
                    u.HP_BAR_WIDTH = 60,
                    u.HP_BAR_HEIGHT = 6;
                var o = function(i) {
                    function t() {
                        return i.apply(this, arguments) || this
                    }
                    return e(t, i),
                        t
                }(_);
                n._RF.pop()
            }
        }
    }
));
