System.register("chunks:///_virtual/BagListUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./SpiritBagRefProxy.ts"], (function(t) {
        var i, n, e, o, s, r;
        return {
            setters: [function(t) {
                i = t.createClass,
                    n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        o = t.NodeEventType
                }
                , function(t) {
                    s = t.AgentNode
                }
                , function(t) {
                    r = t.SpiritBagRefProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "a7fca0bNBFFHbmXXFjBJZpv", "BagListUILogic", void 0);
                t("BagListUILogic", function() {
                    function t() {
                        this._ui = void 0
                    }
                    var n = t.prototype;
                    return n.BagListUILogic = function(t) {
                        this._ui = new u(t),
                            this._ui.gotoAndStop(1),
                            this._ui.on(o.TOUCH_END, this.clickHandler, this)
                    }
                        ,
                        n.clickHandler = function(t) {
                            switch (t.target) {
                                case this._ui.porpBtn:
                                    r.spiritBagPanel.bagTabIndex = 1;
                                    break;
                                case this._ui.equipBtn:
                                    r.spiritBagPanel.bagTabIndex = 2
                            }
                        }
                        ,
                        n.gotoTab = function(t) {
                            this._ui.gotoAndStop(t)
                        }
                        ,
                        n.reset = function() {}
                        ,
                        n.dispose = function() {
                            this._ui.off(o.TOUCH_END, this.clickHandler, this)
                        }
                        ,
                        i(t, [{
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(t) {
                                this._ui.visible = t
                            }
                        }]),
                        t
                }());
                var u = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._porpBtn = void 0,
                            i._equipBtn = void 0,
                            i
                    }
                    return n(e, t),
                        i(e, [{
                            key: "porpBtn",
                            get: function() {
                                return this._porpBtn || (this._porpBtn = new s(this.getChildByName("porpBtn"))),
                                    this._porpBtn
                            }
                        }, {
                            key: "equipBtn",
                            get: function() {
                                return this._equipBtn || (this._equipBtn = new s(this.getChildByName("equipBtn"))),
                                    this._equipBtn
                            }
                        }]),
                        e
                }(s);
                e._RF.pop()
            }
        }
    }
));
