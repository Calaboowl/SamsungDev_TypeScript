"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Telefono.prototype.get_tipo = function () {
        return this._tipo;
    };
    Telefono.prototype.set_tipo = function (tipo) {
        this._tipo = tipo;
    };
    Telefono.prototype.get_numero = function () {
        return this._numero;
    };
    Telefono.prototype.set_numero = function (numero) {
        this._numero = numero;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
