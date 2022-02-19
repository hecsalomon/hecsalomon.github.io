//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=8; attempts=0; attemptsMax=8;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien respondiste acertadamente"; messageTime="Tiempo"; messageError="Lo siento, tuviste errores, vuelve a intentar"; messageAttempts="Intententos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var imaSel=0; texSel=0;
var board=[["albumcuerpos_resources/media/1.PNG","albumcuerpos_resources/media/2.PNG","albumcuerpos_resources/media/3.PNG","albumcuerpos_resources/media/4.PNG"],["albumcuerpos_resources/media/5.PNG","albumcuerpos_resources/media/6.PNG","albumcuerpos_resources/media/7.PNG","albumcuerpos_resources/media/8.PNG"],["0","0","0","0"],["0","0","0","0"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[]; answers=[["Piramide cuadrangular","Piramide hexagonal","Piramide pentagonal","Piramide triangular"],["Prisma cuadrangular","Prisma hexagonal","Prisma pentagonal","Prisma triangular"],["0","0","0","0"],["0","0","0","0"]]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var alt1=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt2=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt3=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt4=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt5=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var wordsGame="YWxidW1jdWVycG9z"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
