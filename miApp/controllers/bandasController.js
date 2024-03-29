const bandas = require("../db/bandas")

const bandasController = {
    //me da el listado completo de bandas
    index: function (req, res) {
        return res.render("listadoBandas", {lista: bandas.lista, title: "Listado Bandas"})
    },

    encuentraId: function (req, res) {
        let ingresoId = req.params.id;
        let arrayBanda = [];

        for (let i = 0; i < bandas.lista.length; i++) {
            if (ingresoId == bandas.lista[i].id) {
                arrayBanda.push(bandas.lista[i]);
            }     
        }

        if (!arrayBanda){
            return res.render("detalleBanda", {title:"Banda no encontrada"});
        }
        
        return res.render("detalleBanda", {infoBanda: arrayBanda, title: "Detalle de Bandas"})
    }, 

    encuentraGenero: function (req, res) {
        let ingresogenero = req.params.genero;
        let arrayGeneros  = []
        for (let i = 0; i <  bandas.lista.length ; i++) {
            if (ingresogenero == bandas.lista[i].genero) {
                arrayGeneros.push(bandas.lista[i]);   
            }
            
        }
        
        if (!arrayGeneros) {
            return res.render("porGeneros", {title:"Genero sin Banda"});

        }
        return res.render("porGeneros", {infoGeneros: arrayGeneros, title: "Bandas por Género "})

    },

}

module.exports = bandasController;

