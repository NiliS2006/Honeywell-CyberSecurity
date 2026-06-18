const evidence = [

{
    name:"employee_laptop.jpg",
    type:"image",
    metadata:`
File Name: employee_laptop.jpg
Created: 2026-04-10 09:21
Modified: 2026-04-10 09:25
GPS: Disabled
Owner: j.smith
`
},

{
    name:"usb_activity.log",
    type:"log",
    metadata:`
08:11 USB Device Connected
08:15 Confidential_Files.zip Copied
08:17 USB Device Removed
`
},

{
    name:"security_access.log",
    type:"log",
    metadata:`
07:50 Employee Login
08:10 Restricted Folder Accessed
08:15 Data Export Executed
08:20 Logout
`
},

{
    name:"network_capture.pcap",
    type:"network",
    metadata:`
Outbound Traffic:
192.168.1.10
→
45.76.22.15

Transfer Size:
350MB
`
}

];

const timelineData = [
"07:50 Employee Logged In",
"08:10 Restricted Folder Access",
"08:11 USB Connected",
"08:15 Data Copied",
"08:17 USB Removed",
"08:20 Logout"
];

const FLAG = "FLAG{DATA_EXFILTRATION_CONFIRMED}";

let score = 0;

const loadCaseBtn =
document.getElementById("loadCaseBtn");

const evidenceContainer =
document.getElementById("evidenceContainer");

const timeline =
document.getElementById("timeline");

const analysisOutput =
document.getElementById("analysisOutput");

loadCaseBtn.addEventListener("click", () => {

    evidenceContainer.innerHTML = "";

    evidence.forEach(item => {

        const div =
        document.createElement("div");

        div.classList.add("evidence-item");

        div.innerText = item.name;

        div.addEventListener("click", () => {
            analyzeEvidence(item);
        });

        evidenceContainer.appendChild(div);
    });

    timeline.innerHTML = "";

    timelineData.forEach(event => {

        const li =
        document.createElement("li");

        li.innerText = event;

        timeline.appendChild(li);
    });

});

function analyzeEvidence(item){

    analysisOutput.innerHTML += `
        <p>
        > Opening ${item.name}
        </p>
    `;

    analysisOutput.innerHTML += `
        <pre>${item.metadata}</pre>
    `;

    analysisOutput.scrollTop =
    analysisOutput.scrollHeight;
}

document
.getElementById("submitFlag")
.addEventListener("click", () => {

    const userFlag =
    document
    .getElementById("flagInput")
    .value
    .trim();

    const result =
    document.getElementById("result");

    if(userFlag === FLAG){

        score += 100;

        document
        .getElementById("score")
        .innerText = score;

        result.innerHTML =
        "<p class='success'>Correct Flag!</p>";

    }else{

        result.innerHTML =
        "<p class='fail'>Incorrect Flag</p>";
    }

});
