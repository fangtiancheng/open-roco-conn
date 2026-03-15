System.register("chunks:///_virtual/ADFHead.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IExternalizable.ts"], (function(e) {
        var t, n, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    i = e.IExternalizable
                }
            ],
            execute: function() {
                n._RF.push({}, "26ca636PJFKuLxmT7LSER+D", "ADFHead", void 0);
                var r = e("ADFHead", function(e) {
                    function n() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                            i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).version = 0,
                            t.cmdID = 0,
                            t.uin = 0,
                            t.uiSerialNum = 0,
                            t.checkSum = 0,
                            t.length = 0,
                            t
                    }
                    t(n, e),
                        n.canRead = function(e) {
                            return e.bytesAvailable < n.HeadLen ? n.NotEnBytes : e.readUnsignedByte() != n.magic >> 8 || e.readUnsignedByte() != (255 & n.magic) ? n.MagicError : n.HeadReady
                        }
                    ;
                    var i = n.prototype;
                    return i.readExternal = function(e) {
                        this.version = e.readUnsignedShort(),
                            this.cmdID = e.readUnsignedInt(),
                            this.uin = e.readUnsignedInt(),
                            this.uiSerialNum = e.readUnsignedInt(),
                            this.checkSum = e.readShort(),
                            this.length = e.readUnsignedShort()
                    }
                        ,
                        i.writeExternal = function(e) {
                            e.writeShort(n.magic),
                                e.writeShort(this.version),
                                e.writeUnsignedInt(this.cmdID),
                                e.writeUnsignedInt(this.uin),
                                e.writeUnsignedInt(this.uiSerialNum),
                                e.writeShort(this.checkSum),
                                e.writeShort(this.length)
                        }
                        ,
                        n
                }(i));
                r.NotEnBytes = 0,
                    r.MagicError = -1,
                    r.HeadReady = 1,
                    r.HeadLen = 20,
                    r.magic = 38183,
                    n._RF.pop()
            }
        }
    }
));
