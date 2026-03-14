System.register("chunks:///_virtual/Empty.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts"], (function(t) {
        var e, n, s, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.ReadUtils
                }
                , function(t) {
                    i = t.BaseMessage
                }
            ],
            execute: function() {
                n._RF.push({}, "e09409KAB9Gtr6+XR9/s4Fw", "Empty", void 0);
                t("Empty", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    e(n, t);
                    var i = n.prototype;
                    return i.writeToBuffer = function(t) {}
                        ,
                        i.readFromSlice = function(t, e) {
                            for (; t.bytesAvailable > e; ) {
                                var n = s.readTYPE_UINT32(t);
                                s.skip(t, 7 & n)
                            }
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
