let deletes = document.querySelectorAll('.delete');
let taggingTitle = document.querySelectorAll('.tagging-title');
let taggingElement = document.querySelectorAll('.tagging-element');


function clearSiblings(element) {
    for (let i = 0; i < taggingElement.length; i++) {
        if (taggingElement[i] !== element) {
            taggingElement[i].classList.remove('grab-mode');
        }
    }
}

function deleteBlock() {
    for (let i = 0; i < deletes.length; i++) {
        deletes[i].addEventListener("click", function(event) {
            event.path[1].remove();
        });
    }
}


function initClicks() {
    deleteBlock();
    for (let i = 0; i < taggingTitle.length; i++) {
        taggingTitle[i].addEventListener("click", function(event) {
            event.path[1].classList.toggle('grab-mode');
            clearSiblings(event.path[1]);
        });
    }
}
initClicks();