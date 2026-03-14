System.register("chunks:///_virtual/DazzleDressSuitDataProxy.ts", ["cc", "./Constants.ts", "./GlobalAPI.ts", "./DazzleDressSuitDataDes.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, i, n, s, r;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    n = t.GlobalAPI
                }
                , function(t) {
                    s = t.DazzleDressSuitDataDes
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "761a3LoLFRBwKgQUycDSy7w", "DazzleDressSuitDataProxy", void 0);
                t("DazzleDressSuitDataProxy", function() {
                    function t(t) {
                        void 0 === t && (t = null),
                            this._initialized = !1,
                            this._items = void 0,
                            this._itemNum = void 0;
                        var e = n.getTimer();
                        this.processXML(t),
                        CONFIG.DEBUG && console.log("[AngelItemDataProxy]解析:", n.getTimer() - e)
                    }
                    var e = t.prototype;
                    return e.insert = function() {
                        return !1
                    }
                        ,
                        e.select = function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                                e[i] = arguments[i];
                            return this._initialized ? "*" == e[0] ? this._items : this._items[e[0]] : null
                        }
                        ,
                        e.update = function() {
                            return !1
                        }
                        ,
                        e.deleted = function() {
                            return !1
                        }
                        ,
                        e.clear = function() {}
                        ,
                        e.getName = function() {
                            return i.DAZZLE_DRESS_DATA_SET
                        }
                        ,
                        e.processXML = function(t) {
                            if (!t)
                                throw r.IS_LOCAL,
                                    new Error(this.constructor.name + "'s function [processXML] param is illegal");
                            this._items = new Map,
                                this._itemNum = 0;
                            for (var e, i, n = t.Set, o = n.length, a = 0; a < o; ++a)
                                e = new s,
                                    i = n[a],
                                    e.id = Number(i.id),
                                    e.name = String(i.name),
                                    this._items[e.id] = e,
                                    ++this._itemNum;
                            this._initialized = !0
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
