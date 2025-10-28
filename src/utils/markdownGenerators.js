import { SOCIAL_PLATFORMS } from '../data/socialData';
import { skills as skillsData } from '../data/skillsData';

export const generateSocialLinks = (socials) => {
  return Object.entries(socials)
    .filter(([_, username]) => username)
    .map(([platform, username]) => {
      const config = SOCIAL_PLATFORMS[platform];
      if (!config) return null;
      return `[<img src='${config.badge}' alt='${platform}' height='40'>](${config.url(username)})`;
    })
    .filter(Boolean);
};

export const generateSkillIcons = (skills) => {
  const simpleIconsList = ['jest', 'cypress', 'graphql', 'circleci', 'django'];
  const skillIconsList = ['aws'];

  return skills.map(skillName => {
    const skillData = skillsData.find(s => s.name === skillName);
    const iconName = skillData ? skillData.icon : skillName.toLowerCase().replace(/\./g, '').replace(/\s/g, '');

    if (skillIconsList.includes(iconName)) {
      return `<img loading="lazy" src="https://skillicons.dev/icons?i=${iconName}" alt="${skillName}" width="40" height="40"/>`;
    }

    if (simpleIconsList.includes(iconName)) {
      return `<img loading="lazy" src="https://cdn.simpleicons.org/${iconName}" alt="${skillName}" width="40" height="40"/>`;
    }

    return `<img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg" alt="${skillName}" width="40" height="40"/>`;
  }).join(' ');
};

export const generateAboutSection = (formData) => {
  const aboutItems = [
    { condition: formData.currentWork, text: `🔭 I'm currently working on **${formData.currentWork}**` },
    { condition: formData.currentlyLearning, text: `🌱 I'm currently learning **${formData.currentlyLearning}**` },
    { condition: formData.collaboration, text: `👯 I'm looking to collaborate on **${formData.collaboration}**` },
    { condition: formData.askMeAbout, text: `💬 Ask me about **${formData.askMeAbout}**` },
    { condition: formData.email, text: `📫 How to reach me **${formData.email}**` },
    { condition: formData.funFact, text: `⚡ Fun fact **${formData.funFact}**` },
  ];

  return aboutItems
    .filter(item => item.condition)
    .map(item => `${item.text}\n\n`)
    .join('');
};

export const generateGitHubAddons = (addons, username) => {
  let markdown = '';

  if (addons.trophy) {
    markdown += `## 🏆 GitHub Trophies\n`;
    markdown += `![](https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-frame=false&no-bg=true&margin-w=4)\n\n`;
  }

  if (addons.stats) {
    markdown += `## 📊 GitHub Stats\n`;
    markdown += `![](https://github-readme-stats.vercel.app/api?username=${username}&theme=radical&hide_border=false&include_all_commits=true&count_private=true)\n\n`;
  }

  if (addons.streak) {
    markdown += `## 🔥 GitHub Streak\n`;
    markdown += `![](https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=false)\n\n`;
  }

  if (addons.topLangs) {
    markdown += `## 💻 Top Languages\n`;
    markdown += `![](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=radical&hide_border=false&include_all_commits=true&count_private=true&layout=compact)\n\n`;
  }

  return markdown;
};
