document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as imagens com a classe 'no-context' (os QR Codes)
    const qrImages = document.querySelectorAll('.no-context');

    qrImages.forEach(image => {
        // Bloqueia o menu de contexto (botão direito do mouse)
        image.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });

        // Bloqueia que o usuário clique e arraste a imagem na tela
        image.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });
    });
});
