using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Panda.Interfaces;
using Panda.Models;
using Panda.Models.Enums;

namespace Panda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HouseController : ControllerBase
    {
        private IHouseRepository _houseRepository;

        public HouseController(IHouseRepository houseRepository)
        {
            _houseRepository = houseRepository;
        }

        [HttpGet]
        public async Task<List<House>> Get()
        {
            return await _houseRepository.GetAllAsync();
        }

        [HttpPost]
        public async Task Post()
        {
            var random = new Random();
            var house = new House
            {
                Id = Guid.NewGuid().ToString(),
                Number = random.Next(20),
                Price = random.Next(30),
                Family = Family.Cat,
                SizeHeight = 1,
                SizeLenght = 1,
                SizeWidth = 1.5,
                Status = HouseStatus.Free,
                Picture = "CatBestHouse.jpg"
            };

            await _houseRepository.CreateAsync(house);
        }
    }
}
