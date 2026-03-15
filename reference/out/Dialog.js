System.register("chunks:///_virtual/Dialog.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts"], (function(t) {
        var n, o, i;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    i = t.WindowBase
                }
            ],
            execute: function() {
                o._RF.push({}, "174b6pmKfRKYbpKDSf1s23R", "Dialog", void 0);
                t("Dialog", function(t) {
                    function o(n, o, i) {
                        var e;
                        return void 0 === i && (i = ""),
                            (e = t.call(this) || this).bg = void 0,
                            e.closeButton = void 0,
                            e.content = void 0,
                            e.initialize(n, e.bg, e.closeButton, e.content, e.isModal),
                            e.content.message = i,
                            e
                    }
                    return n(o, t),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
