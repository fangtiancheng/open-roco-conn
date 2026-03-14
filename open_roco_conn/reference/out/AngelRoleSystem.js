System.register("chunks:///_virtual/AngelRoleSystem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./AngelRoleManager.ts", "./ARDataReceiver.ts", "./Constants.ts", "./RMArgsContext.ts", "./AbstractARole.ts"], (function(e) {
        var t, n, o, i, r, l, c, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.EventDispatcher
                }
                , function(e) {
                    i = e.AngelRoleManager
                }
                , function(e) {
                    r = e.ARDataReceiver
                }
                , function(e) {
                    l = e.Constants
                }
                , function(e) {
                    c = e.RMArgsContext
                }
                , function(e) {
                    s = e.AbstractARole
                }
            ],
            execute: function() {
                n._RF.push({}, "7c13c2VpalGnpenKkKkYxPC", "AngelRoleSystem", void 0);
                e("AngelRoleSystem", function(e) {
                    function n() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                            o[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(o)) || this).__angelSysAPI = void 0,
                            t.__rolesManager = void 0,
                            t.__aRdataRec = void 0,
                            t._shieldActionDic = void 0,
                            t
                    }
                    t(n, e);
                    var o = n.prototype;
                    return o.finalize = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        o.removeRoleById = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onOneRoleMove = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onOneRoleInfoChange = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.bcRolePos = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onCombatResultChange = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRoleByID = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getMainRole = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRolesList = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRoleCounts = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.mainRoleWalk = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.distanceToMR = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.applyActionTo = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.applyActionTo2 = function(e, t, n) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.applyActionTo3 = function(e, t, n) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRoleAtPoint = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.isWalkable = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRoleModel = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onItemClick = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onItemMagic = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onItemLevelUp = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onItemSpirit = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.isFrequency = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.addRole = function(e) {
                            this.__rolesManager.addRole(e)
                        }
                        ,
                        o.onOneRoleStateChange = function(e) {
                            this.__rolesManager.roleStateChange(e)
                        }
                        ,
                        o.initialize = function() {
                            var e = new c;
                            e.roleLogicCls = s,
                                e.roleSys = this,
                                e.guardianPetDesProxy = this.__angelSysAPI.getGDataAPI().getDataProxy(l.GUARDIANPET_DATA),
                                this.__rolesManager = new i(e),
                                this.__rolesManager.setAngelSysAPI(this.__angelSysAPI),
                                this.__aRdataRec = new r,
                                this.__aRdataRec.setAngelSysAPI(this.__angelSysAPI),
                                this.__aRdataRec.initialize(),
                                this.__aRdataRec.setIgnoreNetData(),
                                this._shieldActionDic = new Map
                        }
                        ,
                        o.setAngelSysAPI = function(e) {
                            this.__angelSysAPI = e
                        }
                        ,
                        o.shieldAction = function(e) {
                            return (null == this._shieldActionDic[e] || null == this._shieldActionDic[e]) && (this._shieldActionDic[e] = !0,
                                !0)
                        }
                        ,
                        o.unshieldAction = function(e) {
                            return 1 == this._shieldActionDic[e] && (delete this._shieldActionDic[e],
                                !0)
                        }
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
