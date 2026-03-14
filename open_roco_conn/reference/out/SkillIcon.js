System.register("chunks:///_virtual/SkillIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./SpiritStorageResAdapter.ts"], (function(t) {
        var i, e, n, o, s, h, r, u;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.Sprite,
                        s = t.isValid,
                        h = t.UITransform
                }
                , function(t) {
                    r = t.NodeExtend
                }
                , function(t) {
                    u = t.SpiritStorageResAdapter
                }
            ],
            execute: function() {
                n._RF.push({}, "939e84jILlCma+4v2c7s9XV", "SkillIcon", void 0);
                t("SkillIcon", function(t) {
                    function n() {
                        var i;
                        return (i = t.call(this) || this)._ui = void 0,
                            i.__id = void 0,
                            i._width = void 0,
                            i._height = void 0,
                            i.tooltip = void 0,
                            i.mouseChildren = !1,
                        null == i.getComponent(h) && i.addComponent(h),
                        null == i.getComponent(o) && i.addComponent(o),
                            i
                    }
                    i(n, t);
                    var r = n.prototype;
                    return r.dispose = function() {
                        this.clear()
                    }
                        ,
                        r.load = function(t) {
                            this.clear(),
                            t > 0 && (this.place(u.getInstance().getSpiritIcon(t)),
                                this.__id = t)
                        }
                        ,
                        r.load1 = function(t) {
                            this.clear(),
                            t > 0 && (this.place(u.getInstance().getSpiritGroupIcon(t)),
                                this.__id = t)
                        }
                        ,
                        r.clear = function() {
                            null != this.getComponent(o).spriteFrame && this.getComponent(o).spriteFrame.decRef(),
                                this.getComponent(o).spriteFrame = null
                        }
                        ,
                        r.setMask = function(t, i) {}
                        ,
                        r.place = function(t) {
                            null != this._ui && null != t && (this._ui && 0 != s(this._ui) && ((this.getComponent(o) || this.addComponent(o)).spriteFrame = t,
                                this._ui.addChild(this),
                            this._width > 0 && (this.getComponent(h).width = this._width),
                            this._height > 0 && (this.getComponent(h).height = this._width)))
                        }
                        ,
                        e(n, [{
                            key: "ui",
                            set: function(t) {
                                this._ui = t
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.__id
                            },
                            set: function(t) {
                                this.__id = t
                            }
                        }, {
                            key: "width",
                            get: function() {
                                return this._width
                            },
                            set: function(t) {
                                this._width = t
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return this._height
                            },
                            set: function(t) {
                                this._height = t
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
