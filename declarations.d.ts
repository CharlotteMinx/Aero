// We need to tell TypeScript that when we write "import styles from './styles.css' we mean to load a module
declare module '*.css'; 

declare module "*.png" {
    const value: any;
    export default value;
  }