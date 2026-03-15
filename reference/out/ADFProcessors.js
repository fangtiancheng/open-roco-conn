System.register("chunks:///_virtual/ADFProcessors.ts", ["cc", "./IMulDataProcessor.ts", "./ADFCmdsType.ts", "./P_FreeRequest2.ts", "./BuildLogHelper.ts"], (function(e) {
        var s, o, r, t, n;
        return {
            setters: [function(e) {
                s = e.cclegacy
            }
                , function(e) {
                    o = e.IMulDataProcessor
                }
                , function(e) {
                    r = e.ADFCmdsType
                }
                , function(e) {
                    t = e.P_FreeRequest2
                }
                , function(e) {
                    n = e.default
                }
            ],
            execute: function() {
                s._RF.push({}, "547683m1LdJgYmhyL0+0gLI", "ADFProcessors", void 0);
                e("ADFProcessors", function() {
                    function e() {
                        this.maps = void 0,
                            this.freeProcs = void 0,
                            this.maps = new Map,
                            this.freeProcs = new Map
                    }
                    var s = e.prototype;
                    return s.decode = function(e) {
                        var s = e.head.cmdID
                            , o = e.head.uiSerialNum;
                        1 == n.IS_LOCAL && console.log("当前协议序列号===========" + o);
                        var r = this.maps[s];
                        if (null == r || this.freeProcs[o]) {
                            var t;
                            if (0 != o && null != (t = this.freeProcs[o]))
                                delete this.freeProcs[o],
                                CONFIG.DEBUG && console.info("[ADFProcessors] 清除序列号:" + o);
                            else {
                                var i = s + "_";
                                null != (t = this.freeProcs[i]) && delete this.freeProcs[i]
                            }
                            return null != t ? t.decode(e) : (1 == n.IS_LOCAL && console.info("[NetSystem] 命令字为:0x" + s.toString(16) + "找不到解析的IDataProcessor!"),
                                null)
                        }
                        return r.decode(e)
                    }
                        ,
                        s.encode = function(e, s, o) {
                            void 0 === s && (s = -1),
                            void 0 === o && (o = 0);
                            var r = this.maps[s];
                            if (null == r || e instanceof t) {
                                var i = e;
                                return null != i ? (0 != o ? (i.serialNum = o,
                                    this.freeProcs[o] = i,
                                CONFIG.DEBUG && console.info("[ADFProcessors] 增加序列号:" + o)) : this.freeProcs[s + "_"] = i,
                                null != i && null != i.encode || n.IS_LOCAL,
                                    i.encode(s)) : (1 == n.IS_LOCAL && console.info("[NetSystem] 命令字为:0x" + s.toString(16) + "找不到打包的IDataProcessor!"),
                                    null)
                            }
                            var c = r.encode(e, s);
                            return c.head.uiSerialNum = o,
                                c
                        }
                        ,
                        s.getADFType = function() {
                            return -1
                        }
                        ,
                        s.add = function(e) {
                            var s = 0;
                            if (e instanceof o)
                                for (var r = e.getADFTypes(), t = 0; t < r.length; t++)
                                    s = r[t],
                                        this.addProc(s, e);
                            else
                                null != e && (s = e.getADFType(),
                                    this.addProc(s, e))
                        }
                        ,
                        s.addProc = function(e, s) {
                            if (-1 != r.ALL_FREE_TS.indexOf(e))
                                throw new Error("[ADFProcessors] 命令字:0x" + e.toString(16) + "是一个自由命令字不允许注册!");
                            this.maps[e] = s
                        }
                        ,
                        s.remove = function(e) {
                            if (e instanceof o)
                                for (var s = e.getADFTypes(), r = 0; r < s.length; r++)
                                    this.maps[s[r]] = null;
                            else
                                this.maps[e.getADFType()] = null
                        }
                        ,
                        s.dispose = function() {
                            this.maps = null
                        }
                        ,
                        e
                }());
                s._RF.pop()
            }
        }
    }
));
