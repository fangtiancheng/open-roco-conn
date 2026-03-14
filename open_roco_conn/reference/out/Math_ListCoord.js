System.register("chunks:///_virtual/Math_ListCoord.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(_) {
        var I, T;
        return {
            setters: [function(_) {
                I = _.createClass
            }
                , function(_) {
                    T = _.cclegacy
                }
            ],
            execute: function() {
                T._RF.push({}, "74dae5DcUhPro26I9w3Jw/V", "Math_ListCoord", void 0);
                _("Math_ListCoord", function() {
                    function _(_, I, T, t, L, N, O, i) {
                        this.ICON_LIST_POS_X = 0,
                            this.ICON_LIST_POS_Y = 0,
                            this.ICON_LIST_X_TOTALNUM = 1,
                            this.ICON_LIST_Y_TOTALNUM = 1,
                            this.ICON_LIST_NEXT_WIDTH = 0,
                            this.ICON_LIST_NEXT_HEIGHT = 0,
                            this.ICON_LIST_PAGE_TOTALNUM = 1,
                            this.ICON_LIST_CHILD_WIDTH = 1,
                            this.ICON_LIST_CHILD_HEIGHT = 1,
                            this.ICON_LIST_POS_X = _,
                            this.ICON_LIST_POS_Y = I,
                            this.ICON_LIST_CHILD_WIDTH = T,
                            this.ICON_LIST_CHILD_HEIGHT = t,
                            this.ICON_LIST_X_TOTALNUM = L,
                            this.ICON_LIST_Y_TOTALNUM = N,
                            this.ICON_LIST_NEXT_WIDTH = O,
                            this.ICON_LIST_NEXT_HEIGHT = i,
                            this.ICON_LIST_PAGE_TOTALNUM = this.ICON_LIST_X_TOTALNUM * this.ICON_LIST_Y_TOTALNUM
                    }
                    var T = _.prototype;
                    return T.getX = function(_) {
                        var I;
                        I = _ >= this.ICON_LIST_PAGE_TOTALNUM ? _ % this.ICON_LIST_PAGE_TOTALNUM : _;
                        var T = Number(I % this.ICON_LIST_X_TOTALNUM) * (this.ICON_LIST_NEXT_WIDTH + this.ICON_LIST_CHILD_WIDTH) + this.ICON_LIST_POS_X;
                        return Math.floor(T)
                    }
                        ,
                        T.getY = function(_) {
                            var I;
                            I = _ >= this.ICON_LIST_PAGE_TOTALNUM ? _ % this.ICON_LIST_PAGE_TOTALNUM : _;
                            var T = Math.floor(I / this.ICON_LIST_X_TOTALNUM) * (this.ICON_LIST_NEXT_HEIGHT + this.ICON_LIST_CHILD_HEIGHT) + this.ICON_LIST_POS_Y;
                            return Math.floor(T)
                        }
                        ,
                        T.getYDown = function(_) {
                            var I;
                            I = _ >= this.ICON_LIST_PAGE_TOTALNUM ? _ % this.ICON_LIST_PAGE_TOTALNUM : _;
                            var T = Math.floor(I / this.ICON_LIST_X_TOTALNUM) * (this.ICON_LIST_NEXT_HEIGHT + this.ICON_LIST_CHILD_HEIGHT) * -1 + this.ICON_LIST_POS_Y;
                            return Math.floor(T)
                        }
                        ,
                        I(_, [{
                            key: "length",
                            get: function() {
                                return this.ICON_LIST_PAGE_TOTALNUM
                            }
                        }]),
                        _
                }());
                T._RF.pop()
            }
        }
    }
));
