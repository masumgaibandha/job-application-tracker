let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let availableJobs = document.getElementById("available-jobs");

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
  selected.classList.remove("bg-base-100");
  selected.classList.add("btn-primary");
}

const mainContainer = document.querySelector("main");
mainContainer.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  const companyName = parentNode.querySelector(".company-name").innerText;
  const jobTitle = parentNode.querySelector(".job-title").innerText;
  const benefit = parentNode.querySelector(".benefit").innerText;
  const applyStatus = parentNode.querySelector(".apply-status").innerText;
  const jobDescription = parentNode.querySelector(".job-description").innerText;
  const interviewBtn = parentNode.querySelector(".interview-btn").innerText;
  const rejectedBtn = parentNode.querySelector(".rejected-btn").innerText;
//   const deleteBtn = parentNode.querySelector('.btn-delete').innerText;

  const cardInfo = {
    companyName,
    jobTitle,
    benefit,
    applyStatus,
    jobDescription,
    interviewBtn,
    rejectedBtn,
    
  };
  const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName)
  if(!companyExist){
    interviewList.push(cardInfo)
  }
  console.log(interviewList)
});


