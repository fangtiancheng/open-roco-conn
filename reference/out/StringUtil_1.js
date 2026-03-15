System.register("chunks:///_virtual/StringUtil2.ts", ["cc"], (function(t) {
        var r;
        return {
            setters: [function(t) {
                r = t.cclegacy
            }
            ],
            execute: function() {
                r._RF.push({}, "926adkFuVNHGKBUTf54SRJj", "StringUtil", void 0);
                t("StringUtil", function() {
                    function t() {}
                    return t.getUtf8String = function(t) {
                        return new TextDecoder("utf-8").decode(t)
                    }
                        ,
                        t.truncateString = function(t, r, e) {
                            return t.length < r || r <= 3 ? t : t.substring(0, r - 3) + "..."
                        }
                        ,
                        t.formatTime = function(t, r) {
                            if (void 0 === r && (r = "yyyy-mm-dd hh:ii:ss"),
                                !t)
                                return "";
                            var e = new Date(1e3 * t)
                                , n = e.getFullYear()
                                , i = e.getMonth() + 1
                                , o = e.getDate()
                                , c = e.getHours()
                                , a = e.getMinutes()
                                , s = e.getSeconds();
                            return r.replace(/yyyy/g, n.toString()).replace(/mm/g, i < 10 ? "0" + i : i.toString()).replace(/dd/g, o < 10 ? "0" + o : o.toString()).replace(/hh/g, c < 10 ? "0" + c : c.toString()).replace(/ii/g, a < 10 ? "0" + a : a.toString()).replace(/ss/g, s < 10 ? "0" + s : s.toString())
                        }
                        ,
                        t.convertFlashRichTextToCocosCreator = function(t, r, e, n) {
                            if (void 0 === r && (r = 0),
                            void 0 === e && (e = !0),
                            void 0 === n && (n = "#004fb2"),
                                !t)
                                return "";
                            var i = t;
                            i.startsWith('"') && i.endsWith('"') && (i = i.substring(1, i.length - 1));
                            for (var o, c = "", a = /<FONT[^>]*>([\s\S]*?)<\/FONT>/g; null !== (o = a.exec(i)); ) {
                                var s = o[0]
                                    , g = o[1]
                                    , l = g;
                                if (e)
                                    l = "<color=" + n + ">" + l + "</color>";
                                else {
                                    var u = s.match(/COLOR="(#[0-9A-Fa-f]+)"/);
                                    u && u[1] && (l = "<color=" + u[1] + ">" + l + "</color>")
                                }
                                var f = s.match(/SIZE="(\d+)"/);
                                if (f && f[1])
                                    l = "<size=" + (parseInt(f[1]) + r) + ">" + l + "</size>";
                                "" === g.trim() && (l = "<br/>"),
                                    c += l
                            }
                            c = c.replace(/\s{2,}/g, " ");
                            var h, v = [], d = /<P[^>]*>([\s\S]*?)<\/P>/g;
                            for ((i = t).startsWith('"') && i.endsWith('"') && (i = i.substring(1, i.length - 1)); null !== (h = d.exec(i)); )
                                v.push(h[0]);
                            if (v.length > 0) {
                                c = "";
                                for (var S = 0; S < v.length; S++) {
                                    for (var p = v[S], m = "", F = !0, y = /<FONT[^>]*>([\s\S]*?)<\/FONT>/g, b = void 0; null !== (b = y.exec(p)); ) {
                                        var T = b[0]
                                            , O = b[1]
                                            , x = O;
                                        if ("" !== O.trim() && (F = !1),
                                            e)
                                            x = "<color=" + n + ">" + x + "</color>";
                                        else {
                                            var R = T.match(/COLOR="(#[0-9A-Fa-f]+)"/);
                                            R && R[1] && (x = "<color=" + R[1] + ">" + x + "</color>")
                                        }
                                        var N = T.match(/SIZE="(\d+)"/);
                                        if (N && N[1])
                                            x = "<size=" + (parseInt(N[1]) + r) + ">" + x + "</size>";
                                        m += x
                                    }
                                    c += m,
                                    (S < v.length - 1 || !F) && (c += "<br/>")
                                }
                            }
                            return c = c.replace(/<br\/><br\/>/g, "<br/>")
                        }
                        ,
                        t
                }());
                r._RF.pop()
            }
        }
    }
));
