let url = "http://universities.hipolabs.com/search?name="; 
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    console.log("buton was clicked");
    let country = document.querySelector("input").value;
    console.log(country);
     let colArr = await  getcollege(country);
     console.log(colArr);
     show(colArr);

});

function show(colArr){
    let list = document.querySelector("#list");
    for(col of colArr)
        {
            console.log(col);

            let li = document.createElement("li");
            li.innerHTML = col.name;
            list.appendChild(li);
        }
}



async function getcollege(country){
    try{
       let res = await axios.get(url + country);
       return res.data;
    }catch(e){
        console.log("error",e);
        return[];

    }

}
