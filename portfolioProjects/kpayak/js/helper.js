var HTMLimgDiv = '<div class="img-div"></div>';
var HTMLbioPic = '<img src="%data%" class="biopic">';

// This Div Contains Name and Role
var HTMLnameDiv = '<div class="name-div"></div>';
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2 class="role">%data%</h2>';
var HTMLlocation = '<div class="location-info"><i class="ion-ios-location-outline location-icon"></i><span class="location-text">%data%</span></div>';

//This Div contains Contact Info
var HTMLcontactDiv = '<div class="contact-div"></div>';
var HTMLcontactGeneric = '<div class="contact-item"><div class="contact-attr">%contact%</div><div class="contact-value"><span>%data%</span></div>';
var HTMLmobile = '<div class="contact-item"><a href="#"><div class="contact-icon-align-box"><i class="ion-ios-telephone-outline contact-icon"></i></div></a><div class="contact-value"><span>%data%</span></div>';
var HTMLemail = '<div class="contact-item"><a href="#"><div class="contact-icon-align-box"><i class="ion-ios-email-outline contact-icon"></i></div></a><div class="contact-value"><span>%data%</span></div>';
var HTMLtwitter = '<div class="contact-item"><a href="#"><div class="contact-icon-align-box"><i class="ion-social-twitter-outline contact-icon"></i></div></a><div class="contact-value"><span>%data%</span></div>';
var HTMLgithub = '<div class="contact-item"><a href="#"><div class="contact-icon-align-box"><i class="ion-social-github-outline contact-icon"></i></div></a><div class="contact-value"><span>%data%</span></div>';
var HTMLwebsite = '<div class="contact-item"><a href="#"><div class="contact-icon-align-box"><i class="ion-ios-flag-outline contact-icon"></i></div></a><div class="contact-value"><span>%data%</span></div>';

//Short Description div
var HTMLmessageDiv = '<div class="short-description"></div>';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

//Work Section
var HTMLworkHeader = '<div class="section-header"><div class="section-icon"><i class="ion-ios-list-outline"></i></div><div class="section-header-title"><h2 class="title-text">Experience</h2></div><div class="pull-menu-icon"><i class="ion-chevron-down icon-box"></i></div></div>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" class="sub-header">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text"><p>%data%</p></div>';
var HTMLworkLocation = '<div class="location-text"><p>%data%</p></div>';
var HTMLworkDescription = '<p class="description-text">%data%</p>';

//Project Section
var HTMLprojectHeader = '<div class="section-header"><div class="section-icon"><i class="ion-ios-albums-outline"></i></div><div class="section-header-title"><h2 class="title-text">Projects</h2></div><div class="pull-menu-icon"><i class="ion-chevron-down icon-box"></i></div></div>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#" class="sub-header">%data%</a>';
var HTMLprojectDates = '<div class="date-text"><p>%data%</p></div>';
var HTMLprojectDescription = '<p class="description-text">%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="project-screenshot">';

//Education Section
var HTMLeducationHeader = '<div class="section-header"><div class="section-icon"><i class="ion-ios-lightbulb-outline"></i></div><div class="section-header-title"><h2 class="title-text">Education</h2></div><div class="pull-menu-icon"><i class="ion-chevron-down icon-box"></i></div></div>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" class="sub-header">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolLocation = '<div class="location-text"><p>%data%</p></div>';
var HTMLschoolDates = '<div class="date-text"><p>%data%</p></div>';
var HTMLschoolMajor = '<div class="major"><p class="description-text">Major: %data%</p></div>';
var HTMLonlineClassesStart = '<div class="online-classes-entry"></div>';
var HTMLonlineClasses = '<p class="sub-header">Online Classes</p>';
var HTMLonlineClassesSubHeading = '<div class="online-classes-sub-heading"></div>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text"><p>%data%</p></div>';
var HTMLonlineURL = '<a href="#">%data%</a>';
var HTMLonlineDescription = '<p class="description-text">%data%</p>';

//MAPS SECTION
var HTMLmapsHeader = '<div class="section-header"><div class="section-icon"><i class="ion-ios-navigate-outline"></i></div><div class="section-header-title"><h2 class="title-text">My Places</h2></div><div class="pull-menu-icon"><i class="ion-chevron-down icon-box"></i></div></div>';

/* --------------------------------------- GOOGLE MAPS --------------------------------------------- */
var googleMap = '<div id="map"></div>';
var map; // declares a global map variable
/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
    var locations;
    var mapOptions = {
        disableDefaultUI: true
    };

    /* 
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js. 
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide: 
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function (school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide: 
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function (job) {
            locations.push(job.location);
        });
        //console.log(locations);
        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function (place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function (e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(window.mapBounds);
});

/* ----------------------------------------- LOG CLICKS ------------------------------------------- */
$(document).on('click', function (e) {
    logClicks(e.pageX, e.pageY);
});

function logClicks(x, y) {
    console.log('x location: ' + x + '; y location: ' + y);
}
