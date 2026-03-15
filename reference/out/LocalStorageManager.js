System.register("chunks:///_virtual/LocalStorageManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UserData.ts"], (function(e) {
        var t, r, n, a;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    r = e.cclegacy,
                        n = e.sys
                }
                , function(e) {
                    a = e.UserData
                }
            ],
            execute: function() {
                r._RF.push({}, "48a60i9tP5FhLcYB0/iEIr7", "LocalStorageManager", void 0);
                var o = "your-secret-key"
                    , c = function() {};
                e("LocalStorageManager", function() {
                    function e(e) {
                        if (this.namespace = "",
                        null == e)
                            throw new Error("LocalStorageManager can not be instantiated.");
                        this.namespace = a.uin + ""
                    }
                    var r = e.prototype;
                    return r.encrypt = function(e) {
                        for (var t = "", r = 0; r < e.length; r++)
                            t += String.fromCharCode(e.charCodeAt(r) ^ o.charCodeAt(r % o.length));
                        return btoa(t)
                    }
                        ,
                        r.decrypt = function(e) {
                            try {
                                for (var t = atob(e), r = "", n = 0; n < t.length; n++)
                                    r += String.fromCharCode(t.charCodeAt(n) ^ o.charCodeAt(n % o.length));
                                return r
                            } catch (e) {
                                return ""
                            }
                        }
                        ,
                        r.getNamespacedKey = function(e) {
                            return "" + this.namespace + e
                        }
                        ,
                        r.setItem = function(e, t, r) {
                            void 0 === r && (r = !1);
                            var a = this.getNamespacedKey(e)
                                , o = "object" == typeof t ? JSON.stringify(t) : String(t);
                            r && (o = this.encrypt(o)),
                                n.localStorage.setItem(a, o)
                        }
                        ,
                        r.getItem = function(e, t, r) {
                            void 0 === r && (r = !1);
                            var a = this.getNamespacedKey(e)
                                , o = n.localStorage.getItem(a);
                            if (!o)
                                return t;
                            try {
                                return r && (o = this.decrypt(o)),
                                    o.startsWith("{") || o.startsWith("[") ? JSON.parse(o) : "number" == typeof t ? Number(o) : "boolean" == typeof t ? "true" === o : o
                            } catch (e) {
                                return t
                            }
                        }
                        ,
                        r.removeItem = function(e) {
                            n.localStorage.removeItem(this.getNamespacedKey(e))
                        }
                        ,
                        r.clearNamespace = function() {
                            var e = this;
                            this.getAllKeys().forEach((function(t) {
                                    return e.removeItem(t)
                                }
                            ))
                        }
                        ,
                        r.getAllKeys = function() {
                            for (var e = [], t = 0; t < n.localStorage.length; t++) {
                                var r = n.localStorage.key(t);
                                r && r.startsWith(this.namespace) && e.push(r.substring(this.namespace.length))
                            }
                            return e
                        }
                        ,
                        t(e, null, [{
                            key: "Instance",
                            get: function() {
                                return null == e._instance && (e._instance = new e(new c)),
                                    e._instance
                            }
                        }]),
                        e
                }())._instance = void 0,
                    r._RF.pop()
            }
        }
    }
));
