System.register("chunks:///_virtual/GuardianPetUICtlBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GuardianPetGCObject.ts", "./AgentNode.ts"], (function(t) {
        var e, n, i, r, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.GuardianPetGCObject
                }
                , function(t) {
                    s = t.AgentNode
                }
            ],
            execute: function() {
                i._RF.push({}, "23a3dbBijVADZXp83c3H/uk", "GuardianPetUICtlBase", void 0);
                t("GuardianPetUICtlBase", function(t) {
                    e(r, t);
                    var i = r.prototype;
                    function r(e, n, i, r) {
                        var s;
                        return void 0 === n && (n = 0),
                        void 0 === i && (i = ""),
                        void 0 === r && (r = null),
                            (s = t.call(this, r) || this).m_res = void 0,
                            s.m_index = void 0,
                            s.m_id = "",
                            s.m_constraints = void 0,
                            s.m_lstBindProperty = void 0,
                            s.m_mapListener = new Map,
                            s.m_res = s.createAgentNode(e),
                            s.m_index = n,
                            s.m_id = i,
                        s.m_res && s.m_res.gotoAndStop(1),
                            s
                    }
                    return i.createAgentNode = function(t) {
                        return new s(t)
                    }
                        ,
                        i.dispose = function() {
                            this.removeAllEventListener()
                        }
                        ,
                        i.removeAllEventListener = function(t) {}
                        ,
                        i.bindProperty = function(t, e, n) {
                            var i;
                            null == this.m_lstBindProperty && (this.m_lstBindProperty = new Array);
                            for (var r = 0; r < this.m_lstBindProperty.length && (i = this.m_lstBindProperty[r]).mine != t; ++r)
                                ;
                            r < this.m_lstBindProperty.length ? (i.data = e,
                                i.property = n) : ((i = new o).mine = t,
                                i.data = e,
                                i.property = n,
                                this.m_lstBindProperty.push(i))
                        }
                        ,
                        i.unbindAllProperty = function() {
                            this.m_lstBindProperty && (this.m_lstBindProperty.length = 0)
                        }
                        ,
                        i.updateAllProperty = function() {
                            if (this.m_lstBindProperty)
                                for (var t, e = 0; e < this.m_lstBindProperty.length; ++e)
                                    this[(t = this.m_lstBindProperty[e]).mine] = t.data[t.property]
                        }
                        ,
                        i.updateProperty = function(t) {
                            var e;
                            if (void 0 === t && (t = ""),
                                this.m_lstBindProperty)
                                if ("" == t || null == t)
                                    this.updateAllProperty();
                                else
                                    for (var n = 0; n < this.m_lstBindProperty.length; ++n)
                                        if ((e = this.m_lstBindProperty[n]).mine == t) {
                                            this[e.mine] = e.data[e.property];
                                            break
                                        }
                        }
                        ,
                        i.setToolTipsPos = function(t) {
                            this.res.toolTipsPos = t
                        }
                        ,
                        n(r, [{
                            key: "res",
                            get: function() {
                                return this.m_res
                            }
                        }, {
                            key: "index",
                            get: function() {
                                return this.m_index
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return ""
                            }
                        }, {
                            key: "constraints",
                            get: function() {
                                return this.m_constraints
                            },
                            set: function(t) {
                                this.m_constraints = t
                            }
                        }, {
                            key: "tooltips",
                            set: function(t) {
                                this.res.tooltip = t
                            }
                        }, {
                            key: "numChildren",
                            get: function() {
                                return this.m_res.numChildren
                            }
                        }, {
                            key: "x",
                            get: function() {
                                return this.m_res.x
                            },
                            set: function(t) {
                                this.m_res.x = t
                            }
                        }, {
                            key: "y",
                            get: function() {
                                return this.m_res.y
                            },
                            set: function(t) {
                                this.m_res.y = t
                            }
                        }, {
                            key: "scaleX",
                            get: function() {
                                return this.m_res.scaleX
                            },
                            set: function(t) {
                                this.m_res.scaleX = t
                            }
                        }, {
                            key: "scaleY",
                            get: function() {
                                return this.m_res.scaleY
                            },
                            set: function(t) {
                                this.m_res.scaleY = t
                            }
                        }, {
                            key: "width",
                            get: function() {
                                return this.m_res.width
                            },
                            set: function(t) {
                                this.m_res.width = t
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return this.m_res.height
                            },
                            set: function(t) {
                                this.m_res.height = t
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this.m_res.visible
                            },
                            set: function(t) {
                                this.m_res.visible = t
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this.m_res.enabled
                            },
                            set: function(t) {
                                this.m_res.enabled = t
                            }
                        }, {
                            key: "mouseEnabled",
                            get: function() {
                                return this.m_res.mouseEnabled
                            },
                            set: function(t) {
                                this.m_res.mouseEnabled = t
                            }
                        }, {
                            key: "mouseChildren",
                            get: function() {
                                return this.m_res.mouseChildren
                            },
                            set: function(t) {
                                this.m_res.mouseChildren = t
                            }
                        }, {
                            key: "buttonMode",
                            get: function() {
                                return this.m_res.buttonMode
                            },
                            set: function(t) {
                                this.m_res.buttonMode = t
                            }
                        }, {
                            key: "useHandCursor",
                            get: function() {
                                return this.m_res.useHandCursor
                            },
                            set: function(t) {
                                this.m_res.useHandCursor = t
                            }
                        }, {
                            key: "stage",
                            get: function() {
                                return this.m_res.target
                            }
                        }, {
                            key: "parent",
                            get: function() {
                                return this.m_res.parent
                            }
                        }, {
                            key: "filters",
                            get: function() {
                                return this.m_res.filters
                            },
                            set: function(t) {
                                this.m_res.filters = t
                            }
                        }]),
                        r
                }(r));
                var o = function() {
                    this.mine = "",
                        this.data = void 0,
                        this.property = ""
                };
                i._RF.pop()
            }
        }
    }
));
