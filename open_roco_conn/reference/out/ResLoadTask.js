System.register("chunks:///_virtual/ResLoadTask.ts", ["cc", "./ResLoadPriority.ts"], (function(t) {
        var i, e;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    e = t.ResLoadPriority
                }
            ],
            execute: function() {
                i._RF.push({}, "5e56cQYJPVPLqe++l0WHRKU", "ResLoadTask", void 0);
                t("ResLoadTask", (function() {
                        this.taskID = 0,
                            this.priority = e.MEDIUM,
                            this.resType = "",
                            this.paths = void 0,
                            this.context = void 0,
                            this.startLoadingTime = 0,
                            this.progressHandler = void 0,
                            this.openHandler = void 0,
                            this.errorHandler = void 0,
                            this.completeHandler = void 0,
                            this.allCompleteHandler = void 0
                    }
                ));
                i._RF.pop()
            }
        }
    }
));
