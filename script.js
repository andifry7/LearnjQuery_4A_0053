import $ from "jquery";

const inputTugas = $("#inputTugas");
const inputDate = $("#inputDate");
const btnTambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");

btnTambah.on("click", function () {
  let teksTugas = inputTugas.val().trim();
  let tanggalTugas = inputDate.val();

  if (teksTugas === "" || tanggalTugas === "") {
    alert("Data dan tanggal harus diisi!");
    return;
  }

  // Membuat elemen list
  let listBaru = $("<li></li>");

  // Container isi tugas
  let infoTugas = $("<div></div>");

  let spanBaru = $("<span></span>");
  spanBaru.html(teksTugas);

  let tanggalBaru = $("<small></small>");
  tanggalBaru.html(`Tanggal: ${tanggalTugas}`);

  let statusBaru = $("<p></p>");
  statusBaru.html("Status: Progress");
  statusBaru.classList.add("progress");

  infoTugas.append(spanBaru);
  infoTugas.append($("<br></br>"));
  infoTugas.append(tanggalBaru);
  infoTugas.append(statusBaru);

  // Container tombol
  let aksi = $("<div></div>");
  aksi.classList.add("aksi");

  // Tombol edit
  let btnEdit = $("<button></button>");
  btnEdit.html("Edit");
  btnEdit.classList.add("edit");

  btnEdit.on("click", function () {
    let tugasBaru = prompt("Edit tugas:", spanBaru.html());

    if (tugasBaru === null) {
      return;
    }

    tugasBaru = tugasBaru.trim();

    if (tugasBaru.length === 0) {
      alert("Judul tugas tidak boleh kosong!");
      return;
    }

    spanBaru.html(tugasBaru);
  });

  // Tombol status
  let btnStatus = $("<button></button>");
  btnStatus.html("Done");
  btnStatus.classList.add("status");

  btnStatus.on("click", function () {
    if (statusBaru.html() === "Status: Progress") {
      statusBaru.html("Status: Done");
      statusBaru.classList.remove("progress");
      statusBaru.classList.add("done");

      btnStatus.html("Undo");
      btnStatus.classList.remove("status");
      btnStatus.classList.add("undo");
    } else {
      statusBaru.html("Status: Progress");
      statusBaru.classList.remove("done");
      statusBaru.classList.add("progress");

      btnStatus.html("Done");
      btnStatus.classList.remove("undo");
      btnStatus.classList.add("status");
    }
  });

  // Tombol hapus
  let btnHapus = $("<button></button>");
  btnHapus.html("Hapus");
  btnHapus.classList.add("hapus");

  btnHapus.on("click", function () {
    listBaru.remove();
  });

  aksi.append(btnEdit);
  aksi.append(btnStatus);
  aksi.append(btnHapus);

  listBaru.append(infoTugas);
  listBaru.append(aksi);

  daftarTugas.append(listBaru);

  // Warna background selang-seling
  const warnaBaru = document.querySelectorAll("li");

  warnaBaru.forEach((item, index) => {
    if (index % 2 === 0) {
      item.style.backgroundColor = "#f3f4f6";
    } else {
      item.style.backgroundColor = "#d1d5db";
    }
  });

  // Reset input
  inputTugas.val("");
  inputDate.val("");
});
