// Render Daftar Tugas ke Layar
function renderTugas() {
    daftarTugasEl.innerHTML = '';

    const tugasTersaring = daftarTugas.filter(tugas => {
        if (filterAktif === 'aktif') return !tugas.selesai;
        if (filterAktif === 'selesai') return tugas.selesai;
        return true;
    });

    tugasTersaring.forEach(tugas => {
        const li = document.createElement('li');
        li.className = `task-item ${tugas.selesai ? 'completed' : ''}`;

        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" ${tugas.selesai ? 'checked' : ''} onchange="toggleStatus(${tugas.id})">
                <span class="task-text">${escapeHTML(tugas.teks)}</span>
            </div>
            <span class="badge badge-${tugas.prioritas}">${tugas.prioritas}</span>
            <button class="btn-hapus" onclick="hapusTugas(${tugas.id})" title="Hapus tugas">Hapus</button>
        `;

        daftarTugasEl.appendChild(li);
    });

    const sisaAktif = daftarTugas.filter(t => !t.selesai).length;
    statistikEl.textContent = `${sisaAktif} tugas tersisa`;
}
