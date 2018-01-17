$(document).ready(function(){
  $("#whatpalindrome").submit(function(event){
    event.preventDefault();
    var input=$(".input").val();
    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    var joinArray=reverseArray.join("");

    if (input!=joinArray){
      $(".result").show();
      $("#notpalindrome").show();
    } else {
      $(".result").show();
      $("#palindrome").show();

    }
  });

  $("#reset").click(function(){
    $(".input").empty();
    $(".result").hide();

  });

});
