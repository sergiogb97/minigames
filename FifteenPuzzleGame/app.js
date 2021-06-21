var global_id = 0;
var global_interval;
var global_m = 0;
var global_s = 0;

function genAleat( min, max ) {
  numAleat = Math.floor( Math.random() * ( max - min + 1 ) + min );
  return numAleat;
}

function move() {
  var nodosCeldas = document.getElementsByClassName( "cell" );
  var nodoLibre = document.getElementsByClassName( "free" );
  var i, nodo, nodoL;
  var tmp;

  for ( i = 0; i < nodosCeldas.length; i++ ) {
    if ( this == nodosCeldas[ i ] ) {
      nodo =  i;
    }
  }
  for ( i = 0; i < nodosCeldas.length; i++ ) {
    if ( nodoLibre[ 0 ] == nodosCeldas[ i ] ) {
      nodoL =  i;
    }
  }
  if ( ( nodo + 1 ) == nodoL || ( nodo - 1 ) == nodoL || ( nodo + 4 ) == nodoL || ( nodo - 4 ) == nodoL ) {
    tmp = nodosCeldas[ nodo ].classList.item( 1 );
    nodosCeldas[ nodo ].classList.remove( tmp );
    nodosCeldas[ nodo ].classList.add( "free" );
    nodosCeldas[ nodoL ].classList.remove( "free" );
    nodosCeldas[ nodoL ].classList.add( tmp )
  }
}

function disorder() {
  var nodosCeldas = document.getElementsByClassName( "cell" );
  var i, j, num;
  var bPrimeraVez = false;
  var arNums = new Array();
  var tmp = "";

  while ( arNums.length < 15 ) {
    num = genAleat( 0, 14 );
    if ( !bPrimeraVez ) {
      arNums[ 0 ] = num;
      bPrimeraVez = true;
    } else if ( arNums.indexOf( num ) == -1 ) {
          arNums[ arNums.length ] = num;
    }
  }
  for ( j = 0; j < arNums.length; j++ ) {
    tmp = "box" + arNums[ j ];
    nodosCeldas[ j ].classList.remove( nodosCeldas[ j ].classList.item( 1 ) );
    nodosCeldas[ j ].classList.add( tmp );
  }
  nodosCeldas[ 15 ].classList.remove( nodosCeldas[ i ].classList.item( 1 ) );
  nodosCeldas[ 15 ].classList.add( "free" )
  if ( global_s == 0 ) {
    global_interval = setInterval( "time()", 1000 );
  } else {
    clearInterval( global_interval );
    global_m = 0;
    global_s = 0;
    global_interval = setInterval( "time()", 1000 );
  }
}

function time() {
  var nodosTime = document.getElementsByClassName( "timer" );

  if ( global_s != 59 ) {
    global_s++;
  } else {
    global_s = 0;
    global_m++;
  }
  nodosTime[ 0 ].innerHTML = global_m + " minutos y " + global_s + " segundos";
}

function check() {
  var nodosCeldas = document.getElementsByClassName( "cell" );
  var tmp = "";
  var i;
  var check = true;

  for ( i = 0; i < ( nodosCeldas.length - 1 ); i++ ) {
    tmp = "box" + i;
    if ( nodosCeldas[ i ].classList.item( 1 ) != tmp ) {
      check = false;
    }
  }
  if ( check ) {
    clearInterval( global_interval );
    alert( "ENHORABUENA, HAS GANADO\nY has tardado " + global_m + " minutos y " + global_s + " segundos" );
  } else {
    alert( "ALGO ANDA MAL, SIGUE INTENTANDOLO" );
  }
}

function order() {
  var nodosCeldas = document.getElementsByClassName( "cell" );
  var tmp = "";
  var i;

  for ( i = 0; i < ( nodosCeldas.length - 1 ); i++ ) {
    tmp = "box" + i;
    nodosCeldas[ i ].classList.remove( nodosCeldas[ i ].classList.item( 1 ) );
    nodosCeldas[ i ].classList.add( tmp );
  }
  nodosCeldas[ i ].classList.remove( nodosCeldas[ i ].classList.item( 1 ) );
  nodosCeldas[ i ].classList.add( "free" );
}

function change(selection) {
  var nodosCeldas = document.getElementsByClassName( "cell" );
  var nodosImg = document.getElementsByTagName( "img" );
  var nodoLink = document.getElementById( "sprite" );

  if (selection)
    sum();
  else
    rest();
  
  switch ( global_id ) {
    case ( 0 ):
      nodosImg[ 0 ].src = "srcs/sprite0.jpg";
      nodoLink.href = "css/sprite0.css";
    break;
    case ( 1 ):
      nodosImg[ 0 ].src = "srcs/sprite1.jpg";
      nodoLink.href = "css/sprite1.css";
    break;
    case ( 2 ):
      nodosImg[ 0 ].src = "srcs/sprite2.jpg";
      nodoLink.href = "css/sprite2.css";
    break;
    case ( 3 ):
      nodosImg[ 0 ].src = "srcs/sprite3.jpg";
      nodoLink.href = "css/sprite3.css";
  }
}

function sum() {
  if ( global_id != 3 ) {
    global_id++;
  } else {
    global_id = 0;
  }
}

function rest() {
  if ( global_id != 0 ) {
    global_id--;
  } else {
    global_id = 3;
  }
}

function main() {
  var nodosCeldas = document.getElementsByClassName( "cell" );
  var nodosClick = document.getElementsByClassName( "button" );
  var i;

  order();
  for ( i = 0; i < nodosCeldas.length; i++ ) {
    nodosCeldas[ i ].onclick = move;
  }
  nodosClick[ 0 ].onclick = function(){change(0)};
  nodosClick[ 1 ].onclick = function(){change(0)};
  nodosClick[ 2 ].onclick = disorder;
  nodosClick[ 3 ].onclick = check;
  nodosClick[ 4 ].onclick = order;
}

main();
