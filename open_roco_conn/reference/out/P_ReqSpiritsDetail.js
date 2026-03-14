System.register("chunks:///_virtual/P_ReqSpiritsDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./P_Struct.ts"], (function(t) {
        var i, e, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    r = t.P_Struct
                }
            ],
            execute: function() {
                e._RF.push({}, "aa0f8d6+RhHFohNfZcSxWbp", "P_ReqSpiritsDetail", void 0);
                t("P_ReqSpiritsDetail", function(t) {
                    function e(i) {
                        return void 0 === i && (i = null),
                        t.call(this, i) || this
                    }
                    i(e, t);
                    var r = e.prototype;
                    return r.fill = function(i) {
                        t.prototype.fill.call(this, i),
                            this.len += 2
                    }
                        ,
                        r.write = function(i) {
                            i.writeShort(this.structs.length),
                                t.prototype.write.call(this, i)
                        }
                        ,
                        e
                }(r));
                e._RF.pop()
            }
        }
    }
));
