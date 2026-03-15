System.register("chunks:///_virtual/CombatResConvert.ts", ["cc"], (function(n) {
        var t;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "2f976P5xGNA07V/S8ToBh1b", "CombatResConvert", void 0);
                n("CombatResConvert", function() {
                    function n() {}
                    return n.addBidToEid = function(n) {
                        return 1e4 + n
                    }
                        ,
                        n.addEidToBid = function(n) {
                            return Math.abs(n) - 1e4
                        }
                        ,
                        n.delBidToEid = function(n) {
                            return 2e4 + n
                        }
                        ,
                        n.delEidToBid = function(n) {
                            return Math.abs(n) - 2e4
                        }
                        ,
                        n.convertToBuffId = function(t) {
                            return t >= 2e4 ? -1 * n.delEidToBid(t) : n.addEidToBid(t)
                        }
                        ,
                        n.buffIdToIconId = function(n) {
                            return 100 + n
                        }
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
