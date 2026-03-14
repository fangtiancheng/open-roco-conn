System.register("chunks:///_virtual/DialogContent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts"], (function(n) {
        var t, e, o, i;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.createClass
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    i = n.NodeExtend
                }
            ],
            execute: function() {
                o._RF.push({}, "8643b/jNRlHaLECK0LjYqvY", "DialogContent", void 0);
                n("DialogContent", function(n) {
                    function o() {
                        var t;
                        return (t = n.call(this) || this).msg = void 0,
                            t.btnOK = void 0,
                            t.btnCancel = void 0,
                            t
                    }
                    t(o, n);
                    var i = o.prototype;
                    return i.dispose = function() {}
                        ,
                        i.adjustSize = function() {}
                        ,
                        i.onOK = function(n) {}
                        ,
                        i.onCancel = function(n) {}
                        ,
                        e(o, [{
                            key: "message",
                            set: function(n) {}
                        }]),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
