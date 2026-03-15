System.register("chunks:///_virtual/SpiritBagPlugin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelSysEvent.ts", "./global.ts", "./AccessPermission.ts", "./SysEventDes.ts", "./DataProxy.ts", "./BagDataProxy.ts", "./ItemShellDataProxy.ts", "./SpiritDataReader.ts", "./ExpAllocatorDataProxy.ts", "./PluginFramework.ts", "./NetActionProxy.ts", "./SpiritResAdapter.ts", "./SpiritBagRefProxy.ts", "./NotificationCenter.ts", "./NotifyDef.ts"], (function(i) {
        var t, e, n, r, a, o, s, l, c, p, g, u, S, f, P, B, d, v;
        return {
            setters: [function(i) {
                t = i.inheritsLoose
            }
                , function(i) {
                    e = i.cclegacy,
                        n = i._decorator
                }
                , function(i) {
                    r = i.AngelSysEvent
                }
                , function(i) {
                    a = i.__global
                }
                , function(i) {
                    o = i.AccessPermission
                }
                , function(i) {
                    s = i.SysEventDes
                }
                , function(i) {
                    l = i.DataProxy
                }
                , function(i) {
                    c = i.BagDataProxy
                }
                , function(i) {
                    p = i.ItemShellDataProxy
                }
                , function(i) {
                    g = i.SpiritDataReader
                }
                , function(i) {
                    u = i.ExpAllocatorDataProxy
                }
                , function(i) {
                    S = i.PluginFramework
                }
                , function(i) {
                    f = i.NetActionProxy
                }
                , function(i) {
                    P = i.SpiritResAdapter
                }
                , function(i) {
                    B = i.SpiritBagRefProxy
                }
                , function(i) {
                    d = i.NotificationCenter
                }
                , function(i) {
                    v = i.NotifyDef
                }
            ],
            execute: function() {
                var A, h;
                e._RF.push({}, "9b3eaTMkrRNd5+w2NA99X1C", "SpiritBagPlugin", void 0);
                var y = n.ccclass
                    , I = (n.property,
                    n.menu);
                i("SpiritBagPlugin", y(A = I("AUI/SpiritBagPlugin")(((h = function(i) {
                    function e() {
                        var t;
                        return (t = i.call(this) || this).searchEquipLearningFlag = !0,
                            t.spiritBagTabIndex = 0,
                            t
                    }
                    t(e, i);
                    var n = e.prototype;
                    return n.start = function() {
                        d.addNotification(v.SPIRIT_BAG_UPDATE, this.onUpdate, this),
                            this.initialize(),
                            this.call(null)
                    }
                        ,
                        n.onUpdate = function() {
                            f.getSpiritBag()
                        }
                        ,
                        n.initialize = function() {
                            return g.init(),
                                l.init(),
                                u.init(),
                                P.getInstance(),
                                c.initialize(),
                                p.initialize(),
                                B.initialize(),
                                a.SysAPI.getGEventAPI().addCmdListener(r.ON_SPIRIT_BAG, this),
                                a.SysAPI.getGEventAPI().angelEventDispatcher.addEventListener(r.ON_SYS_EVENT, this.onSysEvent, this),
                                !0
                        }
                        ,
                        n.finalize = function() {
                            return P.getInstance().dispose(),
                                c.dispose(),
                                p.dispose(),
                                B.dispose(),
                                a.SysAPI.getGEventAPI().removeCmdListener(r.ON_SPIRIT_BAG),
                                a.SysAPI.getGEventAPI().angelEventDispatcher.removeEventListener(r.ON_SYS_EVENT, this.onSysEvent, this),
                                !0
                        }
                        ,
                        n.onSysEvent = function(i) {
                            switch (i.data.type) {
                                case s.VIP_LEVEL_CHANGE:
                                    this.reset_spiritStorageButton()
                            }
                        }
                        ,
                        n.reset_spiritStorageButton = function() {
                            B.spiritBagPanel.currentSpirit.reset_spiritStorageButton()
                        }
                        ,
                        n.callSpiritBagPanel = function(i) {
                            B.spiritBagPanel.active ? (f.dispose(),
                                B.spiritBagPanel.hide(),
                                B.spiritBagPanel.reset()) : (B.spiritBagPanel.reset(),
                                B.spiritBagPanel.show(),
                                B.spiritBagPanel.bagTabIndex = this.spiritBagTabIndex,
                                B.spiritBagPanel.initBagData())
                        }
                        ,
                        n.openSpiritBag = function(i) {
                            void 0 === i && (i = 1),
                                this.spiritBagTabIndex = i,
                                this.callSpiritBagPanel()
                        }
                        ,
                        n.openExpAlloc = function() {
                            B.spiritBagPanel.needShowExpAlloc(!0),
                                this.openSpiritBag()
                        }
                        ,
                        n.openLearnSkill = function() {
                            B.spiritBagPanel.needShowLearnSkill(!0),
                                this.openSpiritBag()
                        }
                        ,
                        n.call = function(i) {
                            if (a.SysAPI.getAccessPermission().canAccess(o.CHK_SPIRIT_BAG))
                                if (f.initialize(),
                                null == i)
                                    this.openSpiritBag();
                                else {
                                    if (Array.isArray(i) && ("follow" == String(i[0]) && f.followUser(Number(i[1])),
                                    "newbie_guide_levelup_dimo" == String(i[0])))
                                        return void f.useItem(137, 1, 1, 17170483, 1);
                                    if ("openItemBag" == String(i))
                                        return void this.openSpiritBag(1);
                                    if ("expAlloc" == String(i))
                                        return void this.openExpAlloc();
                                    "learnSkill" == String(i) && this.openLearnSkill(),
                                    "unFollow" == String(i) && f.followUser(0),
                                    "ableMoveToStorage" == String(i) && B.spiritBagPanel.currentSpirit.enableMoveToStorage(!0),
                                    "disableMoveToStorage" == String(i) && B.spiritBagPanel.currentSpirit.enableMoveToStorage(!1),
                                    "ableOfflinePractice" == String(i) && B.spiritBagPanel.currentSpirit.enableOfflinePractice(!0),
                                    "disableOfflinePractice" == String(i) && B.spiritBagPanel.currentSpirit.enableOfflinePractice(!1);
                                    var t = Number(i);
                                    t > 0 && (B.spiritInfo.opened ? B.spiritInfo.close() : (B.spiritInfo.open(t),
                                        a.UI.createMiniLoading()))
                                }
                        }
                        ,
                        e
                }(S)).target = void 0,
                    A = h)) || A) || A);
                e._RF.pop()
            }
        }
    }
));
