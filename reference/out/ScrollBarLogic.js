System.register("chunks:///_virtual/ScrollBarLogic.ts", ["cc"], (function(t) {
        var i;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
            ],
            execute: function() {
                i._RF.push({}, "95d607yuK5DyrbYH4C/a2pV", "ScrollBarLogic", void 0);
                t("ScrollBarLogic", function() {
                    function t(t) {
                        this._parent = void 0,
                            this.upButton = void 0,
                            this.downButton = void 0,
                            this.scrollF = void 0,
                            this.slider = void 0,
                            this._parent = t;
                        var i = this._parent.getChildByName("scroll_Bar");
                        this.upButton = i.getChildByName("upArrow"),
                            this.downButton = i.getChildByName("downArrow"),
                            this.scrollF = i.getChildByName("scrollF"),
                            this.slider = i.getChildByName("slider")
                    }
                    var i = t.prototype;
                    return i.setVisible = function(t) {
                        this.upButton && (this.upButton.active = t),
                        this.downButton && (this.downButton.active = t),
                        this.scrollF && (this.scrollF.active = t),
                        this.slider && (this.slider.active = t)
                    }
                        ,
                        i.reset = function() {}
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
