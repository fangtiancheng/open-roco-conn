System.register("chunks:///_virtual/GuardianPetVipAvatarIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts"], (function(t) {
        var n, i, o, e;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    e = t.AImage
                }
            ],
            execute: function() {
                o._RF.push({}, "d30a0XLyjpIOaIozU5NzdHT", "GuardianPetVipAvatarIcon", void 0);
                t("GuardianPetVipAvatarIcon", function(t) {
                    function o() {
                        var n;
                        return (n = t.call(this, 113, 90) || this)._tooltip = void 0,
                            n
                    }
                    return n(o, t),
                        i(o, [{
                            key: "tooltip",
                            get: function() {
                                return this._tooltip
                            },
                            set: function(t) {
                                this._tooltip = t
                            }
                        }]),
                        o
                }(e));
                o._RF.pop()
            }
        }
    }
));
