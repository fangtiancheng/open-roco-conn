System.register("chunks:///_virtual/SecretRealmViewManager.ts", ["cc", "./index.ts", "./SecretRealmView.ts", "./SecretRealmMainView.ts", "./SecretRealmMainRuleView.ts", "./SecretRealmChallengeView.ts", "./SecretRealmRewardPoolCallView.ts", "./SecretRealmCallRuleView.ts", "./SecretRealmHasSoulpearlView.ts", "./SecretRealmSelectSoulpearlView.ts", "./SecretRealmRewardMonsterView.ts", "./SecretRealmRewardEggView.ts", "./SecretRealmRewardItemView.ts"], (function(e) {
        var r, a, t, l, i, c, R, s, w, n, m, S;
        return {
            setters: [function(e) {
                r = e.cclegacy
            }
                , null, function(e) {
                    a = e.SecretRealmMasterView
                }
                , function(e) {
                    t = e.SecretRealmMainView
                }
                , function(e) {
                    l = e.SecretRealmMainRuleView
                }
                , function(e) {
                    i = e.SecretRealmChallengeView
                }
                , function(e) {
                    c = e.SecretRealmRewardPoolCallView
                }
                , function(e) {
                    R = e.SecretRealmCallRuleView
                }
                , function(e) {
                    s = e.SecretRealmHasSoulpearlView
                }
                , function(e) {
                    w = e.SecretRealmSelectSoulpearlView
                }
                , function(e) {
                    n = e.SecretRealmRewardMonsterView
                }
                , function(e) {
                    m = e.SecretRealmRewardEggView
                }
                , function(e) {
                    S = e.SecretRealmRewardItemView
                }
            ],
            execute: function() {
                var V;
                r._RF.push({}, "dbdd4j5PFFEMZuSrSXj5mA9", "SecretRealmViewManager", void 0);
                var E = e("SecretRealmViewManager", function() {
                    function e() {}
                    return e.getViewClass = function(r) {
                        var a = e.ViewClassMap[r];
                        if (!a)
                            throw new Error("[SecretRealmViewManager] 未知的View类型: " + r);
                        return a
                    }
                        ,
                        e.createView = function(r, a) {
                            return new (e.getViewClass(r))(a)
                        }
                        ,
                        e.getViewPrefabInfo = function(r) {
                            var a, t = ((a = {})[e.ViewType.MASTER] = "prefabs/secret-realm/secret-realm-master",
                                a[e.ViewType.MAIN] = "prefabs/secret-realm/secret-realm-main",
                                a[e.ViewType.MAIN_RULE] = "prefabs/secret-realm/secret-realm-main-rule",
                                a[e.ViewType.CHALLENGE] = "prefabs/secret-realm/secret-realm-challenge",
                                a[e.ViewType.SUMMON] = "prefabs/secret-realm/secret-realm-summon",
                                a[e.ViewType.CALL_RULE] = "prefabs/secret-realm/secret-realm-call-rule",
                                a[e.ViewType.HAS_SOULPEARL] = "prefabs/secret-realm/secret-realm-has-soulpearl",
                                a[e.ViewType.SELECT_SOULPEARL] = "prefabs/secret-realm/secret-realm-select-soulpearl",
                                a[e.ViewType.REWARD_MONSTER] = "prefabs/secret-realm/secret-realm-reward-monster",
                                a[e.ViewType.REWARD_EGG] = "prefabs/secret-realm/secret-realm-reward-egg",
                                a[e.ViewType.REWARD_ITEM] = "prefabs/secret-realm/secret-realm-reward-item",
                                a)[r];
                            if (!t)
                                throw new Error("[SecretRealmViewManager] 未知的View类型: " + r);
                            return {
                                bundleName: "gui",
                                prefabPath: t
                            }
                        }
                        ,
                        e
                }());
                E.ViewType = {
                    MASTER: "master",
                    MAIN: "main",
                    MAIN_RULE: "mainRule",
                    CHALLENGE: "challenge",
                    SUMMON: "summon",
                    CALL_RULE: "callRule",
                    HAS_SOULPEARL: "hasSoulpearl",
                    SELECT_SOULPEARL: "selectSoulpearl",
                    REWARD_MONSTER: "rewardMonster",
                    REWARD_EGG: "rewardEgg",
                    REWARD_ITEM: "rewardItem"
                },
                    E.ViewClassMap = ((V = {})[E.ViewType.MASTER] = a,
                        V[E.ViewType.MAIN] = t,
                        V[E.ViewType.MAIN_RULE] = l,
                        V[E.ViewType.CHALLENGE] = i,
                        V[E.ViewType.SUMMON] = c,
                        V[E.ViewType.CALL_RULE] = R,
                        V[E.ViewType.HAS_SOULPEARL] = s,
                        V[E.ViewType.SELECT_SOULPEARL] = w,
                        V[E.ViewType.REWARD_MONSTER] = n,
                        V[E.ViewType.REWARD_EGG] = m,
                        V[E.ViewType.REWARD_ITEM] = S,
                        V),
                    r._RF.pop()
            }
        }
    }
));
