using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace VersenyzokKonzol
{
    public class Versenyzo
    {
        public string Nev { get; set; }
        public DateTime SzulDatum { get; set; }
        public string Nemzetiseg { get; set; }


        public Versenyzo(string nev, int ev, int honap, int nap, string nemzet) 
        {
            this.Nev = nev;
            this.SzulDatum = new DateTime(ev, honap, nap);
            this.Nemzetiseg = nemzet;
        }

        public static List<Versenyzo> VersenyzokLista = new List<Versenyzo>();

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

                    Versenyzo versnyzk = new Versenyzo
                        (
                            tomb[0],
                            Int32.Parse(idoTomb[0]),
                            Int32.Parse(idoTomb[1]),
                            Int32.Parse(idoTomb[2]),
                            tomb[1]
                        );
                    VersenyzokLista.Add( versnyzk );
                }
            }
        }

        public static void VersenyzoSzam()
        {
            Console.WriteLine($"Versenyzők száma: {VersenyzokLista.Count}");
        }

        public static void SpanyolPilotak()
        {
            Console.WriteLine($"1990 után született spanyol pilóták: ");
        }

    }
}
