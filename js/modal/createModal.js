const createModal = (todoText) => {
  const modalTemplate = `
    <div class="modal">
      <form class="modal-content">
        <input type="text" class="modal-edit" placeholder="${todoText}" />
        <button class="modal-change" type="submit">Chỉnh sửa</button>
      </form>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalTemplate);
};

export default createModal;
