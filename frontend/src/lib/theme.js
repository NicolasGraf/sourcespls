const customTheme = {
  button: {
    base: "group flex items-stretch items-center justify-center p-1 text-center font-medium relative focus:z-10",
    color: {
      info: "bg-accent dark:focus:ring-secondary-dark",
      failure: "hover:brightness-90 dark:focus:ring-secondary-dark",
    },
    outline: {
      color: {
        info: "p-0.5",
        failure:
          "p-[3px] dark:bg-primary-dark border-red-500 border dark:hover:outline-none",
      },
      on: "flex focus:outline-none justify-center bg-white transition-all duration-75 ease-in dark:bg-primary-dark w-full",
    },
  },
  navbar: {
    root: {
      base: "bg-white shadow-md px-2 py-2.5 dark:bg-secondary-dark sm:px-4",
    },
    link: {
      active: {
        on: "md:bg-transparent md:text-accent",
        off: "text-primary-dark dark:text-secondary-light dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-accent md:dark:hover:text-white",
      },
    },
    collapse: {
      list: "mt-4 gap-4 md:gap-0 flex text-center flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-primary-dark hover:bg-secondary-light dark:text-secondary-light dark:hover:bg-primary-dark md:hidden",
    },
  },
  card: {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-border-dark dark:bg-secondary-dark",
      children: "flex h-full flex-col justify-center gap-2 md:gap-4 p-4 md:p-6",
    },
  },
  spinner: {
    color: {
      info: "fill-accent",
      gray: "fill-primary-dark dark:fill-white dark:text-primary-dark",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          primary:
            "bg-gray-50 border-gray-300 text-gray-900 focus:border-accent focus:ring-accent dark:border-primary-dark dark:bg-secondary-dark dark:text-white dark:placeholder-secondary-light dark:focus:border-accent dark:focus:ring-accent",
        },
        sizes: {
          lg: "sm:text-md p-4 focus:pr-20",
        },
      },
    },
  },
  textarea: {
    base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm focus:pr-20 no-scrollbar",
    colors: {
      primary:
        "bg-gray-50 border-gray-300 text-gray-900 focus:border-accent focus:ring-accent dark:border-primary-dark dark:bg-secondary-dark dark:text-white dark:placeholder-secondary-light dark:focus:border-accent dark:focus:ring-accent",
    },
  },
  tooltip: {
    target: "max-w-screen",
    base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
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
      base: "rounded-lg p-2.5 text-sm text-primary-dark hover:bg-primary-light focus:outline-none dark:text-secondary-light dark:hover:bg-primary-dark ",
    },
  },
  footer: {
    root: {
      base: "w-full mt-auto bg-white shadow text-primary-dark dark:bg-secondary-dark md:flex md:items-center md:justify-between",
    },
    copyright: {
      base: "text-sm text-primary-dark dark:text-secondary-light sm:text-center",
      href: "ml-1 text-inherit hover:underline",
      span: "ml-1",
    },
    icon: {
      base: "text-primary-dark dark:text-secondary-light hover:text-accent dark:hover:text-accent",
      size: "h-5 w-5",
    },
  },
  accordion: {
    root: {
      base: "text-left text-primary-dark dark:text-primary-light divide-y overflow-hidden divide-accent border-accent dark:divide-accent dark:border-accent",
    },
    content: {
      base: "py-5 px-5 last:rounded-b-lg dark:bg-primary-dark first:rounded-t-lg",
    },
    title: {
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-2xl font-medium",
      flush: {
        off: "focus:ring-0 hover:bg-primary-light hover:dark:bg-secondary-dark",
      },
      open: {
        on: "bg-primary-light dark:bg-secondary-dark",
      },
    },
  },
  toast: {
    root: {
      base: "flex w-full max-w-md items-center rounded-lg bg-white px-4 py-3 text-primary-dark shadow dark:bg-primary-dark dark:text-primary-light border border-primary-dark dark:border-secondary-dark",
      closed: "opacity-0 ease-out",
    },
    toggle: {
      base: "ml-2 inline-flex h-8 w-8 rounded-lg p-1.5 dark:hover:bg-secondary-dark focus:bg-transparent focus:outline-none active:bg-transparent",
      icon: "h-5 w-5 shrink-0",
    },
  },
};

export default customTheme;
