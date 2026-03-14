System.register("chunks:///_virtual/SelectorBox2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./ComboItem.ts", "./DComboBox.ts"], (function(t) {
        var e, o, i, n, c, s, r;
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
                    r = t.DComboBox
                }
            ],
            execute: function() {
                i._RF.push({}, "a866drAKnNO9I8PnT2TN88M", "SelectorBox", void 0);
                t("SelectorBox", function(t) {
                    function i(e) {
                        var i, c;
                        return (i = t.call(this) || this)._eqLogic = void 0,
                            i._list = void 0,
                            i._tempList = void 0,
                            i._eqLogic = e,
                            (c = new r).addItem("位置筛选", "全部", 0, 0),
                            c.addItem("位置筛选", "武器", 1, 1),
                            c.addItem("位置筛选", "防具", 2, 2),
                            c.addItem("位置筛选", "饰品", 3, 3),
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
                                this._eqLogic.searchItemsByType(e.type)
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
