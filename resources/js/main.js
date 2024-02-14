const container = document.querySelector(".container");
const row = document.querySelector(".row");
const spinner = document.querySelector(".spinner-border");

(async () => {
  const response = await fetch(`https://api.sampleapis.com/coffee/hot`);
  const data = await response.json();
  data.map((element) => {
    row.innerHTML += `
    <div class="col-sm-6 col-md-6 col-lg-6">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              class="card-img-top img-fluid"
              src="${element.image}"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">
                "${element.description}"
              </p>
              <p class="card-text">
              <small class="text-muted">ingredients: 
                  ${element.ingredients.map((ingredient) => ingredient)}
              </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  });

  setTimeout(() => {
    spinner.style.opacity = "0";
  }, 500);
})();
