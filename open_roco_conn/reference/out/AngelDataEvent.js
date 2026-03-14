System.register("chunks:///_virtual/AngelDataEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(t) {
        var e, n, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    a = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "df6a0YlQ9NKM7Zel9ab829O", "AngelDataEvent", void 0);
                var r = t("AngelDataEvent", function(t) {
                    function n(e, n, a) {
                        var r;
                        return void 0 === n && (n = !1),
                            (r = t.call(this, e, n) || this).tcpID = -1,
                            r.hasSerNum = !1,
                            r.dataType = 0,
                            r
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.getADF = function() {
                        return this.data
                    }
                        ,
                        a.clone = function() {
                            var e = t.prototype.clone.call(this);
                            return e.tcpID = this.tcpID,
                                e.hasSerNum = this.hasSerNum,
                                e.dataType = this.dataType,
                                e
                        }
                        ,
                        n
                }(a));
                r.TRYSENDADF = "trySendADF",
                    r.RECEIVEADF = "receiveADF",
                    n._RF.pop()
            }
        }
    }
));
