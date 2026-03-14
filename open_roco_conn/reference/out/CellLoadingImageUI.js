System.register("chunks:///_virtual/CellLoadingImageUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtendEx.ts", "./ResManager.ts"], (function(e) {
        var n, t, i, o, a;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    o = e.NodeExtendEx
                }
                , function(e) {
                    a = e.default
                }
            ],
            execute: function() {
                i._RF.push({}, "a62fazm/WdIs56XFxkabwB6", "CellLoadingImageUI", void 0);
                e("CellLoadingImageUI", function(e) {
                    n(o, e);
                    var i = o.prototype;
                    function o(n, t) {
                        var i;
                        i = e.call(this) || this;
                        var o = a.Instance.getPrefabByName("common/CellLoadingImageUI");
                        return i.initView(o),
                            i.width = n,
                            i.height = t,
                            i
                    }
                    return i.onInit = function() {
                        this.addChild(this._view)
                    }
                        ,
                        i.dispose = function() {}
                        ,
                        i.afterLoaded = function() {}
                        ,
                        t(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return ""
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return ""
                            }
                        }]),
                        o
                }(o));
                i._RF.pop()
            }
        }
    }
));
