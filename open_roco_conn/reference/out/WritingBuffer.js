System.register("chunks:///_virtual/WritingBuffer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts", "./IllegalOperationError.ts", "./WriteUtils.ts"], (function(i) {
        var t, s, e, n, r;
        return {
            setters: [function(i) {
                t = i.inheritsLoose
            }
                , function(i) {
                    s = i.cclegacy
                }
                , function(i) {
                    e = i.ByteArray
                }
                , function(i) {
                    n = i.IllegalOperationError
                }
                , function(i) {
                    r = i.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "79386cl+P5NWI8wIBoJAlLa", "WritingBuffer", void 0);
                i("WritingBuffer", function(i) {
                    function s() {
                        var t;
                        return (t = i.call(this) || this).slices = new e,
                            t.littleEndian = !0,
                            t
                    }
                    t(s, i);
                    var o = s.prototype;
                    return o.beginBlock = function() {
                        this.slices.writeUnsignedInt(this.position);
                        var i = this.slices.length;
                        if (i % 8 != 4)
                            throw new n("error");
                        return this.slices.writeDouble(0),
                            this.slices.writeUnsignedInt(this.position),
                            i
                    }
                        ,
                        o.endBlock = function(i) {
                            if (this.slices.length % 8 != 0)
                                throw new n("error");
                            this.slices.writeUnsignedInt(this.position),
                                this.slices.position = i + 8;
                            var t = this.slices.readUnsignedInt();
                            this.slices.position = i,
                                this.slices.writeUnsignedInt(this.position),
                                r.writeTYPE_UINT32(this, this.position - t),
                                this.slices.writeUnsignedInt(this.position),
                                this.slices.position = this.slices.length,
                                this.slices.writeUnsignedInt(this.position)
                        }
                        ,
                        o.toNormal = function(i) {
                            if (this.slices.length % 8 != 0)
                                throw new n("error");
                            this.slices.position = 0;
                            for (var t = 0; this.slices.bytesAvailable > 0; ) {
                                var s = this.slices.readUnsignedInt();
                                if (s > t)
                                    i.writeBytes(this, t, s - t);
                                else if (s < t)
                                    throw new n("error");
                                t = this.slices.readUnsignedInt()
                            }
                            t < this.length && i.writeBytes(this, t)
                        }
                        ,
                        s
                }(e));
                s._RF.pop()
            }
        }
    }
));
