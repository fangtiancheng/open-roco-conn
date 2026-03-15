System.register("chunks:///_virtual/FunctionCall.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var i, e;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
            ],
            execute: function() {
                e._RF.push({}, "309e3BUNoxD2IfCHhUo4LIQ", "FunctionCall", void 0);
                t("FunctionCall", function() {
                    function t() {
                        this.fullFileName = "",
                            this.fileLine = 0,
                            this.atFunction = "",
                            this.content = "",
                            this.eventId = 0,
                            this.eventIdString = "",
                            this.regFunction = "",
                            this.regObj = "",
                            this.regObjToString = ""
                    }
                    return t.prototype.dispose = function() {
                        this.fullFileName = null,
                            this.content = null,
                            this.atFunction = null,
                            this.eventIdString = null,
                            this.regFunction = null,
                            this.regObj = null,
                            this.regObjToString = null
                    }
                        ,
                        i(t, [{
                            key: "fileName",
                            get: function() {
                                if (this.fullFileName)
                                    for (var t = this.fullFileName.length - 1; t >= 0; t--) {
                                        var i = this.fullFileName.charAt(t);
                                        if ("\\" == i || "/" == i || "[" == i)
                                            return this.fullFileName.slice(t + 1)
                                    }
                                return this.fullFileName
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
