System.register("chunks:///_virtual/SpiritKey.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var i, n;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
            ],
            execute: function() {
                n._RF.push({}, "954a9dplitMMIfV2gu1AWsE", "SpiritKey", void 0);
                t("SpiritKey", function() {
                    var t = n.prototype;
                    function n(t, i, n) {
                        void 0 === t && (t = 0),
                        void 0 === i && (i = 0),
                            this.spiritID = void 0,
                            this.catchTime = void 0,
                            this.spiritID = t,
                            this.catchTime = i
                    }
                    return t.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        t.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        t.write = function(t) {
                            t.writeUnsignedInt(this.spiritID),
                                t.writeUnsignedInt(this.catchTime)
                        }
                        ,
                        t.read = function(t) {
                            this.spiritID = t.readUnsignedInt(),
                                this.catchTime = t.readUnsignedInt()
                        }
                        ,
                        t.equal = function(t) {
                            return this.spiritID == t.spiritID && this.catchTime == t.catchTime
                        }
                        ,
                        i(n, [{
                            key: "length",
                            get: function() {
                                return 8
                            }
                        }]),
                        n
                }());
                n._RF.pop()
            }
        }
    }
));
