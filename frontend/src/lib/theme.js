const customTheme = {
  button: {
    base: "group flex items-stretch items-center justify-center p-1 text-center font-medium relative focus:z-10 focus:outline-none",
    color: {
      info: "bg-accent hover:brightness-90 dark:focus:ring-secondary-dark",
    },
    outline: {
      color: {
        info: "p-0.5",
      },
      on: "flex justify-center bg-white transition-all duration-75 ease-in dark:bg-primary-dark w-full",
    },
  },
  navbar: {
    root: {
      base: "bg-white shadow-md px-2 py-2.5 dark:border-gray-700 dark:bg-secondary-dark sm:px-4",
    },
    link: {
      active: {
        on: "bg-accent text-white dark:text-white md:bg-transparent md:text-accent",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-accent md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
    },
    collapse: {
      list: "mt-4 flex text-center flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    },
  },
  card: {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-border-dark dark:bg-secondary-dark",
    },
  },
  spinner: {
    color: {
      info: "fill-accent",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          primary:
            "bg-gray-50 border-gray-300 text-gray-900 focus:border-accent focus:ring-accent dark:border-primary-dark dark:bg-secondary-dark dark:text-white dark:placeholder-gray-400 dark:focus:border-accent dark:focus:ring-accent",
        },
      },
    },
  },
  textarea: {
    colors: {
      primary:
        "bg-gray-50 border-gray-300 text-gray-900 focus:border-accent focus:ring-accent dark:border-primary-dark dark:bg-secondary-dark dark:text-white dark:placeholder-gray-400 dark:focus:border-accent dark:focus:ring-accent",
    },
  },
  tooltip: {
    target: "w-max",
    base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm w-max",
    style: {
      auto: "border bg-white text-gray-900 border-accent dark:bg-primary-dark dark:text-white",
    },
    arrow: {
      style: {
        auto: "border-b border-r bg-white dark:bg-primary-dark border-accent",
      },
    },
  },
  darkThemeToggle: {
    root: {
      base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-primary-dark ",
    },
  },
  footer: {
    root: {
      base: "w-full mt-auto bg-white shadow text-primary-dark dark:bg-secondary-dark md:flex md:items-center md:justify-between",
    },
    copyright: {
      base: "text-sm text-primary-dark dark:text-secondary-light sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1",
    },
    icon: {
      base: "text-primary-dark dark:text-secondary-light hover:text-accent dark:hover:text-accent",
      size: "h-5 w-5",
    },
  },
};

export default customTheme;
