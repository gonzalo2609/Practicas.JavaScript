let curso= prompt('ESCRIBE UN LENGUAJE DE PROGRAMACIÓN:');
switch (curso) {

        case '':
        alert('NO ESCRIBISTE NINGÚN LENGUAJE.');
        alert("EL PROCESO SE CANCELÓ.");
        break;

        
    case 'Php':
    case 'PHP':
     case 'php':   
         alert('ELEGISTE PHP.');
        break;

        case 'Css':
        case 'CSS':
         case'css':
        alert('CSS NO ES UN LENGUAJE DE PROGRAMACIÓN.');
        break;

         case 'Html':
         case 'html':
        case 'HTML':
        alert('HTML NO ES UN LENGUAJE DE PROGRAMACIÓN.');
        break;

        case 'Java':
        case 'JAVA':
        case 'java':
        alert('ELEGISTE JAVA.');
        break;

        case 'Phyton':
        case 'PHYTON':
         case 'phyton':
        alert('ELEGISTE PHYTON.');
        break;

        case 'C++':
        case 'c++':
            alert('ELEGISTE C++.');
            break;

        case 'JavaScript':
        case 'JAVASCRIPT':
        case 'javascript':
        case 'javaScript':
        case'Javascript':
        alert('ELEGISTE JAVASCRIPT.');
        break;
            
    

    default:
        alert("ESTE LENGUAJE NO ESTÁ DISPONIBLE.");
     break;
  }

 
    let idioma= prompt('SELECCIONA UN NÚMERO DEL 1 AL 5 PARA VER UN IDIOMA');
    switch (idioma) { 


        case '1':
     alert ('ESPAÑOL');
            break;

         case '2':

         alert('FRANCES') ; 
         break;
         
         case '3':
      alert('PORTUGUÉS');
         break;

         case '4':
         alert('ITALIANO');
         break;
         

        case '5':
        alert ('INGLÉS');
        break;


        default:
            alert('NO ESTA DISPONIBLE');
            break;
    }






      function selecionarIdioma(valor){



        let idioma;

        switch (valor) {

            case 1:
                idioma= "ESPAÑOL";
                break;
        
        case 2:
        idioma= "FRANCÉS";
        break;

        case 3:
            idioma= "PORTUGUÉS"
            break;

            case 4:
                idioma= "ITALIANO";
                break;

        case 5:
            idioma= "INGLÉS";
            break;


            default:
            idioma= " ";
                break;
        }
        return(idioma);

    } 
     alert(selecionarIdioma(2));






    let volumen = prompt('CON VALOR DEL 1 AL 10, ESCRIBE QUE TAN FUERTE QUIERES ESCUCHAR EL SONIDO DEL VOLUMÉN.');

    switch (volumen) {
    case "1":
    case "2":
    case "3":
     alert("ESTO ES VOLUMÉN BAJO");
        break;

    case"4":
    case "5":
    case "6":
    case "7":
        alert("VOLUMÉN INTERMEDIO");
    break;

    case "8":
    case "9":
    case "10":
        alert("VOLUMÉN ALTO");
        break;


      default:
        alert("NO DISPONIBLE");
        break;
} 