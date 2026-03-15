System.register("chunks:///_virtual/GameUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./GameProtocolManager.ts", "./PureNotificationCenter.ts"], (function(t) {
        var n, e, o, r, i, u, c;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        r = t.Component
                }
                , function(t) {
                    i = t.GameViewProxy
                }
                , function(t) {
                    u = t.GameProtocolManager
                }
                , function(t) {
                    c = t.PureNotificationCenter
                }
            ],
            execute: function() {
                o._RF.push({}, "3a032ogyaFJZZlkpxKCNraz", "GameUI", void 0);
                var a = t("GameSubUI", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    n(e, t);
                    var o = e.prototype;
                    return o.getPropocol = function(t) {
                        return u.instance.getPropocol(t)
                    }
                        ,
                        o.notify = function(t, n, e) {
                            void 0 === n && (n = null),
                            void 0 === e && (e = null),
                                c.sendNotification(t, n, e)
                        }
                        ,
                        e
                }(r));
                t("GameUI", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return n(o, t),
                        e(o, [{
                            key: "currMediator",
                            get: function() {
                                return this.node.getComponent(i).currMediator
                            }
                        }]),
                        o
                }(a));
                o._RF.pop()
            }
        }
    }
));
