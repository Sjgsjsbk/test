let url ="https://catfact.ninja/fact";

fetch(url)
.then((response) => {
console.log(response);
return response.json();
})
.then((data) => {
console.log(data.fact);

})
.catch((err) =>{
    console.log("ERROR-",err);
});