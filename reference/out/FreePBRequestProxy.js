System.register("chunks:///_virtual/FreePBRequestProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts"], (function(t) {
        var e, u, o;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    u = t.cclegacy
                }
                , function(t) {
                    o = t.ByteArray
                }
            ],
            execute: function() {
                u._RF.push({}, "89a9elmIJBP5Y9xEu8GbsK+", "FreePBRequestProxy", void 0),
                    t("FreePBRequestProxy", function() {
                        var t = u.prototype;
                        function u(t, e, u) {
                            if (this.m_inputBuffer = void 0,
                                this.m_outputBuffer = void 0,
                                this.m_protocolHash = void 0,
                                this.m_callbackFunc = void 0,
                                this.m_callbackFunc = u,
                                this.m_protocolHash = e,
                                this.m_outputBuffer = new o,
                                t) {
                                var n = t.writeProtoBuf();
                                n && n.writeExternal(this.m_outputBuffer)
                            }
                            this.m_outputBuffer.position = 0
                        }
                        return t.IAngelDataOutputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                        }
                            ,
                            t.IAngelDataInputJudge = function() {
                                CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                            }
                            ,
                            t.onReqReplyLocal = function() {}
                            ,
                            u.onReqReply = function(t) {
                                t.onReqReplyLocal()
                            }
                            ,
                            t.read = function(t) {
                                this.m_inputBuffer = new o,
                                    t.readBytes(this.m_inputBuffer, 0, t.bytesAvailable)
                            }
                            ,
                            t.write = function(t) {
                                t.writeBytes(this.m_outputBuffer),
                                    this.m_outputBuffer = null
                            }
                            ,
                            u.isProtoBufId = function(t) {
                                return -1 != u.mCmds.indexOf(t)
                            }
                            ,
                            u.addCmd = function(t) {
                                -1 == u.mCmds.indexOf(t) && u.mCmds.push(t)
                            }
                            ,
                            e(u, [{
                                key: "protocolHash",
                                get: function() {
                                    return Number(this.m_protocolHash)
                                }
                            }, {
                                key: "length",
                                get: function() {
                                    return this.m_outputBuffer ? this.m_outputBuffer.length : 0
                                }
                            }]),
                            u
                    }()).mCmds = [],
                    u._RF.pop()
            }
        }
    }
));
