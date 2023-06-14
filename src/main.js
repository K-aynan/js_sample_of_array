// var alunos = [
//   {nome: 'Kaynan', nota: 8},
//   {nome: 'Lyan', nota: 9},
//   {nome: 'Caio', nota: 10},
//   {nome: 'Roberta', nota: 5},
//   {nome: 'Leticia', nota: 4},
//   {nome: 'Laara', nota: 9},
// ];

// function obterAlunosAprovados(arrayDeAlunos) {
//   var alunosAprovados = [];

//   for(var i = 0; i < arrayDeAlunos.length; i++) {
//     if(arrayDeAlunos[i].nota >= 6 ) {
//       alunosAprovados.push(arrayDeAlunos[i]);
//     }
//   }
//   return alunosAprovados;
// }

// var alunosAprovados = obterAlunosAprovados(alunos);
// console.log(alunosAprovados);

var alunos = [
  {nome: 'Kaynan', nota: 8},
  {nome: 'Lyan', nota: 9},
  {nome: 'Caio', nota: 10},
  {nome: 'Roberta', nota: 5},
  {nome: 'Leticia', nota: 4},
  {nome: 'Laara', nota: 9},
];

var alunosAprovados = alunos.filter(function(aluno) {
  return aluno.nota >= 6;
});

console.log(alunosAprovados);
