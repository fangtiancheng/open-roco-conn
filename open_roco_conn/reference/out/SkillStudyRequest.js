System.register("chunks:///_virtual/SkillStudyRequest.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./global.ts", "./CGIRequest.ts", "./ErrorEvent.ts"], (function(t) {
        var e, n, i, r, o, s, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        i = t.Event
                }
                , function(t) {
                    r = t.DEFINE
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    s = t.CGIRequest
                }
                , function(t) {
                    u = t.ErrorEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "53a391POqtJq5LrKnpfWguh", "SkillStudyRequest", void 0);
                t("SkillStudyRequest", function(t) {
                    function n() {
                        var e;
                        return (e = t.call(this) || this)._url = r.CGI_ROOT + "$CMD_STR$&petId=$PET_ID$&catchTime=$CATCH_TIME$&oldId=$OLD_ID$&newId=$NEW_ID$ ",
                            e.msg = void 0,
                            e
                    }
                    e(n, t);
                    var c = n.prototype;
                    return c.onDataArrived = function(t) {
                        var e = t.result.value;
                        this.msg = t.result.msg.toString(),
                            0 == e ? this.dispatchEvent(new i(s.FINISH)) : this.dispatchEvent(new u(u.ERROR)),
                            o.UI.closeMiniLoading()
                    }
                        ,
                        c.onError = function(t) {
                            o.UI.closeMiniLoading()
                        }
                        ,
                        c.doLoad = function(t, e, n, i, r) {
                            o.UI.createMiniLoading();
                            var s = this._url;
                            s = (s = (s = (s = (s = s.replace("$PET_ID$", e.toString())).replace("$CATCH_TIME$", n)).replace("$OLD_ID$", i.toString())).replace("$NEW_ID$", r.toString())).replace("$CMD_STR$", t),
                                this.load(s)
                        }
                        ,
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
