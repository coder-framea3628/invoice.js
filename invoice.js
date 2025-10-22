// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap';
fontLink.rel = 'preload';
fontLink.as = 'style';
fontLink.onload = function() { this.rel = 'stylesheet'; };
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
  --error-color: #D3AD83;
  --success-color: #4CAF50;
  --accent-color-rgb: 171,134,91;
  --secondary-bg-rgb: 255,255,255;
}

body.dark {
  --bg-color: #141414;
  --text-color: #fff;
  --secondary-bg: #1a1a1a;
  --border-color: rgba(255,255,255,0.1);
  --shadow-color: rgba(0,0,0,0.5);
  --input-bg: #2b2b2b;
  --beige-bg: #1a1a1a;
  --secondary-bg-rgb: 26,26,26;
}

body.dark #loadingText {
  color: #aaa;
}

body.dark .label-upload {
  color: #aaa;
}

body.dark #preview {
  background: var(--input-bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23aaa' viewBox='0 0 24 24'%3E%3Cpath d='M4 4h16v12H4z'/%3E%3Cpath d='M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-1 18H5V5h14v15zM7 15l4.5-6 3.5 4.5 2.5-3L19 15' fill='%23aaa'/%3E%3C/svg%3E") center/40% no-repeat;
  border: 1px solid var(--border-color);
}

body.dark input[type=text], body.dark input[type=email], body.dark input[type=tel] {
  background: var(--input-bg);
  color: var(--text-color);
}

body.dark header {
  background: var(--accent-color);
}

body.dark .detail-value {
  color: #aaa;
}

body.dark .request-note {
  background: #2a2a2a;
  color: var(--text-color);
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
  padding: 20px;
}

#overlay.hidden {
  opacity: 0;
  pointer-events: none;
}

#logo {
  width: 150px;
  margin-bottom: 25px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top: 4px solid var(--accent-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.progress-bar-container {
  width: 200px;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 10px;
}

#progressBar {
  height: 4px;
  background: var(--accent-color);
  width: 0;
  transition: width 0.3s ease;
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
  max-width: 400px;
}

#formTitle {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

#formExplanation {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
}

.error {
  color: var(--error-color);
  font-size: 0.8rem;
  margin-top: -10px;
}

.success {
  color: var(--success-color);
  font-size: 0.8rem;
  margin-top: -10px;
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

input[type=text], input[type=email], input[type=tel] {
  padding: 12px 20px;
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

input:disabled {
  background: var(--border-color);
  color: #999;
  cursor: not-allowed;
}

button {
  background: linear-gradient(to right, var(--accent-color), var(--accent-light));
  border: none;
  border-radius: 30px;
  padding: 14px 40px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
  transition: background .2s;
  display: flex;
  align-items: center;
  justify-content: center;
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

.edit-profile {
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
}

.history-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: var(--accent-color);
}

.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: var(--text-color);
  margin-right: 10px;
}

.hello-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.card {
  background: rgba(var(--secondary-bg-rgb), 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);
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
  flex-direction: column;
}

.check-icon {
  width: 60px;
  height: 60px;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.request-note {
  background: #f0f0f0;
  color: #333;
}

.cancel-renewal {
  background: var(--accent-color);
  color: #fff;
}

.cancel-renewal:hover {
  background: var(--accent-light);
}

footer {
  position: sticky;
  bottom: 0;
  z-index: 10;
  width: 100%;
  margin-top: auto;
  padding: 20px;
  font-size: 12px;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: var(--bg-color);
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
  transition: color 0.2s, text-decoration 0.2s;
}

.footer-link:hover {
  text-decoration: underline;
  color: var(--accent-color);
}

#version {
  font-size: 0.8rem;
  color: #888;
}

.popup-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 9999;
  display: none;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95) translateY(20px);
  opacity: 0;
  background: var(--secondary-bg);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 20px var(--shadow-color);
  z-index: 10000;
  display: none;
  max-width: 400px;
  max-height: 80vh;
  overflow: auto;
  text-align: left;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.popup.active {
  display: block;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) translateY(0);
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.popup li {
  padding: 5px 0;
  border-bottom: 1px solid var(--border-color);
}

.close-popup {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;
}

#logTable {
  width: 100%;
  border-collapse: collapse;
}

