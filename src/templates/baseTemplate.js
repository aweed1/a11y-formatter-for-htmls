export const baseTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="id" content="{{id}}">
    <meta name="title" content="{{title}}">
    <meta name="description" content="{{description}}">
    <meta name="publisher" content="{{publisher}}">
    <meta name="subject" content="{{subject}}">
    <meta name="date" content="{{date}}">
    <meta name="source" content="{{source}}">
    <meta name="creator" content="{{creator}}">
    <meta name="format" content="{{format}}">
    <meta name="license" content="{{license}}">
    <meta name="lang" content="{{lang}}">
    <title>{{title}}</title>
</head>
<body>
    <div class="wrapper">

        <main class="content">
            <div class="container" role="main">
                <h1 class="title">{{title}}</h1>
                <div>{{content}}</div>
            </div>
        </main>

        <footer role="contentinfo" class="footer">
            <div class="metadata">
                <p>Published date</p>
                <p>Link to copyright page if it exists</p>
            </div>
        </footer>

    </div>
</body>
</html>
`
