// Newspaper functionality
// TypeScript implementation for Rust Newspaper grid

/**
 * Interface for article data
 */
interface ArticleData {
  title: string;
  content: string;
  isCode: boolean;
}

/**
 * Class to manage the newspaper grid
 */
class NewspaperGrid {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
    if (!this.container) {
      throw new Error(`Container element with ID "${containerId}" not found`);
    }
    this.initializeEventListeners();
  }

  /**
   * Set up event listeners for the newspaper controls
   */
  private initializeEventListeners(): void {
    const addArticleBtn = document.getElementById('add-article-btn');
    const addCodeBtn = document.getElementById('add-code-btn');

    if (addArticleBtn) {
      addArticleBtn.addEventListener('click', () => this.addArticle({
        title: 'Article Title',
        content: '<p>Add any content here.</p><p>This can be formatted text, lists, or anything else.</p>',
        isCode: false
      }));
    }

    if (addCodeBtn) {
      addCodeBtn.addEventListener('click', () => this.addArticle({
        title: 'Code Block',
        content: '// Rust code here\nfn main() {\n    println!("Hello, Rust Newspaper!");\n}',
        isCode: true
      }));
    }
  }

  /**
   * Add a new article to the grid
   */
  public addArticle(data: ArticleData): void {
    const article = document.createElement('div');
    article.className = 'article';

    const contentClass = data.isCode ? 'code-content' : 'text-content';

    article.innerHTML = `
      <div class="article-title" contenteditable="true">${data.title}</div>
      <div class="${contentClass}" contenteditable="true">${data.content}</div>
    `;

    this.container.appendChild(article);
  }
}

// Initialize the newspaper when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    const newspaper = new NewspaperGrid('article-container');
    console.log('Newspaper grid initialized');
  } catch (error) {
    console.error('Failed to initialize newspaper:', error);
  }
});
