System.register("chunks:///_virtual/IConItem1.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./NodeExtend.ts", "./IConItem.ts"], (function(t) {
        var e, n, i, o, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.default
                }
                , function(t) {
                    o = t.NodeExtend
                }
                , function(t) {
                    s = t.IConItem
                }
            ],
            execute: function() {
                n._RF.push({}, "f48c22v3bhKzqYBUgsVMze6", "IConItem1", void 0);
                t("IConItem1", function(t) {
                    function n(e, n, o) {
                        var u;
                        void 0 === e && (e = 0),
                        void 0 === n && (n = 0),
                        void 0 === o && (o = !0),
                            (u = t.call(this) || this).data = void 0,
                            u._item = void 0,
                            u.visible = !0;
                        var a = i.Instance.getPrefabByName("base/IConItem");
                        return u.addChild(a),
                            u._item = new s(e,n,o),
                            u.addChild(u._item),
                            u
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.updateTxt = function() {
                        this._item.updateTxt()
                    }
                        ,
                        o.setData = function(t) {
                            this.data = t,
                                this._item.setData(t)
                        }
                        ,
                        o.getCount = function() {
                            return this._item.getCount()
                        }
                        ,
                        o.onDestory = function() {}
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
