export const skills = [
  // Programming Languages
  { name: 'C', icon: 'c', category: 'language', tags: ['c', 'programming', 'language'] },
  { name: 'C#', icon: 'csharp', category: 'language', tags: ['csharp', 'c#', 'dotnet', '.net', 'microsoft', 'programming', 'language'] },
  { name: 'C++', icon: 'cplusplus', category: 'language', tags: ['cpp', 'c++', 'cplusplus', 'programming', 'language'] },
  { name: 'Dart', icon: 'dart', category: 'language', tags: ['dart', 'flutter', 'programming', 'language'] },
  { name: 'Go', icon: 'go', category: 'language', tags: ['go', 'golang', 'google', 'programming', 'language'] },
  { name: 'Java', icon: 'java', category: 'language', tags: ['java', 'spring', 'android', 'programming', 'language'] },
  { name: 'JavaScript', icon: 'javascript', category: 'language', tags: ['javascript', 'js', 'node', 'react', 'vue', 'angular', 'programming', 'language'] },
  { name: 'Kotlin', icon: 'kotlin', category: 'language', tags: ['kotlin', 'android', 'jetbrains', 'programming', 'language'] },
  { name: 'Lua', icon: 'lua', category: 'language', tags: ['lua', 'scripting', 'programming', 'language'] },
  { name: 'Perl', icon: 'perl', category: 'language', tags: ['perl', 'scripting', 'programming', 'language'] },
  { name: 'PHP', icon: 'php', category: 'language', tags: ['php', 'laravel', 'codeigniter', 'symfony', 'wordpress', 'web', 'backend', 'programming', 'language'] },
  { name: 'Python', icon: 'python', category: 'language', tags: ['python', 'django', 'flask', 'fastapi', 'ml', 'ai', 'data', 'programming', 'language'] },
  { name: 'R', icon: 'r', category: 'language', tags: ['r', 'statistics', 'data', 'analysis', 'programming', 'language'] },
  { name: 'Ruby', icon: 'ruby', category: 'language', tags: ['ruby', 'rails', 'programming', 'language'] },
  { name: 'Rust', icon: 'rust', category: 'language', tags: ['rust', 'systems', 'programming', 'language'] },
  { name: 'Scala', icon: 'scala', category: 'language', tags: ['scala', 'jvm', 'functional', 'programming', 'language'] },
  { name: 'Swift', icon: 'swift', category: 'language', tags: ['swift', 'ios', 'apple', 'macos', 'programming', 'language'] },
  { name: 'TypeScript', icon: 'typescript', category: 'language', tags: ['typescript', 'ts', 'javascript', 'js', 'typed', 'programming', 'language'] },

  // Frontend
  { name: 'Angular', icon: 'angular', category: 'frontend', tags: ['angular', 'frontend', 'framework', 'typescript', 'google'] },
  { name: 'Bootstrap', icon: 'bootstrap', category: 'frontend', tags: ['bootstrap', 'css', 'framework', 'frontend', 'responsive'] },
  { name: 'CSS3', icon: 'css3', category: 'frontend', tags: ['css', 'css3', 'styling', 'frontend', 'web'] },
  { name: 'HTML5', icon: 'html5', category: 'frontend', tags: ['html', 'html5', 'markup', 'frontend', 'web'] },
  { name: 'jQuery', icon: 'jquery', category: 'frontend', tags: ['jquery', 'javascript', 'js', 'library', 'frontend'] },
  { name: 'Material-UI', icon: 'materialui', category: 'frontend', tags: ['materialui', 'mui', 'react', 'ui', 'frontend', 'component'] },
  { name: 'Next.js', icon: 'nextjs', category: 'frontend', tags: ['nextjs', 'next', 'react', 'ssr', 'frontend', 'framework'] },
  { name: 'Nuxt.js', icon: 'nuxtjs', category: 'frontend', tags: ['nuxtjs', 'nuxt', 'vue', 'ssr', 'frontend', 'framework'] },
  { name: 'React', icon: 'react', category: 'frontend', tags: ['react', 'reactjs', 'javascript', 'frontend', 'library', 'ui'] },
  { name: 'Redux', icon: 'redux', category: 'frontend', tags: ['redux', 'state', 'management', 'react', 'frontend'] },
  { name: 'Sass', icon: 'sass', category: 'frontend', tags: ['sass', 'scss', 'css', 'preprocessor', 'frontend'] },
  { name: 'Svelte', icon: 'svelte', category: 'frontend', tags: ['svelte', 'frontend', 'framework', 'compiler'] },
  { name: 'TailwindCSS', icon: 'tailwindcss', category: 'frontend', tags: ['tailwind', 'tailwindcss', 'css', 'utility', 'frontend'] },
  { name: 'Vite', icon: 'vitejs', category: 'frontend', tags: ['vite', 'vitejs', 'build', 'bundler', 'frontend'] },
  { name: 'Vue.js', icon: 'vuejs', category: 'frontend', tags: ['vue', 'vuejs', 'frontend', 'framework', 'javascript'] },
  { name: 'Webpack', icon: 'webpack', category: 'frontend', tags: ['webpack', 'bundler', 'build', 'frontend'] },

  // Backend
  { name: 'Django', icon: 'django', category: 'backend', tags: ['django', 'python', 'backend', 'framework', 'web'] },
  { name: 'Express', icon: 'express', category: 'backend', tags: ['express', 'expressjs', 'node', 'nodejs', 'backend', 'framework'] },
  { name: 'FastAPI', icon: 'fastapi', category: 'backend', tags: ['fastapi', 'python', 'backend', 'framework', 'api'] },
  { name: 'Flask', icon: 'flask', category: 'backend', tags: ['flask', 'python', 'backend', 'framework', 'micro'] },
  { name: 'Laravel', icon: 'laravel', category: 'backend', tags: ['laravel', 'php', 'backend', 'framework', 'web'] },
  { name: 'NestJS', icon: 'nestjs', category: 'backend', tags: ['nestjs', 'nest', 'node', 'nodejs', 'typescript', 'backend', 'framework'] },
  { name: 'Node.js', icon: 'nodejs', category: 'backend', tags: ['nodejs', 'node', 'javascript', 'backend', 'runtime'] },
  { name: 'Spring', icon: 'spring', category: 'backend', tags: ['spring', 'springboot', 'java', 'backend', 'framework'] },

  // Database
  { name: 'Cassandra', icon: 'cassandra', category: 'database', tags: ['cassandra', 'nosql', 'database', 'distributed'] },
  { name: 'Elasticsearch', icon: 'elasticsearch', category: 'database', tags: ['elasticsearch', 'search', 'database', 'analytics'] },
  { name: 'MariaDB', icon: 'mariadb', category: 'database', tags: ['mariadb', 'mysql', 'sql', 'database', 'relational'] },
  { name: 'Microsoft SQL Server', icon: 'microsoftsqlserver', category: 'database', tags: ['mssql', 'sqlserver', 'microsoft', 'sql', 'database'] },
  { name: 'MongoDB', icon: 'mongodb', category: 'database', tags: ['mongodb', 'mongo', 'nosql', 'database', 'document'] },
  { name: 'MySQL', icon: 'mysql', category: 'database', tags: ['mysql', 'sql', 'database', 'relational'] },
  { name: 'Oracle', icon: 'oracle', category: 'database', tags: ['oracle', 'sql', 'database', 'relational'] },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'database', tags: ['postgresql', 'postgres', 'sql', 'database', 'relational'] },
  { name: 'Redis', icon: 'redis', category: 'database', tags: ['redis', 'cache', 'database', 'inmemory', 'nosql'] },
  { name: 'SQLite', icon: 'sqlite', category: 'database', tags: ['sqlite', 'sql', 'database', 'embedded'] },

  // DevOps & Tools
  { name: 'Apache', icon: 'apache', category: 'devops', tags: ['apache', 'webserver', 'http', 'devops'] },
  { name: 'Bash', icon: 'bash', category: 'devops', tags: ['bash', 'shell', 'scripting', 'linux', 'devops'] },
  { name: 'CircleCI', icon: 'circleci', category: 'devops', tags: ['circleci', 'ci', 'cd', 'devops', 'automation'] },
  { name: 'Debian', icon: 'debian', category: 'devops', tags: ['debian', 'linux', 'os', 'devops'] },
  { name: 'Docker', icon: 'docker', category: 'devops', tags: ['docker', 'container', 'devops', 'containerization'] },
  { name: 'Git', icon: 'git', category: 'devops', tags: ['git', 'version', 'control', 'devops', 'vcs'] },
  { name: 'GitHub', icon: 'github', category: 'devops', tags: ['github', 'git', 'devops', 'repository', 'hosting'] },
  { name: 'GitLab', icon: 'gitlab', category: 'devops', tags: ['gitlab', 'git', 'devops', 'cicd', 'repository'] },
  { name: 'Jenkins', icon: 'jenkins', category: 'devops', tags: ['jenkins', 'ci', 'cd', 'devops', 'automation'] },
  { name: 'Kubernetes', icon: 'kubernetes', category: 'devops', tags: ['kubernetes', 'k8s', 'container', 'orchestration', 'devops'] },
  { name: 'Linux', icon: 'linux', category: 'devops', tags: ['linux', 'os', 'unix', 'devops'] },
  { name: 'Nginx', icon: 'nginx', category: 'devops', tags: ['nginx', 'webserver', 'proxy', 'devops'] },
  { name: 'Travis CI', icon: 'travis', category: 'devops', tags: ['travis', 'travisci', 'ci', 'cd', 'devops'] },
  { name: 'Ubuntu', icon: 'ubuntu', category: 'devops', tags: ['ubuntu', 'linux', 'os', 'devops'] },

  // Cloud & Services
  { name: 'AWS', icon: 'aws', category: 'cloud', tags: ['aws', 'amazon', 'cloud', 'hosting', 'ec2', 's3'] },
  { name: 'Azure', icon: 'azure', category: 'cloud', tags: ['azure', 'microsoft', 'cloud', 'hosting'] },
  { name: 'DigitalOcean', icon: 'digitalocean', category: 'cloud', tags: ['digitalocean', 'cloud', 'hosting', 'vps'] },
  { name: 'Firebase', icon: 'firebase', category: 'cloud', tags: ['firebase', 'google', 'cloud', 'backend', 'baas'] },
  { name: 'Google Cloud', icon: 'googlecloud', category: 'cloud', tags: ['gcp', 'google', 'cloud', 'hosting'] },
  { name: 'Heroku', icon: 'heroku', category: 'cloud', tags: ['heroku', 'cloud', 'hosting', 'paas'] },
  { name: 'Netlify', icon: 'netlify', category: 'cloud', tags: ['netlify', 'cloud', 'hosting', 'jamstack'] },
  { name: 'Vercel', icon: 'vercel', category: 'cloud', tags: ['vercel', 'cloud', 'hosting', 'nextjs'] },

  // Mobile
  { name: 'Android', icon: 'android', category: 'mobile', tags: ['android', 'mobile', 'app', 'google', 'java', 'kotlin'] },
  { name: 'Flutter', icon: 'flutter', category: 'mobile', tags: ['flutter', 'mobile', 'app', 'dart', 'google'] },
  { name: 'Ionic', icon: 'ionic', category: 'mobile', tags: ['ionic', 'mobile', 'app', 'hybrid'] },
  { name: 'iOS', icon: 'apple', category: 'mobile', tags: ['ios', 'apple', 'mobile', 'app', 'swift'] },
  { name: 'React Native', icon: 'react', category: 'mobile', tags: ['reactnative', 'react', 'mobile', 'app', 'javascript'] },

  // Design
  { name: 'Adobe XD', icon: 'xd', category: 'design', tags: ['adobexd', 'xd', 'design', 'ui', 'ux', 'adobe'] },
  { name: 'Figma', icon: 'figma', category: 'design', tags: ['figma', 'design', 'ui', 'ux', 'prototype'] },
  { name: 'Illustrator', icon: 'illustrator', category: 'design', tags: ['illustrator', 'adobe', 'design', 'vector'] },
  { name: 'Photoshop', icon: 'photoshop', category: 'design', tags: ['photoshop', 'adobe', 'design', 'photo'] },

  // Machine Learning
  { name: 'NumPy', icon: 'numpy', category: 'ml', tags: ['numpy', 'python', 'ml', 'data', 'science'] },
  { name: 'Pandas', icon: 'pandas', category: 'ml', tags: ['pandas', 'python', 'ml', 'data', 'analysis'] },
  { name: 'PyTorch', icon: 'pytorch', category: 'ml', tags: ['pytorch', 'python', 'ml', 'ai', 'deeplearning'] },
  { name: 'TensorFlow', icon: 'tensorflow', category: 'ml', tags: ['tensorflow', 'python', 'ml', 'ai', 'deeplearning', 'google'] },

  // Testing
  { name: 'Cypress', icon: 'cypress', category: 'testing', tags: ['cypress', 'testing', 'e2e', 'automation'] },
  { name: 'Jest', icon: 'jest', category: 'testing', tags: ['jest', 'testing', 'unit', 'javascript'] },
  { name: 'Postman', icon: 'postman', category: 'testing', tags: ['postman', 'testing', 'api', 'rest'] },
  { name: 'Selenium', icon: 'selenium', category: 'testing', tags: ['selenium', 'testing', 'automation', 'browser'] },

  // Others
  { name: 'Apollo GraphQL', icon: 'apollographql', category: 'other', tags: ['apollo', 'graphql', 'api', 'client'] },
  { name: 'GraphQL', icon: 'graphql', category: 'other', tags: ['graphql', 'api', 'query', 'facebook'] },
  { name: 'Prisma', icon: 'prisma', category: 'other', tags: ['prisma', 'orm', 'database', 'typescript'] },
];
