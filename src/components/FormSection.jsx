import { useState } from 'react';
import { toast } from 'react-toastify';
import { skills } from '../data/skillsData';
import { socialPlatforms } from '../data/socialData';

const simpleIconsList = ['jest', 'cypress', 'graphql', 'circleci', 'django'];
const skillIconsList = ['aws'];

const FormSection = ({ formData, setFormData }) => {
  const [searchSkill, setSearchSkill] = useState('');
  const [searchSocial, setSearchSocial] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
  };

  const handleSocialChange = (platform, value) => {
    setFormData(prev => ({
      ...prev,
      socials: { ...prev.socials, [platform]: value }
    }));
  };

  const filteredSkills = skills.filter(skill => {
    const searchTerm = searchSkill.toLowerCase();
    if (skill.name.toLowerCase().includes(searchTerm)) return true;
    if (skill.tags && skill.tags.some(tag => tag.toLowerCase().includes(searchTerm))) return true;
    return false;
  });

  const filteredSocials = socialPlatforms.filter(platform =>
    platform.name.toLowerCase().includes(searchSocial.toLowerCase())
  );

  const handleAddonChange = (addonName, checked) => {
    if (checked && !formData.socials.github) {
      toast.warning('Please fill in your GitHub username in the Social Media section first to enable add-ons.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setFormData(prev => ({
      ...prev,
      addons: { ...prev.addons, [addonName]: checked }
    }));
  };

  return (
    <div className="space-y-6">

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Title</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Hi 👋, I'm..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => handleInputChange('subtitle', e.target.value)}
              placeholder="A passionate developer from..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">About Me</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Work
            </label>
            <input
              type="text"
              value={formData.currentWork}
              onChange={(e) => handleInputChange('currentWork', e.target.value)}
              placeholder="I'm currently working on..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currently Learning
            </label>
            <input
              type="text"
              value={formData.currentlyLearning}
              onChange={(e) => handleInputChange('currentlyLearning', e.target.value)}
              placeholder="I'm currently learning..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Looking to Collaborate
            </label>
            <input
              type="text"
              value={formData.collaboration}
              onChange={(e) => handleInputChange('collaboration', e.target.value)}
              placeholder="I'm looking to collaborate on..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ask Me About
            </label>
            <input
              type="text"
              value={formData.askMeAbout}
              onChange={(e) => handleInputChange('askMeAbout', e.target.value)}
              placeholder="Ask me about..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fun Fact
            </label>
            <input
              type="text"
              value={formData.funFact}
              onChange={(e) => handleInputChange('funFact', e.target.value)}
              placeholder="A fun fact about me..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Skills</h2>

        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              value={searchSkill}
              onChange={(e) => setSearchSkill(e.target.value)}
              placeholder="Search skills..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto p-1">
          {filteredSkills.map((skill) => {
            
            let iconSrc;
            if (skillIconsList.includes(skill.icon)) {
              
              iconSrc = `https://skillicons.dev/icons?i=${skill.icon}`;
            } else if (simpleIconsList.includes(skill.icon)) {
              
              iconSrc = `https://cdn.simpleicons.org/${skill.icon}`;
            } else {
              
              iconSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`;
            }

            return (
              <button
                key={skill.name}
                onClick={() => handleSkillToggle(skill.name)}
                className={`px-3 py-2 rounded-lg border-2 transition-all flex items-center gap-2 text-left cursor-pointer ${
                  formData.skills.includes(skill.name)
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                }`}
              >
                <img
                  src={iconSrc}
                  alt={skill.name}
                  className="w-5 h-5 flex-shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-sm truncate">{skill.name}</span>
              </button>
            );
          })}
        </div>
        {filteredSkills.length === 0 && (
          <p className="text-center text-gray-500 py-4">No skills found</p>
        )}
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Social Media</h2>

        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              value={searchSocial}
              onChange={(e) => setSearchSocial(e.target.value)}
              placeholder="Search social media..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto p-1">
          {filteredSocials.map((platform) => (
            <div key={platform.key}>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <img
                  src={platform.badge}
                  alt={platform.name}
                  className="h-5"
                  loading="lazy"
                />
                {platform.name}
              </label>
              <input
                type="text"
                value={formData.socials[platform.key] || ''}
                onChange={(e) => handleSocialChange(platform.key, e.target.value)}
                placeholder={platform.placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
              />
            </div>
          ))}
        </div>
        {filteredSocials.length === 0 && (
          <p className="text-center text-gray-500 py-4">No social media platforms found</p>
        )}
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">Add-ons</h2>
          <p className="text-sm text-gray-500 mt-1">
            {formData.socials.github ? (
              <>
                <span className="text-green-600 font-medium">✓</span> GitHub username detected: <span className="font-medium text-gray-700">{formData.socials.github}</span>
              </>
            ) : (
              <>
                <span className="text-orange-500">⚠</span> Please fill in your <span className="font-medium">GitHub username</span> in Social Media section to enable these add-ons
              </>
            )}
          </p>
        </div>

        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.addons.stats}
              onChange={(e) => handleAddonChange('stats', e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 group-hover:text-gray-900">GitHub Stats Card</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.addons.streak}
              onChange={(e) => handleAddonChange('streak', e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 group-hover:text-gray-900">GitHub Streak Stats</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.addons.topLangs}
              onChange={(e) => handleAddonChange('topLangs', e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 group-hover:text-gray-900">Top Languages Card</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.addons.trophy}
              onChange={(e) => handleAddonChange('trophy', e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 group-hover:text-gray-900">GitHub Trophies</span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default FormSection;
