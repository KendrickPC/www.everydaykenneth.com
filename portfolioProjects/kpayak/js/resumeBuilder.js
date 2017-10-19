/* --------------------------------------- JSON DATA STARTS HERE ------------------------------------- */

/* --------------------------------------- BIO ------------------------------------------------------- */
var bio = {
    "name": "Keyur Payak",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "111-1221-6621",
        "email": "payak.keyur@gmail.com",
        "github": "kpayak",
        "twitter": "@kpayak",
        "website": "www.keyurpayak.com",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "skills": ["HTML/CSS", "JS/Jquery", "Responsive Web Design", "Angular JS"],
    "biopic": "images/fry.jpg",
    "display": function () {
        $("#header").append(HTMLimgDiv);
        $(".img-div").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLnameDiv);
        $(".name-div").append(HTMLheaderName.replace("%data%", bio.name));
        $(".name-div").append(HTMLheaderRole.replace("%data%", bio.role));
        $(".name-div").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLcontactDiv);
        $(".contact-div").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $(".contact-div").append(HTMLemail.replace("%data%", bio.contacts.email));
        $(".contact-div").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $(".contact-div").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $(".contact-div").append(HTMLwebsite.replace("%data%", bio.contacts.website));
        $("#header").append(HTMLmessageDiv);
        $(".short-description").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    }
};
/* --------------------------------------- WORK ------------------------------------------------------ */
var work = {
    "jobs": [
        {
            "employer": "Spansion",
            "title": "Design Engineer",
            "location": "Sunnyvale, CA",
            "dates": "2010-2013",
            "description": "Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active. Equally journey wishing not several behaved chapter she two sir. Deficient procuring favourite extensive you two. Yet diminution she impossible understood age. "
 	},
        {
            "employer": "SanDisk",
            "title": "Design Engineer 2",
            "location": "Milpitas, CA",
            "dates": "2013-Present",
            "description": "Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction. "
 	}],
    "display": function () {
        $("#work-experience").append(HTMLworkHeader);
        for (j in work.jobs) {
            $("#work-experience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[j].description);
            $(".work-entry:last").append(formattedWorkDesc);
        }
    }
};
/* --------------------------------------- PROJECTS -------------------------------------------------- */
var projects = {
    "projects": [
        {
            "title": "About Me",
            "dates": "2015",
            "description": "Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. ",
            "images": ["images/humayun.jpg", "images/tropicalBeach.jpg"]
 	  },

        {
            "title": "Portfolio",
            "dates": "2015",
            "description": "In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart ﻿no marry whole linen mr. Income joy nor can wisdom summer. Extremely depending he gentleman improving intention rapturous as. ",
            "images": ["images/indore.jpg", "images/sfo.jpg"]
 	}],
    "display": function () {
        $("#projects").append(HTMLprojectHeader);
        for (p in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[p].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[p].description));
            for (i in projects.projects[p].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[p].images[i]));
            }
        }
    }
};
/* --------------------------------------- EDUCATION ------------------------------------------------- */
var education = {
    "schools": [
        {
            "name": "Utah State University",
            "location": "Logan,UT",
            "degree": "M.S.",
            "majors": "Electrical Engineering",
            "dates": "2007 - 2010",
            "url": "www.ece.usu.edu"
 	},

        {
            "name": "MITM",
            "location": "Indore",
            "degree": "ECE",
            "majors": "ECE",
            "dates": "2003-2007",
            "url": "www.mitm.com"
 	}],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "www.udacity.com",
        "description": "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
 	}],
    "display": function () {
        $("#education").append(HTMLeducationHeader);
        for (e in education.schools) {
            $("#education").append(HTMLschoolStart);
            var sch = HTMLschoolName.replace("%data%", education.schools[e].name) + HTMLschoolDegree.replace("%data%", education.schools[e].degree)
            $(".education-entry:last").append(sch);
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[e].location));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[e].dates));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[e].majors));
        }
        $("#education").append(HTMLonlineClassesStart);
        $(".online-classes-entry:last").append(HTMLonlineClasses);
        for (o in education.onlineCourses) {
            $(".online-classes-entry:last").append(HTMLonlineClassesSubHeading);
            $(".online-classes-sub-heading:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title));
            $(".online-classes-sub-heading:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school));
            $(".online-classes-sub-heading:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates));
            $(".online-classes-sub-heading:last").append(HTMLonlineDescription.replace("%data%", education.onlineCourses[o].description));
            $(".online-classes-sub-heading:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[o].url));
        }
    }
};
/* --------------------------------------- END JSON DATA --------------------------------------------- */

/* --------------------------------------- DISPLAY FUNCTION CALLS ------------------------------------ */
bio.display();
education.display();
projects.display();
work.display();
//Maps
$("#mapDiv").append(HTMLmapsHeader);
$("#mapDiv").append(googleMap);

/* ----------------------------------------- TOGGLE SECTIONS METHOD -------------------------------- */
