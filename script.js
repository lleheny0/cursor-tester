const cursors = [
  { name: "auto", file: "default" },
  { name: "default" },
  { name: "none", file: "" },
  { name: "context-menu" },
  { name: "help" },
  { name: "pointer" },
  { name: "progress", file: "progress_0001" },
  { name: "wait", file: "wait_0001" },
  { name: "cell" },
  { name: "crosshair" },
  { name: "text" },
  { name: "vertical-text" },
  { name: "alias" },
  { name: "copy" },
  { name: "move" },
  { name: "no-drop" },
  { name: "not-allowed" },
  { name: "grab" },
  { name: "grabbing" },
  { name: "all-scroll" },
  { name: "col-resize" },
  { name: "row-resize" },
  { name: "n-resize" },
  { name: "e-resize" },
  { name: "s-resize" },
  { name: "w-resize" },
  { name: "ne-resize" },
  { name: "nw-resize" },
  { name: "se-resize" },
  { name: "sw-resize" },
  { name: "ew-resize" },
  { name: "ns-resize" },
  { name: "nesw-resize" },
  { name: "nwse-resize" },
  { name: "zoom-in" },
  { name: "zoom-out" },
];

window.onload = () => {
  let cursorGrid = "";

  cursors.forEach((cursor) => {
    cursorGrid += `
      <div class="cursor" style="cursor: ${cursor.name}">
        ${cursor.name}
        <img class="cursor-image" src="${
          cursor.file !== ""
            ? `https://raw.githubusercontent.com/GNOME/adwaita-icon-theme/refs/heads/master/src/cursors/pngs/48x48/${
                cursor.file || cursor.name
              }.png`
            : ""
        }" />
      </div>
    `;
  });

  document.querySelector("#cursor-grid").innerHTML = cursorGrid;
};
