import React from 'react';


export default function Playground() {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
      </nav>
    </header>
  );
}




















/*

// INLINE STYLING WITH JAVASCRIPT
// THIS IS USED IN React Native
const getStyles = ({ primary }) => ({
  header: {
    padding: '10px',
    marginTop: '10px',
    border: `4px solid ${primary}`,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    marginLeft: '10px',
    marginRight: '10px',
  },
});

export default function Playground({ primary }) {
  const styles = getStyles({ primary });
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a style={styles.link} href="#">Home</a>
        <a style={styles.link} href="#">About</a>
        <a style={styles.link} href="#">Blog</a>
      </nav>
    </header>
  );
}
*/