System.register("chunks:///_virtual/Singleton.ts", ["cc"], (function(n) {
        var t;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "3ebb7Gon/JM+rRj9qxI6S9R", "Singleton", void 0),
                    n("default", function() {
                        function n() {}
                        return n.GetInstance = function(n) {
                            return null == this.instance && (this.instance = new n,
                                this.instance.init()),
                                this.instance
                        }
                            ,
                            n.prototype.init = function() {
                                console.info("Singleton Create:" + this.constructor.name)
                            }
                            ,
                            n
                    }()).instance = null,
                    t._RF.pop()
            }
        }
    }
));
