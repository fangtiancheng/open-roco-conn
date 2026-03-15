System.register("chunks:///_virtual/DressUpItemDes.ts", ["cc"], (function(i) {
        var t;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "6c9feNM+MJFAbAwzFpTJgVg", "DressUpItemDes", void 0);
                i("DressUpItemDes", (function(i) {
                        void 0 === i && (i = null),
                            this.id = void 0,
                            this.isVip = void 0,
                            this.isDefault = void 0,
                            this.defaultType = void 0,
                            this.isNew = void 0,
                            this.charm = void 0,
                            this.price = void 0,
                            this.validDays = void 0,
                            this.expireTime = void 0,
                            this.unlockLevel = void 0,
                            this.unlockPhrace = void 0,
                            this.unlockFlower = void 0,
                            this.name = void 0,
                            this.sr_passTime = void 0,
                        i && (this.id = parseInt(i.id.toString()),
                            this.isVip = "1" == i.vip.toString(),
                            this.isDefault = "0" != i.default.toString(),
                            this.defaultType = parseInt(i.default.toString()),
                            this.isNew = "1" == i.new.toString(),
                            this.charm = parseInt(i.charm.toString()),
                            this.price = parseInt(i.price.toString()),
                            this.validDays = parseInt(i.valid.toString()),
                            this.expireTime = parseInt(i.expire.toString()),
                            this.unlockLevel = parseInt(i.llevel.toString()),
                            this.unlockPhrace = parseInt(i.lphrace.toString()),
                            this.unlockFlower = parseInt(i.lflower.toString()),
                            this.name = i.toString())
                    }
                ));
                t._RF.pop()
            }
        }
    }
));
