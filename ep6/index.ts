let sum: number = 0
let i: number = 1

while (i <= 31){
 sum = sum + i 
} while (i<=31)

console.log('Total:', sum)

let count: number = 0

while(true) {
    console.log("โสดโว้ย")
    count++
    if (count ===10) {
        break
    }
}

for (let i = 1; i <=13; i++) {
    console.log('ฉันอายุ ' + i + 'ปี')
}

let i: number =1
while(i <=13) {
    console.log( 'ฉันอายุ ' + i + 'ปี')
    i++
}

const str: string = 'ชอบก็จัด ประหยัดทำไม'

const cars: string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda']

cars[2] = 'Isuzu'

console.log(cars[2])

const pi = 3.14
pi = 5

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[4])

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

const cars: string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda']

for(let i =0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ยังไง')
    }
}

const str : string[] = ['ปาล์ม','พี','ต้า','ฟิว','อาร์ท']

for(let i =0; i < str.length; i++) {
    
    if(str [i] === 'ต้า') {
        console.log ('ไปกินหมูทะกัน')
    }
} 

const num : number[] = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0 ;  i< num.length ; i++) {
    console.log(num[i])

    if(num[i] === 3 || num[i]=== 5 ||num[i] === 7){
        num[i]=0
    }
}

console.log(num)
