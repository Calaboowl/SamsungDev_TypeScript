"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Mail.prototype.get_tipo = function () {
        return this._tipo;
    };
    Mail.prototype.set_tipo = function (tipo) {
        this._tipo = tipo;
    };
    Mail.prototype.get_direccion = function () {
        return this._direccion;
    };
    Mail.prototype.set_direccion = function (direccion) {
        this._direccion = direccion;
    };
    return Mail;
}());
exports.Mail = Mail;
