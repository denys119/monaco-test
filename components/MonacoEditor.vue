<template>
    <div ref="monacoEditor" style="height: 500px;"></div>
</template>

<script setup lang="ts">
/**
 * Import the basic languages.
 */
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution'
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'

import { editor, Uri } from 'monaco-editor';

const monacoEditor = ref(null);

onMounted(() => {
    if (!monacoEditor.value) return;
    const model = editor.createModel(
        "console.log('ceva')",
        "javascript",
        Uri.parse('file:///demo.js')
    );

    editor.create(monacoEditor.value, {
        model,
        theme: "vs-dark",
    });
})
</script>