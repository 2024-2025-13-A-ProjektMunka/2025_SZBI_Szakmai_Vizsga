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
        public DateTime Datum { get; set; }
        public string Nemzetiseg { get; set; }

        public Versenyzo(int ev, int honap, int nap, string nev, string nemz)
        {
            this.Nev = nev;
            this.Datum = new DateTime(ev, honap, nap);
            this.Nemzetiseg = nemz;
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
                    string[] idoTomb = tomb[0].Split('.');

                    Versenyzo vers = new Versenyzo
                    (
                        Int32.Parse(idoTomb[0]),
                        Int32.Parse(idoTomb[1]),
                        Int32.Parse(idoTomb[2])
                    ); 

                    VersenyLista.Add(vers);
                }
            }

        }

        public static void NegyedikFeladat()
        {
            Console.WriteLine($"4. Feladat: Versenyek száma: {VersenyLista.Count}");
        }

    }
}
