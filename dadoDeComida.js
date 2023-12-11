 
let oQuefazer = ["Delivery", "Comer no restaurante", "Cozinhar em casa",]

let oQueCozinhar = [
    italiana = ["pizza","massas", "risoto"],
    mexicana = ["tacos", "burritos"],
    arabe = ["shawerma", "esfiha"],
    americano = ["hamburguer", "hot dog"],
    brasileira = ["churrasco", "feijoada"]
]

let pessoas = [
    {
    nome: "Mauricio",
    idade: 25,
    sexo: "masculino"
    },

    {
    nome: "Raphaella",
    idade: 33,
    sexo: "feminino"
    }
]


dado = (min, max)=>{

    return Math.floor(Math.random() * (max - min) + min)

}

minhaMaeMandou = (numero, objeto) => {
    if(numero > objeto.length){
    
    indice = numero

    while(indice > objeto.length){
    
        indice -= objeto.length
    }

    objeto = objeto[indice]

    return objeto
}else{
    
    if(numero == objeto.length){
        objeto = objeto[numero - 1]

        return objeto
    }else{
    
    objeto = objeto[numero]
    return objeto
    }
}


}




function dadoDeComida(como, tipo, quem, resultadoDoDado){

    
    como = minhaMaeMandou(resultadoDoDado, como)

    tipo = minhaMaeMandou(resultadoDoDado, tipo)
    
    prato = minhaMaeMandou(resultadoDoDado, tipo)

    //quem = minhaMaeMandou(resultadoDoDado, quem)

   quem = () =>{
    
    
    if(resultadoDoDado > quem.length){
    
        indice = resultadoDoDado
    
        while(indice > quem.length){
        
            indice -= quem.length
        }
    
        quem = quem[indice].nome
    
        return quem
    }else{
        
        if(resultadoDoDado == quem.length){
            quem = quem[resultadoDoDado - 1].nome
    
            return quem
        }else{
        
        quem = quem[resultadoDoDado].nome
        return quem
        }
    }
   }

   quem()

    if(como == "Cozinhar em casa"){
        console.log(`hoje vamos ${como} um(a)s delicioso(a)s ${prato} por conta do(a) chef ${quem}`)
    }

    if(como == "Delivery"){
        console.log(`hoje iremos pedir um(a)s delicioso(a)s ${prato} por conta do(a) ${quem}`)
    }

    if(como == "Comer no restaurante"){
        console.log(`hoje vamos ir comer um(a)s delicioso(a)s ${prato} por conta do(a) ${quem}`)
    }

}





   
dadoDeComida(oQuefazer, oQueCozinhar, pessoas, dado(0, 7))
