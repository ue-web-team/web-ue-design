export const useRippleEffect = (disabled: boolean) => {
  const onDown = (e: PointerEvent) => {
    if (disabled) return;
    const button = e.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const { x, y } = getRelativePointer(e, rect);

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  const getRelativePointer = (
    { x, y }: PointerEvent,
    { top, left }: DOMRect
  ) => ({
    x: x - left,
    y: y - top,
  });

  return {
    onDown,
  };
};
