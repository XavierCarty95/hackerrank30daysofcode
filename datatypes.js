function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

  // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.
    var i2 = +(readLine());
    var d2 = +(readLine());
    var s2 = readLine();

    // Print the sum of both integer variables on a new line.
    console.log(i + i2);

    // Print the sum of the double variables on a new line.
    console.log((d + d2).toFixed(1));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + s2);
    
}