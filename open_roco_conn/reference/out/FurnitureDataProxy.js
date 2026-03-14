System.register("chunks:///_virtual/FurnitureDataProxy.ts", ["cc", "./BuildLogHelper.ts", "./Constants.ts", "./FurnitureDes.ts"], (function(t) {
        var n, r, e, u;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    e = t.Constants
                }
                , function(t) {
                    u = t.FurnitureDes
                }
            ],
            execute: function() {
                n._RF.push({}, "7ccd0xmQM1J/pEYzqj6x+CF", "FurnitureDataProxy", void 0);
                t("FurnitureDataProxy", function() {
                    function t(t) {
                        this.xml = void 0,
                            this.dic = void 0,
                            this.dic = new Map,
                            this.processXML(t)
                    }
                    var n = t.prototype;
                    return n.processXML = function(t) {
                        if (!t)
                            throw r.IS_LOCAL,
                                new Error(this.constructor.name + "'s function [processXML] param is illegal");
                        for (var n = t, e = 0; e < n.Furniture.length; e++) {
                            var i = new u;
                            i.read(n.Furniture[e]),
                                this.dic[i.id] = i
                        }
                    }
                        ,
                        n.insert = function() {
                            return !1
                        }
                        ,
                        n.select = function() {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                n[r] = arguments[r];
                            return null != n && 0 == n.length ? this.dic : null != n && "number" == typeof n[0] ? this.dic[n[0]] : null
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
                            return e.FURNITURE_LIST_DATA
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
