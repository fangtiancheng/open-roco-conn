System.register("chunks:///_virtual/IConItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts", "./GlowFilter.ts", "./TextField.ts"], (function(t) {
        var n, e, i, o, s, a, u, r;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        i = t.color,
                        o = t.Vec2
                }
                , function(t) {
                    s = t.AImage
                }
                , function(t) {
                    a = t.GlowFilter
                }
                , function(t) {
                    u = t.TextField,
                        r = t.TextFormatAlign
                }
            ],
            execute: function() {
                e._RF.push({}, "80c06ydPxhLJJcgwtx4H/Ic", "IConItem", void 0);
                t("IConItem", function(t) {
                    function e(n, e, s) {
                        var l;
                        void 0 === n && (n = 0),
                        void 0 === e && (e = 0),
                        void 0 === s && (s = !0),
                            (l = t.call(this, n, e, s) || this).numTxt = void 0,
                            l.tooltip = void 0,
                            l.data = void 0,
                            l.target = void 0,
                            l.visible = !1,
                            l.numTxt = new u,
                            l.numTxt.visible = !1,
                            l.numTxt.selectable = !1,
                            l.numTxt.filters = [new a(16777215,1,2,2,4)],
                            l.addChild(l.numTxt);
                        var h = l.numTxt.defaultTextFormat;
                        return h.target.fontFamily = "宋体",
                            h.size = 32,
                            h.color = i(255, 255, 255),
                            h.bold = !0,
                            h.align = r.RIGHT,
                            h.anchorPoint = new o(1,0),
                            h.scaleX = .5,
                            h.scaleY = .5,
                            h.addLabelOutline(),
                            l.numTxt.defaultTextFormat = h,
                            l
                    }
                    n(e, t);
                    var s = e.prototype;
                    return s.updateTxt = function() {
                        this.numTxt.visible = !0,
                            this.numTxt.x = 34,
                            this.numTxt.y = -38,
                            this.setChildIndex(this.numTxt, this.numChildren - 1),
                            this.numTxt.text = this.numTxt.text
                    }
                        ,
                        s.setData = function(t) {
                            this.data = t,
                                null == this.data ? (this.visible = !1,
                                    this.unload()) : (this.visible = !0,
                                    t.hasOwnProperty("iconName") ? this.numTxt.text = t.iconName : t.hasOwnProperty("level") ? this.numTxt.text = t.hasOwnProperty("level") ? "Lv." + t.level : "" : t.hasOwnProperty("num") ? this.numTxt.text = t.hasOwnProperty("num") ? "x" + t.num : "" : t.hasOwnProperty("count") ? this.numTxt.text = t.hasOwnProperty("count") ? "x" + t.count : "" : this.numTxt.text = "",
                                    this.tooltip = t.hasOwnProperty("tooltip") ? t.tooltip : t.tips,
                                    this.setPath(t.hasOwnProperty("src") ? t.src : t.icon))
                        }
                        ,
                        s.getCount = function() {
                            return null == this.data ? 0 : Number(this.data.hasOwnProperty("num") ? this.data.num : this.data.count)
                        }
                        ,
                        s.addImage = function(n) {
                            t.prototype.addImage.call(this, n),
                                this.updateTxt()
                        }
                        ,
                        e
                }(s));
                e._RF.pop()
            }
        }
    }
));
