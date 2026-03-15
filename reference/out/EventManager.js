System.register("chunks:///_virtual/EventManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var n, t, a, s;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy,
                        a = e._decorator,
                        s = e.Component
                }
            ],
            execute: function() {
                var r, i;
                t._RF.push({}, "8b5aeeoMC5L8aPfSAxyLnpJ", "EventManager", void 0);
                var c = a.ccclass;
                a.property,
                    e("default", c("EventManager")(((i = function(e) {
                        function t() {
                            var n;
                            return (n = e.call(this) || this).eventsMap = {},
                                n
                        }
                        n(t, e);
                        var a = t.prototype;
                        return a.onLoad = function() {
                            null === t.Instance ? t.Instance = this : this.destroy()
                        }
                            ,
                            a.addEventListener = function(e, n, t) {
                                this.eventsMap[e] || (this.eventsMap[e] = []),
                                    this.eventsMap[e].push({
                                        caller: t,
                                        func: n
                                    })
                            }
                            ,
                            a.removeEventListener = function(e, n, t) {
                                if (this.eventsMap[e]) {
                                    for (var a = this.eventsMap[e], s = 0; s < a.length; s++) {
                                        var r = a[s];
                                        if (r.caller == t && r.func == n) {
                                            a.splice(s, 1);
                                            break
                                        }
                                    }
                                    a.length <= 0 && (this.eventsMap[e] = null)
                                }
                            }
                            ,
                            a.dispatchEvent = function(e, n) {
                                if (this.eventsMap[e])
                                    for (var t = this.eventsMap[e], a = 0; a < t.length; a++) {
                                        var s = t[a];
                                        s.func.call(s.caller, e, n)
                                    }
                            }
                            ,
                            t
                    }(s)).Instance = null,
                        r = i)) || r);
                t._RF.pop()
            }
        }
    }
));
