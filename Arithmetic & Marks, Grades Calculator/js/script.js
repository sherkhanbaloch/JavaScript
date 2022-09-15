
function percentage() {
    var obt = document.getElementById('inputObtMarks').value;
    var total = document.getElementById('inputTotalMarks').value;
    var percentage = parseFloat(obt) / parseFloat(total) * 100;
    document.getElementById("percentageResult").innerHTML = "Percentage: " + percentage;
}

function grades() {
    var obt = document.getElementById('inputObtMarks').value;
    var gradeResult = document.getElementById("gradeResult");

    if (obt > 680) {
        gradeResult.innerHTML = "Grade: A-1";
    } else if (obt >= 595 && obt <= 679) {
        gradeResult.innerHTML = "Grade: A";
    } else if (obt >= 510 && obt <= 594) {
        gradeResult.innerHTML = "Grade: B";
    } else if (obt >= 425 && obt <= 509) {
        gradeResult.innerHTML = "Grade: C";
    } else if (obt >= 340 && obt <= 424) {
        gradeResult.innerHTML = "Grade: D";
    } else if (obt >= 280 && obt <= 339) {
        gradeResult.innerHTML = "Grade: E";
    } else {
        gradeResult.innerHTML = "Grade: No Grade";
    }

    // if (obt >= 280) {
    //     marksResultt.innerHTML = "Result: Pass";
    // } else {
    //     marksResultt.innerHTML = "Result: Fail";
    // }
}