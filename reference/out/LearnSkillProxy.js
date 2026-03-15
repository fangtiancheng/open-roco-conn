System.register("chunks:///_virtual/LearnSkillProxy.ts", ["cc", "./global.ts", "./WindowMode.ts", "./WindowResult.ts", "./CFunction.ts", "./IOErrorEvent.ts", "./BagDataProxy.ts", "./ConsumingItemProxy.ts", "./LangStrings.ts", "./NetActionProxy.ts", "./LearnSkillCgiInfo.ts", "./CGIEvent.ts", "./OpenAsWinDes.ts", "./URLRequest.ts", "./URLLoaderEvent.ts", "./Xml2Json.ts", "./PetEvoAndSkill.ts", "./SpiritBagRefProxy.ts"], (function(i) {
        var e, t, n, s, l, o, a, r, d, c, L, u, g, h, _, k, p, S, E;
        return {
            setters: [function(i) {
                e = i.cclegacy,
                    t = i.Vec2
            }
                , function(i) {
                    n = i.__global
                }
                , function(i) {
                    s = i.WindowMode
                }
                , function(i) {
                    l = i.WindowResult
                }
                , function(i) {
                    o = i.CFunction
                }
                , function(i) {
                    a = i.IOErrorEvent
                }
                , function(i) {
                    r = i.BagDataProxy
                }
                , function(i) {
                    d = i.ConsumingItemProxy
                }
                , function(i) {
                    c = i.LangStrings
                }
                , function(i) {
                    L = i.NetActionProxy
                }
                , function(i) {
                    u = i.LearnSkillCgiInfo
                }
                , function(i) {
                    g = i.CGIEvent
                }
                , function(i) {
                    h = i.OpenAsWinDes
                }
                , function(i) {
                    _ = i.URLRequest
                }
                , function(i) {
                    k = i.URLLoaderEvent
                }
                , function(i) {
                    p = i.Xml2Json
                }
                , function(i) {
                    S = i.PetEvoAndSkill
                }
                , function(i) {
                    E = i.SpiritBagRefProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "12b262uOWhNa7NTvZgqk1x+", "LearnSkillProxy", void 0);
                var f = i("LearnSkillProxy", function() {
                    function i() {
                        this._cgiLoader = void 0,
                            this._cgiRequestType = void 0,
                            this._itemId = void 0,
                            this._spiritIndex = void 0,
                            this._cgiLoader = n.SysAPI.getNetSysAPI().createURLLoader(!0),
                            this._cgiLoader.addEventListener(k.COMPLETE, this.onCgiDataLoaded, this),
                            this._cgiLoader.addEventListener(a.IO_ERROR, this.onCgiDataError, this)
                    }
                    var e = i.prototype;
                    return e.dispose = function() {
                        this._cgiLoader.removeEventListener(g.COMPLETE, this.onCgiDataLoaded, this),
                            this._cgiLoader.removeEventListener(a.IO_ERROR, this.onCgiDataError, this)
                    }
                        ,
                        e.requestConsumable = function(i, e) {
                            n.UI.createMiniLoading(),
                                this._cgiRequestType = u.CONSUMABLE,
                                this._itemId = i,
                                this._spiritIndex = e;
                            var t = u.getCgiUrl(this._cgiRequestType) + "&item=" + i + "&index=" + (e + 1);
                            this._cgiLoader.load(new _(t))
                        }
                        ,
                        e.requestLearnNewSkill = function(i, e) {
                            n.UI.createMiniLoading(),
                                this._cgiRequestType = u.LEARN_NEW_SKILL,
                                this._itemId = i,
                                this._spiritIndex = e;
                            var t = u.getCgiUrl(this._cgiRequestType) + "&item=" + i + "&index=" + (e + 1);
                            this._cgiLoader.load(new _(t))
                        }
                        ,
                        e.requestReplaceSkill = function(i, e, t, s) {
                            n.UI.createMiniLoading(),
                                this._cgiRequestType = u.REPLACE_SKILL,
                                this._itemId = i,
                                this._spiritIndex = e;
                            var l = u.getCgiUrl(this._cgiRequestType) + "&item=" + i + "&index=" + (e + 1) + "&oldId=" + t + "&newId=" + s;
                            this._cgiLoader.load(new _(l))
                        }
                        ,
                        e.onCgiDataError = function(i) {
                            this.displayMessage(i.text)
                        }
                        ,
                        e.onCgiDataLoaded = function(i) {
                            n.UI.closeMiniLoading();
                            var e = p.getJson(this._cgiLoader.data)
                                , t = Number(e.result.value)
                                , s = String(e.result.msg);
                            if (0 == t)
                                switch (this._cgiRequestType) {
                                    case u.CONSUMABLE:
                                        this.onCunsumableDataLoaded(e);
                                        break;
                                    case u.LEARN_NEW_SKILL:
                                        this.onLearnNewSkillDataLoaded(e);
                                        break;
                                    case u.REPLACE_SKILL:
                                        this.onReplaceSkillDataLoaded(e)
                                }
                            else
                                this.displayMessage(s)
                        }
                        ,
                        e.onCunsumableDataLoaded = function(i) {
                            this.promptLearnNewSkill()
                        }
                        ,
                        e.onLearnNewSkillDataLoaded = function(e) {
                            (null != e.oldskill.skill ? e.oldskill.skill.length : 0) < i.SKILL_NUM_TO_SHOW_REPLACE_PANEL ? (d.save(this._itemId),
                                L.getSpiritBag(),
                                E.learnNewSkillAnimationPanel.showAndPlay()) : this.callReplaceSkillPanelWithXml(e)
                        }
                        ,
                        e.onReplaceSkillDataLoaded = function(i) {}
                        ,
                        e.displayMessage = function(i) {
                            n.showMsgBox(i)
                        }
                        ,
                        e.promptLearnNewSkill = function() {
                            n.UI.alert("", c.SURE_TO_LEARN_THIS_SKILL, s.OK_CANCEL, new o(this.onLearnNewSkillConfirmationDialog,this))
                        }
                        ,
                        e.onLearnNewSkillConfirmationDialog = function(i) {
                            switch (i) {
                                case l.OK:
                                    this.requestLearnNewSkill(this._itemId, this._spiritIndex)
                            }
                        }
                        ,
                        e.callReplaceSkillPanelWithXml = function(e) {
                            var n, s, l, o, a = r.selectedSpirit, d = new Object;
                            for (d.oldSkill = new Array,
                                     l = e.oldskill.skill.length,
                                     o = 0; o < l; ++o)
                                (n = new Object).id = Number(e.oldskill.skill[o].id),
                                    n.pp = Number(e.oldskill.skill[o].pp),
                                    n.inherit = Number(e.oldskill.skill[o].inherit),
                                    d.oldSkill.push(n);
                            if (d.newSkill = new Array,
                                Array.isArray(e.newskill.skill))
                                for (l = e.newskill.skill.length,
                                         o = 0; o < l; ++o)
                                    (s = new Object).id = Number(e.newskill.skill[o].id),
                                        s.pp = Number(e.newskill.skill[o].pp),
                                        d.newSkill.push(s);
                            else
                                (s = new Object).id = Number(e.newskill.skill.id),
                                    s.pp = Number(e.newskill.skill.pp),
                                    d.newSkill.push(s);
                            d.id = a.id,
                                d.catchTime = a.caughtTime,
                                d.cmd = u.getCgiUrl(u.REPLACE_SKILL, !1),
                                d.onOver = this.onReplaceSkillOver.bind(this);
                            var L = new h;
                            L.winPos = new t,
                                L.name = c.REPLACE_SKILL,
                                L.src = i.REPLACE_SKILL_PANEL_PATH,
                                L.params = d,
                                L.isModal = !0,
                                L.cache = !0,
                                S.Instance.setParams(L.params)
                        }
                        ,
                        e.onReplaceSkillOver = function(i) {
                            1 == i && (d.save(this._itemId),
                                L.getSpiritBag())
                        }
                        ,
                        i
                }());
                f.SKILL_NUM_TO_SHOW_REPLACE_PANEL = 4,
                    f.REPLACE_SKILL_PANEL_PATH = "Guagua/PetEvoAndSkill",
                    e._RF.pop()
            }
        }
    }
));
