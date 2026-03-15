System.register("chunks:///_virtual/GameStoryChapterUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameStoryScene.ts", "./GameStoryData.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./GameStoryMessage.ts", "./CGI.ts", "./GameStoryChangeStatusProtocol.ts", "./UserData.ts"], (function(t) {
        var e, i, p, n, o, h, d, s, a, S, y, x;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        p = t._decorator
                }
                , function(t) {
                    n = t.GameStoryScene
                }
                , function(t) {
                    o = t.GameStoryStepType
                }
                , function(t) {
                    h = t.PureNotificationCenter
                }
                , function(t) {
                    d = t.AppConstDef
                }
                , function(t) {
                    s = t.GameStoryMessage
                }
                , function(t) {
                    a = t.CGI
                }
                , function(t) {
                    S = t.GameStoryChangeStatusProtocol,
                        y = t.GameStoryChangeStatusReq
                }
                , function(t) {
                    x = t.UserData
                }
            ],
            execute: function() {
                var u;
                i._RF.push({}, "f80c6naMQxCFo4z5YCxqI4y", "GameStoryChapterUI", void 0);
                var m = p.ccclass;
                p.property,
                    t("GameStoryChapterUI", m("GameStoryChapterOneUI")(u = function(t) {
                        function i() {
                            return t.apply(this, arguments) || this
                        }
                        e(i, t);
                        var p = i.prototype;
                        return p.initSetps = function() {
                            this.setupStep({
                                type: o.Wait,
                                wait: 1e3
                            }),
                                this.setupStep({
                                    type: o.AnimationCreate,
                                    index: 0,
                                    animationName: "ALL"
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 0,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 270,
                                    width: 1e3,
                                    height: 620
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 1,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 2,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 3,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 4,
                                    wait: 8800
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 270,
                                    width: 1e3,
                                    height: 620
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 5,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 6,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 7,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 8,
                                    wait: 3900
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 270,
                                    width: 1e3,
                                    height: 620
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 9,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 10,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 11,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 12,
                                    wait: 31600
                                }),
                                this.setupStep({
                                    type: o.ButtonClick,
                                    index: 0,
                                    x: 350,
                                    y: 230,
                                    width: 1e3,
                                    height: 500,
                                    animationIndex: 0,
                                    names: ["MCframe13", "btn_close"]
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 13,
                                    wait: 8100
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 270,
                                    width: 1e3,
                                    height: 620
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 14,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 15,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 16,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 17,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 18,
                                    wait: 1e4
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 19,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 100,
                                    width: 1e3,
                                    height: 620
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 20,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 21,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 22,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 23,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 24,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 25,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 26,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 27,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.ButtonClick,
                                    index: 0,
                                    x: 1170,
                                    y: 750,
                                    width: 180,
                                    height: 50,
                                    animationIndex: 0,
                                    names: ["MCframe28", "btn_next"]
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 28,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.ButtonClick,
                                    index: 0,
                                    x: 1170,
                                    y: 750,
                                    width: 180,
                                    height: 50,
                                    animationIndex: 0,
                                    names: ["MCframe29", "btn_next"]
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 29,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.ButtonClick,
                                    index: 0,
                                    x: 1170,
                                    y: 750,
                                    width: 180,
                                    height: 50,
                                    animationIndex: 0,
                                    names: ["MCframe30", "btn_over"]
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 30,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 31,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 32,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 33,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 34,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 270,
                                    width: 1e3,
                                    height: 620
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 35,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 36,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 37,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 270,
                                    width: 1e3,
                                    height: 620
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 38,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 39,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 40,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 41,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 42,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 43,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 44,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 45,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 46,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 47,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 48,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 100,
                                    y: 650,
                                    width: 1400,
                                    height: 250
                                }),
                                this.setupStep({
                                    type: o.AnimationGotoAndStop,
                                    index: 0,
                                    frame: 49,
                                    wait: 300
                                }),
                                this.setupStep({
                                    type: o.NodeClick,
                                    index: 0,
                                    x: 300,
                                    y: 270,
                                    width: 1e3,
                                    height: 620
                                }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 50,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 51,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 52,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 300,
                                y: 270,
                                width: 1e3,
                                height: 620
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 53,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 54,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 55,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 56,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 57,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 58,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 59,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 60,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 61,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 62,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 63,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 64,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 65,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 66,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 67,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 68,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 69,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 70,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 71,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 72,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 73,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 74,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 75,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            }),
                            this.setupStep({
                                type: o.AnimationGotoAndStop,
                                index: 0,
                                frame: 76,
                                wait: 300
                            }),
                            this.setupStep({
                                type: o.NodeClick,
                                index: 0,
                                x: 100,
                                y: 650,
                                width: 1400,
                                height: 250
                            })
                        }
                            ,
                            p.SetpsEnd = function() {
                                var t = this.getPropocol(S)
                                    , e = new y;
                                t.send(e, (function(t) {
                                        0 != t.data.retInfo.retCode && console.log("GameStoryChangeStatusProtocol error: " + t.data.retInfo.retCode)
                                    }
                                )),
                                    a.GameStroy(10, (function(t) {
                                            console.log("GameStroy result: " + JSON.stringify(t)),
                                                x.GameStroyData = t,
                                                x.GameStroyDataFlag = !0,
                                                h.sendNotification(s.END_CHAPTER),
                                                h.sendNotification(d.NN_V_SHOW_MAIN_SCENE_VIEW)
                                        }
                                    ), (function(t) {
                                            console.log("GameStroy rsp: " + JSON.stringify(t)),
                                                h.sendNotification(s.END_CHAPTER),
                                                h.sendNotification(d.NN_V_SHOW_MAIN_SCENE_VIEW)
                                        }
                                    ))
                            }
                            ,
                            i
                    }(n)) || u);
                i._RF.pop()
            }
        }
    }
));
