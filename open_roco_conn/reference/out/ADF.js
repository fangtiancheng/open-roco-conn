System.register("chunks:///_virtual/ADF.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts", "./BuildLogHelper.ts", "./NetProcessor.ts", "./IllegalOperationError.ts", "./ADFHead.ts", "./IExternalizable.ts"], (function(t) {
        var e, n, i, r, a, o, s, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.ByteArray
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    a = t.NetProcessor
                }
                , function(t) {
                    o = t.IllegalOperationError
                }
                , function(t) {
                    s = t.ADFHead
                }
                , function(t) {
                    l = t.IExternalizable
                }
            ],
            execute: function() {
                n._RF.push({}, "4c4bdiyqNpDYbBHA/inxurd", "ADF", void 0);
                t("ADF", function(t) {
                    function n() {
                        var e;
                        return (e = t.call(this) || this).head = void 0,
                            e.body = void 0,
                            e.head = new s,
                            e
                    }
                    e(n, t);
                    var h = n.prototype;
                    return h.readExternal = function(t) {
                        this.head.readExternal(t);
                        var e = new i;
                        t.readBytes(e, 0, this.head.length),
                            this.body = e
                    }
                        ,
                        h.instanceofIAngelDataOutput = function(t) {
                            return !!t && void 0 !== t.IAngelDataOutputJudge
                        }
                        ,
                        h.writeExternal = function(t) {
                            var e;
                            if (null != this.body)
                                if (this.body instanceof i)
                                    e = this.body;
                                else {
                                    if (this.instanceofIAngelDataOutput(this.body) || this.body instanceof a) {
                                        var n = this.body;
                                        return this.head.length = n.length,
                                            this.head.writeExternal(t),
                                            void n.write(t)
                                    }
                                    if (!(this.body instanceof l))
                                        throw r.IS_LOCAL,
                                            new o("ADF对此" + String(this.body) + "的读写不支持!");
                                    e = new i,
                                        this.body.writeExternal(e)
                                }
                            null != e ? (this.head.length = e.length,
                                this.head.writeExternal(t),
                                t.writeBytes(e)) : (this.head.length = 0,
                                this.head.writeExternal(t))
                        }
                        ,
                        n
                }(l));
                n._RF.pop()
            }
        }
    }
));
