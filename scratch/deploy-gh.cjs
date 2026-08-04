const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..');
const repoUrl = 'https://github.com/azhutoshverma32-arch/portfolio.git';
const token = process.env.GH_TOKEN || process.argv[2] || '';

async function run() {
  console.log('Initializing local git repository...');
  await git.init({ fs, dir });

  console.log('Adding remote origin...');
  try {
    await git.addRemote({ fs, dir, remote: 'origin', url: repoUrl });
  } catch (e) {
    // remote might already exist
  }

  // Get all files recursively except node_modules and .git
  function getFiles(dirPath, relativePath = '') {
    let results = [];
    const list = fs.readdirSync(dirPath);
    for (const file of list) {
      if (file === 'node_modules' || file === '.git' || file === 'node_tmp') continue;
      const fullPath = path.join(dirPath, file);
      const relPath = relativePath ? `${relativePath}/${file}` : file;
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(fullPath, relPath));
      } else {
        results.push(relPath);
      }
    }
    return results;
  }

  console.log('Adding files to git index...');
  const files = getFiles(dir);
  for (const filepath of files) {
    await git.add({ fs, dir, filepath });
  }

  console.log('Creating commit...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Ashutosh Verma',
      email: 'azhutosh.verma32@gmail.com',
    },
    message: 'Deploy portfolio to GitHub',
  });
  console.log('Commit created with SHA:', sha);

  console.log('Pushing to GitHub (main branch)...');
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    onAuth: () => ({ username: token || 'azhutoshverma32-arch', password: token }),
  });
  console.log('Push Result:', pushResult);
}

run().catch(err => {
  console.error('Error during git operation:', err);
  process.exit(1);
});
