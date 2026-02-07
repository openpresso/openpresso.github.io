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

   if(versions.draft) {
      const option = document.createElement('option');
      option.value = 'draft';
      option.textContent = versions.draft + ' (draft)';
      selectElement.appendChild(option);
   }

   for (const [i, version] of versions.releases.reverse().entries()) {
      const option = document.createElement('option');
      option.value = version;
      option.textContent = version + (i == 0 ? ' (latest)' : '');
      selectElement.appendChild(option);
   }

   const pathParts = window.location.pathname.split('/');
   const currentVersion = pathParts[pathParts.length - 2];

   selectElement.value = currentVersion;
   selectElement.addEventListener('change', redirectToVersion);

   const projectNumber = document.getElementById('projectnumber');
   projectNumber.innerHTML = '';
   projectNumber.appendChild(selectElement);
}

document.addEventListener('DOMContentLoaded', loadVersions);


