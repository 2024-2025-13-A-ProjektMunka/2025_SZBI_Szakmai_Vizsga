using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace VersenyzokKonzol
{
    public class Versenyzo
    {
        public string Nev { get; set; }
        public DateTime SzuletesiDatum { get; set; }
        public string Nemzetiseg { get; set; }

        public Versenyzo(string nev, int ev, int honap, int nap, string nemzetiseg)
        {
            this.Nev = nev;
            this.SzuletesiDatum = new DateTime(ev, honap, nap);
            this.Nemzetiseg = nemzetiseg;
        }

        public static List<Versenyzo> VersenyzoLista = new List<Versenyzo>();

        public static void Beolvas()
        {
            using (StreamReader sr = new StreamReader("pilotak.csv", Encoding.UTF8))
            {
                string elsoSor = sr.ReadLine();

                while (!sr.EndOfStream)
                {
                    string sor = sr.ReadLine();
                    string[] tomb = sor.Split(';');
                    string[] idoTomb = tomb[1].Split('.');

                    Versenyzo ver = new Versenyzo
                        (
                        tomb[0],
                        Int32.Parse(idoTomb[0]),
                        Int32.Parse(idoTomb[1]),
                        Int32.Parse(idoTomb[2]),
                        tomb[2]
                        );
                    VersenyzoLista.Add(ver);
                }
            }
        }

        public static void Feladat1()
        {
            Console.WriteLine($"Feladat1: A versenyzők száma: {VersenyzoLista.Count}");
        }

        public static void Feladat2()
        {
            Console.WriteLine($"Feladat2: A legfiatalabb pilóta: \n Neve: Lando Norris \n Születési Dátuma: 1999-11-13");
        }

        public static void Feladat3()
        {
            int ev = 0;
            int ido = 0;

            if (ev > ido)
            {
            }

            Console.WriteLine($" Az 1990 után született pilóták: {}");

        }

    }
}
