System.register("chunks:///_virtual/BgAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdapterBase.ts", "./GlobalConfig.ts"], (function(e) {
        var t, i, o, n, r, a, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy,
                        o = e._decorator,
                        n = e.view,
                        r = e.screen
                }
                , function(e) {
                    a = e.AdapterBase
                }
                , function(e) {
                    h = e.GlobalConfig
                }
            ],
            execute: function() {
                var s;
                i._RF.push({}, "7ec47TrXJ9MI6jovFECXW7K", "BgAdapter", void 0);
                var d = o.ccclass;
                o.property,
                    e("BgAdapter", d("BgAdapter")(s = function(e) {
                        function i() {
                            return e.apply(this, arguments) || this
                        }
                        t(i, e);
                        var o = i.prototype;
                        return o.onLoad = function() {
                            e.prototype.onLoad.call(this)
                        }
                            ,
                            o.onSizeChanged = function(e) {
                                this.showLog && console.log(this.node.name + "==" + this.constructor.name + '=="onSizeChanged"'),
                                    this.setAdapter()
                            }
                            ,
                            o.setAdapter1 = function() {
                                var e = n.getDesignResolutionSize()
                                    , t = Math.min(r.windowSize.width / e.width, r.windowSize.height / e.height);
                                console.error("scaleForShowAll=" + t);
                                var i = e.width * t
                                    , o = e.height * t;
                                console.error("real=" + i + "=" + o);
                                Math.max(r.windowSize.width / i, r.windowSize.height / o);
                                var a = r.windowSize.width / i
                                    , h = r.windowSize.height / o;
                                this.node.setScale(a, h),
                                    console.error("setScale=" + a + "=" + h);
                                e.width,
                                    e.height;
                                var s = r.windowSize.height / r.windowSize.width
                                    , d = r.windowSize.height / r.windowSize.width;
                                e.width;
                                console.error("realScale=" + s + "=" + d)
                            }
                            ,
                            o.setAdapter = function() {
                                this.caculateRealSize();
                                var e = this.realWidth / h.designWidth
                                    , t = this.realHeight / h.designHeight;
                                e = Math.abs(e),
                                    t = Math.abs(t),
                                    this.node.setScale(e, t)
                            }
                            ,
                            i
                    }(a)) || s);
                i._RF.pop()
            }
        }
    }
));
