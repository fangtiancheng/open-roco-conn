System.register("chunks:///_virtual/AbandonedSearchBarSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SearchBarSprite.ts"], (function(e) {
        var t, r, n, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    i = e.SearchBarSprite
                }
            ],
            execute: function() {
                n._RF.push({}, "c61d9E6lwNL5rpjHgliPRPO", "AbandonedSearchBarSprite", void 0);
                e("AbandonedSearchBarSprite", function(e) {
                    function n(t) {
                        return e.call(this, t) || this
                    }
                    t(n, e);
                    var i = n.prototype;
                    return i.afterLoaded = function() {
                        e.prototype.afterLoaded.call(this),
                            this.reform()
                    }
                        ,
                        i.reform = function() {
                            this._isInit
                        }
                        ,
                        i.dispose = function() {}
                        ,
                        r(n, [{
                            key: "display",
                            get: function() {
                                return this
                            }
                        }]),
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
