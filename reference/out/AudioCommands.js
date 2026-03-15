System.register("chunks:///_virtual/AudioCommands.ts", ["cc"], (function(e) {
        var c;
        return {
            setters: [function(e) {
                c = e.cclegacy
            }
            ],
            execute: function() {
                c._RF.push({}, "0986dLcr2dJ57mbB4M2WE1D", "AudioCommands", void 0);
                var n = e("AudioCommands", function() {
                    function e() {}
                    return e.execute = function(c, n) {
                        if (null != c)
                            switch (n) {
                                case e.NOTHING:
                                    break;
                                case e.PLAY:
                                    c.play();
                                    break;
                                case e.PAUSE:
                                    c.pause();
                                    break;
                                case e.STOP:
                                    c.stop()
                            }
                    }
                        ,
                        e
                }());
                n.NOTHING = 1,
                    n.PLAY = 2,
                    n.PAUSE = 3,
                    n.STOP = 4,
                    c._RF.pop()
            }
        }
    }
));
