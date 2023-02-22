// https://nuxt.com/docs/api/configuration/nuxt-config
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
export default defineNuxtConfig({

    vite: {
        define: {
            // Fix broken dependencies of monaco-textmate
            'process.env': {
                VSCODE_TEXTMATE_DEBUG: false
            }
        }
    }
})
