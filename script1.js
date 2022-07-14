var b = +prompt('Введите время в цифрах');

switch (b) {
    case 0:
    case 1:
        alert(b + " час ночи");
        break;
    case 2:
    case 3:   
    case 4:
        alert(b + " часа ночи");
        break;
    case 5:
    case 6:
        alert(b + " часов ночи");
        break;
    case 7:       
    case 8:        
    case 9:        
    case 10:
        alert(b + " часов утра");
        break;
    case 11:       
    case 12:
        alert(b + " часов дня");
        break;       
    case 13:
        alert((b - 12) + " час дня");
        break;
    case 14:
    case 15:
    case 16:
        alert((b - 12) + " часа дня");
        break;
    case 17:
        alert((b - 12) + " часов дня");
        break;
    case 18:      
    case 19:       
    case 20:   
    case 21:
    case 22:
    case 23:
        alert((b - 12) + " часов вечера");
        break;   
    default:
        alert('Вы ввели неверные данные');
        break;
}