// mais de um valor
const x = 10;
const y = 'Nicole';
const z = [1, 2, 3];

console.log(x, y, z);

// contagem de impressões
console.count(`O valor de X é ${x}, contagem `);
console.count(`O valor de X é ${x}, contagem `);

// variável entre string
console.log('O nome é %s e ela é programadora', y);

//limpar o console
setTimeout(() => {
    console.clear();
}, 2000);