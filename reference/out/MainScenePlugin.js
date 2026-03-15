System.register("chunks:///_virtual/MainScenePlugin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
        var t, e, i, o;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy,
                        i = n._decorator,
                        o = n.Component
                }
            ],
            execute: function() {
                var c;
                e._RF.push({}, "5a32fmSQbFJxIKsPrIn3QBe", "MainScenePlugin", void 0);
                var r = i.ccclass;
                i.property,
                    n("default", r("MainScenePlugin")(c = function(n) {
                        function e() {
                            return n.apply(this, arguments) || this
                        }
                        t(e, n);
                        var i = e.prototype;
                        return i.start = function() {}
                            ,
                            i.onLoad = function() {}
                            ,
                            i.onClickGiftBtn = function() {}
                            ,
                            i.onClickGuideBtn = function() {}
                            ,
                            e
                    }(o)) || c);
                e._RF.pop()
            }
        }
    }
));
