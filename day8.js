function processData(input) {
    var temp = input.split('\n');
    var n = temp.shift();
    var arr = [];
    var book = {};
    for (i = 0; i < n; i++) {
        arr[0] = (temp.shift().split(' '));
        book[arr[0][0]] = arr[0][1];
    }

    for (a = 0; a < temp.length; a++) {
        if (book.hasOwnProperty(temp[a])) {
            console.log(temp[a] + '=' + book[temp[a]]);
        } else {
            console.log('Not found');
        }
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

    process.stdin.on("end", function () {
        processData(_input);
    
});
