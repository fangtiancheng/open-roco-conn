System.register("chunks:///_virtual/ProtoBundle.mjs_cjs=&original=.js", ["./ProtoBundle.js", "./cjs-loader.mjs"], (function(e, t) {
        var r, u;
        return {
            setters: [function(t) {
                r = t.__cjsMetaURL;
                var u = {};
                u.__cjsMetaURL = t.__cjsMetaURL,
                    u.default = t.default,
                    e(u)
            }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                r || u.throwInvalidWrapper("./ProtoBundle.js", t.meta.url),
                    u.require(r)
            }
        }
    }
));
