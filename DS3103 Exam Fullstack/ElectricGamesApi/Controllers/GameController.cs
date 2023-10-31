using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class GameController : ControllerBase
{

    private readonly GameContext context;

    public GameController(GameContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Game>>> GetAll()
    {
        try
        {
            List<Game> games = await context.Games.ToListAsync();
            return Ok(games);        
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get(int id)
    {
        Game? game = await context.Games.FindAsync(id);

        if( game != null )
        {
            return Ok(game);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpPost]
    public IActionResult Post(Game newGame)
    {
        try
        {
            context.Games.Add(newGame);
            context.SaveChanges();
            return CreatedAtAction("Get", new {id = newGame.Id}, newGame );
        }
        catch
        {
            return StatusCode(500);
        }    
    }

    [HttpPut]
    public IActionResult Put(Game editedGame)
    {
        context.Entry(editedGame).State = EntityState.Modified;
        context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try{
            Game? gameToDelete = await context.Games.FindAsync(id);

            if(gameToDelete != null)
            {
                context.Games.Remove(gameToDelete);
                await context.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet]
    [Route("[action]/{title}")] // http://localhost:5137/Game/GetByTitle/game%20title
    public List<Game> GetByTitle(string title)
    {

        List<Game> games = new List<Game>(context.Games);

        List<Game> results = games.FindAll(game => 
            game.Title.ToString().Contains(title)
        );
        
        return results;
    }

}