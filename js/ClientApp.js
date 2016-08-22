var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var MyTitle = require('./MyTitle')
  
var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement
var MyFirstComponent = (
    div(null,
        MyTitleFact({title:'props are great', color:'rebeccapurple'}),
        React.createElement(MyTitle, {title:'use props everywhere',
         color:'mediumaquamarine'}),
        ce(MyTitle,{title:'props are the best!', color:'peru'})
    )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))