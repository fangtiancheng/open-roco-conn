System.register("chunks:///_virtual/UseItemProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./P_Char.ts", "./P_Int.ts", "./P_Short.ts", "./P_Struct.ts", "./ProtocolHelper.ts", "./UserItemData.ts", "./SpiritDataReader.ts"], (function(e) {
        var t, n, r, _, S, i, o, s, O, E, D;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.EventDispatcher
                }
                , function(e) {
                    _ = e.ADFCmdsType
                }
                , function(e) {
                    S = e.P_Char
                }
                , function(e) {
                    i = e.P_Int
                }
                , function(e) {
                    o = e.P_Short
                }
                , function(e) {
                    s = e.P_Struct
                }
                , function(e) {
                    O = e.ProtocolHelper
                }
                , function(e) {
                    E = e.UserItemData
                }
                , function(e) {
                    D = e.SpiritDataReader
                }
            ],
            execute: function() {
                n._RF.push({}, "339acKTYHtAa4kbK2SAha79", "UseItemProcessor", void 0);
                var c = e("UseItemProcessor", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.decode = function(e) {
                        var t, r, _, S = e.body, i = O.ReadCode(S);
                        if (i.isError())
                            return i.code == n.DISPLAY_SYS_MESSAGE ? null != i.message ? i.message : "未知错误" : i.code == n.OUTSIDE_USE_GOODS_FIGHTING ? "战斗中不能使用战斗外协议" : i.code == n.OUTSIDE_USE_GOODS_LOADERR ? "加载数据出错" : i.code == n.OUTSIDE_USE_GOODS_GOODS_NOT_ENOUGH ? "物品数目不足" : i.code == n.OUTSIDE_USE_GOODS_MONEY_NOT_ENOUGH ? "洛克贝数目不足" : i.code == n.OUTSIDE_USE_GOODS_BAD_REQUEST ? "请求参数错误" : i.code == n.OUTSIDE_USE_GOODS_SYS_ERR ? "系统错误" : "未知错误";
                        (t = new E).spiritID = S.readUnsignedInt(),
                            t.spiritIndex = S.readUnsignedByte(),
                            t.itemType = S.readUnsignedByte(),
                            t.itemID = S.readUnsignedInt(),
                            t.itemLeft = S.readUnsignedInt(),
                            t.spirits = [],
                            r = S.readUnsignedShort();
                        for (var o = 0; o < r; ++o)
                            (_ = D.read(S)).index = o,
                            null != _ && t.spirits.push(_);
                        return t
                    }
                        ,
                        r.encode = function(e, t) {
                            void 0 === t && (t = -1);
                            var n = O.CreateADF(t)
                                , r = new s;
                            return r.fill([new i(e.spiritID), new S(e.spiritIndex), new S(e.itemType), new i(e.itemID), new o(e.num)]),
                                n.body = r,
                                n
                        }
                        ,
                        r.getADFType = function() {
                            return _.T_SPIRIT_USE_ITEM
                        }
                        ,
                        n
                }(r));
                c.DISPLAY_SYS_MESSAGE = -1,
                    c.OUTSIDE_USE_GOODS_FIGHTING = 1,
                    c.OUTSIDE_USE_GOODS_LOADERR = 2,
                    c.OUTSIDE_USE_GOODS_GOODS_NOT_ENOUGH = 3,
                    c.OUTSIDE_USE_GOODS_MONEY_NOT_ENOUGH = 4,
                    c.OUTSIDE_USE_GOODS_BAD_REQUEST = 5,
                    c.OUTSIDE_USE_GOODS_SYS_ERR = 127,
                    n._RF.pop()
            }
        }
    }
));
