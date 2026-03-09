//TASK 2
  <script>
   function alertFun(){
    alert("Hello !");
   }

   function confirmFun(){
     let didConfirm = confirm("Are you sure about that?");
     if(didConfirm){
       alert("You confirmed :)");
     }else{
      alert("You did not confirm :(");
     }
   }

   function promptFun(){
    let val = prompt("What is your name?");
    alert(`You've entered: ${val}`);
   }

  </script>

  //TASK 3

  //get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);//get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);//redirects the page to another url
}

window.onload = function(event){
   console.log("Page has loaded");
   //do other javascript stuff here
}

//TASK 4

const result = document.querySelector('#result');
result.innerHTML = '<h2>My Span</h2>';
result.style.color = 'blue';


//TASK 5

<input id="myBtn" type="button" onclick="myFun()" value="click me"/>

<script>
  function myFun(){
    alert("hello");  
  }

  function myFun2(){
    console.log("myFun2 called");
  }

 //receives the event parameter from addEventListener high order function
  function logEventType(event){
    console.log(event.type);
  }

  let myBtn = document.querySelector("#myBtn");

  //attach myFun2 in addition to myFun to the click event of myBtn
  myBtn.addEventListener("click", myFun2);

  //There are other events such as mouseover and mouseout
  
  //Any callback passed to addeventListener receives an event object
  myBtn.addEventListener("mouseover", logEventType);//logs 'mouseover'
  myBtn.addEventListener("mouseout", logEventType);// logs 'mouseout'
 //these events will fire when the mouse pointer hovers/passes over the button
</script>

//TASK 6

let obj2 = myobj;

//obj2 and myobj are the same variable

obj2.name = "Shelly";

console.log(myobj.name);//Shelly

//if you need to create a new object and copy its values use Object.assign

let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';

console.log(myobj.name, obj3.name);//Shelly, Smith


//TASK 6.1




//TASK 6

function drawTable(records){
    let result = document.querySelector('#result');
    //add html code inside of result
    let html = '';// create html string
    for(let record of records){
        //build html string
        html += `<tr>
          <td>${record.id}</td>
          <td>${record.name}</td>
          <td>${record.brewery_type}</td>
          <td>${record.website_url}</td>    
        </tr>`;
    }
    result.innerHTML = html;//add html string to DOM
}

//testing the function
drawTable([{
   id: 1,
   name: "bob's",
   brewery_type: "fire",
   website_url:"https://bobs.com"
}]);

//TASK OPEN URL

https://api.openbrewerydb.org/breweries/search?query=harry

TASK 6.2

//function MUST be declared async
async function getData(url){
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     drawTable(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}
getData("https://api.openbrewerydb.org/breweries/search?query=harry")




