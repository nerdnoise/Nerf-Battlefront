// window.alert("Hello World!");

var captureButton = document.getElementById("captureButton");
captureButton.addEventListener("click", function() {
    window.alert("Captured!");
    captureButton.innerHTML = "Clicked";
});

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });