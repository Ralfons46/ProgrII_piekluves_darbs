// Funkcija, kas aktivizē JSON failā atrodošo datu attēlošanu HTML tabulā
function dataShowing() {
  const getJsonHttpRequest = new XMLHttpRequest();
//Datu pieprasīšana
  getJsonHttpRequest.onreadystatechange = (data) => {
    if (data.target.readyState == 4 && data.target.status === 200) {
      //Tālāka datu izvadīšana HTML tabulā
      const jsonData = JSON.parse(data.target.responseText);
      const myTable = document.querySelector("#datu_tabula");
      // Each row palīdz katrā jaunā tabulas rindā veidot ierakstu
      jsonData.forEach((row) => {
        myTable.insertAdjacentHTML(
          "beforeend",
          // Tabulas izveidne "tr" tabulas galvene, savukārt "td" apakšdati
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
