System.register("chunks:///_virtual/GameNoticeCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./DEFINE.ts", "./Xml2Json.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, n, o, a, i, r, c, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        a = t.assetManager
                }
                , function(t) {
                    i = t.ConfigurationLoader
                }
                , function(t) {
                    r = t.DEFINE
                }
                , function(t) {
                    c = t.Xml2Json
                }
                , function(t) {
                    u = t.default
                }
            ],
            execute: function() {
                o._RF.push({}, "b54384Ki+JMD6uio3Xo2xhm", "GameNoticeCfgLoader", void 0);
                var s = function() {};
                t("GameNoticeCfgLoader", function(t) {
                    function o(e) {
                        var n;
                        if ((n = t.call(this) || this)._data = [],
                        null == e)
                            throw new Error("GameNoticeCfgLoader can not be instantiated.");
                        return n
                    }
                    return e(o, t),
                        o.prototype.loadFromXmlRemote = function() {
                            var t = this
                                , e = r.FLASH_CDN + "h5conf/GameNoticeList.xml";
                            a.loadRemote(e, null, (function(e, n) {
                                    if (n) {
                                        for (var o = c.getJsonNew(n.text).GameNotice, a = 0; a < o.Item.length; a++) {
                                            var i = o.Item[a];
                                            if (i) {
                                                var r = {
                                                    type: i.type,
                                                    title: i.title,
                                                    content: i.content
                                                };
                                                t._data.push(r)
                                            }
                                        }
                                        1 == u.IS_LOCAL && (console.log("GameNoticeList"),
                                            console.log(t._data))
                                    }
                                }
                            ))
                        }
                        ,
                        n(o, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }, {
                            key: "adverseUpdateTitle",
                            get: function() {
                                var t = this._data.find((function(t) {
                                        return "update" == t.type
                                    }
                                ));
                                return t ? t.title : ""
                            }
                        }, {
                            key: "adverseUpdateContent",
                            get: function() {
                                var t = this._data.find((function(t) {
                                        return "update" == t.type
                                    }
                                ));
                                return t ? t.content : ""
                            }
                        }, {
                            key: "adverseSpecialTitle",
                            get: function() {
                                var t = this._data.find((function(t) {
                                        return "special" == t.type
                                    }
                                ));
                                return t ? t.title : ""
                            }
                        }, {
                            key: "adverseSpecialContent",
                            get: function() {
                                var t = this._data.find((function(t) {
                                        return "special" == t.type
                                    }
                                ));
                                return t ? t.content : ""
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == o.instance && (o.instance = new o(new s),
                                    o.instance.loadFromXmlRemote()),
                                    o.instance
                            }
                        }]),
                        o
                }(i)).instance = void 0,
                    o._RF.pop()
            }
        }
    }
));
