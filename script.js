document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateBtn").addEventListener("click", function () {
        const url = document.getElementById("urlInput").value;
        if (!url) {
            alert("Please enter a URL");
            return;
        }

        // Clear previous QR code
        document.getElementById("qrcode").innerHTML = "";

        // Generate new QR code
        new QRCode(document.getElementById("qrcode"), url);
    });
});
