function verifyAge() {
    let age = document.getElementById("age").value;

    if (Number(age) >= 18) {
        document.getElementById("answer").innerHTML = "Status: You are old enough to vote!";
    }

    else {
        document.getElementById("answer").innerHTML = "Status: You are not old enough to vote.";
    }
}