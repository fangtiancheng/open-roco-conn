System.register("chunks:///_virtual/IconTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, i;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
            ],
            execute: function() {
                i._RF.push({}, "8af1dcAUa5FiYv38OQ1T1U7", "IconTips", void 0);
                t("IconTips", function() {
                    function t(t) {
                        this._item = void 0,
                            this._updateViewDescribe = void 0,
                            this._item = t,
                            this._updateViewDescribe = this.initupdateViewDescribe()
                    }
                    var i = t.prototype;
                    return i.initupdateViewDescribe = function() {
                        return {
                            url: this.updateIcon.bind(this),
                            name: this.updateName.bind(this),
                            desc: this.updateDesc.bind(this),
                            count: this.updateCount.bind(this),
                            level: this.updateLevel.bind(this),
                            expireTime: this.updateExpireTime.bind(this),
                            talenState: this.updateTalenState.bind(this),
                            timeStr: this.updateTime.bind(this)
                        }
                    }
                        ,
                        i.updateIcon = function(t) {
                            this._item.onUpdateIcon(t)
                        }
                        ,
                        i.updateName = function(t) {
                            this._item.nameLabel && (this._item.nameLabel.string = null === t ? "" : t)
                        }
                        ,
                        i.updateDesc = function(t) {
                            this._item.descLabel && (this._item.descLabel.string = null === t ? "" : t)
                        }
                        ,
                        i.updateCount = function(t) {
                            this._item.countLabel && (this._item.countLabel.string = null === t ? "" : "" + t)
                        }
                        ,
                        i.updateLevel = function(t) {
                            this._item.levelLabel && (this._item.levelLabel.string = null === t ? "" : "" + t)
                        }
                        ,
                        i.updateExpireTime = function(t) {
                            if (this._item.expireTimeLabel)
                                if (null === t)
                                    this._item.expireTimeLabel.string = "";
                                else {
                                    var e = 0;
                                    "string" == typeof t && (e = parseInt(t));
                                    var i = "" + e;
                                    this._item.expireTimeLabel.string = "有效期至" + i
                                }
                        }
                        ,
                        i.updateTalenState = function(t) {
                            if (this._item.talenState)
                                if (null === t)
                                    this._item.talenState.active = !1;
                                else {
                                    this._item.talenState.active = !0;
                                    for (var e = this._item.talenState.children, i = 0; i < e.length; i++) {
                                        e[i].active = i === t
                                    }
                                }
                        }
                        ,
                        i.updateTime = function(t) {
                            this._item.timeStrLabel && (this._item.timeStrLabel.string = null === t ? "" : t)
                        }
                        ,
                        e(t, [{
                            key: "data",
                            set: function(t) {
                                if (t)
                                    for (var e in t) {
                                        var i = t[e]
                                            , n = this._updateViewDescribe[e];
                                        n && n(i)
                                    }
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
