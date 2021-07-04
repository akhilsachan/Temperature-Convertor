let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener("input",function(){
    let cels = this.value;
    let fahr = (cels*(9/5))+32;
    fah.value = fahr;

});

fah.addEventListener("input",function(){
    let fah = this.value;
    let cels = (fah-32)*5/9;
    if(!Number.isInteger(cels)){
        cels = cels.toFixed(2);
        cel.value = cels;
    }else{
        cel.value = cels;
    }
});