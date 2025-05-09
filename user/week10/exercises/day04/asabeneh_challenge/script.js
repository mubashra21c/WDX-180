const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱 Educator"],
      ["💻 Programmer"],
      ["🌐 Developer"],
      ["🔥 Motivator"],
      ["📔 Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

//console.log(asabenehChallenges2020);
// INSERT YOUR CODE HERE

document.body.style.margin = "auto";
document.body.style.width = "70%";

const div1 = document.querySelector(".wrapper");
div1.style.textAlign = "center";

//code for title
const title = `${asabenehChallenges2020.challengeTitle} in `;
const h1 = document.createElement("h1");
h1.textContent = title;
div1.appendChild(h1);

//function for random colors
function randomColor() {
  const ranCol = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  yearSpan.style.color = ranCol;
  return ranCol;
}

const yearSpan = document.createElement("span");
yearSpan.textContent = asabenehChallenges2020.challengeYear;
yearSpan.style.fontSize = "60px";
setInterval(randomColor, 1000);
h1.appendChild(yearSpan);
div1.appendChild(h1);

//code for susbtitle
const h4 = document.createElement("h2");
h4.textContent = asabenehChallenges2020.challengeSubtitle;
h4.style.textDecoration = "underline";
h4.style.fontWeight = "300";
div1.appendChild(h4);

//code for datetime
const dateDiv = document.createElement("div");
dateDiv.style.textAlign = "center";
dateDiv.style.display = "inline-block";
div1.appendChild(dateDiv);

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  dateDiv.textContent = currentDateTime;
  const ranCol = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  dateDiv.style.backgroundColor = ranCol;
}
updateDateTime();
setInterval(updateDateTime, 1000);

//code for challenges
asabenehChallenges2020.challenges.forEach((challenge) => {
  const challengeRow = document.createElement("div");
  challengeRow.style.display = "flex";
  challengeRow.style.justifyContent = "space-between";
  challengeRow.style.alignItems = "center";
  challengeRow.style.margin = "10px 0";
  challengeRow.style.padding = "20px";
  challengeRow.style.border = "1px solid black";
  challengeRow.style.fontSize = "20px";

  const nameDiv = document.createElement("div");
  nameDiv.textContent = challenge.name;

  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const mainTopic = challenge.name.replace("30 Days Of ", "");
  summary.textContent = mainTopic;
  console.log(summary);

  const topicList = document.createElement("ul");
  topicList.style.listStyleType = "none";
  topicList.style.paddingLeft = "30px";
  topicList.style.margin = "0px";
  topicList.style.textAlign = "left";
  challenge.topics.forEach((topic) => {
    const li = document.createElement("li");
    li.textContent = topic;
    topicList.appendChild(li);
  });
  details.appendChild(summary);
  details.appendChild(topicList);

  const divStatus = document.createElement("div");
  divStatus.textContent = challenge.status;
  console.log(divStatus);
  if (divStatus.textContent === "Done") {
    challengeRow.style.backgroundColor = "#21bf73";
  } else if (divStatus.textContent === "Ongoing") {
    challengeRow.style.backgroundColor = "#fddb3a";
  } else {
    challengeRow.style.backgroundColor = "#fd5e53";
  }

  challengeRow.appendChild(nameDiv);
  challengeRow.appendChild(details);
  challengeRow.appendChild(divStatus);
  div1.appendChild(challengeRow);
});

const nameH1 = document.createElement("h1");
nameH1.textContent = asabenehChallenges2020.challengeTitle.replace(
  "challenges",
  ""
);
div1.appendChild(nameH1);

const socialRow = document.createElement('div');
socialRow.style.display='flex';
socialRow.style.justifyContent='center';
socialRow.style.gap='10px';

//loop for socials
asabenehChallenges2020.author.socialLinks.forEach(link=>{
  const anchor=document.createElement('a');
  anchor.href=link.url;
  anchor.target='_blank';
  anchor.style.fontSize='24px';
  anchor.innerHTML=link.fontawesomeIcon;
  
  socialRow.appendChild(anchor);
  
})
div1.appendChild(socialRow);

//code for bio
const bioDiv=document.createElement('div');
bioDiv.textContent=asabenehChallenges2020.author.bio;
div1.appendChild(bioDiv);
bioDiv.style.marginTop='20px';
bioDiv.style.fontSize='20px';

const tableFlex=document.createElement('div');
tableFlex.style.display='flex';
tableFlex.style.justifyContent='space-between';
tableFlex.style.marginTop='50px';

//column for title
const titleColumn=document.createElement('div');
const titleHeader=document.createElement('h3');
titleHeader.textContent="Titles";
titleColumn.appendChild(titleHeader);
titleColumn.style.textAlign="left";
asabenehChallenges2020.author.titles.forEach(title=>{
  const titleDiv=document.createElement('div');
  titleDiv.style.textAlign="left";
  titleDiv.style.padding='1px';
  titleDiv.textContent=title;
  titleColumn.appendChild(titleDiv);
  tableFlex.appendChild(titleColumn);
  
})



//column for skills
const skillColumn=document.createElement('div');
const skillHeader=document.createElement('h3');
skillHeader.textContent="Skills";
skillColumn.appendChild(skillHeader);
skillColumn.style.textAlign="left";
asabenehChallenges2020.author.skills.forEach(skill=>{
  const skillDiv=document.createElement('div');
  skillDiv.style.textAlign="left";
  skillDiv.style.padding='1px';
  skillDiv.textContent=skill;
  skillColumn.appendChild(skillDiv);
  tableFlex.appendChild(skillColumn);
  
})

//column for qualifications
const qualColumn=document.createElement('div');
const qualHeader=document.createElement('h3');
qualHeader.textContent="Qualifications";
qualColumn.appendChild(qualHeader);
qualColumn.style.textAlign="left";
asabenehChallenges2020.author.qualifications.forEach(qual=>{
  const qualDiv=document.createElement('div');
  qualDiv.style.textAlign="left";
  qualDiv.style.padding='1px';
  qualDiv.textContent=qual;
  qualColumn.appendChild(qualDiv);
  tableFlex.appendChild(qualColumn);
  
})

div1.appendChild(tableFlex);

//code for keywords
const keywordSection=document.createElement('div');
const keywordHeader=document.createElement('h3');
keywordHeader.style.textAlign="left";
keywordHeader.textContent='Keywords';
keywordSection.appendChild(keywordHeader);
const keywordContainer=document.createElement('div');
keywordContainer.style.marginTop='20px';
keywordContainer.style.display='flex';
keywordContainer.style.justifyContent='center';
keywordContainer.style.gap='10px';
keywordContainer.style.flexWrap='wrap';

asabenehChallenges2020.keywords.forEach(keyword=>{
  const keywordDiv=document.createElement('div');
  keywordDiv.padding='6px 10px';
  const ranCol = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  keywordDiv.style.backgroundColor=ranCol;
  keywordDiv.style.borderRadius='10px';
  keywordDiv.textContent=`#${keyword}`;
  keywordContainer.appendChild(keywordDiv);
})
keywordSection.appendChild(keywordContainer)
div1.appendChild(keywordSection);