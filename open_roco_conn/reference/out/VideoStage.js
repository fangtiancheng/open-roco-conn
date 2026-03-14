System.register("chunks:///_virtual/VideoStage.ts", ["cc"], (function(t) {
        var e, r;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    r = t.Sprite
            }
            ],
            execute: function() {
                e._RF.push({}, "808fdbmcclMzozPvm2QdYvH", "VideoStage", void 0);
                t("VideoStage", function() {
                    function t(t) {
                        this.target = void 0,
                            this.rect = void 0,
                            this.target = t
                    }
                    var e = t.prototype;
                    return e.setBG = function(t) {
                        var e = this.target.getComponent(r) || this.target.addComponent(r);
                        return e.spriteFrame = t,
                            e.spriteFrame.addRef(),
                            this.target
                    }
                        ,
                        e.getTarget = function() {
                            return this.target
                        }
                        ,
                        e.shake = function() {}
                        ,
                        e.zoomIn = function(t) {}
                        ,
                        e.zoomOut = function() {}
                        ,
                        e.getRect = function() {
                            return this.rect
                        }
                        ,
                        e.reset = function() {
                            var t = this.target.getComponent(r);
                            t && (t.spriteFrame.decRef(),
                                t.spriteFrame = null)
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
