System.register("chunks:///_virtual/TimerEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        i = e.Event
                }
            ],
            execute: function() {
                n._RF.push({}, "273aeiPzxBA/K4cnY7p7s/6", "TimerEvent", void 0);
                var r = e("default", function(e) {
                    function n(t, n) {
                        var i;
                        return (i = e.call(this, t, n) || this).message = "",
                            i.data = void 0,
                            i
                    }
                    return t(n, e),
                        n.prototype.clone = function() {
                            var e = new n(this.type,this.bubbles);
                            return this.data && (e.data = this.data,
                                e.message = this.message),
                                e
                        }
                        ,
                        n
                }(i));
                r.TIMER = "TimerEvent.Timer",
                    r.TIMER_COMPLETE = "TimerEvent.TimerComplete",
                    n._RF.pop()
            }
        }
    }
));
