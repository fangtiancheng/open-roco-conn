System.register("chunks:///_virtual/PaopaoAvatarConatiner.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts"], (function(n) {
        var t, i, e, o;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    i = n.createClass
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    o = n.NodeExtend
                }
            ],
            execute: function() {
                e._RF.push({}, "01678BrbndD542J7MiDV7Wa", "PaopaoAvatarConatiner", void 0);
                n("PaopaoAvatarConatiner", function(n) {
                    function e() {
                        var t;
                        return (t = n.call(this) || this).m_id = void 0,
                            t.m_delayFrame = void 0,
                            t
                    }
                    t(e, n);
                    var o = e.prototype;
                    return o.setId = function(n, t) {
                        this.m_id == n || (this.m_id = n)
                    }
                        ,
                        o.delayShow = function() {}
                        ,
                        o.__enterFrame = function(n) {}
                        ,
                        o.__delayCall = function() {
                            this.unShow()
                        }
                        ,
                        o.unShow = function() {}
                        ,
                        o.isClickThis = function(n) {
                            return !1
                        }
                        ,
                        i(e, [{
                            key: "id",
                            get: function() {
                                return this.m_id
                            }
                        }]),
                        e
                }(o));
                e._RF.pop()
            }
        }
    }
));
