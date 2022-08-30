const createToast = (message, type) => {
  const toastWrapper = document.querySelector(".toast-wrapper");
  const toastTemplate = `
    <div class="toast">
      <i class="fa fa-${
        type === "success" ? "check" : "times"
      } toast-icon toast-${type}"></i>
      <p class="toast-text">${message}</p>
    </div>
  `;
  toastWrapper.insertAdjacentHTML("beforeend", toastTemplate);
};

export default createToast;
