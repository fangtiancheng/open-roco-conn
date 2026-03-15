System.register("chunks:///_virtual/BaseView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(n) {
        var e, t, o;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    o = n.AgentNode
                }
            ],
            execute: function() {
                t._RF.push({}, "6be61eauz9EX7o1cU/OYLTJ", "BaseView", void 0);
                n("BaseView", function(n) {
                    function t() {
                        return n.call(this) || this
                    }
                    e(t, n);
                    var o = t.prototype;
                    return o.onStageResize = function(n) {}
                        ,
                        o.onInit = function() {}
                        ,
                        o.onShow = function() {}
                        ,
                        o.onUpdate = function(n) {}
                        ,
                        o.onClose = function() {}
                        ,
                        o.onDestroy = function() {}
                        ,
                        t
                }(o));
                t._RF.pop()
            }
        }
    }
));
