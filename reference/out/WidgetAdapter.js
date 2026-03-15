System.register("chunks:///_virtual/WidgetAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, o, n, i, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        n = t.UITransform,
                        i = t.Widget,
                        s = t.Component
                }
            ],
            execute: function() {
                o._RF.push({}, "a1072uZI7JGopKEYoL/jO03", "WidgetAdapter", void 0);
                t("WidgetAdapter", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return e(o, t),
                        o.prototype.start = function() {
                            this.node && !this.node.getComponent(n) && this.node.addComponent(n);
                            var t = this.node.getComponent(n);
                            t.width = 1600,
                                t.height = 900,
                            this.node && !this.node.getComponent(i) && this.node.addComponent(i);
                            var e = this.node.getComponent(i);
                            e.alignMode = i.AlignMode.ON_WINDOW_RESIZE,
                                e.left = 0,
                                e.right = 0,
                                e.top = 0,
                                e.bottom = 0,
                                e.isAbsoluteTop = !0,
                                e.isAbsoluteBottom = !0,
                                e.isAbsoluteLeft = !0,
                                e.isAbsoluteRight = !0,
                                e.isAbsoluteHorizontalCenter = !0,
                                e.isAbsoluteVerticalCenter = !0,
                                e.isAlignTop = !0,
                                e.isAlignBottom = !0,
                                e.isAlignLeft = !0,
                                e.isAlignRight = !0,
                                e.enabled = !0,
                                e.setDirty()
                        }
                        ,
                        o
                }(s));
                o._RF.pop()
            }
        }
    }
));
