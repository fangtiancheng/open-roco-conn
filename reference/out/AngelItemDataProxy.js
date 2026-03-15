System.register("chunks:///_virtual/AngelItemDataProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Constants.ts", "./DEFINE.ts", "./ItemDataDes.ts"], (function(e) {
        var t, i, n, s, r, u, o, l;
        return {
            setters: [function(e) {
                t = e.createForOfIteratorHelperLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    s = e.GlobalAPI
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    u = e.Constants
                }
                , function(e) {
                    o = e.DEFINE
                }
                , function(e) {
                    l = e.ItemDataDes
                }
            ],
            execute: function() {
                n._RF.push({}, "ed64dCGXAVB27hfRJW1IsBJ", "AngelItemDataProxy", void 0);
                e("AngelItemDataProxy", function() {
                    function e(e) {
                        void 0 === e && (e = null),
                            this._initialized = !1,
                            this._items = void 0,
                            this._itemNum = 0;
                        var t = s.getTimer();
                        this.processXML(e),
                        CONFIG.DEBUG && console.log("[AngelItemDataProxy]解析:", s.getTimer() - t)
                    }
                    var n = e.prototype;
                    return n.insert = function() {
                        return !1
                    }
                        ,
                        n.select = function() {
                            return this._initialized ? "*" == (arguments.length <= 0 ? void 0 : arguments[0]) ? this._items : this.selectItem(arguments.length <= 0 ? void 0 : arguments[0]) : null
                        }
                        ,
                        n.update = function() {
                            return !1
                        }
                        ,
                        n.deleted = function() {
                            return !1
                        }
                        ,
                        n.clear = function() {
                            this._items = null,
                                this._itemNum = 0
                        }
                        ,
                        n.getName = function() {
                            return u.ITEM_DATA
                        }
                        ,
                        n.selectItem = function(e) {
                            return this._initialized ? this._items[e] : null
                        }
                        ,
                        n.selectItems = function(e, i) {
                            if (void 0 === e && (e = 0),
                            void 0 === i && (i = 0),
                                !this._initialized)
                                return [];
                            var n = [];
                            if (0 == e && 0 == i)
                                for (var s, r = t(this._items.values()); !(s = r()).done; ) {
                                    var u = s.value;
                                    n.push(u)
                                }
                            else if (e > 0)
                                if (i > 0)
                                    for (var l, a = t(this._items.values()); !(l = a()).done; ) {
                                        u = l.value;
                                        o.getItemType(u.id) == e && o.getItemType(u.id, 1) == i && n.push(u)
                                    }
                                else
                                    for (var c, m = t(this._items.values()); !(c = m()).done; ) {
                                        u = c.value;
                                        o.getItemType(u.id) == e && n.push(u)
                                    }
                            return n
                        }
                        ,
                        n.selectItemsByID = function(e) {
                            if (!this._initialized)
                                return [];
                            for (var t = [], i = e.length, n = 0; n < i; ++n) {
                                var s = this._items[e[n]];
                                null != s && t.push(s)
                            }
                            return t
                        }
                        ,
                        n.processXML = function(e) {
                            if (!e)
                                throw r.IS_LOCAL,
                                    new Error(this.constructor.name + "'s function [processXML] param is illegal");
                            this._items = new Map,
                                this._itemNum = 0;
                            for (var t = e.Items.Item, i = o.ITEM_RES_ROOT, n = 0; n < t.length; ++n) {
                                var s = new l;
                                s.id = Number(t[n].ID),
                                    s.name = String(t[n].Name),
                                t[n].Desc instanceof Object && (t[n].Desc = ""),
                                    s.description = String(t[n].Desc),
                                    s.unique = "1" == String(t[n].Unique),
                                    s.type = o.getItemType(s.id),
                                    s.subtype = o.getItemType(s.id, 1),
                                    s.url = i + s.id + ".png",
                                    s.price = Number(t[n].Price),
                                    s.expireTime = Number(t[n].ExpireTime),
                                    this._items[s.id] = s,
                                    ++this._itemNum
                            }
                            this._initialized = !0
                        }
                        ,
                        i(e, [{
                            key: "itemLength",
                            get: function() {
                                return this._itemNum
                            }
                        }]),
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
