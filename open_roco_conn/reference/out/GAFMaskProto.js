System.register("chunks:///_virtual/GAFMaskProto.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFMask.ts", "./GAFProto.ts"], (function(t) {
        var s, e, o, n;
        return {
            setters: [function(t) {
                s = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.GAFMask
                }
                , function(t) {
                    n = t.GAFProto
                }
            ],
            execute: function() {
                e._RF.push({}, "1bdde4gKylO8JFAP3WoVEU9", "GAFMaskProto", void 0);
                t("GAFMaskProto", function(t) {
                    function e(s, e, o, n) {
                        var i;
                        return (i = t.call(this, s) || this).asset = void 0,
                            i.mask = void 0,
                            i.idRef = void 0,
                            i.asset = e,
                            i.mask = o,
                            i.idRef = n,
                            i
                    }
                    s(e, t);
                    var n = e.prototype;
                    return n.getIdRef = function() {
                        return this.idRef
                    }
                        ,
                        n.getMaskNodeProto = function() {
                            return this.mask
                        }
                        ,
                        n.getAsset = function() {
                            return this.asset
                        }
                        ,
                        n._gafConstruct = function() {
                            var t = this.getAsset()._usedAtlasScale
                                , s = new o(this,t);
                            return s._init(),
                                s
                        }
                        ,
                        e
                }(n));
                e._RF.pop()
            }
        }
    }
));
