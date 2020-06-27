function showPage() {
    // create gallery
    let pageNum = document.getElementById('page').value - 1;
    let photoBox = document.querySelector('#gallery');
    let photos = '';
    for (let i = 0; i < 10; i++) {
        photos += `<div><img class="page-items" src=${gallery[i + pageNum * 10][0]} id="${i}" alt="Dog${i + pageNum * 10}"><div>${gallery[i + pageNum * 10][1]}</div></div>`;
    }
    photoBox.innerHTML = photos;

    // create eventlisteners for modal
    for (let i = 0; i < 10; i++) {
        let targetElement = document.getElementById(i);
        targetElement.addEventListener("click", function () {
            // Get the image and insert it inside the modal
            let img = document.getElementById(i);
            let modalImg = document.getElementById("modalImagePlaceholder");
            modalImg.src = img.src;
            modal.style.display = "block";
        });
    }
}

// Sum of pics
let headline = document.querySelector('h1');
headline.textContent = 'A galéria összesen ' + gallery.length + ' képet tartalmaz';

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}