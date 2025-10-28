# README Generator

A modern, interactive README.md generator built with React and Tailwind CSS. Create professional README files for your GitHub projects with ease!

## Live Demo

**Try it now:** [https://readme-generator.ardipermana.my.id/](https://readme-generator.ardipermana.my.id/)

Hosted on Vercel for fast and reliable performance.

## Features

- **Interactive Form Interface** - Easy-to-use form with real-time preview
- **Comprehensive Sections** - Add project title, description, features, tech stack, installation, usage, and more
- **Skills & Technologies** - Search and select from 100+ technology icons with color-coded badges
- **Social Media Links** - Add your social profiles with beautiful, colorful icons
- **Live Markdown Preview** - See your README as you type
- **Copy to Clipboard** - One-click copy for easy integration
- **Local Storage** - Auto-save your progress
- **Manual Edit Support** - Edit markdown directly with preserved changes
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Toastify** - Beautiful notifications
- **Simple Icons CDN** - Colorful brand icons without backgrounds

## Project Structure

```
readme-gen/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Application header
│   │   ├── FormSection.jsx     # Main form component
│   │   └── Preview.jsx         # Markdown preview component
│   ├── data/
│   │   ├── skillsData.js       # Technology/skills database
│   │   └── socialData.jsx      # Social media platforms data
│   ├── utils/
│   │   ├── markdownGenerators.js   # Markdown generation utilities
│   │   ├── markdownRenderer.jsx    # Markdown rendering component
│   │   └── storageUtils.js         # Local storage management
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
├── LICENSE
└── README.md
```

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/ardipermana59/readme-generator.git
cd readme-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Usage

1. **Fill in the Form** - Enter your project details in the form sections:
   - Project title and description
   - Features and highlights
   - Technologies and skills used
   - Installation and usage instructions
   - Contributing guidelines
   - License information
   - Social media links

2. **Search Technologies** - Use the search bar to find and add technology badges with ease

3. **Preview** - Check the live preview on the right side to see how your README will look

4. **Copy & Use** - Click the "Copy Markdown" button to copy the generated markdown to your clipboard

5. **Manual Editing** - Switch to manual edit mode if you want to customize the markdown directly

## Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Configure build settings (Vite preset is auto-detected)
4. Deploy!

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add some NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Author

**Ardi Permana**

- Website: [https://www.ardipermana.my.id//](https://www.ardipermana.my.id//)

## Acknowledgments

- Icons provided by [Simple Icons](https://simpleicons.org/)
- Technology badges from [cdn.simpleicons.org](https://cdn.simpleicons.org/)
- Built with inspiration from the GitHub README community

---

Thank you for using README Generator! If you find this tool helpful, please consider giving it a star on GitHub.

Made with ❤️ by Ardi Permana
