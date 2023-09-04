/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    s = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } })
              );
          }, t);
      }
    },
    i = (e, i = 500) => (e.hidden ? s(e, i) : t(e, i)),
    n = !0,
    l = (e = 500) => {
      let t = document.querySelector("body");
      if (n) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (n) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, e);
      }
    };
  function a(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function o(e, t) {
    const s = Array.from(e).filter(function (e, s, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const i = {},
          n = s.dataset[t].split(",");
        (i.value = n[0]),
          (i.type = n[1] ? n[1].trim() : "max"),
          (i.item = s),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = (function (e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      })(i);
      const n = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const s = t.split(","),
              i = s[1],
              l = s[2],
              r = window.matchMedia(s[0]),
              a = e.filter(function (e) {
                if (e.value === i && e.type === l) return !0;
              });
            n.push({ itemsArray: a, matchMedia: r });
          }),
          n
        );
    }
  }
  const d = document.querySelectorAll("[data-scroll]");
  function c() {
    console.log("scroll"),
      d.forEach((e, t) => {
        e.getBoundingClientRect().top < 0.8 * window.innerHeight
          ? e.classList.add("_active")
          : e.classList.remove("_active");
      });
  }
  window.addEventListener("load", c), window.addEventListener("scroll", c);
  const p = document.querySelectorAll("select"),
    u = {
      selectClasses: {
        classSelect: "select",
        classSelectBody: "select__body",
        classSelectTitle: "select__title",
        classSelectValue: "select__value",
        classSelectLabel: "select__label",
        classSelectInput: "select__input",
        classSelectText: "select__text",
        classSelectOptions: "select__options",
        classSelectOptionsScroll: "select__scroll",
        classSelectOption: "select__option",
        classSelectContent: "select__content",
        classSelectRow: "select__row",
        classSelectData: "select__asset",
        classSelectDisabled: "_select-disabled",
        classSelectTag: "_select-tag",
        classSelectOpen: "_select-open",
        classSelectActive: "_select-active",
        classSelectFocus: "_select-focus",
        classSelectMultiple: "_select-multiple",
        classSelectCheckBox: "_select-checkbox",
        classSelectOptionSelected: "_select-selected",
      },
      getSelectClass: (e) => `.${e}`,
      getSelectElement: (e, t) => ({
        originalSelect: e.querySelector("select"),
        selectElement: e.querySelector(u.getSelectClass(t)),
      }),
      selectsInit(e) {
        e.forEach((e, t) => {
          (e.dataset.id = t), u.selectInit(e);
        }),
          document.addEventListener("click", u.selectsActions),
          document.addEventListener("keydown", u.selectsActions),
          document.addEventListener("focusin", u.selectsActions),
          document.addEventListener("focusout", u.selectsActions);
      },
      selectInit(e) {
        let t = document.createElement("div");
        if (
          (t.classList.add(u.selectClasses.classSelect),
          e.parentNode.insertBefore(t, e),
          t.appendChild(e),
          (e.hidden = !0),
          t.insertAdjacentHTML(
            "beforeend",
            `<div class="${u.selectClasses.classSelectBody}"><div hidden class="${u.selectClasses.classSelectOptions}"></div></div>`
          ),
          u.selectBuild(e),
          u.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = u.getSelectPlaceholder(e).value),
            u.getSelectPlaceholder(e).label.show))
        ) {
          u.getSelectElement(
            t,
            u.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${u.selectClasses.classSelectLabel}">${
              u.getSelectPlaceholder(e).label.text
                ? u.getSelectPlaceholder(e).label.text
                : u.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", u.selectChange);
      },
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(u.selectClasses.classSelectMultiple)
            : t.classList.remove(u.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(u.selectClasses.classSelectCheckBox)
            : t.classList.remove(u.selectClasses.classSelectCheckBox),
          u.setSelectTitleValue(t, e),
          u.setOptions(t, e),
          e.hasAttribute("data-search") && u.searchActions(t),
          e.hasAttribute("data-open") && u.selectAction(t),
          u.selectDisabled(t, e);
      },
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(u.getSelectClass(u.selectClasses.classSelect)) ||
          t.closest(u.getSelectClass(u.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${u.selectClasses.classSelect}[data-id="${
                    t.closest(u.getSelectClass(u.selectClasses.classSelectTag))
                      .dataset.selectId
                  }"]`
                ),
            n = u.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (t.closest(u.getSelectClass(u.selectClasses.classSelectTag))) {
                const e = t.closest(
                    u.getSelectClass(u.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${u.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                u.optionAction(i, n, s);
              } else if (
                t.closest(u.getSelectClass(u.selectClasses.classSelectTitle))
              )
                u.selectAction(i);
              else if (
                t.closest(u.getSelectClass(u.selectClasses.classSelectOption))
              ) {
                const e = t.closest(
                  u.getSelectClass(u.selectClasses.classSelectOption)
                );
                u.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(u.getSelectClass(u.selectClasses.classSelect)) &&
                ("focusin" === s
                  ? i.classList.add(u.selectClasses.classSelectFocus)
                  : i.classList.remove(u.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && u.selectsСlose();
        } else u.selectsСlose();
      },
      selectsСlose() {
        const e = document.querySelectorAll(
          `${u.getSelectClass(u.selectClasses.classSelect)}${u.getSelectClass(
            u.selectClasses.classSelectOpen
          )}`
        );
        e.length &&
          e.forEach((e) => {
            u.selectAction(e);
          });
      },
      selectAction(e) {
        const t = u.getSelectElement(e).originalSelect,
          s = u.getSelectElement(
            e,
            u.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(u.selectClasses.classSelectOpen),
          i(s, t.dataset.speed));
      },
      setSelectTitleValue(e, t) {
        const s = u.getSelectElement(
            e,
            u.selectClasses.classSelectBody
          ).selectElement,
          i = u.getSelectElement(
            e,
            u.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", u.getSelectTitleValue(e, t));
      },
      getSelectTitleValue(e, t) {
        let s = u.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = u
              .getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${u.getSelectElementContent(t)}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          u.getSelectedOptionsData(t).values.length
            ? e.classList.add(u.selectClasses.classSelectActive)
            : e.classList.remove(u.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${u.selectClasses.classSelectTitle}"><span class="${u.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${u.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            u.getSelectedOptionsData(t).elements.length &&
            u.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${u.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${u.selectClasses.classSelectTitle}"><span class="${u.selectClasses.classSelectValue}"><span class="${u.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      },
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${u.selectClasses.classSelectRow}">` : ""),
          (i += t ? `<span class="${u.selectClasses.classSelectData}">` : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t ? `<span class="${u.selectClasses.classSelectText}">` : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      },
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      },
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => u.getSelectElementContent(e)),
          }
        );
      },
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((u.getSelectPlaceholder(e) && !u.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${u.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += u.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      },
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${u.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "";
        let l = "";
        return (
          (l += `<button ${i} class="${u.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (l += u.getSelectElementContent(e)),
          (l += "</button>"),
          l
        );
      },
      setOptions(e, t) {
        u.getSelectElement(
          e,
          u.selectClasses.classSelectOptions
        ).selectElement.innerHTML = u.getOptions(t);
      },
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(u.selectClasses.classSelectOptionSelected);
          u.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            u.getSelectClass(u.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${u.getSelectClass(u.selectClasses.classSelectOption)}[hidden]`
            ) &&
              (e.querySelector(
                `${u.getSelectClass(u.selectClasses.classSelectOption)}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            u.selectAction(e);
        u.setSelectTitleValue(e, t), u.setSelectChange(t);
      },
      selectChange(e) {
        u.selectBuild(e.target), u.setSelectChange(e.target);
      },
      setSelectChange(e) {
        const t = e.parentElement;
        u.selectCallback(t, e);
      },
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(u.selectClasses.classSelectDisabled),
            (u.getSelectElement(
              e,
              u.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(u.selectClasses.classSelectDisabled),
            (u.getSelectElement(
              e,
              u.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      },
      searchActions(e) {
        u.getSelectElement(e).originalSelect;
        const t = u.getSelectElement(
            e,
            u.selectClasses.classSelectInput
          ).selectElement,
          s = u.getSelectElement(
            e,
            u.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${u.selectClasses.classSelectOption}`);
        t.addEventListener("input", function (n) {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && u.selectAction(e);
        });
      },
      selectCallback(e, t) {},
      setLogging(e) {
        console.log(`[select - info] ${e} `);
      },
    };
  function h(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function g(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : h(t[s]) && h(e[s]) && Object.keys(t[s]).length > 0 && g(e[s], t[s]);
    });
  }
  p.length
    ? u.selectsInit(p)
    : u.setLogging("Нет ни одного select, модуль можно отключить"),
    document.addEventListener("DOMContentLoaded", function () {
      var e = function (e) {
          var t = e.target,
            s = t.dataset.phoneClear,
            i = t.dataset.phonePattern,
            n = i || "+7(___) ___-__-__",
            l = 0,
            r = n.replace(/\D/g, ""),
            a = e.target.value.replace(/\D/g, "");
          "false" !== s &&
          "blur" === e.type &&
          a.length < n.match(/([\_\d])/g).length
            ? (e.target.value = "")
            : (r.length >= a.length && (a = r),
              (e.target.value = n.replace(/./g, function (e) {
                return /[_\d]/.test(e) && l < a.length
                  ? a.charAt(l++)
                  : l >= a.length
                  ? ""
                  : e;
              })));
        },
        t = document.querySelectorAll("[data-phone-pattern]");
      for (let s of t)
        for (let t of ["input", "blur", "focus"]) s.addEventListener(t, e);
    });
  const m = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function f() {
    const e = "undefined" != typeof document ? document : {};
    return g(e, m), e;
  }
  const v = {
    document: m,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function y() {
    const e = "undefined" != typeof window ? window : {};
    return g(e, v), e;
  }
  class b extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function S(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...S(e)) : t.push(e);
      }),
      t
    );
  }
  function C(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function w(e, t) {
    const s = y(),
      i = f();
    let n = [];
    if (!t && e instanceof b) return e;
    if (!e) return new b(n);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) s.push(i[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof b) return e;
      n = e;
    }
    return new b(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  w.fn = b.prototype;
  const x = "resize scroll".split(" ");
  function T(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          x.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : w(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  T("click"),
    T("blur"),
    T("focus"),
    T("focusin"),
    T("focusout"),
    T("keyup"),
    T("keydown"),
    T("keypress"),
    T("submit"),
    T("change"),
    T("mousedown"),
    T("mousemove"),
    T("mouseup"),
    T("mouseenter"),
    T("mouseleave"),
    T("mouseout"),
    T("mouseover"),
    T("touchstart"),
    T("touchend"),
    T("touchmove"),
    T("resize"),
    T("scroll");
  const E = {
    addClass: function (...e) {
      const t = S(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = S(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = S(e.map((e) => e.split(" ")));
      return (
        C(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = S(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, i, n] = e;
      function l(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), w(t).is(s))) i.apply(t, n);
        else {
          const e = w(t).parents();
          for (let t = 0; t < e.length; t += 1)
            w(e[t]).is(s) && i.apply(e[t], n);
        }
      }
      function r(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const a = t.split(" ");
      let o;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (o = 0; o < a.length; o += 1) {
            const e = a[o];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: l }),
              t.addEventListener(e, l, n);
          }
        else
          for (o = 0; o < a.length; o += 1) {
            const e = a[o];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, i, n] = e;
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const l = t.split(" ");
      for (let e = 0; e < l.length; e += 1) {
        const t = l[e];
        for (let e = 0; e < this.length; e += 1) {
          const l = this[e];
          let r;
          if (
            (!s && l.dom7Listeners
              ? (r = l.dom7Listeners[t])
              : s && l.dom7LiveListeners && (r = l.dom7LiveListeners[t]),
            r && r.length)
          )
            for (let e = r.length - 1; e >= 0; e -= 1) {
              const s = r[e];
              (i && s.listener === i) ||
              (i &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === i)
                ? (l.removeEventListener(t, s.proxyListener, n), r.splice(e, 1))
                : i ||
                  (l.removeEventListener(t, s.proxyListener, n),
                  r.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = y(),
        s = e[0].split(" "),
        i = e[1];
      for (let n = 0; n < s.length; n += 1) {
        const l = s[n];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(l, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(s),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = y();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = y(),
          t = f(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          l = s.clientTop || n.clientTop || 0,
          r = s.clientLeft || n.clientLeft || 0,
          a = s === e ? e.scrollY : s.scrollTop,
          o = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + a - l, left: i.left + o - r };
      }
      return null;
    },
    css: function (e, t) {
      const s = y();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = y(),
        s = f(),
        i = this[0];
      let n, l;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = w(e), l = 0; l < n.length; l += 1) if (n[l] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof b) {
        for (n = e.nodeType ? [e] : e, l = 0; l < n.length; l += 1)
          if (n[l] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return w([]);
      if (e < 0) {
        const s = t + e;
        return w(s < 0 ? [] : [this[s]]);
      }
      return w([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = f();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = s.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof b)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = f();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof b)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(e)
            ? w([this[0].nextElementSibling])
            : w([])
          : this[0].nextElementSibling
          ? w([this[0].nextElementSibling])
          : w([])
        : w([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return w([]);
      for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? w(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return w(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && w(t.previousElementSibling).is(e)
            ? w([t.previousElementSibling])
            : w([])
          : t.previousElementSibling
          ? w([t.previousElementSibling])
          : w([]);
      }
      return w([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return w([]);
      for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? w(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return w(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? w(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return w(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i; ) e ? w(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return w(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? w([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return w(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let s = 0; s < i.length; s += 1)
          (e && !w(i[s]).is(e)) || t.push(i[s]);
      }
      return w(t);
    },
    filter: function (e) {
      return w(C(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(E).forEach((e) => {
    Object.defineProperty(w.fn, e, { value: E[e], writable: !0 });
  });
  const I = w;
  function L(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function k() {
    return Date.now();
  }
  function A(e, t) {
    void 0 === t && (t = "x");
    const s = y();
    let i, n, l;
    const r = (function (e) {
      const t = y();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = r.transform || r.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (l = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((l =
            r.MozTransform ||
            r.OTransform ||
            r.MsTransform ||
            r.msTransform ||
            r.transform ||
            r
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = l.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? l.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? l.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function M(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function O(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function $() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != i && !O(i)) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, n = s.length; t < n; t += 1) {
          const n = s[t],
            l = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== l &&
            l.enumerable &&
            (M(e[n]) && M(i[n])
              ? i[n].__swiper__
                ? (e[n] = i[n])
                : $(e[n], i[n])
              : !M(e[n]) && M(i[n])
              ? ((e[n] = {}), i[n].__swiper__ ? (e[n] = i[n]) : $(e[n], i[n]))
              : (e[n] = i[n]));
        }
      }
    }
    return e;
  }
  function P(e, t, s) {
    e.style.setProperty(t, s);
  }
  function _(e) {
    let { swiper: t, targetPosition: s, side: i } = e;
    const n = y(),
      l = -t.translate;
    let r,
      a = null;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(t.cssModeFrameID);
    const d = s > l ? "next" : "prev",
      c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (r = new Date().getTime()), null === a && (a = r);
        const e = Math.max(Math.min((r - a) / o, 1), 0),
          d = 0.5 - Math.cos(e * Math.PI) / 2;
        let u = l + d * (s - l);
        if ((c(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), c(u, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: u });
            }),
            void n.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = n.requestAnimationFrame(p);
      };
    p();
  }
  let D, z, B;
  function G() {
    return (
      D ||
        (D = (function () {
          const e = y(),
            t = f();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      D
    );
  }
  function H(e) {
    return (
      void 0 === e && (e = {}),
      z ||
        (z = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = G(),
            i = y(),
            n = i.navigator.platform,
            l = t || i.navigator.userAgent,
            r = { ios: !1, android: !1 },
            a = i.screen.width,
            o = i.screen.height,
            d = l.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = l.match(/(iPad).*OS\s([\d_]+)/);
          const p = l.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === n;
          let g = "MacIntel" === n;
          return (
            !c &&
              g &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${o}`) >= 0 &&
              ((c = l.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (g = !1)),
            d && !h && ((r.os = "android"), (r.android = !0)),
            (c || u || p) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      z
    );
  }
  function N() {
    return (
      B ||
        (B = (function () {
          const e = y();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      B
    );
  }
  const F = {
    on(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      function n() {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var s = arguments.length, l = new Array(s), r = 0; r < s; r++)
          l[r] = arguments[r];
        t.apply(i, l);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners) return e;
      let t, s, i;
      for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++)
        l[r] = arguments[r];
      "string" == typeof l[0] || Array.isArray(l[0])
        ? ((t = l[0]), (s = l.slice(1, l.length)), (i = e))
        : ((t = l[0].events), (s = l[0].data), (i = l[0].context || e)),
        s.unshift(i);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(i, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(i, s);
              });
        }),
        e
      );
    },
  };
  const V = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        { $wrapperEl: n, size: l, rtlTranslate: r, wrongRTL: a } = e,
        o = e.virtual && i.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        g = [];
      let m = i.slidesOffsetBefore;
      "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
      let f = i.slidesOffsetAfter;
      "function" == typeof f && (f = i.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        y = e.slidesGrid.length;
      let b = i.spaceBetween,
        S = -m,
        C = 0,
        w = 0;
      if (void 0 === l) return;
      "string" == typeof b &&
        b.indexOf("%") >= 0 &&
        (b = (parseFloat(b.replace("%", "")) / 100) * l),
        (e.virtualSize = -b),
        r
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (P(e.wrapperEl, "--swiper-centered-offset-before", ""),
          P(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const x = i.grid && i.grid.rows > 1 && e.grid;
      let T;
      x && e.grid.initSlides(p);
      const E =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < p; n += 1) {
        T = 0;
        const r = c.eq(n);
        if (
          (x && e.grid.updateSlide(n, r, p, t), "none" !== r.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            E && (c[n].style[t("width")] = "");
            const l = getComputedStyle(r[0]),
              a = r[0].style.transform,
              o = r[0].style.webkitTransform;
            if (
              (a && (r[0].style.transform = "none"),
              o && (r[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              T = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
            else {
              const e = s(l, "width"),
                t = s(l, "padding-left"),
                i = s(l, "padding-right"),
                n = s(l, "margin-left"),
                a = s(l, "margin-right"),
                o = l.getPropertyValue("box-sizing");
              if (o && "border-box" === o) T = e + n + a;
              else {
                const { clientWidth: s, offsetWidth: l } = r[0];
                T = e + t + i + n + a + (l - s);
              }
            }
            a && (r[0].style.transform = a),
              o && (r[0].style.webkitTransform = o),
              i.roundLengths && (T = Math.floor(T));
          } else
            (T = (l - (i.slidesPerView - 1) * b) / i.slidesPerView),
              i.roundLengths && (T = Math.floor(T)),
              c[n] && (c[n].style[t("width")] = `${T}px`);
          c[n] && (c[n].swiperSlideSize = T),
            g.push(T),
            i.centeredSlides
              ? ((S = S + T / 2 + C / 2 + b),
                0 === C && 0 !== n && (S = S - l / 2 - b),
                0 === n && (S = S - l / 2 - b),
                Math.abs(S) < 0.001 && (S = 0),
                i.roundLengths && (S = Math.floor(S)),
                w % i.slidesPerGroup == 0 && u.push(S),
                h.push(S))
              : (i.roundLengths && (S = Math.floor(S)),
                (w - Math.min(e.params.slidesPerGroupSkip, w)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(S),
                h.push(S),
                (S = S + T + b)),
            (e.virtualSize += T + b),
            (C = T),
            (w += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, l) + f),
        r &&
          a &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        x && e.grid.updateWrapperSize(T, u, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let n = u[s];
          i.roundLengths && (n = Math.floor(n)),
            u[s] <= e.virtualSize - l && t.push(n);
        }
        (u = t),
          Math.floor(e.virtualSize - l) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - l);
      }
      if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
          [s]: `${b}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        g.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - l;
        u = u.map((e) => (e < 0 ? -m : e > t ? t + f : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (g.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < l)
        ) {
          const t = (l - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: g,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        P(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          P(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - g[g.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== y && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.$el.hasClass(t);
        p <= i.maxBackfaceHiddenSlides
          ? s || e.$el.addClass(t)
          : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        l = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const r = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(r(e));
          }
      else s.push(r(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          l = e > l ? e : l;
        }
      (l || 0 === l) && t.$wrapperEl.css("height", `${l}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: l } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let r = -e;
      n && (r = e),
        i.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const a = i[e];
        let o = a.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
        const d =
            (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (a.swiperSlideSize + s.spaceBetween),
          c =
            (r - l[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (a.swiperSlideSize + s.spaceBetween),
          p = -(r - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(a),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(s.slideVisibleClass)),
          (a.progress = n ? -d : d),
          (a.originalProgress = n ? -c : c);
      }
      t.visibleSlides = I(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: l, isEnd: r } = t;
      const a = l,
        o = r;
      0 === i
        ? ((n = 0), (l = !0), (r = !0))
        : ((n = (e - t.minTranslate()) / i), (l = n <= 0), (r = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: l, isEnd: r }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        l && !a && t.emit("reachBeginning toEdge"),
        r && !o && t.emit("reachEnd toEdge"),
        ((a && !l) || (o && !r)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: l,
        } = e,
        r = e.virtual && s.virtual.enabled;
      let a;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (a = r
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        a.addClass(s.slideActiveClass),
        s.loop &&
          (a.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : i
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let o = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let d = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: n,
          params: l,
          activeIndex: r,
          realIndex: a,
          snapIndex: o,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (c = e)
              : s >= i[e] && s < i[e + 1] && (c = e + 1)
            : s >= i[e] && (c = e);
        l.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (n.indexOf(s) >= 0) d = n.indexOf(s);
      else {
        const e = Math.min(l.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / l.slidesPerGroup);
      }
      if ((d >= n.length && (d = n.length - 1), c === r))
        return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: r,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = I(e).closest(`.${s.slideClass}`)[0];
      let n,
        l = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (l = !0), (n = e);
            break;
          }
      if (!i || !l)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              I(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const q = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let l = A(n[0], e);
      return s && (l = -l), l || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: i,
          params: n,
          $wrapperEl: l,
          wrapperEl: r,
          progress: a,
        } = s;
      let o,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = i ? -e : e) : (c = e),
        n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        n.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -d
              : -c)
          : n.virtualTranslate ||
            l.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const p = s.maxTranslate() - s.minTranslate();
      (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
        o !== a && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, i, n) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === i && (i = !0);
      const l = this,
        { params: r, wrapperEl: a } = l;
      if (l.animating && r.preventInteractionOnTransition) return !1;
      const o = l.minTranslate(),
        d = l.maxTranslate();
      let c;
      if (
        ((c = i && e > o ? o : i && e < d ? d : e),
        l.updateProgress(c),
        r.cssMode)
      ) {
        const e = l.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!l.support.smoothScroll)
            return (
              _({ swiper: l, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (l.setTransition(0),
            l.setTranslate(c),
            s &&
              (l.emit("beforeTransitionStart", t, n), l.emit("transitionEnd")))
          : (l.setTransition(t),
            l.setTranslate(c),
            s &&
              (l.emit("beforeTransitionStart", t, n),
              l.emit("transitionStart")),
            l.animating ||
              ((l.animating = !0),
              l.onTranslateToWrapperTransitionEnd ||
                (l.onTranslateToWrapperTransitionEnd = function (e) {
                  l &&
                    !l.destroyed &&
                    e.target === this &&
                    (l.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      l.onTranslateToWrapperTransitionEnd
                    ),
                    l.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      l.onTranslateToWrapperTransitionEnd
                    ),
                    (l.onTranslateToWrapperTransitionEnd = null),
                    delete l.onTranslateToWrapperTransitionEnd,
                    s && l.emit("transitionEnd"));
                }),
              l.$wrapperEl[0].addEventListener(
                "transitionend",
                l.onTranslateToWrapperTransitionEnd
              ),
              l.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                l.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function j(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
    const { activeIndex: l, previousIndex: r } = t;
    let a = i;
    if (
      (a || (a = l > r ? "next" : l < r ? "prev" : "reset"),
      t.emit(`transition${n}`),
      s && l !== r)
    ) {
      if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
      t.emit(`slideChangeTransition${n}`),
        "next" === a
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`);
    }
  }
  const W = {
    slideTo: function (e, t, s, i, n) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const l = this;
      let r = e;
      r < 0 && (r = 0);
      const {
        params: a,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: g,
      } = l;
      if ((l.animating && a.preventInteractionOnTransition) || (!g && !i && !n))
        return !1;
      const m = Math.min(l.params.slidesPerGroupSkip, r);
      let f = m + Math.floor((r - m) / l.params.slidesPerGroup);
      f >= o.length && (f = o.length - 1),
        (p || a.initialSlide || 0) === (c || 0) &&
          s &&
          l.emit("beforeSlideChangeStart");
      const v = -o[f];
      if ((l.updateProgress(v), a.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (r = e)
              : t >= s && t < i && (r = e + 1)
            : t >= s && (r = e);
        }
      if (l.initialized && r !== p) {
        if (!l.allowSlideNext && v < l.translate && v < l.minTranslate())
          return !1;
        if (
          !l.allowSlidePrev &&
          v > l.translate &&
          v > l.maxTranslate() &&
          (p || 0) !== r
        )
          return !1;
      }
      let y;
      if (
        ((y = r > p ? "next" : r < p ? "prev" : "reset"),
        (u && -v === l.translate) || (!u && v === l.translate))
      )
        return (
          l.updateActiveIndex(r),
          a.autoHeight && l.updateAutoHeight(),
          l.updateSlidesClasses(),
          "slide" !== a.effect && l.setTranslate(v),
          "reset" !== y && (l.transitionStart(s, y), l.transitionEnd(s, y)),
          !1
        );
      if (a.cssMode) {
        const e = l.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = l.virtual && l.params.virtual.enabled;
          t &&
            ((l.wrapperEl.style.scrollSnapType = "none"),
            (l._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (l.wrapperEl.style.scrollSnapType = ""),
                  (l._swiperImmediateVirtual = !1);
              });
        } else {
          if (!l.support.smoothScroll)
            return (
              _({ swiper: l, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        l.setTransition(t),
        l.setTranslate(v),
        l.updateActiveIndex(r),
        l.updateSlidesClasses(),
        l.emit("beforeTransitionStart", t, i),
        l.transitionStart(s, y),
        0 === t
          ? l.transitionEnd(s, y)
          : l.animating ||
            ((l.animating = !0),
            l.onSlideToWrapperTransitionEnd ||
              (l.onSlideToWrapperTransitionEnd = function (e) {
                l &&
                  !l.destroyed &&
                  e.target === this &&
                  (l.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    l.onSlideToWrapperTransitionEnd
                  ),
                  l.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    l.onSlideToWrapperTransitionEnd
                  ),
                  (l.onSlideToWrapperTransitionEnd = null),
                  delete l.onSlideToWrapperTransitionEnd,
                  l.transitionEnd(s, y));
              }),
            l.$wrapperEl[0].addEventListener(
              "transitionend",
              l.onSlideToWrapperTransitionEnd
            ),
            l.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              l.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0);
      const n = this;
      let l = e;
      return n.params.loop && (l += n.loopedSlides), n.slideTo(l, t, s, i);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        { animating: n, enabled: l, params: r } = i;
      if (!l) return i;
      let a = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a;
      if (r.loop) {
        if (n && r.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return r.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        {
          params: n,
          animating: l,
          snapGrid: r,
          slidesGrid: a,
          rtlTranslate: o,
          enabled: d,
        } = i;
      if (!d) return i;
      if (n.loop) {
        if (l && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(o ? i.translate : -i.translate),
        u = r.map((e) => c(e));
      let h = r[u.indexOf(p) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        r.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let g = 0;
      if (
        (void 0 !== h &&
          ((g = a.indexOf(h)),
          g < 0 && (g = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
            (g = Math.max(g, 0)))),
        n.rewind && i.isBeginning)
      ) {
        const n =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(n, e, t, s);
      }
      return i.slideTo(g, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, i) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === i && (i = 0.5);
      const n = this;
      let l = n.activeIndex;
      const r = Math.min(n.params.slidesPerGroupSkip, l),
        a = r + Math.floor((l - r) / n.params.slidesPerGroup),
        o = n.rtlTranslate ? n.translate : -n.translate;
      if (o >= n.snapGrid[a]) {
        const e = n.snapGrid[a];
        o - e > (n.snapGrid[a + 1] - e) * i && (l += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[a - 1];
        o - e <= (n.snapGrid[a] - e) * i && (l -= n.params.slidesPerGroup);
      }
      return (
        (l = Math.max(l, 0)),
        (l = Math.min(l, n.slidesGrid.length - 1)),
        n.slideTo(l, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        l = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(I(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? l < e.loopedSlides - i / 2 ||
              l > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (l = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                L(() => {
                  e.slideTo(l);
                }))
              : e.slideTo(l)
            : l > e.slides.length - i
            ? (e.loopFix(),
              (l = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              L(() => {
                e.slideTo(l);
              }))
            : e.slideTo(l);
      } else e.slideTo(l);
    },
  };
  const R = {
    loopCreate: function () {
      const e = this,
        t = f(),
        { params: s, $wrapperEl: i } = e,
        n = i.children().length > 0 ? I(i.children()[0].parentNode) : i;
      n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let l = n.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (l.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = I(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            n.append(e);
          }
          l = n.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = l.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > l.length && (e.loopedSlides = l.length);
      const r = [],
        a = [];
      l.each((t, s) => {
        const i = I(t);
        s < e.loopedSlides && a.push(t),
          s < l.length && s >= l.length - e.loopedSlides && r.push(t),
          i.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < a.length; e += 1)
        n.append(I(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = r.length - 1; e >= 0; e -= 1)
        n.prepend(I(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: l,
        snapGrid: r,
        rtlTranslate: a,
      } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -r[t] - e.getTranslate();
      if (t < i) {
        (o = s.length - 3 * i + t), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((a ? -e.translate : e.translate) - d);
      } else if (t >= s.length - i) {
        (o = -s.length + t + i), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((a ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = l), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function Y(e) {
    const t = this,
      s = f(),
      i = y(),
      n = t.touchEventsData,
      { params: l, touches: r, enabled: a } = t;
    if (!a) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let d = I(o.target);
    if ("wrapper" === l.touchEventsTarget && !d.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === o.type),
      !n.isTouchEvent && "which" in o && 3 === o.which)
    )
      return;
    if (!n.isTouchEvent && "button" in o && o.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass &&
      "" !== l.noSwipingClass &&
      o.target &&
      o.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (d = I(e.path[0]));
    const c = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      p = !(!o.target || !o.target.shadowRoot);
    if (
      l.noSwiping &&
      (p
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                return s && s !== f() && s !== y()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t)
            );
          })(c, o.target)
        : d.closest(c)[0])
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !d.closest(l.swipeHandler)[0]) return;
    (r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
      (r.currentY =
        "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
    const u = r.currentX,
      h = r.currentY,
      g = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      m = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (g && (u <= m || u >= i.innerWidth - m)) {
      if ("prevent" !== g) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (r.startX = u),
      (r.startY = h),
      (n.touchStartTime = k()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== o.type)
    ) {
      let e = !0;
      d.is(n.focusableElements) &&
        ((e = !1), "SELECT" === d[0].nodeName && (n.isTouched = !1)),
        s.activeElement &&
          I(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== d[0] &&
          s.activeElement.blur();
      const i = e && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !i) ||
        d[0].isContentEditable ||
        o.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", o);
  }
  function X(e) {
    const t = f(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: l, rtlTranslate: r, enabled: a } = s;
    if (!a) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", o)
      );
    if (i.isTouchEvent && "touchmove" !== o.type) return;
    const d =
        "touchmove" === o.type &&
        o.targetTouches &&
        (o.targetTouches[0] || o.changedTouches[0]),
      c = "touchmove" === o.type ? d.pageX : o.pageX,
      p = "touchmove" === o.type ? d.pageY : o.pageY;
    if (o.preventedByNestedSwiper) return (l.startX = c), void (l.startY = p);
    if (!s.allowTouchMove)
      return (
        I(o.target).is(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(l, { startX: c, startY: p, currentX: c, currentY: p }),
          (i.touchStartTime = k()))
        )
      );
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (p < l.startY && s.translate <= s.maxTranslate()) ||
          (p > l.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (c < l.startX && s.translate <= s.maxTranslate()) ||
        (c > l.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      o.target === t.activeElement &&
      I(o.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return;
    (l.currentX = c), (l.currentY = p);
    const u = l.currentX - l.startX,
      h = l.currentY - l.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && l.currentY === l.startY) ||
      (s.isVertical() && l.currentX === l.startX)
        ? (i.isScrolling = !1)
        : u * u + h * h >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", o),
      void 0 === i.startMoving &&
        ((l.currentX === l.startX && l.currentY === l.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && o.cancelable && o.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && o.stopPropagation(),
      i.isMoved ||
        (n.loop && !n.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", o)),
      s.emit("sliderMove", o),
      (i.isMoved = !0);
    let g = s.isHorizontal() ? u : h;
    (l.diff = g),
      (g *= n.touchRatio),
      r && (g = -g),
      (s.swipeDirection = g > 0 ? "prev" : "next"),
      (i.currentTranslate = g + i.startTranslate);
    let m = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      g > 0 && i.currentTranslate > s.minTranslate()
        ? ((m = !1),
          n.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + g) ** v))
        : g < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((m = !1),
          n.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - g) ** v)),
      m && (o.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(g) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (i.currentTranslate = i.startTranslate),
          void (l.diff = s.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function U(e) {
    const t = this,
      s = t.touchEventsData,
      { params: i, touches: n, rtlTranslate: l, slidesGrid: r, enabled: a } = t;
    if (!a) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = k(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit("tap click", o),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o);
    }
    if (
      ((s.lastClickTime = k()),
      L(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let p;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (p = i.followFinger
        ? l
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < r.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== r[e + t]
        ? p >= r[e] && p < r[e + t] && ((u = e), (h = r[e + t] - r[e]))
        : p >= r[e] && ((u = e), (h = r[r.length - 1] - r[r.length - 2]));
    }
    let g = null,
      m = null;
    i.rewind &&
      (t.isBeginning
        ? (m =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const f = (p - r[u]) / h,
      v = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (f >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? g : u + v)
          : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (f > 1 - i.longSwipesRatio
            ? t.slideTo(u + v)
            : null !== m && f < 0 && Math.abs(f) > i.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(u));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(u + v)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : u + v),
          "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u));
    }
  }
  function K() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: l } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
  }
  function Q(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function Z() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const l = e.maxTranslate() - e.minTranslate();
    (n = 0 === l ? 0 : (e.translate - e.minTranslate()) / l),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let J = !1;
  function ee() {}
  const te = (e, t) => {
    const s = f(),
      {
        params: i,
        touchEvents: n,
        el: l,
        wrapperEl: r,
        device: a,
        support: o,
      } = e,
      d = !!i.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (o.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !o.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      l[c](n.start, e.onTouchStart, t),
        l[c](
          n.move,
          e.onTouchMove,
          o.passiveListener ? { passive: !1, capture: d } : d
        ),
        l[c](n.end, e.onTouchEnd, t),
        n.cancel && l[c](n.cancel, e.onTouchEnd, t);
    } else
      l[c](n.start, e.onTouchStart, !1),
        s[c](n.move, e.onTouchMove, d),
        s[c](n.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      l[c]("click", e.onClick, !0),
      i.cssMode && r[c]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[p](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            K,
            !0
          )
        : e[p]("observerUpdate", K, !0);
  };
  const se = {
      attachEvents: function () {
        const e = this,
          t = f(),
          { params: s, support: i } = e;
        (e.onTouchStart = Y.bind(e)),
          (e.onTouchMove = X.bind(e)),
          (e.onTouchEnd = U.bind(e)),
          s.cssMode && (e.onScroll = Z.bind(e)),
          (e.onClick = Q.bind(e)),
          i.touch && !J && (t.addEventListener("touchstart", ee), (J = !0)),
          te(e, "on");
      },
      detachEvents: function () {
        te(this, "off");
      },
    },
    ie = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const ne = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n,
          $el: l,
        } = e,
        r = n.breakpoints;
      if (!r || (r && 0 === Object.keys(r).length)) return;
      const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
      if (!a || e.currentBreakpoint === a) return;
      const o = (a in r ? r[a] : void 0) || e.originalParams,
        d = ie(e, n),
        c = ie(e, o),
        p = n.enabled;
      d && !c
        ? (l.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (l.addClass(`${n.containerModifierClass}grid`),
          ((o.grid.fill && "column" === o.grid.fill) ||
            (!o.grid.fill && "column" === n.grid.fill)) &&
            l.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = o.direction && o.direction !== n.direction,
        h = n.loop && (o.slidesPerView !== n.slidesPerView || u);
      u && s && e.changeDirection(), $(e.params, o);
      const g = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !g ? e.disable() : !p && g && e.enable(),
        (e.currentBreakpoint = a),
        e.emit("_beforeBreakpoint", o),
        h &&
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", o);
    },
    getBreakpoint: function (e, t, s) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
        return;
      let i = !1;
      const n = y(),
        l = "window" === t ? n.innerHeight : s.clientHeight,
        r = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: l * t, point: e };
          }
          return { value: e, point: e };
        });
      r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < r.length; e += 1) {
        const { point: l, value: a } = r[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = l)
          : a <= s.clientWidth && (i = l);
      }
      return i || "max";
    },
  };
  const le = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: i, $el: n, device: l, support: r } = e,
        a = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !r.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: l.android },
            { ios: l.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
          ],
          s.containerModifierClass
        );
      t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const re = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function ae(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              $(t, s))
            : $(t, s))
        : $(t, s);
    };
  }
  const oe = {
      eventsEmitter: F,
      update: V,
      translate: q,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            j({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              j({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: W,
      loop: R,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: se,
      breakpoints: ne,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: le,
      images: {
        loadImage: function (e, t, s, i, n, l) {
          const r = y();
          let a;
          function o() {
            l && l();
          }
          I(e).parent("picture")[0] || (e.complete && n)
            ? o()
            : t
            ? ((a = new r.Image()),
              (a.onload = o),
              (a.onerror = o),
              i && (a.sizes = i),
              s && (a.srcset = s),
              t && (a.src = t))
            : o();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    de = {};
  class ce {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
        i[n] = arguments[n];
      if (
        (1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
        t || (t = {}),
        (t = $({}, t)),
        e && !t.el && (t.el = e),
        t.el && I(t.el).length > 1)
      ) {
        const e = [];
        return (
          I(t.el).each((s) => {
            const i = $({}, t, { el: s });
            e.push(new ce(i));
          }),
          e
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = G()),
        (l.device = H({ userAgent: t.userAgent })),
        (l.browser = N()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const r = {};
      l.modules.forEach((e) => {
        e({
          swiper: l,
          extendParams: ae(t, r),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const a = $({}, re, r);
      return (
        (l.params = $({}, a, de, t)),
        (l.originalParams = $({}, l.params)),
        (l.passedParams = $({}, t)),
        l.params &&
          l.params.on &&
          Object.keys(l.params.on).forEach((e) => {
            l.on(e, l.params.on[e]);
          }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        (l.$ = I),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: I(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (l.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (l.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              l.support.touch || !l.params.simulateTouch
                ? l.touchEventsTouch
                : l.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: k(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: l,
        size: r,
        activeIndex: a,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = i[a].swiperSlideSize;
        for (let s = a + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
        for (let s = a - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < i.length; e += 1) {
          (t ? n[e] + l[e] - n[a] < r : n[e] - n[a] < r) && (o += 1);
        }
      else
        for (let e = a - 1; e >= 0; e -= 1) {
          n[a] - n[e] < r && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${i}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = I(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = I(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = f().createElement("div");
        (n = I(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: i, $el: n, $wrapperEl: l, slides: r } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttr("style"),
            l.removeAttr("style"),
            r &&
              r.length &&
              r
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      $(de, e);
    }
    static get extendedDefaults() {
      return de;
    }
    static get defaults() {
      return re;
    }
    static installModule(e) {
      ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
      const t = ce.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ce.installModule(e)), ce)
        : (ce.installModule(e), ce);
    }
  }
  Object.keys(oe).forEach((e) => {
    Object.keys(oe[e]).forEach((t) => {
      ce.prototype[t] = oe[e][t];
    });
  }),
    ce.use([
      function (e) {
        let { swiper: t, on: s, emit: i } = e;
        const n = y();
        let l = null,
          r = null;
        const a = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (i("beforeResize"), i("resize"));
          },
          o = () => {
            t && !t.destroyed && t.initialized && i("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((l = new ResizeObserver((e) => {
                r = n.requestAnimationFrame(() => {
                  const { width: s, height: i } = t;
                  let n = s,
                    l = i;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: i, target: r } = e;
                    (r && r !== t.el) ||
                      ((n = i ? i.width : (s[0] || s).inlineSize),
                      (l = i ? i.height : (s[0] || s).blockSize));
                  }),
                    (n === s && l === i) || a();
                });
              })),
              l.observe(t.el))
            : (n.addEventListener("resize", a),
              n.addEventListener("orientationchange", o));
        }),
          s("destroy", () => {
            r && n.cancelAnimationFrame(r),
              l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)),
              n.removeEventListener("resize", a),
              n.removeEventListener("orientationchange", o);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const l = [],
          r = y(),
          a = function (e, t) {
            void 0 === t && (t = {});
            const s = new (r.MutationObserver || r.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void n("observerUpdate", e[0]);
                const t = function () {
                  n("observerUpdate", e[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(t)
                  : r.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              l.push(s);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) a(e[t]);
              }
              a(t.$el[0], { childList: t.params.observeSlideChildren }),
                a(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          i("destroy", () => {
            l.forEach((e) => {
              e.disconnect();
            }),
              l.splice(0, l.length);
          });
      },
    ]);
  const pe = ce;
  function ue(e, t, s, i) {
    const n = f();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((l) => {
          if (!s[l] && !0 === s.auto) {
            let r = e.$el.children(`.${i[l]}`)[0];
            r ||
              ((r = n.createElement("div")),
              (r.className = i[l]),
              e.$el.append(r)),
              (s[l] = r),
              (t[l] = r);
          }
        }),
      s
    );
  }
  function he(e) {
    let { swiper: t, extendParams: s, on: i, emit: n } = e;
    function l(e) {
      let s;
      return (
        e &&
          ((s = I(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            s.length > 1 &&
            1 === t.$el.find(e).length &&
            (s = t.$el.find(e))),
        s
      );
    }
    function r(e, s) {
      const i = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[s ? "addClass" : "removeClass"](i.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }
    function a() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: s } = t.navigation;
      r(s, t.isBeginning && !t.params.rewind),
        r(e, t.isEnd && !t.params.rewind);
    }
    function o(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }
    function d(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }
    function c() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = ue(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !e.nextEl && !e.prevEl)
      )
        return;
      const s = l(e.nextEl),
        i = l(e.prevEl);
      s && s.length > 0 && s.on("click", d),
        i && i.length > 0 && i.on("click", o),
        Object.assign(t.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: i,
          prevEl: i && i[0],
        }),
        t.enabled ||
          (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass));
    }
    function p() {
      const { $nextEl: e, $prevEl: s } = t.navigation;
      e &&
        e.length &&
        (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
        s &&
          s.length &&
          (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
    }
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      i("init", () => {
        c(), a();
      }),
      i("toEdge fromEdge lock unlock", () => {
        a();
      }),
      i("destroy", () => {
        p();
      }),
      i("enable disable", () => {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          s &&
            s[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      i("click", (e, s) => {
        const { $nextEl: i, $prevEl: l } = t.navigation,
          r = s.target;
        if (t.params.navigation.hideOnClick && !I(r).is(l) && !I(r).is(i)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === r || t.pagination.el.contains(r))
          )
            return;
          let e;
          i
            ? (e = i.hasClass(t.params.navigation.hiddenClass))
            : l && (e = l.hasClass(t.params.navigation.hiddenClass)),
            n(!0 === e ? "navigationShow" : "navigationHide"),
            i && i.toggleClass(t.params.navigation.hiddenClass),
            l && l.toggleClass(t.params.navigation.hiddenClass);
        }
      }),
      Object.assign(t.navigation, { update: a, init: c, destroy: p });
  }
  function ge(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function me(e) {
    let { swiper: t, extendParams: s, on: i, emit: n } = e;
    const l = "swiper-pagination";
    let r;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${l}-bullet`,
        bulletActiveClass: `${l}-bullet-active`,
        modifierClass: `${l}-`,
        currentClass: `${l}-current`,
        totalClass: `${l}-total`,
        hiddenClass: `${l}-hidden`,
        progressbarFillClass: `${l}-progressbar-fill`,
        progressbarOppositeClass: `${l}-progressbar-opposite`,
        clickableClass: `${l}-clickable`,
        lockClass: `${l}-lock`,
        horizontalClass: `${l}-horizontal`,
        verticalClass: `${l}-vertical`,
      },
    }),
      (t.pagination = { el: null, $el: null, bullets: [] });
    let a = 0;
    function o() {
      return (
        !t.params.pagination.el ||
        !t.pagination.el ||
        !t.pagination.$el ||
        0 === t.pagination.$el.length
      );
    }
    function d(e, s) {
      const { bulletActiveClass: i } = t.params.pagination;
      e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
    }
    function c() {
      const e = t.rtl,
        s = t.params.pagination;
      if (o()) return;
      const i =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        l = t.pagination.$el;
      let c;
      const p = t.params.loop
        ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
        : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((c = Math.ceil(
              (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
            )),
            c > i - 1 - 2 * t.loopedSlides && (c -= i - 2 * t.loopedSlides),
            c > p - 1 && (c -= p),
            c < 0 && "bullets" !== t.params.paginationType && (c = p + c))
          : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
        "bullets" === s.type &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const i = t.pagination.bullets;
        let n, o, p;
        if (
          (s.dynamicBullets &&
            ((r = i.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            l.css(
              t.isHorizontal() ? "width" : "height",
              r * (s.dynamicMainBullets + 4) + "px"
            ),
            s.dynamicMainBullets > 1 &&
              void 0 !== t.previousIndex &&
              ((a += c - (t.previousIndex - t.loopedSlides || 0)),
              a > s.dynamicMainBullets - 1
                ? (a = s.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (n = Math.max(c - a, 0)),
            (o = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
            (p = (o + n) / 2)),
          i.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((e) => `${s.bulletActiveClass}${e}`)
              .join(" ")
          ),
          l.length > 1)
        )
          i.each((e) => {
            const t = I(e),
              i = t.index();
            i === c && t.addClass(s.bulletActiveClass),
              s.dynamicBullets &&
                (i >= n && i <= o && t.addClass(`${s.bulletActiveClass}-main`),
                i === n && d(t, "prev"),
                i === o && d(t, "next"));
          });
        else {
          const e = i.eq(c),
            l = e.index();
          if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
            const e = i.eq(n),
              r = i.eq(o);
            for (let e = n; e <= o; e += 1)
              i.eq(e).addClass(`${s.bulletActiveClass}-main`);
            if (t.params.loop)
              if (l >= i.length) {
                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                  i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                  `${s.bulletActiveClass}-prev`
                );
              } else d(e, "prev"), d(r, "next");
            else d(e, "prev"), d(r, "next");
          }
        }
        if (s.dynamicBullets) {
          const n = Math.min(i.length, s.dynamicMainBullets + 4),
            l = (r * n - r) / 2 - p * r,
            a = e ? "right" : "left";
          i.css(t.isHorizontal() ? a : "top", `${l}px`);
        }
      }
      if (
        ("fraction" === s.type &&
          (l.find(ge(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
          l.find(ge(s.totalClass)).text(s.formatFractionTotal(p))),
        "progressbar" === s.type)
      ) {
        let e;
        e = s.progressbarOpposite
          ? t.isHorizontal()
            ? "vertical"
            : "horizontal"
          : t.isHorizontal()
          ? "horizontal"
          : "vertical";
        const i = (c + 1) / p;
        let n = 1,
          r = 1;
        "horizontal" === e ? (n = i) : (r = i),
          l
            .find(ge(s.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
            .transition(t.params.speed);
      }
      "custom" === s.type && s.renderCustom
        ? (l.html(s.renderCustom(t, c + 1, p)), n("paginationRender", l[0]))
        : n("paginationUpdate", l[0]),
        t.params.watchOverflow &&
          t.enabled &&
          l[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }
    function p() {
      const e = t.params.pagination;
      if (o()) return;
      const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        i = t.pagination.$el;
      let l = "";
      if ("bullets" === e.type) {
        let n = t.params.loop
          ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          !t.params.loop &&
          n > s &&
          (n = s);
        for (let s = 0; s < n; s += 1)
          e.renderBullet
            ? (l += e.renderBullet.call(t, s, e.bulletClass))
            : (l += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
        i.html(l), (t.pagination.bullets = i.find(ge(e.bulletClass)));
      }
      "fraction" === e.type &&
        ((l = e.renderFraction
          ? e.renderFraction.call(t, e.currentClass, e.totalClass)
          : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
        i.html(l)),
        "progressbar" === e.type &&
          ((l = e.renderProgressbar
            ? e.renderProgressbar.call(t, e.progressbarFillClass)
            : `<span class="${e.progressbarFillClass}"></span>`),
          i.html(l)),
        "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
    }
    function u() {
      t.params.pagination = ue(
        t,
        t.originalParams.pagination,
        t.params.pagination,
        { el: "swiper-pagination" }
      );
      const e = t.params.pagination;
      if (!e.el) return;
      let s = I(e.el);
      0 !== s.length &&
        (t.params.uniqueNavElements &&
          "string" == typeof e.el &&
          s.length > 1 &&
          ((s = t.$el.find(e.el)),
          s.length > 1 &&
            (s = s.filter((e) => I(e).parents(".swiper")[0] === t.el))),
        "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
        s.addClass(e.modifierClass + e.type),
        s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
        "bullets" === e.type &&
          e.dynamicBullets &&
          (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
          (a = 0),
          e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
        "progressbar" === e.type &&
          e.progressbarOpposite &&
          s.addClass(e.progressbarOppositeClass),
        e.clickable &&
          s.on("click", ge(e.bulletClass), function (e) {
            e.preventDefault();
            let s = I(this).index() * t.params.slidesPerGroup;
            t.params.loop && (s += t.loopedSlides), t.slideTo(s);
          }),
        Object.assign(t.pagination, { $el: s, el: s[0] }),
        t.enabled || s.addClass(e.lockClass));
    }
    function h() {
      const e = t.params.pagination;
      if (o()) return;
      const s = t.pagination.$el;
      s.removeClass(e.hiddenClass),
        s.removeClass(e.modifierClass + e.type),
        s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
        t.pagination.bullets &&
          t.pagination.bullets.removeClass &&
          t.pagination.bullets.removeClass(e.bulletActiveClass),
        e.clickable && s.off("click", ge(e.bulletClass));
    }
    i("init", () => {
      u(), p(), c();
    }),
      i("activeIndexChange", () => {
        (t.params.loop || void 0 === t.snapIndex) && c();
      }),
      i("snapIndexChange", () => {
        t.params.loop || c();
      }),
      i("slidesLengthChange", () => {
        t.params.loop && (p(), c());
      }),
      i("snapGridLengthChange", () => {
        t.params.loop || (p(), c());
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        const { $el: e } = t.pagination;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.pagination.lockClass
          );
      }),
      i("lock unlock", () => {
        c();
      }),
      i("click", (e, s) => {
        const i = s.target,
          { $el: l } = t.pagination;
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          l.length > 0 &&
          !I(i).hasClass(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && i === t.navigation.nextEl) ||
              (t.navigation.prevEl && i === t.navigation.prevEl))
          )
            return;
          const e = l.hasClass(t.params.pagination.hiddenClass);
          n(!0 === e ? "paginationShow" : "paginationHide"),
            l.toggleClass(t.params.pagination.hiddenClass);
        }
      }),
      Object.assign(t.pagination, {
        render: p,
        update: c,
        init: u,
        destroy: h,
      });
  }
  function fe() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    fe(),
      document.querySelector(".works__slider") &&
        new pe(".works__slider", {
          modules: [he],
          observer: !0,
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: !0,
          speed: 800,
          lazy: !0,
          navigation: {
            prevEl: ".slider-works__arrow_prev ",
            nextEl: ".slider-works__arrow_next",
          },
          breakpoints: {
            320: { slidesPerView: 1, autoHeight: !0 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
          },
          on: {},
        }),
      document.querySelector(".slider-models") &&
        new pe(".slider-models", {
          modules: [he],
          observer: !0,
          slidesPerView: 2,
          spaceBetween: 30,
          speed: 800,
          navigation: {
            prevEl: ".slider-models__arrow_prev",
            nextEl: ".slider-models__arrow_next",
          },
          breakpoints: {
            320: { slidesPerView: 2, autoHeight: !0 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1268: { slidesPerView: 4, spaceBetween: 30 },
          },
        }),
      document.querySelector(".tips-page__slider") &&
        new pe(".tips-page__slider", {
          modules: [he, me],
          observer: !0,
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: !0,
          speed: 800,
          pagination: { el: ".control-tips__pagination", clickable: !0 },
          navigation: {
            prevEl: " .control-tips__arrow-next",
            nextEl: ".control-tips__arrow-prev ",
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10, autoHeight: !0 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1268: { slidesPerView: 3, spaceBetween: 30 },
          },
        });
  }),
    document.addEventListener("DOMContentLoaded", function () {
      ymaps.ready(function () {
        const e = document.getElementById("map"),
          t = new ymaps.Map(e, {
            center: [55.7558, 37.6173],
            zoom: 10,
            controls: ["routeButtonControl"],
          }),
          s = "img/market.png",
          i = ymaps.templateLayoutFactory.createClass(
            '<div class="my-marker"  >$[properties.iconContent] </div>'
          ),
          n = new ymaps.Placemark(
            [55.661574, 37.573856],
            {},
            {
              iconLayout: "default#imageWithContent",
              iconImageHref: s,
              iconImageSize: [52, 91],
              iconImageOffset: [-24, -80],
              iconContentOffset: [15, 15],
            }
          );
        t.geoObjects.add(n);
        new ymaps.Placemark([55.661574, 37.573856], {
          iconLayout: "default#imageWithContent",
          iconImageHref: s,
          iconImageSize: [52, 91],
          iconImageOffset: [-24, -80],
          iconContentOffset: [15, 15],
          iconContentLayout: i,
        });
        n.events.add("click", function () {
          ymaps.geolocation.get().then(function (e) {
            const s = e.geoObjects.get(0).geometry.getCoordinates();
            ymaps.route([s, n.geometry.getCoordinates()]).then(function (e) {
              const s = e.getPaths().get(0);
              s.options.set({ strokeColor: "#ff0000", strokeWidth: 4 }),
                t.geoObjects.add(s);
            });
          });
        }),
          console.log(t.container._mapElement.children[0].children),
          console.log(t.container._mapElement.children[0].children[4]);
      });
    });
  let ve = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let r = "",
          o = 0;
        t &&
          ((r = "header.header"), (o = document.querySelector(r).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (l(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", d);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
        }
        a(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    },
    ye = !1;
  setTimeout(() => {
    if (ye) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  var be = function () {
    return (
      (be =
        Object.assign ||
        function (e) {
          for (var t, s = 1, i = arguments.length; s < i; s++)
            for (var n in (t = arguments[s]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
      be.apply(this, arguments)
    );
  };
  var Se = "lgAfterAppendSlide",
    Ce = "lgInit",
    we = "lgHasVideo",
    xe = "lgContainerResize",
    Te = "lgUpdateSlides",
    Ee = "lgAfterAppendSubHtml",
    Ie = "lgBeforeOpen",
    Le = "lgAfterOpen",
    ke = "lgSlideItemLoad",
    Ae = "lgBeforeSlide",
    Me = "lgAfterSlide",
    Oe = "lgPosterClick",
    $e = "lgDragStart",
    Pe = "lgDragMove",
    _e = "lgDragEnd",
    De = "lgBeforeNextSlide",
    ze = "lgBeforePrevSlide",
    Be = "lgBeforeClose",
    Ge = "lgAfterClose",
    He = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: !0,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: !0,
      allowMediaOverlap: !1,
      videoMaxSize: "1280-720",
      loadYouTubePoster: !0,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      closable: !0,
      swipeToClose: !0,
      closeOnTap: !0,
      showCloseIcon: !0,
      showMaximizeIcon: !1,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimation: !0,
      hideControlOnEnd: !1,
      mousewheel: !1,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
      },
    };
  var Ne = (function () {
    function e(e) {
      return (
        (this.cssVenderPrefixes = [
          "TransitionDuration",
          "TransitionTimingFunction",
          "Transform",
          "Transition",
        ]),
        (this.selector = this._getSelector(e)),
        (this.firstElement = this._getFirstEl()),
        this
      );
    }
    return (
      (e.generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }),
      (e.prototype._getSelector = function (e, t) {
        return (
          void 0 === t && (t = document),
          "string" != typeof e
            ? e
            : ((t = t || document),
              "#" === e.substring(0, 1)
                ? t.querySelector(e)
                : t.querySelectorAll(e))
        );
      }),
      (e.prototype._each = function (e) {
        return this.selector
          ? (void 0 !== this.selector.length
              ? [].forEach.call(this.selector, e)
              : e(this.selector, 0),
            this)
          : this;
      }),
      (e.prototype._setCssVendorPrefix = function (e, t, s) {
        var i = t.replace(/-([a-z])/gi, function (e, t) {
          return t.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(i)
          ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
            (e.style["webkit" + i] = s),
            (e.style["moz" + i] = s),
            (e.style["ms" + i] = s),
            (e.style["o" + i] = s))
          : (e.style[i] = s);
      }),
      (e.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (e.prototype.isEventMatched = function (e, t) {
        var s = t.split(".");
        return e
          .split(".")
          .filter(function (e) {
            return e;
          })
          .every(function (e) {
            return -1 !== s.indexOf(e);
          });
      }),
      (e.prototype.attr = function (e, t) {
        return void 0 === t
          ? this.firstElement
            ? this.firstElement.getAttribute(e)
            : ""
          : (this._each(function (s) {
              s.setAttribute(e, t);
            }),
            this);
      }),
      (e.prototype.find = function (e) {
        return Fe(this._getSelector(e, this.selector));
      }),
      (e.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? Fe(this.selector[0])
          : Fe(this.selector);
      }),
      (e.prototype.eq = function (e) {
        return Fe(this.selector[e]);
      }),
      (e.prototype.parent = function () {
        return Fe(this.selector.parentElement);
      }),
      (e.prototype.get = function () {
        return this._getFirstEl();
      }),
      (e.prototype.removeAttr = function (e) {
        var t = e.split(" ");
        return (
          this._each(function (e) {
            t.forEach(function (t) {
              return e.removeAttribute(t);
            });
          }),
          this
        );
      }),
      (e.prototype.wrap = function (e) {
        if (!this.firstElement) return this;
        var t = document.createElement("div");
        return (
          (t.className = e),
          this.firstElement.parentNode.insertBefore(t, this.firstElement),
          this.firstElement.parentNode.removeChild(this.firstElement),
          t.appendChild(this.firstElement),
          this
        );
      }),
      (e.prototype.addClass = function (e) {
        return (
          void 0 === e && (e = ""),
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.add(e);
            });
          }),
          this
        );
      }),
      (e.prototype.removeClass = function (e) {
        return (
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.remove(e);
            });
          }),
          this
        );
      }),
      (e.prototype.hasClass = function (e) {
        return !!this.firstElement && this.firstElement.classList.contains(e);
      }),
      (e.prototype.hasAttribute = function (e) {
        return !!this.firstElement && this.firstElement.hasAttribute(e);
      }),
      (e.prototype.toggleClass = function (e) {
        return this.firstElement
          ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
          : this;
      }),
      (e.prototype.css = function (e, t) {
        var s = this;
        return (
          this._each(function (i) {
            s._setCssVendorPrefix(i, e, t);
          }),
          this
        );
      }),
      (e.prototype.on = function (t, s) {
        var i = this;
        return this.selector
          ? (t.split(" ").forEach(function (t) {
              Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []),
                e.eventListeners[t].push(s),
                i.selector.addEventListener(t.split(".")[0], s);
            }),
            this)
          : this;
      }),
      (e.prototype.once = function (e, t) {
        var s = this;
        return (
          this.on(e, function () {
            s.off(e), t(e);
          }),
          this
        );
      }),
      (e.prototype.off = function (t) {
        var s = this;
        return this.selector
          ? (Object.keys(e.eventListeners).forEach(function (i) {
              s.isEventMatched(t, i) &&
                (e.eventListeners[i].forEach(function (e) {
                  s.selector.removeEventListener(i.split(".")[0], e);
                }),
                (e.eventListeners[i] = []));
            }),
            this)
          : this;
      }),
      (e.prototype.trigger = function (e, t) {
        if (!this.firstElement) return this;
        var s = new CustomEvent(e.split(".")[0], { detail: t || null });
        return this.firstElement.dispatchEvent(s), this;
      }),
      (e.prototype.load = function (e) {
        var t = this;
        return (
          fetch(e)
            .then(function (e) {
              return e.text();
            })
            .then(function (e) {
              t.selector.innerHTML = e;
            }),
          this
        );
      }),
      (e.prototype.html = function (e) {
        return void 0 === e
          ? this.firstElement
            ? this.firstElement.innerHTML
            : ""
          : (this._each(function (t) {
              t.innerHTML = e;
            }),
            this);
      }),
      (e.prototype.append = function (e) {
        return (
          this._each(function (t) {
            "string" == typeof e
              ? t.insertAdjacentHTML("beforeend", e)
              : t.appendChild(e);
          }),
          this
        );
      }),
      (e.prototype.prepend = function (e) {
        return (
          this._each(function (t) {
            t.insertAdjacentHTML("afterbegin", e);
          }),
          this
        );
      }),
      (e.prototype.remove = function () {
        return (
          this._each(function (e) {
            e.parentNode.removeChild(e);
          }),
          this
        );
      }),
      (e.prototype.empty = function () {
        return (
          this._each(function (e) {
            e.innerHTML = "";
          }),
          this
        );
      }),
      (e.prototype.scrollTop = function (e) {
        return void 0 !== e
          ? ((document.body.scrollTop = e),
            (document.documentElement.scrollTop = e),
            this)
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }),
      (e.prototype.scrollLeft = function (e) {
        return void 0 !== e
          ? ((document.body.scrollLeft = e),
            (document.documentElement.scrollLeft = e),
            this)
          : window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
      }),
      (e.prototype.offset = function () {
        if (!this.firstElement) return { left: 0, top: 0 };
        var e = this.firstElement.getBoundingClientRect(),
          t = Fe("body").style().marginLeft;
        return {
          left: e.left - parseFloat(t) + this.scrollLeft(),
          top: e.top + this.scrollTop(),
        };
      }),
      (e.prototype.style = function () {
        return this.firstElement
          ? this.firstElement.currentStyle ||
              window.getComputedStyle(this.firstElement)
          : {};
      }),
      (e.prototype.width = function () {
        var e = this.style();
        return (
          this.firstElement.clientWidth -
          parseFloat(e.paddingLeft) -
          parseFloat(e.paddingRight)
        );
      }),
      (e.prototype.height = function () {
        var e = this.style();
        return (
          this.firstElement.clientHeight -
          parseFloat(e.paddingTop) -
          parseFloat(e.paddingBottom)
        );
      }),
      (e.eventListeners = {}),
      e
    );
  })();
  function Fe(e) {
    return (
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function (e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: null };
          var s = document.createEvent("CustomEvent");
          return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
        };
      })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new Ne(e)
    );
  }
  var Ve = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl",
  ];
  function qe(e) {
    return "href" === e
      ? "src"
      : (e = (e =
          (e = e.replace("data-", "")).charAt(0).toLowerCase() +
          e.slice(1)).replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        }));
  }
  var je = function (e, t, s, i) {
      void 0 === s && (s = 0);
      var n = Fe(e).attr("data-lg-size") || i;
      if (n) {
        var l = n.split(",");
        if (l[1])
          for (var r = window.innerWidth, a = 0; a < l.length; a++) {
            var o = l[a];
            if (parseInt(o.split("-")[2], 10) > r) {
              n = o;
              break;
            }
            a === l.length - 1 && (n = o);
          }
        var d = n.split("-"),
          c = parseInt(d[0], 10),
          p = parseInt(d[1], 10),
          u = t.width(),
          h = t.height() - s,
          g = Math.min(u, c),
          m = Math.min(h, p),
          f = Math.min(g / c, m / p);
        return { width: c * f, height: p * f };
      }
    },
    We = function (e, t, s, i, n) {
      if (n) {
        var l = Fe(e).find("img").first();
        if (l.get()) {
          var r = t.get().getBoundingClientRect(),
            a = r.width,
            o = t.height() - (s + i),
            d = l.width(),
            c = l.height(),
            p = l.style(),
            u =
              (a - d) / 2 -
              l.offset().left +
              (parseFloat(p.paddingLeft) || 0) +
              (parseFloat(p.borderLeft) || 0) +
              Fe(window).scrollLeft() +
              r.left,
            h =
              (o - c) / 2 -
              l.offset().top +
              (parseFloat(p.paddingTop) || 0) +
              (parseFloat(p.borderTop) || 0) +
              Fe(window).scrollTop() +
              s;
          return (
            "translate3d(" +
            (u *= -1) +
            "px, " +
            (h *= -1) +
            "px, 0) scale3d(" +
            d / n.width +
            ", " +
            c / n.height +
            ", 1)"
          );
        }
      }
    },
    Re = function (e, t, s, i, n, l) {
      return (
        '<div class="lg-video-cont lg-has-iframe" style="width:' +
        e +
        "; max-width:" +
        s +
        "; height: " +
        t +
        "; max-height:" +
        i +
        '">\n                    <iframe class="lg-object" frameborder="0" ' +
        (l ? 'title="' + l + '"' : "") +
        ' src="' +
        n +
        '"  allowfullscreen="true"></iframe>\n                </div>'
      );
    },
    Ye = function (e, t, s, i, n, l) {
      var r =
          "<img " +
          s +
          " " +
          (i ? 'srcset="' + i + '"' : "") +
          "  " +
          (n ? 'sizes="' + n + '"' : "") +
          ' class="lg-object lg-image" data-index="' +
          e +
          '" src="' +
          t +
          '" />',
        a = "";
      l &&
        (a = ("string" == typeof l ? JSON.parse(l) : l).map(function (e) {
          var t = "";
          return (
            Object.keys(e).forEach(function (s) {
              t += " " + s + '="' + e[s] + '"';
            }),
            "<source " + t + "></source>"
          );
        }));
      return "" + a + r;
    },
    Xe = function (e) {
      for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
        var l = e[n].split(" ");
        "" === l[0] && l.splice(0, 1), s.push(l[0]), t.push(l[1]);
      }
      for (var r = window.innerWidth, a = 0; a < t.length; a++)
        if (parseInt(t[a], 10) > r) {
          i = s[a];
          break;
        }
      return i;
    },
    Ue = function (e) {
      return !!e && !!e.complete && 0 !== e.naturalWidth;
    },
    Ke = function (e, t, s, i, n) {
      return (
        '<div class="lg-video-cont ' +
        (n && n.youtube
          ? "lg-has-youtube"
          : n && n.vimeo
          ? "lg-has-vimeo"
          : "lg-has-html5") +
        '" style="' +
        s +
        '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
        i +
        '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
        i +
        '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
        (t || "") +
        '\n            <img class="lg-object lg-video-poster" src="' +
        e +
        '" />\n        </div>'
      );
    },
    Qe = function (e, t, s, i) {
      var n = [],
        l = (function () {
          for (var e = 0, t = 0, s = arguments.length; t < s; t++)
            e += arguments[t].length;
          var i = Array(e),
            n = 0;
          for (t = 0; t < s; t++)
            for (var l = arguments[t], r = 0, a = l.length; r < a; r++, n++)
              i[n] = l[r];
          return i;
        })(Ve, t);
      return (
        [].forEach.call(e, function (e) {
          for (var t = {}, r = 0; r < e.attributes.length; r++) {
            var a = e.attributes[r];
            if (a.specified) {
              var o = qe(a.name),
                d = "";
              l.indexOf(o) > -1 && (d = o), d && (t[d] = a.value);
            }
          }
          var c = Fe(e),
            p = c.find("img").first().attr("alt"),
            u = c.attr("title"),
            h = i ? c.attr(i) : c.find("img").first().attr("src");
          (t.thumb = h),
            s && !t.subHtml && (t.subHtml = u || p || ""),
            (t.alt = p || u || ""),
            n.push(t);
        }),
        n
      );
    },
    Ze = function () {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    Je = function (e, t, s) {
      if (!e)
        return t
          ? { html5: !0 }
          : void console.error(
              "lightGallery :- data-src is not provided on slide item " +
                (s + 1) +
                ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
            );
      var i = e.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
        ),
        n = e.match(
          /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
        ),
        l = e.match(
          /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
        );
      return i ? { youtube: i } : n ? { vimeo: n } : l ? { wistia: l } : void 0;
    },
    et = 0,
    tt = (function () {
      function e(e, t) {
        if (
          ((this.lgOpened = !1),
          (this.index = 0),
          (this.plugins = []),
          (this.lGalleryOn = !1),
          (this.lgBusy = !1),
          (this.currentItemsInDom = []),
          (this.prevScrollTop = 0),
          (this.isDummyImageRemoved = !1),
          (this.dragOrSwipeEnabled = !1),
          (this.mediaContainerPosition = { top: 0, bottom: 0 }),
          !e)
        )
          return this;
        if (
          (et++,
          (this.lgId = et),
          (this.el = e),
          (this.LGel = Fe(e)),
          this.generateSettings(t),
          this.buildModules(),
          this.settings.dynamic &&
            void 0 !== this.settings.dynamicEl &&
            !Array.isArray(this.settings.dynamicEl))
        )
          throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return (
          (this.galleryItems = this.getItems()),
          this.normalizeSettings(),
          this.init(),
          this.validateLicense(),
          this
        );
      }
      return (
        (e.prototype.generateSettings = function (e) {
          if (
            ((this.settings = be(be({}, He), e)),
            this.settings.isMobile &&
            "function" == typeof this.settings.isMobile
              ? this.settings.isMobile()
              : Ze())
          ) {
            var t = be(
              be({}, this.settings.mobileSettings),
              this.settings.mobileSettings
            );
            this.settings = be(be({}, this.settings), t);
          }
        }),
        (e.prototype.normalizeSettings = function () {
          this.settings.slideEndAnimation &&
            (this.settings.hideControlOnEnd = !1),
            this.settings.closable || (this.settings.swipeToClose = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            this.settings.dynamic && (this.zoomFromOrigin = !1),
            this.settings.container ||
              (this.settings.container = document.body),
            (this.settings.preload = Math.min(
              this.settings.preload,
              this.galleryItems.length
            ));
        }),
        (e.prototype.init = function () {
          var e = this;
          this.addSlideVideoInfo(this.galleryItems),
            this.buildStructure(),
            this.LGel.trigger(Ce, { instance: this }),
            this.settings.keyPress && this.keyPress(),
            setTimeout(function () {
              e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
            }, 50),
            this.arrow(),
            this.settings.mousewheel && this.mousewheel(),
            this.settings.dynamic || this.openGalleryOnItemClick();
        }),
        (e.prototype.openGalleryOnItemClick = function () {
          for (
            var e = this,
              t = function (t) {
                var i = s.items[t],
                  n = Fe(i),
                  l = Ne.generateUUID();
                n.attr("data-lg-id", l).on(
                  "click.lgcustom-item-" + l,
                  function (s) {
                    s.preventDefault();
                    var n = e.settings.index || t;
                    e.openGallery(n, i);
                  }
                );
              },
              s = this,
              i = 0;
            i < this.items.length;
            i++
          )
            t(i);
        }),
        (e.prototype.buildModules = function () {
          var e = this;
          this.settings.plugins.forEach(function (t) {
            e.plugins.push(new t(e, Fe));
          });
        }),
        (e.prototype.validateLicense = function () {
          this.settings.licenseKey
            ? "0000-0000-000-0000" === this.settings.licenseKey &&
              console.warn(
                "lightGallery: " +
                  this.settings.licenseKey +
                  " license key is not valid for production use"
              )
            : console.error("Please provide a valid license key");
        }),
        (e.prototype.getSlideItem = function (e) {
          return Fe(this.getSlideItemId(e));
        }),
        (e.prototype.getSlideItemId = function (e) {
          return "#lg-item-" + this.lgId + "-" + e;
        }),
        (e.prototype.getIdName = function (e) {
          return e + "-" + this.lgId;
        }),
        (e.prototype.getElementById = function (e) {
          return Fe("#" + this.getIdName(e));
        }),
        (e.prototype.manageSingleSlideClassName = function () {
          this.galleryItems.length < 2
            ? this.outer.addClass("lg-single-item")
            : this.outer.removeClass("lg-single-item");
        }),
        (e.prototype.buildStructure = function () {
          var e = this;
          if (!(this.$container && this.$container.get())) {
            var t = "",
              s = "";
            this.settings.controls &&
              (t =
                '<button type="button" id="' +
                this.getIdName("lg-prev") +
                '" aria-label="' +
                this.settings.strings.previousSlide +
                '" class="lg-prev lg-icon"> ' +
                this.settings.prevHtml +
                ' </button>\n                <button type="button" id="' +
                this.getIdName("lg-next") +
                '" aria-label="' +
                this.settings.strings.nextSlide +
                '" class="lg-next lg-icon"> ' +
                this.settings.nextHtml +
                " </button>"),
              ".lg-item" !== this.settings.appendSubHtmlTo &&
                (s =
                  '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var i = "";
            this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
            var n = this.settings.ariaLabelledby
                ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                : "",
              l = this.settings.ariaDescribedby
                ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                : "",
              r =
                "lg-container " +
                this.settings.addClass +
                " " +
                (document.body !== this.settings.container ? "lg-inline" : ""),
              a =
                this.settings.closable && this.settings.showCloseIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.closeGallery +
                    '" id="' +
                    this.getIdName("lg-close") +
                    '" class="lg-close lg-icon"></button>'
                  : "",
              o = this.settings.showMaximizeIcon
                ? '<button type="button" aria-label="' +
                  this.settings.strings.toggleMaximize +
                  '" id="' +
                  this.getIdName("lg-maximize") +
                  '" class="lg-maximize lg-icon"></button>'
                : "",
              d =
                '\n        <div class="' +
                r +
                '" id="' +
                this.getIdName("lg-container") +
                '" tabindex="-1" aria-modal="true" ' +
                n +
                " " +
                l +
                ' role="dialog"\n        >\n            <div id="' +
                this.getIdName("lg-backdrop") +
                '" class="lg-backdrop"></div>\n\n            <div id="' +
                this.getIdName("lg-outer") +
                '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                i +
                ' ">\n\n              <div id="' +
                this.getIdName("lg-content") +
                '" class="lg-content">\n                <div id="' +
                this.getIdName("lg-inner") +
                '" class="lg-inner">\n                </div>\n                ' +
                t +
                '\n              </div>\n                <div id="' +
                this.getIdName("lg-toolbar") +
                '" class="lg-toolbar lg-group">\n                    ' +
                o +
                "\n                    " +
                a +
                "\n                    </div>\n                    " +
                (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                '\n                <div id="' +
                this.getIdName("lg-components") +
                '" class="lg-components">\n                    ' +
                (".lg-sub-html" === this.settings.appendSubHtmlTo ? s : "") +
                "\n                </div>\n            </div>\n        </div>\n        ";
            Fe(this.settings.container).append(d),
              document.body !== this.settings.container &&
                Fe(this.settings.container).css("position", "relative"),
              (this.outer = this.getElementById("lg-outer")),
              (this.$lgComponents = this.getElementById("lg-components")),
              (this.$backdrop = this.getElementById("lg-backdrop")),
              (this.$container = this.getElementById("lg-container")),
              (this.$inner = this.getElementById("lg-inner")),
              (this.$content = this.getElementById("lg-content")),
              (this.$toolbar = this.getElementById("lg-toolbar")),
              this.$backdrop.css(
                "transition-duration",
                this.settings.backdropDuration + "ms"
              );
            var c = this.settings.mode + " ";
            this.manageSingleSlideClassName(),
              this.settings.enableDrag && (c += "lg-grab "),
              this.outer.addClass(c),
              this.$inner.css(
                "transition-timing-function",
                this.settings.easing
              ),
              this.$inner.css(
                "transition-duration",
                this.settings.speed + "ms"
              ),
              this.settings.download &&
                this.$toolbar.append(
                  '<a id="' +
                    this.getIdName("lg-download") +
                    '" target="_blank" rel="noopener" aria-label="' +
                    this.settings.strings.download +
                    '" download class="lg-download lg-icon"></a>'
                ),
              this.counter(),
              Fe(window).on(
                "resize.lg.global" +
                  this.lgId +
                  " orientationchange.lg.global" +
                  this.lgId,
                function () {
                  e.refreshOnResize();
                }
              ),
              this.hideBars(),
              this.manageCloseGallery(),
              this.toggleMaximize(),
              this.initModules();
          }
        }),
        (e.prototype.refreshOnResize = function () {
          if (this.lgOpened) {
            var e = this.galleryItems[this.index].__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var t = this.mediaContainerPosition,
              s = t.top,
              i = t.bottom;
            if (
              ((this.currentImageSize = je(
                this.items[this.index],
                this.outer,
                s + i,
                e && this.settings.videoMaxSize
              )),
              e && this.resizeVideoSlide(this.index, this.currentImageSize),
              this.zoomFromOrigin && !this.isDummyImageRemoved)
            ) {
              var n = this.getDummyImgStyles(this.currentImageSize);
              this.outer
                .find(".lg-current .lg-dummy-img")
                .first()
                .attr("style", n);
            }
            this.LGel.trigger(xe);
          }
        }),
        (e.prototype.resizeVideoSlide = function (e, t) {
          var s = this.getVideoContStyle(t);
          this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
        }),
        (e.prototype.updateSlides = function (e, t) {
          if (
            (this.index > e.length - 1 && (this.index = e.length - 1),
            1 === e.length && (this.index = 0),
            e.length)
          ) {
            var s = this.galleryItems[t].src;
            (this.galleryItems = e),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []);
            var i = 0;
            this.galleryItems.some(function (e, t) {
              return e.src === s && ((i = t), !0);
            }),
              (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
              this.loadContent(i, !0),
              this.getSlideItem(i).addClass("lg-current"),
              (this.index = i),
              this.updateCurrentCounter(i),
              this.LGel.trigger(Te);
          } else this.closeGallery();
        }),
        (e.prototype.getItems = function () {
          if (((this.items = []), this.settings.dynamic))
            return this.settings.dynamicEl || [];
          if ("this" === this.settings.selector) this.items.push(this.el);
          else if (this.settings.selector)
            if ("string" == typeof this.settings.selector)
              if (this.settings.selectWithin) {
                var e = Fe(this.settings.selectWithin);
                this.items = e.find(this.settings.selector).get();
              } else
                this.items = this.el.querySelectorAll(this.settings.selector);
            else this.items = this.settings.selector;
          else this.items = this.el.children;
          return Qe(
            this.items,
            this.settings.extraProps,
            this.settings.getCaptionFromTitleOrAlt,
            this.settings.exThumbImage
          );
        }),
        (e.prototype.openGallery = function (e, t) {
          var s = this;
          if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
            (this.lgOpened = !0),
              this.outer.get().focus(),
              this.outer.removeClass("lg-hide-items"),
              this.$container.addClass("lg-show");
            var i = this.getItemsToBeInsertedToDom(e, e);
            this.currentItemsInDom = i;
            var n = "";
            i.forEach(function (e) {
              n = n + '<div id="' + e + '" class="lg-item"></div>';
            }),
              this.$inner.append(n),
              this.addHtml(e);
            var l = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var r = this.mediaContainerPosition,
              a = r.top,
              o = r.bottom;
            this.settings.allowMediaOverlap ||
              this.setMediaContainerPosition(a, o);
            var d = this.galleryItems[e].__slideVideoInfo;
            this.zoomFromOrigin &&
              t &&
              ((this.currentImageSize = je(
                t,
                this.outer,
                a + o,
                d && this.settings.videoMaxSize
              )),
              (l = We(t, this.outer, a, o, this.currentImageSize))),
              (this.zoomFromOrigin && l) ||
                (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(e).removeClass("lg-complete"));
            var c = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration;
            setTimeout(function () {
              s.outer.addClass("lg-components-open");
            }, c),
              (this.index = e),
              this.LGel.trigger(Ie),
              this.getSlideItem(e).addClass("lg-current"),
              (this.lGalleryOn = !1),
              (this.prevScrollTop = Fe(window).scrollTop()),
              setTimeout(function () {
                if (s.zoomFromOrigin && l) {
                  var t = s.getSlideItem(e);
                  t.css("transform", l),
                    setTimeout(function () {
                      t
                        .addClass("lg-start-progress lg-start-end-progress")
                        .css(
                          "transition-duration",
                          s.settings.startAnimationDuration + "ms"
                        ),
                        s.outer.addClass("lg-zoom-from-image");
                    }),
                    setTimeout(function () {
                      t.css("transform", "translate3d(0, 0, 0)");
                    }, 100);
                }
                setTimeout(function () {
                  s.$backdrop.addClass("in"),
                    s.$container.addClass("lg-show-in");
                }, 10),
                  (s.zoomFromOrigin && l) ||
                    setTimeout(function () {
                      s.outer.addClass("lg-visible");
                    }, s.settings.backdropDuration),
                  s.slide(e, !1, !1, !1),
                  s.LGel.trigger(Le);
              }),
              document.body === this.settings.container &&
                Fe("html").addClass("lg-on");
          }
        }),
        (e.prototype.getMediaContainerPosition = function () {
          if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
          var e = this.$toolbar.get().clientHeight || 0,
            t = this.outer.find(".lg-components .lg-sub-html").get(),
            s =
              this.settings.defaultCaptionHeight || (t && t.clientHeight) || 0,
            i = this.outer.find(".lg-thumb-outer").get();
          return { top: e, bottom: (i ? i.clientHeight : 0) + s };
        }),
        (e.prototype.setMediaContainerPosition = function (e, t) {
          void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            this.$content.css("top", e + "px").css("bottom", t + "px");
        }),
        (e.prototype.hideBars = function () {
          var e = this;
          setTimeout(function () {
            e.outer.removeClass("lg-hide-items"),
              e.settings.hideBarsDelay > 0 &&
                (e.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                  e.outer.removeClass("lg-hide-items"),
                    clearTimeout(e.hideBarTimeout),
                    (e.hideBarTimeout = setTimeout(function () {
                      e.outer.addClass("lg-hide-items");
                    }, e.settings.hideBarsDelay));
                }),
                e.outer.trigger("mousemove.lg"));
          }, this.settings.showBarsAfter);
        }),
        (e.prototype.initPictureFill = function (e) {
          if (this.settings.supportLegacyBrowser)
            try {
              picturefill({ elements: [e.get()] });
            } catch (e) {
              console.warn(
                "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
              );
            }
        }),
        (e.prototype.counter = function () {
          if (this.settings.counter) {
            var e =
              '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
              this.getIdName("lg-counter-current") +
              '" class="lg-counter-current">' +
              (this.index + 1) +
              ' </span> /\n                <span id="' +
              this.getIdName("lg-counter-all") +
              '" class="lg-counter-all">' +
              this.galleryItems.length +
              " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(e);
          }
        }),
        (e.prototype.addHtml = function (e) {
          var t, s;
          if (
            (this.galleryItems[e].subHtmlUrl
              ? (s = this.galleryItems[e].subHtmlUrl)
              : (t = this.galleryItems[e].subHtml),
            !s)
          )
            if (t) {
              var i = t.substring(0, 1);
              ("." !== i && "#" !== i) ||
                (t =
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? Fe(this.items).eq(e).find(t).first().html()
                    : Fe(t).first().html());
            } else t = "";
          if (".lg-item" !== this.settings.appendSubHtmlTo)
            s
              ? this.outer.find(".lg-sub-html").load(s)
              : this.outer.find(".lg-sub-html").html(t);
          else {
            var n = Fe(this.getSlideItemId(e));
            s
              ? n.load(s)
              : n.append('<div class="lg-sub-html">' + t + "</div>");
          }
          null != t &&
            ("" === t
              ? this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
            this.LGel.trigger(Ee, { index: e });
        }),
        (e.prototype.preload = function (e) {
          for (
            var t = 1;
            t <= this.settings.preload && !(t >= this.galleryItems.length - e);
            t++
          )
            this.loadContent(e + t, !1);
          for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
            this.loadContent(e - s, !1);
        }),
        (e.prototype.getDummyImgStyles = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                margin-left: -" +
                e.width / 2 +
                "px;\n                margin-top: -" +
                e.height / 2 +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getVideoContStyle = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getDummyImageContent = function (e, t, s) {
          var i;
          if ((this.settings.dynamic || (i = Fe(this.items).eq(t)), i)) {
            var n = void 0;
            if (
              !(n = this.settings.exThumbImage
                ? i.attr(this.settings.exThumbImage)
                : i.find("img").first().attr("src"))
            )
              return "";
            var l =
              "<img " +
              s +
              ' style="' +
              this.getDummyImgStyles(this.currentImageSize) +
              '" class="lg-dummy-img" src="' +
              n +
              '" />';
            return (
              e.addClass("lg-first-slide"),
              this.outer.addClass("lg-first-slide-loading"),
              l
            );
          }
          return "";
        }),
        (e.prototype.setImgMarkup = function (e, t, s) {
          var i = this.galleryItems[s],
            n = i.alt,
            l = i.srcset,
            r = i.sizes,
            a = i.sources,
            o = n ? 'alt="' + n + '"' : "",
            d =
              '<picture class="lg-img-wrap"> ' +
              (this.isFirstSlideWithZoomAnimation()
                ? this.getDummyImageContent(t, s, o)
                : Ye(s, e, o, l, r, a)) +
              "</picture>";
          t.prepend(d);
        }),
        (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
          var n = e.find(".lg-object").first();
          Ue(n.get()) || t
            ? s()
            : (n.on("load.lg error.lg", function () {
                s && s();
              }),
              n.on("error.lg", function () {
                i && i();
              }));
        }),
        (e.prototype.onLgObjectLoad = function (e, t, s, i, n, l) {
          var r = this;
          this.onSlideObjectLoad(
            e,
            l,
            function () {
              r.triggerSlideItemLoad(e, t, s, i, n);
            },
            function () {
              e.addClass("lg-complete lg-complete_"),
                e.html(
                  '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                );
            }
          );
        }),
        (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
          var l = this,
            r = this.galleryItems[t],
            a = n && "video" === this.getSlideType(r) && !r.poster ? i : 0;
          setTimeout(function () {
            e.addClass("lg-complete lg-complete_"),
              l.LGel.trigger(ke, { index: t, delay: s || 0, isFirstSlide: n });
          }, a);
        }),
        (e.prototype.isFirstSlideWithZoomAnimation = function () {
          return !(
            this.lGalleryOn ||
            !this.zoomFromOrigin ||
            !this.currentImageSize
          );
        }),
        (e.prototype.addSlideVideoInfo = function (e) {
          var t = this;
          e.forEach(function (e, s) {
            (e.__slideVideoInfo = Je(e.src, !!e.video, s)),
              e.__slideVideoInfo &&
                t.settings.loadYouTubePoster &&
                !e.poster &&
                e.__slideVideoInfo.youtube &&
                (e.poster =
                  "//img.youtube.com/vi/" +
                  e.__slideVideoInfo.youtube[1] +
                  "/maxresdefault.jpg");
          });
        }),
        (e.prototype.loadContent = function (e, t) {
          var s = this,
            i = this.galleryItems[e],
            n = Fe(this.getSlideItemId(e)),
            l = i.poster,
            r = i.srcset,
            a = i.sizes,
            o = i.sources,
            d = i.src,
            c = i.video,
            p = c && "string" == typeof c ? JSON.parse(c) : c;
          if (i.responsive) {
            var u = i.responsive.split(",");
            d = Xe(u) || d;
          }
          var h = i.__slideVideoInfo,
            g = "",
            m = !!i.iframe,
            f = !this.lGalleryOn,
            v = 0;
          if (
            (f &&
              (v =
                this.zoomFromOrigin && this.currentImageSize
                  ? this.settings.startAnimationDuration + 10
                  : this.settings.backdropDuration + 10),
            !n.hasClass("lg-loaded"))
          ) {
            if (h) {
              var y = this.mediaContainerPosition,
                b = y.top,
                S = y.bottom,
                C = je(
                  this.items[e],
                  this.outer,
                  b + S,
                  h && this.settings.videoMaxSize
                );
              g = this.getVideoContStyle(C);
            }
            if (m) {
              var w = Re(
                this.settings.iframeWidth,
                this.settings.iframeHeight,
                this.settings.iframeMaxWidth,
                this.settings.iframeMaxHeight,
                d,
                i.iframeTitle
              );
              n.prepend(w);
            } else if (l) {
              var x = "";
              f &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (x = this.getDummyImageContent(n, e, ""));
              w = Ke(l, x || "", g, this.settings.strings.playVideo, h);
              n.prepend(w);
            } else if (h) {
              w = '<div class="lg-video-cont " style="' + g + '"></div>';
              n.prepend(w);
            } else if ((this.setImgMarkup(d, n, e), r || o)) {
              var T = n.find(".lg-object");
              this.initPictureFill(T);
            }
            (l || h) &&
              this.LGel.trigger(we, {
                index: e,
                src: d,
                html5Video: p,
                hasPoster: !!l,
              }),
              this.LGel.trigger(Se, { index: e }),
              this.lGalleryOn &&
                ".lg-item" === this.settings.appendSubHtmlTo &&
                this.addHtml(e);
          }
          var E = 0;
          v && !Fe(document.body).hasClass("lg-from-hash") && (E = v),
            this.isFirstSlideWithZoomAnimation() &&
              (setTimeout(function () {
                n.removeClass(
                  "lg-start-end-progress lg-start-progress"
                ).removeAttr("style");
              }, this.settings.startAnimationDuration + 100),
              n.hasClass("lg-loaded") ||
                setTimeout(function () {
                  if (
                    "image" === s.getSlideType(i) &&
                    (n
                      .find(".lg-img-wrap")
                      .append(Ye(e, d, "", r, a, i.sources)),
                    r || o)
                  ) {
                    var t = n.find(".lg-object");
                    s.initPictureFill(t);
                  }
                  ("image" === s.getSlideType(i) ||
                    ("video" === s.getSlideType(i) && l)) &&
                    (s.onLgObjectLoad(n, e, v, E, !0, !1),
                    s.onSlideObjectLoad(
                      n,
                      !(!h || !h.html5 || l),
                      function () {
                        s.loadContentOnFirstSlideLoad(e, n, E);
                      },
                      function () {
                        s.loadContentOnFirstSlideLoad(e, n, E);
                      }
                    ));
                }, this.settings.startAnimationDuration + 100)),
            n.addClass("lg-loaded"),
            (this.isFirstSlideWithZoomAnimation() &&
              ("video" !== this.getSlideType(i) || l)) ||
              this.onLgObjectLoad(n, e, v, E, f, !(!h || !h.html5 || l)),
            (this.zoomFromOrigin && this.currentImageSize) ||
              !n.hasClass("lg-complete_") ||
              this.lGalleryOn ||
              setTimeout(function () {
                n.addClass("lg-complete");
              }, this.settings.backdropDuration),
            (this.lGalleryOn = !0),
            !0 === t &&
              (n.hasClass("lg-complete_")
                ? this.preload(e)
                : n
                    .find(".lg-object")
                    .first()
                    .on("load.lg error.lg", function () {
                      s.preload(e);
                    }));
        }),
        (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
          var i = this;
          setTimeout(function () {
            t.find(".lg-dummy-img").remove(),
              t.removeClass("lg-first-slide"),
              i.outer.removeClass("lg-first-slide-loading"),
              (i.isDummyImageRemoved = !0),
              i.preload(e);
          }, s + 300);
        }),
        (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
          var i = this;
          void 0 === s && (s = 0);
          var n = [],
            l = Math.max(s, 3);
          l = Math.min(l, this.galleryItems.length);
          var r = "lg-item-" + this.lgId + "-" + t;
          if (this.galleryItems.length <= 3)
            return (
              this.galleryItems.forEach(function (e, t) {
                n.push("lg-item-" + i.lgId + "-" + t);
              }),
              n
            );
          if (e < (this.galleryItems.length - 1) / 2) {
            for (var a = e; a > e - l / 2 && a >= 0; a--)
              n.push("lg-item-" + this.lgId + "-" + a);
            var o = n.length;
            for (a = 0; a < l - o; a++)
              n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
          } else {
            for (a = e; a <= this.galleryItems.length - 1 && a < e + l / 2; a++)
              n.push("lg-item-" + this.lgId + "-" + a);
            for (o = n.length, a = 0; a < l - o; a++)
              n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
          }
          return (
            this.settings.loop &&
              (e === this.galleryItems.length - 1
                ? n.push("lg-item-" + this.lgId + "-0")
                : 0 === e &&
                  n.push(
                    "lg-item-" +
                      this.lgId +
                      "-" +
                      (this.galleryItems.length - 1)
                  )),
            -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + t),
            n
          );
        }),
        (e.prototype.organizeSlideItems = function (e, t) {
          var s = this,
            i = this.getItemsToBeInsertedToDom(
              e,
              t,
              this.settings.numberOfSlideItemsInDom
            );
          return (
            i.forEach(function (e) {
              -1 === s.currentItemsInDom.indexOf(e) &&
                s.$inner.append('<div id="' + e + '" class="lg-item"></div>');
            }),
            this.currentItemsInDom.forEach(function (e) {
              -1 === i.indexOf(e) && Fe("#" + e).remove();
            }),
            i
          );
        }),
        (e.prototype.getPreviousSlideIndex = function () {
          var e = 0;
          try {
            var t = this.outer.find(".lg-current").first().attr("id");
            e = parseInt(t.split("-")[3]) || 0;
          } catch (t) {
            e = 0;
          }
          return e;
        }),
        (e.prototype.setDownloadValue = function (e) {
          if (this.settings.download) {
            var t = this.galleryItems[e];
            if (!1 === t.downloadUrl || "false" === t.downloadUrl)
              this.outer.addClass("lg-hide-download");
            else {
              var s = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
                s.attr("href", t.downloadUrl || t.src),
                t.download && s.attr("download", t.download);
            }
          }
        }),
        (e.prototype.makeSlideAnimation = function (e, t, s) {
          var i = this;
          this.lGalleryOn && s.addClass("lg-slide-progress"),
            setTimeout(
              function () {
                i.outer.addClass("lg-no-trans"),
                  i.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-next-slide"),
                  "prev" === e
                    ? (t.addClass("lg-prev-slide"), s.addClass("lg-next-slide"))
                    : (t.addClass("lg-next-slide"),
                      s.addClass("lg-prev-slide")),
                  setTimeout(function () {
                    i.outer.find(".lg-item").removeClass("lg-current"),
                      t.addClass("lg-current"),
                      i.outer.removeClass("lg-no-trans");
                  }, 50);
              },
              this.lGalleryOn ? this.settings.slideDelay : 0
            );
        }),
        (e.prototype.slide = function (e, t, s, i) {
          var n = this,
            l = this.getPreviousSlideIndex();
          if (
            ((this.currentItemsInDom = this.organizeSlideItems(e, l)),
            !this.lGalleryOn || l !== e)
          ) {
            var r = this.galleryItems.length;
            if (!this.lgBusy) {
              this.settings.counter && this.updateCurrentCounter(e);
              var a = this.getSlideItem(e),
                o = this.getSlideItem(l),
                d = this.galleryItems[e],
                c = d.__slideVideoInfo;
              if (
                (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                this.setDownloadValue(e),
                c)
              ) {
                var p = this.mediaContainerPosition,
                  u = p.top,
                  h = p.bottom,
                  g = je(
                    this.items[e],
                    this.outer,
                    u + h,
                    c && this.settings.videoMaxSize
                  );
                this.resizeVideoSlide(e, g);
              }
              if (
                (this.LGel.trigger(Ae, {
                  prevIndex: l,
                  index: e,
                  fromTouch: !!t,
                  fromThumb: !!s,
                }),
                (this.lgBusy = !0),
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(e),
                i || (e < l ? (i = "prev") : e > l && (i = "next")),
                t)
              ) {
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-prev-slide lg-current lg-next-slide");
                var m = void 0,
                  f = void 0;
                r > 2
                  ? ((m = e - 1),
                    (f = e + 1),
                    ((0 === e && l === r - 1) || (e === r - 1 && 0 === l)) &&
                      ((f = 0), (m = r - 1)))
                  : ((m = 0), (f = 1)),
                  "prev" === i
                    ? this.getSlideItem(f).addClass("lg-next-slide")
                    : this.getSlideItem(m).addClass("lg-prev-slide"),
                  a.addClass("lg-current");
              } else this.makeSlideAnimation(i, a, o);
              this.lGalleryOn
                ? setTimeout(function () {
                    n.loadContent(e, !0),
                      ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(e);
                  }, this.settings.speed +
                    50 +
                    (t ? 0 : this.settings.slideDelay))
                : this.loadContent(e, !0),
                setTimeout(function () {
                  (n.lgBusy = !1),
                    o.removeClass("lg-slide-progress"),
                    n.LGel.trigger(Me, {
                      prevIndex: l,
                      index: e,
                      fromTouch: t,
                      fromThumb: s,
                    });
                }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                  (t ? 0 : this.settings.slideDelay));
            }
            this.index = e;
          }
        }),
        (e.prototype.updateCurrentCounter = function (e) {
          this.getElementById("lg-counter-current").html(e + 1 + "");
        }),
        (e.prototype.updateCounterTotal = function () {
          this.getElementById("lg-counter-all").html(
            this.galleryItems.length + ""
          );
        }),
        (e.prototype.getSlideType = function (e) {
          return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
        }),
        (e.prototype.touchMove = function (e, t, s) {
          var i = t.pageX - e.pageX,
            n = t.pageY - e.pageY,
            l = !1;
          if (
            (this.swipeDirection
              ? (l = !0)
              : Math.abs(i) > 15
              ? ((this.swipeDirection = "horizontal"), (l = !0))
              : Math.abs(n) > 15 &&
                ((this.swipeDirection = "vertical"), (l = !0)),
            l)
          ) {
            var r = this.getSlideItem(this.index);
            if ("horizontal" === this.swipeDirection) {
              null == s || s.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(r, i, 0);
              var a = r.get().offsetWidth,
                o = (15 * a) / 100 - Math.abs((10 * i) / 100);
              this.setTranslate(
                this.outer.find(".lg-prev-slide").first(),
                -a + i - o,
                0
              ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  a + i + o,
                  0
                );
            } else if (
              "vertical" === this.swipeDirection &&
              this.settings.swipeToClose
            ) {
              null == s || s.preventDefault(),
                this.$container.addClass("lg-dragging-vertical");
              var d = 1 - Math.abs(n) / window.innerHeight;
              this.$backdrop.css("opacity", d);
              var c = 1 - Math.abs(n) / (2 * window.innerWidth);
              this.setTranslate(r, 0, n, c, c),
                Math.abs(n) > 100 &&
                  this.outer
                    .addClass("lg-hide-items")
                    .removeClass("lg-components-open");
            }
          }
        }),
        (e.prototype.touchEnd = function (e, t, s) {
          var i,
            n = this;
          "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function () {
              n.$container.removeClass("lg-dragging-vertical"),
                n.outer
                  .removeClass("lg-dragging lg-hide-items")
                  .addClass("lg-components-open");
              var l = !0;
              if ("horizontal" === n.swipeDirection) {
                i = e.pageX - t.pageX;
                var r = Math.abs(e.pageX - t.pageX);
                i < 0 && r > n.settings.swipeThreshold
                  ? (n.goToNextSlide(!0), (l = !1))
                  : i > 0 &&
                    r > n.settings.swipeThreshold &&
                    (n.goToPrevSlide(!0), (l = !1));
              } else if ("vertical" === n.swipeDirection) {
                if (
                  ((i = Math.abs(e.pageY - t.pageY)),
                  n.settings.closable && n.settings.swipeToClose && i > 100)
                )
                  return void n.closeGallery();
                n.$backdrop.css("opacity", 1);
              }
              if (
                (n.outer.find(".lg-item").removeAttr("style"),
                l && Math.abs(e.pageX - t.pageX) < 5)
              ) {
                var a = Fe(s.target);
                n.isPosterElement(a) && n.LGel.trigger(Oe);
              }
              n.swipeDirection = void 0;
            }),
            setTimeout(function () {
              n.outer.hasClass("lg-dragging") ||
                "lg-slide" === n.settings.mode ||
                n.outer.removeClass("lg-slide");
            }, this.settings.speed + 100);
        }),
        (e.prototype.enableSwipe = function () {
          var e = this,
            t = {},
            s = {},
            i = !1,
            n = !1;
          this.settings.enableSwipe &&
            (this.$inner.on("touchstart.lg", function (s) {
              e.dragOrSwipeEnabled = !0;
              var i = e.getSlideItem(e.index);
              (!Fe(s.target).hasClass("lg-item") &&
                !i.get().contains(s.target)) ||
                e.outer.hasClass("lg-zoomed") ||
                e.lgBusy ||
                1 !== s.targetTouches.length ||
                ((n = !0),
                (e.touchAction = "swipe"),
                e.manageSwipeClass(),
                (t = {
                  pageX: s.targetTouches[0].pageX,
                  pageY: s.targetTouches[0].pageY,
                }));
            }),
            this.$inner.on("touchmove.lg", function (l) {
              n &&
                "swipe" === e.touchAction &&
                1 === l.targetTouches.length &&
                ((s = {
                  pageX: l.targetTouches[0].pageX,
                  pageY: l.targetTouches[0].pageY,
                }),
                e.touchMove(t, s, l),
                (i = !0));
            }),
            this.$inner.on("touchend.lg", function (l) {
              if ("swipe" === e.touchAction) {
                if (i) (i = !1), e.touchEnd(s, t, l);
                else if (n) {
                  var r = Fe(l.target);
                  e.isPosterElement(r) && e.LGel.trigger(Oe);
                }
                (e.touchAction = void 0), (n = !1);
              }
            }));
        }),
        (e.prototype.enableDrag = function () {
          var e = this,
            t = {},
            s = {},
            i = !1,
            n = !1;
          this.settings.enableDrag &&
            (this.outer.on("mousedown.lg", function (s) {
              e.dragOrSwipeEnabled = !0;
              var n = e.getSlideItem(e.index);
              (Fe(s.target).hasClass("lg-item") ||
                n.get().contains(s.target)) &&
                (e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  (s.preventDefault(),
                  e.lgBusy ||
                    (e.manageSwipeClass(),
                    (t = { pageX: s.pageX, pageY: s.pageY }),
                    (i = !0),
                    (e.outer.get().scrollLeft += 1),
                    (e.outer.get().scrollLeft -= 1),
                    e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                    e.LGel.trigger($e))));
            }),
            Fe(window).on("mousemove.lg.global" + this.lgId, function (l) {
              i &&
                e.lgOpened &&
                ((n = !0),
                (s = { pageX: l.pageX, pageY: l.pageY }),
                e.touchMove(t, s),
                e.LGel.trigger(Pe));
            }),
            Fe(window).on("mouseup.lg.global" + this.lgId, function (l) {
              if (e.lgOpened) {
                var r = Fe(l.target);
                n
                  ? ((n = !1), e.touchEnd(s, t, l), e.LGel.trigger(_e))
                  : e.isPosterElement(r) && e.LGel.trigger(Oe),
                  i &&
                    ((i = !1),
                    e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
              }
            }));
        }),
        (e.prototype.triggerPosterClick = function () {
          var e = this;
          this.$inner.on("click.lg", function (t) {
            !e.dragOrSwipeEnabled &&
              e.isPosterElement(Fe(t.target)) &&
              e.LGel.trigger(Oe);
          });
        }),
        (e.prototype.manageSwipeClass = function () {
          var e = this.index + 1,
            t = this.index - 1;
          this.settings.loop &&
            this.galleryItems.length > 2 &&
            (0 === this.index
              ? (t = this.galleryItems.length - 1)
              : this.index === this.galleryItems.length - 1 && (e = 0)),
            this.outer
              .find(".lg-item")
              .removeClass("lg-next-slide lg-prev-slide"),
            t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
            this.getSlideItem(e).addClass("lg-next-slide");
        }),
        (e.prototype.goToNextSlide = function (e) {
          var t = this,
            s = this.settings.loop;
          e && this.galleryItems.length < 3 && (s = !1),
            this.lgBusy ||
              (this.index + 1 < this.galleryItems.length
                ? (this.index++,
                  this.LGel.trigger(De, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : s
                ? ((this.index = 0),
                  this.LGel.trigger(De, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-right-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-right-end");
                  }, 400)));
        }),
        (e.prototype.goToPrevSlide = function (e) {
          var t = this,
            s = this.settings.loop;
          e && this.galleryItems.length < 3 && (s = !1),
            this.lgBusy ||
              (this.index > 0
                ? (this.index--,
                  this.LGel.trigger(ze, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : s
                ? ((this.index = this.galleryItems.length - 1),
                  this.LGel.trigger(ze, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-left-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-left-end");
                  }, 400)));
        }),
        (e.prototype.keyPress = function () {
          var e = this;
          Fe(window).on("keydown.lg.global" + this.lgId, function (t) {
            e.lgOpened &&
              !0 === e.settings.escKey &&
              27 === t.keyCode &&
              (t.preventDefault(),
              e.settings.allowMediaOverlap &&
              e.outer.hasClass("lg-can-toggle") &&
              e.outer.hasClass("lg-components-open")
                ? e.outer.removeClass("lg-components-open")
                : e.closeGallery()),
              e.lgOpened &&
                e.galleryItems.length > 1 &&
                (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
          });
        }),
        (e.prototype.arrow = function () {
          var e = this;
          this.getElementById("lg-prev").on("click.lg", function () {
            e.goToPrevSlide();
          }),
            this.getElementById("lg-next").on("click.lg", function () {
              e.goToNextSlide();
            });
        }),
        (e.prototype.arrowDisable = function (e) {
          if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var t = this.getElementById("lg-prev"),
              s = this.getElementById("lg-next");
            e + 1 === this.galleryItems.length
              ? s.attr("disabled", "disabled").addClass("disabled")
              : s.removeAttr("disabled").removeClass("disabled"),
              0 === e
                ? t.attr("disabled", "disabled").addClass("disabled")
                : t.removeAttr("disabled").removeClass("disabled");
          }
        }),
        (e.prototype.setTranslate = function (e, t, s, i, n) {
          void 0 === i && (i = 1),
            void 0 === n && (n = 1),
            e.css(
              "transform",
              "translate3d(" +
                t +
                "px, " +
                s +
                "px, 0px) scale3d(" +
                i +
                ", " +
                n +
                ", 1)"
            );
        }),
        (e.prototype.mousewheel = function () {
          var e = this,
            t = 0;
          this.outer.on("wheel.lg", function (s) {
            if (s.deltaY && !(e.galleryItems.length < 2)) {
              s.preventDefault();
              var i = new Date().getTime();
              i - t < 1e3 ||
                ((t = i),
                s.deltaY > 0
                  ? e.goToNextSlide()
                  : s.deltaY < 0 && e.goToPrevSlide());
            }
          });
        }),
        (e.prototype.isSlideElement = function (e) {
          return (
            e.hasClass("lg-outer") ||
            e.hasClass("lg-item") ||
            e.hasClass("lg-img-wrap")
          );
        }),
        (e.prototype.isPosterElement = function (e) {
          var t = this.getSlideItem(this.index)
            .find(".lg-video-play-button")
            .get();
          return (
            e.hasClass("lg-video-poster") ||
            e.hasClass("lg-video-play-button") ||
            (t && t.contains(e.get()))
          );
        }),
        (e.prototype.toggleMaximize = function () {
          var e = this;
          this.getElementById("lg-maximize").on("click.lg", function () {
            e.$container.toggleClass("lg-inline"), e.refreshOnResize();
          });
        }),
        (e.prototype.invalidateItems = function () {
          for (var e = 0; e < this.items.length; e++) {
            var t = Fe(this.items[e]);
            t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
          }
        }),
        (e.prototype.manageCloseGallery = function () {
          var e = this;
          if (this.settings.closable) {
            var t = !1;
            this.getElementById("lg-close").on("click.lg", function () {
              e.closeGallery();
            }),
              this.settings.closeOnTap &&
                (this.outer.on("mousedown.lg", function (s) {
                  var i = Fe(s.target);
                  t = !!e.isSlideElement(i);
                }),
                this.outer.on("mousemove.lg", function () {
                  t = !1;
                }),
                this.outer.on("mouseup.lg", function (s) {
                  var i = Fe(s.target);
                  e.isSlideElement(i) &&
                    t &&
                    (e.outer.hasClass("lg-dragging") || e.closeGallery());
                }));
          }
        }),
        (e.prototype.closeGallery = function (e) {
          var t = this;
          if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
          this.LGel.trigger(Be), Fe(window).scrollTop(this.prevScrollTop);
          var s,
            i = this.items[this.index];
          if (this.zoomFromOrigin && i) {
            var n = this.mediaContainerPosition,
              l = n.top,
              r = n.bottom,
              a = this.galleryItems[this.index],
              o = a.__slideVideoInfo,
              d = a.poster,
              c = je(
                i,
                this.outer,
                l + r,
                o && d && this.settings.videoMaxSize
              );
            s = We(i, this.outer, l, r, c);
          }
          this.zoomFromOrigin && s
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms"
                )
                .css("transform", s))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            (this.lGalleryOn = !1),
            (this.isDummyImageRemoved = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            clearTimeout(this.hideBarTimeout),
            (this.hideBarTimeout = !1),
            Fe("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
          var p =
            this.zoomFromOrigin && s
              ? Math.max(
                  this.settings.startAnimationDuration,
                  this.settings.backdropDuration
                )
              : this.settings.backdropDuration;
          return (
            this.$container.removeClass("lg-show-in"),
            setTimeout(function () {
              t.zoomFromOrigin &&
                s &&
                t.outer.removeClass("lg-zoom-from-image"),
                t.$container.removeClass("lg-show"),
                t.$backdrop
                  .removeAttr("style")
                  .css(
                    "transition-duration",
                    t.settings.backdropDuration + "ms"
                  ),
                t.outer.removeClass("lg-closing " + t.settings.startClass),
                t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                t.$inner.empty(),
                t.lgOpened && t.LGel.trigger(Ge, { instance: t }),
                t.outer.get() && t.outer.get().blur(),
                (t.lgOpened = !1);
            }, p + 100),
            p + 100
          );
        }),
        (e.prototype.initModules = function () {
          this.plugins.forEach(function (e) {
            try {
              e.init();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly initiated"
              );
            }
          });
        }),
        (e.prototype.destroyModules = function (e) {
          this.plugins.forEach(function (t) {
            try {
              e ? t.destroy() : t.closeGallery && t.closeGallery();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly destroyed"
              );
            }
          });
        }),
        (e.prototype.refresh = function (e) {
          this.settings.dynamic || this.invalidateItems(),
            (this.galleryItems = e || this.getItems()),
            this.updateControls(),
            this.openGalleryOnItemClick(),
            this.LGel.trigger(Te);
        }),
        (e.prototype.updateControls = function () {
          this.addSlideVideoInfo(this.galleryItems),
            this.updateCounterTotal(),
            this.manageSingleSlideClassName();
        }),
        (e.prototype.destroy = function () {
          var e = this,
            t = this.closeGallery(!0);
          return (
            setTimeout(function () {
              e.destroyModules(!0),
                e.settings.dynamic || e.invalidateItems(),
                Fe(window).off(".lg.global" + e.lgId),
                e.LGel.off(".lg"),
                e.$container.remove();
            }, t),
            t
          );
        }),
        e
      );
    })();
  const st = function (e, t) {
      return new tt(e, t);
    },
    it = document.querySelectorAll("[data-gallery]");
  if (it.length) {
    let t = [];
    it.forEach((e) => {
      t.push({
        gallery: e,
        galleryClass: st(e, {
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          speed: 500,
          selector: "a",
        }),
      });
    }),
      (e.gallery = t);
  }
  function nt(e) {
    this.type = e;
  }
  (nt.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        s = t.dataset.da.trim().split(","),
        i = {};
      (i.element = t),
        (i.parent = t.parentNode),
        (i.destination = document.querySelector(s[0].trim())),
        (i.breakpoint = s[1] ? s[1].trim() : "767"),
        (i.place = s[2] ? s[2].trim() : "last"),
        (i.index = this.indexInParent(i.parent, i.element)),
        this.оbjects.push(i);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, s) {
          return Array.prototype.indexOf.call(s, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const s = this.mediaQueries[t],
        i = String.prototype.split.call(s, ","),
        n = window.matchMedia(i[0]),
        l = i[1],
        r = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === l;
        });
      n.addListener(function () {
        e.mediaHandler(n, r);
      }),
        this.mediaHandler(n, r);
    }
  }),
    (nt.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          (s.index = this.indexInParent(s.parent, s.element)),
            this.moveTo(s.place, s.element, s.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const s = t[e];
          s.element.classList.contains(this.daClassname) &&
            this.moveBack(s.parent, s.element, s.index);
        }
    }),
    (nt.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (nt.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (nt.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
    }),
    (nt.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new nt("max").init(),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (e) {
        n &&
          e.target.closest(".icon-menu") &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? l(e) : r(e);
          })(),
          document.documentElement.classList.toggle("menu-open"));
      }),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const s = Array.from(e).filter(function (e, t, s) {
          return !e.dataset.spollers.split(",")[0];
        });
        s.length && l(s);
        let n = o(e, "spollers");
        function l(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  r(e),
                  e.addEventListener("click", a))
                : (e.classList.remove("_spoller-init"),
                  r(e, !1),
                  e.removeEventListener("click", a));
          });
        }
        function r(e, t = !0) {
          let s = e.querySelectorAll("[data-spoller]");
          s.length &&
            ((s = Array.from(s).filter(
              (t) => t.closest("[data-spollers]") === e
            )),
            s.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            }));
        }
        function a(e) {
          const t = e.target;
          if (t.closest("[data-spoller]")) {
            const s = t.closest("[data-spoller]"),
              n = s.closest("[data-spollers]"),
              l = n.hasAttribute("data-one-spoller"),
              r = n.dataset.spollersSpeed
                ? parseInt(n.dataset.spollersSpeed)
                : 500;
            n.querySelectorAll("._slide").length ||
              (l && !s.classList.contains("_spoller-active") && d(n),
              s.classList.toggle("_spoller-active"),
              i(s.nextElementSibling, r)),
              e.preventDefault();
          }
        }
        function d(e) {
          const s = e.querySelector("[data-spoller]._spoller-active"),
            i = e.dataset.spollersSpeed
              ? parseInt(e.dataset.spollersSpeed)
              : 500;
          s &&
            !e.querySelectorAll("._slide").length &&
            (s.classList.remove("_spoller-active"), t(s.nextElementSibling, i));
        }
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              l(e.itemsArray, e.matchMedia);
            }),
              l(e.itemsArray, e.matchMedia);
          });
        const c = document.querySelectorAll("[data-spoller-close]");
        c.length &&
          document.addEventListener("click", function (e) {
            e.target.closest("[data-spollers]") ||
              c.forEach((e) => {
                const s = e.closest("[data-spollers]"),
                  i = s.dataset.spollersSpeed
                    ? parseInt(s.dataset.spollersSpeed)
                    : 500;
                s.querySelectorAll("._slide").length ||
                  (e.classList.remove("_spoller-active"),
                  t(e.nextElementSibling, i));
              });
          });
      }
    })(),
    (function () {
      const e = document.querySelectorAll("[data-tabs]");
      let i = [];
      if (e.length > 0) {
        const t = (function () {
          if (location.hash) return location.hash.replace("#", "");
        })();
        t && t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
          e.forEach((e, t) => {
            e.classList.add("_tab-init"),
              e.setAttribute("data-tabs-index", t),
              e.addEventListener("click", r),
              (function (e) {
                let t = e.querySelectorAll("[data-tabs-titles]>*"),
                  s = e.querySelectorAll("[data-tabs-body]>*");
                const n = e.dataset.tabsIndex,
                  l = i[0] == n;
                if (l) {
                  const t = e.querySelector("[data-tabs-titles]>._tab-active");
                  t && t.classList.remove("_tab-active");
                }
                s.length &&
                  ((s = Array.from(s).filter(
                    (t) => t.closest("[data-tabs]") === e
                  )),
                  (t = Array.from(t).filter(
                    (t) => t.closest("[data-tabs]") === e
                  )),
                  s.forEach((e, s) => {
                    t[s].setAttribute("data-tabs-title", ""),
                      e.setAttribute("data-tabs-item", ""),
                      l && s == i[1] && t[s].classList.add("_tab-active"),
                      (e.hidden = !t[s].classList.contains("_tab-active"));
                  }));
              })(e);
          });
        let s = o(e, "tabs");
        s &&
          s.length &&
          s.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              n(e.itemsArray, e.matchMedia);
            }),
              n(e.itemsArray, e.matchMedia);
          });
      }
      function n(e, t) {
        e.forEach((e) => {
          let s = (e = e.item).querySelector("[data-tabs-titles]"),
            i = e.querySelectorAll("[data-tabs-title]"),
            n = e.querySelector("[data-tabs-body]"),
            l = e.querySelectorAll("[data-tabs-item]");
          (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
            (l = Array.from(l).filter((t) => t.closest("[data-tabs]") === e)),
            l.forEach((l, r) => {
              t.matches
                ? (n.append(i[r]), n.append(l), e.classList.add("_tab-spoller"))
                : (s.append(i[r]), e.classList.remove("_tab-spoller"));
            });
        });
      }
      function l(e) {
        let i = e.querySelectorAll("[data-tabs-title]"),
          n = e.querySelectorAll("[data-tabs-item]");
        const l = e.dataset.tabsIndex;
        const r = (function (e) {
          if (e.hasAttribute("data-tabs-animate"))
            return e.dataset.tabsAnimate > 0
              ? Number(e.dataset.tabsAnimate)
              : 500;
        })(e);
        if (n.length > 0) {
          const a = e.hasAttribute("data-tabs-hash");
          (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
            n.forEach((e, n) => {
              var o;
              i[n].classList.contains("_tab-active")
                ? (r ? s(e, r) : (e.hidden = !1),
                  a &&
                    !e.closest(".popup") &&
                    ((o = (o = `tab-${l}-${n}`)
                      ? `#${o}`
                      : window.location.href.split("#")[0]),
                    history.pushState("", "", o)))
                : r
                ? t(e, r)
                : (e.hidden = !0);
            });
        }
      }
      function r(e) {
        const t = e.target;
        if (t.closest("[data-tabs-title]")) {
          const s = t.closest("[data-tabs-title]"),
            i = s.closest("[data-tabs]");
          if (
            !s.classList.contains("_tab-active") &&
            !i.querySelector("._slide")
          ) {
            let e = i.querySelectorAll("[data-tabs-title]._tab-active");
            e.length &&
              (e = Array.from(e).filter((e) => e.closest("[data-tabs]") === i)),
              e.length && e[0].classList.remove("_tab-active"),
              s.classList.add("_tab-active"),
              l(i);
          }
          e.preventDefault();
        }
      }
    })(),
    c(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const s = t.closest("[data-goto]"),
              i = s.dataset.goto ? s.dataset.goto : "",
              n = !!s.hasAttribute("data-goto-header"),
              l = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
            ve(i, n, l), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            s = t.target;
          if ("navigator" === s.dataset.watch) {
            const e = s.id,
              i =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? i && i.classList.add("_navigator-active")
              : i && i.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })(),
    (function () {
      ye = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        i = e.dataset.scroll ? e.dataset.scroll : 1;
      let n,
        l = 0;
      document.addEventListener("windowScroll", function (r) {
        const a = window.scrollY;
        clearTimeout(n),
          a >= i
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (a > l
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, s))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (l = a <= 0 ? 0 : a);
      });
    })();
})();
