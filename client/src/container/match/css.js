import { css } from 'styled-components';

export default {
  container: css`
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    flex: 1;
    background-color: rgb(250,250,250);
    flex-direction: column;
    align-items: center;
    display: flex;
  `,
  h1: css`
    font-size: 1.5em;
    text-align: center;
    padding: 0;
    margin: 0;
  `,
  main_card: css`
    display: flex;
    align-items: center;
    flex:1;
    width: 100%;
  `,
  container_card: css`
    display: flex;
    flex-direction: row;
    flex: 0.7;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(250,250,250);
    width: 100%;
  `,
  header_card: css`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 20vh;
  `,
  card: css`
    display: flex;
    flex: 0.3;
    height: 30vh;
    justify-content: center;
    align-items: center;
    background: transparent;
  `,
  imgcard: css`
    width: 500px;
    height: 500px;
    border-radius: 30px;
    padding: 10px;
  `
};
