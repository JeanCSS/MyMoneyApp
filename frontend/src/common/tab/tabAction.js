export function setTab(selected){ 
  return {
    type: 'TAB_SELECTED',
    payload: selected
  }
}

export function showTab(...tabIds){ 
  
  const tabsToShow = {};

  tabIds.forEach(e => {tabsToShow[e] = true});
  console.log('showTab ',tabsToShow);
  return {
    type: 'SHOW_TAB',
    payload: tabsToShow
  }
}
