const customTheme = {
  button: {
    base: "group flex items-stretch items-center justify-center p-1 text-center font-medium relative focus:z-10 focus:outline-none",
    color: {
      info: "bg-accent hover:brightness-90 dark:focus:ring-secondary-dark",
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
};

export default customTheme;
