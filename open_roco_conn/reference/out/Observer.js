System.register("chunks:///_virtual/Observer.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "d05b1NGz21EwpKeac6IF5hC", "Observer", void 0);
                t("Observer", function() {
                    function t(t, e) {
                        this.notify = null,
                            this.context = null,
                            this.setNotifyMethod(t),
                            this.setNotifyContext(e)
                    }
                    var e = t.prototype;
                    return e.getNotifyMethod = function() {
                        return this.notify
                    }
                        ,
                        e.setNotifyMethod = function(t) {
                            this.notify = t
                        }
                        ,
                        e.getNotifyContext = function() {
                            return this.context
                        }
                        ,
                        e.setNotifyContext = function(t) {
                            this.context = t
                        }
                        ,
                        e.notifyObserver = function(t) {
                            this.getNotifyMethod().call(this.getNotifyContext(), t)
                        }
                        ,
                        e.compareNotifyContext = function(t) {
                            return t === this.context
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
