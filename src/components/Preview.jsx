import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  generateSocialLinks,
  generateSkillIcons,
  generateAboutSection,
  generateGitHubAddons
} from '../utils/markdownGenerators';
import { renderPreview as renderPreviewUtil } from '../utils/markdownRenderer';
import { MANUAL_EDIT_KEY, loadManualEdit, saveManualEdit, clearManualEdit } from '../utils/storageUtils';

const Preview = ({ formData, setFormData }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const [markdown, setMarkdown] = useState('');
  const [isManualEdit, setIsManualEdit] = useState(() => loadManualEdit().isManual);

  const generateMarkdown = () => {
    let markdown = '';

    // Title and Subtitle
    if (formData.title) {
      markdown += `# ${formData.title}\n\n`;
    }
    if (formData.subtitle) {
      markdown += `### ${formData.subtitle}\n\n`;
    }

    // About Section
    markdown += generateAboutSection(formData);

    // Social Links
    const socialLinks = generateSocialLinks(formData.socials);
    if (socialLinks.length > 0) {
      markdown += `## Connect with me:\n${socialLinks.join('  ')}\n\n`;
    }

    // Skills Section
    if (formData.skills.length > 0) {
      markdown += `## Languages and Tools:\n`;
      const skillIcons = generateSkillIcons(formData.skills);
      markdown += `<p align="left">${skillIcons}</p>\n\n`;
    }

    // GitHub Addons
    const username = formData.socials.github || 'username';
    markdown += generateGitHubAddons(formData.addons, username);

    return markdown;
  };


  useEffect(() => {
    const { isManual, content } = loadManualEdit();
    if (isManual && content) {
      setMarkdown(content);
    } else {
      setMarkdown(generateMarkdown());
    }
  }, []);

  useEffect(() => {
    if (!isManualEdit) {
      setMarkdown(generateMarkdown());
    }
  }, [formData, isManualEdit]);

  useEffect(() => {
    saveManualEdit(isManualEdit, markdown);
  }, [isManualEdit, markdown]);

  const handleCopy = () => {
    if (!markdown || !markdown.trim()) {
      toast.warning('No data to copy. Please fill in the form first.');
      return;
    }
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('README copied to clipboard!');
  };

  const handleDownload = () => {
    if (!markdown || !markdown.trim()) {
      toast.warning('No data to download. Please fill in the form first.');
      return;
    }
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('README.md downloaded successfully!');
  };

  const handleEditChange = (e) => {
    setMarkdown(e.target.value);
    setIsManualEdit(true); 
  };

  
  const hasData = () => {
    return (
      formData.title ||
      formData.subtitle ||
      formData.currentWork ||
      formData.currentlyLearning ||
      formData.collaboration ||
      formData.askMeAbout ||
      formData.email ||
      formData.funFact ||
      formData.skills.length > 0 ||
      Object.values(formData.socials).some(val => val) ||
      Object.values(formData.addons).some(val => val) ||
      isManualEdit
    );
  };

  const resetToFormData = () => {
    setFormData({
      title: '',
      subtitle: '',
      currentWork: '',
      currentlyLearning: '',
      collaboration: '',
      askMeAbout: '',
      email: '',
      funFact: '',
      skills: [],
      socials: {
        github: '',
        linkedin: '',
        twitter: '',
        instagram: '',
        youtube: '',
        devto: '',
        medium: '',
        stackoverflow: '',
        codesandbox: '',
        kaggle: '',
        dribbble: '',
        behance: '',
        facebook: '',
        discord: '',
        codechef: '',
        codeforces: '',
        leetcode: '',
        hackerrank: '',
        topcoder: '',
        hashnode: '',
        rss: '',
        geeksforgeeks: '',
      },
      addons: {
        stats: false,
        streak: false,
        topLangs: false,
        trophy: false,
      },
    });

    setIsManualEdit(false);
    setMarkdown('');
    clearManualEdit();
    toast.success('All data reset successfully!');
  };

  return (
    <div className="sticky top-28">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 border-b border-gray-200">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('markdown')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm cursor-pointer ${
                activeTab === 'markdown'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Markdown
            </button>
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm cursor-pointer ${
                activeTab === 'edit'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Edit
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={resetToFormData}
              disabled={!hasData()}
              className={`p-2 rounded-lg transition-colors ${
                hasData()
                  ? 'bg-orange-500 hover:bg-orange-600 text-white cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              title={hasData() ? "Reset all data" : "No data to reset"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button
              onClick={handleCopy}
              disabled={!markdown || !markdown.trim()}
              className={`p-2 rounded-lg transition-colors ${
                markdown && markdown.trim()
                  ? 'bg-green-500 hover:bg-green-600 text-white cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              title={!markdown || !markdown.trim() ? "No data to copy" : copied ? "Copied!" : "Copy to clipboard"}
            >
              {copied ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
            <button
              onClick={handleDownload}
              disabled={!markdown || !markdown.trim()}
              className={`p-2 rounded-lg transition-colors ${
                markdown && markdown.trim()
                  ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              title={!markdown || !markdown.trim() ? "No data to download" : "Download README.md"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {activeTab === 'edit' ? (
            <textarea
              value={markdown}
              onChange={handleEditChange}
              className="w-full h-[calc(100vh-300px)] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 font-mono text-sm resize-none"
              placeholder="Edit your markdown here..."
            />
          ) : activeTab === 'markdown' ? (
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
              {markdown || 'Fill the form to see your README...'}
            </pre>
          ) : (
            <div className="prose max-w-none">
              {markdown ? renderPreviewUtil(markdown) : (
                <p className="text-gray-500">Fill the form to see your README preview...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
