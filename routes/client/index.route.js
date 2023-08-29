const productRoutes = require("./product.route");
const productHome = require("./home.route");


module.exports = (app)=>{
    app.use("/", productHome);
    
    app.use("/products", productRoutes);

}
