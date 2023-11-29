function func_testar_if(par_valor: number|string): number {
    if (typeof par_valor === 'number') {
      return par_valor;
    }
    if (typeof par_valor === 'string') {
      return par_valor.length;
    }
    throw new Error('O parâmetro possui um tipo que não é suportado: ' + par_valor);
  }
  let t_msg: (number | string) = func_testar_if("isto é um teste");
  console.log(`O resultado da execução da função é: ${t_msg}`)

  function func_testar_ns(par_valor: number|string): number {
    switch (typeof par_valor) {
      case 'number':      
        return par_valor;
      case 'string':
        return par_valor.length; //retorna o comprimento da string
      default:
        throw new Error('O parâmetro possui um tipo que não é suportado: ' + par_valor);
    }
  }
  let t_msg_ns: (number | string) = func_testar_ns("isto é um teste");
  console.log(`O resultado da execução da função é: ${t_msg_ns}`)

  //Naroong//

  type alfanumerico = string | number | undefined;
function adicionar_concatenar(a: alfanumerico, b: alfanumerico): alfanumerico {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }    
    if (typeof a === 'string' && typeof b === 'string') {
      return a.concat(b);
    }    
    return 'Os argumentos são inválidos. Ambos devem ser números ou strings.';
}
let t_msg_1: alfanumerico = adicionar_concatenar(10, 20);
let t_msg_2: alfanumerico = adicionar_concatenar("funcionou ", "corretamente");
let t_msg_3: alfanumerico = adicionar_concatenar(10, "t");
console.log(`Teste 1: ${t_msg_1}`)
console.log(`Teste 2: ${t_msg_2}`)
console.log(`Teste 3: ${t_msg_3}`)

/* Classes Poliosfirmo */

class LinguaLatina {
    public exibir_informacao():void {
      console.log("Esta classe contém informações sobre a língua latina");
    }
  }
  class LinguaPortuguesa extends LinguaLatina{
    public exibir_informacao():void {
      console.log("Esta classe contém informações sobre a língua portuguesa");
    }
  }
  const obj1 = new LinguaLatina()
  const obj2 = new LinguaPortuguesa()
  obj1.exibir_informacao()
  obj2.exibir_informacao()

  //poli//
  class Pessoa {
    private nome: string = ' '; // default
    protected ender: string = ' ';
    constructor(nome: string, ender: string= ' '){
      this.set_nome(nome);
      this.set_ender(ender);
    }
    private set_nome = (nome: string) => {
      this.nome = nome;
    }
    private set_ender = (ender: string) => {
      this.ender = ender;
    }
    public get_nome = ():string => {
      return this.nome;
    }
    public get_ender = ():string => {
      return this.ender;
    }
  }
  const pessoa = new Pessoa('Teste', 'rua de pedra');
  console.log(`Dados da pessoa: nome = ${pessoa.get_nome()}, endereço = ${pessoa.get_ender()}`)
  
  //herança//
  
  class PessoaFisica extends Pessoa {
    private cpf: string = ''; //default
    constructor(nome: string, ender: string = '', cpf: string){
      super(nome, ender);
      this.set_cpf(cpf);
    }
    private set_cpf = (cpf: string) => {
      this.cpf = cpf;
    }
    public get_cpf = ():string => {
      return this.cpf;
    }
    public get_dados = ():void => {
      console.log(`Dados da pessoa física? nome ${this.get_nome()}, endereço = ${this.get_ender()}, cpf = ${this.get_cpf()}`)
  
      
    }
  }
  class PessoaJuridica extends Pessoa {
    private cnpj: string = ''; //default
    constructor(nome: string, ender: string = '', cnpj: string){
      super(nome, ender);
      this.set_cnpj(cnpj);
    }
    private set_cnpj = (cnpj: string) => {
      this.cnpj = cnpj;
    }
    public get_cnpj = ():string => {
      return this.cnpj;
    }
    public get_dados = ():void => {
      console.log(`Dados dapessoa jurídica: nome = ${this.get_nome()}, endereço = ${this.get_ender()}, cpf = ${this.get_cnpj()}`)
    }
  }
  
  const pessoa_fisica = new PessoaFisica('Issac Newton', ' rua das maças', '10000001811-82')
  const pessoa_juridica = new PessoaJuridica('TypeScript S.A', 'rua dos tipos', '921.0001-07')
  pessoa_fisica.get_dados();
  pessoa_juridica.get_dados();

