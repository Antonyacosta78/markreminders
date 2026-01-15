import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';
import sqliteParams from "./config";
import dataSource from "./data-source";

customElements.define('jeep-sqlite', JeepSqlite);

export async function setupConnection() {
  await sqliteParams.connection.checkConnectionsConsistency().catch((e) => {
    console.log(e);
    return {};
  });

  await dataSource.dataSource.initialize();
  if (dataSource.dataSource.isInitialized) {
    await dataSource.dataSource.runMigrations();
  }
  if (sqliteParams.platform === "web") {
    await sqliteParams.connection.saveToStore(dataSource.dbName);
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
          await sqliteParams.connection.initWebStore();
          await setupConnection();
          resolve();
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
          reject(new Error(`Error: ${err}`));
        });
    });
  })
  
}
