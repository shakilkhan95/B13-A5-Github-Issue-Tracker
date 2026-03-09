fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then((res) => res.json())
  .then((data) => {
    displayIssue(data.data);
    findLabels(data.data);
  });

const displayIssue = (issues) => {
  issues.forEach((issue) => {
    const priority = issue.priority;
    //console.log(priority);
    const labels = issue.labels;
    displayLabel(labels);

    //findLabels(labels);
  });
};

const displayLabel = (labels) => {
  labels.forEach((label) => {
    //console.log(label);
    const labelClass = label.split(" ").join("-");
    //console.log(labelClass);
    const labelDiv = document.createElement("div");
    labelDiv.innerHTML = `<p>${label}</p>`;
  });
};

const findLabels = (data) => {
  const arr = [];
  data.forEach((i) => {
    const labels = i.labels;
    arr.push(labels);
  });
  const label = [];
  arr.forEach((i) => {
    i.forEach((i) => {
      label.push(i);
    });
  });
  const uniqueLabels = [];
  label.forEach((i) => {
    if (!uniqueLabels.includes(i)) {
      uniqueLabels.push(i);
    }
  });
  console.log(uniqueLabels);
};



//<div class="w-fit px-4 py-2 rounded-full bg-[#FEECEC] border border-[#EF4444] flex items-center gap-1">
 //                           <div><img src="./assets/BugDroid.png"></div>
   //                         <p class=" text-[#EF4444] text-xs font-medium">BUG</p>
     //                   </div>