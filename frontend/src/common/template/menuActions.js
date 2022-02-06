export function setMenu(selected){
  //console.log("setMenu:", selected);
  return {
    type: 'MENU_SELECTED',
    payload: selected
  }
}