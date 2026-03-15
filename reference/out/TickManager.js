System.register("chunks:///_virtual/TickManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts"], (function(t) {
        var i, s, n;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    n = t.EventDispatcher
                }
            ],
            execute: function() {
                s._RF.push({}, "0fe67VHHENGsaGrja8a71vo", "TickManager", void 0);
                t("TickManager", function(t) {
                    function s() {
                        var i;
                        return (i = t.call(this) || this).ticksList = void 0,
                            i.ticksList = [],
                            i
                    }
                    i(s, t);
                    var n = s.prototype;
                    return n.addTick = function(t) {
                        -1 == this.ticksList.indexOf(t) && this.ticksList.push(t)
                    }
                        ,
                        n.removeTick = function(t) {
                            var i = this.ticksList.indexOf(t);
                            -1 != i && this.ticksList.splice(i, 1)
                        }
                        ,
                        n.removeTickByID = function(t) {
                            for (var i = this.ticksList.length - 1; i >= 0; ) {
                                var s = this.ticksList[i];
                                if (s.getID() == t)
                                    return this.ticksList.splice(i, 1),
                                        s;
                                i--
                            }
                            return null
                        }
                        ,
                        n.getTickByID = function(t) {
                            for (var i = this.ticksList.length - 1; i >= 0; ) {
                                var s = this.ticksList[i];
                                if (s.getID() == t)
                                    return s;
                                i--
                            }
                            return null
                        }
                        ,
                        n.onTickEvent = function(t) {
                            for (var i = 0, s = this.ticksList.length; i < s; )
                                this.ticksList[i].onTick(),
                                    i++
                        }
                        ,
                        n.clear = function() {
                            this.ticksList = []
                        }
                        ,
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
