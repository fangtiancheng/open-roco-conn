System.register("chunks:///_virtual/PLUGIN_CALLBACK.ts", ["cc"], (function(_) {
        var A;
        return {
            setters: [function(_) {
                A = _.cclegacy
            }
            ],
            execute: function() {
                A._RF.push({}, "5fa3f+33zdH7pn/fX3Rvygl", "PLUGIN_CALLBACK", void 0);
                var E = _("PLUGIN_CALLBACK", (function() {}
                ));
                E.ENTER_FRAME = 0,
                    E.STAGE_MOUSE_DOWN = 1,
                    E.STAGE_MOUSE_UP = 2,
                    E.STAGE_MOUSE_DOWN_CAPTURE = 3,
                    E.STAGE_MOUSE_UP_CAPTURE = 4,
                    E.STAGE_MOUSE_MOVE = 5,
                    E.CLOSE_MAIN_WIN = 6,
                    E.UPDATE_USER_INFO_PANEL = 7,
                    E.CALLBACK_MAX = 99,
                    A._RF.pop()
            }
        }
    }
));
