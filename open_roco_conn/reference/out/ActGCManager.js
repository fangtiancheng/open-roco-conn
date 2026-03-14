System.register("chunks:///_virtual/ActGCManager.ts", ["cc", "./ClassUtil.ts"], (function(e) {
        var t, n;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.ClassUtil
                }
            ],
            execute: function() {
                t._RF.push({}, "d3e46PoT6hJ2bXwkdXco1bQ", "ActGCManager", void 0),
                    e("ActGCManager", function() {
                        function e() {}
                        return e.addGCObject = function(e, t) {
                            var n = this.owner2node(e);
                            if (n && t) {
                                var s = this.ms_mapGCNode[n];
                                s || (s = new Array,
                                    this.ms_mapGCNode[n] = s),
                                s.indexOf(t) < 0 && s.push(t)
                            }
                        }
                            ,
                            e.dispose = function(e) {
                                var t = this.owner2node(e);
                                if (t) {
                                    var n = this.ms_mapGCNode[t];
                                    if (n) {
                                        this.ms_mapGCNode[t] = null,
                                            delete this.ms_mapGCNode[t];
                                        for (var s = 0; s < n.length; ++s) {
                                            n[s].dispose()
                                        }
                                        n.length = 0
                                    }
                                }
                            }
                            ,
                            e.owner2node = function(e) {
                                var t = "";
                                return e ? t = "string" == typeof e ? e : n.getFullName(e) : t
                            }
                            ,
                            e
                    }()).ms_mapGCNode = new Map,
                    t._RF.pop()
            }
        }
    }
));
