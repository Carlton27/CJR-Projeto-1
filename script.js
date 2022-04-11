const USER_PER_PAGE = 5;
let currentPage = 0;
let getPages = getTotalPages();
let lastPage = 0;

function getTotalPages() {
  return Math.ceil(users.length / USER_PER_PAGE);
}

function createRow(users) {
  return rowsData.map(createRows);
}

function createRows() {
  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Nome";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Email";
  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "Cadastro em";
  let heading_4 = document.createElement("th");
  heading_4.innerHTML = " ";
  let heading_5 = document.createElement("th");
  heading_5.innerHTML = " ";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  row_1.appendChild(heading_5);
  tables[0].tHead.appendChild(row_1);

  let usersPerPage = letUserPage();
  usersPerPage.map((userPage, index) => {
    userPage.map((user) => {
      let row_1 = document.createElement("tr");
      let heading_1 = document.createElement("td");
      heading_1.innerHTML = `${user.first_name} ${user.last_name}`;
      let heading_2 = document.createElement("td");
      heading_2.innerHTML = user.email;
      let heading_3 = document.createElement("td");
      heading_3.innerHTML = user.created_at;

      let heading_4 = document.createElement("td");

      var edit_btn = document.createElement("input");
      edit_btn.type = "button";
      edit_btn.className = "button_editar";
      edit_btn.value = "editar";
  
      heading_4.appendChild(edit_btn);

      let heading_5 = document.createElement("td");

      var btn = document.createElement("input");
      btn.type = "button";
      btn.className = "button_excluir";
      btn.value = "excluir";
      btn.onclick = (deleteUser(user.id));
      heading_5.appendChild(btn);

      
      row_1.appendChild(heading_1);
      row_1.appendChild(heading_2);
      row_1.appendChild(heading_3);
      row_1.appendChild(heading_4);
      row_1.appendChild(heading_5);
      tables[index].tHead.appendChild(row_1);
    });
  });
}
function letUserPage() {
  let usersArray = [];
  let currentArray = [];
  users.map((user, index) => {
    currentArray.push(user);
    if (currentArray.length == 5) {
      usersArray.push(currentArray);
      currentArray = [];
    }
    if (currentArray.length < 5 && index + 1 == users.length) {
      usersArray.push(currentArray);
    }
  });
  return usersArray;
}

function renderUserTable() {
  let tables = [];
  let tbodys = [];

  for (let i = 0; i < getPages; i++) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    tbodys.push(tbody);
    tables.push(table);
  }

  return tables;
}

function renderFirstTime() {
  document.getElementById("table").appendChild(tables[currentPage]);
}
function renderElements() {
  document
    .getElementById("table")
    .replaceChild(tables[currentPage], tables[lastPage]);
}


function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
//não funciona se chamar renderElements
}



tables = renderUserTable();
createRows();
renderFirstTime();
