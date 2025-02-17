export const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

export const smoothScrollTo = (targetY: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 750;
  let startTime: number | null = null;

  const animationStep = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    window.scrollTo(0, startY + distance * easeInOutQuad(progress));

    if (progress < 1) {
      requestAnimationFrame(animationStep);
    }
  };

  requestAnimationFrame(animationStep);
};
