import MealList from "../components/MealList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return <MealList meals={props.mealList} />;
};

export async function getStaticProps() {
  const DATABASE_NAME = "FoodApp";

  const client = await MongoClient.connect(
    `mongodb+srv://Dina:27031986Dina@foodapp.foh1l.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        dish: meal.dishes,
        chef: meal.chef,
      })),
    },
  };
}
export default HomePage;
