System.register("chunks:///_virtual/ResVIPChannel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./EventDispatcher.ts", "./LoadTaskEvent.ts", "./LoaderEvent.ts", "./ProgressEvent.ts", "./ResChannelState.ts", "./ResChannelType.ts", "./ResData.ts"], (function(t) {
        var s, e, a, n, r, i, l, h, o, u, _;
        return {
            setters: [function(t) {
                s = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    n = t.default
                }
                , function(t) {
                    r = t.EventDispatcher
                }
                , function(t) {
                    i = t.LoadTaskEvent
                }
                , function(t) {
                    l = t.LoaderEvent
                }
                , function(t) {
                    h = t.ProgressEvent
                }
                , function(t) {
                    o = t.ResChannelState
                }
                , function(t) {
                    u = t.ResChannelType
                }
                , function(t) {
                    _ = t.ResData
                }
            ],
            execute: function() {
                a._RF.push({}, "955f9bu6CJIY6sKZ2QMmhMy", "ResVIPChannel", void 0),
                    t("ResVIPChannel", function(t) {
                        function a(s, e) {
                            var a;
                            if (void 0 === s && (s = null),
                            void 0 === e && (e = null),
                                (a = t.call(this) || this)._manager = void 0,
                                a._resLoaderType = 0,
                                a._resLoader = void 0,
                                a._tasks = void 0,
                                a._currentTask = void 0,
                                a._taskItemIdx = 0,
                                a._resData = void 0,
                                a._state = 0,
                                a._manager = s,
                                a._resLoaderType = e.type,
                                a._resLoader = e,
                                a._tasks = [],
                                a._currentTask = null,
                                a._taskItemIdx = 0,
                                a._resData = null,
                                a._state = o.READY,
                                a.registerLoader(),
                            null == a._resLoader)
                                throw n.IS_LOCAL,
                                    new Error("[ResVIPChannel] IResLoader为空!!");
                            return a
                        }
                        s(a, t);
                        var r = a.prototype;
                        return r.addTask = function(t) {
                            return null == t ? -1 : (this._tasks.push(t),
                                t.taskID)
                        }
                            ,
                            r.delTask = function(t) {
                                if (null == t)
                                    return !1;
                                if (t == this._currentTask)
                                    return this._currentTask = null,
                                        this._state == o.RUNNING ? this.cancelLoadingTask() : CONFIG.DEBUG && console.log("[ResVIPChannel] 不在运行中,cancelLoadingTask!!"),
                                        this._taskItemIdx = 0,
                                        this._state = o.READY,
                                        this.start(),
                                        !0;
                                for (var s = this._tasks.length, e = !1, a = 0; a < s; ++a) {
                                    if (this._tasks[a] == t) {
                                        this._tasks.splice(a, 1),
                                            e = !0;
                                        break
                                    }
                                }
                                return e
                            }
                            ,
                            r.isEmpty = function() {
                                return null == this._currentTask && 0 == this._tasks.length
                            }
                            ,
                            r.isReady = function() {
                                return null != this._currentTask && this._state == o.READY
                            }
                            ,
                            r.isRunning = function() {
                                return null != this._currentTask && this._state == o.RUNNING
                            }
                            ,
                            r.isPaused = function() {
                                return this.start(),
                                this._state == o.PAUSED
                            }
                            ,
                            r.start = function() {
                                switch (this._state) {
                                    case o.EMPTY:
                                    case o.RUNNING:
                                        break;
                                    case o.PAUSED:
                                        this.resume();
                                        break;
                                    case o.READY:
                                        this.loadTask()
                                }
                            }
                            ,
                            r.pause = function() {
                                this._state = o.PAUSED
                            }
                            ,
                            r.resume = function() {
                                this.isPaused() && this.loadTask()
                            }
                            ,
                            r.clear = function() {
                                null != this._currentTask && this.cancelLoadingTask(),
                                    this._tasks = [],
                                    this._currentTask = null,
                                    this._taskItemIdx = 0,
                                    this._resData = null,
                                    this._state = o.READY
                            }
                            ,
                            r.cancelLoadingTask = function() {
                                try {
                                    null != this._resLoader.getURL() && this._resLoader.close()
                                } catch (t) {
                                    CONFIG.DEBUG && console.log("Warning:" + t.message)
                                }
                                this._resLoader.unload()
                            }
                            ,
                            r.getCurrentTask = function() {
                                return this._currentTask
                            }
                            ,
                            r.getNextTaskPriority = function() {
                                return null != this._currentTask && this._tasks.length > 0 ? this._tasks[0].priority : null
                            }
                            ,
                            r.pauseNextTask = function() {
                                null != this._currentTask && this._taskItemIdx < this._currentTask.paths.length - 1 ? (++this._taskItemIdx,
                                    this.pause()) : (this._currentTask = null,
                                    this._taskItemIdx = 0,
                                    this.pause())
                            }
                            ,
                            r.startNextTask = function() {
                                null != this._currentTask && this._taskItemIdx < this._currentTask.paths.length - 1 ? (++this._taskItemIdx,
                                    this.loadSubTask()) : (this._currentTask = null,
                                    this._taskItemIdx = 0,
                                    this.loadTask())
                            }
                            ,
                            r.registerLoader = function() {
                                this._resLoader.getED().addEventListener(h.PROGRESS, this.onLoaderProgress, this),
                                    this._resLoader.getED().addEventListener(l.OPEN, this.onLoaderOpen, this),
                                    this._resLoader.getED().addEventListener(l.COMPLETE, this.onLoaderComplete, this)
                            }
                            ,
                            r.unregisterLoader = function() {
                                this._resLoader.getED().removeEventListener(h.PROGRESS, this.onLoaderProgress, this),
                                    this._resLoader.getED().removeEventListener(l.OPEN, this.onLoaderOpen, this),
                                    this._resLoader.getED().removeEventListener(l.COMPLETE, this.onLoaderComplete, this)
                            }
                            ,
                            r.loadTask = function() {
                                this.isEmpty() ? this._state = o.READY : null == this._currentTask ? (this._currentTask = this._tasks.shift(),
                                    this._taskItemIdx = 0,
                                    this._resData = null,
                                    this._state = o.RUNNING,
                                    this.loadSubTask()) : CONFIG.DEBUG && console.log("[ResVIPChannel] 错误:已经存在一个任务!")
                            }
                            ,
                            r.loadSubTask = function() {
                                var t, s = "", e = 0, a = [], n = !1, r = 0, i = 0;
                                null != this._currentTask && ("string" == typeof (t = this._currentTask.paths[this._taskItemIdx]) ? s = t : null != t && t.hasOwnProperty("url") && (s = t.url),
                                null != t && t.hasOwnProperty("assetPath") && (a = t.assetPath),
                                null != t && t.hasOwnProperty("isGaf") && (n = t.isGaf),
                                null != t && t.hasOwnProperty("resType") && (r = t.resType),
                                null != t && t.hasOwnProperty("resID") && (i = t.resID),
                                    e = this._currentTask.taskID),
                                    this._resLoader.taskID = e,
                                    this._resData = new _,
                                    this._resData.obj = t,
                                    1 == n ? this._resLoader.loadGaf(r, i) : a.length > 0 ? this._resLoader.load1(a) : this._resLoader.load(s)
                            }
                            ,
                            r.onLoaderProgress = function(t) {
                                if (null != this._currentTask) {
                                    if (null != this._currentTask.progressHandler) {
                                        var s = new i(i.TASK_PROGRESS);
                                        this._resData.itemsLoaded = this._taskItemIdx,
                                            this._resData.itemsTotal = this._currentTask.paths.length,
                                            this._resData.content = this._resLoader.getContent(),
                                            s.data = this._resData,
                                            s.taskID = this._currentTask.taskID,
                                            this._currentTask.progressHandler.call(s)
                                    }
                                    null != this._manager && this._manager.onTaskProgress(this, t)
                                }
                            }
                            ,
                            r.onLoaderOpen = function(t) {
                                if (null != this._currentTask) {
                                    if (null != this._currentTask.openHandler) {
                                        var s = new i(i.TASK_BEGIN);
                                        this._resData.content = this._resLoader.getContent(),
                                            s.data = this._resData,
                                            s.taskID = this._currentTask.taskID,
                                            this._currentTask.openHandler.call(s)
                                    }
                                    null != this._manager && this._manager.onTaskOpen(this, t)
                                }
                            }
                            ,
                            r.onLoaderError = function(t) {
                                if (null != this._currentTask) {
                                    if (CONFIG.DEBUG && console.log("Error: VIP task (id = " + this._currentTask.taskID + ", path = " + this._currentTask.paths[this._taskItemIdx] + ")"),
                                    null != this._currentTask.errorHandler) {
                                        var s = new i(i.TASK_ERROR);
                                        s.message = t.message,
                                            s.taskID = this._currentTask.taskID,
                                            this._currentTask.errorHandler.call(s)
                                    }
                                    null != this._currentTask && this._taskItemIdx < this._currentTask.paths.length - 1 ? null != this._manager && this._manager.onTaskError(this, t) : (CONFIG.DEBUG && console.log("Info: VIP task all complete."),
                                    null != this._currentTask && null != this._currentTask.allCompleteHandler && (s = new i(i.TASK_COMPLETE),
                                        this._resData.content = this._resLoader.getContent(),
                                        s.data = this._resData,
                                        s.taskID = this._currentTask.taskID,
                                        this._currentTask.allCompleteHandler.call(s)),
                                    null != this._manager && (this._manager.onTaskError(this, t),
                                        this._manager.onTasksAllComplete(this, t)))
                                }
                            }
                            ,
                            r.onLoaderComplete = function(t) {
                                if (null != this._currentTask) {
                                    var s = new i(i.TASK_COMPLETE);
                                    this._resData.content = this._resLoader.getContent(),
                                        s.data = this._resData,
                                        s.taskID = this._currentTask.taskID,
                                        this._resLoader.unload(),
                                        this._resData = null,
                                        this._taskItemIdx < this._currentTask.paths.length - 1 ? (CONFIG.DEBUG && console.log("Info: VIP task complete, (id = " + this._currentTask.taskID + ", path = " + this._currentTask.paths[this._taskItemIdx] + ")"),
                                        null != this._currentTask.completeHandler && this._currentTask.completeHandler.call(s),
                                        null != this._manager && this._manager.onTaskComplete(this, t)) : (CONFIG.DEBUG && (console.log("Info: VIP task complete, (id = " + this._currentTask.taskID + ", path = " + this._currentTask.paths[this._taskItemIdx] + ")"),
                                            console.log("Info: VIP task all complete.")),
                                        null != this._currentTask.completeHandler && this._currentTask.completeHandler.call(s),
                                        null != this._currentTask.allCompleteHandler && this._currentTask.allCompleteHandler.call(s),
                                        null != this._manager && (this._manager.onTaskComplete(this, t),
                                            this._manager.onTasksAllComplete(this, t)))
                                }
                            }
                            ,
                            e(a, [{
                                key: "state",
                                get: function() {
                                    return this._state
                                }
                            }]),
                            a
                    }(r)).channelType = u.VIP,
                    a._RF.pop()
            }
        }
    }
));
