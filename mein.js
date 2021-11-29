// let yosh = Number(print('yoshingiz'));
let yosh = prompt("yoshingizni kiriting");
yosh = Number(yosh);

if(yosh!==nan){
    if(yosh>=16) {
        console.log('siz pasport olasiz')
    }
    else{
        console.log("siz pasport olmaysiz")
    }
}
console.log(yosh)