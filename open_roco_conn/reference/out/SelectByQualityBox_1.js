System.register("chunks:///_virtual/SelectByQualityBox2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./ComboItem.ts", "./DComboBox.ts"], (function(t) {
        var e, o, i, n, c, s, d;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    c = t.NodeExtend
                }
                , function(t) {
                    s = t.ComboItem
                }
                , function(t) {
                    d = t.DComboBox
                }
            ],
            execute: function() {
                i._RF.push({}, "55cfchzLfVN+LNweRN4QQB1", "SelectByQualityBox", void 0);
                t("SelectByQualityBox", function(t) {
                    function i(e) {
                        var i, c;
                        return (i = t.call(this) || this)._eqLogic = void 0,
                            i._list = void 0,
                            i._tempList = void 0,
                            i._eqLogic = e,
                            (c = new d).addItem("品质筛选", "全部", 0, 0),
                            c.addItem("品质筛选", "史诗", 5, 1),
                            c.addItem("品质筛选", "精良", 4, 2),
                            c.addItem("品质筛选", "稀有", 3, 3),
                            c.addItem("品质筛选", "普通", 2, 4),
                            i.addChild(c),
                            c.on(n.TOUCH_END, i.__click, o(i)),
                            i
                    }
                    e(i, t);
                    var c = i.prototype;
                    return c.onShowItems = function(t) {
                        this._tempList != t && (this._list = t)
                    }
                        ,
                        c.__click = function(t) {
                            if (t.target instanceof s) {
                                var e = t.target;
                                this._eqLogic.searchItemsByQuality(e.type)
                            }
                        }
                        ,
                        c.dispose = function() {}
                        ,
                        i
                }(c));
                i._RF.pop()
            }
        }
    }
));
