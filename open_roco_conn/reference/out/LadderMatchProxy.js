System.register("chunks:///_virtual/LadderMatchProxy.ts", ["cc", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Constants.ts", "./Config.ts"], (function(t) {
        var n, e, r, o, i;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.GlobalAPI
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    i = t.Config
                }
            ],
            execute: function() {
                n._RF.push({}, "3658dmxcNlHn5FsrDKODMQP", "LadderMatchProxy", void 0);
                t("LadderMatchProxy", function() {
                    function t(t) {
                        this.db = void 0,
                            this.listdb = void 0;
                        var n = e.getTimer();
                        this.db = new Map,
                            this.listdb = [],
                            this.processXML(t),
                        CONFIG.DEBUG && console.log("[LadderMatchProxy]解析:", e.getTimer() - n)
                    }
                    var n = t.prototype;
                    return n.processXML = function(t) {
                        if (!t)
                            throw r.IS_LOCAL,
                                new Error(this.constructor.name + "'s function [processXML] param is illegal");
                        var n = t.json.LadderMatchConfig;
                        i.init(n)
                    }
                        ,
                        n.insert = function() {
                            return !1
                        }
                        ,
                        n.select = function() {
                            return "*" == (arguments.length <= 0 ? void 0 : arguments[0]) ? this.listdb : this.db[Number(arguments.length <= 0 ? void 0 : arguments[0])]
                        }
                        ,
                        n.update = function() {
                            return !1
                        }
                        ,
                        n.deleted = function() {
                            return !1
                        }
                        ,
                        n.clear = function() {}
                        ,
                        n.getName = function() {
                            return o.LADDER_MATCH_DATA
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
