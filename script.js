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
  interviewCount.textContent = jobs.filter(function(job) {
    return job.status === "interview";
  }).length;
  rejectedCount.textContent = jobs.filter(function(job) {
    return job.status === "rejected";
  }).length;
}

// ====== FUNCTION: RENDER JOBS ======
function renderJobs() {
  // Clear previous jobs
  jobContainer.innerHTML = "";

  // Filter jobs based on selected tab
  var filteredJobs = [];
  if (currentTab === "all") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter(function(job) {
      return job.status === currentTab;
    });
  }

  // Update the count of jobs for this tab
  tabCount.textContent = filteredJobs.length + " jobs";

  // If no jobs, show a message
  if (filteredJobs.length === 0) {
    jobContainer.innerHTML = `
      <div class="col-span-full text-center py-10">
  <div class="flex justify-center mb-4">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M85.4167 31.25V85.4167C85.4167 87.6268 84.5387 89.7464 82.9759 91.3092C81.4131 92.872 79.2935 93.75 77.0834 93.75H22.9167C20.7066 93.75 18.587 92.872 17.0242 91.3092C15.4613 89.7464 14.5834 87.6268 14.5834 85.4167V14.5834C14.5834 12.3732 15.4613 10.2536 17.0242 8.6908C18.587 7.12799 20.7066 6.25002 22.9167 6.25002H63.5625C63.9046 6.2467 64.2463 6.27459 64.5834 6.33335C65.6424 6.45136 66.6679 6.77707 67.6009 7.29185C68.5339 7.80663 69.3563 8.50037 70.0209 9.33335L83.5625 26C84.7531 27.4919 85.4062 29.3414 85.4167 31.25Z" fill="#7DA8FF"/>
<path d="M85.4167 31.25H70.8334C69.1773 31.2451 67.5905 30.585 66.4194 29.414C65.2484 28.243 64.5883 26.6561 64.5834 25V6.33337C65.6424 6.45138 66.6678 6.77709 67.6009 7.29187C68.5339 7.80665 69.3563 8.50039 70.0209 9.33337L83.5625 26C84.7531 27.4919 85.4062 29.3414 85.4167 31.25Z" fill="#A6C5FA"/>
<path d="M52.0834 37.4999H29.1667C28.6142 37.4999 28.0843 37.2804 27.6936 36.8897C27.3029 36.499 27.0834 35.9691 27.0834 35.4166C27.0834 34.8641 27.3029 34.3341 27.6936 33.9434C28.0843 33.5527 28.6142 33.3333 29.1667 33.3333H52.0834C52.6359 33.3333 53.1658 33.5527 53.5565 33.9434C53.9472 34.3341 54.1667 34.8641 54.1667 35.4166C54.1667 35.9691 53.9472 36.499 53.5565 36.8897C53.1658 37.2804 52.6359 37.4999 52.0834 37.4999Z" fill="#F9F5F5"/>
<path d="M52.0834 27.0833H29.1667C28.6142 27.0833 28.0843 26.8638 27.6936 26.4731C27.3029 26.0824 27.0834 25.5525 27.0834 25C27.0834 24.4474 27.3029 23.9175 27.6936 23.5268C28.0843 23.1361 28.6142 22.9166 29.1667 22.9166H52.0834C52.6359 22.9166 53.1658 23.1361 53.5565 23.5268C53.9472 23.9175 54.1667 24.4474 54.1667 25C54.1667 25.5525 53.9472 26.0824 53.5565 26.4731C53.1658 26.8638 52.6359 27.0833 52.0834 27.0833Z" fill="#F9F5F5"/>
<path d="M70.8334 47.9167H29.1667C28.6142 47.9167 28.0843 47.6972 27.6936 47.3065C27.3029 46.9158 27.0834 46.3859 27.0834 45.8333C27.0834 45.2808 27.3029 44.7509 27.6936 44.3602C28.0843 43.9695 28.6142 43.75 29.1667 43.75H70.8334C71.3859 43.75 71.9158 43.9695 72.3065 44.3602C72.6972 44.7509 72.9167 45.2808 72.9167 45.8333C72.9167 46.3859 72.6972 46.9158 72.3065 47.3065C71.9158 47.6972 71.3859 47.9167 70.8334 47.9167Z" fill="#F9F5F5"/>
<path d="M70.8334 58.3333H29.1667C28.6142 58.3333 28.0843 58.1138 27.6936 57.7231C27.3029 57.3324 27.0834 56.8025 27.0834 56.25C27.0834 55.6974 27.3029 55.1675 27.6936 54.7768C28.0843 54.3861 28.6142 54.1666 29.1667 54.1666H70.8334C71.3859 54.1666 71.9158 54.3861 72.3065 54.7768C72.6972 55.1675 72.9167 55.6974 72.9167 56.25C72.9167 56.8025 72.6972 57.3324 72.3065 57.7231C71.9158 58.1138 71.3859 58.3333 70.8334 58.3333Z" fill="#F9F5F5"/>
<path d="M70.8334 68.7499H29.1667C28.6142 68.7499 28.0843 68.5304 27.6936 68.1397C27.3029 67.749 27.0834 67.2191 27.0834 66.6666C27.0834 66.1141 27.3029 65.5841 27.6936 65.1934C28.0843 64.8027 28.6142 64.5833 29.1667 64.5833H70.8334C71.3859 64.5833 71.9158 64.8027 72.3065 65.1934C72.6972 65.5841 72.9167 66.1141 72.9167 66.6666C72.9167 67.2191 72.6972 67.749 72.3065 68.1397C71.9158 68.5304 71.3859 68.7499 70.8334 68.7499Z" fill="#F9F5F5"/>
<path d="M70.8334 81.2499H54.1667C53.6142 81.2499 53.0843 81.0304 52.6936 80.6397C52.3029 80.249 52.0834 79.7191 52.0834 79.1666C52.0834 78.6141 52.3029 78.0841 52.6936 77.6934C53.0843 77.3027 53.6142 77.0833 54.1667 77.0833H70.8334C71.3859 77.0833 71.9158 77.3027 72.3065 77.6934C72.6972 78.0841 72.9167 78.6141 72.9167 79.1666C72.9167 79.7191 72.6972 80.249 72.3065 80.6397C71.9158 81.0304 71.3859 81.2499 70.8334 81.2499Z" fill="#F9F5F5"/>
</svg>

</div>
        <h3 class="text-xl font-semibold">No jobs available</h3>
        <p class="text-gray-500">There are no applications in this category yet.</p>
      </div>
    `;
    return;
  }

  // Loop through filtered jobs and create HTML for each
  filteredJobs.forEach(function(job) {
    var jobDiv = document.createElement("div");
    jobDiv.className = "bg-white p-5 rounded-lg shadow relative";

    jobDiv.innerHTML = `
  <button class="deleteBtn absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-300 text-gray-400 hover:bg-red-100 hover:text-red-500 flex items-center justify-center">
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 2H9V1.5C9 1.10218 8.84196 0.720644 8.56066 0.43934C8.27936 0.158035 7.89782 0 7.5 0H4.5C4.10218 0 3.72064 0.158035 3.43934 0.43934C3.15804 0.720644 3 1.10218 3 1.5V2H0.5C0.367392 2 0.240215 2.05268 0.146447 2.14645C0.0526785 2.24021 0 2.36739 0 2.5C0 2.63261 0.0526785 2.75979 0.146447 2.85355C0.240215 2.94732 0.367392 3 0.5 3H1V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H10C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12V3H11.5C11.6326 3 11.7598 2.94732 11.8536 2.85355C11.9473 2.75979 12 2.63261 12 2.5C12 2.36739 11.9473 2.24021 11.8536 2.14645C11.7598 2.05268 11.6326 2 11.5 2ZM4 1.5C4 1.36739 4.05268 1.24021 4.14645 1.14645C4.24021 1.05268 4.36739 1 4.5 1H7.5C7.63261 1 7.75979 1.05268 7.85355 1.14645C7.94732 1.24021 8 1.36739 8 1.5V2H4V1.5ZM10 12H2V3H10V12ZM5 5.5V9.5C5 9.63261 4.94732 9.75979 4.85355 9.85355C4.75979 9.94732 4.63261 10 4.5 10C4.36739 10 4.24021 9.94732 4.14645 9.85355C4.05268 9.75979 4 9.63261 4 9.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5ZM8 5.5V9.5C8 9.63261 7.94732 9.75979 7.85355 9.85355C7.75979 9.94732 7.63261 10 7.5 10C7.36739 10 7.24021 9.94732 7.14645 9.85355C7.05268 9.75979 7 9.63261 7 9.5V5.5C7 5.36739 7.05268 5.24021 7.14645 5.14645C7.24021 5.05268 7.36739 5 7.5 5C7.63261 5 7.75979 5.05268 7.85355 5.14645C7.94732 5.24021 8 5.36739 8 5.5Z" fill="#64748B"/>
</svg>

  </button>

  <h3 class="font-bold text-lg">${job.company}</h3>
  <p class="font-semibold text-gray-500">${job.position}</p>
  <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>

  <div class="mt-2">
    <button class="statusBtn px-3 py-1 rounded text-sm border">
      ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
    </button>
  </div>

  <p class="text-sm mt-2 text-gray-600">${job.description}</p>

  <div class="flex gap-2 mt-4">
    <button class="interviewBtn font-semibold text-green-600 px-3 py-1 rounded text-sm border-2 border-green-500">
      Interview
    </button>
    <button class="rejectBtn font-semibold text-red-600 px-3 py-1 rounded text-sm border-2 border-red-500">
      Rejected
    </button>
  </div>
`;

    // ====== BUTTON EVENTS ======
    jobDiv.querySelector(".interviewBtn").onclick = function() {
      job.status = "interview";
      updateCounts();
      renderJobs();
    };

    jobDiv.querySelector(".rejectBtn").onclick = function() {
      job.status = "rejected";
      updateCounts();
      renderJobs();
    };

    jobDiv.querySelector(".deleteBtn").onclick = function() {
      var index = jobs.findIndex(function(j) {
        return j.id === job.id;
      });
      jobs.splice(index, 1); // Remove job from array
      updateCounts();
      renderJobs();
    };

    // Add job to container
    jobContainer.appendChild(jobDiv);
  });
}

// ====== TAB BUTTON EVENTS ======
var tabButtons = document.querySelectorAll(".tabBtn");
tabButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // Reset all buttons
    tabButtons.forEach(function(b) {
      b.classList.remove("bg-blue-600", "text-white");
      b.classList.add("bg-gray-200");
    });

    // Highlight current button
    btn.classList.remove("bg-gray-200");
    btn.classList.add("bg-blue-600", "text-white");

    // Set current tab and render
    currentTab = btn.getAttribute("data-tab");
    renderJobs();
  });
});

// ====== INITIAL RENDER ======
updateCounts();
renderJobs();