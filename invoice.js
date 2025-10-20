// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// ===== Injetar CSS (estilo baseado na paleta, light theme inspirado nas screenshots, responsivo) =====
const style = document.createElement('style');
style.textContent = `
:root {
  --bg-color: #f8f8f8;
  --text-color: #000;
  --accent-color: #AB865B;
  --accent-light: #D3AD83;
  --secondary-bg: #fff;
  --border-color: rgba(0,0,0,0.1);
  --shadow-color: rgba(0,0,0,0.1);
  --input-bg: #fff;
  --beige-bg: #f5f2ed;
}

body {
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg-color);
  min-height: 100vh;
  overflow: auto;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
}

#overlay {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--beige-bg);
  z-index: 9999;
  transition: opacity .6s ease;
}

#overlay.hidden {
  opacity: 0;
  pointer-events: none;
}

#logo {
  width: 120px;
  margin-bottom: 25px;
}

.progress {
  width: 200px;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 4px;
  width: 0;
  background: var(--accent-color);
  animation: load 4.5s forwards;
}

@keyframes load {
  to { width: 100%; }
}

#loadingText {
  color: #666;
  font-size: .9rem;
  margin-top: 10px;
}

.fade {
  opacity: 0;
  transition: opacity .6s ease;
}

.fade.show {
  opacity: 1;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 25px;
  color: var(--text-color);
  width: 90%;
  max-width: 300px;
}

input[type=file] {
  display: none;
}

.label-upload {
  font-size: .85rem;
  color: #666;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

#preview {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--input-bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 24 24'%3E%3Cpath d='M4 4h16v12H4z'/%3E%3Cpath d='M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-1 18H5V5h14v15zM7 15l4.5-6 3.5 4.5 2.5-3L19 15' fill='%23666'/%3E%3C/svg%3E") center/40% no-repeat;
  border: 1px solid var(--border-color);
  object-fit: cover;
  cursor: pointer;
  transition: transform .3s ease;
}

#preview:hover {
  transform: scale(1.05);
}

#preview.loading {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23AB865B' stroke-width='2' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' stroke-dasharray='63' stroke-dashoffset='63'/%3E%3Canimate attributeName='stroke-dashoffset' values='63;0' dur='1s' repeatCount='indefinite'/%3E%3C/svg%3E");
  background-size: 50%;
}

input[type=text], input[type=email] {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  width: 100%;
  background: var(--input-bg);
  color: var(--text-color);
  font-size: 15px;
  transition: border .2s;
}

input:focus {
  outline: none;
  border: 1px solid var(--accent-color);
}

button {
  background: var(--accent-color);
  border: none;
  border-radius: 30px;
  padding: 12px 32px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
  transition: background .2s;
}

button:hover {
  background: var(--accent-light);
}

header {
  background: var(--accent-light);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 2px 10px var(--shadow-color);
  margin-bottom: 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-circle {
  width: 30px;
  height: 30px;
}

.header-text {
  font-weight: 500;
  font-size: 16px;
}

.hello-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hello-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.card {
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px var(--shadow-color);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.card-title {
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.check-icon {
  width: 40px;
  height: 40px;
}

.details-link {
  color: var(--accent-color);
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  border-bottom: 1px solid var(--border-color);
  padding: 8px 0;
}

.detail-label {
  font-weight: 500;
}

.detail-value {
  color: #666;
}

.button-container {
  display: flex;
  gap: 10px;
  width: 100%;
}

.action-button {
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: background .3s;
}

.request-note {
  background: #f0f0f0;
  color: var(--text-color);
}

.cancel-renewal {
  background: var(--accent-color);
  color: #fff;
}

.cancel-renewal:hover {
  background: var(--accent-light);
}

footer {
  margin-top: auto;
  padding: 20px;
  font-size: 12px;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.powered-logo {
  width: 100px;
}

.footer-links {
  display: flex;
  gap: 15px;
}

.footer-link {
  color: #666;
  text-decoration: none;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 20px var(--shadow-color);
  z-index: 10000;
  display: none;
  max-width: 300px;
  text-align: center;
}

.popup.active {
  display: block;
}

.popup h3 {
  margin-bottom: 10px;
}

.popup p {
  margin-bottom: 15px;
  font-size: 14px;
}

.popup button {
  width: 100%;
}

@media (max-width: 390px) {
  header {
    flex-direction: column;
    gap: 10px;
    border-radius: 20px;
  }

  .button-container {
    flex-direction: column;
    gap: 10px;
  }
}
`;
document.head.appendChild(style);

