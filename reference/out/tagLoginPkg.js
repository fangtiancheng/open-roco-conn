System.register("chunks:///_virtual/tagLoginPkg.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts"], (function(e) {
        var n, t, i, r, o, a, u, s;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    a = e.DataType,
                        u = e.TCPDataType,
                        s = e.TCPTransmission
                }
            ],
            execute: function() {
                var l, c, f, p, g;
                o._RF.push({}, "c117efqDYJCPYHfAzuauO3y", "tagLoginPkg", void 0);
                e("tagLoginPkg", (l = a(1, u.UInt16),
                    c = a(2, u.buff, null, 64),
                    p = n((f = function(e) {
                        function n() {
                            for (var n, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                                o[a] = arguments[a];
                            return n = e.call.apply(e, [this].concat(o)) || this,
                                i(n, "ushRoom", p, r(n)),
                                i(n, "szKey", g, r(n)),
                                n
                        }
                        return t(n, e),
                            n
                    }(s)).prototype, "ushRoom", [l], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    g = n(f.prototype, "szKey", [c], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f));
                o._RF.pop()
            }
        }
    }
));
