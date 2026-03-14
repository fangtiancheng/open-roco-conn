System.register("chunks:///_virtual/GuardianPetInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./BuildLogHelper.ts"], (function(n) {
        var t, e, o, r;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    o = n.EventDispatcher
                }
                , function(n) {
                    r = n.default
                }
            ],
            execute: function() {
                e._RF.push({}, "2dc088lKZNGZIMwmCTk05cZ", "GuardianPetInfo", void 0);
                n("GuardianPetInfo", function(n) {
                    function e() {
                        return n.apply(this, arguments) || this
                    }
                    return t(e, n),
                        e.prototype.open = function(n) {
                            throw r.IS_LOCAL,
                                new Error("GuardianPetInfo's function [public open(masterID: number): void]should not be called. ")
                        }
                        ,
                        e
                }(o));
                e._RF.pop()
            }
        }
    }
));
