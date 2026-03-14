System.register("chunks:///_virtual/ARDataReceiver.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./Constants.ts", "./AbstractDataReceiver.ts", "./ADFCmdsType.ts", "./RoleStateData.ts", "./RoleOutInSceneP.ts", "./RoleSDataChangeP.ts"], (function(e) {
        var t, a, n, o, i, s, c, r, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    n = e.default
                }
                , function(e) {
                    o = e.Constants
                }
                , function(e) {
                    i = e.AbstractDataReceiver
                }
                , function(e) {
                    s = e.ADFCmdsType
                }
                , function(e) {
                    c = e.RoleStateData
                }
                , function(e) {
                    r = e.RoleOutInSceneP
                }
                , function(e) {
                    l = e.RoleSDataChangeP
                }
            ],
            execute: function() {
                a._RF.push({}, "4325boRcsxHzYNDiSMOZs8q", "ARDataReceiver", void 0);
                e("ARDataReceiver", function(e) {
                    function a() {
                        for (var t, a = arguments.length, n = new Array(a), o = 0; o < a; o++)
                            n[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(n)) || this).globalData = void 0,
                            t.roleDataProxy = void 0,
                            t.roleSystem = void 0,
                            t.ignoreNetData = !0,
                            t
                    }
                    t(a, e);
                    var i = a.prototype;
                    return i.initialize = function() {
                        this.globalData = this.sysApi.getGDataAPI(),
                            this.roleDataProxy = this.globalData.getDataProxy(o.ROLE_DATA),
                            this.roleSystem = this.sysApi.getWorldAPI().getRoleSysAPI();
                        var e = this.sysApi.getNetSysAPI();
                        e.addDataProcessor(new r),
                            e.addDataProcessor(new l),
                            e.addDataReceiver(this)
                    }
                        ,
                        i.setIgnoreNetData = function(e) {
                            void 0 === e && (e = !1),
                                this.ignoreNetData = e
                        }
                        ,
                        i.onDataReceive = function(e, t) {
                            if (!this.ignoreNetData)
                                switch (e) {
                                    case s.T_SOneInScene:
                                        break;
                                    case s.T_SOneOutScene:
                                        1 == n.IS_LOCAL && console.info("[ARDataReceiver] 离开场景人的ID:" + t);
                                        break;
                                    case s.T_RoadPosBC:
                                        1 == n.IS_LOCAL && console.info("[ARDataReceiver] 有人物移动");
                                        break;
                                    case s.T_StateDataChange:
                                        1 == n.IS_LOCAL && console.info("[ARDataReceiver] 有人的状态改变了"),
                                            this.roleSystem.onOneRoleStateChange(t);
                                        break;
                                    case s.T_SOneInfoChange:
                                        1 == n.IS_LOCAL && console.info("[ARDataReceiver] 有人的信息改变了")
                                }
                        }
                        ,
                        i.getAcceptTypes = function() {
                            return [s.T_SOneInScene, s.T_SOneOutScene, s.T_RoadPosBC, s.T_RoadPosSub, s.T_StateDataChange, s.T_SOneInfoChange, s.TYPE_COMBAT_END_PUSH]
                        }
                        ,
                        i.submitPaths = function(e, t, a) {}
                        ,
                        i.submitAvatarChange = function(e) {}
                        ,
                        i.addRole = function(e) {
                            this.onDataReceive(s.T_SOneInScene, e)
                        }
                        ,
                        i.removeRole = function(e) {
                            this.onDataReceive(s.T_SOneOutScene, e)
                        }
                        ,
                        i.roleMove = function(e, t) {}
                        ,
                        i.changeRoleState = function(e, t) {
                            var a = new c;
                            a.uin = e,
                                a.stateType = t.stateType,
                                a.isFlying = t.isFlying,
                                a.flyItem = t.flyItem,
                                a.isSwiming = t.isSwiming,
                                a.swimItem = t.swimItem,
                                a.cursedType = t.cursedType,
                                a.flashType = t.flashType,
                                a.summonType = t.summonType,
                                a.rideType = t.rideType,
                                a.spiritID = t.spiritID,
                                this.onDataReceive(s.T_StateDataChange, a)
                        }
                        ,
                        a
                }(i));
                a._RF.pop()
            }
        }
    }
));
