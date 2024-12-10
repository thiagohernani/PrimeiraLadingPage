class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      } else {
        console.log(
          'Escolha uma classe correta {mago, guerreiro, monge e ninja}'
        );
        return;
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  let heroi = new Hero('Thiago', '25', 'monge');
  
  heroi.atacar();