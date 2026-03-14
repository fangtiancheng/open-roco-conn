System.register("chunks:///_virtual/DazzleDressDataDes.ts", ["cc"], (function(i) {
        var t;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "46c0cdtmpFJIbtI8YEjLWV1", "DazzleDressDataDes", void 0),
                    i("DazzleDressDataDes", function() {
                        function i() {
                            this.id = void 0,
                                this.name = void 0,
                                this.type = void 0,
                                this.score = void 0,
                                this.recoverable = void 0,
                                this.recoverprice = void 0,
                                this.description = void 0,
                                this.prices = void 0,
                                this.isset = void 0,
                                this.isvip = void 0,
                                this.intime = void 0,
                                this.outtime = void 0,
                                this.url = void 0
                        }
                        var t = i.prototype;
                        return t.clone = function() {
                            var t = new i;
                            return t.id = this.id,
                                t.name = this.name,
                                t.type = this.type,
                                t.score = this.score,
                                t.recoverable = this.recoverable,
                                t.recoverprice = this.recoverprice,
                                t.description = this.description,
                                t.prices = this.prices,
                                t.isset = this.isset,
                                t.isvip = this.isvip,
                                t.intime = this.intime,
                                t.outtime = this.outtime,
                                t.url = this.url,
                                t
                        }
                            ,
                            t.toString = function() {
                                var i = "[DazzleDataDes]";
                                return i += " id = " + this.id,
                                    i += ", name = " + this.name,
                                    i += ", type = " + this.type,
                                    i += ", score = " + this.score,
                                    i += ", recoverable = " + this.recoverable,
                                    i += ", recoverprice = " + this.recoverprice,
                                    i += ", description = " + this.description,
                                    i += ", prices = " + this.prices,
                                    i += ", isset = " + this.isset,
                                    i += ", isvip = " + this.isvip,
                                    i += ", intime = " + this.intime,
                                    i += ", outtime = " + this.outtime,
                                    i += ", url = " + this.url
                            }
                            ,
                            i
                    }()).timeLimitString = ["7天", "30天", "永久"],
                    t._RF.pop()
            }
        }
    }
));
