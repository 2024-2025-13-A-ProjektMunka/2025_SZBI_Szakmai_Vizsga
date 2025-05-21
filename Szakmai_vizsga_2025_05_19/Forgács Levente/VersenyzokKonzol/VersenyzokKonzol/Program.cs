using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace VersenyzokKonzol
{
    public class Verseny
    {
        public DateTime Datum { get; set; }
        public string Nemzet { get; set; }
        public string Nev { get; set; }
   

        public Verseny(int ev, int honap, int nap, string neve, string nemzetiseg, )
        {
            this.Datum = new DateTime(ev, honap, nap);
            this.Nemzet = nemzetiseg;
            this.Nev = neve;

        }

        public static List<Verseny> VersenyLista = new List<Verseny>();

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

                    Nev nevek = new Nev
                    (
                        Int32.Parse(idoTomb[0]),
                        Int32.Parse(idoTomb[1]),
                        Int32.Parse(idoTomb[2]),
                        tomb[1],
                        Int32.Parse(tomb[2]),
                        Int32.Parse(tomb[3]),
                        Int32.Parse(tomb[4]),
                        tomb[5],
                        tomb[6]
                    );

                    NevLista.Add(nevek);
                }
            }

        }

        public static void NegyedikFeladat()
        {
            Console.WriteLine($"4. Feladat: Versenyek száma: {NevLista.Count} '848");
        }

        public static void OtodikFeladat()
        {
            
        }

        public static void HatodikFeladat()
        {
           
        }

        public static void HetedikFeladat()
        {
        
        }
    }
}