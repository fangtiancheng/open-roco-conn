System.register("chunks:///_virtual/NodeUpAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdapterBase.ts", "./GlobalConfig.ts"], (function(t) {
        var e, i, o, s, n, a, h;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        o = t._decorator,
                        s = t.view,
                        n = t.screen
                }
                , function(t) {
                    a = t.AdapterBase
                }
                , function(t) {
                    h = t.GlobalConfig
                }
            ],
            execute: function() {
                var d;
                i._RF.push({}, "3fba3c/XlBCt5kh0ladccqe", "NodeUpAdapter", void 0);
                var r = o.ccclass;
                o.property,
                    t("NodeUpAdapter", r("NodeUpAdapter")(d = function(t) {
                        function i() {
                            return t.apply(this, arguments) || this
                        }
                        e(i, t);
                        var o = i.prototype;
                        return o.onLoad = function() {
                            t.prototype.onLoad.call(this)
                        }
                            ,
                            o.onSizeChanged = function(t) {
                                this.showLog && console.log(this.node.name + "==" + this.constructor.name + '=="onSizeChanged"'),
                                    this.setAdapter()
                            }
                            ,
                            o.caculateOffset = function() {
                                this.absOffsetX = h.designWidth / 2 - Math.abs(this.orPosX),
                                    this.absOffsetY = h.designHeight / 2 - Math.abs(this.orPosY)
                            }
                            ,
                            o.setAdapter1 = function() {
                                this.caculateOffset();
                                var t = s.getDesignResolutionSize()
                                    , e = n.windowSize.height / n.windowSize.width
                                    , i = t.width * e
                                    , o = -this.absOffsetY * e;
                                this.node.setPosition(this.node.getPosition().x, i / 2 + o)
                            }
                            ,
                            o.setAdapter = function() {
                                this.caculateOffset();
                                var t = s.getDesignResolutionSize()
                                    , e = t.width / t.height
                                    , i = n.windowSize.width / n.windowSize.height
                                    , o = n.windowSize.height / n.windowSize.width
                                    , a = t.width * o;
                                i > e && (a = t.height);
                                var h = a / 2 - 1 * this.absOffsetY;
                                this.node.setPosition(this.node.getPosition().x, h)
                            }
                            ,
                            i
                    }(a)) || d);
                i._RF.pop()
            }
        }
    }
));
