<template>
	<div id="container" ref="monacoeditorcontainer" style="height: 500px;"></div>
</template>

<script setup lang="ts">
import * as onigasm from 'onigasm';
// @ts-ignore
import onigasmWasm from 'onigasm/lib/onigasm.wasm?url';
import { editor, Uri } from 'monaco-editor-core';
import { loadGrammars, loadTheme, prepareVirtualFiles } from 'monaco-volar';

const monacoeditorcontainer = ref<HTMLElement | null>(null);

const loadOnigasm = async () => onigasm.loadWASM(onigasmWasm);

onMounted(() => {
    Promise.all([ loadOnigasm(), loadTheme() ]).then(([, theme]) => {
        // Check for valid element.
        if (!monacoeditorcontainer.value) return;

        // Prepare the virtual files.
        prepareVirtualFiles();

        const model = editor.createModel('<template></template>', 'vue', Uri.parse('file:///demo.vue'));
        // Create the editor.
        const editorInstance = editor.create(monacoeditorcontainer.value, {
            theme,
            model,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            minimap: {
                enabled: false,
            },
            inlineSuggest: {
                enabled: false,
            },
        });

        loadGrammars(editorInstance);
    });
});
</script>

