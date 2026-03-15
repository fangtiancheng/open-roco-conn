System.register("chunks:///_virtual/GuardianPetCtlStateBox.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GuardianPetUICtlBase.ts"], (function(t) {
        var e, n, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    o = t.GuardianPetUICtlBase
                }
            ],
            execute: function() {
                n._RF.push({}, "0bf78RGy+NBNJHyJYIGfcvy", "GuardianPetCtlStateBox", void 0);
                t("GuardianPetCtlStateBox", function(t) {
                    function n(e, n, o, i) {
                        var r;
                        return void 0 === n && (n = 0),
                        void 0 === o && (o = ""),
                        void 0 === i && (i = null),
                            (r = t.call(this, e, n, o, i) || this).res.gotoAndStop(1),
                            r
                    }
                    return e(n, t),
                        n.prototype.setState = function(t) {
                            this.res.gotoAndStop(t)
                        }
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
