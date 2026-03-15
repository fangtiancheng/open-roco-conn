System.register("chunks:///_virtual/PetEvoAndSkill.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CGISkillChangeScript.ts", "./EventDispatcher.ts"], (function(n) {
        var t, e, i, s, r, l;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.createClass,
                    i = n.assertThisInitialized
            }
                , function(n) {
                    s = n.cclegacy
                }
                , function(n) {
                    r = n.CGISkillChangeScript
                }
                , function(n) {
                    l = n.EventDispatcher
                }
            ],
            execute: function() {
                s._RF.push({}, "a1226d+aSBAArnzG8Y/4tcN", "PetEvoAndSkill", void 0);
                var c = function() {};
                n("PetEvoAndSkill", function(n) {
                    function s(t) {
                        var e;
                        if ((e = n.call(this) || this).script = new r,
                            e._handle = void 0,
                            e._returnFun = void 0,
                        null == t)
                            throw new Error("PetEvoAndSkill can not be instantiated.");
                        return e.script.addEventListener(r.CLOSE, e.onClose, i(e)),
                            e
                    }
                    t(s, n);
                    var l = s.prototype;
                    return l.onClose = function(n) {
                        null != this._handle && this._handle(),
                        null != this._returnFun && this._returnFun(this.script.success)
                    }
                        ,
                        l.getDisplay = function() {
                            return null
                        }
                        ,
                        l.getBGRect = function() {
                            return null
                        }
                        ,
                        l.setParams = function(n) {
                            var t = n
                                , e = t.id
                                , i = t.oldSkill
                                , s = t.newSkill
                                , r = t.catchTime
                                , l = t.cmd;
                            this._returnFun = t.onOver,
                                this.script.setCGIData(l, e, r, i, s),
                                this.script.execute()
                        }
                        ,
                        l.getCloseBtnPos = function() {
                            return null
                        }
                        ,
                        l.addCloseHandler = function(n) {
                            this._handle = n
                        }
                        ,
                        l.getDragArea = function() {
                            return null
                        }
                        ,
                        l.dispose = function() {}
                        ,
                        l.setup = function() {}
                        ,
                        l.activate = function() {}
                        ,
                        l.inactivate = function() {}
                        ,
                        l.setAngelSysAPI = function(n) {}
                        ,
                        e(s, null, [{
                            key: "Instance",
                            get: function() {
                                return null == s.instance && (s.instance = new s(new c)),
                                    s.instance
                            }
                        }]),
                        s
                }(l)).instance = void 0,
                    s._RF.pop()
            }
        }
    }
));
