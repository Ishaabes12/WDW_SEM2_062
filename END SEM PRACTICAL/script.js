function reverseNum()
{
    let n = document.getElementById("num").value;

    if(n === "")
    {
        document.getElementById("result").innerHTML = "Please enter a number.";
        return;
    }

    let reverse = n.split("").reverse().join("");

    document.getElementById("result").innerHTML =
    "Reversed Number = " + reverse;
}