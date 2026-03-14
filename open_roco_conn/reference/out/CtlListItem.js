System.register("chunks:///_virtual/CtlListItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts"], (function(t) {
        var e, n, i, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    s = t.UICtlBase
                }
            ],
            execute: function() {
                i._RF.push({}, "62a00Zrf95NJ6XKM3cesSxL", "CtlListItem", void 0);
                t("CtlListItem", function(t) {
                    function i(e, n, i, s, o) {
                        var c;
                        return void 0 === n && (n = 0),
                        void 0 === i && (i = ""),
                        void 0 === s && (s = null),
                            (c = t.call(this, e, n, i, s) || this).m_data = void 0,
                            c.topOwner = void 0,
                            c
                    }
                    return e(i, t),
                        n(i, [{
                            key: "selected",
                            set: function(t) {}
                        }, {
                            key: "data",
                            get: function() {
                                return this.m_data
                            },
                            set: function(t) {
                                this.m_data = t
                            }
                        }]),
                        i
                }(s));
                i._RF.pop()
            }
        }
    }
));
