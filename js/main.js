    const folderContents = {



        certificates: '   ',
        
        github: `
            <h2>GitHub Repositories</h2>
            <div id="github-repos-container">
                <p>Loading repositories...</p>
            </div>
        `,

        about: `
        <h2>Resume</h2>
            <img src="images/spiderman.jpg" 
                style="max-width: 100%; height: auto; border: none; border-radius: 10px; display: block; margin: 0 auto;">
        <p></p>`,
        
        projects: '',

        ContentClimb: '',


        skills: `
            <h2>Technical Skills</h2>
            <div class="project-card">
                <h3>Software & Application Development</h3>
                <ul>
                    <li>
                        <p><b>Languages & Frameworks:</b> JavaScript, React.js, Node.js, HTML5, CSS3, Python, Lua</p>
                    </li>
                    <li>
                        <p><b>Web3 & Blockchain:</b> Smart contract interaction via Web3.js, wallet integration, decentralized app (dApp) development</p>
                    </li>
                    <li>
                        <p><b>AI Tools & Automation:</b> Prompt engineering, chatbot development (OpenAI API), process automation scripts</p>
                    </li>
                </ul>            
            </div>

            <div class="project-card">
                <h3>Account & Project Management</h3>
                <ul>
                    <li>
                        <p>Manage enterprise and B2B client portfolios</p>
                    </li>
                    <li>
                        <p> Lead multi-state operations and cross-functional teams</p>
                    </li>
                    <li>
                        <p> Develop and implement SOPs, CRM systems, and workflow automation to improve sales and operational efficiency</p>
                    </li>
                    <li>
                        <p>Strong background in client success, retention, and data-driven strategy execution</p>
                    </li>

                </ul>            
            </div>

            <div class="project-card">
                <h3>Business Development & Strategy</h3>
                <ul>
                    <li>
                        <p>Proven success in growing new territories, optimizing client acquisition, and increasing long-term revenue
                    </li>
                    <li>
                        <p>Hands-on experience launching new SaaS products, digital campaigns, and marketing strategies</p>
                    </li>
                    <li>
                        <p>Deep understanding of tech, digital marketing, and sales analytics within high-growth startups</p>
                    </li>
                </ul>            
            </div>

        `,
        experience: `
            <h2>Work Experience</h2>
            <div class="project-card">
                <h3>Regional Sales Manager</h3>
                <p><strong>OG Inc.</strong> | 04/2025 - Current</p>
                <p>
                <ul>
                    <li>Oversee multi-state sales operations across three territories</li>
                    <li>Build and maintain key client relationships, driving growth through 
account management and long-term partnerships.</li>
                    <li> Analyze sales performance and market data to identify trends, optimize 
territory coverage, and implement performance plans. </li>
                    <li> Design and implement SOPs to streamline sales workflows, onboarding, 
and team communication  </li>
                </ul>
                </p>
            </div>

            <div class="project-card">
                <h3>Senior Account Manager</h3>
                <p><strong>Safe-Reach Digital Marketing </strong> |  09/2021 - 02/2024</p>
                <p>Developed full-stack web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.</p>
            </div>

            <div class="project-card">
                <h3>Owner</h3>
                <p><strong>Market Consulting Solutions</strong> | 01/2020 - 02/2022 </p>
                <p>Built responsive web interfaces and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.</p>
            </div>
        `,
        contact: `
            <h2>Get In Touch</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div class="project-card">
                <h3>📧 Email</h3>
                <p>austin.soutomaior@gmail.com</p>
            </div>
            <div class="project-card">
                <h3>💼 LinkedIn</h3>
                <p>linkedin.com/in/austin-soutomaior</p>
            </div>
            <div class="project-card">
                <h3>🐙 GitHub</h3>
                <p>github.com/infinitecoder2</p>
            </div>
            <div class="project-card">
                <h3>🐦 Twitter</h3>
                <p>@TheShowUp_App</p>
            </div>
        `
    };

    // Dynamically load projects HTML content
    fetch('content/projects.html')
        .then(response => response.text())
        .then(html => folderContents.projects = html)
        .catch(err => console.error("Couldn't load projects.html:", err));

    let currentFolder = 'home';

