let url = "https://tt905-rogermascarenhas-telecom.herokuapp.com/mensagem/"

async function fetchGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Deu certo");
        output.innerHTML = await response.text();
    } else {
        console.log("Não deu certo");
    }
}

async function fetchPost(raça, nome , idade, sexo){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'raça' : raça,
            'nome' : nome,
            'idade' : idade,
            'sexo' : sexo,
        })
    }
    await fetch(url, options);
}

async function fetchPut(id, raça, nome , idade, sexo){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'raça' : raça,
            'nome' : nome,
            'idade' : idade,
            'sexo' : sexo,
        })
    }
    await fetch(`${url}${id}`, options);
}

async function fetchDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

/*
    Formulários
*/

function submitPost(){

    const form = document.forms['postForm'];    
    const raça = form["raça"].value;
    const nome = form["nome"].value;
    const idade = form["idade"].value;
    const sexo = form["sexo"].value;
    fetchPost(raça, nome, idade, sexo);
    return false; // Evitar o reload da tela.
    
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;
    const raça = form["raça"].value;
    const nome = form["nome"].value;
    const idade = form["idade"].value;
    const sexo = form["sexo"].value;  
    fetchPut(id, raça, nome, idade, sexo);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    fetchDelete(id);
    return false; // Evitar o reload da tela.
}