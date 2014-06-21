var title=document.getElementById("title"),

  desc=document.getElementById("desc"),

  list=document.getElementById("list"),

  submit=document.getElementById("submit"),

  listItems=[{title: "Make breakfast", desc: "Cook eggs"}];

  function titDescGet(){

    var obj = {

      title:title.value,
      desc:desc.value
    };

    return obj;
  };
submit.addEventListener("click",function(){addToList()},false);

function addToList(){

  var value=titDescGet();
  listItems.push(value);
  updateList();

  };

  function updateList(){

  list.innerHTML="";

    for( var i=0, listUp = listItems.length;i<listUp;i++){

      var item = document.createElement("li");
      item.innerHTML="<strong>" + listItems[i].title + "</strong> " + listItems[i].desc + "<a href=\"#\" data-list-number=\""+i+"\">--------x</a>";
      list.appendChild(item);

    };

  };

  document.addEventListener("click",function(evt){
    if(evt.srcElement.dataset.listNumber){
      alert("Do you want to remove this item?");
      var number= parseInt(evt.srcElement.dataset.listNumber);
      listItems.pop(number)
      updateList();
    };
  },false);
