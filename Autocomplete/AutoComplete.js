function insertData(e){
	var flag=0;
    var names=["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
    names=names.sort();
    var data=document.getElementById("name").value;
    var optionList=document.getElementById("options");
    var listItems="<ul onkeypress='selectItem(event)'>";
    names.forEach(element => {
        if(element.toUpperCase().includes(data.toUpperCase()))
        {
            listItems+="<li id='"+element+"' onclick='selectData(this.id)' onkeydown='selectItem(event,this.value')>"+element+"</li>";
            console.log(listItems);
            flag=1;
        }
    });
    if(flag==1)
        listItems+="</ul>";
    else
        listItems="<li>No Data Found</li></ul>";
    if(data=="")
        optionList.innerHTML="";
    else
        optionList.innerHTML=listItems;
}
function selectData(data){
    document.getElementById("name").value=data;
    document.getElementById("options").innerHTML="";
}
function removeData(){
    document.getElementById("name").value="";
    document.getElementById("options").innerHTML="";
}


