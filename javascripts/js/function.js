function block(num1, user) {
    $Namey = num1 * 30
    $answer = $Namey * 12
    $dollars = $answer * 600

    $result = user + " earns " + num1 + " naira daily. So " + user + " is going to get " + $Namey + " naira monthly. In other words, " + user + " annual returns will be " + $answer + " naira. Also you get $" + $dollars + " dollars anually."

    return $result
}

console.log(block(10000, "Shakiru"))
alert(block(10000, "Shakiru"))
document.write(block(10, "Gods'stime"))