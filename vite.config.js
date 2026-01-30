import vue from '@vitejs/plugin-vue2'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default {
    plugins: [
        vue(), //
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        // Automatically resolve index.vue
        extensions: ['.js', '.vue', '.json'],
    },
    server: {
        port: 3001,
        proxy: {
            // '/config.json': 'http://localhost:3000/config.json'
            '/config.json': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                bypass: (request) => {
                    request.url = '/config.json'
                },
            },
        },
    },
}
