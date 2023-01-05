namespace DesertStore.Models
{
    public interface IDesertRepository

    {
        IEnumerable<Desert> GetAll();
        Desert Get(int id);
        Desert Add(Desert item);
    }
}
