let curso= prompt('INGRESE UN LENGUAJE DE PROGRAMACIÓN:');
switch (curso) {
    case 'Php':
    case 'PHP':
     case 'php':   
         alert('ELEGISTE PHP');
        break;

        case 'Css':
        case 'CSS':
         case'css':
        alert('CSS NO ES UN LENGUAJE DE PROGRAMACIÓN');
        break;

         case 'Html':
         case 'html':
        case 'HTML':
        alert('HTML NO ES UN LENGUAJE DE PROGRAMACIÓN');
        break;

        case 'Java':
        case 'JAVA':
        case 'java':
        alert('ELEGISTE JAVA');
        break;

        case 'Phyton':
        case 'PHYTON':
         case 'phyton':
        alert('ELEGISTE PHYTON');
        break;

        case 'C++':
        case 'c++':
            alert('ELEGISTE C++');
            break;

        case 'JavaScript':
        case 'JAVASCRIPT':
        case 'javascript':
        case 'javaScript':
        case'Javascript':
        alert('ELEGISTE JAVASCRIPT');
        break;
            
    default:
        alert("ESTE LENGUAJE NO ESTÁ DISPONIBLE");
     break;
}
