System.register("chunks:///_virtual/Controller.ts", ["cc", "./Observer.ts", "./View.ts"], (function(t) {
        var n, e, i;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.Observer
                }
                , function(t) {
                    i = t.View
                }
            ],
            execute: function() {
                n._RF.push({}, "980dddbSMNM3os1pMYjAp0Z", "Controller", void 0);
                var o = t("Controller", function() {
                    function t(n) {
                        if (this.view = null,
                            this.commandMap = null,
                            this.multitonKey = null,
                            t.instanceMap[n])
                            throw Error(t.MULTITON_MSG);
                        t.instanceMap[n] = this,
                            this.multitonKey = n,
                            this.commandMap = {},
                            this.initializeController()
                    }
                    var n = t.prototype;
                    return n.initializeController = function() {
                        this.view = i.getInstance(this.multitonKey)
                    }
                        ,
                        n.executeCommand = function(t) {
                            var n = this.commandMap[t.getName()];
                            if (n) {
                                var e = new n;
                                e.initializeNotifier(this.multitonKey),
                                    e.execute(t)
                            }
                        }
                        ,
                        n.registerCommand = function(t, n) {
                            this.commandMap[t] || this.view.registerObserver(t, new e(this.executeCommand,this)),
                                this.commandMap[t] = n
                        }
                        ,
                        n.hasCommand = function(t) {
                            return null != this.commandMap[t]
                        }
                        ,
                        n.removeCommand = function(t) {
                            this.hasCommand(t) && (this.view.removeObserver(t, this),
                                delete this.commandMap[t])
                        }
                        ,
                        t.getInstance = function(n) {
                            return t.instanceMap[n] || (t.instanceMap[n] = new t(n)),
                                t.instanceMap[n]
                        }
                        ,
                        t.removeController = function(n) {
                            delete t.instanceMap[n]
                        }
                        ,
                        t
                }());
                o.MULTITON_MSG = "Controller instance for this multiton key already constructed!",
                    o.instanceMap = {},
                    n._RF.pop()
            }
        }
    }
));
