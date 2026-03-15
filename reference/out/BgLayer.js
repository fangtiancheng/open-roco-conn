System.register("chunks:///_virtual/BgLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts"], (function(i) {
        var t, e, s, n, u;
        return {
            setters: [function(i) {
                t = i.inheritsLoose
            }
                , function(i) {
                    e = i.cclegacy,
                        s = i.ImageAsset,
                        n = i.Node
                }
                , function(i) {
                    u = i.AImage
                }
            ],
            execute: function() {
                e._RF.push({}, "6a883kkSVpJCY2DNBNpROyq", "BgLayer", void 0);
                i("BgLayer", function(i) {
                    function e(t) {
                        var e;
                        return (e = i.call(this) || this)._bgDic = void 0,
                            e._bdaDic = void 0,
                            e._bgCount = 0,
                            e.resModule = void 0,
                            e.resModule = t,
                            e._bgDic = new Map,
                            e._bdaDic = new Map,
                            e
                    }
                    t(e, i);
                    var n = e.prototype;
                    return n.reset = function() {
                        this.removeBg(0),
                            this.removeBg(1),
                            this._bgCount = 0
                    }
                        ,
                        n.createBg = function(i, t) {
                            if (null == this._bgDic[t] || null == this._bgDic[t]) {
                                var e = this.resModule.borrowSuperSkillBg(i);
                                if (e && e instanceof s) {
                                    this._bgCount++,
                                        this._bdaDic[t] = e;
                                    var n = new u;
                                    n.setSource(e),
                                        this.addChild(n),
                                        this._bgDic[t] = n,
                                        this.updateMask()
                                }
                            }
                        }
                        ,
                        n.removeBg = function(i) {
                            if (null != this._bgDic[i] && null != this._bgDic[i]) {
                                null != this._bdaDic[i] && null != this._bdaDic[i] && (this.resModule.giveBackSuperSkillBg(this._bdaDic[i].name),
                                    this._bdaDic[i] = null,
                                    delete this._bdaDic[i]),
                                    this._bgCount--;
                                var t = this._bgDic[i];
                                this._bgDic[i] = null,
                                    delete this._bgDic[i],
                                t && t.parent && t.parent.removeChild(t),
                                    t = null,
                                    this.updateMask()
                            }
                        }
                        ,
                        n.updateMask = function() {
                            for (var i in this._bgDic)
                                this._bgCount > 1 ? this._bgDic[i].mask = this.createMask(Number(i)) : this._bgDic[i].mask = null
                        }
                        ,
                        n.createMask = function(i) {
                            return null
                        }
                        ,
                        e
                }(n));
                e._RF.pop()
            }
        }
    }
));
