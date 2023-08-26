const bandas = require("../db/bandas")

const bandasController = {
    //me da el listado completo de bandas
    index: function (req, res) {
        // const propiedadesBandas = ["nombre", "integrantes", "genero", "topCanciones", "cover", "id", "video"]
        return res.render("listadoBandas", {lista: bandas.lista, title: "Listado Bandas", /**propiedades: propiedadesBandas**/})
    },

    //se muestta todos los datos de la banda (punto: i --> LISTO)
    //FALTA VER EL ii Y iii
    encuentraId: function (req, res) {
        let ingresoId = req.params.id;
        let arrayBanda = [];
        for (let i = 0; i < bandas.lista.length; i++) {
            if (ingresoId == bandas.lista[i].id) {
                arrayBanda.push(bandas.lista[i]);
            }
        }
        return res.render("detalleBanda", {infoBanda: arrayBanda, title: "Detalle de Bandas"})
    }, 

    //falta hacer GENERO
    encuentraGenero: function (req, res) {

    },

}

module.exports = bandasController;

