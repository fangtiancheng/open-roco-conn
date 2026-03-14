System.register("chunks:///_virtual/NodeDownAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdapterBase.ts", "./GlobalConfig.ts"], (function(t) {
        var e, o, i, n, s, a, h;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        i = t._decorator,
                        n = t.view,
                        s = t.screen
                }
                , function(t) {
                    a = t.AdapterBase
                }
                , function(t) {
                    h = t.GlobalConfig
                }
            ],
            execute: function() {
                var r;
                o._RF.push({}, "4584ek9bwhE0JQwHZ3sc/lS", "NodeDownAdapter", void 0);
                var c = i.ccclass;
                i.property,
                    t("NodeDownAdapter", c("NodeDownAdapter")(r = function(t) {
                        function o() {
                            return t.apply(this, arguments) || this
                        }
                        e(o, t);
                        var i = o.prototype;
                        return i.onLoad = function() {
                            t.prototype.onLoad.call(this)
                        }
                            ,
                            i.onSizeChanged = function(t) {
                                this.showLog && console.log(this.node.name + "==" + this.constructor.name + '=="onSizeChanged"'),
                                    this.setAdapter()
                            }
                            ,
                            i.caculateOffset = function() {
                                this.absOffsetX = h.designWidth / 2 - Math.abs(this.orPosX),
                                    this.absOffsetY = h.designHeight / 2 - Math.abs(this.orPosY)
                            }
                            ,
                            i.setAdapter = function() {
                                this.caculateOffset();
                                var t = n.getDesignResolutionSize()
                                    , e = t.width / t.height
                                    , o = s.windowSize.width / s.windowSize.height
                                    , i = s.windowSize.height / s.windowSize.width
                                    , a = -t.width * i;
                                o > e && (a = -t.height);
                                var h = 1 * this.absOffsetY;
                                this.node.setPosition(this.node.getPosition().x, a / 2 + h)
                            }
                            ,
                            o
                    }(a)) || r);
                o._RF.pop()
            }
        }
    }
));
