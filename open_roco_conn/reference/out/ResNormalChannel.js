System.register("chunks:///_virtual/ResNormalChannel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./EventDispatcher.ts", "./URLRequest.ts", "./NewLoader.ts", "./LoadTaskEvent.ts", "./LoaderEvent.ts", "./ProgressEvent.ts", "./ResChannelState.ts", "./ResChannelType.ts", "./ResData.ts", "./ResLoadPriority.ts"], (function(t) {
        var s, e, a, r, n, i, o, l, h, u, c, _, k, d;
        return {
            setters: [function(t) {
                s = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    r = t.GlobalAPI
                }
                , function(t) {
                    n = t.EventDispatcher
                }
                , function(t) {
                    i = t.URLRequest
                }
                , function(t) {
                    o = t.NewLoader
                }
                , function(t) {
                    l = t.LoadTaskEvent
                }
                , function(t) {
                    h = t.LoaderEvent
                }
                , function(t) {
                    u = t.ProgressEvent
                }
                , function(t) {
                    c = t.ResChannelState
                }
                , function(t) {
                    _ = t.ResChannelType
                }
                , function(t) {
                    k = t.ResData
                }
                , function(t) {
                    d = t.ResLoadPriority
                }
            ],
            execute: function() {
                a._RF.push({}, "c3896N5z3RBo5zHRda4uN3e", "ResNormalChannel", void 0),
                    t("ResNormalChannel", function(t) {
                        function a(s) {
                            var e;
                            return void 0 === s && (s = null),
                                (e = t.call(this) || this)._manager = void 0,
                                e._loader = void 0,
                                e._tasks = void 0,
                                e._currentTask = void 0,
                                e._taskItemIdx = 0,
                                e._resData = void 0,
                                e._state = 0,
                                e._manager = s,
                                e._tasks = [],
                                e._currentTask = null,
                                e._taskItemIdx = 0,
                                e._resData = null,
                                e._state = c.READY,
                                e.registerLoader(),
                                e
                        }
                        s(a, t);
                        var n = a.prototype;
                        return n.addTask = function(t) {
                            if (null == t)
                                return -1;
                            if (t.priority == d.LOW)
                                this._tasks.push(t);
                            else if (t.priority == d.HIGH)
                                this._tasks.unshift(t);
                            else {
                                for (var s = this._tasks.length, e = this.calcTaskPriority(t), a = !1, r = s - 1; r >= 0; --r)
                                    if (this.calcTaskPriority(this._tasks[r]) >= e) {
                                        this._tasks.splice(r + 1, 0, t),
                                            a = !0;
                                        break
                                    }
                                a || this._tasks.unshift(t)
                            }
                            return t.taskID
                        }
                            ,
                            n.delTask = function(t) {
                                if (null == t)
                                    return !1;
                                if (t == this._currentTask)
                                    return this._state == c.RUNNING && this.cancelLoadingTask(),
                                        this._currentTask = null,
                                        this._taskItemIdx = 0,
                                        this._state = c.READY,
                                        this.start(),
                                        !0;
                                for (var s = this._tasks.length, e = !1, a = 0; a < s; ++a)
                                    if (this._tasks[a] == t) {
                                        this._tasks.splice(a, 1),
                                            e = !0;
                                        break
                                    }
                                return e
                            }
                            ,
                            n.isEmpty = function() {
                                return null == this._currentTask && 0 == this._tasks.length
                            }
                            ,
                            n.isReady = function() {
                                return null != this._currentTask && this._state == c.READY
                            }
                            ,
                            n.isRunning = function() {
                                return null != this._currentTask && this._state == c.RUNNING
                            }
                            ,
                            n.isPaused = function() {
                                return this._state == c.PAUSED
                            }
                            ,
                            n.start = function() {
                                switch (this._state) {
                                    case c.EMPTY:
                                    case c.RUNNING:
                                        break;
                                    case c.PAUSED:
                                        this.resume();
                                        break;
                                    case c.READY:
                                        this.loadTask()
                                }
                            }
                            ,
                            n.pause = function() {
                                this._state = c.PAUSED
                            }
                            ,
                            n.resume = function() {
                                this.isPaused() && this.loadTask()
                            }
                            ,
                            n.clear = function() {
                                null != this._currentTask && this.cancelLoadingTask(),
                                    this._tasks = [],
                                    this._currentTask = null,
                                    this._taskItemIdx = 0,
                                    this._resData = null,
                                    this._state = c.READY
                            }
                            ,
                            n.cancelLoadingTask = function() {
                                try {
                                    this._loader.close()
                                } catch (t) {
                                    CONFIG.DEBUG && console.log("Warning: The loader has no stream yet.")
                                }
                                this._loader.unload()
                            }
                            ,
                            n.getCurrentTask = function() {
                                return this._currentTask
                            }
                            ,
                            n.getNextTaskPriority = function() {
                                return null != this._currentTask && this._tasks.length > 0 ? this._tasks[0].priority : null
                            }
                            ,
                            n.pauseNextTask = function() {
                                null != this._currentTask && this._taskItemIdx < this._currentTask.paths.length - 1 ? (++this._taskItemIdx,
                                    this.pause()) : (this._currentTask = null,
                                    this._taskItemIdx = 0,
                                    this.pause())
                            }
                            ,
                            n.startNextTask = function() {
                                null != this._currentTask && this._taskItemIdx < this._currentTask.paths.length - 1 ? (++this._taskItemIdx,
                                    this.loadSubTask()) : (this._currentTask = null,
                                    this._taskItemIdx = 0,
                                    this.loadTask())
                            }
                            ,
                            n.hasHighPriorityTask = function() {
                                if (null != this._currentTask && this._currentTask.priority == d.HIGH)
                                    return !0;
                                for (var t = this._tasks.length, s = 0; s < t; ++s)
                                    if (this._tasks[s].priority == d.HIGH)
                                        return !0;
                                return !1
                            }
                            ,
                            n.registerLoader = function() {
                                this._loader = new o,
                                    this._loader.setHasProgress(!0),
                                    this._loader.addEventListener(u.PROGRESS, this.onLoaderProgress, this),
                                    this._loader.addEventListener(h.OPEN, this.onLoaderOpen, this),
                                    this._loader.addEventListener(h.COMPLETE, this.onLoaderComplete, this)
                            }
                            ,
                            n.unregisterLoader = function() {
                                this._loader.setHasProgress(!1),
                                    this._loader.removeEventListener(u.PROGRESS, this.onLoaderProgress, this),
                                    this._loader.removeEventListener(h.OPEN, this.onLoaderOpen, this),
                                    this._loader.removeEventListener(h.COMPLETE, this.onLoaderComplete, this),
                                    this._loader = null
                            }
                            ,
                            n.loadTask = function() {
                                this.isEmpty() ? this._state = c.READY : (null == this._currentTask && (this._currentTask = this._tasks.shift(),
                                    this._taskItemIdx = 0),
                                    this._resData = null,
                                    this._state = c.RUNNING,
                                    this.loadSubTask())
                            }
                            ,
                            n.loadSubTask = function() {
                                var t, s = "";
                                null != this._currentTask && ("string" == typeof (t = this._currentTask.paths[this._taskItemIdx]) ? s = t : null != t && t.hasOwnProperty("url") && (s = t.url)),
                                    this._resData = new k,
                                    this._resData.obj = t,
                                this._currentTask && (this._currentTask.startLoadingTime = r.getTimer()),
                                    this._loader.load(new i(s).url, this._currentTask.context)
                            }
                            ,
                            n.onLoaderProgress = function(t) {
                                if (null != this._currentTask) {
                                    if (null != this._currentTask.progressHandler) {
                                        var s = new l(l.TASK_PROGRESS);
                                        this._resData.itemsLoaded = this._taskItemIdx,
                                            this._resData.itemsTotal = this._currentTask.paths.length,
                                            this._resData.content = this._loader.content,
                                            s.data = this._resData,
                                            s.taskID = this._currentTask.taskID,
                                            this._currentTask.progressHandler.call(s)
                                    }
                                    null != this._manager && this._manager.onTaskProgress(this, t)
                                }
                            }
                            ,
                            n.onLoaderOpen = function(t) {
                                if (null != this._currentTask) {
                                    if (null != this._currentTask.openHandler) {
                                        var s = new l(l.TASK_BEGIN);
                                        this._resData.content = this._loader.content,
                                            s.data = this._resData,
                                            s.taskID = this._currentTask.taskID,
                                            this._currentTask.openHandler.call(s)
                                    }
                                    null != this._manager && this._manager.onTaskOpen(this, t),
                                    CONFIG.DEBUG && console.log("[ResNormalChannel]打开成功" + this._currentTask.paths[this._taskItemIdx] + " 耗时" + (r.getTimer() - this._currentTask.startLoadingTime) + "ms")
                                }
                            }
                            ,
                            n.onLoaderError = function(t) {
                                if (t && console.log("##################### NORMAL捕捉到的异常:" + t.text),
                                CONFIG.DEBUG && console.log("Error: Normal task (id = " + this._currentTask.taskID + ", priority = " + this._currentTask.priority + ", path = " + this._currentTask.paths[this._taskItemIdx] + ")"),
                                null != this._currentTask) {
                                    if (null != this._currentTask.errorHandler) {
                                        var s = new l(l.TASK_ERROR);
                                        s.message = t.text,
                                            s.taskID = this._currentTask.taskID,
                                            this._currentTask.errorHandler.call(s)
                                    }
                                    null != this._currentTask && this._taskItemIdx < this._currentTask.paths.length - 1 ? null != this._manager && this._manager.onTaskError(this, t) : (CONFIG.DEBUG && console.log("Info: Normal task all complete."),
                                    null != this._currentTask && null != this._currentTask.allCompleteHandler && (s = new l(l.TASK_COMPLETE),
                                        this._resData.content = this._loader.content,
                                        s.data = this._resData,
                                        s.taskID = this._currentTask.taskID,
                                        this._currentTask.allCompleteHandler.call(s)),
                                    null != this._manager && (this._manager.onTaskError(this, t),
                                        this._manager.onTasksAllComplete(this, t)))
                                }
                            }
                            ,
                            n.isNotCurrentURL = function() {
                                return !1
                            }
                            ,
                            n.onLoaderComplete = function(t) {
                                if (null != this._currentTask) {
                                    var s = new l(l.TASK_COMPLETE);
                                    this._resData.content = this._loader.content,
                                        s.data = this._resData,
                                        s.taskID = this._currentTask.taskID,
                                        this._loader.unload(),
                                        this._resData = null,
                                    CONFIG.DEBUG && console.log("[ResNormalChannel]加载完成" + this._currentTask.paths[this._taskItemIdx] + " 耗时" + (r.getTimer() - this._currentTask.startLoadingTime) + "ms"),
                                    null != this._currentTask.completeHandler && this._currentTask.completeHandler.call(s),
                                        this._taskItemIdx < this._currentTask.paths.length - 1 ? (CONFIG.DEBUG && console.log("Info: Normal task complete, (id = " + this._currentTask.taskID + ", priority = " + this._currentTask.priority + ", path = " + this._currentTask.paths[this._taskItemIdx] + ")"),
                                        null != this._manager && this._manager.onTaskComplete(this, t)) : (CONFIG.DEBUG && (console.log("Info: Normal task complete, (id = " + this._currentTask.taskID + ", priority = " + this._currentTask.priority + ", path = " + this._currentTask.paths[this._taskItemIdx] + ")"),
                                            console.log("Info: Normal task all complete.")),
                                        null != this._currentTask.allCompleteHandler && this._currentTask.allCompleteHandler.call(s),
                                        null != this._manager && (this._manager.onTaskComplete(this, t),
                                            this._manager.onTasksAllComplete(this, t)))
                                }
                            }
                            ,
                            n.calcTaskPriority = function(t) {
                                var s = t.priority
                                    , e = 0;
                                return s == d.HIGH ? e = 3 : s == d.MEDIUM ? e = 2 : s == d.LOW && (e = 1),
                                    e
                            }
                            ,
                            n.sortOnPriority = function(t, s) {
                                var e, a;
                                t.priority,
                                    s.priority;
                                return (e = this.calcTaskPriority(t)) > (a = this.calcTaskPriority(s)) ? -1 : e < a ? 1 : 0
                            }
                            ,
                            e(a, [{
                                key: "state",
                                get: function() {
                                    return this._state
                                }
                            }]),
                            a
                    }(n)).channelType = _.NORMAL,
                    a._RF.pop()
            }
        }
    }
));
