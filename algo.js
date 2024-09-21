// 1

function reverse(str) {
    let number = str.endsWith('1') ? '1' : '';
    let toReverse = number ? str.slice(0, -1) : str;
    return toReverse.split('').reverse().join('')+number;
}

// Contoh penggunaan
let word = "negie1";
let reversed = reverse(word);
console.log(reversed);



// 2

function longest(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    
    for (const word of words) {
        if (word.length > longestWord.length) {
            console.log(word)
            longestWord = word; 
        }
    }

    console.log(`${longestWord}: ${longestWord.length} character`);
}

const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence)


// 3

let INPUT = ['xc', 'dz', 'bbb', 'dz'];
let QUERY = ['bbb', 'ac', 'dz'];

let OUTPUT = QUERY.map(query => {
    return INPUT.filter(input => input === query).length;
});

console.log(OUTPUT);


// 4

function hasil(matrix) {
    let totalDiagonal1 = 0;
    let totalDiagonal2 = 0;
    const N = matrix.length;
    console.log(matrix)
    for (let i = 0; i < N; i++) {
        console.log(i);
        totalDiagonal1 += matrix[i][i];            
        totalDiagonal2 += matrix[i][N - 1 - i];
    }

    return totalDiagonal1 - totalDiagonal2;
}

let matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
let result = hasil(matrix);
console.log(result);
