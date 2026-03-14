System.register("chunks:///_virtual/ExchangeItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./UICtlBase.ts", "./CommonAPI.ts", "./AImage.ts"], (function(t) {
        var i, e, n, s, o, h, a;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.AgentNode
                }
                , function(t) {
                    o = t.UICtlBase
                }
                , function(t) {
                    h = t.CommonAPI
                }
                , function(t) {
                    a = t.AImage
                }
            ],
            execute: function() {
                n._RF.push({}, "67038Qvh4lKu7naeEvj1+Ix", "ExchangeItem", void 0);
                t("ExchangeItem", function(t) {
                    function n(i) {
                        var e;
                        return (e = t.call(this, i) || this)._ui = void 0,
                            e._data = void 0,
                            e.img = void 0,
                            e._ui = new r(i.target),
                            e
                    }
                    i(n, t);
                    var s = n.prototype;
                    return s.dispose = function() {
                        this.img && this.img.reset(),
                        this.img && this.img.parent && this.img.parent.removeChild(this.img),
                            this.img = null,
                            this.disposeIcon(),
                            t.prototype.dispose.call(this)
                    }
                        ,
                        s.disposeIcon = function() {
                            this.clearIcon()
                        }
                        ,
                        s.clearDataShow = function() {}
                        ,
                        s.setIcon = function(t, i, e) {
                            switch (i) {
                                case 0:
                                    this.img || (this.img = new a(80,80)),
                                        this.img.setPath(h.getSpiritSrc(t)),
                                        this._ui.txtName.text = h.getSpiritName(t),
                                        this._ui.mcContainer.addChild(this.img);
                                    break;
                                case 1:
                                    this.img || (this.img = new a(80,80)),
                                        this.img.setPath(h.getItemUrl(t)),
                                        this._ui.txtName.text = h.getItemName(t),
                                        this._ui.mcContainer.addChild(this.img)
                            }
                            this._ui.mcContainer.mouseChildren = !1,
                                this._ui.mcContainer.mouseEnabled = !1
                        }
                        ,
                        s.clearIcon = function() {
                            this.img && (this.img.reset(),
                                this._ui.mcContainer.removeChild(this.img),
                                this.img = null)
                        }
                        ,
                        e(n, [{
                            key: "data",
                            get: function() {
                                return this._data
                            },
                            set: function(t) {
                                this._data = t,
                                null != this._data || this.disposeIcon()
                            }
                        }, {
                            key: "selected",
                            set: function(t) {}
                        }, {
                            key: "ui",
                            get: function() {
                                return this._ui
                            }
                        }]),
                        n
                }(o));
                var r = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._bg = void 0,
                            i._txtName = void 0,
                            i._mcContainer = void 0,
                            i._txtPrice = void 0,
                            i._btnChoose = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new s(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new s(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }, {
                            key: "mcContainer",
                            get: function() {
                                return this._mcContainer || (this._mcContainer = new s(this.getChildByName("mcContainer"))),
                                    this._mcContainer
                            }
                        }, {
                            key: "txtPrice",
                            get: function() {
                                return this._txtPrice || (this._txtPrice = new s(this.getChildByName("txtPrice"))),
                                    this._txtPrice
                            }
                        }, {
                            key: "btnChoose",
                            get: function() {
                                return this._btnChoose || (this._btnChoose = new s(this.getChildByName("btnChoose"))),
                                    this._btnChoose
                            }
                        }]),
                        n
                }(s);
                n._RF.pop()
            }
        }
    }
));
