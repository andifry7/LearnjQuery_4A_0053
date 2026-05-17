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
  spanBaru.innerHTML = teksTugas;

  let tanggalBaru = $("<small></small>");
  tanggalBaru.innerHTML = `Tanggal: ${tanggalTugas}`;

  let statusBaru = $("<p></p>");
  statusBaru.innerHTML = "Status: Progress";
  statusBaru.classList.add("progress");

  infoTugas.appendChild(spanBaru);
  infoTugas.appendChild($("<br></br>"));
  infoTugas.appendChild(tanggalBaru);
  infoTugas.appendChild(statusBaru);

  // Container tombol
  let aksi = $("<div></div>");
  aksi.classList.add("aksi");

  // Tombol edit
  let btnEdit = $("<button></button>");
  btnEdit.innerHTML = "Edit";
  btnEdit.classList.add("edit");

  btnEdit.addEventListener("click", function () {
    let tugasBaru = prompt("Edit tugas:", spanBaru.innerHTML);

    if (tugasBaru === null) {
      return;
    }

    tugasBaru = tugasBaru.trim();

    if (tugasBaru.length === 0) {
      alert("Judul tugas tidak boleh kosong!");
      return;
    }

    spanBaru.innerHTML = tugasBaru;
  });

  // Tombol status
  let btnStatus = $("<button></button>");
  btnStatus.innerHTML = "Done";
  btnStatus.classList.add("status");

  btnStatus.addEventListener("click", function () {
    if (statusBaru.innerHTML === "Status: Progress") {
      statusBaru.innerHTML = "Status: Done";
      statusBaru.classList.remove("progress");
      statusBaru.classList.add("done");

      btnStatus.innerHTML = "Undo";
      btnStatus.classList.remove("status");
      btnStatus.classList.add("undo");
    } else {
      statusBaru.innerHTML = "Status: Progress";
      statusBaru.classList.remove("done");
      statusBaru.classList.add("progress");

      btnStatus.innerHTML = "Done";
      btnStatus.classList.remove("undo");
      btnStatus.classList.add("status");
    }
  });

  // Tombol hapus
  let btnHapus = $("<button></button>");
  btnHapus.innerHTML = "Hapus";
  btnHapus.classList.add("hapus");

  btnHapus.addEventListener("click", function () {
    listBaru.remove();
  });

  aksi.appendChild(btnEdit);
  aksi.appendChild(btnStatus);
  aksi.appendChild(btnHapus);

  listBaru.appendChild(infoTugas);
  listBaru.appendChild(aksi);

  daftarTugas.appendChild(listBaru);

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
