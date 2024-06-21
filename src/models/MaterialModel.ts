const mongoose = require("mongoose");

const MaterialSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    process: { type: String, required: true },
    weigth: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    materialImage: { type: String, required: false }

})

const MaterialModel = mongoose.model("Materials", MaterialSchema);

export default class Material {
    static async Create(body: any): Promise<any> {
        try {
            const materialCreate = await MaterialModel.create(body)
            return materialCreate;

        } catch (e: any) {
            throw new Error(e)
        }
    };

    static async GetMaterialsOf(category: string): Promise<any> {
        try {
            const allMaterials = await MaterialModel.find({ category: category })
            return allMaterials;

        } catch (e: any) {
            throw new Error(e)
        }
    };

    static async Delete(id: string) {
        try {
            await MaterialModel.findByIdAndDelete({ _id: id })

        } catch (e: any) {
            throw new Error(e)
        }
    };

    static async Update(id: string, body: any) {
        try {
            await MaterialModel.findByIdAndUpdate(id, body)

        } catch (e: any) {
            throw new Error(e)
        }
    };


}