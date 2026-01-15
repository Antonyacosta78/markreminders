import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.matoxina.markreminders",
  appName: "MarkReminders",
  webDir: "dist",
  server: {
    url: "http:/192.168.1.106:5173",
  },
  plugins: {
    CapacitorSQLite: {
      androidIsEncryption: false,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: "Unlock Reminders",
        biometricSubTitle: "Unlock using your biometric",
      },
    },
  },
};

export default config;
