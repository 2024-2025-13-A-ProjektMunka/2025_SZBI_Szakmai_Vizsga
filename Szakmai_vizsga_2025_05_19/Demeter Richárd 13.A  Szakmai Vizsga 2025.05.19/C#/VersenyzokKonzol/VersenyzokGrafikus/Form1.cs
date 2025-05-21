using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using VersenyzokKonzol;

namespace VersenyzokGrafikus
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        public static List<Versenyzo> VersenyzokLista = new List<Versenyzo>();


        private void Form1_Load(object sender, EventArgs e)
        {
            Versenyzo.Beolvas();
            VersenyzokLista = Versenyzo.VersenyzoLista;

            foreach(Versenyzo item in VersenyzokLista)
            {
                ListViewItem lvi = new ListViewItem(item.Nev);
                lvi.SubItems.Add(item.SzuletesiDatum.ToString());
                lvi.SubItems.Add(item.Nemzetiseg);
                listView1.Items.Add(lvi);
            }

        }
    }
}
