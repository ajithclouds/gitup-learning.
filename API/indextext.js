var res=fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>{
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        console.log(`Countryname:${data1[i].name.common} Capital:${data1[i].capital}
        Flags:${data1[i].flags.png}
        Time:${data1[i].timezones}`)
    }
})