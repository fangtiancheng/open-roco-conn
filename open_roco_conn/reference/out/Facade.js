System.register("chunks:///_virtual/Facade.ts", ["cc", "./Controller.ts", "./Model.ts", "./View.ts", "./Notification.ts"], (function(i) {
        var t, e, n, o, r;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
                , function(i) {
                    e = i.Controller
                }
                , function(i) {
                    n = i.Model
                }
                , function(i) {
                    o = i.View
                }
                , function(i) {
                    r = i.Notification
                }
            ],
            execute: function() {
                t._RF.push({}, "86912N9ZMtKjIDNEeTRkgb2", "Facade", void 0);
                var s = i("Facade", function() {
                    function i(t) {
                        if (this.model = null,
                            this.view = null,
                            this.controller = null,
                            this.multitonKey = null,
                            i.instanceMap[t])
                            throw Error(i.MULTITON_MSG);
                        this.initializeNotifier(t),
                            i.instanceMap[t] = this,
                            this.initializeFacade()
                    }
                    var t = i.prototype;
                    return t.initializeFacade = function() {
                        this.initializeModel(),
                            this.initializeController(),
                            this.initializeView()
                    }
                        ,
                        t.initializeModel = function() {
                            this.model || (this.model = n.getInstance(this.multitonKey))
                        }
                        ,
                        t.initializeController = function() {
                            this.controller || (this.controller = e.getInstance(this.multitonKey))
                        }
                        ,
                        t.initializeView = function() {
                            this.view || (this.view = o.getInstance(this.multitonKey))
                        }
                        ,
                        t.registerCommand = function(i, t) {
                            this.controller.registerCommand(i, t)
                        }
                        ,
                        t.removeCommand = function(i) {
                            this.controller.removeCommand(i)
                        }
                        ,
                        t.hasCommand = function(i) {
                            return this.controller.hasCommand(i)
                        }
                        ,
                        t.registerProxy = function(i) {
                            this.model.registerProxy(i)
                        }
                        ,
                        t.retrieveProxy = function(i) {
                            return this.model.retrieveProxy(i)
                        }
                        ,
                        t.removeProxy = function(i) {
                            var t;
                            return this.model && (t = this.model.removeProxy(i)),
                                t
                        }
                        ,
                        t.hasProxy = function(i) {
                            return this.model.hasProxy(i)
                        }
                        ,
                        t.registerMediator = function(i) {
                            this.view && this.view.registerMediator(i)
                        }
                        ,
                        t.retrieveMediator = function(i) {
                            return this.view.retrieveMediator(i)
                        }
                        ,
                        t.removeMediator = function(i) {
                            var t;
                            return this.view && (t = this.view.removeMediator(i)),
                                t
                        }
                        ,
                        t.hasMediator = function(i) {
                            return this.view.hasMediator(i)
                        }
                        ,
                        t.notifyObservers = function(i) {
                            this.view && this.view.notifyObservers(i)
                        }
                        ,
                        t.sendNotification = function(i, t, e) {
                            void 0 === t && (t = null),
                            void 0 === e && (e = null),
                                this.notifyObservers(new r(i,t,e))
                        }
                        ,
                        t.initializeNotifier = function(i) {
                            this.multitonKey = i
                        }
                        ,
                        i.getInstance = function(t) {
                            return i.instanceMap[t] || (i.instanceMap[t] = new i(t)),
                                i.instanceMap[t]
                        }
                        ,
                        i.hasCore = function(t) {
                            return !!i.instanceMap[t]
                        }
                        ,
                        i.removeCore = function(t) {
                            i.instanceMap[t] && (n.removeModel(t),
                                o.removeView(t),
                                e.removeController(t),
                                delete i.instanceMap[t])
                        }
                        ,
                        i
                }());
                s.MULTITON_MSG = "Facade instance for this multiton key already constructed!",
                    s.instanceMap = {},
                    t._RF.pop()
            }
        }
    }
));
