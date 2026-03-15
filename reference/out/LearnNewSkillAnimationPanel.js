System.register("chunks:///_virtual/LearnNewSkillAnimationPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts", "./NodeExtend.ts"], (function(n) {
        var i, e, t, o, l, a;
        return {
            setters: [function(n) {
                i = n.inheritsLoose,
                    e = n.createClass,
                    t = n.assertThisInitialized
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    l = n.WindowBase
                }
                , function(n) {
                    a = n.NodeExtend
                }
            ],
            execute: function() {
                o._RF.push({}, "cd468T3yv5IpJcRwJjH6DrV", "LearnNewSkillAnimationPanel", void 0);
                n("LearnNewSkillAnimationPanel", function(n) {
                    function o(i, e) {
                        var o;
                        return void 0 === i && (i = null),
                            (o = n.call(this) || this)._ui = void 0,
                            o._onOverCallback = void 0,
                            o._ui = new r,
                            o.addChild(o._ui),
                            o.initialize(i, null, null, o._ui, !0),
                            o.center(),
                            o._ui.addEventListener("LearnNewSkillAnimationOver", o.onAnimationOver, t(o)),
                            o
                    }
                    i(o, n);
                    var l = o.prototype;
                    return l.dispose = function() {
                        this._onOverCallback = null,
                            this._ui.removeEventListener("LearnNewSkillAnimationOver", this.onAnimationOver, this)
                    }
                        ,
                        l.showAndPlay = function() {
                            this.show(),
                                this.onAnimationOver(null)
                        }
                        ,
                        l.hide = function() {
                            n.prototype.hide.call(this)
                        }
                        ,
                        l.onAnimationOver = function(n) {
                            null != this._onOverCallback && this._onOverCallback()
                        }
                        ,
                        e(o, [{
                            key: "onOver",
                            set: function(n) {
                                this._onOverCallback = n
                            }
                        }]),
                        o
                }(l));
                var r = function(n) {
                    function e() {
                        return n.apply(this, arguments) || this
                    }
                    return i(e, n),
                        e
                }(a);
                o._RF.pop()
            }
        }
    }
));
