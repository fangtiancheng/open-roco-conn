System.register("chunks:///_virtual/UIManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(o) {
        var n, t, e, i;
        return {
            setters: [function(o) {
                n = o.inheritsLoose
            }
                , function(o) {
                    t = o.cclegacy,
                        e = o.NodeEventType,
                        i = o.Component
                }
            ],
            execute: function() {
                t._RF.push({}, "a52760fpP5IfoH95jkSQVbl", "UIManager", void 0);
                var s = o("default", function(o) {
                    function t() {
                        return o.apply(this, arguments) || this
                    }
                    n(t, o);
                    var i = t.prototype;
                    return i.onLoad = function() {
                        null === t.Instance ? (t.Instance = this,
                            t.gRoot = this.node,
                            t.gTips = this.node.getChildByName("tips"),
                            t.gWindow = this.node.getChildByName("window"),
                            t.gWindow2 = this.node.getChildByName("window2"),
                            t.gRootCanvas = this.node.getChildByName("canvas"),
                            t.gRootCombat = this.node.getChildByName("combat"),
                            t.gRoot.on(e.TOUCH_END, this.onTouchEnd, this, !0)) : this.destroy()
                    }
                        ,
                        i.onTouchStart = function(o) {
                            t.gToolTipComponent && t.gToolTipComponent.hide(),
                                t.gToolTipComponent = null
                        }
                        ,
                        i.onTouchCancel = function(o) {}
                        ,
                        i.onTouchEnd = function(o) {
                            t.gToolTipComponent && t.gToolTipComponent.hide(),
                                t.gToolTipComponent = null
                        }
                        ,
                        i.onMouseEnter = function(o) {}
                        ,
                        i.onMouseLeave = function(o) {}
                        ,
                        i.onMouseDown = function(o) {}
                        ,
                        t
                }(i));
                s.Instance = null,
                    s.gRoot = void 0,
                    s.gTips = void 0,
                    s.gWindow = void 0,
                    s.gWindow2 = void 0,
                    s.gRootCanvas = void 0,
                    s.gRootCombat = void 0,
                    s.gToolTipComponent = null,
                    t._RF.pop()
            }
        }
    }
));
