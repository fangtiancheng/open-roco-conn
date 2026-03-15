System.register("chunks:///_virtual/ClickItemLogic.ts", ["cc", "./ConsumeItemProxy.ts", "./ClickConsumableItemLogic.ts", "./ClickRestoreSpiritItemLogic.ts"], (function(i) {
        var t, e, o, c;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
                , function(i) {
                    e = i.ConsumeItemProxy
                }
                , function(i) {
                    o = i.ClickConsumableItemLogic
                }
                , function(i) {
                    c = i.ClickRestoreSpiritItemLogic
                }
            ],
            execute: function() {
                t._RF.push({}, "d1f75PbbLNAKYu2sShpnTGB", "ClickItemLogic", void 0);
                i("ClickItemLogic", function() {
                    function i() {
                        this._useItemProxy = void 0,
                            this._clickRestoreSpiritItemLogic = void 0,
                            this._clickConsumableItemLogic = void 0,
                            this._useItemProxy = new e,
                            this._clickRestoreSpiritItemLogic = new c(this._useItemProxy),
                            this._clickConsumableItemLogic = new o(this._useItemProxy)
                    }
                    var t = i.prototype;
                    return t.dispose = function() {
                        this._useItemProxy.dispose(),
                            this._clickRestoreSpiritItemLogic.dispose(),
                            this._clickConsumableItemLogic.dispose()
                    }
                        ,
                        t.restore = function(i) {
                            this._clickRestoreSpiritItemLogic.restore(i)
                        }
                        ,
                        t.consume = function(i, t) {
                            this._clickConsumableItemLogic.consume(i, t)
                        }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
