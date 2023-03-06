"use strict";
// enum
// numeric enum
var Days;
(function (Days) {
    Days[Days["Senin"] = 1] = "Senin";
    Days[Days["Selasa"] = 2] = "Selasa";
    Days[Days["Rabu"] = 3] = "Rabu";
})(Days || (Days = {}));
//  string enum
var Bulan;
(function (Bulan) {
    Bulan["Januari"] = "Januari";
    Bulan["Februari"] = "Februari";
    Bulan["Maret"] = "Maret";
})(Bulan || (Bulan = {}));
console.log(Bulan.Februari, Days.Selasa);
