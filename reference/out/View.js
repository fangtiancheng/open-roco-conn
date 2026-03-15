System.register("chunks:///_virtual/View.ts", ["cc", "./Observer.ts"], (function(e) {
        var t, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.Observer
                }
            ],
            execute: function() {
                t._RF.push({}, "13c82qTyWBKgIdKqa8Y/WY5", "View", void 0);
                var r = e("View", function() {
                    function e(t) {
                        if (this.mediatorMap = null,
                            this.observerMap = null,
                            this.multitonKey = null,
                            e.instanceMap[t])
                            throw Error(e.MULTITON_MSG);
                        e.instanceMap[t] = this,
                            this.multitonKey = t,
                            this.mediatorMap = {},
                            this.observerMap = {},
                            this.initializeView()
                    }
                    var t = e.prototype;
                    return t.initializeView = function() {}
                        ,
                        t.registerObserver = function(e, t) {
                            var i = this.observerMap[e];
                            i ? i.push(t) : this.observerMap[e] = [t]
                        }
                        ,
                        t.removeObserver = function(e, t) {
                            for (var i = this.observerMap[e], r = i.length; r--; ) {
                                if (i[r].compareNotifyContext(t)) {
                                    i.splice(r, 1);
                                    break
                                }
                            }
                            0 == i.length && delete this.observerMap[e]
                        }
                        ,
                        t.notifyObservers = function(e) {
                            var t = e.getName()
                                , i = this.observerMap[t];
                            if (i)
                                for (var r = i.slice(0), n = r.length, a = 0; a < n; a++) {
                                    r[a].notifyObserver(e)
                                }
                        }
                        ,
                        t.registerMediator = function(e) {
                            var t = e.getMediatorName();
                            if (!this.mediatorMap[t]) {
                                e.initializeNotifier(this.multitonKey),
                                    this.mediatorMap[t] = e;
                                var r = e.listNotificationInterests()
                                    , n = r.length;
                                if (n > 0)
                                    for (var a = new i(e.handleNotification,e), o = 0; o < n; o++)
                                        this.registerObserver(r[o], a);
                                e.onRegister()
                            }
                        }
                        ,
                        t.retrieveMediator = function(e) {
                            return this.mediatorMap[e] || null
                        }
                        ,
                        t.removeMediator = function(e) {
                            var t = this.mediatorMap[e];
                            if (!t)
                                return null;
                            for (var i = t.listNotificationInterests(), r = i.length; r--; )
                                this.removeObserver(i[r], t);
                            return delete this.mediatorMap[e],
                                t.onRemove(),
                                t
                        }
                        ,
                        t.hasMediator = function(e) {
                            return null != this.mediatorMap[e]
                        }
                        ,
                        e.getInstance = function(t) {
                            return e.instanceMap[t] || (e.instanceMap[t] = new e(t)),
                                e.instanceMap[t]
                        }
                        ,
                        e.removeView = function(t) {
                            delete e.instanceMap[t]
                        }
                        ,
                        e
                }());
                r.MULTITON_MSG = "View instance for this multiton key already constructed!",
                    r.instanceMap = {},
                    t._RF.pop()
            }
        }
    }
));
