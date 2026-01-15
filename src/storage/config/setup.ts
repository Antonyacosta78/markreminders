import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';
import config from "./config";
import dataSource from "./data-source";

customElements.define("jeep-sqlite", JeepSqlite);

export async function setupConnection() {
  await config.connection.checkConnectionsConsistency().catch((e) => {
    console.log(e);
    return {};
  });

  await dataSource.dataSource.initialize();
  if (dataSource.dataSource.isInitialized) {
    await dataSource.dataSource.runMigrations();
  }
  if (config.platform === "web") {
    await config.connection.saveToStore(dataSource.dbName);
  }
}

export function setupBrowserConnection(): Promise<void> {
  return new Promise((resolve, reject) => {
    window.addEventListener("DOMContentLoaded", async () => {
      const jeepEl = document.createElement("jeep-sqlite");
      document.body.appendChild(jeepEl);
      customElements
        .whenDefined("jeep-sqlite")
        .then(async () => {
          await config.connection.initWebStore();
          await setupConnection();
          resolve();
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
          reject(new Error(`Error: ${err}`));
        });
    });
  });
}
