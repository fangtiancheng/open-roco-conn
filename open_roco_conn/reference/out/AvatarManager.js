System.register("chunks:///_virtual/AvatarManager.ts", ["cc", "./global.ts", "./RoleDetailData.ts", "./BuildLogHelper.ts"], (function(a) {
        var t, e, n, o;
        return {
            setters: [function(a) {
                t = a.cclegacy
            }
                , function(a) {
                    e = a.__global
                }
                , function(a) {
                    n = a.default
                }
                , function(a) {
                    o = a.default
                }
            ],
            execute: function() {
                t._RF.push({}, "f553f/8wK1Hzb3N25+v2Q+E", "AvatarManager", void 0);
                a("AvatarManager", function() {
                    function a() {}
                    return a.getAvatar = function(a, t, e, n) {}
                        ,
                        a.getAvataPreview = function(a, t, r) {
                            void 0 === r && (r = null),
                            o.IS_LOCAL && console.info("getAvataPreviewuin==" + a),
                                e.DataAPI.requestRoleDetail((function(a) {
                                        a instanceof n && (a.dazzleAvatar ? (t.active = !1,
                                            console.info("炫装")) : (console.info("普通"),
                                            t.setAvatars(a.avatar, a.avatarVersion, a.avatarEffectID, a.avatarTransformID)));
                                        r && r()
                                    }
                                ), a)
                        }
                        ,
                        a.getDazzleAvataPreview = function(a, t, n) {
                            void 0 === n && (n = null),
                                console.info("getDazzleAvataPreview==" + a),
                                e.DataAPI.requestRoleDetail((function(a) {
                                        a.dazzleAvatar ? (t.setAvatars(a.daAvatar),
                                            console.error("炫装")) : (t.active = !1,
                                            console.error("普通"));
                                        n && n()
                                    }
                                ), a)
                        }
                        ,
                        a
                }());
                t._RF.pop()
            }
        }
    }
));
