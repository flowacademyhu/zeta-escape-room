const neighbour = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
//bal felső
if (x===1 && y===1 && (arr[x+2][y].visited===false || arr[x][y+2].visited===false)) {
    return true;
} 
// jobb felső
else if (x===1 && y===arr.length-2 && (arr[x+2][y].visited===false || arr[x][y-2].visited===false)) {
    return true;
    }
    // bal alsó
    else if (x===arr.length-2 && y===1 && (arr[x-2][y].visited===false || arr[x][y+2].visited===false)) {
    return true;
    }
    // jobb alsó
else if (x===arr.length-2 && y===arr.length-2 && (arr[x-2][y].visited===false || arr[x][y-2].visited===false)) {
   return true;
    }
    //felső sor többi eleme
    else if (x===1 && y>1 && y<arr.length-2 && (arr[x+2][y].visited===false || arr[x][y+2].visited===false || arr[x][y-2].visited===false)) {
        return true;
    }
     //alsó sor többi eleme
     else if (x===arr.length-2 && y>1 && y<arr.length-2 && (arr[x-2][y].visited===false || arr[x][y+2].visited===false || arr[x][y-2].visited===false)) {
        return true;
    }
     //jobb oszlop többi eleme
     else if (y===1 && x>1 && x<arr.length-2 && (arr[x+2][y].visited===false || arr[x-2][y].visited===false || arr[x][y+2].visited===false)) {
        return true;
    }
    //bal oszlop többi eleme
    else if (y===arr.length-2 && x>1 && x<arr.length-2 && (arr[x+2][y].visited===false || arr[x-2][y].visited===false || arr[x][y-2].visited===false)) {
       return true;
    }
    //összes többi elem
    else if (y>1 && y<arr.length-2 && x>1 && x<arr.length-2 && (arr[x+2][y].visited===false || arr[x-2][y].visited===false || arr[x][y-2].visited===false || arr[x][y+2].visited===false)) {
        return true;
    } else {
return false;
}
  }
};
