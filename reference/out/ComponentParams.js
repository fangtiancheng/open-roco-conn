System.register("chunks:///_virtual/ComponentParams.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var a, s, n, o, e;
        return {
            setters: [function(t) {
                a = t.inheritsLoose,
                    s = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t._decorator,
                        e = t.Component
                }
            ],
            execute: function() {
                var i;
                n._RF.push({}, "4e8c6xqLPpDMLDsMUvYDcgm", "ComponentParams", void 0);
                var r = o.ccclass;
                o.property,
                    t("ComponentParams", r("ComponentParams")(i = function(t) {
                        function n() {
                            for (var a, s = arguments.length, n = new Array(s), o = 0; o < s; o++)
                                n[o] = arguments[o];
                            return (a = t.call.apply(t, [this].concat(n)) || this)._params = void 0,
                                a._isUpdate = void 0,
                                a._isLoaded = void 0,
                                a
                        }
                        a(n, t);
                        var o = n.prototype;
                        return o.onLoad = function() {
                            this._isLoaded = !0
                        }
                            ,
                            o.onEnable = function() {
                                this._isUpdate && this.onUpdateParams()
                            }
                            ,
                            o.setParams = function(t) {
                                this.params !== t && (this._params = t,
                                    this._isLoaded && this.node.active && this.node.isValid ? this.onUpdateParams() : this._isUpdate = !0)
                            }
                            ,
                            o.onUpdateParams = function() {
                                if (this._params && this.node.active && this.node.isValid) {
                                    this._isUpdate = !1;
                                    for (var t = 0; t < this.node.components.length; t++) {
                                        var a = this.node.components[t]
                                            , s = a.onRefreshView;
                                        s && "function" == typeof s && s.apply(a, this._params)
                                    }
                                }
                            }
                            ,
                            s(n, [{
                                key: "params",
                                get: function() {
                                    return this._params
                                }
                            }]),
                            n
                    }(e)) || i);
                n._RF.pop()
            }
        }
    }
));
