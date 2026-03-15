System.register("chunks:///_virtual/MacroCommand.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Notifier.ts"], (function(n) {
        var i, t, o;
        return {
            setters: [function(n) {
                i = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    o = n.Notifier
                }
            ],
            execute: function() {
                t._RF.push({}, "3baafu3EjtIV5a6WNlXbMEi", "MacroCommand", void 0);
                n("MacroCommand", function(n) {
                    function t() {
                        var i;
                        return (i = n.call(this) || this).subCommands = null,
                            i.subCommands = new Array,
                            i.initializeMacroCommand(),
                            i
                    }
                    i(t, n);
                    var o = t.prototype;
                    return o.initializeMacroCommand = function() {}
                        ,
                        o.addSubCommand = function(n) {
                            this.subCommands.push(n)
                        }
                        ,
                        o.execute = function(n) {
                            for (var i = this.subCommands.slice(0), t = this.subCommands.length, o = 0; o < t; o++) {
                                var e = new (0,
                                    i[o]);
                                e.initializeNotifier(this.multitonKey),
                                    e.execute(n)
                            }
                            this.subCommands.splice(0)
                        }
                        ,
                        t
                }(o));
                t._RF.pop()
            }
        }
    }
));
