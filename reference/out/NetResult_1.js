System.register("chunks:///_virtual/NetResult2.ts", ["cc", "./BaseMessage.ts", "./ByteArray.ts"], (function(t) {
        var e, r, s;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    r = t.BaseMessage
                }
                , function(t) {
                    s = t.ByteArray
                }
            ],
            execute: function() {
                e._RF.push({}, "70ffdFsCpZGN7mqKFYVG9sX", "NetResult", void 0);
                var n = function() {};
                t("NetResult", function() {
                    function t(t) {
                        this.DefaultErrorCode = -54581,
                            this.value = this.DefaultErrorCode,
                            this.msg = "",
                            null != t ? t instanceof n || t instanceof r && (t.hasOwnProperty("retInfo") && t.retInfo && 0 != t.retInfo.retCode ? (this.value = t.retInfo.retCode,
                                t.retInfo.retMsg instanceof s ? (t.retInfo.retMsg.position = 0,
                                    this.msg = this.byteToString(t.retInfo.retMsg)) : "string" == typeof t.retInfo.retMsg && (this.msg = t.retInfo.retMsg)) : this.value = 0) : this.value = this.DefaultErrorCode
                    }
                    return t.prototype.byteToString = function(t, e) {
                        return void 0 === e && (e = "gb2312"),
                            t.position = 0,
                            t.readMultiByte(t.length, e)
                    }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
