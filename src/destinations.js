import earth from './imgs/earth.gif'
import gasgiant1 from './imgs/gasgiant1.gif'
import gasgiant2 from './imgs/gasgiant2.gif'
import iceworld from './imgs/iceworld.gif'
import islands from './imgs/islands.gif'
import lavaworld from './imgs/lavaworld.gif'
import mars from './imgs/mars.gif'
import moon from './imgs/moon.gif'
import star from './imgs/star.gif'
import blackhole from './imgs/blackhole.gif'

const destinationsArray = [
    {
        id: '1',
        title: 'EARTH',
        price: 0.0075,
        distance: '420 KM',
        travelTime: '6 HOURS',
        oneWay: false,
        img: earth
    },
    {
        id: '2',
        title: 'TOPH',
        price: 0.5275,
        distance: '230 MIL. KM',
        travelTime: '1.25 YEAR',
        oneWay: false,
        img: gasgiant1
    },
    {
        id: '3',
        title: 'CELEBRIMBOR',
        price: 0.9105,
        distance: '400 MIL. KM',
        travelTime: '2.20 YEARS',
        oneWay: false,
        img: gasgiant2
    },
    {
        id: '4',
        title: 'FROSTPUNK',
        price: 1.1315,
        distance: '505 MIL. KM',
        travelTime: '2.75 YEARS',
        oneWay: false,
        img: iceworld
    },
    {
        id: '5',
        title: 'INDONESIA',
        price: 1.4095,
        distance: '635 MIL. KM',
        travelTime: '3.38 YEARS',
        oneWay: false,
        img: islands
    },
    {
        id: '6',
        title: 'JINN',
        price: 2.3695,
        distance: '925 MIL. KM',
        travelTime: '4.52 YEARS',
        oneWay: false,
        img: lavaworld
    },
    {
        id: '7',
        title: 'SETH',
        price: 82.7705,
        distance: '1 LIGHT-YEAR',
        travelTime: '1 DECADE',
        oneWay: false,
        img: mars
    },
    {
        id: '8',
        title: 'KHONSHU',
        price: 150.0045,
        distance: '2 LIGHT-YEARS',
        travelTime: '2 DECADES',
        oneWay: false,
        img: moon
    },
    {
        id: '9',
        title: 'ALPHA CENTAURI',
        price: 369.0775,
        distance: '4.35 LIGHT-YEARS',
        travelTime: '4.35 DECADES',
        oneWay: true,
        img: star
    },
    {
        id: '10',
        title: 'DEF-31',
        price: 400.1235,
        distance: '5 LIGHT-YEARS',
        travelTime: '5 DECADES',
        oneWay: true,
        img: blackhole
    }
]

function getDestinationData(id) {
    let destinationData = destinationsArray.find(destination => destination.id === id)

    if(destinationData === undefined) {
        console.log("We don't have destinations for the ID: " + id)
    }

    return destinationData
}

export { destinationsArray, getDestinationData }