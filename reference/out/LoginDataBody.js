System.register("chunks:///_virtual/LoginDataBody.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./IExternalizable.ts"], (function(t) {
        var n, o, e, r;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    e = t.DEFINE
                }
                , function(t) {
                    r = t.IExternalizable
                }
            ],
            execute: function() {
                o._RF.push({}, "d3298nQNoxMybPdyGlSw9O7", "LoginDataBody", void 0);
                t("LoginDataBody", function(t) {
                    function o() {
                        for (var n, o = arguments.length, e = new Array(o), r = 0; r < o; r++)
                            e[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(e)) || this).roomID = 4385,
                            n.key = "102s1df2asd15asd4f",
                            n
                    }
                    n(o, t);
                    var r = o.prototype;
                    return r.writeExternal = function(t) {
                        t.writeShort(this.roomID),
                            e.WriteChars(t, this.key, e.L_SESSIONKEY)
                    }
                        ,
                        r.readExternal = function(t) {}
                        ,
                        o
                }(r));
                o._RF.pop()
            }
        }
    }
));
