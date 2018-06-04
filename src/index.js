import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';



function formatDate(date){
    return date.toLocaleDateString();
}

function Comment(props){
    return(
        <div className="Comment">
            <div className="user_Card">
                <img className="avatar" 
                src={props.author.avatarUrl} 
                alt={props.author.name} 
                />
                <div className="user_name">
                    {props.author.name}
                </div>
            </div>
            <div className="user_comment">
                {props.text}
            </div>
            <div className="comment_data">
            {formatDate(props.date)}
            </div>
        </div>
    );
}
const comment = {
    date: new Date(),
    text: 'I complete this application on React on',
    author:{
        name: 'Frise Hunter',
        avatarUrl: `https://prikolnye-kartinki.ru/img/picture/Aug/20/f64734c7a57875a9ea401c43838aa1c7/6.jpg`
    }
}
ReactDOM.render(
    <Comment
    date = {comment.date}
    text = {comment.text}
    author = {comment.author}
    />,
    document.getElementById('root'),   
);  
// registerServiceWorker();
