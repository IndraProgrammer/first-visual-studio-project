
function submit(){
    var nameofthestudentarray=[];
    var displaystudentarray=[];
    for(var j=1;j<=4;j++){
        var studentname=document.getElementById("name_of_the_student_"+j).value;
    console.log(studentname);
    nameofthestudentarray.push(studentname);
    }
      var lenghtofarray=nameofthestudentarray.lenght;
      console.log(lenghtofarray);
      for(var j=0;j<=lenghtofarray;j++){
       displaystudentarray.push("<h4>NAME - "+ nameofthestudentarray[j] + "</h4>");
       console.log(displaystudentarray[j]+"inloop");
      }
      document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
}