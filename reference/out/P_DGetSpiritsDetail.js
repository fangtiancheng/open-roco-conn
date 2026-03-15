System.register("chunks:///_virtual/P_DGetSpiritsDetail.ts", ["cc", "./ProtocolHelper.ts", "./STSpiritDetail.ts"], (function(t) {
        var i, e, r;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    e = t.ProtocolHelper
                }
                , function(t) {
                    r = t.STSpiritDetail
                }
            ],
            execute: function() {
                i._RF.push({}, "6033eJfXfNHRr+9oTzCexUz", "P_DGetSpiritsDetail", void 0);
                t("P_DGetSpiritsDetail", function() {
                    function t() {
                        this.code = void 0,
                            this.spirits = void 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        i.read = function(t) {
                            if (this.code = e.ReadCode(t),
                                !this.code.isError()) {
                                this.spirits = [];
                                for (var i = t.readUnsignedShort(), r = 0; r < i; r++)
                                    this.spirits.push(this.readSpiritDetail(t))
                            }
                        }
                        ,
                        i.readSpiritDetail = function(t) {
                            var i = new r;
                            return i.read(t),
                                i
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
