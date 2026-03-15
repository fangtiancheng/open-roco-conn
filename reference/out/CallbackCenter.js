System.register("chunks:///_virtual/CallbackCenter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CallBackObj.ts", "./FunctionCall.ts"], (function(e) {
        var n, t, r, l, i;
        return {
            setters: [function(e) {
                n = e.createForOfIteratorHelperLoose
            }
                , function(e) {
                    t = e.cclegacy,
                        r = e.assert
                }
                , function(e) {
                    l = e.CallBackObj
                }
                , function(e) {
                    i = e.FunctionCall
                }
            ],
            execute: function() {
                t._RF.push({}, "fa3a44B+85BCqBkBYwcJW/f", "CallbackCenter", void 0);
                var a = e("CallbackCenter", function() {
                    function e() {}
                    return e.notifyEvent = function(n, t, l) {
                        void 0 === t && (t = null),
                        void 0 === l && (l = null),
                        CONFIG.ASSERT && r(n > 0, "errorEventId" + n);
                        var i = e.s_CallbackCenter_Dict[n];
                        if (i) {
                            for (var a, o = 0; o < i.length; )
                                (a = i[o]).func(n, t, l, a.obj),
                                o < i.length && a == i[o] && o++;
                            i = null
                        }
                    }
                        ,
                        e.getCallBackIndex = function(t, l, i) {
                            if (void 0 === i && (i = null),
                                !e.s_CallbackCenter_Dict)
                                return CONFIG.ASSERT && r(!1, "CallbackCenter is dispose already when CallbackCenter_unregisterCallBack "),
                                    -1;
                            CONFIG.ASSERT && r(e.s_CallbackCenter_Dict[t], "eventId List is Empty");
                            for (var a, o = e.s_CallbackCenter_Dict[t], c = -1, C = 0, f = n(o); !(a = f()).done; ) {
                                var u = a.value;
                                if (u.func == l && u.obj == i) {
                                    c = C;
                                    break
                                }
                                C++
                            }
                            return CONFIG.ASSERT && r(-1 != c, "has not register this function !!"),
                                c
                        }
                        ,
                        e.registerCallBackAt = function(t, i, a, o) {
                            CONFIG.ASSERT && (r(t > 0, "errorEventId" + t),
                                r(null != i && 4 == i.length, "function should be function callbackFunc(evtId : number, args : Object , senderInfo : Object , registerObj:Object): number")),
                            null == e.s_CallbackCenter_Dict[t] && (e.s_CallbackCenter_Dict[t] = new Array);
                            var c = e.s_CallbackCenter_Dict[t]
                                , C = new l(i,a);
                            if (CONFIG.DEBUG) {
                                if (CONFIG.ASSERT)
                                    for (var f, u = n(c); !(f = u()).done; ) {
                                        var s = f.value;
                                        r(s.func != i || s.obj != a, "CallbackCenter.s_CallbackCenter_Dict regisiter twice !!")
                                    }
                                var _ = (new Error).stack;
                                e.setCallBackDetailInfo(C, t, _)
                            }
                            c.splice(o, 0, C)
                        }
                        ,
                        e.registerCallBack = function(t, i, a) {
                            void 0 === a && (a = null),
                            CONFIG.ASSERT && r(t > 0, "errorEventId" + t),
                            CONFIG.ASSERT && r(null != i && 4 == i.length, "function should be function callbackFunc(evtId : number, args : Object , senderInfo : Object , registerObj:Object): number"),
                            null == e.s_CallbackCenter_Dict[t] && (e.s_CallbackCenter_Dict[t] = new Array);
                            var o = e.s_CallbackCenter_Dict[t]
                                , c = new l(i,a);
                            if (CONFIG.DEBUG) {
                                if (CONFIG.ASSERT)
                                    for (var C, f = n(o); !(C = f()).done; ) {
                                        var u = C.value;
                                        r(u.func != i || u.obj != a, "CallbackCenter.s_CallbackCenter_Dict regisiter twice !!")
                                    }
                                var s = (new Error).stack;
                                e.setCallBackDetailInfo(c, t, s)
                            }
                            o.push(c)
                        }
                        ,
                        e.unregisterCallBack = function(t, l, i) {
                            if (void 0 === i && (i = null),
                                e.s_CallbackCenter_Dict) {
                                CONFIG.ASSERT && (r(t > 0, "errorEventId" + t),
                                    r(e.s_CallbackCenter_Dict[t], "eventId List is Empty"));
                                for (var a, o = e.s_CallbackCenter_Dict[t], c = -1, C = 0, f = n(o); !(a = f()).done; ) {
                                    var u = a.value;
                                    if (u.func == l && u.obj == i) {
                                        c = C;
                                        break
                                    }
                                    C++
                                }
                                CONFIG.ASSERT && r(-1 != c, "has not register this function !!"),
                                    -1 != c ? o.splice(c, 1) : CONFIG.ASSERT && console.error("cann't find callback the func of callback ")
                            } else
                                CONFIG.ASSERT && r(!1, "CallbackCenter is dispose already when CallbackCenter_unregisterCallBack ")
                        }
                        ,
                        e.init = function(n, t) {
                            e.s_stage = n,
                            CONFIG.ASSERT && r(null == e.s_CallbackCenter_Dict && null != n, "re init"),
                                e.s_CallbackCenter_Dict = new Map
                        }
                        ,
                        e.onMouseDown = function(n) {
                            e.notifyEvent(e.CALLBACK_STAGE_MOUSE_DOWN, n)
                        }
                        ,
                        e.onMouseUp = function(n) {
                            e.notifyEvent(e.CALLBACK_STAGE_MOUSE_UP, n)
                        }
                        ,
                        e.onMouseDown_Capture = function(n) {
                            e.notifyEvent(e.CALLBACK_STAGE_MOUSE_DOWN_CAPTURE, n)
                        }
                        ,
                        e.onMouseUp_Capture = function(n) {
                            e.notifyEvent(e.CALLBACK_STAGE_MOUSE_UP_CAPTURE, n)
                        }
                        ,
                        e.onMouseMove = function(n) {
                            e.notifyEvent(e.CALLBACK_STAGE_MOUSE_MOVE, n)
                        }
                        ,
                        e.onMouseWheel = function(n) {
                            e.notifyEvent(e.CALLBACK_STAGE_MOUSE_WHEEL, n)
                        }
                        ,
                        e.onMouseLeave = function(n) {
                            e.notifyEvent(e.CALLBACK_STAGE_MOUSE_LEAVE, n)
                        }
                        ,
                        e.onEnterFrame = function(n) {
                            e.notifyEvent(e.CALLBACK_ENTER_FRAME, n)
                        }
                        ,
                        e.onKeyDown = function(n) {
                            e.notifyEvent(e.CALLBACK_KEY_DOWN, n)
                        }
                        ,
                        e.onKeyUp = function(n) {
                            e.notifyEvent(e.CALLBACK_KEY_UP, n)
                        }
                        ,
                        e.dispose = function() {
                            var t = 0;
                            if (e.s_CallbackCenter_Dict)
                                for (var r, l, i = n(e.s_CallbackCenter_Dict); !(l = i()).done; )
                                    for (t = (r = l.value).length; t--; )
                                        r[t].dispose(),
                                            r[t] = null;
                            e.s_CallbackCenter_Dict = null,
                            e.s_stage && (e.s_stage = null),
                            CONFIG.DEBUG && o.dispose()
                        }
                        ,
                        e.setCallBackDetailInfo = function(e, n, t) {
                            var r = (t = t.slice(6)).split("\tat ")
                                , l = !1
                                , a = [];
                            for (var c in r) {
                                var C = c.indexOf("[");
                                if (-1 != C) {
                                    if (!l) {
                                        l = !0;
                                        continue
                                    }
                                    var f = new i;
                                    f.eventId = n,
                                        f.regObjToString = "" + e.obj,
                                        a.push(f);
                                    var u = c.lastIndexOf(":");
                                    if (f.fileLine = Number(c.slice(u + 1, c.lastIndexOf("]"))),
                                    0 == f.fileLine)
                                        continue;
                                    f.atFunction = c.slice(0, C),
                                        f.fullFileName = c.slice(C + 1, u),
                                        o.setFileContent(f)
                                }
                                e.functionCallStack = a
                            }
                        }
                        ,
                        e.printCallBack = function(t) {
                            CONFIG.ASSERT && r(t >= 0, "errorEventId" + t);
                            var l = e.s_CallbackCenter_Dict[t];
                            if (l)
                                for (var i, a = n(l); !(i = a()).done; ) {
                                    var o = i.value.functionCall;
                                    console.error(o.fileName, o.atFunction, o.regFunction, o.content)
                                }
                            else
                                console.error("no")
                        }
                        ,
                        e.getCallBackInfoArray = function(t) {
                            var r = e.s_CallbackCenter_Dict[t];
                            if (r) {
                                for (var l, i = [], a = n(r); !(l = a()).done; ) {
                                    var o = l.value.functionCall;
                                    i.push(o)
                                }
                                return i
                            }
                            return null
                        }
                        ,
                        e
                }());
                a.EVENT_OK = 0,
                    a.CALLBACK_ENTER_FRAME = 0,
                    a.CALLBACK_STAGE_MOUSE_DOWN = 0,
                    a.CALLBACK_STAGE_MOUSE_UP = 0,
                    a.CALLBACK_STAGE_MOUSE_MOVE = 0,
                    a.CALLBACK_STAGE_MOUSE_WHEEL = 0,
                    a.CALLBACK_STAGE_MOUSE_LEAVE = 0,
                    a.CALLBACK_STAGE_MOUSE_DOWN_CAPTURE = 0,
                    a.CALLBACK_STAGE_MOUSE_UP_CAPTURE = 0,
                    a.CALLBACK_KEY_DOWN = 0,
                    a.CALLBACK_KEY_UP = 0,
                    a.s_CallbackCenter_Dict = void 0,
                    a.s_stage = void 0;
                var o = function() {
                    function e() {}
                    return e.onNewFileInfoLoaded = function(n) {
                        if (e.functionCallArray)
                            for (var t = 0; t < e.functionCallArray.length; ) {
                                var r = e.functionCallArray[t];
                                if (r.fullFileName == n.fullFileName) {
                                    if (n.fileStringLineArray) {
                                        for (var l = n.fileStringLineArray[r.fileLine - 1].replace("\r", ""), i = 0; i < l.length && ("\t" == l.charAt(i) || " " == l.charAt(i)); i++)
                                            ;
                                        if (i && (l = l.slice(i)),
                                            r.content = l,
                                        -1 != r.content.indexOf("register") && (-1 != r.content.indexOf("registerCallBack") || -1 != r.content.indexOf("registerOnceCallBack"))) {
                                            var a = r.content.slice(r.content.indexOf("(") + 1, r.content.lastIndexOf(")")).split(/[\s]*,[\s]*/);
                                            r.eventIdString = a[0],
                                                r.regFunction = a[1],
                                            a.length >= 3 && (r.regObj = a[2])
                                        }
                                    } else
                                        r.eventIdString = "****error****",
                                            r.regFunction = "****error****",
                                            r.regObj = "****error****";
                                    e.functionCallArray.splice(e.functionCallArray.indexOf(r), 1)
                                } else
                                    t++
                            }
                    }
                        ,
                        e.setFileContent = function(t) {
                            for (var r, l = n(e.fileStringArray); !(r = l()).done; ) {
                                var i = r.value;
                                if (t.fullFileName == i.fullFileName)
                                    return i.fileStringLineArray && i.fileStringLineArray.length ? void (t.content = i.fileStringLineArray[t.fileLine - 1]) : void e.functionCallArray.push(t)
                            }
                            e.functionCallArray.push(t),
                                i = new c(t.fullFileName),
                                e.fileStringArray.push(i)
                        }
                        ,
                        e.dispose = function() {
                            if (e.fileStringArray) {
                                for (var t, r = n(e.fileStringArray); !(t = r()).done; ) {
                                    t.value.dispose()
                                }
                                e.fileStringArray.length = 0,
                                    e.fileStringArray = null
                            }
                            e.functionCallArray && (e.functionCallArray.length = 0,
                                e.functionCallArray = null)
                        }
                        ,
                        e
                }();
                o.fileStringArray = [],
                    o.functionCallArray = [];
                var c = function() {
                    function e(e) {
                        this.fileStringLineArray = void 0,
                            this.fullFileName = ""
                    }
                    return e.prototype.dispose = function() {}
                        ,
                        e
                }();
                t._RF.pop()
            }
        }
    }
));
