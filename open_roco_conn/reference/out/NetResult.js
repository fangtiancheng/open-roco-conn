System.register("chunks:///_virtual/NetResult.ts", ["cc", "./BaseMessage.ts", "./ByteArray.ts"], (function(t) {
        var e, s, r;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    s = t.BaseMessage
                }
                , function(t) {
                    r = t.ByteArray
                }
            ],
            execute: function() {
                e._RF.push({}, "5db217VGJBH068gYaOxwtx9", "NetResult", void 0),
                    t("NetResult", function() {
                        function t(e) {
                            if (this.value = t.DefaultErrorCode,
                                this.msg = "",
                            null != e) {
                                if (e instanceof s) {
                                    var n = e.constructor.name;
                                    e.hasOwnProperty("retInfo") && e.retInfo ? (this.value = e.retInfo.retCode,
                                        e.retInfo.retMsg instanceof r ? (e.retInfo.retMsg.position = 0,
                                            this.msg = t.byteToString(e.retInfo.retMsg)) : "string" == typeof e.retInfo.retMsg && (this.msg = e.retInfo.retMsg)) : -1 != n.indexOf("RetInfo") && e.retCode ? (this.value = e.retCode,
                                        e.retMsg instanceof r ? (e.retMsg.position = 0,
                                            this.msg = t.byteToString(e.retMsg)) : "string" == typeof e.retMsg && (this.msg = e.retMsg)) : this.value = 0
                                } else if (e instanceof Object) {
                                    var i = e
                                        , o = i.result;
                                    if (o || (o = i.Result),
                                        Array.isArray(o)) {
                                        this.value = Number(o[0].value);
                                        try {
                                            this.msg = i.result[0].msg[0].toString()
                                        } catch (t) {
                                            this.msg = ""
                                        }
                                    } else {
                                        this.value = Number(o.value);
                                        try {
                                            this.msg = i.result.msg.toString()
                                        } catch (t) {
                                            this.msg = ""
                                        }
                                    }
                                }
                            } else
                                this.value = t.DefaultErrorCode
                        }
                        return t.byteToString = function(t, e) {
                            return void 0 === e && (e = "gb2312"),
                                t.position = 0,
                                t.readMultiByte(t.length, e)
                        }
                            ,
                            t
                    }()).DefaultErrorCode = -54581,
                    e._RF.pop()
            }
        }
    }
));
