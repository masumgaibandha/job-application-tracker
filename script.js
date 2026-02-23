let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let availableJobs = document.getElementById("available-jobs");

const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

const allCards = document.getElementById("all-cards");

function jobCalculation() {
  totalCount.innerText = allCards.children.length;
  availableJobs.innerText = allCards.children.length;

  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  
}
jobCalculation();

const allFilter = document.getElementById("all-filter");
const interviewFilter = document.getElementById("interview-filter");
const rejectedFilter = document.getElementById("rejected-filter");

function toggleStyle(id) {
  allFilter.classList.remove("btn-primary", "text-white");
  interviewFilter.classList.remove("btn-primary");
  rejectedFilter.classList.remove("btn-primary");

  allFilter.classList.add("bg-base-100");
  interviewFilter.classList.add("bg-base-100");
  rejectedFilter.classList.add("bg-base-100");

  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.remove("bg-base-100");
  selected.classList.add("btn-primary");

  if (id == "interview-filter") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "all-filter") {
    allCards.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "rejected-filter") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".btn-delete");
  if (deleteBtn) {
    const card = deleteBtn.closest(".card-body");
    if (!card) return;

    const companyName = card.querySelector(".company-name").innerText;

    interviewList = interviewList.filter(
      (item) => item.companyName !== companyName,
    );
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== companyName,
    );

    const allCardMatch = allCards.querySelectorAll(".card-body");
    for (const card of allCardMatch) {
      const name = card.querySelector(".company-name")?.innerText;
      if (name === companyName) {
        card.remove();
        break;
      }
    }

    card.remove();

    jobCalculation();

    if (currentStatus === "interview-filter") renderInterview();
    if (currentStatus === "rejected-filter") renderRejected();

    return;
  }

  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const benefit = parentNode.querySelector(".benefit").innerText;
    const applyStatus = parentNode.querySelector(".apply-status").innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;
    const interviewBtn = parentNode.querySelector(".interview-btn").innerText;
    const rejectedBtn = parentNode.querySelector(".rejected-btn").innerText;
    const deleteBtn = parentNode.querySelector(".btn-delete").innerText;
    parentNode.querySelector(".apply-status").innerText = "Interview";

    const cardInfo = {
      companyName,
      jobTitle,
      benefit,
      applyStatus: "Interview",
      jobDescription,
      interviewBtn,
      rejectedBtn,
      deleteBtn,
    };
    const companyExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );
    jobCalculation();

    if (currentStatus == "rejected-filter") renderRejected();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const benefit = parentNode.querySelector(".benefit").innerText;
    const applyStatus = parentNode.querySelector(".apply-status").innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;
    const interviewBtn = parentNode.querySelector(".interview-btn").innerText;
    const rejectedBtn = parentNode.querySelector(".rejected-btn").innerText;
    parentNode.querySelector(".apply-status").innerText = "Rejected";

    const cardInfo = {
      companyName,
      jobTitle,
      benefit,
      applyStatus: "Rejected",
      jobDescription,
      interviewBtn,
      rejectedBtn,
    };
    const companyExist = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "interview-filter") {
      renderInterview();
    }

    jobCalculation();
  }

});

function renderInterview() {
  filteredSection.innerHTML = "";
  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "card-body border-2 border-gray-200 rounded-2xl";
    div.innerHTML = `
         <div class="flex justify-between space-y-5">
            <div>
           <div>
             <h2 class="company-name card-title text-xl py-3">${interview.companyName}</h2>
            <p class="job-title">${interview.jobTitle}</p>
            <p class="benefit py-3">${interview.benefit}</p>
            <button class="apply-status btn bg-[#eef4ff]">${interview.applyStatus}</button>
            <p class="job-description py-3">${interview.jobDescription}</p>
           </div>
           <button class="interview-btn btn text-green-500 text-xl px-10 my-5 py-6 border-2 border-green-300">Interview</button>
           <button class="rejected-btn btn text-red-500 text-xl px-10 my-5 py-6 border-2 border-red-500">Rejected</button>
          </div>

          <div class="">
            <button class="btn-delete btn bg-base-100 text-xl rounded-full py-6 px-4"><i class="fa-solid fa-trash"></i></button>
          </div>

          </div>
        `;
    filteredSection.appendChild(div);
  }
}

function renderRejected() {
  filteredSection.innerHTML = "";
  for (let reject of rejectedList) {
    let div = document.createElement("div");
    div.className = "card-body border-2 border-gray-200 rounded-2xl";
    div.innerHTML = `
         <div class="flex justify-between space-y-5">
            <div>
           <div>
             <h2 class="company-name card-title text-xl py-3">${reject.companyName}</h2>
            <p class="job-title">${reject.jobTitle}</p>
            <p class="benefit py-3">${reject.benefit}</p>
            <button class="apply-status btn bg-[#eef4ff]">${reject.applyStatus}</button>
            <p class="job-description py-3">${reject.jobDescription}</p>
           </div>
           <button class="interview-btn btn text-green-500 text-xl px-10 my-5 py-6 border-2 border-green-300">Interview</button>
           <button class="rejected-btn btn text-red-500 text-xl px-10 my-5 py-6 border-2 border-red-500">Rejected</button>
          </div>

          <div class="">
            <button class="btn-delete btn bg-base-100 text-xl rounded-full py-6 px-4"><i class="fa-solid fa-trash"></i></button>
          </div>

          </div>
        `;
    filteredSection.appendChild(div);
  }
}
