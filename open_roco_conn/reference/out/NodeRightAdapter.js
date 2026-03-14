System.register("chunks:///_virtual/NodeRightAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdapterBase.ts", "./GlobalConfig.ts"], (function(t) {
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
                var r;
                i._RF.push({}, "399a8jbIs9On5H9PeRhHjq9", "NodeRightAdapter", void 0);
                var d = o.ccclass;
                o.property,
                    t("NodeRightAdapter", d("NodeRightAdapter")(r = function(t) {
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
                            o.setAdapter = function() {
                                this.caculateOffset();
                                var t = s.getDesignResolutionSize()
                                    , e = t.width / t.height
                                    , i = n.windowSize.width / n.windowSize.height
                                    , o = n.windowSize.width / n.windowSize.height
                                    , a = t.height * o;
                                i < e && (a = t.width);
                                var h = 1 * this.absOffsetX
                                    , r = a / 2 - h;
                                this.node.setPosition(r, this.node.getPosition().y);
                                var d = "realWidth=" + Math.floor(a) + ",offsetX=" + h + ",posX=" + r + " ";
                                this.setLog(d)
                            }
                            ,
                            i
                    }(a)) || r);
                i._RF.pop()
            }
        }
    }
));
