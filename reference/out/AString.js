System.register("chunks:///_virtual/AString.ts", ["cc"], (function(n) {
        var e, r;
        return {
            setters: [function(n) {
                e = n.cclegacy,
                    r = n.Vec2
            }
            ],
            execute: function() {
                e._RF.push({}, "c7fbbEFSuhKgpiITh1VerM1", "AString", void 0);
                var t = n("AString", function() {
                    function n() {}
                    return n.Trim = function(n) {
                        return n.replace(/(^\s*)|(\s*$)/g, "")
                    }
                        ,
                        n.LTrim = function(n) {
                            return n.replace(/(^\s*)/g, "")
                        }
                        ,
                        n.RTrim = function(n) {
                            return n.replace(/(\s*$)/g, "")
                        }
                        ,
                        n.getFileName = function(n) {
                            var e = n.lastIndexOf("/");
                            return -1 == e && (e = n.lastIndexOf("\\")),
                                n.substring(e + 1, n.length)
                        }
                        ,
                        n.equalsIgnoreCase = function(n, e) {
                            return n.toLowerCase() == e.toLowerCase()
                        }
                        ,
                        n.equals = function(n, e) {
                            return n == e
                        }
                        ,
                        n.isEmail = function(n) {
                            return !0
                        }
                        ,
                        n.isNumber = function(n) {
                            return null != n && !isNaN(Number(n))
                        }
                        ,
                        n.isDouble = function(e) {
                            e = n.Trim(e);
                            return null != /^[-\+]?\d+(\.\d+)?$/.exec(e)
                        }
                        ,
                        n.isInteger = function(e) {
                            if (null == e)
                                return !1;
                            e = n.Trim(e);
                            return null != /^[-\+]?\d+$/.exec(e)
                        }
                        ,
                        n.isEnglish = function(e) {
                            if (null == e)
                                return !1;
                            e = n.Trim(e);
                            return null != /^[A-Za-z]+$/.exec(e)
                        }
                        ,
                        n.isChinese = function(e) {
                            if (null == e)
                                return !1;
                            e = n.Trim(e);
                            return null != /^[\u0391-\uFFE5]+$/.exec(e)
                        }
                        ,
                        n.isDoubleChar = function(e) {
                            if (null == e)
                                return !1;
                            e = n.Trim(e);
                            return null != /^[^\x00-\xff]+$/.exec(e)
                        }
                        ,
                        n.hasChineseChar = function(e) {
                            if (null == e)
                                return !1;
                            e = n.Trim(e);
                            return null != /[^\x00-\xff]/.exec(e)
                        }
                        ,
                        n.hasAccountChar = function(e, r) {
                            return void 0 === r && (r = 15),
                            null != e && (r < 10 && (r = 15),
                                e = n.Trim(e),
                            null != new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]{0," + r + "}$","").exec(e))
                        }
                        ,
                        n.isURL = function(e) {
                            if (null == e)
                                return !1;
                            e = n.Trim(e).toLowerCase();
                            var r = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"\"])*$/.exec(e)
                                , t = /^https:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"\"])*$/.exec(e);
                            return null != r || null != t
                        }
                        ,
                        n.isWhitespace = function(n) {
                            switch (n) {
                                case " ":
                                case "\t":
                                case "\r":
                                case "\n":
                                case "\f":
                                    return !0;
                                default:
                                    return !1
                            }
                        }
                        ,
                        n.beginsWith = function(n, e) {
                            return e == n.substring(0, e.length)
                        }
                        ,
                        n.endsWith = function(n, e) {
                            return e == n.substring(n.length - 1, e.length)
                        }
                        ,
                        n.remove = function(e, r) {
                            return n.replace(e, r, '"')
                        }
                        ,
                        n.replace = function(n, e, r) {
                            return n.split(e).join(r)
                        }
                        ,
                        n.replaceAt = function(n, e, r, t) {
                            return r = Math.max(r, 0),
                                t = Math.min(t, n.length),
                            n.substr(0, r) + e + n.substr(t, n.length)
                        }
                        ,
                        n.removeAt = function(e, r, t) {
                            return n.replaceAt(e, "", r, t)
                        }
                        ,
                        n.fixNewlines = function(n) {
                            return n.replace(/\r\n/gm, "\n")
                        }
                        ,
                        n.TranArgs = function(e, r) {
                            return null == r || -1 == e.indexOf("{") || -1 == e.indexOf("}") || (n.__Vars = r,
                                e = e.replace(n.__Exp, n.__Method),
                                n.__Vars = null),
                                e
                        }
                        ,
                        n.__Method = function() {
                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                r[t] = arguments[t];
                            return n.__Vars[r[1]]
                        }
                        ,
                        n.TranPoint = function(n) {
                            var e = n.indexOf("|");
                            if (-1 != e) {
                                var t = Number(n.substring(0, e))
                                    , u = Number(n.substring(e + 1, n.length));
                                return new r(t,u)
                            }
                            return null
                        }
                        ,
                        n
                }());
                t.__Vars = void 0,
                    t.__Exp = /\{([Z-z$_][^\}\{]+)\}/g,
                    e._RF.pop()
            }
        }
    }
));
