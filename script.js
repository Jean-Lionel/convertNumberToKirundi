const  convertNumberToString = (number)=> {

    if(isNaN(number) || number <0 || number > 1000000000){
        console.log('Invalide value')
        return "Invalid value"
    }

    const unit2String = ['','rimwe ','kabiri ','gatatu ','kane ','gatanu ','gatandatu ','indwi ','umunani ','icenda ']
    const tens2String = [];
    const hundred2String = [];
//   const thousands2String = [] 
//COnverstion des dizaine
    for (const key in unit2String) {
        if(key !== '0'){
            if (key === '1') {
                tens2String.push(' cumi ')
            }else if (Number(key) < 7) {
                let val = unit2String[key]
                tens2String.push(val.replace(val.slice(0,2),'mirongi'))
            } else {
                tens2String.push(' mirong\' '+unit2String[key])
            }

        }else{
            tens2String.push('')
        }
     
           
    }

    //Conversion des centaines

    for (const key in tens2String) {
        if(key !== '0'){
            if(key === '1'){
                hundred2String.push('ijana')
            }else if(Number(key) < 7){
                let val = unit2String[key]
                hundred2String.push(val.replace(val.slice(0, 2), 'amajana'))
            }
            else{
             let val = ' amajan\' ' + unit2String[key]
             hundred2String.push(val)
            }
        }else{
            hundred2String.push("")
        }
    }

    //convertir en mille

  /*  function thousandsLetter(thousandsNumber){
        let textValue = ""

        let units = thousandsNumber % 10,
            tens = (thousandsNumber % 100 - units) / 10,
            hundreds = (thousandsNumber % 1000 - thousandsNumber % 100) / 100,
            thousands = (thousandsNumber % 1000000 - thousandsNumber % 1000) / 1000,
            billions = (thousandsNumber % 1000000000 - thousandsNumber % 1000000) / 1000000

            if(billions < 10 && billions !== 0){
                console.log(billions)
                if(billions === Number(1)){
                    textValue = " umumiliyoni "
                }else{
                    if(billions < 7){
                        const val = unit2String[billions].replace(unit2String[billions].slice(0, 2),"imiliyoni z 'i")
                        textValue = val
                    }else{
                        textValue = "imiliyoni " + unit2String[billions]
                    }
                   
                }
                
            }else{
              if(billions < 100){
                  
              }
            }


        console.log(textValue)
    }

    thousandsLetter(9000000)

    */

    const units = number % 10,
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100,
        thousands = (number %1000000 - number %1000)/1000,
        billions = (number % 1000000000- number%1000000)/1000000

    let unitsOut, tensOut, hundredsOut, billionsOut;

   /* if(number === 0){
        console.log('ubusa')
    }else{

        unitsOut = unit2String[units]
        tensOut = tens2String[tens]
        hundredsout = hundred2String[hundreds]
       console.log(hundredsout +" na "+tensOut + " na "+unitsOut)

    } */

    let result;

    if(number !== 0){
        hundredsout = hundred2String[hundreds]
        unitsOut = unit2String[units]
        tensOut = tens2String[tens]
        
         const resultS = () =>{
             let v = "";
            
             if (thousands && hundredsout)
                v += " n' "
                v += hundredsout
             if (hundredsout && tensOut)
                 v += " na "

                v += tensOut
             if ((tensOut || hundredsout || thousands || billions) && unitsOut )
                v += " na " 
                v+= unitsOut
            return v
         }

        result = resultS()

        hundredsOut = hundred2String[hundreds];


         
        if(thousands > 0){
         
            if(thousands == 1){
                result = ' igihumbi ' + result
                
            }
                
            else if(thousands < 7){
                result = ' ibihumbi b' + unit2String[thousands].replace(unit2String[thousands].slice(0,2),'i') + result 
            }else if(thousands < 10){
                result = ' ibihumbi ' + unit2String[thousands] + result
            }else{
                if(thousands < 100){
                    
                    ibihumbi = convertNumberToString(thousands)
                    let rest = ""
                    
                    const restVal = number % 1000
                    if(restVal > 0){
        
                        rest = " na " + convertNumberToString(restVal)
                    }
                       
                    
                    result = " ibihumbi " + ibihumbi + rest

                }else{
                    restValue = number % 1000
                    rest = ""
                    if(restValue > 0 ){
                        
                        rest = " na " + convertNumberToString(restValue)
                    }
                        
                    mille = convertNumberToString(thousands)
                    result = " ibihumbi " + mille + rest

                }
                
            }
        }

        if (billions > 0){
            if(billions === 1){
                result = " umumiliyoni " + result
            }
            else if(billions < 7){
                result = ' imiliyoni z\' ' + unit2String[billions].replace(unit2String[billions].slice(0, 2), 'i') + result

            } else if (billions < 1000){
                let rest = ""
                const imimiliyoni = convertNumberToString(billions)
                const restVal = number %1000000
                if(restVal){
                    rest = " na " + convertNumberToString(restVal)
                }
                result = ' imiliyoni  ' + imimiliyoni + rest
            }else{

            }
        }

    }else{
        
       result = 'ubusa'
    }
    return result

}
console.log(convertNumberToString(849))