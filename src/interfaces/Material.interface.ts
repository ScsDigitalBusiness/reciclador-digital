export default  interface MaterialIn {
    name: { type: String, required: true },
    category: { type: String, required: true },
    process: { type: String, required: true },
    weigth: { type: String, required: true },
    price: { type: String, required: true }
    brand: { type: String, required: true },
    materialImage: { type: String, required: false }
}