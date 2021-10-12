var clok = setInterval(clock, 1000)
function clock(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("idclock").innerHTML = h+":"+m+":"+s
    
    if (h >= 6 && h <= 11){
        document.getElementById("msg").innerHTML = "Good morning! It's "
    }else if (h >= 12 && h <=17){
        document.getElementById("msg").innerHTML = "Good aftetnoon! It's "
    }else if (h >= 18 && h <= 23){
        document.getElementById("msg").innerHTML = "Good evening! It's "
    }else if (h >= 0 && h <= 5){
        document.getElementById("msg").innerHTML = "Sleep time!! Now it's "
    }
}
clock()






