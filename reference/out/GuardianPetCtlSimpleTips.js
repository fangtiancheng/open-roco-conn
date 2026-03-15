System.register("chunks:///_virtual/GuardianPetCtlSimpleTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GuardianPetUICtlBase.ts", "./AgentNode.ts"], (function(t) {
        var e, i, n, s, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.GuardianPetUICtlBase
                }
                , function(t) {
                    a = t.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "c4c77CuxRNJtIu7nPHo74Bl", "GuardianPetCtlSimpleTips", void 0);
                t("GuardianPetCtlSimpleTips", function(t) {
                    e(s, t);
                    var n = s.prototype;
                    function s(e, i, n, s) {
                        var a;
                        return void 0 === i && (i = 0),
                        void 0 === n && (n = ""),
                        void 0 === s && (s = null),
                            (a = t.call(this, e, i, n, s) || this)._data = void 0,
                            a.mouseChildren = !1,
                            a.mouseEnabled = !1,
                            a
                    }
                    return n.createAgentNode = function(t) {
                        return new r(t)
                    }
                        ,
                        n.show = function() {
                            this.res.parentNode.setChildIndex(this.res.target, this.res.parentNode.numChildren - 1),
                                this.res.visible = !0
                        }
                        ,
                        n.hide = function() {
                            this.res.visible = !1
                        }
                        ,
                        n.setLocation = function(t, e) {
                            this.res.x = t,
                                this.res.y = e
                        }
                        ,
                        i(s, [{
                            key: "res",
                            get: function() {
                                return this.m_res
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                    this._data ? (this.res.txtLv.text = "LV." + this._data.level,
                                        this.res.txtEnergy.text = "+" + this._data.guardianPetDes.energyBonus,
                                        this.res.txtAttack.text = "+" + this._data.guardianPetDes.attackBonus,
                                        this.res.txtDefend.text = "+" + this._data.guardianPetDes.defendBonus,
                                        this.res.txtMagicAttack.text = "+" + this._data.guardianPetDes.magicAttackBonus,
                                        this.res.txtMagicDefend.text = "+" + this._data.guardianPetDes.magicDefendBonus) : (this.res.txtLv.text = "",
                                        this.res.txtEnergy.text = "",
                                        this.res.txtAttack.text = "",
                                        this.res.txtDefend.text = "",
                                        this.res.txtMagicAttack.text = "",
                                        this.res.txtMagicDefend.text = "")
                            }
                        }]),
                        s
                }(s));
                var r = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._txtLv = void 0,
                            e._txtEnergy = void 0,
                            e._txtAttack = void 0,
                            e._txtDefend = void 0,
                            e._txtMagicAttack = void 0,
                            e._txtMagicDefend = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "txtLv",
                            get: function() {
                                return this._txtLv || (this._txtLv = new a(this.getChildByName("txtLv"))),
                                    this._txtLv
                            }
                        }, {
                            key: "txtEnergy",
                            get: function() {
                                return this._txtEnergy || (this._txtEnergy = new a(this.getChildByName("txtEnergy"))),
                                    this._txtEnergy
                            }
                        }, {
                            key: "txtAttack",
                            get: function() {
                                return this._txtAttack || (this._txtAttack = new a(this.getChildByName("txtAttack"))),
                                    this._txtAttack
                            }
                        }, {
                            key: "txtDefend",
                            get: function() {
                                return this._txtDefend || (this._txtDefend = new a(this.getChildByName("txtDefend"))),
                                    this._txtDefend
                            }
                        }, {
                            key: "txtMagicAttack",
                            get: function() {
                                return this._txtMagicAttack || (this._txtMagicAttack = new a(this.getChildByName("txtMagicAttack"))),
                                    this._txtMagicAttack
                            }
                        }, {
                            key: "txtMagicDefend",
                            get: function() {
                                return this._txtMagicDefend || (this._txtMagicDefend = new a(this.getChildByName("txtMagicDefend"))),
                                    this._txtMagicDefend
                            }
                        }]),
                        n
                }(a);
                n._RF.pop()
            }
        }
    }
));
