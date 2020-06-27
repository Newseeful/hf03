let newHeadline = document.querySelector('h1'); 
newHeadline.textContent = 'A galéria összesen ' + gallery.length + ' képet tartalmaz'; 

function showPage() {
    let pageNum = document.getElementById('page').value - 1;
    let photoContent = document.querySelector('#gallery');
    let photos = '';
    for (let i = 0; i < 10; i++) {
        photos += `<div><img src=${gallery[i+pageNum*10][0]} alt="Dog${i+pageNum*10}"><div>${gallery[i+pageNum*10][1]}</div></div>`;
      console.log(i+pageNum*10);  
    }
   photoContent.innerHTML = photos;
}