#logTable th {
  cursor: pointer;
}

#logTable th, #logTable td {
  padding: 8px;
  border-bottom: 1px solid var(--border-color);
}

#clearLog {
  margin-top: 10px;
}

#sidebar li.has-submenu .submenu {
  display: none;
  padding-left: 20px;
}

#sidebar li[data-tooltip] {
  position: relative;
}

#sidebar li[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--secondary-bg);
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px var(--shadow-color);
  opacity: 0;
  transition: opacity 0.3s;
  white-space: nowrap;
  pointer-events: none;
}

#sidebar li[data-tooltip]:hover::after {
  opacity: 1;
}

@media (max-width: 600px) {
  #overlay {
    padding: 30px;
    overflow: hidden;
  }

  form {
    gap: 16px;
  }

  header {
    padding: 8px 16px;
  }

  .card {
    padding: 16px;
  }

  .popup {
    max-width: 90vw;
  }
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
<div id="liveRegion" aria-live="polite" style="position:absolute; left:-9999px;"></div>
<div id="redirectOverlay">
  <div class="spinner"></div>
  <p>Redirecionando...</p>
</div>

<div id="overlay">
  <img id="logo" src="https://framerusercontent.com/images/Oe8d7JZskbAvjlTrwbIEeozgs.png" alt="Logo do Frame" loading="lazy"> 
  <div class="loading-spinner"></div>
  <p id="loadingText">Preparando...</p>
  <div class="progress-bar-container"><div id="progressBar"></div></div>
  <div id="formArea" class="fade">
    <h2 id="formTitle">Área de cadastro</h2>
    <p id="formExplanation">Para acessar suas faturas, suporte e mais.</p>
    <form id="profileForm">
      <label for="photo" class="label-upload">
        <img id="preview" src="" alt="Adicionar ou alterar foto de perfil" role="button" aria-label="Adicionar ou alterar foto de perfil">
        Adicionar foto (opcional)
      </label>
      <input id="photo" type="file" accept="image/*">
      <input id="name" type="text" placeholder="Nome completo" required aria-required="true">
      <span id="nameError" class="error"></span>
      <input id="cpf" type="tel" placeholder="Informe seu CPF" required aria-required="true">
      <span id="cpfError" class="error"></span>
      <input id="email" type="email" placeholder="Insira seu e-mail" required aria-required="true" autocomplete="email">
      <span id="emailError" class="error"></span>
      <button type="button" id="verifyEmail">Verificar</button>
      <span id="emailFeedback" class="feedback"></span>
      <input id="nickname" type="text" placeholder="Apelido (opcional)" maxlength="20">
      <button type="submit" data-test="submit-button">Concluir</button>
    </form>
  </div>
  <span id="infoIcon" role="button" aria-label="Informações">?</span>
</div>

<header style="display: none;">
  <svg class="hamburger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
  <div class="logo-container">
    <img class="logo-circle" src="https://framerusercontent.com/images/es31MeIE8UuR3D8HQlLfluPLqE.png" alt="Logo circular do Frame" loading="lazy">
    <span class="header-text">Portal do Cliente | Frame</span>
  </div>
  <div class="hello-container" id="hello"></div>
</header>

<div id="sidebar">
  <ul>
    <li id="menuProfile" data-tooltip="Gerencie seu perfil"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> Perfil</li>
    <li id="menuFaturas" data-tooltip="Veja suas faturas"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> Faturas</li>
    <li id="menuSuporte" data-tooltip="Contate o suporte"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> Suporte</li>
    <li class="has-submenu" data-tooltip="Configurações da conta"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Configurações
      <ul class="submenu">
        <li>Tema<div class="toggle-wrapper">
          <label for="darkToggle">Dark Mode</label>
          <input type="checkbox" id="darkToggle">
        </div></li>
        <li>Idioma<select><option>Português</option><option>English</option></select></li>
      </ul>
    </li>
    <li id="menuPin" data-tooltip="Proteja com PIN">PIN Lock</li>
    <li id="menuLogout" data-tooltip="Sair da conta"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Sair</li>
  </ul>
</div>

