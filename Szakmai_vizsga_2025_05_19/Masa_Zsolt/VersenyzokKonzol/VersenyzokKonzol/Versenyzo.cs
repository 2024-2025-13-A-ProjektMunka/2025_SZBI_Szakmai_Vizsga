using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Runtime.CompilerServices;

namespace VersenyzokKonzol
{
    public class Verseny
    {

        public DateTime Datum { get; set; }
        public string Nev { get; set; }
        public string Nemzet { get; set; }



        public Verseny(int ev, int honap, int nap, string nev, string nemzet)
        {

            this.Datum = new DateTime(ev, honap, nap);
            this.Nev = nev;
            this.Nemzet = nemzet;


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

                    Verseny vers = new Verseny
                    (

                        Int32.Parse(idoTomb[0]),

                        Int32.Parse(idoTomb[1]),

                        Int32.Parse(idoTomb[2]),

                        Int32.Parse(tomb[3])








                    )
                    {

                    };

                    VersenyLista.Add(vers);

                }
            }

        }


        public static void HarmadikFeladat()
        {
            Console.WriteLine($"Versenyzők száma: {VersenyLista.Count}");


        }
        public static void NegyedikFeladat()
        {

            Console.WriteLine($"Legfiatalabb pilóta: Neve: {} Születési dátuma: {DateTime.MinValue}");
        }



        public static void OtodikFeladat()
        {


            Console.WriteLine($"1990 után született spanyol pilóták: " { VersenyLista.Any<spanyol> });

        }

        public static void HatodikFeladat() 
        {

            Console.WriteLine($"Pilótaszám nemzetenként: { Nev + Nemzet}");
        }












    }
}