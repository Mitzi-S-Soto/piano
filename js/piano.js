function getKey(a){
    var note = document.getElementsByClassName("note");
    var i;
    const noteSound=document.querySelector(`audio[data-key="${a.keyCode}"]`);
    const noteActive=document.querySelector(`li[data-key="${a.keyCode}"]`);
    for (i=0; i<7; i++){
       note[i].className = note[i].className.replace(" active", " hidden");
    }
    if (!noteSound) return;
    noteSound.currentTime=0;
    noteSound.play();
    noteActive.className = noteActive.className.replace(" hidden"," active");
    document.getElementById('textmobile').value = "";
}

function showNote(e) {
    var note = document.getElementsByClassName("note");
    var i;
    const noteSound=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const noteActive=document.querySelector(`li[data-key="${e.keyCode}"]`);
    for (i=0; i<7; i++){
       note[i].className = note[i].className.replace(" active", " hidden");
    }
    if (!noteSound) return;
    noteSound.currentTime=0;
    noteSound.play();
    noteActive.className = noteActive.className.replace(" hidden"," active");
}

window.addEventListener('keydown', showNote);
