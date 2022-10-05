import Category from "../model/Category";
import CategoryMeal from "../model/CategoryMeals";
import Ingridient from "../model/MyIngridients";
import Article from '../model/Article';

export const CATEGORIES = [
    new Category('c1', 'Breakfast', 'https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.webp'),
    new Category('c2', 'Burger', 'https://www.safefood.net/getmedia/d81f679f-a5bc-4a16-a592-248d3b1dc803/burger_1.jpg?w=1280&h=720&ext=.jpg&width=1360&resizemode=force'),
    new Category('c3', 'Chinese', 'https://zhenweinyc.com/wp-content/uploads/2019/08/5-Signature-Dishes-of-Authentic-Chinese-Food.jpg'),
    new Category('c4', 'Cuban', 'https://www.thespruceeats.com/thmb/hWPyDE4ScWautQV-HgPeHbKL9Ic=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cuban-beef-stew-recipe-2138051-hero-01-6fb0efd89f174e0d9080950d01b8aaa0.jpg'),
    new Category('c5', 'Italian', 'https://i1.wp.com/shewearsmanyhats.com/wp-content/uploads/2014/10/lasagna-2.jpg'),
    new Category('c6', 'Sea Food', 'https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'),
    new Category('c7', 'Steaks', 'https://media.gettyimages.com/photos/charcoal-grilled-ribeye-steak-medium-rare-plated-with-a-side-of-picture-id1303042962?k=20&m=1303042962&s=612x612&w=0&h=MGR2dQzkjjVaMDbi2kR64A42GsYs7LikXJV5JgyntmA='),
    new Category('c8', 'Pizza', 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1654265475~exp=1654266075~hmac=9555fe2954559f896a6e74afca4a6806c6d46f87451b2b82abcf02ee0fc8716f'),
    new Category('c9', 'Vegetarian', 'https://www.eatright.org/-/media/eatrightimages/food/nutrition/vegetarianandspecialdiets/vegetarianism-basic-facts-878734076.jpg?h=450&w=600&la=en&hash=DCCFCB049B7B782A78D7EC28A73CE8C8C630CBF4'),
    new Category('c10', 'Pancakes', 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg'),
];

export const INGRIDIENTS =[
   new Ingridient('i1', 'Bacon', require('../assets/images/bacon.png'), '1/4 pnds'),
   new Ingridient('i2', 'Eggs', require('../assets/images/eggs.png'), '5 pcs'),
   new Ingridient('i3', 'Onion', require('../assets/images/onion.png'),'2 pcs'),
   new Ingridient('i4', 'Parmesan Cheese', require('../assets/images/parmesan.png'), '300g'),
   new Ingridient('i5', 'Pepper', require('../assets/images/pepper.png'), '3 pcs'),
   new Ingridient('i6', 'Vegetable Oil', require('../assets/images/oil.png'), '1/2 ltrs'),
   new Ingridient('i7', 'Chicken', require('../assets/images/chicken.png'), '1/2 kilo'),
   new Ingridient('i8', 'Rice', require('../assets/images/rice.png'), '1/2kg'),
   new Ingridient('i9', 'Tomato Paste', require('../assets/images/paste.png'), '7 Tbsp'),
   new Ingridient('i10', 'Tomato', require('../assets/images/tomato.png'), '3 pcs'),
   new Ingridient('i11', 'Butter', require('../assets/images/butter.png'), '10g'),
   new Ingridient('i12', 'Salt', require('../assets/images/salt.png'), '1 Tbsp'),
   new Ingridient('i13', 'Milk', require('../assets/images/milk.png'), '250ml'),
   new Ingridient('i14', 'Sugar', require('../assets/images/sugar.png'), '2 Tbsp'),
   new Ingridient('i15', 'Tea', require('../assets/images/tea.png'), '1 Tbsp'),
   new Ingridient('i16', 'Flour', require('../assets/images/flour.png'), '1/2kg'),
   new Ingridient('i17', 'Pork', require('../assets/images/pork.png'), '1/4 kilo'),
   new Ingridient('i18', 'Shrimp', require('../assets/images/shrimp.png'), '1/8 kilo'),
   new Ingridient('i19', 'Soy Sauce', require('../assets/images/soySauce.png'), '5 Tbsp'),
   new Ingridient('i20', 'Ground Meat', require('../assets/images/groundMeat.png'), '1/2 kilo'),
   new Ingridient('i21', 'Carrot', require('../assets/images/carrot.png'), '2 pcs'),
   new Ingridient('i22', 'Noodles', require('../assets/images/noodles.png'), '2 pcks'),
   new Ingridient('i23', 'Buns', require('../assets/images/buns.png'), '2 pcs'),
   new Ingridient('i24', 'Black Beans', require('../assets/images/blackBeans.png'), '16 oz'),
   new Ingridient('i25', 'Bread', require('../assets/images/bread.png'), '2 Loafs'),
   new Ingridient('i26', 'Lime', require('../assets/images/lime.png'), '1 pcs'),
   new Ingridient('i27', 'Polenta', require('../assets/images/polenta.png'), '1/4 cups'),
   new Ingridient('i28', 'Sausage', require('../assets/images/sausage.png'), '1 pnd'),
   new Ingridient('i29', 'Lasagna Noodles', require('../assets/images/lasagnaNoodles.png'), '12 pcs'),
   new Ingridient('i30', 'Corn', require('../assets/images/corn.png'), '2-3 pcs'),
   new Ingridient('i31', 'Potato', require('../assets/images/potato.png'), '500g'),
   new Ingridient('i32', 'Crab', require('../assets/images/crab.png'), '4-6 pcs'),
   new Ingridient('i33', 'Tilapia', require('../assets/images/tilapia.png'), '4-6 pcs'),
   new Ingridient('i34', 'Corn Tortillas', require('../assets/images/cornTortillas.png'), '24 pcs'),
   new Ingridient('i35', 'Ribeye Steak', require('../assets/images/ribeye.png'), '24 ounce'),
   new Ingridient('i36', 'Tomahawk Steak', require('../assets/images/tomahawk.png'), '24 ounce'),
   new Ingridient('i37', 'Chuck-Eye Steak', require('../assets/images/chuckEye.png'), '24 ounce'),
   new Ingridient('i38', 'Skirt Steak', require('../assets/images/skirtSteak.png'), '24 ounce'),
   new Ingridient('i39', 'Pepperoni', require('../assets/images/pepperoni.png'), '340g'),
   new Ingridient('i40', 'Pasta', require('../assets/images/pasta.png'), '1 pck'),
   new Ingridient('i41', 'Garlic', require('../assets/images/garlic.png'), '2 pcs'),
];

export const CATEGORYMEAL = [
   new CategoryMeal(
    'm1', 
    'c1', 
    'Egg Frits', 
    'https://therecipewell.com/wp-content/uploads/2020/01/Potato-and-Spinach-Frittata-square-1024x1024.jpg',
    '20 min',
    ['i1','i2', 'i3', 'i4', 'i5', 'i6', 'i12'],
    [
      'Preheat the oven to 425 degrees Fahrenheit for the traditional stovetop method, or 350 degrees for the baked methods (casserole or mini/muffins).',
      'Crack the eggs into a medium mixing bowl.',
      'Add your dairy of choice and the salt.', 
      'Whisk just until the egg yolks and whites are blended.', 
      'Whisk in all or half of the cheese (you can reserve the other half for topping the frittata before baking, if desired).', 
      'Set the mixture aside.',
      'In a 12-inch cast iron skillet (or any other large skillet that\'s oven safe), warm the olive oil over medium heat until shimmering.',
      'Add the vegetables, starting with chopped onions or other dense vegetables.', 
      'Cook for a few minutes, stirring occasionally, then add any softer vegetables such as zucchini.', 
      'Cook until those vegetables are tender, then add any garlic or greens, and cook until fragrant or wilted.', 
      'Season with salt, to taste.'
    ]
    ),

   new CategoryMeal(
      'm2', 
      'c1', 
      'Jollof Rice', 
      'https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-recipe_.jpg',
      '1 hr',
      ['i3', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10', 'i12'],
      [
         'Blend your tomatoes, red pepper, scotch bonnet peppers in a food processor or blender for about 45 seconds, make sure that everything is blended well.',
         'In a medium sized pot, heat your oil on medium-high heat. Once the oil is heated add the onions you set aside and fry just until they turn golden brown.',
         'Once the onions, have turned brown in color add the tomato paste and fry for 2-3 minutes.', 
         'Then add the blended tomato mixture (reserve about 1/4 cup and set aside) and fry the mixture with the onions and tomato paste for about 30 minutes.', 
         'Make sure you stir consistently so that the tomato mixture does not burn.',
         'After 30 minutes, turn the heat down to medium, and add the chicken stock. Mix and add your seasonings (salt, curry powder, thyme, all purpose seasoning, and the Knorr stock cube).', 
         'Continue to boil for 10 minutes.',
         'Add the parboiled rice to the pot. Mix it very well with the tomato stew. At this point if you need to add water so that the rice is level with the tomato mixture/chicken stock go ahead and do so.', 
         'Add the bay leaves, cover the pot, and cook on medium to low heat for 15-30 minutes.',
         'When the liquid has almost dried up add the remaining tomato stew, cover, and let it cook for another 5-10 minutes heat until the liquid has completely dried up.', 
         'Turn off the heat, mix thoroughly, and your Jollof Rice is ready to be eaten!'
      ]
   ),
   new CategoryMeal(
      'm3', 
      'c1', 
      'Omelette', 
      'https://img.taste.com.au/jZui3CdC/w643-h428-cfill-q90/taste/2016/11/spicy-bean-omelette-102809-1.jpeg',
      '10 min',
      ['i2', 'i3', 'i4', 'i5', 'i12', 'i11'],
      [
         'Use two or three eggs per omelette, depending on how hungry you are. Beat the eggs lightly with a fork.',
         'Use an 8-inch nonstick skillet for a 2-egg omelette, a 9-inch skillet for 3 eggs.', 
         'Melt the butter over medium-low heat, and keep the temperature low and slow when cooking the eggs so the bottom doesn\'t get too brown or overcooked.',
         'Let the eggs sit for a minute, then use a heatproof silicone spatula to gently lift the cooked eggs from the edges of the pan.', 
         'Tilt the pan to allow the uncooked eggs to flow to the edge of the pan.',
         'Add the filling—but don\'t overstuff the omelette—when the eggs begin to set. Cook for a few more seconds.',
         'Fold the omelette in half. Slide it onto a plate with the help of a silicone spatula.'
      ]
      ),
   new CategoryMeal(
      'm4', 
      'c1', 
      'Tea', 
      'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/292/292160/a-cup-of-black-tea.jpg?w=1575',
      ' 2-3 min',
      ['i13', 'i14', 'i15'],
      [
         'Boil water in a saucepan.',
         'Add sugar and tea powder in it and boil it for 3-4 minutes on medium flame.',
         'Add milk and boil it over medium flame for 6-7 minutes or until bubble starts to rise.', 
         'You will see the change in color of the tea from milky shade to brown shade when it is ready.',
         'Turn off the gas and strain tea in cups.',
      ]
      ),
   new CategoryMeal(
      'm5', 
      'c1', 
      'Waffles', 
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F09%2F20513-classic-waffles-mfs-023.jpg',
      ' 4-5 min',
      ['i2', 'i11', 'i13', 'i14', 'i16'],
      [
         'In a large bowl, mix together flour, salt, baking powder and sugar; set aside.', 
         'Preheat waffle iron to desired temperature.',
         'In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla.', 
         'Pour the milk mixture into the flour mixture; beat until blended.',
         'Ladle the batter into a preheated waffle iron. Cook the waffles until golden and crisp.', 
         'Serve immediately.',
      ]
      ),
   new CategoryMeal(
      'm6', 
      'c2', 
      'Lamb', 
      'https://www.johngregorysmith.com/wp-content/uploads/2020/02/moroccan-lamb-burgers-scaled-768x1024.jpeg',
      '35 min',
      ['i10', 'i11', 'i12', 'i20', 'i23'],
      [
         'Blend the onion, ginger, garlic and fresh coriander in a food processor until finely chopped. Add the spices, apricots, lamb and seasoning.', 
         'Blend until slightly chunky.',
         'Shape the lamb mixture into six burgers.',
         'Cook under a medium-hot grill for 4-5 mins each side until cooked through.',
         'Serve in wholemeal buns with the lettuce, tomato, sliced red onion and mayo.'
      ]
      ),
   new CategoryMeal(
      'm7', 
      'c2', 
      'Stuff Bean', 
      'https://www.veggiesdontbite.com/wp-content/uploads/2014/02/stuffed-veggie-burgers-16.jpg',
      '3 hrs',
      ['i3', 'i4', 'i10', 'i12', 'i21', 'i23', 'i24'],
      [
         'Adjust oven rack to center position and preheat oven to 350°F (175°C).', 
         'Spread black beans in a single layer on a foil-lined rimmed baking sheet. Roast until beans are mostly split open and outer skins are beginning to get crunchy, about 20 minutes.', 
         'Remove from oven and allow to cool slightly.',
         'While beans roast, heat 2 tablespoons oil in a medium skillet over medium-high heat until shimmering. Add onion and poblano and cook, stirring frequently, until softened, about 5 minutes.', 
         'Add garlic and cook, stirring constantly, until fragrant, about 2 minutes. Add chipotle chile and sauce and cook, stirring, until fragrant, about 30 seconds.', 
         'Transfer mixture to a large bowl.',
         'Place cashews in the bowl of a food processor and pulse until chopped into pieces no larger than 1/3-inch, about 12 short pulses. Add to bowl with onions and peppers.',
         'When beans are slightly cooled, transfer to food processor. Add cheese. Pulse until beans are roughly chopped (the largest pieces should be about 1/3 of a full bean in size).', 
         'Transfer to bowl with onion/pepper mixture. Add bread crumbs, egg, and mayonnaise and season with salt and pepper. Fold together gently but thoroughly with hands.', 
         'Patty mixture can be stored in an airtight container in the refrigerator for up to three days at this stage.',
         'Form bean mixture into 6 to 8 patties as wide as your burger buns.', 
         'Heat 1 tablespoon oil in a large nonstick or cast iron skillet over medium heat until shimmering. Add 4 patties and cook, swirling pan occasionally, until well browned and crisp on first side, about 5 minutes.', 
         'Carefully flip and cook until second side is browned, about 5 minutes longer, adding cheese if desired.', 
         'If cooking more than 4 burgers, cook in batches, keeping cooked burgers on a rack set in a rimmed baking sheet in a 200°F oven while second batch cooks.',
         'Spread top and bottom buns with chipotle mayonnaise or other condiments as desired. Add toppings to top or bottom bun as desired.', 
         'Place patties on bottom buns, close burgers, and serve immediately'
      ]
      ),
   new CategoryMeal(
      'm8', 
      'c2', 
      'Veggie', 
      'http://lightlife.com/wp-content/uploads/2020/05/Southwest-Burger-with-Guacamole-and-Ruby-Slaw_500x340.jpg',
      '55 min',
      ['i3', 'i4', 'i10', 'i12', 'i21', 'i23'],
      [
       ' The rice has to be sticky in order to bind these patties together. As a result, your rice must be freshly cooked, as leftover rice dries out in the fridge.',
       'These veggie burgers aren\'t intended to imitate a beef burger by any means, but they do have a wonderful meaty texture and flavor. ',
       'To add even more flavor and to make them slightly juicy, brush them with vegan Worcestershire sauce when they come off the grill.',
       'You have a few options for prepping this veggie burger recipe ahead of time.',
       'The patties can be made up to a day in advance and stored on baking sheets in the fridge until ready to grill.'
      ]
      ),

   new CategoryMeal(
      'm9', 
      'c3', 
      'Dim Sum', 
      'https://globalgrasshopper.com/wp-content/uploads/2022/02/Chens-Good-Taste-Portland-1536x637.jpg',
      '7-10 min',
      ['i2', 'i3', 'i12', 'i17', 'i18', 'i19', 'i20'],
      [
         'Combine pork, onion, cilantro, red pepper flakes, red curry paste, garam masala, chili powder, onion powder, and garlic powder in a bowl. Mix well, then set aside. Place flour into a separate bowl.',
         'Slowly stir in the water as needed until a soft dough is achieved. There may be some water left over. Roll out walnut-sized balls of dough into thin circles.',
         'Fill each of the wrappers with about 1 tablespoon of the pork mixture.',
         'Moisten the edges of the wrapper, then fold in half, sealing to create a half moon shape. Repeat with the remaining wrappers and filling.',
         'Place the dumplings in a steamer over 1 inch of boiling water, and cover. Steam until the dough becomes glossy, about 10 minutes.',
         'To make sauce: Combine peanut butter, cayenne pepper, sugar, and vegetable oil in a microwave-safe glass or ceramic bowl.',
         'Cook in the microwave on High for 30 seconds and stir. Serve with the dumplings.',
      ]
      ),
   new CategoryMeal(
      'm10', 
      'c3', 
      'Manchurian', 
      'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2021/Mushroom_Manchurian_Recipe_Dry_Indo_Chinese_Indian_Chinese_10_1600.jpg',
      '45 min',
      ['i3', 'i5', 'i9', 'i10', 'i12', 'i16', '19', 'i21'],
      [
         'Take the finely chopped or grated veggies in a bowl.',
         'Then add the dry ingredients - corn starch, all-purpose flour (maida), black pepper and salt.',
         'Mix and gather the whole mixture together. Then kind of mix and knead so that the veggies leave water and you get a dough-like mixture. But do not knead like that a bread or roti dough.',
         'Gluten strands can form that will give a dense chewy texture in the fried veggie balls. So just mix very well and press so that the veggies release their juices.',
         'Then take a small portion of the mixture in your hands.',
         'Press and roll it in your palm and make a round veggie ball. You can spread some oil on your palms while making the vegetable balls.',
         'Make all veggie balls this way and keep aside.',
         'Heat oil for deep frying in a kadai or pan. Add a small piece of a ball to the hot oil.',
         'If the balls does not stick or settle down at the bottom of the pan, but comes up steadily the oil is ready for frying these veg manchurian balls. ',
         'If the balls break, then some more binding agent is required. So you can add 2 to 3 teaspoons of some more all purpose flour (maida).',
         'Gently place the balls in the hot oil. The oil has to be medium hot.',
         'Too much heat and the manchurian balls will be browned from top and uncooked from inside. Less hot oil will make the balls absorb too much of oil.',
         'When cooked from one side, turn the balls with a slotted spoon.',
         'Fry the balls till crisp and golden.',
         'Remove them with a slotted or perforated spoon and drain as much as oil as possible.',
         'Place the fried veg manchurian balls on kitchen paper towels. For a low fat version, you can cook the veggie balls in an appe-appam pan or æbleskiver pan.',
      ]
      ),
   new CategoryMeal(
      'm11', 
      'c3', 
      'Noodles', 
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80',
      '4-5 min',
      ['i3', 'i5', 'i9', 'i22'],
      [
         'Cook the noodles a little less than stated on the package instructions (until just underdone), then drain, rinse with cold water and set aside.',
         'Heat the oil in the wok over a high heat. Once hot, add the garlic, ginger, and green on onions. Stir-fry for 30 secs.',
         'Add the stir-fry vegetables. Stir-fry for 2-3 minutes.',
         'Add the sherry and allow to almost evaporate before adding any meat you are using and cooked noodles. Toss so that all of the ingredients are combined.',
         'Turn the heat down to medium and add both of the soy sauces, oyster sauce, and pepper.  Stir-fry for a further 1-2 then toss to combine and serve.'
      ]
      ),
   new CategoryMeal(
      'm12', 
      'c3', 
      'Spring Roll', 
      'https://thecookingspoonorgblog.files.wordpress.com/2019/08/chinese-spring-rolls12.jpg?w=624',
      '1 hr 10 min',
      ['i6', 'i14', 'i16', 'i17', 'i19', 'i21'],
      [
         'Mix the pork with the marinade ingredients and set aside for about 30 minutes. In the meantime, prepare the rest of the ingredients.',
         'Cut all of the vegetables to approximately the same size. You want everything the same size so each ingredient blends together.',
         'Brown the pork over high heat in 2 tablespoons of oil, and add the garlic, mushrooms and carrots.',
         'Stir fry for 30 seconds, and add the bamboo shoots, napa cabbage, and Shaoxing wine. Continue stir-frying for a minute. Adjust the heat to simmer the mixture, as the napa cabbage will release a lot of moisture.',
         'Stir in the soy sauce, sesame oil, salt, white pepper, and sugar. At this time, you have the option of adding 1/4 cup of the decanted water from soaking the dried mushrooms.',
         'It strengthens the mushroom flavor, so this is purely according to your personal preference. You may also have to simmer the filling longer to reduce the additional liquid.',
         'Continue simmering the filling for another 3 minutes--until the napa cabbage is completely wilted--and stir in the corn starch slurry to thicken.',
         'How much slurry you add depends upon the wetness of the filling (this varies if your cabbage had more moisture or if you did add the optional mushroom water), but there should be no standing liquid at all.',
         'Transfer the filling to a large shallow bowl, and let cool. Place into the refrigerator to cool further—at least one hour.',
         'It\'s best to start with a cold filling for easier wrapping. The key to wrapping spring rolls is making sure that they\'re tight, yet not overstuffed.',
         ' It\'s best to use fresh spring roll wrappers if you can, as freezing the wrappers can result in the spring roll skin being a bit too damp.',
      ]
      ),
   new CategoryMeal(
      'm13', 
      'c3', 
      'Tofu&Rice', 
      'https://thepeskyvegan.com/wp-content/uploads/2020/01/crispy-tofu-stir-fry-feature.jpg',
      '30 min',
      ['i6', 'i8','i2', 'i3', 'i21'],
      [
         'Cook rice according to package directions, omitting salt and fat.',
         'While rice cooks, heat 1 tablespoon vegetable oil in a large nonstick skillet over medium-high heat. Add tofu; cook 4 minutes or until lightly browned, stirring occasionally.',
         ' Remove from pan. Add eggs to pan; cook 1 minute or until done, breaking egg into small pieces. Remove from pan. Add 1 tablespoon vegetable oil to pan.',
         'Add 1 cup onions, peas and carrots, garlic, and ginger; sauté 2 minutes.',
         'While vegetable mixture cooks, combine sake, soy sauce, hoisin sauce, and sesame oil.',
         'Add cooked rice to pan; cook 2 minutes, stirring constantly. Add tofu, egg, and soy sauce mixture; cook 30 seconds, stirring constantly. Garnish with sliced green onions, if desired.'
      ]
      ),
   new CategoryMeal(
      'm14', 
      'c4', 
      'Arroz Frito', 
      'https://cflvdg.avoz.es/sc/fJGhtm-K_2QuFrzzY8oo8xRwipA=/768x/2020/09/25/00121601023441851824250/Foto/SYS26P32F1_104213.jpg',
      '30 min',
      ['i2', 'i3', '17', 'i8', 'i12', 'i21'],
      'Heat some oil in a frying pan on medium high heat. Slice plantain banana at an angle. Fry bananas in oil until done. Remove and drain on a paper towel and reserve for later.',
      'Whisk the eggs together and add in the chicken broth and soy sauce. Don\'t be alarmed at the color. The eggs will look a little brown but will cook lighter.',
      'Heat 1 tablespoon of the oil on medium heat in a wok. When the oil is hot add the eggs and scramble until done. Remove from wok and reserve for later.',
      'Cut up leftover masitas (fried pork chunks) to make 2 cups. If you don\'t have any leftover masitas ham or shrimp can be substituted.',
      'Brown masitas in pan until golden all over. I like to use a cast iron skillet to get some good color on the masitas but you can use the wok as well. Remove from pan and reserve for later.',
      'Heat 1 more tablespoon of oil in the wok on medium high heat. Add the onions and bell peppers and cook until tender.',
      'Stir in the peas and carrots. Add the garlic being careful to not burn the garlic.',
      'Add in the cooked rice. The rice should be leftover cold rice. Stir to combine. Add the soy sauce a little at a time. Combine thoroughly with each addition. Taste frequently and adjust to your liking. It\'s okay if you don\'t use all of the soy sauce.',
      'Add in the reserved masitas and scrambled eggs. Add in the green onions. Mix thoroughly.',
      'Last stir in bean sprouts and turn off the heat. Serve with plantains.'
      ),
   new CategoryMeal(
      'm15', 
      'c4', 
      'ConLechón', 
      'https://popmenucloud.com/cdn-cgi/image/width%3D1440%2Cheight%3D1440%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/lvutyghz/3423012e-77b9-47d7-b0e6-a803bd63fc74.jpg',
      '25 min',
      ['i3', 'i11', 'i17', 'i25'],
      [
         'If you\'re using leftover pork: Heat it in a skillet over medium heat until warmed through, stirring frequently. Add a teaspoon of mojo sauce while reheating, if desired.',
         'Cut the Cuban bread into a 6 - 8 inch piece and slice it open.',
         'Lay the bread open and arrange the pork so it covers the bottom half of the bread.',
         'Arrange a thin layer of onions on the pork.',
         'Add mojo sauce, if using. (Unless used to reheat the pork)',
         'Top with sandwich with the bread.',
         'Preheat the sandwich press to medium.',
         'Brush the top of the sandwich lightly with the softened butter.',
         'Gently place the sandwich on the preheated surface and press the top down. Don\'t press too hard, just place it and let the weight and gravity start flattening the sandwich. ',
         'Let it cook until the bread is nice and toasted, about 7 - 10 minutes. Keep an eye on it and check it after 5 minutes to gauge the remaining time.',
         'Cut the sandwich in half and serve.',
      ]
      ),
   new CategoryMeal(
      'm16', 
      'c4', 
      'Lechon A.', 
      'https://www.cook2eatwell.com/wp-content/uploads/2018/10/Cuban-Roast-Pork-Image-2-720x720.jpg',
      '3 hrs 10 min',
      ['i3', 'i8', 'i6', 'i12', 'i17', 'i24', 'i26'],
      [
         'Pat dry the pork roast and prepare a plastic container or freezer bag big enough to hold it plus some liquid.',
         'Squeeze the juice from the orange, lime and lemon. Crush or finely chop the garlic and thinly slice the onion. Mix the juices with rest of ingredients (dry or fresh oregano, cumin, salt, garlic, onion and pepper) in the container/bag.',
         'Add the pork into the marinade and turn or seal the bag and shake a little to cover all over. Leave the pork to marinade overnight in the fridge, ideally turning at least once',
         'When ready to cook, bring the pork out of the fridge ahead of time - around 30-60min - to allow it to come to room temperature. Preheat the oven to 325F/ 160C.',
         'Place the pork in a roasting dish with the skin side up, sitting in a little of the citrus marinade juice. Save the rest of the marinade, including all of the onions.',
         'Baste the pork with the juice in the dish after 1-2hr and continue cooking. Roast for 3 hours, or a little more if needed, covering with foil if the top gets too brown. You should get an internal temp of at least 170F to be able to slice, or 190-200F to be able to shred when it\'s ready.',
         'While the pork is cooking, bring the remaining marinade to a gentle simmer and cook for around 5 minutes to soften the onions. Serve this as a sauce over the pork when serving.',
      ]
      ),
   new CategoryMeal(
      'm17', 
      'c4', 
      'Vaca Frita', 'https://www.mashed.com/img/gallery/instant-pot-vaca-frita/intro-1620134767.webp',
      '1 hr  5 min',
      ['i3', 'i5', 'i6', 'i7', 'i12', 'i26'],
      [
         'Add the steak and beef broth to a large pot. If it\'s a large piece cut it in half so it fits in the pot without folding or overlapping.',
         'Set the pot over high heat. When the broth comes to a boil lower the heat to medium and cook 15 minutes.',
         'Turn the steak, lower the heat to medium-low and cook 30 minutes. Turn the steaks again about halfway through the cooking time.',
         'Remove the pot from the heat; place the flank steak on a cutting board or a pan. When it\'s cool enough to handle, shred the steak to resemble thin strings.',
         'Add the meat back into the broth. Sprinkle with the salt, garlic powder, black pepper and lime juice. Stir well to combine.',
         'Heat the oil in a large, skillet over medium-high heat. When the oil is hot, almost smoking, add the shredded beef and arrange it so it covers the entire skillet in one layer. ',
         'Cook the beef for 3-5 minutes, do not stir. Let the liquid cook out and allow the bottom become browned and crispy.',
      ]
      ),
   new CategoryMeal(
      'm18', 
      'c5', 
      'BakePolenta', 
      'https://mediacdn.grabone.co.nz/asset/fzp3uAryV8/box=615x0',
      '35 min',
      ['i4', 'i6', 'i7', 'i11', 'i27'],
      [
         'Place the water and stock cubes in a large saucepan over medium-high heat. Bring to the boil.',
         'Gradually add the polenta in a thin steady stream, whisking constantly, until combined. Reduce heat to medium and cook, stirring constantly with a wooden spoon, for 2 minutes or until the mixture thickens and the polenta is soft.',
         'Remove from heat and stir in the parmesan and butter. Pour the mixture into the prepared pan and smooth the surface.',
         'Set aside for 30 minutes to cool. Cover with plastic wrap and place in the fridge for 4 hours or overnight to set.',
         'Preheat oven to 200°C. Line the base of a large roasting pan with non-stick baking paper. ',
         ' Cut the polenta into 12 equal portions. Place, in a single layer, in the lined pan. Drizzle over the oil and sprinkle with the extra parmesan. Bake in oven for 15 minutes or until puffed and golden.',
         'Serve'
      ]
      ),
   new CategoryMeal(
      'm19', 
      'c5', 
      'Lasagna', 
      'https://media.gettyimages.com/photos/food-vegetarian-meals-roasted-butternut-squash-lasagne-cheese-tomato-picture-id664658379?k=20&m=664658379&s=612x612&w=0&h=kkDYztgQuEJe41sOxFs1MFRxyKcClf3PmyIVg3a_FZ8=',
      '3 hrs 15 min',
      ['i2', 'i3', 'i4', 'i5', 'i7', 'i9', 'i10', 'i12', 'i14', 'i28', 'i29'],
      [
         'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water.',
         'Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.',
         'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.',
         'Preheat oven to 375 degrees F (190 degrees C).',
         'To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish.',
         'Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. ',
         'Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.',
         'Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.',
      ]
      ),
   new CategoryMeal(
      'm20', 
      'c5', 
      'Ravioli', 
      'https://familystylefood.com/wp-content/uploads/2020/05/fava-ravioli-bowl2.jpg',
      '2 hrs',
      ['i2', 'i4', 'i11', 'i6', 'i16'],
      [
         'Mound the flour and salt together on a work surface and form a well. Beat eggs, water, and olive oil in a bowl. Pour 1/2 of the egg mixture into the well. Begin mixing egg and flour with one hand; use your other hand to keep the flour mound steady. Add the remaining egg mixture and knead to form a dough.',
         'Knead the dough until smooth, 8 to 10 minutes; add more flour if the dough is too sticky. Form dough into a ball and wrap tightly with plastic. Refrigerate for 1 hour.',
         'While the dough is resting, prepare the ravioli filling. Mix ricotta cheese, cream cheese, mozzarella cheese, egg, and parsley until well combined. Set the filling aside.',
         'Heat 2 tablespoons of olive oil in a skillet over medium heat. Add crushed garlic and pesto sauce and cook for one minute. Stir in heavy cream, increase the heat to high, and bring to a boil. Reduce the heat and simmer for 5 minutes. Stir in Parmesan cheese until melted. Remove the pan from the heat and keep warm.',
         'Meanwhile, warm marinara sauce over medium-low heat in a separate saucepan.',
      ]
      ),
   new CategoryMeal(
      'm21', 
      'c5', 
      'Risotto', 
      'https://media.gettyimages.com/photos/italian-fried-risotto-balls-picture-id1198305891?k=20&m=1198305891&s=612x612&w=0&h=y4GEYYQD0eOY_LvTsqKQSQBjfJLusb6O35nVqedY1Lo=',
      '45 min',
      ['i4', 'i5', 'i6', 'i7', 'i8', 'i11', 'i12', ],
      [
         'Combine 1 Tbsp. salt and 10 cups water in a medium stockpot. Bring to a very bare simmer over medium heat.',
         'Meanwhile, heat oil in a 6-qt. Dutch oven over medium. Cook onion and a pinch of salt, stirring frequently, until onion is translucent and starting to soften, 6–8 minutes.',
          
      ]
      ),
   new CategoryMeal(
      'm22', 
      'c6', 
      'Cajun', 
      'https://takestwoeggs.com/wp-content/uploads/2021/07/Vietnamese-Cajun-Seafood-Boil-Takestwoeggs-Final-2.jpg',
      '1 hr 35 min',
      ['i6', 'i11', 'i12', 'i14',  'i18', 'i26', 'i30', 'i31', 'i32'],
      [
         'Place the crabs in a basin and cover it with wet cloth. Place it in the freezer for 10-15 minutes.', 
         'Take them out of the freezer and turn the crab upside down. Peel the triangular cap back and pierce a knife through directly at the tip of the triangle.', 
         'Remove the triangular cap completely and scrub and rinse the shell.',
         'Scrub and rinse the mussels/clams and remove the beard if any.',
         'Cut off the mustache and legs of shrimp if any and rinse.',
         'Fill a large pot with 6 cups of water and bring it to a rolling boil. Add the baby potatoes and cook for 5 minutes.',
         'Add the corn, crabs, mussels/clams, shrimp and 4 lemon wedges,. Add a tablespoon of salt . Cover and cook for another 3 minutes or until all shellfish turn red/orange. Remove the crabs, shrimp, and mussels/clams, and corn from the water. Check if potatoes are cooked through by poking a toothpick through the center and it should go through easily. If not cook them further then remove from water.',
         'Add the cajun seasoning, lemon juice, and sugar and stir well. Cook for 2 minutes. Add the squid rings and cook for a minute then add the rest of the seafood, lemon wedges, corn and potatoes. Season with salt if needed. Cook for a minute more then turn off the heat',
      ]
      ),
   new CategoryMeal(
      'm23', 
      'c6', 
      'Fish Tacos', 
      'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18123658/051130047-01-baja-fish-tacos-recipe-main.jpg',
      '55 min',
      ['i3', 'i5', 'i6', 'i10', 'i11', 'i12', 'i26', 'i34'],
      [
         'In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne.',
         'Add cod, tossing until evenly coated. Let marinate 15 minutes.',
         'Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.',
         'In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper.',
         'Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side. Let rest 5 minutes before flaking with a fork.',
         'Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream.',
      ]
      ),
   new CategoryMeal(
      'm24', 
      'c7', 
      'Ribeye', 
      'https://media.gettyimages.com/photos/rib-eye-steak-with-macaroni-and-cheese-picture-id155014474?k=20&m=155014474&s=612x612&w=0&h=2nAzIHgFWC1--YKXYmu8zCRs5UJ4s_j2YvPiYPn2pf8=',
      '45 min',
      ['i5', 'i6', 'i11', 'i12', 'i35'],
      [
         'Using paper towels, pat both sides of the steak dry; season generously with 1 1/4 teaspoons salt and 1/2 teaspoon pepper.',
         'Heat a medium cast iron skillet over medium high heat until very hot, about 1-2 minutes; add canola oil.',
         'Place the steak in the middle of the skillet and cook, turning every 2-3 minutes, until a dark crust has formed on both sides, about 12-14 minutes.',
         'Reduce heat to medium low. Push steak to one side of the skillet; add butter, garlic, thyme and rosemary to opposite side of the skillet, tilting the skillet towards the butter and cooking until butter is foaming, about 30 seconds to 1 minute.',
         'Working carefully, spoon butter over steak for 1-2 minutes, turning over once, until it reaches an internal temperature of 120 degrees F for medium rare, or until desired doneness. Let rest 15 minutes before slicing.',
         'Serve immediately.',
      ]
      ),
   new CategoryMeal(
      'm25', 
      'c7', 
      'Tomahawk', 
      'https://img.freepik.com/free-photo/top-view-grilled-beef-tomahawk-steak-with-pepper-sauce_219193-8898.jpg?w=360',
      '45',
      ['i5', 'i6', 'i11', 'i12', 'i36'],
      [
         'Heat an outdoor grill to highest heat. Preheat oven to 375 degrees.',
         'Season steaks generously with salt and pepper. Use approximately 1 teaspoon of salt and pepper per pound of steak. Get the top, bottom, and all the sides. Use a generous amount of salt as this is a thick steak.',
         'Sear the steak for 3 to 4 minutes on each side, letting the flames lick up the sides. You\'ll know the steak is ready to flip when it releases easily from the grill.',
         'Transfer the steak to a baking sheet . Bake in the preheated oven until the steak reaches an internal temperature of 130 degrees. This will take about 30 minutes, but use a meat thermometer for 100% accuracy.',
         'Let rest 5-10 minutes. Spoon 1-2 tablespoons of compound butter onto the steak. Slice as serve.         '
      ]
      ),
   new CategoryMeal(
      'm26', 
      'c7', 
      'Chuck-Eye', 
      'https://media.gettyimages.com/photos/cooked-grilled-chuck-eye-roll-steak-on-a-chopping-board-picture-id1396342838?k=20&m=1396342838&s=612x612&w=0&h=GMavwfsneNrHrnbHfp598VM-ctOfuGBqUMd3DHUH6WQ=',
      '25 min',
      ['i5', 'i6', 'i12', 'i37'],
      [
         'Season steaks with a generous amount of salt and pepper. Place on a plate and refrigerate for 1-2 hours, uncovered.',
         'Make butter by combining softened butter with minced parsley, minced cilantro, minced chives, and minced Fresno chili. Season with salt and pepper to taste. Mold together and store covered in the refrigerator until steaks are ready to be cooked.',
         'Preheat the grill to high and brush grates with a little coconut oil. Grill steaks to your liking. Medium rare will take about 5 minutes per side.',
         'Top with a tablespoon of herb butter each and serve.'
      ]
      ),
   new CategoryMeal(
      'm27', 
      'c7', 
      'Skirt', 
      'https://media.gettyimages.com/photos/grilled-steak-with-prepared-potato-and-steamed-vegetables-picture-id1142658537?k=20&m=1142658537&s=612x612&w=0&h=XxAgVtpxW_TPvj18VZaaXUXyYf_Uemv_aAhcRHsNT1U=',
      '36 min',
      ['i5', 'i6', 'i12', 'i38'],
      [
         'If the skirt steak comes in a long strip, cut into 2 or 3 smaller pieces, 5 to 7 inches in length. This will allow them to fit better in the pan, and make them easier to slice later.',
         'Thoroughly pat steaks dry with paper towels on each side. The surface should be very dry to help brown the surface of the meat. Generously season each side of the steaks with salt and pepper.',
         'Heat a large 12-inch cast iron skillet over high heat for 3 minutes. Once hot, add the olive oil.',
         'Use tongs to carefully add the steak to the pan, then press down firmly on the surface a few times for more contact. Sear the first side until browned, about 2 to 4 minutes, depending on the thickness of the meat.',
         'Flip and cook another 2 to 4 minutes. For medium rare doneness, cook steak until it reaches an internal temperature of 130oF. Work in two batches if needed.',
         'Transfer steak to a cutting board, loosely cover with foil, and allow to rest for 10 minutes before slicing.',
         'Hold the carving knife at a 45-degree angle, and then slice the steak across the grain, about 1/4-inch thick slices. Transfer skirt steak to a serving plate.',
      ]
      ),
   new CategoryMeal(
      'm28', 
      'c8', 
      'Detroit', 
      'https://www.thespruceeats.com/thmb/s_9j3GgWlD-wjh8BINQZR-vVujE=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/detroit-style-pizza-4777054-16-a31700e1c1fe453b9fd173793dd71f42.jpg',
      '4 hrs 40 min',
      ['i4', 'i6', 'i10', 'i12', 'i14', 'i16', 'i39'],
      [
         'Press down on dough with your fingertips to remove any large air bubbles. Lay half of pepperoni (if using) evenly over face of dough. Top with cheese, spreading it evenly all the way to the very edges of the pan, then add remaining pepperoni. Spoon sauce over surface in 3 even rows. (You will need only about half the sauce—save the rest for another pizza.)',
         'Transfer to oven and bake until edges are black and bubbly and exposed cheese on top is starting to lightly brown, 12 to 15 minutes. Transfer to a trivet or folded kitchen towel on countertop.',
         'Run a thin metal spatula all the way around the edges of the pan to loosen the pizza. Carefully lift it out and slide it onto a cutting board. Cut pizza and serve.',
      ]
      ),
   new CategoryMeal(
      'm29', 
      'c8', 
      'Sicilian', 
      'https://media.gettyimages.com/photos/sicilian-style-pizza-slab-slice-at-terra-cotta-pasta-co-for-eat-run-picture-id615861452?k=20&m=615861452&s=612x612&w=0&h=ZuwlWYnnnS-JspWPbztJtUrl6QQJvyVsPgfD8SWPFbQ=',
      '2 hrs 50 min',
      ['i4', 'i6', 'i9', 'i10', 'i12', 'i14', 'i16', 'i39'],
      [
         'Thirty minutes before baking, adjust oven rack to lower position and preheat oven to 550°F (290°C)',
         'Shingle slices of mozzarella cheese evenly over surface of pizza. Spoon sauce on top of cheese and spread with the back of a spoon. (You will not need all the sauce; use as much as you like, but be sparing.)',
         'Spread pepperoni slices evenly over surface. Sprinkle with half of Romano cheese. Transfer to oven and bake until pepperoni is crisp and curled and bottom of pizza is golden brown when you peek by lifting the corner with a thin spatula, about 10 minutes. With some ovens, you may need to loosely tent the top of the pizza with aluminum foil and continue baking until the bottom is golden and crisp.',
         'Remove pizza from oven. Sprinkle with remaining half of Romano cheese, use a pizza wheel to cut it into slices, and serve immediately.'
      ]
      ),
   new CategoryMeal(
      'm30', 
      'c8', 
      'St Louis', 
      'https://s3-media0.fl.yelpcdn.com/bphoto/syGaaj90cvC5pKZQjr46_g/o.jpg',
      '50 min',
      ['i4', 'i6', 'i9', 'i10', 'i12', 'i14', 'i16', 'i39'],
      [
         'Place a pizza stone in the oven and preheat to 550 degrees.',
         'In a medium bowl, whisk together, tomato puree, tomato paste, sugar, 1 teaspoon salt, basil, garlic powder and oregano. Set aside.',
         'In another bowl, whisk flour, remaining salt and baking powder. In a liquid measuring cup, whisk water, oil and corn syrup. Mix into flour mixture until combined. Gently knead to bring together. Split the dough in two equal pieces and roll each piece out to make a 12-inch pie',
         'Transfer to a pizza peel covered in cornmeal. Spread half the sauce on each pizza. Cover with cheese and desired toppings. Sprinkle with a little basil, oregano and kosher salt to taste. Bake on pizza stone for 8-10 minutes until crust is crisp and cheese is melted, bubbly and golden brown. Cool for a few minutes before slicing',
      ]
      ),
   new CategoryMeal(
      'm31', 
      'c9', 
      'Lenti Walnut', 
      'https://eadn-wc02-3894996.nxedge.io/wp-content/uploads/2019/09/lentil-walnut-bolognese-NEW-5-1024x731.jpg.webp',
      '1 hr 25 min',
      ['i3', 'i6', 'i21', 'i40', 'i41'],
      [
         'Heat the oil in a large pan over a low heat. Add the onion, celery and carrot and cook gently, stirring often, for 10-15 minutes until soft.',
         'Add the finely chopped mushrooms and garlic, turn up the heat a little and continue to cook until all of the excess liquid has evaporated.',
         'Add the tomato puree and smoked paprika and cook for a minute, then add the red wine and cook until almost all of the liquid has evaporated',
         'Add the sun dried tomatoes, oregano, thyme, rosemary, bay leaves, soy sauce, tinned tomatoes, stock, sugar, lentils and walnuts.',
         'Bring up to a gentle simmer and cook for 40-50 minutes, stirring every now and again, until the lentils are tender. You can add a splash of water or stock if it becomes too thick',
         'Add the nutritional yeast and a good grinding of black pepper, season to taste with salt and serve with pasta.',
      ]
      ),
   new CategoryMeal(
      'm32', 
      'c9', 
      'Potato Salad', 
      'https://media.istockphoto.com/photos/couscous-salad-with-beetroot-and-sweet-potato-picture-id1304151909?k=20&m=1304151909&s=612x612&w=0&h=ha4x0qb-_2F2nu3-h7xlVi49IAcrqr8KzgJT4DYMWeA=',
      '4 hrs 55 min',
      ['i2', 'i3', 'i5', 'i11', 'i12', 'i31'],
      [
         'Place potatoes in a large pot, cover potatoes with 1 1/2 inch of water, add generous pinch of salt. Bring to a boil, reduce heat to a gentle boil and cook about 15 - 20 minutes, until potatoes are just fork tender.',
         'Drain potatoes and let cool. Once cooled, gently peel the skin away (or leave it on if you prefer). Pinch the potato skin with your thumb and forefinger, skin should come off with ease. Cut the potatoes into 1/2 inch cubes. Alternatively, cube the potatoes first, then boil.',
         'While potatoes are cooking and/or cooling, prepare the green onion, and celery.',
         'In a small bowl, combine the mayo, mustard, ground celery seed, salt and pepper, and mix well. If dressing is too thick, add a tad more water or lemon juice.  Alternatively, if dressing is too thin, add more mayo. If using store bought mayo, I like to add 2 tablespoons of water to thin, as store bought may is very thick',
         'In a large bowl (or pot you cooked the potatoes in) place the potatoes, onion and optional celery. Pour the dressing over top and mix to combine. Season with mineral salt and fresh cracked pepper.',
         'Serve as is, or store in the refrigerator for an hour or so before serving. Garnish with paprika, chives, parsley, dill or even radishes',
      ]
      ),
   new CategoryMeal(
      'm33', 
      'c10', 
      'American', 
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      '40 min',
      ['i1 ', 'i2', 'i6', 'i11', 'i13', 'i14', 'i16'],
      [
         'Mix all the dry ingredients in a bowl',
         'Whisk the wet ingredients in a separate bowl, then add the dry ingredients to the wet ones and mix and stir until just combined (do not overmix). My secret: let the batter sit for a minute or two. It will allow the baking powder to activate and make your pancakes fluffy.',
         'Heat oil or butter in a skillet or griddle and once hot, drop two or three Tablespoons of the batter for each pancake, making sure the pancakes do not spread out. ',
         ' Cook for a minute, until fluffy. Flip, and cook on the other side for another minute. And voilà! Here to some perfect fluffy pancakes in NO TIME!',
      ]
      ),
];

export const ARTICLES = [
   new Article(
      'a1', 
      'WHAT IS A HEALTHY DIET?', 
      [
         'Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it\'s about feeling great, having more energy, improving your health, and boosting your mood.\n\n',         
         'Healthy eating doesn\'t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you\'re not alone. It seems that for every expert who tells you a certain food is good for you, you\'ll find another saying exactly the opposite. The truth is that while some specific foods or nutrients have been shown to have a beneficial effect on mood, it\'s your overall dietary pattern that is most important.\n\n',
         'The cornerstone of a healthy diet should be to replace processed food with real food whenever possible. Eating food that is as close as possible to the way nature made it can make a huge difference to the way you think, look, and feel.',         
         'By using these simple tips, you can cut through the confusion and learn how to create—and stick to—a tasty, varied, and nutritious diet that is as good for your mind as it is for your body.',
      ]
   ),
   new Article(
      'a2',
      'THE FUNDAMENTALS OF HEALTHY EATING',
      [
         'While some extreme diets may suggest otherwise, we all need a balance of protein, fat, carbohydrates, fiber, vitamins, and minerals in our diets to sustain a healthy body. You don’t need to eliminate certain categories of food from your diet, but rather select the healthiest options from each category.\n\n',
         'Protein: gives you the energy to get up and go—and keep going—while also supporting mood and cognitive function. Too much protein can be harmful to people with kidney disease, but the latest research suggests that many of us need more high-quality protein, especially as we age. That doesn’t mean you have to eat more animal products—a variety of plant-based sources of protein each day can ensure your body gets all the essential protein it needs.\n\n',
         'Fat: Not all fat is the same. While bad fats can wreck your diet and increase your risk of certain diseases, good fats protect your brain and heart. In fact, healthy fats—such as omega-3s—are vital to your physical and emotional health. Including more healthy fat in your diet can help improve your mood, boost your well-being, and even trim your waistline\n\n',
         'Fiber: Eating foods high in dietary fiber (grains, fruit, vegetables, nuts, and beans) can help you stay regular and lower your risk for heart disease, stroke, and diabetes. It can also improve your skin and even help you to lose weight.\n\n',
         'Calcium: As well as leading to osteoporosis, not getting enough calcium in your diet can also contribute to anxiety, depression, and sleep difficulties. Whatever your age or gender, it’s vital to include calcium-rich foods in your diet, limit those that deplete calcium, and get enough magnesium and vitamins D and K to help calcium do its job.\n\n',
         'Carbohydrates: are one of your body’s main sources of energy. But most should come from complex, unrefined carbs (vegetables, whole grains, fruit) rather than sugars and refined carbs. Cutting back on white bread, pastries, starches, and sugar can prevent rapid spikes in blood sugar, fluctuations in mood and energy, and a build-up of fat, especially around your waistline.\n\n'
    ],
   ),
   new Article(
      'a3',
      'Fruits: How Food Affects Health',
      [
         'Fruit is a high-quality carbohydrate that is rich in vitamins, minerals, antioxidants, and fiber. The fiber in fruit comes in two forms — soluble and insoluble — and it can be a big help when it comes to weight loss.\n\n',
         'The soluble fiber in fruit stabilizes blood sugar, keeps you feeling full, controls your hunger, and it may also lower cholesterol and blood pressure. Plus, it helps to temper blood sugars by slowing the absorption of carbohydrates into your bloodstream after meals, which can reduce your risk of type 2 diabetes and help keep your mood and energy levels steady. Insoluble fiber adds bulk to your food so you can eat more of it without adding extra calories.\n\n',
         'You can also think of fruits as “juicy foods,” since they’re mostly made up of water. Fresh and frozen fruit and other foods that have a high water content tend to be low in calories, since all that water adds volume and dilutes the calories\n\n',
         'The high fiber and water content in fresh fruit helps fill you up for a minimal calorie cost, making whole fruit a smart addition to any weight-loss plan. The water contained in fruit, like the water you drink, hydrates your cells, flushes toxins from your body, assists with normal organ functioning, and helps you maintain optimal energy levels.\n\n',

      ]
   )
];