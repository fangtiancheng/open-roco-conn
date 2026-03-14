System.register("chunks:///_virtual/SpiritInfoPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./WindowCloseAction.ts", "./SpiritInfoWindow.ts"], (function(i) {
        var n, t, s, o, l, e, a;
        return {
            setters: [function(i) {
                n = i.inheritsLoose,
                    t = i.createClass
            }
                , function(i) {
                    s = i.cclegacy,
                        o = i.Node
                }
                , function(i) {
                    l = i.__global
                }
                , function(i) {
                    e = i.WindowCloseAction
                }
                , function(i) {
                    a = i.SpiritInfoWindow
                }
            ],
            execute: function() {
                s._RF.push({}, "09685Gn17ZIlqzv52UniMYi", "SpiritInfoPanel", void 0);
                i("SpiritInfoPanel", function(i) {
                    function s() {
                        var n;
                        return (n = i.call(this) || this)._display = void 0,
                            n._display = l.UI.createWindow(a, !0),
                            n._display.closeAction = e.HIDE,
                            n._display.close(),
                            n
                    }
                    n(s, i);
                    var o = s.prototype;
                    return o.dispose = function() {}
                        ,
                        o.open = function(i) {
                            null != this._display && (this._display.data = null,
                                this._display.show())
                        }
                        ,
                        o.close = function() {
                            null != this._display && this._display.hide()
                        }
                        ,
                        t(s, [{
                            key: "display",
                            get: function() {
                                return this._display
                            }
                        }, {
                            key: "opened",
                            get: function() {
                                return null != this._display && this._display.visible
                            }
                        }, {
                            key: "data",
                            set: function(i) {
                                null != this._display && (this._display.data = i)
                            }
                        }]),
                        s
                }(o));
                s._RF.pop()
            }
        }
    }
));
