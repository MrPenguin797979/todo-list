const removeToasts = (toasts, duration = 1, delay = 3) => {
  const totalTime = (duration + delay) * 1000;
  toasts?.forEach((toast) =>
    setTimeout(() => toast.parentNode?.removeChild(toast), totalTime)
  );
};

export default removeToasts;
