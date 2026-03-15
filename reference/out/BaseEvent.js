System.register("chunks:///_virtual/BaseEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, s, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    s = e.cclegacy,
                        a = e.Event
                }
            ],
            execute: function() {
                s._RF.push({}, "4876cPH4PdBWqjWLDBNxuvP", "BaseEvent", void 0);
                var i = e("default", function(e) {
                    function n(t, n) {
                        var s;
                        return (s = e.call(this, t, n) || this).message = "",
                            s.data = void 0,
                            s
                    }
                    return t(n, e),
                        n.prototype.clone = function() {
                            var e = new n(this.type,this.bubbles);
                            return this.data && (e.data = this.data),
                            this.message && (e.message = this.message),
                                e
                        }
                        ,
                        n
                }(a))
                    , r = e("ViewEvent", function(e) {
                    function s(t) {
                        var n;
                        return (n = e.call(this, s.EVENT, !1) || this)._name = s.EVENT_NAME_DEFAULT,
                            n._name = t,
                            n
                    }
                    return t(s, e),
                        s.prototype.clone = function() {
                            var e = new s(this._name);
                            return this.data && (e.data = this.data),
                            this.message && (e.message = this.message),
                                e
                        }
                        ,
                        n(s, [{
                            key: "name",
                            get: function() {
                                return this._name
                            }
                        }]),
                        s
                }(i));
                r.EVENT = "ViewEvent.UI_EVENT",
                    r.EVENT_NAME_DEFAULT = "ViewEvent.UI_EVENT_NAME_DEFAULT",
                    s._RF.pop()
            }
        }
    }
));
