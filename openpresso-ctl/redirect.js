async function getDefaultVersionPath(versionsParentPath = '.') {
    const response = await fetch(versionsParentPath + '/versions.json');
    if (!response.ok) return;

    const versions = await response.json();
    if (versions.stable && versions.stable.length) {
        return versionsParentPath + '/' + versions.stable[versions.stable.length - 1];
    }
    else if (versions.canary) {
        return versionsParentPath + '/canary';
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