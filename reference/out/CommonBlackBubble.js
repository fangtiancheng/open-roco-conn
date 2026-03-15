System.register("chunks:///_virtual/CommonBlackBubble.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bubble.ts"], (function(t) {
        var e, n, o, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    u = t.Bubble
                }
            ],
            execute: function() {
                o._RF.push({}, "35c98z9K4FEHK88kH/wv4EC", "CommonBlackBubble", void 0);
                t("CommonBlackBubble", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return e(o, t),
                        o.prototype.setContent = function(e) {
                            t.prototype.setContent.call(this, e)
                        }
                        ,
                        n(o, [{
                            key: "PREFAB_PATH",
                            get: function() {
                                return "common/CommonBubbleNode_1600"
                            }
                        }]),
                        o
                }(u));
                o._RF.pop()
            }
        }
    }
));
