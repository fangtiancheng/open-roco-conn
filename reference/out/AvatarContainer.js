System.register("chunks:///_virtual/AvatarContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts"], (function(t) {
        var n, a, i;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    i = t.AImage
                }
            ],
            execute: function() {
                a._RF.push({}, "184f9EkH41Lsrja4UiG6Mqq", "AvatarContainer", void 0);
                t("AvatarContainer", function(t) {
                    function a() {
                        for (var n, a = arguments.length, i = new Array(a), e = 0; e < a; e++)
                            i[e] = arguments[e];
                        return (n = t.call.apply(t, [this].concat(i)) || this).id = void 0,
                            n.index = void 0,
                            n.__canChange = !0,
                            n.__path = "",
                            n
                    }
                    n(a, t);
                    var i = a.prototype;
                    return i.setCanChange = function(t) {
                        this.__canChange = t
                    }
                        ,
                        i.setPath = function(n) {
                            this.__path != n && (t.prototype.setPath.call(this, n),
                                this.__path = n)
                        }
                        ,
                        i.unload = function() {
                            this.__path = "",
                                t.prototype.unload.call(this)
                        }
                        ,
                        i.isClickThis = function(t, n) {
                            return !1
                        }
                        ,
                        a
                }(i));
                a._RF.pop()
            }
        }
    }
));
