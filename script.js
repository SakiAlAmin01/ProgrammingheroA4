// ====== JOB DATA ======
const jobs = [
  { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$100,000 - $120,000", description: "Build cross-platform mobile applications for global clients.", status: "all" },
  { id: 2, company: "WebFlow Agency", position: "UI/UX Designer", location: "Los Angeles", type: "Part-time", salary: "$60,000 - $80,000", description: "Design modern interfaces for SaaS platforms.", status: "all" },
  { id: 3, company: "CloudFirst Inc", position: "Backend Developer", location: "Berlin", type: "Full-time", salary: "$90,000 - $110,000", description: "Develop scalable APIs using Node.js.", status: "all" },
  { id: 4, company: "DataViz Solutions", position: "Data Analyst", location: "New York", type: "Full-time", salary: "$85,000 - $105,000", description: "Analyze large datasets and generate reports.", status: "all" },
  { id: 5, company: "InnovaTech", position: "Frontend Developer", location: "Austin", type: "Full-time", salary: "$95,000 - $115,000", description: "Build responsive UI using modern frameworks.", status: "all" },
  { id: 6, company: "MegaCorp", position: "JavaScript Engineer", location: "Toronto", type: "Contract", salary: "$80,000 - $100,000", description: "Develop high-performance web applications.", status: "all" },
  { id: 7, company: "StartupXYZ", position: "Full Stack Developer", location: "Remote", type: "Full-time", salary: "$100,000 - $130,000", description: "Work on scalable startup solutions.", status: "all" },
  { id: 8, company: "TechCorp Industries", position: "Senior Frontend Engineer", location: "San Francisco", type: "Full-time", salary: "$120,000 - $150,000", description: "Lead frontend architecture development.", status: "all" }
];

// ====== GLOBAL VARIABLES ======
let currentTab = "all";

// Get HTML elements
const jobContainer = document.getElementById("jobContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

// ====== FUNCTION: UPDATE COUNTS ======
function updateCounts() {
  totalCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(job => job.status === "interview").length;
  rejectedCount.textContent = jobs.filter(job => job.status === "rejected").length;
}

// ====== FUNCTION: RENDER JOBS ======
function renderJobs() {
  jobContainer.innerHTML = "";

  const filteredJobs = currentTab === "all" ? jobs : jobs.filter(job => job.status === currentTab);

  tabCount.textContent = filteredJobs.length + " jobs";

  if (filteredJobs.length === 0) {
    jobContainer.innerHTML = `<div class="col-span-full text-center py-10">
      <h3 class="text-xl font-semibold">No jobs available</h3>
      <p class="text-gray-500">There are no applications in this category yet.</p>
    </div>`;
    return;
  }

  filteredJobs.forEach(job => {
    const jobDiv = document.createElement("div");
    jobDiv.className = "bg-white p-5 rounded-lg shadow relative mb-4";

    jobDiv.innerHTML = `
      <button class="deleteBtn absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-300 text-gray-400 hover:bg-red-100 hover:text-red-500 flex items-center justify-center">
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.5 2H9V1.5C9 1.10218 8.84196 0.720644 8.56066 0.43934C8.27936 0.158035 7.89782 0 7.5 0H4.5C4.10218 0 3.72064 0.158035 3.43934 0.43934C3.15804 0.720644 3 1.10218 3 1.5V2H0.5C0.367392 2 0.240215 2.05268 0.146447 2.14645C0.0526785 2.24021 0 2.36739 0 2.5C0 2.63261 0.0526785 2.75979 0.146447 2.85355C0.240215 2.94732 0.367392 3 0.5 3H1V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H10C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12V3H11.5C11.6326 3 11.7598 2.94732 11.8536 2.85355C11.9473 2.75979 12 2.63261 12 2.5C12 2.36739 11.9473 2.24021 11.8536 2.14645C11.7598 2.05268 11.6326 2 11.5 2ZM4 1.5C4 1.36739 4.05268 1.24021 4.14645 1.14645C4.24021 1.05268 4.36739 1 4.5 1H7.5C7.63261 1 7.75979 1.05268 7.85355 1.14645C7.94732 1.24021 8 1.36739 8 1.5V2H4V1.5ZM10 12H2V3H10V12ZM5 5.5V9.5C5 9.63261 4.94732 9.75979 4.85355 9.85355C4.75979 9.94732 4.63261 10 4.5 10C4.36739 10 4.24021 9.94732 4.14645 9.85355C4.05268 9.75979 4 9.63261 4 9.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5ZM8 5.5V9.5C8 9.63261 7.94732 9.75979 7.85355 9.85355C7.75979 9.94732 7.63261 10 7.5 10C7.36739 10 7.24021 9.94732 7.14645 9.85355C7.05268 9.75979 7 9.63261 7 9.5V5.5C7 5.36739 7.05268 5.24021 7.14645 5.14645C7.24021 5.05268 7.36739 5 7.5 5C7.63261 5 7.75979 5.05268 7.85355 5.14645C7.94732 5.24021 8 5.36739 8 5.5Z" fill="#64748B"/> </svg>
      </button>
      <h3 class="font-bold text-lg">${job.company}</h3>
      <p class="font-semibold text-gray-500">${job.position}</p>
      <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>

      <div class="mt-2">
        <button class="statusBtn px-3 py-1 rounded text-sm border ${job.status === 'interview' ? 'bg-green-100 text-green-600' : job.status === 'rejected' ? 'bg-red-100 text-red-600' : 'bg-[#EEF4FF]'}">
          ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
        </button>
      </div>

      <p class="text-sm mt-2 text-gray-600">${job.description}</p>

      <div class="flex gap-2 mt-4">
        <button class="interviewBtn font-semibold text-green-600 px-3 py-1 rounded text-sm border-2 border-green-500">Interview</button>
        <button class="rejectBtn font-semibold text-red-600 px-3 py-1 rounded text-sm border-2 border-red-500">Rejected</button>
      </div>
    `;

    // ====== BUTTON EVENTS ======
    jobDiv.querySelector(".deleteBtn").onclick = () => {
      const index = jobs.findIndex(j => j.id === job.id);
      jobs.splice(index, 1);
      updateCounts();
      renderJobs();
    };

    jobDiv.querySelector(".interviewBtn").onclick = () => {
      job.status = "interview";
      updateCounts();
      renderJobs();
    };

    jobDiv.querySelector(".rejectBtn").onclick = () => {
      job.status = "rejected";
      updateCounts();
      renderJobs();
    };

    jobContainer.appendChild(jobDiv);
  });
}

// ====== TAB BUTTON EVENTS ======
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabBtn").forEach(b => {
      b.classList.remove("bg-blue-600", "text-white");
      b.classList.add("bg-gray-200");
    });

    btn.classList.remove("bg-gray-200");
    btn.classList.add("bg-blue-600", "text-white");

    currentTab = btn.getAttribute("data-tab");
    renderJobs();
  });
});

// ====== INITIAL RENDER ======
updateCounts();
renderJobs();