function sayHi(dayOfweek: number) {
    if (dayOfweek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfweek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfweek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfweek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfweek === 5) {
        console.log('สวัสดีวันพฤหัส')
      else if (dayOfweek === 6){
        console.log('สวัสดีวันศุกร์')
        
      }
    }
}








 function sayHi2(dayOfweek: number) {
    switch(dayOfweek) {
     case 1 :
         console.log('สวัสดีวันอาทิตย์')
         case 2 :
         console.log('สวัสดีวันจันทร์')
         case 3 : 
         console.log('สวัสดีวันอังคาร')
         case 4 :
         console.log('สวัสดีวันพุธ')
         case 5 :
         console.log('สวัสดีวันพฤหัส')
         case 6 :
         console.log('สวัสดีวันศุกร์')
         case 7 : 
         console.log('สวัสดีวันเสาร์')
         break
    default :
         console.log('7วัน')
         break


    }
 }

sayHi2 (5)

function Shirt(size: string) {
    switch(size) {
        case 's' :
             console.log('ผอม')
             break
             case 'm' : 
             console.log('ผอม')
             break
             case 'l' :
             console.log('ท้วม')
             break
             case 'xl' :
             console.log('อ้วน')
             break
             case '2xl' : 
             console.log('อ้วน')
             break
    }
}


function fixedDecimal(n: number,digit: number) {
    const x = n.toFixed(digit)
    return x  
}

console.log(fixedDecimal(406467, 10))

function toCurrency11(a:number){
    return a.toString()
}
const str: string ='danis'

console.log(str.toUpperCase())


function CheckStringLength(c : string){
    console.log(c.length)
}    
    
  CheckStringLength='danis'


  function getCharByIndex(msg: string, index: number) {
    const x = msg.charAt(index)
    return x
}
console.log(getCharByIndex('อยากกลับบ้าน' 5))


const str: string = 'อยากกลับบ้าน'

console.log(str.indexOf('ก'))

const str: string = 'ฉันรักเธอ'

console.log(str.includes('เกลียด'))


function checkStrIndex(str: string,search:string) {
    if(str.includes(search)) {
        console.log(str.indexOf(search))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

checkStrIndex('ไม่อยากกลับ Home','m')