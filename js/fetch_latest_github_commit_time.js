// Fetch the latest commit time using the GitHub API
function fetchLatestCommitTime() {
    var owner = 'UHS-Software-Engineering-Club';
    var repo = 'UHS-Software-Engineering-Club.github.io';
    var branch = 'main'; // Replace with the branch name you want to check

    var url = `https://api.github.com/repos/${owner}/${repo}/branches/${branch}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var lastCommitTime = data.commit.commit.committer.date;
            document.getElementById('header-last-commit-time').textContent = `Last commit/update @ ${lastCommitTime}`;
        })
        .catch(error => {
            console.log('Error:', error);
            document.getElementById('header-last-commit-time').textContent = 'Error fetching commit/update time.';
        });
}

// Call the fetchLatestCommitTime function when the page is loaded
window.addEventListener('load', fetchLatestCommitTime);
