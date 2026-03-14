System.register("chunks:///_virtual/EventDispatcher.ts", ["cc", "./BuildLogHelper.ts"], (function(e) {
        var t, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.default
                }
            ],
            execute: function() {
                t._RF.push({}, "48587FFAcVH5YpkyvFs0TMy", "EventDispatcher", void 0);
                e("EventDispatcher", function() {
                    function e() {
                        this._isInvoking = !1,
                            this._containCanceled = !1,
                            this._callbacks = [],
                            this._resBeginTimer = 0,
                            this._resEndTimer = 0
                    }
                    var t = e.prototype;
                    return t.addEventListener = function(e, t, i, n, s) {
                        this._callbacks[e] || (this._callbacks[e] = []),
                        this._callbacks[e] && this._callbacks[e].length > 0 && this._callbacks[e].obj == i && console.error("重复addEventListener==" + e),
                            this._callbacks[e].push({
                                call: t,
                                obj: i
                            })
                    }
                        ,
                        t.removeEventListener = function(e, t, i) {
                            var n = this._callbacks[e];
                            if (n) {
                                for (var s = -1, c = 0; c < n.length; c++)
                                    if (n[c] && n[c].call && n[c].obj && n[c].call === t && n[c].obj == i) {
                                        s = c;
                                        break
                                    }
                                s < 0 || (1 == this._isInvoking ? this._callbacks[e][s] = null : this._callbacks[e].splice(s, 1),
                                    this._containCanceled = !0)
                            }
                        }
                        ,
                        t.dispatchEvent = function(e, t) {
                            var n = e.type;
                            e.__constructor__ = this.constructor.name,
                                e.__this__ = this,
                                e.__target__ = this;
                            var s = this._callbacks[n];
                            if (s && s.length) {
                                s.length > 1 && 1 == i.IS_LOCAL && console.log("多个callback==>>" + n),
                                    this._isInvoking = !0;
                                for (var c = 0; c < s.length; c++)
                                    s[c] && s[c].call && s[c].obj && s[c].call.call(s[c].obj, e, t);
                                this._isInvoking = !1,
                                this._containCanceled && this.purgeCanceled(n)
                            }
                        }
                        ,
                        t.purgeCanceled = function(e) {
                            var t = this._callbacks[e];
                            if (t) {
                                for (var i = t.length - 1; i >= 0; --i)
                                    t[i] || this._callbacks[e].splice(i, 1);
                                this._containCanceled = !1
                            } else
                                this._containCanceled = !1
                        }
                        ,
                        t.hasEventListener = function(e, t, i) {
                            void 0 === i && (i = null);
                            var n = this._callbacks[e];
                            if (n) {
                                for (var s = 0; s < n.length; s++)
                                    if (n[s] && n[s].call && n[s].obj && n[s].call === t && n[s].obj == i)
                                        return !0;
                                return !1
                            }
                        }
                        ,
                        t.beginTimer = function() {
                            this._resBeginTimer = (new Date).getTime(),
                            1 == i.IS_LOCAL && console.info(this.constructor.name + "==beginTimer==>" + this.constructor.name + "===>" + this._resBeginTimer + "ms")
                        }
                        ,
                        t.endTimer = function() {
                            this._resEndTimer = (new Date).getTime(),
                            1 == i.IS_LOCAL && console.info(this.constructor.name + "==endTimer==>" + this._resBeginTimer + "==" + this._resEndTimer + "==" + (this._resEndTimer - this._resBeginTimer) + "ms")
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
