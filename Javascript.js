function form1() {
  var pointure = document.getElementById("pointure").value;
  var annee = document.getElementById("annee").value;
  var cal = ((((pointure * 2) + 5 ) * 50) - annee) + 1766;
  alert (cal);
}
