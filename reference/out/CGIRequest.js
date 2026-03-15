System.register("chunks:///_virtual/CGIRequest.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./URLLoaderEvent.ts", "./EventDispatcher.ts", "./URLRequest.ts", "./Xml2Json.ts"], (function(t) {
        var e, i, n, o, s, r, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.Event
                }
                , function(t) {
                    o = t.URLLoaderEvent
                }
                , function(t) {
                    s = t.EventDispatcher
                }
                , function(t) {
                    r = t.URLRequest
                }
                , function(t) {
                    a = t.Xml2Json
                }
            ],
            execute: function() {
                i._RF.push({}, "f46777ijptFza9Y2wNyPjCm", "CGIRequest", void 0);
                var d = t("CGIRequest", function(t) {
                    function i(e) {
                        var i;
                        return (i = t.call(this) || this)._loader = void 0,
                            i.data = void 0,
                            i.isLoading = void 0,
                            i
                    }
                    e(i, t);
                    var s = i.prototype;
                    return s.onError = function(t) {}
                        ,
                        s.initialize = function(t) {
                            this._loader = t,
                                this._loader.addEventListener(o.COMPLETE, this.onComplete, this),
                                this._loader.addEventListener(o.ERROR, this.onError, this)
                        }
                        ,
                        s.dispose = function() {
                            try {
                                this._loader.close()
                            } catch (t) {}
                            this._loader.removeEventListener(o.COMPLETE, this.onComplete, this),
                                this._loader.removeEventListener(o.ERROR, this.onError, this)
                        }
                        ,
                        s.onComplete = function(t) {
                            this.isLoading = !1,
                                this.dispatchEvent(new n(i.STOP));
                            var e = a.getJson(this._loader.data);
                            this.data = e,
                                this.onDataArrived(this.data)
                        }
                        ,
                        s.onDataArrived = function(t) {}
                        ,
                        s.load = function(t) {
                            if (null == this._loader)
                                throw new Error("CGIRequest need to initialize!");
                            this.isLoading = !0,
                                this.dispatchEvent(new n(i.START)),
                                this._loader.load(new r(t))
                        }
                        ,
                        i
                }(s));
                d.START = "start",
                    d.STOP = "stop",
                    d.FINISH = "finish",
                    i._RF.pop()
            }
        }
    }
));
