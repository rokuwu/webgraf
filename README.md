# Webgraf Verseny - Neumann János Informatikai Technikum

Ez a repo a Webgraf verseny-hez van használva, ahova a megoldott (vagy akár félkész) feladatokat felrakjuk.

## Feladatok:

3. Forduló

1. Feladatsor
  * 1 - Done
  * 2 - Done
2. Feladatsor
  * 1 - Done
  * 2 - Done
  * 3 - Done
  * 4 - Done
3. Feladatsor
  * 1 - Done

## Feladat leírások:
  * Feladatsor 1
  ```
  1. Készítsetek egy regisztrációs űrlapot, amelyben meg kell adni a felhasználó teljes nevét, bejelentkezési nevét, jelszavát kétszer. Az elküldés előtt ellenőrizni kell:

  minden mező legyen kitöltve
  a teljes névben legyen szóköz
  a login név csupa kisbetűket és számokat tartalmazhat
  a két jelszó megegyezik és legalább 7 karakter hosszú, tartalmaz nagybetűket, kisbetűket és számokat is
  Ezeket az információkat a kitöltés során (ha a mező fölé kerül az egérkurzor) adja meg a programotok CSS-t használva a példakódhoz hasonló módon.

  2. Készítsetek CSS (külső fájl) felhasználásával kétoldalas honlapot Daenerys sárkányairól!
  A szövegek egységesen Arial betűtípussal legyenek szedve, de használhattok más, talpnélküli betűtípust is, de akkor csak azt.
  • A kezdőoldal böngészőben megjelenő címe: Daenerys sárkányai – Kezdőlap
  • A galéria oldal böngészőben megjelenő címe: Daenerys sárkányai - Galéria
  • A kezdőlapot index.html néven kell elmenteni, a galéria oldalt pedig galeria.html néven.

  • A tartalom egy olyan balra igazított blokkban helyezkedik el (2 oszlop, akárhány sor), amelynek szélessége 700 képpont mindkét oldalon.
  • Nem használhattok <table> utasítást! A blokknak két oszlopa legyen!
  • Mindkét oldalon a blokk jobb oldalán (a teljes jobboldali oszlopban) egy egész alakos Daenerys kép legyen!
  • Mindkét oldalon a blokk első sorában egy kép legyen, amelyen mindhárom sárkány látható. A kép Daenerys képe fölé ne nyúljon be (a jobboldali oszlop fölé)!

  • A 700 képpontos blokk celláinak belső margója (a tartalom és a szegély közti távolság) 10 képpont legyen!
  Az első oldalon:
  • A „Daenerys sárkányai” szöveg egyes címsor (h1) legyen. Ez az első sorban a sárkányokat bemutató kép felett legyen, annak felső részén!
  • Ez alatt legyen egy szöveg a sárkányokról, címe: „Mik azok a sárkányok?". Kettes címsor (h2) legyen, színe: #000080
  • Alatta legyen egy táblázat a 3 sárkány adatairól. Név, súly, szín, stb. (Itt lehet használni <table> utasítást!) Lehetnek az adatok fiktívek is!:)
  • A táblázat alatt adjátok meg a forrásaitokat, ahonnan az adatokat vettétek! A forrásoldalak új ablakban jelenjenek meg!
  • A „Mik azok a sárkányok?”, „Képgaléria” szövegek kettes címsorok (h2) legyenek, színük: #000080

  • A sárkány adatait tartalmazó táblázat első sorának háttérszíne: #638BA8 (Ez valódi táblázat legyen!)

  A Galéria oldalon az első sor alatt (és a navigáció alatt) legyen 4 kép, a képek fölött (de a navigáció alatt) a Képgaléria szó, kettes címsor (h2) legyen, színe: #000080.

  • Mindkét oldalon a 3 sárkányos kép alatt legyen egy navigációs menüt tartalmazó szürke sáv, színkódja: #E9E9E9. (Kezdőlap Galéria elemekkel)

  Nem használhattok HTML utasítást formázásra, azaz pl. <strong>, <font color=....>, stb.
  ```

  * Feladatsor 2
  ```
  1. Készítsetek egy olyan oldalt, amelyben egy CSS-sel formázott (király)kék színű, nagy méretű téglalapban (div tag) egy piros színű (div tag) kör mozog folyamatosan, fentről lefelé, valamint balról 
  jobbra is, azaz átlós irányban, végtelen ideig! A körben legyen egy kép Daenerysról! A királykék színű téglalap alatt a kör aktuális koordinátája jelenjen meg! 

  2. Készítsetek egyszerű reflexteszt játékot JavaScript kódban! Az oldalon a jobb felső sarokban jelenjen meg Daenerys valamelyik sárkánya (Drogon, Rhageal, Viserion). (Minden indításkor más-más, 
  legalább 3 különböző sárkányotok legyen!)

  A játék során a képernyő közepén megjelenik egy sárkány, amelyik vagy a jobb felső sarokban lévő, csak nagyobb méretű, vagy pedig egy teljesen más. (Lehet nem sárkány is.) Az előbbis esetben a 
  felhasználónak kattintania kell a megjelenő sárkányra, egyébként viszont nem. A sikeres és a sikertelen kattintások is jelenjenek meg a képernyőn! A sárkány (vagy nem sárkány) mindig a képernyő 
  közepén jelenjen meg! Ha 2 másodperc után nincs kattintás, akkor adja a program a következő képet! A program alapértelmezésben 10 képet jelenítsen meg, de ezt a felhasználónak legyen lehetősége 
  növelni!

  3. A képernyő két szélén legyen 1-1 béka, de ne egyformák! Közöttük egy vonalban legalább 10, legfeljebb 30 kő! A békák balról és jobbról is ezekre a kövekre ugrálhatnak. Minimum 1, maximum 3 kő 
  "távolságot" tudnak átugrani, azaz vagy a következő kőre, vagy az azt követőre, vagy a harmadik kőre ugorhatnak. A békák felváltva ugornak, visszafelé nem, csak előre. A szimuláció akkor kezdődik, ha 
  a felhasználó a Start gombra kattint, amely zöldes árnyalatú legyen! Az a béka nyer, amelyik ráugrik a másikra, vagy átugorja a másikat! Az, hogy egy béka az 1., a 2. vagy a 3. kőre ugrik, az 
  véletlenszerű legyen. A játék megkezdése előtt lehessen fogadni valamelyik békára. A szimuláció végén a program írja ki, hogy a játékos nyert vagy sem! Az alkalmazás háttere a "helyzetnek" megfelelő 
  kép legyen! :-)

  4. A fenti játékot kell elkészítenetek megint, de most mindig az a béka ugrik, amelyikre a felhasználó rákattint, de az, hogy hányat ugrik a béka (1, 2, 3) azt a felhasználó adja meg! További 
  változtatás, hogy a békák hátrafelé is ugorhatnak, persze a "pályáról" nem ugorhatnak le! Most ne lehessen fogadni, hogy melyik béka nyer!:-) Azaz egy kétszemélyes játékot kell lekódolnotok! A több 
  korlát megegyezik a fentiekkel! (Start gomb sem kell!)
  ```

  * Feladatsor 3
  ```
  1. A fenti téglalap helyett egy Star Wars ürhajót (X szrányút) kell a képernyő aljára tenni (véletlenszerűen jelenjen meg 3 közül egy). Ezt lehessen jobbra és balra mozgatni. A space billentyűt 
  megnyomva a űrhajó tudjon lőni, azaz egy lézernyaláb (lézerfény) induljon el felfelé egyenesen. A programban a felhasználó beállíthassa a lézernyaláb sebességét! Addig ne lehessen újra lőni, amig a 
  lézernyaláb  el nem érte a képernyő tetejét és el nem tűnt! A "játéknak" egy világűrt reprezentáló háttere legyen!
  ```