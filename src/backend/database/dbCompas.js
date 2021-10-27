let UpdateDb = (data) => {
    sequelize.sync({
        alter: true
    }).then(async () => {
        console.log(data)
        let NewProducto = await Products.findOne({ // Busca un producto existente
            where: {
                id: data.productoId
            }
        })
        for (let i = 0; i < data.categorias.length; i++) { //recorre un array con categorias

            let categorias = await Categorias.findOne({ //busca la categoria
                where: {
                    id: data.categorias[i]
                }
            })

            await categorias.addProducts(NewProducto); // crea la relacion


        }
    })
}


//que Parametro pasar? un objeto de esta forma
// Objeto = {
//     productoId: 2,//id del producto
//     categorias: [1,4,2]// categorias que le quieras agregar
// }

