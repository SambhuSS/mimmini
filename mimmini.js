function area() {
  var a, b, c, area, s;
  a = Number(document.getElementById("side1").value);
  b = Number(document.getElementById("side2").value);
  c = Number(document.getElementById("side3").value);
  s = (a + b + c) / 2;
  area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  area = Math.round(area * 100) / 100;
  area_cent = area / 40.47;
  area_cent = Math.round(area_cent * 100) / 100;
  document.getElementById("area").value = area + "sqm";
  document.getElementById("area_cent").value = area_cent + "cents";
  document.getElementById("side1").value = "";
  document.getElementById("side2").value = "";
  document.getElementById("side3").value = "";
  document.getElementById("side1-val").value = a + " m";
  document.getElementById("side2-val").value = b + " m";
  document.getElementById("side3-val").value = c + " m";
}
