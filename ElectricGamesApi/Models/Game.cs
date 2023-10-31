using System.ComponentModel.DataAnnotations;
using ElectricGamesApi.Interfaces;

namespace ElectricGamesApi.Models;

public class Game : IGame
{
    [Key]
    public int Id {get; set;}
    public string Title {get; set;} = "NaN";
    public string Developer {get; set;} ="NaN";
    public string Platform {get; set;} = "NaN";
    public int ReleaseYear {get; set;}
    public string Image {get; set;} = "NaN";
}