System.register("chunks:///_virtual/GuardianPetEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        a = t.Event
                }
            ],
            execute: function() {
                n._RF.push({}, "672639IWrdKxbpMQMf4dN61", "GuardianPetEvent", void 0);
                var r = t("GuardianPetEvent", function(t) {
                    function n(e, n, a) {
                        var r;
                        return void 0 === n && (n = !1),
                            (r = t.call(this, e, n) || this).avatarBaseId = void 0,
                            r
                    }
                    return e(n, t),
                        n.prototype.clone = function() {
                            var t = new n(this.type,this.bubbles);
                            return t.avatarBaseId = this.avatarBaseId,
                                t
                        }
                        ,
                        n
                }(a));
                r.EQUIP_VIPAVATAR = "equipVipAvatar",
                    r.UN_EQUIP_VIPAVATAR = "unEquipAvatar",
                    n._RF.pop()
            }
        }
    }
));
