System.register("chunks:///_virtual/GAFLoader.ts", ["cc", "./GAFDataReader.ts", "./GAFMacros.ts", "./GAFTags.ts", "./BuildLogHelper.ts"], (function(e) {
        var r, a, n, t, o;
        return {
            setters: [function(e) {
                r = e.cclegacy
            }
                , function(e) {
                    a = e.GAFDataReader
                }
                , function(e) {
                    n = e.GAFMacros
                }
                , function(e) {
                    t = e.GAFTags
                }
                , function(e) {
                    o = e.default
                }
            ],
            execute: function() {
                r._RF.push({}, "8ec5aivC6BL8YtyZo/wkdsb", "GAFLoader", void 0);
                e("GafLoader", function() {
                    function e() {}
                    e.LoadFile = function(r) {
                        var n = r.buffer()
                            , t = new a(n)
                            , s = (new e).LoadStream(t);
                        return 1 == o.IS_LOCAL && console.log("GAF文件解析完成:", s),
                            s
                    }
                    ;
                    var r = e.prototype;
                    return r.readHeaderBegin = function(e, r) {
                        r.compression = e.Uint(),
                            r.versionMajor = e.Ubyte(),
                            r.versionMinor = e.Ubyte(),
                            r.fileLength = e.Uint()
                    }
                        ,
                        r.readHeaderEndV3 = function(e, r) {
                            r.framesCount = e.Ushort(),
                                r.frameSize = e.Rect(),
                                r.pivot = e.Point()
                        }
                        ,
                        r.readHeaderEndV4 = function(e, r) {
                            var a = e.Uint();
                            r.scaleValues = [];
                            for (var n = 0; n < a; ++n)
                                r.scaleValues.push(e.Float());
                            var t = e.Uint();
                            r.csfValues = [];
                            for (var o = 0; o < t; ++o)
                                r.csfValues.push(e.Float())
                        }
                        ,
                        r.LoadFile = function(e, r) {
                            var n = this
                                , t = new XMLHttpRequest;
                            t.open("GET", e, !0),
                                t.responseType = "arraybuffer",
                                t.onload = function(e) {
                                    var o = new a(t.response)
                                        , s = n.LoadStream(o);
                                    r && r(s)
                                }
                                ,
                                t.send()
                        }
                        ,
                        r.LoadStream = function(e) {
                            var r = {};
                            if (this.readHeaderBegin(e, r),
                            r.compression == n.COMPRESSION_NONE)
                                r.versionMajor < 4 ? this.readHeaderEndV3(e, r) : this.readHeaderEndV4(e, r);
                            else {
                                if (r.compression != n.COMPRESSION_ZIP)
                                    throw new Error("GAF syntax error.");
                                var o = e.dataRaw.slice(e.tell())
                                    , s = new Zlib.Inflate(new Uint8Array(o)).decompress();
                                e = new a(s.buffer),
                                    r.versionMajor < 4 ? this.readHeaderEndV3(e, r) : this.readHeaderEndV4(e, r)
                            }
                            return {
                                header: r,
                                tags: t.ReadTags(e)
                            }
                        }
                        ,
                        e
                }());
                r._RF.pop()
            }
        }
    }
));
