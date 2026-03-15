System.register("chunks:///_virtual/NetProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, s;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
            ],
            execute: function() {
                s._RF.push({}, "7c1b8MROONA3oB8yywqkk6k", "NetProcessor", void 0);
                e("NetProcessor", function() {
                    var e = s.prototype;
                    function s(e, t, s) {
                        void 0 === t && (t = null),
                        void 0 === s && (s = null),
                            this._cmd = 0,
                            this._reqBuffer = void 0,
                            this._rspClass = void 0,
                            this.onsuccess = void 0,
                            this.onerror = void 0,
                            this._cmd = e,
                            this._reqBuffer = t,
                            this._rspClass = s
                    }
                    return e.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        e.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        e.read = function(e) {
                            if (null != this._rspClass) {
                                var t = new this._rspClass;
                                t.readExternal(e),
                                    t ? this.onsuccess && this.onsuccess(t) : onerror && onerror("系统繁忙，请稍后再试。")
                            }
                        }
                        ,
                        e.write = function(e) {
                            this._reqBuffer && this._reqBuffer.writeExternal(e)
                        }
                        ,
                        t(s, [{
                            key: "length",
                            get: function() {
                                return null != this._reqBuffer ? this._reqBuffer.encode(null).body.length : 0
                            }
                        }]),
                        s
                }());
                s._RF.pop()
            }
        }
    }
));
