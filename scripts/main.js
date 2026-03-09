let activeStatus = "all";
const statusTabs = document.querySelectorAll(".status-btn");
statusTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeStatus = tab.value;

    toggleStatus(tab);
    loadCommits(activeStatus);
    setCounter(activeStatus);
  });
});

//function to toggle status styles based on clicking button
const toggleStatus = (clickedTab) => {
  statusTabs.forEach((tab) => {
    tab.classList.remove("btn-primary");
  });
  clickedTab.classList.add("btn-primary");
};

// function to fetch data from api
const loadCommits = async (status) => {
    controlSpinner(true);
  const issuesUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  const res = await fetch(issuesUrl);
  const issues = await res.json();

  displayIssues(issues.data, status);
};

const displayIssues = (issues, status) => {
  // Get the issue card container and make it empty
  const issuesContainer = document.getElementById("issues-container");
  issuesContainer.innerHTML = "";

  issues.forEach((issue) => {
    //get the priority texts
    const priority = issue.priority;
    if (status === "all") {
      const issueDiv = document.createElement("div");
      issueDiv.innerHTML = `
                <!-- card  -->
            <div onclick="loadDetails(${issue.id})" class="h-full flex flex-col justify-between rounded-md bg-base-100 shadow border-t-4 border-t-[${borderColor(issue.status)}] transition-all hover:scale-101">
                <div class="p-4 space-y-3">
                    <div class="flex justify-between">
                        <div><img src="./assets/${issue.status}-Status.png"></div>
                        <p class="w-fit px-8 py-2 rounded-full ${priority} text-xs font-medium">${issue.priority.toUpperCase()}</p>
                    </div>
                    
                    <div class="space-y-2">
                        <h3 class="text-sm font-semibold text-[#1F2937]">${issue.title}</h3>
                        <p class="text-xs text-[#64748B]">${issue.description}</p>
                    </div>
                    
                    <!-- labels container -->
                    <div class="flex gap-2"> ${displayLabel(issue.labels)} </div>
                </div>

                <div class="flex justify-between  border-t-2 border-t-[#EFEFEF]">
                    <div class="p-4 space-y-3">
                        <p class="text-xs text-[#64748B]">Author: ${issue.author}</p>
                        <p class="text-xs text-[#64748B]">Assignee: ${issue.assignee}</p>
                        
                    </div>

                    <div class="p-4 space-y-3">
                        <p class="text-xs text-[#64748B]">${issue.createdAt}</p>
                        <p class="text-xs text-[#64748B]">${issue.updatedAt}</p>
                    </div>
                </div>
            </div>
            `;

      issuesContainer.append(issueDiv);
      controlSpinner(false);
      return;
    }
    if (issue.status === status) {
      const issueDiv = document.createElement("div");
      issueDiv.innerHTML = `
                <!-- card  -->
            <div onclick="loadDetails(${issue.id})" class="h-full flex flex-col justify-between rounded-md bg-base-100 shadow border-t-4 border-t-[${borderColor(issue.status)}] transition-all hover:scale-101  other-card">
                <div class="p-4 space-y-3">
                    <div class="flex justify-between">
                        <div><img src="./assets/${issue.status}-Status.png"></div>
                        <p class="w-fit px-8 py-2 rounded-full ${priority} text-xs font-medium">${issue.priority.toUpperCase()}</p>
                    </div>
                    
                    <div class="space-y-2">
                        <h3 class="text-sm font-semibold text-[#1F2937]">${issue.title}</h3>
                        <p class="text-xs text-[#64748B]">${issue.description}</p>
                    </div>
                    
                    <!-- labels container -->
                    <div class="flex gap-2"> ${displayLabel(issue.labels)} </div>
                </div>

                <div class="flex justify-between  border-t-2 border-t-[#EFEFEF]">
                    <div class="p-4 space-y-3">
                        <p class="text-xs text-[#64748B]">Author: ${issue.author}</p>
                        <p class="text-xs text-[#64748B]">Assignee: ${issue.assignee}</p>
                        
                    </div>

                    <div class="p-4 space-y-3">
                        <p class="text-xs text-[#64748B]">${issue.createdAt}</p>
                        <p class="text-xs text-[#64748B]">${issue.updatedAt}</p>
                    </div>
                </div>
            </div>
            `;

      issuesContainer.append(issueDiv);
      controlSpinner(false);
      return;
    }
  });
};

