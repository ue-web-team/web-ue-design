import { Component, h, render } from "vue";

export function removeElement(el: HTMLElement) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else {
    el.parentNode?.removeChild(el);
  }
}

export function createComponent(
  component: Component,
  props: any,
  parentContainer: HTMLElement,
  slots = {}
) {
  const vNode = h(component, props, slots);
  const container = document.createElement("div");
  container.classList.add("vld-container");
  parentContainer.appendChild(container);
  render(vNode, container);

  return vNode.component;
}
