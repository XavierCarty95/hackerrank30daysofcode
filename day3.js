If n is odd, print Weird
If n is even and in the inclusive range of  to , print Not Weird
If n is even and in the inclusive range of  to , print Weird
If  n is even and greater than , print Not Weird


function main() {
    var n = parseInt(readLine());
    if (n % 2 !== 0 || (n % 2 === 0 && n >= 6 && n <= 20)) {
        console.log("Weird");
        return "true";
    } else (n % 2 === 0 && (n >= 2 && n <= 5) || n > 20)
    console.log("Not Weird");
    return "true";
    

}

