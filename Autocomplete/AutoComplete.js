var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
names = names.sort();
var focus = -1;
function insertData(e) {
    document.getElementById("cross").style.display = "inline";
    if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {
        focus = 0;
        var flag = 0;
        var data = document.getElementById("name").value;
        var optionList = document.getElementById("options");
        var listItems = "<ul id='unorderedlist'>";
        var flagFirstElementHover = 0;
        for (var i = 0; i < names.length; i++) {
            if (names[i].toUpperCase().includes(data.toUpperCase())) {
                listItems += "<li id='" + i + "' onclick='selectData(this.innerHTML)'>" + names[i] + "</li>";
                flag = 1;
            }
        }
        if (flag == 1)
            listItems += "</ul>";
        else
            listItems = "<li>No Data Found</li></ul>";
        if (data == "") {
            optionList.innerHTML = "";
        }
        else {
            optionList.innerHTML = listItems;
        }
    }
}
function selectData(data) {
    document.getElementById("name").value = data;
    document.getElementById("options").innerHTML = "";
}
function removeData() {
    document.getElementById("name").value = "";
    document.getElementById("options").innerHTML = "";
    document.getElementById("cross").style.display = "none";
}
function removeSuggestionBoxOnClick() {
    document.getElementById("options").innerHTML = "";
}
function selectItem(evt) {
    var list = document.getElementById("unorderedlist");
    if (evt.keyCode == 40 && focus < list.childElementCount - 1) {
        focus++;
        list.childNodes[focus].style.backgroundColor = "#000000";
        list.childNodes[focus].style.color = "#ffffff";
        list.childNodes[focus].scrollIntoView();
        if(focus>0)
        {
        list.childNodes[focus - 1].style.backgroundColor = "#ffffff";//
        list.childNodes[focus - 1].style.color = "#000000";
        }
    }
    else if (evt.keyCode == 38 && focus > 0) {
        focus--;
        list.childNodes[focus].style.backgroundColor = "#000000";
        list.childNodes[focus].style.color = "#ffffff";
        list.childNodes[focus].scrollIntoView();
        
        list.childNodes[focus + 1].style.backgroundColor = "#ffffff";//
        list.childNodes[focus + 1].style.color = "#000000";
    }
}

