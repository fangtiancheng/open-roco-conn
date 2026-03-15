System.register("chunks:///_virtual/RetInfoBase2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts"], (function(e) {
        var t, r, i, n, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    o = e.WriteUtils
                }
            ],
            execute: function() {
                i._RF.push({}, "47cecbKEplCr79jzizcNkkt", "RetInfoBase", void 0);
                e("RetInfoBase", function(e) {
                    function i() {
                        for (var t, r = arguments.length, i = new Array(r), n = 0; n < r; n++)
                            i[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(i)) || this).ret_codefield = 0,
                            t.hasField0 = 0,
                            t.ret_msgfield = void 0,
                            t
                    }
                    t(i, e);
                    var n = i.prototype;
                    return n.removeRetCode = function() {
                        this.hasField0 &= 4294967294,
                            this.ret_codefield = 0
                    }
                        ,
                        n.removeRetMsg = function() {
                            this.ret_msgfield = null
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            throw new Error("[RetInfoBase] 'public override writeToBuffer(output: WritingBuffer): void' method needs to be overriden.")
                        }
                        ,
                        n.readFromSlice = function(e, t) {
                            throw new Error("[RetInfoBase] 'public override readFromSlice(input: IDataInput, bytesAfterSlice: number): void' method needs to be overriden.")
                        }
                        ,
                        r(i, [{
                            key: "hasRetCode",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "retCode",
                            get: function() {
                                return this.hasRetCode ? this.ret_codefield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.ret_codefield = e
                            }
                        }, {
                            key: "hasRetMsg",
                            get: function() {
                                return null != this.ret_msgfield
                            }
                        }, {
                            key: "retMsg",
                            get: function() {
                                return this.hasRetMsg ? this.ret_msgfield : o.stringToByteArray("")
                            },
                            set: function(e) {
                                this.ret_msgfield = e
                            }
                        }]),
                        i
                }(n));
                i._RF.pop()
            }
        }
    }
));
