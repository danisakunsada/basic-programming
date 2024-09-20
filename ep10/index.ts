console.log("1")
console.log("2")
console.log("3")

setTimeout(() => {
    console.log("4")
})

console.log("5")

//zane.com -> No
//tan@ -> No 
//safe@utk.ac.th -> Yes
//poppy@gmail.com -> Yes
const database = [
    {
        email: 'user@gmail.com',
        password:'loveYou3000'
    }
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('รับสมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16')
        }
    }else {
        alert('email ไม่ถูกต้อง')
    }
}

register('user@gmail.com', 'loveYou3000')



//zane.com -> No
//tan@ -> No 
//safe@utk.ac.th -> Yes
//poppy@gmail.com -> Yes
const database = [
    {
        email: 'user@gmail.com',
        password:'loveYou3000'
    },
    {
        email: 'max@gmail.com',
        password: '1234567แปด'
    }
]

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0)  {
        if (user[0].password === password) {
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้องโปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('max@gmail.com', '1234567แปด')

//กฏการเข้ารหัส
//เปลี่ยน u เป็น +
//เปลี่ยน 6 เป็น *
//เปลี่ยนเลข 0 เป็น ^
const database = [
    {
        email: 'user@gmail.com',
        password:'loveYo+3^^^'
    },
    {
        email: 'max@gmail.com',
        password: '1234567แปด'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0)  {
        const realPassword = decryptPassword(user[0].password)
        
        if (realPassword === password) {
            alert('เข้าสู่ระบบ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้องโปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('max@gmail.com', '1234567แปด')