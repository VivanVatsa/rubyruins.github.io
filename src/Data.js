const projects = [
	{
		title: "characterwise user sentiment", 
		content: "Scraping book comments to anaylse user sentiments to different characters.",
		id: "p9",
		url: "https://github.com/rubyruins/characterwise-user-sentiment",
		tags: ["selenium", "pandas", "nlp", "matplotlib"],
		categories: "ml misc"
	},
	{
		title: "driver drowsiness detection", 
		content: "A warning system to alert drowsy or tired drivers.",
		id: "p8",
		url: "https://github.com/rubyruins/driver-drowsiness-detection",
		tags: ["opencv", "dlib", "tkinter", "face-recognition"],
		categories: "ml"
	},
	{
		title: "producthunt clone", 
		content: "Allows users to create and vote for their favourite products.",
		id: "p7",
		url:"https://github.com/rubyruins/producthunt-clone",
		tags: ["django", "mySQL", "bootstrap"],
		categories: "fulldev"
	},
	{
		title: "copinion", 
		content: "A psychometric test to collect and analyse common traits of 500+ engineering students.",
		id: "p6",
		url: "http://co-opinion.herokuapp.com/",
		tags: ["php", "md-bootstrap", "pandas", "seaborn"],
		categories: "fulldev"
	},
	{
		title: "music recs", 
		content: "Recommending music through collaborative filtering.",
		id: "p5",
		url: "https://github.com/rubyruins/music-recs",
		tags: ["pandas", "numpy", "jupyter", "tkinter"],
		categories: "ml"
	},
	{
		title: "daily journal", 
		content: "A minimalistic journal to keep track of your day.",
		id: "p4",
		url: "https://github.com/rubyruins/daily-journal",
		tags: ["mongodb", "nodeJS", "expressjs"],
		categories: "fulldev"
	},
	{
		title: "secrets", 
		content: "Authenticate yourself to anonymously post secrets.",
		id: "p3",
		url: "https://github.com/rubyruins/secrets",
		tags: ["google-oauth", "passportJS", "nodeJSexpress"],
		categories: "fulldev"
	},
	{
		title: "criminal offense", 
		content: "An interactive dashboard to visualise San Fransisco crimes.",
		id: "p2",
		url: "https://github.com/rubyruins/criminal-offense-2.0",
		tags: ["chartsJS", "flask", "bootstrap", "pandas"],
		categories: "ml misc"
	},
	{
		title: "keeper", 
		content: "A Google Keep clone to work with to-do lists.",
		id: "p1",
		url: "https://github.com/rubyruins/keeper",
		tags: ["reactJS", "material-ui"],
		categories: "fulldev"
	}];

const languages = [
	{
		title: "Python",
		skill: "85%"
	},
	{
		title: "Java",
		skill: "75%"
	},
	{
		title: "C",
		skill: "70%"
	},
	{
		title: "JavaScript",
		skill: "70%"
	},
];

const ml = [
	{
		title: "Machine Learning",
		skill: "75%"
	},
	{
		title: "Data Science",
		skill: "75%"
	},
	{
		title: "Deep Learning",
		skill: "50%"
	}
];

const webdev = [
	{
		title: "HTML + CSS",
		skill: "90%"
	},
	{
		title: "Django",
		skill: "75%"
	},
	{
		title: "NodeJS + Express",
		skill: "70%"
	},
	{
		title: "MongoDB",
		skill: "60%"
	},
	{
		title: "ReactJS",
		skill: "50%"
	}
];

const tools = [
	{
		title: "Git + GitHub",
		skill: "70%"
	},
	{
		title: "Adobe Photoshop",
		skill: "70%"
	}
];

const internships = [
	{
		title: "Data Warrior, RIIDL Somaiya Vidyavihar | June 2020 - Present",
		content: "A research project which is an ML-based informed intervention for Crowdsourcing based Optimisation of Medical resources attending demand equalisation (COMRADE) for COVID 19 treatment.",
		id: "i4"
	},
	{
		title: "UI Lead and Data Analyst, KJSCE SDC | January 2020",
		content: "Worked on a project called Copinion to design a psychometric test to analyse and observe personality traits of over 500 engineering students.",
		id: "i3"
	},
	{
		title: "Python Intern, Datagrid Marketing Agency, Andheri | December 2019",
		content: "Learned the Django framework and implemented it by creating a polls app, a blog, and a ProductHunt clone for searching and curating new products in one place.",
		id: "i2"
	},
	{
		title: "File handling and complex functions in C, KJSCE | June - July 2019",
		content: "Implemented complex programs by breaking them down into simpler functions and working on one part at a time.",
		id: "i1"
	}
];

const res = [
	{
		title: "Creative Team, KJSCE Codecell | May 2019 - May 2020",
		content: "CodeCell is the Codechef campus chapter at KJSCE Vidyavihar. Responsible for designing templates, posts and other creative work for workshops and a nationwide Hackathon (KJSCE HACK (4.0) Taught students at various workshops on Git and Github, Python Programming, etc.",
		id: "r2"
	},
	{
		title: "Creative Head, KJSCE SAHAS | August 2018 - May 2019",
		content: "SAHAS is the formal student council of the department of Sciences and Humanities at KJSCE Vidyavihar. Responsible for conducting workshops, events and fests and all creative work related to it.",
		id: "r1"
	}
];

export {projects, languages, ml, webdev, tools, internships, res};
  