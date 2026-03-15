System.register("chunks:///_virtual/GAFDataReader.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "4b0354rXqJEgasuqGEEY7CE", "GAFDataReader", void 0);
                t("GAFDataReader", function() {
                    function t(t) {
                        this.dataRaw = void 0,
                            this.buf = void 0,
                            this.offset = void 0,
                            this.dataRaw = t,
                            this.buf = new DataView(t),
                            this.offset = [0]
                    }
                    var e = t.prototype;
                    return e.newOffset = function(t) {
                        if (this.offset[this.offset.length - 1] += t,
                        this.getOffset() > this.maxOffset())
                            throw new Error("GAF格式错误");
                        return this.offset[this.offset.length - 1] - t
                    }
                        ,
                        e.maxOffset = function() {
                            return 1 == this.offset.length ? this.buf.byteLength : this.offset[this.offset.length - 2]
                        }
                        ,
                        e.getOffset = function() {
                            return this.offset[this.offset.length - 1]
                        }
                        ,
                        e.Ubyte = function() {
                            return this.buf.getUint8(this.newOffset(1))
                        }
                        ,
                        e.Boolean = function() {
                            var t = this.buf.getUint8(this.newOffset(1));
                            if (t > 1)
                                throw new Error("GAF格式错误");
                            return 1 === t
                        }
                        ,
                        e.Uint = function() {
                            return this.buf.getUint32(this.newOffset(4), !0)
                        }
                        ,
                        e.Int = function() {
                            return this.buf.getInt32(this.newOffset(4), !0)
                        }
                        ,
                        e.color = function() {
                            return {
                                b: this.Ubyte(),
                                g: this.Ubyte(),
                                r: this.Ubyte(),
                                a: this.Ubyte()
                            }
                        }
                        ,
                        e.Ushort = function() {
                            return this.buf.getUint16(this.newOffset(2), !0)
                        }
                        ,
                        e.Float = function() {
                            return this.buf.getFloat32(this.newOffset(4), !0)
                        }
                        ,
                        e.String = function(t) {
                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e.toString = function() {
                                return t.toString()
                            }
                                ,
                                e
                        }((function() {
                                var t, e = this.Ushort(), n = this.newOffset(e), f = this.getOffset();
                                try {
                                    t = this.dataRaw.slice(n, f)
                                } catch (e) {
                                    if ("Object doesn't support property or method 'slice'" != e.message)
                                        throw e;
                                    t = [];
                                    for (var i = n; i < f; ++i)
                                        t.push(this.buf.getUint8(i))
                                }
                                return decodeURIComponent(escape(String.fromCharCode.apply(null, new Uint8Array(t))))
                            }
                        )),
                        e.startNestedBuffer = function(t) {
                            this.offset.push(this.offset[this.offset.length - 1]),
                                this.offset[this.offset.length - 2] += t
                        }
                        ,
                        e.endNestedBuffer = function() {
                            if (1 == this.offset.length)
                                throw new Error("没有可用的嵌套缓冲区");
                            this.offset.pop()
                        }
                        ,
                        e.Point = function() {
                            return {
                                x: this.Float(),
                                y: this.Float()
                            }
                        }
                        ,
                        e.Rect = function() {
                            return {
                                x: this.Float(),
                                y: this.Float(),
                                width: this.Float(),
                                height: this.Float()
                            }
                        }
                        ,
                        e.Matrix = function() {
                            return {
                                a: this.Float(),
                                b: this.Float(),
                                c: this.Float(),
                                d: this.Float(),
                                tx: this.Float(),
                                ty: this.Float()
                            }
                        }
                        ,
                        e.seek = function(t) {
                            this.offset[this.offset.length - 1] = t
                        }
                        ,
                        e.tell = function() {
                            return this.offset[this.offset.length - 1]
                        }
                        ,
                        e.fields = function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                                e[n] = arguments[n];
                            var f = this;
                            return function() {
                                var t = {}
                                    , n = 0;
                                if (e.length % 2)
                                    throw new Error("参数数量不是偶数");
                                for (; n < e.length; ) {
                                    var i = e[n++]
                                        , r = e[n++];
                                    if ("function" == typeof r)
                                        t[i] = r(t);
                                    else {
                                        if (!(r in f) || "function" != typeof f[r])
                                            throw new Error("对象DataReader没有函数`" + r + "`");
                                        t[i] = f[r].call(f)
                                    }
                                }
                                return t
                            }
                        }
                        ,
                        e.condition = function(t, e, n) {
                            return function(f) {
                                if (!f)
                                    throw new Error("条件函数的调用者没有传入`result`键");
                                var i = f;
                                return ("function" == typeof e ? function() {
                                            return e(i[t])
                                        }
                                        : function() {
                                            return e == i[t]
                                        }
                                )() ? n() : null
                            }
                        }
                        ,
                        e.array = function(t, e) {
                            var n = this;
                            return function() {
                                for (var f = [], i = n[t](), r = 0; r < i; ++r) {
                                    var s = e.call(n);
                                    f.push(s)
                                }
                                return f
                            }
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
