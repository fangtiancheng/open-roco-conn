System.register("chunks:///_virtual/RoleOutInSceneP.ts", ["cc", "./ADFCmdsType.ts", "./ProtocolHelper.ts"], (function(e) {
        var n, t, o;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    t = e.ADFCmdsType
                }
                , function(e) {
                    o = e.ProtocolHelper
                }
            ],
            execute: function() {
                n._RF.push({}, "27e2bpha0pDOpoNokZlNmPA", "RoleOutInSceneP", void 0);
                e("RoleOutInSceneP", function() {
                    function e() {}
                    var n = e.prototype;
                    return n.getADFTypes = function() {
                        return [t.T_SOneInScene, t.T_SOneOutScene]
                    }
                        ,
                        n.decode = function(e) {
                            var n = e.body;
                            switch (e.head.cmdID) {
                                case t.T_SOneInScene:
                                    return console.info("有新的人进入场景"),
                                        o.ReadRoleData(n);
                                case t.T_SOneOutScene:
                                    return console.info("有人离开场景"),
                                        n.readUnsignedInt()
                            }
                            return null
                        }
                        ,
                        n.encode = function(e, n) {
                            return null
                        }
                        ,
                        n.getADFType = function() {
                            return 0
                        }
                        ,
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
