export interface Client {
  id: string;
  name: string;
  blocked: boolean;
}

export const BLOCK_CLIENT = 'BLOCK_CLIENT';

export function blockClient(client: Client): Client {
  return { ...client, blocked: true };
}