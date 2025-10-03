document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

function submitForm(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value.trim());
  const contact = encodeURIComponent(document.getElementById('phone').value.trim());
  const service = encodeURIComponent(document.getElementById('service').value);
  const datetime = encodeURIComponent(document.getElementById('datetime').value || 'nicht angegeben');
  const subject = encodeURIComponent('Termin Anfrage - Touch of Art');
  const body = encodeURIComponent(
    `Name: ${decodeURIComponent(name)}%0A` +
    `Kontakt: ${decodeURIComponent(contact)}%0A` +
    `Leistung: ${decodeURIComponent(service)}%0A` +
    `Termin: ${decodeURIComponent(datetime)}%0A`
  );
  const mail = `mailto:business.touch.of.art@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mail;
  return false;
}
