System.register("chunks:///_virtual/Successor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./EventDispatcher.ts", "./ProcessEvent.ts", "./SuccessorEvent.ts", "./GlobalEventDispatcher.ts", "./ProcessControll.ts", "./SpiritInfoSearch.ts", "./TaskBuilder.ts", "./UIMediator.ts", "./SpiritIdle.ts"], (function(t) {
        var e, s, n, i, o, c, r, a, l, u, h, d, _, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    s = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    c = t.EventDispatcher
                }
                , function(t) {
                    r = t.ProcessEvent
                }
                , function(t) {
                    a = t.SuccessorEvent
                }
                , function(t) {
                    l = t.GlobalEventDispatcher
                }
                , function(t) {
                    u = t.ProcessControll
                }
                , function(t) {
                    h = t.SpiritInfoSearch
                }
                , function(t) {
                    d = t.TaskBuilder
                }
                , function(t) {
                    _ = t.UIMediator
                }
                , function(t) {
                    f = t.SpiritIdle
                }
            ],
            execute: function() {
                i._RF.push({}, "76b74bWpVpIM4b8nw3WMNJE", "Successor", void 0);
                t("Successor", function(t) {
                    function i(e) {
                        var s;
                        return (s = t.call(this) || this)._system = void 0,
                            s._processControll = new u,
                            s._windowManager = _.getInstance(),
                            s._taskBuilder = new d,
                            s._handle = void 0,
                            s._infoSearch = h.getInstance(),
                            s._processControll.addEventListener(r.LIST_DONE, s.onOver, n(s)),
                            l.getInstance().addEventListener(a.HIDE_PETS, s.onHidePets, n(s)),
                            s
                    }
                    e(i, t);
                    var c = i.prototype;
                    return c.onHidePets = function(t) {
                        this.dispatchEvent(t.clone())
                    }
                        ,
                        c.initialize = function() {}
                        ,
                        c.onOver = function(t) {
                            null != this._handle ? this._handle() : (CONFIG.DEBUG,
                                console.log("[Successor]this._handle未设置"))
                        }
                        ,
                        c.overHandle = function() {
                            null != this._handle ? this._handle() : (CONFIG.DEBUG,
                                console.log("[Successor]this._handle未设置"))
                        }
                        ,
                        c.setPlugin = function(t) {
                            this._system = t,
                                this._infoSearch.initialize(this._system),
                                this._taskBuilder.initialize(this._system),
                                this._windowManager.initialize(this._system),
                                f.initialize(this._system.getSysApi().getResSysAPI().getResAdapter(o.COMBAT_RES))
                        }
                        ,
                        c.update = function() {}
                        ,
                        s(i, [{
                            key: "data",
                            set: function(t) {
                                var e;
                                null != this._system && t.finished > 0 && (e = this._taskBuilder.getScriptList(t),
                                    this._processControll.addScripts(e),
                                    this._processControll.work())
                            }
                        }, {
                            key: "handle",
                            set: function(t) {
                                this._handle = t
                            }
                        }]),
                        i
                }(c));
                i._RF.pop()
            }
        }
    }
));
