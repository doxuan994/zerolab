let myImg1 = document.getElementById('myImg1');
myImg1.addEventListener('click', function() {
    let myModal = document.getElementById('myModal');
    myModal.classList.add('displayBlockDesktop');

    let modalImg01 = document.getElementById('modalImg01');
    modalImg01.src = this.src;
});

let modalCloseBtn = document.getElementById('modalCloseBtn');
modalCloseBtn.addEventListener('click', function() {
    ani(function() {
        let myModal = document.getElementById('myModal');
        myModal.classList.remove('displayBlockDesktop');

        console.log('Close window!');
    });
});

function ani(callback) {
    // Execute animation first.
    let modalImg01 = document.getElementById('modalImg01');
    modalImg01.classList.add('active');
    console.log('Finished animation!');

    // After finishing the animation close the modal.
    callback();
}





let myModal2 = document.getElementById('myModal2');
let modalImg02 = document.getElementById('modalImg02');
let myImg2 = document.getElementById('myImg2');

myImg2.addEventListener('click', function() {
    myModal2.classList.add('displayBlockDesktop');

    modalImg02.src = this.src;
});
let modalCloseBtn2 = document.getElementById('modalCloseBtn2');
modalCloseBtn2.addEventListener('click', function() {
    myModal2.classList.remove('displayBlockDesktop');
});





let myModal3 = document.getElementById('myModal3');
let modalImg03 = document.getElementById('modalImg03');
let myImg3 = document.getElementById('myImg3');

myImg3.addEventListener('click', function() {
    myModal3.classList.add('displayBlockDesktop');

    modalImg03.src = this.src;
});
let modalCloseBtn3 = document.getElementById('modalCloseBtn3');
modalCloseBtn3.addEventListener('click', function() {
    myModal3.classList.remove('displayBlockDesktop');
});






let myModal4 = document.getElementById('myModal4');
let modalImg04 = document.getElementById('modalImg04');
let myImg4 = document.getElementById('myImg4');

myImg4.addEventListener('click', function() {
    myModal4.classList.add('displayBlockDesktop');

    modalImg04.src = this.src;
});
let modalCloseBtn4 = document.getElementById('modalCloseBtn4');
modalCloseBtn4.addEventListener('click', function() {
    myModal4.classList.remove('displayBlockDesktop');
});





let myModal5 = document.getElementById('myModal5');
let modalImg05 = document.getElementById('modalImg05');
let myImg5 = document.getElementById('myImg5');

myImg5.addEventListener('click', function() {
    myModal5.classList.add('displayBlockDesktop');

    modalImg05.src = this.src;
});
let modalCloseBtn5 = document.getElementById('modalCloseBtn5');
modalCloseBtn5.addEventListener('click', function() {
    myModal5.classList.remove('displayBlockDesktop');
});





let myModal6 = document.getElementById('myModal6');
let modalImg06 = document.getElementById('modalImg06');
let myImg6 = document.getElementById('myImg6');

myImg6.addEventListener('click', function() {
    myModal6.classList.add('displayBlockDesktop');

    modalImg06.src = this.src;
});
let modalCloseBtn6 = document.getElementById('modalCloseBtn6');
modalCloseBtn6.addEventListener('click', function() {
    myModal6.classList.remove('displayBlockDesktop');
});
