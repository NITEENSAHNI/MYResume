let date;
let MonthArray=["January", "Febuary","March","April","May","June","July","August","September","October","November","December"]
function datefunc()
{
date = new Date()
document.getElementById("today").innerHTML = date.getDate();
document.getElementById("month").innerHTML = MonthArray[date.getMonth()];
if(date.getHours()>18)
{
    document.getElementById("moon").src="images/moon.png";
    console.log("night")
}
if(date.getHours()<18)
{
    document.getElementById("moon").innerHTML.src="images/sun.png";
}
}
function Surprise()
{
    swal({
        title:"YOU",
        text:"ARE AWESOME!!!",
        
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/a/a9/A_sunflower.jpg',
   
    })
}
