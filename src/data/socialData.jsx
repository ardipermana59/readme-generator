export const socialPlatforms = [
  {
    name: 'GitHub',
    key: 'github',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/github/181717',
    url: (username) => `https://github.com/${username}`
  },
  {
    name: 'LinkedIn',
    key: 'linkedin',
    placeholder: 'username',
    badge: 'https://skillicons.dev/icons?i=linkedin',
    url: (username) => `https://www.linkedin.com/in/${username}`
  },
  {
    name: 'Twitter',
    key: 'twitter',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/x/000000',
    url: (username) => `https://twitter.com/${username}`
  },
  {
    name: 'Instagram',
    key: 'instagram',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/instagram/E4405F',
    url: (username) => `https://www.instagram.com/${username}`
  },
  {
    name: 'YouTube',
    key: 'youtube',
    placeholder: 'channel-name',
    badge: 'https://cdn.simpleicons.org/youtube/FF0000',
    url: (username) => `https://youtube.com/@${username}`
  },
  {
    name: 'Dev.to',
    key: 'devto',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/devdotto/0A0A0A',
    url: (username) => `https://dev.to/${username}`
  },
  {
    name: 'Medium',
    key: 'medium',
    placeholder: '@username',
    badge: 'https://cdn.simpleicons.org/medium/000000',
    url: (username) => `https://medium.com/@${username}`
  },
  {
    name: 'Stack Overflow',
    key: 'stackoverflow',
    placeholder: 'user-id',
    badge: 'https://cdn.simpleicons.org/stackoverflow/F58025',
    url: (username) => `https://stackoverflow.com/users/${username}`
  },
  {
    name: 'CodeSandbox',
    key: 'codesandbox',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/codesandbox/151515',
    url: (username) => `https://codesandbox.io/${username}`
  },
  {
    name: 'Kaggle',
    key: 'kaggle',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/kaggle/20BEFF',
    url: (username) => `https://www.kaggle.com/${username}`
  },
  {
    name: 'Dribbble',
    key: 'dribbble',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/dribbble/EA4C89',
    url: (username) => `https://dribbble.com/${username}`
  },
  {
    name: 'Behance',
    key: 'behance',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/behance/1769FF',
    url: (username) => `https://www.behance.net/${username}`
  },
  {
    name: 'Facebook',
    key: 'facebook',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/facebook/0866FF',
    url: (username) => `https://www.facebook.com/${username}`
  },
  {
    name: 'Discord',
    key: 'discord',
    placeholder: 'invite code',
    badge: 'https://cdn.simpleicons.org/discord/5865F2',
    url: (username) => `https://discord.gg/${username}`
  },
  {
    name: 'CodeChef',
    key: 'codechef',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/codechef/5B4638',
    url: (username) => `https://www.codechef.com/users/${username}`
  },
  {
    name: 'Codeforces',
    key: 'codeforces',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/codeforces/1F8ACB',
    url: (username) => `https://codeforces.com/profile/${username}`
  },
  {
    name: 'LeetCode',
    key: 'leetcode',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/leetcode/FFA116',
    url: (username) => `https://leetcode.com/${username}`
  },
  {
    name: 'HackerRank',
    key: 'hackerrank',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/hackerrank/00EA64',
    url: (username) => `https://www.hackerrank.com/${username}`
  },
  {
    name: 'TopCoder',
    key: 'topcoder',
    placeholder: 'username',
    badge: 'https://cdn.simpleicons.org/topcoder/29A8E0',
    url: (username) => `https://www.topcoder.com/members/${username}`
  },
  {
    name: 'Hashnode',
    key: 'hashnode',
    placeholder: 'username (with @)',
    badge: 'https://cdn.simpleicons.org/hashnode/2962FF',
    url: (username) => `https://hashnode.com/${username}`
  },
  {
    name: 'RSS Feed',
    key: 'rss',
    placeholder: 'Feed URL',
    badge: 'https://cdn.simpleicons.org/rss/FFA500',
    url: (url) => url
  },
  {
    name: 'GeeksforGeeks',
    key: 'geeksforgeeks',
    placeholder: '<username>/profile',
    badge: 'https://cdn.simpleicons.org/geeksforgeeks/2F8D46',
    url: (username) => `https://auth.geeksforgeeks.org/user/${username}`
  },
];

export const SOCIAL_PLATFORMS = socialPlatforms.reduce((acc, platform) => {
  acc[platform.key] = platform;
  return acc;
}, {});
