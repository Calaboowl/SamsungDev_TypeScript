"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
console.log('------------- Primeras entradas en la agenda -------------\n');
var direccion01 = new Direccion_1.Direccion("Calle Molino de Presa", "17", "primero", " derecha", "69118", "Montejediel", "Barcelona");
var direccion02 = new Direccion_1.Direccion("Calle Canal Oceánico", "11", "-", "-", "45072", "Olías del Rey", "Toledo");
var direccion03 = new Direccion_1.Direccion("Paseo de los Búhos", "64", "16º", "A", "29690", "Lavandera", "Málaga");
var mail01 = new Mail_1.Mail("personal", "felipotienehipo@gmail.com");
var mail02 = new Mail_1.Mail("educativo", "alumna0270103@edu.es");
var mail03 = new Mail_1.Mail("corporativo", "carmenbueno.design@gmail.com");
var telefono01 = new Telefono_1.Telefono("móvil", "+49 174313554");
var telefono02 = new Telefono_1.Telefono("de casa", "925 75 50 72");
var telefono03 = new Telefono_1.Telefono("del trabajo", "+34 612446183");
var persona01 = new Persona_1.Persona("Felipe", "Gómez Soto", 26, "81472619H", "23/08/1995", "rosa", "hombre", direccion01, mail01, telefono01, "Esta persona es mi pareja.");
var persona02 = new Persona_1.Persona("Patricia", "Bueno Iglesias", 19, "12345678Z", "27/01/2003", "verde", "mujer", direccion02, mail02, telefono02, "Esta persona es mi hermana.");
var persona03 = new Persona_1.Persona("Carmen", "Mala Laico", 32, "80516307T", "29/11/1989", "naranja", "de género neutral", direccion03, mail03, telefono03, "Esta persona es mi alter ego.");
//console.log(persona01);
persona01.describir();
//console.log(persona02);
persona02.describir();
//console.log(persona03);
persona03.describir();
console.log('------------- Edición de datos en la agenda -------------\n');
var direccion04 = new Direccion_1.Direccion("Calle Felicidad", "12", "2º", " izquierda", "28020", "Talavera de la Reina", "Madrid");
var mail04 = new Mail_1.Mail("de estudiante", "patribi02@uni.es");
var telefono04 = new Telefono_1.Telefono("personal", "630028344");
var personas = [persona01, persona02, persona03];
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var elemento = personas_1[_i];
    if (elemento.get_dni() == "12345678Z") {
        elemento.set_direcciones(direccion04);
        elemento.set_mails(mail04);
        elemento.set_telefonos(telefono04);
    }
}
//console.log(persona01);
persona01.describir();
//console.log(persona02);
persona02.describir();
//console.log(persona03);
persona03.describir();
console.log('------------- Final del programa -------------\n');
