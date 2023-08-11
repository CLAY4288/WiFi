// nextjs-app/utils/wifi.ts

type Wifi = {
  ip: string;
};

const wifi: Wifi = {
  ip: "1.92.168.l.0",
};

export function getWifi(): Wifi {
  return wifi;
}

export function setWifi(ip: string): void {
  wifi.ip = ip;
}