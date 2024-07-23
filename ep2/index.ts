function add(a: number, b: number) {
    return a + b
    
}

console.log(add(5,8))
function down(c:number,e:number){  
    return c-e

}

console.log(down(6,8))
function twin(h: number, g:number,o:number,i:number) {
    return h*g*o*i

}


console.log(twin(5,8,5,,7))

function grade(homework: number,midterm: number, final: number) {
    let score:number =homework + midterm + final

     if (score<50){
         return 'เกรด F'
     }else  if (score<60){
         return 'เกรด D'
     }else   if (score<70){
         return 'เกรด C'
     }  else if (score< 80){
         return 'เกรด B'
     }  else{
         return 'เกรด A'
     }
}

console.log(grade(9,50,30))

