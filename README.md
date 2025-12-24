# Sasi Rathinam - Portfolio Website

This text is the source code for my personal portfolio website, built with [Astro](https://astro.build).

## 🚀 Project Structure

```text
/
├── public/           # Static assets
├── src/
│   ├── components/   # UI Components (Header, Hero, Footer)
│   ├── content/      # Markdown content for Blog and Projects
│   ├── layouts/      # Global page layouts
│   ├── pages/        # Route pages
│   └── styles/       # Global CSS and tokens
└── astro.config.mjs  # Configuration
```

## 🛠️ Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the dev server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## 📦 Deployment

This site is configured to be deployed to **GitHub Pages**.

### Automation with GitHub Actions

The repository includes an Astro configuration ready for GitHub Pages. To deploy:

1.  Go to your GitHub Repository Settings.
2.  Navigate to **Pages**.
3.  Under "**Build and deployment**", select **GitHub Actions** as the source.
4.  Astro's default workflow should pick this up, or you can create a `.github/workflows/deploy.yml` with the standard Astro deploy script.

## 📝 Content Management

*   **Blog Posts:** Add new `.md` files to `src/content/blog/`.
*   **Projects:** Add new case studies to `src/content/projects/`.
*   **Frontmatter:** Ensure you include required fields like `title`, `description`, `pubDate`.
