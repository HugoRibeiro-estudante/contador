var divNova = document.createElement("p");
var meta = 40000; 
    
    function carregar(){

        carregarCont();
      
        carregaProgress();
}





    function func(){

        //localStorage.clear();
        //console.log(localStorage);
        //localStorage.setItem("valor", 1);

        var guardado = localStorage.getItem("valor");
        var valor = document.getElementById("valor").value;
        

        if(valor == "" || valor < 0){

            alert("Digite um valor positivo !");
            

        }else{

            var guardar = parseInt(valor) + parseInt(guardado);
        

            localStorage.setItem("valor", guardar);
            

            var retorno = localStorage.getItem("valor");
            

            var cont = document.querySelector("#cont");

            cont.textContent = retorno;

            divNova.textContent = retorno + "/" + meta;
            
        }

        limpar();

    }


    function carregaProgress(){

       
        
        var guardado = localStorage.getItem("valor");
        var conta = (guardado * 100)/meta;
        
        //alert(conta);
        document.getElementById("progr").style.width = conta + "%";
        
        
    }

    function carregarCont(){

        var guardado = localStorage.getItem("valor");
        var cont = document.querySelector("#cont");

        cont.textContent = guardado;


        var input = document.getElementById("valor");

        
        input.addEventListener("keyup", function(event) {
        
        if (event.keyCode === 13) {
            
            event.preventDefault();
            
            document.getElementById("myBtn").click();
        }
        });




        
        // cria um novo elemento div
        // e dá à ele conteúdo
        
        
        var conteudoNovo = document.createTextNode(guardado + "/" + meta);
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);

        divNova.classList.add("barra");

    }



    function limpar(){

        document.getElementById('valor').value = "";

    }

    function teste(){





    }