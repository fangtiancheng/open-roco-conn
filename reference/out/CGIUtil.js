System.register("chunks:///_virtual/CGIUtil.ts", ["cc", "./DEFINE.ts", "./global.ts", "./CGIEvent.ts", "./CGILoader.ts"], (function(i) {
        var t, e, n, a, c;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
                , function(i) {
                    e = i.DEFINE
                }
                , function(i) {
                    n = i.__global
                }
                , function(i) {
                    a = i.CGIEvent
                }
                , function(i) {
                    c = i.CGILoader
                }
            ],
            execute: function() {
                t._RF.push({}, "3c478+uQzpJSq1beuxOA7I4", "CGIUtil", void 0);
                i("CGIUtil", function() {
                    function i() {
                        this._cgiLoader = void 0,
                            this.cgiCallbackFun = void 0,
                            this._cgiLoader = new c(e.CGI_ROOT,n.SysAPI.getNetSysAPI().createURLLoader(!0)),
                            this._cgiLoader.addEventListener(a.COMPLETE, this.cgiCallback, this),
                            this._cgiLoader.addEventListener(a.GOT_ERROR, this.cgiCallback, this)
                    }
                    var t = i.prototype;
                    return t.cgiSendData = function(i, t, e) {
                        void 0 === t && (t = null),
                        void 0 === e && (e = !0),
                            this.setWaiting(e),
                            this._cgiLoader.sendData(i, t)
                    }
                        ,
                        t.cgiCallback = function(i) {
                            this.setWaiting(!1),
                            i.type != a.GOT_ERROR && null != this.cgiCallbackFun && this.cgiCallbackFun(i)
                        }
                        ,
                        t.dispose = function() {
                            null != this._cgiLoader && (this._cgiLoader.removeEventListener(a.COMPLETE, this.cgiCallback, this),
                                this._cgiLoader.removeEventListener(a.GOT_ERROR, this.cgiCallback, this),
                                this._cgiLoader = null)
                        }
                        ,
                        t.setWaiting = function(i) {
                            var t = n.SysAPI.getUISysAPI().commUIManager;
                            i ? t.createMiniLoading() : t.closeMiniLoading()
                        }
                        ,
                        t.alert = function(i) {
                            n.SysAPI.getUISysAPI().commUIManager.alert("", i)
                        }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
