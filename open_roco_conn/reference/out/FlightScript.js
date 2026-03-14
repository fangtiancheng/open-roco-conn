System.register("chunks:///_virtual/FlightScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AScript.ts"], (function(t) {
        var c, o, e;
        return {
            setters: [function(t) {
                c = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    e = t.AScript
                }
            ],
            execute: function() {
                o._RF.push({}, "cc280oKplNBorcphV6NWOXH", "FlightScript", void 0);
                t("FlightScript", function(t) {
                    function o(c) {
                        return void 0 === c && (c = null),
                        t.call(this, c) || this
                    }
                    c(o, t);
                    var e = o.prototype;
                    return e.over = function(c) {
                        t.prototype.over.call(this)
                    }
                        ,
                        e.execute = function() {
                            console.log(this.constructor.name + "==execute"),
                                this.over()
                        }
                        ,
                        e.setData = function(t) {}
                        ,
                        o
                }(e));
                o._RF.pop()
            }
        }
    }
));
