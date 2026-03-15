System.register("chunks:///_virtual/QueueConfsLoading.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts", "./DEFINE.ts", "./URLLoaderEvent.ts", "./EventDispatcher.ts", "./URLLoader.ts", "./URLRequest.ts", "./IOErrorEvent.ts"], (function(t) {
        var e, n, r, s, i, o, u, a, c, d;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    s = t.ByteArray
                }
                , function(t) {
                    i = t.DEFINE
                }
                , function(t) {
                    o = t.URLLoaderEvent
                }
                , function(t) {
                    u = t.EventDispatcher
                }
                , function(t) {
                    a = t.URLLoader
                }
                , function(t) {
                    c = t.URLRequest
                }
                , function(t) {
                    d = t.IOErrorEvent
                }
            ],
            execute: function() {
                r._RF.push({}, "8b72fUqaE5E94ye41DMnIdS", "QueueConfsLoading", void 0);
                t("QueueConfsLoading", function(t) {
                    function r() {
                        var e;
                        return (e = t.call(this) || this).urlLoader = void 0,
                            e.queues = void 0,
                            e.curr = void 0,
                            e.callBack = void 0,
                            e.confs = void 0,
                            e.queues = [],
                            e.confs = {},
                            e.urlLoader = new a,
                            e.urlLoader.addEventListener(o.COMPLETE, e.onConfStatesHandler, n(e)),
                            e.urlLoader.addEventListener(d.IO_ERROR, e.onConfStatesHandler, n(e)),
                            e
                    }
                    e(r, t);
                    var u = r.prototype;
                    return u.onConfStatesHandler = function(t) {
                        if (t.type != o.COMPLETE)
                            throw new Error(this.curr.id + "," + this.curr.src + "加载配制文件错误!");
                        if (CONFIG.DEBUG && console.log("[QueueConfs]" + this.curr.id + (this.curr.compress ? " 为压缩配置文件" : " 为非压缩配置文件")),
                            !this.curr.compress) {
                            var e = String(this.urlLoader.data);
                            return this.confs[this.curr.id] = e,
                                void this.nextLoading()
                        }
                        var n = this.urlLoader.data
                            , r = (n.readByte(),
                            n.readUnsignedInt())
                            , i = n.readShort();
                        if (r == n.bytesAvailable) {
                            var u, a = new s;
                            n.readBytes(a),
                                a.uncompress();
                            for (var c = 0; c < i; c++)
                                u = a.readObject(),
                                CONFIG.DEBUG && console.log("[QueueConfs]从" + this.curr.id + "解压出配置文件 " + String(u.name)),
                                    e = u.toXMLString(),
                                    this.confs[String(u.name)] = e;
                            this.nextLoading()
                        } else
                            CONFIG.DEBUG && console.log("[QueueConfs]长度验证失败再次加载,请重新运行")
                    }
                        ,
                        u.nextLoading = function() {
                            if (0 == this.queues.length)
                                return null != this.callBack && this.callBack.call(this.confs),
                                    void (this.callBack = null);
                            this.curr = this.queues.pop(),
                                this.urlLoader.load(new c(i.formatFileVersion(this.curr.src)))
                        }
                        ,
                        u.addConf = function(t, e, n) {
                            this.queues.push(new l(t,e,n))
                        }
                        ,
                        u.start = function(t) {
                            0 != this.queues.length && (this.callBack = t,
                                this.nextLoading())
                        }
                        ,
                        u.reset = function() {
                            this.queues = [],
                                this.confs = {},
                                this.curr = null
                        }
                        ,
                        r
                }(u));
                var l = function(t, e, n) {
                    this.id = void 0,
                        this.src = void 0,
                        this.compress = void 0,
                        this.id = t,
                        this.src = e,
                        this.compress = n
                };
                r._RF.pop()
            }
        }
    }
));
