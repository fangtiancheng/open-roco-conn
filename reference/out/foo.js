System.register("chunks:///_virtual/foo.ts", ["cc"], (function() {
        var n;
        return {
            setters: [function(o) {
                n = o.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "60794HaHRFJU4yTM3pdTIuC", "foo", void 0);
                var o = function() {
                    function n() {
                        this._name = "internalfoo"
                    }
                    return n.print = function(n) {
                        console.warn("i am foo!" + n)
                    }
                        ,
                        n
                }();
                FrameWork.foo = o,
                    n._RF.pop()
            }
        }
    }
));
