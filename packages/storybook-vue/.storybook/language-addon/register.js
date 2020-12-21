import React from "react";
import { addons, types } from "@storybook/addons";
import { useGlobals } from "@storybook/api/dist";
import useLocalStorage from "../use-localstorage";
import translationMap from "../../translations.json";

// utility to create new links
const createLink = label => {
  const link = document.createElement("a");
  link.href = "#";
  link.id = `language-${label}`;
  link.setAttribute("class", "css-1xonygc");

  const button = document.createElement("button");
  button.setAttribute("class", "css-12xwigy");
  button.innerHTML = label;
  link.appendChild(button);

  return link;
};

// global variables so there can only be one for each;
let languageToolbar;
const englishLink = createLink("English");
const germanLink = createLink("Deutsch");

addons.register("@scaleds/language-addon", () => {
  addons.add(`@scaleds/language-addon`, {
    type: types.TAB,
    title: "",
    route: () => {
      const [persistedLocale, setPersistedLocale] = useLocalStorage(
        "persistedLocale",
        "en"
      );
      const [globals, updateGlobals] = useGlobals();
      const { locale } = globals;

      // Set the initial global language
      React.useEffect(() => {
        if (!locale) {
          updateGlobals({ ...globals, locale: persistedLocale });
        }
      }, [locale, persistedLocale]);

      // Create the languageToolbar element, add event listeners to it's links and put them inside
      if (!languageToolbar) {
        englishLink.addEventListener("click", e => {
          e.preventDefault();
          setPersistedLocale("en");
          updateGlobals({ ...globals, locale: "en" });
        });
        germanLink.addEventListener("click", e => {
          e.preventDefault();
          setPersistedLocale("de");
          updateGlobals({ ...globals, locale: "de" });
        });

        languageToolbar = document.createElement("div");
        languageToolbar.setAttribute("style", "width: 100%;");
        languageToolbar.id = "language-toolbar";
        languageToolbar.appendChild(englishLink);
        languageToolbar.appendChild(germanLink);
      }

      // Apply active classname to the links when the locale changes
      React.useEffect(() => {
        if (!englishLink || !germanLink) {
          return;
        }
        englishLink
          .querySelector("button")
          .setAttribute(
            "class",
            locale === "en" ? "css-uj88eo" : "css-12xwigy"
          );
        germanLink
          .querySelector("button")
          .setAttribute(
            "class",
            locale === "de" ? "css-uj88eo" : "css-12xwigy"
          );
      }, [locale]);

      // Wait for the DOM to settle, then append the languageToolbar if it's not there yet
      setTimeout(() => {
        const rightSection = document.querySelector(
          "#root > div > div.css-sqdry3 > div > div.css-sqdry3 > div.os-host.os-host-foreign.os-theme-dark.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.os-host-scrollbar-vertical-hidden.css-1ncp457.os-host-transition > div.os-padding > div > div > div > div.css-pvky73"
        );

        const toolbar = document.querySelector(
          "#root > div > div.css-sqdry3 > div > div.css-sqdry3 > div.os-host.os-host-foreign.os-theme-dark.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.os-host-scrollbar-vertical-hidden.css-1ncp457.os-host-transition > div.os-padding > div > div > div"
        );

        if (rightSection) {
          if (!document.getElementById("language-toolbar")) {
            toolbar.insertBefore(languageToolbar, rightSection);
          }
        }
      }, 100);

      // Finally - apply the translations of the sidebar
      React.useEffect(() => {
        if (!locale) {
          return;
        }
        translationMap.forEach(translation => {
          const element = window.document.querySelector(
            translation.elementSelector
          );
          if (!element) {
            return;
          }
          element.innerHTML = translation[locale];
        });
      }, [locale]);

      return null;
    },
    render: () => null,
    match: () => null
  });
});