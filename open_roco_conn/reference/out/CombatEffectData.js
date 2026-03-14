System.register("chunks:///_virtual/CombatEffectData.ts", ["cc", "./DEFINE.ts", "./ItemSubtypes.ts", "./ItemTypes.ts"], (function(_) {
        var E, A, t, I;
        return {
            setters: [function(_) {
                E = _.cclegacy
            }
                , function(_) {
                    A = _.DEFINE
                }
                , function(_) {
                    t = _.ItemSubtypes
                }
                , function(_) {
                    I = _.ItemTypes
                }
            ],
            execute: function() {
                E._RF.push({}, "735ceBvfixCNKMwqj6kBgpQ", "CombatEffectData", void 0);
                var O = _("CombatEffectData", function() {
                    function _() {}
                    return _.getItemEffectId = function(E) {
                        var O = A.getItemType(E, I.COMBAT);
                        return O == t.COMBAT_HP ? _.RECOVER_LIFE : O == t.COMBAT_PP ? _.RECOVER_PP : O == t.COMBAT_RESTORE ? _.RECOVER_STATE : O == t.COMBAT_CATCH ? _.BALL_MOVIE : 0
                    }
                        ,
                        _
                }());
                O.ABILITY_UP = 50001,
                    O.ABILITY_DOWN = 60001,
                    O.MAGICRESIST_UP = 30001,
                    O.MAGICRESIST_DOWN = 40001,
                    O.ATTACK_UP = 30002,
                    O.ATTACK_DOWN = 40002,
                    O.HITRAT_UP = 30003,
                    O.HITRAT_DOWN = 40003,
                    O.MAGICATTACK_UP = 30004,
                    O.MAGICATTACK_DOWN = 40004,
                    O.DODGE_UP = 30005,
                    O.DODGE_DOWN = 40005,
                    O.RACE_UP = 30006,
                    O.RACE_DOWN = 40006,
                    O.DEFEND_UP = 30007,
                    O.DEFEND_DOWN = 40007,
                    O.UPGRADE = 30008,
                    O.RECOVER_LIFE = 30009,
                    O.RECOVER_PP = 30010,
                    O.RECOVER_STATE = 30011,
                    O.MAN_MOVIE = 30012,
                    O.BALL_MOVIE = 17039362,
                    O.BALL_MOVIE_M = 17039363,
                    O.BALL_MOVIE_H = 17039364,
                    O.BALL_MOVIE_HJ = 17039365,
                    O.BALL_MOVIE_M0 = 17039366,
                    O.BALL_MOVIE_GWZ = 17301507,
                    O.BALL_MOVIE_CJ = 17039368,
                    O.BALL_MOVIE_XN = 17039369,
                    O.BALL_MOVIE_SG = 17039370,
                    O.BALL_MOVIE_JXQ = 17039372,
                    O.BALL_MOVIE_PDJ = 17039373,
                    O.BALL_MOVIE_PDX = 17039374,
                    O.BALL_MOVIE_FOUR = 17039375,
                    O.BALL_MOVIE_FLASH = 17039376,
                    E._RF.pop()
            }
        }
    }
));
