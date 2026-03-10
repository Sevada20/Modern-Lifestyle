export interface SubmenuItemI {
  id: string;
  label: string;
  href: string;
}

export interface MenuItemI {
  id: string;
  label: string;
  href: string;
  submenu?: SubmenuItemI[];
}
