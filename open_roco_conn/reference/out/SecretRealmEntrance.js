System.register("chunks:///_virtual/SecretRealmEntrance.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PureNotificationCenter.ts", "./SecretRealmMessage.ts"], (function(e) {
        var t, n, o, c, r, i, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e._decorator,
                        c = e.NodeEventType,
                        r = e.Component
                }
                , function(e) {
                    i = e.PureNotificationCenter
                }
                , function(e) {
                    a = e.SecretRealmMessage
                }
            ],
            execute: function() {
                var s;
                n._RF.push({}, "715e7vhWLpLp7tuo4mK4d66", "SecretRealmEntrance", void 0);
                var u = o.ccclass;
                o.property,
                    e("SecretRealmIconEntrance", u("SecretRealmIconEntrance")(s = function(e) {
                        function n() {
                            return e.apply(this, arguments) || this
                        }
                        t(n, e);
                        var o = n.prototype;
                        return o.onLoad = function() {
                            this.node.on(c.TOUCH_END, this.onTouchEnd, this)
                        }
                            ,
                            o.onTouchEnd = function() {
                                console.log("点击山海秘境图标");
                                try {
                                    i.sendNotification(a.SHOW_MASTER_VIEW)
                                } catch (e) {
                                    console.error("点击山海秘境图标失败", e)
                                }
                            }
                            ,
                            n
                    }(r)) || s);
                n._RF.pop()
            }
        }
    }
));
