const mongoose = require("mongoose");

const MaterialSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    process: { type: String, required: true },
    weigth: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    materialImage: { type: String, required: false }, 
})

const MaterialModel = mongoose.model("Materials", MaterialSchema);

export default abstract class Material   {
     static async Create(body: object): Promise<object> {
        try {
            const materialCreate = await MaterialModel.create(body)
            return materialCreate;

        } catch (e: any) {
            throw new Error(e)
        }
    };

    static async GetMaterialsOf(category: string): Promise<object> {
        try {
            const allMaterials = await MaterialModel.find({ category: category })
            return allMaterials;

        } catch (e: any) {
            throw new Error(e)
        }
    };

    static async Delete(id: string): Promise<void> {
        try {
            await MaterialModel.findByIdAndDelete({ _id: id })

        } catch (e: any) {
            throw new Error(e)
        }
    };

    static async Update(id: string, body: object): Promise<void> {
        try {
            await MaterialModel.findByIdAndUpdate(id, body)

        } catch (e: any) {
            throw new Error(e)
        }
    };


}