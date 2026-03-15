System.register("chunks:///_virtual/VideoChangeWeatherConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActionChangeWeatherSegment.ts", "./VideoConverterBase.ts"], (function(e) {
        var t, n, r, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.ActionChangeWeatherSegment
                }
                , function(e) {
                    o = e.VideoConverterBase
                }
            ],
            execute: function() {
                n._RF.push({}, "6b81872HwpLpZy4brWMEyEu", "VideoChangeWeatherConverter", void 0);
                e("VideoChangeWeatherConverter", function(e) {
                    function n() {
                        var t;
                        return (t = e.call(this) || this).segmentArr = [],
                            t.attackR = void 0,
                            t
                    }
                    t(n, e);
                    var o = n.prototype;
                    return o.getSegments = function() {
                        return this.attackR = this._data,
                            this.getChangeWeatherSegments(),
                            this.segmentArr
                    }
                        ,
                        o.getChangeWeatherSegments = function() {
                            var e;
                            e = new r,
                                CONFIG.DEBUG,
                                console.log("[VideoSuperformConverter] ", "处理一个精灵变身的动画！"),
                                e.setScreen(this._screen),
                                e.setData(this.attackR),
                                this.segmentArr = this.segmentArr.concat(e)
                        }
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
