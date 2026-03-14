System.register("chunks:///_virtual/AWDataReceiver.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CALLBACK.ts", "./CallbackCenter.ts", "./Constants.ts", "./AngelSysEvent.ts", "./AbstractDataReceiver.ts", "./global.ts", "./ADFCmdsType.ts", "./GetItemsByTypeP.ts"], (function(t) {
        var e, n, a, i, s, o, c, r, E, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    a = t.CALLBACK
                }
                , function(t) {
                    i = t.CallbackCenter
                }
                , function(t) {
                    s = t.Constants
                }
                , function(t) {
                    o = t.AngelSysEvent
                }
                , function(t) {
                    c = t.AbstractDataReceiver
                }
                , function(t) {
                    r = t.__global
                }
                , function(t) {
                    E = t.ADFCmdsType
                }
                , function(t) {
                    l = t.GetItemsByTypeP
                }
            ],
            execute: function() {
                n._RF.push({}, "e112eEDeORLT6dFr6+TN3Pr", "AWDataReceiver", void 0);
                t("AWDataReceiver", function(t) {
                    function n() {
                        for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
                            a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a)) || this).globalEventDist = void 0,
                            e
                    }
                    e(n, t);
                    var c = n.prototype;
                    return c.initialize = function() {
                        this.globalEventDist = this.sysApi.getGEventAPI().angelEventDispatcher;
                        var t = this.sysApi.getNetSysAPI()
                            , e = new l;
                        l.itemDataProxy = this.sysApi.getGDataAPI().getDataProxy(s.ITEM_DATA),
                            t.addDataProcessor(e),
                            i.registerCallBack(a.ANGEL_WORLD_ON_NEW_SCENE_DATA_INITED, n.onSceneDataInited, this)
                    }
                        ,
                        n.onSceneDataInited = function(t, e, n, c) {
                            c.globalEventDist.dispatchEvent(new o(o.ON_SCENEDATA_INIT));
                            var E = r.SysAPI.getGDataAPI().getGlobalVal(s.PRE_SCENE)
                                , l = r.SysAPI.getGDataAPI().getGlobalVal(s.CUR_SCENE);
                            return i.notifyEvent(a.ANGEL_WORLD_ON_NEW_SCENE_ENTERED, [E, l]),
                            E || i.notifyEvent(a.ANGEL_WORLD_ON_NEW_SCENE_ENTERED_FIRST_TIME, [E, l]),
                                i.EVENT_OK
                        }
                        ,
                        c.onGetRoleListData = function(t) {}
                        ,
                        c.clearAndUpdateMain = function(t) {}
                        ,
                        c.initSceneData = function(t) {}
                        ,
                        c.requestChangeScene = function(t, e, n, a) {}
                        ,
                        c.onDataReceive = function(t, e) {}
                        ,
                        c.getAcceptTypes = function() {
                            return [E.T_GetRoleList, E.T_ChangeScene, E.T_COMBAT_AWARD, E.T_SERVER_MSG]
                        }
                        ,
                        n
                }(c));
                n._RF.pop()
            }
        }
    }
));
