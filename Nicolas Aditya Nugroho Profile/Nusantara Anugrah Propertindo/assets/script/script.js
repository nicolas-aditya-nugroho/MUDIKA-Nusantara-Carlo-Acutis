document.querySelectorAll('.property-card button').forEach(button => {
    button.addEventListener('click', () => {
        const propertyName = button.parentElement.querySelector('h3').innerText;
        const propertyLocation = button.parentElement.querySelector('p').innerText;
        const propertyPrice = button.parentElement.querySelectorAll('p')[1].innerText;

        alert(`Detail Properti:\nNama: ${propertyName}\n${propertyLocation}\n${propertyPrice}`);
    });
});
