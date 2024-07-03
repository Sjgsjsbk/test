
// let country = document.querySelector("input").value;
let btn = document.querySelector("button") ;

btn.addEventListener("click", function(){
    console.log("clicked");
    let inp = document.querySelector("input").value;
    let inpSelect = document.getElementById('select')
    console.log(inp);
    inpSelect.select();
    navigator.clipboard.writeText(inpSelect.value);

    

});
