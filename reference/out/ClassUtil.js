System.register("chunks:///_virtual/ClassUtil.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, i;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
            ],
            execute: function() {
                i._RF.push({}, "27ad6iidlpNDpfZIInWDnLz", "ClassUtil", void 0);
                t("ClassUtil", function() {
                    function t(e, i) {
                        void 0 === i && (i = null),
                            this.m_fullName = "",
                            this.m_name = "",
                            this.m_domain = void 0,
                            this.m_fullName = t.getQualifiedClassName(e);
                        var n = this.m_fullName.lastIndexOf("::");
                        this.m_name = this.m_fullName.substring(n + 2),
                            this.m_domain = i
                    }
                    return t.getFullName = function(t) {
                        return this.getQualifiedClassName(t)
                    }
                        ,
                        t.getName = function(t) {
                            var e = this.getQualifiedClassName(t)
                                , i = e.lastIndexOf("::");
                            return e.substring(i + 2)
                        }
                        ,
                        t.getQualifiedClassName = function(t) {
                            return t.constructor.name
                        }
                        ,
                        e(t, [{
                            key: "fullValue",
                            get: function() {
                                return this.m_fullName
                            }
                        }, {
                            key: "value",
                            get: function() {
                                return this.m_name
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
