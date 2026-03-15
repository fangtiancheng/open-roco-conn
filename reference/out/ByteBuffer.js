System.register("chunks:///_virtual/ByteBuffer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts"], (function(t) {
        var i, e, n, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.ByteArray
                }
            ],
            execute: function() {
                n._RF.push({}, "9c8b9skQVRJjblOrelRs6V6", "ByteBuffer", void 0);
                t("ByteBuffer", function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        return (i = t.call.apply(t, [this].concat(n)) || this).limitCapacity = -1,
                            i
                    }
                    i(n, t);
                    var a = n.prototype;
                    return a.allocate = function(i) {
                        t.prototype.allocate.call(this, i),
                            this.limitCapacity = i,
                            this.position = 0
                    }
                        ,
                        a.fill = function(t) {
                            0 != this.limitCapacity && t.readBytes(this, 0, this.limitCapacity)
                        }
                        ,
                        a.copyToByteArray = function() {
                            var t = new r;
                            return this.position = 0,
                                t.writeBytes(this),
                                t.position = 0,
                                t
                        }
                        ,
                        e(n, [{
                            key: "limit",
                            get: function() {
                                return this.limitCapacity
                            }
                        }, {
                            key: "buffLen",
                            get: function() {
                                return -1 == this.limitCapacity ? this.bytesAvailable : this.limitCapacity - this.position
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
