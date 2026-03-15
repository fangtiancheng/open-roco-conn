System.register("chunks:///_virtual/Notification.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "117eaIQZQNH/ZZEYNvu3wUE", "Notification", void 0);
                t("Notification", function() {
                    function t(t, n, i) {
                        void 0 === n && (n = null),
                        void 0 === i && (i = null),
                            this.name = null,
                            this.body = null,
                            this.type = null,
                            this.name = t,
                            this.body = n,
                            this.type = i
                    }
                    var n = t.prototype;
                    return n.getName = function() {
                        return this.name
                    }
                        ,
                        n.setBody = function(t) {
                            this.body = t
                        }
                        ,
                        n.getBody = function() {
                            return this.body
                        }
                        ,
                        n.setType = function(t) {
                            this.type = t
                        }
                        ,
                        n.getType = function() {
                            return this.type
                        }
                        ,
                        n.toString = function() {
                            var t = "Notification Name: " + this.getName();
                            return t += "\nBody:" + (null == this.getBody() ? "null" : this.getBody().toString()),
                                t += "\nType:" + (null == this.getType() ? "null" : this.getType())
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
