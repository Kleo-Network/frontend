import React from "react";
import { DefaultCookieSettings } from "../../utils/constants";

export default function Layout({ settings=DefaultCookieSettings }) {
    let flexTypeOfDiv = settings.alignButtonsWithText;
    let flexTypeOfBtns = settings.buttonProps.alignButtons;

  return (
    <div
      className={`rounded-md flex flex-${flexTypeOfDiv} border-2 items-center p-4 shadow-md`}
      style={{ background: settings.bgColor, width: settings.size.width, height: settings.size.height }}>
      <div className="" style={{ fontSize: settings.fontSize, color: settings.color }}>
        <span>{settings.text}</span>
      </div>

      <div className={`flex flex-${flexTypeOfBtns} items-center grow `}>
        <button
          className="text-center rounded-md m-1 px-2 py-1"
          style={{
            width: settings.buttonProps.size.width,
            height: settings.buttonProps.size.height,
            background: settings.buttonProps.accept.bgColor,
            color: settings.buttonProps.accept.color,
            border: `1px solid ${settings.buttonProps.accept.borderColor}`,
            fontSize: settings.buttonProps.accept.fontSize
          }}
        >
          <span>{settings.buttonProps.accept.text}</span>
        </button>

        <button
          className="text-center rounded-md m-1 px-2 py-1"
          style={{
            width: settings.buttonProps.size.width,
            height: settings.buttonProps.size.height,
            background: settings.buttonProps.manage.bgColor,
            color: settings.buttonProps.manage.color,
            border: `1px solid ${settings.buttonProps.manage.borderColor}`,
            fontSize: settings.buttonProps.manage.fontSize
          }}
        >
          <span>{settings.buttonProps.manage.text}</span>
        </button>
      </div>
    </div>
  );
}

