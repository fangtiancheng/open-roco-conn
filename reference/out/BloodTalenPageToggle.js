System.register("chunks:///_virtual/BloodTalenPageToggle.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts"], (function(e) {
        var n, o, t, r, a, i, l, g;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    o = e.inheritsLoose,
                    t = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        i = e._decorator,
                        l = e.ToggleContainer
                }
                , function(e) {
                    g = e.GameSubUI
                }
            ],
            execute: function() {
                var c, s, u, h;
                a._RF.push({}, "ebd3ceTSVlLB6ASGZVlTBl/", "BloodTalenPageToggle", void 0);
                var p = i.ccclass
                    , d = i.property;
                e("BloodTalenPageToggle", (c = d(l),
                p((h = n((u = function(e) {
                    function n() {
                        for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
                            a[i] = arguments[i];
                        return n = e.call.apply(e, [this].concat(a)) || this,
                            t(n, "toggleContainer", h, r(n)),
                            n.onChangePage = function(e) {}
                            ,
                            n
                    }
                    o(n, e);
                    var a = n.prototype;
                    return a.onLoad = function() {
                        var e = new n.EventHandler;
                        e.target = this.node,
                            e.component = "BloodTalenPageToggle",
                            e.handler = "onToggle",
                            this.toggleContainer.checkEvents.push(e)
                    }
                        ,
                        a.onToggle = function(e) {
                            var n = this.toggleContainer.toggleItems.indexOf(e);
                            this.onChangePage(n)
                        }
                        ,
                        a.setChecked = function(e) {
                            this.toggleContainer.toggleItems[e].isChecked = !0
                        }
                        ,
                        n
                }(g)).prototype, "toggleContainer", [c], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    s = u)) || s));
                a._RF.pop()
            }
        }
    }
));
