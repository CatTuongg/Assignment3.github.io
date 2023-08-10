"use strict";

function handleSubmit() {
  // lấy giá trin của input email sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // Lấy element của thẻ p hiển thị lỗi

  const errorEmail = document.getElementById("error-email");
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(checkMail);
  // lay phan chua thong tin user
  const sectionContent = document.querySelector(".info");
  console.log("check section", sectionContent);
  // lay element de kiem soat submit
  const submitControl = document.getElementById("submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("view-less"))
    viewMore.style.display = "none";
}
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const hehe = parentElement.querySelectorAll(".hehe");
  if (viewMore.classList.value.includes("view-more")) {
    hehe.forEach((element) => {
      element.style.display = "block";
    });

    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = " View less";
  } else {
    hehe.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
