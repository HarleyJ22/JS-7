function printName() {
    var helloName = "Hello John";
    function inner() {
    setTimeout(() => {
    console.log("Hello John");
  }, 1000);
    }
     inner();
}
printName();