<div class="card" style="display: none;">
  <div class="card-title">
    <img class="check-icon" src="https://framerusercontent.com/images/nWejBYDasQmTXWJ27vJEuLDRheE.png" alt="Ícone de verificação para fatura paga" loading="lazy">
    Fatura paga
  </div>
  <a class="details-link" href="#" aria-label="Ver detalhes da fatura">Ver detalhes da fatura ></a>
  <div class="detail-item">
    <span class="detail-label">Número da fatura</span>
    <span class="detail-value">F-97A706DA-12993</span>
  </div>
  <div class="detail-item">
    <span class="detail-label">Data de pagamento</span>
    <span class="detail-value"></span>
  </div>
  <div class="detail-item">
    <span class="detail-label">Forma de pagamento</span>
    <span class="detail-value">Cartão</span>
  </div>
  <div class="button-container">
    <div class="action-button request-note" id="requestNote" role="button" tabindex="0" aria-label="Solicitar nota fiscal">Solicitar nota fiscal</div>
    <div class="action-button cancel-renewal" id="cancelRenewal" role="button" tabindex="0" aria-label="Cancelar renovação automática">Cancelar renovação automática</div>
  </div>
</div>

<footer style="display: none;">
  <img class="powered-logo" src="https://framerusercontent.com/images/Oe8d7JZskbAvjlTrwbIEeozgs.png" alt="Powered by Frame" loading="lazy">
  <div class="footer-links">
    <a class="footer-link" href="https://frameag.com/privacy">Privacidade</a>
    <a class="footer-link" href="https://frameag.com/termos">Política de Reembolso</a>
    <a class="footer-link" href="https://frameag.com/contato">Suporte</a>
  </div>
  <p id="version">Versão 1.0 - <span id="currentDate"></span></p>
</footer>

<div class="popup-backdrop" id="noteBackdrop"></div>
<div id="notePopup" class="popup" role="dialog" aria-modal="true">
  <span class="close-popup">X</span>
  <h3>Solicitar Nota Fiscal</h3>
  <p>Para solicitar a nota fiscal de sua fatura na Frame, clique no botão abaixo e siga os passos:</p>
  <button id="redirectNote">Solicitar</button>
</div>

<div class="popup-backdrop" id="cancelBackdrop"></div>
<div id="cancelPopup" class="popup" role="dialog" aria-modal="true">
  <span class="close-popup">X</span>
  <h3>Cancelar Renovação</h3>
  <p>Confirma o cancelamento da renovação automática? Isso afetará futuras cobranças.</p>
  <button id="redirectCancel">Confirmar</button>
</div>

<div class="popup-backdrop" id="detailsBackdrop"></div>
<div id="detailsPopup" class="popup" role="dialog" aria-modal="true">
  <span class="close-popup">X</span>
  <h3>Detalhes da Fatura</h3>
  <p>Busque em seu e-mail a confirmação da assinatura Premium. Lá você recebeu sua Fatura completa em PDF ou envie um email para: contato@frameag.com.</p>
  <p id="valorTotal">Valor total: R$ 99.90</p>
  <button id="closeDetails">Fechar</button>
</div>

<div class="popup-backdrop" id="logBackdrop"></div>
<div id="logPopup" class="popup" role="dialog" aria-modal="true">
  <span class="close-popup">X</span>
  <h3>Histórico</h3>
  <table id="logTable">
    <thead>
      <tr>
        <th>Ação</th>
        <th data-sort="asc">Data</th>
      </tr>
    </thead>
    <tbody id="logBody"></tbody>
  </table>
  <button id="clearLog">Limpar histórico</button>
  <button id="closeLog">Fechar</button>
</div>

<div class="popup-backdrop" id="infoBackdrop"></div>
<div id="infoPopup" class="popup" role="dialog" aria-modal="true">
  <span class="close-popup">X</span>
  <h3>Informações</h3>
  <p>Esta é a página de cadastro do Frame Invoices, onde você pode acessar suas faturas, cancelar a renovação automática e contatar o suporte da Frame. Tudo para garantir máxima transparência nas cobranças e liberdade para você cancelar quando quiser.</p>
  <button id="closeInfo">Fechar</button>
</div>

<div class="popup-backdrop" id="pinBackdrop"></div>
<div id="pinSetPopup" class="popup" role="dialog" aria-modal="true">
  <span class="close-popup">X</span>
  <h3>Defina PIN (4 dígitos)</h3>
  <input type="password" id="pinInput" maxLength="4">
  <button id="setPin">Definir</button>
