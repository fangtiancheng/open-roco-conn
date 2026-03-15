System.register("chunks:///_virtual/CGIUserInfo.ts", ["cc", "./CGI.ts"], (function(n) {
        var t, e;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
                , function(n) {
                    e = n.CGI
                }
            ],
            execute: function() {
                t._RF.push({}, "399bbNQxTpGraDAP0eYOzM9", "CGIUserInfo", void 0);
                n("CGIUserInfo", function() {
                    function n() {}
                    return n.GetUserInfo = function(n, t) {
                        e.Get("h5_panel", {
                            cmd: 0,
                            platfrom: 2
                        }, "json", n, t)
                    }
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
