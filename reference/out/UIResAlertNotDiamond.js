System.register("chunks:///_virtual/UIResAlertNotDiamond.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtendEx.ts"], (function(e) {
        var t, n, o, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    i = e.NodeExtendEx
                }
            ],
            execute: function() {
                o._RF.push({}, "c307a00C2ZFP6ShdeLlEgha", "UIResAlertNotDiamond", void 0);
                e("UIResAlertNotDiamond", function(e) {
                    function o() {
                        var t;
                        return (t = e.call(this) || this).onPreRequest(),
                            t
                    }
                    t(o, e);
                    var i = o.prototype;
                    return i.afterLoaded = function() {
                        this.onInit()
                    }
                        ,
                        i.dispose = function() {}
                        ,
                        i.onInit = function() {
                            this.addChild(this._view)
                        }
                        ,
                        n(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/UIResAlertNotDiamond_1600"
                            }
                        }]),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