</div>

<div class="popup-backdrop" id="pinEnterBackdrop"></div>
<div id="pinEnterPopup" class="popup" role="dialog" aria-modal="true">
  <span class="close-popup">X</span>
  <h3>Entre PIN</h3>
  <input type="password" id="pinEnterInput" maxLength="4">
  <button id="enterPin">Entrar</button>
  <span id="pinError" class="error"></span>
</div>
`;

// ===== Lógica JavaScript =====
const strings = {
  namePlaceholder: 'Nome completo',
  cpfPlaceholder: 'Informe seu CPF',
  emailPlaceholder: 'Insira seu e-mail',
  nicknamePlaceholder: 'Apelido (opcional)',
  submitButton: 'Concluir',
  editSubmitButton: 'Aplicar mudanças',
  editButton: 'Editar',
  hello: 'Olá, ',
  alertInvalidName: 'Seu nome deve ter ao menos 3 caracteres e incluir um sobrenome.',
  alertInvalidEmail: 'Por favor, insira um e-mail válido.',
  alertInvalidCPF: 'CPF inválido, tente novamente.',
  alertFileSize: 'Sua foto deve ter no máximo 3MB.',
  alertImageDim: 'Sua foto deve ter no mínimo 100x100 e no máximo 2000x2000 px.',
  alertStorageError: 'Erro ao salvar seus dados. Reinicie a página.'
};

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
const sidebar = document.getElementById('sidebar');
const hamburger = document.querySelector('.hamburger');
const darkToggle = document.getElementById('darkToggle');
const redirectOverlay = document.getElementById('redirectOverlay');
const liveRegion = document.getElementById('liveRegion');
const nameError = document.getElementById('nameError');
const cpfError = document.getElementById('cpfError');
const emailError = document.getElementById('emailError');
const emailFeedback = document.getElementById('emailFeedback');
const formTitle = document.getElementById('formTitle');
const formExplanation = document.getElementById('formExplanation');
const progressBar = document.getElementById('progressBar');
const versionDate = document.getElementById('currentDate');
const logBody = document.getElementById('logBody');
const clearLog = document.getElementById('clearLog');
const pinSetPopup = document.getElementById('pinSetPopup');
const pinEnterPopup = document.getElementById('pinEnterPopup');
const pinBackdrop = document.getElementById('pinBackdrop');
const pinEnterBackdrop = document.getElementById('pinEnterBackdrop');
const pinInput = document.getElementById('pinInput');
const pinEnterInput = document.getElementById('pinEnterInput');
const setPin = document.getElementById('setPin');
const enterPin = document.getElementById('enterPin');
const pinError = document.getElementById('pinError');

document.getElementById('name').placeholder = strings.namePlaceholder;
document.getElementById('cpf').placeholder = strings.cpfPlaceholder;
document.getElementById('email').placeholder = strings.emailPlaceholder;
document.getElementById('nickname').placeholder = strings.nicknamePlaceholder;
profileForm.querySelector('button').textContent = strings.submitButton;

const texts = ['Preparando...', 'Carregando painel...'];

function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

function showContent() {
  return new Promise(resolve => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    setTimeout(() => {
      header.style.display = 'flex';
      card.style.display = 'flex';
      footer.style.display = 'flex';
      resolve();
    }, 600);
  });
}

function loadProfile(data) {
  const firstName = sanitizeInput(data.name.split(' ')[0]);
  const helloText = document.createElement('span');
  helloText.textContent = `${strings.hello}${firstName}`;
  hello.appendChild(helloText);

  if (data.photo) {
    const img = document.createElement('img');
    img.classList.add('hello-photo');
    img.src = data.photo;
    img.alt = `Foto de ${firstName}`;
    img.loading = 'lazy';
    hello.appendChild(img);
  }

  const editBtn = document.createElement('span');
  editBtn.classList.add('edit-profile');
  editBtn.textContent = strings.editButton;
  editBtn.role = 'button';
  editBtn.tabIndex = 0;
  editBtn.ariaLabel = 'Editar perfil';
  editBtn.addEventListener('click', () => editProfile(data));
  editBtn.addEventListener('keydown', e => { if (e.key === 'Enter') editProfile(data); });
  hello.appendChild(editBtn);

  const historyIcon = document.createElement('svg');
  historyIcon.classList.add('history-icon');
  historyIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  historyIcon.setAttribute('fill', 'none');
  historyIcon.setAttribute('viewBox', '0 0 24 24');
  historyIcon.setAttribute('stroke', 'currentColor');
  historyIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />';
  historyIcon.role = 'button';
  historyIcon.tabIndex = 0;
  historyIcon.ariaLabel = 'Ver histórico';
  historyIcon.addEventListener('click', showLog);
  historyIcon.addEventListener('keydown', e => { if (e.key === 'Enter') showLog(); });
  hello.appendChild(historyIcon);
}

function editProfile(data) {
  formArea.classList.add('show');
  overlay.classList.remove('hidden');
  overlay.classList.add('edit-mode');
  document.body.style.overflow = 'hidden';
  header.style.display = 'none';
  card.style.display = 'none';
  footer.style.display = 'none';
  profileForm.querySelector('button').textContent = strings.editSubmitButton;
  formTitle.style.display = 'none';
  formExplanation.style.display = 'none';

  let editText = document.getElementById('editText');
  if (!editText) {
    editText = document.createElement('p');
    editText.id = 'editText';
    editText.textContent = 'Edite suas informações abaixo';
    editText.style.fontSize = '1rem';
    editText.style.marginBottom = '10px';
    profileForm.prepend(editText);
  }

  document.getElementById('name').value = sanitizeInput(data.name);
  document.getElementById('cpf').value = sanitizeInput(data.cpf);
  document.getElementById('cpf').disabled = true;
  document.getElementById('email').value = sanitizeInput(data.email);
  document.getElementById('nickname').value = sanitizeInput(data.nickname);
  if (data.photo) {
    preview.src = data.photo;
    preview.dataset.img = data.photo;
    preview.style.background = 'none';
  }
}

function showLog() {
  const log = JSON.parse(localStorage.log || '[]');
  logBody.innerHTML = '';
  log.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${entry.action}</td><td>${entry.date}</td>`;
    logBody.appendChild(tr);
  });
  document.getElementById('logBackdrop').style.display = 'block';
  logPopup.classList.add('active');
  document.getElementById('closeLog').focus();
}

