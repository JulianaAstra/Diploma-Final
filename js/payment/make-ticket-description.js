const filmNameElement = document.querySelector('.ticket__title');
const seatsNumbersElement = document.querySelector('.ticket__chairs');
const hallNumberElement = document.querySelector('.ticket__hall');
const seanceTimeElement = document.querySelector('.ticket__start');
const fullPriceElement = document.querySelector('.ticket__cost');

const {fullPrice, seats, filmName, seanceTime, hallName} = window.localStorage;

const makeTicketDescription = () => {
    filmNameElement.textContent = filmName;
    seatsNumbersElement.textContent = seats;
    console.log(hallName.slice(-1));
    hallNumberElement.textContent = hallName.slice(-1);
    seanceTimeElement.textContent = seanceTime;
    fullPriceElement.textContent = fullPrice;
}

export { makeTicketDescription };
