import createToast from "./createToast.js";
import removeToasts from "./removeToasts.js";

const renderToasts = (
  toastDuration,
  toastDelay,
  toastMessage,
  toastType = "success"
) => {
  createToast(toastMessage, toastType);
  const toasts = document.querySelectorAll(".toast");
  if (toasts) {
    toasts.forEach((toast) => {
      toast.style.animation = `show 0.3s linear, fade ${toastDuration}s linear ${toastDelay}s forwards`;
    });
    removeToasts(toasts, toastDuration, toastDelay);
  }
};

export default renderToasts;
