function isValid(letter) {
 // ¡No dejes que el Grinch gane!
  const arr = letter.split(' ')
  let parenthesis = 0
  let specialCharacter = false
  console.log(arr)
  
  for(let i = 0; i < arr.length; i++){
    
    if((arr[i].match(/([()])/g) || 0).length % 2 === 0 && ((arr[i]).match(/([A-Za-z])/g) || 0).length > 0 && arr[i][0] === '('){
      parenthesis += 2
    } 
    
    else if(arr[i].includes('{') || arr[i].includes('}') || arr[i].includes('[') || arr[i].includes(']')){ 
      specialCharacter = true
    }
    
    else if(arr[i].includes('(') || arr[i].includes(')')){ 
      parenthesis += 1
    }
    
  }
  
 if(parenthesis > 0 && parenthesis % 2 === 0 && specialCharacter === false){
   return true
 }
return false
}