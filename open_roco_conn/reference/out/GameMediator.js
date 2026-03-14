System.register("chunks:///_virtual/GameMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PureNotificationCenter.ts", "./Mediator.ts", "./GameProtocolManager.ts", "./GlobalAPI.ts"], (function(o) {
        var t, e, n, i, r, a;
        return {
            setters: [function(o) {
                t = o.inheritsLoose
            }
                , function(o) {
                    e = o.cclegacy
                }
                , function(o) {
                    n = o.PureNotificationCenter
                }
                , function(o) {
                    i = o.Mediator
                }
                , function(o) {
                    r = o.GameProtocolManager
                }
                , function(o) {
                    a = o.GlobalAPI
                }
            ],
            execute: function() {
                e._RF.push({}, "6b35dNNfZxEHpNm1hp2XcYw", "GameMediator", void 0);
                o("GameMediator", function(o) {
                    function e(t, e) {
                        var n;
                        return void 0 === t && (t = null),
                        void 0 === e && (e = null),
                            (n = o.call(this, t, e) || this).viewTable = new Map,
                            n.protocolManager = void 0,
                            n.protocolManager = r.instance,
                            n.onRegisterView(),
                            n
                    }
                    t(e, o);
                    var i = e.prototype;
                    return i.onRegister = function() {
                        a.gAngelSysAPI && a.gAngelSysAPI.getNetSysAPI() && this.onRegisterProtocol()
                    }
                        ,
                        i.onRemove = function() {
                            this.onUnregisterProtocol(),
                                this.viewTable.clear()
                        }
                        ,
                        i.listNotificationInterests = function() {
                            var o = this.onNotificationInterests();
                            return o.push("GlobalManagerDeon"),
                                o
                        }
                        ,
                        i.handleNotification = function(o) {
                            "GlobalManagerDeon" === o.getName() ? this.onRegisterProtocol() : this.onHandleNotification(o)
                        }
                        ,
                        i.getView = function(o) {
                            return this.viewTable.get(o)
                        }
                        ,
                        i.notify = function(o, t, e) {
                            void 0 === t && (t = null),
                            void 0 === e && (e = null),
                                n.sendNotification(o, t, e)
                        }
                        ,
                        i.getPropocol = function(o) {
                            return this.protocolManager.getPropocol(o)
                        }
                        ,
                        i.registerView = function(o) {
                            if (!this.viewTable.has(o)) {
                                var t = new o(this);
                                this.viewTable.set(o, t)
                            }
                        }
                        ,
                        i.registerProtocol = function(o) {
                            this.protocolManager.registerProtocol(o)
                        }
                        ,
                        i.unregisterProtocol = function(o) {
                            this.protocolManager.unregisterProtocol(o)
                        }
                        ,
                        e
                }(i));
                e._RF.pop()
            }
        }
    }
));
