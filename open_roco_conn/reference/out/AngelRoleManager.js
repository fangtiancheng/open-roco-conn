System.register("chunks:///_virtual/AngelRoleManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./TickManager.ts", "./UserData.ts", "./NotifyDef.ts", "./NotificationCenter.ts"], (function(e) {
        var t, o, n, i, r, a, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    n = e.__global
                }
                , function(e) {
                    i = e.TickManager
                }
                , function(e) {
                    r = e.UserData
                }
                , function(e) {
                    a = e.NotifyDef
                }
                , function(e) {
                    l = e.NotificationCenter
                }
            ],
            execute: function() {
                o._RF.push({}, "b1ef3FD6GRCVZmthhP06y4k", "AngelRoleManager", void 0);
                e("AngelRoleManager", function(e) {
                    t(i, e);
                    var o = i.prototype;
                    function i(t) {
                        var o;
                        return (o = e.call(this) || this).dproxy = void 0,
                            o.magicDProxy = void 0,
                            o.spiritDesProxy = void 0,
                            o.guardianPetDesProxy = void 0,
                            o.layer = void 0,
                            o.roleSys = void 0,
                            o.roleLogicCls = void 0,
                            o.roleViewCls = void 0,
                            o.avatarAdapter = void 0,
                            o.wearEffectCls = void 0,
                            o.__angelSysAPI = void 0,
                            o.roleLogicCls = t.roleLogicCls,
                            o.roleViewCls = t.roleViewCls,
                            o.wearEffectCls = t.wearEffectCls,
                            o.roleSys = t.roleSys,
                            o.guardianPetDesProxy = t.guardianPetDesProxy,
                            o
                    }
                    return o.removeRoleById = function(e) {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        o.roleInfoChange = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRoleList = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRoleCounts = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getRoleAtPoint = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.removeAll = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setAngelSysAPI = function(e) {
                            this.__angelSysAPI = e
                        }
                        ,
                        o.addRole = function(e) {
                            var t = new this.roleLogicCls;
                            return t.setData(e),
                                t.addClickListener(this.roleSys),
                                t.initialize(),
                                this.addTick(t.getActor()),
                                t
                        }
                        ,
                        o.getRoleByID = function(e) {
                            return this.getTickByID(e)
                        }
                        ,
                        o.roleStateChange = function(e) {
                            if (e.uin == r.uin && l.sendNotification(a.MAIN_UI_SPIRIT_DISPLAY_CHANGED, e.spiritID),
                            e.uin == r.uin) {
                                var t = 0
                                    , o = 0;
                                if (0 != e.guardianPetID && 0 != n.MainRoleData.guardianPetID) {
                                    var i = 100 * n.MainRoleData.guardianPetID + n.MainRoleData.guardianPetLv;
                                    t = this.guardianPetDesProxy.select(i).phase;
                                    var s = 100 * e.guardianPetID + e.guardianPetLv;
                                    o = this.guardianPetDesProxy.select(s).phase
                                }
                                e.guardianPetID == n.MainRoleData.guardianPetID && t == o || (n.MainRoleData.guardianPetID = e.guardianPetID,
                                    n.MainRoleData.guardianPetLv = e.guardianPetLv,
                                    l.sendNotification(a.MAIN_UI_GUARDIANPET_DISPLAY_CHANGED))
                            }
                        }
                        ,
                        i
                }(i));
                o._RF.pop()
            }
        }
    }
));
