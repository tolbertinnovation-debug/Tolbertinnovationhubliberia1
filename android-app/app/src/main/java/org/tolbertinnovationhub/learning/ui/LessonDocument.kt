package org.tolbertinnovationhub.learning.ui

import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import org.jsoup.Jsoup

/** Read-only rich document renderer, not a website wrapper.
 * Scripts, cookies, storage, network, file access and native JS bridges are disabled.
 * Inline SVG diagrams, tables and HTML details remain intact offline.
 */
object LessonDocument {
    fun html(source: String, css: String, size: Int): String {
        val doc = Jsoup.parseBodyFragment(source)
        doc.select("script,iframe,object,embed,form,input,button,link,meta,base,style,audio,video").remove()
        doc.allElements.forEach { el ->
            el.attributes().asList().filter { it.key.startsWith("on", true) || it.key in setOf("srcdoc", "formaction") }.forEach { el.removeAttr(it.key) }
            if (el.hasAttr("href") && !el.attr("href").startsWith("https://") && !el.attr("href").startsWith("#")) el.removeAttr("href")
        }
        doc.select("img").forEach { el ->
            if (!el.attr("src").startsWith("data:image/")) el.replaceWith(org.jsoup.nodes.Element("p").text("Illustration: ${el.attr("alt").ifBlank { "view on the website" }}"))
        }
        // Preserve authored styles but disallow stylesheet imports and remote CSS resources.
        val safeCss = css.replace(Regex("@import[^;]+;", RegexOption.IGNORE_CASE), "")
            .replace(Regex("url\\([^)]*\\)", RegexOption.IGNORE_CASE), "none")
            .replace("</style", "", ignoreCase = true)
        return """<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; base-uri 'none'; form-action 'none'">
            <style>$safeCss
            :root{--primary:#142a50;--secondary:#c62235;--text:#1b2c45;--muted:#53657c;--border:#dce4ef;--bg:#fff}
            *{box-sizing:border-box}html,body{height:auto;overflow:auto;display:block}body{margin:0;padding:22px 20px 36px;background:#fff;color:#1b2c45;font-family:system-ui,sans-serif;font-size:${size}px;line-height:1.75;overflow-wrap:anywhere}
            body p,body li,body div,body span{font-size:inherit}h1,h2,h3,h4,h5{line-height:1.35;color:#142a50}h3{font-size:1.3em}h4{font-size:1.12em;margin-top:1.5em}
            table{display:block;max-width:100%;overflow:auto;border-collapse:collapse;font-size:.9em}td,th{border:1px solid #dce4ef;padding:10px;text-align:left;min-width:100px}th{background:#142a50!important;color:white!important}
            img,svg,figure{max-width:100%;height:auto;margin-left:0;margin-right:0}pre{overflow:auto;background:#edf3fa;padding:14px;border-radius:10px}blockquote{margin:18px 0;padding:14px 18px;background:#eaf4ff;border-left:4px solid #3665a1}
            details{border:1px solid #dce4ef;border-radius:10px;margin:10px 0;padding:12px}summary{font-weight:600;cursor:pointer;min-height:32px}a{color:#154991}button{display:none}
            </style></head><body>${doc.body().html()}</body></html>""".trimIndent()
    }
}

@Composable fun RichLesson(source: String, css: String, fontSize: Int, modifier: Modifier = Modifier, onLink: (String) -> Unit) {
    val context = LocalContext.current
    val html = remember(source, css, fontSize) { LessonDocument.html(source, css, fontSize) }
    val view = remember {
        WebView(context).apply {
            settings.javaScriptEnabled = false
            settings.domStorageEnabled = false
            settings.allowFileAccess = false
            settings.allowContentAccess = false
            settings.blockNetworkLoads = true
            settings.blockNetworkImage = true
            settings.setSupportZoom(true)
            settings.builtInZoomControls = true
            settings.displayZoomControls = false
            webViewClient = object : WebViewClient() {
                override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                    if (request.isForMainFrame && request.hasGesture() && request.url.scheme == "https") onLink(request.url.toString())
                    return true
                }
            }
        }
    }
    DisposableEffect(view) { onDispose { view.stopLoading(); view.destroy() } }
    AndroidView(factory = { view }, modifier = modifier, update = {
        if (it.tag != html) { it.tag = html; it.loadDataWithBaseURL("https://offline.tih.invalid/", html, "text/html", "UTF-8", null) }
    })
}
