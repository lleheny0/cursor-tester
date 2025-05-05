const cursors = [
  "auto",
  "default",
  "none",
  "context-menu",
  "help",
  "pointer",
  "progress",
  "wait",
  "cell",
  "crosshair",
  "text",
  "vertical-text",
  "alias",
  "copy",
  "move",
  "no-drop",
  "not-allowed",
  "grab",
  "grabbing",
  "all-scroll",
  "col-resize",
  "row-resize",
  "n-resize",
  "e-resize",
  "s-resize",
  "w-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
  "ew-resize",
  "ns-resize",
  "nesw-resize",
  "nwse-resize",
  "zoom-in",
  "zoom-out",
];

const aliases = {
  auto: "default",
  progress: "progress_0001",
  wait: "wait_0001",
};

const urlPrefix =
  "https://raw.githubusercontent.com/GNOME/adwaita-icon-theme/refs/heads/master/src/cursors/pngs/48x48/";

window.onload = () => {
  let cursorGrid = "";

  cursors.forEach((cursor) => {
    cursorGrid += `
      <div class="cursor" style="cursor: ${cursor}">
        <div class="cursor-name">${cursor}</div>
        <img class="cursor-image" src="${
          cursor !== "none"
            ? urlPrefix + (aliases[cursor] || cursor) + ".png"
            : ""
        }" />
      </div>
    `;
  });

  document.querySelector("#cursor-grid").innerHTML = cursorGrid;
};
