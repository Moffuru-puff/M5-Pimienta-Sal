const { getMenu } = require("../data/db")

module.exports = {
    index: (req, res) => {
        res.render("index")
    },

    menu: (req, res) => {

        res.render("detalleMenu", {
            getMenu
        })
    },
    detallePlato: (req, res) => {
        let platoId = +req.params.id

      let comid = getMenu.find(platto => 
            platto.id === platoId
            
        )
        console.log(comid)
       
       
        res.render("detalle", {
            getMenu,
            comid
            
        })
    },
}