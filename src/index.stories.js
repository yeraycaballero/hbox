import "./index.ts";
import { html } from "lit-html";
import { centered } from "@webcomponents-dev/decorators-lit";

export default {
  decorators: [centered],
};

export const story1 = () => html`
  <cmd-hbox id="1" align="right" gap="5">
    <div slot="col1">Col1</div>
    <div slot="col2">Col2</div>
    <div slot="col3">Col3</div>
    <div slot="col4">Col4</div>
    <div slot="col5">Col5</div>
    <div slot="col6">Col6</div>
  </cmd-hbox>
  <br />

  <cmd-hbox id="1" align="left" gap="10">
    <div slot="col1">Col1</div>
    <div slot="col2">Col2</div>
    <div slot="col3">Col3</div>
    <div slot="col4">Col4</div>
    <div slot="col5">Col5</div>
    <div slot="col6">Col6</div>
  </cmd-hbox>

  <br />
  <cmd-hbox id="1" align="justify" gap="10">
    <div slot="col1">Col1</div>
    <div slot="col2">Col2</div>
    <div slot="col3">Col3</div>
    <div slot="col4">Col4</div>
    <div slot="col5">Col5</div>
    <div slot="col6">Col6</div>
  </cmd-hbox>
`;

/**
 *
 * Horizontal container contains columns
 *
 *
 *
 *
 * styles
 *
 * <cmd-hbox id="1"
 *  <div slot="col1"></div>
 *  <div slot="col2"></div>
 *  <div slot="col3"></div>
 *  <div slot="col4"></div>
 *  <div slot="col5"></div>
 * <cmd-box>
 */
