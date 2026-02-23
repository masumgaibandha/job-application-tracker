const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const availableJobs = document.getElementById('available-jobs')

const allCards = document.getElementById('all-cards')


totalCount.innerText = allCards.children.length
availableJobs.innerText = allCards.children.length;

const allFilter = document.getElementById('all-filter')
const interviewFilter = document.getElementById('interview-filter');
const rejectedFilter = document.getElementById('rejected-filter');


function toggleStyle(id){
    allFilter.classList.remove('btn-primary', 'text-white')
    interviewFilter.classList.remove('btn-primary')
    rejectedFilter.classList.remove('btn-primary')

    allFilter.classList.add('bg-base-100')
    interviewFilter.classList.add('bg-base-100');
    rejectedFilter.classList.add('bg-base-100')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-base-100')
    selected.classList.add('btn-primary')
}
