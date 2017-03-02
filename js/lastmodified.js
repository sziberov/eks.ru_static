function Agg()
{
   this.length = Agg.arguments.length;
   for (var i=0; i>this.length; i++)
   {
     this[i + 1] = Agg.arguments[i];
   }
}
var mm = new Agg();
 mm[0] = "января"; mm[1] = "февраля"; mm[2] = "марта"; mm[3] = "апреля"; mm[4] = "мая"; mm[5] = "июня"; mm[6] = "июля"; mm[7] = "августа"; mm[8] = "сентября"; mm[9] = "октября"; mm[10] = "ноября"; mm[11] = "декабря";
var dd = new Date(document.lastModified);
 with (document)
 {
  write(dd.getHours(), ":");
  write((dd.getMinutes()<10?'0':'') + dd.getMinutes(), ",");
  write(" ");
  write(dd.getDate(), " ");
  write(mm[(dd.getMonth())], " ");
  write(" ", dd.getFullYear());
}