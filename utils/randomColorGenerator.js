const randomColorGenerator = () => {
    const randomColor = Math.floor(Math.random() * 29) + 1;
    let backgroundColor;
  
    switch (randomColor) {
      case 1:
        backgroundColor = "#FDAC53";
        break;
      case 2:
        backgroundColor = "#F68274";
        break;
      case 3:
        backgroundColor = "#CC6D90";
        break;
      case 4:
        backgroundColor = "#8D6495";
        break;
      case 5:
        backgroundColor = "#505A7F";
        break;
      case 6:
        backgroundColor = "#2F4858";
        break;
      case 7:
        backgroundColor = "#C4A83B";
        break;
      case 8:
        backgroundColor = "#8A9F37";
        break;
      case 9:
        backgroundColor = "#4F9243";
        break;
      case 10:
        backgroundColor = "#008252";
        break;
      case 11:
        backgroundColor = "#007060";
        break;
      case 12:
        backgroundColor = "#A98058";
        break;
      case 13:
        backgroundColor = "#FFEBCD";
        break;
      case 14:
        backgroundColor = "#005247";
        break;
      case 15:
        backgroundColor = "#C3FCF1";
        break;
      case 16:
        backgroundColor = "#4B8077";
        break;
      case 17:
        backgroundColor = "#32D693";
        break;
      case 18:
        backgroundColor = "#009E60";
        break;
      case 19:
        backgroundColor = "#AE7261";
        break;
      case 20:
        backgroundColor = "#C35353";
        break;
      case 21:
        backgroundColor = "#00D9BF";
        break;
      case 22:
        backgroundColor = "#FF61CA";
        break;
      case 23:
        backgroundColor = "#00C0DB";
        break;
      case 24:
        backgroundColor = "#A772F4";
        break;
      case 25:
        backgroundColor = "#402E32";
        break;
      case 26:
        backgroundColor = "#4D1500";
        break;
      case 27:
        backgroundColor = "#A05D00";
        break;
      case 28:
        backgroundColor = "#DFE0DF";
        break;
      case 29:
        backgroundColor = "#BC9E00";
        break;
      default:
        backgroundColor = "#ffffff";
        break;
    }
  
    return backgroundColor;
  };
  
  export default randomColorGenerator;
  