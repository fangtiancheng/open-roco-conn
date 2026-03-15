System.register("chunks:///_virtual/GuardianPetActGCManager.ts", ["cc", "./ClassUtil.ts"], (function(e) {
        var n, t;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    t = e.ClassUtil
                }
            ],
            execute: function() {
                n._RF.push({}, "43925YsdJ9L3bDrMscIJgWY", "GuardianPetActGCManager", void 0),
                    e("GuardianPetActGCManager", function() {
                        function e() {}
                        return e.addGuardianPetGCObject = function(n, t) {
                            var a = e.owner2node(n);
                            if (a && t) {
                                var r = e.ms_mapGCNode[a];
                                r || (r = new Array,
                                    e.ms_mapGCNode[a] = r),
                                r.indexOf(t) < 0 && r.push(t)
                            }
                        }
                            ,
                            e.dispose = function(n) {
                                var t = e.owner2node(n);
                                if (t) {
                                    var a = e.ms_mapGCNode[t];
                                    if (a) {
                                        e.ms_mapGCNode[t] = null,
                                            delete e.ms_mapGCNode[t];
                                        for (var r = 0; r < a.length; ++r) {
                                            a[r].dispose()
                                        }
                                        a.length = 0
                                    }
                                }
                            }
                            ,
                            e.owner2node = function(e) {
                                var n = "";
                                return e ? n = "string" == typeof e ? e : t.getFullName(e) : n
                            }
                            ,
                            e
                    }()).ms_mapGCNode = new Map,
                    n._RF.pop()
            }
        }
    }
));
