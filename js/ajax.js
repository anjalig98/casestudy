function ajax(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<response.length;i++){
                if(response[i].completed===true){
                // output+="<li>"+response[i].title+"</li>";
                output+='<input type="checkbox"    disabled checked >'+ response[i].title +"<br>"
                }
                else{
                    output+='<input type="checkbox" id="checked" onchange="check();">'+response[i].title+"<br"
                }
            }
            document.getElementById("demo").innerHTML=output;
        }
    }

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();


function check(){
    var count=0;
    var chckbox=document.getElementById("checked");
    var chcklength=chckbox.length;
        for(let i=0;i<chcklength;i++){
            if(chckbox[i].checked==true){
            count++;
            }
            
        }
        
    }
    if(count==5){
        alert("Congratulations!! You have completed 5 tasks");
    }
}