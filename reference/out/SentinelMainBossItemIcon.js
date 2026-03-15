System.register("chunks:///_virtual/SentinelMainBossItemIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts"], (function(n) {
        var t, e, o, c;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy,
                        o = n._decorator
                }
                , function(n) {
                    c = n.ItemIcon
                }
            ],
            execute: function() {
                var i;
                e._RF.push({}, "dc39e6YyXxKbL8vMgOe9AHM", "SentinelMainBossItemIcon", void 0);
                var s = o.ccclass;
                o.property,
                    n("SentinelMainBossItemIcon", s("SentinelMainBossItemIcon")(i = function(n) {
                        function e() {
                            return n.apply(this, arguments) || this
                        }
                        return t(e, n),
                            e.prototype.onInitParams = function(n) {}
                            ,
                            e
                    }(c)) || i);
                e._RF.pop()
            }
        }
    }
));
