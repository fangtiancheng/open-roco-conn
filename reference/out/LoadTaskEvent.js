System.register("chunks:///_virtual/LoadTaskEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(t) {
        var e, s, n, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    s = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "1f4e1QjYSZA4rhUDIQvO4rs", "LoadTaskEvent", void 0);
                var a = t("LoadTaskEvent", function(t) {
                    function n(e, s, r) {
                        var a;
                        return void 0 === e && (e = n.TASK_COMPLETE),
                        void 0 === s && (s = !1),
                            (a = t.call(this, e, s) || this).taskID = 0,
                            a
                    }
                    return e(n, t),
                        n.prototype.clone = function() {
                            var e = t.prototype.clone.call(this);
                            return e.taskID = this.taskID,
                                e
                        }
                        ,
                        s(n, [{
                            key: "resData",
                            get: function() {
                                return this.data
                            }
                        }]),
                        n
                }(r));
                a.TASK_BEGIN = "taskBegin",
                    a.TASK_COMPLETE = "taskComplete",
                    a.TASK_ERROR = "taskError",
                    a.TASK_PROGRESS = "taskProgress",
                    n._RF.pop()
            }
        }
    }
));