function sortLog(order) {
  const log = JSON.parse(localStorage.log || '[]');
  log.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
  logBody.innerHTML = '';
  log.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${entry.action}</td><td>${entry.date}</td>`;
    logBody.appendChild(tr);
  });
}

let idx = 0;
function updateLoadingText() {
  loadingText.textContent = texts[idx % texts.length];
  idx++;
}
updateLoadingText();
const textInterval = setInterval(updateLoadingText, 1500);

setTimeout(() => {
  clearInterval(textInterval);
  document.querySelector('.loading-spinner').style.display = 'none';
  if (!localStorage.profileData) {
    formArea.classList.add('show');
    loadingText.style.display = 'none';
  } else {
    loadingText.textContent = 'Carregando perfil... 0%';
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      progressBar.style.width = `${progress}%`;
      loadingText.textContent = `Carregando perfil... ${progress}%`;
      if (progress >= 100) {
        clearInterval(interval);
        showContent();
      }
    }, 450);
  }
}, 4500);

if (!localStorage.theme) {
  localStorage.theme = 'dark';
}
if (localStorage.theme === 'dark') {
  document.body.classList.add('dark');
  darkToggle.checked = true;
}

if (localStorage.profileData) {
  try {
    const data = JSON.parse(localStorage.profileData);
    loadProfile(data);
    showContent().then(() => {
      const paymentDateSpan = document.querySelector('.detail-item:nth-child(2) .detail-value');
      const accessTime = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      paymentDateSpan.textContent = accessTime.toLocaleDateString('pt-BR', options);
    });
  } catch (e) {
    nameError.textContent = strings.alertStorageError;
    localStorage.removeItem('profileData');
    location.reload();
  }
} else {
  localStorage.log = JSON.stringify([]);
  if (window.innerWidth <= 600) {
    document.body.style.overflow = 'hidden';
  }
}

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedMaskCPF = debounce(maskCPF, 300);

function maskCPF(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 11) v = v.substring(0, 11);
  v = v.replace(/^(\d{3})(\d)/, '$1.$2');
  v = v.replace(/^(\d{3}\.\d{3})(\d)/, '$1.$2');
  v = v.replace(/^(\d{3}\.\d{3}\.\d{3})(\d)/, '$1-$2');
  input.value = v;
}

document.getElementById('cpf').addEventListener('input', e => debouncedMaskCPF(e.target));

function isValidCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0, rest;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

photoInput.onchange = e => {
  const file = e.target.files[0];
  if (!file || !file.type.startsWith('image/') || file.size > 3000000) {
    liveRegion.textContent = strings.alertFileSize;
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    img.onload = () => {
      if (img.width < 100 || img.height < 100 || img.width > 2000 || img.height > 2000) {
        liveRegion.textContent = strings.alertImageDim;
        return;
      }
      const size = Math.min(img.width, img.height);
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, (img.width - size) / 2, (img.height - size) / 2, size, size, 0, 0, 128, 128);
      const compressed = canvas.toDataURL('image/jpeg', 0.7);
      preview.src = compressed;
      preview.dataset.img = compressed;
      preview.classList.remove('loading');
      preview.style.background = 'none';
      preview.alt = `Foto de ${document.getElementById('name').value || 'perfil'}`;
      liveRegion.textContent = 'Foto carregada com sucesso';
    };
  };
  reader.readAsDataURL(file);
  preview.classList.add('loading');
};

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.getElementById('verifyEmail').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  if (emailRegex.test(email)) {
    emailFeedback.classList.remove('error');
    emailFeedback.classList.add('success');
    emailFeedback.textContent = 'E-mail válido';
  } else {
    emailFeedback.classList.remove('success');
    emailFeedback.classList.add('error');
    emailFeedback.textContent = strings.alertInvalidEmail;
  }
});

profileForm.onsubmit = e => {
  e.preventDefault();
  nameError.textContent = '';
  cpfError.textContent = '';
  emailError.textContent = '';
  const name = document.getElementById('name').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const email = document.getElementById('email').value.trim();
  let valid = true;
  if (name.length < 3 || name.split(' ').length < 2) {
    nameError.textContent = strings.alertInvalidName;
    valid = false;
  }
  if (!isValidCPF(cpf)) {
    cpfError.textContent = strings.alertInvalidCPF;
    valid = false;
  }
  if (!emailRegex.test(email)) {
    emailError.textContent = strings.alertInvalidEmail;
    valid = false;
  }
  if (!valid) return;
  const data = {
    name: sanitizeInput(name),
    cpf: sanitizeInput(cpf.replace(/\D/g, '')),
    email: sanitizeInput(email),
    nickname: sanitizeInput(document.getElementById('nickname').value.trim()),
    photo: preview.dataset.img || ''
  };
  try {
    localStorage.profileData = JSON.stringify(data);
    const log = JSON.parse(localStorage.log);
    const action = localStorage.profileData ? 'Perfil editado' : 'Perfil criado';
    log.push({action, date: new Date().toLocaleDateString('pt-BR')});
    localStorage.log = JSON.stringify(log);
    hello.innerHTML = '';
    loadProfile(data);
    formArea.classList.remove('show');
    overlay.classList.remove('edit-mode');
    profileForm.querySelector('button').textContent = strings.submitButton;
    const editText = document.getElementById('editText');
    if (editText) editText.remove();
    formTitle.style.display = '';
    formExplanation.style.display = '';
    showContent().then(() => {
      const paymentDateSpan = document.querySelector('.detail-item:nth-child(2) .detail-value');
      const accessTime = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      paymentDateSpan.textContent = accessTime.toLocaleDateString('pt-BR', options);
    });
  } catch (err) {
    nameError.textContent = strings.alertStorageError + ' ' + err.message;
  }
};

hamburger.addEventListener('click', () => sidebar.classList.toggle('active'));

document.addEventListener('click', e => {
  if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

let startX = 0;
sidebar.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
sidebar.addEventListener('touchmove', e => {
  if (!sidebar.classList.contains('active')) return;
  const delta = e.touches[0].clientX - startX;
  if (delta < -50) {
    sidebar.classList.remove('active');
  }
});

document.querySelectorAll('#sidebar li.has-submenu').forEach(li => {
  li.addEventListener('click', () => {
    li.querySelector('.submenu').style.display = li.querySelector('.submenu').style.display === 'block' ? 'none' : 'block';
  });
});

document.getElementById('menuProfile').addEventListener('click', () => {
  const data = JSON.parse(localStorage.profileData);
  editProfile(data);
  sidebar.classList.remove('active');
});

document.getElementById('menuFaturas').addEventListener('click', () => {
  alert('Seção de faturas em desenvolvimento.');
  sidebar.classList.remove('active');
});

document.getElementById('menuSuporte').addEventListener('click', () => {
  redirectOverlay.style.display = 'flex';
  setTimeout(() => location.href = 'https://frameag.com/contato', 1000);
});

darkToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.theme = darkToggle.checked ? 'dark' : 'light';
});

document.getElementById('menuPin').addEventListener('click', () => {
  if (!localStorage.pin) {
    pinBackdrop.style.display = 'block';
    pinSetPopup.classList.add('active');
  } else {
    // already set, perhaps show change pin or something
    alert('PIN já definido. Para alterar, limpe os dados.');
  }
  sidebar.classList.remove('active');
});

setPin.addEventListener('click', () => {
  const pin = pinInput.value;
  if (pin.length === 4) {
    localStorage.pin = pin;
    pinSetPopup.classList.remove('active');
    pinBackdrop.style.display = 'none';
  } else {
    alert('PIN deve ter 4 dígitos.');
  }
});

enterPin.addEventListener('click', () => {
  const pin = pinEnterInput.value;
  if (pin === localStorage.pin) {
    pinEnterPopup.classList.remove('active');
    pinEnterBackdrop.style.display = 'none';
    pinError.textContent = '';
    attempts = 0;
  } else {
    attempts++;
    pinError.textContent = 'PIN incorreto.';
    if (attempts >= 5) {
      localStorage.blockTime = Date.now() + 5 * 60 * 1000;
      pinError.textContent = 'Bloqueado por 5 minutos.';
      setTimeout(() => {
        attempts = 0;
        pinError.textContent = '';
      }, 5 * 60 * 1000);
      // option to support
      const supportBtn = document.createElement('button');
      supportBtn.textContent = 'Pedir ajuda no suporte';
      supportBtn.addEventListener('click', () => location.href = 'https://frameag.com/contato');
      pinEnterPopup.appendChild(supportBtn);
    }
  }
});

let attempts = 0;
if (localStorage.pin && !localStorage.blockTime || Date.now() > localStorage.blockTime) {
  pinEnterBackdrop.style.display = 'block';
  pinEnterPopup.classList.add('active');
} else if (localStorage.blockTime && Date.now() < localStorage.blockTime) {
  alert('Conta bloqueada temporariamente.');
}

let idleTimer;
function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (localStorage.pin) {
      pinEnterBackdrop.style.display = 'block';
      pinEnterPopup.classList.add('active');
    }
  }, 15 * 60 * 1000);
}
document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('keydown', resetIdleTimer);
resetIdleTimer();

document.getElementById('menuLogout').addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

const notePopup = document.getElementById('notePopup');
const cancelPopup = document.getElementById('cancelPopup');
const detailsPopup = document.getElementById('detailsPopup');
const logPopup = document.getElementById('logPopup');
const infoPopup = document.getElementById('infoPopup');
const noteBackdrop = document.getElementById('noteBackdrop');
const cancelBackdrop = document.getElementById('cancelBackdrop');
const detailsBackdrop = document.getElementById('detailsBackdrop');
const logBackdrop = document.getElementById('logBackdrop');
const infoBackdrop = document.getElementById('infoBackdrop');

document.getElementById('requestNote').addEventListener('click', () => {
  noteBackdrop.style.display = 'block';
  notePopup.classList.add('active');
  trapFocus(notePopup);
});
document.getElementById('requestNote').addEventListener('keydown', e => { if (e.key === 'Enter') { noteBackdrop.style.display = 'block'; notePopup.classList.add('active'); trapFocus(notePopup); } });

document.getElementById('cancelRenewal').addEventListener('click', () => {
  cancelBackdrop.style.display = 'block';
  cancelPopup.classList.add('active');
  trapFocus(cancelPopup);
});
document.getElementById('cancelRenewal').addEventListener('keydown', e => { if (e.key === 'Enter') { cancelBackdrop.style.display = 'block'; cancelPopup.classList.add('active'); trapFocus(cancelPopup); } });

document.querySelector('.details-link').addEventListener('click', e => {
  e.preventDefault();
  detailsBackdrop.style.display = 'block';
  detailsPopup.classList.add('active');
  document.getElementById('closeDetails').focus();
  trapFocus(detailsPopup);
});

document.getElementById('redirectNote').addEventListener('click', () => {
  redirectOverlay.style.display = 'flex';
  setTimeout(() => {
    location.href = 'https://frameag.com/invoice';
    redirectOverlay.style.display = 'none';
  }, 1000);
});

document.getElementById('redirectCancel').addEventListener('click', () => {
  redirectOverlay.style.display = 'flex';
  setTimeout(() => {
    location.href = 'https://frameag.com/app/invoice-consumer-cancelrenewal';
    redirectOverlay.style.display = 'none';
  }, 1000);
});

document.getElementById('closeDetails').addEventListener('click', () => {
  detailsPopup.style.opacity = 0;
  setTimeout(() => {
    detailsPopup.classList.remove('active');
    detailsBackdrop.style.display = 'none';
  }, 300);
});

document.getElementById('closeLog').addEventListener('click', () => {
  logPopup.style.opacity = 0;
  setTimeout(() => {
    logPopup.classList.remove('active');
    logBackdrop.style.display = 'none';
  }, 300);
});

document.getElementById('infoIcon').addEventListener('click', () => {
  infoBackdrop.style.display = 'block';
  infoPopup.classList.add('active');
  trapFocus(infoPopup);
});

document.getElementById('closeInfo').addEventListener('click', () => {
  infoPopup.style.opacity = 0;
  setTimeout(() => {
    infoPopup.classList.remove('active');
    infoBackdrop.style.display = 'none';
  }, 300);
});

clearLog.addEventListener('click', () => {
  if (confirm('Confirma limpar o histórico?')) {
    localStorage.log = '[]';
    logBody.innerHTML = '';
  }
});

document.querySelector('#logTable th[data-sort]').addEventListener('click', () => {
  const th = document.querySelector('#logTable th[data-sort]');
  const order = th.dataset.sort === 'asc' ? 'desc' : 'asc';
  th.dataset.sort = order;
  sortLog(order);
});

const backdrops = [noteBackdrop, cancelBackdrop, detailsBackdrop, logBackdrop, infoBackdrop, pinBackdrop, pinEnterBackdrop];
const popups = [notePopup, cancelPopup, detailsPopup, logPopup, infoPopup, pinSetPopup, pinEnterPopup];

backdrops.forEach((bd, i) => {
  bd.addEventListener('click', () => {
    popups[i].style.opacity = 0;
    setTimeout(() => {
      popups[i].classList.remove('active');
      bd.style.display = 'none';
    }, 300);
  });
});

document.querySelectorAll('.close-popup').forEach(close => {
  close.addEventListener('click', () => {
    const popup = close.parentNode;
    popup.style.opacity = 0;
    setTimeout(() => {
      popup.classList.remove('active');
      popup.previousSibling.style.display = 'none';
    }, 300);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    popups.forEach((p, i) => {
      if (p.classList.contains('active')) {
        p.style.opacity = 0;
        setTimeout(() => {
          p.classList.remove('active');
          backdrops[i].style.display = 'none';
        }, 300);
      }
    });
  }
});

let focusedBeforeModal;
function trapFocus(modal) {
  focusedBeforeModal = document.activeElement;
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const trap = e => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  document.addEventListener('keydown', trap);
  modal.addEventListener('hidden', () => document.removeEventListener('keydown', trap));
  first.focus();
}

window.addEventListener('pageshow', () => {
  redirectOverlay.style.display = 'none';
});

versionDate.textContent = new Date().toLocaleDateString('pt-BR');

const mockData = { valor: '99.90' };
document.getElementById('valorTotal').textContent = `Valor total: R$ ${mockData.valor}`;