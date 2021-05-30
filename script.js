
let mainDiv = document.querySelector(".container");
let mainHeader = document.querySelector(".myHeader");
let mainBody = document.querySelector(".myBody");
let headerSelect = document.querySelector(".select-div")

let divSearch = document.querySelector(".search-box");
let searchBox = document.querySelector(".search-txt");
searchBox.addEventListener("keyup", () => {
  let searchBox = document.querySelector(".search-txt");
  searchBox = searchBox.value.toLowerCase();
  let divForsearch = document.getElementsByClassName("cards");

  for (let i = 0; i < divForsearch.length; i++) {
    if (!divForsearch[i].innerHTML.toLowerCase().includes(searchBox)) {
      divForsearch[i].style.display = "none";
    } else {
      divForsearch[i].style.display = "block";
    }
  }
});

const myfunc = async () => {
  try {
    let apiAddrese = await axios.get("https://api.tvmaze.com/shows/82/episodes");
    for (let i = 0; i < apiAddrese.data.length; i++) {
      let createNewDiv = document.createElement("div");
      createNewDiv.classList = "cards";
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
      image.classList = "imagee";
      createNewDiv.append(image);

      let createNewP = document.createElement("p");
      createNewP.innerHTML = apiAddrese.data[i].summary;
      createNewDiv.append(createNewP);
      mainDiv.append(createNewDiv);

      let createOption = document.createElement("option");
      createOption.setAttribute("class", "opption")
      if (apiAddrese.data[i].number <= 9) {
        createOption.innerHTML = `S0${apiAddrese.data[i].season}E0${apiAddrese.data[i].number} - ${apiAddrese.data[i].name};`
      } else {
        createOption.innerHTML =`S0${apiAddrese.data[i].season}E${apiAddrese.data[i].number} - ${apiAddrese.data[i].name};`
      }

      let mySelectBox = document.querySelector(".select-box");
      mySelectBox.append(createOption);
      headerSelect.append(mySelectBox);

      mySelectBox.addEventListener("change", () => {
        let DivForPage = document.getElementsByClassName("cards");

        let optionForSelect = document.getElementsByClassName("opption");
        //let head = document.getElementsByClassName("header")
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

    let defaultPage = document.querySelector(".homebtn");
        defaultPage.addEventListener("click", () => {
          defaultPage.href = `${i.url};`
        });
  } catch (err) {
    console.log("error", err);
  }
};
myfunc();

//////////////////////
