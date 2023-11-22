var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var choseLabel = document.getElementById("inputGroupSelect01");
var redLordo = document.getElementById("inputfield");
var redNumber = document.getElementById("rednum");
var inpsNumber = document.getElementById("inpsnum");
var irpefNumber = document.getElementById("irpefnum");
var formReference = document.getElementById("form");
var resultReference = document.getElementById("result");
var Lavoratore = /** @class */ (function () {
    function Lavoratore(codRedd, tasseInps, tasseIrpef) {
        this.codRedd = codRedd;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    return Lavoratore;
}());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super.call(this, 22, 23, 32) || this;
    }
    return Artigiano;
}(Lavoratore));
var Informatico = /** @class */ (function (_super) {
    __extends(Informatico, _super);
    function Informatico() {
        return _super.call(this, 22, 25, 35) || this;
    }
    return Informatico;
}(Lavoratore));
var Autonomo = /** @class */ (function (_super) {
    __extends(Autonomo, _super);
    function Autonomo() {
        return _super.call(this, 22, 30, 40) || this;
    }
    return Autonomo;
}(Lavoratore));
function updateInfo(lavoratore) {
    redNumber.innerText = lavoratore.codRedd.toString();
    inpsNumber.innerText = lavoratore.tasseInps.toString();
    irpefNumber.innerText = lavoratore.tasseIrpef.toString();
}
function calculateTasse(lavoratore, redditoLordoValue) {
    var redditoValue = lavoratore.codRedd;
    var inpsValue = lavoratore.tasseInps;
    var irpefValue = lavoratore.tasseIrpef;
    var utiletasse = (redditoLordoValue * redditoValue) / 100;
    var tasseInps = (utiletasse * inpsValue) / 100;
    var tasseIrpef = (utiletasse * irpefValue) / 100;
    var redditoAnnuoNetto = redditoLordoValue - (tasseInps + tasseIrpef);
    resultReference.textContent = redditoAnnuoNetto.toString();
}
choseLabel.addEventListener("change", function () {
    var selectedValue = choseLabel.value;
    if (selectedValue === "1") {
        var artigiano = new Artigiano();
        updateInfo(artigiano);
    }
    else if (selectedValue === "2") {
        var informatico = new Informatico();
        updateInfo(informatico);
    }
    else if (selectedValue === "3") {
        var autonomo = new Autonomo();
        updateInfo(autonomo);
    }
});
formReference.addEventListener("submit", function (e) {
    e.preventDefault();
    var selectedValue = choseLabel.value;
    var redditoLordoValue = parseFloat(redLordo.value);
    if (selectedValue === "1") {
        var artigiano = new Artigiano();
        updateInfo(artigiano);
        calculateTasse(artigiano, redditoLordoValue);
    }
    else if (selectedValue === "2") {
        var informatico = new Informatico();
        updateInfo(informatico);
        calculateTasse(informatico, redditoLordoValue);
    }
    else if (selectedValue === "3") {
        var autonomo = new Autonomo();
        updateInfo(autonomo);
        calculateTasse(autonomo, redditoLordoValue);
    }
});
