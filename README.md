# ProgrII_piekluves_darbs
Mana projekta darba visi faili atrodas šajā repozitorijā.


Vietne, kurā skolēni var pieteikties uz konsultācijām elektroniski.




JSON izvade uz HTML tabulu:


function dataShowing() {

  const getJsonHttpRequest = new XMLHttpRequest();
  
  getJsonHttpRequest.onreadystatechange = (data) => {
  
    if (data.target.readyState == 4 && data.target.status === 200) {
    
      const jsonData = JSON.parse(data.target.responseText);
      
      const myTable = document.querySelector("#datu_tabula");
      
      jsonData.forEach((row) => {
      
        myTable.insertAdjacentHTML(
        
          "beforeend",
          
          `
            <tr>
              <td>${row["vards"]}</td> 
              
              <td>${row["uzvards"]}</td>
              
              <td>${row["prieksmets"]}</td>
              
              <td>${row["kabinets"]}</td> 
              
              <td>${row["kons1"]}</td>   
              
              <td>${row["kons2"]}</td>
              
              <td>${row["kons3"]}</td>   
              
              <td>${row["kons4"]}</td>
              
              <td>${row["kons5"]}</td>   
              
            </tr>
            
           `
           
        );
        
      });
      
    }
    
  };
  
  // Iegūst datus no skolotāji.json un izvada tos
  
  getJsonHttpRequest.open("GET", "./skolotaji.json");
  
  getJsonHttpRequest.send();
  
}

  
  
  
  
CSS stilizācija gandrīz atbilstoša JVĢ oficiālajai mājas lapai:

Sarkans header:
header {
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  padding: 5px 20px;
  background: #900808;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  
  Hover un navigācijas pogas:
  .navigation a {
  position: relative;
  font-size: 1.1em;
  color:#ddc5c5;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;
}

.navigation a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: #fff;
  border-radius: 5px;
  transform: scaleX(0);
  transition: transform .3s;
}

.navigation a:hover::after {
  transform: scaleX(1);
}

.navigation .btnLogin-popup {
  width: 100px;
  height: 30px;
  background: transparent;
  border: 2px solid #ddc5c5;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: #ddc5c5;
  font-weight: 500;
  margin-left: 40px;
  transition: .3s;
}

.navigation .btnLogin-popup:hover {
  background: #474747;
  color: #ddc5c5;
}


Un datu saglabāšanas scripts, kurš saglabā datus FireBase datubāzē (Datubāze lokāla un viegli izveidojama)
var firebaseConfig = {
      apiKey: "AIzaSyD9oJsD3sYD7J5ggJUPLssFXJI0C5qNhgU",
      authDomain: "test-f9a5a.firebaseapp.com",
      //ProjectId ir manas datubāzes tiešais nosaukums test-f9a5a
      projectId: "test-f9a5a",
      storageBucket: "test-f9a5a.appspot.com",
      messagingSenderId: "912892423769",
      appId: "1:912892423769:web:c9ce48cce67c5718948b48"
    };
//Norāda parametrus, kurus nolasa un saglabā datubāzē
    firebase.initializeApp(firebaseConfig);
    var firebaseDati = firebase.database().ref('vards', 'macprieksmets', 'konsultdiena', 'konsultlaiks');
    document.querySelector("#send").addEventListener('click', () => {
      var firebaseDati = document.getElementById("vards', 'macprieksmets', 'konsultdiena', 'konsultlaiks").value;
      //Ievadītos datus ar PUSH metodi nogādā datu bāzē
      firebaseDati.push(vards, macprieksmets, konsultdiena, konsultlaiks);
      
var firebaseConfig tiek iedoti, izveidojot lokālo datubāzi. Atliek tikai uztaisīt funkciju ar kuras palīdzību nogādāt datus uz datubāzi.


Bibliotēku pieimportēšana un skriptu pieimportēšana notiek šādi:

link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<script src="https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"></script>

