System.register("chunks:///_virtual/AngelResourceSystem.ts", ["cc", "./Constants.ts", "./ResLoadTaskManager.ts"], (function(e) {
        var t, r, n;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    r = e.Constants
                }
                , function(e) {
                    n = e.ResLoadTaskManager
                }
            ],
            execute: function() {
                t._RF.push({}, "b51598B7sxDH4DEPLqt3QZB", "AngelResourceSystem", void 0);
                e("AngelResourceSystem", function() {
                    function e() {
                        this.resAdapters = void 0,
                            this.resLoadTaskManager = void 0,
                            this.objPools = void 0,
                            this.resAdapters = new Map,
                            this.resLoadTaskManager = new n,
                            this.resLoadTaskManager.createVipChannel(r.SMALL_RES),
                            this.objPools = new Map
                    }
                    var t = e.prototype;
                    return t.getMagicClsByID = function(e) {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        t.getEffectClsByID = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        t.borrowObj = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        t.giveBackObj = function(e, t, r) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        t.borrowObjByUrl = function(e, t) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        t.giveBackObjByUrl = function(e, t, r) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        t.getResLoadTaskManager = function() {
                            return this.resLoadTaskManager
                        }
                        ,
                        t.addResAdapter = function(e) {
                            if (null == e || null != this.getResAdapter(e.getAdapterResType()))
                                throw new Error("类型为" + e.getAdapterResType() + "的资源适配器已经加入!!");
                            this.resAdapters[e.getAdapterResType()] = e,
                            CONFIG.DEBUG && console.log("注册 ResAdapter " + e.getAdapterResType() + "为:" + e),
                                e.setResLoadTaskManager(this.resLoadTaskManager),
                                e.initialize()
                        }
                        ,
                        t.getResAdapter = function(e) {
                            return this.resAdapters[e]
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
