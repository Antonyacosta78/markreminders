import "reflect-metadata";
import { getContext, mount } from "svelte";
import { Capacitor } from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import "./app.css";
import App from "./App.svelte";
import { setupBrowserConnection, setupConnection } from "./storage/config/setup";

defineCustomElements(window);

const connectionSetup = Capacitor.getPlatform() !== "web" ? setupConnection() : setupBrowserConnection();

const context = new Map();
context.set('storage', { connection: { setup: connectionSetup } });

const app = mount(App, {
  target: document.getElementById("app")!,
  context
});

export default app;
