System.register("chunks:///_virtual/AngelExternalManger.ts", ["cc", "./CallbackCenter.ts", "./DEFINE.ts", "./AngelSysEvent.ts"], (function(n) {
        var t, e, i, o;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
                , function(n) {
                    e = n.CallbackCenter
                }
                , function(n) {
                    i = n.DEFINE
                }
                , function(n) {
                    o = n.AngelSysEvent
                }
            ],
            execute: function() {
                t._RF.push({}, "26be3n0JChDLKYyOxCq0MkI", "AngelExternalManger", void 0);
                n("AngelExternalManger", function() {
                    function n(n) {
                        this.myRoot = void 0,
                            this.defaultRate = 0,
                            this.openAsWinParam = void 0,
                            this.asWinsCache = void 0,
                            this.angelSysApi = void 0,
                            this.winResInfo = void 0,
                            this.gcDelayID = 0,
                            this.commUI = void 0,
                            this.hostKey = "",
                            this.clientKey = "",
                            this.m_recent = void 0
                    }
                    var t = n.prototype;
                    return t.keyDownHandler = function(n) {}
                        ,
                        t.onWCClosing = function(n) {}
                        ,
                        t.onWCLoaded = function(n, t) {}
                        ,
                        t.setAngelSysAPI = function(n) {
                            this.angelSysApi = n,
                                this.angelSysApi.getGEventAPI().addCmdListener(o.ON_OPEN_ASWIN, this)
                        }
                        ,
                        n.onApplyOpenAsWinString = function(n, t, i, o) {
                            return e.EVENT_OK
                        }
                        ,
                        n.onApplyOpenAsWinDes = function(n, t, i, o) {
                            return e.EVENT_OK
                        }
                        ,
                        t.call = function(n) {}
                        ,
                        t.openASWindow = function(n, t, e, i, o, r, s, c, u) {
                            return this.m_recent
                        }
                        ,
                        t._openASWindow = function(n, t, e, i, o, r, s, c, u) {
                            return !1
                        }
                        ,
                        t.openHTMLWindow = function(n, t) {
                            return null
                        }
                        ,
                        t.openHTMLJSWindow = function(n, t) {
                            return null
                        }
                        ,
                        t.mapAbsPath = function(n) {
                            return i.COMM_ROOT + "apps/" + n
                        }
                        ,
                        t.getHTMLVars = function() {
                            return null
                        }
                        ,
                        t.getFlashVar = function(n) {
                            return null
                        }
                        ,
                        t.reflashHTML = function() {
                            window.location.href = window.location.href
                        }
                        ,
                        t.setFrameRate = function(n) {}
                        ,
                        t.ccGC = function(n) {}
                        ,
                        t.gcNow = function() {}
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
