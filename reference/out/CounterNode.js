System.register("chunks:///_virtual/CounterNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
        var e, o, t;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    o = n.cclegacy,
                        t = n.Node
                }
            ],
            execute: function() {
                o._RF.push({}, "3a613CMIIZISZQlG15TEMZA", "CounterNode", void 0),
                    n("CounterNode", function(n) {
                        function o() {
                            var e;
                            return (e = n.call(this) || this).aname = "AngelTcpConnection",
                                e.aname = e.aname + o._constructorCounter,
                                console.log(e.constructor.name + "’s name is :" + e.aname),
                                o._constructorCounter++,
                                e
                        }
                        return e(o, n),
                            o
                    }(t))._constructorCounter = 0,
                    o._RF.pop()
            }
        }
    }
));
