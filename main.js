let gallery = [
    ['img/dog01.jpg', '2010. ‎június ‎25.'],
    ['img/dog02.jpg', '2011. ‎június ‎25.'],
    ['img/dog03.jpg', '2012. ‎június ‎25.'],
    ['img/dog04.jpg', '2013. ‎június ‎25.'],
    ['img/dog05.jpg', '2014. ‎június ‎25.'],
    ['img/dog06.jpg', '2015. ‎június ‎25.'],
    ['img/dog07.jpg', '2016. ‎június ‎25.'],
    ['img/dog08.jpg', '2017. ‎június ‎25.'],
    ['img/dog09.jpg', '2018. ‎június ‎25.'],
    ['img/dog10.jpg', '2019. ‎június ‎25.'],
    ['img/dog11.jpg', '2020. ‎június ‎25.'],
    ['img/dog12.jpg', '2020. ‎június ‎11.'],
    ['img/dog13.jpg', '2020. ‎június ‎12.'],
    ['img/dog14.jpg', '2020. ‎június ‎13.'],
    ['img/dog15.jpg', '2020. ‎június ‎14.'],
    ['img/dog16.jpg', '2020. ‎június ‎15.'],
    ['img/dog17.jpg', '2020. ‎június ‎16.'],
    ['img/dog18.jpg', '2020. ‎június ‎17.'],
    ['img/dog19.jpg', '2020. ‎június ‎18.'],
    ['img/dog20.jpg', '2020. ‎június ‎19.'],
    ['img/dog21.jpg', '2020. ‎június ‎10.'],
    ['img/dog22.jpg', '2020. ‎június ‎20.'],
    ['img/dog23.jpg', '2020. ‎június ‎21.'],
    ['img/dog24.jpg', '2020. ‎június ‎22.'],
    ['img/dog25.jpg', '2020. ‎június ‎23.'],
    ['img/dog26.jpg', '2020. ‎június ‎24.'],
    ['img/dog27.jpg', '2020. ‎június ‎25.'],
    ['img/dog28.jpg', '2020. ‎június ‎26.'],
    ['img/dog29.jpg', '2020. ‎június ‎27.'],
    ['img/dog30.jpg', '2020. ‎június ‎28.']
]

let photos = '';

for (let i = 0; i < gallery.length; i++) {
    photos += `<div><img src=${gallery[i][0]} alt="Dog${i}"><div>${gallery[i][1]}</div></div>`;
}

document.getElementById('container').innerHTML = photos;