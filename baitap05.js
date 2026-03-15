function convert() {
    let usd = document.getElementById("usd").value;
    let vnd = usd * 25000;

    document.getElementById("result").innerHTML =
        usd + " USD = " + vnd + " VND";
}