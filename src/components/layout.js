"use client";

export default function Layout({ onLayoutChange }) {
  const layouts = ["layout1", "layout2", "layout3", "layout4", "layout5"];

  return (
    <div className="modal">
      {layouts.map((name) => (
        <button
          key={name}
          type="button"
          title={name}
          className="change-layout"
          onClick={() => onLayoutChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
