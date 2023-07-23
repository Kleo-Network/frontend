import React, { useState } from "react";
import { ALIGN, DefaultCookieSettings } from "../../utils/constants";
import Layout from "./Layout";
import RangeSlider from "../../utils/RangeSlider";
import "./CookieManager.css";

export default function CookieManager() {
  const [settings, changeSettings] = useState(DefaultCookieSettings);

  const changeUserSettings = (value, propertyName, addPx = false) => {
    changeSettings((oldSettings) => {
      let path = propertyName.split(".");
      const depth = path.length;
      const state = { ...oldSettings };
      let ref = state;
      for (let i = 0; i < depth; i += 1) {
        if (i === depth - 1) {
          ref[path[i]] = value + (addPx ? "px" : "");
        } else {
          ref = ref[path[i]];
        }
      }
      return state;
    });

    console.log(settings);
  };

  return (
    <div className="flex flex-col">
      <div className="md:pl-2 md:border-b border-gray-200 pb-4">
        <div className="w-full">
          <h3 className="font-bold mb-3 mt-4">
            Preview of Cookie Manager:
          </h3>
          <Layout settings={settings} />
        </div>
      </div>
      <div className="md:p-3">
        <div className="w-full">
          <div className="grid grid-cols-1 cookie-form border-b-2 p-2 border-black">
            <h3 className="font-bold mb-3 header">
              Update default settings:{" "}
            </h3>
            <div className="border border-gray-200 p-3 form-width">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Width:
              </span>
              <RangeSlider
                min="100"
                max="1000"
                current={+settings.size.width.replace("px", "")}
                onChange={(e) => changeUserSettings(e, "size.width", true)}
              />
            </div>

            <div className="border border-gray-200 p-3 form-height">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Height:
              </span>
              <RangeSlider
                min="50"
                max="500"
                current={+settings.size.height.replace("px", "")}
                onChange={(e) => changeUserSettings(e, "size.height", true)}
              />
            </div>

            <div className="border border-gray-200  p-3 cookie-text">
              <label className="mb-2 inline-block text-sm font-semibold ">
                Cookie text:
              </label>

              <textarea
                class="block w-full px-4 py-2 border rounded-md text-sm leading-7"
                value={settings.text}
                onChange={(e) => changeUserSettings(e.target.value, "text")}
              ></textarea>
            </div>

            <div className="border border-gray-200 p-3 form-color">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Font Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.color}
                  onChange={(e) => changeUserSettings(e.target.value, "color")}
                />
              </div>

              <span className="mb-2 inline-block text-sm font-semibold ">
                Background Container Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.bgColor}
                  onChange={(e) =>
                    changeUserSettings(e.target.value, "bgColor")
                  }
                />
              </div>
            </div>

            <div className="border border-gray-200 p-3 font-size">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Font size of the text:
              </span>

              <RangeSlider
                min={10}
                max={25}
                current={+settings.fontSize.replace("px", "")}
                onChange={(e) => changeUserSettings(e, "fontSize", true)}
              />
            </div>

            <div className="border border-gray-200 form-select">
              <label class="block text-gray-700 text-sm font-semibold mb-2">
                Select Alignment style of text with buttons:
              </label>
              <select
                class="block w-full px-4 py-2 border rounded-md bg-white text-gray-900"
                value={settings.alignButtonsWithText}
                onChange={(e) =>
                  changeUserSettings(e.target.value, "alignButtonsWithText")
                }
              >
                {Object.keys(ALIGN).map((key) => (
                  <option value={ALIGN[key]} key={ALIGN[key]}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 cookie-form border-y-2 p-2 border-black">
            <h3 className="font-bold mb-3 header">
              Update Apply button settings:
            </h3>
            <div className="border border-gray-200 p-3 form-width">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Button Width:
              </span>
              <RangeSlider
                min="50"
                max="100"
                current={+settings.buttonProps.size.width.replace("px", "")}
                onChange={(e) =>
                  changeUserSettings(e, "buttonProps.size.width", true)
                }
              />
            </div>

            <div className="border border-gray-200 p-3 form-height">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Button Height:
              </span>
              <RangeSlider
                min="0"
                max="50"
                current={+settings.buttonProps.size.height.replace("px", "")}
                onChange={(e) =>
                  changeUserSettings(e, "buttonProps.size.height", true)
                }
              />
            </div>

            <div className="border border-gray-200  p-3 cookie-text">
              <label className="mb-2 inline-block text-sm font-semibold ">
                Apply button text:
              </label>

              <input
                type="text"
                class="block w-full px-4 py-2 border rounded-md text-sm leading-7"
                value={settings.buttonProps.accept.text}
                onChange={(e) =>
                  changeUserSettings(e.target.value, "buttonProps.accept.text")
                }
              />
            </div>

            <div className="border border-gray-200 p-3 form-color">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Apply Button Font Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.buttonProps.accept.color}
                  onChange={(e) =>
                    changeUserSettings(
                      e.target.value,
                      "buttonProps.accept.color"
                    )
                  }
                />
              </div>

              <span className="mb-2 inline-block text-sm font-semibold ">
                Apply Button Background Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.buttonProps.accept.bgColor}
                  onChange={(e) =>
                    changeUserSettings(
                      e.target.value,
                      "buttonProps.accept.bgColor"
                    )
                  }
                />
              </div>
            </div>

            <div className="border border-gray-200 p-3 font-size">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Font size of Apply button text:
              </span>

              <RangeSlider
                min={10}
                max={25}
                current={
                  +settings.buttonProps.accept.fontSize.replace("px", "")
                }
                onChange={(e) =>
                  changeUserSettings(e, "buttonProps.accept.fontSize", true)
                }
              />
            </div>

            <div className="border border-gray-200 form-select">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Apply Button Border Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.buttonProps.accept.borderColor}
                  onChange={(e) =>
                    changeUserSettings(
                      e.target.value,
                      "buttonProps.accept.borderColor"
                    )
                  }
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 cookie-form border-t-2 p-2 border-black">
            <h3 className="font-bold mb-3 header">
              Update Manage button settings:
            </h3>

            <div className="border border-gray-200  p-3 cookie-text">
              <label className="mb-2 inline-block text-sm font-semibold ">
                Manage button text:
              </label>

              <input
                type="text"
                class="block w-full px-4 py-2 border rounded-md text-sm leading-7"
                value={settings.buttonProps.manage.text}
                onChange={(e) =>
                  changeUserSettings(e.target.value, "buttonProps.manage.text")
                }
              />
            </div>

            <div className="border border-gray-200 p-3 form-color">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Manage Button Font Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.buttonProps.manage.color}
                  onChange={(e) =>
                    changeUserSettings(
                      e.target.value,
                      "buttonProps.manage.color"
                    )
                  }
                />
              </div>

              <span className="mb-2 inline-block text-sm font-semibold ">
                Manage Button Background Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.buttonProps.manage.bgColor}
                  onChange={(e) =>
                    changeUserSettings(
                      e.target.value,
                      "buttonProps.manage.bgColor"
                    )
                  }
                />
              </div>
            </div>

            <div className="border border-gray-200 p-3 font-size">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Font size of Manage button text:
              </span>

              <RangeSlider
                min={10}
                max={25}
                current={
                  +settings.buttonProps.manage.fontSize.replace("px", "")
                }
                onChange={(e) =>
                  changeUserSettings(e, "buttonProps.manage.fontSize", true)
                }
              />
            </div>

            <div className="border border-gray-200 form-select">
              <span className="mb-2 inline-block text-sm font-semibold ">
                Manage Button Border Color:
              </span>
              <div>
                <input
                  type="color"
                  name="color"
                  className="mx-2"
                  value={settings.buttonProps.manage.borderColor}
                  onChange={(e) =>
                    changeUserSettings(
                      e.target.value,
                      "buttonProps.manage.borderColor"
                    )
                  }
                />
              </div>

              <label class="block text-gray-700 text-sm font-semibold mb-2">
                Select Alignment style of buttons:
              </label>
              <select
                class="block w-full px-4 py-2 border rounded-md bg-white text-gray-900"
                value={settings.buttonProps.alignButtons}
                onChange={(e) =>
                  changeUserSettings(e.target.value, "buttonProps.alignButtons")
                }
              >
                {Object.keys(ALIGN).map((key) => (
                  <option value={ALIGN[key]} key={ALIGN[key]}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
