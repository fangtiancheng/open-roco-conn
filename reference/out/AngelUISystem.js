System.register("chunks:///_virtual/AngelUISystem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIManager.ts", "./DEFINE.ts", "./AngelEffectManager.ts", "./BubbleSkinType.ts", "./NodeExtend.ts", "./ToolTip.ts", "./WindowManager.ts", "./WidgetAdapter.ts", "./AImage.ts"], (function(n) {
        var e, t, i, o, a, s, r, d, u, c;
        return {
            setters: [function(n) {
                e = n.createClass
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    i = n.default
                }
                , null, function(n) {
                    o = n.AngelEffectManager
                }
                , function(n) {
                    a = n.BubbleSkinType
                }
                , function(n) {
                    s = n.NodeExtend
                }
                , function(n) {
                    r = n.ToolTip
                }
                , function(n) {
                    d = n.WindowManager
                }
                , function(n) {
                    u = n.WidgetAdapter
                }
                , function(n) {
                    c = n.AImage
                }
            ],
            execute: function() {
                t._RF.push({}, "a05cejFpE1KDJUzMOBNPT59", "AngelUISystem", void 0);
                n("AngelUISystem", function() {
                    function n() {
                        this.plugContainer = void 0,
                            this.worldContainer = void 0,
                            this.effectCs = void 0,
                            this.commUIM = void 0,
                            this.effectM = void 0,
                            this.myRoot = void 0,
                            this.windowContainer = void 0,
                            this.sysUIContainer = void 0
                    }
                    var t = n.prototype;
                    return t.mouseFocusChangeHandler = function(n) {}
                        ,
                        t.initialize = function() {
                            var n, e = arguments.length <= 0 ? void 0 : arguments[0];
                            this.effectCs = [],
                                e.addChild(this.worldContainer = new s),
                                e.addChild(this.plugContainer = new s),
                                (n = new s).mouseEnabled = !1,
                                n.name = "effect0",
                                e.addChild(this.effectCs[0] = n),
                                this.windowContainer = new s,
                                this.windowContainer.addComponent(u),
                                e.addChild(this.windowContainer),
                                (n = new s).mouseEnabled = !1,
                                n.name = "effect1",
                                e.addChild(this.effectCs[1] = n),
                                this.commUIM = new d(this.windowContainer),
                                this.effectM = new o(this),
                                this.sysUIContainer = new s,
                                e.addChild(this.sysUIContainer),
                                this.worldContainer.name = "worldContainer",
                                this.plugContainer.name = "plugContainer",
                                this.windowContainer.name = "windowContainer",
                                this.sysUIContainer.name = "sysUIContainer";
                            var t = r.getInstance(e, i.gTips);
                            t.addBubble(this.commUIM.createBubble(10), 10),
                                t.addBubble(this.commUIM.createBubble(a.COMMON_TOOLTIP), a.COMMON_TOOLTIP),
                                t.addBubble(this.commUIM.createBubble(a.BLACK_TOOLTIP), a.BLACK_TOOLTIP),
                                t.addBubble(this.commUIM.createBubble(a.SERISE_TIPS), a.SERISE_TIPS)
                        }
                        ,
                        t.finalize = function() {}
                        ,
                        t.getPlugContainer = function() {
                            return this.plugContainer
                        }
                        ,
                        t.getWindowContainer = function() {
                            return this.windowContainer
                        }
                        ,
                        t.getWorldContainer = function() {
                            return this.worldContainer
                        }
                        ,
                        t.getEffectContainer = function(n) {
                            return void 0 === n && (n = 0),
                                this.effectCs[n]
                        }
                        ,
                        t.setMouseEnabled = function(n) {}
                        ,
                        t.setCursor = function(n) {}
                        ,
                        t.printScreen = function(n, e) {
                            return null
                        }
                        ,
                        t.getScreenWidth = function() {
                            return 1600
                        }
                        ,
                        t.getScreenHeight = function() {
                            return 900
                        }
                        ,
                        t.bindSystemResApi = function(n) {
                            c.setRLTM(n.getResLoadTaskManager())
                        }
                        ,
                        t.setUIEnabled = function(n) {}
                        ,
                        e(n, [{
                            key: "commUIManager",
                            get: function() {
                                return this.commUIM
                            }
                        }, {
                            key: "effectManager",
                            get: function() {
                                return this.effectM
                            }
                        }]),
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
