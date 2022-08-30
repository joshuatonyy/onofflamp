function saklar(lampno) {
    if (lampno == 1 || 5) {
        if (document.getElementById("toggle1").checked || document.getElementById("toggle5").checked) {
            console.log('on');
            document.getElementById("lampu1").src = 'assets/images/on.gif'
        }
        else {
            console.log('off');
            document.getElementById("lampu1").src = 'assets/images/off.gif'
        }
    }
    if (lampno == 2 || 5) {
        if (document.getElementById("toggle2").checked || document.getElementById("toggle5").checked) {
            console.log('on');
            document.getElementById("lampu2").src = 'assets/images/on.gif'
        }
        else {
            console.log('off');
            document.getElementById("lampu2").src = 'assets/images/off.gif'
        }
    }
    if (lampno == 3 || 5) {
        if (document.getElementById("toggle3").checked || document.getElementById("toggle5").checked) {
            console.log('on');
            document.getElementById("lampu3").src = 'assets/images/on.gif'
        }
        else {
            console.log('off');
            document.getElementById("lampu3").src = 'assets/images/off.gif'
        }
    }
    if (lampno == 4 || 5) {
        if (document.getElementById("toggle4").checked || document.getElementById("toggle5").checked) {
            console.log('on');
            document.getElementById("lampu4").src = 'assets/images/on.gif'
        }
        else {
            console.log('off');
            document.getElementById("lampu4").src = 'assets/images/off.gif'
        }
    }
}