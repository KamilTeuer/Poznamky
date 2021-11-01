package java;

public class index {

    public static void main(String[] args) {
        System.out.println("Ahoj");

    }
}






/*

******************************* ENUM s dvouparametrickým konstruktorem  ***************************************

public enum index {

         NEURCENY(0,"Neurčený"),
         LEDEN(1,"Leden"),
         UNOR(2,"Únor"),
         BREZEN(3,"Březen"),
         DUBEN(4,"Duben"),
         KVETEN(5,"Květen"),
         CERVEN(6,"Červen"),
         CERVENEC(7,"Červenec"),
         SRPEN(8,"Srpen"),
         ZARI(9,"Září"),
         RIJEN(10,"Říjen"),
         LISTOPAD(11,"Listopad"),
         PROSINEC(12,"Prosinec");
    
         private final String jmeno;
         private final int cislo;
    
         private index(int cislo, String jmeno)
         {
              this.cislo=cislo;
              this.jmeno=jmeno;
         }
    
    index vybrany=index.SRPEN;
}

******************************************************************************

package java;

public class index {

    public static void main(String[] args) {

        int number = 7;

        switch (number) {
            case 5:
                System.out.println("Hodnota je: 5");
            break;
        
            case 7:
                System.out.println("Hodnota je: 7");
            break;

            case 10:
                System.out.println("Hodnota je: 10");
            break;

            
        }
    } 
}

*/

