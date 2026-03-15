System.register("chunks:///_virtual/BaseConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./XML.ts", "./DEFINE.ts", "./CFunction.ts", "./QueueConfsLoading.ts", "./ActivityAPI.ts"], (function(t) {
        var i, n, s, o, a, c, l;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.XML
                }
                , function(t) {
                    o = t.DEFINE
                }
                , function(t) {
                    a = t.CFunction
                }
                , function(t) {
                    c = t.QueueConfsLoading
                }
                , function(t) {
                    l = t.ActivityAPI
                }
            ],
            execute: function() {
                n._RF.push({}, "7a18bB0CmJJO5E5gNrmIoKo", "BaseConfig", void 0);
                t("BaseConfig", function() {
                    function t() {
                        this._isInitaled = void 0,
                            this._params = void 0,
                            this.configNames = void 0,
                            this.qcl = new c,
                            this._callBack = void 0,
                            this._dic = void 0,
                            this._loadCount = 0,
                            this._configCount = 0,
                            this.configData = void 0,
                            this.qcl = new c
                    }
                    var n = t.prototype;
                    return n.init = function(t, i, n) {
                        if (void 0 === n && (n = null),
                            this._callBack = n,
                            this._isInitaled)
                            null != this._callBack && (0 == this._callBack.length ? this._callBack() : 1 == this._callBack.length && this._callBack(this.configData));
                        else {
                            this.configNames = i,
                                this._configCount = i.length;
                            for (var s = 0; s < this._configCount; s++)
                                this.qcl.addConf(i[s], l.getActURLRoot(t) + i[s] + ".xml?" + o.ANGEL_VERSION, !1);
                            this.qcl.start(new a(this.loadResConf,this))
                        }
                        return this._isInitaled
                    }
                        ,
                        n.loadResConf = function() {
                            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                                i[n] = arguments[n];
                            this.configData = i[0],
                                this._params = i[0][this.configNames[this._loadCount]],
                                this.parseConfig(new s(String(this._params)), this.configNames[this._loadCount++]),
                                this._loadCount == this._configCount ? (this._isInitaled = !0,
                                null != this._callBack && (0 == this._callBack.length ? this._callBack() : 1 == this._callBack.length && this._callBack(this.configData))) : this.loadResConf(i[0])
                        }
                        ,
                        n.parseConfig = function(t, i) {
                            return null
                        }
                        ,
                        i(t, [{
                            key: "dictionary",
                            get: function() {
                                return null == this._dic && (this._dic = new Map),
                                    this._dic
                            },
                            set: function(t) {
                                this._dic = t
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
