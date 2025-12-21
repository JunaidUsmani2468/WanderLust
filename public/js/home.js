document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all cards we marked in HTML
    const touchCards = document.querySelectorAll('.js-touch-card');

    touchCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Check if device supports hover (roughly checks if it's a desktop)
            // If it's a desktop, we usually want to ignore clicks and let hover work,
            // UNLESS you want click-to-lock on desktop too. 
            // For now, we allow both for maximum responsiveness.

            e.stopPropagation(); // Stop click from hitting the document "Close All" listener

            // 2. toggle Logic: Is this card already open?
            const isActive = card.classList.contains('touch-active');

            // 3. "Accordion" Reset: Close ALL cards first
            touchCards.forEach(c => c.classList.remove('touch-active'));

            // 4. If it wasn't open, open it now
            if (!isActive) {
                card.classList.add('touch-active');
            }
        });
    });

    // 5. Global Closer: Clicking anywhere else closes the cards
    document.addEventListener('click', () => {
        touchCards.forEach(c => c.classList.remove('touch-active'));
    });
});