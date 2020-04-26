import { css } from "lit-element";
export const styles = css`
  :host {
    --cmd-hbox-background-color: lightgray;
    --cmd-hbox-padding: 20px;
    --cmd-hbox-border: 2px solid gray;
    --cmd-hbox-border-radius: 10px;
    --cmd-hbox-width: 60%;
    --cmd-hbox-height: auto;
    --cmd-hbox-background-image: linear-gradient(to bottom right, gray, white);

    display: flex;
    align-items: center;
    width: var(--cmd-hbox-width, 100%);
    padding: var(--cmd-hbox-padding, 5px);
    border: var(--cmd-hbox-border, 0);
    border-radius: var(--cmd-hbox-border-radius, 0);
    background-color: var(--cmd-hbox-background-color, transparent);
    background-image: var(--cmd-hbox-background-image, none);
  }

  :host([align="left"]) {
    justify-content: flex-start;
  }

  :host([align="right"]) {
    justify-content: flex-end;
  }

  :host([align="center"]) {
    justify-content: center;
  }

  :host([align="justify"]) {
    justify-content: space-between;
  }

  ::slotted(*:not(:first-child)) {
    margin-left: var(--cmd-hbox-gap, 5px);
  }
`;
