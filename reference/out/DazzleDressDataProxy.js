System.register("chunks:///_virtual/DazzleDressDataProxy.ts", ["cc", "./Constants.ts", "./DEFINE.ts", "./DazzleDressDataDes.ts", "./GlobalAPI.ts"], (function(t) {
        var e, i, s, r, n;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    s = t.DEFINE
                }
                , function(t) {
                    r = t.DazzleDressDataDes
                }
                , function(t) {
                    n = t.GlobalAPI
                }
            ],
            execute: function() {
                e._RF.push({}, "e8767sWOAhE0qnfOVmC7chQ", "DazzleDressDataProxy", void 0);
                t("DazzleDressDataProxy", function() {
                    function t(t, e) {
                        void 0 === e && (e = null),
                            this._initialized = !1,
                            this._items = void 0,
                            this._itemNum = void 0,
                            this._suits = void 0,
                            this._suitProxy = void 0;
                        var i = n.getTimer();
                        this._suitProxy = t,
                            this.processXML(e),
                        CONFIG.DEBUG && console.log("[AngelItemDataProxy]解析:", n.getTimer() - i)
                    }
                    var e = t.prototype;
                    return e.insert = function() {
                        return !1
                    }
                        ,
                        e.select = function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                                e[i] = arguments[i];
                            return this._initialized ? "*" == e[0] ? this._items : "number" == typeof e[0] ? this._items[e[0]] : e[0].hasOwnProperty("suit") && null != e[0].suit ? this._suits[e[0].suit] : null : null
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
                            return i.DAZZLE_DRESS_DATA
                        }
                        ,
                        e.processXML = function(t) {
                            if (null != t) {
                                this._items = new Map,
                                    this._itemNum = 0,
                                    this._suits = new Map;
                                for (var e, i, n, u = t.item, o = u.length, a = s.DAZZLE_DRESS_RES_ROOT, c = 0; c < o; ++c) {
                                    if (e = new r,
                                        i = u[c],
                                        e.id = n = Number(i.id),
                                        e.name = String(i.name),
                                        e.type = Number(i.type),
                                        e.score = Number(i.score),
                                        e.recoverprice = Number(i.recover),
                                        e.recoverable = e.recoverprice > 0,
                                        e.description = String(i.des),
                                        e.prices = [Number(i.cost7), Number(i.cost30[0]), Number(i.costforever[0])],
                                        e.isset = Number(i.isset),
                                        e.isvip = "1" == String(i.isvip),
                                        e.outtime = Number(i.outtime),
                                        e.intime = Number(i.intime),
                                        e.url = a + e.type + "/" + n + "_bag.png",
                                    e.isset > 0) {
                                        var l = this._suitProxy.select(e.isset);
                                        null != l && (l.daAvatar[e.type] = e.id)
                                    }
                                    this._items[e.id] = e,
                                        ++this._itemNum,
                                    e.isset > 0 && (null == this._suits[e.isset] && (this._suits[e.isset] = []),
                                        this._suits[e.isset].push(e))
                                }
                                this._initialized = !0
                            }
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
