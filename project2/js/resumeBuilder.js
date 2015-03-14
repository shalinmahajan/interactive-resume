//JSON for variable "bio"
var bio={
			"name": "Suresh Raina",
			"role":"Web Developer",
			"welcomeMessage":"Welcome to my world of web designing. For all your needs contact me.",
			"contacts":{
				"mobile":875945512,
				"email":"suresh@gmail.com",
				"github":"suresh218",
				"twitter":"@suresh_web_developer",
				"location":"Gurgaon, India"
			},
			"skills":["Intelligent","Awesome","Adventurous","Team player"],
			"bioPic":"images/fry.jpg"
};

//Encapsulation of bio details
bio.display=function(){
	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedBiopic=HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedBiopic);
	var formattedWelcomeMessage=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
};

bio.display();

//Encapsulation of top contacts
bio.displayContacts=function(){
	$("#topContacts").append(HTMLcontactGeneric);
	var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts:last").append(formattedMobile);
	var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts:last").append(formattedEmail);
	var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts:last").append(formattedGithub);
	var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts:last").append(formattedTwitter);
	var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts:last").append(formattedLocation);
};

bio.displayContacts();

//Encapsulation of skills
bio.displaySkills=function(){
		if (bio.skills.length>0){
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills){

				var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
};

bio.displaySkills();

//JSON for variable "work"
var work={
	"jobs":[
				{
				"employer":"Big Infosys",
				"title": "Web Developer",
				"location": "Delhi,India",
				"dates": "jan 2010",
				"description":"Worked on International Projects."
				},
				{
				"employer":"Small Infosys",
				"title": "Web Planner",
				"location": "Mumbai,India",
				"dates": "Feb 2012",
				"description":"Worked on BIG Bang project for NASA"
				}
			]
};
//Encapsulation of work
work.display=function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

//JSON for variable "projects"
var projects={
	"projects":[
		{

			"title": "MUG up",
			"dates":"Jan2015-Feb2015",
			"description":"Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ",
			"images":["images/mug.png","images/mug.png"]
		},
		{
			"title": "Life of cute Puppies",
			"dates":"Feb 2015-Mar 2015",
			"description":"Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah  ",
			"images":["images/puppy.jpg","images/puppy2.jpg"]
		}
	]
};

//Encapsulation of projects
projects.display=function(){
	for (each in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[each].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[each].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[each].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[each].images.length>0){
			for(image in projects.projects[each].images){
				var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[each].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

var education={
	"schools":[
		{
			"name":"St. marys",
			"location":"Banglore,India",
			"degree":"BS",
			"major": ["Physics","Maths","Electronics"],
			"date":"May-2001",
			"url":"websk.com"
		},
		{
			"name":"IIT",
			"location":"Delhi,India",
			"degree":"MS",
			"major": ["Computer Science","Maths"],
			"date":"April-2004",
			"url":"iit.com"
		}
	],
	"onlineCourses":[
		{
			"title": "Microsoft Certified System Engineer",
			"school":"Microsoft",
			"dates": "March 2005",
			"url":"http://www.microsoft.com"
		},
		{
			"title": "Cisco Certified Network Administrator",
			"school":"Cisco",
			"dates": "April 2005",
			"url":"http://www.cisco.com"
		}
	]
};

//Encapsulation of education
education.displaySchool=function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates=HTMLschoolDates.replace("%data%",education.schools[school].date);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		for(majors in education.schools[school].major){
			var formattedSchoolMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major[majors]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
};

education.displaySchool();

//Encapsulation of online education
education.displayOnline=function(){
	$("#education").append(HTMLonlineClasses);
	for(onlinecourse in education.onlineCourses){

		var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[onlinecourse].title);
		$(".online-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[onlinecourse].school);
		$(".online-entry:last").append(formattedOnlineSchool);
		var FormattedOnlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[onlinecourse].dates);
		$(".online-entry:last").append(FormattedOnlineDates);
		var formattedOnlineUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[onlinecourse].url);
		$(".online-entry:last").append(formattedOnlineUrl);
	}
};

education.displayOnline();

//Encapsulation of Bottom Contacts
bio.displayContacts2=function(){
	$("#footerContacts").append(HTMLcontactGeneric);
	var formattedMobile1=HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#footerContacts:last").append(formattedMobile1);
	var formattedEmail1=HTMLemail.replace("%data%",bio.contacts.email);
	$("#footerContacts:last").append(formattedEmail1);
	var formattedGithub1=HTMLgithub.replace("%data%",bio.contacts.github);
	$("#footerContacts:last").append(formattedGithub1);
	var formattedTwitter1=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#footerContacts:last").append(formattedTwitter1);
	var formattedLocation1=HTMLlocation.replace("%data%",bio.contacts.location);
	$("#footerContacts:last").append(formattedLocation1);
};

bio.displayContacts2();

$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});


//Internationalize function

function inName(name){
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}
console.log(inName(bio.name));

//Locationizer Function
var locationizer=function(work_obj){
	var workArray=[];
	for(i in work_obj.jobs){
		var newLocation=work_obj.jobs[i].location;
		workArray.push(newLocation);
	}
	return workArray;
}
console.log(locationizer(work));

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);



