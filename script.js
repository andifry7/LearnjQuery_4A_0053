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
  let listBaru = document.createElement("li");

  // Container isi tugas
  let infoTugas = document.createElement("div");

  let spanBaru = document.createElement("span");
  spanBaru.innerHTML = teksTugas;

  let tanggalBaru = document.createElement("small");
  tanggalBaru.innerHTML = `Tanggal: ${tanggalTugas}`;

  let statusBaru = document.createElement("p");
  statusBaru.innerHTML = "Status: Progress";
  statusBaru.classList.add("progress");

  infoTugas.appendChild(spanBaru);
  infoTugas.appendChild(document.createElement("br"));
  infoTugas.appendChild(tanggalBaru);
  infoTugas.appendChild(statusBaru);

  // Container tombol
  let aksi = document.createElement("div");
  aksi.classList.add("aksi");

  // Tombol edit
  let btnEdit = document.createElement("button");
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
  let btnStatus = document.createElement("button");
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
  let btnHapus = document.createElement("button");
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
