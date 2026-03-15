System.register("chunks:///_virtual/GuardianPetVipAvatarDesProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./GuardianPetVipAvatarDes.ts"], (function(t) {
        var e, s, r, n;
        return {
            setters: [function(t) {
                e = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    n = t.GuardianPetVipAvatarDes
                }
            ],
            execute: function() {
                s._RF.push({}, "37317A39QlGLoO25sUcrtaV", "GuardianPetVipAvatarDesProxy", void 0);
                t("GuardianPetVipAvatarDesProxy", function() {
                    function t(t) {
                        this.desMaps = void 0,
                            this.listMaps = void 0,
                            this.desMaps = new Map,
                            this.listMaps = [],
                            this.processXML(t)
                    }
                    var s = t.prototype;
                    return s.processXML = function(t) {
                        for (var s, r, a, i = t.avatarDes, u = e(i); !(a = u()).done; ) {
                            var o = a.value;
                            r = (s = new n).baseId = Number(o.id),
                                s.name = o.name,
                                s.needVipLv = Number(o.needVipLv),
                                s.status = Number(o.status),
                                s.curDisplayLv = Number(o.curLv),
                                s.isCurAvatar = !1,
                                this.desMaps[r] = s,
                                this.listMaps.push(s)
                        }
                    }
                        ,
                        s.insert = function() {
                            return !1
                        }
                        ,
                        s.select = function() {
                            return "*" == (arguments.length <= 0 ? void 0 : arguments[0]) ? this.listMaps : this.desMaps[Number(arguments.length <= 0 ? void 0 : arguments[0])]
                        }
                        ,
                        s.update = function() {
                            return !1
                        }
                        ,
                        s.deleted = function() {
                            return !1
                        }
                        ,
                        s.clear = function() {}
                        ,
                        s.getName = function() {
                            return r.GUARDIANPET_VIPAVATAR_DATA
                        }
                        ,
                        t
                }());
                s._RF.pop()
            }
        }
    }
));
