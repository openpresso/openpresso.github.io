async function redirectToVersion() {
   const selectedVersion = this.value;
   if (!selectedVersion) {
      return;
   }
   const currentPage = window.location.pathname.split('/').pop() || 'index.html';
   const versionedPath = `../${selectedVersion}/${currentPage}`;
   const response = await fetch(versionedPath, { method: 'HEAD' });
   if (response.ok) {
      window.location.href = versionedPath;
   } else {
      window.location.href = `../${selectedVersion}/index.html`;
   }
}

async function loadVersions() {
   const response = await fetch('../versions.json');
   if (!response.ok) {
      return;
   }

   versions = await response.json();
   
   const selectElement = document.createElement('select');
   selectElement.id="versionSelector";

   if(versions.canary) {
      const option = document.createElement('option');
      option.value = 'canary';
      option.textContent = versions.canary + ' (canary)';
      selectElement.appendChild(option);
   }

   for (const [i, version] of versions.stable.reverse().entries()) {
      const option = document.createElement('option');
      option.value = version;
      option.textContent = version + (i == 0 ? ' (latest)' : '');
      selectElement.appendChild(option);
   }

   const pathParts = window.location.pathname.split('/');
   const currentVersion = pathParts[pathParts.length - 2];

   selectElement.value = currentVersion;
   selectElement.addEventListener('change', redirectToVersion);

   projectnumber.innerHTML = '';
   projectnumber.appendChild(selectElement);
}

function addBackButton() {
   const navpathUl = document.querySelector('#nav-path ul');
   if (!navpathUl) return;
   const backItem = document.createElement('li');
   backItem.className = 'navelem';
   backItem.innerHTML = `
   <a href="../../../" title="Back to main site">
      ← To Openpresso Site
   </a>`;
   navpathUl.insertBefore(backItem, navpathUl.firstChild);
}

async function addOpenpressoSiteControls() {
   addBackButton();
   await loadVersions();
}

document.addEventListener('DOMContentLoaded', addOpenpressoSiteControls);


