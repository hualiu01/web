function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    let int_principal = parseInt(principal);
    let float_rate = parseFloat(rate);
    let int_years = parseInt(years);

    let interest = (int_principal * float_rate * int_years) / 100;
    let amount = int_principal + parseFloat(interest);
    let result = document.getElementById("result");

    if (int_principal <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $ \<mark\>"+int_principal+"\</mark\>,<br> \
        at an interest rate of \<mark\>"+float_rate+"%.\</mark\><br> \
        You will receive an amount of \<mark\>$"+interest+"\</mark\>,<br> \
        in the year \<mark\>"+ int_years +"\</mark\><br></br>";
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval; 
}