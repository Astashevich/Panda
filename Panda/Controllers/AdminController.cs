using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Panda.Interfaces;
using Panda.Models;
using Panda.Models.Enums;
using Panda.Utils;
using System.Globalization;

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
        public async Task<object> CreateHouse([FromForm] IFormCollection formData)
        {
            var file = formData.Files.First();
            var path = Path.Combine(Settings.UploadDir, file.FileName);
            try
            {
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }
            catch (Exception ex)
            {
                return new { Status = ex.Message };
            }

            IFormatProvider formatter = new NumberFormatInfo { NumberDecimalSeparator = "." };
            var house = new House
            {
                Id = Guid.NewGuid().ToString(),
                Number = int.Parse(formData["number"]),
                Price = double.Parse(formData["price"], formatter),
                Family = (Family)int.Parse(formData["family"]),
                SizeHeight = double.Parse(formData["height"], formatter),
                SizeLength = double.Parse(formData["length"], formatter),
                SizeWidth = double.Parse(formData["width"], formatter),
                Status = (HouseStatus)int.Parse(formData["status"]),
                Picture = file.FileName
            };

            await _houseRepository.CreateAsync(house);

            return "Ok";
        }
    }
}
