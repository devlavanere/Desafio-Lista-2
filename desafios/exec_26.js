/*
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. 
*/

function multiplicarMatrizes(A, B) {
    // Verifica se as matrizes têm dimensões compatíveis
    if (A[0].length !== B.length) {
      return null; // Retorna null se as dimensões não forem compatíveis
    }
  
    // Cria a matriz resultante P com as dimensões corretas
    let P = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
      P[i] = new Array(B[0].length); // Cria a linha com o tamanho correto
      for (let j = 0; j < B[0].length; j++) {
        P[i][j] = 0; // Inicializa cada elemento da linha com 0
      }
    }
  
    // Calcula cada elemento da matriz P
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B[0].length; j++) {
        for (let k = 0; k < B.length; k++) {
          P[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    return P;
  }
  
  let A = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  let B = [
    [7, 8],
    [9, 1],
    [2, 3]
  ];
  
  let P = multiplicarMatrizes(A, B);
  
  if (P) {
    console.log("Matriz P:");
    for (let i = 0; i < P.length; i++) {
      console.log(P[i].join(" "));
    }
  } else {
    console.log("As matrizes não são compatíveis para multiplicação.");
  }





