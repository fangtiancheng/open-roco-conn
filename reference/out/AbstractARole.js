System.register("chunks:///_virtual/AbstractARole.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts"], (function(t) {
        var e, n, o, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    r = t.EventDispatcher
                }
            ],
            execute: function() {
                o._RF.push({}, "c3302uPShND24Lcv7uwIY+x", "AbstractARole", void 0);
                t("AbstractARole", function(t) {
                    e(r, t);
                    var o = r.prototype;
                    function r() {
                        var e;
                        return (e = t.call(this) || this).roleData = void 0,
                            e.view = void 0,
                            e.instanceName = "",
                            e.id = 0,
                            e.itemListener = void 0,
                            e.splace = void 0,
                            e.lastClickTime = 0,
                            e
                    }
                    return o.getRoleView = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        o.canExecAction = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.act = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setSPlace = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getSPlace = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.fly = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.swim = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.magicOffset = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.showCombatResultEffect = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.pkState = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.fishingState = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getDirection = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getMotionType = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setDirection = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setMotionType = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setMotionAndDir = function(t, e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getPosition = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setPosition = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getSpeed = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.isHit = function(t, e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.isHit2 = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.finalize = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getID = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getName = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getView = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.attachView = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onDataChange = function(t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.onTick = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.initialize = function() {}
                        ,
                        o.getData = function() {
                            return this.roleData
                        }
                        ,
                        o.setData = function(t) {
                            this.roleData = t
                        }
                        ,
                        o.addClickListener = function(t) {
                            this.itemListener = t
                        }
                        ,
                        o.getActor = function() {
                            return this
                        }
                        ,
                        n(r, [{
                            key: "display",
                            get: function() {
                                throw new Error("Method not implemented.")
                            }
                        }]),
                        r
                }(r));
                o._RF.pop()
            }
        }
    }
));
