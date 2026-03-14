System.register("chunks:///_virtual/tagHelloPkg.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts"], (function(n) {
        var t, e, o;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    o = n.TCPTransmission
                }
            ],
            execute: function() {
                e._RF.push({}, "689bb19EjlJoLBZ9Cgpw1AL", "tagHelloPkg", void 0);
                n("tagHelloPkg", function(n) {
                    function e() {
                        return n.apply(this, arguments) || this
                    }
                    return t(e, n),
                        e
                }(o));
                e._RF.pop()
            }
        }
    }
));
