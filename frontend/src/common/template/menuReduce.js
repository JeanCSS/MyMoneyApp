
const  INITIAL_STATE = {
  menu: {
    "Dasboard": {
      href: "/",
      "icon": "nav-icon fas fa-tachometer-alt",
      "badge": "",
    },
    "Cadastro": {
      href: "#",
      icon: "nav-icon fas fa-edit",
      badge: "",
      children: {
        "BillingCycle": {
          href: "/billingCycle",
          icon: "far fa-circle nav-icon",
          badge: "",
        }
      }
    },
    "Layout Options":{ 
      href: "#",
      icon: "nav-icon fas fa-copy",
      badge: "badge badge-success right",
      children: {
        "Fixed Layout": {
          href: "/fixed-layout",
          icon: "nav-icon far fa-circle text-danger",
          badge: "",
        },
        "Boxed Layout": {
          href: "/boxed-layout",
          icon: "nav-icon far fa-circle text-warning",
          badge: "",
        },
        "RTL Layout": {
          href: "/rtl-layout",
          icon: "nav-icon far fa-circle text-info",
          badge: "",
        }
      }
    }
  },
  selected: "nav-link"
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case "SHOW_MENU":
      return{
        ...state,
        visible: action.payload
      }
    case "MENU_SELECTED":
      //console.log("MENU_SELECTED:", action.payload);
      return{
        ...state,
        selected: action.payload
      }
    default:
      return state;
  }
}