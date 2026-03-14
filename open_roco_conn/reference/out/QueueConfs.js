System.register("chunks:///_virtual/QueueConfs.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./amfType.ts", "./ByteArray.ts", "./BuildLogHelper.ts", "./URLLoaderEvent.ts", "./EventDispatcher.ts", "./URLLoader.ts", "./URLRequest.ts", "./IOErrorEvent.ts"], (function(e) {
        var r, t, s, n, o, i, u, a, c, d, l;
        return {
            setters: [function(e) {
                r = e.inheritsLoose,
                    t = e.assertThisInitialized
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    n = e.AmfXml
                }
                , function(e) {
                    o = e.ByteArray
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    u = e.URLLoaderEvent
                }
                , function(e) {
                    a = e.EventDispatcher
                }
                , function(e) {
                    c = e.URLLoader
                }
                , function(e) {
                    d = e.URLRequest
                }
                , function(e) {
                    l = e.IOErrorEvent
                }
            ],
            execute: function() {
                s._RF.push({}, "86480yCkKtCErxLGeMgsrRY", "QueueConfs", void 0);
                e("QueueConfs", function(e) {
                    function s() {
                        var r;
                        return (r = e.call(this) || this).urlLoader = void 0,
                            r.queues = void 0,
                            r.curr = void 0,
                            r.successHandler = void 0,
                            r.errorHandler = void 0,
                            r.confs = void 0,
                            r.queues = [],
                            r.confs = {},
                            r.urlLoader = new c,
                            r.urlLoader.addEventListener(u.COMPLETE, r.onConfStatesHandler, t(r)),
                            r.urlLoader.addEventListener(l.IO_ERROR, r.onConfStatesHandler, t(r)),
                            r
                    }
                    r(s, e);
                    var a = s.prototype;
                    return a.onConfStatesHandler = function(e) {
                        if (e.type == u.COMPLETE) {
                            var r = this.urlLoader.data
                                , t = new o(this.urlLoader.data);
                            new Uint8Array(this.urlLoader.data);
                            if (this.curr.compress) {
                                t.readByte();
                                var s = t.readUnsignedInt()
                                    , a = t.readShort();
                                if (s != t.bytesAvailable) {
                                    if (i.IS_LOCAL,
                                    1 == i.IS_LOCAL)
                                        throw new Error("QueueConfs [onConfStatesHandler]'s param is error");
                                    return
                                }
                                var c = new o(t.length);
                                t.readBytes(c),
                                    c.uncompress();
                                for (var d = 0; d < a; d++) {
                                    (r = c.readObject())instanceof n && (this.confs[r.name] = r)
                                }
                            } else if (i.IS_LOCAL,
                            1 == i.IS_LOCAL)
                                throw new Error("QueueConfs [onConfStatesHandler]'s param is error");
                            return console.log("[QueueConfs]", this.curr.id, "加载完毕"),
                                void this.nextLoading()
                        }
                        null != this.errorHandler && this.errorHandler(this.curr.id + "," + this.curr.src + "加载配制文件错误!")
                    }
                        ,
                        a.nextLoading = function() {
                            if (0 == this.queues.length)
                                return null != this.successHandler && this.successHandler(this.confs),
                                    void (this.successHandler = null);
                            this.curr = this.queues.pop(),
                                this.urlLoader.loadByArrayBuffer(new d(this.curr.src))
                        }
                        ,
                        a.addConf = function(e, r, t) {
                            this.queues.push(new f(e,r,t))
                        }
                        ,
                        a.start = function(e, r) {
                            0 != this.queues.length && (this.successHandler = e,
                                this.errorHandler = r,
                                this.nextLoading())
                        }
                        ,
                        a.reset = function() {
                            this.queues = [],
                                this.confs = {},
                                this.curr = null
                        }
                        ,
                        s
                }(a));
                var f = function(e, r, t) {
                    this.id = void 0,
                        this.src = void 0,
                        this.compress = !1,
                        this.id = e,
                        this.src = r,
                        this.compress = t
                };
                s._RF.pop()
            }
        }
    }
));
