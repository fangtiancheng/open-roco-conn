System.register("chunks:///_virtual/DComboBox.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./ComboItem.ts"], (function(t) {
        var i, e, s, n, o, h;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType,
                        o = t.Node
                }
                , null, function(t) {
                    h = t.ComboItem
                }
            ],
            execute: function() {
                s._RF.push({}, "2251dT6EwlNjaC6OKMvLCII", "DComboBox", void 0);
                t("DComboBox", function(t) {
                    function s() {
                        var i;
                        return (i = t.call(this) || this)._list = void 0,
                            i._head = void 0,
                            i._container = void 0,
                            i._bg = void 0,
                            i._expand = void 0,
                            i
                    }
                    i(s, t);
                    var o = s.prototype;
                    return o.addItem = function(t, i, e) {
                        for (var s = arguments.length, n = new Array(s > 3 ? s - 3 : 0), o = 3; o < s; o++)
                            n[o - 3] = arguments[o];
                        var a = new h(t,i,e,n);
                        this._container.addChild(a),
                            a.y = this._list.length * h.HEIGHT,
                            a.frame = 1 == (1 & this._list.length) ? 1 : 2,
                            this._bg.height += h.HEIGHT,
                            this._list.push(a),
                            this._head.txtTitle.text = a.title
                    }
                        ,
                        o.__click = function(t) {
                            if (this.Expand = !this.Expand,
                            t.target instanceof h) {
                                var i = t.target;
                                this._head.txt.text = i.label,
                                    this._head.type = i.type
                            }
                        }
                        ,
                        o.reset = function() {
                            if (this._list && this._list[0]) {
                                var t = this._list[0];
                                t && (this._head.txt.text = t.label,
                                    this._head.type = t.type,
                                    this.Expand = !1)
                            }
                        }
                        ,
                        o.dispose = function() {
                            this.off(n.TOUCH_END, this.__click, this);
                            for (var t = 0; t < this._list.length; t++) {
                                var i = this._list[t];
                                i && i.dispose()
                            }
                        }
                        ,
                        e(s, [{
                            key: "Expand",
                            get: function() {
                                return this._expand
                            },
                            set: function(t) {
                                this._expand != t && (this._expand = t,
                                    this._head.flag.gotoAndStop(this._expand ? 2 : 1),
                                    this._container.visible = this._expand)
                            }
                        }]),
                        s
                }(o));
                s._RF.pop()
            }
        }
    }
));
