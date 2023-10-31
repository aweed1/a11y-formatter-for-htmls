export const baseTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- A11ygator meta stuff -->
    {{#id}}
    <meta name="id" content="{{id}}">
    {{/id}}
    
    {{#originalCreator}}
    <meta name="originalCreator" content="{{originalCreator}}">
    {{/originalCreator}}
    
    {{#filename}}
    <meta name="filename" content="{{filename}}">
    {{/filename}}

    {{#remediationComplete}}
    <meta name="remediationComplete" content="{{remediationComplete}}">
    {{/remediationComplete}}

    {{#format}}
    <meta name="format" content="{{format}}">
    {{/format}}

    {{#language}}
    <meta name="language" content="{{language}}">
    {{/language}}

    {{#partsRemediated}}
    <meta name="partsRemediated" content="{{partsRemediated}}">
    {{/partsRemediated}}

    {{#remediationComments}}
    <meta name="remediationComments" content="{{remediationComments}}">
    {{/remediationComments}}

    {{#remediationStatus}}
    <meta name="remediationStatus" content="{{remediationStatus}}">
    {{/remediationStatus}}

    {{#title}}
    <meta name="title" content="{{title}}">
    {{/title}}

    {{#type}}
    <meta name="type" content="{{type}}">
    {{/type}}

    {{#accessibilityFeatures}}
    <meta name="accessibilityFeatures" content="{{accessibilityFeatures}}">
    {{/accessibilityFeatures}}

    {{#accessibilityHazards}}
    <meta name="accessibilityHazards" content="{{accessibilityHazards}}">
    {{/accessibilityHazards}}

    {{#accessibilitySummary}}
    <meta name="accessibilitySummary" content="{{accessibilitySummary}}">
    {{/accessibilitySummary}}

    {{#identifiers}}
    <meta name="identifiers" content="{{identifiers}}">
    {{/identifiers}}

    {{#publisher}}
    <meta name="publisher" content="{{publisher}}">
    {{/publisher}}

    {{#relatedIdentifiers}}
    <meta name="relatedIdentifiers" content="{{relatedIdentifiers}}">
    {{/relatedIdentifiers}}

    {{#remediationAspects}}
    <meta name="remediationAspects" content="{{remediationAspects}}">
    {{/remediationAspects}}

    {{#remediatedBy}}
    <meta name="remediatedBy" content="{{remediatedBy}}">
    {{/remediatedBy}}

    {{#seriesPosition}}
    <meta name="seriesPosition" content="{{seriesPosition}}">
    {{/seriesPosition}}

    {{#seriesTitle}}
    <meta name="seriesTitle" content="{{seriesTitle}}">
    {{/seriesTitle}}

    {{#seriesType}}
    <meta name="seriesType" content="{{seriesType}}">
    {{/seriesType}}

    {{#remediationSource}}
    <meta name="remediationSource" content="{{remediationSource}}">
    {{/remediationSource}}

    {{#title}}
      <title>{{title}}</title>
    {{/title}}
    
    {{^title}}
        <title>No title exists for this document</title> 
    {{/title}}
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
