System.register("chunks:///_virtual/P_SubBC_Paths.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts"], (function(t) {
        var e, n, i;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.DEFINE
                }
            ],
            execute: function() {
                n._RF.push({}, "0669ehGHgZCtLK73XeTWuSC", "P_SubBC_Paths", void 0);
                t("P_SubBC_Paths", function() {
                    function t() {
                        this.uin = void 0,
                            this.sceneID = void 0,
                            this.bcType = 0,
                            this.paths = void 0
                    }
                    var n = t.prototype;
                    return n.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        n.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        n.write = function(t) {
                            t.writeShort(this.sceneID),
                                t.writeByte(this.bcType);
                            var e = this.paths.length;
                            t.writeShort(e);
                            for (var n = 0; n < e; n++)
                                i.WritePoint(t, this.paths[n])
                        }
                        ,
                        n.read = function(t) {
                            this.uin = t.readUnsignedInt(),
                                this.sceneID = t.readUnsignedShort(),
                                this.bcType = t.readByte();
                            var e = t.readUnsignedShort();
                            this.paths = [];
                            for (var n = 0; n < e; n++)
                                this.paths.push(i.ReadPoint(t))
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 5 + 4 * this.paths.length
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
