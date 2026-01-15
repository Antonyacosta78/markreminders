import "reflect-metadata";
import { mount } from "svelte";
import { Capacitor } from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import "./app.css";
import App from "./App.svelte";
import {
  setupBrowserConnection,
  setupConnection,
} from "./storage/config/setup";
import dataSource from "./storage/config/data-source";

defineCustomElements(window);

const platform = Capacitor.getPlatform();

const connectionSetup =
  platform !== "web" ? setupConnection() : setupBrowserConnection();

const context = new Map();
context.set("storage", {
  connection: { setup: connectionSetup },
  dataSource: dataSource.dataSource,
});

if (platform === "web") {
  // used as a debug tool
  // @ts-ignore
  window.db = dataSource.dataSource;
}

const app = mount(App, {
  target: document.getElementById("app")!,
  context
});

export default app;
