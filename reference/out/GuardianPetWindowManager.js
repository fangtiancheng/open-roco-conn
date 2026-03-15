System.register("chunks:///_virtual/GuardianPetWindowManager.ts", ["cc", "./GuardianPetLvTreeUILogic.ts", "./GuardianPetMainUILogic.ts", "./VipAvatarUILogic.ts"], (function(i) {
        var n, t, a, o;
        return {
            setters: [function(i) {
                n = i.cclegacy
            }
                , function(i) {
                    t = i.GuardianPetLvTreeUILogic
                }
                , function(i) {
                    a = i.GuardianPetMainUILogic
                }
                , function(i) {
                    o = i.VipAvatarUILogic
                }
            ],
            execute: function() {
                n._RF.push({}, "d0b7fhUoS5LW5rGGJrTmL6+", "GuardianPetWindowManager", void 0),
                    i("GuardianPetWindowManager", function() {
                        function i(i) {
                            if (this._curWin = void 0,
                                this._mainUILogic = void 0,
                                this._lvTreeUILogic = void 0,
                                this._vipAvatarUiLogic = void 0,
                                this.finishFlag = void 0,
                            null == i)
                                throw new Error("GuardianPetWindowManager is a single instance!")
                        }
                        i.getInstance = function() {
                            return null == i._instance && (i._instance = new i(new e)),
                                i._instance
                        }
                        ;
                        var n = i.prototype;
                        return n.openMainWind = function() {
                            null == this._mainUILogic && (this._mainUILogic = new a),
                                this._mainUILogic.open(),
                                this._curWin = this._mainUILogic
                        }
                            ,
                            n.openLvTreeWind = function(i, n) {
                                null == this._lvTreeUILogic && (this._lvTreeUILogic = new t),
                                    this._lvTreeUILogic.open(i, n),
                                    this._curWin = this._lvTreeUILogic
                            }
                            ,
                            n.openVipAvatarWind = function(i) {
                                null == this._vipAvatarUiLogic && (this._vipAvatarUiLogic = new o),
                                    this._vipAvatarUiLogic.open(i),
                                    this._curWin = this._vipAvatarUiLogic
                            }
                            ,
                            n.dispose = function() {
                                this._mainUILogic && (this._mainUILogic.dispose(),
                                    this._mainUILogic = null),
                                this._vipAvatarUiLogic && (this._vipAvatarUiLogic.dispose(),
                                    this._vipAvatarUiLogic = null),
                                this._vipAvatarUiLogic && (this._vipAvatarUiLogic.dispose(),
                                    this._vipAvatarUiLogic = null)
                            }
                            ,
                            i
                    }())._instance = void 0;
                var e = function() {};
                n._RF.pop()
            }
        }
    }
));
