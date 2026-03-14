System.register("chunks:///_virtual/ItemDataDes.ts", ["cc"], (function(i) {
        var t;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "cd4034VkptH5Yt/zIbe/03c", "ItemDataDes", void 0);
                i("ItemDataDes", function() {
                    function i() {
                        this.id = 0,
                            this.name = "",
                            this.description = "",
                            this.unique = void 0,
                            this.type = 0,
                            this.subtype = 0,
                            this.url = "",
                            this.price = 0,
                            this.expireTime = 0
                    }
                    var t = i.prototype;
                    return t.clone = function() {
                        var t = new i;
                        return t.id = this.id,
                            t.name = this.name,
                            t.description = this.description,
                            t.unique = this.unique,
                            t.type = this.type,
                            t.subtype = this.subtype,
                            t.url = this.url,
                            t.price = this.price,
                            t.expireTime = this.expireTime,
                            t
                    }
                        ,
                        t.tostring = function() {
                            var i = "[ItemDataDes]";
                            return i += " id = " + this.id,
                                i += ", name = " + this.name,
                                i += ", description = " + this.description,
                                i += ", unique = " + this.unique,
                                i += ", type = " + this.type,
                                i += ", subtype = " + this.subtype,
                                i += ", url = " + this.url,
                                i += ", price = " + this.price,
                                i += ", expireTime = " + this.expireTime
                        }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
