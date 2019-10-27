function lineprint(message, numbtimes) {
    console.log(message,numbtimes);
};
  
// expected output:
// line 6: hello my name is carter

lineprint("hello my name is carter", 6);


// expected output:
// line 9: hello dfsdfsf

lineprint("hello dfsdfsf", 9)


function loop_print(message, numbtimes) {
    var i;
    for (i = 0; i < numbtimes; i++) {
        console.log(message);
    }    
}
loop_print("memes are best",10)