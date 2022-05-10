import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  /*{
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },*/

  // Admin Modules
  {
    path: "",
    title: "MENUITEMS.DASHBOARD.TEXT",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/dashboard/main",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD1",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/dashboard2",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD2",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {path: "",
    title: "Chiefs Services",
    moduleName: "chief-service",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu : [
      {
        path: "/admin/chief-service/chiefs-list",
        title: "Chief Service List",
        moduleName: "chief-service",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/chief-service/add-chiefs",
        title: "Add Chief Service",
        moduleName: "chief-service",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/chief-service/edit-chief-service",
        title: "Edit Chief Service ",
        moduleName: "chief-service",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/chief-service/chief-service-profile",
        title: "Chief Service Profile",
        moduleName: "chief-service",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ]
  },
  {
    path: "",
    title: "MENUITEMS.DOCTORS.TEXT",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: [""],
    submenu: [
      {
        path: "/admin/doctors/allDoctors",
        title: "MENUITEMS.DOCTORS.LIST.ALL-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/add-doctor",
        title: "MENUITEMS.DOCTORS.LIST.ADD-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/edit-doctor",
        title: "MENUITEMS.DOCTORS.LIST.EDIT-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/doctor-profile",
        title: "MENUITEMS.DOCTORS.LIST.PROFILE",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Devices",
    moduleName: "devices",
    iconType: "material-icons-two-tone",
    icon: "devices_other",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: [""],
    submenu: [
      {
        path: "/admin/devices/alldevices",
        title: "Devices List",
        moduleName: "devices",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/devices/add-devices",
        title: "Add Devices",
        moduleName: "devices",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.DEPARTMENTS.TEXT",
    moduleName: "departments",
    iconType: "material-icons-two-tone",
    icon: "group_work",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ROLE_ADMIN"],
    submenu: [
      {
        path: "/admin/departments/department-list",
        title: "MENUITEMS.DEPARTMENTS.LIST.DEPARTMENT-LIST",
        moduleName: "departments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/departments/add-department",
        title: "MENUITEMS.DEPARTMENTS.LIST.ADD-DEPARTMENT",
        moduleName: "departments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  // Chief Service Modules
  /*{
    path: "",
    title: "MENUITEMS.DOCTORS.TEXT",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Chiefs"],
    submenu: [
      {
        path: "/chiefs/doctors/allDoctors",
        title: "MENUITEMS.DOCTORS.LIST.ALL-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/chiefs/doctors/add-doctor",
        title: "MENUITEMS.DOCTORS.LIST.ADD-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/chiefs/doctors/edit-doctor",
        title: "MENUITEMS.DOCTORS.LIST.EDIT-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/chiefs/doctors/doctor-profile",
        title: "MENUITEMS.DOCTORS.LIST.PROFILE",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },*/
  /*{
    path: "",
    title: "Devices",
    moduleName: "devices",
    iconType: "material-icons-two-tone",
    icon: "devices_other",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ROLE_CHIEF_SERVICE"],
    submenu: [
      {
        path: "/chiefs/devices/alldevices",
        title: "Devices List",
        moduleName: "devices",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/chiefs/devices/add-devices",
        title: "Add Devices",
        moduleName: "devices",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.DEPARTMENTS.TEXT",
    moduleName: "departments",
    iconType: "material-icons-two-tone",
    icon: "group_work",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ROLE_CHIEF_SERVICE"],
    submenu: [
      {
        path: "/chiefs/departments/department-list",
        title: "MENUITEMS.DEPARTMENTS.LIST.DEPARTMENT-LIST",
        moduleName: "departments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/chiefs/departments/add-department",
        title: "MENUITEMS.DEPARTMENTS.LIST.ADD-DEPARTMENT",
        moduleName: "departments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  // Common Modules
  /*{
    path: "",
    title: "Authentication",
    moduleName: "authentication",
    iconType: "material-icons-two-tone",
    icon: "login",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/authentication/signin",
        title: "Sign In",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/signup",
        title: "Sign Up",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/forgot-password",
        title: "Forgot Password",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/locked",
        title: "Locked",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page404",
        title: "404 - Not Found",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page500",
        title: "500 - Server Error",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },*/
];