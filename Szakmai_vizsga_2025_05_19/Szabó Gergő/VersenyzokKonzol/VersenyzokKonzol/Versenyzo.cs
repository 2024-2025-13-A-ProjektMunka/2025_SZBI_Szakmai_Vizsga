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
        public DateTime szuletes { get; set; }
        public string nemzetiseg { get; set; }
        public string nev { get; set; }

        public Versenyzo(int ev, int honap, int nap, string nev, string nemzet)
        {
            this.szuletes = new DateTime(ev, honap, nap);
            this.nemzetiseg = nemzet;
            this.nev = nev;
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
                    string[] idoTomb = tomb[0].Split('-');

                    Versenyzo vers = new Versenyzo
                    (
                        Int32.Parse(idoTomb[0]),
                        Int32.Parse(idoTomb[1]),
                        Int32.Parse(idoTomb[2]),
                        tomb[1],
                        tomb[2]
                    );

                    VersenyzoLista.Add(vers);
                }
            }

        }

        public static void NegyedikFeladat()
        {
            Console.WriteLine($"4. Feladat: Versenyek száma: {VersenyzoLista.Count}");
        }

        public static void HatodikFeladat()
        {
            List<Versenyzo> nemzet = new List<Versenyzo>();

            foreach (Versenyzo item in VersenyzoLista)
            {
                if (item.nemzetiseg == "Nemzetiség") nemzet.Add(item);
            }

            string kiir = "6. Feladat: Melyik nemzet hány pilótát adott a Forma-1-nek ";

            foreach (Versenyzo item in nemzet)
            {
                string = item.nemzetiseg;
                kiir += $"\n\tVersenyzo: {item.nemzetiseg}";
            }

            Console.WriteLine(kiir);
        }

        }
    }