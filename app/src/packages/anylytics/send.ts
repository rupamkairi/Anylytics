import { AnylyticsConnector as connector } from "./index";

export function pageLoad(event?: Event) {
  if (!document || !window || !connector) return;

  const data = {
    type: "load",
    timestamp: new Date().getTime(),
    location,
    userAgent: navigator.userAgent,
  };

  console.log("pageLoad", data);
  connector?.send(data);
}

export function pageUnload(event?: Event) {
  if (!document || !window || !connector) return;

  const data = {
    type: "unload",
    location,
    userAgent: navigator.userAgent,
  };

  console.log("pageUnload", data);
  connector?.send(data);
}

export function pageState(event?: Event) {
  if (!document || !window || !connector) return;

  const data = {
    type: "state",
    state: document.visibilityState,
    transient: navigator.userActivation.isActive,
    sticky: navigator.userActivation.hasBeenActive,
  };

  console.log("pageState", data);
  connector?.send(data);
}

export function pageClick(event: MouseEvent) {
  if (!document || !window || !connector) return;
  const element = event.target as any;

  const data = {
    type: "click",
    window: {
      outerWidth,
      outerHeight,
      innerWidth,
      innerHeight,
    },
    document: {
      outerWidth,
      outerHeight,
      innerWidth,
      innerHeight,
    },
    page: {
      pageX: event.pageX,
      pageY: event.pageY,
      clientX: event.clientX,
      clientY: event.clientY,
      offsetX: event.offsetX,
      offsetY: event.offsetY,
    },
    event: {},
    element: {
      tag: element.tagName,
      text: element.textContent,
      src: element.src,
    },
  };

  console.log("pageClick", data);
  connector?.send(data);
}
