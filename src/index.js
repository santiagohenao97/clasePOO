import "./styles.css";

document.getElementById("app").innerHTML = `
  Ejemplo pizza
`;

//HOLA

class Pizza {
  constructor(masa, tamaño, ingredientes) {
    this.masa = masa;
    this.tamaño = tamaño;
    this.ingredientes = ingredientes;
  }

  preparar() {
    console.log(
      `Preparando pizza ${this.tamaño}, ${this.masa}, Ingredientes: ${this.ingredientes}`
    );
    return this;
  }

  hornear() {
    console.log("La pizza se está horneando");
    console.log("La pizza ya salió del horno");
    return this;
  }

  empacar() {
    console.log("Empacando la pizza...");
    console.log("La pizza se está enviando");
    return this;
  }
}

//Jamón y Queso
/*const pizzaJamonQueso = new Pizza('Masa gruesa', 'Mediana', ['Jamón', 'Queso', 'Salsa']);
console.log(pizzaJamonQueso.preparar());
console.log(pizzaJamonQueso.hornear());
console.log(pizzaJamonQueso.empacar());*/

//Frijoles
/*const pizzaFrijoles = new Pizza("Masa delgada", "Familiar", [
  "Frijoles",
  "Chorizo",
  "Salsa"
]);
console.log(pizzaFrijoles.preparar());
console.log(pizzaFrijoles.hornear());
console.log(pizzaFrijoles.empacar());*/

class Combo extends Pizza {
  constructor(masa, tamaño, ingredientes, combo, bebida, postre, cantidad) {
    super(masa, tamaño, ingredientes);
    this.combo = combo;
    this.bebida = bebida;
    this.postre = postre;
    this.cantidad = cantidad;
  }

  elegirCombo() {
    this.preparar();
    this.hornear();
    this.empacar();

    console.log(
      `Pedido: \nCombo: ${this.combo}\nCantidad: ${this.cantidad}\nPizza: ${this.tamaño}, ${this.masa}, Ingredientes: ${this.ingredientes} \nBebida: ${this.bebida}\nPostre: ${this.postre}`
    );
    return this;
  }
}

const Combo1 = new Combo(
  "Masa delgada",
  "Familiar",
  ["Queso", "Butifarra"],
  1,
  "Agua",
  "Helado",
  2
);
console.log(Combo1.elegirCombo());
