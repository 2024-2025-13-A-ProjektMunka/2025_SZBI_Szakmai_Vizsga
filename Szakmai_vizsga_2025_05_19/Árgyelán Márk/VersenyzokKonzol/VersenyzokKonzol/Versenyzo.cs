using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

public class Pilota
{
    public string Nev { get; set; }
    public DateTime SzuletesiDatum { get; set; }
    public string Nemzetiseg { get; set; }

    public Pilota(string sor)
    {
        var mezok = sor.Split(';');
        Nev = mezok[0];
        SzuletesiDatum = DateTime.Parse(mezok[1]);
        Nemzetiseg = mezok[2];
    }
}

public class Pilotak
{
    private static List<Pilota> pilotak = new List<Pilota>();

    public static void Beolvas()
    {
        foreach (var sor in File.ReadAllLines("pilotak.csv").Skip(1))
        {
            pilotak.Add(new Pilota(sor));
        }
    }

    public static void VersenyzokSzama()
    {
        Console.WriteLine($"3. feladat: Versenyzők száma: {pilotak.Count}");
    }

    public static void Legfiatalabb()
    {
        var legfiatalabb = pilotak.OrderByDescending(p => p.SzuletesiDatum).First();
        Console.WriteLine($"4. feladat: Legfiatalabb pilóta: {legfiatalabb.Nev} ({legfiatalabb.SzuletesiDatum:yyyy.MM.dd})");
    }

    public static void Spanyolok1990Utan()
    {
        Console.WriteLine("5. feladat: 1990 után született spanyol pilóták:");
        foreach (var p in pilotak.Where(p => p.Nemzetiseg == "spanyol" && p.SzuletesiDatum.Year > 1990))
        {
            Console.WriteLine($"\t{p.Nev} ({p.SzuletesiDatum:yyyy.MM.dd})");
        }
    }

    public static void Statisztika()
    {
        var stat = pilotak
            .GroupBy(p => p.Nemzetiseg)
            .Select(g => new { Nemzet = g.Key, Db = g.Count() })
            .OrderByDescending(x => x.Db)
            .ToList();

        using (var sw = new StreamWriter("Statisztika.txt"))
        {
            foreach (var s in stat)
                sw.WriteLine($"{s.Nemzet}: {s.Db}");
        }

        Console.WriteLine("6. feladat: Top 10 nemzet:");
        foreach (var s in stat.Take(10))
            Console.WriteLine($"\t{s.Nemzet}: {s.Db}");
    }
}