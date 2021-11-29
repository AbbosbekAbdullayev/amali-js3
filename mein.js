// let yosh = Number(print('yoshingiz'));
let yosh = prompt("yoshingizni kiriting");
yosh = Number(yosh);

if(yosh){
    if(yosh>=16) {
        console.log('siz pasport olasiz')
    }
    else{
        console.log("siz pasport olmaysiz")
    }
}
else{
    console.log("togri qiymat kirit!")
}
console.log(yosh)