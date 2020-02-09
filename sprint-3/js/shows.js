//creating and appending the section, section title, and date/venue/location titles
const showsSection = document.querySelector('.shows');

const title = document.createElement('h2');
title.classList.add('shows__title');
title.textContent = 'Shows';
showsSection.appendChild(title);

const eventsContainer = document.createElement('div');
eventsContainer.classList.add('shows__eventscontainer');
showsSection.appendChild(eventsContainer);

const eventsTitles = document.createElement('div');
eventsTitles.classList.add('shows__event--titles')
eventsContainer.appendChild(eventsTitles);

const dateTitle = document.createElement('h3');
dateTitle.classList.add('shows__description--tablet');
dateTitle.textContent = ('DATES');
eventsTitles.appendChild(dateTitle);

const venueTitle = document.createElement('h3');
venueTitle.classList.add('shows__description--tablet')
venueTitle.textContent = ('VENUE');
eventsTitles.appendChild(venueTitle);

const locationTitle = document.createElement('h3');
locationTitle.classList.add('shows__description--tablet')
locationTitle.textContent = ('LOCATION');
eventsTitles.appendChild(locationTitle);

//this hidden button is used to keep the titles flexbox in line with the actual 
var hiddenDiv=document.createElement('div');
hiddenDiv.classList.add('shows__hidden');
eventsTitles.appendChild(hiddenDiv);

//saving the api key and key affix in one variable for easy re-use
const apiKey = "234dfbdf-20c1-4168-b9b3-08ec038c0e1a";
const keyAffix = "?api_key=" + apiKey;

//retrieving shows dates
const showDates = axios.get ("https://project-1-api.herokuapp.com/showdates" + keyAffix);
showDates.then(result => {

    result.data.forEach (thing => {

        const showsEvent = document.createElement('div');
        showsEvent.classList.add('shows__event');
        eventsContainer.appendChild(showsEvent);

        var showsDesc = document.createElement('h3');
        showsDesc.classList.add('shows__description');
        showsDesc.textContent = ('DATES');
        showsEvent.appendChild(showsDesc);

        var showsDetail= document.createElement('h3');
        showsDetail.classList.add('shows__description--detail');
        showsDetail.classList.add('shows__description--detail--date');
        showsDetail.textContent = (thing.date);
        showsEvent.appendChild(showsDetail);

        showsDesc = document.createElement('h3');
        showsDesc.classList.add('shows__description');
        showsDesc.textContent = ('VENUE')
        showsEvent.appendChild(showsDesc);

        showsDetail= document.createElement('h3');
        showsDetail.classList.add('shows__description--detail');
        showsDetail.textContent = (thing.place);
        showsEvent.appendChild(showsDetail);

        showsDesc = document.createElement('h3');
        showsDesc.classList.add('shows__description');
        showsDesc.textContent = ('LOCATION')
        showsEvent.appendChild(showsDesc);

        showsDetail= document.createElement('h3');
        showsDetail.classList.add('shows__description--detail');
        showsDetail.textContent = (thing.location);
        showsEvent.appendChild(showsDetail);

        var ticketsButton=document.createElement('button');
        ticketsButton.classList.add('shows__button');
        ticketsButton.innerHTML = ('BUY TICKETS')
        showsEvent.appendChild(ticketsButton);
    })
})
