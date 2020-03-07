let array = [{
    firstName: "Abdulaziz",
    lastName: "Althagafi",
    pin: "1234",
    balance: 3200
},
{
    firstName: "Mohammed",
    lastName: "Alqahtani",
    pin: "9876",
    balance: 500
}]
$('#screen__landing').hide()
$('#screen__withdrawal').hide()
$('#screen__deposit').hide()
$('#screen__balance').hide()

let pass = ""
let withdrawal = ""
for(let i = 0; i < 10; i++){
    $('#' + i).click(function(){
        pass = pass + $('#' + i).text()
        $("#pass").attr("value", pass);
    })
}
$('#cancle').click(function(){
    window.location.reload();
})
    
$('#recorrect').click(function(){
    pass = ""
    $("#pass").attr("value", pass);
})

$('#correct').click(function(){
    array.forEach(function(index){
        let pin = index.pin
        if(pass == pin){
            $('#screen__pin').hide()
            $('#screen__landing').show()
            $('#screen__withdrawal').hide()
            $('#screen__deposit').hide()
            $('#screen__balance').hide()
            function getTime(){
                let date = new Date();
                let hour = date.getHours()
                let minute = date.getMinutes()
                let day = date.getDate()
                let month = date.getMonth()
                let year = date.getFullYear()
                if (minute < 10) {
                    minute = "0" + minute
                    $('#time').text(hour + ":" + minute);
                } else if(hour < 10) {
                    hour = "0" + hour
                    $('#time').text(hour + ":" + minute);
                } else {
                    $('#time').text(hour + ":" + minute);
                }
                $('#date').text(day + " " + month + " " + year)
            }
            setInterval(getTime, 1000);
            $('#money').text(index.balance)
            $('#name').text(index.firstName)
            $('#balance').click(function(){
                $('#screen__pin').hide()
                $('#screen__landing').hide()
                $('#screen__withdrawal').hide()
                $('#screen__deposit').hide()
                $('#screen__balance').show()
                $('#money').text(index.balance)
                $('#name').text(index.firstName)
            })
            $('#withdraw').click(function(){
                $('#screen__pin').hide()
                $('#screen__landing').hide()
                $('#screen__withdrawal').show()
                $('#screen__deposit').hide()
                $('#screen__balance').hide()
                $('#displayBalance').text(index.balance)
                for(let i = 0; i < 10; i++){
                    $('#w' + i).click(function(){
                        withdrawal = withdrawal + $('#w' + i).text()
                        $("#withdrawInput").attr("value", withdrawal);
                    })
                }
                $('#withdrawInput').keypress(function (e) {
                    let key = e.which;
                    if(key == 13){  // the enter key code
                        if(index.balance >= withdrawal){
                            index.balance = index.balance - withdrawal
                            $('#displayBalance').text(index.balance)
                        } else {
                            $('#displayBalance').text(index.balance)
                            $('#msg').text("You know you don't have that money what are you doing??")
                        }
                    }
                });
                $('#withdrawGoBack').click(function(){
                    $('#screen__pin').hide()
                    $('#screen__landing').show()
                    $('#screen__withdrawal').hide()
                    $('#screen__deposit').hide()
                    $('#screen__balance').hide()
                    withdrawal = ""
                    $("#withdrawInput").attr("value", withdrawal);
                })
                withdrawal = ""
            })
        }else {
            $('.screenPinContainer > p').text("theif!!! theif!!! theif!!!")
        }
    })
})