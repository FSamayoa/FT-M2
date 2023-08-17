//* Ver Amigos

$("#boton").on("click", function (){
    // let lista = $("#lista")
    // $.get("http://localhost:5000/amigos", (response)
    // =>{
    //     response.map(amigo=>){
    //         let elementoHTML = document.createElement("li")
    //         elementoHTML.innerText= `${amigo.name} es tu amigo numero: ${amigo,id}`;
    //         lista.append(elementoHTML)
        
    //     }  
    //     });
    

    

    $.ajax ({
        type:"GET",
        url: "http://localhost:5000/amigos",
        success: data => {
            let info;
            $("#lista").empty(info);

            data.forEach(element => {
                info = document.createElement("li");
                info.innerText = element.name + " age " + element.age + " Email: " + element.email;
                $("#lista").append(info);
            });

        }
    })
  
});

//*Buscar amigo

$("#search").click (() => {
    let entrada = $("#input").val();
    img.show();

    $.ajax({
        type: "GET",
        url: `http://localhost:5000/amigos`,
        success: data => {
            let size;
            size = data.length;
            if (entrada > size || entrada !== data.id) {
                $("#amigo").text('Este amigo no existe');
            }
            img.hide([3000]);
        }
    });

    
    $.ajax({
        type: "GET",
        url: `http://localhost:5000/amigos/${entrada}`,
        success: data => {
            // let info;
            // info = document.createElement("p"); //! otra opción
            // info.innerText = data.name;
            
            $("#amigo").text(data.name)
            
            img.hide([3000]);
        }
    });
    
})

$("#delete").click (() => {
    let entradaDelete = $("#inputDelete").val();
    $.ajax ({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${entradaDelete}`,
        success: data => {
            
            $("#success").text('Tu amigo fue borrado con éxito');


        }
    })
})