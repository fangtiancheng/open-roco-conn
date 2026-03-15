System.register("chunks:///_virtual/GlobalConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./XML.ts", "./ConfigLoader.ts"], (function(o) {
        var n, r, e, t, i;
        return {
            setters: [function(o) {
                n = o.inheritsLoose,
                    r = o.createClass
            }
                , function(o) {
                    e = o.cclegacy
                }
                , function(o) {
                    t = o.XML
                }
                , function(o) {
                    i = o.ConfigLoader
                }
            ],
            execute: function() {
                e._RF.push({}, "28659t9FupJa5ug9s6k0SWQ", "GlobalConfig", void 0);
                var l = o("GlobalConfig", function(o) {
                    function e(n) {
                        var r;
                        return void 0 === n && (n = null),
                            (r = o.call(this, n) || this).globalConf = void 0,
                            r
                    }
                    n(e, o);
                    var i = e.prototype;
                    return i.analyse = function(o) {
                        if (null == o)
                            return !1;
                        this.globalConf = {};
                        var n = new t(o).data;
                        n = n.Global,
                            this.globalConf.bbSrc = n.BB.src,
                            this.globalConf.DEFINE = [];
                        for (var r = n.DEFINE.ATTR, e = 0; e < r.length; e++) {
                            var i = r[e];
                            this.globalConf.DEFINE.push({
                                name: i.name,
                                value: i.value
                            })
                        }
                        var l = n.ServerInfo;
                        this.globalConf.ServerInfo = {
                            DirServer: {},
                            CrossDomain: {}
                        };
                        var s = l.DirServer;
                        this.globalConf.ServerInfo.DirServer.host = s.host,
                            this.globalConf.ServerInfo.DirServer.port = s.port;
                        var a = l.CrossDomain;
                        this.globalConf.ServerInfo.CrossDomain.host = a.host,
                            this.globalConf.ServerInfo.CrossDomain.port = a.port,
                            this.globalConf.PluginConfs = [];
                        var f = new Array;
                        for (f.push(n.Confs.Conf),
                                 e = 0; e < f.length; e++) {
                            var u = f[e];
                            this.globalConf.PluginConfs.push({
                                name: u.name,
                                src: u.src
                            })
                        }
                        return !0
                    }
                        ,
                        i.getBBSrc = function() {
                            return this.globalConf.bbSrc
                        }
                        ,
                        i.getGlobalConf = function() {
                            return this.globalConf
                        }
                        ,
                        r(e, [{
                            key: "DEFINE",
                            get: function() {
                                return this.globalConf.DEFINE
                            }
                        }, {
                            key: "PluginConfs",
                            get: function() {
                                return this.globalConf.PluginConfs
                            }
                        }, {
                            key: "DirServer",
                            get: function() {
                                return this.globalConf.ServerInfo.DirServer
                            }
                        }, {
                            key: "CrossDomain",
                            get: function() {
                                return this.globalConf.ServerInfo.CrossDomain
                            }
                        }]),
                        e
                }(i));
                l.useRemoteConfig = !0,
                    l.parsedConfs = void 0,
                    l.designWidth = 1600,
                    l.designHeight = 900,
                    e._RF.pop()
            }
        }
    }
));
