# Website Content Editing Manual

This website is powered by simple JSON data files located in the `src/data/` directory. You can edit these files to change text, images, colors, and layout configurations without touching the code.

## 📂 Data Directory: `src/data/`

| File | Purpose |
| :--- | :--- |
| [`theme.json`](src/data/theme.json) | Global colors, fonts, and grid layout settings. |
| [`site.json`](src/data/site.json) | Basic site metadata (Name, SEO title, Description). |
| [`home.json`](src/data/home.json) | Content for the Home page (Hero section, About me). |
| [`services.json`](src/data/services.json) | Services list and engagement models. |
| [`skills.json`](src/data/skills.json) | Skills categorized by type (e.g., Languages, Tools). |
| [`contact.json`](src/data/contact.json) | Contact links (LinkedIn, Email, etc.) and icons. |
| [`blog.json`](src/data/blog.json) | Blog posts content and metadata. |
| [`projects.json`](src/data/projects.json) | Portfolio projects content and metadata. |

---

## 🎨 1. Theme Configuration (`theme.json`)

Controls the visual look and layout of the site.

- **colors**: Defines the color palette for `light` and `dark` modes.
    - `accent`: The main brand color used for buttons, links, and highlights.
- **typography**: Sets the font families.
- **layout.grid**: Controls how many columns appear in lists.
    - `blogColumns`: Number of columns on the Blog page (e.g., `2` or `3`).
    - `serviceColumns`: Number of columns on the Services page.
    - `skillColumns`: Number of columns on the Skills page.

```json
"grid": {
    "blogColumns": 3,
    "serviceColumns": 3,
    "skillColumns": 3
}
```

---

## 🏠 2. Home Page (`home.json`)

- **hero**: The top section of the homepage.
    - `greeting`: "Hi, I'm..."
    - `name`: Your name (large text).
    - `role`: Your professional title.
    - `summary`: A brief intro paragraph.
    - `avatar`: Path to your profile picture (e.g., `/images/avatar.jpg`).
- **about**: The "About Me" section content.

---

## 🛠️ 3. Services (`services.json`)

- **services**: An array of service cards.
    - `title`: Name of the service.
    - `description`: A short 1-2 sentence summary.
    - `points`: An array of key features (displayed as a bulleted list).
- **engagement_models**: Getting hired options (e.g., Hourly, Fixed-Price).

```json
{
    "title": "Data Pipeline Design",
    "description": "Short description...",
    "points": [
        "Feature 1",
        "Feature 2",
        "Feature 3"
    ]
}
```

---

## ⚡ 4. Skills (`skills.json`)

A simple key-value map where the **Key** is the category title and the **Value** is an list of skills.

```json
{
    "Languages": ["Python", "SQL", "JavaScript"],
    "Cloud": ["AWS", "GCP"]
}
```

---

## ✍️ 5. Blog Posts (`blog.json`)

Each post is an object in the array.

- **slug** (Required): Unique URL identifier (e.g., `my-first-post`). **Must be unique.**
- **title**: Headline of the post.
- **description**: Short summary for the card.
- **pubDate**: Date in `YYYY-MM-DD` format.
- **tags**: Array of category tags (e.g., `["Data Engineering", "AWS"]`).
- **heroImage**: Path to the cover image.
- **heroImageStyle**: Optional CSS for the detail page image (e.g., `{"width": "50%"}`).
- **sections**: The content blocks.
    - `title`: Section sub-headline (Optional).
    - `content`: Array of content blocks.
        - `type`: "text" (Markdown supported) or "code".
        - `value`: The actual text or code.
        - `language`: (For code blocks only) e.g., `python`, `sql`.

---

## 💼 6. Projects (`projects.json`)

Similar structure to Blog, but with extra professional metadata.

- **company**: Client or Company name.
- **role**: Your role on the project.
- **slug**, **title**, **description**, **tags**, **sections**: Same as Blog.

---

## 📞 7. Contact (`contact.json`)

List of contact methods.

- **icon**: Keyword for the icon.
- **iconSvg**: Raw SVG string for the icon (allows usage of any custom icon).
- **label**: Display text (e.g., "LinkedIn").
- **value**: Text shown on screen.
- **url**: Where the link goes.

---

## ℹ️ 8. Site Metadata (`site.json`)

- **name**: Your name (used in the logo and page titles).
- **title**: Default browser tab title.
- **description**: SEO description for search engines.
