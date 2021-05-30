let mainDiv = document.querySelector(".container");
let mainHeader = document.querySelector(".myHeader");
let mainBody = document.querySelector(".myBody");
let headerSelect = document.querySelector(".select-div");
let divSearch = document.querySelector(".search-box");
let searchBox = document.querySelector(".search-txt");
searchBox.addEventListener("keyup", () => {
  let searchBox = document.querySelector(".search-txt");
  searchBox = searchBox.value.toLowerCase();
  let mainHeader = document.getElementsByClassName("cards");

  for (let i = 0; i <  mainHeader.length; i++) {
    if (!mainHeader[i].innerHTML.toLowerCase().includes(searchBox)) {
      mainHeader[i].style.display = "none";
    } else {
      mainHeader[i].style.display = "block";
    }
  }
});

const myfunc = async () => {
  try {
    let apiAddrese = await axios.get("https://api.tvmaze.com/shows/82/episodes");
    for (let i = 0; i < apiAddrese.data.length; i++) {
      let createNewDiv = document.createElement("div");
      createNewDiv.setAttribute("class", "cards");
      let headerForDiv = document.createElement("h2");
      if (apiAddrese.data[i].number <= 9) {
        headerForDiv.innerText = `${apiAddrese.data[i].name}- S0${apiAddrese.data[i].season}E0${apiAddrese.data[i].number} ;`
        createNewDiv.append(headerForDiv);
      } else {
        headerForDiv.innerText = `${apiAddrese.data[i].name}- S0${apiAddrese.data[i].season}E${apiAddrese.data[i].number} ;`
        createNewDiv.append(headerForDiv);
      }

      let image = document.createElement("img");
      image.src = apiAddrese.data[i].image.medium;
      image.setAttribute("class", "imagee");
      createNewDiv.append(image);

      let createNewP = document.createElement("p");
      createNewP.setAttribute("class", "createNewP");
      createNewP.innerHTML = apiAddrese.data[i].summary;
      createNewDiv.append(createNewP);
      mainDiv.append(createNewDiv);

      let createNewP2 = document.createElement("p");
      createNewP2.style.backgroundColor = "#e0d49e";
      createNewP2.style.margin = "20px";
      createNewP2.style.color = "black";
      createNewP2.style.borderRadius = "20px";
      createNewP2.innerHTML = runtime ;`${apiAddrese.data[i].runtime};`
      createNewDiv.append(createNewP2);
      mainDiv.append(createNewDiv);


      let createOption = document.createElement("option");
      createOption.setAttribute("class", "opption")
      if (apiAddrese.data[i].number <= 9) {
        createOption.innerHTML = `S0${apiAddrese.data[i].season}E0${apiAddrese.data[i].number} - ${apiAddrese.data[i].name}`;
      } else {
        createOption.innerHTML = `S0${apiAddrese.data[i].season}E${apiAddrese.data[i].number} - ${apiAddrese.data[i].name}`;
      }

      let mySelectBox = document.querySelector(".select-box");
      mySelectBox.append(createOption);
      headerSelect.append(mySelectBox);
      mySelectBox.addEventListener("change", () => {
        let DivForPage = document.getElementsByClassName("cards");
        let optionForSelect = document.getElementsByClassName("opption");
        let selectForPage = mySelectBox.options[mySelectBox.selectedIndex].text;
        console.log(selectForPage);
        for (let i = 0; i < mySelectBox.length; i++) {
          console.log(DivForPage[i].value);
          if (optionForSelect[i].value === selectForPage) {
            DivForPage[i].style.display = "block";
          } else {
            DivForPage[i].style.display = "none";
          }
        }
      });
      headerSelect.append(mySelectBox);
    }
    let defaultPage = document.querySelector(".homebtn")
    defaultPage.addEventListener("click", ()=>{
      defaultPage.href = `${i.url}`
    })
  } 
  catch (err) {
    console.log("error", err);
  }
};
myfunc();