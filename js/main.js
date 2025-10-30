(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
const accordionCollapseElementList = document.querySelectorAll(
  "#myAccordion .collapse"
);
const accordionCollapseList = [...accordionCollapseElementList].map(
  (accordionCollapseEl) => new bootstrap.Collapse(accordionCollapseEl)
);
(function ($) {
  $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

  $(".accordion a").click(function (j) {
    var dropDown = $(this).closest("li").find("p");

    $(this).closest(".accordion").find("p").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".accordion").find("a.active").removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);
