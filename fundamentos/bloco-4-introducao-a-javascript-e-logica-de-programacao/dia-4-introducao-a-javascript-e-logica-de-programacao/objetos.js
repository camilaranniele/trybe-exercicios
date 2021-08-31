let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info.personagem);


info['recorrente'] = 'Sim';

console.table(info);


for(let keys in info){
    console.log(keys);
}
console.log();
for (let valores in info){
    console.log(info[valores]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
}

console.log();
console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + ' e ' +info2.nota);
if (info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
    console.log("Ambos recorrentes");
}else{
    console.log("Não são recorrentes");
}
