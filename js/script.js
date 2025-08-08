document.addEventListener("DOMContentLoaded", function(){
        const searchForm = document.getElementById("barra_pesquisa");
        const searchInput = document.getElementById("input_search");
        const searchResultados = document.getElementById("resultados");
      
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const searchMap = {
                "programacao geral": "programacao.html",
                "artesanato": "artesanato.html",
                "shows": "shows.html",
                "eventos em familia": "familia.html",
                "atos religiosos": "atos.html",
                "historia": "historia.html",
                "trajetoria dos peregrinos": "peregrinos.html",
                "encerramento": "encerramento.html",
                "organizadores": "organizadores.html",
                "perfis": "perfis.html"
            };
            if (searchMap[searchTerm]) {
                window.location.href = searchMap[searchTerm];
            }
            else if (searchTerm) {searchResultados.textContent = `Nenhum resultado de "${searchInput.value.trim()}"`;
            }

            else {
                searchResultados.textContent = 'Digite algo para pesquisar';
            } 
        });
     });
     