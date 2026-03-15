System.register("chunks:///_virtual/GuardianPetLvTreeUILogic.ts", ["cc", "./global.ts", "./WindowCloseAction.ts", "./GuardianPetLvTreeWindow.ts"], (function(e) {
        var i, n, o, t;
        return {
            setters: [function(e) {
                i = e.cclegacy
            }
                , function(e) {
                    n = e.__global
                }
                , function(e) {
                    o = e.WindowCloseAction
                }
                , function(e) {
                    t = e.GuardianPetLvTreeWindow
                }
            ],
            execute: function() {
                i._RF.push({}, "3a1936uC39IcoUxQzQoLUkl", "GuardianPetLvTreeUILogic", void 0);
                e("GuardianPetLvTreeUILogic", function() {
                    function e() {
                        this._lvTreeWindow = void 0,
                            this._lvTreeWindow = n.UI.createWindow(t, !0),
                            this._lvTreeWindow.closeAction = o.HIDE,
                            this._lvTreeWindow.close(),
                            this._lvTreeWindow.uiLogic = this
                    }
                    var i = e.prototype;
                    return i.dispose = function() {
                        this._lvTreeWindow.closeAction = o.CLOSE,
                            this._lvTreeWindow.close(),
                            this._lvTreeWindow = null
                    }
                        ,
                        i.opened = function() {
                            return null != this._lvTreeWindow && this._lvTreeWindow.visible
                        }
                        ,
                        i.open = function() {
                            var e = Number(arguments.length <= 0 ? void 0 : arguments[0])
                                , i = Number(arguments.length <= 1 ? void 0 : arguments[1]);
                            this._lvTreeWindow.data = {
                                id: e,
                                lv: i
                            },
                                this._lvTreeWindow.show()
                        }
                        ,
                        i.close = function() {
                            this._lvTreeWindow && this._lvTreeWindow.closeCurWin()
                        }
                        ,
                        e
                }());
                i._RF.pop()
            }
        }
    }
));
