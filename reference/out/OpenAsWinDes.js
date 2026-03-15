System.register("chunks:///_virtual/OpenAsWinDes.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NPCCDConvert.ts"], (function(n) {
        var i, t, e;
        return {
            setters: [function(n) {
                i = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    e = n.NPCCDConvert
                }
            ],
            execute: function() {
                t._RF.push({}, "6865bL2x6dFxZgNbE4Aiu9J", "OpenAsWinDes", void 0);
                n("OpenAsWinDes", function(n) {
                    function t() {
                        for (var i, t = arguments.length, e = new Array(t), s = 0; s < t; s++)
                            e[s] = arguments[s];
                        return (i = n.call.apply(n, [this].concat(e)) || this).winPos = void 0,
                            i.src = void 0,
                            i.name = void 0,
                            i.isModal = void 0,
                            i.params = void 0,
                            i.created = void 0,
                            i.cache = void 0,
                            i.xmlScriptParams = void 0,
                            i
                    }
                    i(t, n);
                    var e = t.prototype;
                    return e.dispose = function() {
                        this.winPos = null,
                            this.src = null,
                            this.name = null,
                            this.params = null,
                            this.created = null
                    }
                        ,
                        e.tranNPCClickDes = function(n) {}
                        ,
                        t
                }(e));
                t._RF.pop()
            }
        }
    }
));
