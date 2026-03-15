System.register("chunks:///_virtual/CombatStateBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, n, a, s, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    s = t.EventDispatcher
                }
                , function(t) {
                    o = t.default
                }
            ],
            execute: function() {
                a._RF.push({}, "28d81QIWwpKA7vxceRUsOSm", "CombatStateBase", void 0);
                t("CombatStateBase", function(t) {
                    function a() {
                        for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++)
                            a[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(a)) || this)._combatSys = void 0,
                            e._data = void 0,
                            e
                    }
                    e(a, t);
                    var s = a.prototype;
                    return s.execute = function() {
                        o.IS_LOCAL
                    }
                        ,
                        s.rest = function() {
                            this._combatSys = null,
                                this._data = null
                        }
                        ,
                        n(a, [{
                            key: "combatSys",
                            set: function(t) {
                                this._combatSys = t
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                this._data = t
                            }
                        }]),
                        a
                }(s));
                a._RF.pop()
            }
        }
    }
));
