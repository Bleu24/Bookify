# Bookify 📚

A modern, minimalist personal library management application built with vanilla JavaScript. Keep track of your books, manage your reading status, and organize your personal library with a clean, dark-themed interface.

![Bookify Empty State](https://github.com/user-attachments/assets/1b1c017f-4190-4044-854a-d3fbc61f4a32)

## ✨ Features

- **Add Books**: Easily add books to your library with title, author, pages, and reading status
- **Status Management**: Track your reading progress with three states: Unread → Reading → Read
- **Persistent Storage**: Your library is automatically saved to browser localStorage
- **Delete Books**: Remove books from your library with a single click
- **Responsive Design**: Clean, card-based layout that works across different screen sizes
- **Dark Theme**: Easy-on-the-eyes dark color scheme
- **Modal Interface**: Intuitive modal dialog for adding new books

![Add Book Modal](https://github.com/user-attachments/assets/9025d12f-cc1b-4827-bffd-22f6b4b01982)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bleu24/Bookify.git
   cd Bookify
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser, or
   - Serve it via a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Start managing your library!**
   - Click the "Add" button to add your first book
   - Fill in the book details in the modal
   - Click "Add Book to Library" to save it
   - Use the status button to cycle through reading states
   - Click the delete icon to remove books

![Library with Books](https://github.com/user-attachments/assets/28f399a5-aacd-4519-b37e-63c4cb56f867)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks - pure, lightweight JavaScript
- **Local Storage API**: Client-side data persistence
- **SVG Icons**: Lucide icon set for clean, scalable icons
- **Custom Fonts**: ArchivoBlack and Kanit fonts for typography

## 📁 Project Structure

```
Bookify/
├── index.html          # Main HTML file
├── main.js            # Core JavaScript functionality
├── style.css          # Main stylesheet with CSS variables
├── fonts.css          # Font face declarations
├── normalize.css      # CSS reset for cross-browser consistency
├── assets/
│   └── book_placeholder.png  # Default book cover image
├── fonts/
│   ├── ArchivoBlack-Regular.woff2
│   ├── ArchivoBlack-Regular.woff
│   ├── Kanit-Regular.woff2
│   └── Kanit-Regular.woff
└── utils/
    └── refreshCardId.js  # Utility for managing card IDs
```

## 💡 How to Use

### Adding Books
1. Click the "Add" button in the top-right corner
2. Fill in the required fields:
   - **Title**: The book's title
   - **Author**: The book's author
   - **Pages**: Number of pages
   - **Status**: Reading status (defaults to "Unread")
3. Click "Add Book to Library"

### Managing Reading Status
- Click the status button on any book card
- Status cycles through: **Unread** → **Reading** → **Read**
- Changes are automatically saved

### Removing Books
- Click the trash icon in the top-right corner of any book card
- The book will be immediately removed from your library

## 🎨 Design Features

- **Dark Theme**: Carefully crafted color palette using CSS custom properties
- **Responsive Grid**: Books are displayed in a responsive 3-column grid
- **Smooth Animations**: Hover effects and transitions for better UX
- **Modal Dialog**: Clean modal interface for adding books
- **Visual Hierarchy**: Clear typography and spacing for excellent readability

## 🔮 Future Enhancements

- [ ] Book search and filtering functionality
- [ ] Export/import library data
- [ ] Book cover image uploads
- [ ] Reading progress tracking with dates
- [ ] Book ratings and reviews
- [ ] Categories and tags
- [ ] Reading statistics and insights
- [ ] Sync across devices
- [ ] Book recommendations
- [ ] Goodreads integration

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

© 2025 Bleu24. All rights reserved.

## 🔗 Links

- **GitHub**: [Bleu24](https://github.com/Bleu24)
- **Repository**: [Bookify](https://github.com/Bleu24/Bookify)

---

Built with ❤️ using vanilla web technologies. No frameworks, no build process, no complications - just simple, effective book management.