import spaghettiImg from '../assets/images/spaghetti.jpg';
import stirFryImg from '../assets/images/chicken-stir-fry.jpg';
import avocadoToastImg from '../assets/images/avocado-toast.jpg';
import cookiesImg from '../assets/images/cookies.jpg';
import saladImg from '../assets/images/salad.jpg';
import tacosImg from '../assets/images/tacos.jpg';
import risottoImg from '../assets/images/risotto.jpg';
import smoothieImg from '../assets/images/banana-smoothie.jpg';

const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      cookTime: 25,
      image: spaghettiImg,
      ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese", "black pepper"],
      tags: ["pasta", "italian", "dinner"],
      instructions: [
        "Boil spaghetti in salted water according to package directions.",
        "While pasta cooks, fry bacon until crispy in a large pan.",
        "In a bowl, whisk eggs, grated parmesan, and black pepper.",
        "Drain pasta, reserving 1/2 cup pasta water.",
        "Working quickly, add hot pasta to bacon, then remove from heat.",
        "Pour egg mixture over pasta and toss quickly to coat, adding pasta water as needed.",
        "Serve immediately with extra cheese and black pepper."
      ]
    },
    {
      id: 2,
      title: "Chicken Stir Fry",
      cookTime: 20,
      image: stirFryImg,
      ingredients: ["chicken breast", "bell peppers", "broccoli", "soy sauce", "ginger"],
      tags: ["asian", "quick", "dinner"],
      instructions: [
        "Slice chicken into thin strips.",
        "Chop vegetables into bite-sized pieces.",
        "Heat oil in a wok or large frying pan.",
        "Cook chicken until no longer pink, about 5-6 minutes.",
        "Add vegetables and stir fry for 3-4 minutes until crisp-tender.",
        "Add soy sauce, ginger, and other seasonings.",
        "Stir until everything is well coated and heated through."
      ]
    },
    {
      id: 3,
      title: "Avocado Toast",
      cookTime: 10,
      image: avocadoToastImg,
      ingredients: ["bread", "avocado", "salt", "pepper", "lemon juice"],
      tags: ["breakfast", "vegetarian", "quick"],
      instructions: [
        "Toast bread until golden and crisp.",
        "Cut avocado in half, remove pit, and scoop out flesh.",
        "Mash avocado with a fork and add lemon juice, salt, and pepper.",
        "Spread mashed avocado on toast.",
        "Optional: top with red pepper flakes, everything bagel seasoning, or a poached egg."
      ]
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      cookTime: 30,
      image: cookiesImg,
      ingredients: ["flour", "butter", "sugar", "chocolate chips", "eggs"],
      tags: ["dessert", "baking", "sweet"],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Cream together butter and sugars until light and fluffy.",
        "Beat in eggs and vanilla.",
        "Mix in flour, baking soda, and salt.",
        "Stir in chocolate chips.",
        "Drop tablespoon-sized dough balls onto ungreased baking sheets.",
        "Bake for 9-11 minutes until golden brown.",
        "Cool on wire racks."
      ]
    },
    {
      id: 5,
      title: "Greek Salad",
      cookTime: 15,
      image: saladImg,
      ingredients: ["cucumber", "tomato", "red onion", "feta cheese", "olives", "olive oil"],
      tags: ["salad", "healthy", "vegetarian"],
      instructions: [
        "Chop cucumber, tomatoes, and red onion into bite-sized pieces.",
        "Combine vegetables in a large bowl.",
        "Add kalamata olives.",
        "Crumble feta cheese over the top.",
        "Drizzle with olive oil and red wine vinegar.",
        "Season with dried oregano, salt, and pepper.",
        "Toss gently to combine."
      ]
    },
    {
      id: 6,
      title: "Beef Tacos",
      cookTime: 25,
      image: tacosImg,
      ingredients: ["ground beef", "taco shells", "lettuce", "tomato", "cheese", "salsa"],
      tags: ["mexican", "dinner", "spicy"],
      instructions: [
        "Brown ground beef in a pan, breaking it up as it cooks.",
        "Add taco seasoning and water, simmer for 5 minutes.",
        "Warm taco shells according to package directions.",
        "Chop lettuce and dice tomatoes.",
        "Assemble tacos with meat on the bottom, followed by cheese, lettuce, tomatoes, and salsa.",
        "Serve immediately."
      ]
    },
    {
      id: 7,
      title: "Mushroom Risotto",
      cookTime: 40,
      image: risottoImg,
      ingredients: ["arborio rice", "mushrooms", "onion", "white wine", "parmesan cheese"],
      tags: ["italian", "dinner", "vegetarian"],
      instructions: [
        "Sauté chopped onions in butter until translucent.",
        "Add sliced mushrooms and cook until they release their moisture.",
        "Add arborio rice and stir to coat with butter.",
        "Pour in white wine and cook until absorbed.",
        "Gradually add hot broth, one ladle at a time, stirring frequently.",
        "Continue adding broth until rice is creamy and al dente, about 20-25 minutes.",
        "Stir in grated parmesan cheese and season with salt and pepper.",
        "Let rest for a couple of minutes before serving."
      ]
    },
    {
      id: 8,
      title: "Banana Smoothie",
      cookTime: 5,
      image: smoothieImg,
      ingredients: ["banana", "milk", "yogurt", "honey", "ice"],
      tags: ["breakfast", "drink", "quick"],
      instructions: [
        "Peel and slice banana.",
        "Add banana, milk, yogurt, honey, and ice to a blender.",
        "Blend until smooth and creamy.",
        "Pour into a glass and serve immediately.",
        "Optional: top with a sprinkle of cinnamon or a drizzle of honey."
      ]
    }
  ];
  
  export default recipes;