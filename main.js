//hook up all js up in HTML per read me


const submitButton = document.querySelector('#submit-button')


const translator = document.querySelector("#translator-input")
const result = document.querySelector('#results')


const encodeButton = document.querySelector('#encode')
const translateButton = document.querySelector('#translate')
const madlibButton = document.querySelector('#madlib')
const searchButton = document.querySelector('#search')
const randomButton = document.querySelector('#random')


const radioButtons = document.querySelectorAll('[name="translation-section"]')
console.log(radioButtons)


submitButton.addEventListener('click', ()=>{
    for(let choice of radioButtons){
        if(encodeButton.checked){
            result.innerText = `${encode(translator.value)}`
        }else if(translateButton.checked){
            result.innerText = `${translate(translator.value)}`
        }else if(madlibButton.checked){
            result.innerText = `${madlib(translator.value)}`
        }else if(searchButton.checked){
            result.innerText = ''
            let objArr = search(translator.value)
            for(let obj of objArr){
                let str = document.createElement('p')
                str.innerText = obj.symbol
                result.appendChild(str)
            }if(objArr.length === 0){
                result.innerText = 'emoji does not exsist'
            }
        }
        else if(randomButton.checked){
            let randomNum = Math.floor(Math.random()*4 +1)
            if(randomNum === 1){
                result.innerText = encode(translator.value)
            }else if(randomNum === 2){
                result.innerText = translate(translator.value)
            }else if(randomNum === 3){
                result.innerText = madlib(translator.value)
            }else if(randomNum === 4){
                result.innerText = ''
                let objArr = search(translator.value)
                for(let obj of objArr){
                    let str = document.createElement('p')
                    str.innerText = obj.symbol
                    result.appendChild(str)
                }if(objArr.length === 0){
                    result.innerText = 'emoji does not exsist'
                }
            
            }
        }
    }
})
    



    


// result.innerText = encode(translator.value)


//if(encodeButton === checked){
//      result.innerText = encode(translator.value)
//    }else if(translateButton === checked){
//     result.innerText = translate(translator.value)
//    }else if(madlibButton === checked){
//     result.innerText = madlib(translator.value)
//    }
   

// let choiceOfValue
//     for(let choice of radioButtons){
//         if(choice.checked === true){
//             choiceOfValue = choice.value
//         } console.log(choiceOfValue)
//     }


//which radio button is selected 
//go into case by case basis
//conditional or switch statement dependinh on what radio button is selected
