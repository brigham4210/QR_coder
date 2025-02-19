document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const qrContainer = document.getElementById("qrcode");

    generateBtn.addEventListener("click", function () {
        const url = document.getElementById("urlInput").value;
        if (!url) {
            alert("Please enter a URL");
            return;
        }

        // Clear previous QR code
        qrContainer.innerHTML = "";

        // Generate new QR code
        const qrCode = new QRCode(qrContainer, {
            text: url,
            width: 200,
            height: 200
        });

        // Show the download button
        setTimeout(() => {
            downloadBtn.style.display = "block";
        }, 500);
    });

    downloadBtn.addEventListener("click", function () {
        const qrCanvas = qrContainer.querySelector("canvas");

        if (qrCanvas) {
            const img = qrCanvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = img;
            link.download = "qrcode.png";
            link.click();
        } else {
            alert("No QR code found. Please generate one first.");
        }
    });
});
