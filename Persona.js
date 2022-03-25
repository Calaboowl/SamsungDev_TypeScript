"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    Persona.prototype.get_nombre = function () {
        return this._nombre;
    };
    Persona.prototype.set_nombre = function (nombre) {
        this._nombre = nombre;
    };
    Persona.prototype.get_apellidos = function () {
        return this._apellidos;
    };
    Persona.prototype.set_apellidos = function (apellidos) {
        this._apellidos = apellidos;
    };
    Persona.prototype.get_edad = function () {
        return this._edad;
    };
    Persona.prototype.set_edad = function (edad) {
        this._edad = edad;
    };
    Persona.prototype.get_dni = function () {
        return this._dni;
    };
    Persona.prototype.set_dni = function (dni) {
        this._dni = dni;
    };
    Persona.prototype.get_cumpleanos = function () {
        return this._cumpleanos;
    };
    Persona.prototype.set_cumpleanos = function (cumpleanos) {
        this._cumpleanos = cumpleanos;
    };
    Persona.prototype.get_colorFavorito = function () {
        return this._colorFavorito;
    };
    Persona.prototype.set_colorFavorito = function (colorFavorito) {
        this._colorFavorito = colorFavorito;
    };
    Persona.prototype.get_sexo = function () {
        return this._sexo;
    };
    Persona.prototype.set_sexo = function (sexo) {
        this._sexo = sexo;
    };
    Persona.prototype.get_direcciones = function () {
        return this._direcciones;
    };
    Persona.prototype.set_direcciones = function (direcciones) {
        this._direcciones = direcciones;
    };
    Persona.prototype.get_mails = function () {
        return this._mails;
    };
    Persona.prototype.set_mails = function (mails) {
        this._mails = mails;
    };
    Persona.prototype.get_telefonos = function () {
        return this._telefonos;
    };
    Persona.prototype.set_telefonos = function (telefonos) {
        this._telefonos = telefonos;
    };
    Persona.prototype.get_notas = function () {
        return this._notas;
    };
    Persona.prototype.set_notas = function (notas) {
        this._notas = notas;
    };
    Persona.prototype.describir = function () {
        console.log(this._nombre + " " + this._apellidos + " tiene " + this._edad + " años.\n" +
            "Su DNI es " + this._dni + " y su fecha de nacimiento, " + this._cumpleanos + ".\n" +
            "Su color favorito es el " + this._colorFavorito + ", y es " + this._sexo + ".\n" +
            "Vive en: " + this._direcciones.get_calle() + " " + this._direcciones.get_numero() + ", " +
            this._direcciones.get_piso() + this._direcciones.get_letra() + ", " + this._direcciones.get_codigoPostal() +
            " " + this._direcciones.get_poblacion() + ", " + this._direcciones.get_provincia() + ".\n" +
            "Su teléfono " + this._telefonos.get_tipo() + " es: " + this._telefonos.get_numero() + ".\n" +
            "Su dirección de email " + this._mails.get_tipo() + " es: " + this._mails.get_direccion() + ".\n" +
            this._notas + "\n");
    };
    return Persona;
}());
exports.Persona = Persona;
