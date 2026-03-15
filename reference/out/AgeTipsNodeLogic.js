System.register("chunks:///_virtual/AgeTipsNodeLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(n) {
        var t, i, o, e, s;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    i = n.createClass
            }
                , function(n) {
                    o = n.cclegacy,
                        e = n.NodeEventType
                }
                , function(n) {
                    s = n.AgentNode
                }
            ],
            execute: function() {
                o._RF.push({}, "a1001FwhuBKhYkuts3oLvMP", "AgeTipsNodeLogic", void 0);
                n("AgeTipsNodeLogic", function() {
                    function n(n) {
                        this._ui = void 0,
                            this.target = void 0,
                            this.target = n,
                            this._ui = new u(n),
                        this._ui && this._ui.knownBtn.on(e.TOUCH_END, this.onClickKnownBtn, this)
                    }
                    return n.prototype.onClickKnownBtn = function(n) {
                        this._ui && (this._ui.active = !1)
                    }
                        ,
                        n
                }());
                var u = function(n) {
                    function o() {
                        for (var t, i = arguments.length, o = new Array(i), e = 0; e < i; e++)
                            o[e] = arguments[e];
                        return (t = n.call.apply(n, [this].concat(o)) || this)._knownBtn = void 0,
                            t
                    }
                    return t(o, n),
                        i(o, [{
                            key: "knownBtn",
                            get: function() {
                                return this._knownBtn || (this._knownBtn = new s(this.getChildByName("knownBtn"))),
                                    this._knownBtn
                            }
                        }]),
                        o
                }(s);
                o._RF.pop()
            }
        }
    }
));
