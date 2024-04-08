import type { CustomFlowbiteTheme } from "flowbite-react";

const customBadge: CustomFlowbiteTheme["badge"] = {
  root: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
    },
    size: {
      md: "p-2 text-md",
    },
  },
  icon: {
    size: {
      md: "w-4.5 h-4.5",
      lg: "w-5.5 h-5.5",
      xl: "w-6.5 h-6.5",
    },
  },
};

export default customBadge;
