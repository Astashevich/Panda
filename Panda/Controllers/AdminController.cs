using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Panda.Interfaces;
using Panda.Models;
using Panda.Models.Enums;

namespace Panda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private IHouseRepository _houseRepository;

        public AdminController(IHouseRepository houseRepository)
        {
            _houseRepository = houseRepository;
        }

        [HttpPost("house/create")]
        public async Task CreateHouse([FromForm] IFormCollection formData)
        {
            var random = new Random();
            var house = new House
            {
                Id = Guid.NewGuid().ToString(),
                Number = random.Next(20),
                Price = random.Next(30),
                Family = Family.Dog,
                SizeHeight = 2,
                SizeLenght = 2,
                SizeWidth = 1.5,
                Status = HouseStatus.Free,
                Picture = "DogHouse.jpg"
            };

            await _houseRepository.CreateAsync(house);
        }
    }
}
