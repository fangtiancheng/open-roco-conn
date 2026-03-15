System.register("chunks:///_virtual/Xml2Json.ts", ["cc", "./BuildLogHelper.ts"], (function(e) {
        var t, n;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.default
                }
            ],
            execute: function() {
                t._RF.push({}, "d3dc1J8AWNO64u3GCPD+5BD", "Xml2Json", void 0);
                e("Xml2Json", function() {
                    function e() {}
                    return e.removeXMLDeclaration = function(e) {
                        return e.replace('<?xml version="1.0" encoding="utf-8" ?>', "")
                    }
                        ,
                        e.checkStringContainsXML = function(e) {
                            var t = '<?xml version="1.0" encoding="utf-8" ?>';
                            return e.includes(t) ? e.replace(t, "") : e
                        }
                        ,
                        e.getJson = function(t, n) {
                            void 0 === n && (n = !0),
                                t = e.checkStringContainsXML(t);
                            var r = n ? t.replace(/\n|\r/g, "") : t
                                , o = (new DOMParser).parseFromString(r, "text/xml").documentElement.childNodes
                                , i = {};
                            return this.nodesToJson(o, i, n),
                                i
                        }
                        ,
                        e.getJsonNew = function(t, n) {
                            void 0 === n && (n = !0),
                                t = e.checkStringContainsXML(t);
                            var r = n ? t.replace(/\n|\r/g, "") : t
                                , o = (new DOMParser).parseFromString(r, "text/xml").documentElement
                                , i = (o.childNodes,
                                {});
                            return this.rootToJson(o, i, n),
                                i
                        }
                        ,
                        e.nodesToJson = function(e, t, n) {
                            void 0 === n && (n = !0);
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r]
                                    , i = {};
                                if (o.nodeType === Node.ELEMENT_NODE) {
                                    var a = o.tagName
                                        , d = o.attributes
                                        , s = !1
                                        , l = o.childNodes;
                                    0 != d.length || !l || 1 != l.length || l[0].nodeType !== Node.TEXT_NODE && l[0].nodeType !== Node.CDATA_SECTION_NODE || (s = !0);
                                    for (var u = 0; d && u < d.length; u++) {
                                        var h = d[u];
                                        this.addAttribute(i, h.name, h.value)
                                    }
                                    if (s) {
                                        var c = n ? l[0].nodeValue.trim() : l[0].nodeValue;
                                        this.addAttribute(t, a, c)
                                    } else
                                        l && l.length > 0 && this.nodesToJson(l, i, n),
                                            this.addAttribute(t, a, i)
                                } else if (o.nodeType === Node.ATTRIBUTE_NODE) {
                                    var v = o;
                                    this.addAttribute(t, v.name, v.value)
                                }
                            }
                            return t
                        }
                        ,
                        e.rootToJson = function(e, t, n) {
                            void 0 === n && (n = !0);
                            var r = e
                                , o = {};
                            if (r.nodeType === Node.ELEMENT_NODE) {
                                var i = r.tagName
                                    , a = r.attributes
                                    , d = !1
                                    , s = r.childNodes;
                                0 != a.length || !s || 1 != s.length || s[0].nodeType !== Node.TEXT_NODE && s[0].nodeType !== Node.CDATA_SECTION_NODE || (d = !0);
                                for (var l = 0; a && l < a.length; l++) {
                                    var u = a[l];
                                    this.addAttribute(o, u.name, u.value)
                                }
                                if (d) {
                                    var h = n ? s[0].nodeValue.trim() : s[0].nodeValue;
                                    this.addAttribute(t, i, h)
                                } else
                                    s && s.length > 0 && this.nodesToJson(s, o, n),
                                        this.addAttribute(t, i, o)
                            } else if (r.nodeType === Node.ATTRIBUTE_NODE) {
                                var c = r;
                                this.addAttribute(t, c.name, c.value)
                            }
                            return t
                        }
                        ,
                        e.addAttribute = function(e, t, r) {
                            if ("string" == typeof r) {
                                var o = r.replace(/\s/g, "");
                                null != o && null != o || (n.IS_LOCAL,
                                1 == n.IS_LOCAL && console.error("Xml2Json:参数错误"))
                            }
                            if (e[t])
                                if (e[t]instanceof Array)
                                    e[t].push(r);
                                else {
                                    var i = [e[t]];
                                    i.push(r),
                                        e[t] = i
                                }
                            else
                                e[t] = r
                        }
                        ,
                        e.getJsonWithArray = function(t, n) {
                            void 0 === n && (n = !0),
                                t = e.checkStringContainsXML(t);
                            var r = n ? t.replace(/\n|\r/g, "") : t
                                , o = (new DOMParser).parseFromString(r, "text/xml").documentElement.childNodes
                                , i = {};
                            return this.nodesToJsonWithArray(o, i, n),
                                i
                        }
                        ,
                        e.nodesToJsonWithArray = function(e, t, n) {
                            void 0 === n && (n = !0);
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r]
                                    , i = {};
                                if (o.nodeType === Node.ELEMENT_NODE) {
                                    var a = o.tagName
                                        , d = o.attributes
                                        , s = !1
                                        , l = o.childNodes;
                                    0 != d.length || !l || 1 != l.length || l[0].nodeType !== Node.TEXT_NODE && l[0].nodeType !== Node.CDATA_SECTION_NODE || (s = !0);
                                    for (var u = 0; d && u < d.length; u++) {
                                        var h = d[u];
                                        this.addAttributeWithArray(i, h.name, h.value)
                                    }
                                    if (s) {
                                        var c = n ? l[0].nodeValue.trim() : l[0].nodeValue;
                                        this.addAttributeWithArray(t, a, c)
                                    } else
                                        l && l.length > 0 && this.nodesToJsonWithArray(l, i, n),
                                            this.addAttributeWithArray(t, a, i)
                                } else if (o.nodeType === Node.ATTRIBUTE_NODE) {
                                    var v = o;
                                    this.addAttributeWithArray(t, v.name, v.value)
                                }
                            }
                            return t
                        }
                        ,
                        e.addAttributeWithArray = function(e, t, r) {
                            if ("string" == typeof r) {
                                null != r && null != r || (n.IS_LOCAL,
                                1 == n.IS_LOCAL && console.error("Xml2Json:参数错误"))
                            }
                            if (e[t])
                                if (e[t]instanceof Array)
                                    e[t].push(r);
                                else {
                                    var o = [e[t]];
                                    o.push(r),
                                        e[t] = o
                                }
                            else
                                e[t] = [r]
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
