System.register("chunks:///_virtual/SpiritLinkVO.ts", ["cc", "./SpiritDes.ts", "./SpiritBooksDataProxy.ts"], (function(t) {
        var i, s, n;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    s = t.SpiritDes
                }
                , function(t) {
                    n = t.SpiritBooksDataProxy
                }
            ],
            execute: function() {
                i._RF.push({}, "6bd2dUu1FxHK5RoFGa532p9", "SpiritLinkVO", void 0);
                t("SpiritLinkVO", function() {
                    function t() {
                        this.firstID = 0,
                            this.links = [],
                            this.hasFenzhi = !1,
                            this.iconState = 0,
                            this.fenzhiItem = null,
                            this.level = 0
                    }
                    var i = t.prototype;
                    return i.push = function(i) {
                        if (null == this.links && (this.links = []),
                            this.links.push(i),
                        1 == i.EvolutiontoIDs.length) {
                            if ("0" != i.EvolutiontoIDs[0]) {
                                var s = parseInt(i.EvolutiontoIDs[0])
                                    , e = n.getSpiritDesbyID(s);
                                null != e && this.push(e)
                            }
                        } else {
                            this.fenzhiItem = i,
                                this.hasFenzhi = !0;
                            for (var h, l = [], o = 0; o < i.EvolutiontoIDs.length; o++) {
                                var r = new t
                                    , u = parseInt(i.EvolutiontoIDs[o]);
                                null != (h = n.getSpiritDesbyID(u)) && r.push(h),
                                    l.push(r)
                            }
                            this.links.push(l)
                        }
                    }
                        ,
                        i.updataState = function() {
                            this.links.length > 0 && this.links[0]instanceof s && (this.firstID = this.links[0].id);
                            for (var t = 0, i = 0, n = 0; n < this.links.length; n++)
                                if (this.links[n]instanceof s)
                                    this.level++;
                                else
                                    for (var e = this.links[n], h = 0; h < e.length; h++)
                                        t = (i = e[h].links.length) > t ? i : t;
                            this.level += t
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
