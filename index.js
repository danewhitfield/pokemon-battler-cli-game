console.clear();
// POKEMON

class Pokemon {
  constructor(name, health, damage, attackMove, type = "none") {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.attackMove = attackMove;
    this.type = type;
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
    this.storage = [];
    this.maxSize = 6;
  }

  catchPokemon(...pokemons) {
    pokemons.forEach((pokemon) => {
      if (this.storage.length < this.maxSize) {
        this.storage.push(pokemon);
      }
    });
  }
}

class Battle {
  constructor(arena, trainer1, trainer2) {
    this.arena = arena;
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;

    this.trainer1Pokemons = trainer1.storage;
    this.trainer2Pokemons = trainer2.storage;
  }

  fight() {
    let pokemon1 =
      this.trainer1.storage[
        Math.floor(Math.random() * this.trainer1.storage.length)
      ];
    let pokemon2 =
      this.trainer2.storage[
        Math.floor(Math.random() * this.trainer2.storage.length)
      ];

    while (
      pokemon2.health > 0 + pokemon1.damage &&
      pokemon1.health > 0 + pokemon2.damage
    ) {
      // POKEMON 2
      // POKEMON 2 HEALTH
      console.log(
        `${this.trainer2.name}s ${pokemon2.name} health: ${pokemon2.health}`
      );
      pokemon2.health = pokemon2.health - pokemon1.damage;
      console.log(
        `${this.trainer1.name}s ${pokemon1.name} does ${pokemon1.damage} damage to ${pokemon2.name}s health. Leaving ${pokemon2.name} with ${pokemon2.health} health`
      );
      console.log(pokemon2.health, `${this.trainer2.name}s ${pokemon2.name}`);

      // POKEMON 1
      // POKEMON 1 HEALTH
      console.log(
        `${this.trainer1.name}s ${pokemon1.name} health: ${pokemon1.health}`
      );
      // POKEMON 1 HEALTH AFTER BEING ATTACKED
      pokemon1.health = pokemon1.health - pokemon2.damage;
      //
      console.log(
        `${this.trainer2.name}s ${pokemon2.name} does ${pokemon2.damage} damage to ${pokemon1.name}s health. Leaving ${pokemon1.name} with ${pokemon1.health} health`
      );
      console.log(pokemon1.health, `${this.trainer1.name}s ${pokemon1.name}`);

      // LOGIC
      if (pokemon1.health <= 0 + pokemon2.damage) {
        console.log(`${this.trainer1.name}s ${pokemon1.name} has fainted!`);
        console.log(`BATTLE OVER!`);
        console.log(`${this.trainer2.name}s ${pokemon2.name} has won!`);
      } else if (pokemon2.health <= 0 + pokemon1.damage) {
        console.log(`${this.trainer2.name}s ${pokemon2.name} has fainted!`);
        console.log(`BATTLE OVER!`);
        console.log(`${this.trainer1.name}s ${pokemon1.name} has won!`);
      }
    }
  }
}

const pikachu = new Pokemon("Pikachu", 100, 26, "Lightning Shock", "Grass");
const squirtle = new Pokemon("Squirtle", 84, 22, "Water Blast", "Water");
const bulbasaur = new Pokemon("Bulbasaur", 67, 28, "Vine Hug", "Grass");

const dane = new Trainer("Dane");
dane.catchPokemon(pikachu);
dane.catchPokemon(squirtle);
dane.catchPokemon(bulbasaur);
// console.log(dane);

const eevee = new Pokemon("Eevee", 50, 17, "Fluffy Wand");
const flareon = new Pokemon("Flareon", 91, 23, "Fire Breath", "Fire");

const hannah = new Trainer("Hannah");
hannah.catchPokemon(eevee);
hannah.catchPokemon(flareon);
hannah.catchPokemon(pikachu);
// console.log(hannah.storage);

const tokyo = new Battle("Tokyo", dane, hannah);
tokyo.fight();

// console.log(tokyo);

module.exports = { Pokemon, Trainer };
