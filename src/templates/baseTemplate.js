export const baseTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- A11ygator meta stuff -->
    <meta name="id" content="{{id}}">
    <meta name="originalCreator" content="{{originalCreator}}">
    <meta name="filename" content="{{filename}}">
    <meta name="remediationComplete" content="{{remediationComplete}}">
    <meta name="format" content="{{format}}">
    <meta name="language" content="{{language}}">
    <meta name="partsRemediated" content="{{partsRemediated}}">
    <meta name="remediationComments" content="{{remediationComments}}">
    <meta name="remediationStatus" content="{{remediationStatus}}">
    <meta name="title" content="{{title}}">
    <meta name="type" content="{{type}}">
    <meta name="accessibilityFeatures" content="{{accessibilityFeatures}}">
    <meta name="accessibilityHazards" content="{{accessibilityHazards}}">
    <meta name="accessibilitySummary" content="{{accessibilitySummary}}">
    <meta name="identifiers" content="{{identifiers}}">
    <meta name="publisher" content="{{publisher}}">
    <meta name="relatedIdentifiers" content="{{relatedIdentifiers}}">
    <meta name="remediationAspects" content="{{remediationAspects}}">
    <meta name="remediatedBy" content="{{remediatedBy}}">
    <meta name="seriesPosition" content="{{seriesPosition}}">
    <meta name="seriesTitle" content="{{seriesTitle}}">
    <meta name="seriesType" content="{{seriesType}}">
    <meta name="remediationSource" content="{{remediationSource}}">
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
