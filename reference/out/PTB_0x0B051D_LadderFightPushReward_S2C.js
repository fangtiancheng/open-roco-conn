System.register("chunks:///_virtual/PTB_0x0B051D_LadderFightPushReward_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./ItemInfo2.ts"], (function(e) {
        var t, i, r, s, n, a, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    r = e.BaseMessage
                }
                , function(e) {
                    s = e.WriteUtils
                }
                , function(e) {
                    n = e.ReadUtils
                }
                , function(e) {
                    a = e.WireType
                }
                , function(e) {
                    o = e.ItemInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "327572N2ZdPg5d38k9xfKoe", "PTB_0x0B051D_LadderFightPushReward_S2C", void 0);
                e("PTB_0x0B051D_LadderFightPushReward_S2C", function(e) {
                    function i() {
                        for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)) || this).items = [],
                            t
                    }
                    t(i, e);
                    var r = i.prototype;
                    return r.writeToBuffer = function(e) {
                        for (var t = 0; t < this.items.length; ++t)
                            s.writeTag(e, a.LENGTH_DELIMITED, 1),
                                s.writeTYPE_MESSAGE(e, this.items[t])
                    }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (; e.bytesAvailable > t; ) {
                                var i = n.readTYPE_UINT32(e);
                                switch (i >>> 3) {
                                    case 1:
                                        var r = new o;
                                        n.readTYPE_MESSAGE(e, r),
                                            this.items.push(r);
                                        break;
                                    default:
                                        n.skip(e, 7 & i)
                                }
                            }
                        }
                        ,
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
