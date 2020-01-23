if(number !== Number(0)){
            if(number == 1){
                textValue = "igihumbi"
            }else{
                if(number<10){
                    let val  =""
                    if(number < 8)
                        val = unit2String[number].replace(unit2String[number].slice(0,2),'bi')
                    else
                        val = unit2String[number]
                    textValue = "ibihumbi "+val
                }

                if(number < 100){
                    
                }
            }

        }else{
            textValue = ""
        }


  function thousandsLetter(thousandsNumber){
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