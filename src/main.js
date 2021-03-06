import { Triangle } from './../src/triangletracker.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function() {
  $('form#trianglelengths').submit(function(event) {
    $(".answer").hide();
    const a = parseInt($("#side1").val());
    const b = parseInt($("#side2").val());
    const c = parseInt($("#side3").val());
    const triangle = new Triangle(a, b, c);

    $(".answer").text(triangle.checkType());
    $(".answer").show();
    event.preventDefault();
  });
});


