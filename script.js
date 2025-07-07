/* script.js */
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNGSI LINIMASA INTERAKTIF ---
    const timelineItems = document.querySelectorAll('.timeline-item');
    const infoBox = document.getElementById('timeline-info-box');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // Menampilkan informasi dari atribut 'data-info'
            const info = item.getAttribute('data-info');
            infoBox.innerHTML = `<p>${info}</p>`;
        });
    });


    // --- FUNGSI KUIS SINGKAT ---
    const options = document.querySelectorAll('.option');
    const kuisResult = document.getElementById('kuis-result');
    const correctAnswer = 'BPUPKI'; // Jawaban yang benar

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Nonaktifkan semua tombol setelah jawaban dipilih
            options.forEach(btn => btn.disabled = true);

            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
                kuisResult.textContent = 'Jawaban Anda Benar!';
                kuisResult.style.color = '#28a745';
            } else {
                option.classList.add('wrong');
                kuisResult.textContent = `Jawaban Salah. Jawaban yang benar adalah ${correctAnswer}.`;
                kuisResult.style.color = '#dc3545';
                // Tandai jawaban yang benar
                document.querySelector(`.option:nth-child(${Array.from(options).findIndex(opt => opt.textContent === correctAnswer) + 1})`).classList.add('correct');
            }
        });
    });

});