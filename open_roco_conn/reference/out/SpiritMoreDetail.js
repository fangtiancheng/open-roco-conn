System.register("chunks:///_virtual/SpiritMoreDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./NodeExtend.ts"], (function(t) {
        var e, i, n, u, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    u = t.AgentNode
                }
                , function(t) {
                    o = t.NodeExtend
                }
            ],
            execute: function() {
                n._RF.push({}, "534ffZIKspOw7k5+1wibQWy", "SpiritMoreDetail", void 0);
                t("SpiritMoreDetail", function(t) {
                    function n(e) {
                        var i;
                        return (i = t.call(this) || this)._ui = void 0,
                            i._ui = new r(e),
                            i.addChild(i._ui.target),
                            i.data = null,
                            i.mouseChildren = !1,
                            i.mouseEnabled = !1,
                            i
                    }
                    return e(n, t),
                        n.prototype.dispose = function() {
                            this._ui = null,
                                this.data = null
                        }
                        ,
                        i(n, [{
                            key: "data",
                            set: function(t) {
                                this._ui
                            }
                        }]),
                        n
                }(o));
                var r = function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return e(i, t),
                        i
                }(u);
                n._RF.pop()
            }
        }
    }
));
