one = document.getElementsByClassName("one")[0]
two = document.getElementsByClassName("two")[0]
three = document.getElementsByClassName("three")[0]
four = document.getElementsByClassName("four")[0]
btn = document.getElementsByClassName("bottom")[0]


btn.addEventListener("click",function () {
    four.value = one.value/two.value + (one.value*three.value)/100
})