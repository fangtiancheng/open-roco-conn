System.register("chunks:///_virtual/StringUtil.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "256daMJlQ9BGLaNskq3Avut", "StringUtil", void 0);
                var e = t("StringUtil", function() {
                    function t() {}
                    return t.substitute = function(t) {
                        if (null == t)
                            return "";
                        for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                            e[r - 1] = arguments[r];
                        var o, E = e.length;
                        1 == E && e[0] ? E = (o = e).length : o = e;
                        for (var i = 0; i < E; i++)
                            t = t.replace(new RegExp("\\{" + i + "\\}","g"), o[i]);
                        return t
                    }
                        ,
                        t.isStringInRange = function(n, e) {
                            var r, o = 0, E = 0;
                            for (o = 0; o < n.length; ++o)
                                if (E = n.charCodeAt(o),
                                    r = !1,
                                1 == Boolean(e & t.RANGE_NUMBERS) && E >= t.CHAR_CODE_0 && E <= t.CHAR_CODE_9 && (r = !0),
                                0 == r && 1 == Boolean(e & t.RANGE_LOWER_LETTER) && E >= t.CHAR_CODE_LOWER_A && E <= t.CHAR_CODE_LOWER_Z && (r = !0),
                                0 == r && 1 == Boolean(e & t.RANGE_UPPER_LETTER) && E >= t.CHAR_CODE_UPPER_A && E <= t.CHAR_CODE_UPPER_Z && (r = !0),
                                0 == r)
                                    return !1;
                            return !0
                        }
                        ,
                        t.getCookie = function(t) {
                            var n = document.cookie.split(";").find((function(n) {
                                    return n.trim().startsWith(t + "=")
                                }
                            ));
                            return n ? n.split("=")[1].trim() : ""
                        }
                        ,
                        t.setCookie = function(t, n, e) {
                            void 0 === e && (e = 1);
                            var r = new Date(Date.now() + 864e5 * e).toUTCString();
                            document.cookie = t + "=" + n + "; expires=" + r + "; path=/"
                        }
                        ,
                        t.getUrlParams = function(t) {
                            var n = new URL(window.location.href);
                            return new URLSearchParams(n.search).get(t)
                        }
                        ,
                        t.caculateMoneyStr = function(t) {
                            return t > 99999999 ? Math.round(t / 1e7) / 10 + "亿" : t > 999999 ? Math.round(t / 1e3) / 10 + "万" : t.toString()
                        }
                        ,
                        t.isClass = function(t) {
                            return "function" == typeof t && !!t.prototype && t.prototype.constructor === t
                        }
                        ,
                        t.getQualifiedClassName = function(t) {
                            return "string" == typeof t ? t : this.isClass(t) ? t.constructor.name : ""
                        }
                        ,
                        t
                }());
                e.ms_sSpace = "",
                    e.RANGE_NUMBERS = 1,
                    e.RANGE_LOWER_LETTER = 2,
                    e.RANGE_UPPER_LETTER = 4,
                    e.RANGE_LETTERS = e.RANGE_LOWER_LETTER | e.RANGE_UPPER_LETTER,
                    e.CHAR_CODE_0 = "0".charCodeAt(0),
                    e.CHAR_CODE_9 = "9".charCodeAt(0),
                    e.CHAR_CODE_LOWER_A = "a".charCodeAt(0),
                    e.CHAR_CODE_LOWER_Z = "z".charCodeAt(0),
                    e.CHAR_CODE_UPPER_A = "A".charCodeAt(0),
                    e.CHAR_CODE_UPPER_Z = "Z".charCodeAt(0),
                    n._RF.pop()
            }
        }
    }
));
