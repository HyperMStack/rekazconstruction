import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-7G2PMLJV.js";
import {
  footerLinks,
  navLinks,
  websiteData
} from "/build/_shared/chunk-P7AIAZ7S.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-S2WJZX4F.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/layout/navbar/DesktopSubNav.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout\\\\navbar\\\\DesktopSubNav.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout\\navbar\\DesktopSubNav.jsx"
  );
  import.meta.hot.lastModified = "1713815158809.8516";
}
function DesktopSubNav({
  label,
  href,
  subLabel
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "block p-2 rounded-md hover:bg-orange-50 group/subItem", href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "transition-all duration-300 ease-in-out font-medium group-hover/subItem:text-orange-400", children: label }, void 0, false, {
        fileName: "app/components/layout/navbar/DesktopSubNav.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: subLabel }, void 0, false, {
        fileName: "app/components/layout/navbar/DesktopSubNav.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/navbar/DesktopSubNav.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fill-pink-400 transition-all duration-300 ease-in-out -translate-x-[10%] opacity-0 group-hover/subItem:opacity-100 group-hover/subItem:translate-x-0 justify-end items-center flex flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/svg/arrow-right.svg", alt: "go to link", className: "bg-pink-400  w-5 h-5" }, void 0, false, {
      fileName: "app/components/layout/navbar/DesktopSubNav.jsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/navbar/DesktopSubNav.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/navbar/DesktopSubNav.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/navbar/DesktopSubNav.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = DesktopSubNav;
var _c;
$RefreshReg$(_c, "DesktopSubNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/navbar/DesktopNav.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout\\\\navbar\\\\DesktopNav.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout\\navbar\\DesktopNav.jsx"
  );
  import.meta.hot.lastModified = "1713641541284.0806";
}
function DesktopNav({
  navItems
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4", children: navItems.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "group/navItem py-4 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        className: `p-2 text-base font-normal text-gray-100 hover:text-gray-300`,
        href: navItem.href ?? "#",
        children: navItem.label
      },
      void 0,
      false,
      {
        fileName: "app/components/layout/navbar/DesktopNav.jsx",
        lineNumber: 28,
        columnNumber: 13
      },
      this
    ),
    navItem.children && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "top-10 left-0  min-w-80 hidden absolute border-0 shadow-xl bg-white p-4 rounded-xl group-hover/navItem:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: navItem.children.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DesktopSubNav, { ...child }, child.label, false, {
      fileName: "app/components/layout/navbar/DesktopNav.jsx",
      lineNumber: 35,
      columnNumber: 50
    }, this)) }, void 0, false, {
      fileName: "app/components/layout/navbar/DesktopNav.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/layout/navbar/DesktopNav.jsx",
      lineNumber: 33,
      columnNumber: 34
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/navbar/DesktopNav.jsx",
    lineNumber: 27,
    columnNumber: 11
  }, this) }, navItem.label, false, {
    fileName: "app/components/layout/navbar/DesktopNav.jsx",
    lineNumber: 26,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/layout/navbar/DesktopNav.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = DesktopNav;
var _c2;
$RefreshReg$(_c2, "DesktopNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/navbar/MobileNavItem.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout\\\\navbar\\\\MobileNavItem.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout\\navbar\\MobileNavItem.jsx"
  );
  import.meta.hot.lastModified = "1713796254933.8042";
}
function MobileNavItem({
  label,
  children,
  href
}) {
  _s();
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: children && toggleCollapse, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "a",
      {
        href: href ?? "#",
        className: "py-2 flex justify-between items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-semibold text-white", children: label }, void 0, false, {
            fileName: "app/components/layout/navbar/MobileNavItem.jsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          children && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/svg/arrow-down.svg", alt: "open sub-title", className: `text-white w-6 h-6 ${isOpen ? "rotate-180" : ""} transition-all duration-200 ease-in-out` }, void 0, false, {
            fileName: "app/components/layout/navbar/MobileNavItem.jsx",
            lineNumber: 37,
            columnNumber: 22
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/layout/navbar/MobileNavItem.jsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `mt-0 ${isOpen ? "" : "hidden"} transition-opacity duration-1000 ease-linear`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col mt-2 pl-4 border-l border-l-gray-200 items-start text-white", children: children && children.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "py-2", href: child.href, children: child.label }, child.label, false, {
      fileName: "app/components/layout/navbar/MobileNavItem.jsx",
      lineNumber: 42,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/components/layout/navbar/MobileNavItem.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/navbar/MobileNavItem.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/navbar/MobileNavItem.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(MobileNavItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c3 = MobileNavItem;
var _c3;
$RefreshReg$(_c3, "MobileNavItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/navbar/MobileNav.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout\\\\navbar\\\\MobileNav.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout\\navbar\\MobileNav.jsx"
  );
  import.meta.hot.lastModified = "1713292975679.1196";
}
function MobileNav({
  navItems
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-black/50 backdrop-blur-sm p-4 mx-4 mt-6 rounded-md md:hidden ease-linear flex flex-col", children: navItems.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavItem, { ...navItem }, navItem.label, false, {
    fileName: "app/components/layout/navbar/MobileNav.jsx",
    lineNumber: 26,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/layout/navbar/MobileNav.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c4 = MobileNav;
var _c4;
$RefreshReg$(_c4, "MobileNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/Navbar.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout\\\\Navbar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout\\Navbar.jsx"
  );
  import.meta.hot.lastModified = "1713796065435.5693";
}
var Navbar = ({
  navItems,
  logo
}) => {
  _s2();
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute top-0 left-0 z-10 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-[60px] py-2 px-4 md:px-40 items-center relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 md:flex-auto -ml-2 flex md:hidden absolute top-3/4 translate-y-1/2 left-[10%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: toggleCollapse, className: "text-white hover:bg-transparent active:bg-transparent", children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "/images/svg/cross.svg", alt: "exit menu", className: "text-white" }, void 0, false, {
        fileName: "app/components/layout/Navbar.jsx",
        lineNumber: 38,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "/images/svg/menu.svg", alt: "menu" }, void 0, false, {
        fileName: "app/components/layout/Navbar.jsx",
        lineNumber: 38,
        columnNumber: 100
      }, this) }, void 0, false, {
        fileName: "app/components/layout/Navbar.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layout/Navbar.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 justify-center md:justify-start m-auto absolute md:static top-0 left-1/2 -translate-x-1/2 md:translate-x-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { className: "flex-1", href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: logo.dark, alt: "Rekaz-logo", className: "h-[140px] z-10" }, void 0, false, {
          fileName: "app/components/layout/Navbar.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Navbar.jsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 hidden md:flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DesktopNav, { navItems }, void 0, false, {
          fileName: "app/components/layout/Navbar.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Navbar.jsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hidden md:block flex-1" }, void 0, false, {
          fileName: "app/components/layout/Navbar.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Navbar.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/Navbar.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`, style: {
      maxHeight: isOpen ? "100vh" : "0",
      overflow: "hidden"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileNav, { navItems }, void 0, false, {
      fileName: "app/components/layout/Navbar.jsx",
      lineNumber: 56,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Navbar.jsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Navbar.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Navbar.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s2(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c5 = Navbar;
var _c5;
$RefreshReg$(_c5, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/Footer.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout\\\\Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout\\Footer.jsx"
  );
  import.meta.hot.lastModified = "1713800903987.8408";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("footer", { className: "text-black md:text-white text-sm font-semibold relative my-auto mt-8 md:-mt-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto flex flex-col md:flex-row items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-center md:text-left text-sm w-full", children: [
      "\xA9 2023",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "/", className: "hover:underline", children: websiteData.websiteName }, void 0, false, {
        fileName: "app/components/layout/Footer.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      ". All rights reserved."
    ] }, void 0, true, {
      fileName: "app/components/layout/Footer.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "md:w-2/5 flex flex-wrap gap-4 justify-around content-around my-4", children: footerLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: link.href, className: "hover:underline", children: link.label }, void 0, false, {
      fileName: "app/components/layout/Footer.jsx",
      lineNumber: 34,
      columnNumber: 15
    }, this) }, link.id, false, {
      fileName: "app/components/layout/Footer.jsx",
      lineNumber: 33,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/layout/Footer.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Footer.jsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/Footer.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c6 = Footer;
var _c6;
$RefreshReg$(_c6, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LayoutWrapper.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\LayoutWrapper.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\LayoutWrapper.jsx"
  );
  import.meta.hot.lastModified = "1713256069185.5532";
}
function LayoutWrapper({
  children,
  navItems,
  logo
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Navbar, { navItems, logo }, void 0, false, {
      fileName: "app/components/LayoutWrapper.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/components/LayoutWrapper.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LayoutWrapper.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c7 = LayoutWrapper;
var _c7;
$RefreshReg$(_c7, "LayoutWrapper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.jsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.jsx"
  );
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c8 = Layout;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LayoutWrapper, { logo: websiteData.logo, navItems: navLinks, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c22 = App;
var _c8;
var _c22;
$RefreshReg$(_c8, "Layout");
$RefreshReg$(_c22, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default
};
//# sourceMappingURL=/build/root-5CXRGVET.js.map
