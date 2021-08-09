menu_list_array = ["Veg Margherita Pizza",
                   "Mushroom Pizza",
                   "Panner and onion pizza",
                   "cheese burst Pizza",
                   "mixex veg pizza"];

function getmenu(){
    console.log("showmenu")
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0; i<menu_list_array.length; i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>';
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML = htmldata;
console.log("gtmenu")
}

function add_item(){
var htmldata;
item =document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var i=0; i<menu_list_array.length;i++){

    htmldata=htmldata+'<div class="card">'
    +'<img style="width:100px" src="pizzaImg.png"/>'
     +menu_list_array[i] + '</div>';
}
   htmldata=htmldata+'</section>';
   document.getElementById("display_addedmenu").innerHTML = htmldata;
   console.log("htmldata="+htmldata);

}

function add_top(){
 var item=document.getElementById("add_item").value;
 console.log("item="+item);
 menu_list_array.push(item);
 console.log("menulistarray="+menu_list_array);
 add_item();
}