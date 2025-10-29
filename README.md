# MSBH Portfolio

[![CodeFactor](https://www.codefactor.io/repository/github/anashafsi/msbh/badge)](https://www.codefactor.io/repository/github/anashafsi/msbh)

A modern, responsive portfolio website built with Gatsby, React, and SCSS.

## Features

- Responsive design optimized for all devices
- Modern component-based architecture
- Automated code quality checks with ESLint and Prettier
- CI/CD pipeline with GitHub Actions
- SEO optimized with sitemap generation
- Accessible design following WCAG guidelines

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 22 or higher
- npm or yarn

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/AnasHafsi/MSBH.git
   cd MSBH
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure your environment**

   Copy `.env.example` to `.env.local` and update with your information:

   ```bash
   cp .env.example .env.local
   ```

4. **Customize your profile**

   Edit `src/config/profile.js` with your personal information:

   ```javascript
   export const PROFILE = {
       name: 'Your Name',
       city: 'Your City',
       title: 'UX/UI Designer',
       email: 'your.email@example.com',
   };
   ```

5. **Update social links**

   Edit `src/config/social.js` with your social media URLs.

6. **Start the development server**

   ```bash
   npm run develop
   ```

   Your site will be running at `http://localhost:8000`

## Available Scripts

- `npm run develop` - Start the development server
- `npm run start` - Alias for develop
- `npm run build` - Build the site for production
- `npm run serve` - Serve the production build locally
- `npm run clean` - Clean Gatsby cache and public directories
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix auto-fixable ESLint errors
- `npm run format` - Format code with Prettier

## Project Structure

```
MSBH/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── src/
│   ├── assets/          # SVG icons and images
│   ├── config/          # Configuration files
│   │   ├── profile.js   # Personal information
│   │   └── social.js    # Social media links
│   ├── pages/           # React page components
│   │   ├── components/  # Reusable components
│   │   └── *.js         # Page sections
│   ├── styles/          # SCSS stylesheets
│   └── utils/           # Utility functions and data
├── .env.example         # Environment variables template
├── .eslintrc.json       # ESLint configuration
├── .prettierrc.json     # Prettier configuration
├── gatsby-config.js     # Gatsby configuration
└── package.json         # Project dependencies
```

## Configuration

### Environment Variables

The following environment variables can be configured in `.env.local`:

- `GATSBY_SITE_URL` - Your production website URL (used for sitemap and SEO)

### Profile Configuration

Update your personal information in `src/config/profile.js`:

- Name
- City
- Professional title
- Email address

### Social Media

Update your social media URLs in `src/config/social.js`:

- Behance
- Instagram
- Dribbble
- LinkedIn

## Deployment

1. Build the production version:

   ```bash
   npm run build
   ```

2. The optimized files will be in the `public/` directory.

3. Deploy to your preferred hosting platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - Gatsby Cloud

## Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **PropTypes** for runtime type checking

Run checks before committing:

```bash
npm run lint
npm run format
```

## CI/CD

The project includes GitHub Actions workflows for:

- **CI Pipeline** (`.github/workflows/ci.yml`)
  - Linting
  - Code formatting checks
  - Build verification

- **OpenCommit** (`.github/workflows/opencommit.yml`)
  - Automated commit message generation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Anas Hafsi**

## Acknowledgments

- Built with [Gatsby](https://www.gatsbyjs.com/)
- Icons from custom SVG assets
- Emojis from [react-apple-emojis](https://github.com/jeremyckahn/react-apple-emojis)
