function render() {
  document.getElementById("buttons").innerHTML +=
    "<button type='button' id = 'prevButton'> << </button>";
  document.getElementById("buttons").innerHTML +=
    "<button type='button' id = '1'>1</button>";
  document.getElementById("buttons").innerHTML +=
    "<button type='button' id = '2'>2</button>";
  document.getElementById("buttons").innerHTML +=
    "<button type='button' id = '3'>3</button>";
  document.getElementById("buttons").innerHTML +=
    "<button type='button' id = 'nextButton'> >> </button>";

  document.getElementById("nextButton").addEventListener("click", () => {
    if (currentPage < getPages - 1) {
      lastPage = currentPage;
      currentPage += 1;
      console.log("currentPage", currentPage);
      renderElements();
    }
  });
  document.getElementById("prevButton").addEventListener("click", () => {
    if (currentPage > 0) {
      lastPage = currentPage;
      currentPage -= 1;
      console.log("currentPage", currentPage);
      renderElements();
    }
  });

  document.getElementById("1").addEventListener("click", () => {
    lastPage = currentPage;
    currentPage = 0;
    console.log("currentPage", currentPage);
    renderElements();
  });
  document.getElementById("2").addEventListener("click", () => {
    lastPage = currentPage;
    currentPage = 1;
    console.log("currentPage", currentPage);
    renderElements();
  });
  document.getElementById("3").addEventListener("click", () => {
    lastPage = currentPage;
    currentPage = 2;
    console.log("currentPage", currentPage);
    renderElements();
  });
}
render();
