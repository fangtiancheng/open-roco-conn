System.register("chunks:///_virtual/EffectsLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventNode.ts", "./BuildLogHelper.ts", "./FightData.ts", "./GetLifeNumber.ts"], (function(e) {
        var t, n, r, s, i, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.EventNode
                }
                , function(e) {
                    s = e.default
                }
                , function(e) {
                    i = e.FightData
                }
                , function(e) {
                    o = e.GetLifeNumber
                }
            ],
            execute: function() {
                n._RF.push({}, "f99db2dfwdBY6w3UsKZ6spm", "EffectsLayer", void 0);
                e("EffectsLayer", function(e) {
                    function n() {
                        var t;
                        return (t = e.call(this) || this).numbers = new Array,
                            t
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.deleteAllEffect = function() {
                        for (var e = this.children.length - 1; e >= 0; e--) {
                            var t;
                            (t = this.children[e]) && t instanceof o || t && t.parent.removeChild(t)
                        }
                    }
                        ,
                        r.deleteAllNm = function() {
                            for (var e = this.numbers.length, t = 0; t < e; t++)
                                this.numbers[0].del(),
                                    this.numbers.shift();
                            this.numbers = []
                        }
                        ,
                        r.createHPNumber = function(e, t, n, r, u) {
                            var a;
                            void 0 === u && (u = !1),
                                console.info("createHPNumber=" + e),
                            e || s.IS_LOCAL,
                            "" == e && s.IS_LOCAL,
                            r == i.POS_LEFT && (a = new o(40 * Math.random() - 320,30 + 40 * Math.random(),t,e,n,this,u),
                                this.numbers.push(a)),
                            r == i.POS_RIGHT && (a = new o(320 + 40 * Math.random(),30 + 40 * Math.random(),t,e,n,this,u),
                                this.numbers.push(a))
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
