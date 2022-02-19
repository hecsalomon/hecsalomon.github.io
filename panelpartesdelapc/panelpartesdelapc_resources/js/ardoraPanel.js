//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if ((tiTime) && (tiButtonTime)){paintButtonTime();}randomSort(); paintPoints();if (tiAval){parent.iniciaActividade()}
$(".txtCell").draggable({containment: "document",revert: "invalid",cursor: "move"});
$(".droptxtCell").droppable({accept:".txtCell",drop: function( event, ui ) {ui.draggable.position({of: $(this),my:"left top",at:"left top"});
var id=ui.draggable.attr("id");$("#"+id+"_txt").removeClass("txtCell_txt");$("#"+id+"_txt").addClass("droppedTxt");var numId=parseInt($(this).attr("id").substring(7))-1;doneA[numId]=id;},
over: function(event, ui) {$(this).css("border-color",colorSele);},out: function(event, ui) {$(this).css("border-color","#000000")}});
$("#start").droppable({accept:".txtCell",drop:function( event,ui){var id=ui.draggable.attr("id");$("#"+id+"_txt").addClass("txtCell_txt");$("#"+id+"_txt").removeClass("droppedTxt");
}});
$(":input").attr("autocomplete","off");$(":input").attr("spellcheck",false);}
function randomSort(){ var rand=0; var j=0; words= new Array(); for (i = 0; i < answers.length; i++) {answer[i]="";} texSel=Math.floor(Math.random() * (answers.length-1));
for (i = 0; i < answers.length; i++) {rand = Math.floor(Math.random() * (answers.length-1));if (answer[rand]==""){answer[rand]=answers[i];}else{
j=rand;while (answer[j]!=""){j++;if (j>answers.length-1){j=0;}}answer[j]=answers[i];}}}
function paintButtons(){var num=$("div.txtCell").length;var nameDiv="#txt"+num.toString();$(nameDiv).remove();
for (i = 1; i < answer.length+1; i++) {nameDiv="#txt"+i.toString()+"_txt";$(nameDiv).html("<p>"+answer[i-1]+"</p>");}var heightBut=5;for (i = 1; i < answer.length+1; i++) {
nameDiv="#txt"+i.toString();$(nameDiv).css("top",heightBut+"px");heightBut=heightBut+$(nameDiv).height()+10;}}
function paintPoints() {var canvas = document.getElementById("ardoraActCanvasAnim");canvas.style["visibility"] = "visible";canvas.width = canvas.width;var contexto = canvas.getContext("2d");
for (i = 0; i < doneA.length; i++) {
contexto.beginPath();contexto.fillStyle=colorButton;contexto.arc(parseInt(panelWords(coorx[i])),parseInt(panelWords(coory[i])),4,0,2 * Math.PI,false);contexto.fill();contexto.strokeStyle=colorSele;contexto.lineWidth=2;
var x=parseInt(posX[i]);var y=parseInt(posY[i]);contexto.moveTo(parseInt(panelWords(coorx[i])), parseInt(panelWords(coory[i])));contexto.lineTo(x, y);contexto.stroke();
}}
function paintPointSel(){var canvas = document.getElementById("ardoraActCanvasAnim");var contexto = canvas.getContext("2d");var colorB;var colorL;aniPoint++;
if (aniPoint>3){aniPoint=0};if (aniPoint==0) { colorB=colorSele; colorL=colorBack;}
if (aniPoint==1) { colorB=colorButton; colorL=colorSele;}
if (aniPoint==2) { colorB=colorText; colorL=colorButton;} if (aniPoint==3) { colorB=colorBack; colorL=colorText;}
contexto.beginPath();contexto.fillStyle =colorB;contexto.arc(parseInt(panelWords(coorx[texSel])),parseInt(panelWords(coory[texSel])),5, 0 , 2 * Math.PI, false);
contexto.fill();contexto.strokeStyle = colorL;contexto.lineWidth = 2;contexto.stroke();}
function isCorrect(cell) {successes=0;score=0;for (i = 0; i < doneA.length; i++) {if ($("#"+doneA[i]+"_txt").text()==answers[i]){
$("#"+doneA[i]).draggable("disable");
$("#"+doneA[i]+"_txt").css("background","radial-gradient(ellipse at center center,#FFFFFF,#91962F)");
$("#"+doneA[i]+"_txt").css("borderWidth","1px");
$("#"+doneA[i]+"_txt").css("borderStyle","solid");
$("#"+doneA[i]+"_txt").css("borderColor","#000000");
$("#"+doneA[i]+"_txt").css("borderRadius","4px");
timeAct=timeAct+timeBon;score = score + scoreInc;successes++;}else{score=score-scoreDec;}}
if (successes==answers.length) {showMessage("Ok");} else {attempts++;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame) {for (i = 1; i <= answers.length; i++) {$("#txt"+String(i)).css({left: posX[i-1]+"px",top: posY[i-1]+"px"});$("#txt"+String(i)+"_txt").text(answers[i-1]);}}
function paintBack(){}
function panelWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
