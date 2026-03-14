System.register("chunks:///_virtual/SpiritDataReader.ts", ["cc", "./Constants.ts", "./global.ts", "./SpiritData.ts", "./BuildLogHelper.ts", "./SpiritSkillData.ts"], (function(e) {
        var n, t, r, i, a, d;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    t = e.Constants
                }
                , function(e) {
                    r = e.__global
                }
                , function(e) {
                    i = e.SpiritData
                }
                , function(e) {
                    a = e.default
                }
                , function(e) {
                    d = e.SpiritSkillData
                }
            ],
            execute: function() {
                n._RF.push({}, "ba221YVQHhAx6FTkXwI/wDu", "SpiritDataReader", void 0);
                var s = e("SpiritDataReader", function() {
                    function e() {
                        throw new Error("SpiritDataReader class can not be instantiated.")
                    }
                    return e.init = function() {
                        e._spiritProxy = r.SysAPI.getGDataAPI().getDataProxy(t.SPIRIT_DATA),
                            e._skillProxy = r.SysAPI.getGDataAPI().getDataProxy(t.SSKILL_DATA)
                    }
                        ,
                        e.read = function(n) {
                            if (null == n)
                                return null;
                            var t, r, a, s;
                            (t = new i).surplus = n.readUnsignedShort(),
                                t.baseHP = n.readUnsignedShort(),
                                t.ZPA = n.readUnsignedShort(),
                                t.ZPD = n.readUnsignedShort(),
                                t.ZMA = n.readUnsignedShort(),
                                t.ZMD = n.readUnsignedShort(),
                                t.ZSP = n.readUnsignedShort(),
                                t.ZHP = n.readUnsignedShort(),
                                t.XPA = n.readUnsignedByte() / 10,
                                t.XPD = n.readUnsignedByte() / 10,
                                t.XMA = n.readUnsignedByte() / 10,
                                t.XMD = n.readUnsignedByte() / 10,
                                t.XSP = n.readUnsignedByte() / 10,
                                t.id = n.readUnsignedInt(),
                                t.level = n.readUnsignedByte(),
                                t.expToNextLevel = n.readUnsignedInt(),
                                t.temper = n.readUnsignedByte(),
                                t.sex = n.readUnsignedByte(),
                                t.caughtTime = n.readUnsignedInt(),
                                t.caughtLocation = n.readUnsignedShort(),
                                t.storageTime = n.readUnsignedInt(),
                                s = n.readUnsignedShort(),
                                t.closeness = 127 & s,
                                t.affiliation = s >> 7 & 7,
                                t.addPlan = s >> 10 & 63,
                                t.maxHP = n.readUnsignedShort(),
                                t.PA = n.readUnsignedShort(),
                                t.PD = n.readUnsignedShort(),
                                t.MA = n.readUnsignedShort(),
                                t.MD = n.readUnsignedShort(),
                                t.SP = n.readUnsignedShort(),
                                t.HP = n.readUnsignedShort(),
                                t.TPA = n.readUnsignedByte(),
                                t.TPD = n.readUnsignedByte(),
                                t.TMA = n.readUnsignedByte(),
                                t.TMD = n.readUnsignedByte(),
                                t.TSP = n.readUnsignedByte(),
                                t.THP = n.readUnsignedByte(),
                                t.GPA = n.readUnsignedByte(),
                                t.GPD = n.readUnsignedByte(),
                                t.GMA = n.readUnsignedByte(),
                                t.GMD = n.readUnsignedByte(),
                                t.GSP = n.readUnsignedByte(),
                                t.GHP = n.readUnsignedByte(),
                                t.skills = [],
                                r = n.readUnsignedShort();
                            for (var o = 0; o < r; ++o)
                                (a = new d).id = n.readUnsignedShort(),
                                    a.PP = n.readUnsignedByte(),
                                    a.inherited = n.readUnsignedByte(),
                                    e.addStaticSkillData(a),
                                    t.skills.push(a);
                            var g = n.readUnsignedByte();
                            return t.skinID = 0 != g ? 1e5 + 10 * t.id + g - 1 : 0,
                                n.readUnsignedByte(),
                                n.readUnsignedByte(),
                                n.readUnsignedByte(),
                                n.readUnsignedByte(),
                                n.readUnsignedByte(),
                                n.readUnsignedByte(),
                                n.readUnsignedByte(),
                                e.addStaticSpiritData(t),
                                t
                        }
                        ,
                        e.addStaticSpiritData = function(n) {
                            if (null != e._spiritProxy) {
                                var t = e._spiritProxy.select(n.id);
                                n.name = t.name,
                                    n.description = t.description,
                                    n.features = t.features,
                                    n.groups = t.group,
                                    n.height = t.height,
                                    n.weight = t.weight,
                                    n.color = t.color,
                                    n.interest = t.interest,
                                    n.evolution = t.evolution,
                                    n.skinnum = t.skinnum
                            }
                        }
                        ,
                        e.addStaticSkillData = function(n) {
                            if (null != e._skillProxy) {
                                var t = e._skillProxy.select(n.id);
                                n.name = t.name,
                                    n.description = t.description,
                                    n.power = t.power,
                                    n.PPMax = t.ppMax,
                                    n.property = t.property
                            }
                        }
                        ,
                        e.getNextLvMaxExp = function(n, t) {
                            if (t >= 100)
                                return 0;
                            for (var r, i = e._spiritProxy.select(n), a = 0; a < e.EXPTYPE_INDEX.length; a++)
                                if (i.expType == e.EXPTYPE_INDEX[a]) {
                                    r = a;
                                    break
                                }
                            return e.EXPDATA[t - 1][r]
                        }
                        ,
                        e.getExpType = function(n) {
                            return e._spiritProxy.select(n).expType
                        }
                        ,
                        e.getLvMaxSumExp = function(n, t) {
                            if (t > 100)
                                return 0;
                            for (var r, i = e._spiritProxy.select(n), a = 0; a < e.EXPTYPE_INDEX.length; a++)
                                if (i.expType == e.EXPTYPE_INDEX[a]) {
                                    r = a;
                                    break
                                }
                            for (var d = 1, s = 1; s < t; s++)
                                d += e.EXPDATA[s - 1][r];
                            return d
                        }
                        ,
                        e.getSpeed = function(n) {
                            e._skillProxy || e.init();
                            var t = e._skillProxy.select(n);
                            return t ? t.speed : (a.IS_LOCAL,
                                0)
                        }
                        ,
                        e.getDamageType = function(n) {
                            e._skillProxy || e.init();
                            var t = e._skillProxy.select(n);
                            return t ? t.damageType : (a.IS_LOCAL,
                                0)
                        }
                        ,
                        e
                }());
                s._spiritProxy = void 0,
                    s._skillProxy = void 0,
                    s.EXPTYPE_INDEX = [60, 80, 100, 105, 125, 164],
                    s.EXPDATA = [[13, 13, 13, 13, 13, 13], [56, 56, 56, 56, 56, 56], [86, 86, 86, 86, 86, 86], [171, 171, 171, 171, 171, 171], [216, 216, 216, 216, 216, 216], [344, 344, 344, 344, 344, 344], [404, 404, 404, 404, 404, 404], [575, 575, 575, 575, 575, 575], [650, 650, 650, 650, 650, 650], [864, 864, 864, 864, 864, 864], [954, 954, 954, 954, 954, 954], [1211, 1211, 1211, 1211, 1211, 1211], [1316, 1316, 1316, 1316, 1316, 1316], [1616, 1616, 1616, 1616, 1616, 1616], [1736, 1736, 1736, 1736, 1736, 1736], [2079, 2079, 2079, 2079, 2079, 2079], [3006, 3006, 3006, 3006, 3006, 3006], [3530, 3530, 3530, 3530, 3530, 3530], [3730, 3730, 3730, 3730, 3730, 3730], [4323, 4323, 4323, 4323, 4323, 4323], [5356, 5768, 6180, 6592, 7004, 9476], [6048, 6480, 6912, 7344, 8208, 10800], [6780, 7232, 7684, 8588, 9040, 12204], [7536, 8007, 8949, 9420, 10362, 13659], [8347, 9329, 9820, 10802, 11293, 15221], [9198, 10220, 10731, 11753, 12775, 16863], [10070, 11130, 12190, 12720, 13780, 18550], [11e3, 12100, 13200, 14300, 15400, 20350], [11970, 13110, 14250, 15390, 16530, 22230], [13547, 14725, 15903, 17081, 18259, 24149], [14616, 15834, 17052, 18270, 19488, 26187], [15725, 16983, 18241, 19499, 21386, 28305], [19162, 20636, 22110, 24321, 25795, 34639], [20520, 22040, 24320, 25840, 28120, 37240], [21896, 24242, 25806, 28152, 29716, 39882], [23316, 25728, 27336, 29748, 32160, 42612], [24810, 27291, 29772, 31426, 33907, 45485], [26319, 28866, 31413, 33960, 36507, 48393], [27904, 30520, 33136, 35752, 38368, 51448], [30396, 33078, 35760, 38442, 41124, 54534], [32060, 34808, 37556, 40304, 43052, 57708], [33804, 36621, 39438, 42255, 46011, 61035], [35557, 38440, 41323, 45167, 48050, 64387], [37354, 40303, 44235, 47184, 51116, 67827], [39234, 43258, 46276, 50300, 53318, 71426], [41120, 45232, 48316, 52428, 56540, 75044], [43050, 47250, 51450, 54600, 58800, 78750], [45066, 49358, 53650, 57942, 62234, 82621], [47085, 51465, 55845, 60225, 64605, 86505], [50310, 54782, 59254, 63726, 68198, 90558], [52440, 57e3, 61560, 66120, 70680, 94620], [54614, 59262, 63910, 68558, 74368, 98770], [56880, 61620, 66360, 72285, 77025, 103095], [59143, 63971, 70006, 74834, 80869, 107423], [61450, 67595, 72511, 78656, 83572, 111839], [63852, 70112, 75120, 81380, 87640, 116436], [66248, 72618, 78988, 84084, 90454, 121030], [68688, 75168, 81648, 88128, 94608, 125712], [71226, 77821, 84416, 91011, 97606, 130581], [75096, 81801, 88506, 95211, 101916, 135441], [77691, 84506, 91321, 98136, 104951, 140389], [80388, 87318, 94248, 101178, 109494, 145530], [83072, 90112, 97152, 105600, 112640, 150656], [85860, 93015, 101601, 108756, 117342, 155979], [88633, 97351, 104616, 113334, 120599, 161283], [91450, 100300, 107675, 116525, 125375, 166675], [94374, 103362, 112350, 119840, 128828, 172270], [97280, 106400, 115520, 124640, 133760, 177840], [100230, 109482, 118734, 127986, 137238, 183498], [104855, 114245, 123635, 133025, 142415, 189365], [107916, 117438, 126960, 136482, 146004, 195201], [111021, 120675, 130329, 139983, 151246, 201125], [114240, 124032, 133824, 145248, 155040, 207264], [117434, 127358, 138936, 148860, 160438, 213366], [120744, 132483, 142545, 154284, 164346, 219687], [124027, 135920, 146114, 158007, 169900, 225967], [127354, 139401, 151448, 161774, 173821, 232335], [130800, 143008, 155216, 167424, 179632, 238928], [134216, 146578, 158940, 171302, 183664, 245474], [139464, 151980, 164496, 177012, 189528, 252108], [143069, 155746, 168423, 181100, 193777, 258973], [146640, 159471, 172302, 185133, 199797, 265785], [150255, 163240, 176225, 191065, 204050, 272685], [153996, 167142, 182166, 195312, 210336, 279822], [157700, 172900, 186200, 201400, 214700, 286900], [161448, 176824, 190278, 205654, 221030, 294066], [165325, 180885, 196445, 210060, 225620, 301475], [169162, 184898, 200634, 216370, 232106, 308819], [173130, 189050, 204970, 220890, 236810, 316410], [179068, 195164, 211260, 227356, 243452, 323932], [183060, 199332, 215604, 231876, 248148, 331542], [187187, 203643, 220099, 236555, 255068, 339405], [191268, 207900, 224532, 243243, 259875, 347193], [195393, 212201, 231110, 247918, 266827, 355069], [199656, 218772, 235764, 254880, 271872, 363204], [203870, 223184, 240352, 259666, 278980, 371258], [208128, 227640, 247152, 264496, 284008, 379400], [212527, 232246, 251965, 271684, 291403, 387807], [216874, 236791, 256708, 276625, 296542, 396127]],
                    n._RF.pop()
            }
        }
    }
));
