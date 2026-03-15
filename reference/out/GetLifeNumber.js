System.register("chunks:///_virtual/GetLifeNumber.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./Timer.ts", "./TimerEvent.ts"], (function(t) {
        var e, i, r, s, _, o, a, n, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t.Label,
                        _ = t.color,
                        o = t.Node
                }
                , function(t) {
                    a = t.default
                }
                , function(t) {
                    n = t.Timer
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                r._RF.push({}, "bd4e2yOu+xNGqva7xr/WSVk", "GetLifeNumber", void 0);
                t("GetLifeNumber", function(t) {
                    function r(e, r, o, h, l, m, d) {
                        var u;
                        return void 0 === d && (d = !1),
                            (u = t.call(this) || this)._par = void 0,
                            u._proTimer = 0,
                            u._timer = 20,
                            u.timer = void 0,
                            u._typenm = 0,
                            u._tfb = void 0,
                            u._target = void 0,
                            u._x = void 0,
                            u._y = void 0,
                            u._scaleX = void 0,
                            u._scaleY = void 0,
                            m.addChild(i(u)),
                            u._target = a.Instance.getPrefabByName("combatSys_1600/content/NewStyleSprite_1600"),
                            u.addChild(u._target),
                            u._par = m,
                            u._x = e,
                            u._y = r,
                            u._target.setPosition(e, r),
                            u._proTimer = o,
                            u._tfb = u._target.getChildByName("prompt_txt").getComponent(s),
                            u._scaleX = 1,
                            u._scaleY = 1,
                            u._typenm = l,
                        1 == l && 0 == d && (u._tfb.color = _(204, 51, 0)),
                        1 == l && 1 == d && (u._scaleX += .2,
                            u._scaleY += .2,
                            u._tfb.color = _(255, 255, 255)),
                        2 == l && (u._tfb.color = _(68, 136, 0)),
                        3 == l && (u._tfb.color = _(2, 160, 227)),
                        4 == l && (u._tfb.color = _(253, 101, 36)),
                            u._target.setScale(u._scaleX, u._scaleY),
                            u._tfb.string = h,
                            u.timer = new n(42,0),
                            u.timer.addEventListener(c.TIMER, u.action.bind(i(u))),
                            u.timer.start(),
                            u
                    }
                    e(r, t);
                    var o = r.prototype;
                    return o.del = function() {
                        this._par.removeChild(this._target),
                            this._par = null,
                            this._target.destroy(),
                            this._target = null,
                            this.timer.stop(),
                            this.timer.removeEventListener(c.TIMER, this.action.bind(this)),
                            this.timer = null
                    }
                        ,
                        o.action = function(t) {
                            if (this._target) {
                                if (this._proTimer > 0 && (this._target.active = !1,
                                    this._proTimer--),
                                this._proTimer <= 0) {
                                    if (this._timer <= 0)
                                        return void (this._target.active = !1);
                                    this._target.active = !0,
                                        this._y += 5,
                                        this._timer -= 1,
                                    1 == this._typenm && (this._timer += .5,
                                        this._y = this._y + 12 * Math.random() + 5,
                                    this._timer > 16 && (this._scaleX += .4,
                                        this._scaleY += .4)),
                                    2 == this._typenm && (this._timer += .5,
                                        this._y += 3,
                                    this._timer > 16 && (this._scaleX += .3,
                                        this._scaleY += .3))
                                }
                                this._target.setPosition(this._x, this._y)
                            }
                        }
                        ,
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
