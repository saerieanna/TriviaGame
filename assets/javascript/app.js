$(document).ready(function(){

var number= 30;
var intervalID;
$("#answers").hide();
$("#score").hide();



function run() {
if (number >0);
intervalID = setInterval(thirtyseconds, 1000);

function stop(){
  	clearInterval(intervalID);
  }


function thirtyseconds() {
  number = number - 1;
  $("#timeLeft").html("<h2>" + number + "</h2>");

  if (number <= 0) {
  	alert("Times's Up!");
    stop();
    $("#maincontent").hide();
    $("#answers").show();
    $("#score").show();
  }
 }



//put in the prevent click button function for the start button countdown.
var correct = 0;
var incorrect = 0;



function evaluateanswer1() {
	if ($('input.radio[name=inlineRadioOptions1].checked').val() == "Backward") {
	correct++;
	$(".correct").html(correct);
	}
   else {
	incorrect++;
	$(".incorrect").html(incorrect);
}
}
evaluateanswer1();

function evaluateanswer2() {
	if ($('input.radio[name=inlineRadioOptions2].checked').val() == "four") {
		correct++;
		$(".correct").html(correct);
} else {
	incorrect++;
	$(".incorrect").html(incorrect);
}
}
evaluateanswer2();

function evaluateanswer3() {
	if ($('input.radio[name=inlineRadioOptions3].checked').val() == "Wacker") {
		correct++;
		$(".correct").html(correct);
} else {
	incorrect++;
	$(".incorrect").html(incorrect);
}
}
evaluateanswer3();

function evaluateanswer4() {
	if ($('input.radio[name=inlineRadioOptions4].checked').val() == "hohos") {
		correct++;
		$(".correct").html(correct);
} else {
	incorrect++;
	$(".incorrect").html(incorrect);
}
}
evaluateanswer4();

}

$("button").click(function() {
	run()
})




});




 