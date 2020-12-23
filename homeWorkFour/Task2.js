let search = document.getElementById('search');

let timeout;
search.addEventListener('keyup', function (e) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    timeout = setTimeout(time, 3000);
    function time () {
        alert('hello')
    }
})







