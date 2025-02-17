export const adminPath: string = process.env['APP_ADMIN_PATH'] || '/admin';
export const baseURL: string = process.env['APP_BASE_URL'] || 'http://localhost:3000';
export const isClientRenderMode: boolean = process.env['APP_RENDER_MODE'] === 'client' || false;
