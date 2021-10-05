using System;

namespace ConsoleApp2
{
    class Program
    {
        void print()
        {
            Console.WriteLine("----Muc dich ham chi in chu ra man hinh")
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Goi ham print: ");
            Program p = new Program();
            p.print();
            Console.Readkey();
        }
    }
}