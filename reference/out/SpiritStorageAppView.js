System.register("chunks:///_virtual/SpiritStorageAppView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./BasePanel.ts", "./NodeUtils.ts", "./SpiritStorageApp.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, i, n, r, o, s, p, a, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t.Prefab
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    s = t.BasePanel
                }
                , function(t) {
                    p = t.NodeUtils
                }
                , function(t) {
                    a = t.SpiritStorageApp
                }
                , function(t) {
                    u = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "ae50dhmxWlEB4p/f1iRAySG", "SpiritStorageAppView", void 0);
                t("default", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.afterConstructor = function() {
                        this.__name = "SpiritStorageAppView"
                    }
                        ,
                        s.onInit = function() {
                            this.initLog()
                        }
                        ,
                        s.onShow = function() {
                            if (o.UI.closeMiniLoading(),
                            1 == u.IS_LOCAL && console.info("SpiritStorageAppView==onShow"),
                            this._view && !this._view.parent) {
                                this.container.addChild(this._view),
                                    p.setChildIndex(this.container, this._view, this.container.children.length - 1);
                                var t = this._view.getComponent(a);
                                t && t.onStart()
                            }
                        }
                        ,
                        s.onUpdate = function(t) {
                            if (this._view) {
                                var e = this._view.getComponent(a);
                                e && e.setParams(t)
                            }
                        }
                        ,
                        s.onClose = function() {}
                        ,
                        s.onDestroy = function() {}
                        ,
                        i(n, [{
                            key: "container",
                            get: function() {
                                return o.SysAPI.getUISysAPI().getWindowContainer()
                            }
                        }, {
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/SpiritStorageAppUI_1600"
                            }
                        }, {
                            key: "preLoadArr",
                            get: function() {
                                return {
                                    gui: {
                                        assetType: r,
                                        urls: ["prefabs/spriteStore/SpiritContainerUI_1600", "prefabs/spriteStore/SpiritInformationBarUI_1600", "prefabs/spriteStore/SearchBarSpriteUI_1600", "prefabs/spriteStore/UIResAlertNotDiamond_1600", "prefabs/common/EquipTipsRes_0", "prefabs/common/EquipTipsRes_1"]
                                    }
                                }
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
