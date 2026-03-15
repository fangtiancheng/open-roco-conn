System.register("chunks:///_virtual/CFunction.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "40497Te3Y1FbInP3Aosnl0H", "CFunction", void 0);
                t("CFunction", function() {
                    function t(t, n, a) {
                        void 0 === n && (n = null),
                        void 0 === a && (a = null),
                            this.target = void 0,
                            this.handler = void 0,
                            this.params = void 0,
                            this.target = n,
                            this.handler = t,
                            this.params = a
                    }
                    var n = t.prototype;
                    return n.call = function() {
                        if (null != this.handler) {
                            for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
                                n[a] = arguments[a];
                            return 0 != n.length ? this.params ? (n.push(this.params),
                                this.handler.apply(this.target, n)) : this.handler.apply(this.target, n) : this.params ? this.handler.apply(this.target, this.params) : this.handler.apply(this.target, null)
                        }
                    }
                        ,
                        n.apply = function(t) {
                            return this.handler.apply(this.target, t)
                        }
                        ,
                        n.invoke = function() {
                            return this.apply(this.params)
                        }
                        ,
                        n.clear = function() {
                            this.params = null,
                                this.target = null,
                                this.handler = null
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
