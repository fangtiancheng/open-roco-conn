System.register("chunks:///_virtual/NodeLeftAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdapterBase.ts", "./GlobalConfig.ts"], (function(o) {
        var e, t, s, i, r, h, n;
        return {
            setters: [function(o) {
                e = o.inheritsLoose
            }
                , function(o) {
                    t = o.cclegacy,
                        s = o._decorator,
                        i = o.view,
                        r = o.screen
                }
                , function(o) {
                    h = o.AdapterBase
                }
                , function(o) {
                    n = o.GlobalConfig
                }
            ],
            execute: function() {
                var a;
                t._RF.push({}, "af613BuOGBHsqT3Ne/+cDcF", "NodeLeftAdapter", void 0);
                var c = s.ccclass;
                s.property,
                    o("NodeLeftAdapter", c("NodeLeftAdapter")(a = function(o) {
                        function t() {
                            return o.apply(this, arguments) || this
                        }
                        e(t, o);
                        var s = t.prototype;
                        return s.onLoad = function() {
                            o.prototype.onLoad.call(this)
                        }
                            ,
                            s.onSizeChanged = function(o) {
                                this.showLog && console.log(this.node.name + "==" + this.constructor.name + '=="onSizeChanged"'),
                                    this.setAdapter()
                            }
                            ,
                            s.caculateOffset = function() {
                                this.absOffsetX = n.designWidth / 2 - Math.abs(this.orPosX),
                                    this.absOffsetY = n.designHeight / 2 - Math.abs(this.orPosY),
                                this.showLog && console.error("orPosX=" + this.orPosX),
                                this.showLog && console.error("orPosY=" + this.orPosY),
                                this.showLog && console.error("absOffsetX=" + this.absOffsetX),
                                this.showLog && console.error("absOffsetY=" + this.absOffsetY)
                            }
                            ,
                            s.setAdapter = function() {
                                this.caculateOffset();
                                var o = i.getDesignResolutionSize();
                                this.showLog && console.error("screen.windowSize=" + r.windowSize.width + "=" + r.windowSize.height),
                                this.showLog && console.error("designSize.windowSize=" + o.width + "=" + o.height);
                                var e = o.width / o.height
                                    , t = r.windowSize.width / r.windowSize.height
                                    , s = r.windowSize.width / r.windowSize.height;
                                this.showLog && console.error("scaleY=" + s);
                                var h = -o.height * s;
                                this.showLog && console.error("realWidth=" + o.height + "/" + s + "=" + h),
                                t < e && (h = -o.width,
                                this.showLog && console.error("realWidth=" + h)),
                                this.showLog && console.error("realWidth=" + h);
                                var n = 1 * this.absOffsetX
                                    , a = h / 2 + n;
                                this.showLog && console.error("posX=" + a),
                                    this.node.setPosition(a, this.node.getPosition().y);
                                var c = "realWidth=" + Math.floor(h) + ",offsetX=" + n + ",posX=" + a + " ";
                                this.setLog(c)
                            }
                            ,
                            t
                    }(h)) || a);
                t._RF.pop()
            }
        }
    }
));
