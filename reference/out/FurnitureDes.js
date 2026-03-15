System.register("chunks:///_virtual/FurnitureDes.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
        var e, i;
        return {
            setters: [function(r) {
                e = r.createForOfIteratorHelperLoose
            }
                , function(r) {
                    i = r.cclegacy
                }
            ],
            execute: function() {
                i._RF.push({}, "89f871a0E5GgKWJb/IaWjfd", "FurnitureDes", void 0);
                r("FurnitureDes", function() {
                    function r() {
                        this.id = void 0,
                            this.name = void 0,
                            this.info = void 0,
                            this.buildMaterialArray = void 0,
                            this.recycleMaterialArray = void 0,
                            this.buildEnergy = void 0,
                            this.rechargeMoneyPerDay = void 0,
                            this.settleType = void 0,
                            this.funcType = void 0,
                            this.settleLayer = void 0,
                            this.comfortable = void 0,
                            this.expireTime = void 0,
                            this.buildLevel = void 0,
                            this.sendExp = void 0,
                            this.productArray = void 0
                    }
                    var i = r.prototype;
                    return i.read = function(r) {
                        if (this.id = Number(r.id),
                            this.name = String(r.name),
                        r.info instanceof Object && (r.info = ""),
                            this.info = String(r.info),
                        this.buildMaterialArray || (this.buildMaterialArray = new Array(0)),
                            this.buildMaterialArray.length = 0,
                        r.hasOwnProperty("buildMaterialArray") && r.buildMaterialArray.hasOwnProperty("buildMaterial"))
                            if (Array.isArray(r.buildMaterialArray.buildMaterial))
                                for (var i, a = e(r.buildMaterialArray.buildMaterial); !(i = a()).done; ) {
                                    var t, l = i.value;
                                    (t = {}).id = Number(l.materialId),
                                        t.count = Number(l.materialNum),
                                        this.buildMaterialArray.push(t)
                                }
                            else
                                (t = {}).id = Number(r.buildMaterialArray.buildMaterial.materialId),
                                    t.count = Number(r.buildMaterialArray.buildMaterial.materialNum),
                                    this.buildMaterialArray.push(t);
                        if (this.recycleMaterialArray || (this.recycleMaterialArray = new Array(0)),
                            this.recycleMaterialArray.length = 0,
                        r.hasOwnProperty("recycleMaterialArray") && r.recycleMaterialArray.hasOwnProperty("recycleMaterial"))
                            if (Array.isArray(r.recycleMaterialArray.recycleMaterial))
                                for (var y, n = e(r.recycleMaterialArray.recycleMaterial); !(y = n()).done; ) {
                                    var s, u = y.value;
                                    (s = {}).id = Number(u.materialId),
                                        s.count = Number(u.materialNum),
                                        this.recycleMaterialArray.push(s)
                                }
                            else
                                (s = {}).id = Number(r.recycleMaterialArray.recycleMaterial.materialId),
                                    s.count = Number(r.recycleMaterialArray.recycleMaterial.materialNum),
                                    this.recycleMaterialArray.push(s);
                        if (this.buildEnergy = Number(r.buildEnergy),
                            this.rechargeMoneyPerDay = Number(r.rechargeMoneyPerDay),
                            this.settleType = Number(r.settleType),
                            this.funcType = Number(r.funcType),
                            this.settleLayer = Number(r.settleLayer),
                            this.comfortable = Number(r.comfortable),
                            this.expireTime = Number(r.expireTime),
                            this.buildLevel = Number(r.buildLevel),
                            this.sendExp = Number(r.sendExp),
                        this.productArray || (this.productArray = new Array(0)),
                            this.productArray.length = 0,
                        r.hasOwnProperty("productArray") && r.productArray.hasOwnProperty("itemId"))
                            if (Array.isArray(r.productArray.itemId))
                                for (var c, o = e(r.productArray.itemId); !(c = o()).done; ) {
                                    var h = c.value;
                                    this.productArray.push(Number(h))
                                }
                            else
                                this.productArray.push(Number(r.productArray.itemId))
                    }
                        ,
                        i.arrayToString = function(r, e, i) {
                            var a = ""
                                , t = ++i;
                            if (r) {
                                for (var l = ""; i; )
                                    l += "\t",
                                        i--;
                                for (var y = r.length, n = 0; n < y; n++)
                                    a += "\n" + l + e + "[" + n + "] :\n" + r[n].toString(t + 1)
                            }
                            return a
                        }
                        ,
                        i.toString = function(r) {
                            void 0 === r && (r = 0);
                            for (var e = ""; r; )
                                e += "\t",
                                    r--;
                            var i = e + "id = " + this.id + "\n" + e + "name = " + this.name + "\n" + e + "info = " + this.info + "\n" + e + "buildMaterialArray.length = " + this.buildMaterialArray.length + "\n" + e + "buildMaterialArray.content is :" + this.arrayToString(this.buildMaterialArray, "buildMaterialArray", r) + e + "recycleMaterialArray.length = " + this.recycleMaterialArray.length + "\n" + e + "recycleMaterialArray.content is :" + this.arrayToString(this.recycleMaterialArray, "recycleMaterialArray", r) + e + "buildEnergy = " + this.buildEnergy + "\n" + e + "rechargeMoneyPerDay = " + this.rechargeMoneyPerDay + "\n" + e + "settleType = " + this.settleType + "\n" + e + "funcType = " + this.funcType + "\n" + e + "settleLayer = " + this.settleLayer + "\n" + e + "comfortable = " + this.comfortable + "\n" + e + "expireTime = " + this.expireTime + "\n" + e + "buildLevel = " + this.buildLevel + "\n" + e + "sendExp = " + this.sendExp + "\n";
                            return i.length && "\n" == i.charAt(i.length - 1) && (i = i.substring(0, i.length - 1)),
                                i
                        }
                        ,
                        r
                }());
                i._RF.pop()
            }
        }
    }
));
