System.register("chunks:///_virtual/DispatchManager.ts", ["cc", "./EventDispatcher.ts"], (function(e) {
        var t, n, c;
        return {
            setters: [function(e) {
                t = e.cclegacy,
                    n = e.Event
            }
                , function(e) {
                    c = e.EventDispatcher
                }
            ],
            execute: function() {
                t._RF.push({}, "833f1B0W/lHwpcov5Ufc8kB", "DispatchManager", void 0),
                    e("DispatchManager", function() {
                        function e() {}
                        return e.addEventListener = function(t, n, c) {
                            e._dispatcher.addEventListener(t, n, c)
                        }
                            ,
                            e.dispatch = function(t, c) {
                                void 0 === c && (c = null),
                                    e._dispatcher.dispatchEvent(new n(t), c)
                            }
                            ,
                            e.removeListener = function(t, n, c) {
                                e._dispatcher.removeEventListener(t, n, c)
                            }
                            ,
                            e
                    }())._dispatcher = new c,
                    t._RF.pop()
            }
        }
    }
));
