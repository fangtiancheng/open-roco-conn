System.register("chunks:///_virtual/PetInfoProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts"], (function(t) {
        var e, n, o;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    o = t.ProtocolHelper
                }
            ],
            execute: function() {
                n._RF.push({}, "91786C/XL5CPYUA7VsgEdU5", "PetInfoProtocol", void 0);
                t("PetInfoProtocol", function() {
                    function t() {
                        this.m_petInfosArray = [],
                            this.id = 0,
                            this.code = null
                    }
                    var n = t.prototype;
                    return n.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        n.IAngelDataOutputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                        }
                        ,
                        n.read = function(t) {
                            if (this.code = o.ReadCode(t),
                            !this.code || !this.code.isError()) {
                                this.id = t.readUnsignedInt();
                                var e = t.readUnsignedShort();
                                this.m_petInfosArray = new Array(e);
                                for (var n = 0, r = e >> 2, i = 0; i < r; i++) {
                                    var s = t.readUnsignedByte();
                                    this.m_petInfosArray[n++] = s >> 6 & 3,
                                        this.m_petInfosArray[n++] = s >> 4 & 3,
                                        this.m_petInfosArray[n++] = s >> 2 & 3,
                                        this.m_petInfosArray[n++] = 3 & s
                                }
                                var a = 3 & e;
                                if (0 != a)
                                    for (var c = t.readUnsignedByte(), u = 0; u < a; u++)
                                        this.m_petInfosArray[n++] = c >> 6 - (u << 1) & 3
                            }
                        }
                        ,
                        n.write = function(t) {
                            t.writeInt(this.id)
                        }
                        ,
                        n.dispose = function() {
                            this.m_petInfosArray = []
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 4
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
