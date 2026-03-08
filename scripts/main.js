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
    const data = await res.json();
    displayIssues(data.data);
}