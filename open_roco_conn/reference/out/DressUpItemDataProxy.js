System.register("chunks:///_virtual/DressUpItemDataProxy.ts", ["cc", "./XML.ts", "./Constants.ts", "./DEFINE.ts", "./URLLoaderEvent.ts", "./URLLoader.ts", "./URLRequest.ts", "./IOErrorEvent.ts", "./DressUpItemDes.ts", "./Xml2Json.ts"], (function(t) {
        var e, n, r, o, s, i, u, a, c, _;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.XML
                }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    o = t.DEFINE
                }
                , function(t) {
                    s = t.URLLoaderEvent
                }
                , function(t) {
                    i = t.URLLoader
                }
                , function(t) {
                    u = t.URLRequest
                }
                , function(t) {
                    a = t.IOErrorEvent
                }
                , function(t) {
                    c = t.DressUpItemDes
                }
                , function(t) {
                    _ = t.Xml2Json
                }
            ],
            execute: function() {
                e._RF.push({}, "2ff0dG5B55PvbSmQyoKt3Fq", "DressUpItemDataProxy", void 0);
                t("DressUpItemDataProxy", function() {
                    function t() {
                        this.dic = void 0;
                        var t = new i;
                        t.load(new u(o.formatFileVersion("http://res.17roco.qq.com/res/ext/dressup/conf/dressup.xml"))),
                            t.addEventListener(s.COMPLETE, this.onComplete, this),
                            t.addEventListener(a.IO_ERROR, this.onIOError, this)
                    }
                    var e = t.prototype;
                    return e.onIOError = function(t) {
                        t.__target__ && (t.__target__.removeEventListener(s.COMPLETE, this.onComplete, this),
                            t.__target__.removeEventListener(a.IO_ERROR, this.onIOError, this))
                    }
                        ,
                        e.onComplete = function(t) {
                            t.__target__ && (t.__target__.removeEventListener(s.COMPLETE, this.onComplete, this),
                                t.__target__.removeEventListener(a.IO_ERROR, this.onIOError, this)),
                                this.dic = new Map;
                            for (var e, r = t.__target__.data, o = new n(_.getJsonNew(r).dressup).data, i = 0; i < o.shop.item.length; i++)
                                e = new c(o.shop.item[i]),
                                    this.dic[e.id] = e
                        }
                        ,
                        e.insert = function() {
                            return !1
                        }
                        ,
                        e.select = function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                                e[n] = arguments[n];
                            return null != e && 0 == e.length ? this.dic : null != e && "number" == typeof e[0] ? this.dic[e[0]] : null
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
                            return r.DRESSUP_LIST_DATA
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
