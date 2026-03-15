System.register("chunks:///_virtual/LoadingResUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LoadInfoLogic.ts"], (function(t) {
        var o, n, e, i, s, a;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        e = t._decorator,
                        i = t.Event,
                        s = t.Component
                }
                , function(t) {
                    a = t.LoadInfoLogic
                }
            ],
            execute: function() {
                n._RF.push({}, "9f66aQtOm1HsKjhUoOXvDj/", "LoadingResUILogic", void 0);
                e.ccclass,
                    e.property,
                    t("NodeEvent", function(t) {
                        function n() {
                            return t.apply(this, arguments) || this
                        }
                        o(n, t);
                        var e = n.prototype;
                        return e.onLoad = function() {
                            this.node.dispatchEvent(new i("onLoad"))
                        }
                            ,
                            e.start = function() {
                                this.node.dispatchEvent(new i("start"))
                            }
                            ,
                            n
                    }(s)),
                    t("LoadingResUILogic", function() {
                        function t(t, o) {
                            this._nodeEventListener = void 0,
                                this._target = void 0,
                                this._parent = void 0,
                                this._ani = void 0,
                                this._ani_pk = void 0,
                                this._loadInfo_1 = void 0,
                                this._loadInfo_2 = void 0,
                                this._target = t,
                                this._parent = o,
                                this.init()
                        }
                        var o = t.prototype;
                        return o.init = function() {
                            this._loadInfo_1 = new a(this._target,1),
                                this._loadInfo_2 = new a(this._target,2)
                        }
                            ,
                            o.getTarget = function() {
                                return this._target
                            }
                            ,
                            o.updateProgress = function() {
                                this._loadInfo_1.updateProgress(),
                                    this._loadInfo_2.updateProgress()
                            }
                            ,
                            o.setNpcIcon = function(t) {
                                this._loadInfo_1.setNpcIcon(t.uid, t.uname, t.combatType, t.resA, 1),
                                    this._loadInfo_2.setNpcIcon(t.oid, t.oname, t.combatType, t.resA, 2)
                            }
                            ,
                            o.show = function(t) {
                                this._loadInfo_1.setCombatInfo(t.myInfo),
                                    this._loadInfo_2.setCombatInfo(t.rivalInfo),
                                    null == this._target.parent || null == this._target.parent ? this._parent.addChild(this._target) : this._target.parent && this._target.parent != this._parent && (this._target.removeFromParent(),
                                        this._parent.addChild(this._target))
                            }
                            ,
                            o.hidden = function() {
                                this._loadInfo_1.reset(),
                                    this._loadInfo_2.reset(),
                                this._target.parent && this._target.removeFromParent()
                            }
                            ,
                            t
                    }());
                n._RF.pop()
            }
        }
    }
));
