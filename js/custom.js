let skill = document.getElementById('skill');
let skillIMG = ['html 5', 'css 3', 'jquery', 'bootstrap', 'c-language', 'github', 'javascript', 'python', 'dsa with c++'];

// Skills js
skillIMG.forEach((logo) => {
    skill.innerHTML += `<div class="item my-3">
                            <div class="bg-primary bg-opacity-50 shadow py-4 rounded">
                                <img class="w-90 mx-auto rounded-3" src="images/skills/${logo}.png" alt="">
                                <h4 class="mt-3 text-uppercase">${logo}</h4>
                            </div>
                       </div>`;
});

// Certificates modal js
$('.cert').click(function () {
    let certIMG = document.getElementById('certIMG');
    let certTitle = document.getElementById('certTitle');

    let img = $(this).siblings('img');
    let title = $(this).siblings('h3').children('.title');

    certTitle.innerHTML = "Certificate of " + title[0].firstChild.data;
    certIMG.innerHTML = `<img class="border-primary border shadow-lg rounded-3" src="${img[0].attributes.src.nodeValue}" width="100%">`;
});