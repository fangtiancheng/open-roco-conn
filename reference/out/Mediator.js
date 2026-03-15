System.register("chunks:///_virtual/Mediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Notifier.ts"], (function(t) {
        var n, e, o;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.Notifier
                }
            ],
            execute: function() {
                e._RF.push({}, "8c2f7CTC/1JyLfXbzg7kQ/m", "Mediator", void 0),
                    t("Mediator", function(t) {
                        function e(n, o) {
                            var i;
                            return void 0 === n && (n = null),
                            void 0 === o && (o = null),
                                (i = t.call(this) || this).mediatorName = null,
                                i.viewComponent = null,
                                i.mediatorName = null != n ? n : e.NAME,
                                i.viewComponent = o,
                                i
                        }
                        n(e, t);
                        var o = e.prototype;
                        return o.getMediatorName = function() {
                            return this.mediatorName
                        }
                            ,
                            o.getViewComponent = function() {
                                return this.viewComponent
                            }
                            ,
                            o.setViewComponent = function(t) {
                                this.viewComponent = t
                            }
                            ,
                            o.listNotificationInterests = function() {
                                return new Array
                            }
                            ,
                            o.handleNotification = function(t) {}
                            ,
                            o.onRegister = function() {}
                            ,
                            o.onRemove = function() {}
                            ,
                            e
                    }(o)).NAME = "Mediator",
                    e._RF.pop()
            }
        }
    }
));
