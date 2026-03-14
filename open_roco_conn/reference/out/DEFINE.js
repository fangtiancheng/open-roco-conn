System.register("chunks:///_virtual/DEFINE.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./ByteBuffer.ts"], (function(e) {
        var t, r, o, n, i;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    r = e.cclegacy,
                        o = e.Vec2
                }
                , function(e) {
                    n = e.default
                }
                , function(e) {
                    i = e.ByteBuffer
                }
            ],
            execute: function() {
                r._RF.push({}, "eb281h8zFBPKb2M3ZNLIU0k", "DEFINE", void 0);
                var s = e("DEFINE", function() {
                    function e() {}
                    return e.addVersion = function(t) {
                        var r = e.ANGEL_VERSION;
                        return -1 == t.indexOf("?") ? t += "?" + r : t += "&" + r,
                            t
                    }
                        ,
                        e.getVersionXML = function() {
                            return e.verConfXML
                        }
                        ,
                        e.setVersionXML = function(t) {
                            e.verConfXML = t,
                            e.verConfXML && (e.versionBase = e.verConfXML.from,
                                e.versionBase = e.versionBase.replace(/\D*/g, ""))
                        }
                        ,
                        e.getVersionUpdateTime = function() {
                            return e.verConfXML ? String(e.verConfXML.updateTime) : "0"
                        }
                        ,
                        e.addHttps = function(t) {
                            return null == t || "" == t || "https" == e.PROTOCOL_VERSION && 0 == t.indexOf("http://") && (t = t.replace("http://", "https://")),
                                t
                        }
                        ,
                        e.formatFileVersion = function(t, r) {
                            void 0 === r && (r = !0);
                            var o = "res.17roco.qq.com/";
                            if (null == t || "" == t || -1 == t.toLocaleLowerCase().indexOf(o) || -1 != t.indexOf("fileVersion="))
                                return t;
                            "https" == e.PROTOCOL_VERSION && 0 == t.indexOf("http://") && (t = t.replace("http://", "https://"));
                            var n = "";
                            if (e.verConfXML) {
                                var i = t.toLocaleLowerCase().replace(/[\\\/]+/g, "/")
                                    , s = i.indexOf(o);
                                -1 != s && (i = i.slice(s + o.length)),
                                -1 != (s = i.indexOf("?")) && (i = i.slice(0, s))
                            }
                            return r && -1 != (s = (t = (t = (t = t.replace(/[\\\/]+/g, "/")).replace(":/r", "://r")).replace(":/R", "://R")).indexOf("?")) && (t = t.slice(0, s)),
                            e.IS_DEBUG && (n = Math.random().toString()),
                                t += -1 == t.indexOf("?") ? "?" : "&",
                                t += "fileVersion=" + e.versionBase + ("" == n ? "" : "_" + n)
                        }
                        ,
                        e.ReadChars = function(t, r) {
                            return t.readMultiByte(r, e.CHARSET)
                        }
                        ,
                        e.ReadFixedChars = function(t, r) {
                            return t.readFixedString(r, !1, e.CHARSET)
                        }
                        ,
                        e.WriteChars = function(t, r, o) {
                            if (e.byteBuff.allocate(o),
                                e.byteBuff.writeMultiByte(r, e.CHARSET),
                            0 == o && t.writeShort(e.byteBuff.position),
                                t.writeBytes(e.byteBuff, 0, e.byteBuff.position),
                            o > 0)
                                for (var n = o - e.byteBuff.position; n > 0; )
                                    t.writeByte(0),
                                        n--
                        }
                        ,
                        e.ReadString = function(t) {
                            var r = t.readUnsignedShort();
                            return t.readMultiByte(r, e.CHARSET)
                        }
                        ,
                        e.ReadPoint = function(e) {
                            return new o(e.readShort(),e.readShort())
                        }
                        ,
                        e.WritePoint = function(e, t) {
                            e.writeShort(t.x),
                                e.writeShort(t.y)
                        }
                        ,
                        e.getItemType = function(e, t) {
                            return void 0 === t && (t = 0),
                                0 == t ? e >> 24 : e >> 16 & 15
                        }
                        ,
                        e.init = function() {
                            e.COMM_ROOT = "https://res.17roco.qq.com/"
                        }
                        ,
                        t(e, null, [{
                            key: "CDN",
                            get: function() {
                                return n.IS_LOCAL,
                                    "https://res.17roco.qq.com/h5/cdn/"
                            }
                        }, {
                            key: "FLASH_CDN",
                            get: function() {
                                return n.IS_LOCAL,
                                    "https://res.17roco.qq.com/conf/"
                            }
                        }]),
                        e
                }());
                s.IS_DEBUG = 0,
                    s.ANGEL_VERSION = "0.1",
                    s.AVATAR_VERSION = "0.1",
                    s.TIMES_VERSION = "20100506",
                    s.SPIRIT_VER = "0.1",
                    s.SPIRIT_SKILL_VER = "0.1",
                    s.TASK_VER = "0.1",
                    s.HOMESTEAD_VER = "0.1",
                    s.MAGIC_RES_ROOT = "https://res.17roco.qq.com/res/magic/",
                    s.SCENE_RES_ROOT = "https://res.17roco.qq.com/res/scene/",
                    s.ITEM_RES_ROOT = "https://res.17roco.qq.com/res/item/",
                    s.TASK_RES_ROOT = "https://res.17roco.qq.com/res/task2/",
                    s.AVATAR_PREV_ROOT = "https://res.17roco.qq.com/res/avatar/",
                    s.AVATAR_ROOT = "",
                    s.DAZZLE_DRESS_RES_ROOT = "https://res.17roco.qq.com/res/avatar_new/",
                    s.DAZZLE_MOUNT_RES_ROOT = "https://res.17roco.qq.com/res/avatar_new/20/",
                    s.CGI_ROOT = "https://17roco.qq.com/cgi-bin/",
                    s.FASTCGI_ROOT = "https://web2.17roco.qq.com/fcgi-bin/",
                    s.FPS_LOG = "uin=001;time=;scene=",
                    s.PLUGIN_ROOT = "https://res.17roco.qq.com/plugins/",
                    s.COMM_ROOT = "https://res.17roco.qq.com/",
                    s.NPC_RES_ROOT = "https://res.17roco.qq.com/res/npc/",
                    s.H5_RES_ROOT = "https://res.17roco.qq.com/res/h5/",
                    s.POLICYPORT = 843,
                    s.CHARSET = "gb2312",
                    s.L_NICKNAME = 16,
                    s.L_SESSIONKEY = 64,
                    s.L_ROOMNAME = 16,
                    s.AVATAR_MIN_NUM = 15,
                    s.AVATAR_DELAY = 2e3,
                    s.SET_AVATA_VISIBLE = 1,
                    s.byteBuff = new i,
                    s.PROTOCOL_VERSION = "https",
                    s.versionBase = Math.random().toString(),
                    s.verConfXML = void 0,
                    r._RF.pop()
            }
        }
    }
));
