namespace DesertStore.Models
{
    public class DesertRepository : IDesertRepository
    {
        private List<Desert> deserts = new List<Desert>();
        private int _nextId = 1;

        public DesertRepository()
        {
            Add(new Desert { Name = "Frozen Yoghurt", Calories = 159, Fat = 6, Carbs = 24, Protein = 4 });
            Add(new Desert { Name = "Ice Cream Sandwich", Calories = 237, Fat = 9, Carbs = 37, Protein = 7 });
            Add(new Desert { Name = "Frozen Yoghurt", Calories = 248, Fat = 3, Carbs = 16, Protein = 5 });
            Add(new Desert { Name = "Apple Pie", Calories = 121, Fat = 2, Carbs = 23, Protein = 7 });
            Add(new Desert { Name = "Ice Cake", Calories = 199, Fat = 13, Carbs = 25, Protein = 65 });
        }

        public IEnumerable<Desert> GetAll()
        {
            return deserts;
        }

        public Desert Get(int id)
        {
            return deserts.Find(d => d.Id == id);
        }

        public Desert Add(Desert item)
        {
            if(item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            deserts.Add(item);
            return item;
        }
    }
}