//function to set border color based on status
const borderColor = (status) => {
  if (status === "open") {
    return "#00A96E";
  }
  if (status === "closed") {
    return "#A855F7";
  }
};

//function to display labels
const displayLabel = (labels) => {
  const createElement = labels.map(
    (el) =>
      `<div class="w-fit px-2 py-1 rounded-full flex items-center gap-1 text-xs border ${el.split(" ").join("-")}"><div><img src="../assets/${el.split(" ").join("-")}.png"></div><div>${el.toUpperCase()}</div></div>`,
  );
  return createElement.join(" ");
};

//function to set counter
const setCounter = (status) =>{
    const counter = document.getElementById("issues-counter");

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res=> res.json())
    .then(data => {
        const issues = data.data;
        if(status === 'all'){
            counter.innerText = issues.length;
            return;
        }
        else{
            const filteredIssues = issues.filter(issue => issue.status === status);
            counter.innerText = filteredIssues.length;
            return;
        }

    })
};

//function to load issue details by clicking on issue card
const loadDetails = (id) => {
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then(res=> res.json())
    .then(data => displayDetails(data.data));
};

//function to display details with a modal
const displayDetails = (issues) => {
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
        <!-- details card  -->
            <div class="bg-white w-11/12 max-w-[700px] mx-auto rounded-lg p-6 space-y-6">
                <h1 class="text-xl font-bold text-[#1F2937]">${issues.title}</h1>

                <div class="flex gap-3 flex-col md:flex-row justify-center md:justify-start">
                    <span class="px-3 py-2 rounded-full bg-[#00A96E] text-white text-xs font-medium w-fit">${issues.status.toUpperCase()}ED</span>
                    <span class="text-[#64748B] text-xs">Opened by ${issues.author}</span>
                    <span class="text-[#64748B] text-xs">${issues.updatedAt}</span>
                </div>

                <div class="flex items-center gap-4">
                    <div class="flex gap-2"> ${displayLabel(issues.labels)} </div>
                </div>

                <p class="text-base text-[#64748B]">${issues.description}</p>

                <div class="bg-[#F8FAFC] rounded-lg p-6 flex justify-between">
                    <div class="space-y-2">
                        <p class="text-base text-[#64748B]">Assignee:</p>
                        <h3 class="text-base font-semibold text-[#1F2937]">${issues.assignee}</h3>
                    </div>

                    <div class="space-y-2">
                        <p class="text-base text-[#64748B]">Priority</p>
                        <p class="w-fit px-8 py-2 rounded-full text-xs font-medium ${issues.priority}">${issues.priority.toUpperCase()}</p>
                    </div>
                </div>
            </div>
    `;
    document.getElementById("issue_details").showModal();
}

// function to control spinner 
const controlSpinner = (status) => {
    if(status){
        document.getElementById("spinner").classList.remove('hidden');
        document.getElementById("issues-container").classList.add("hidden");
    } else{
        document.getElementById("spinner").classList.add("hidden");
        document.getElementById("issues-container").classList.remove("hidden");
    }
}

// function to search issues
document.getElementById("search-btn").addEventListener('click', () => {
    //get the value from search input 
    const searchInput = document.getElementById("search-input");
    const searchValue = searchInput.value.trim().toLowerCase();
    if(searchValue === ''){
        alert('Enter a word to search');
        return;
    }
    
    // fetch and get the data from api 
    fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`,
    )
      .then((res) => res.json())
      .then((data) => displayIssues(data.data, activeStatus));
});

setCounter(activeStatus);
loadCommits(activeStatus);