/*

  main + TAB = !! VSTUPNÍ BOD PROGRAMU !! = public static void main(String[] args) 
  sysout + TAB = Vypsání textu do console =
  System.out.println("Hello World");
  
  protoze programovani v jave je v zasade o 10 prikazech + - * / for if else
  switch class enum + datove typy Double, Int Boolean hlavne je treba pochopit
  principy .... interface, dedeni (tj. trida extends jina_trida) Override
  funkci ano funkci ktera ti na zaklade vstupu (napr vek, doba pojisteni)
  spocita polatek z class vytvoris objekty (tj. instance classu), v jave je
  vlastne skoro vse objekt napr private Boolean nazev_promenne = Boolean je
  také třída) kazdy objekt muze byt null, tj. nenasetovany
  
  Programování v javě je v zásadě o +/- 10 příkazech: for if else switch class
  enum + datové typy Double, Int, Boolean. Hlavní je pochopit principy:
  interface, dědění (tj. třída extends jina_třída), Override funkci. Z class
  vytvoříš objekty (tj. instance classu) - v javě je všechno objekt.
  


%A	s plovoucí desetinnou čárkou (kromě BigDecimal )	Šestihranný výstup čísla s plovoucí desetinnou čárkou
%b	Jakýkoliv typ	„True“, pokud není null, „false“ je-li null
%C	charakter	Znak Unicode
%d	celé číslo (vč. byte, short, int, long, bigint)	Desetinné celé číslo
%E	plovoucí bod	desetinné číslo ve vědecké notaci
%F	plovoucí bod	desetinné číslo
%G	plovoucí bod	desetinné číslo, případně ve vědeckém zápisu v závislosti na přesnosti a hodnotě.
%h	jakýkoliv typ	Šestihranný řetězec hodnoty z metody hashCode ().
%n	žádný	Oddělovač řádků specifický pro platformu. 
%Ó	celé číslo (vč. byte, short, int, long, bigint)	Osmičkové číslo
%s	jakýkoliv typ	Řetězcová hodnota
%t	Datum/čas (vč. Dlouhý, kalendář, datum a dočasný přístup)	%t je předpona pro převody data/času. Poté jsou zapotřebí další příznaky formátování. Viz převod data/času níže.
%X	celé číslo (vč. byte, short, int, long, bigint)	Šestihranný provázek.
  
"... \" ... "      =   Uvozovky ve Stringu !
\t    =   Tabulka
\n    =   Escape sekvence = System.out.print("Kamil\n\n\n"); = 3x escape
%s    =   Zadané jméno se zobrazí v textu.    System.out.printf("Tvoje prvni holka se jmenovala: %s", getJmeno());


F6	run/deploy
Alt + F6	test
F11	build
Shift + F11	clean anb build
Alt + Shift + F	automatické formátování
Ctrl + Shift + Up/Down	kopírování řádků nahoru/dolů
Alt + Shift + Up/Down	přesun řádků nahoru/dolů
Ctrl + E	vymaže celý řádek
Ctrl + B	přechod na deklaraci metody
Ctrl + /	zakomentuje výběr
Shift + Esc	maximalizace editoru kódu
Ctrl + Q	návrat k poslední editaci
Ctrl + Up/Down	přechod mezi taby otevřených souborů
Ctrl + W	uzavření aktuálního tabu souboru
Ctrl + U, U	změna na velká písmena
Ctrl + U, L	změna na malá písmena
Ctrl + U, S	přepnutí velikosti písmen
Ctrl + Del/BackSpace	smazání následující/předchozího slova
Ctrl + P	vyvolá tooltip parametrů metody
Ctrl + ;	doplní na konec řádku středník „;“
Ctrl + Shift + ;	doplní na konec řádku středník „;“ a začne nový řádek
Ctrl + R	přejmenování aktuální proměnné/třídy/metody
Ctrl + Shift + R	přepnutí kurzoru na block selector
Alt + Backspace	remove surrounding (odstranění „okolí“)
Alt + Insert    =   Generování Getteru a Setteru.


Public  =   Veřejná
Static  =   Značí přístup k metodě. Statická metoda se dá volat bez vytvoření  objektu.
            Statické metody, nemůžou používat NEstatické metody !!!
Void    =   Prázdný, nenavrátí žádné hodnoty.
Private =   Lze použít jen ve třídě, ve které je vytvořená například proměnná.
Final   =   Používá se k vytvoření konstanty z proměnný.
            private final int vek;  - Konstanta se nedá změnit.
            Když použijeme final v argumentu, tak se proměnná NESMÍ změnit!
Dědičnost   =   Používá se kvůli polymorfismu, různé abstrakce atd..
                Třída, která dědí z jiné třídy, může dědit jenom z 1 třídy a né z více tříd.
This        =   Drží referenci na klíčový objekt, který jsme si vytvořili.
Super       =   Drží referenci na objekt, ze kterého jsme dědili.
Interface   =   Oproti dědičnosti, interface může dědit z více tříd. Je to naprosto abstraktní třída.
                Nedají se dát do ní proměnný. Dají se zde dát pouze metody, které vypadají jako abstraktní metody.
                Nesmí být u metod tělo! Rozhraní se nedědí, ale implementuje.
                Používá se pro opravdu abstraktní věc, nebo když potřebujeme nějakou třídu, aby dědila z více věcí.
Abstraktní třída    =   Nelze vytvořit objekt dané třídy (Savec). Abstraktní metoda nemá tělo metody.
                        Když se abstraktní třída zdědí s abstraktní metodou, tak se musí v potomkovi nějakým způsobem definovat.
Polymorfismus   =   Lze vytovořený objekt z vedlejší třídy přejmenovat z:
                    Pes objectPes = new Pes();  =>  Savec objectPes = new Pes();
                    Savec alik[] = {new Pes(), new Delfin(), new Clovek()}; Jako pole.
Výjimky     =   Zpracování chybný činnosti programu. Například: čtení ze souboru: Když ten soubor neexistuje, tak z něj nemůžu číst.
                V tom případě nám to vyhodí výjimku, že soubor neexistuje a my tu výjimku můžeme zpracovat. Vytvoříme soubor,
                naplníme ho daty a pak z něho můžeme číst. Např.:       public void setVek (int vek) throws Exception
Vnořená třída   =   Vnořená třída má přístup i k private proměnným, které jsou obsaženy v rodičovské třídě.                


SLOVÍČKA:
Assigment       =   Přiřazení
Allowed         =   Povoleno
Interface       =   Rozhraní
throws          =   Hází
Exception       =   Výjimka
Surround        =   Obklopit

CHYBOVÉ HLÁŠKY:
assigned value is never used    =   přiřazená hodnota se nikde nepoužije.
assigment to itself             =   přiřazení k sobě samému (vek = vek)         řešení:  (this.vek = vek)
accesing static metod           =   přístup ke statické metodě.
"void" type not allowed here    =   typ "prázdná" zde není povolen. 
cannot find symbol              =   nelze nalézt symbol                         řešení: chybí "new" : throw new Exception



******************************* JAVAFX  ***************************************
JavaFX je platforma pro tvorbu grafického uživatelského rozhraní = GUI
JavaFX je zabudována v JDK




*******************************  ***************************************
*******************************  ***************************************




******************************* VLÁKNA ***************************************
Dva způsoby startování:
    a)  "extends Thread"    -   rozšíření Thread třídy  -   přepsání//Override//run () metody 
                                run() je vestavěná metoda
    b)  implements Runnable interface

A)  
public class Vlakna {
    public static void main(String[] args) {
        
        Bezec bezec1 = new Bezec();
        bezec1.start();
        
        Bezec bezec2 = new Bezec();
        bezec2.start();
        
    }
}
    class Bezec extends Thread {
        @Override
        public void run(){
        for (int i = 0; i <= 10; i++){
            System.out.println("Ahoj " + i);
            
            try {
                Thread.sleep(120);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}


B) 



******************************* REKURZE - FIBONACCIho POSLOUPNOST  ***************************************
0 1 1 2 3 5 8 13 21 34 ...
Sečtení vždy předchozích 2 členů.

public class RekurzeFibonaccihoPosloupnost {
    public static void main(String[] args) {
        
        int index = 0;
        
        while (true) {            
            System.out.println(fibon(index));
            index++;
        }
         
        public static long fibon (int i){
            if (i == 0) return 0;
            if (i <= 2) return 1;
        // 0 1 1 2
            long fibVyraz = fibon(i-1) + fibon(i-2);
        // fibon 3 // fibon 2 + fibon 1 = 1 + 1 = 2
        // fibon 4 // fibon 3 + fibon 2 = 2 + 1 = 3
        // fibon 5 // fibon 4 + fibon 3 = 3 + 2 = 5
            
            return fibVyraz;
        }
    }
}

******************************* REKURZE  ***************************************

public class Faktorialy {
    public static void main(String[] args) {
        System.out.println(faktorial(10));
    }
    
    // Rekurze = opakované vnořené volání stejného podprogramu(funkce).
    // Faktorial metoda: 
    public static long faktorial(long n){
        if (n<=1){
            return 1;
        } else {
            return n*faktorial(n-1);
        }
    }
}


******************************* OverLoading - přetěžování  ***************************************

public class OverLoadingPretezovani {
    public static void main(String[] args) {
        // OverLoading přetěžování = umožňuje Jave vybrat správnou metodu podle datového typu.
        
        System.out.println(Pridej(1,2));
        System.out.println(Pridej(1.5,2.7));
        System.out.println(Pridej("Ahoj ", "světe"));
    }
    
    public static int Pridej(int a, int b){
        return (a+b);
    }
    public static double Pridej(double a, double b){
        return (a+b);
    } 
    public static String Pridej(String a, String b){
        return (a+b);
    }
}

******************************* JINÝ ZÁPIS FOR  - PROMĚNNÝ PRŮMĚR ***************************************

public class PromennyPrumer {
    public static void main(String[] args) {
        
        int [] lide = {10,20,30,40,50,60};
        //prumer(lide);
        int soucet = 0;
        
        for (int i:lide){
            soucet+=i;
        }
        
        System.out.println("Součet věků všech lidí je " + soucet + " let.");
        System.out.println("Věkový průměr všech lidí je " + prumer(lide) + " let.");
    }
    
    public static int prumer(int...cisla){
       
        int soucet2 = 0;
        
        for (int x:cisla){
        soucet2+=x;
        }
        return soucet2/cisla.length;
    }
}

        // DELŠÍ ZÁPIS:
        for (int i = 0; i < lide.length; i++){
            soucet += lide[i];
        }
        
        // KRATŠÍ ZÁPIS:
        for (int i:lide){
            soucet+=i;
        }
        
        

******************************* ENUM ***************************************

Hlavní třída:

import java.util.EnumSet;

public class EnumHlavni {
    public static void main(String[] args) {
        
        //EnumVedlejsiTrida.values() je automaticky vytvořený/vestavěný Array, který je díky enum !!!
        for (EnumVedlejsiTrida lide: EnumVedlejsiTrida.values()){
            System.out.printf("%s\t%s\t%s\n", lide, lide.getPopis(), lide.getRok());
        }
        
        System.out.println("\n***************\n");
        
        for (EnumVedlejsiTrida lide: EnumSet.range(EnumVedlejsiTrida.michaela, EnumVedlejsiTrida.dasa)){
            System.out.printf("%s\t%s\t%s\n", lide, lide.getPopis(), lide.getRok());
        }
    }
}

Vedlejší třída:

// Enumerations - konstanty, které jsou zároveň objekty.
public enum EnumVedlejsiTrida {
    
    igor ("krasny", "25"),
    michaela ("lolita", "17"),
    jana ("spanelka", "19"),
    masa ("carokrasna", "19"),
    dasa ("lochneska", "20"),
    kudlicka ("kudlicka", "21");
    
    private final String popis;
    private final String rok;
    
    // Enum konstruktor:
    EnumVedlejsiTrida(String tenPopis, String vek){
        popis = tenPopis;
        rok = vek;
    }
    
    public String getPopis() {
        return popis;   
}
    
    public String getRok() {
        return rok;
}
}

******************************* 4 DRUHY METOD ***************************************

import java.util.Scanner;

public class Kalkulacka {
    
Metoda bez návratového typu a bez parametrů: 

public static void vypisMenu(){
    System.out.println("Menu:");
    System.out.println("1. Sčítání");
    System.out.println("2. Odečítání");
    System.out.println("3. Násobení");
    System.out.println("4. Dělení");
    System.out.println("Zadej svojí volbu:"); 
}

Metoda bez návratového datového typu, ale s parametry:
public static void secti(int scitanec1, int scitanec2) {
   System.out.println(scitanec1 + " + " + scitanec2 + " = " + (scitanec1 + scitanec2));
}

Metoda s návratovým datovým typem bez parametru:
public static int nactiCislo (){        //  Pokaždé, když NEpoužiji klíčové slovo "void", tak musím napsat "RETURN" !!!
   Scanner sc = new Scanner(System.in);    //  Toto by se dělalo normálně jinak. Je to jen pro demonstraci metod.
   System.out.println("Zadej číslo: ");
   int cislo = sc.nextInt();
   return cislo;        
}

Metoda s návratovým datovým typem a parametry:  
public static int odecti(int mensenec, int mensitel){
   int vysledek = mensenec - mensitel;
   return vysledek;
}

**********************************************************************

public static void main(String[] args) {    
vypisMenu();

int volba = nactiCislo();

if (volba == 1){
   System.out.println("Vybral jste sčítání.");
   secti(nactiCislo(),nactiCislo());
   
   //System.out.println("Zadej první číslo:");
   // int a = nactiCislo();
   //System.out.println("Zadej druhé číslo:");
   // int b = nactiCislo();
   // System.out.println("Výsledek sčítání je: " + (a+b));
   
   // Lze proměnné "a" a "b" zrušit a napsat je do metody "secti" : 
   // secti(a,b);
}

if (volba == 2){
   System.out.println("Vybral jste odečítání.");
   int x = nactiCislo();
   int y = nactiCislo();
   System.out.println(x + " - " + y + " = " + odecti(x,y));
    }  
    }
}

**********************************************************************
 
    if (a > b && a > c) {
        System.out.println("Proměnná a = " + a + " je největší číslo.");
    } else if (b > c && b > c){
        System.out.println("Proměnná b = " + b + " je největší číslo.");
    } else if (c > a && c > b){
        System.out.println("Proměnná c = " + c + " je největší číslo.");
    } else {
        System.out.println("Není definována nejvyšší hodnota.");
    }

 **********************************************************************

short a = 5;
short b = 7;
short c = 7;
        
    if (a > b) {
        if (a > c){
            System.out.println("Největší číslo je: " + a);
         }else {
            System.out.println("Největší číslo je: " + c);
        }
    } else {
        if (b > c){
            System.out.println("Největší číslo je: " + b);
        } else {
            System.out.println("Největší číslo je: " + c);
        }
    }

 **********************************************************************
 
  Základní(primitivní) datové typy: 
  - Celočíselné 
  - Znakové: 
        - Znak 
        - Řetězec 
    - Logické 
    - Reálné 
    - Prázdný datový typ (void)
  
  Celočíselné datové typy: 
  - byte (8b)   -128                        až      +127 
  - short (16b) -32768                      až      +32767 
  - int (32b)   -2 147 438 648              až      +2 147 438 647 
  - long (64b)  -9 223 372 036 854 775 808  až      +9 223 372 036 854 775 807
 
 Reálné datové typy: (desetiná čísla) - float (32b) - double (64b) Radši
 používat double

**********************************************************************

Random generator = new Random();
int b = generator.nextInt(10) +30;  // Omezení do čísla 30-40.

**********************************************************************
  
  for (int i = 1; i <= 10; i++){ 
      System.out.println(i); 
    }
  
  int j = 1; 
  while (j<=10) { 
    System.out.println(j); 
    j++; 
}
 **********************************************************************
  
  
  Scanner sc = new Scanner(System.in); 
  System.out.println("Napiš něco: ");

  String vstup; 
  vstup = sc.nextLine(); 
  String vystup; 
  vystup = vstup + ", " + vstup + "!"; 
  System.out.println(vystup);
 **********************************************************************
 
  
  System.out.println(Math.round(Math.random()*60));
  
  System.out.println("Zadejte číslo ke zdvojnásobení:");
  
  
  String b = sc.lineText(); 
  int b = Integer.parseInt(s); 
  b = b * 2;
  System.out.println(b);
  
  String pozdrav = "AHOJ"; 
  System.out.println(pozdrav);
  
  String s = "50"; 
  int a = Integer.parseInt(s);
  
 
  int aktualniRok = 2021;
 ***************************************************************************  
  
  PROMĚNNÉ v JAVĚ ***************
  
  Integer - Celé číslo int cislo = 42;
  
  Double - Desetiná čísla double cislo = 5.5;
  
  String = Řetězec String pozdrav = "Ahoj";
  
  Boolean = Pravda / nepravda boolean dospely = true;
  
  !=    -    Nerovná se!
  
  
  
 */