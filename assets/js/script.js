function newRequest(){
    let quest = new XMLHttpRequest();
    let url = 'https://thatsthespir.it/api'

    quest.open('GET', url);//appelle l'ouverture de la requête par la méthode (dans ce cas "get", et l'url)    
    quest.send();//envoi de la requête vers la source.
    if (!quest) {//si la requête à échoué
        alert('Abandon :( Impossible de créer une instance XMLHTTP');
        return false;
    }
    quest.onreadystatechange = function() { //si ma requête à récolté des infos, je lance la fonction suivante
        alertContents(quest); 
    };

    function alertContents(quest) {

        if (quest.readyState == XMLHttpRequest.DONE) {//si ma rêquete s'est bien terminée
            if (quest.status == 200) {

                let recolt = JSON.parse(quest.responseText);
                document.getElementById("quote").innerHTML = recolt["quote"];
                document.getElementById("photo").innerHTML = `<img class="avatar" src = ${recolt["photo"]}/>`;
                document.getElementById("Author").innerHTML = recolt["author"];

            } else {
                alert('Un problème est survenu avec la requête.');
            }
        }

    }
}