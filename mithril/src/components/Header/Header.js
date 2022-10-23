import styles from './header.styles.css';


export const Header = () => {
  return {
    view: () => (
      <header class={styles.header}>
        <div class="container">
          <h1>Tokens System</h1>
        </div>
      </header>
    )
  }
}