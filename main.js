// navbar
let navA = document.querySelectorAll("nav ul li");
console.log(navA);
navA.forEach((e) => {
  e.onclick = () => {
    navA.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  };
});
// popular category
let popCat = document.querySelectorAll(".tabs li");
console.log(popCat);
popCat.forEach((e) => {
  e.onclick = () => {
    popCat.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  };
});

// all data
let data = function () {
  fetch("./data.json") // Ensure books.json is in the same directory or provide the correct path
    .then((response) => response.json())
    .then((data) => {
      data.books.forEach((book) => {
        let bookCard = document.createElement("div");
        let row = document.getElementById("first");
        let col = document.createElement("div");

        col.classList.add("col-md-3");
        bookCard.classList.add("product-item");
        bookCard.innerHTML = `
                        <img src="${book.image}" alt="${book.name}" class="product-item">
                        <h3>${book.name}</h3>
                        <p>Author: ${book.author}</p>
                        <p>Price: ${book.price}</p>
                    `;
        col.appendChild(bookCard);
        row.appendChild(col);
        allData.append(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
let rrr = document.getElementById("first").innerHTML;
let allGenre = document.getElementById("allData");
let allData = document.getElementById("all-genre");
allGenre.addEventListener("click", function (e) {
  console.log(e.target);
  data();
});

// category
let businessData = function () {
  fetch("./data.json") // Ensure books.json is in the same directory or provide the correct path
    .then((response) => response.json())
    .then((data) => {
      data.books.filter((book) => {
        if (book.category === "business") {
          let bookCard = document.createElement("div");
          let row = document.createElement("div");
          row.classList.add("col-md-3");
          bookCard.classList.add("product-item");
          bookCard.innerHTML = `
                        <img src="${book.image}" alt="${book.name}" class="product-item">
                        <h3>${book.name}</h3>
                        <p>Author: ${book.author}</p>
                        <p>Price: ${book.price}</p>
                    `;
          row.appendChild(bookCard);
          business.appendChild(row);
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};

// // business
let businessTab = document.getElementById("businessTab");
let business = document.getElementById("business");
businessTab.addEventListener("click", () => {
  business.classList = "active" ? businessData() : "";
});

// // technology
let technologyData = function () {
  fetch("./data.json") // Ensure books.json is in the same directory or provide the correct path
    .then((response) => response.json())
    .then((data) => {
      data.books.filter((book) => {
        if (book.category === "technology") {
          let bookCard = document.createElement("div");
          let row = document.createElement("div");
          row.classList.add("col-md-3");
          bookCard.classList.add("product-item");
          bookCard.innerHTML = `
                        <img src="${book.image}" alt="${book.name}" class="product-item">
                        <h3>${book.name}</h3>
                        <p>Author: ${book.author}</p>
                        <p>Price: ${book.price}</p>
                    `;
          row.appendChild(bookCard);
          business.appendChild(row);
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
let technologyTab = document.getElementById("technologyTab");
let technology = document.getElementById("technology");
technologyTab.addEventListener("click", (e) => {
  technologyData();
});

// // romantic
let romanticData = function () {
  fetch("./data.json") // Ensure books.json is in the same directory or provide the correct path
    .then((response) => response.json())
    .then((data) => {
      data.books.filter((book) => {
        if (book.category === "romantic") {
          let bookCard = document.createElement("div");
          let row = document.createElement("div");
          row.classList.add("col-md-3");
          bookCard.classList.add("product-item");
          bookCard.innerHTML = `
                        <img src="${book.image}" alt="${book.name}" class="product-item">
                        <h3>${book.name}</h3>
                        <p>Author: ${book.author}</p>
                        <p>Price: ${book.price}</p>
                    `;
          row.appendChild(bookCard);
          business.appendChild(row);
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
let romanticTab = document.getElementById("romanticTab");
let romantic = document.getElementById("romantic");
romanticTab.addEventListener("click", (e) => {
  romanticData();
});

// // adventure
let adventureData = function () {
  fetch("./data.json") // Ensure books.json is in the same directory or provide the correct path
    .then((response) => response.json())
    .then((data) => {
      data.books.filter((book) => {
        if (book.category === "adventure") {
          let bookCard = document.createElement("div");
          let row = document.createElement("div");
          row.classList.add("col-md-3");
          bookCard.classList.add("product-item");
          bookCard.innerHTML = `
                        <img src="${book.image}" alt="${book.name}" class="product-item">
                        <h3>${book.name}</h3>
                        <p>Author: ${book.author}</p>
                        <p>Price: ${book.price}</p>
                    `;
          row.appendChild(bookCard);
          business.appendChild(row);
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
let adventureTab = document.getElementById("adventureTab");
let adventure = document.getElementById("adventure");
adventureTab.addEventListener("click", (e) => {
  adventureData();
});

// // fictional
let fictionalData = function () {
  fetch("./data.json") // Ensure books.json is in the same directory or provide the correct path
    .then((response) => response.json())
    .then((data) => {
      data.books.filter((book) => {
        if (book.category === "fictional") {
          let bookCard = document.createElement("div");
          let row = document.createElement("div");
          row.classList.add("col-md-3");
          bookCard.classList.add("product-item");
          bookCard.innerHTML = `
                        <img src="${book.image}" alt="${book.name}" class="product-item">
                        <h3>${book.name}</h3>
                        <p>Author: ${book.author}</p>
                        <p>Price: ${book.price}</p>
                    `;
          row.appendChild(bookCard);
          business.appendChild(row);
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
let fictionalTab = document.getElementById("fictionalTab");
let fictional = document.getElementById("fictional");
fictionalTab.addEventListener("click", (e) => {
  fictionalData();
});
