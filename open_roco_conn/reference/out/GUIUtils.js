System.register("chunks:///_virtual/GUIUtils.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ComponentParams.ts", "./ResManager.ts", "./UIManager.ts", "./TipsProxy.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./CreateRoleMessage.ts", "./GameStoryMessage.ts", "./GameProtocolManager.ts", "./GameStoryQueryStatusProtocol.ts", "./StringUtil.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, n, o, i, a, s, r, c, u, f, d, l, p, g, _, m, C, S, E, I, M, v;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.Button,
                        i = t.Sprite,
                        a = t.assetManager,
                        s = t.SpriteFrame,
                        r = t.Texture2D,
                        c = t.NodeEventType,
                        u = t.instantiate
                }
                , function(t) {
                    f = t.ComponentParams
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    l = t.default
                }
                , function(t) {
                    p = t.TipsProxy
                }
                , function(t) {
                    g = t.PureNotificationCenter
                }
                , function(t) {
                    _ = t.AppConstDef
                }
                , function(t) {
                    m = t.CreateRoleMessage
                }
                , function(t) {
                    C = t.GameStoryMessage
                }
                , function(t) {
                    S = t.GameProtocolManager
                }
                , function(t) {
                    E = t.GameStoryQueryStatusProtocol,
                        I = t.GameStoryQueryStatusReq
                }
                , function(t) {
                    M = t.StringUtil
                }
                , function(t) {
                    v = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "76658CbBXdD4qImTjVl74kg", "GUIUtils", void 0),
                    t("GUI", function() {
                        function t() {}
                        var n = t.prototype;
                        return n.setButtonEnable = function(t, e) {
                            var n;
                            (n = t instanceof o ? t.node : t).getComponent(o).interactable = e,
                                n.getComponent(i).grayscale = !e
                        }
                            ,
                            n.loadIcon = function(t, e, n, o) {
                                0 !== t.indexOf("http") ? a.loadBundle("combatIcon", (function(i, a) {
                                        if (i)
                                            return console.log(i.message),
                                                void (o && o(i));
                                        a.load(t, (function(t, i) {
                                                if (t)
                                                    return console.log(t.message),
                                                        void (o && o(t));
                                                e.isValid && (e.spriteFrame = s.createWithImage(i),
                                                    e.spriteFrame.texture.setWrapMode(r.WrapMode.CLAMP_TO_EDGE, r.WrapMode.CLAMP_TO_EDGE)),
                                                n && n(e)
                                            }
                                        ))
                                    }
                                )) : a.loadRemote(t, (function(t, i) {
                                        if (t)
                                            return console.log(t.message),
                                                void (o && o(t));
                                        e.isValid && (e.spriteFrame = s.createWithImage(i),
                                            e.spriteFrame.texture.setWrapMode(r.WrapMode.CLAMP_TO_EDGE, r.WrapMode.CLAMP_TO_EDGE)),
                                        n && n(e)
                                    }
                                ))
                            }
                            ,
                            n.dialog = function(t, e, n, o, i) {
                                var a = function(t) {
                                    var e = u(t);
                                    e.addComponent(f).setParams(n, o, i),
                                        l.gRootCombat.addChild(e)
                                }
                                    , s = d.Instance.getAsset(t, e);
                                s ? a(s) : d.Instance.loadingRes(t, e, (function(t, e) {
                                        t ? console.log(t.message) : a(e)
                                    }
                                ))
                            }
                            ,
                            n.tips = function(t, e, n, o, i, a) {
                                void 0 === n && (n = "prefabs/common/SimpleTips"),
                                void 0 === o && (o = "gui"),
                                void 0 === i && (i = c.TOUCH_START),
                                void 0 === a && (a = !0);
                                var s = t.getComponent(p);
                                s || ((s = t.addComponent(p)).bundleName = o,
                                    s.prefabPath = n,
                                    s.eventType = i,
                                    s.automaticClose = a,
                                    s.parent = l.gTips),
                                    s.params = e
                            }
                            ,
                            n.gotoServerListView = function() {
                                if (1 != v.IS_LOCAL) {
                                    var t = M.getCookie("creat")
                                        , e = M.getCookie("relogin");
                                    "1" === t && "1" != e ? g.sendNotification(m.SHOW_MAIN_VIEW) : g.sendNotification(_.NN_V_SHOW_SERVER_LIST_VIEW)
                                } else
                                    g.sendNotification(_.NN_V_SHOW_SERVER_LIST_VIEW)
                            }
                            ,
                            n.gotoMainView = function(t) {
                                if (1 == v.IS_LOCAL)
                                    return t && t(),
                                        void g.sendNotification(_.NN_V_SHOW_MAIN_SCENE_VIEW);
                                var e = S.instance.getPropocol(E)
                                    , n = new I;
                                e.send(n, (function(e) {
                                        if (0 == e.data.retInfo.retCode && 2 == e.data.flag && 0 == e.data.status)
                                            return t && t(),
                                                void g.sendNotification(C.START_CHAPTER);
                                        t && t(),
                                            g.sendNotification(_.NN_V_SHOW_MAIN_SCENE_VIEW)
                                    }
                                ))
                            }
                            ,
                            e(t, null, [{
                                key: "instance",
                                get: function() {
                                    return this._instance || (this._instance = new t),
                                        this._instance
                                }
                            }]),
                            t
                    }())._instance = void 0,
                    n._RF.pop()
            }
        }
    }
));
