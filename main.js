 student=[];
 
function submit(){
    con_array=[];
   for (var j=1; j<=4; j++){
       var student_name= document.getElementById("textinput_"+j).value;
       console.log(student_name);
       student.push(student_name);
       
   }
   console.log(student);
  var length=student.length;
  console.log(length);
   for (var k=0; j<length; j++){
   con_array.push("<h4>NAME-"+student[k]+"</h4>") ;
   console.log(con_array);
   }
   

    document.getElementById("sorted_names").innerHTML=con_array;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort(){
    student.sort();
    console.log(student);
    
}

