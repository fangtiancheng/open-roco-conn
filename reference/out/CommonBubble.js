System.register("chunks:///_virtual/CommonBubble.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bubble.ts"], (function(t) {
        var e, o, n, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    u = t.Bubble
                }
            ],
            execute: function() {
                n._RF.push({}, "3424es5BJ5IT64DlMVyDr5X", "CommonBubble", void 0);
                t("CommonBubble", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return e(n, t),
                        n.prototype.setContent = function(e) {
                            "string" == typeof e && (e = "<outline color=#3333CC width=4>" + e + "</outline>"),
                                t.prototype.setContent.call(this, e)
                        }
                        ,
                        o(n, [{
                            key: "PREFAB_PATH",
                            get: function() {
                                return "common/CommonBubbleNode_1600"
                            }
                        }]),
                        n
                }(u));
                n._RF.pop()
            }
        }
    }
));
