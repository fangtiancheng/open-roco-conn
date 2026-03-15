System.register("chunks:///_virtual/DescPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts"], (function(t) {
        var e, n, o, s, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    s = t.UICtlBase
                }
                , function(t) {
                    i = t.AgentNode
                }
            ],
            execute: function() {
                o._RF.push({}, "e7a4ftnbmtKOL3IG8wIpP+X", "DescPanel", void 0);
                t("DescPanel", function(t) {
                    function n(e, n, o, s) {
                        var i;
                        return void 0 === n && (n = 0),
                        void 0 === o && (o = ""),
                        void 0 === s && (s = null),
                            (i = t.call(this, e, n, o, s) || this)._ui = void 0,
                            i._ui = new r(e.target),
                            i
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.dispose = function() {
                        t.prototype.dispose.call(this)
                    }
                        ,
                        o.update = function() {}
                        ,
                        n
                }(s));
                var r = function(t) {
                    function o() {
                        for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
                            o[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(o)) || this)._btnClose = void 0,
                            e
                    }
                    return e(o, t),
                        n(o, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new i(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }]),
                        o
                }(i);
                o._RF.pop()
            }
        }
    }
));
