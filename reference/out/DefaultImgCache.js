System.register("chunks:///_virtual/DefaultImgCache.ts", ["cc"], (function(i) {
        var t, s;
        return {
            setters: [function(i) {
                t = i.cclegacy,
                    s = i.isValid
            }
            ],
            execute: function() {
                t._RF.push({}, "5b257qNfwpDUqV8jv0GMgNq", "DefaultImgCache", void 0);
                i("DefaultImgCache", function() {
                    function i() {
                        this.imgsDict = void 0,
                            this.imgsDict = new Map
                    }
                    var t = i.prototype;
                    return t.save = function(i, t) {
                        var s, e = this.imgsDict[i];
                        (console.log("[DefaultImgCache] save ", i, t, e),
                        null != e) ? (t.destroy(),
                        null == (s = t.texture) || s.destroy()) : this.imgsDict[i] = e = t;
                        return e
                    }
                        ,
                        t.find = function(i) {
                            return this.imgsDict[i]
                        }
                        ,
                        t.checkCache = function() {
                            for (var i in this.imgsDict) {
                                var t = this.imgsDict[i];
                                console.log("checkCache==" + i + "==" + s(t))
                            }
                        }
                        ,
                        t.disposeImage = function(i) {
                            var t = this.imgsDict[i];
                            null != t && t.destroy(),
                                this.imgsDict[i] = null
                        }
                        ,
                        t.compareAndDispose = function(i) {
                            for (var t in this.imgsDict)
                                -1 == i.indexOf(t) && this.disposeImage(t)
                        }
                        ,
                        t.disposeAll = function() {
                            for (var i in this.imgsDict) {
                                var t = this.imgsDict[i];
                                null != t && t.destroy()
                            }
                            this.imgsDict = null
                        }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
