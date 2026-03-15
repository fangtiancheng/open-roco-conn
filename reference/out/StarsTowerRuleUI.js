System.register("chunks:///_virtual/StarsTowerRuleUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerMessage.ts"], (function(e) {
        var t, r, n, o, i, s, a, c, l, u;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy,
                        s = e._decorator,
                        a = e.Node,
                        c = e.NodeEventType
                }
                , function(e) {
                    l = e.GameUI
                }
                , function(e) {
                    u = e.StarsTowerMessage
                }
            ],
            execute: function() {
                var p, f, h, y;
                i._RF.push({}, "1abacPYXRJJXZzOHPV9EwXi", "StarsTowerRuleUI", void 0);
                var v = s.ccclass
                    , w = s.property;
                e("StarsTowerRuleUI", (p = w(a),
                v((y = t((h = function(e) {
                    function t() {
                        for (var t, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
                            i[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(i)) || this,
                            n(t, "closeBtn", y, o(t)),
                            t
                    }
                    r(t, e);
                    var i = t.prototype;
                    return i.start = function() {
                        this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this)
                    }
                        ,
                        i.onCloseBtn = function() {
                            this.notify(u.CLOSE_RULE_VIEW)
                        }
                        ,
                        t
                }(l)).prototype, "closeBtn", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    f = h)) || f));
                i._RF.pop()
            }
        }
    }
));