function openFolder(folderName, parentFolder = null) {
    currentFolder = folderName;
    const contentArea = document.getElementById('content-area');
    const currentFolderSpan = document.getElementById('current-folder');
    const separator = document.getElementById('separator');

    // Build breadcrumb with clickable parts
    if (parentFolder) {
        currentFolderSpan.innerHTML = `
            <span class="breadcrumb-item" onclick="navigateTo('home'); openFolder('${parentFolder}')">
                ${parentFolder.charAt(0).toUpperCase() + parentFolder.slice(1)}
            </span>
            <span class="breadcrumb-separator">/</span>
            <span style="color: #2d3748;">
                ${folderName.charAt(0).toUpperCase() + folderName.slice(1)}
            </span>
        `;
    } else {
        currentFolderSpan.textContent = folderName.charAt(0).toUpperCase() + folderName.slice(1);
    }
    
    currentFolderSpan.style.display = 'inline';
    separator.style.display = 'inline';

    // Rest of the function stays the same...
    contentArea.innerHTML = `
        <button class="back-button" onclick="${parentFolder && parentFolder !== 'home' ? `openFolder('${parentFolder}')` : `navigateTo('home')`}">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            Back
        </button>
        <div class="folder-content"></div>
    `;

    const folderContentDiv = contentArea.querySelector('.folder-content');
    folderContentDiv.innerHTML = folderContents[folderName];

    if (folderName === 'github') {
        loadGitHubRepos();
    }
}


    function navigateTo(location) {
        if (location === 'home') {
            currentFolder = 'home';
            const contentArea = document.getElementById('content-area');
            const currentFolderSpan = document.getElementById('current-folder');
            const separator = document.getElementById('separator');
            
            currentFolderSpan.style.display = 'none';
            separator.style.display = 'none';
            
            contentArea.innerHTML = `
                <div class="folders-grid" id="folders-view">
                    <div class="folder" onclick="openFolder('about')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Resume</div>
                    </div>
                    <div class="folder" onclick="openFolder('projects')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#f9ab00" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Projects</div>
                    </div>
                    <div class="folder" onclick="openFolder('skills')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#1967d2" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Skills</div>
                    </div>
                    <div class="folder" onclick="openFolder('experience')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#12b5cb" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Experience</div>
                    </div>
                    <div class="folder" onclick="openFolder('github')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">GitHub</div>
                    </div>
                    <div class="folder" onclick="openFolder('contact')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Contact</div>
                    </div>

                    <div class="folder" onclick="openFolder('certificates')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                    <div class="folder-name">Certificates
                    </div>
                </div>
            `;
            if (document.activeElement) {
            document.activeElement.blur();
        }
        }
    }
    function activateRickRoll() {
        document.body.classList.toggle('flipped');

        const btn = document.querySelector('.secret-button');
        btn.textContent = document.body.classList.contains('flipped')
            ? 'LOL'
            : 'DO NOT PUSH';
    }


/* LOAD ALL PUBLIC GITHUB REPOS */
    async function loadGitHubRepos() {
    const username = 'infinitecoder2';
    const container = document.getElementById('github-repos-container');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        const repos = await response.json();
        
        if (repos.message) {
            container.innerHTML = '<p>Error loading repositories. Please try again later.</p>';
            return;
        }
        
        // Filter out forks if you want only original repos
        const publicRepos = repos.filter(repo => !repo.fork);
        
        container.innerHTML = publicRepos.map(repo => `
            <a href="${repo.html_url}" target="_blank" class="project-card">
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available'}</p>
                <div class="project-tags">
                    ${repo.language ? `<span class="tag">${repo.language}</span>` : ''}
                    <span class="tag">⭐ ${repo.stargazers_count}</span>
                    <span class="tag">🍴 ${repo.forks_count}</span>
                </div>
                <p style="font-size: 0.85rem; color: #718096; margin-top: 0.5rem;">
                    Updated: ${new Date(repo.updated_at).toLocaleDateString()}
                </p>
            </a>
        `).join('');
        
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        container.innerHTML = '<p>Error loading repositories. Please try again later.</p>';
    }
}

