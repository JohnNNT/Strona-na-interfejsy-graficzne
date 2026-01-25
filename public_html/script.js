function plogin()
{
    var username = document.getElementById("Rectangle_34").value;
    localStorage.setItem("username", username);
}

function getserveraddr()
{
    var port = 22026;
    var addr = "";
    for (i = 0; i < 3; i++) {
        addr += (Math.floor(Math.random() * 255)).toString();
        addr += ".";
    }
    addr += (Math.floor(Math.random() * 255)).toString();
    alert(`Mecz gry jest dostępny pod adresem:  ${addr}:${port}`);
}

function islogged()
{
    var username = localStorage.getItem("username");
    return username !== undefined && username.length;
}

function updusername()
{
    document.getElementById("__16").innerHTML = islogged() ? `Equipment\nWelcome, ${localStorage.getItem("username")}!` : "Equipment";
    console.log("tst");
}

if (islogged())
{
    var username = localStorage.getItem("username");
    document.getElementById("Rectangle_6").style.visibility = "hidden";
    if (document.getElementById("__1").innerHTML === "Log in") {
        document.getElementById("__1").innerHTML = username;
    }
    else if (document.getElementById("__2").innerHTML === "Log in") {
        document.getElementById("__2").innerHTML = username;
    }
}
else
{
    document.getElementById("Rectangle_6").style.visibility = "visible";
}