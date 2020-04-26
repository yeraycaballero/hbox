import {
  LitElement,
  html,
  css,
  CSSResultArray,
  customElement,
  property,
} from "lit-element";

import { styleMap } from "lit-html/directives/style-map";

import { styles } from "./hbox.css.js";

@customElement("cmd-hbox")
export default class HBox extends LitElement {
  @property({ type: String, reflect: true })
  id = "";

  @property({ type: String, reflect: true })
  align: "left" | "center" | "right" | "justify" = "left";

  @property({ type: Number, reflect: true })
  gap = 5;

  // @property({ type: Number, reflect: true })
  // cols = 6;

  static get styles(): CSSResultArray {
    return [styles];
  }

  render() {
    let st = styleMap({ "--cmd-hbox-gap": `${this.gap}%` });

    return html`
      <slot name="col1" style=${st}></slot>
      <slot name="col2" style=${st}></slot>
      <slot name="col3" style=${st}></slot>
      <slot name="col4" style=${st}></slot>
      <slot name="col5" style=${st}></slot>
    `;

    // Any number of cols

    // let st = styleMap({ "--cmd-hbox-gap": `${this.gap}%` });
    // let cols = [...Array(this.cols + 1).keys()].slice(1);

    // return html`
    //   ${cols.map((k) => html`<slot name="col${k}" style=${st}></slot> `)}
    // `;
  }
}
