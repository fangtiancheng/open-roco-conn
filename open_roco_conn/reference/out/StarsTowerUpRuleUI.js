System.register("chunks:///_virtual/StarsTowerUpRuleUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerMessage.ts"], (function(t) {
        var e, r, n, o, i, s, a, c, l, u;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    r = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy,
                        s = t._decorator,
                        a = t.Node,
                        c = t.NodeEventType
                }
                , function(t) {
                    l = t.GameUI
                }
                , function(t) {
                    u = t.StarsTowerMessage
                }
            ],
            execute: function() {
                var p, f, h, y;
                i._RF.push({}, "a9d32ulmCtC4b0K/AtrPk2I", "StarsTowerUpRuleUI", void 0);
                var U = s.ccclass
                    , S = s.property;
                t("StarsTowerUpRuleUI", (p = S(a),
                U((y = e((h = function(t) {
                    function e() {
                        for (var e, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
                            i[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(i)) || this,
                            n(e, "closeBtn", y, o(e)),
                            e
                    }
                    r(e, t);
                    var i = e.prototype;
                    return i.start = function() {
                        this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this)
                    }
                        ,
                        i.onCloseBtn = function() {
                            this.notify(u.CLOSE_UPBOSS_RULE_VIEW)
                        }
                        ,
                        e
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
