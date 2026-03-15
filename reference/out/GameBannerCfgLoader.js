System.register("chunks:///_virtual/GameBannerCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./DEFINE.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./BuildLogHelper.ts"], (function(e) {
        var n, t, a, o, r, l, s, i, c, f, u, m;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createForOfIteratorHelperLoose,
                    a = e.createClass
            }
                , function(e) {
                    o = e.cclegacy,
                        r = e.assetManager,
                        l = e.JsonAsset,
                        s = e.TextAsset
                }
                , function(e) {
                    i = e.ConfigurationLoader
                }
                , function(e) {
                    c = e.DEFINE
                }
                , function(e) {
                    f = e.Xml2Json
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    m = e.default
                }
            ],
            execute: function() {
                o._RF.push({}, "67c7ai8ULNH1Kp7j+kBUNPf", "GameBannerCfgLoader", void 0);
                var g = function() {};
                e("GameBannerCfgLoader", function(e) {
                    function o(n) {
                        var t;
                        if ((t = e.call(this) || this)._data = [],
                        null == n)
                            throw new Error("GameBannerCfgLoader can not be instantiated.");
                        return t
                    }
                    n(o, e);
                    var i = o.prototype;
                    return i.loadFromCDN = function() {
                        var e = this
                            , n = c.CDN + "gameNotice/GameBannerCfg.json";
                        r.loadRemote(n, null, (function(n, a) {
                                if (a) {
                                    for (var o, r = t(a.json.xml.Row); !(o = r()).done; ) {
                                        var l = o.value;
                                        if (l) {
                                            var s = {
                                                type: l.Cell[0],
                                                title: l.Cell[1],
                                                content: l.Cell[2]
                                            };
                                            e._data.push(s)
                                        }
                                    }
                                    1 == m.IS_LOCAL && (console.log("GameBannerCfg-loadFromCDN"),
                                        console.log(e._data))
                                }
                            }
                        ))
                    }
                        ,
                        i.loadFromJson = function() {
                            var e = u.Instance.getRes("json/GameBannerCfg", l);
                            if (e) {
                                for (var n, a = t(e.json.xml.Row); !(n = a()).done; ) {
                                    var o = n.value;
                                    if (o) {
                                        var r = {
                                            type: o.Cell[0],
                                            title: o.Cell[1],
                                            content: o.Cell[2]
                                        };
                                        this._data.push(r)
                                    }
                                }
                                1 == m.IS_LOCAL && (console.log("GameBannerCfg"),
                                    console.log(this._data))
                            }
                        }
                        ,
                        i.loadFromXml = function() {
                            var e = u.Instance.getRes("xml/GameBannerCfg", s);
                            if (e) {
                                for (var n = f.getJsonNew(e.text).GameBanner, t = 0; t < n.Item.length; t++) {
                                    var a = n.Item[t];
                                    if (a) {
                                        var o = {
                                            src: a.src,
                                            url: a.link
                                        };
                                        this._data.push(o)
                                    }
                                }
                                1 == m.IS_LOCAL && (console.log("GameBannerCfg-loadFromXml"),
                                    console.log(this._data))
                            }
                        }
                        ,
                        i.loadFromXmlRemote = function() {
                            var e = this
                                , n = c.CDN + "config/GameBannerCfg.xml";
                            r.loadRemote(n, null, (function(n, t) {
                                    if (t) {
                                        for (var a = f.getJsonNew(t.text).GameBanner, o = 0; o < a.Item.length; o++) {
                                            var r = a.Item[o];
                                            if (r) {
                                                var l = {
                                                    src: r.src,
                                                    url: r.link
                                                };
                                                e._data.push(l)
                                            }
                                        }
                                        1 == m.IS_LOCAL && (console.log("GameBannerCfg-loadFromXmlRemote"),
                                            console.log(e._data))
                                    }
                                }
                            ))
                        }
                        ,
                        a(o, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }, {
                            key: "bannerList",
                            get: function() {
                                return this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == o.instance && (o.instance = new o(new g),
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
