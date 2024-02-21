
// Exercícios de fixação relacionados à manipulação de arrays em JavaScript:

const arr = [
  "filipe",
  "daniela,",
  "giulia",
  "rafael"
]

const tamanhoArr = arr.length;


if(arr != ''){

  for (let i = 0; i < arr.length; i++){
    // console.log(`For em length é: ${i}`);
  }

  // console.log(`diferente de vazio - O tamanho do array é: ${tamanhoArr}`);

}else{
  //  console.log('nao é vazio')
}


                ////////////////////////////////////////////////////////////////



//   1. *Crie um array*: //

// - Declare um array vazio.
// - Adicione cinco números inteiros ao array.
// - Imprima o array na tela.

const arr1 = [];

arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;
arr1[3] = 4;
arr1[4] = 5;

// console.log(arr1);
// console.log(arr1[1]);


                ////////////////////////////////////////////////////////////////



// 2. *Acesso a elementos*://

// - Crie um array com cinco nomes de frutas.
// - Acesse e imprima o terceiro elemento do array.

const arr2 = ["banana", "laranja", "uva", "pera", "maca"];
// console.log(arr2[2]);



                  ////////////////////////////////////////////////////////////////



// 3. *Modificar elementos*: //

// - Crie um array com três cores.
// - Substitua o segundo elemento por uma nova cor.
// - Imprima o array atualizado.

const arr3 = ["branco", "azul", "roxo"];
arr3[1] = "vermelho";

// console.log(`novo arr3 é: ${arr3}`);



                  ////////////////////////////////////////////////////////////////



// 4. *Remoção de elementos*: //

// - Crie um array com cinco números inteiros.
// - Remova o último elemento do array.
// - Imprima o array resultante.

const arr4 = [1, 2, 3, 4, 5];
const novoArr4 = arr4.splice(0, 4);

// console.log(`usando o splice() - ${novoArr4}`);



                  ////////////////////////////////////////////////////////////////



// 5. *Iteração com for loop*://

// - Crie um array com cinco nomes de países.
// - Use um loop for para imprimir cada país do array no console.

  const paises = [
    "Brasil",
    "EUA",
    "cuba",
    "japão",
    "china"
  ]

  if(paises !== ""){

    for(let i = 0; i < paises.length; i++){
      // console.log(`Imprimindo ${paises[i]} em posição: ${i}`);
    }
  }



                    ////////////////////////////////////////////////////////////////



// 6. *Métodos de array*: //

// - Crie um array com alguns números.
// - Use o método push() para adicionar um novo número ao final do array.
// - Use o método pop() para remover o último número do array.
// - Imprima o array após cada operação

  const arr6 = [
    1,
    2,
    3,
    85,
    4657
  ];

  console.log(`Array sem push(): - ${arr6}`)

  arr6.push(
    999,
    555,
    "Filipe & Rafael",
    "Daniela & Giulia"
  );

  console.log(`Array com push(): - ${arr6}`);


  let indexToRemove = 3;

  arr6.splice(indexToRemove, 1);

  console.log(`usando metodo chat.pgt - Array com removeElement com splice: ${arr6}`);

// if(indexToRemove == 85){
//
// }


                    ////////////////////////////////////////////////////////////////



// const removeElement = arr6.splice(0, 4);
// console.log(`Array com removeElement com splice: ${removeElement}`);

// arr6.pop();
// console.log(arr6);

// const arr5 = [];
//
// for(let i = 0; i < 5; i++){
//   const novoPushAleatorio = arr5.push(Math.floor(Math.random() * 100) + 1)
//   const novoPopAleatorio  = arr5.pop(Math.floor(Math.random() * 100) + 1);
//
//   // console.log(`novoPushAleatorio - ${novoPushAleatorio}`);
//   // console.log(`novoPopAleatorio  - ${novoPopAleatorio }`);
// }




  function myAlert(){

    alert("Hello Word");

    const user = [];
    console.log(user)
  }

  // const code = setInterval(myAlert, 30000);

  // console.log(code)




  const array1 = [];

  array1[0] = "Filipe";
  array1[1] = "Daniela";
  array1[2] = "rafael";
  array1[3] = "monica";

  console.log(`Tamanho do array: ${array1.length}`)

  const lengthArray = array1.length;

  if(array1 !== ""){

    for(let i = 0; i < array1.length; i++){
      console.log(`Passando pelo For( ${i} ) - array nome - ${array1[i]}`);
    }
  }




  function alerta (){

    // alert("Hello Word");
    // console.log("ola mundo");

    if(array1 !== ""){

      for(let i = 0; i < array1.length; i++){
        // console.log(`Passando pelo For( ${i} ) - array nome - ${array1[i]}`);
      }
    }
  }

  setInterval(alerta, 3000);


            ///////////////////////////  Data()  /////////////////////////////////////



  const day = new Date();   // mostrar a data de hoje
  console.log(day)

  function getTime(now){

    now = new Date();

    const hours = now.getHours();
    const mins  = now.getMinutes();
    const secs  = now.getSeconds();

    console.log(`Agora são exatamente ${hours}:${mins}:${secs}`)

    document.getElementById("getTimerNow").innerHTML = `Agora são exatamente ${hours}:${mins}:${secs}`;
  }

  setInterval(getTime, 1000)


            ///////////////////////////  FIM Data()  /////////////////////////////////////






