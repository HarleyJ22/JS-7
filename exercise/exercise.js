function printName() {
    var helloName = "Hello John";
    function inner() {
    setTimeout(() => {
    console.log(helloName);
  }, 1000);
    }
     inner();
}
printName();
