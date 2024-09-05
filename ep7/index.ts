const score = [10,23,26,30,33]
let sum : number = 0

for (let i = 0; i <score.length ; i++) {
    sum = sum + score [i]
}
let avg = sum / score.length
console.log("total:",sum)
console.log("avg:",avg)

const myStudent: string ="เซน,แทน,เวฟ,รุ้ง,แท็ก,สร"

const myStudentArray : string[] = myStudent.split(',')

console.log(myStudent)
console.log(myStudentArray)

const fullName : string = 'สุดสวย สวยสุด'
console.log (fullName.split)

const animal: string = 'กระต่าย*หมา*แมว*ม้า'
const likeAnimal: string[] = animal.split('*')

console.log(likeAnimal)

const animal: string = 'กระต่าย*หมา*แมว*ม้า'

const likeAnimal: string[] = animal.split('*')

console.log("ตั้งต้น: ", likeAnimal)

likeAnimal.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก : ", likeAnimal)

likeAnimal.push('หมาป่า') // ใส่ต่อท้าย

console.log("ใส่ต่อท้าย:", likeAnimal)

likeAnimal.shift() // เอาตัวหน้าออก

likeAnimal.unshift('คาปิบาร่า')
console.log("ใส่ตัวหน้า",likeAnimal)

const friends: string = 'เนม,เฟิร์ส,รุด,เต้'

const friendsArray = friends.split(',')

friendsArray.sort()

console.log(friendsArray)

friendsArray.reverse()

console.log(friendsArray)

const me = {
    firstName:'Danis',
    lastName:'Akunsada',
    age: 18,
    call: "0952354154"
}
console.log(me)
// ประวัติส่วนตัว

// ชื่อ: Danis
// นามสกุล: Akunsada
// อายุ: 18


Firstname: jonathan', 
Lastname: ride, 
Age: 19, 
Tel: 09600000000
Gender "male, 
Address: 756/16' 
village:8, 
Road: pattanakhan, 
District: pattanakhan', 
Province: 'Bangkok', 
PostalCode: 12345,
Mail:'jonathan.ride@gmail.com
//ชื้อ : Jonathan
//นามสกุล : ride
//อายุ : 19
//เบอร์โทร : 09600000000
//wr: male
// ที่อยู่ : 756/16
// หมู่บ้าน : 8
//ถนน : pattanakhan
//เขต : pattanakhan //จังหวัด : Bangkok
//รหัสไปรษณีย์ : 12345
//เมล:jonathan.ride@gmail.com



