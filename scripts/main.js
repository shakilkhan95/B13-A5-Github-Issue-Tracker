let activeStatus = '';
const statusTabs = document.querySelectorAll('.status-btn');
statusTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activeStatus = tab.value;
        
        toggleStatus(tab);
        loadCommits(activeStatus);
    });
})

//function to toggle status styles based on clicking button
const toggleStatus = (clickedTab) => {
    statusTabs.forEach(tab => {
        tab.classList.remove('btn-primary');
    });
    clickedTab.classList.add('btn-primary');
}

// function to fetch data from api
const loadCommits = async (status) => {
    const issuesUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(issuesUrl);
    const issues = await res.json();
    displayIssues(issues.data, status);
}

const displayIssues = (issues, status) => {
    //get the counter
    const issueCounter = document.getElementById("issues-counter");
    // Get the issue card container and make it empty
    const issuesContainer = document.getElementById("issues-container");
    issuesContainer.innerHTML = '';

    issues.forEach(issue => {
        if(status === 'all'){
            issueCounter.innerText = issues.length;

            const issueDiv = document.createElement('div');
            issueDiv.innerHTML = `
                <!-- card  -->
            <div class="rounded-md bg-base-100 shadow border-t-4 border-t-[#00A96E] transition-all hover:scale-101">
                <div class="p-4 border-b-2 border-b-[#EFEFEF] space-y-3">
                    <div class="flex justify-between">
                        <div><img src="./assets/Open-Status.png"></div>
                        <p class="w-fit px-8 py-2 rounded-full bg-[#FEECEC] text-[#EF4444] text-xs font-medium">HIGH</p>
                    </div>
                    
                    <div class="space-y-2">
                        <h3 class="text-sm font-semibold text-[#1F2937]">hello</h3>
                        <p class="text-xs text-[#64748B]">The navigation menu doesn't collapse properly on mobile devices...</p>
                    </div>
                    
                    <div class="flex gap-2">
                        <div class="w-fit px-4 py-2 rounded-full bg-[#FEECEC] border border-[#EF4444] flex items-center gap-1">
                            <div><img src="./assets/BugDroid.png"></div>
                            <p class=" text-[#EF4444] text-xs font-medium">BUG</p>
                        </div>
                    
                        <div class="w-fit px-4 py-2 rounded-full bg-[#FFF8DB] border border-[#D97706] flex items-center gap-1">
                            <div><img src="./assets/Lifebuoy.png"></div>
                            <p class=" text-[#D97706] text-xs font-medium">HELP WANTED</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between">
                    <div class="p-4 space-y-3">
                        <p class="text-xs text-[#64748B]">Author: <span></span></p>
                        <p class="text-xs text-[#64748B]">Assignee: <span></span></p>
                        
                    </div>

                    <div class="p-4 space-y-3">
                        <p class="text-xs text-[#64748B]">Created: <span></span></p>
                        <p class="text-xs text-[#64748B]">Updated: <span></span></p>
                    </div>
                </div>
            </div>
            `;

            issuesContainer.append(issueDiv);
        }
        if(issue.status === status){
            console.log(issue)
        }
    })
}