const showsSection = document.querySelector('.shows');

const title = document.createElement('h2');
title.classList.add('shows__title');
title.textContent = 'Shows';
showsSection.appendChild(title);

const eventsContainer = document.createElement('div');
eventsContainer.classList.add('shows__eventscontainer');
showsSection.appendChild(eventsContainer);

let arrDate = ['Mon Dec 17 2018','Tue Jul 18 2019','Fri Jul 22 2019','Sat Aug 12 2019','Fri Sep 05 2019','Wed Aug 11 2019'];

let arrVenue = ['Ronald Lane','Pier 3 East', 'View Loungue', 'Hyatt Agency','Moscow Center','Pres Club'];

const createCard = function (arrDate,arrVenue) {

    const showsEvent = document.createElement('div');
    showsEvent.classList.add('shows__event');
    eventsContainer.appendChild(showsEvent);

    var showsDesc = document.createElement('h3');
    showsDesc.classList.add('shows__description');
    showsDesc.textContent = ('DATES')
    showsEvent.appendChild(showsDesc);

    var showsDetail= document.createElement('h3');
    showsDetail.classList.add('shows__description--detail');
    showsDetail.textContent = (arrDate[i]);
    showsEvent.appendChild(showsDetail);

    showsDesc = document.createElement('h3');
    showsDesc.classList.add('shows__description');
    showsDesc.textContent = ('VENUE')
    showsEvent.appendChild(showsDesc);

    showsDetail= document.createElement('h3');
    showsDetail.classList.add('shows__description--detail');
    showsDetail.textContent = (arrVenue[i]);
    showsEvent.appendChild(showsDetail);

    showsDesc = document.createElement('h3');
    showsDesc.classList.add('shows__description');
    showsDesc.textContent = ('LOCATION')
    showsEvent.appendChild(showsDesc);

    showsDetail= document.createElement('h3');
    showsDetail.classList.add('shows__description--detail');
    showsDetail.textContent = ('San Fancisco, CA')
    showsEvent.appendChild(showsDetail);

    var ticketsButton=document.createElement('button');
    ticketsButton.classList.add('shows__button');
    ticketsButton.innerHTML = ('BUY TICKETS')
    showsEvent.appendChild(ticketsButton);
}

for (var i = 0; i <= 5; i++) {
    createCard(arrDate,arrVenue);
}


