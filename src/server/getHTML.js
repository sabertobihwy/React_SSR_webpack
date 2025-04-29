export const getHTML = (getLink, getScript, AppRouterStr, preloadedState) => {

    const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${getLink()}
</head>

<body>
    <div id="root">${AppRouterStr}</div>
    
</body>
<script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
</script>
${getScript()}
</html>`

    return html
}