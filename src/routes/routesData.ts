interface NavBarInterface {
  title: string;
  path: string;
  url?: string;
  cName: string;
}

interface ActionRoutesInterface {
  [key: string]: NavBarInterface;
}

export const SIDEBAR_DATA: NavBarInterface[] = [
  {
    title: "Forms",
    path: "/",
    cName: "nav-text",
  },
];

export const ACTION_ROUTES: ActionRoutesInterface = {
  CREATE_FORM: {
    title: "Create New Form",
    path: "/create-form",
    cName: "link-tag",
  },
  PREVIEW_FORM: {
    title: "Form View",
    path: "/form-view/:id",
    url: "/form-view/",
    cName: "link-tag",
  },
};
