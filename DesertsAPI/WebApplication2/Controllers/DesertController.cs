using DesertStore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DesertStore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DesertController : ControllerBase
   
    {
        static readonly IDesertRepository repository = new DesertRepository();

        [HttpGet("api/deserts")]
        public IEnumerable<Desert> GetAllDeserts()
        {
            return repository.GetAll();
        }

        [HttpGet("api/deserts/{id:int}")]
        public Desert GetDesert(int id)
        {
            Desert item = repository.Get(id);
            return item;
        }
        [HttpPost("api/deserts/add")]
        public Desert PostDesert(Desert item)
        {
            item = repository.Add(item);
            return item;
        }
    }

   
}
