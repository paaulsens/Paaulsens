using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models; // for context
using ElectricGamesApi.Contexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors( //add cors
    options => {
        options.AddPolicy("AllowAnyOrigin", //name of convention
            builder => builder
                .AllowAnyHeader()   
                .AllowAnyMethod()
                .AllowAnyOrigin()
        );
    }
);

// database?
builder.Services.AddDbContext<GameContext>( options => options.UseSqlite( "Data Source=ElectricGames.db"));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAnyOrigin");

app.UseStaticFiles();

DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);

app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
