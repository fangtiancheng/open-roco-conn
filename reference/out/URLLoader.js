System.register("chunks:///_virtual/URLLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigManager.ts", "./HttpRequest.ts", "./URLLoaderEvent.ts", "./EventDispatcher.ts"], (function(t) {
        var n, e, a, i, s, o, r, c;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    a = t.cclegacy,
                        i = t.JsonAsset
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    o = t.HttpRequest
                }
                , function(t) {
                    r = t.URLLoaderEvent
                }
                , function(t) {
                    c = t.EventDispatcher
                }
            ],
            execute: function() {
                a._RF.push({}, "13a76gKckxAfoImsk8foVEg", "URLLoader", void 0);
                t("URLLoader", function(t) {
                    function a() {
                        var n;
                        return (n = t.call(this) || this)._onClosed = !1,
                            n.xhr = void 0,
                            n.onComplete = void 0,
                            n.onError = void 0,
                            n._data = void 0,
                            n
                    }
                    n(a, t);
                    var c = a.prototype;
                    return c.close = function() {
                        this._onClosed = !0
                    }
                        ,
                        c.load = function(t) {
                            o.Instance.getWithParamsByTxt(t.url, null, this._completeCallback.bind(this), this._errorCallback.bind(this))
                        }
                        ,
                        c.loadByArrayBuffer = function(t) {
                            o.Instance.getWithParamsByArraybuffer(t.url, null, this._completeCallback.bind(this), this._errorCallback.bind(this))
                        }
                        ,
                        c.loadByBundle = function(t) {
                            var n = s.Instance.getRes(t.url, i);
                            n ? (this.data = n,
                                this.dispatchEvent(new r(r.COMPLETE))) : (this.data = n,
                                this.dispatchEvent(new r(r.ERROR)))
                        }
                        ,
                        c._completeCallback = function(t) {
                            1 != this._onClosed && (this.data = t,
                                this.dispatchEvent(new r(r.COMPLETE)))
                        }
                        ,
                        c._errorCallback = function(t) {
                            1 != this._onClosed && (this.data = t,
                                this.dispatchEvent(new r(r.ERROR)))
                        }
                        ,
                        c.completeCallback = function(t) {
                            1 != this._onClosed && (this.data = t,
                                this.dispatchEvent(new r(r.COMPLETE)))
                        }
                        ,
                        e(a, [{
                            key: "data",
                            get: function() {
                                return this._data
                            },
                            set: function(t) {
                                this._data = t
                            }
                        }]),
                        a
                }(c));
                a._RF.pop()
            }
        }
    }
));
