System.register("chunks:///_virtual/SpiritChangeBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./NodeExtendEx.ts", "./SearchData.ts", "./SpiritChangeIcon.ts", "./BuildLogHelper.ts"], (function(i) {
        var t, o, n, s, c, h, e, a, r;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    o = i.createClass
            }
                , function(i) {
                    n = i.cclegacy,
                        s = i.NodeEventType
                }
                , function(i) {
                    c = i.AgentNode
                }
                , function(i) {
                    h = i.NodeExtendEx
                }
                , function(i) {
                    e = i.SearchData
                }
                , function(i) {
                    a = i.SpiritChangeIcon
                }
                , function(i) {
                    r = i.default
                }
            ],
            execute: function() {
                n._RF.push({}, "75c3axI3uFPFaSb6H09wCel", "SpiritChangeBar", void 0);
                i("SpiritChangeBar", function(i) {
                    t(c, i);
                    var n = c.prototype;
                    function c(t) {
                        var o;
                        return (o = i.call(this) || this).mainBar = void 0,
                            o.canbutton = !0,
                            o.par = void 0,
                            o.beChoosed = 1,
                            o.i0 = void 0,
                            o.i1 = void 0,
                            o.i2 = void 0,
                            o.i3 = void 0,
                            o.i4 = void 0,
                            o.i5 = void 0,
                            o.par = t,
                            o.onPreRequest(),
                            o
                    }
                    return n.dispose = function() {}
                        ,
                        n.onInit = function() {
                            this.mainBar = new d(this._view),
                                this.addChild(this.mainBar.target);
                            this.i0 = new a(this.par),
                                this.mainBar.addChild(this.i0),
                                this.i0.x = -198,
                                this.i0.y = 122,
                                this.i0.iconmc.nmtxt.gotoAndStop(1),
                                this.i0.iconmc.buttonMode = !0,
                                this.i0.iconmc.useHandCursor = !0,
                                this.i1 = new a(this.par),
                                this.mainBar.addChild(this.i1),
                                this.i1.x = 4,
                                this.i1.y = 122,
                                this.i1.iconmc.nmtxt.gotoAndStop(2),
                                this.i1.iconmc.buttonMode = !0,
                                this.i1.iconmc.useHandCursor = !0,
                                this.i2 = new a(this.par),
                                this.mainBar.addChild(this.i2),
                                this.i2.x = 206,
                                this.i2.y = 122,
                                this.i2.iconmc.nmtxt.gotoAndStop(3),
                                this.i2.iconmc.buttonMode = !0,
                                this.i2.iconmc.useHandCursor = !0,
                                this.i3 = new a(this.par),
                                this.mainBar.addChild(this.i3),
                                this.i3.x = -198,
                                this.i3.y = -78,
                                this.i3.iconmc.nmtxt.gotoAndStop(4),
                                this.i3.iconmc.buttonMode = !0,
                                this.i3.iconmc.useHandCursor = !0,
                                this.i4 = new a(this.par),
                                this.mainBar.addChild(this.i4),
                                this.i4.x = 4,
                                this.i4.y = -78,
                                this.i4.iconmc.nmtxt.gotoAndStop(5),
                                this.i4.iconmc.buttonMode = !0,
                                this.i4.iconmc.useHandCursor = !0,
                                this.i5 = new a(this.par),
                                this.mainBar.addChild(this.i5),
                                this.i5.x = 206,
                                this.i5.y = -78,
                                this.i5.iconmc.nmtxt.gotoAndStop(6),
                                this.i5.iconmc.buttonMode = !0,
                                this.i5.iconmc.useHandCursor = !0,
                                this.i0.iconmc.backmc.gotoAndStop(3)
                        }
                        ,
                        n.afterLoaded = function() {
                            this.init()
                        }
                        ,
                        n.init1 = function() {
                            this._isInit && (this.beChoosed = 1,
                                this.i0.iconmc.backmc.gotoAndStop(3))
                        }
                        ,
                        n.init = function() {
                            this._isInit && (this.mainBar.quit.on(s.TOUCH_END, this.quitaction, this),
                                this.mainBar.yes.on(s.TOUCH_END, this.yesaction, this),
                                this.i0.hasEventListener(s.MOUSE_ENTER, this.i1overaction, this) ? 1 == r.IS_LOCAL && console.error("SpiritChangeBar=================================================error!") : this.i0.on(s.MOUSE_ENTER, this.i1overaction, this),
                                this.i1.on(s.MOUSE_ENTER, this.i2overaction, this),
                                this.i2.on(s.MOUSE_ENTER, this.i3overaction, this),
                                this.i3.on(s.MOUSE_ENTER, this.i4overaction, this),
                                this.i4.on(s.MOUSE_ENTER, this.i5overaction, this),
                                this.i5.on(s.MOUSE_ENTER, this.i6overaction, this),
                                this.i0.on(s.MOUSE_LEAVE, this.i1outaction, this),
                                this.i1.on(s.MOUSE_LEAVE, this.i2outaction, this),
                                this.i2.on(s.MOUSE_LEAVE, this.i3outaction, this),
                                this.i3.on(s.MOUSE_LEAVE, this.i4outaction, this),
                                this.i4.on(s.MOUSE_LEAVE, this.i5outaction, this),
                                this.i5.on(s.MOUSE_LEAVE, this.i6outaction, this),
                                this.i0.on(s.TOUCH_END, this.i1stopaction, this),
                                this.i1.on(s.TOUCH_END, this.i2stopaction, this),
                                this.i2.on(s.TOUCH_END, this.i3stopaction, this),
                                this.i3.on(s.TOUCH_END, this.i4stopaction, this),
                                this.i4.on(s.TOUCH_END, this.i5stopaction, this),
                                this.i5.on(s.TOUCH_END, this.i6stopaction, this))
                        }
                        ,
                        n.freshData = function() {}
                        ,
                        n.i1overaction = function(i) {
                            1 != this.beChoosed && this.i0.iconmc.backmc.gotoAndStop(2)
                        }
                        ,
                        n.i2overaction = function(i) {
                            2 != this.beChoosed && this.i1.iconmc.backmc.gotoAndStop(2)
                        }
                        ,
                        n.i3overaction = function(i) {
                            3 != this.beChoosed && this.i2.iconmc.backmc.gotoAndStop(2)
                        }
                        ,
                        n.i4overaction = function(i) {
                            4 != this.beChoosed && this.i3.iconmc.backmc.gotoAndStop(2)
                        }
                        ,
                        n.i5overaction = function(i) {
                            5 != this.beChoosed && this.i4.iconmc.backmc.gotoAndStop(2)
                        }
                        ,
                        n.i6overaction = function(i) {
                            6 != this.beChoosed && this.i5.iconmc.backmc.gotoAndStop(2)
                        }
                        ,
                        n.i1outaction = function(i) {
                            1 != this.beChoosed && this.i0.iconmc.backmc.gotoAndStop(1)
                        }
                        ,
                        n.i2outaction = function(i) {
                            2 != this.beChoosed && this.i1.iconmc.backmc.gotoAndStop(1)
                        }
                        ,
                        n.i3outaction = function(i) {
                            3 != this.beChoosed && this.i2.iconmc.backmc.gotoAndStop(1)
                        }
                        ,
                        n.i4outaction = function(i) {
                            4 != this.beChoosed && this.i3.iconmc.backmc.gotoAndStop(1)
                        }
                        ,
                        n.i5outaction = function(i) {
                            5 != this.beChoosed && this.i4.iconmc.backmc.gotoAndStop(1)
                        }
                        ,
                        n.i6outaction = function(i) {
                            6 != this.beChoosed && this.i5.iconmc.backmc.gotoAndStop(1)
                        }
                        ,
                        n.i1stopaction = function(i) {
                            1 != this.beChoosed && (this.freshIcon(),
                                this.i0.iconmc.backmc.gotoAndStop(3),
                                this.beChoosed = 1)
                        }
                        ,
                        n.i2stopaction = function(i) {
                            2 != this.beChoosed && (this.freshIcon(),
                                this.i1.iconmc.backmc.gotoAndStop(3),
                                this.beChoosed = 2)
                        }
                        ,
                        n.i3stopaction = function(i) {
                            3 != this.beChoosed && (this.freshIcon(),
                                this.i2.iconmc.backmc.gotoAndStop(3),
                                this.beChoosed = 3)
                        }
                        ,
                        n.i4stopaction = function(i) {
                            4 != this.beChoosed && (this.freshIcon(),
                                this.i3.iconmc.backmc.gotoAndStop(3),
                                this.beChoosed = 4)
                        }
                        ,
                        n.i5stopaction = function(i) {
                            5 != this.beChoosed && (this.freshIcon(),
                                this.i4.iconmc.backmc.gotoAndStop(3),
                                this.beChoosed = 5)
                        }
                        ,
                        n.i6stopaction = function(i) {
                            6 != this.beChoosed && (this.freshIcon(),
                                this.i5.iconmc.backmc.gotoAndStop(3),
                                this.beChoosed = 6)
                        }
                        ,
                        n.freshIcon = function() {
                            this.i0.iconmc.backmc.gotoAndStop(1),
                                this.i1.iconmc.backmc.gotoAndStop(1),
                                this.i2.iconmc.backmc.gotoAndStop(1),
                                this.i3.iconmc.backmc.gotoAndStop(1),
                                this.i4.iconmc.backmc.gotoAndStop(1),
                                this.i5.iconmc.backmc.gotoAndStop(1)
                        }
                        ,
                        n.quitaction = function(i) {
                            this.visible = !1,
                                this.par.canbutton = !0
                        }
                        ,
                        n.yesaction = function(i) {
                            this.par.requestPutInBag(e.tempSpiritId, e.tempSpiritTime, this.beChoosed)
                        }
                        ,
                        n.refresh = function() {
                            for (var i = 0; i < e.changeSpirits.length; i++) {
                                var t, o = e.changeSpirits[i];
                                if (null != o) {
                                    0 == i && (t = this.i0),
                                    1 == i && (t = this.i1),
                                    2 == i && (t = this.i2),
                                    3 == i && (t = this.i3),
                                    4 == i && (t = this.i4),
                                    5 == i && (t = this.i5),
                                        t.iconmc.nametxt.text = null == o.spiritDes ? "未知" : o.spiritDes.name,
                                        t.currentHp = o.HP,
                                        t.maxHp = o.maxHP,
                                        t.iconmc.lifttxt.text = " Lv" + o.level.toString() + "  " + t.currentHp + "/" + t.maxHp;
                                    var n = Number(100 * t.currentHp / t.maxHp);
                                    if (t.iconmc.lifemc.gotoAndStop(n),
                                    0 != e.changeSpirits[i].skinIndex) {
                                        var s = 1e5 + 10 * o.spiritDes.id + (e.changeSpirits[i].skinIndex - 1);
                                        t.getABitmap(s)
                                    } else
                                        t.getABitmap(o.id)
                                }
                            }
                        }
                        ,
                        o(c, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/ChangeSpiritBar_1600"
                            }
                        }]),
                        c
                }(h));
                var d = function(i) {
                    function n() {
                        for (var t, o = arguments.length, n = new Array(o), s = 0; s < o; s++)
                            n[s] = arguments[s];
                        return (t = i.call.apply(i, [this].concat(n)) || this)._yes = void 0,
                            t._quit = void 0,
                            t
                    }
                    return t(n, i),
                        o(n, [{
                            key: "yes",
                            get: function() {
                                return this._yes || (this._yes = new c(this.getChildByName("yes"))),
                                    this._yes
                            }
                        }, {
                            key: "quit",
                            get: function() {
                                return this._quit || (this._quit = new c(this.getChildByName("quit"))),
                                    this._quit
                            }
                        }]),
                        n
                }(c);
                n._RF.pop()
            }
        }
    }
));
