import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

console.log ('------------- Primeras entradas en la agenda -------------\n');

var direccion01 = new Direccion("Calle Molino de Presa", "17", "primero", " derecha", "69118", "Montejediel", "Barcelona")
var direccion02 = new Direccion("Calle Canal Oceánico", "11", "-", "-", "45072", "Olías del Rey", "Toledo")
var direccion03 = new Direccion("Paseo de los Búhos", "64", "16º", "A", "29690", "Lavandera", "Málaga")

var mail01 = new Mail("personal", "felipotienehipo@gmail.com")
var mail02 = new Mail("educativo", "alumna0270103@edu.es")
var mail03 = new Mail("corporativo", "carmenbueno.design@gmail.com")

var telefono01 = new Telefono("móvil", "+49 174313554")
var telefono02 = new Telefono("de casa", "925 75 50 72")
var telefono03 = new Telefono("del trabajo", "+34 612446183")

var persona01 = new Persona("Felipe", "Gómez Soto", 26, "81472619H", "23/08/1995", "rosa", "hombre", direccion01, mail01, telefono01, "Esta persona es mi pareja.");
var persona02 = new Persona("Patricia", "Bueno Iglesias", 19, "12345678Z", "27/01/2003", "verde", "mujer", direccion02, mail02, telefono02, "Esta persona es mi hermana.");
var persona03 = new Persona("Carmen", "Mala Laico", 32, "80516307T", "29/11/1989", "naranja", "de género neutral", direccion03, mail03, telefono03, "Esta persona es mi alter ego.");

//console.log(persona01);
persona01.describir();

//console.log(persona02);
persona02.describir();

//console.log(persona03);
persona03.describir();

console.log ('------------- Edición de datos en la agenda -------------\n');

var direccion04 = new Direccion("Calle Felicidad", "12", "2º", " izquierda", "28020", "Talavera de la Reina", "Madrid")
var mail04 = new Mail("de estudiante", "patribi02@uni.es")
var telefono04 = new Telefono("personal", "630028344")

const personas: Persona[] = [persona01, persona02, persona03]

for(const elemento of personas) {
    if (elemento.get_dni() == "12345678Z"){
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

console.log ('------------- Final del programa -------------\n');