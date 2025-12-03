    const folderContents = {



        certificates: `
            <h2>Certificates</h2>
            <div class="project-card">
                <h3><b>Coming Soon</b></h3>
            
            </div>
            `,
            


        github: `
            <h2>GitHub Repositories</h2>
            <div id="github-repos-container">
                <p>Loading repositories...</p>
            </div>
        `,

        about: `
        <h2>About</h2>
            
        <p>
            From a young age, I have always been passionate about technology and its potential to 
            transform the world we live in. This passion led me to continue learning about software development, 
            and digital marketing, where I have honed my skills in various programming 
            languages, frameworks, and tools. Currently, I am focused on building innovative tools that utilize AI to help companies
            automate processes, improve efficiency, and drive growth.
        </p>
           
        <p>
            Beyond technical skills, I have extensive experience in Account Management
            and Business Development, allowing me to bridge the gap between technical solutions and client needs. 
            I have a proven track record in delivering client-focused solutions and 
            successfully managing multiple projects and clients while achieving 
            overall objectives.
            
        </p>
    `,
        
        projects: `
        <h2>Projects</h2>
        <a href="#" class="project-card" onclick="event.preventDefault(); openFolder('ShowUp', 'projects')">
            <img src="images/showup.png" alt="AI Powered SEO Platform Logo" class="project-avatar">
            <h3>ShowUp App</h3>
            <p>
                ShowUp is the first Social Accountability App. Built with Flutter, OpenAI and Firebase, ShowUp leverages AI to help users stay committed to their goals by connecting them with accountability partners and providing personalized reminders and progress tracking. 
                Whether you're trying to build new habits, complete projects, or stay on track with your personal and professional goals, ShowUp is here to help you succeed. 
                With its intuitive interface and powerful AI-driven features, ShowUp makes it easy to stay motivated and accountable every step of the way.
            </p>
            <div class="project-tags">
                <span class="tag">Flutter</span>
                <span class="tag">Firebase</span>
                <span class="tag">OpenAI</span>
            </div>
        </a>
        
        
        <a href="#" class="project-card" onclick="event.preventDefault(); openFolder('ContentClimb', 'projects')">
            <img src="images/contentclimb.png" alt="AI Powered SEO Platform Logo" class="project-avatar">
            <h3>Content Climb</h3>
            <p>
                Content Climb is an AI-powered SEO platform that analyzes your website and builds a step-by-step roadmap to boost your search performance. 
                It scans your pages, identifies keyword opportunities, and uncovers content and competitor gaps automatically. 
                With actionable insights and tailored strategies, Content Climb helps you optimize smarter, plan better, and grow faster all in one intuitive dashboard.
            </p>
            <div class="project-tags">
                <span class="tag">Flutter</span>
                <span class="tag">Firebase</span>
                <span class="tag">Git</span>
                <span class="tag">Anthropic</span>
                <span class="tag">Vercel</span>
            </div>
        </a>

        <a href="https://underdogminingnft.com" target="_blank" class="project-card">
            <img src="images/underdog.png" alt="Underdog ETH Minting Platform Logo" class="project-avatar">
            <h3>Web3 ETH NFT Minting Website</h3>
            <p>
                UnderDog Mining is a community-first ETH NFT minting platform built with HTML, CSS, JavaScript and Web3.js. 
                By minting this collection, you’re joining a DAO-style ecosystem where holders share in the mining profits and enjoy full transparency on assets and operations. 
            </p>
            <div class="project-tags">
                <span class="tag">Solidity/ML</span>
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">Web3</span>
                <span class="tag">JS</span>
            </div>
        </a>

        <div class="project-card">
            <img src="images/fivem.png" alt="Fivem Platform Logo" class="project-avatar">
            <h3>FiveM Game Script Marketplace</h3>
            <p>Developed interactive, open-sourced, and unique gaming scripts in Lua for the FiveM Gaming Platform.</p>
            <div class="project-tags">
                <span class="tag">Node.js</span>
                <span class="tag">Lua</span>
                <span class="tag">React</span>
            </div>
        </div>

        <div class="project-card">
            <img src="images/wtf.jpg" alt="Web3 News Platform Logo" class="project-avatar">
            <h3>Web3 News Website</h3>
            <p>Created a Web3 news aggregation platform that scrapes APIs to compile blockchain-related headlines in real time.</p>
            <div class="project-tags">
                <span class="tag">Node.js</span>
                <span class="tag">WordPress</span>
                <span class="tag">Vercel</span>
                <span class="tag">Git</span>
                <span class="tag">Google AdMob</span>
            </div>
        </div>
                
        
        
        
        
        
        `,

        ContentClimb: '',

        ShowUp: '',

        skills: `
            <h2>Technical Skills</h2>
            <div class="project-card">
                <h3><u>Software & Application Development</u></h3>
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
                <h3><u>Digital Marketing & Data Tools</u></h3>
                <ul>
                   <li><p><b>CRO & Funnel Optimization:</b> Execute A/B and multivariate tests across different platforms to improve CTR, CVR, and CAC efficiency.</p></li>
                   <li><p><b>Landing Page Development:</b> Built and optimized responsive websites with integrated analytics and tracking.</p></li>
                   <li><p><b>Campaign Management:</b> Designed, launched, and iterated multi-channel campaigns across email, paid ads, and in-app flows.</p></li>
                   <li><p><b>Automation & Integrations:</b> Implemented full-funnel analytics through Google Analytics, Tag Manager, HubSpot, and custom API integrations, ensuring clean attribution and actionable reporting.</p></li>
                   <li><p>Experienced in developing test hypotheses, designing data-driven experiments, and maintaining continuous optimization loops for funnel performance.</p></li>

                </ul>            
            </div>




            <div class="project-card">
                <h3><u>Account & Project Management</u></h3>
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
                <h3><u>Business Development & Strategy</u></h3>
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
                <p>
                <ul>
                    <li>Boosted client satisfaction by effectively managing and resolving account issues.</li>
                    <li>Provide data driven reports from all active campaigns to aid with decision making.</li>
                    <li>Performed effectively in self-directed work environment, managing day-to-day operations and decisions.</li>
                    <li>Streamlined account management processes, improving overall efficiency and productivity.</li>
                </ul>
                </p>
            </div>

            <div class="project-card">
                <h3>Owner</h3>
                <p><strong>Market Consulting Solutions</strong> | 09/2019 - 02/2022 </p>
                <p>
                <ul>
                    <li>Increased brand awareness by developing and implementing comprehensive digital marketing strategies for clients across new and regulated industries.</li>
                    <li>Boosted sales through targeted advertising campaigns across Google Ads, Meta Ads, and other digital platforms, driving measurable ROI.</li>
                    <li>Designed and optimized landing pages and websites to improve conversion rates and user experience.</li>
                    <li>Created and managed multi-channel content strategies, including social media, email marketing, and promotional campaigns to strengthen online engagement.</li>
                    <li>Developed comprehensive marketing plans for both local and nationwide businesses to expand their digital footprints and enhance brand visibility.</li>
                </ul>
                </p>

            </div>
        `,
        contact: `
            <h2>Get In Touch</h2>
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
                        <div class="folder-name">About</div>
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

            document.querySelectorAll('.folder').forEach(folder => {
            folder.blur();
        });

        }
    }

    // Swipe to go back functionality
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
        const swipeThreshold = 100; // Minimum swipe distance in pixels
        const swipeDistance = touchEndX - touchStartX;
        
        // Swipe right to go back
        if (swipeDistance > swipeThreshold && currentFolder !== 'home') {
            const backButton = document.querySelector('.back-button');
            if (backButton) {
                backButton.click();
            }
        }
    }

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });



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

