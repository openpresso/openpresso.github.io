async function getDefaultVersionPath(versionsParentPath = '.') {
    const response = await fetch(versionsParentPath + '/versions.json');
    if (!response.ok) return;

    const versions = await response.json();
    if (versions.releases && versions.releases.length) {
        return versionsParentPath + '/' + versions.releases[versions.releases.length - 1];
    }
    else if (versions.draft) {
        return versionsParentPath + '/draft';
    }
    else {
        throw new Error('no versions found');
    }
}

async function makeRedirect(versionsParentPath = '.') {
    try {
        const redirectTo = await getDefaultVersionPath(versionsParentPath);
        window.location = redirectTo;
    }
    catch (error) {
        console.error(error);
    }
}