// ===== Injetar HTML Estrutura =====
document.body.innerHTML = `
<div id="overlay">
  <img id="logo" src="https://framerusercontent.com/images/Oe8d7JZskbAvjlTrwbIEeozgs.png" alt="Logo"> <!-- Logo genérico, ajuste se necessário -->
  <div class="progress"><div class="progress-bar"></div></div>
  <p id="loadingText">Preparando...</p>
  <div id="formArea" class="fade">
    <form id="profileForm">
      <label for="photo" class="label-upload">
        <img id="preview" src="" alt="Foto">
        Adicionar foto (opcional)
      </label>
      <input id="photo" type="file" accept="image/*">
      <input id="name" type="text" placeholder="Nome completo*" required>
      <input id="email" type="email" placeholder="E-mail*" required>
      <input id="nickname" type="text" placeholder="Apelido (opcional)">
      <button type="submit">Concluir</button>
    </form>
  </div>
</div>

<header style="display: none;">
  <div class="logo-container">
    <img class="logo-circle" src="https://framerusercontent.com/images/es31MeIE8UuR3D8HQlLfluPLqE.png" alt="Logo Circle">
    <span class="header-text">Portal do Cliente / Frame</span>
  </div>
  <div class="hello-container" id="hello"></div>
</header>

<div class="card" style="display: none;">
  <div class="card-title">
    Fatura paga
    <img class="check-icon" src="https://framerusercontent.com/images/nWejBYDasQmTXWJ27vJEuLDRheE.png" alt="Check">
  </div>
  <a class="details-link" href="#">Ver detalhes da fatura ></a>
  <div class="detail-item">
    <span class="detail-label">Número da fatura</span>
    <span class="detail-value">F-97A706DA-12993</span>
  </div>
  <div class="detail-item">
    <span class="detail-label">Data de pagamento</span>
    <span class="detail-value">16 de agosto de 2025</span>
  </div>
  <div class="detail-item">
    <span class="detail-label">Forma de pagamento</span>
    <span class="detail-value">Cartão</span>
  </div>
  <div class="button-container">
    <div class="action-button request-note" id="requestNote">Solicitar nota fiscal</div>
    <div class="action-button cancel-renewal" id="cancelRenewal">Cancelar renovação automática</div>
  </div>
</div>

<footer style="display: none;">
  <img class="powered-logo" src="https://framerusercontent.com/images/QuqgHsCCdz2yoIVZLTycuuZBKo.png" alt="Powered by Frame">
  <div class="footer-links">
    <a class="footer-link" href="#">Privacidade</a>
    <a class="footer-link" href="#">Política de Reembolso</a>
  </div>
</footer>

<div id="notePopup" class="popup">
  <h3>Solicitar Nota Fiscal</h3>
  <p>Aqui você pode solicitar a nota fiscal para sua fatura. Entre em contato com o suporte para mais detalhes.</p>
  <button id="closeNote">Fechar</button>
</div>

<div id="cancelPopup" class="popup">
  <h3>Cancelar Renovação</h3>
  <p>Confirma o cancelamento da renovação automática? Isso afetará futuras cobranças.</p>
  <button id="closeCancel">Fechar</button>
</div>
`;

// ===== Lógica JavaScript =====
const overlay = document.getElementById('overlay');
const formArea = document.getElementById('formArea');
const photoInput = document.getElementById('photo');
const preview = document.getElementById('preview');
const profileForm = document.getElementById('profileForm');
const loadingText = document.getElementById('loadingText');
const hello = document.getElementById('hello');
const header = document.querySelector('header');
const card = document.querySelector('.card');
const footer = document.querySelector('footer');

const texts = ['Preparando...', 'Carregando painel...', 'Verificando segurança...'];
let idx = 0;
const textInterval = setInterval(() => {
  loadingText.textContent = texts[idx++ % texts.length];
}, 1500);

function showContent() {
  overlay.classList.add('hidden');
  setTimeout(() => {
    header.style.display = 'flex';
    card.style.display = 'flex';
    footer.style.display = 'flex';
  }, 600);
}

if (localStorage.profileData) {
  const data = JSON.parse(localStorage.profileData);
  const firstName = data.name.split(' ')[0];
  hello.innerHTML = `Olá, ${firstName}${data.photo ? `<img class="hello-photo" src="${data.photo}" alt="Foto">` : ''}`;
  setTimeout(showContent, 4500);
} else {
  setTimeout(() => {
    clearInterval(textInterval);
    formArea.classList.add('show');
    loadingText.style.display = 'none';
  }, 4500);
}

photoInput.onchange = e => {
  const file = e.target.files[0];
  if (!file || !file.type.startsWith('image/') || file.size > 3000000) return alert('Imagem até 3MB.');
  preview.classList.add('loading');
  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.dataset.img = reader.result;
    preview.classList.remove('loading');
    preview.style.background = 'none';
  };
  reader.readAsDataURL(file);
};

profileForm.onsubmit = e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (name.length < 3 || !email.includes('@')) return alert('Preencha nome (3+ chars) e e-mail válido.');
  const data = {
    name,
    email,
    nickname: document.getElementById('nickname').value.trim(),
    photo: preview.dataset.img || ''
  };
  localStorage.profileData = JSON.stringify(data);
  const firstName = name.split(' ')[0];
  hello.innerHTML = `Olá, ${firstName}${data.photo ? `<img class="hello-photo" src="${data.photo}" alt="Foto">` : ''}`;
  formArea.classList.remove('show');
  showContent();
};

// Popups
const notePopup = document.getElementById('notePopup');
const cancelPopup = document.getElementById('cancelPopup');

document.getElementById('requestNote').addEventListener('click', () => {
  notePopup.classList.add('active');
});

document.getElementById('cancelRenewal').addEventListener('click', () => {
  cancelPopup.classList.add('active');
});

document.getElementById('closeNote').addEventListener('click', () => {
  notePopup.classList.remove('active');
});

document.getElementById('closeCancel').addEventListener('click', () => {
  cancelPopup.classList.remove('active');
});