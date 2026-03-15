System.register("chunks:///_virtual/RewardPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts"], (function(t) {
        var n, e, o, i, r;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    i = t.UICtlBase
                }
                , function(t) {
                    r = t.AgentNode
                }
            ],
            execute: function() {
                o._RF.push({}, "640d3XC+FZLT7BpLhVBjh8m", "RewardPanel", void 0);
                t("RewardPanel", function(t) {
                    function e(n, e, o, i) {
                        var r;
                        return void 0 === e && (e = 0),
                        void 0 === o && (o = ""),
                        void 0 === i && (i = null),
                            (r = t.call(this, n, e, o, i) || this)._ui = void 0,
                            r._ui = new s(n.target),
                            r
                    }
                    n(e, t);
                    var o = e.prototype;
                    return o.dispose = function() {
                        t.prototype.dispose.call(this)
                    }
                        ,
                        o.update = function() {}
                        ,
                        e
                }(i));
                var s = function(t) {
                    function o() {
                        for (var n, e = arguments.length, o = new Array(e), i = 0; i < e; i++)
                            o[i] = arguments[i];
                        return (n = t.call.apply(t, [this].concat(o)) || this)._btnClose = void 0,
                            n._btnShowIntroduce = void 0,
                            n
                    }
                    return n(o, t),
                        e(o, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new r(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnShowIntroduce",
                            get: function() {
                                return this._btnShowIntroduce || (this._btnShowIntroduce = new r(this.getChildByName("btnShowIntroduce"))),
                                    this._btnShowIntroduce
                            }
                        }]),
                        o
                }(r);
                o._RF.pop()
            }
        }
    }
));
