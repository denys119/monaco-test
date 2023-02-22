/**
 * Import the basic languages.
*/
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution'
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution'
/**
 * Import the languages workers.
 */
// @ts-ignore
import editorWorker from 'monaco-editor-core/esm/vs/editor/editor.worker?worker';
// @ts-ignore
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
// @ts-ignore
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
// @ts-ignore
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
// @ts-ignore
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
// @ts-ignore
import vueWorker from 'monaco-volar/vue.worker?worker';

export default defineNuxtPlugin(() => {
    
    loadMonacoWorkers();
})
/**
 * Load the workers for ts, json, css, html and javascript languages.
 */
 function loadMonacoWorkers() {
    (self as any).MonacoEnvironment = {
        async getWorker (_: any, label: string) {
            if (label === 'typescript' || label === 'javascript') {
                console.log("Label", label);
                return new TsWorker()
            }
            if (label === 'json') return new JsonWorker()
            if (label === 'css') return new CssWorker()
            if (label === 'html') return new HtmlWorker()
            if (label === "vue") {
                return new vueWorker();
            }
            return new editorWorker()
        }
    }
}