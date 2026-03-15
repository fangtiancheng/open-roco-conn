System.register("chunks:///_virtual/SaveChangeStriveProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./P_Char.ts", "./P_Struct.ts", "./ProtocolHelper.ts", "./AddStriveResData.ts", "./SpiritDataReader.ts", "./ServerKeywords.ts"], (function(e) {
        var t, r, n, i, o, s, a, c, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    n = e.EventDispatcher
                }
                , function(e) {
                    i = e.P_Char
                }
                , function(e) {
                    o = e.P_Struct
                }
                , function(e) {
                    s = e.ProtocolHelper
                }
                , function(e) {
                    a = e.AddStriveResData
                }
                , function(e) {
                    c = e.SpiritDataReader
                }
                , function(e) {
                    u = e.ServerKeywords
                }
            ],
            execute: function() {
                r._RF.push({}, "de9b5Yef19HjJr1Gh0afdBu", "SaveChangeStriveProcessor", void 0);
                e("SaveChangeStriveProcessor", function(e) {
                    function r() {
                        return e.call(this) || this
                    }
                    t(r, e);
                    var n = r.prototype;
                    return n.decode = function(e) {
                        var t, r = e.body, n = s.ReadCode(r);
                        return n.isError() ? n.message : ((t = new a).spiritID = r.readUnsignedInt(),
                            t.spiritIndex = r.readUnsignedByte(),
                            t.spirits = c.read(r),
                            t)
                    }
                        ,
                        n.encode = function(e, t) {
                            void 0 === t && (t = -1);
                            var r = s.CreateADF(t)
                                , n = new o;
                            return n.fill([new i(e.index), new i(e.GPA), new i(e.GPD), new i(e.GMA), new i(e.GMD), new i(e.GSP), new i(e.GHP)]),
                                r.body = n,
                                r
                        }
                        ,
                        n.getADFType = function() {
                            return u.SAVE_STRIVE_ADD
                        }
                        ,
                        r
                }(n));
                r._RF.pop()
            }
        }
    }
));
