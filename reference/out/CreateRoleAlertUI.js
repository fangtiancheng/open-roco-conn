System.register("chunks:///_virtual/CreateRoleAlertUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StringUtil.ts"], (function(t) {
        var e, n, r, o, i, c, a, l, s;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    r = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy,
                        c = t._decorator,
                        a = t.Button
                }
                , function(t) {
                    l = t.GameUI
                }
                , function(t) {
                    s = t.StringUtil
                }
            ],
            execute: function() {
                var u, f, p, h;
                i._RF.push({}, "f6493aJeEpJb5stTfwoqiAf", "CreateRoleAlertUI", void 0);
                var d = c.ccclass
                    , m = c.property;
                t("CreateRoleAlertUI", (u = m(a),
                d((h = e((p = function(t) {
                    function e() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return e = t.call.apply(t, [this].concat(i)) || this,
                            r(e, "confirmBtn", h, o(e)),
                            e
                    }
                    n(e, t);
                    var i = e.prototype;
                    return i.onLoad = function() {
                        this.confirmBtn.node.on("click", this.onConfirm, this)
                    }
                        ,
                        i.onConfirm = function() {
                            s.setCookie("creat", "", -1),
                                window.location.reload()
                        }
                        ,
                        e
                }(l)).prototype, "confirmBtn", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    f = p)) || f));
                i._RF.pop()
            }
        }
    }
));
