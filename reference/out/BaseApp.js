System.register("chunks:///_virtual/BaseApp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./NodeExtend.ts"], (function(n) {
        var t, i, e, o;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    i = n.cclegacy
                }
                , function(n) {
                    e = n.__global
                }
                , function(n) {
                    o = n.NodeExtend
                }
            ],
            execute: function() {
                i._RF.push({}, "6d5bdf6bUNJFIaiNE8vZUxn", "BaseApp", void 0);
                n("BaseAPP", function(n) {
                    function i() {
                        var t;
                        return (t = n.call(this) || this).m_handle = void 0,
                            t.m_param = void 0,
                            t.m_scriptParam = void 0,
                            t.m_sysAPI = void 0,
                            t
                    }
                    t(i, n);
                    var o = i.prototype;
                    return o.getDisplay = function() {
                        return null
                    }
                        ,
                        o.getBGRect = function() {
                            return null
                        }
                        ,
                        o.getCloseBtnPos = function() {
                            return null
                        }
                        ,
                        o.close = function() {
                            null != this.m_handle && this.m_handle()
                        }
                        ,
                        o.addCloseHandler = function(n) {
                            this.m_handle = n
                        }
                        ,
                        o.getDragArea = function() {
                            return null
                        }
                        ,
                        o.dispose = function() {}
                        ,
                        o.setParams = function(n) {
                            this.m_param = n,
                                this.onParams()
                        }
                        ,
                        o.onParams = function() {}
                        ,
                        o.setScriptParams = function(n) {
                            this.m_scriptParam = n,
                                this.onScriptParams()
                        }
                        ,
                        o.onScriptParams = function() {}
                        ,
                        o.setup = function() {}
                        ,
                        o.activate = function() {}
                        ,
                        o.inactivate = function() {}
                        ,
                        o.setAngelSysAPI = function(n) {
                            this.m_sysAPI = n,
                                this.initialize()
                        }
                        ,
                        o.initialize = function() {}
                        ,
                        o.getLoader = function() {
                            return e.SysAPI.getNetSysAPI().createURLLoader(!0)
                        }
                        ,
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
