System.register("chunks:///_virtual/BaseMCProxy.ts", ["cc", "./NodeUtils.ts", "./BuildLogHelper.ts", "./SpiritAnimationContainer.ts", "./SpiritAnimationContainerGaf.ts"], (function(t) {
        var i, n, o, e;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , null, function(t) {
                    n = t.default
                }
                , function(t) {
                    o = t.SpiritAnimationContainer
                }
                , function(t) {
                    e = t.SpiritAnimationContainerGaf
                }
            ],
            execute: function() {
                i._RF.push({}, "fd234VBhGFJM4P2fH/iubaG", "BaseMCProxy", void 0);
                t("BaseMCProxy", function() {
                    function t() {
                        this._body1 = void 0
                    }
                    var i = t.prototype;
                    return i.setBody = function(t, i) {
                        t instanceof o || t instanceof e ? (this._body1 = t,
                        this._body1 && (this._body1.stop(),
                            this._body1.active = !1)) : null == t ? this._body1 = null : n.IS_LOCAL
                    }
                        ,
                        i.initialize = function() {}
                        ,
                        i.finalize = function() {}
                        ,
                        i.addActionListener = function(t, i, o) {
                            this._body1 && (1 == n.IS_LOCAL && console.log("addActionListener==>" + t + "=>>" + this._body1.name),
                                this._body1.on(t, i, o))
                        }
                        ,
                        i.removeActionListener = function(t, i, o) {
                            this._body1 && (1 == n.IS_LOCAL && console.log("removeActionListener==>" + t + "=>>" + this._body1.name),
                                this._body1.off(t, i, o),
                            this._body1.hasEventListener(t) && n.IS_LOCAL)
                        }
                        ,
                        i.getDisplayObject = function() {
                            if (this._body1)
                                return console.log("BaseMCProxy==getDisplayObject111==" + this._body1.name),
                                    this._body1;
                            console.log("BaseMCProxy==getDisplayObject222==" + this._body1.name)
                        }
                        ,
                        i.bringVSpiritToFront1 = function() {}
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
