System.register("chunks:///_virtual/DazzleDressSuitDataDes.ts", ["cc"], (function(t) {
        var a;
        return {
            setters: [function(t) {
                a = t.cclegacy
            }
            ],
            execute: function() {
                a._RF.push({}, "fc697PvtEJBlanbxrrb3dCF", "DazzleDressSuitDataDes", void 0);
                t("DazzleDressSuitDataDes", function() {
                    function t() {
                        this.id = void 0,
                            this.name = void 0,
                            this.daAvatar = void 0,
                            this.daAvatar = []
                    }
                    var a = t.prototype;
                    return a.clone = function() {
                        var a = new t;
                        a.id = this.id,
                            a.name = this.name;
                        for (var i = 0; i < this.daAvatar.length; i++)
                            a.daAvatar[i] = this.daAvatar[i];
                        return a
                    }
                        ,
                        a.toString = function() {
                            var t = "[DazzleDataSuitDes]";
                            return t += " id = " + this.id,
                                t += ", name = " + this.name,
                                t += ", avatar = [" + this.daAvatar + "]"
                        }
                        ,
                        t
                }());
                a._RF.pop()
            }
        }
    }
));
