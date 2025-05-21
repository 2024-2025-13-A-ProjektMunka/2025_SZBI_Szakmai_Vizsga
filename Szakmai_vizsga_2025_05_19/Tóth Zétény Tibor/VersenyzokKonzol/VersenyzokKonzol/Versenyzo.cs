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
        public DateTime Szuldatum { get; set; }
        public string Nev { get; set; }
        public string Nemzetiseg { get; set; }
        public Versenyzo(int ev, int honap, int nap, string nev, string nem)
        {
            this.Szuldatum = new DateTime(ev, honap, nap);
            this.Nev = nev;
            this.Nemzetiseg = nem;
        }

        public static List<Versenyzo> VersenyLista = new List<Versenyzo>();

        public static void Beolvas()
        {
            using (StreamReader sr = new StreamReader("pilotak.csv", Encoding.UTF8))
            {
                string elsoSor = sr.ReadLine();

                while (!sr.EndOfStream)
                {
                    string sor = sr.ReadLine();
                    string[] tomb = sor.Split(';');
                    string[] idoTomb = tomb[0].Split('-');

                      Versenyzo vers = new Versenyzo(
                        Int32.Parse(idoTomb[0]),
                        Int32.Parse(idoTomb[1]),
                        Int32.Parse(idoTomb[2]),
                        tomb[1],
                        tomb[2]

                    );

                    VersenyLista.Add(vers);
                }
            }
        }

        public static void HarmadikFeladat()
        {
            Console.WriteLine($"4. Feladat: Versenyzők száma: {Versenyzo.VersenyLista.Count}");
        }

        public static void NegyedikFeladat()
        {
            int legfiatalabbPilota = 0;
            int lrIndex = 0;

            for (int i = 0; i < VersenyLista.Count; i++)
            {
                if (VersenyLista[i].Szuldatum.Year > legfiatalabbPilota)
                {
                    legfiatalabbPilota = VersenyLista[i].Szuldatum.Year;
                    lrIndex = i;
                }
            }

            DateTime datum = VersenyLista[lrIndex].Szuldatum;
            string nev = VersenyLista[lrIndex].Nev;

            Console.WriteLine($"5. Feladat: Legfiatalabb pilóta: {legfiatalabbPilota}, születési idő: {datum.Year}-{datum.Month}-{datum.Day}, Pilóta: {nev}");
        }
        public static void OtodikFeladat()
        {
            Console.WriteLine("6. Feladat: 1990 után született spanyol pilóták:");
            foreach (var v in VersenyLista)
            {
                if (v.Szuldatum.Year > 1990 && v.Nemzetiseg.ToLower() == "spanyol")
                {
                    Console.WriteLine($"{v.Nev}, {v.Szuldatum.Year}-{v.Szuldatum.Month}-{v.Szuldatum.Day}");
                }
            }
        }
        public static void Statisztika()
        {
            var stat = VersenyLista
                .GroupBy(v => v.Nemzetiseg)
                .Select(g => new { Nemzet = g.Key, Db = g.Count() })
                .OrderByDescending(x => x.Db)
                .ToList();

            using (var sw = new StreamWriter("Statisztika.txt", false, Encoding.UTF8))
            {
                foreach (var item in stat)
                {
                    sw.WriteLine($"{item.Nemzet};{item.Db}");
                }
            }

            Console.WriteLine("Nemzetek pilótaszám szerint (top 10):");
            foreach (var item in stat.Take(10))
            {
                Console.WriteLine($"{item.Nemzet}: {item.Db}");
            }
        }
    }
}
