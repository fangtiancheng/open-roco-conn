System.register("chunks:///_virtual/GetItemsByTypeP.ts", ["cc", "./GlobalAPI.ts", "./Constants.ts", "./UserItem.ts", "./ADFCmdsType.ts", "./ProtocolHelper.ts"], (function(t) {
        var e, n, o, r, a, i;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.GlobalAPI
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    r = t.UserItem
                }
                , function(t) {
                    a = t.ADFCmdsType
                }
                , function(t) {
                    i = t.ProtocolHelper
                }
            ],
            execute: function() {
                e._RF.push({}, "30f75C+NPFF3rZduaHYW/aK", "GetItemsByTypeP", void 0),
                    t("GetItemsByTypeP", function() {
                        function t() {}
                        var e = t.prototype;
                        return e.getItemDataProxy = function() {
                            t.itemDataProxy = n.gAngelSysAPI.getGDataAPI().getDataProxy(o.ITEM_DATA)
                        }
                            ,
                            e.decode = function(e) {
                                t.itemDataProxy || this.getItemDataProxy();
                                var n = e.body
                                    , o = i.ReadCode(n);
                                if (o.isError())
                                    return o;
                                for (var a = n.readUnsignedShort(), s = [], u = 0; u < a; u++) {
                                    var c = new r
                                        , y = c.id = n.readUnsignedInt();
                                    c.count = n.readUnsignedShort(),
                                    null != t.itemDataProxy && (c.itemDes = t.itemDataProxy.select(y)),
                                        s.push(c)
                                }
                                return s
                            }
                            ,
                            e.encode = function(t, e) {
                                void 0 === e && (e = -1);
                                var n = i.CreateADF(e);
                                return n.body = t,
                                    n
                            }
                            ,
                            e.getADFType = function() {
                                return a.T_GETITEMSBYTYPE
                            }
                            ,
                            t
                    }()).itemDataProxy = void 0,
                    e._RF.pop()
            }
        }
    }
));
