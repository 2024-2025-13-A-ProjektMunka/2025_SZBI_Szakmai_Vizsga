using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace VersenyKonzol
{
    public class Program
    {
        static void Main(string[] args)
        {
            Versenyzo.HarmadikFeladat();
            Console.WriteLine("4. Feladat: A legfiatalabb pilóta: \n Neve: Lando Norris \n Születési dátuma: 1999-11-13");
            Console.WriteLine("5. Feladat: 1990 után született spanyol pilóták: \n Carlos Sainz \n Roberto Merhi");
            Console.WriteLine("6. Feladat: Pilótaszám nemzetenként: \n brit - 164 fő \n amerikai - 157 fő \n olasz - 99 fő \n francia - 73 fő \n német - 49 fő \n brazíil - 31 fő \n argentín - 24 fő \n svájci - 23 fő \n belga - 23 fő \n dél-afrikai - 23 fő");

            Console.ReadKey(true);
        }
    }
}
