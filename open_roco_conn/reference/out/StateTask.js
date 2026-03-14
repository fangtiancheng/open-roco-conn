System.register("chunks:///_virtual/StateTask.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatCallState.ts", "./CombatWaitingState.ts", "./StateEvent.ts"], (function(t) {
        var s, e, a, i, n;
        return {
            setters: [function(t) {
                s = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    a = t.CombatCallState
                }
                , function(t) {
                    i = t.CombatWaitingState
                }
                , function(t) {
                    n = t.StateEvent
                }
            ],
            execute: function() {
                e._RF.push({}, "4c42cQ5uwdOUKr/haLJILL7", "StateTask", void 0);
                t("StateTask", function() {
                    function t() {
                        this._taskList = [],
                            this._tempTask = void 0,
                            this._combatSys = void 0,
                            this._taskState = !1
                    }
                    var e = t.prototype;
                    return e.init = function() {
                        this.pushTask(new a),
                            this.pushTask(new i)
                    }
                        ,
                        e.pushTask = function(t) {
                            if (null == this._combatSys)
                                throw new Event("sys is null!");
                            t.combatSys = this._combatSys,
                                this._taskList.push(t),
                            this._taskState || this.next()
                        }
                        ,
                        e.delTask = function() {}
                        ,
                        e.next = function() {
                            this._taskList.length > 0 ? (this._taskState = !0,
                                this._tempTask = this._taskList.shift(),
                                this._tempTask.addEventListener(n.STATE_EVENT_END, this.stateEndHandler, this),
                                console.log("当前执行task===>>" + this._tempTask.constructor.name),
                                this._tempTask.execute()) : (this._taskState = !1,
                                this.rest(),
                                console.log("当前队列执行结束"))
                        }
                        ,
                        e.stateEndHandler = function(t) {
                            this._tempTask && (this._tempTask.removeEventListener(n.STATE_EVENT_END, this.stateEndHandler, this),
                                this._tempTask.rest(),
                                this._tempTask = null,
                                this.next())
                        }
                        ,
                        e.rest = function() {
                            this._taskList = [],
                                this._tempTask = null,
                                this._taskState = !1
                        }
                        ,
                        s(t, [{
                            key: "combatSys",
                            set: function(t) {
                                this._combatSys = t,
                                    this._taskState = !1
                            }
                        }, {
                            key: "currentState",
                            get: function() {
                                return this._tempTask
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
