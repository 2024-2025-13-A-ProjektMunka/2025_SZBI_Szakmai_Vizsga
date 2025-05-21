using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Security.Cryptography.X509Certificates;

namespace VersenyKonzol
{
    internal class Versenyzo
    {
        
       
            public string Nev { get; set; }
            public DateTime SzulDat { get; set; }
            public string Nemzetseg { get; set; }

            public Versenyzo(string nev, int ev, int honap, int nap, string nemzetseg)
            {
                this.Nev = nev;
                this.SzulDat = new DateTime(ev, honap, nap);
                this.Nemzetseg = nemzetseg;
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
                        string[] idoTomb = tomb[0].Split('.');

                        Versenyzo vers = new Versenyzo
                        (
                            tomb[0],
                            Int32.Parse(idoTomb[0]),
                            Int32.Parse(idoTomb[1]),
                            Int32.Parse(idoTomb[2]),
                            tomb[2]
                        );

                    VersenyzoLista.Add(vers);
                    }
                }

            }

            public static void HarmadikFeladat()
            {
                Console.WriteLine($"3. Feladat: Versenyzők száma: {VersenyzoLista.Count}");
            }

        public static void NegyedikFeladat()
        {
            int legfiatalabb = 0;
            int lrIndex = 0;


            for (int i = 0; i < VersenyzoLista.Count; i++)
            {
            TimeSpan ts = DateTime.Now - VersenyzoLista[i].SzulDat;
                if (VersenyzoLista[i].Min())
                {
                    legfiatalabb = VersenyzoLista[i].SzulDat;
                    lrIndex = i;
                }
            }

            DateTime datum = VersenyLista[lrIndex].SzulDat;
            string helyszin = VersenyLista[lrIndex].Nev;

            Console.WriteLine($"4. Feladat: Legfiatalabb versenyzo: {legfiatalabb}, " +
                $"születés dátuma: {datum.Year}-{datum.Month}-{datum.Day}");
        }

        public static void OtodikFeladat()
        {
            List<Versenyzo> EzerKilencszaz = new List<Versenyzo>();

            foreach (Versenyzo item in VersenyzoLista)
            {
                if (item.SzulDat > '1') EzerKilencszaz.Add(item);
            }

            string kiir = "5. Feladat: 1990 után születésüek: ";

            foreach (Versenyzo item in EzerKilencszaz)
            {
                DateTime datum = item.SzulDat;
                kiir += $"\n\tVerseny: {item.Nev}, időpont {datum.Year}-{datum.Month}-{datum.Day}";
            }

            Console.WriteLine(kiir);
        }

        public static void HatodikFeladat()
        {
            Dictionary<string, int> beNemFejezettGP = new Dictionary<string, int>();

            foreach (var item in VersenyzoLista)
            {
                

                foreach (KeyValuePair<string, int> elem in beNemFejezettGP)
                {
                    if (elem.Key == item.Nemzetseg)
                    {
                        int darab = elem.Value;
                        beNemFejezettGP.Remove(elem.Key);
                        darab++;
                        beNemFejezettGP.Add(elem.Key, darab);
                        break;
                    }
                }
            }

            string kiir = "7. Feladat: Nemzetségek: ";

            foreach (KeyValuePair<string, int> elem in beNemFejezettGP)
            {
                if (elem.Value > 1) kiir += $"\n\t{elem.Key} - {elem.Value}";
            }

            Console.WriteLine(kiir);

            using (StreamWriter sw = new StreamWriter("Statisztika.txt", false, Encoding.UTF8))
            {
                foreach (KeyValuePair<string, int> elem in beNemFejezettGP)
                {
                    sw.WriteLine($"{elem.Key} - {elem.Value}");
                }
            }
        }
    }
}

