"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Direccion.prototype.get_calle = function () {
        return this._calle;
    };
    Direccion.prototype.set_calle = function (calle) {
        this._calle = calle;
    };
    Direccion.prototype.get_numero = function () {
        return this._numero;
    };
    Direccion.prototype.set_numero = function (numero) {
        this._numero = numero;
    };
    Direccion.prototype.get_piso = function () {
        return this._piso;
    };
    Direccion.prototype.set_piso = function (piso) {
        this._piso = piso;
    };
    Direccion.prototype.get_letra = function () {
        return this._letra;
    };
    Direccion.prototype.set_letra = function (letra) {
        this._letra = letra;
    };
    Direccion.prototype.get_codigoPostal = function () {
        return this._codigoPostal;
    };
    Direccion.prototype.set_codigoPostal = function (codigoPostal) {
        this._codigoPostal = codigoPostal;
    };
    Direccion.prototype.get_poblacion = function () {
        return this._poblacion;
    };
    Direccion.prototype.set_poblacion = function (poblacion) {
        this._poblacion = poblacion;
    };
    Direccion.prototype.get_provincia = function () {
        return this._provincia;
    };
    Direccion.prototype.set_provincia = function (provincia) {
        this._provincia = provincia;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
