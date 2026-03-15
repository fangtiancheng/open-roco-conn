System.register("chunks:///_virtual/AdapterManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdapterBase.ts", "./BuildLogHelper.ts"], (function(n) {
        var t, e, a, i, r, s;
        return {
            setters: [function(n) {
                t = n.createClass
            }
                , function(n) {
                    e = n.cclegacy,
                        a = n.isValid,
                        i = n.view
                }
                , function(n) {
                    r = n.AdapterBase
                }
                , function(n) {
                    s = n.default
                }
            ],
            execute: function() {
                e._RF.push({}, "3fdc1oH/99OIoU3TXRoxMYC", "AdapterManager", void 0);
                var o = function() {}
                    , c = n("AdapterManager", function() {
                    function n(n) {
                        if (this._data = void 0,
                        null == n)
                            throw new Error("PetResCfgLoader can not be instantiated.");
                        this._data = new Array
                    }
                    n.init = function() {
                        1 != n.isInit && (n.isInit = !0,
                            i.setResizeCallback((function() {
                                    n.Resize()
                                }
                            )))
                    }
                    ;
                    var e = n.prototype;
                    return e._add = function(n) {
                        this._data.push(n)
                    }
                        ,
                        e._resize = function() {
                            for (var n = 0; n < this._data.length; n++) {
                                var t = this._data[n];
                                if (a(t)) {
                                    var e = t.getComponents(r);
                                    if (e)
                                        for (var i = 0; i < e.length; i++) {
                                            var o = e[i];
                                            1 == s.IS_LOCAL && console.log(o.constructor.name + "==" + t.name + "==--------------------------\x3esetAdapter"),
                                                o.setAdapter()
                                        }
                                }
                            }
                        }
                        ,
                        n.Add = function(t) {
                            n.Instance._add(t)
                        }
                        ,
                        n.Resize = function() {
                            n.Instance._resize()
                        }
                        ,
                        t(n, null, [{
                            key: "Instance",
                            get: function() {
                                return null == n._instance && (n._instance = new n(new o)),
                                    n._instance
                            }
                        }]),
                        n
                }());
                c._instance = void 0,
                    c.isInit = !1,
                    e._RF.pop()
            }
        }
    }
));
