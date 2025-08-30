# Content Remixer

A content remixing tool using React, TailwindCSS, and AI-powered transformations.

## Features

1. **Paste the text** you want to remix
2. **Choose the remixing type** from various options
3. **Click the button** to apply the selected transformation
4. **View the remixed output** in real-time
5. **Copy to clipboard** functionality
6. **Responsive design** that works on all devices

## Remix Types Available

- **Summarize**: Condense long text into key points
- **Expand**: Add more detail and context
- **Simplify**: Make text easier to understand
- **Make Formal**: Convert to professional language
- **Make Casual**: Convert to conversational tone
- **Make Creative**: Add creative flair and inspiration

## Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Claude API** - AI-powered content transformation (ready to integrate)

## Getting Started

### Prerequisites

- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or download** this project
2. **Navigate to the project directory**:
   ```bash
   cd remixer
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## How to Use

1. **Select a remix type** from the dropdown menu
2. **Paste your text** in the input box
3. **Click "Remix Content"** to process
4. **View the transformed content** in the output box
5. **Copy to clipboard** or clear as needed

## Current Status

✅ **Basic app structure** - Complete  
✅ **UI components** - Complete  
✅ **State management** - Complete  
✅ **Responsive design** - Complete  
✅ **Demo transformations** - Complete  

🔄 **Next steps**:
- Integrate with Claude API for real AI transformations
- Add more remix types
- Implement user authentication
- Add content history
- Deploy to Vercel

## Project Structure

```
remixer/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── postcss.config.js     # PostCSS configuration
```

## Customization

### Adding New Remix Types

To add new remix types, edit the `remixOptions` array in `src/App.jsx`:

```javascript
const remixOptions = [
  // ... existing options
  { value: 'newType', label: 'New Type' }
]
```

Then add the corresponding case in the `simulateAIResponse` function.

### Styling

The app uses TailwindCSS classes. You can customize colors, spacing, and other design elements by modifying the classes in the JSX components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Any VPS with nginx

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ISC License - feel free to use this project for personal or commercial purposes.

---

**Happy Remixing! 🎨✨**
