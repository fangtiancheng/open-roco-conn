System.register("chunks:///_virtual/GAFEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var n, e, i;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        i = t.Event
                }
            ],
            execute: function() {
                e._RF.push({}, "f4f27CEjGZNBbiOPF7Mewkt", "GAFEvent", void 0);
                t("GAFEvent", function(t) {
                    function e(n, e, i, u) {
                        var c;
                        return (c = t.call(this, n, e) || this).tag = null,
                            c.action = null,
                            c.action = u,
                            c.tag = i,
                            c
                    }
                    return n(e, t),
                        e
                }(i));
                e._RF.pop()
            }
        }
    }
));
