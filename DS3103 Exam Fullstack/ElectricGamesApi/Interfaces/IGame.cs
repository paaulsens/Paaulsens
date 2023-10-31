namespace ElectricGamesApi.Interfaces;

public interface IGame
{
    public int Id {get; set;}
    public string Title {get; set;}
    public string Developer {get; set;}
    public string Platform {get; set;}
    public int ReleaseYear {get; set;}
    public string Image {get; set;}
}