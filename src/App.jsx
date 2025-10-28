import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import FormSection from './components/FormSection';
import Preview from './components/Preview';

const STORAGE_KEY = 'readme-generator-formdata';

function App() {
  const [formData, setFormData] = useState(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error('Failed to load saved data:', error);
    }

    return {
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
    };
  });

  // Save to localStorage whenever formData changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  }, [formData]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <FormSection formData={formData} setFormData={setFormData} />
          </div>

          <div>
            <Preview formData={formData} setFormData={setFormData} />
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-12 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            Built with React & TailwindCSS by{' '}
            <a
              href="https://ardipermana.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline font-semibold"
            >
              Ardi Permana
            </a>
            {' | '}
            <a
              href="https://github.com/ardipermana59/readme-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
