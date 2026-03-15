System.register("chunks:///_virtual/VideoPlayer.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "3b1756FAUhOULqxYZCDKxa6", "VideoPlayer", void 0);
                t("VideoPlayer", function() {
                    function t() {}
                    var n = t.prototype;
                    return n.addEventListener = function(t, n, e) {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        n.removeEventListener = function(t, n, e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        n.dispatchEvent = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        n.setPath = function(t, n) {}
                        ,
                        n.getPath = function() {
                            return null
                        }
                        ,
                        n.getLength = function() {
                            return 0
                        }
                        ,
                        n.setVolume = function(t) {}
                        ,
                        n.getVolume = function() {
                            return 0
                        }
                        ,
                        n.getPosition = function() {
                            return 0
                        }
                        ,
                        n.stop = function() {}
                        ,
                        n.pause = function() {}
                        ,
                        n.play = function(t) {}
                        ,
                        n.dispose = function() {}
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
