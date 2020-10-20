const projects = [
	{
		title: "characterwise user sentiment", 
		content: "Anaylse user sentiments from book comments.",
		id: "p9",
		github: "https://github.com/rubyruins/characterwise-user-sentiment",
		url:"",
		tags: ["selenium", "pandas", "nlp", "matplotlib"],
		categories: "ml misc"
	},
	{
		title: "driver drowsiness detection", 
		content: "A warning system to alert drowsy or tired drivers.",
		id: "p8",
		github: "https://github.com/rubyruins/driver-drowsiness-detection",
		url:"",
		tags: [ "opencv", "dlib", "tkinter"],
		categories: "ml"
	},
	{
		title: "producthunt clone", 
		content: "Allows users to create and vote for their favourite products.",
		id: "p7",
		github:"https://github.com/rubyruins/producthunt-clone",
		url:"",
		tags: ["django", "mySQL", "bootstrap"],
		categories: "fulldev"
	},
	{
		title: "copinion", 
		content: "A psychometric test to analyse common traits of engineering students.",
		id: "p6",
		github: "http://co-opinion.herokuapp.com/",
		url:"http://co-opinion.herokuapp.com/",
		tags: ["php", "python", "pandas", "seaborn"],
		categories: "fulldev"
	},
	{
		title: "music recs", 
		content: "Recommending music through collaborative filtering.",
		id: "p5",
		github: "https://github.com/rubyruins/music-recs",
		url:"",
		tags: ["pandas", "numpy", "jupyter", "tkinter"],
		categories: "ml"
	},
	{
		title: "daily journal", 
		content: "A minimalistic journal to keep track of your day.",
		id: "p4",
		github: "https://github.com/rubyruins/daily-journal",
		url:"",
		tags: ["mongodb", "nodeJS", "expressjs"],
		categories: "fulldev"
	},
	{
		title: "secrets", 
		content: "Authenticate yourself to anonymously post secrets.",
		id: "p3",
		github: "https://github.com/rubyruins/secrets",
		url:"",
		tags: ["googleoauth", "passportJS", "nodeJS", "express"],
		categories: "fulldev"
	},
	{
		title: "criminal offense", 
		content: "An interactive dashboard to visualise San Fransisco crimes.",
		id: "p2",
		github: "https://github.com/rubyruins/criminal-offense-2.0",
		url:"",
		tags: ["chartsJS", "flask", "bootstrap", "pandas"],
		categories: "ml misc"
	},
	{
		title: "keeper", 
		content: "A Google Keep clone to work with to-do lists.",
		id: "p1",
		github: "https://github.com/rubyruins/keeper",
		url:"",
		tags: ["reactJS", "material-ui"],
		categories: "fulldev"
	}
];

const featured = [
	{
		title: "characterwise user sentiment", 
		content: "Anaylse user sentiments from book comments.",
		id: "f3",
		github: "https://github.com/rubyruins/characterwise-user-sentiment",
		url:"",
		tags: ["selenium", "pandas", "nlp", "matplotlib"],
		categories: "ml misc"
	},
	{
		title: "driver drowsiness detection", 
		content: "A warning system to alert drowsy or tired drivers.",
		id: "f2",
		github: "https://github.com/rubyruins/driver-drowsiness-detection",
		url:"",
		tags: [ "opencv", "dlib", "tkinter"],
		categories: "ml"
	},
	{
		title: "producthunt clone", 
		content: "Allows users to create and vote for their favourite products.",
		id: "f1",
		github:"https://github.com/rubyruins/producthunt-clone",
		url:"",
		tags: ["django", "mySQL", "bootstrap"],
		categories: "fulldev"
	}
];

const skills = [
	[
		{
			title: "Python",
			proficiency: "85%"
		},
		{
			title: "Java",
			proficiency: "75%"
		},
		{
			title: "C++",
			proficiency: "70%"
		}
	],
	[
		{
			title: "Machine Learning Algorithms",
			proficiency: "75%"
		},
		{
			title: "Deep Learning Algorithms",
			proficiency: "70%"
		},
		{
			title: "Natural Language Processing",
			proficiency: "60%"
		}
	],
	[
		{
			title: "Django",
			proficiency: "75%"
		},
		{
			title: "NodeJS + Express",
			proficiency: "70%"
		},
		{
			title: "ReactJS",
			proficiency: "50%"
		}
	],
	[
		{
			title: "Git + GitHub",
			proficiency: "70%"
		},
		{
			title: "Adobe Photoshop",
			proficiency: "70%"
		}
	]
];

const experience = [
	{
		title: "Data Warrior, RIIDL Somaiya Vidyavihar",
		date: "June 2020 - Present",
		content: "A research project which is an ML-based informed intervention for Crowdsourcing based Optimisation of Medical resources attending demand equalisation (COMRADE) for COVID 19 treatment.",
		id: "e6"
	},
	{
		title: "UI Lead and Data Analyst, KJSCE SDC",
		date: "January 2020",
		content: "Worked on a project called Copinion to design a psychometric test to analyse and observe personality traits of over 500 engineering students.",
		id: "e5"
	},
	{
		title: "Creative Team, KJSCE Codecell",
		date: "May 2019 - May 2020",
		content: "CodeCell is the Codechef campus chapter at KJSCE Vidyavihar. Responsible for designing templates, posts and other creative work for workshops and a nationwide Hackathon (KJSCE HACK (4.0) Taught students at various workshops on Git and Github, Python Programming, etc.",
		id: "e4"
	},
	{
		title: "Python Intern, Datagrid Marketing Agency, Andheri",
		date: "December 2019",
		content: "Learned the Django framework and implemented it by creating a polls app, a blog, and a ProductHunt clone for searching and curating new products in one place.",
		id: "e3"
	},
	{
		title: "File handling and complex functions in C",
		date: "KJSCE | June - July 2019",
		content: "Implemented complex programs by breaking them down into simpler functions and working on one part at a time.",
		id: "e2"
	},
	{
		title: "Creative Head, KJSCE SAHAS",
		date: "August 2018 - May 2019",
		content: "SAHAS is the formal student council of the department of Sciences and Humanities at KJSCE Vidyavihar. Responsible for conducting workshops, events and fests and all creative work related to it.",
		id: "e1"
	}
];

const certifications = [
	{
		title: "Natural Language Processing | Deeplearning.ai, Coursera",
		courses: ["Natural Language Processing with Probabilistic Models", "Natural Language Processing with Classification and Vector Spaces"],
		id: "c3"
	},
	{
		title: "Tensorflow Developer | Deeplearning.ai, Coursera",
		courses: ["Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning", "Convolutional Neural Networks in TensorFlow", "Natural Language Processing in TensorFlow" , "Sequences, Time Series and Prediction"],
		id: "c2"
	},
	{
		title: "Deep Learning Specialisation | Deeplearning.ai, Coursera",
		courses: ["Neural Networks and Deep Learning", "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization", "Structuring Machine Learning Projects", "Convolutional Neural Networks", "Sequence Models"],
		id: "c1"
	}
]

export {projects, featured, skills, experience, certifications};
