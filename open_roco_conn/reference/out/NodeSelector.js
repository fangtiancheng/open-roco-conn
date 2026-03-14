System.register("chunks:///_virtual/NodeSelector.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(e) {
        var t, n, o, r, i, s, c, d, u, l;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    r = e.assertThisInitialized,
                    i = e.createClass
            }
                , function(e) {
                    s = e.cclegacy,
                        c = e._decorator,
                        d = e.Node,
                        u = e.Component
                }
                , function(e) {
                    l = e.default
                }
            ],
            execute: function() {
                var a, h, f, p, _;
                s._RF.push({}, "5479f68MlZGZb5s/ow4T8fc", "NodeSelector", void 0);
                var g = c.ccclass
                    , x = c.property
                    , N = c.menu;
                e("default", (a = N("Component/NodeSelector"),
                    h = x([d]),
                g(f = a((_ = t((p = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                            i[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(i)) || this)._idx = 0,
                            t._currentNode = null,
                            o(t, "nodes", _, r(t)),
                            t
                    }
                    n(t, e);
                    var s = t.prototype;
                    return s.start = function() {
                        1 == l.IS_LOCAL && console.log("NodeSelector")
                    }
                        ,
                        s.gotoAndStop = function(e) {
                            e -= 1,
                                this.selectedIndex = e
                        }
                        ,
                        i(t, [{
                            key: "currentNode",
                            get: function() {
                                return this._currentNode || (this._idx >= 0 && this._idx < this.nodes.length ? this._currentNode = this.nodes[this._idx] : this._currentNode = this.nodes[0]),
                                    this._currentNode
                            }
                        }, {
                            key: "selectedIndex",
                            get: function() {
                                return this._idx
                            },
                            set: function(e) {
                                if (e < 0)
                                    return l.IS_LOCAL,
                                        void console.error("[" + this.constructor.name + "]'s function [set selectedIndex] param is illegal.(idx < 0),idx=" + e);
                                if (e >= this.nodes.length)
                                    return l.IS_LOCAL,
                                        void console.error("[" + this.constructor.name + "]'s function [set selectedIndex] param is illegal.(idx > this.nodes.length),idx=" + e);
                                this._idx = e;
                                for (var t = 0; t < this.nodes.length; t++) {
                                    t == e && (this._currentNode = this.nodes[t]);
                                    var n = this.nodes[t];
                                    n && (n.active = t == e)
                                }
                                this._currentNode && (this._currentNode.active = !0)
                            }
                        }, {
                            key: "currentFrame",
                            get: function() {
                                return this._idx
                            },
                            set: function(e) {
                                this.gotoAndStop(e)
                            }
                        }, {
                            key: "totalFrames",
                            get: function() {
                                return this.nodes.length
                            },
                            set: function(e) {
                                throw new Error("[" + this.constructor.name + "] totalFrames cannot be call.")
                            }
                        }]),
                        t
                }(u)).prototype, "nodes", [h], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    f = p)) || f) || f));
                s._RF.pop()
            }
        }
    }
));
