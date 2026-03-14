System.register("chunks:///_virtual/NotSpiritTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtendEx.ts"], (function(t) {
        var i, n, e, o;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.NodeExtendEx
                }
            ],
            execute: function() {
                e._RF.push({}, "f396dNnvwNDAI9cb3Mub8bi", "NotSpiritTips", void 0);
                t("NotSpiritTips", function(t) {
                    function e() {
                        var i;
                        return (i = t.call(this) || this).onPreRequest(),
                            i
                    }
                    i(e, t);
                    var o = e.prototype;
                    return o.dispose = function() {}
                        ,
                        o.afterLoaded = function() {
                            this.init()
                        }
                        ,
                        o.init = function() {
                            this._isInit
                        }
                        ,
                        o.onInit = function() {
                            this.addChild(this._view)
                        }
                        ,
                        n(e, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/UINotSpiritTips_1600"
                            }
                        }]),
                        e
                }(o));
                e._RF.pop()
            }
        }
    }
));
