System.register("chunks:///_virtual/ProcessControll.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./ProcessEvent.ts", "./SuccessorEvent.ts"], (function(t) {
        var r, n, s, e, i;
        return {
            setters: [function(t) {
                r = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.EventDispatcher
                }
                , function(t) {
                    e = t.ProcessEvent
                }
                , function(t) {
                    i = t.SuccessorEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "abd22Wa1WdA1ZeS3ewzNush", "ProcessControll", void 0);
                t("ProcessControll", function(t) {
                    function n(r) {
                        var n;
                        return (n = t.call(this) || this)._list = [],
                            n._currentScript = void 0,
                            n
                    }
                    r(n, t);
                    var s = n.prototype;
                    return s.addTask = function(t) {
                        this._list.push(t)
                    }
                        ,
                        s.clear = function() {
                            this._currentScript.removeEventListener(i.PROCESS_EVENT, this.onProcess, this),
                                this._currentScript = null,
                                this._list.length = 0
                        }
                        ,
                        s.instanceofIScript = function(t) {
                            return !!t && void 0 !== t.IScriptJudge
                        }
                        ,
                        s.addScripts = function(t) {
                            for (var r = 0; r < t.length; r++)
                                if (0 == this.instanceofIScript(t[r]))
                                    return console.error("addScripts失败==" + t),
                                        !1;
                            for (r = 0; r < t.length; r++)
                                console.info("addScripts111==" + t);
                            return this._list = t,
                                !0
                        }
                        ,
                        s.work = function() {
                            0 != this._list.length && this.step()
                        }
                        ,
                        s.step = function() {
                            this._currentScript = this.getScript(),
                                this._currentScript ? (this._currentScript.addEventListener(i.PROCESS_EVENT, this.onProcess, this),
                                    this._currentScript.execute()) : (CONFIG.DEBUG,
                                    console.log("All List Done"),
                                    console.log("Script执行结束，派发事件"),
                                    this.dispatchEvent(new e(e.LIST_DONE)))
                        }
                        ,
                        s.getScript = function() {
                            for (var t; this._list.length > 0; )
                                if (null != (t = this._list.shift()))
                                    return t;
                            return null
                        }
                        ,
                        s.onProcess = function(t) {
                            this._currentScript && this._currentScript.removeEventListener(i.PROCESS_EVENT, this.onProcess, this),
                                this.dispatchEvent(new e(e.TASK_DONE,this._currentScript)),
                                this.step()
                        }
                        ,
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
