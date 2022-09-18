import React, {useState} from "react";
import './App.css';
import { courseBookDictionary } from "./courseBook";
import { courseVideoDictionary } from "./courseVideo";

import linkedin from "./media/linkedin-icon.svg";
import twitter from "./media/twitter-icon.svg";
import github from "./media/github-icon.svg";
import imgurl from "./media/hero-img.png";
import viewImg from "./media/view-img.png";

const courseDictionary = {
  CourseBook: courseBookDictionary,
  CourseVideo: courseVideoDictionary
};

const courseList = Object.keys(courseDictionary);


function App() {
  const [currentDictionary, setCurrentDictionary] = useState({});
  const [currentList, setCurrentList] = useState([]);
  const [currentItemList, setCurrentItemList] = useState([]);

  function onClickHandler(item){
    var inputCategory = item;
    var currentDictTemp = courseDictionary[inputCategory];
    var list = Object.keys(currentDictTemp);

    setCurrentList(list);
    setCurrentDictionary(currentDictTemp);
  }

  function checkBreak(index){
    if(index === 1){
      return "\n\n\n";
    }

    return "";
  }

  function onClickItemHandler(item){
    setCurrentItemList(currentDictionary[item]);
  }

  return(
    <div className="App">
      <div className="header">
        <div className="navigate">
          <h1 style={{fontWeight: "bold"}}>VIDYA</h1>
        </div>
      </div>

      <img 
        src={imgurl} 
        style={{
          margin: "1rem auto",
          maxWidth: "100%",
          maxHeight: "75%",
          padding: "0.5rem"}} 
        alt="hero-img"
      />

      <div className="block-body">
        <div className="body-container">
          <small 
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "1rem"
            }}>
              {" "}
              Learn Here 📚
            </small>

            <div className="hero">
              {courseList.map((item) => (
                <span 
                  key={item}
                  onClick={() => onClickHandler(item)}
                  style={{
                    fontSize: "1.5rem",
                    margin: "1rem",
                    border: "1px solid orange",
                    backgroundColor: "#71717a",
                    padding: "0.5rem",
                    cursor: "pointer",
                    borderRadius: "0.5rem",
                    boxShadow: "5px 5px 15px rbba(0, 0 , 0, 0.5)"
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-section">
              {currentList.map((item, index) => (
                <button 
                  key={item}
                  onClick={() => onClickItemHandler(item)}
                  
                  style={{
                    fontSize: "1.25rem",
                    margin: "1rem",
                    borderRadius: "10rem",
                    padding: "1rem",
                    cursor: "pointer"
                  }}
                >
                  {item}
                  {checkBreak(index)}
                </button>
              ))}
            </div>

            <div className="body-section">
              {currentItemList.map((item) => (
                <div className="section-block" key={item.Book || item.Video}>
                  <div className="section-block-author">
                    <div 
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      maxWidth: "90%",
                      color: "#fff7ed"     
                    }}>
                      {item.Book || item.Video}
                    </div>

                    <div 
                    style={{
                      fontWeight: "bold",
                      marginTop: "0.5rem"
                    }}>
                      {item.Author || item.Tutor}
                    </div>
                    <small>{"View Here"}</small>
                    <a href={item.Link}>
                      <img 
                      style={{
                        marginLeft: "0.5rem",
                        height: "1rem",
                        width: "1rem"
                      }}
                      src={viewImg} 
                      alt="viewImg" />
                    </a>
                  </div>
                </div>

              ))}
            </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container" style={{bottom: "0"}}>
          <hr style={{width: "40%"}}/>
          <div className="footer-social-link-bar">
            <a href="https://www.linkedin.com/in/anuj-kamboj" className="footer-social-link">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.linkedin.com/in/anuj-kamboj" className="footer-social-link">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/anuj-kamboj" className="footer-social-link">
              <img src={github} alt="github" />
            </a>
          </div>
          <small style={{marginTop: "1rem", color:"#fff7ed" }}>Anuj Kamboj | Copyright &copy;</small>
        </div>
      </div>
    </div>
  );
}

export default App;
