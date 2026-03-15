System.register("chunks:///_virtual/LearnSkillCgiInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts"], (function(e) {
        var l, n, r;
        return {
            setters: [function(e) {
                l = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.DEFINE
                }
            ],
            execute: function() {
                n._RF.push({}, "c9266jQuzZAfLkqUZOYCJkN", "LearnSkillCgiInfo", void 0);
                var t = e("LearnSkillCgiInfo", function() {
                    function e() {
                        throw new Error("LearnSkillCgiInfo can not be instantiated.")
                    }
                    return e.getCgiUrl = function(l, n) {
                        switch (void 0 === n && (n = !0),
                            l) {
                            case e.CONSUMABLE:
                                return n ? e.completeConsumableUrl : e.consumableUrl;
                            case e.LEARN_NEW_SKILL:
                                return n ? e.completeLearnNewSkillUrl : e.learnNewSkillUrl;
                            case e.REPLACE_SKILL:
                                return n ? e.completeReplaceSkillUrl : e.replaceSkillUrl
                        }
                        return null
                    }
                        ,
                        l(e, null, [{
                            key: "completeConsumableUrl",
                            get: function() {
                                return r.CGI_ROOT + e.consumableUrl
                            }
                        }, {
                            key: "consumableUrl",
                            get: function() {
                                return "skill_learn_machine?cmd=2"
                            }
                        }, {
                            key: "completeLearnNewSkillUrl",
                            get: function() {
                                return r.CGI_ROOT + e.learnNewSkillUrl
                            }
                        }, {
                            key: "learnNewSkillUrl",
                            get: function() {
                                return "skill_learn_machine?cmd=0"
                            }
                        }, {
                            key: "completeReplaceSkillUrl",
                            get: function() {
                                return r.CGI_ROOT + e.replaceSkillUrl
                            }
                        }, {
                            key: "replaceSkillUrl",
                            get: function() {
                                return "skill_learn_machine?cmd=1"
                            }
                        }]),
                        e
                }());
                t.CONSUMABLE = 1,
                    t.LEARN_NEW_SKILL = 2,
                    t.REPLACE_SKILL = 3,
                    n._RF.pop()
            }
        }
    }
));
