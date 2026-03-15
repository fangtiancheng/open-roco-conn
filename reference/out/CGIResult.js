System.register("chunks:///_virtual/CGIResult.ts", ["cc"], (function(t) {
        var s;
        return {
            setters: [function(t) {
                s = t.cclegacy
            }
            ],
            execute: function() {
                s._RF.push({}, "7270afzm9JIlLSJK1EoDJyf", "CGIResult", void 0);
                t("CGIResult", (function(t) {
                        if (this.value = void 0,
                            this.msg = "",
                            this.DefaultErrorCode = -54581,
                        null != t) {
                            var s = null;
                            if (null != t.result ? s = t.result : null != t.Result && (s = t.Result),
                            null == s)
                                this.value = 0,
                                    this.msg = "";
                            else if (Array.isArray(s)) {
                                this.value = Number(s[0].value);
                                try {
                                    this.msg = t.result[0].msg[0].toString()
                                } catch (t) {
                                    this.msg = ""
                                }
                            } else {
                                this.value = Number(s.value);
                                try {
                                    this.msg = t.result.msg.toString()
                                } catch (t) {
                                    this.msg = ""
                                }
                            }
                        } else
                            this.value = this.DefaultErrorCode
                    }
                ));
                s._RF.pop()
            }
        }
    }
));
