const me = {
    Firstname: 'jonathan', 
    Lastname: 'ride', 
    Age: 19, 
    Tel: '099999' ,
    Gender: 'male', 
    Address: 756/16, 
    village:8, 
    Road: 'pattanakhan', 
    District: 'pattanakhan', 
    Province: 'Bangkok', 
    PostalCode: 12345,
    Mail:'jonathan.ride@gmail.com',
    myBestFriend : {
        firstName : 'tarr' ,
        lastName : 'jams' ,
        cognomen :'หยิก'
        
    }
    
    }
    console.log (me.myBestFriend.cognomen)
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
  

const myFriends = [{
    firstName:'mookem',
    lastName:'munmak',
    AKA:'ounoun',
    age:72,
}, {
    firstName:'Obaba',
    lastName:'moonamtok',
    AKA:'wiwi',
    age:98,
}, {
    firstName:'moohwan',
    lastName:'moofoy',
    AKA:'numtok',
    age:23,
}, {
    firstName:'moohan',
    lastName:'mooprara',
    AKA:'tomyum',
    age:17
}]

const myFriendsAKA = myFriends.map(function(elemant, index){
    return ({
        firstName: elemant.firstName,
        AKA: elemant.AKA
    })
})

const myFriendMoreThen = myFriends.filter(function(elemant, index){
    return elemant.age > 15 && elemant.lastName === 'mooprara'
})

console.log(myFriendMoreThen)