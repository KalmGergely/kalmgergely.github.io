const Btns = document.querySelectorAll(".button")
        Btns.forEach(node =>{
            node.addEventListener('mousedown', function(event){
                event.preventDefault()
                const value = node.innerText.trim() //if there are spaces around it, it's gonna remove them
                const result = document.querySelector(".results")
                const resultText = result.innerText.trim()
                const functionalKeys = Array('*','/','+','-','=','.')

                if(resultText == '0' ||/*or*/ resultText.toLowerCase() == 'infinity' || resultText.toLowerCase() =='undefined'){
                    result.innerText = ''
                }

                if(value == 'C'){
                  result.innerText = '' 
                  return true //whatever's below this, will not be executed if this is true
                }

                if(functionalKeys.includes(result.innerText.slice(-1)) == true) {
                    if(functionalKeys.includes(value.toLocaleLowerCase()) == true){
                        return true
                    }
                }
                
                if(resultText == '0' || resultText == ''){
                    if (value == '/' || value == '*' || value == '+' || value == '-' || value == '=' || value == '.'){
                        result.innerText = ''
                        return true
                    }
                }

                if(value == 'DEL'){
                    result.innerText = result.innerText.substring(0, result.innerText.length -1)
                    return true
                }

                if(value == '='){
                    let solution = eval(resultText)
                    if(Number.isInteger(solution) == true){
                        result.innerText = solution
                    } else {
                        result.innerText = solution.toFixed(2) 
                    }
                    return  true
                }

                result.append(value) //this makes everything show up (what we typed)
            })
        })

document.addEventListener('keydown', function(e){
        e.preventDefault()
                var value = e.key 
                const result = document.querySelector(".results")
                const resultText = result.innerText.trim()
                const validKeys = Array('0','1','2','3','4','5','6','7','8','9','*','/','c','backspace','+','-','=', 'enter', '.')
                const functionalKeys = Array('*','/','+','-','=','.')

                if(resultText == '0' 
                ||/*or*/ resultText.toLowerCase() == 'infinity' 
                || resultText.toLowerCase() =='undefined'){
                    result.innerText = ''
                }

                if(validKeys.includes(value.toLowerCase()) == false){
                    var value = ''
                }

                //New line
                if(functionalKeys.includes(result.innerText.slice(-1)) == true) {
                    if(functionalKeys.includes(value.toLocaleLowerCase()) == true){
                        return true
                    }
                }
                //New line

                if(resultText == '0' || resultText == ''){
                    if (value == '/' || value == '*' || value == '+' || value == '-' || value == '=' || value == '.'){
                        var value = ''
                        return true
                    }
                }

                if(value.toLowerCase() == 'c'){
                  result.innerText = '' 
                  return true //whatever's below this, will not be executed if this is true
                }

                if(value == 'Backspace'){
                    result.innerText = result.innerText.substring(0, result.innerText.length -1)
                    return true
                }

                if(value == '=' || value.toLocaleLowerCase() == 'enter' ){
                    let solution = eval(resultText)
                    if(Number.isInteger(solution) == true){
                        result.innerText = solution
                    } else {
                        result.innerText = solution.toFixed(2) 
                    }
                    return  true
                }

                result.append(value)
})