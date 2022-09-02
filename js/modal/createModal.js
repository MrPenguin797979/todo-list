const createModal = (todoText) => {
  const modalTemplate = `
    <div class="modal">
      <form class="modal-content">
        <input type="text" class="modal-edit" placeholder="${todoText}" />
        <div class="modal-action">
          <div class="modal-exit">Hủy</div>
          <button class="modal-change" type="submit">Chỉnh sửa</button>
        </div>
      </form>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalTemplate);
};

export default createModal;
