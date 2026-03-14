System.register("chunks:///_virtual/CombatInfoTxtLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, n, r, i, o, s, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        i = t.RichText,
                        o = t.Label
                }
                , function(t) {
                    s = t.AgentNode
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                r._RF.push({}, "11bf8m73ppIt6b+248ptAx1", "CombatInfoTxtLogic", void 0);
                t("CombatInfoTxtLogic", function(t) {
                    function r(e) {
                        var n;
                        return (n = t.call(this, e) || this)._target = e,
                            n.reset(),
                            n
                    }
                    e(r, t);
                    var s = r.prototype;
                    return s.getTarget = function() {
                        return this
                    }
                        ,
                        s.add = function(t) {}
                        ,
                        s.setVisible = function(t) {
                            this._target.active = t
                        }
                        ,
                        s.getVisible = function() {
                            return this.target.active
                        }
                        ,
                        s.reset = function() {
                            this._target.getComponent(i).string = ""
                        }
                        ,
                        n(r, [{
                            key: "scrollV",
                            get: function() {
                                return 0
                            },
                            set: function(t) {
                                this._target
                            }
                        }, {
                            key: "maxScrollV",
                            get: function() {
                                return 0
                            },
                            set: function(t) {
                                if (!this._target)
                                    throw new Error("[" + this.constructor.name + "]'s function [set maxScrollV] params is null.")
                            }
                        }, {
                            key: "htmlText",
                            get: function() {
                                var t = this._target.getComponent(i);
                                if (t)
                                    return t.string;
                                var e = this._target.getComponent(o);
                                return e ? e.string : ""
                            },
                            set: function(t) {
                                if (this._target || c.IS_LOCAL,
                                    !this._target)
                                    throw new Error("[" + this.constructor.name + "]'s function [set htmlText] params is null.");
                                var e = this._target.getComponent(i);
                                if (!e)
                                    throw new Error("[" + this.constructor.name + "]'s function [[set htmlText] RichText is not exist.");
                                e.string = t + "\n"
                            }
                        }]),
                        r
                }(s));
                r._RF.pop()
            }
        }
    }
));
