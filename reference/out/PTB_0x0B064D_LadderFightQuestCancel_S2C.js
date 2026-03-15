System.register("chunks:///_virtual/PTB_0x0B064D_LadderFightQuestCancel_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./RetInfo.ts", "./QuestInfo2.ts"], (function(e) {
        var t, n, i, r, s, o, a, f, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
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
                    o = e.ReadUtils
                }
                , function(e) {
                    a = e.WireType
                }
                , function(e) {
                    f = e.RetInfo
                }
                , function(e) {
                    u = e.QuestInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "6c3f6y3saFBAogY1qQuAfpR", "PTB_0x0B064D_LadderFightQuestCancel_S2C", void 0);
                e("PTB_0x0B064D_LadderFightQuestCancel_S2C", function(e) {
                    function i() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                            i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).ret_infofield = void 0,
                            t.dayQuest = [],
                            t
                    }
                    t(i, e);
                    var r = i.prototype;
                    return r.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasRetInfo && (s.writeTag(e, a.LENGTH_DELIMITED, 1),
                                s.writeTYPE_MESSAGE(e, this.ret_infofield));
                            for (var t = 0; t < this.dayQuest.length; ++t)
                                s.writeTag(e, a.LENGTH_DELIMITED, 2),
                                    s.writeTYPE_MESSAGE(e, this.dayQuest[t])
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var n = 0; e.bytesAvailable > t; ) {
                                var i = o.readTYPE_UINT32(e);
                                switch (i >>> 3) {
                                    case 1:
                                        if (0 != n)
                                            throw new Error("Bad data format: PTB_0x0B064D_LadderFightQuestCancel_S2C.retInfo cannot be set twice.");
                                        ++n,
                                            this.retInfo = new f,
                                            o.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        var r = new u;
                                        o.readTYPE_MESSAGE(e, r),
                                            this.dayQuest.push(r);
                                        break;
                                    default:
                                        o.skip(e, 7 & i)
                                }
                            }
                        }
                        ,
                        n(i, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_infofield
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_infofield
                            },
                            set: function(e) {
                                this.ret_infofield = e
                            }
                        }]),
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
