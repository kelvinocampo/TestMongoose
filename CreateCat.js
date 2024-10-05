import catModel from "./Models/CatModel.js";

async function createCat() {
    const cat = new catModel({
        name: 'kitty',
        description: 'Sweet and ',
        age: 2
    });

    try {
        const savedCat = await cat.save();
        console.log('Cat saved:', savedCat);
    } catch (err) {
        console.error('Error saving cat:', err);
    }
}

export default createCat;
