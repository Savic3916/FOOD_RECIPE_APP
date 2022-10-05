export default class CategoryMeal{
    constructor(categoryMealID, categoryID, name, illustrativePhoto, timeToCook, ingredients, recipe){
        this.categoryMealID = categoryMealID;
        this.categoryID = categoryID;
        this.name = name;
        this.illustrativePhoto = illustrativePhoto;
        this.timeToCook = timeToCook;
        this.ingredients = ingredients;
        this.recipe = recipe;
    }
}