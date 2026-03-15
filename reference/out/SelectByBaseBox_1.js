System.register("chunks:///_virtual/SelectByBaseBox2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./ComboItem.ts", "./DComboBox.ts"], (function(t) {
        var e, o, i, n, s, d, c;
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
                    s = t.NodeExtend
                }
                , function(t) {
                    d = t.ComboItem
                }
                , function(t) {
                    c = t.DComboBox
                }
            ],
            execute: function() {
                i._RF.push({}, "e801cqD6l9MXLHjTNnKmi/h", "SelectByBaseBox", void 0);
                t("SelectByBaseBox", function(t) {
                    function i(e) {
                        var i, s;
                        return (i = t.call(this) || this)._eqLogic = void 0,
                            i._list = void 0,
                            i._tempList = void 0,
                            i._eqLogic = e,
                            (s = new c).addItem("属性筛选", "全部", 0, 0),
                            s.addItem("属性筛选", "精力", 7, 1),
                            s.addItem("属性筛选", "物攻", 2, 2),
                            s.addItem("属性筛选", "物防", 3, 3),
                            s.addItem("属性筛选", "魔攻", 4, 4),
                            s.addItem("属性筛选", "魔防", 5, 5),
                            s.addItem("属性筛选", "暴击", 10, 6),
                            s.addItem("属性筛选", "闪避", 9, 7),
                            s.addItem("属性筛选", "命中", 8, 8),
                            s.addItem("属性筛选", "抗暴", 11, 9),
                            i.addChild(s),
                            s.on(n.TOUCH_END, i.__click, o(i)),
                            i
                    }
                    e(i, t);
                    var s = i.prototype;
                    return s.onShowItems = function(t) {
                        this._tempList != t && (this._list = t)
                    }
                        ,
                        s.__click = function(t) {
                            if (t.target instanceof d) {
                                var e = t.target;
                                this._eqLogic.searchItemsByBase(e.type)
                            }
                        }
                        ,
                        s.dispose = function() {}
                        ,
                        i
                }(s));
                i._RF.pop()
            }
        }
    }
));
