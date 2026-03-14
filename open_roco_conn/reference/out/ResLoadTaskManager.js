System.register("chunks:///_virtual/ResLoadTaskManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NormalLoader.ts", "./ResChannelType.ts", "./ResLoadPriority.ts", "./ResNormalChannel.ts", "./ResVIPChannel.ts"], (function(n) {
        var t, a, s, e, i, r, l;
        return {
            setters: [function(n) {
                t = n.createForOfIteratorHelperLoose
            }
                , function(n) {
                    a = n.cclegacy
                }
                , function(n) {
                    s = n.NormalLoader
                }
                , function(n) {
                    e = n.ResChannelType
                }
                , function(n) {
                    i = n.ResLoadPriority
                }
                , function(n) {
                    r = n.ResNormalChannel
                }
                , function(n) {
                    l = n.ResVIPChannel
                }
            ],
            execute: function() {
                a._RF.push({}, "c2f55vOcdFI+JmeYr4zI4nu", "ResLoadTaskManager", void 0);
                var h = n("ResLoadTaskManager", function() {
                    function n() {
                        this._tasksDict = void 0,
                            this._channelNum = 0,
                            this._normalChannel = void 0,
                            this._resVIPChannelCount = 0,
                            this._tasksDict = new Map,
                            this._channelNum = 0,
                            this._normalChannel = this.createChannel(e.NORMAL)
                    }
                    var a = n.prototype;
                    return a.addLoadTask = function(t) {
                        t.taskID = ++n._taskID;
                        var a = this._tasksDict[t.resType];
                        return null == a && (a = this._normalChannel,
                            t.resType = e.NORMAL),
                            a.addTask(t),
                            this.startChannel(a),
                            n._taskID
                    }
                        ,
                        a.delLoadTask = function(n) {
                            var t = this._tasksDict[n.resType];
                            return null != t && t.delTask(n)
                        }
                        ,
                        a.stopAndDelTask = function(n) {}
                        ,
                        a.createVipChannel = function(t) {
                            return !this.hasVipChannel(t) && this._channelNum < n.RES_MAX && (this.createChannel(t),
                                !0)
                        }
                        ,
                        a.hasVipChannel = function(n) {
                            if (void 0 === n && (n = null),
                            null == n) {
                                for (var t in this._tasksDict) {
                                    var a = this._tasksDict[t];
                                    if (null != a && a != this._normalChannel)
                                        return !0
                                }
                                return !1
                            }
                            return null != this._tasksDict[n] && this._tasksDict[n] != this._normalChannel
                        }
                        ,
                        a.hasVipRunningTask = function() {
                            for (var n, a, s = t(this._tasksDict); !(a = s()).done; ) {
                                var e = a.value
                                    , i = e[0];
                                e[1];
                                if (null != (n = this._tasksDict[i]) && n != this._normalChannel && n.isRunning())
                                    return !0
                            }
                            return !1
                        }
                        ,
                        a.removeVipChannel = function(n) {
                            var t = this._tasksDict[n];
                            return null != t && t != this._normalChannel && (t.clear(),
                                delete this._tasksDict[n],
                                t = null,
                                !0)
                        }
                        ,
                        a.getVipChannelsList = function() {
                            var n = [];
                            for (var t in this._tasksDict) {
                                var a = this._tasksDict[t];
                                null != a && a != this._normalChannel && n.push(a)
                            }
                            return n
                        }
                        ,
                        a.hasRunningVipChannel = function() {
                            for (var n = this.getVipChannelsList(), t = n.length, a = 0; a < t; ++a) {
                                if (n[a].isRunning())
                                    return !0
                            }
                            return !1
                        }
                        ,
                        a.startChannel = function(n) {
                            if (void 0 === n && (n = null),
                            null == n) {
                                var t = this.getVipChannelsList()
                                    , a = t.length;
                                if (a > 0) {
                                    for (var s = 0; s < a; ++s)
                                        t[s].start();
                                    this._normalChannel.hasHighPriorityTask() ? this._normalChannel.start() : this._normalChannel.pause()
                                } else
                                    this._normalChannel.start()
                            } else
                                n != this._normalChannel ? n.start() : this.hasVipRunningTask() ? this._normalChannel.hasHighPriorityTask() ? this._normalChannel.start() : this._normalChannel.pause() : this._normalChannel.start()
                        }
                        ,
                        a.clear = function(n) {
                            var t;
                            if (void 0 === n && (n = ""),
                            "" == n)
                                for (var a in this._tasksDict)
                                    null != (t = this._tasksDict[a]) && t.clear();
                            else
                                null != (t = this._tasksDict[n]) && t.clear()
                        }
                        ,
                        a.createChannel = function(n) {
                            var t = null;
                            return n != e.NORMAL ? ((t = new l(this,new s)).__name__ = "ResVIPChannel" + this._resVIPChannelCount,
                                this._resVIPChannelCount++) : t = new r(this),
                                this._tasksDict[n] = t,
                                ++this._channelNum,
                                t
                        }
                        ,
                        a.onTaskProgress = function(n, t) {}
                        ,
                        a.onTaskOpen = function(n, t) {}
                        ,
                        a.onTaskError = function(n, t) {
                            n == this._normalChannel && n.getNextTaskPriority() != i.HIGH && this.hasRunningVipChannel() ? n.pauseNextTask() : n.startNextTask()
                        }
                        ,
                        a.onTaskComplete = function(n, t) {
                            n == this._normalChannel && n.getNextTaskPriority() != i.HIGH && this.hasRunningVipChannel() ? n.pauseNextTask() : n.startNextTask()
                        }
                        ,
                        a.onTasksAllComplete = function(n, t) {
                            n != this._normalChannel && !this.hasRunningVipChannel() && this._normalChannel.isPaused() && this._normalChannel.resume()
                        }
                        ,
                        n
                }());
                h.RES_MAX = 1e3,
                    h._taskID = 0,
                    a._RF.pop()
            }
        }
    }
));
