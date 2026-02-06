async function addRedirectLink() {
    const response = await fetch('libopenpresso/versions.json');
    if (!response.ok) return;

    const versions = await response.json();
    var redirectVersion;
    if (versions.releases && versions.releases.length) {
        redirectVersion = versions.releases[versions.releases.length - 1];
    }
    else if (versions.draft) {
        redirectVersion = 'draft';
    }
    else {
        return;
    }

    const redirectUrl = `libopenpresso/${redirectVersion}/index.html`;
    const linkLogo = document.getElementById('logo-link');
    linkLogo.href = redirectUrl;
}
addRedirectLink();