System.register("chunks:///_virtual/ProcessEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.Event
                }
            ],
            execute: function() {
                n._RF.push({}, "c3f65hTtdpJ4os1I/HCCuxZ", "ProcessEvent", void 0);
                var o = t("ProcessEvent", function(t) {
                    function n(e, n) {
                        var s;
                        return void 0 === n && (n = null),
                            (s = t.call(this, e) || this)._task = void 0,
                            s._task = n,
                            s
                    }
                    return e(n, t),
                        n
                }(s));
                o.TASK_DONE = "taskDone",
                    o.LIST_DONE = "listDone",
                    n._RF.pop()
            }
        }
    }
));
