import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['highlight.js', 'highlight.js/lib/core'],
    },
    server: {
        port: 5174
    }
};

export default config;
