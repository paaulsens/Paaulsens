using Microsoft.AspNetCore.Mvc;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class UploadImageController : ControllerBase // lagre bilder
{
    private readonly IWebHostEnvironment hosting;

    public UploadImageController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }

    [HttpPost]
    
    public IActionResult SaveImage(IFormFile file) // tar imot JS objekt og gjør om til Form object
    {
        string webRootPath = hosting.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}"); // lagres til wwwroot/images/filnavn

        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
       
        {
            file.CopyTo(fileStream); // lag fil i anngitt fil-strøm
        }

        return Ok();
    }
}