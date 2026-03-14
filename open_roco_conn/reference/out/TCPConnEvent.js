System.register("chunks:///_virtual/TCPConnEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(t) {
        var n, e, o;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "22670hsVHBI36HizIt3hiM6", "TCPConnEvent", void 0);
                var c = t("TCPConnEvent", function(t) {
                    function e(n, e, o, c) {
                        var r;
                        return void 0 === e && (e = 0),
                        void 0 === o && (o = !1),
                            (r = t.call(this, n, o) || this).__tcpID = 0,
                            r.dataType = 0,
                            r.__tcpID = e,
                            r
                    }
                    n(e, t);
                    var o = e.prototype;
                    return o.getTCPID = function() {
                        return this.__tcpID
                    }
                        ,
                        o.getADF = function() {
                            return this.data
                        }
                        ,
                        o.clone = function() {
                            var n = t.prototype.clone.call(this);
                            return n.dataType = this.dataType,
                                n
                        }
                        ,
                        e
                }(o));
                c.TCPCONN_CONNECTED = "tcpConnConnected",
                    c.TCPCONN_CLOSED = "tcpConnClosed",
                    c.TCPCONN_ERROR = "tcpConnError",
                    c.TCPCONN_ONADF = "tcpConnOnADF",
                    c.TCPCONN_TIMEOUT = "tcpConnTimeOut",
                    e._RF.pop()
            }
        }
    }
));
