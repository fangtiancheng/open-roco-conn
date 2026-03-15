System.register("chunks:///_virtual/NumberStepper.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./FilterFactory.ts"], (function(t) {
        var i, e, s, u, n, h, m;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy,
                        u = t.NodeEventType,
                        n = t.EditBox
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    m = t.FilterFactory
                }
            ],
            execute: function() {
                s._RF.push({}, "50950MkccZEE6MvYKNyAGQA", "NumberStepper", void 0);
                t("NumberStepper", function() {
                    function t(t) {
                        this._ui = void 0,
                            this._maxNum = void 0,
                            this._minNum = 1,
                            this._minNum = 1,
                            this._ui = new _(t),
                            this._ui.btn_add.on(u.TOUCH_END, this.onClick, this),
                            this._ui.btn_min.on(u.TOUCH_END, this.onClick, this),
                            m.setAshingFilter(this._ui.btn_add, !0),
                            m.setAshingFilter(this._ui.btn_min, !0),
                            this._ui.txt_useNum.text = "1",
                            this._ui.txt_useNum.on(n.EventType.TEXT_CHANGED, this.useNumChangehandle, this),
                        this._ui.slider && this._ui.slider.target && this._ui.slider.on("slide", this.onSlider, this)
                    }
                    var e = t.prototype;
                    return e.onSlider = function(t) {
                        var i = t.progress;
                        if (i > 1 && (i = 1),
                        this._maxNum > 0) {
                            var e = Math.ceil(i * this._maxNum)
                                , s = e / this._maxNum;
                            t.progress = s,
                                this.updateUseNum(e),
                                this.updateSlider(e)
                        } else
                            t.progress = 0,
                                this.updateUseNum(0),
                                this.updateSlider(0)
                    }
                        ,
                        e.updateSlider = function(t) {
                            t > this._maxNum ? t = this._maxNum : t < this._minNum ? t = this._minNum : t == this._minNum && (t = 0),
                                this._ui.slider.progress = t / this._maxNum
                        }
                        ,
                        e.useNumChangehandle = function(t) {
                            var i = Number(this._ui.txt_useNum.text);
                            i > this._maxNum ? (this.updateUseNum(this._maxNum),
                                this.updateSlider(this._maxNum)) : i < 1 ? (this.updateUseNum(1),
                                this.updateSlider(1)) : (this.updateUseNum(i),
                                this.updateSlider(i))
                        }
                        ,
                        e.updateUseNum = function(t) {
                            t > this._maxNum ? t = this._maxNum : t < this._minNum && (t = this._minNum),
                                this._ui.txt_useNum.text = t.toString(),
                                m.setAshingFilter(this._ui.btn_add, t < this._maxNum),
                                m.setAshingFilter(this._ui.btn_min, t > this._minNum)
                        }
                        ,
                        e.onClick = function(t) {
                            switch (t.target.name) {
                                case "btn_add":
                                    (i = Number(this._ui.txt_useNum.text)) < this._maxNum && (this.updateUseNum(i + 1),
                                        this.updateSlider(i + 1));
                                    break;
                                case "btn_min":
                                    var i;
                                    (i = Number(this._ui.txt_useNum.text)) > 1 && (this.updateUseNum(i - 1),
                                        this.updateSlider(i - 1))
                            }
                        }
                        ,
                        i(t, [{
                            key: "maxNum",
                            get: function() {
                                return this._maxNum
                            },
                            set: function(t) {
                                this._maxNum = t,
                                    this._maxNum >= 1 ? this._minNum = 1 : this._minNum = 0,
                                    this.useNumChangehandle()
                            }
                        }, {
                            key: "minNum",
                            get: function() {
                                return this._minNum
                            },
                            set: function(t) {
                                this._minNum = t,
                                    this.useNumChangehandle()
                            }
                        }, {
                            key: "value",
                            get: function() {
                                return Number(this._ui.txt_useNum.text)
                            },
                            set: function(t) {
                                this.updateUseNum(t),
                                    this.updateSlider(t)
                            }
                        }]),
                        t
                }());
                var _ = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), u = 0; u < e; u++)
                            s[u] = arguments[u];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._txt_useNum = void 0,
                            i._btn_add = void 0,
                            i._btn_min = void 0,
                            i._slider = void 0,
                            i
                    }
                    return e(s, t),
                        i(s, [{
                            key: "txt_useNum",
                            get: function() {
                                return this._txt_useNum || (this._txt_useNum = new h(this.getChildByName("txt_useNum"))),
                                    this._txt_useNum
                            }
                        }, {
                            key: "btn_add",
                            get: function() {
                                return this._btn_add || (this._btn_add = new h(this.getChildByName("btn_add"))),
                                    this._btn_add
                            }
                        }, {
                            key: "btn_min",
                            get: function() {
                                return this._btn_min || (this._btn_min = new h(this.getChildByName("btn_min"))),
                                    this._btn_min
                            }
                        }, {
                            key: "slider",
                            get: function() {
                                return this._slider || (this._slider = new h(this.getChildByName("slider"))),
                                    this._slider
                            }
                        }]),
                        s
                }(h);
                s._RF.pop()
            }
        }
    }
));
