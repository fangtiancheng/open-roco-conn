System.register("chunks:///_virtual/LadderMatchView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts", "./global.ts", "./LadderMatchUIPlugin.ts"], (function(e) {
        var t, n, a, i, r, l, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    a = e.cclegacy,
                        i = e.Prefab
                }
                , function(e) {
                    r = e.BasePanel
                }
                , function(e) {
                    l = e.__global
                }
                , function(e) {
                    s = e.default
                }
            ],
            execute: function() {
                a._RF.push({}, "f0314r0KthDWLORWai1t0CI", "LadderMatchView", void 0),
                    e("default", function(e) {
                        function a() {
                            for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
                                a[i] = arguments[i];
                            return (t = e.call.apply(e, [this].concat(a)) || this)._plugin = void 0,
                                t
                        }
                        t(a, e);
                        var r = a.prototype;
                        return r.onInit = function() {
                            this.initLog()
                        }
                            ,
                            r.onShow = function() {
                                console.log("LadderMatchView==onShow"),
                                    l.UI.closeMiniLoading(),
                                    s.target = this._view,
                                null == this._plugin && (this._plugin = new s),
                                    this._plugin.start(),
                                    a.plugin = this._plugin
                            }
                            ,
                            r.onUpdate = function(e) {}
                            ,
                            r.onClose = function() {
                                this._plugin && this._plugin.finalize(),
                                    this._plugin = null,
                                    a.plugin = null
                            }
                            ,
                            r.onDestroy = function() {
                                this._plugin && this._plugin.finalize(),
                                    this._plugin = null,
                                    a.plugin = null
                            }
                            ,
                            r.updateUserInfoPanel = function() {
                                this._plugin && this._plugin.updateInfoPanel()
                            }
                            ,
                            n(a, [{
                                key: "resBundleKey",
                                get: function() {
                                    return "gui"
                                }
                            }, {
                                key: "exportLink",
                                get: function() {
                                    return "prefabs/ladderMatch_1600/LadderMatchUIResMain_1600"
                                }
                            }, {
                                key: "preLoadArr",
                                get: function() {
                                    return {
                                        gui: {
                                            assetType: i,
                                            urls: ["prefabs/ladderMatch_1600/item/fightPetIcon_1600", "prefabs/ladderMatch_1600/item/ContentRank_1600", "prefabs/ladderMatch_1600/item/ContentRecord_1600", "prefabs/ladderMatch_1600/item/RankItem_1600", "prefabs/ladderMatch_1600/item/recordItemIcon_1600", "prefabs/ladderMatch_1600/item/RecordListItem_1600", "prefabs/ladderMatch_1600/ui/UIResDayTask_1600", "prefabs/ladderMatch_1600/ui/UIResHistory_1600", "prefabs/ladderMatch_1600/ui/UIResMatchFail_1600", "prefabs/ladderMatch_1600/ui/UIResRank_1600", "prefabs/ladderMatch_1600/ui/UIResReward_1600", "prefabs/ladderMatch_1600/ui/UIRule_1600", "prefabs/ladderMatch_1600/ui/UIResSeasonReward_1600", "prefabs/ladderMatch_1600/ui/LadderMatchMain_1600"]
                                        }
                                    }
                                }
                            }]),
                            a
                    }(r)).plugin = void 0,
                    a._RF.pop()
            }
        }
    }
));
