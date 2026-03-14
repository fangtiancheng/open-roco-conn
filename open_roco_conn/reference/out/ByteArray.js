System.register("chunks:///_virtual/ByteArray.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./pako.esm.mjs", "./BuildLogHelper.ts", "./amf.ts"], (function(t) {
        var e, i, n, s, r;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.default
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    r = t.amf
                }
            ],
            execute: function() {
                i._RF.push({}, "6aa3clmfLZDQLiqwyNrV2Kk", "ByteArray", void 0),
                    t("ByteArray", function() {
                        function t(t) {
                            void 0 === t && (t = 8192),
                                this.endian = "",
                                this.objectEncoding = 0,
                                this._littleEndian = !1,
                                this._dv = void 0,
                                this._buffer = void 0,
                                this._byteOffset = 0,
                                this._length = 0,
                                this.byteOffset = 0,
                                "number" == typeof t ? (this._buffer = new ArrayBuffer(t),
                                    this._length = 0) : (this._buffer = t,
                                    this._length = this._buffer.byteLength),
                                this._dv = new DataView(this._buffer)
                        }
                        var i = t.prototype;
                        return i.allocate = function(t) {
                            this._buffer = new ArrayBuffer(8192),
                                this._length = 0,
                                this._dv = new DataView(this._buffer)
                        }
                            ,
                            i.writeString = function(t, e, i) {
                                for (var n = 0, s = t.length; n < s; n++) {
                                    var r = t.charCodeAt(n);
                                    this.writeInt16(r, this.littleEndian)
                                }
                            }
                            ,
                            i.readString = function(t, e, i) {
                                void 0 === i && (i = "utf8");
                                var n = new TextDecoder(i.length > 0 ? i : "utf-8").decode(this.buffer.slice(this._byteOffset, this._byteOffset + t));
                                return this.byteOffset += t,
                                    n
                            }
                            ,
                            i.toString = function(t, e, i) {
                                void 0 === i && (i = "utf8");
                                var n = new TextDecoder(i.length > 0 ? i : "utf-8").decode(this.buffer.slice(this._byteOffset, this._byteOffset + t));
                                return this.byteOffset += t,
                                    n
                            }
                            ,
                            i.readFixedString = function(t, e, i) {
                                void 0 === i && (i = "utf8");
                                var n = new TextDecoder(i.length > 0 ? i : "utf-8")
                                    , s = new Uint8Array(this.buffer.slice(this._byteOffset, this._byteOffset + t)).filter((function(t) {
                                        return 0 != t
                                    }
                                ))
                                    , r = n.decode(s);
                                return this.byteOffset += t,
                                    r
                            }
                            ,
                            i.writeInt8 = function(t) {
                                this._dv.setInt8(this.byteOffset, t),
                                    this.byteOffset += 1,
                                    this._length += 1
                            }
                            ,
                            i.readInt8 = function() {
                                var t = this.byteOffset;
                                return this.byteOffset += 1,
                                    this._dv.getInt8(t)
                            }
                            ,
                            i.writeUint8 = function(t) {
                                this._dv.setUint8(this.byteOffset, t),
                                    this.byteOffset += 1,
                                    this._length += 1
                            }
                            ,
                            i.readUint8 = function() {
                                var t = this.byteOffset;
                                return this.byteOffset += 1,
                                    this._dv.getUint8(t)
                            }
                            ,
                            i.readUInt8 = function() {
                                return this.readUint8()
                            }
                            ,
                            i.writeInt16 = function(t, e) {
                                this._dv.setInt16(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 2,
                                    this._length += 2
                            }
                            ,
                            i.readInt16 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 2,
                                    this._dv.getInt16(e, this.littleEndian)
                            }
                            ,
                            i.readInt16BE = function() {
                                return this.readInt16(!1)
                            }
                            ,
                            i.writeUint16 = function(t, e) {
                                this._dv.setUint16(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 2,
                                    this._length += 2
                            }
                            ,
                            i.readUint16 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 2,
                                    this._dv.getUint16(e, this.littleEndian)
                            }
                            ,
                            i.readUint16BE = function() {
                                return this.readUint16(!1)
                            }
                            ,
                            i.readUInt16BE = function() {
                                return this.readUint16(!1)
                            }
                            ,
                            i.writeInt32 = function(t, e) {
                                this._dv.setInt32(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 4,
                                    this._length += 4
                            }
                            ,
                            i.readInt32 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 4,
                                    this._dv.getInt32(e, this.littleEndian)
                            }
                            ,
                            i.writeUint32 = function(t, e) {
                                this._dv.setUint32(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 4,
                                    this._length += 4
                            }
                            ,
                            i.readUint32 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 4,
                                    this._dv.getUint32(e, this.littleEndian)
                            }
                            ,
                            i.readUInt32BE = function() {
                                return this.readUint32(!1)
                            }
                            ,
                            i.writeInt64 = function(t, e) {
                                this._dv.setBigInt64(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 8,
                                    this._length += 8
                            }
                            ,
                            i.readInt64 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 8,
                                    this._dv.getBigInt64(e, this.littleEndian)
                            }
                            ,
                            i.writeUint64 = function(t, e) {
                                this._dv.setBigUint64(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 8,
                                    this._length += 8
                            }
                            ,
                            i.readUint64 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 8,
                                    this._dv.getBigUint64(e, this.littleEndian)
                            }
                            ,
                            i.writeFloat32 = function(t, e) {
                                this._dv.setFloat32(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 4,
                                    this._length += 4
                            }
                            ,
                            i.readFloat32 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 4,
                                    this._dv.getFloat32(e, this.littleEndian)
                            }
                            ,
                            i.writeFloat64 = function(t, e) {
                                this._dv.setFloat64(this.byteOffset, t, this.littleEndian),
                                    this.byteOffset += 8,
                                    this._length += 8
                            }
                            ,
                            i.readFloat64 = function(t) {
                                var e = this.byteOffset;
                                return this.byteOffset += 8,
                                    this._dv.getFloat64(e, this.littleEndian)
                            }
                            ,
                            i.writeBytes = function(t, e, i) {
                                void 0 === e && (e = 0),
                                void 0 === i && (i = 0);
                                var n = t.bytes;
                                0 == i && (i = t.buffer.byteLength);
                                for (var s = e; s < i; s++)
                                    this.writeUint8(n[s])
                            }
                            ,
                            i.readBytes1 = function(t, e, i) {
                                if (void 0 === e && (e = 0),
                                void 0 === i && (i = 0),
                                0 === i && (i = this.buffer.byteLength - this.position),
                                this.position + i > this.buffer.byteLength)
                                    throw new Error("读取越界: 需求 " + i + " 字节，剩余 " + (this.buffer.byteLength - this.position));
                                if (e < 0 || e + i > t.length)
                                    throw new Error("目标范围无效: offset=" + e + ", length=" + i + ", 容量=" + t.length);
                                var n = new Uint8Array(this.buffer,this.position,i);
                                t.set(n, e),
                                    this.position += i
                            }
                            ,
                            i.readBytes = function(t, e, i) {
                                void 0 === e && (e = 0),
                                void 0 === i && (i = 0),
                                0 === i && (i = this.buffer.byteLength - this.position);
                                for (var n = this._byteOffset, s = Math.min(n + i, this.buffer.byteLength), r = e, f = t.length, h = 0, o = n; o < s; o++) {
                                    t.readBytesSRDZ(r, this.bytes[o]),
                                    (h += 1) + e > f && (t.length = h + e),
                                        r += 1
                                }
                                this.byteOffset += s - n
                            }
                            ,
                            i.readBytesNew = function(t, e, i) {
                                void 0 === e && (e = 0),
                                void 0 === i && (i = 0),
                                0 === i && (i = this.buffer.byteLength - this.position);
                                for (var n = this._byteOffset, s = Math.min(n + i, this.buffer.byteLength), r = e, f = t.length, h = 0, o = n; o < s; o++) {
                                    t.readBytesSRDZ(r, this.bytes[o]),
                                    (h += 1) + e > f && (t.length = h + e),
                                        r += 1
                                }
                                this.byteOffset += s - n
                            }
                            ,
                            i.readBytesSRDZ = function(t, e) {
                                try {
                                    this._dv.setUint8(t, e)
                                } catch (t) {
                                    s.IS_LOCAL
                                }
                            }
                            ,
                            i.readBytes22 = function(e) {
                                var i = this.buffer.slice(this.byteOffset, this.byteOffset + e);
                                return this.byteOffset += e,
                                    new t(i)
                            }
                            ,
                            i.writeByte = function(t) {
                                this.writeInt8(t)
                            }
                            ,
                            i.readByte = function(t) {
                                return this.readInt8()
                            }
                            ,
                            i.writeUnsignedByte = function(t) {
                                this.writeUint8(t)
                            }
                            ,
                            i.readUnsignedByte = function(t) {
                                return this.readUint8()
                            }
                            ,
                            i.writeUnsignedShort = function(t, e) {
                                this.writeUint16(t, this.littleEndian)
                            }
                            ,
                            i.readUnsignedShort = function(t) {
                                return this.readUint16()
                            }
                            ,
                            i.writeUnsignedInt = function(t, e) {
                                this.writeUint32(t, this.littleEndian)
                            }
                            ,
                            i.readUnsignedInt = function(t) {
                                return this.readUint32()
                            }
                            ,
                            i.writeInt = function(t, e) {
                                this.writeInt32(t, this.littleEndian)
                            }
                            ,
                            i.readInt = function(t) {
                                return this.readInt32()
                            }
                            ,
                            i.writeShort = function(t, e) {
                                this.writeInt16(t, this.littleEndian)
                            }
                            ,
                            i.readShort = function(t) {
                                return this.readInt16()
                            }
                            ,
                            i.writeUTFBytes = function(t, e, i) {
                                void 0 === i && (i = "utf8"),
                                    this.writeString(t, this.littleEndian, i)
                            }
                            ,
                            i.readUTFBytes = function(t, e, i) {
                                return void 0 === i && (i = "utf8"),
                                    this.readString(t, this.littleEndian, i)
                            }
                            ,
                            i.writeFloat = function(t, e) {
                                this.writeFloat32(t, this.littleEndian)
                            }
                            ,
                            i.readFloat = function(t) {
                                return this.readFloat32()
                            }
                            ,
                            i.writeDouble = function(t, e) {
                                this.writeFloat64(t, this.littleEndian)
                            }
                            ,
                            i.readDouble = function(t) {
                                return this.readFloat64(t)
                            }
                            ,
                            i.readDoubleBE = function() {
                                return this.readDouble(!1)
                            }
                            ,
                            i.writeBoolean = function(t) {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            i.readBoolean = function() {
                                return 0 != this.readUint8()
                            }
                            ,
                            i.writeMultiByte = function(t, e) {
                                for (var i = (new TextEncoder).encode(t), n = 0; n < i.length; n++)
                                    this.writeUint8(i[n])
                            }
                            ,
                            i.readMultiByte = function(t, e) {
                                return 0 == t ? "" : this.readString(t, !1, e)
                            }
                            ,
                            i.writeObject = function(t) {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            i.readObject = function() {
                                return r.read(this)
                            }
                            ,
                            i.writeUTF = function(t) {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            i.readUTF = function() {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            i.compress = function(t) {
                                var e = new Uint8Array(this.buffer,0,this.position)
                                    , i = n.deflate(e);
                                this._buffer = i.buffer,
                                    this._dv = new DataView(this._buffer),
                                    this.position = i.length
                            }
                            ,
                            i.uncompress = function() {
                                var t = new Uint8Array(this.buffer)
                                    , e = n.inflate(t);
                                this._buffer = e.buffer,
                                    this._dv = new DataView(this._buffer),
                                    this.position = 0,
                                    this.length = this._buffer.byteLength
                            }
                            ,
                            i.expandBuffer = function(t) {
                                void 0 === t && (t = 0);
                                var e = Math.max(2 * this._buffer.byteLength, this.position + t)
                                    , i = new ArrayBuffer(e);
                                new Uint8Array(i).set(new Uint8Array(this._buffer)),
                                    this._buffer = i,
                                    this._dv = new DataView(this._buffer)
                            }
                            ,
                            e(t, [{
                                key: "littleEndian",
                                get: function() {
                                    return this._littleEndian
                                },
                                set: function(t) {
                                    this._littleEndian = t
                                }
                            }, {
                                key: "position",
                                get: function() {
                                    return this._byteOffset
                                },
                                set: function(t) {
                                    this._byteOffset = t < 0 ? 0 : t
                                }
                            }, {
                                key: "byteOffset",
                                get: function() {
                                    return this._byteOffset
                                },
                                set: function(t) {
                                    this._byteOffset = t < 0 ? 0 : t
                                }
                            }, {
                                key: "length",
                                get: function() {
                                    return this._length
                                },
                                set: function(t) {
                                    this._length = t
                                }
                            }, {
                                key: "buffer",
                                get: function() {
                                    return this._buffer.slice(0, this.length)
                                }
                            }, {
                                key: "bytes",
                                get: function() {
                                    return new Uint8Array(this._buffer)
                                }
                            }, {
                                key: "bytesAvailable",
                                get: function() {
                                    return this.buffer.byteLength - this.byteOffset
                                }
                            }]),
                            t
                    }()).DEFALUT_REQUIRED_LENGTH = 2048,
                    i._RF.pop()
            }
        }
    }
));
