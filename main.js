
// show all
/*

let photos = '';

for (let i of gallery) {
    photos += `
        <div>
            <img src=${i[0]} alt="Dog${i}">
            <div>${i[1]}</div>
        </div>
    `;
}

document.getElementById('container').innerHTML = photos;

*/

let startPage = document.createElement('h1'); 
startPage.textContent = 'A galéria összesen ' + gallery.length + ' képet tartalmaz'; 
document.getElementById('container').appendChild(startPage);

function showPage() {
    let pageNum = document.getElementById('page').value;
    let photos = '';
    for (let i = 0; i < 10; i++) {
        photos += `<div><img src=${gallery[i*pageNum][0]} alt="Dog${i*pageNum}"><div>${gallery[i*pageNum][1]}</div></div>`;
    }
   document.getElementById('container').innerHTML = photos;
}