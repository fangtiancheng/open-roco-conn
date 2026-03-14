System.register("chunks:///_virtual/GameStoryChapterView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./GameStoryChapterUI.ts"], (function(e) {
        var t, n, r, o, a, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    o = e.GameView
                }
                , function(e) {
                    a = e.default
                }
                , function(e) {
                    i = e.GameStoryChapterUI
                }
            ],
            execute: function() {
                r._RF.push({}, "34d7dmki7FIKo0rYRTDWyEM", "GameStoryChapterView", void 0);
                e("GameStoryChapterView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return t(r, e),
                        n(r, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/game_story/GameStoryChapterView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return a.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(i)
                            }
                        }]),
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
