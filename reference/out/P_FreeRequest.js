System.register("chunks:///_virtual/P_FreeRequest.ts", ["cc", "./ProtocolHelper.ts"], (function(e) {
        var s, t;
        return {
            setters: [function(e) {
                s = e.cclegacy
            }
                , function(e) {
                    t = e.ProtocolHelper
                }
            ],
            execute: function() {
                s._RF.push({}, "2e5e0kr14lJRJPo+DDy7D/N", "P_FreeRequest", void 0),
                    e("P_FreeRequest", function() {
                        function e(e, s, t, n) {
                            void 0 === e && (e = -1),
                            void 0 === s && (s = null),
                            void 0 === t && (t = null),
                            void 0 === n && (n = null),
                                this.cmdID = 0,
                                this.data = void 0,
                                this.respondCls = void 0,
                                this.response = void 0,
                                this.serialNum = 0,
                                this.handler = void 0,
                                this.cmdID = e,
                                this.data = s,
                                this.handler = n,
                                "function" == typeof t ? this.respondCls = t : this.response = t
                        }
                        e.setNetSys = function(s) {
                            null != s && (e.__sys = s)
                        }
                        ;
                        var s = e.prototype;
                        return s.send = function(s, t) {
                            return void 0 === s && (s = !1),
                            void 0 === t && (t = -1),
                                null == e.__sys ? (console.log("[P_FreeRequest] 网络系统为空发送失败!"),
                                    0) : -1 == this.cmdID ? (console.log("[P_FreeRequest] 命令字错误发送失败!"),
                                    0) : e.__sys.trySendData(this.cmdID, this, s, t)
                        }
                            ,
                            s.decode = function(e) {
                                var s, t = e.body;
                                if (null != this.respondCls) {
                                    var n = new this.respondCls;
                                    n.read(t),
                                        s = n
                                } else
                                    null != this.response ? (this.response.read(t),
                                        s = this.response) : s = t;
                                return null != this.handler && (this.handler(s),
                                    e.head = null),
                                    s
                            }
                            ,
                            s.encode = function(e) {
                                void 0 === e && (e = -1);
                                var s = t.CreateADF(e);
                                return s.head.uiSerialNum = this.serialNum,
                                    s.body = this.data,
                                    s
                            }
                            ,
                            e
                    }()).__sys = void 0,
                    s._RF.pop()
            }
        }
    }
));
