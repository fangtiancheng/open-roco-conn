System.register("chunks:///_virtual/UseManyAddExpItemPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./DEFINE.ts", "./GuideTargetName.ts", "./URLRequest.ts", "./Loader.ts", "./FilterFactory.ts", "./ExpAllocatorDataProxy.ts"], (function(t) {
        var e, i, s, n, u, _, h, a, m, o, c, r, d;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.EditBox,
                        u = t.NodeEventType
                }
                , function(t) {
                    _ = t.AgentNodeComponent,
                        h = t.AgentNode
                }
                , function(t) {
                    a = t.DEFINE
                }
                , function(t) {
                    m = t.GuideTargetName
                }
                , function(t) {
                    o = t.URLRequest
                }
                , function(t) {
                    c = t.Loader
                }
                , function(t) {
                    r = t.FilterFactory
                }
                , function(t) {
                    d = t.ExpAllocatorDataProxy
                }
            ],
            execute: function() {
                s._RF.push({}, "275bfjJNZFMmZYXoMCt9ZgT", "UseManyAddExpItemPanel", void 0),
                    t("UseManyAddExpItemPanel", function() {
                        function t(t) {
                            this._ui = void 0,
                                this._callback = void 0,
                                this._item = void 0,
                                this._iconLoader = void 0,
                                this._bg = void 0,
                                this._minNum = 1,
                                this._maxNum = 1,
                                this._maxNum = 1,
                                this._ui = new l(t),
                                this._ui.txt_useNum.mouseEnabled = !1,
                                this._ui.txt_useNum.on(n.EventType.TEXT_CHANGED, this.useNumChangehandle, this),
                                this._ui.btn_use.on(u.TOUCH_END, this.onClick, this),
                                this._ui.btn_cancel.on(u.TOUCH_END, this.onClick, this),
                                this._ui.btn_add.on(u.TOUCH_END, this.onClick, this),
                                this._ui.btn_min.on(u.TOUCH_END, this.onClick, this),
                                r.setAshingFilter(this._ui.btn_add, !0),
                                r.setAshingFilter(this._ui.btn_min, !0),
                                this._iconLoader = new c,
                                this._ui.mc_icon.addChild(this._iconLoader),
                                this._ui.slider.on("slide", this.onSlider, this)
                        }
                        var i = t.prototype;
                        return i.useNumChangehandle = function(t) {
                            var e = Number(this._ui.txt_useNum.text);
                            e > this._item.count ? (this.updateUseNum(this._item.count),
                                this.updateSlider(this._item.count)) : e < 1 ? (this.updateUseNum(1),
                                this.updateSlider(1)) : (this.updateUseNum(e),
                                this.updateSlider(e))
                        }
                            ,
                            i.onSlider = function(t) {
                                var e = t.progress;
                                if (e > 1 && (e = 1),
                                this._maxNum > 0) {
                                    var i = Math.ceil(e * this._maxNum)
                                        , s = i / this._maxNum;
                                    t.progress = s,
                                        this.updateUseNum(i),
                                        this.updateSlider(i)
                                } else
                                    t.progress = 0,
                                        this.updateUseNum(0),
                                        this.updateSlider(0)
                            }
                            ,
                            i.updateSlider = function(t) {
                                t > this._maxNum ? t = this._maxNum : t < this._minNum ? t = this._minNum : t == this._minNum && (t = 0),
                                    this._ui.slider.progress = t / this._maxNum
                            }
                            ,
                            i.updateUseNum = function(t) {
                                t > this._maxNum ? t = this._maxNum : t < this._minNum && (t = this._minNum),
                                    this._ui.txt_useNum.text = t.toString(),
                                    r.setAshingFilter(this._ui.btn_add, t < this._maxNum),
                                    r.setAshingFilter(this._ui.btn_min, t > this._minNum)
                            }
                            ,
                            i.onClick = function(t) {
                                if (0 != t.currentTarget.getComponent(_).target.enableTag)
                                    switch (t.currentTarget.name) {
                                        case "btn_use":
                                            this._callback && this._callback(this._item, Number(this._ui.txt_useNum.text)),
                                                this.visible = !1;
                                            break;
                                        case "btn_cancel":
                                            this.visible = !1;
                                            break;
                                        case "btn_add":
                                            (e = Number(this._ui.txt_useNum.text)) < this._item.count && (this.updateUseNum(e + 1),
                                                this.updateSlider(e + 1));
                                            break;
                                        case "btn_min":
                                            var e;
                                            (e = Number(this._ui.txt_useNum.text)) > 1 && (this.updateUseNum(e - 1),
                                                this.updateSlider(e - 1))
                                    }
                            }
                            ,
                            i.checkUseNum = function(e, i) {
                                if (null == i || null == i)
                                    return -1;
                                if (null == e || null == e)
                                    return -1;
                                var s = t.EXP_MAPPING.get(e);
                                return Math.ceil(i / s)
                            }
                            ,
                            i.show = function(t, e, i) {
                                var s = d.isButtnCanUse100Logic1(e)
                                    , n = this.checkUseNum(t.itemDes.id, s);
                                this._callback = i,
                                    this._item = t,
                                    this.visible = !0,
                                    this._maxNum = this._item.count,
                                n > 0 && (this._maxNum = Math.min(n, this._item.count)),
                                    this.updateUseNum(1),
                                    this.updateSlider(1),
                                    this._ui.txt_name.text = this._item.itemDes.name,
                                    this._ui.txt_desc.text = this._item.itemDes.description,
                                    this._ui.txt_haveNum.text = this._item.count.toString(),
                                    this._iconLoader.unload(),
                                    this._iconLoader.load(new o(a.ITEM_RES_ROOT + "/" + this._item.itemDes.id + ".png"))
                            }
                            ,
                            i.getGuideTarget = function(t) {
                                switch (t) {
                                    case m.OK:
                                        return this._ui.btn_use.target
                                }
                                return null
                            }
                            ,
                            e(t, [{
                                key: "visible",
                                get: function() {
                                    return this._ui.visible
                                },
                                set: function(t) {
                                    this._ui.visible = t
                                }
                            }]),
                            t
                    }()).EXP_MAPPING = new Map([[17170435, 5e3], [17170436, 1e4], [17170437, 5e4], [17170438, 1e5], [17170439, 1e3], [17170440, 2e3], [17170441, 3e3], [17170442, 4e3], [17170443, 2e4], [17170473, 5e3], [17170474, 3e3], [17170475, 2e3], [17170476, 2e3], [17170477, 5e3], [17170478, 3e3], [17170479, 1e4], [17170480, 1e3], [17170481, 1e4], [17170482, 2e4], [17170483, 5e4], [17170484, 1e5], [17170485, 2e5], [17170486, 55555], [17170487, 5e5], [17170488, 66666], [17170486, 55555], [17170486, 55555]]);
                var l = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._txt_useNum = void 0,
                            e._mc_icon = void 0,
                            e._btn_use = void 0,
                            e._btn_cancel = void 0,
                            e._btn_add = void 0,
                            e._btn_min = void 0,
                            e._txt_name = void 0,
                            e._txt_desc = void 0,
                            e._txt_haveNum = void 0,
                            e._slider = void 0,
                            e
                    }
                    return i(s, t),
                        e(s, [{
                            key: "txt_useNum",
                            get: function() {
                                return this._txt_useNum || (this._txt_useNum = new h(this.getChildByName("txt_useNum"))),
                                    this._txt_useNum
                            }
                        }, {
                            key: "mc_icon",
                            get: function() {
                                return this._mc_icon || (this._mc_icon = new h(this.getChildByName("mc_icon"))),
                                    this._mc_icon
                            }
                        }, {
                            key: "btn_use",
                            get: function() {
                                return this._btn_use || (this._btn_use = new h(this.getChildByName("btn_use"))),
                                    this._btn_use
                            }
                        }, {
                            key: "btn_cancel",
                            get: function() {
                                return this._btn_cancel || (this._btn_cancel = new h(this.getChildByName("btn_cancel"))),
                                    this._btn_cancel
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
                            key: "txt_name",
                            get: function() {
                                return this._txt_name || (this._txt_name = new h(this.getChildByName("txt_name"))),
                                    this._txt_name
                            }
                        }, {
                            key: "txt_desc",
                            get: function() {
                                return this._txt_desc || (this._txt_desc = new h(this.getChildByName("txt_desc"))),
                                    this._txt_desc
                            }
                        }, {
                            key: "txt_haveNum",
                            get: function() {
                                return this._txt_haveNum || (this._txt_haveNum = new h(this.getChildByName("txt_haveNum"))),
                                    this._txt_haveNum
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
