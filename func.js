function saklar(lampno) {
    if (lampno == 1) {
        if (document.getElementById("toggle1").checked) {
            console.log('on');
            document.getElementById("lampu1").src = 'assets/images/on.gif'
        }
        else {
            console.log('off');
            document.getElementById("lampu1").src = 'assets/images/off.gif'
        }
    }
    if (lampno == 2) {
        if (document.getElementById("toggle2").checked) {
            console.log('on');
            document.getElementById("lampu2").src = 'assets/images/on.gif'
        }
        else {
            console.log('off');
            document.getElementById("lampu2").src = 'assets/images/off.gif'
        }
    }
    if (lampno == 3) {
        if (document.getElementById("toggle3").checked) {
            console.log('on');
            document.getElementById("lampu3").src = 'assets/images/on.gif'
        }
        else {
            console.log('off');
            document.getElementById("lampu3").src = 'assets/images/off.gif'
        }
    }

}