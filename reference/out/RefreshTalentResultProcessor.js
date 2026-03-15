System.register("chunks:///_virtual/RefreshTalentResultProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./RefreshTalentResultData.ts", "./ServerKeywords.ts"], (function(e) {
        var n, t, r, d, s;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    r = e.EventDispatcher
                }
                , function(e) {
                    d = e.RefreshTalentResultData
                }
                , function(e) {
                    s = e.ServerKeywords
                }
            ],
            execute: function() {
                t._RF.push({}, "30f18BZ9aRO44KaCBF9rYrY", "RefreshTalentResultProcessor", void 0);
                e("RefreshTalentResultProcessor", function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.decode = function(e) {
                        var n = e.body
                            , t = new d;
                        return t.spiritIndex = n.readUnsignedByte() - 1,
                            t.paOld = n.readUnsignedShort(),
                            t.pdOld = n.readUnsignedShort(),
                            t.maOld = n.readUnsignedShort(),
                            t.mdOld = n.readUnsignedShort(),
                            t.spOld = n.readUnsignedShort(),
                            t.hpOld = n.readUnsignedShort(),
                            t.paNew = n.readUnsignedShort(),
                            t.pdNew = n.readUnsignedShort(),
                            t.maNew = n.readUnsignedShort(),
                            t.mdNew = n.readUnsignedShort(),
                            t.spNew = n.readUnsignedShort(),
                            t.hpNew = n.readUnsignedShort(),
                            t.patOld = n.readUnsignedByte(),
                            t.pdtOld = n.readUnsignedByte(),
                            t.matOld = n.readUnsignedByte(),
                            t.mdtOld = n.readUnsignedByte(),
                            t.sptOld = n.readUnsignedByte(),
                            t.hptOld = n.readUnsignedByte(),
                            t.patNew = n.readUnsignedByte(),
                            t.pdtNew = n.readUnsignedByte(),
                            t.matNew = n.readUnsignedByte(),
                            t.mdtNew = n.readUnsignedByte(),
                            t.sptNew = n.readUnsignedByte(),
                            t.hptNew = n.readUnsignedByte(),
                            t
                    }
                        ,
                        r.encode = function(e, n) {
                            return null
                        }
                        ,
                        r.getADFType = function() {
                            return s.RECV_REFRESH_SPIRIT_TALENT
                        }
                        ,
                        t
                }(r));
                t._RF.pop()
            }
        }
    }
));
